(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hl="170",Es={ROTATE:0,DOLLY:1,PAN:2},xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},md=0,_c=1,gd=2,iu=1,su=2,Yn=3,wi=0,Vt=1,Dt=2,bi=0,ws=1,vc=2,xc=3,Mc=4,_d=5,ki=100,vd=101,xd=102,Md=103,yd=104,Sd=200,bd=201,Td=202,Ed=203,Ga=204,za=205,wd=206,Ad=207,Cd=208,Rd=209,Pd=210,Ld=211,Dd=212,Id=213,Fd=214,Ha=0,Va=1,Wa=2,Rs=3,Xa=4,Ya=5,$a=6,qa=7,ru=0,Ud=1,Nd=2,Ti=0,Od=1,Bd=2,kd=3,ou=4,Gd=5,zd=6,Hd=7,au=300,Ps=301,Ls=302,Za=303,Ka=304,Go=306,ja=1e3,en=1001,Ja=1002,An=1003,Vd=1004,wr=1005,Ut=1006,Zo=1007,zi=1008,ii=1009,lu=1010,cu=1011,fr=1012,Vl=1013,Vi=1014,Kn=1015,Sr=1016,Wl=1017,Xl=1018,Ds=1020,hu=35902,uu=1021,du=1022,Sn=1023,fu=1024,pu=1025,As=1026,Is=1027,mu=1028,Yl=1029,gu=1030,$l=1031,ql=1033,po=33776,mo=33777,go=33778,_o=33779,Qa=35840,el=35841,tl=35842,nl=35843,il=36196,sl=37492,rl=37496,ol=37808,al=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,_l=37819,vl=37820,xl=37821,vo=36492,Ml=36494,yl=36495,_u=36283,Sl=36284,bl=36285,Tl=36286,Wd=3200,Xd=3201,vu=0,Yd=1,Mi="",sn="srgb",zs="srgb-linear",zo="linear",at="srgb",Ji=7680,yc=519,$d=512,qd=513,Zd=514,xu=515,Kd=516,jd=517,Jd=518,Qd=519,El=35044,Sc="300 es",jn=2e3,wo=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=Math.PI/180,wl=180/Math.PI;function Jn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function ef(i,e){return(i%e+e)%e}function Ko(i,e,t){return(1-t)*i+t*e}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const tf={DEG2RAD:xo};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,s,r,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],_=s[0],m=s[3],f=s[6],w=s[1],M=s[4],x=s[7],F=s[2],C=s[5],L=s[8];return r[0]=o*_+a*w+l*F,r[3]=o*m+a*M+l*C,r[6]=o*f+a*x+l*L,r[1]=c*_+h*w+u*F,r[4]=c*m+h*M+u*C,r[7]=c*f+h*x+u*L,r[2]=p*_+d*w+g*F,r[5]=p*m+d*M+g*C,r[8]=p*f+d*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,p=a*l-h*r,d=c*r-o*l,g=t*u+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=p*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jo.makeScale(e,t)),this}rotate(e){return this.premultiply(jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jo=new Ye;function Mu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nf(){const i=Ao("canvas");return i.style.display="block",i}const bc={};function sr(i){i in bc||(bc[i]=!0,console.warn(i))}function sf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function rf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function of(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===at&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===at&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mi?zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Tc=[.64,.33,.3,.6,.15,.06],Ec=[.2126,.7152,.0722],wc=[.3127,.329],Ac=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[zs]:{primaries:Tc,whitePoint:wc,transfer:zo,toXYZ:Ac,fromXYZ:Cc,luminanceCoefficients:Ec,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:Tc,whitePoint:wc,transfer:at,toXYZ:Ac,fromXYZ:Cc,luminanceCoefficients:Ec,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});let Qi;class af{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=Ao("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ao("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lf=0;class yu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jo(s[o].image)):r.push(Jo(s[o]))}else r=Jo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?af.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cf=0;class Wt extends Ki{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=en,s=en,r=Ut,o=zi,a=Sn,l=ii,c=Wt.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Jn(),this.name="",this.source=new yu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=au;Wt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(d+1)/2,F=(f+1)/2,C=(h+p)/4,L=(u+_)/4,D=(g+m)/4;return M>x&&M>F?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=L/n):x>F?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=C/s,r=D/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=L/r,s=D/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(p-h)/w,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hf extends Ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends hf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Su extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uf extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const p=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==p||c!==d||h!==g){let m=1-a;const f=l*p+c*d+h*g+u*_,w=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const F=Math.sqrt(M),C=Math.atan2(F,f*w);m=Math.sin(m*C)/F,a=Math.sin(a*C)/F}const x=a*w;if(l=l*m+p*x,c=c*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*p,e[t+1]=l*g+h*p+c*u-a*d,e[t+2]=c*g+h*d+a*p-l*u,e[t+3]=h*g-a*u-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),p=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"YZX":this._x=p*h*u+c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u-p*d*g;break;case"XZY":this._x=p*h*u-c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new R,Rc=new Xi;class br{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),Cr.subVectors(this.max,$s),es.subVectors(e.a,$s),ts.subVectors(e.b,$s),ns.subVectors(e.c,$s),li.subVectors(ts,es),ci.subVectors(ns,ts),Di.subVectors(es,ns);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Di.z,Di.y,li.z,0,-li.x,ci.z,0,-ci.x,Di.z,0,-Di.x,-li.y,li.x,0,-ci.y,ci.x,0,-Di.y,Di.x,0];return!ea(t,es,ts,ns,Cr)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,es,ts,ns,Cr))?!1:(Rr.crossVectors(li,ci),t=[Rr.x,Rr.y,Rr.z],ea(t,es,ts,ns,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new R,new R,new R,new R,new R,new R,new R,new R],un=new R,Ar=new br,es=new R,ts=new R,ns=new R,li=new R,ci=new R,Di=new R,$s=new R,Cr=new R,Rr=new R,Ii=new R;function ea(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const df=new br,qs=new R,ta=new R;class Ho{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):df.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(ta)),this.expandByPoint(qs.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new R,na=new R,Pr=new R,hi=new R,ia=new R,Lr=new R,sa=new R;class Zl{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){na.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(na);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=hi.dot(this.direction),l=-hi.dot(Pr),c=hi.lengthSq(),h=Math.abs(1-o*o);let u,p,d,g;if(h>0)if(u=o*l-a,p=o*a-l,g=r*h,u>=0)if(p>=-g)if(p<=g){const _=1/h;u*=_,p*=_,d=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(na).addScaledVector(Pr,p),d}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,r){ia.subVectors(t,e),Lr.subVectors(n,e),sa.crossVectors(ia,Lr);let o=this.direction.dot(sa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(Lr.crossVectors(hi,Lr));if(l<0)return null;const c=a*this.direction.dot(ia.cross(hi));if(c<0||l+c>o)return null;const h=-a*hi.dot(sa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,s,r,o,a,l,c,h,u,p,d,g,_,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,p,d,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,u,p,d,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const p=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=p-_*c,t[9]=-a*l,t[2]=_-p*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,d=l*u,g=c*h,_=c*u;t[0]=p+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,d=l*u,g=c*h,_=c*u;t[0]=p-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=p*c+_,t[1]=l*u,t[5]=_*c+p,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-p*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=p-_*u}else if(e.order==="XZY"){const p=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ff,e,pf)}lookAt(e,t,n){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ui.crossVectors(n,jt),ui.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ui.crossVectors(n,jt)),ui.normalize(),Dr.crossVectors(jt,ui),s[0]=ui.x,s[4]=Dr.x,s[8]=jt.x,s[1]=ui.y,s[5]=Dr.y,s[9]=jt.y,s[2]=ui.z,s[6]=Dr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],w=n[3],M=n[7],x=n[11],F=n[15],C=s[0],L=s[4],D=s[8],b=s[12],y=s[1],E=s[5],U=s[9],I=s[13],O=s[2],N=s[6],k=s[10],K=s[14],W=s[3],ce=s[7],te=s[11],re=s[15];return r[0]=o*C+a*y+l*O+c*W,r[4]=o*L+a*E+l*N+c*ce,r[8]=o*D+a*U+l*k+c*te,r[12]=o*b+a*I+l*K+c*re,r[1]=h*C+u*y+p*O+d*W,r[5]=h*L+u*E+p*N+d*ce,r[9]=h*D+u*U+p*k+d*te,r[13]=h*b+u*I+p*K+d*re,r[2]=g*C+_*y+m*O+f*W,r[6]=g*L+_*E+m*N+f*ce,r[10]=g*D+_*U+m*k+f*te,r[14]=g*b+_*I+m*K+f*re,r[3]=w*C+M*y+x*O+F*W,r[7]=w*L+M*E+x*N+F*ce,r[11]=w*D+M*U+x*k+F*te,r[15]=w*b+M*I+x*K+F*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],d=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*p+n*c*p+s*a*d-n*l*d)+_*(+t*l*d-t*c*p+r*o*p-s*o*d+s*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*p+s*o*u-n*o*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],g=e[12],_=e[13],m=e[14],f=e[15],w=u*m*c-_*p*c+_*l*d-a*m*d-u*l*f+a*p*f,M=g*p*c-h*m*c-g*l*d+o*m*d+h*l*f-o*p*f,x=h*_*c-g*u*c+g*a*d-o*_*d-h*a*f+o*u*f,F=g*u*l-h*_*l-g*a*p+o*_*p+h*a*m-o*u*m,C=t*w+n*M+s*x+r*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=w*L,e[1]=(_*p*r-u*m*r-_*s*d+n*m*d+u*s*f-n*p*f)*L,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*L,e[3]=(u*l*r-a*p*r-u*s*c+n*p*c+a*s*d-n*l*d)*L,e[4]=M*L,e[5]=(h*m*r-g*p*r+g*s*d-t*m*d-h*s*f+t*p*f)*L,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*L,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*d+t*l*d)*L,e[8]=x*L,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*f-t*u*f)*L,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*L,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*L,e[12]=F*L,e[13]=(h*_*s-g*u*s+g*n*p-t*_*p-h*n*m+t*u*m)*L,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*L,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*p+t*a*p)*L,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,p=r*c,d=r*h,g=r*u,_=o*h,m=o*u,f=a*u,w=l*c,M=l*h,x=l*u,F=n.x,C=n.y,L=n.z;return s[0]=(1-(_+f))*F,s[1]=(d+x)*F,s[2]=(g-M)*F,s[3]=0,s[4]=(d-x)*C,s[5]=(1-(p+f))*C,s[6]=(m+w)*C,s[7]=0,s[8]=(g+M)*L,s[9]=(m-w)*L,s[10]=(1-(p+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const o=is.set(s[4],s[5],s[6]).length(),a=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const c=1/r,h=1/o,u=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,t.setFromRotationMatrix(dn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=jn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s);let d,g;if(a===jn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=jn){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),p=(t+e)*c,d=(n+s)*h;let g,_;if(a===jn)g=(o+r)*u,_=-2*u;else if(a===wo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const is=new R,dn=new tt,ff=new R(0,0,0),pf=new R(1,1,1),ui=new R,Dr=new R,jt=new R,Pc=new tt,Lc=new Xi;class yt{constructor(e=0,t=0,n=0,s=yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yt.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mf=0;const Dc=new R,ss=new Xi,Vn=new tt,Ir=new R,Zs=new R,gf=new R,_f=new Xi,Ic=new R(1,0,0),Fc=new R(0,1,0),Uc=new R(0,0,1),Nc={type:"added"},vf={type:"removed"},rs={type:"childadded",child:null},ra={type:"childremoved",child:null};class At extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new R,t=new yt,n=new Xi,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ye}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Fc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Fc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Zs,Ir,this.up):Vn.lookAt(Ir,Zs,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Vn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nc),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vf),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nc),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,_f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new R(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new R,Wn=new R,oa=new R,Xn=new R,os=new R,as=new R,Oc=new R,aa=new R,la=new R,ca=new R,ha=new ht,ua=new ht,da=new ht;class rn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fn.subVectors(e,t),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fn.subVectors(s,t),Wn.subVectors(n,t),oa.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Wn),l=fn.dot(oa),c=Wn.dot(Wn),h=Wn.dot(oa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const p=1/u,d=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ha.setScalar(0),ua.setScalar(0),da.setScalar(0),ha.fromBufferAttribute(e,t),ua.fromBufferAttribute(e,n),da.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ha,r.x),o.addScaledVector(ua,r.y),o.addScaledVector(da,r.z),o}static isFrontFacing(e,t,n,s){return fn.subVectors(n,t),Wn.subVectors(e,t),fn.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),fn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;os.subVectors(s,n),as.subVectors(r,n),aa.subVectors(e,n);const l=os.dot(aa),c=as.dot(aa);if(l<=0&&c<=0)return t.copy(n);la.subVectors(e,s);const h=os.dot(la),u=as.dot(la);if(h>=0&&u<=h)return t.copy(s);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(os,o);ca.subVectors(e,r);const d=os.dot(ca),g=as.dot(ca);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(as,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Oc.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Oc,a);const f=1/(m+_+p);return o=_*f,a=p*f,t.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function fa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=ef(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fa(o,r,e+1/3),this.g=fa(o,r,e),this.b=fa(o,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const n=Tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Je.fromWorkingColorSpace(Bt.copy(this),e),Math.round(It(Bt.r*255,0,255))*65536+Math.round(It(Bt.g*255,0,255))*256+Math.round(It(Bt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=sn){Je.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,s=Bt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Fr);const n=Ko(di.h,Fr.h,t),s=Ko(di.s,Fr.s,t),r=Ko(di.l,Fr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new qe;qe.NAMES=Tu;let xf=0;class Pi extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Jn(),this.name="",this.blending=ws,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=za,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kl extends Pi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yt,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new R,Ur=new _e;class Cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}}class Eu extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wu extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mf=0;const nn=new tt,pa=new At,ls=new R,Jt=new br,Ks=new br,Pt=new R;class ln extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?wu:Eu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return pa.lookAt(e),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(Jt.min,Ks.min),Jt.expandByPoint(Pt),Pt.addVectors(Jt.max,Ks.max),Jt.expandByPoint(Pt)):(Jt.expandByPoint(Ks.min),Jt.expandByPoint(Ks.max))}Jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Pt.add(ls)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new R,l[D]=new R;const c=new R,h=new R,u=new R,p=new _e,d=new _e,g=new _e,_=new R,m=new R;function f(D,b,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),p.fromBufferAttribute(r,D),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(p),g.sub(p);const E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(E),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),a[D].add(_),a[b].add(_),a[y].add(_),l[D].add(m),l[b].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,b=w.length;D<b;++D){const y=w[D],E=y.start,U=y.count;for(let I=E,O=E+U;I<O;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new R,x=new R,F=new R,C=new R;function L(D){F.fromBufferAttribute(s,D),C.copy(F);const b=a[D];M.copy(b),M.sub(F.multiplyScalar(F.dot(b))).normalize(),x.crossVectors(C,b);const E=x.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,E)}for(let D=0,b=w.length;D<b;++D){const y=w[D],E=y.start,U=y.count;for(let I=E,O=E+U;I<O;I+=3)L(e.getX(I+0)),L(e.getX(I+1)),L(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let p=0,d=e.count;p<d;p+=3){const g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let f=0;f<h;f++)p[g++]=c[d++]}return new Cn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const p=c[h],d=e(p,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new tt,Fi=new Zl,Nr=new Ho,kc=new R,Or=new R,Br=new R,kr=new R,ma=new R,Gr=new R,Gc=new R,zr=new R;class j extends At{constructor(e=new ln,t=new Kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ma.fromBufferAttribute(u,e),o?Gr.addScaledVector(ma,h):Gr.addScaledVector(ma.sub(t),h))}t.add(Gr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Fi.copy(e.ray).recast(e.near),!(Nr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Nr,kc)===null||Fi.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Bc.copy(r).invert(),Fi.copy(e.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],w=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=w,F=M;x<F;x+=3){const C=a.getX(x),L=a.getX(x+1),D=a.getX(x+2);s=Hr(this,f,e,n,c,h,u,C,L,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const w=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=Hr(this,o,e,n,c,h,u,w,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],w=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=w,F=M;x<F;x+=3){const C=x,L=x+1,D=x+2;s=Hr(this,f,e,n,c,h,u,C,L,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const w=m,M=m+1,x=m+2;s=Hr(this,o,e,n,c,h,u,w,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function yf(i,e,t,n,s,r,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===wi,a),l===null)return null;zr.copy(a),zr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:i}}function Hr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Or),i.getVertexPosition(l,Br),i.getVertexPosition(c,kr);const h=yf(i,e,t,n,Or,Br,kr,Gc);if(h){const u=new R;rn.getBarycoord(Gc,Or,Br,kr,u),s&&(h.uv=rn.getInterpolatedAttribute(s,a,l,c,u,new _e)),r&&(h.uv1=rn.getInterpolatedAttribute(r,a,l,c,u,new _e)),o&&(h.normal=rn.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new R,materialIndex:0};rn.getNormal(Or,Br,kr,p.normal),h.face=p,h.barycoord=u}return h}class Ve extends ln{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let p=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function g(_,m,f,w,M,x,F,C,L,D,b){const y=x/L,E=F/D,U=x/2,I=F/2,O=C/2,N=L+1,k=D+1;let K=0,W=0;const ce=new R;for(let te=0;te<k;te++){const re=te*E-I;for(let pe=0;pe<N;pe++){const ve=pe*y-U;ce[_]=ve*w,ce[m]=re*M,ce[f]=O,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[f]=C>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(pe/L),u.push(1-te/D),K+=1}}for(let te=0;te<D;te++)for(let re=0;re<L;re++){const pe=p+re+N*te,ve=p+re+N*(te+1),Y=p+(re+1)+N*(te+1),Z=p+(re+1)+N*te;l.push(pe,ve,Z),l.push(ve,Y,Z),W+=6}a.addGroup(d,W,b),d+=W,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ve(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=Fs(i[t]);for(const s in n)e[s]=n[s]}return e}function Sf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Au(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const bf={clone:Fs,merge:zt};var Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Pi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Sf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new R,zc=new _e,Hc=new _e;class Qt extends Cu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,zc,Hc),t.subVectors(Hc,zc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,hs=1;class wf extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(cs,hs,e,t);s.layers=this.layers,this.add(s);const r=new Qt(cs,hs,e,t);r.layers=this.layers,this.add(r);const o=new Qt(cs,hs,e,t);o.layers=this.layers,this.add(o);const a=new Qt(cs,hs,e,t);a.layers=this.layers,this.add(a);const l=new Qt(cs,hs,e,t);l.layers=this.layers,this.add(l);const c=new Qt(cs,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ru extends Wt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ps,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Af extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ru(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ve(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:bi});r.uniforms.tEquirect.value=t;const o=new j(s,r),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=Ut),new wf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ga=new R,Cf=new R,Rf=new Ye;class vi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ga.subVectors(n,t).cross(Cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ga),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rf.getNormalMatrix(e),s=this.coplanarPoint(ga).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Ho,Vr=new R;class jl{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,o=new vi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],d=s[8],g=s[9],_=s[10],m=s[11],f=s[12],w=s[13],M=s[14],x=s[15];if(n[0].setComponents(l-r,p-c,m-d,x-f).normalize(),n[1].setComponents(l+r,p+c,m+d,x+f).normalize(),n[2].setComponents(l+o,p+h,m+g,x+w).normalize(),n[3].setComponents(l-o,p-h,m-g,x-w).normalize(),n[4].setComponents(l-a,p-u,m-_,x-M).normalize(),t===jn)n[5].setComponents(l+a,p+u,m+_,x+M).normalize();else if(t===wo)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pf(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){const g=u[p],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ei extends ln{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,p=t/l,d=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const w=f*p-o;for(let M=0;M<c;M++){const x=M*u-r;g.push(x,-w,0),_.push(0,0,1),m.push(M/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const M=w+c*f,x=w+c*(f+1),F=w+1+c*(f+1),C=w+1+c*f;d.push(M,x,C),d.push(x,F,C)}this.setIndex(d),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Df=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Of=`#ifdef USE_AOMAP
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
#endif`,Bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kf=`#ifdef USE_BATCHING
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
#endif`,Gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Xf=`#ifdef USE_BUMPMAP
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ep=`#define PI 3.141592653589793
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
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,np=`vec3 transformedNormal = objectNormal;
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
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
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
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
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
#endif`,Rp=`struct PhysicalMaterial {
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
}`,Pp=`
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gp=`#if defined( USE_POINTS_UV )
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
#endif`,zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`#ifdef USE_MORPHTARGETS
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
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mm=`float getShadowMask() {
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
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,Mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`#include <common>
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
}`,Om=`#if DEPTH_PACKING == 3200
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
}`,Bm=`#define DISTANCE
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
}`,km=`#define DISTANCE
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Ym=`#define LAMBERT
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
}`,$m=`#define LAMBERT
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
}`,qm=`#define MATCAP
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
}`,Zm=`#define MATCAP
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
}`,Km=`#define NORMAL
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
}`,jm=`#define NORMAL
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
}`,Jm=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,e0=`#define STANDARD
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
}`,t0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,a0=`uniform vec3 color;
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
}`,l0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Lf,alphahash_pars_fragment:Df,alphamap_fragment:If,alphamap_pars_fragment:Ff,alphatest_fragment:Uf,alphatest_pars_fragment:Nf,aomap_fragment:Of,aomap_pars_fragment:Bf,batching_pars_vertex:kf,batching_vertex:Gf,begin_vertex:zf,beginnormal_vertex:Hf,bsdfs:Vf,iridescence_fragment:Wf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:qf,clipping_planes_vertex:Zf,color_fragment:Kf,color_pars_fragment:jf,color_pars_vertex:Jf,color_vertex:Qf,common:ep,cube_uv_reflection_fragment:tp,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:sp,emissivemap_fragment:rp,emissivemap_pars_fragment:op,colorspace_fragment:ap,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:hp,envmap_pars_fragment:up,envmap_pars_vertex:dp,envmap_physical_pars_fragment:bp,envmap_vertex:fp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:_p,gradientmap_pars_fragment:vp,lightmap_pars_fragment:xp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:yp,lights_pars_begin:Sp,lights_toon_fragment:Tp,lights_toon_pars_fragment:Ep,lights_phong_fragment:wp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Cp,lights_physical_pars_fragment:Rp,lights_fragment_begin:Pp,lights_fragment_maps:Lp,lights_fragment_end:Dp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Fp,logdepthbuf_pars_vertex:Up,logdepthbuf_vertex:Np,map_fragment:Op,map_pars_fragment:Bp,map_particle_fragment:kp,map_particle_pars_fragment:Gp,metalnessmap_fragment:zp,metalnessmap_pars_fragment:Hp,morphinstance_vertex:Vp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:Yp,morphtarget_vertex:$p,normal_fragment_begin:qp,normal_fragment_maps:Zp,normal_pars_fragment:Kp,normal_pars_vertex:jp,normal_vertex:Jp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:om,project_vertex:am,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:_m,skinning_vertex:vm,skinnormal_vertex:xm,specularmap_fragment:Mm,specularmap_pars_fragment:ym,tonemapping_fragment:Sm,tonemapping_pars_fragment:bm,transmission_fragment:Tm,transmission_pars_fragment:Em,uv_pars_fragment:wm,uv_pars_vertex:Am,uv_vertex:Cm,worldpos_vertex:Rm,background_vert:Pm,background_frag:Lm,backgroundCube_vert:Dm,backgroundCube_frag:Im,cube_vert:Fm,cube_frag:Um,depth_vert:Nm,depth_frag:Om,distanceRGBA_vert:Bm,distanceRGBA_frag:km,equirect_vert:Gm,equirect_frag:zm,linedashed_vert:Hm,linedashed_frag:Vm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:Ym,meshlambert_frag:$m,meshmatcap_vert:qm,meshmatcap_frag:Zm,meshnormal_vert:Km,meshnormal_frag:jm,meshphong_vert:Jm,meshphong_frag:Qm,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:o0,shadow_frag:a0,sprite_vert:l0,sprite_frag:c0},we={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Dn={basic:{uniforms:zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new qe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:zt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:zt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new qe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:zt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:zt([we.points,we.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:zt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:zt([we.common,we.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:zt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:zt([we.sprite,we.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:zt([we.common,we.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:zt([we.lights,we.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Dn.physical={uniforms:zt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Wr={r:0,b:0,g:0},Ni=new yt,h0=new tt;function u0(i,e,t,n,s,r,o){const a=new qe(0);let l=r===!0?0:1,c,h,u=null,p=0,d=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function _(w){let M=!1;const x=g(w);x===null?f(a,l):x&&x.isColor&&(f(x,1),M=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===Go)?(h===void 0&&(h=new j(new Ve(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Fs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(M.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(Ni)),h.material.toneMapped=Je.getTransfer(x.colorSpace)!==at,(u!==x||p!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,d=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new j(new Ei(2,2),new Ai({name:"BackgroundMaterial",uniforms:Fs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,p=x.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,M){w.getRGB(Wr,Au(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(a,l)},render:_,addToRenderList:m}}function d0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(y,E,U,I,O){let N=!1;const k=u(I,U,E);r!==k&&(r=k,c(r.object)),N=d(y,I,U,O),N&&g(y,I,U,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,x(y,E,U,I),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,E,U){const I=U.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let N=O[E.id];N===void 0&&(N={},O[E.id]=N);let k=N[I];return k===void 0&&(k=p(l()),N[I]=k),k}function p(y){const E=[],U=[],I=[];for(let O=0;O<t;O++)E[O]=0,U[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:I,object:y,attributes:{},index:null}}function d(y,E,U,I){const O=r.attributes,N=E.attributes;let k=0;const K=U.getAttributes();for(const W in K)if(K[W].location>=0){const te=O[W];let re=N[W];if(re===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),te===void 0||te.attribute!==re||re&&te.data!==re.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function g(y,E,U,I){const O={},N=E.attributes;let k=0;const K=U.getAttributes();for(const W in K)if(K[W].location>=0){let te=N[W];te===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(te=y.instanceColor));const re={};re.attribute=te,te&&te.data&&(re.data=te.data),O[W]=re,k++}r.attributes=O,r.attributesNum=k,r.index=I}function _(){const y=r.newAttributes;for(let E=0,U=y.length;E<U;E++)y[E]=0}function m(y){f(y,0)}function f(y,E){const U=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;U[y]=1,I[y]===0&&(i.enableVertexAttribArray(y),I[y]=1),O[y]!==E&&(i.vertexAttribDivisor(y,E),O[y]=E)}function w(){const y=r.newAttributes,E=r.enabledAttributes;for(let U=0,I=E.length;U<I;U++)E[U]!==y[U]&&(i.disableVertexAttribArray(U),E[U]=0)}function M(y,E,U,I,O,N,k){k===!0?i.vertexAttribIPointer(y,E,U,O,N):i.vertexAttribPointer(y,E,U,I,O,N)}function x(y,E,U,I){_();const O=I.attributes,N=U.getAttributes(),k=E.defaultAttributeValues;for(const K in N){const W=N[K];if(W.location>=0){let ce=O[K];if(ce===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const te=ce.normalized,re=ce.itemSize,pe=e.get(ce);if(pe===void 0)continue;const ve=pe.buffer,Y=pe.type,Z=pe.bytesPerElement,xe=Y===i.INT||Y===i.UNSIGNED_INT||ce.gpuType===Vl;if(ce.isInterleavedBufferAttribute){const V=ce.data,Q=V.stride,ue=ce.offset;if(V.isInstancedInterleavedBuffer){for(let me=0;me<W.locationSize;me++)f(W.location+me,V.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let me=0;me<W.locationSize;me++)m(W.location+me);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let me=0;me<W.locationSize;me++)M(W.location+me,re/W.locationSize,Y,te,Q*Z,(ue+re/W.locationSize*me)*Z,xe)}else{if(ce.isInstancedBufferAttribute){for(let V=0;V<W.locationSize;V++)f(W.location+V,ce.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let V=0;V<W.locationSize;V++)m(W.location+V);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let V=0;V<W.locationSize;V++)M(W.location+V,re/W.locationSize,Y,te,re*Z,re/W.locationSize*V*Z,xe)}}else if(k!==void 0){const te=k[K];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(W.location,te);break;case 3:i.vertexAttrib3fv(W.location,te);break;case 4:i.vertexAttrib4fv(W.location,te);break;default:i.vertexAttrib1fv(W.location,te)}}}}w()}function F(){D();for(const y in n){const E=n[y];for(const U in E){const I=E[U];for(const O in I)h(I[O].object),delete I[O];delete E[U]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const E=n[y.id];for(const U in E){const I=E[U];for(const O in I)h(I[O].object),delete I[O];delete E[U]}delete n[y.id]}function L(y){for(const E in n){const U=n[E];if(U[y.id]===void 0)continue;const I=U[y.id];for(const O in I)h(I[O].object),delete I[O];delete U[y.id]}}function D(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function f0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,p){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*p[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function p0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Sn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const D=L===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ii&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Kn&&!D)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:F,maxSamples:C}}function m0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new vi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const d=u.length!==0||p||n!==0||s;return s=p,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:n,M=w*4;let x=f.clippingState||null;l.value=x,x=h(g,p,M,d);for(let F=0;F!==M;++F)x[F]=t[F];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=d+_*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,x=d;M!==_;++M,x+=4)o.copy(u[M]).applyMatrix4(w,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function g0(i){let e=new WeakMap;function t(o,a){return a===Za?o.mapping=Ps:a===Ka&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Za||a===Ka)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Af(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Lu extends Cu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ms=4,Vc=[.125,.215,.35,.446,.526,.582],Gi=20,_a=new Lu,Wc=new qe;let va=null,xa=0,Ma=0,ya=!1;const Bi=(1+Math.sqrt(5))/2,us=1/Bi,Xc=[new R(-Bi,us,0),new R(Bi,us,0),new R(-us,0,Bi),new R(us,0,Bi),new R(0,Bi,-us),new R(0,Bi,us),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(va,xa,Ma),this._renderer.xr.enabled=ya,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Sr,format:Sn,colorSpace:zs,depthBuffer:!1},s=Yc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(r)),this._blurMaterial=v0(r,e,t)}return s}_compileMaterial(e){const t=new j(this._lodPlanes[0],e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,n,s){const a=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Wc),h.toneMapping=Ti,h.autoClear=!1;const d=new Kl({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new j(new Ve,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Wc),_=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):w===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const M=this._cubeSize;Xr(s,w*M,f>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ps||e.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new j(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Xr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,_a)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xc[(s-r-1)%Xc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new j(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const f=[];let w=0;for(let L=0;L<Gi;++L){const D=L/_,b=Math.exp(-D*D/2);f.push(b),L===0?w+=b:L<m&&(w+=2*b)}for(let L=0;L<f.length;L++)f[L]=f[L]/w;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-n;const x=this._sizeLods[s],F=3*x*(s>M-Ms?s-M+Ms:0),C=4*(this._cubeSize-x);Xr(t,F,C,3*x,2*x),l.setRenderTarget(t),l.render(u,_a)}}function _0(i){const e=[],t=[],n=[];let s=i;const r=i-Ms+1+Vc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ms?l=Vc[o-i+Ms-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,f=1,w=new Float32Array(_*g*d),M=new Float32Array(m*g*d),x=new Float32Array(f*g*d);for(let C=0;C<d;C++){const L=C%3*2/3-1,D=C>2?0:-1,b=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];w.set(b,_*g*C),M.set(p,m*g*C);const y=[C,C,C,C,C,C];x.set(y,f*g*C)}const F=new ln;F.setAttribute("position",new Cn(w,_)),F.setAttribute("uv",new Cn(M,m)),F.setAttribute("faceIndex",new Cn(x,f)),e.push(F),s>Ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yc(i,e,t){const n=new Wi(i,e,t);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function v0(i,e,t){const n=new Float32Array(Gi),s=new R(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function $c(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function qc(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function x0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Za||l===Ka,h=l===Ps||l===Ls;if(c||h){let u=e.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Al(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Al(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function M0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function y0(i,e,t,n){const s={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}p.removeEventListener("dispose",o),delete s[p.id];const d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(u){const p=u.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(u){const p=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const w=d.array;_=d.version;for(let M=0,x=w.length;M<x;M+=3){const F=w[M+0],C=w[M+1],L=w[M+2];p.push(F,C,C,L,L,F)}}else if(g!==void 0){const w=g.array;_=g.version;for(let M=0,x=w.length/3-1;M<x;M+=3){const F=M+0,C=M+1,L=M+2;p.push(F,C,C,L,L,F)}}else return;const m=new(Mu(p)?wu:Eu)(p,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const p=r.get(u);if(p){const d=u.index;d!==null&&p.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function S0(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*o),t.update(d,n,1)}function c(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*o,g),t.update(d,n,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,n,1)}function u(p,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=d[w]*_[w];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function b0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function T0(i,e,t){const n=new WeakMap,s=new ht;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==u){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let F=a.attributes.position.count*x,C=1;F>e.maxTextureSize&&(C=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const L=new Float32Array(F*C*4*u),D=new Su(L,F,C,u);D.type=Kn,D.needsUpdate=!0;const b=x*4;for(let E=0;E<u;E++){const U=f[E],I=w[E],O=M[E],N=F*C*4*E;for(let k=0;k<U.count;k++){const K=k*b;g===!0&&(s.fromBufferAttribute(U,k),L[N+K+0]=s.x,L[N+K+1]=s.y,L[N+K+2]=s.z,L[N+K+3]=0),_===!0&&(s.fromBufferAttribute(I,k),L[N+K+4]=s.x,L[N+K+5]=s.y,L[N+K+6]=s.z,L[N+K+7]=0),m===!0&&(s.fromBufferAttribute(O,k),L[N+K+8]=s.x,L[N+K+9]=s.y,L[N+K+10]=s.z,L[N+K+11]=O.itemSize===4?s.w:1)}}p={count:u,texture:D,size:new _e(F,C)},n.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function E0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Du extends Wt{constructor(e,t,n,s,r,o,a,l,c,h=As){if(h!==As&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===As&&(n=Vi),n===void 0&&h===Is&&(n=Ds),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Iu=new Wt,Zc=new Du(1,1),Fu=new Su,Uu=new uf,Nu=new Ru,Kc=[],jc=[],Jc=new Float32Array(16),Qc=new Float32Array(9),eh=new Float32Array(4);function Hs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vo(i,e){let t=jc[e];t===void 0&&(t=new Int32Array(e),jc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function w0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function A0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function P0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;eh.set(n),i.uniformMatrix2fv(this.addr,!1,eh),Rt(t,n)}}function L0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Qc.set(n),i.uniformMatrix3fv(this.addr,!1,Qc),Rt(t,n)}}function D0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Jc.set(n),i.uniformMatrix4fv(this.addr,!1,Jc),Rt(t,n)}}function I0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function O0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function z0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zc.compareFunction=xu,r=Zc):r=Iu,t.setTexture2D(e||r,s)}function H0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Uu,s)}function V0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Nu,s)}function W0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fu,s)}function X0(i){switch(i){case 5126:return w0;case 35664:return A0;case 35665:return C0;case 35666:return R0;case 35674:return P0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return I0;case 35667:case 35671:return F0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return O0;case 36294:return B0;case 36295:return k0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return W0}}function Y0(i,e){i.uniform1fv(this.addr,e)}function $0(i,e){const t=Hs(e,this.size,2);i.uniform2fv(this.addr,t)}function q0(i,e){const t=Hs(e,this.size,3);i.uniform3fv(this.addr,t)}function Z0(i,e){const t=Hs(e,this.size,4);i.uniform4fv(this.addr,t)}function K0(i,e){const t=Hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function j0(i,e){const t=Hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function J0(i,e){const t=Hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Q0(i,e){i.uniform1iv(this.addr,e)}function eg(i,e){i.uniform2iv(this.addr,e)}function tg(i,e){i.uniform3iv(this.addr,e)}function ng(i,e){i.uniform4iv(this.addr,e)}function ig(i,e){i.uniform1uiv(this.addr,e)}function sg(i,e){i.uniform2uiv(this.addr,e)}function rg(i,e){i.uniform3uiv(this.addr,e)}function og(i,e){i.uniform4uiv(this.addr,e)}function ag(i,e,t){const n=this.cache,s=e.length,r=Vo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Iu,r[o])}function lg(i,e,t){const n=this.cache,s=e.length,r=Vo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Uu,r[o])}function cg(i,e,t){const n=this.cache,s=e.length,r=Vo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Nu,r[o])}function hg(i,e,t){const n=this.cache,s=e.length,r=Vo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fu,r[o])}function ug(i){switch(i){case 5126:return Y0;case 35664:return $0;case 35665:return q0;case 35666:return Z0;case 35674:return K0;case 35675:return j0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}class dg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=X0(t.type)}}class fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ug(t.type)}}class pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function th(i,e){i.seq.push(e),i.map[e.id]=e}function mg(i,e,t){const n=i.name,s=n.length;for(Sa.lastIndex=0;;){const r=Sa.exec(n),o=Sa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){th(t,c===void 0?new dg(a,i,e):new fg(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new pg(a),th(t,u)),t=u}}}class Mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);mg(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function nh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const gg=37297;let _g=0;function vg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ih=new Ye;function xg(i){Je._getMatrix(ih,Je.workingColorSpace,i);const e=`mat3( ${ih.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case zo:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+vg(i.getShaderSource(e),o)}else return s}function Mg(i,e){const t=xg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yg(i,e){let t;switch(e){case Od:t="Linear";break;case Bd:t="Reinhard";break;case kd:t="Cineon";break;case ou:t="ACESFilmic";break;case zd:t="AgX";break;case Hd:t="Neutral";break;case Gd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yr=new R;function Sg(){Je.getLuminanceCoefficients(Yr);const i=Yr.x.toFixed(4),e=Yr.y.toFixed(4),t=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function Tg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function rr(i){return i!==""}function rh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(wg,Cg)}const Ag=new Map;function Cg(i,e){let t=$e[e];if(t===void 0){const n=Ag.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cl(t)}const Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(i){return i.replace(Rg,Pg)}function Pg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Lg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===su?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Dg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ps:case Ls:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ig(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function Fg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ru:e="ENVMAP_BLENDING_MULTIPLY";break;case Ud:e="ENVMAP_BLENDING_MIX";break;case Nd:e="ENVMAP_BLENDING_ADD";break}return e}function Ug(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ng(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Lg(t),c=Dg(t),h=Ig(t),u=Fg(t),p=Ug(t),d=bg(t),g=Tg(r),_=s.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),f.length>0&&(f+=`
`)):(m=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),f=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?$e.tonemapping_pars_fragment:"",t.toneMapping!==Ti?yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Mg("linearToOutputTexel",t.outputColorSpace),Sg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),o=Cl(o),o=rh(o,t),o=oh(o,t),a=Cl(a),a=rh(a,t),a=oh(a,t),o=ah(o),a=ah(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=w+m+o,x=w+f+a,F=nh(s,s.VERTEX_SHADER,M),C=nh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,F),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(E){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(F).trim(),O=s.getShaderInfoLog(C).trim();let N=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,F,C);else{const K=sh(s,F,"vertex"),W=sh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+K+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||O==="")&&(k=!1);k&&(E.diagnostics={runnable:N,programLog:U,vertexShader:{log:I,prefix:m},fragmentShader:{log:O,prefix:f}})}s.deleteShader(F),s.deleteShader(C),D=new Mo(s,_),b=Eg(s,_)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,gg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_g++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=C,this}let Og=0;class Bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kg(e),t.set(e,n)),n}}class kg{constructor(e){this.id=Og++,this.code=e,this.usedTimes=0}}function Gg(i,e,t,n,s,r,o){const a=new bu,l=new Bg,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,E,U,I){const O=U.fog,N=I.geometry,k=b.isMeshStandardMaterial?U.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),W=K&&K.mapping===Go?K.image.height:null,ce=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const te=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,re=te!==void 0?te.length:0;let pe=0;N.morphAttributes.position!==void 0&&(pe=1),N.morphAttributes.normal!==void 0&&(pe=2),N.morphAttributes.color!==void 0&&(pe=3);let ve,Y,Z,xe;if(ce){const st=Dn[ce];ve=st.vertexShader,Y=st.fragmentShader}else ve=b.vertexShader,Y=b.fragmentShader,l.update(b),Z=l.getVertexShaderID(b),xe=l.getFragmentShaderID(b);const V=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),ue=I.isInstancedMesh===!0,me=I.isBatchedMesh===!0,Pe=!!b.map,ie=!!b.matcap,he=!!K,P=!!b.aoMap,J=!!b.lightMap,X=!!b.bumpMap,fe=!!b.normalMap,ae=!!b.displacementMap,Ae=!!b.emissiveMap,ye=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,H=b.clearcoat>0,ne=b.dispersion>0,le=b.iridescence>0,ee=b.sheen>0,De=b.transmission>0,Ee=S&&!!b.anisotropyMap,Ce=H&&!!b.clearcoatMap,ge=H&&!!b.clearcoatNormalMap,oe=H&&!!b.clearcoatRoughnessMap,Te=le&&!!b.iridescenceMap,Fe=le&&!!b.iridescenceThicknessMap,Ue=ee&&!!b.sheenColorMap,Ie=ee&&!!b.sheenRoughnessMap,Ge=!!b.specularMap,He=!!b.specularColorMap,ot=!!b.specularIntensityMap,B=De&&!!b.transmissionMap,Re=De&&!!b.thicknessMap,se=!!b.gradientMap,de=!!b.alphaMap,Se=b.alphaTest>0,be=!!b.alphaHash,We=!!b.extensions;let Mt=Ti;b.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Nt={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:ve,fragmentShader:Y,defines:b.defines,customVertexShaderID:Z,customFragmentShaderID:xe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:me,batchingColor:me&&I._colorsTexture!==null,instancing:ue,instancingColor:ue&&I.instanceColor!==null,instancingMorph:ue&&I.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:zs,alphaToCoverage:!!b.alphaToCoverage,map:Pe,matcap:ie,envMap:he,envMapMode:he&&K.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:J,bumpMap:X,normalMap:fe,displacementMap:p&&ae,emissiveMap:Ae,normalMapObjectSpace:fe&&b.normalMapType===Yd,normalMapTangentSpace:fe&&b.normalMapType===vu,metalnessMap:ye,roughnessMap:A,anisotropy:S,anisotropyMap:Ee,clearcoat:H,clearcoatMap:Ce,clearcoatNormalMap:ge,clearcoatRoughnessMap:oe,dispersion:ne,iridescence:le,iridescenceMap:Te,iridescenceThicknessMap:Fe,sheen:ee,sheenColorMap:Ue,sheenRoughnessMap:Ie,specularMap:Ge,specularColorMap:He,specularIntensityMap:ot,transmission:De,transmissionMap:B,thicknessMap:Re,gradientMap:se,opaque:b.transparent===!1&&b.blending===ws&&b.alphaToCoverage===!1,alphaMap:de,alphaTest:Se,alphaHash:be,combine:b.combine,mapUv:Pe&&_(b.map.channel),aoMapUv:P&&_(b.aoMap.channel),lightMapUv:J&&_(b.lightMap.channel),bumpMapUv:X&&_(b.bumpMap.channel),normalMapUv:fe&&_(b.normalMap.channel),displacementMapUv:ae&&_(b.displacementMap.channel),emissiveMapUv:Ae&&_(b.emissiveMap.channel),metalnessMapUv:ye&&_(b.metalnessMap.channel),roughnessMapUv:A&&_(b.roughnessMap.channel),anisotropyMapUv:Ee&&_(b.anisotropyMap.channel),clearcoatMapUv:Ce&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(b.sheenRoughnessMap.channel),specularMapUv:Ge&&_(b.specularMap.channel),specularColorMapUv:He&&_(b.specularColorMap.channel),specularIntensityMapUv:ot&&_(b.specularIntensityMap.channel),transmissionMapUv:B&&_(b.transmissionMap.channel),thicknessMapUv:Re&&_(b.thicknessMap.channel),alphaMapUv:de&&_(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(fe||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Pe||de),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Q,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===at,decodeVideoTextureEmissive:Ae&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===at,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Dt,flipSided:b.side===Vt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:We&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&b.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function f(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const E in b.defines)y.push(E),y.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(w(y,b),M(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function w(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const y=g[b.type];let E;if(y){const U=Dn[y];E=bf.clone(U.uniforms)}else E=b.uniforms;return E}function F(b,y){let E;for(let U=0,I=h.length;U<I;U++){const O=h[U];if(O.cacheKey===y){E=O,++E.usedTimes;break}}return E===void 0&&(E=new Ng(i,y,b,r),h.push(E)),E}function C(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function L(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:F,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:D}}function zg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Hg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ch(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,p,d,g,_,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,p,d,g,_,m){const f=o(u,p,d,g,_,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):t.push(f)}function l(u,p,d,g,_,m){const f=o(u,p,d,g,_,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,p){t.length>1&&t.sort(u||Hg),n.length>1&&n.sort(p||ch),s.length>1&&s.sort(p||ch)}function h(){for(let u=e,p=i.length;u<p;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Vg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new hh,i.set(n,[o])):s>=r.length?(o=new hh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new qe};break;case"SpotLight":t={position:new R,direction:new R,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Xg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Yg=0;function $g(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qg(i){const e=new Wg,t=Xg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new tt,o=new tt;function a(c){let h=0,u=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,f=0,w=0,M=0,x=0,F=0,C=0,L=0;c.sort($g);for(let b=0,y=c.length;b<y;b++){const E=c[b],U=E.color,I=E.intensity,O=E.distance,N=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=U.r*I,u+=U.g*I,p+=U.b*I;else if(E.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(E.sh.coefficients[k],I);L++}else if(E.isDirectionalLight){const k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const K=E.shadow,W=t.get(E);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=E.shadow.matrix,w++}n.directional[d]=k,d++}else if(E.isSpotLight){const k=e.get(E);k.position.setFromMatrixPosition(E.matrixWorld),k.color.copy(U).multiplyScalar(I),k.distance=O,k.coneCos=Math.cos(E.angle),k.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),k.decay=E.decay,n.spot[_]=k;const K=E.shadow;if(E.map&&(n.spotLightMap[F]=E.map,F++,K.updateMatrices(E),E.castShadow&&C++),n.spotLightMatrix[_]=K.matrix,E.castShadow){const W=t.get(E);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=N,x++}_++}else if(E.isRectAreaLight){const k=e.get(E);k.color.copy(U).multiplyScalar(I),k.halfWidth.set(E.width*.5,0,0),k.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=k,m++}else if(E.isPointLight){const k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),k.distance=E.distance,k.decay=E.decay,E.castShadow){const K=E.shadow,W=t.get(E);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=E.shadow.matrix,M++}n.point[g]=k,g++}else if(E.isHemisphereLight){const k=e.get(E);k.skyColor.copy(E.color).multiplyScalar(I),k.groundColor.copy(E.groundColor).multiplyScalar(I),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==w||D.numPointShadows!==M||D.numSpotShadows!==x||D.numSpotMaps!==F||D.numLightProbes!==L)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+F-C,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=w,D.numPointShadows=M,D.numSpotShadows=x,D.numSpotMaps=F,D.numLightProbes=L,n.version=Yg++)}function l(c,h){let u=0,p=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const M=c[f];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function uh(i){const e=new qg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zg(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new uh(i),e.set(s,[a])):r>=o.length?(a=new uh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Kg extends Pi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jg extends Pi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
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
}`;function e_(i,e,t){let n=new jl;const s=new _e,r=new _e,o=new ht,a=new Kg({depthPacking:Xd}),l=new jg,c={},h=t.maxTextureSize,u={[wi]:Vt,[Vt]:wi,[Dt]:Dt},p=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Jg,fragmentShader:Qg}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new j(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let f=this.type;this.render=function(C,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),U=i.state;U.setBlending(bi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=f!==Yn&&this.type===Yn,O=f===Yn&&this.type!==Yn;for(let N=0,k=C.length;N<k;N++){const K=C[N],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ce=W.getFrameExtents();if(s.multiply(ce),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,W.mapSize.y=r.y)),W.map===null||I===!0||O===!0){const re=this.type!==Yn?{minFilter:An,magFilter:An}:{};W.map!==null&&W.map.dispose(),W.map=new Wi(s.x,s.y,re),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const te=W.getViewportCount();for(let re=0;re<te;re++){const pe=W.getViewport(re);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),U.viewport(o),W.updateMatrices(K,re),n=W.getFrustum(),x(L,D,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Yn&&w(W,D),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,E)};function w(C,L){const D=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Wi(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(L,null,D,p,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(L,null,D,d,_,null)}function M(C,L,D,b){let y=null;const E=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)y=E;else if(y=D.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const U=y.uuid,I=L.uuid;let O=c[U];O===void 0&&(O={},c[U]=O);let N=O[I];N===void 0&&(N=y.clone(),O[I]=N,L.addEventListener("dispose",F)),y=N}if(y.visible=L.visible,y.wireframe=L.wireframe,b===Yn?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:u[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=i.properties.get(y);U.light=D}return y}function x(C,L,D,b,y){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Yn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const I=e.update(C),O=C.material;if(Array.isArray(O)){const N=I.groups;for(let k=0,K=N.length;k<K;k++){const W=N[k],ce=O[W.materialIndex];if(ce&&ce.visible){const te=M(C,ce,b,y);C.onBeforeShadow(i,C,L,D,I,te,W),i.renderBufferDirect(D,null,I,te,C,W),C.onAfterShadow(i,C,L,D,I,te,W)}}}else if(O.visible){const N=M(C,O,b,y);C.onBeforeShadow(i,C,L,D,I,N,null),i.renderBufferDirect(D,null,I,N,C,null),C.onAfterShadow(i,C,L,D,I,N,null)}}const U=C.children;for(let I=0,O=U.length;I<O;I++)x(U[I],L,D,b,y)}function F(C){C.target.removeEventListener("dispose",F);for(const D in c){const b=c[D],y=C.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const t_={[Ha]:Va,[Wa]:$a,[Xa]:qa,[Rs]:Ya,[Va]:Ha,[$a]:Wa,[qa]:Xa,[Ya]:Rs};function n_(i,e){function t(){let B=!1;const Re=new ht;let se=null;const de=new ht(0,0,0,0);return{setMask:function(Se){se!==Se&&!B&&(i.colorMask(Se,Se,Se,Se),se=Se)},setLocked:function(Se){B=Se},setClear:function(Se,be,We,Mt,Nt){Nt===!0&&(Se*=Mt,be*=Mt,We*=Mt),Re.set(Se,be,We,Mt),de.equals(Re)===!1&&(i.clearColor(Se,be,We,Mt),de.copy(Re))},reset:function(){B=!1,se=null,de.set(-1,0,0,0)}}}function n(){let B=!1,Re=!1,se=null,de=null,Se=null;return{setReversed:function(be){if(Re!==be){const We=e.get("EXT_clip_control");Re?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const Mt=Se;Se=null,this.setClear(Mt)}Re=be},getReversed:function(){return Re},setTest:function(be){be?V(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(be){se!==be&&!B&&(i.depthMask(be),se=be)},setFunc:function(be){if(Re&&(be=t_[be]),de!==be){switch(be){case Ha:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=be}},setLocked:function(be){B=be},setClear:function(be){Se!==be&&(Re&&(be=1-be),i.clearDepth(be),Se=be)},reset:function(){B=!1,se=null,de=null,Se=null,Re=!1}}}function s(){let B=!1,Re=null,se=null,de=null,Se=null,be=null,We=null,Mt=null,Nt=null;return{setTest:function(st){B||(st?V(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(st){Re!==st&&!B&&(i.stencilMask(st),Re=st)},setFunc:function(st,cn,kn){(se!==st||de!==cn||Se!==kn)&&(i.stencilFunc(st,cn,kn),se=st,de=cn,Se=kn)},setOp:function(st,cn,kn){(be!==st||We!==cn||Mt!==kn)&&(i.stencilOp(st,cn,kn),be=st,We=cn,Mt=kn)},setLocked:function(st){B=st},setClear:function(st){Nt!==st&&(i.clearStencil(st),Nt=st)},reset:function(){B=!1,Re=null,se=null,de=null,Se=null,be=null,We=null,Mt=null,Nt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,w=null,M=null,x=null,F=null,C=null,L=new qe(0,0,0),D=0,b=!1,y=null,E=null,U=null,I=null,O=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=K>=2);let ce=null,te={};const re=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),ve=new ht().fromArray(re),Y=new ht().fromArray(pe);function Z(B,Re,se,de){const Se=new Uint8Array(4),be=i.createTexture();i.bindTexture(B,be),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<se;We++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(Re+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return be}const xe={};xe[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(i.DEPTH_TEST),o.setFunc(Rs),X(!1),fe(_c),V(i.CULL_FACE),P(bi);function V(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Q(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function ue(B,Re){return u[B]!==Re?(i.bindFramebuffer(B,Re),u[B]=Re,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Re),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function me(B,Re){let se=d,de=!1;if(B){se=p.get(Re),se===void 0&&(se=[],p.set(Re,se));const Se=B.textures;if(se.length!==Se.length||se[0]!==i.COLOR_ATTACHMENT0){for(let be=0,We=Se.length;be<We;be++)se[be]=i.COLOR_ATTACHMENT0+be;se.length=Se.length,de=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,de=!0);de&&i.drawBuffers(se)}function Pe(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const ie={[ki]:i.FUNC_ADD,[vd]:i.FUNC_SUBTRACT,[xd]:i.FUNC_REVERSE_SUBTRACT};ie[Md]=i.MIN,ie[yd]=i.MAX;const he={[Sd]:i.ZERO,[bd]:i.ONE,[Td]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[Pd]:i.SRC_ALPHA_SATURATE,[Cd]:i.DST_COLOR,[wd]:i.DST_ALPHA,[Ed]:i.ONE_MINUS_SRC_COLOR,[za]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[Ad]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Id]:i.CONSTANT_ALPHA,[Fd]:i.ONE_MINUS_CONSTANT_ALPHA};function P(B,Re,se,de,Se,be,We,Mt,Nt,st){if(B===bi){_===!0&&(Q(i.BLEND),_=!1);return}if(_===!1&&(V(i.BLEND),_=!0),B!==_d){if(B!==m||st!==b){if((f!==ki||x!==ki)&&(i.blendEquation(i.FUNC_ADD),f=ki,x=ki),st)switch(B){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,M=null,F=null,C=null,L.set(0,0,0),D=0,m=B,b=st}return}Se=Se||Re,be=be||se,We=We||de,(Re!==f||Se!==x)&&(i.blendEquationSeparate(ie[Re],ie[Se]),f=Re,x=Se),(se!==w||de!==M||be!==F||We!==C)&&(i.blendFuncSeparate(he[se],he[de],he[be],he[We]),w=se,M=de,F=be,C=We),(Mt.equals(L)===!1||Nt!==D)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Nt),L.copy(Mt),D=Nt),m=B,b=!1}function J(B,Re){B.side===Dt?Q(i.CULL_FACE):V(i.CULL_FACE);let se=B.side===Vt;Re&&(se=!se),X(se),B.blending===ws&&B.transparent===!1?P(bi):P(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const de=B.stencilWrite;a.setTest(de),de&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(B){y!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),y=B)}function fe(B){B!==md?(V(i.CULL_FACE),B!==E&&(B===_c?i.cullFace(i.BACK):B===gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),E=B}function ae(B){B!==U&&(k&&i.lineWidth(B),U=B)}function Ae(B,Re,se){B?(V(i.POLYGON_OFFSET_FILL),(I!==Re||O!==se)&&(i.polygonOffset(Re,se),I=Re,O=se)):Q(i.POLYGON_OFFSET_FILL)}function ye(B){B?V(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function A(B){B===void 0&&(B=i.TEXTURE0+N-1),ce!==B&&(i.activeTexture(B),ce=B)}function S(B,Re,se){se===void 0&&(ce===null?se=i.TEXTURE0+N-1:se=ce);let de=te[se];de===void 0&&(de={type:void 0,texture:void 0},te[se]=de),(de.type!==B||de.texture!==Re)&&(ce!==se&&(i.activeTexture(se),ce=se),i.bindTexture(B,Re||xe[B]),de.type=B,de.texture=Re)}function H(){const B=te[ce];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(B){ve.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ve.copy(B))}function Ie(B){Y.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Y.copy(B))}function Ge(B,Re){let se=c.get(Re);se===void 0&&(se=new WeakMap,c.set(Re,se));let de=se.get(B);de===void 0&&(de=i.getUniformBlockIndex(Re,B.name),se.set(B,de))}function He(B,Re){const de=c.get(Re).get(B);l.get(Re)!==de&&(i.uniformBlockBinding(Re,de,B.__bindingPointIndex),l.set(Re,de))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ce=null,te={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,w=null,M=null,x=null,F=null,C=null,L=new qe(0,0,0),D=0,b=!1,y=null,E=null,U=null,I=null,O=null,ve.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:Q,bindFramebuffer:ue,drawBuffers:me,useProgram:Pe,setBlending:P,setMaterial:J,setFlipSided:X,setCullFace:fe,setLineWidth:ae,setPolygonOffset:Ae,setScissorTest:ye,activeTexture:A,bindTexture:S,unbindTexture:H,compressedTexImage2D:ne,compressedTexImage3D:le,texImage2D:Te,texImage3D:Fe,updateUBOMapping:Ge,uniformBlockBinding:He,texStorage2D:ge,texStorage3D:oe,texSubImage2D:ee,texSubImage3D:De,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ce,scissor:Ue,viewport:Ie,reset:ot}}function dh(i,e,t,n){const s=i_(n);switch(t){case uu:return i*e;case fu:return i*e;case pu:return i*e*2;case mu:return i*e/s.components*s.byteLength;case Yl:return i*e/s.components*s.byteLength;case gu:return i*e*2/s.components*s.byteLength;case $l:return i*e*2/s.components*s.byteLength;case du:return i*e*3/s.components*s.byteLength;case Sn:return i*e*4/s.components*s.byteLength;case ql:return i*e*4/s.components*s.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(i,16)*Math.max(e,8)/4;case Qa:case tl:return Math.max(i,8)*Math.max(e,8)/2;case il:case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vo:case Ml:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _u:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bl:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i_(i){switch(i){case ii:case lu:return{byteLength:1,components:1};case fr:case cu:case Sr:return{byteLength:2,components:1};case Wl:case Xl:return{byteLength:2,components:4};case Vi:case Vl:case Kn:return{byteLength:4,components:1};case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function s_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap;let u;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):Ao("canvas")}function _(A,S,H){let ne=1;const le=ye(A);if((le.width>H||le.height>H)&&(ne=H/Math.max(le.width,le.height)),ne<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ee=Math.floor(ne*le.width),De=Math.floor(ne*le.height);u===void 0&&(u=g(ee,De));const Ee=S?g(ee,De):u;return Ee.width=ee,Ee.height=De,Ee.getContext("2d").drawImage(A,0,0,ee,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ee+"x"+De+")."),Ee}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,S,H,ne,le=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=S;if(S===i.RED&&(H===i.FLOAT&&(ee=i.R32F),H===i.HALF_FLOAT&&(ee=i.R16F),H===i.UNSIGNED_BYTE&&(ee=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ee=i.R8UI),H===i.UNSIGNED_SHORT&&(ee=i.R16UI),H===i.UNSIGNED_INT&&(ee=i.R32UI),H===i.BYTE&&(ee=i.R8I),H===i.SHORT&&(ee=i.R16I),H===i.INT&&(ee=i.R32I)),S===i.RG&&(H===i.FLOAT&&(ee=i.RG32F),H===i.HALF_FLOAT&&(ee=i.RG16F),H===i.UNSIGNED_BYTE&&(ee=i.RG8)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ee=i.RG8UI),H===i.UNSIGNED_SHORT&&(ee=i.RG16UI),H===i.UNSIGNED_INT&&(ee=i.RG32UI),H===i.BYTE&&(ee=i.RG8I),H===i.SHORT&&(ee=i.RG16I),H===i.INT&&(ee=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),H===i.UNSIGNED_INT&&(ee=i.RGB32UI),H===i.BYTE&&(ee=i.RGB8I),H===i.SHORT&&(ee=i.RGB16I),H===i.INT&&(ee=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),H===i.UNSIGNED_INT&&(ee=i.RGBA32UI),H===i.BYTE&&(ee=i.RGBA8I),H===i.SHORT&&(ee=i.RGBA16I),H===i.INT&&(ee=i.RGBA32I)),S===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),S===i.RGBA){const De=le?zo:Je.getTransfer(ne);H===i.FLOAT&&(ee=i.RGBA32F),H===i.HALF_FLOAT&&(ee=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ee=De===at?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(A,S){let H;return A?S===null||S===Vi||S===Ds?H=i.DEPTH24_STENCIL8:S===Kn?H=i.DEPTH32F_STENCIL8:S===fr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Vi||S===Ds?H=i.DEPTH_COMPONENT24:S===Kn?H=i.DEPTH_COMPONENT32F:S===fr&&(H=i.DEPTH_COMPONENT16),H}function F(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==An&&A.minFilter!==Ut?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),D(S),S.isVideoTexture&&h.delete(S)}function L(A){const S=A.target;S.removeEventListener("dispose",L),y(S)}function D(A){const S=n.get(A);if(S.__webglInit===void 0)return;const H=A.source,ne=p.get(H);if(ne){const le=ne[S.__cacheKey];le.usedTimes--,le.usedTimes===0&&b(A),Object.keys(ne).length===0&&p.delete(H)}n.remove(A)}function b(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const H=A.source,ne=p.get(H);delete ne[S.__cacheKey],o.memory.textures--}function y(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let le=0;le<S.__webglFramebuffer[ne].length;le++)i.deleteFramebuffer(S.__webglFramebuffer[ne][le]);else i.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[ne]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=A.textures;for(let ne=0,le=H.length;ne<le;ne++){const ee=n.get(H[ne]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(H[ne])}n.remove(A)}let E=0;function U(){E=0}function I(){const A=E;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),E+=1,A}function O(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function N(A,S){const H=n.get(A);if(A.isVideoTexture&&ae(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,A,S);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function k(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Y(H,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function K(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Y(H,A,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function W(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Z(H,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}const ce={[ja]:i.REPEAT,[en]:i.CLAMP_TO_EDGE,[Ja]:i.MIRRORED_REPEAT},te={[An]:i.NEAREST,[Vd]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Zo]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},re={[$d]:i.NEVER,[Qd]:i.ALWAYS,[qd]:i.LESS,[xu]:i.LEQUAL,[Zd]:i.EQUAL,[Jd]:i.GEQUAL,[Kd]:i.GREATER,[jd]:i.NOTEQUAL};function pe(A,S){if(S.type===Kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ut||S.magFilter===Zo||S.magFilter===wr||S.magFilter===zi||S.minFilter===Ut||S.minFilter===Zo||S.minFilter===wr||S.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ce[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ce[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ce[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,te[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,te[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===An||S.minFilter!==wr&&S.minFilter!==zi||S.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ve(A,S){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const ne=S.source;let le=p.get(ne);le===void 0&&(le={},p.set(ne,le));const ee=O(S);if(ee!==A.__cacheKey){le[ee]===void 0&&(le[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),le[ee].usedTimes++;const De=le[A.__cacheKey];De!==void 0&&(le[A.__cacheKey].usedTimes--,De.usedTimes===0&&b(S)),A.__cacheKey=ee,A.__webglTexture=le[ee].texture}return H}function Y(A,S,H){let ne=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=i.TEXTURE_3D);const le=ve(A,S),ee=S.source;t.bindTexture(ne,A.__webglTexture,i.TEXTURE0+H);const De=n.get(ee);if(ee.version!==De.__version||le===!0){t.activeTexture(i.TEXTURE0+H);const Ee=Je.getPrimaries(Je.workingColorSpace),Ce=S.colorSpace===Mi?null:Je.getPrimaries(S.colorSpace),ge=S.colorSpace===Mi||Ee===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let oe=_(S.image,!1,s.maxTextureSize);oe=Ae(S,oe);const Te=r.convert(S.format,S.colorSpace),Fe=r.convert(S.type);let Ue=M(S.internalFormat,Te,Fe,S.colorSpace,S.isVideoTexture);pe(ne,S);let Ie;const Ge=S.mipmaps,He=S.isVideoTexture!==!0,ot=De.__version===void 0||le===!0,B=ee.dataReady,Re=F(S,oe);if(S.isDepthTexture)Ue=x(S.format===Is,S.type),ot&&(He?t.texStorage2D(i.TEXTURE_2D,1,Ue,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ue,oe.width,oe.height,0,Te,Fe,null));else if(S.isDataTexture)if(Ge.length>0){He&&ot&&t.texStorage2D(i.TEXTURE_2D,Re,Ue,Ge[0].width,Ge[0].height);for(let se=0,de=Ge.length;se<de;se++)Ie=Ge[se],He?B&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ie.width,Ie.height,Te,Fe,Ie.data):t.texImage2D(i.TEXTURE_2D,se,Ue,Ie.width,Ie.height,0,Te,Fe,Ie.data);S.generateMipmaps=!1}else He?(ot&&t.texStorage2D(i.TEXTURE_2D,Re,Ue,oe.width,oe.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Te,Fe,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,oe.width,oe.height,0,Te,Fe,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ue,Ge[0].width,Ge[0].height,oe.depth);for(let se=0,de=Ge.length;se<de;se++)if(Ie=Ge[se],S.format!==Sn)if(Te!==null)if(He){if(B)if(S.layerUpdates.size>0){const Se=dh(Ie.width,Ie.height,S.format,S.type);for(const be of S.layerUpdates){const We=Ie.data.subarray(be*Se/Ie.data.BYTES_PER_ELEMENT,(be+1)*Se/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,be,Ie.width,Ie.height,1,Te,We)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ie.width,Ie.height,oe.depth,Te,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Ue,Ie.width,Ie.height,oe.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ie.width,Ie.height,oe.depth,Te,Fe,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Ue,Ie.width,Ie.height,oe.depth,0,Te,Fe,Ie.data)}else{He&&ot&&t.texStorage2D(i.TEXTURE_2D,Re,Ue,Ge[0].width,Ge[0].height);for(let se=0,de=Ge.length;se<de;se++)Ie=Ge[se],S.format!==Sn?Te!==null?He?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Ie.width,Ie.height,Te,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Ue,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?B&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ie.width,Ie.height,Te,Fe,Ie.data):t.texImage2D(i.TEXTURE_2D,se,Ue,Ie.width,Ie.height,0,Te,Fe,Ie.data)}else if(S.isDataArrayTexture)if(He){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ue,oe.width,oe.height,oe.depth),B)if(S.layerUpdates.size>0){const se=dh(oe.width,oe.height,S.format,S.type);for(const de of S.layerUpdates){const Se=oe.data.subarray(de*se/oe.data.BYTES_PER_ELEMENT,(de+1)*se/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,oe.width,oe.height,1,Te,Fe,Se)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Te,Fe,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,oe.width,oe.height,oe.depth,0,Te,Fe,oe.data);else if(S.isData3DTexture)He?(ot&&t.texStorage3D(i.TEXTURE_3D,Re,Ue,oe.width,oe.height,oe.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Te,Fe,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,oe.width,oe.height,oe.depth,0,Te,Fe,oe.data);else if(S.isFramebufferTexture){if(ot)if(He)t.texStorage2D(i.TEXTURE_2D,Re,Ue,oe.width,oe.height);else{let se=oe.width,de=oe.height;for(let Se=0;Se<Re;Se++)t.texImage2D(i.TEXTURE_2D,Se,Ue,se,de,0,Te,Fe,null),se>>=1,de>>=1}}else if(Ge.length>0){if(He&&ot){const se=ye(Ge[0]);t.texStorage2D(i.TEXTURE_2D,Re,Ue,se.width,se.height)}for(let se=0,de=Ge.length;se<de;se++)Ie=Ge[se],He?B&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Te,Fe,Ie):t.texImage2D(i.TEXTURE_2D,se,Ue,Te,Fe,Ie);S.generateMipmaps=!1}else if(He){if(ot){const se=ye(oe);t.texStorage2D(i.TEXTURE_2D,Re,Ue,se.width,se.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Fe,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Te,Fe,oe);m(S)&&f(ne),De.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Z(A,S,H){if(S.image.length!==6)return;const ne=ve(A,S),le=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const ee=n.get(le);if(le.version!==ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+H);const De=Je.getPrimaries(Je.workingColorSpace),Ee=S.colorSpace===Mi?null:Je.getPrimaries(S.colorSpace),Ce=S.colorSpace===Mi||De===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ge=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let de=0;de<6;de++)!ge&&!oe?Te[de]=_(S.image[de],!0,s.maxCubemapSize):Te[de]=oe?S.image[de].image:S.image[de],Te[de]=Ae(S,Te[de]);const Fe=Te[0],Ue=r.convert(S.format,S.colorSpace),Ie=r.convert(S.type),Ge=M(S.internalFormat,Ue,Ie,S.colorSpace),He=S.isVideoTexture!==!0,ot=ee.__version===void 0||ne===!0,B=le.dataReady;let Re=F(S,Fe);pe(i.TEXTURE_CUBE_MAP,S);let se;if(ge){He&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Ge,Fe.width,Fe.height);for(let de=0;de<6;de++){se=Te[de].mipmaps;for(let Se=0;Se<se.length;Se++){const be=se[Se];S.format!==Sn?Ue!==null?He?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se,0,0,be.width,be.height,Ue,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se,Ge,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se,0,0,be.width,be.height,Ue,Ie,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se,Ge,be.width,be.height,0,Ue,Ie,be.data)}}}else{if(se=S.mipmaps,He&&ot){se.length>0&&Re++;const de=ye(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Ge,de.width,de.height)}for(let de=0;de<6;de++)if(oe){He?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Te[de].width,Te[de].height,Ue,Ie,Te[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ge,Te[de].width,Te[de].height,0,Ue,Ie,Te[de].data);for(let Se=0;Se<se.length;Se++){const We=se[Se].image[de].image;He?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se+1,0,0,We.width,We.height,Ue,Ie,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se+1,Ge,We.width,We.height,0,Ue,Ie,We.data)}}else{He?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ue,Ie,Te[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ge,Ue,Ie,Te[de]);for(let Se=0;Se<se.length;Se++){const be=se[Se];He?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se+1,0,0,Ue,Ie,be.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se+1,Ge,Ue,Ie,be.image[de])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),ee.__version=le.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xe(A,S,H,ne,le,ee){const De=r.convert(H.format,H.colorSpace),Ee=r.convert(H.type),Ce=M(H.internalFormat,De,Ee,H.colorSpace),ge=n.get(S),oe=n.get(H);if(oe.__renderTarget=S,!ge.__hasExternalTextures){const Te=Math.max(1,S.width>>ee),Fe=Math.max(1,S.height>>ee);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ee,Ce,Te,Fe,S.depth,0,De,Ee,null):t.texImage2D(le,ee,Ce,Te,Fe,0,De,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),fe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,le,oe.__webglTexture,0,X(S)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,le,oe.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(A,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const ne=S.depthTexture,le=ne&&ne.isDepthTexture?ne.type:null,ee=x(S.stencilBuffer,le),De=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=X(S);fe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,ee,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,ee,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ee,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,A)}else{const ne=S.textures;for(let le=0;le<ne.length;le++){const ee=ne[le],De=r.convert(ee.format,ee.colorSpace),Ee=r.convert(ee.type),Ce=M(ee.internalFormat,De,Ee,ee.colorSpace),ge=X(S);H&&fe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Ce,S.width,S.height):fe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,Ce,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(S.depthTexture);ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);const le=ne.__webglTexture,ee=X(S);if(S.depthTexture.format===As)fe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(S.depthTexture.format===Is)fe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ue(A){const S=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const ne=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){const le=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",le)};ne.addEventListener("dispose",le),S.__depthDisposeCallback=le}S.__boundDepthTexture=ne}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Q(S.__webglFramebuffer,A)}else if(H){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=i.createRenderbuffer(),V(S.__webglDepthbuffer[ne],A,!1);else{const le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),V(S.__webglDepthbuffer,A,!1);else{const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(A,S,H){const ne=n.get(A);S!==void 0&&xe(ne.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ue(A)}function Pe(A){const S=A.texture,H=n.get(A),ne=n.get(S);A.addEventListener("dispose",L);const le=A.textures,ee=A.isWebGLCubeRenderTarget===!0,De=le.length>1;if(De||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=S.version,o.memory.textures++),ee){H.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[Ee]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)H.__webglFramebuffer[Ee][Ce]=i.createFramebuffer()}else H.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)H.__webglFramebuffer[Ee]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(De)for(let Ee=0,Ce=le.length;Ee<Ce;Ee++){const ge=n.get(le[Ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&fe(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ee=0;Ee<le.length;Ee++){const Ce=le[Ee];H.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Ee]);const ge=r.convert(Ce.format,Ce.colorSpace),oe=r.convert(Ce.type),Te=M(Ce.internalFormat,ge,oe,Ce.colorSpace,A.isXRRenderTarget===!0),Fe=X(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Te,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,H.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),V(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),pe(i.TEXTURE_CUBE_MAP,S);for(let Ee=0;Ee<6;Ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)xe(H.__webglFramebuffer[Ee][Ce],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ce);else xe(H.__webglFramebuffer[Ee],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);m(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let Ee=0,Ce=le.length;Ee<Ce;Ee++){const ge=le[Ee],oe=n.get(ge);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),pe(i.TEXTURE_2D,ge),xe(H.__webglFramebuffer,A,ge,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),m(ge)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ne.__webglTexture),pe(Ee,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)xe(H.__webglFramebuffer[Ce],A,S,i.COLOR_ATTACHMENT0,Ee,Ce);else xe(H.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,Ee,0);m(S)&&f(Ee),t.unbindTexture()}A.depthBuffer&&ue(A)}function ie(A){const S=A.textures;for(let H=0,ne=S.length;H<ne;H++){const le=S[H];if(m(le)){const ee=w(A),De=n.get(le).__webglTexture;t.bindTexture(ee,De),f(ee),t.unbindTexture()}}}const he=[],P=[];function J(A){if(A.samples>0){if(fe(A)===!1){const S=A.textures,H=A.width,ne=A.height;let le=i.COLOR_BUFFER_BIT;const ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(A),Ee=S.length>1;if(Ee)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const ge=n.get(S[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,H,ne,0,0,H,ne,le,i.NEAREST),l===!0&&(he.length=0,P.length=0,he.push(i.COLOR_ATTACHMENT0+Ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(he.push(ee),P.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const ge=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function X(A){return Math.min(s.maxSamples,A.samples)}function fe(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ae(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ae(A,S){const H=A.colorSpace,ne=A.format,le=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==zs&&H!==Mi&&(Je.getTransfer(H)===at?(ne!==Sn||le!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function ye(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=U,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=me,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=fe}function r_(i,e){function t(n,s=Mi){let r;const o=Je.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return i.BYTE;if(n===cu)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===Vl)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Sr)return i.HALF_FLOAT;if(n===uu)return i.ALPHA;if(n===du)return i.RGB;if(n===Sn)return i.RGBA;if(n===fu)return i.LUMINANCE;if(n===pu)return i.LUMINANCE_ALPHA;if(n===As)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===mu)return i.RED;if(n===Yl)return i.RED_INTEGER;if(n===gu)return i.RG;if(n===$l)return i.RG_INTEGER;if(n===ql)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===_o)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===el||n===tl||n===nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===sl)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===al)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===Ml||n===yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_u||n===Sl||n===bl||n===Tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class o_ extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mt extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a_={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c_=`
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

}`;class h_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ai({vertexShader:l_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new j(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u_ extends Ki{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,g=null;const _=new h_,m=t.getContextAttributes();let f=null,w=null;const M=[],x=[],F=new _e;let C=null;const L=new Qt;L.viewport=new ht;const D=new Qt;D.viewport=new ht;const b=[L,D],y=new o_;let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=M[Y];return Z===void 0&&(Z=new ba,M[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=M[Y];return Z===void 0&&(Z=new ba,M[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=M[Y];return Z===void 0&&(Z=new ba,M[Y]=Z),Z.getHandSpace()};function I(Y){const Z=x.indexOf(Y.inputSource);if(Z===-1)return;const xe=M[Z];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,c||o),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",N);for(let Y=0;Y<M.length;Y++){const Z=x[Y];Z!==null&&(x[Y]=null,M[Y].disconnect(Z))}E=null,U=null,_.reset(),e.setRenderTarget(f),d=null,p=null,u=null,s=null,w=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",O),s.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Wi(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,xe=null,V=null;m.depth&&(V=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Is:As,xe=m.stencil?Ds:Vi);const Q={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(Q),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new Wi(p.textureWidth,p.textureHeight,{format:Sn,type:ii,depthTexture:new Du(p.textureWidth,p.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N(Y){for(let Z=0;Z<Y.removed.length;Z++){const xe=Y.removed[Z],V=x.indexOf(xe);V>=0&&(x[V]=null,M[V].disconnect(xe))}for(let Z=0;Z<Y.added.length;Z++){const xe=Y.added[Z];let V=x.indexOf(xe);if(V===-1){for(let ue=0;ue<M.length;ue++)if(ue>=x.length){x.push(xe),V=ue;break}else if(x[ue]===null){x[ue]=xe,V=ue;break}if(V===-1)break}const Q=M[V];Q&&Q.connect(xe)}}const k=new R,K=new R;function W(Y,Z,xe){k.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);const V=k.distanceTo(K),Q=Z.projectionMatrix.elements,ue=xe.projectionMatrix.elements,me=Q[14]/(Q[10]-1),Pe=Q[14]/(Q[10]+1),ie=(Q[9]+1)/Q[5],he=(Q[9]-1)/Q[5],P=(Q[8]-1)/Q[0],J=(ue[8]+1)/ue[0],X=me*P,fe=me*J,ae=V/(-P+J),Ae=ae*-P;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ae),Y.translateZ(ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Q[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ye=me+ae,A=Pe+ae,S=X-Ae,H=fe+(V-Ae),ne=ie*Pe/A*ye,le=he*Pe/A*ye;Y.projectionMatrix.makePerspective(S,H,ne,le,ye,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Z=Y.near,xe=Y.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),y.near=D.near=L.near=Z,y.far=D.far=L.far=xe,(E!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,U=y.far),L.layers.mask=Y.layers.mask|2,D.layers.mask=Y.layers.mask|4,y.layers.mask=L.layers.mask|D.layers.mask;const V=Y.parent,Q=y.cameras;ce(y,V);for(let ue=0;ue<Q.length;ue++)ce(Q[ue],V);Q.length===2?W(y,L,D):y.projectionMatrix.copy(L.projectionMatrix),te(Y,y,V)};function te(Y,Z,xe){xe===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=wl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let re=null;function pe(Y,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const xe=h.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let V=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,V=!0);for(let ue=0;ue<xe.length;ue++){const me=xe[ue];let Pe=null;if(d!==null)Pe=d.getViewport(me);else{const he=u.getViewSubImage(p,me);Pe=he.viewport,ue===0&&(e.setRenderTargetTextures(w,he.colorTexture,p.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(w))}let ie=b[ue];ie===void 0&&(ie=new Qt,ie.layers.enable(ue),ie.viewport=new ht,b[ue]=ie),ie.matrix.fromArray(me.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(me.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ue===0&&(y.matrix.copy(ie.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),V===!0&&y.cameras.push(ie)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const ue=u.getDepthInformation(xe[0]);ue&&ue.isValid&&ue.texture&&_.init(e,ue,s.renderState)}}for(let xe=0;xe<M.length;xe++){const V=x[xe],Q=M[xe];V!==null&&Q!==void 0&&Q.update(V,Z,c||o)}re&&re(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ve=new Pu;ve.setAnimationLoop(pe),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}}const Oi=new yt,d_=new tt;function f_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Au(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,M,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Vt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Vt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),M=w.envMap,x=w.envMapRotation;M&&(m.envMap.value=M,Oi.copy(x),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(Oi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){const x=M.program;n.uniformBlockBinding(w,x)}function c(w,M){let x=s[w.id];x===void 0&&(g(w),x=h(w),s[w.id]=x,w.addEventListener("dispose",m));const F=M.program;n.updateUBOMapping(w,F);const C=e.render.frame;r[w.id]!==C&&(p(w),r[w.id]=C)}function h(w){const M=u();w.__bindingPointIndex=M;const x=i.createBuffer(),F=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,F,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const M=s[w.id],x=w.uniforms,F=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,L=x.length;C<L;C++){const D=Array.isArray(x[C])?x[C]:[x[C]];for(let b=0,y=D.length;b<y;b++){const E=D[b];if(d(E,C,b,F)===!0){const U=E.__offset,I=Array.isArray(E.value)?E.value:[E.value];let O=0;for(let N=0;N<I.length;N++){const k=I[N],K=_(k);typeof k=="number"||typeof k=="boolean"?(E.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,U+O,E.__data)):k.isMatrix3?(E.__data[0]=k.elements[0],E.__data[1]=k.elements[1],E.__data[2]=k.elements[2],E.__data[3]=0,E.__data[4]=k.elements[3],E.__data[5]=k.elements[4],E.__data[6]=k.elements[5],E.__data[7]=0,E.__data[8]=k.elements[6],E.__data[9]=k.elements[7],E.__data[10]=k.elements[8],E.__data[11]=0):(k.toArray(E.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,M,x,F){const C=w.value,L=M+"_"+x;if(F[L]===void 0)return typeof C=="number"||typeof C=="boolean"?F[L]=C:F[L]=C.clone(),!0;{const D=F[L];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return F[L]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(w){const M=w.uniforms;let x=0;const F=16;for(let L=0,D=M.length;L<D;L++){const b=Array.isArray(M[L])?M[L]:[M[L]];for(let y=0,E=b.length;y<E;y++){const U=b[y],I=Array.isArray(U.value)?U.value:[U.value];for(let O=0,N=I.length;O<N;O++){const k=I[O],K=_(k),W=x%F,ce=W%K.boundary,te=W+ce;x+=ce,te!==0&&F-te<K.storage&&(x+=F-te),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=K.storage}}}const C=x%F;return C>0&&(x+=F-C),w.__size=x,w.__cache={},this}function _(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class m_{constructor(e={}){const{canvas:t=nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=Ti,this.toneMappingExposure=1;const x=this;let F=!1,C=0,L=0,D=null,b=-1,y=null;const E=new ht,U=new ht;let I=null;const O=new qe(0);let N=0,k=t.width,K=t.height,W=1,ce=null,te=null;const re=new ht(0,0,k,K),pe=new ht(0,0,k,K);let ve=!1;const Y=new jl;let Z=!1,xe=!1;const V=new tt,Q=new tt,ue=new R,me=new ht,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function he(){return D===null?W:1}let P=n;function J(T,G){return t.getContext(T,G)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hl}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",be,!1),P===null){const G="webgl2";if(P=J(G,T),P===null)throw J(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let X,fe,ae,Ae,ye,A,S,H,ne,le,ee,De,Ee,Ce,ge,oe,Te,Fe,Ue,Ie,Ge,He,ot,B;function Re(){X=new M0(P),X.init(),He=new r_(P,X),fe=new p0(P,X,e,He),ae=new n_(P,X),fe.reverseDepthBuffer&&p&&ae.buffers.depth.setReversed(!0),Ae=new b0(P),ye=new zg,A=new s_(P,X,ae,ye,fe,He,Ae),S=new g0(x),H=new x0(x),ne=new Pf(P),ot=new d0(P,ne),le=new y0(P,ne,Ae,ot),ee=new E0(P,le,ne,Ae),Ue=new T0(P,fe,A),oe=new m0(ye),De=new Gg(x,S,H,X,fe,ot,oe),Ee=new f_(x,ye),Ce=new Vg,ge=new Zg(X),Fe=new u0(x,S,H,ae,ee,d,l),Te=new e_(x,ee,fe),B=new p_(P,Ae,fe,ae),Ie=new f0(P,X,Ae),Ge=new S0(P,X,Ae),Ae.programs=De.programs,x.capabilities=fe,x.extensions=X,x.properties=ye,x.renderLists=Ce,x.shadowMap=Te,x.state=ae,x.info=Ae}Re();const se=new u_(x,P);this.xr=se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=X.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=X.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(k,K,!1))},this.getSize=function(T){return T.set(k,K)},this.setSize=function(T,G,$=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,K=G,t.width=Math.floor(T*W),t.height=Math.floor(G*W),$===!0&&(t.style.width=T+"px",t.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(k*W,K*W).floor()},this.setDrawingBufferSize=function(T,G,$){k=T,K=G,W=$,t.width=Math.floor(T*$),t.height=Math.floor(G*$),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,G,$,q){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,G,$,q),ae.viewport(E.copy(re).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(pe)},this.setScissor=function(T,G,$,q){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,G,$,q),ae.scissor(U.copy(pe).multiplyScalar(W).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(T){ae.setScissorTest(ve=T)},this.setOpaqueSort=function(T){ce=T},this.setTransparentSort=function(T){te=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(T=!0,G=!0,$=!0){let q=0;if(T){let z=!1;if(D!==null){const Me=D.texture.format;z=Me===ql||Me===$l||Me===Yl}if(z){const Me=D.texture.type,Le=Me===ii||Me===Vi||Me===fr||Me===Ds||Me===Wl||Me===Xl,Ne=Fe.getClearColor(),Oe=Fe.getClearAlpha(),ze=Ne.r,Xe=Ne.g,Be=Ne.b;Le?(g[0]=ze,g[1]=Xe,g[2]=Be,g[3]=Oe,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=ze,_[1]=Xe,_[2]=Be,_[3]=Oe,P.clearBufferiv(P.COLOR,0,_))}else q|=P.COLOR_BUFFER_BIT}G&&(q|=P.DEPTH_BUFFER_BIT),$&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ce.dispose(),ge.dispose(),ye.dispose(),S.dispose(),H.dispose(),ee.dispose(),ot.dispose(),B.dispose(),De.dispose(),se.dispose(),se.removeEventListener("sessionstart",cc),se.removeEventListener("sessionend",hc),Li.stop()};function de(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const T=Ae.autoReset,G=Te.enabled,$=Te.autoUpdate,q=Te.needsUpdate,z=Te.type;Re(),Ae.autoReset=T,Te.enabled=G,Te.autoUpdate=$,Te.needsUpdate=q,Te.type=z}function be(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function We(T){const G=T.target;G.removeEventListener("dispose",We),Mt(G)}function Mt(T){Nt(T),ye.remove(T)}function Nt(T){const G=ye.get(T).programs;G!==void 0&&(G.forEach(function($){De.releaseProgram($)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,$,q,z,Me){G===null&&(G=Pe);const Le=z.isMesh&&z.matrixWorld.determinant()<0,Ne=dd(T,G,$,q,z);ae.setMaterial(q,Le);let Oe=$.index,ze=1;if(q.wireframe===!0){if(Oe=le.getWireframeAttribute($),Oe===void 0)return;ze=2}const Xe=$.drawRange,Be=$.attributes.position;let Qe=Xe.start*ze,ut=(Xe.start+Xe.count)*ze;Me!==null&&(Qe=Math.max(Qe,Me.start*ze),ut=Math.min(ut,(Me.start+Me.count)*ze)),Oe!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,Oe.count)):Be!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Be.count));const ft=ut-Qe;if(ft<0||ft===1/0)return;ot.setup(z,q,Ne,$,Oe);let Xt,nt=Ie;if(Oe!==null&&(Xt=ne.get(Oe),nt=Ge,nt.setIndex(Xt)),z.isMesh)q.wireframe===!0?(ae.setLineWidth(q.wireframeLinewidth*he()),nt.setMode(P.LINES)):nt.setMode(P.TRIANGLES);else if(z.isLine){let ke=q.linewidth;ke===void 0&&(ke=1),ae.setLineWidth(ke*he()),z.isLineSegments?nt.setMode(P.LINES):z.isLineLoop?nt.setMode(P.LINE_LOOP):nt.setMode(P.LINE_STRIP)}else z.isPoints?nt.setMode(P.POINTS):z.isSprite&&nt.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)nt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const ke=z._multiDrawStarts,Gn=z._multiDrawCounts,it=z._multiDrawCount,hn=Oe?ne.get(Oe).bytesPerElement:1,ji=ye.get(q).currentProgram.getUniforms();for(let Kt=0;Kt<it;Kt++)ji.setValue(P,"_gl_DrawID",Kt),nt.render(ke[Kt]/hn,Gn[Kt])}else if(z.isInstancedMesh)nt.renderInstances(Qe,ft,z.count);else if($.isInstancedBufferGeometry){const ke=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Gn=Math.min($.instanceCount,ke);nt.renderInstances(Qe,ft,Gn)}else nt.render(Qe,ft)};function st(T,G,$){T.transparent===!0&&T.side===Dt&&T.forceSinglePass===!1?(T.side=Vt,T.needsUpdate=!0,Er(T,G,$),T.side=wi,T.needsUpdate=!0,Er(T,G,$),T.side=Dt):Er(T,G,$)}this.compile=function(T,G,$=null){$===null&&($=T),f=ge.get($),f.init(G),M.push(f),$.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),T!==$&&T.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const q=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const Me=z.material;if(Me)if(Array.isArray(Me))for(let Le=0;Le<Me.length;Le++){const Ne=Me[Le];st(Ne,$,z),q.add(Ne)}else st(Me,$,z),q.add(Me)}),M.pop(),f=null,q},this.compileAsync=function(T,G,$=null){const q=this.compile(T,G,$);return new Promise(z=>{function Me(){if(q.forEach(function(Le){ye.get(Le).currentProgram.isReady()&&q.delete(Le)}),q.size===0){z(T);return}setTimeout(Me,10)}X.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let cn=null;function kn(T){cn&&cn(T)}function cc(){Li.stop()}function hc(){Li.start()}const Li=new Pu;Li.setAnimationLoop(kn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(T){cn=T,se.setAnimationLoop(T),T===null?Li.stop():Li.start()},se.addEventListener("sessionstart",cc),se.addEventListener("sessionend",hc),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(G),G=se.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,G,D),f=ge.get(T,M.length),f.init(G),M.push(f),Q.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Y.setFromProjectionMatrix(Q),xe=this.localClippingEnabled,Z=oe.init(this.clippingPlanes,xe),m=Ce.get(T,w.length),m.init(),w.push(m),se.enabled===!0&&se.isPresenting===!0){const Me=x.xr.getDepthSensingMesh();Me!==null&&qo(Me,G,-1/0,x.sortObjects)}qo(T,G,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,te),ie=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ie&&Fe.addToRenderList(m,T),this.info.render.frame++,Z===!0&&oe.beginShadows();const $=f.state.shadowsArray;Te.render($,T,G),Z===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(f.setupLights(),G.isArrayCamera){const Me=G.cameras;if(z.length>0)for(let Le=0,Ne=Me.length;Le<Ne;Le++){const Oe=Me[Le];dc(q,z,T,Oe)}ie&&Fe.render(T);for(let Le=0,Ne=Me.length;Le<Ne;Le++){const Oe=Me[Le];uc(m,T,Oe,Oe.viewport)}}else z.length>0&&dc(q,z,T,G),ie&&Fe.render(T),uc(m,T,G);D!==null&&(A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(x,T,G),ot.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],Z===!0&&oe.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function qo(T,G,$,q){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){q&&me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const Le=ee.update(T),Ne=T.material;Ne.visible&&m.push(T,Le,Ne,$,me.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const Le=ee.update(T),Ne=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),me.copy(T.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),me.copy(Le.boundingSphere.center)),me.applyMatrix4(T.matrixWorld).applyMatrix4(Q)),Array.isArray(Ne)){const Oe=Le.groups;for(let ze=0,Xe=Oe.length;ze<Xe;ze++){const Be=Oe[ze],Qe=Ne[Be.materialIndex];Qe&&Qe.visible&&m.push(T,Le,Qe,$,me.z,Be)}}else Ne.visible&&m.push(T,Le,Ne,$,me.z,null)}}const Me=T.children;for(let Le=0,Ne=Me.length;Le<Ne;Le++)qo(Me[Le],G,$,q)}function uc(T,G,$,q){const z=T.opaque,Me=T.transmissive,Le=T.transparent;f.setupLightsView($),Z===!0&&oe.setGlobalState(x.clippingPlanes,$),q&&ae.viewport(E.copy(q)),z.length>0&&Tr(z,G,$),Me.length>0&&Tr(Me,G,$),Le.length>0&&Tr(Le,G,$),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function dc(T,G,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new Wi(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Sr:ii,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const Me=f.state.transmissionRenderTarget[q.id],Le=q.viewport||E;Me.setSize(Le.z,Le.w);const Ne=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(O),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear(),ie&&Fe.render($);const Oe=x.toneMapping;x.toneMapping=Ti;const ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),Z===!0&&oe.setGlobalState(x.clippingPlanes,q),Tr(T,$,q),A.updateMultisampleRenderTarget(Me),A.updateRenderTargetMipmap(Me),X.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Be=0,Qe=G.length;Be<Qe;Be++){const ut=G[Be],ft=ut.object,Xt=ut.geometry,nt=ut.material,ke=ut.group;if(nt.side===Dt&&ft.layers.test(q.layers)){const Gn=nt.side;nt.side=Vt,nt.needsUpdate=!0,fc(ft,$,q,Xt,nt,ke),nt.side=Gn,nt.needsUpdate=!0,Xe=!0}}Xe===!0&&(A.updateMultisampleRenderTarget(Me),A.updateRenderTargetMipmap(Me))}x.setRenderTarget(Ne),x.setClearColor(O,N),ze!==void 0&&(q.viewport=ze),x.toneMapping=Oe}function Tr(T,G,$){const q=G.isScene===!0?G.overrideMaterial:null;for(let z=0,Me=T.length;z<Me;z++){const Le=T[z],Ne=Le.object,Oe=Le.geometry,ze=q===null?Le.material:q,Xe=Le.group;Ne.layers.test($.layers)&&fc(Ne,G,$,Oe,ze,Xe)}}function fc(T,G,$,q,z,Me){T.onBeforeRender(x,G,$,q,z,Me),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(x,G,$,q,T,Me),z.transparent===!0&&z.side===Dt&&z.forceSinglePass===!1?(z.side=Vt,z.needsUpdate=!0,x.renderBufferDirect($,G,q,z,T,Me),z.side=wi,z.needsUpdate=!0,x.renderBufferDirect($,G,q,z,T,Me),z.side=Dt):x.renderBufferDirect($,G,q,z,T,Me),T.onAfterRender(x,G,$,q,z,Me)}function Er(T,G,$){G.isScene!==!0&&(G=Pe);const q=ye.get(T),z=f.state.lights,Me=f.state.shadowsArray,Le=z.state.version,Ne=De.getParameters(T,z.state,Me,G,$),Oe=De.getProgramCacheKey(Ne);let ze=q.programs;q.environment=T.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(T.isMeshStandardMaterial?H:S).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",We),ze=new Map,q.programs=ze);let Xe=ze.get(Oe);if(Xe!==void 0){if(q.currentProgram===Xe&&q.lightsStateVersion===Le)return mc(T,Ne),Xe}else Ne.uniforms=De.getUniforms(T),T.onBeforeCompile(Ne,x),Xe=De.acquireProgram(Ne,Oe),ze.set(Oe,Xe),q.uniforms=Ne.uniforms;const Be=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=oe.uniform),mc(T,Ne),q.needsLights=pd(T),q.lightsStateVersion=Le,q.needsLights&&(Be.ambientLightColor.value=z.state.ambient,Be.lightProbe.value=z.state.probe,Be.directionalLights.value=z.state.directional,Be.directionalLightShadows.value=z.state.directionalShadow,Be.spotLights.value=z.state.spot,Be.spotLightShadows.value=z.state.spotShadow,Be.rectAreaLights.value=z.state.rectArea,Be.ltc_1.value=z.state.rectAreaLTC1,Be.ltc_2.value=z.state.rectAreaLTC2,Be.pointLights.value=z.state.point,Be.pointLightShadows.value=z.state.pointShadow,Be.hemisphereLights.value=z.state.hemi,Be.directionalShadowMap.value=z.state.directionalShadowMap,Be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Be.spotShadowMap.value=z.state.spotShadowMap,Be.spotLightMatrix.value=z.state.spotLightMatrix,Be.spotLightMap.value=z.state.spotLightMap,Be.pointShadowMap.value=z.state.pointShadowMap,Be.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Xe,q.uniformsList=null,Xe}function pc(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Mo.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function mc(T,G){const $=ye.get(T);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function dd(T,G,$,q,z){G.isScene!==!0&&(G=Pe),A.resetTextureUnits();const Me=G.fog,Le=q.isMeshStandardMaterial?G.environment:null,Ne=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:zs,Oe=(q.isMeshStandardMaterial?H:S).get(q.envMap||Le),ze=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Be=!!$.morphAttributes.position,Qe=!!$.morphAttributes.normal,ut=!!$.morphAttributes.color;let ft=Ti;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ft=x.toneMapping);const Xt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,nt=Xt!==void 0?Xt.length:0,ke=ye.get(q),Gn=f.state.lights;if(Z===!0&&(xe===!0||T!==y)){const tn=T===y&&q.id===b;oe.setState(q,T,tn)}let it=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Gn.state.version||ke.outputColorSpace!==Ne||z.isBatchedMesh&&ke.batching===!1||!z.isBatchedMesh&&ke.batching===!0||z.isBatchedMesh&&ke.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ke.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ke.instancing===!1||!z.isInstancedMesh&&ke.instancing===!0||z.isSkinnedMesh&&ke.skinning===!1||!z.isSkinnedMesh&&ke.skinning===!0||z.isInstancedMesh&&ke.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ke.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ke.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ke.instancingMorph===!1&&z.morphTexture!==null||ke.envMap!==Oe||q.fog===!0&&ke.fog!==Me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==oe.numPlanes||ke.numIntersection!==oe.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==Xe||ke.morphTargets!==Be||ke.morphNormals!==Qe||ke.morphColors!==ut||ke.toneMapping!==ft||ke.morphTargetsCount!==nt)&&(it=!0):(it=!0,ke.__version=q.version);let hn=ke.currentProgram;it===!0&&(hn=Er(q,G,z));let ji=!1,Kt=!1,Xs=!1;const pt=hn.getUniforms(),Pn=ke.uniforms;if(ae.useProgram(hn.program)&&(ji=!0,Kt=!0,Xs=!0),q.id!==b&&(b=q.id,Kt=!0),ji||y!==T){ae.buffers.depth.getReversed()?(V.copy(T.projectionMatrix),rf(V),of(V),pt.setValue(P,"projectionMatrix",V)):pt.setValue(P,"projectionMatrix",T.projectionMatrix),pt.setValue(P,"viewMatrix",T.matrixWorldInverse);const oi=pt.map.cameraPosition;oi!==void 0&&oi.setValue(P,ue.setFromMatrixPosition(T.matrixWorld)),fe.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Kt=!0,Xs=!0)}if(z.isSkinnedMesh){pt.setOptional(P,z,"bindMatrix"),pt.setOptional(P,z,"bindMatrixInverse");const tn=z.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),pt.setValue(P,"boneTexture",tn.boneTexture,A))}z.isBatchedMesh&&(pt.setOptional(P,z,"batchingTexture"),pt.setValue(P,"batchingTexture",z._matricesTexture,A),pt.setOptional(P,z,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",z._indirectTexture,A),pt.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",z._colorsTexture,A));const Ys=$.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&Ue.update(z,$,hn),(Kt||ke.receiveShadow!==z.receiveShadow)&&(ke.receiveShadow=z.receiveShadow,pt.setValue(P,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Pn.envMap.value=Oe,Pn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&G.environment!==null&&(Pn.envMapIntensity.value=G.environmentIntensity),Kt&&(pt.setValue(P,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&fd(Pn,Xs),Me&&q.fog===!0&&Ee.refreshFogUniforms(Pn,Me),Ee.refreshMaterialUniforms(Pn,q,W,K,f.state.transmissionRenderTarget[T.id]),Mo.upload(P,pc(ke),Pn,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Mo.upload(P,pc(ke),Pn,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(P,"center",z.center),pt.setValue(P,"modelViewMatrix",z.modelViewMatrix),pt.setValue(P,"normalMatrix",z.normalMatrix),pt.setValue(P,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const tn=q.uniformsGroups;for(let oi=0,ai=tn.length;oi<ai;oi++){const gc=tn[oi];B.update(gc,hn),B.bind(gc,hn)}}return hn}function fd(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function pd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,G,$){ye.get(T.texture).__webglTexture=G,ye.get(T.depthTexture).__webglTexture=$;const q=ye.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=$===void 0,q.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,G){const $=ye.get(T);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,$=0){D=T,C=G,L=$;let q=!0,z=null,Me=!1,Le=!1;if(T){const Oe=ye.get(T);if(Oe.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(Oe.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Oe.__hasExternalTextures)A.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(Oe.__boundDepthTexture!==Be){if(Be!==null&&ye.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Le=!0);const Xe=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[G])?z=Xe[G][$]:z=Xe[G],Me=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?z=ye.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?z=Xe[$]:z=Xe,E.copy(T.viewport),U.copy(T.scissor),I=T.scissorTest}else E.copy(re).multiplyScalar(W).floor(),U.copy(pe).multiplyScalar(W).floor(),I=ve;if(ae.bindFramebuffer(P.FRAMEBUFFER,z)&&q&&ae.drawBuffers(T,z),ae.viewport(E),ae.scissor(U),ae.setScissorTest(I),Me){const Oe=ye.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+G,Oe.__webglTexture,$)}else if(Le){const Oe=ye.get(T.texture),ze=G||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oe.__webglTexture,$||0,ze)}b=-1},this.readRenderTargetPixels=function(T,G,$,q,z,Me,Le){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){ae.bindFramebuffer(P.FRAMEBUFFER,Ne);try{const Oe=T.texture,ze=Oe.format,Xe=Oe.type;if(!fe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-q&&$>=0&&$<=T.height-z&&P.readPixels(G,$,q,z,He.convert(ze),He.convert(Xe),Me)}finally{const Oe=D!==null?ye.get(D).__webglFramebuffer:null;ae.bindFramebuffer(P.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,G,$,q,z,Me,Le){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){const Oe=T.texture,ze=Oe.format,Xe=Oe.type;if(!fe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=T.width-q&&$>=0&&$<=T.height-z){ae.bindFramebuffer(P.FRAMEBUFFER,Ne);const Be=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Be),P.bufferData(P.PIXEL_PACK_BUFFER,Me.byteLength,P.STREAM_READ),P.readPixels(G,$,q,z,He.convert(ze),He.convert(Xe),0);const Qe=D!==null?ye.get(D).__webglFramebuffer:null;ae.bindFramebuffer(P.FRAMEBUFFER,Qe);const ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await sf(P,ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Be),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Me),P.deleteBuffer(Be),P.deleteSync(ut),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,G=null,$=0){T.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1]);const q=Math.pow(2,-$),z=Math.floor(T.image.width*q),Me=Math.floor(T.image.height*q),Le=G!==null?G.x:0,Ne=G!==null?G.y:0;A.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,$,0,0,Le,Ne,z,Me),ae.unbindTexture()},this.copyTextureToTexture=function(T,G,$=null,q=null,z=0){T.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],G=arguments[2],z=arguments[3]||0,$=null);let Me,Le,Ne,Oe,ze,Xe,Be,Qe,ut;const ft=T.isCompressedTexture?T.mipmaps[z]:T.image;$!==null?(Me=$.max.x-$.min.x,Le=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,Oe=$.min.x,ze=$.min.y,Xe=$.isBox3?$.min.z:0):(Me=ft.width,Le=ft.height,Ne=ft.depth||1,Oe=0,ze=0,Xe=0),q!==null?(Be=q.x,Qe=q.y,ut=q.z):(Be=0,Qe=0,ut=0);const Xt=He.convert(G.format),nt=He.convert(G.type);let ke;G.isData3DTexture?(A.setTexture3D(G,0),ke=P.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(A.setTexture2DArray(G,0),ke=P.TEXTURE_2D_ARRAY):(A.setTexture2D(G,0),ke=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);const Gn=P.getParameter(P.UNPACK_ROW_LENGTH),it=P.getParameter(P.UNPACK_IMAGE_HEIGHT),hn=P.getParameter(P.UNPACK_SKIP_PIXELS),ji=P.getParameter(P.UNPACK_SKIP_ROWS),Kt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Oe),P.pixelStorei(P.UNPACK_SKIP_ROWS,ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xe);const Xs=T.isDataArrayTexture||T.isData3DTexture,pt=G.isDataArrayTexture||G.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Pn=ye.get(T),Ys=ye.get(G),tn=ye.get(Pn.__renderTarget),oi=ye.get(Ys.__renderTarget);ae.bindFramebuffer(P.READ_FRAMEBUFFER,tn.__webglFramebuffer),ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let ai=0;ai<Ne;ai++)Xs&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(T).__webglTexture,z,Xe+ai),T.isDepthTexture?(pt&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(G).__webglTexture,z,ut+ai),P.blitFramebuffer(Oe,ze,Me,Le,Be,Qe,Me,Le,P.DEPTH_BUFFER_BIT,P.NEAREST)):pt?P.copyTexSubImage3D(ke,z,Be,Qe,ut+ai,Oe,ze,Me,Le):P.copyTexSubImage2D(ke,z,Be,Qe,ut+ai,Oe,ze,Me,Le);ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pt?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(ke,z,Be,Qe,ut,Me,Le,Ne,Xt,nt,ft.data):G.isCompressedArrayTexture?P.compressedTexSubImage3D(ke,z,Be,Qe,ut,Me,Le,Ne,Xt,ft.data):P.texSubImage3D(ke,z,Be,Qe,ut,Me,Le,Ne,Xt,nt,ft):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,z,Be,Qe,Me,Le,Xt,nt,ft.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,z,Be,Qe,ft.width,ft.height,Xt,ft.data):P.texSubImage2D(P.TEXTURE_2D,z,Be,Qe,Me,Le,Xt,nt,ft);P.pixelStorei(P.UNPACK_ROW_LENGTH,Gn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,it),P.pixelStorei(P.UNPACK_SKIP_PIXELS,hn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ji),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Kt),z===0&&G.generateMipmaps&&P.generateMipmap(ke),ae.unbindTexture()},this.copyTextureToTexture3D=function(T,G,$=null,q=null,z=0){return T.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,q=arguments[1]||null,T=arguments[2],G=arguments[3],z=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,G,$,q,z)},this.initRenderTarget=function(T){ye.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ae.unbindTexture()},this.resetState=function(){C=0,L=0,D=null,ae.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class Ou extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yt,this.environmentIntensity=1,this.environmentRotation=new yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class g_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new R;class Co{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Co(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bu extends Pi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ds;const js=new R,fs=new R,ps=new R,ms=new _e,Js=new _e,ku=new tt,$r=new R,Qs=new R,qr=new R,fh=new _e,Ta=new _e,ph=new _e;class __ extends At{constructor(e=new Bu){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new ln;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new g_(t,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new Co(n,3,0,!1)),ds.setAttribute("uv",new Co(n,2,3,!1))}this.geometry=ds,this.material=e,this.center=new _e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),ku.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Zr($r.set(-.5,-.5,0),ps,o,fs,s,r),Zr(Qs.set(.5,-.5,0),ps,o,fs,s,r),Zr(qr.set(.5,.5,0),ps,o,fs,s,r),fh.set(0,0),Ta.set(1,0),ph.set(1,1);let a=e.ray.intersectTriangle($r,Qs,qr,!1,js);if(a===null&&(Zr(Qs.set(-.5,.5,0),ps,o,fs,s,r),Ta.set(0,1),a=e.ray.intersectTriangle($r,qr,Qs,!1,js),a===null))return;const l=e.ray.origin.distanceTo(js);l<e.near||l>e.far||t.push({distance:l,point:js.clone(),uv:rn.getInterpolation(js,$r,Qs,qr,fh,Ta,ph,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zr(i,e,t,n,s,r){ms.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Js.x=r*ms.x-s*ms.y,Js.y=s*ms.x+r*ms.y):Js.copy(ms),i.copy(e),i.x+=Js.x,i.y+=Js.y,i.applyMatrix4(ku)}class Ql extends Pi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ro=new R,Po=new R,mh=new tt,er=new Zl,Kr=new Ho,Ea=new R,gh=new R;class v_ extends At{constructor(e=new ln,t=new Ql){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ro.fromBufferAttribute(t,s-1),Po.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ro.distanceTo(Po);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;mh.copy(s).invert(),er.copy(e.ray).applyMatrix4(mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const f=h.getX(_),w=h.getX(_+1),M=jr(this,e,er,l,f,w);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),f=jr(this,e,er,l,_,m);f&&t.push(f)}}else{const d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const f=jr(this,e,er,l,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=jr(this,e,er,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jr(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Ro.fromBufferAttribute(o,s),Po.fromBufferAttribute(o,r),t.distanceSqToSegment(Ro,Po,Ea,gh)>n)return;Ea.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ea);if(!(l<e.near||l>e.far))return{distance:l,point:gh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const _h=new R,vh=new R;class x_ extends v_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_h.fromBufferAttribute(t,s),vh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_h.distanceTo(vh);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lo extends Wt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],p=n[s+1]-h,d=(o-h)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new _e:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,s=[],r=[],o=[],a=new R,l=new tt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(It(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(It(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ec extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new _e){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class M_ extends ec{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function tc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;p*=h,d*=h,s(o,a,p,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Jr=new R,wa=new tc,Aa=new tc,Ca=new tc;class y_ extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Jr.subVectors(s[0],s[1]).add(s[0]),c=Jr);const u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),wa.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,_,m),Aa.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,_,m),Ca.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(wa.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Aa.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Ca.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(wa.calc(l),Aa.calc(l),Ca.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function S_(i,e){const t=1-i;return t*t*e}function b_(i,e){return 2*(1-i)*i*e}function T_(i,e){return i*i*e}function lr(i,e,t,n){return S_(i,e)+b_(i,t)+T_(i,n)}function E_(i,e){const t=1-i;return t*t*t*e}function w_(i,e){const t=1-i;return 3*t*t*i*e}function A_(i,e){return 3*(1-i)*i*i*e}function C_(i,e){return i*i*i*e}function cr(i,e,t,n,s){return E_(i,e)+w_(i,t)+A_(i,n)+C_(i,s)}class Gu extends Bn{constructor(e=new _e,t=new _e,n=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new _e){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(e,s.x,r.x,o.x,a.x),cr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R_ extends Bn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(e,s.x,r.x,o.x,a.x),cr(e,s.y,r.y,o.y,a.y),cr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zu extends Bn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P_ extends Bn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hu extends Bn{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(e,s.x,r.x,o.x),lr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L_ extends Bn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(e,s.x,r.x,o.x),lr(e,s.y,r.y,o.y),lr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vu extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(xh(a,l.x,c.x,h.x,u.x),xh(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new _e().fromArray(s))}return this}}var Rl=Object.freeze({__proto__:null,ArcCurve:M_,CatmullRomCurve3:y_,CubicBezierCurve:Gu,CubicBezierCurve3:R_,EllipseCurve:ec,LineCurve:zu,LineCurve3:P_,QuadraticBezierCurve:Hu,QuadraticBezierCurve3:L_,SplineCurve:Vu});class D_ extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Rl[s.type]().fromJSON(s))}return this}}class Ht extends D_{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new zu(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Hu(this.currentPoint.clone(),new _e(e,t),new _e(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Gu(this.currentPoint.clone(),new _e(e,t),new _e(n,s),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Vu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new ec(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ze extends ln{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],d=[];let g=0;const _=[],m=n/2;let f=0;w(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(p,3)),this.setAttribute("uv",new kt(d,2));function w(){const x=new R,F=new R;let C=0;const L=(t-e)/n;for(let D=0;D<=r;D++){const b=[],y=D/r,E=y*(t-e)+e;for(let U=0;U<=s;U++){const I=U/s,O=I*l+a,N=Math.sin(O),k=Math.cos(O);F.x=E*N,F.y=-y*n+m,F.z=E*k,u.push(F.x,F.y,F.z),x.set(N,L,k).normalize(),p.push(x.x,x.y,x.z),d.push(I,1-y),b.push(g++)}_.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){const y=_[b][D],E=_[b+1][D],U=_[b+1][D+1],I=_[b][D+1];(e>0||b!==0)&&(h.push(y,E,I),C+=3),(t>0||b!==r-1)&&(h.push(E,U,I),C+=3)}c.addGroup(f,C,0),f+=C}function M(x){const F=g,C=new _e,L=new R;let D=0;const b=x===!0?e:t,y=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*y,0),p.push(0,y,0),d.push(.5,.5),g++;const E=g;for(let U=0;U<=s;U++){const O=U/s*l+a,N=Math.cos(O),k=Math.sin(O);L.x=b*k,L.y=m*y,L.z=b*N,u.push(L.x,L.y,L.z),p.push(0,y,0),C.x=N*.5+.5,C.y=k*.5*y+.5,d.push(C.x,C.y),g++}for(let U=0;U<s;U++){const I=F+U,O=E+U;x===!0?h.push(O,O+1,I):h.push(O+1,O,I),D+=3}c.addGroup(f,D,x===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ze(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gt extends Ht{constructor(e){super(e),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ht().fromJSON(s))}return this}}const I_={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Wu(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,p,d;if(n&&(r=B_(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],p=i[g+1],u<a&&(a=u),p<l&&(l=p),u>c&&(c=u),p>h&&(h=p);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return pr(r,o,t,a,l,d,0),o}};function Wu(i,e,t,n,s){let r,o;if(s===Z_(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Mh(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Mh(r,i[r],i[r+1],o);return o&&Wo(o,o.next)&&(gr(o),o=o.next),o}function Yi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wo(t,t.next)||xt(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&V_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?U_(i,n,s,r):F_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),gr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=N_(Yi(i),e,t),pr(i,e,t,n,s,r,2)):o===2&&O_(i,e,t,n,s,r):pr(Yi(i),e,t,n,s,r,1);break}}}function F_(i){const e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=d&&ys(s,a,r,l,o,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function U_(i,e,t,n){const s=i.prev,r=i,o=i.next;if(xt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,p=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<p?h:p:u<p?u:p,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>p?h:p:u>p?u:p,f=Pl(d,g,e,t,n),w=Pl(_,m,e,t,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=f&&x&&x.z<=w;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ys(a,h,l,u,c,p,M.x,M.y)&&xt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ys(a,h,l,u,c,p,x.x,x.y)&&xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=f;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ys(a,h,l,u,c,p,M.x,M.y)&&xt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=w;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ys(a,h,l,u,c,p,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function N_(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Wo(s,r)&&Xu(s,n,n.next,r)&&mr(s,r)&&mr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),gr(n),gr(n.next),n=i=r),n=n.next}while(n!==i);return Yi(n)}function O_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Y_(o,a)){let l=Yu(o,a);o=Yi(o,o.next),l=Yi(l,l.next),pr(o,e,t,n,s,r,0),pr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function B_(i,e,t,n){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Wu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(X_(c));for(s.sort(k_),r=0;r<s.length;r++)t=G_(s[r],t);return t}function k_(i,e){return i.x-e.x}function G_(i,e){const t=z_(i,e);if(!t)return e;const n=Yu(t,i);return Yi(n,n.next),Yi(t,t.next)}function z_(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ys(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),mr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&H_(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function H_(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function V_(i,e,t,n){let s=i;do s.z===0&&(s.z=Pl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,W_(s)}function W_(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Pl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function X_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ys(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Y_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$_(i,e)&&(mr(i,e)&&mr(e,i)&&q_(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||Wo(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wo(i,e){return i.x===e.x&&i.y===e.y}function Xu(i,e,t,n){const s=eo(xt(i,e,t)),r=eo(xt(i,e,n)),o=eo(xt(t,n,i)),a=eo(xt(t,n,e));return!!(s!==r&&o!==a||s===0&&Qr(i,t,e)||r===0&&Qr(i,n,e)||o===0&&Qr(t,i,n)||a===0&&Qr(t,e,n))}function Qr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function eo(i){return i>0?1:i<0?-1:0}function $_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mr(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function q_(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Yu(i,e){const t=new Ll(i.i,i.x,i.y),n=new Ll(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Mh(i,e,t,n){const s=new Ll(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ll(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Z_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class hr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return hr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];yh(e),Sh(n,e);let o=e.length;t.forEach(yh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Sh(n,t[l]);const a=I_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function yh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class dt extends ln{constructor(e=new gt([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new kt(s,3)),this.setAttribute("uv",new kt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:K_;let M,x=!1,F,C,L,D;f&&(M=f.getSpacedPoints(h),x=!0,p=!1,F=f.computeFrenetFrames(h,!1),C=new R,L=new R,D=new R),p||(m=0,d=0,g=0,_=0);const b=a.extractPoints(c);let y=b.shape;const E=b.holes;if(!hr.isClockWise(y)){y=y.reverse();for(let ie=0,he=E.length;ie<he;ie++){const P=E[ie];hr.isClockWise(P)&&(E[ie]=P.reverse())}}const I=hr.triangulateShape(y,E),O=y;for(let ie=0,he=E.length;ie<he;ie++){const P=E[ie];y=y.concat(P)}function N(ie,he,P){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(he,P)}const k=y.length,K=I.length;function W(ie,he,P){let J,X,fe;const ae=ie.x-he.x,Ae=ie.y-he.y,ye=P.x-ie.x,A=P.y-ie.y,S=ae*ae+Ae*Ae,H=ae*A-Ae*ye;if(Math.abs(H)>Number.EPSILON){const ne=Math.sqrt(S),le=Math.sqrt(ye*ye+A*A),ee=he.x-Ae/ne,De=he.y+ae/ne,Ee=P.x-A/le,Ce=P.y+ye/le,ge=((Ee-ee)*A-(Ce-De)*ye)/(ae*A-Ae*ye);J=ee+ae*ge-ie.x,X=De+Ae*ge-ie.y;const oe=J*J+X*X;if(oe<=2)return new _e(J,X);fe=Math.sqrt(oe/2)}else{let ne=!1;ae>Number.EPSILON?ye>Number.EPSILON&&(ne=!0):ae<-Number.EPSILON?ye<-Number.EPSILON&&(ne=!0):Math.sign(Ae)===Math.sign(A)&&(ne=!0),ne?(J=-Ae,X=ae,fe=Math.sqrt(S)):(J=ae,X=Ae,fe=Math.sqrt(S/2))}return new _e(J/fe,X/fe)}const ce=[];for(let ie=0,he=O.length,P=he-1,J=ie+1;ie<he;ie++,P++,J++)P===he&&(P=0),J===he&&(J=0),ce[ie]=W(O[ie],O[P],O[J]);const te=[];let re,pe=ce.concat();for(let ie=0,he=E.length;ie<he;ie++){const P=E[ie];re=[];for(let J=0,X=P.length,fe=X-1,ae=J+1;J<X;J++,fe++,ae++)fe===X&&(fe=0),ae===X&&(ae=0),re[J]=W(P[J],P[fe],P[ae]);te.push(re),pe=pe.concat(re)}for(let ie=0;ie<m;ie++){const he=ie/m,P=d*Math.cos(he*Math.PI/2),J=g*Math.sin(he*Math.PI/2)+_;for(let X=0,fe=O.length;X<fe;X++){const ae=N(O[X],ce[X],J);V(ae.x,ae.y,-P)}for(let X=0,fe=E.length;X<fe;X++){const ae=E[X];re=te[X];for(let Ae=0,ye=ae.length;Ae<ye;Ae++){const A=N(ae[Ae],re[Ae],J);V(A.x,A.y,-P)}}}const ve=g+_;for(let ie=0;ie<k;ie++){const he=p?N(y[ie],pe[ie],ve):y[ie];x?(L.copy(F.normals[0]).multiplyScalar(he.x),C.copy(F.binormals[0]).multiplyScalar(he.y),D.copy(M[0]).add(L).add(C),V(D.x,D.y,D.z)):V(he.x,he.y,0)}for(let ie=1;ie<=h;ie++)for(let he=0;he<k;he++){const P=p?N(y[he],pe[he],ve):y[he];x?(L.copy(F.normals[ie]).multiplyScalar(P.x),C.copy(F.binormals[ie]).multiplyScalar(P.y),D.copy(M[ie]).add(L).add(C),V(D.x,D.y,D.z)):V(P.x,P.y,u/h*ie)}for(let ie=m-1;ie>=0;ie--){const he=ie/m,P=d*Math.cos(he*Math.PI/2),J=g*Math.sin(he*Math.PI/2)+_;for(let X=0,fe=O.length;X<fe;X++){const ae=N(O[X],ce[X],J);V(ae.x,ae.y,u+P)}for(let X=0,fe=E.length;X<fe;X++){const ae=E[X];re=te[X];for(let Ae=0,ye=ae.length;Ae<ye;Ae++){const A=N(ae[Ae],re[Ae],J);x?V(A.x,A.y+M[h-1].y,M[h-1].x+P):V(A.x,A.y,u+P)}}}Y(),Z();function Y(){const ie=s.length/3;if(p){let he=0,P=k*he;for(let J=0;J<K;J++){const X=I[J];Q(X[2]+P,X[1]+P,X[0]+P)}he=h+m*2,P=k*he;for(let J=0;J<K;J++){const X=I[J];Q(X[0]+P,X[1]+P,X[2]+P)}}else{for(let he=0;he<K;he++){const P=I[he];Q(P[2],P[1],P[0])}for(let he=0;he<K;he++){const P=I[he];Q(P[0]+k*h,P[1]+k*h,P[2]+k*h)}}n.addGroup(ie,s.length/3-ie,0)}function Z(){const ie=s.length/3;let he=0;xe(O,he),he+=O.length;for(let P=0,J=E.length;P<J;P++){const X=E[P];xe(X,he),he+=X.length}n.addGroup(ie,s.length/3-ie,1)}function xe(ie,he){let P=ie.length;for(;--P>=0;){const J=P;let X=P-1;X<0&&(X=ie.length-1);for(let fe=0,ae=h+m*2;fe<ae;fe++){const Ae=k*fe,ye=k*(fe+1),A=he+J+Ae,S=he+X+Ae,H=he+X+ye,ne=he+J+ye;ue(A,S,H,ne)}}}function V(ie,he,P){l.push(ie),l.push(he),l.push(P)}function Q(ie,he,P){me(ie),me(he),me(P);const J=s.length/3,X=w.generateTopUV(n,s,J-3,J-2,J-1);Pe(X[0]),Pe(X[1]),Pe(X[2])}function ue(ie,he,P,J){me(ie),me(he),me(J),me(he),me(P),me(J);const X=s.length/3,fe=w.generateSideWallUV(n,s,X-6,X-3,X-2,X-1);Pe(fe[0]),Pe(fe[1]),Pe(fe[3]),Pe(fe[1]),Pe(fe[2]),Pe(fe[3])}function me(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function Pe(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return j_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Rl[s.type]().fromJSON(s)),new dt(n,e.options)}}const K_={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new _e(r,o),new _e(a,l),new _e(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],p=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-u),new _e(p,1-g),new _e(_,1-f)]:[new _e(a,1-l),new _e(h,1-u),new _e(d,1-g),new _e(m,1-f)]}};function j_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class J_ extends Pi{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class rt extends Pi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nc extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Q_ extends nc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ra=new tt,bh=new R,Th=new R;class $u{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jl,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),Th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Th),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Eh=new tt,tr=new R,Pa=new R;class e1 extends $u{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(tr),Pa.copy(n.position),Pa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pa),n.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),Eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh)}}class t1 extends nc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new e1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class n1 extends $u{constructor(){super(new Lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class to extends nc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new n1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class i1 extends x_{constructor(e=10,t=10,n=4473924,s=8947848){n=new qe(n),s=new qe(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let p=0,d=0,g=-a;p<=t;p++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=p===r?n:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new ln;h.setAttribute("position",new kt(l,3)),h.setAttribute("color",new kt(c,3));const u=new Ql({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class s1 extends Ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);const Ah={type:"change"},ic={type:"start"},qu={type:"end"},no=new Zl,Ch=new vi,r1=Math.cos(70*tf.DEG2RAD),Tt=new R,Yt=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},La=1e-6;class o1 extends s1{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN},this.touches={ONE:xs.ROTATE,TWO:xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Xi,this._lastTargetPosition=new R,this._quat=new Xi().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wh,this._sphericalDelta=new wh,this._scale=1,this._panOffset=new R,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new R,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=l1.bind(this),this._onPointerDown=a1.bind(this),this._onPointerUp=c1.bind(this),this._onContextMenu=g1.bind(this),this._onMouseWheel=d1.bind(this),this._onKeyDown=f1.bind(this),this._onTouchStart=p1.bind(this),this._onTouchMove=m1.bind(this),this._onMouseDown=h1.bind(this),this._onMouseMove=u1.bind(this),this._interceptControlDown=_1.bind(this),this._interceptControlUp=v1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ah),this.update(),this.state=ct.NONE}update(e=null){const t=this.object.position;Tt.copy(t).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Yt:n>Math.PI&&(n-=Yt),s<-Math.PI?s+=Yt:s>Math.PI&&(s-=Yt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Tt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(no.origin.copy(this.object.position),no.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(no.direction))<r1?this.object.lookAt(this.target):(Ch.setFromNormalAndCoplanarPoint(this.object.up,this.target),no.intersectPlane(Ch,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>La||8*(1-this._lastQuaternion.dot(this.object.quaternion))>La||this._lastTargetPosition.distanceToSquared(this.target)>La?(this.dispatchEvent(Ah),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yt/60*this.autoRotateSpeed*e:Yt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Tt.setFromMatrixColumn(t,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,t){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(t,1):(Tt.setFromMatrixColumn(t,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Tt.copy(s).sub(this.target);let r=Tt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Yt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Yt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Yt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Yt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new _e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function a1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function l1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function c1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qu),this.state=ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function h1(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ct.DOLLY;break;case Es.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}break;case Es.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(ic)}function u1(i){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function d1(i){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(i.preventDefault(),this.dispatchEvent(ic),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qu))}function f1(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function p1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ct.TOUCH_ROTATE;break;case xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ct.TOUCH_DOLLY_PAN;break;case xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(ic)}function m1(i){switch(this._trackPointer(i),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ct.NONE}}function g1(i){this.enabled!==!1&&i.preventDefault()}function _1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function v1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class x1 extends Ou{constructor(){super();const e=new Ve;e.deleteAttribute("uv");const t=new rt({side:Vt}),n=new rt,s=new t1(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new j(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new j(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new j(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new j(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new j(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new j(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new j(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const p=new j(e,gs(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const d=new j(e,gs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new j(e,gs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new j(e,gs(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new j(e,gs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new j(e,gs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function gs(i){const e=new Kl;return e.color.setScalar(i),e}class M1{constructor(){this.aluminum=new rt({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.currentFrameColor="silver",this.acrylic=new rt({color:9684477,transparent:!0,opacity:.42,roughness:.1,metalness:.1,depthWrite:!1,side:Dt}),this.doorGlassLeft=new rt({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:Dt}),this.doorGlassRight=new rt({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:Dt}),this.handleMaterial=new rt({color:16777215,metalness:.75,roughness:.12,envMapIntensity:1.2}),this.screwSilver=new rt({color:11055288,metalness:.85,roughness:.22,envMapIntensity:1}),this.screwSlot=new rt({color:1842978,metalness:.1,roughness:.9}),this.grommetMaterial=new rt({color:1579035,metalness:.1,roughness:.85}),this.railMaterial=new rt({color:4738388,metalness:.15,roughness:.55}),this.endCapMaterial=new rt({color:10133670,metalness:.1,roughness:.65}),this.casterWheel=new rt({color:1579035,roughness:.7,metalness:.15}),this.casterBracket=new rt({color:14212838,roughness:.22,metalness:.85,envMapIntensity:1.2}),this.wireMesh=new rt({color:1842463,roughness:.55,metalness:.25,envMapIntensity:.9}),this.silverInnerFrame=new rt({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.perchAluminum=new rt({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.perchGrayCap=new rt({color:10133670,metalness:.1,roughness:.65}),this.perchBlackCap=new rt({color:2237222,metalness:.1,roughness:.65}),this.perchWhiteScrew=new rt({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.ventCoverAcrylic=new rt({color:9684477,transparent:!0,opacity:.5,roughness:.08,metalness:.1,depthWrite:!1,side:Dt}),this.thumbScrewMaterial=new rt({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.blackMatteAcrylic=new rt({color:1579292,roughness:.82,metalness:.04,side:Dt}),this.smokeGrayAcrylic=new rt({color:2829877,transparent:!0,opacity:.6,roughness:.12,metalness:.1,depthWrite:!1,side:Dt}),this.caulkingMaterial=new rt({color:13817821,roughness:.42,metalness:.04,envMapIntensity:.6}),this.rubberPackingMaterial=new rt({color:7502212,roughness:.78,metalness:.06,envMapIntensity:.5})}createPolycaMaterial(e,t){return new rt({map:e,bumpMap:t,bumpScale:1.2,transparent:!0,opacity:.78,roughness:.32,metalness:.1,side:Dt,depthWrite:!1})}createPunchingMaterial(e){return new rt({color:9684477,alphaMap:e,transparent:!0,opacity:.58,roughness:.35,metalness:.05,side:Dt,depthWrite:!1})}setFrameColor(e){this.currentFrameColor=e,e==="black"?(this.aluminum.color.setHex(1974308),this.aluminum.metalness=.28,this.aluminum.roughness=.42,this.aluminum.envMapIntensity=.85,this.endCapMaterial.color.setHex(2237222),this.railMaterial.color.setHex(1974050),this.thumbScrewMaterial.color.setHex(1974050)):(this.aluminum.color.setHex(12897236),this.aluminum.metalness=.85,this.aluminum.roughness=.25,this.aluminum.envMapIntensity=1.3,this.endCapMaterial.color.setHex(10133670),this.railMaterial.color.setHex(4738388),this.thumbScrewMaterial.color.setHex(16119544)),this.aluminum.needsUpdate=!0,this.endCapMaterial.needsUpdate=!0,this.railMaterial.needsUpdate=!0,this.thumbScrewMaterial.needsUpdate=!0}dispose(){this.aluminum.dispose(),this.acrylic.dispose(),this.doorGlassLeft.dispose(),this.doorGlassRight.dispose(),this.handleMaterial.dispose(),this.grommetMaterial.dispose(),this.railMaterial.dispose(),this.endCapMaterial.dispose(),this.casterWheel.dispose(),this.casterBracket.dispose(),this.wireMesh.dispose(),this.silverInnerFrame.dispose(),this.perchAluminum.dispose(),this.perchGrayCap.dispose(),this.perchBlackCap.dispose(),this.perchWhiteScrew.dispose(),this.ventCoverAcrylic.dispose(),this.thumbScrewMaterial.dispose(),this.screwSilver.dispose(),this.screwSlot.dispose(),this.blackMatteAcrylic.dispose(),this.smokeGrayAcrylic.dispose()}}function y1(){const i=new gt,e=10,t=3,n=1.8,s=5.5,r=5;i.moveTo(e,e),i.lineTo(e,t),i.lineTo(e-n,t),i.lineTo(e-n,s),i.lineTo(e-r,s),i.lineTo(e-r,-s),i.lineTo(e-n,-s),i.lineTo(e-n,-t),i.lineTo(e,-t),i.lineTo(e,-e),i.lineTo(t,-e),i.lineTo(t,-e+n),i.lineTo(s,-e+n),i.lineTo(s,-e+r),i.lineTo(-s,-e+r),i.lineTo(-s,-e+n),i.lineTo(-t,-e+n),i.lineTo(-t,-e),i.lineTo(-e,-e),i.lineTo(-e,-t),i.lineTo(-e+n,-t),i.lineTo(-e+n,-s),i.lineTo(-e+r,-s),i.lineTo(-e+r,s),i.lineTo(-e+n,s),i.lineTo(-e+n,t),i.lineTo(-e,t),i.lineTo(-e,e),i.lineTo(-t,e),i.lineTo(-t,e-n),i.lineTo(-s,e-n),i.lineTo(-s,e-r),i.lineTo(s,e-r),i.lineTo(s,e-n),i.lineTo(t,e-n),i.lineTo(t,e),i.lineTo(e,e);const o=new Ht;return o.absarc(0,0,2.25,0,Math.PI*2,!0),i.holes.push(o),i}function S1(){const i=new gt,e=10,t=20,n=3,s=1.8,r=5.5,o=5;i.moveTo(e,t),i.lineTo(e,10+n),i.lineTo(e-s,10+n),i.lineTo(e-s,10+r),i.lineTo(e-o,10+r),i.lineTo(e-o,10-r),i.lineTo(e-s,10-r),i.lineTo(e-s,10-n),i.lineTo(e,10-n),i.lineTo(e,-10+n),i.lineTo(e-s,-10+n),i.lineTo(e-s,-10+r),i.lineTo(e-o,-10+r),i.lineTo(e-o,-10-r),i.lineTo(e-s,-10-r),i.lineTo(e-s,-10-n),i.lineTo(e,-10-n),i.lineTo(e,-t),i.lineTo(n,-t),i.lineTo(n,-t+s),i.lineTo(r,-t+s),i.lineTo(r,-t+o),i.lineTo(-r,-t+o),i.lineTo(-r,-t+s),i.lineTo(-n,-t+s),i.lineTo(-n,-t),i.lineTo(-e,-t),i.lineTo(-e,-10-n),i.lineTo(-e+s,-10-n),i.lineTo(-e+s,-10-r),i.lineTo(-e+o,-10-r),i.lineTo(-e+o,-10+r),i.lineTo(-e+s,-10+r),i.lineTo(-e+s,-10+n),i.lineTo(-e,-10+n),i.lineTo(-e,10-n),i.lineTo(-e+s,10-n),i.lineTo(-e+s,10-r),i.lineTo(-e+o,10-r),i.lineTo(-e+o,10+r),i.lineTo(-e+s,10+r),i.lineTo(-e+s,10+n),i.lineTo(-e,10+n),i.lineTo(-e,t),i.lineTo(-n,t),i.lineTo(-n,t-s),i.lineTo(-r,t-s),i.lineTo(-r,t-o),i.lineTo(r,t-o),i.lineTo(r,t-s),i.lineTo(n,t-s),i.lineTo(n,t),i.lineTo(e,t);const a=new Ht;a.absarc(0,10,2.25,0,Math.PI*2,!0),i.holes.push(a);const l=new Ht;return l.absarc(0,-10,2.25,0,Math.PI*2,!0),i.holes.push(l),i}const b1=y1(),T1=S1(),E1=w1();function w1(){const i=new gt,e=10,t=30,n=3,s=1.8,r=5.5,o=5;i.moveTo(e,t),i.lineTo(e,20+n),i.lineTo(e-s,20+n),i.lineTo(e-s,20+r),i.lineTo(e-o,20+r),i.lineTo(e-o,20-r),i.lineTo(e-s,20-r),i.lineTo(e-s,20-n),i.lineTo(e,20-n),i.lineTo(e,n),i.lineTo(e-s,n),i.lineTo(e-s,r),i.lineTo(e-o,r),i.lineTo(e-o,-r),i.lineTo(e-s,-r),i.lineTo(e-s,-n),i.lineTo(e,-n),i.lineTo(e,-20+n),i.lineTo(e-s,-20+n),i.lineTo(e-s,-20+r),i.lineTo(e-o,-20+r),i.lineTo(e-o,-20-r),i.lineTo(e-s,-20-r),i.lineTo(e-s,-20-n),i.lineTo(e,-20-n),i.lineTo(e,-t),i.lineTo(n,-t),i.lineTo(n,-t+s),i.lineTo(r,-t+s),i.lineTo(r,-t+o),i.lineTo(-r,-t+o),i.lineTo(-r,-t+s),i.lineTo(-n,-t+s),i.lineTo(-n,-t),i.lineTo(-e,-t),i.lineTo(-e,-20-n),i.lineTo(-e+s,-20-n),i.lineTo(-e+s,-20-r),i.lineTo(-e+o,-20-r),i.lineTo(-e+o,-20+r),i.lineTo(-e+s,-20+r),i.lineTo(-e+s,-20+n),i.lineTo(-e,-20+n),i.lineTo(-e,-n),i.lineTo(-e+s,-n),i.lineTo(-e+s,-r),i.lineTo(-e+o,-r),i.lineTo(-e+o,r),i.lineTo(-e+s,r),i.lineTo(-e+s,n),i.lineTo(-e,n),i.lineTo(-e,20-n),i.lineTo(-e+s,20-n),i.lineTo(-e+s,20-r),i.lineTo(-e+o,20-r),i.lineTo(-e+o,20+r),i.lineTo(-e+s,20+r),i.lineTo(-e+s,20+n),i.lineTo(-e,20+n),i.lineTo(-e,t),i.lineTo(-n,t),i.lineTo(-n,t-s),i.lineTo(-r,t-s),i.lineTo(-r,t-o),i.lineTo(r,t-o),i.lineTo(r,t-s),i.lineTo(n,t-s),i.lineTo(n,t),i.lineTo(e,t);const a=new Ht;a.absarc(0,20,2.25,0,Math.PI*2,!0),i.holes.push(a);const l=new Ht;l.absarc(0,0,2.25,0,Math.PI*2,!0),i.holes.push(l);const c=new Ht;return c.absarc(0,-20,2.25,0,Math.PI*2,!0),i.holes.push(c),i}function A1(i){return new dt(b1,{depth:i,bevelEnabled:!1,steps:1})}function io(i="bottom"){const e=new gt,t=10,n=3,s=1.8,r=5.5,o=5;e.moveTo(t,t),i==="right"||(e.lineTo(t,n),e.lineTo(t-s,n),e.lineTo(t-s,r),e.lineTo(t-o,r),e.lineTo(t-o,-r),e.lineTo(t-s,-r),e.lineTo(t-s,-n),e.lineTo(t,-n)),e.lineTo(t,-t),i==="bottom"||(e.lineTo(n,-t),e.lineTo(n,-t+s),e.lineTo(r,-t+s),e.lineTo(r,-t+o),e.lineTo(-r,-t+o),e.lineTo(-r,-t+s),e.lineTo(-n,-t+s),e.lineTo(-n,-t)),e.lineTo(-t,-t),i==="left"||(e.lineTo(-t,-n),e.lineTo(-t+s,-n),e.lineTo(-t+s,-r),e.lineTo(-t+o,-r),e.lineTo(-t+o,r),e.lineTo(-t+s,r),e.lineTo(-t+s,n),e.lineTo(-t,n)),e.lineTo(-t,t),i==="top"||(e.lineTo(-n,t),e.lineTo(-n,t-s),e.lineTo(-r,t-s),e.lineTo(-r,t-o),e.lineTo(r,t-o),e.lineTo(r,t-s),e.lineTo(n,t-s),e.lineTo(n,t)),e.lineTo(t,t);const a=new Ht;return a.absarc(0,0,2.25,0,Math.PI*2,!0),e.holes.push(a),e}const Rh={top:io("top"),bottom:io("bottom"),left:io("left"),right:io("right")};function Ph(i,e="bottom"){const t=Rh[e]||Rh.bottom;return new dt(t,{depth:i,bevelEnabled:!1,steps:1})}function C1(i){return new dt(T1,{depth:i,bevelEnabled:!1,steps:1})}function R1(i){return new dt(E1,{depth:i,bevelEnabled:!1,steps:1})}function P1(){const i=new gt,e=7.5,t=15,n=3,s=1.5,r=5,o=4.5;i.moveTo(e,t),i.lineTo(e,n),i.lineTo(e-s,n),i.lineTo(e-s,r),i.lineTo(e-o,r),i.lineTo(e-o,-r),i.lineTo(e-s,-r),i.lineTo(e-s,-n),i.lineTo(e,-n),i.lineTo(e,-t),i.lineTo(-e,-t),i.lineTo(-e,-n),i.lineTo(-e+s,-n),i.lineTo(-e+s,-r),i.lineTo(-e+o,-r),i.lineTo(-e+o,r),i.lineTo(-e+s,r),i.lineTo(-e+s,n),i.lineTo(-e,n),i.lineTo(-e,t),i.lineTo(e,t);const a=new Ht;return a.absarc(0,0,2.5,0,Math.PI*2,!0),i.holes.push(a),i}const L1=P1();function D1(i){return new dt(L1,{depth:i,bevelEnabled:!1,steps:1})}function I1(){const i=new gt,e=20,t=3,n=1.8,s=5.5,r=5;i.moveTo(e,e),i.lineTo(e,10+t),i.lineTo(e-n,10+t),i.lineTo(e-n,10+s),i.lineTo(e-r,10+s),i.lineTo(e-r,10-s),i.lineTo(e-n,10-s),i.lineTo(e-n,10-t),i.lineTo(e,10-t),i.lineTo(e,-10+t),i.lineTo(e-n,-10+t),i.lineTo(e-n,-10+s),i.lineTo(e-r,-10+s),i.lineTo(e-r,-10-s),i.lineTo(e-n,-10-s),i.lineTo(e-n,-10-t),i.lineTo(e,-10-t),i.lineTo(e,-e),i.lineTo(10+t,-e),i.lineTo(10+t,-e+n),i.lineTo(10+s,-e+n),i.lineTo(10+s,-e+r),i.lineTo(10-s,-e+r),i.lineTo(10-s,-e+n),i.lineTo(10-t,-e+n),i.lineTo(10-t,-e),i.lineTo(-10+t,-e),i.lineTo(-10+t,-e+n),i.lineTo(-10+s,-e+n),i.lineTo(-10+s,-e+r),i.lineTo(-10-s,-e+r),i.lineTo(-10-s,-e+n),i.lineTo(-10-t,-e+n),i.lineTo(-10-t,-e),i.lineTo(-e,-e),i.lineTo(-e,-10-t),i.lineTo(-e+n,-10-t),i.lineTo(-e+n,-10-s),i.lineTo(-e+r,-10-s),i.lineTo(-e+r,-10+s),i.lineTo(-e+n,-10+s),i.lineTo(-e+n,-10+t),i.lineTo(-e,-10+t),i.lineTo(-e,10-t),i.lineTo(-e+n,10-t),i.lineTo(-e+n,10-s),i.lineTo(-e+r,10-s),i.lineTo(-e+r,10+s),i.lineTo(-e+n,10+s),i.lineTo(-e+n,10+t),i.lineTo(-e,10+t),i.lineTo(-e,e),i.lineTo(-10-t,e),i.lineTo(-10-t,e-n),i.lineTo(-10-s,e-n),i.lineTo(-10-s,e-r),i.lineTo(-10+s,e-r),i.lineTo(-10+s,e-n),i.lineTo(-10+t,e-n),i.lineTo(-10+t,e),i.lineTo(10-t,e),i.lineTo(10-t,e-n),i.lineTo(10-s,e-n),i.lineTo(10-s,e-r),i.lineTo(10+s,e-r),i.lineTo(10+s,e-n),i.lineTo(10+t,e-n),i.lineTo(10+t,e),i.lineTo(e,e);const o=[{x:10,y:10},{x:-10,y:10},{x:-10,y:-10},{x:10,y:-10}];for(const a of o){const l=new Ht;l.absarc(a.x,a.y,2.25,0,Math.PI*2,!0),i.holes.push(l)}return i}const F1=I1();function U1(i){return new dt(F1,{depth:i,bevelEnabled:!1,steps:1})}function so(i,e,t=!0){const s=Math.min(2048,Math.max(256,Math.round(i*4))),r=Math.min(2048,Math.max(256,Math.round(e*4))),o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");a.fillStyle="#ffffff",a.fillRect(0,0,s,r),a.fillStyle="#000000";const l=7,h=3.1/2*(s/i),u=15,p={x:35,y:35},d={x:i-35,y:35};for(let _=l/2;_<i;_+=l)for(let m=l/2;m<e;m+=l){if(t){const M=Math.hypot(_-p.x,m-p.y),x=Math.hypot(_-d.x,m-d.y);if(M<u+2.5||x<u+2.5)continue}const f=_/i*s,w=m/e*r;a.beginPath(),a.arc(f,w,h,0,Math.PI*2),a.fill()}if(t){const _=u*(s/i);a.beginPath(),a.arc(p.x/i*s,p.y/e*r,_,0,Math.PI*2),a.arc(d.x/i*s,d.y/e*r,_,0,Math.PI*2),a.fill()}const g=new Lo(o);return g.wrapS=en,g.wrapT=en,g.minFilter=Ut,g.magFilter=Ut,g}function Lh(i,e){const n=Math.min(1024,Math.max(128,Math.round(i*3))),s=Math.min(2048,Math.max(256,Math.round(e*3))),r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d");o.fillStyle="rgba(235, 242, 248, 0.72)",o.fillRect(0,0,n,s);const a=document.createElement("canvas");a.width=n,a.height=s;const l=a.getContext("2d");l.fillStyle="#808080",l.fillRect(0,0,n,s);const h=6/e*s;for(let d=0;d<s;d+=h){const g=Math.min(s,d+h),_=g-d,m=o.createLinearGradient(0,d,0,g);m.addColorStop(0,"rgba(140, 165, 185, 0.95)"),m.addColorStop(.18,"rgba(255, 255, 255, 1.0)"),m.addColorStop(.5,"rgba(220, 235, 248, 0.55)"),m.addColorStop(.82,"rgba(240, 248, 255, 0.80)"),m.addColorStop(1,"rgba(140, 165, 185, 0.95)"),o.fillStyle=m,o.fillRect(0,d,n,_);const f=Math.max(1.5,Math.round(h*.12));o.fillStyle="rgba(90, 115, 135, 0.85)",o.fillRect(0,d,n,f);const w=Math.max(1.5,Math.round(h*.16));o.fillStyle="rgba(255, 255, 255, 0.98)",o.fillRect(0,d+f,n,w);const M=l.createLinearGradient(0,d,0,g);M.addColorStop(0,"#1a1a1a"),M.addColorStop(.2,"#f0f0f0"),M.addColorStop(.5,"#999999"),M.addColorStop(.8,"#d8d8d8"),M.addColorStop(1,"#1a1a1a"),l.fillStyle=M,l.fillRect(0,d,n,_)}const u=new Lo(r);u.wrapS=en,u.wrapT=en,u.minFilter=Ut,u.magFilter=Ut;const p=new Lo(a);return p.wrapS=en,p.wrapT=en,p.minFilter=Ut,p.magFilter=Ut,{map:u,bumpMap:p}}function pn(i,e,t=!1,n=!1){return t?i==="2040"?"AFS-2040-5":"AFS-2020-5":i==="4040"?e==="black"?"AFS-4040-4-BK":"AFS-4040-4":i==="2060"?"AFS-2060-4":i==="2040"?n&&e==="silver"?"AFSF-2040-4":e==="black"?"AFS-2040-4-BK":"AFS-2040-4":n&&e==="silver"?"AFSF-2020-4":e==="black"?"AFS-2020-4-BK":"AFS-2020-4"}function vt(i,e,t,n=!1,s=!1){const r=Math.round(e);return`${pn(i,t,n,s)}-${r}`}class N1{constructor(e){this.materials=e,this.root=new mt,this.root.name="CageRoot",this.frameGroup=new mt,this.frameGroup.name="Frames",this.root.add(this.frameGroup),this.panelGroup=new mt,this.panelGroup.name="Panels",this.root.add(this.panelGroup),this.doorGroup=new mt,this.doorGroup.name="Doors",this.root.add(this.doorGroup),this.feetGroup=new mt,this.feetGroup.name="Feet",this.root.add(this.feetGroup),this.perchGroup=new mt,this.perchGroup.name="Perch",this.root.add(this.perchGroup),this.caulkingGroup=new mt,this.caulkingGroup.name="Caulking",this.root.add(this.caulkingGroup),this.rubberPackingGroup=new mt,this.rubberPackingGroup.name="RubberPacking",this.root.add(this.rubberPackingGroup),this.dividerGroup=new mt,this.dividerGroup.name="RoomDivider",this.root.add(this.dividerGroup),this.params={W:750,D:450,H:300,cageType:"A",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,hasFloorReinforcement:!1,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasPerch:!1,hasRubberPacking:!1,hasRoomDivider:!1,frontWideFrame:"2x",doorHingeSide:"left",footType:"rubber",showPanels:!0,doorState:"closed",frameColor:"silver",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"}},this.activeGeometries=[],this.activeTextures=[],this.activeMaterials=[],this.partsList=[]}disposeResources(){for(const e of this.activeGeometries)e.dispose();this.activeGeometries=[];for(const e of this.activeTextures)e.dispose();this.activeTextures=[];for(const e of this.activeMaterials)e.dispose();this.activeMaterials=[]}clearGroup(e){for(;e.children.length>0;){const t=e.children[0];e.remove(t)}}addFrameMember(e,t,n,s,r="",o=null,a="bottom",l=null){let c;e==="4040"?c=U1(t):e==="2060"?c=R1(t):e==="2040"?c=C1(t):e==="2020_flat"?c=Ph(t,a):c=A1(t),c.translate(0,0,-t/2),this.activeGeometries.push(c);const h=new j(c,o||this.materials.aluminum);return h.position.copy(n),h.rotation.copy(s),h.castShadow=!0,h.receiveShadow=!0,h.name=r,(l||this.frameGroup).add(h),h}addDoorEndCap(e,t,n,s=null,r=null,o=null){const h=new gt;h.moveTo(-20/2+2,-20/2),h.lineTo(20/2-2,-20/2),h.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),h.lineTo(20/2,20/2-2),h.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),h.lineTo(-20/2+2,20/2),h.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),h.lineTo(-20/2,-20/2+2),h.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const u={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},p=new dt(h,u);p.translate(0,0,-1.5),this.activeGeometries.push(p);const d=new j(p,r||this.materials.endCapMaterial);return d.position.set(e,t,n),s&&d.rotation.copy(s),d.castShadow=!0,d.receiveShadow=!0,d.name="扉用エンドキャップ",(o||this.frameGroup).add(d),d}addEndCap2040(e,t,n,s=null,r=null,o=null){const h=new gt;h.moveTo(-40/2+2,-20/2),h.lineTo(40/2-2,-20/2),h.absarc(40/2-2,-20/2+2,2,-Math.PI/2,0,!1),h.lineTo(40/2,20/2-2),h.absarc(40/2-2,20/2-2,2,0,Math.PI/2,!1),h.lineTo(-40/2+2,20/2),h.absarc(-40/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),h.lineTo(-40/2,-20/2+2),h.absarc(-40/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const u={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},p=new dt(h,u);p.translate(0,0,-1.5),this.activeGeometries.push(p);const d=new j(p,r||this.materials.endCapMaterial);return d.position.set(e,t,n),s&&d.rotation.copy(s),d.castShadow=!0,d.receiveShadow=!0,d.name="2040スペーサー用エンドキャップ",(o||this.frameGroup).add(d),d}getLatchBlackMaterial(){return this.latchBlackMaterial||(this.latchBlackMaterial=new rt({color:1579034,roughness:.5,metalness:.15,name:"CP294N_Black"}),this.activeMaterials.push(this.latchBlackMaterial)),this.latchBlackMaterial}createSlideLatchMesh(e){const t=new mt,n=this.getLatchBlackMaterial(),s=new gt,r=25,o=70,a=3;s.moveTo(-r/2+a,-o/2),s.lineTo(r/2-a,-o/2),s.quadraticCurveTo(r/2,-o/2,r/2,-o/2+a),s.lineTo(r/2,o/2-a),s.quadraticCurveTo(r/2,o/2,r/2-a,o/2),s.lineTo(-r/2+a,o/2),s.quadraticCurveTo(-r/2,o/2,-r/2,o/2-a),s.lineTo(-r/2,-o/2+a),s.quadraticCurveTo(-r/2,-o/2,-r/2+a,-o/2);const l=new dt(s,{depth:8,bevelEnabled:!1});this.activeGeometries.push(l);const c=new j(l,n);c.position.set(0,0,0),c.castShadow=!0,t.add(c);for(const U of[-25,25]){const I=new Ze(3.5,3.5,3,16);I.rotateX(Math.PI/2),this.activeGeometries.push(I);const O=new j(I,n);O.position.set(0,U,8.5),t.add(O)}const h=new mt;h.position.set(0,0,8),t.add(h),t.userData.knobPivot=h;const u=e?-1:1,p=e?1:-1,d=new Ve(12,28,6);this.activeGeometries.push(d);const g=new j(d,n);g.position.set(0,0,3),h.add(g);const _=new Ve(16,22,2.5);this.activeGeometries.push(_);const m=new j(_,n);m.position.set(u*10,0,.5),m.castShadow=!0,h.add(m);const f=new gt;e?(f.moveTo(0,0),f.lineTo(-11,0),f.lineTo(-15,-2.8),f.lineTo(-12,-2.8),f.lineTo(-7,0),f.closePath()):(f.moveTo(0,0),f.lineTo(11,0),f.lineTo(15,-2.8),f.lineTo(12,-2.8),f.lineTo(7,0),f.closePath());const w=new dt(f,{depth:14,bevelEnabled:!1});w.translate(0,0,-7),w.rotateX(-Math.PI/2),this.activeGeometries.push(w);const M=new j(w,n);M.position.set(0,0,-.75),M.castShadow=!0,h.add(M);const x=new Ve(10,24,16);this.activeGeometries.push(x);const F=new j(x,n);F.position.set(p*4,0,8),F.castShadow=!0,h.add(F);const C=new gt;C.moveTo(0,0),C.lineTo(p*8,4),C.lineTo(p*5,10),C.lineTo(p*-2,8),C.closePath();const L=new dt(C,{depth:22,bevelEnabled:!1});L.translate(0,0,-11),L.rotateX(-Math.PI/2),this.activeGeometries.push(L);const D=new j(L,n);D.position.set(p*4,0,16),D.castShadow=!0,h.add(D);const b=new gt;b.moveTo(0,-9),b.lineTo(12,-9),b.quadraticCurveTo(18,-9,18,0),b.quadraticCurveTo(18,9,12,9),b.lineTo(0,9),b.closePath();const y=new dt(b,{depth:3,bevelEnabled:!1});this.activeGeometries.push(y);const E=new j(y,n);return e||(E.rotation.y=Math.PI),E.position.set(p*6,0,10),E.castShadow=!0,h.add(E),t}createStrikerAssembly(e){const t=new mt,n=this.materials.acrylic,s=this.getLatchBlackMaterial(),r=e?1:-1;for(const d of[-10,10]){const g=new Ze(10,10,5,24);g.rotateX(Math.PI/2),this.activeGeometries.push(g);const _=new j(g,n);_.position.set(r*10,d,2.5),t.add(_);const m=new Ze(3.5,3.5,2.5,16);m.rotateX(Math.PI/2),this.activeGeometries.push(m);const f=new j(m,s);f.position.set(r*10,d,7.5),t.add(f)}const o=new gt,l=27/2,h=38-l;if(e){o.moveTo(0,-l),o.lineTo(h,-l),o.absarc(h,0,l,-Math.PI/2,Math.PI/2,!1),o.lineTo(0,l),o.closePath();const d=7.5,g=h-1,_=h-7.5,m=new Ht;m.moveTo(_,-d),m.lineTo(g,-d),m.absarc(g,0,d,-Math.PI/2,Math.PI/2,!1),m.lineTo(_,d),m.closePath(),o.holes.push(m);for(const f of[-10,10]){const w=new Ht;w.absarc(10,f,2.2,0,Math.PI*2,!0),o.holes.push(w)}}else{o.moveTo(0,-l),o.lineTo(-h,-l),o.absarc(-h,0,l,-Math.PI/2,-Math.PI*1.5,!0),o.lineTo(0,l),o.closePath();const d=7.5,g=-h+1,_=-h+7.5,m=new Ht;m.moveTo(_,-d),m.lineTo(g,-d),m.absarc(g,0,d,-Math.PI/2,-Math.PI*1.5,!0),m.lineTo(_,d),m.closePath(),o.holes.push(m);for(const f of[-10,10]){const w=new Ht;w.absarc(-10,f,2.2,0,Math.PI*2,!0),o.holes.push(w)}}const u=new dt(o,{depth:1.5,bevelEnabled:!1});this.activeGeometries.push(u);const p=new j(u,s);return p.position.set(0,0,5),p.castShadow=!0,t.add(p),t}addEndCap(e,t,n){const a=new gt;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const l={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},c=new dt(a,l);c.translate(0,0,-1.5),this.activeGeometries.push(c);const h=new j(c,this.materials.endCapMaterial);return h.position.set(e,t,n),h.castShadow=!0,h.receiveShadow=!0,h.name="M4エンドキャップ",this.frameGroup.add(h),h}createWireMesh(e,t,n){const s=new mt;s.name=`WireMesh_P${n}_${e}x${t}`;const r=1.6,o=Math.max(2,Math.floor(t/n)+1),a=-((o-1)*n)/2,l=new Ze(r,r,e,8);l.rotateZ(Math.PI/2),this.activeGeometries.push(l);for(let p=0;p<o;p++){const d=new j(l,this.materials.wireMesh);d.position.set(0,r,a+p*n),d.castShadow=!0,s.add(d)}const c=Math.max(2,Math.floor(e/n)+1),h=-((c-1)*n)/2,u=new Ze(r,r,t,8);u.rotateX(Math.PI/2),this.activeGeometries.push(u);for(let p=0;p<c;p++){const d=new j(u,this.materials.wireMesh);d.position.set(h+p*n,-r,0),d.castShadow=!0,s.add(d)}return s}update(e){if(e&&e.panelConfig){this.params.panelConfig=Object.assign({},this.params.panelConfig,e.panelConfig);const C={...e};delete C.panelConfig,Object.assign(this.params,C)}else e&&Object.assign(this.params,e);const{W:t,D:n,H:s,cageType:r,frontWindowH:o,hasSideReinforcement:a,sideOpeningH:l,showPanels:c,frameColor:h,hasFloorReinforcement:u,hasTopReinforcement:p,footType:d,doorHingeSide:g}=this.params,_=h==="silver";h&&this.materials.setFrameColor(h),this.clearGroup(this.frameGroup),this.clearGroup(this.panelGroup),this.clearGroup(this.doorGroup),this.clearGroup(this.feetGroup),this.clearGroup(this.perchGroup),this.clearGroup(this.dividerGroup),this.clearGroup(this.caulkingGroup),this.clearGroup(this.rubberPackingGroup),this.disposeResources(),this._doorAnim=null,this.partsList=[];const m=new yt(0,0,0),f=new yt(0,Math.PI/2,0),w=new yt(Math.PI/2,0,0),M=Math.max(10,s-40),x=Math.max(10,n-6);if(r==="A_FRAMED"){this.addFrameMember("2020",x,new R(-t/2+10,10,0),m,"床・左2020"),this.addFrameMember("2020",x,new R(t/2-10,10,0),m,"床・右2020"),this.recordPart(vt("2020",x,h),x,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const C=Math.max(10,t-40);this.addFrameMember("4040",C,new R(0,20,n/2-20),f,"床・正面4040 (枠囲い下部)"),this.recordPart(vt("4040",C,h),C,1,"正面下部 40x40枠囲い (AFS-4040-4)","frame");const L=Math.max(10,t-40);if(this.addFrameMember("2020",L,new R(0,10,-n/2+10),f,"床・背面2020"),this.recordPart(vt("2020",L,h),L,1,"床面 背面","frame"),u){const Z=Math.max(10,n-60),xe=_?"2020_flat":"2020";this.addFrameMember(xe,Z,new R(0,10,-10),m,"床・中央補強2020",null,"top"),this.recordPart(vt("2020",Z,h,!1,!0),Z,1,"床面 中央補強 (2分割・D-60mm)","frame")}const D=s/2;this.addFrameMember("2020",M,new R(-t/2+10,D,-n/2+10),w,"柱・奥左2020"),this.addFrameMember("2020",M,new R(t/2-10,D,-n/2+10),w,"柱・奥右2020"),this.recordPart(vt("2020",M,h),M,2,"柱 (奥2隅)","frame"),this.addFrameMember("2040",M,new R(-t/2+10,D,n/2-20),w,"柱・手前左2040"),this.addFrameMember("2040",M,new R(t/2-10,D,n/2-20),w,"柱・手前右2040"),this.recordPart(vt("2040",M,h),M,2,"柱・正面枠囲い (2040・奥行40mm)","frame");const b=p||t>940,y=this.params.panelConfig||{};let E=!1;if(b){const Z=!!(y.topLeft&&y.topLeft.startsWith("mesh")),xe=!!(y.topRight&&y.topRight.startsWith("mesh"));E=Z||xe}else E=!!(y.top&&y.top.startsWith("mesh"));const U=_&&E,I=U?"AFS-2020-5":pn("2020",h),O=`${I}-${x}`,N=U?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",x,new R(-t/2+10,s-10,0),m,"天面・左2020"),this.addFrameMember("2020",x,new R(t/2-10,s-10,0),m,"天面・右2020"),this.recordPart(O,x,2,N,"frame",{partCode:I,lengthMm:x,unitType:"m"});const k=Math.max(10,t-40),K=U?"AFS-2020-5":pn("2020",h),W=`${K}-${k}`,ce=U?"天面 背面 (天面金網受用・AFS-2020-5)":"天面 背面";this.addFrameMember("2020",k,new R(0,s-10,-n/2+10),f,"天面・背面2020"),this.recordPart(W,k,1,ce,"frame",{partCode:K,lengthMm:k,unitType:"m"});const te=U?"AFS-2040-5":pn("2040",h),re=`${te}-${C}`,pe=U?"正面上部 2040横向き (天面金網受用・AFS-2040-5)":"正面上部 2040横向き (奥行40mm・AFS-2040-4)",ve=new tt().makeBasis(new R(0,1,0),new R(0,0,1),new R(1,0,0)),Y=new yt().setFromRotationMatrix(ve);if(this.addFrameMember("2040",C,new R(0,s-10,n/2-20),Y,"天面・手前2040 (横向き枠囲い上部)"),this.recordPart(re,C,1,pe,"frame",{partCode:te,lengthMm:C,unitType:"m"}),p||t>940){const Z=Math.max(10,n-60),xe=U?"AFS-2020-5":pn("2020",h,!1,!0),V=`${xe}-${Z}`,Q=U?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割・D-60mm)",ue=_&&!U?"2020_flat":"2020";this.addFrameMember(ue,Z,new R(0,s-10,-10),m,"天面・中央補強2020",null,"bottom"),this.recordPart(V,Z,1,Q,"frame",{partCode:xe,lengthMm:Z,unitType:"m"})}}else if(r==="A"||r==="A_FRONT"){this.addFrameMember("2020",x,new R(-t/2+10,10,0),m,"床・左2020"),this.addFrameMember("2020",x,new R(t/2-10,10,0),m,"床・右2020"),this.recordPart(vt("2020",x,h),x,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const C=Math.max(10,t-40),L=this.params.frontWideFrame||"2x";L==="3x"?h==="black"?(this.addFrameMember("2040",C,new R(0,20,n/2-10),f,"床・正面2040 (3倍幅下段)"),this.recordPart(vt("2040",C,"black"),C,1,"床面 正面 3倍幅下段 (40mm幅・ブラック)","frame"),this.addFrameMember("2020",C,new R(0,50,n/2-10),f,"床・正面2020 (3倍幅上段)"),this.recordPart(vt("2020",C,"black"),C,1,"床面 正面 3倍幅上段 (20mm幅・ブラック2段構成)","frame")):(this.addFrameMember("2060",C,new R(0,30,n/2-10),f,"床・正面2060 (3倍幅)"),this.recordPart(vt("2060",C,"silver"),C,1,"床面 正面 3倍幅 (AFS-2060-4)","frame")):L==="2x"?(this.addFrameMember("2040",C,new R(0,20,n/2-10),f,"床・正面2040 (2倍幅)"),this.recordPart(vt("2040",C,h),C,1,"床面 正面 2倍幅 (AFS-2040・内側)","frame")):(this.addFrameMember("2020",C,new R(0,10,n/2-10),f,"床・正面2020 (標準幅)"),this.recordPart(vt("2020",C,h),C,1,"床面 正面 (標準2020)","frame"));const D=Math.max(10,t-40);if(this.addFrameMember("2020",D,new R(0,10,-n/2+10),f,"床・背面2020"),this.recordPart(vt("2020",D,h),D,1,"床面 背面","frame"),u){const re=Math.max(10,n-40),pe=_?"2020_flat":"2020";this.addFrameMember(pe,re,new R(0,10,0),m,"床・中央補強2020",null,"top"),this.recordPart(vt("2020",re,h,!1,!0),re,1,"床面 中央補強 (2分割)","frame")}const b=s/2;this.addFrameMember("2020",M,new R(-t/2+10,b,n/2-10),w,"柱・手前左"),this.addFrameMember("2020",M,new R(t/2-10,b,n/2-10),w,"柱・手前右"),this.addFrameMember("2020",M,new R(-t/2+10,b,-n/2+10),w,"柱・奥左"),this.addFrameMember("2020",M,new R(t/2-10,b,-n/2+10),w,"柱・奥右"),this.recordPart(vt("2020",M,h),M,4,"柱 (4隅・床奥行き乗せ)","frame");const y=p||t>940,E=this.params.panelConfig||{};let U=!1;if(y){const re=!!(E.topLeft&&E.topLeft.startsWith("mesh")),pe=!!(E.topRight&&E.topRight.startsWith("mesh"));U=re||pe}else U=!!(E.top&&E.top.startsWith("mesh"));const I=_&&U,O=I?"AFS-2020-5":pn("2020",h),N=`${O}-${x}`,k=I?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",x,new R(-t/2+10,s-10,0),m,"天面・左2020"),this.addFrameMember("2020",x,new R(t/2-10,s-10,0),m,"天面・右2020"),this.recordPart(N,x,2,k,"frame",{partCode:O,lengthMm:x,unitType:"m"});const K=Math.max(10,t-40),W=I?"AFS-2020-5":pn("2020",h),ce=`${W}-${K}`,te=I?"天面 前後 (天面金網受用・AFS-2020-5)":"天面 前後";if(this.addFrameMember("2020",K,new R(0,s-10,-n/2+10),f,"天面・背面2020"),this.addFrameMember("2020",K,new R(0,s-10,n/2-10),f,"天面・手前2020"),this.recordPart(ce,K,2,te,"frame",{partCode:W,lengthMm:K,unitType:"m"}),p||t>940){const re=Math.max(10,n-40),pe=I?"AFS-2020-5":pn("2020",h,!1,!0),ve=`${pe}-${re}`,Y=I?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割)",Z=_&&!I?"2020_flat":"2020";this.addFrameMember(Z,re,new R(0,s-10,0),m,"天面・中央補強2020",null,"bottom"),this.recordPart(ve,re,1,Y,"frame",{partCode:pe,lengthMm:re,unitType:"m"})}}else{this.addFrameMember("2020",x,new R(-t/2+10,10,0),m,"床・左2020"),this.addFrameMember("2020",x,new R(t/2-10,10,0),m,"床・右2020"),this.recordPart(vt("2020",x,h),x,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const C=Math.max(10,t-40);if(this.addFrameMember("2020",C,new R(0,10,n/2-10),f,"床・手前2020"),this.addFrameMember("2020",C,new R(0,10,-n/2+10),f,"床・背面2020"),this.recordPart(vt("2020",C,h),C,2,"床面 前後","frame"),u){const pe=Math.max(10,n-40),ve=_?"2020_flat":"2020";this.addFrameMember(ve,pe,new R(0,10,0),m,"床・中央補強2020",null,"top"),this.recordPart(vt("2020",pe,h,!1,!0),pe,1,"床面 中央補強 (2分割)","frame")}const L=s/2;this.addFrameMember("2020",M,new R(-t/2+10,L,n/2-10),w,"柱・手前左"),this.addFrameMember("2020",M,new R(t/2-10,L,n/2-10),w,"柱・手前右"),this.addFrameMember("2020",M,new R(-t/2+10,L,-n/2+10),w,"柱・奥左"),this.addFrameMember("2020",M,new R(t/2-10,L,-n/2+10),w,"柱・奥右"),this.recordPart(vt("2020",M,h),M,4,"柱 (4隅)","frame");const D=p||t>940,b=this.params.panelConfig||{};let y=!1;if(D){const pe=!!(b.topLeft&&b.topLeft.startsWith("mesh")),ve=!!(b.topRight&&b.topRight.startsWith("mesh"));y=pe||ve}else y=!!(b.top&&b.top.startsWith("mesh"));const E=_&&y,U=E?"AFS-2020-5":pn("2020",h),I=`${U}-${x}`,O=E?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",x,new R(-t/2+10,s-10,0),m,"天面・左2020"),this.addFrameMember("2020",x,new R(t/2-10,s-10,0),m,"天面・右2020"),this.recordPart(I,x,2,O,"frame",{partCode:U,lengthMm:x,unitType:"m"});const N=Math.max(10,t-40),k=E?"AFS-2020-5":pn("2020",h),K=`${k}-${N}`,W=E?"天面 前後 (天面金網受用・AFS-2020-5)":"天面 前後";if(this.addFrameMember("2020",N,new R(0,s-10,-n/2+10),f,"天面・背面2020"),this.addFrameMember("2020",N,new R(0,s-10,n/2-10),f,"天面・手前2020"),this.recordPart(K,N,2,W,"frame",{partCode:k,lengthMm:N,unitType:"m"}),p||t>940){const pe=Math.max(10,n-40),ve=E?"AFS-2020-5":pn("2020",h,!1,!0),Y=`${ve}-${pe}`,Z=E?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割)",xe=_&&!E?"2020_flat":"2020";this.addFrameMember(xe,pe,new R(0,s-10,0),m,"天面・中央補強2020",null,"bottom"),this.recordPart(Y,pe,1,Z,"frame",{partCode:ve,lengthMm:pe,unitType:"m"})}const ce=20+o+10,te=Math.max(10,t-40),re=_?"2020_flat":"2020";this.addFrameMember(re,te,new R(0,ce,n/2-10),f,"正面・中桟2020",null,"right"),this.recordPart(vt("2020",te,h,!1,!0),te,1,"正面 中桟 (レール受け)","frame")}const F=[{x:-t/2+10,y:10,z:n/2-1.5},{x:t/2-10,y:10,z:n/2-1.5},{x:-t/2+10,y:s-10,z:n/2-1.5},{x:t/2-10,y:s-10,z:n/2-1.5},{x:-t/2+10,y:10,z:-n/2+1.5},{x:t/2-10,y:10,z:-n/2+1.5},{x:-t/2+10,y:s-10,z:-n/2+1.5},{x:t/2-10,y:s-10,z:-n/2+1.5}];for(const C of F)this.addEndCap(C.x,C.y,C.z);if(this.recordPart("ECP-2020-4","-",8,"奥行きフレーム両端 (前後計8箇所)","frame",{partCode:"ECP-2020-4",lengthMm:null,unitType:"piece"}),a){const C=r==="A_FRAMED",L=Math.max(10,C?n-60:n-40),D=C?-10:0,b=l,E=20+Math.max(10,s-60-b)+10,U=_?"2020_flat":"2020";this.addFrameMember(U,L,new R(-t/2+10,E,D),m,"側面補強・左2020",null,"right"),this.addFrameMember(U,L,new R(t/2-10,E,D),m,"側面補強・右2020",null,"left");const I=C?" (D-60mm)":"";this.recordPart(vt("2020",L,h,!1,!0),L,2,`側面 補強フレーム (左右${I})`,"frame")}this.buildPanels(f,m),this.buildDoors(),this.buildDoorPartsRecord(),this.params.footType==="caster"?this.buildCasters():this.buildFeet(),this.params.hasPerch&&this.buildPerch(),this.buildCaulking(),this.params.hasRubberPacking&&this.buildRubberPacking(),this.params.hasRoomDivider&&this.buildRoomDivider(),this.panelGroup.visible=c,this.doorGroup.visible=c,this.caulkingGroup.visible=c,this.rubberPackingGroup.visible=c,this.dividerGroup.visible=c}buildPanels(e,t){const{W:n,D:s,H:r,cageType:o,frontWindowH:a,hasSideReinforcement:l,sideOpeningH:c,hasFloorReinforcement:h,hasTopReinforcement:u,frameColor:p}=this.params,d=this.params.panelConfig||{},g=3,_=d.floor||"acrylic",m=d.back||"acrylic",f=d.side||"acrylic",w=d.sideUpper||"punching",M=d.sideLower||"acrylic",x=d.top||"punching",F=d.topLeft||"punching",C=d.topRight||"punching",L=o==="A_FRAMED",D=L?s-50:s-30,b=L?-10:0,y=_==="black_matte",E=_==="smoke_gray";let U=this.materials.acrylic,I="透明アクリル 3.0mm 底板",O="acrylic_extrusion_3_0";if(y?(U=this.materials.blackMatteAcrylic,I="アクリル黒両面マット 3.0mm 底板",O="acrylic_black_matte_3_0"):E&&(U=this.materials.smokeGrayAcrylic,I="アクリル グレースモーク半透明 3.0mm 底板",O="acrylic_smoke_gray_3_0"),h){const V=(n-60)/2,Q=Math.round(V+10),ue=new Ve(Q,g,D);this.activeGeometries.push(ue);const me=new j(ue,U);me.position.set(-V/2-10,20-g/2,b),this.panelGroup.add(me);const Pe=new j(ue,U);Pe.position.set(V/2+10,20-g/2,b),this.panelGroup.add(Pe),this.recordPart(I,`${Q} x ${D} mm`,2,"床面 (2分割)","panel",{panelCode:O,partCode:O,widthMm:Q,heightMm:D,unitType:"m2"})}else{const V=n-30,Q=new Ve(V,g,D);this.activeGeometries.push(Q);const ue=new j(Q,U);ue.position.set(0,20-g/2,b),this.panelGroup.add(ue),this.recordPart(I,`${V} x ${D} mm`,1,"床面 (1枚)","panel",{panelCode:O,partCode:O,widthMm:V,heightMm:D,unitType:"m2"})}const N=n-30,k=r-30;if(m==="punching"){const V=so(N,k,!1);this.activeTextures.push(V);const Q=this.materials.createPunchingMaterial(V);this.activeMaterials.push(Q);const ue=new Ei(N,k);this.activeGeometries.push(ue);const me=new j(ue,Q);me.position.set(0,r/2,-s/2+10),this.panelGroup.add(me),this.recordPart("塩ビパンチングボード 透明 3.0mm 背板",`${N} x ${k} mm`,1,"背面 (通気パネル・φ3.1-P7)","panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:N,heightMm:k,unitType:"m2"})}else if(m==="polyca"){const{map:V,bumpMap:Q}=Lh(N,k);this.activeTextures.push(V,Q);const ue=this.materials.createPolycaMaterial(V,Q);this.activeMaterials.push(ue);const me=new Ve(N,k,4);this.activeGeometries.push(me);const Pe=new j(me,ue);Pe.position.set(0,r/2,-s/2+10),this.panelGroup.add(Pe),this.recordPart("中空ポリカ 4.0mm 背板",`${N} x ${k} mm`,1,"背面 (中空ポリカ・横筋)","panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:N,heightMm:k,unitType:"m2"})}else if(m==="black_matte"){const V=new Ve(N,k,g);this.activeGeometries.push(V);const Q=new j(V,this.materials.blackMatteAcrylic);Q.position.set(0,r/2,-s/2+10),this.panelGroup.add(Q),this.recordPart("アクリル黒両面マット 3.0mm 背板",`${N} x ${k} mm`,1,"背面","panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:N,heightMm:k,unitType:"m2"})}else if(m==="smoke_gray"){const V=new Ve(N,k,g);this.activeGeometries.push(V);const Q=new j(V,this.materials.smokeGrayAcrylic);Q.position.set(0,r/2,-s/2+10),this.panelGroup.add(Q),this.recordPart("アクリル グレースモーク半透明 3.0mm 背板",`${N} x ${k} mm`,1,"背面","panel",{panelCode:"acrylic_smoke_gray_3_0",partCode:"acrylic_smoke_gray_3_0",widthMm:N,heightMm:k,unitType:"m2"})}else{const V=new Ve(N,k,g);this.activeGeometries.push(V);const Q=new j(V,this.materials.acrylic);Q.position.set(0,r/2,-s/2+10),this.panelGroup.add(Q),this.recordPart("透明アクリル 3.0mm 背板",`${N} x ${k} mm`,1,"背面","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:N,heightMm:k,unitType:"m2"})}const K=u||n>940,W=!K&&x==="punching",ce=K&&F==="punching"&&C==="punching";let te="back_top_2";if(W?te="top_single_2":ce&&(te="top_split_4"),te==="back_top_2"){const V=r-20-35,Q=-s/2+10,ue=new Ze(19,19,4.5,32);ue.rotateX(Math.PI/2),this.activeGeometries.push(ue);const me=-(n-40)/2+35,Pe=(n-40)/2-35,ie=new j(ue,this.materials.grommetMaterial);ie.position.set(me,V,Q),this.panelGroup.add(ie);const he=new j(ue,this.materials.grommetMaterial);he.position.set(Pe,V,Q),this.panelGroup.add(he);const P=K?"背面板 上部左右2箇所 (天面仕様・端から35mm)":"背面板 上部左右 (端から35mm)";this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,P,"other")}const re=L?s-50:s-30,pe=L?-10:0,ve=(V,Q,ue,me,Pe)=>{const ie=Pe?`${Pe}・`:"",he=Pe?`${Pe} `:"";if(me==="punching"){const P=so(V,Q,!1);this.activeTextures.push(P);const J=this.materials.createPunchingMaterial(P);this.activeMaterials.push(J);const X=new Ei(V,Q);X.rotateY(Math.PI/2),this.activeGeometries.push(X);const fe=new j(X,J);fe.position.set(-n/2+10,ue,pe),this.panelGroup.add(fe);const ae=new j(X,J);ae.position.set(n/2-10,ue,pe),this.panelGroup.add(ae),this.recordPart(`塩ビパンチングボード 透明 3.0mm 側板 (${ie}φ3.1-P7)`,`${V} x ${Q} mm`,2,`左右側面 ${he}(通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:V,heightMm:Q,unitType:"m2"})}else if(me==="polyca"){const{map:P,bumpMap:J}=Lh(V,Q);this.activeTextures.push(P,J);const X=this.materials.createPolycaMaterial(P,J);this.activeMaterials.push(X);const fe=new Ve(4,Q,V);this.activeGeometries.push(fe);const ae=new j(fe,X);ae.position.set(-n/2+10,ue,pe),this.panelGroup.add(ae);const Ae=new j(fe,X);Ae.position.set(n/2-10,ue,pe),this.panelGroup.add(Ae),this.recordPart(`中空ポリカ 4.0mm 側板 (${ie}奥行筋)`,`${V} x ${Q} mm`,2,`左右側面 ${he}(中空ポリカ)`,"panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:V,heightMm:Q,unitType:"m2"})}else if(me==="black_matte"){const P=new Ve(g,Q,V);this.activeGeometries.push(P);const J=new j(P,this.materials.blackMatteAcrylic);J.position.set(-n/2+10,ue,pe),this.panelGroup.add(J);const X=new j(P,this.materials.blackMatteAcrylic);X.position.set(n/2-10,ue,pe),this.panelGroup.add(X),this.recordPart(`アクリル黒両面マット 3.0mm 側板 (${ie})`,`${V} x ${Q} mm`,2,`左右側面 ${he}`,"panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:V,heightMm:Q,unitType:"m2"})}else if(me==="smoke_gray"){const P=new Ve(g,Q,V);this.activeGeometries.push(P);const J=new j(P,this.materials.smokeGrayAcrylic);J.position.set(-n/2+10,ue,pe),this.panelGroup.add(J);const X=new j(P,this.materials.smokeGrayAcrylic);X.position.set(n/2-10,ue,pe),this.panelGroup.add(X),this.recordPart(`アクリル グレースモーク半透明 3.0mm 側板 (${ie})`,`${V} x ${Q} mm`,2,`左右側面 ${he}`,"panel",{panelCode:"acrylic_smoke_gray_3_0",partCode:"acrylic_smoke_gray_3_0",widthMm:V,heightMm:Q,unitType:"m2"})}else{const P=new Ve(g,Q,V);this.activeGeometries.push(P);const J=new j(P,this.materials.acrylic);J.position.set(-n/2+10,ue,pe),this.panelGroup.add(J);const X=new j(P,this.materials.acrylic);X.position.set(n/2-10,ue,pe),this.panelGroup.add(X),this.recordPart(`透明アクリル 3.0mm 側板 (${ie})`,`${V} x ${Q} mm`,2,`左右側面 ${he}`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:V,heightMm:Q,unitType:"m2"})}};if(l){const V=c,Q=Math.max(10,r-60-V),ue=Math.round(Q+10),me=Math.round(V+10);ve(re,ue,20+Q/2,M,"下部");const Pe=r-20-V/2;if(ve(re,me,Pe,w,"上部"),this.params.hasSideVentCover&&w==="punching"){const he=V+10,P=s-2,J=new Ve(1.5,he,P);this.activeGeometries.push(J);const X=-n/2-1.5/2,fe=n/2+1.5/2,ae=new j(J,this.materials.ventCoverAcrylic);ae.position.set(X,Pe,0),ae.castShadow=!0,this.panelGroup.add(ae);const Ae=new j(J,this.materials.ventCoverAcrylic);Ae.position.set(fe,Pe,0),Ae.castShadow=!0,this.panelGroup.add(Ae);const ye=(s-2)/2-9,A=-(s-2)/2+9,S=Pe+he/2-40,H=Pe-he/2+40,ne=[{y:S,z:ye},{y:S,z:A},{y:H,z:ye},{y:H,z:A}];for(const ee of ne)this.addThumbScrew(-n/2-1.5,ee.y,ee.z,-1),this.addThumbScrew(n/2+1.5,ee.y,ee.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${he} x ${P} mm`,2,"左右側面上部 外張り (φ9mm穴加工4箇所/枚・保温換気調整)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:he,heightMm:P,unitType:"m2"});const le=p==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${le})`,"外径φ15mm / M4 (手締め・工具不要)",8,"側面換気量調整板 固定用 (左右計8箇所)","other")}}else{const V=r-30;if(ve(re,V,r/2,f,""),this.params.hasSideVentCover&&f==="punching"){const ue=r-40,me=Math.round(ue/2+10),Pe=s-2,ie=new Ve(1.5,me,Pe);this.activeGeometries.push(ie);const he=-n/2-1.5/2,P=n/2+1.5/2,J=10+me/2,X=r-10-me/2,fe=new j(ie,this.materials.ventCoverAcrylic);fe.position.set(he,J,0),fe.castShadow=!0,this.panelGroup.add(fe);const ae=new j(ie,this.materials.ventCoverAcrylic);ae.position.set(P,J,0),ae.castShadow=!0,this.panelGroup.add(ae);const Ae=new j(ie,this.materials.ventCoverAcrylic);Ae.position.set(he,X,0),Ae.castShadow=!0,this.panelGroup.add(Ae);const ye=new j(ie,this.materials.ventCoverAcrylic);ye.position.set(P,X,0),ye.castShadow=!0,this.panelGroup.add(ye);const A=(s-2)/2-9,S=-(s-2)/2+9,H=Math.max(25,10+Math.min(30,me*.2)),ne=Math.min(r/2-15,r/2-Math.min(25,me*.2)),le=Math.max(r/2+15,r/2+Math.min(25,me*.2)),ee=Math.min(r-25,r-10-Math.min(30,me*.2)),De=[{y:ne,z:A},{y:ne,z:S},{y:H,z:A},{y:H,z:S},{y:ee,z:A},{y:ee,z:S},{y:le,z:A},{y:le,z:S}];for(const Ce of De)this.addThumbScrew(-n/2-1.5,Ce.y,Ce.z,-1),this.addThumbScrew(n/2+1.5,Ce.y,Ce.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${me} x ${Pe} mm`,4,"左右側面外張り (上下各2枚・φ9mm穴加工4箇所/枚・保温換気調整)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:me,heightMm:Pe,unitType:"m2"});const Ee=p==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${Ee})`,"外径φ15mm / M4 (手締め・工具不要)",16,"側面換気量調整板 固定用 (左右計16箇所)","other")}}const Y=(V,Q,ue,me,Pe,ie=!1)=>{const he=me&&me.startsWith("mesh"),P=p==="black";if(he){const J=parseInt(me.replace("mesh",""),10);if(P){const X=Math.max(10,Math.round(Q-6)),fe=Math.max(10,Math.round(V-46)),ae=ue-V/2+10,Ae=ue+V/2-10;this.addFrameMember("2020",X,new R(ae,r-10,Z),t,`天面インナー左2020 (${Pe})`,this.materials.silverInnerFrame),this.addFrameMember("2020",X,new R(Ae,r-10,Z),t,`天面インナー右2020 (${Pe})`,this.materials.silverInnerFrame);const ye=Z+Q/2-10,A=Z-Q/2+10;this.addFrameMember("2020",fe,new R(ue,r-10,ye),e,`天面インナー前2020 (${Pe})`,this.materials.silverInnerFrame),this.addFrameMember("2020",fe,new R(ue,r-10,A),e,`天面インナー後2020 (${Pe})`,this.materials.silverInnerFrame),this.recordPart(vt("2020",X,"silver",!0),X,2,`天面 金網取付用インナーフレーム左右 (${Pe}・黒ケージ専用)`,"frame",{partCode:"AFS-2020-5",lengthMm:X,unitType:"m"}),this.recordPart(vt("2020",fe,"silver",!0),fe,2,`天面 金網取付用インナーフレーム前後 (${Pe}・黒ケージ専用)`,"frame",{partCode:"AFS-2020-5",lengthMm:fe,unitType:"m"});const S=Math.max(10,Math.round(V-30)),H=Math.max(10,Math.round(Q-30)),ne=this.createWireMesh(S,H,J);ne.position.set(ue,r-10,Z),this.panelGroup.add(ne);const le=`FENP${J}-A${S}-B${H}`,ee=`wire_mesh_${J}`;this.recordPart(`金網 ${J}mmピッチ（黒粉体塗装） (型番: ${le})`,`${S} x ${H} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${Pe})`,"panel",{panelCode:ee,partCode:ee,widthMm:S,heightMm:H,unitType:"m2"})}else{const X=Math.max(10,Math.round(V+10)),fe=Math.max(10,Math.round(Q+10)),ae=this.createWireMesh(X,fe,J);ae.position.set(ue,r-10,Z),this.panelGroup.add(ae);const Ae=`FENP${J}-A${X}-B${fe}`,ye=`wire_mesh_${J}`;this.recordPart(`金網 ${J}mmピッチ（黒粉体塗装） (型番: ${Ae})`,`${X} x ${fe} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${Pe})`,"panel",{panelCode:ye,partCode:ye,widthMm:X,heightMm:fe,unitType:"m2"})}}else if(me==="acrylic"){const J=Math.round(V+10),X=Math.round(Q+10),fe=new Ve(J,g,X);this.activeGeometries.push(fe);const ae=new j(fe,this.materials.acrylic);ae.position.set(ue,r-20+g/2,Z),this.panelGroup.add(ae),this.recordPart("透明アクリル 3.0mm 天板",`${J} x ${X} mm`,1,`天面 (${Pe})`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:J,heightMm:X,unitType:"m2"})}else{const J=Math.round(V+10),X=Math.round(Q+10),fe=so(J,X,ie);this.activeTextures.push(fe);const ae=this.materials.createPunchingMaterial(fe);this.activeMaterials.push(ae);const Ae=new Ei(J,X);Ae.rotateX(-Math.PI/2),this.activeGeometries.push(Ae);const ye=new j(Ae,ae);if(ye.position.set(ue,r-20+g/2,Z),this.panelGroup.add(ye),this.recordPart("塩ビパンチングボード 透明 3.0mm 天板 (φ3.1-P7)",`${J} x ${X} mm`,1,`天面 (${Pe}・通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:J,heightMm:X,unitType:"m2"}),ie){const A=new Ze(19,19,4.5,32);this.activeGeometries.push(A);const S=r-20+g/2,H=Z-X/2+35,ne=ue-J/2+35,le=ue+J/2-35,ee=new j(A,this.materials.grommetMaterial);ee.position.set(ne,S,H),this.panelGroup.add(ee);const De=new j(A,this.materials.grommetMaterial);De.position.set(le,S,H),this.panelGroup.add(De)}}},Z=L?-10:0,xe=L?s-60:s-40;if(K){const V=(n-60)/2,Q=-V/2-10,ue=V/2+10,me=te==="top_split_4";Y(V,xe,Q,F,"左側",me),Y(V,xe,ue,C,"右側",me),te==="top_split_4"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",4,"天面板 奥側各2箇所 (計4箇所・端から35mm)","other")}else{const V=te==="top_single_2";Y(n-40,xe,0,x,"全面",V),te==="top_single_2"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,"天面板 奥側左右 (端から35mm)","other")}if(o==="C"){const V=n-30,Q=a+10,ue=new Ve(V,Q,g);this.activeGeometries.push(ue);const me=new j(ue,this.materials.acrylic);me.position.set(0,20+a/2,s/2-10),this.panelGroup.add(me),this.recordPart("透明アクリル 3.0mm 前窓",`${V} x ${Q} mm`,1,"正面 下部はめ殺し固定窓","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:V,heightMm:Q,unitType:"m2"})}}buildGlassRails(e,t,n,s){const{frameColor:r}=this.params,o=new gt;o.moveTo(-8,2.5),o.lineTo(-6.5,2.5),o.lineTo(-6.5,7),o.lineTo(-5,7),o.lineTo(-5,2),o.lineTo(-1.5,2),o.lineTo(-1.5,7),o.lineTo(1.5,7),o.lineTo(1.5,2),o.lineTo(5,2),o.lineTo(5,7),o.lineTo(6.5,7),o.lineTo(6.5,2.5),o.lineTo(8,2.5),o.lineTo(8,0),o.lineTo(-8,0),o.closePath();const a={depth:e,bevelEnabled:!1,steps:1},l=new dt(o,a);l.translate(0,0,-e/2),l.rotateY(-Math.PI/2),this.activeGeometries.push(l);const c=new j(l,this.materials.railMaterial);c.position.set(0,t,s),c.castShadow=!0,c.receiveShadow=!0,c.name="下側ガラスレール",this.doorGroup.add(c);const h=new gt;h.moveTo(-8,12-2.5),h.lineTo(-6.5,12-2.5),h.lineTo(-6.5,0),h.lineTo(-5,0),h.lineTo(-5,11),h.lineTo(-1.5,11),h.lineTo(-1.5,0),h.lineTo(1.5,0),h.lineTo(1.5,11),h.lineTo(5,11),h.lineTo(5,0),h.lineTo(6.5,0),h.lineTo(6.5,12-2.5),h.lineTo(8,12-2.5),h.lineTo(8,12),h.lineTo(-8,12),h.closePath();const u={depth:e,bevelEnabled:!1,steps:1},p=new dt(h,u);p.translate(0,0,-e/2),p.rotateY(-Math.PI/2),this.activeGeometries.push(p);const d=new j(p,this.materials.railMaterial);d.position.set(0,n-12,s),d.castShadow=!0,d.receiveShadow=!0,d.name="上側ガラスレール",this.doorGroup.add(d)}buildAntiFlexRails(e,t,n,s,r,o){const a=Math.max(10,t-25),l=new gt;l.moveTo(-8,2.5),l.lineTo(-6.5,2.5),l.lineTo(-6.5,7),l.lineTo(-5,7),l.lineTo(-5,2),l.lineTo(-1.5,2),l.lineTo(-1.5,7),l.lineTo(1.5,7),l.lineTo(1.5,2),l.lineTo(5,2),l.lineTo(5,7),l.lineTo(6.5,7),l.lineTo(6.5,2.5),l.lineTo(8,2.5),l.lineTo(8,0),l.lineTo(-8,0),l.closePath();const c={depth:a,bevelEnabled:!1,steps:1},h=(n+7+s-12)/2,u=new dt(l,c);u.translate(0,0,-a/2);const p=new tt().set(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);u.applyMatrix4(p),this.activeGeometries.push(u);const d=new j(u,this.materials.railMaterial);d.position.set(-e/2,h,r),d.castShadow=!0,d.receiveShadow=!0,d.name="左側たわみ防止レール",this.doorGroup.add(d);const g=new dt(l,c);g.translate(0,0,-a/2);const _=new tt().set(0,-1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);g.applyMatrix4(_),this.activeGeometries.push(g);const m=new j(g,this.materials.railMaterial);m.position.set(e/2,h,r),m.castShadow=!0,m.receiveShadow=!0,m.name="右側たわみ防止レール",this.doorGroup.add(m)}buildFramedDoors(){const{W:e,D:t,H:n,doorState:s,frameColor:r}=this.params,o=r==="silver",a=Math.max(10,e-40),l=Math.max(10,n-60),c=Math.max(10,Math.round(a/2+12)),h=Math.max(10,l-42),u=Math.max(10,c-64),p=Math.max(10,h+10),d=(n+20)/2,g=51,_=n-31,m=3,f=2,w=-a/2+f+m+c/2,M=a/2-f-m-c/2,x=Math.max(0,c-85);let F=w,C=M;s==="left_open"?F=w+x:s==="right_open"&&(C=M-x);let L=F,D=C;this._doorAnim&&!this._doorAnim.isFrontOpen&&(L=this._doorAnim.currentLeftX??F,D=this._doorAnim.currentRightX??C);const b=t/2-30,y=t/2-10,E=o?this.materials.aluminum:this.materials.blackFrame,U=o?this.materials.perchGrayCap:this.materials.endCapMaterial,I=new tt().makeBasis(new R(0,0,-1),new R(0,1,0),new R(1,0,0)),O=new yt().setFromRotationMatrix(I),N=new tt().makeBasis(new R(0,0,1),new R(1,0,0),new R(0,1,0)),k=new yt().setFromRotationMatrix(N),K=pe=>{const ve=new mt;this.addFrameMember(o?"2020_flat":"2020",c,new R(0,g,0),O,"扉下フレーム2020",E,"right",ve),this.addFrameMember(o?"2020_flat":"2020",c,new R(0,_,0),O,"扉上フレーム2020",E,"right",ve),this.addFrameMember("2040",h,new R(-c/2+17,d,0),k,"扉左縦フレーム2040",E,null,ve),this.addFrameMember("2040",h,new R(c/2-17,d,0),k,"扉右縦フレーム2040",E,null,ve);const Y=new Ve(u,p,3);this.activeGeometries.push(Y);const Z=new j(Y,this.materials.acrylic);Z.position.set(0,d,0),Z.castShadow=!0,ve.add(Z);const xe=new yt(0,-Math.PI/2,0),V=new yt(0,Math.PI/2,0);if(this.addDoorEndCap(-c/2-1.5,g,0,xe,U,ve),this.addDoorEndCap(c/2+1.5,g,0,V,U,ve),this.addDoorEndCap(-c/2-1.5,_,0,xe,U,ve),this.addDoorEndCap(c/2+1.5,_,0,V,U,ve),pe){this.addFrameMember("2040",94,new R(-c/2+17,d,20),k,"左扉スペーサー2040",E,null,ve);const Q=new yt(-Math.PI/2,0,0),ue=new yt(Math.PI/2,0,0);this.addEndCap2040(-c/2+17,d+47+1.5,20,Q,U,ve),this.addEndCap2040(-c/2+17,d-47-1.5,20,ue,U,ve);const me=this.createSlideLatchMesh(!0);me.position.set(-c/2+17,d,30),ve.add(me),ve.userData.latchKnob=me.userData.knobPivot}else{const Q=this.createSlideLatchMesh(!1);Q.position.set(c/2-17,d,10),ve.add(Q),ve.userData.latchKnob=Q.userData.knobPivot}return ve},W=K(!0);W.position.set(L,0,b),this.doorGroup.add(W);const ce=K(!1);ce.position.set(D,0,y),this.doorGroup.add(ce);const te=this.createStrikerAssembly(!0);te.position.set(-e/2,d,t/2),this.doorGroup.add(te);const re=this.createStrikerAssembly(!1);re.position.set(e/2,d,t/2),this.doorGroup.add(re),this._doorAnim={isFramed:!0,leftDoor:W,rightDoor:ce,leftLatchKnob:W.userData.latchKnob,rightLatchKnob:ce.userData.latchKnob,baseLeftCenterX:w,baseRightCenterX:M,leftKnobGroup:null,rightKnobGroup:null,lockGroup:null,leftKnobOffsetX:0,rightKnobOffsetX:0,lockOffsetX:0,currentLeftX:L,currentRightX:D,targetLeftX:F,targetRightX:C,animating:L!==F||D!==C,startLeftX:L,startRightX:D,startTime:performance.now(),duration:1600}}buildDoors(){this.clearGroup(this.doorGroup);const{W:e,D:t,H:n,cageType:s,frontWindowH:r,doorState:o,hasDoorAntiFlex:a,frameColor:l}=this.params;if(s==="A_FRAMED"){this.buildFramedDoors();return}if(s==="A_FRONT"){this.buildFrontOpenDoor();return}const c=e-40;let h=(c+30)/2;a&&(h-=2);let u=0;const p=n-20;if(s==="A"){const ve=this.params.frontWideFrame||"2x";ve==="3x"?u=60:ve==="2x"?u=40:u=20}else u=40+r;const d=Math.max(10,p-u),g=t/2-10;this.buildGlassRails(c,u,p,g),a&&this.buildAntiFlexRails(c,d,u,p,g,l);const _=Math.max(10,d-9),m=u+2.5+_/2,f=3,w=new Ve(h,_,f);this.activeGeometries.push(w);const M=Math.max(0,h-50),x=g-3.25,F=g+3.25,C=a?2:0,L=-c/2+C+h/2,D=c/2-C-h/2;let b=L,y=D;o==="left_open"?b=L+M:o==="right_open"&&(y=D-M);let E=b,U=y;this._doorAnim&&(E=this._doorAnim.currentLeftX,U=this._doorAnim.currentRightX);const I=new j(w,this.materials.doorGlassLeft);I.position.set(E,m,x),I.castShadow=!1,this.doorGroup.add(I);const O=-h/2+15,N=this.addKnobScrew(E+O,m,x+f/2),k=new j(w,this.materials.doorGlassRight);k.position.set(U,m,F),k.castShadow=!1,this.doorGroup.add(k);const K=h/2-15,W=this.addKnobScrew(U+K,m,F+f/2),te=m-_/2+20,re=-h/2+15,pe=this.addDoorLock(U+re,te,F+f/2);this._doorAnim={leftDoor:I,rightDoor:k,leftKnobGroup:N,rightKnobGroup:W,lockGroup:pe,leftKnobOffsetX:O,rightKnobOffsetX:K,lockOffsetX:re,currentLeftX:E,currentRightX:U,targetLeftX:b,targetRightX:y,animating:E!==b||U!==y,startLeftX:E,startRightX:U,startTime:performance.now(),duration:3e3}}addCountersunkPhillipsScrew(e,t,n,s,r=0){const o=new Ze(3.5,2,1.2,16);o.rotateX(Math.PI/2),this.activeGeometries.push(o);const a=new j(o,this.materials.screwSilver);a.position.set(t,n,s),e.add(a);const l=new Ve(3.8,.7,.4),c=new Ve(.7,3.8,.4);this.activeGeometries.push(l,c);const h=new j(l,this.materials.screwSlot),u=new j(c,this.materials.screwSlot);h.position.set(t,n,s+.5),u.position.set(t,n,s+.5),r!==0&&(h.rotation.z=r,u.rotation.z=r),e.add(h),e.add(u)}buildFrontOpenDoor(){const{W:e,D:t,H:n,doorState:s}=this.params;let r=40;const o=this.params.frontWideFrame||"2x";o==="3x"?r=60:o==="2x"?r=40:r=20;const a=n-20,l=r-18,c=a+18,h=c-l,u=(l+c)/2,p=e-2-21.3,d=3,g=t/2,_=-e/2+21.3,m=e/2-2,f=(_+m)/2,w=l+h*1/4,M=l+h*3/4,x=19,F=52,C=-h/4+F/2,L=-h/4-F/2,D=h/4+F/2,b=h/4-F/2,y=10,E=p/2,U=h/2,I=Math.min(y,E/4,U/4),O=this.params.doorHingeSide==="right",N=new gt;O?(N.moveTo(-E+I,-U),N.lineTo(E-I,-U),N.absarc(E-I,-U+I,I,-Math.PI/2,0,!1),N.lineTo(E,U-I),N.absarc(E-I,U-I,I,0,Math.PI/2,!1),N.lineTo(-E+I,U),N.absarc(-E+I,U-I,I,Math.PI/2,Math.PI,!1),N.lineTo(-E,D),N.lineTo(-E+x,D),N.lineTo(-E+x,b),N.lineTo(-E,b),N.lineTo(-E,C),N.lineTo(-E+x,C),N.lineTo(-E+x,L),N.lineTo(-E,L),N.lineTo(-E,-U+I),N.absarc(-E+I,-U+I,I,Math.PI,Math.PI*1.5,!1)):(N.moveTo(-E+I,-U),N.lineTo(E-I,-U),N.absarc(E-I,-U+I,I,-Math.PI/2,0,!1),N.lineTo(E,L),N.lineTo(E-x,L),N.lineTo(E-x,C),N.lineTo(E,C),N.lineTo(E,b),N.lineTo(E-x,b),N.lineTo(E-x,D),N.lineTo(E,D),N.lineTo(E,U-I),N.absarc(E-I,U-I,I,0,Math.PI/2,!1),N.lineTo(-E+I,U),N.absarc(-E+I,U-I,I,Math.PI/2,Math.PI,!1),N.lineTo(-E,-U+I),N.absarc(-E+I,-U+I,I,Math.PI,Math.PI*1.5,!1));const k={steps:1,depth:d,bevelEnabled:!1},K=new dt(N,k);this.activeGeometries.push(K);const W=new j(K,this.materials.doorGlassRight);W.castShadow=!1;const ce=O?e/2-10-11.25:-e/2+10+11.25,te=g+d,re=new mt;re.name="FrontOpenDoorPivot",re.position.set(ce,0,te),W.position.set(f-ce,u,-d),re.add(W);const pe=O?e/2-10:-e/2+10,ve=O?-e/2+10:e/2-10;this.addHingeTH31(pe,ce,M,g,d,re,O),this.addHingeTH31(pe,ce,w,g,d,re,O);const Y=[];this.addLockC1249(ve,M,g,d,ce,re,Y,O),this.addLockC1249(ve,w,g,d,ce,re,Y,O),this.doorGroup.add(re);const Z=s==="open"||s==="left_open"||s==="right_open",xe=Z?O?Math.PI*(120/180):-Math.PI*(120/180):0,V=Z?O?-Math.PI*1.5:Math.PI*1.5:0;let Q=xe,ue=V;this._doorAnim&&typeof this._doorAnim.currentRotY=="number"&&(Q=this._doorAnim.currentRotY,ue=this._doorAnim.currentLockRotZ??V),re.rotation.y=Q;for(const me of Y)me.rotation.z=ue;this._doorAnim={isFrontOpen:!0,doorPivot:re,lockPivots:Y,currentRotY:Q,targetRotY:xe,currentLockRotZ:ue,targetLockRotZ:V,startRotY:Q,startLockRotZ:ue,animating:Math.abs(Q-xe)>.001||Math.abs(ue-V)>.001,startTime:performance.now(),duration:2200}}addHingeTH31(e,t,n,s,r,o,a=!1){const l=this.materials.handleMaterial,c=s+r,h=new Ve(16,52,r);this.activeGeometries.push(h);const u=new j(h,this.materials.acrylic);u.position.set(e,n,s+r/2),this.doorGroup.add(u);const p=new Ve(18,50,1.5);this.activeGeometries.push(p);const d=new j(p,l),g=a?t+9:t-9;d.position.set(g,n,c+.75),d.castShadow=!0,this.doorGroup.add(d);const _=e;for(const C of[-17,8.5])this.addCountersunkPhillipsScrew(this.doorGroup,_,n+C,c+1.5,Math.PI/4);const m=new Ze(2.5,2.5,50,16);this.activeGeometries.push(m);const f=new j(m,l);f.position.set(0,n,0),o.add(f);const w=new Ve(18,50,1.5);this.activeGeometries.push(w);const M=new j(w,l),x=a?-9:9;M.position.set(x,n,.75),M.castShadow=!0,o.add(M);const F=a?-11.25:11.25;for(const C of[-8.5,17])this.addCountersunkPhillipsScrew(o,F,n+C,1.5,Math.PI/6)}addLockC1249(e,t,n,s,r,o,a,l=!1){const c=this.materials.handleMaterial,h=n+s,u=new Ve(16,48,s);this.activeGeometries.push(u);const p=new j(u,this.materials.acrylic);p.position.set(e,t,n+s/2),this.doorGroup.add(p);const d=new Ve(16,46,2);this.activeGeometries.push(d);const g=new j(d,c);g.position.set(e,t,h+1),this.doorGroup.add(g);for(const O of[-15,15])this.addCountersunkPhillipsScrew(this.doorGroup,e,t+O,h+2,Math.PI/4);const _=new Ve(14,16,12);this.activeGeometries.push(_);const m=new j(_,c);m.position.set(e,t,h+2+6),this.doorGroup.add(m);const w=(l?-this.params.W/2+29:this.params.W/2-29)-r,M=new Ve(16,46,2);this.activeGeometries.push(M);const x=new j(M,c);x.position.set(w,t,1),o.add(x);for(const O of[-15,15])this.addCountersunkPhillipsScrew(o,w,t+O,2,Math.PI/3);const F=new mt;F.name="LockArmPivot",F.position.set(w,t,2);const C=new Ze(3,3,3,16);C.rotateX(Math.PI/2),this.activeGeometries.push(C);const L=new j(C,c);L.position.set(0,0,1.5),F.add(L);const D=new Ve(38,14,2.5);this.activeGeometries.push(D);const b=new j(D,c),y=l?-19:19;b.position.set(y,0,6),F.add(b);const E=new Ze(3.5,3.5,14,16);E.rotateX(Math.PI/2),this.activeGeometries.push(E);const U=new j(E,c),I=l?-18:18;U.position.set(I,0,13),F.add(U),o.add(F),a&&a.push(F)}buildFramedDoorPartsRecord(){const{W:e,H:t,frameColor:n}=this.params,s=n==="silver",r=Math.max(10,e-40),o=Math.max(10,t-60),a=Math.max(10,Math.round(r/2+12)),l=Math.max(10,o-42),c=Math.max(10,a-64),h=Math.max(10,l+10),u=s?"AFSF-2020-4":"AFS-2020-4-BK",p=`${u}-${a}`;this.recordPart(p,`${a} mm`,4,"正面枠囲い扉 幅方向フレーム (上下各2本・計4本)","frame",{partCode:u,lengthMm:a,unitType:"m"});const d=s?"AFSF-2040-4":"AFS-2040-4-BK",g=`${d}-${l}`;this.recordPart(g,`${l} mm`,4,"正面枠囲い扉 高さ方向フレーム (左右各2本・計4本)","frame",{partCode:d,lengthMm:l,unitType:"m"});const _=s?"ECP-2020-4-GY":"ECP-2020-4",m=s?"ECP-2020-4-GY (グレー)":"ECP-2020-4 (ブラック)";this.recordPart(_,"-",8,`正面枠囲い扉 幅フレーム端部 (${m})`,"rail_cap",{partCode:_,unitType:"piece"}),this.recordPart("透明アクリル 3.0mm 扉板",`${c} x ${h} mm`,2,"正面枠囲い扉 (透明押出板3.0mm)","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:c,heightMm:h,unitType:"m2"});const f=a-22,w=14;this.recordPart("アクリル黒両面マット 3.0mm (スライド部材)",`${f} x ${w} mm`,4,"正面枠囲い扉 スライド用部材 (厚さ3mm)","panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:f,heightMm:w,unitType:"m2"});const M=s?"AFS-2040-4":"AFS-2040-4-BK",x=`${M}-94`;this.recordPart(x,"94 mm",1,"正面枠囲い扉 左扉ラッチ高さ合わせ用スペーサーフレーム","frame",{partCode:M,lengthMm:94,unitType:"m"});const F=s?"ECP-2040-4-GY":"ECP-2040-4",C=s?"ECP-2040-4-GY (グレー)":"ECP-2040-4 (ブラック)";this.recordPart(F,"-",2,`正面枠囲い扉 左扉スペーサー端部 (${C})`,"rail_cap",{partCode:F,unitType:"piece"}),this.recordPart("タキゲン CP-294N スライドラッチ","70 x 25 mm",2,"正面枠囲い扉 ワンタッチスライドラッチ (左右各1個)","other",{partCode:"CP-294N",unitType:"piece"}),this.recordPart("アクリル丸板 透明 φ20mm t5mm (穴加工済)","φ20 x t5 mm",4,"正面枠囲い柱側 スライドラッチ受金高さ調整スペーサー (各2枚・計4枚)","other",{partCode:"ACRYLIC-ROUND-20-5",unitType:"piece"})}buildDoorPartsRecord(){const{W:e,H:t,cageType:n,frontWindowH:s,hasDoorAntiFlex:r,frameColor:o}=this.params;if(n==="A_FRAMED"){this.buildFramedDoorPartsRecord();return}if(n==="A_FRONT"){const f=e-2-21.3;let w=40;const M=this.params.frontWideFrame||"2x";M==="3x"?w=60:M==="2x"?w=40:w=20;const F=Math.max(10,t-20-w)+36,C=this.params.doorHingeSide==="right",L=C?"正面 右ヒンジ・左打掛オープン扉":"正面 左ヒンジ・右打掛オープン扉";this.recordPart("前開きアクリル扉 3.0mm (切欠き・穴加工済)",`${Math.round(f*10)/10} x ${Math.round(F)} mm`,1,L,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(f*10)/10,heightMm:Math.round(F),unitType:"m2"});const D=C?"前開き扉 右ヒンジ (2箇所)":"前開き扉 左ヒンジ (2箇所)";this.recordPart("TH-31 ステンレス蝶番","50 x 36 mm (SUS304)",2,D,"rail_cap",{partCode:"TH-31",lengthMm:null,unitType:"piece"});const b=C?"前開き扉 左打掛ロック (2箇所)":"前開き扉 右打掛ロック (2箇所)";this.recordPart("C-1249-4 ステンレス打掛","58 x 46 mm (SUS304)",2,b,"rail_cap",{partCode:"C-1249-4",lengthMm:null,unitType:"piece"});const y=C?"前開き扉 右ヒンジ固定座 (フレーム隙間埋め用)":"前開き扉 左ヒンジ固定座 (フレーム隙間埋め用)";this.recordPart("透明アクリル 3.0mm ヒンジ座板 (切削加工)","16 x 52 mm",2,y,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:16,heightMm:52,unitType:"m2"});const E=C?"前開き扉 左打掛受具座 (フレーム隙間埋め用)":"前開き扉 右打掛受具座 (フレーム隙間埋め用)";this.recordPart("透明アクリル 3.0mm ロック受座板 (切削加工)","16 x 48 mm",2,E,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:16,heightMm:48,unitType:"m2"});return}const a=e-40;let l=(a+30)/2;r&&(l-=2);let c=0;const h=t-20;if(n==="A"){const f=this.params.frontWideFrame||"2x";f==="3x"?c=60:f==="2x"?c=40:c=20}else c=40+s;const u=Math.max(10,h-c),p=Math.max(10,u-9),d=a,g=o==="black"?"BK":"GY",_=`PGRU-03-4-${g}`,m=`PGRL-03-4-${g}`;if(this.recordPart(_,d,1,"正面開口 上部 (間口高12mm縮小)","frame",{partCode:_,lengthMm:d,unitType:"m"}),this.recordPart(m,d,1,"正面開口 下部 (間口高7mm縮小)","frame",{partCode:m,lengthMm:d,unitType:"m"}),r){const f=Math.max(10,u-25);this.recordPart(m,f,2,"正面スライド扉 左右端 (扉たわみ防止)","frame",{partCode:m,lengthMm:f,unitType:"m"})}this.recordPart("透明アクリル扉 3.0mm",`${Math.round(l)} x ${Math.round(p)} mm`,2,"正面 引き違い (重なり30mm)","panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(l),heightMm:Math.round(p),unitType:"m2"}),this.recordPart("段付きローレットノブ (SUS303, RNSFS4)","外径φ16 / ボスφ8 / 全長9.5mm",2,"扉端から15mm・上下中央","other"),this.recordPart("プッシュ式スライド扉鍵 (C-108)","外径φ18.5mm / 全長30mm (キー付)",1,"右スライド扉 下部 (端から15mm・下端から20mm)","other")}updateDoorAnimation(){if(!this._doorAnim||!this._doorAnim.animating)return;const e=this._doorAnim,t=performance.now()-e.startTime,n=Math.min(1,t/e.duration),s=n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;if(e.isFrontOpen){if(e.targetRotY!==0){const o=Math.min(1,Math.max(0,n/.35)),a=o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2;e.currentLockRotZ=e.startLockRotZ+(e.targetLockRotZ-e.startLockRotZ)*a;const l=Math.min(1,Math.max(0,(n-.35)/.65)),c=l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2;e.currentRotY=e.startRotY+(e.targetRotY-e.startRotY)*c}else{const o=Math.min(1,Math.max(0,n/.65)),a=o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2;e.currentRotY=e.startRotY+(e.targetRotY-e.startRotY)*a;const l=Math.min(1,Math.max(0,(n-.65)/.35)),c=l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2;e.currentLockRotZ=e.startLockRotZ+(e.targetLockRotZ-e.startLockRotZ)*c}if(e.doorPivot&&(e.doorPivot.rotation.y=e.currentRotY),e.lockPivots)for(const o of e.lockPivots)o.rotation.z=e.currentLockRotZ;n>=1&&(e.animating=!1);return}if(e.isFramed){e.currentLeftX=e.startLeftX+(e.targetLeftX-e.startLeftX)*s,e.currentRightX=e.startRightX+(e.targetRightX-e.startRightX)*s,e.leftDoor&&(e.leftDoor.position.x=e.currentLeftX),e.rightDoor&&(e.rightDoor.position.x=e.currentRightX);const r=e.targetLeftX!==e.startLeftX,o=e.targetRightX!==e.startRightX,a=.28;if(r&&e.leftLatchKnob){const l=e.targetLeftX>e.baseLeftCenterX;let c=0;if(l)if(n<.18){const h=n/.18;c=a*(h*h*(3-2*h))}else if(n<.35)c=a;else if(n<.48){const h=(n-.35)/.13;c=a*(1-h*h*(3-2*h))}else c=0;else if(n<.65)c=0;else if(n<.82){const h=(n-.65)/.17;c=a*(h*h*(3-2*h))}else if(n<.9){const h=(n-.82)/.08;c=a*(1-h*h)}else c=0;e.leftLatchKnob.rotation.y=c}else e.leftLatchKnob&&(e.leftLatchKnob.rotation.y=0);if(o&&e.rightLatchKnob){const l=e.targetRightX<e.baseRightCenterX;let c=0;if(l)if(n<.18){const h=n/.18;c=a*(h*h*(3-2*h))}else if(n<.35)c=a;else if(n<.48){const h=(n-.35)/.13;c=a*(1-h*h*(3-2*h))}else c=0;else if(n<.65)c=0;else if(n<.82){const h=(n-.65)/.17;c=a*(h*h*(3-2*h))}else if(n<.9){const h=(n-.82)/.08;c=a*(1-h*h)}else c=0;e.rightLatchKnob.rotation.y=-c}else e.rightLatchKnob&&(e.rightLatchKnob.rotation.y=0);n>=1&&(e.animating=!1,e.leftLatchKnob&&(e.leftLatchKnob.rotation.y=0),e.rightLatchKnob&&(e.rightLatchKnob.rotation.y=0));return}e.currentLeftX=e.startLeftX+(e.targetLeftX-e.startLeftX)*s,e.currentRightX=e.startRightX+(e.targetRightX-e.startRightX)*s,e.leftDoor&&(e.leftDoor.position.x=e.currentLeftX),e.leftKnobGroup&&(e.leftKnobGroup.position.x=e.currentLeftX+e.leftKnobOffsetX),e.rightDoor&&(e.rightDoor.position.x=e.currentRightX),e.rightKnobGroup&&(e.rightKnobGroup.position.x=e.currentRightX+e.rightKnobOffsetX),e.lockGroup&&(e.lockGroup.position.x=e.currentRightX+e.lockOffsetX),n>=1&&(e.animating=!1)}addKnobScrew(e,t,n){const s=new mt;s.position.set(e,t,n);const r=new Ze(4,4,6,24);r.rotateX(Math.PI/2),this.activeGeometries.push(r);const o=new j(r,this.materials.handleMaterial);o.position.set(0,0,3),o.castShadow=!0,s.add(o);const a=new Ze(8,8,3.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const l=new j(a,this.materials.handleMaterial);l.position.set(0,0,6+1.75),l.castShadow=!0,s.add(l);const c=new Ze(2,2,3,16);c.rotateX(Math.PI/2),this.activeGeometries.push(c);const h=new j(c,this.materials.grommetMaterial);return h.position.set(0,0,9.5-1.5+.1),s.add(h),this.doorGroup.add(s),s}addDoorLock(e,t,n){const s=new mt;s.position.set(e,t,n);const r=new Ze(9.25,9.25,2.5,32);r.rotateX(Math.PI/2),this.activeGeometries.push(r);const o=new j(r,this.materials.handleMaterial);o.position.set(0,0,1.25),o.castShadow=!0,s.add(o);const a=new Ze(7.75,7.75,20.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const l=new j(a,this.materials.handleMaterial);l.position.set(0,0,2.5+10.25),l.castShadow=!0,s.add(l);const c=new Ze(5.5,5.5,.8,32);c.rotateX(Math.PI/2),this.activeGeometries.push(c);const h=new j(c,this.materials.handleMaterial);h.position.set(0,0,23+.4),s.add(h);const u=new Ve(1.4,6.5,1.2);this.activeGeometries.push(u);const p=new j(u,this.materials.grommetMaterial);return p.position.set(0,0,23.6),s.add(p),this.doorGroup.add(s),s}addThumbScrew(e,t,n,s){const r=new mt;r.position.set(e,t,n);const o=new Ze(4,4,1.5,24);o.rotateZ(Math.PI/2),this.activeGeometries.push(o);const a=new j(o,this.materials.thumbScrewMaterial);a.position.set(s*.75,0,0),a.castShadow=!0,r.add(a);const l=new Ze(7.5,7.5,4.5,24);l.rotateZ(Math.PI/2),this.activeGeometries.push(l);const c=new j(l,this.materials.thumbScrewMaterial);c.position.set(s*(1.5+2.25),0,0),c.castShadow=!0,r.add(c);const h=new Ze(3,3,.2,16);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);const u=new j(h,this.materials.grommetMaterial);return u.position.set(-s*.1,0,0),r.add(u),this.panelGroup.add(r),r}buildFeet(){const{W:e,D:t}=this.params,n=11,s=-n/2,r=[-e/2+10,e/2-10],o=[t/2-50,-t/2+50],a=new Ze(9,7.5,n,32);this.activeGeometries.push(a);const l=new Ze(4,4,4,24);this.activeGeometries.push(l);const c=new Ze(3.5,3.5,.8,24);this.activeGeometries.push(c);for(const h of r)for(const u of o){const p=new j(a,this.materials.grommetMaterial);p.position.set(h,s,u),p.castShadow=!0,p.receiveShadow=!0,this.feetGroup.add(p);const d=new j(l,this.materials.railMaterial);d.position.set(h,-n+2,u),this.feetGroup.add(d);const g=new j(c,this.materials.handleMaterial);g.position.set(h,-n+3.6,u),this.feetGroup.add(g)}this.recordPart("ゴム脚 (黒)","外径φ18(上)/φ15(下) x H11mm (M4用座金入)",4,"床面 奥行きフレーム下面 (前後端から50mm・接地用)","other")}buildCasters(){const{W:e,D:t}=this.params,n=[-e/2+10,e/2-10],s=[t/2-7-20,-(t/2-7)+20],r=new Ve(20,3,40);this.activeGeometries.push(r);const o=new Ze(10,10,12,24);this.activeGeometries.push(o);const a=new Ve(2.5,28,22);this.activeGeometries.push(a);const l=new Ve(2.5,28,22);this.activeGeometries.push(l);const c=new Ze(25,25,20,32);c.rotateZ(Math.PI/2),this.activeGeometries.push(c);const h=new Ze(4,4,24,16);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);for(const u of n)for(const p of s){const d=new mt;d.position.set(u,0,p);const g=new j(r,this.materials.casterBracket);g.position.set(0,-1.5,0),g.castShadow=!0,d.add(g);const _=new j(o,this.materials.casterBracket);_.position.set(0,-9,0),d.add(_);const m=new j(a,this.materials.casterBracket);m.position.set(-10,-27,0),d.add(m);const f=new j(l,this.materials.casterBracket);f.position.set(10,-27,0),d.add(f);const w=new j(c,this.materials.casterWheel);w.position.set(0,-41,0),w.castShadow=!0,w.receiveShadow=!0,d.add(w);const M=new j(h,this.materials.casterBracket);M.position.set(0,-41,0),d.add(M),this.feetGroup.add(d)}this.recordPart("自在キャスター","車輪径φ50 / 取付高66mm",4,"床面 奥行きフレーム下面 (端から7mm控え)","other")}addPerch2020GrayCap(e,t,n){const a=new gt;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const l={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},c=new dt(a,l);c.translate(0,0,-1.5),this.activeGeometries.push(c);const h=new j(c,this.materials.perchGrayCap);return h.position.set(e,t,n),h.castShadow=!0,h.receiveShadow=!0,h.name="止まり木・ECP-2020-4-GY",this.perchGroup.add(h),h}addPerch1530BlackCap(e,t,n){const a=new gt;a.moveTo(-7.5+1,-15),a.lineTo(7.5-1,-15),a.absarc(7.5-1,-14,1,-Math.PI/2,0,!1),a.lineTo(7.5,14),a.absarc(7.5-1,14,1,0,Math.PI/2,!1),a.lineTo(-7.5+1,15),a.absarc(-7.5+1,14,1,Math.PI/2,Math.PI,!1),a.lineTo(-7.5,-14),a.absarc(-7.5+1,-14,1,Math.PI,Math.PI*1.5,!1);const l={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.2,bevelThickness:.2},c=new dt(a,l);c.rotateX(Math.PI/2),c.translate(0,-1.5,0),this.activeGeometries.push(c);const h=new j(c,this.materials.perchBlackCap);return h.position.set(e,t,n),h.castShadow=!0,h.receiveShadow=!0,h.name="止まり木・ECP-1530-6",this.perchGroup.add(h),h}addPerchThumbScrew(e,t,n){const o=new Ze(5,5,5,24);o.translate(0,5/2,0),this.activeGeometries.push(o);const a=new j(o,this.materials.perchWhiteScrew);return a.position.set(e,t,n),a.castShadow=!0,a.name="止まり木・M3つまみネジ",this.perchGroup.add(a),a}buildPerch(){const{W:e,D:t,H:n}=this.params,s=e-120,r=Math.floor(s/7)*7,o=Math.max(10,r-15),a=Math.max(10,Math.round(n/2)),l=Math.max(0,a-50-15),c=Math.max(10,Math.floor(l/20)*10),h=15+c,u=this.materials.perchAluminum,p=this.materials.handleMaterial,d=r/2,g=n-20-10,_=90,m=new yt(0,0,0),f=[-d,d];for(const D of f){const b=Ph(_,"bottom");b.translate(0,0,-_/2),this.activeGeometries.push(b);const y=new j(b,u);y.position.set(D,g,0),y.rotation.copy(m),y.castShadow=!0,y.receiveShadow=!0,y.name="止まり木・天板固定フレーム2020",this.perchGroup.add(y),this.addPerch2020GrayCap(D,g,_/2),this.addPerch2020GrayCap(D,g,-_/2);const E=[25,-25];for(const U of E)this.addPerchThumbScrew(D,n-20,U)}const w=n-40,M=w-a/2,x=w-a;for(const D of f){const b=D1(a);b.translate(0,0,-a/2),b.rotateX(Math.PI/2),this.activeGeometries.push(b);const y=new j(b,u);y.position.set(D,M,0),y.castShadow=!0,y.receiveShadow=!0,y.name="止まり木・吊り下げフレーム1530",this.perchGroup.add(y),this.addPerch1530BlackCap(D,x,0);const E=[x+15,x+15+c,x+15+2*c];for(let U=0;U<E.length;U++){const I=E[U],O=D>0?1:-1,N=new Ze(3,3,.4,16);N.rotateZ(Math.PI/2),this.activeGeometries.push(N);const k=new j(N,this.materials.railMaterial);k.position.set(D+O*7.4,I,0),this.perchGroup.add(k)}}const F=x+h,C=new Ze(15,15,o,32);C.rotateZ(Math.PI/2),this.activeGeometries.push(C);const L=new j(C,u);L.position.set(0,F,0),L.castShadow=!0,L.receiveShadow=!0,L.name="止まり木・アルミ丸パイプASTP-30",this.perchGroup.add(L);for(const D of f){const b=D>0?1:-1,y=new Ze(5,5,3.5,16);y.rotateZ(Math.PI/2),this.activeGeometries.push(y);const E=new j(y,p);E.position.set(D+b*9.2,F,0),E.castShadow=!0,this.perchGroup.add(E)}this.recordPart("AFSF-2020-4-90",90,2,"止まり木 天板固定フレーム (溝なし下面・シルバー)","frame"),this.recordPart(`AFS-1530-6-${a}`,a,2,"止まり木 垂直吊り下げフレーム (高さ調整3穴加工・シルバー)","frame"),this.recordPart(`ASTP-30-${o}`,o,1,"止まり木 φ30アルミ丸パイプ (シルバー)","frame"),this.recordPart("ECP-2020-4-GY","20x20mm (グレー)",4,"止まり木 天板固定フレーム両端用エンドキャップ","rail_cap"),this.recordPart("ECP-1530-6","15x30mm (ブラック)",2,"止まり木 吊り下げフレーム下端用エンドキャップ","rail_cap"),this.recordPart("M3x8 つまみネジ (白)","M3 x L8mm",4,"止まり木 天板パンチング固定用つまみネジ","other"),this.recordPart("M6 ボルト","M6 x L20mm",2,"止まり木 φ30丸棒固定用ボルト","other")}buildCaulking(){const{W:e,D:t,hasFloorReinforcement:n}=this.params,s=this.materials.caulkingMaterial,r=5,o=3,a=w=>{const M=new gt;M.moveTo(0,0),M.lineTo(r,0),M.lineTo(0,o),M.closePath();const x=new dt(M,{depth:w,bevelEnabled:!1});return x.translate(0,0,-w/2),this.activeGeometries.push(x),x},l=Math.max(10,e-40),c=a(l),h=new j(c,s);h.rotation.y=-Math.PI/2,h.position.set(0,20,-t/2+20),this.caulkingGroup.add(h);const u=a(l),p=new j(u,s);p.rotation.y=Math.PI/2,p.position.set(0,20,t/2-20),this.caulkingGroup.add(p);const d=Math.max(10,t-50),g=a(d),_=new j(g,s);_.position.set(-e/2+20,20,0),this.caulkingGroup.add(_);const m=a(d),f=new j(m,s);if(f.rotation.y=Math.PI,f.position.set(e/2-20,20,0),this.caulkingGroup.add(f),n){const w=a(d),M=new j(w,s);M.rotation.y=Math.PI,M.position.set(-10,20,0),this.caulkingGroup.add(M);const x=a(d),F=new j(x,s);F.position.set(10,20,0),this.caulkingGroup.add(F)}}buildRubberPacking(){const{W:e,D:t,H:n,hasSideReinforcement:s,sideOpeningH:r}=this.params,o=this.params.panelConfig||{},a=this.materials.rubberPackingMaterial;let l=0;const c=(g,_,m,f,w,M,x)=>{const F=new Ve(g,_,m);this.activeGeometries.push(F);const C=new j(F,a);C.position.set(f,w,M),this.rubberPackingGroup.add(C),l+=x},h=1.6,u=3;if((o.back||"acrylic")!=="polyca"){const g=Math.max(10,e-40),_=Math.max(10,n-40),m=-t/2+20+h/2;c(g,u,h,0,20+u/2,m,g),c(u,_,h,-e/2+20+u/2,n/2,m,_),c(u,_,h,e/2-20-u/2,n/2,m,_)}const d=Math.max(10,t-40);if(s){const g=o.sideLower||"acrylic",_=o.sideUpper||"punching",m=Math.max(10,r),f=Math.max(10,n-60-m);if(g!=="polyca")for(const w of[-1,1]){const M=w*(e/2-20)-w*(h/2),x=20+f/2;c(h,u,d,M,20+u/2,0,d),c(h,f,u,M,x,-t/2+20+u/2,f),c(h,f,u,M,x,t/2-20-u/2,f)}if(_!=="polyca")for(const w of[-1,1]){const M=w*(e/2-20)-w*(h/2),x=20+f+20,F=x+m/2;c(h,u,d,M,x+u/2,0,d),c(h,m,u,M,F,-t/2+20+u/2,m),c(h,m,u,M,F,t/2-20-u/2,m)}}else if((o.side||"acrylic")!=="polyca"){const _=Math.max(10,n-40);for(const m of[-1,1]){const f=m*(e/2-20)-m*(h/2);c(h,u,d,f,20+u/2,0,d),c(h,_,u,f,n/2,-t/2+20+u/2,_),c(h,_,u,f,n/2,t/2-20-u/2,_)}}if(l>0){const g=Math.ceil(l/1e3);this.recordPart("モレ対策ゴムパッキン (グレー)",`${g} m`,1,`側面・背面 隙間モレ抑制用 (実施工長: ${Math.round(l)}mm / 1m単位積算)`,"rail_cap",{partCode:"NSCP1H-S-6",lengthMm:g*1e3,unitType:"m"})}}buildRoomDivider(){const{W:e,D:t,H:n,cageType:s,frontWideFrame:r,frontWindowH:o}=this.params,l=(this.params.panelConfig||{}).partition||"black_matte",c=Math.max(10,t-32),h=Math.max(10,n-23.5),u=3;let p=this.materials.blackMatteAcrylic,d="acrylic_black_matte_3_0",g="アクリル黒両面マット 3.0mm";if(l==="acrylic")p=this.materials.acrylic,d="acrylic_extrusion_3_0",g="透明アクリル 3.0mm";else if(l==="smoke_gray")p=this.materials.smokeGrayAcrylic,d="acrylic_smoke_gray_3_0",g="アクリル グレースモーク半透明 3.0mm";else if(l==="punching"){const J=so(c,h,!1);this.activeTextures.push(J),p=this.materials.createPunchingMaterial(J),this.activeMaterials.push(p),d="pvc_punching_3_0",g="塩ビパンチングボード 透明 3.0mm"}const _=t/2-20,m=_-c,f=11.5,w=f+h,M=18,x=new gt;x.moveTo(_,f+M),x.lineTo(_,w),x.lineTo(m+M,w),x.lineTo(m,w-M),x.lineTo(m,f+M),x.lineTo(m+M,f),x.lineTo(_-M,f),x.lineTo(_,f+M);const F=new dt(x,{depth:u,bevelEnabled:!1}),C=F.attributes.position;for(let J=0;J<C.count;J++){const X=C.getX(J),fe=C.getY(J),ae=C.getZ(J);C.setXYZ(J,ae-u/2,fe,X)}C.needsUpdate=!0;const L=F.attributes.uv;if(L){for(let J=0;J<L.count;J++){const X=C.getZ(J),fe=C.getY(J),ae=(X-m)/c,Ae=(fe-f)/h;L.setXY(J,ae,Ae)}L.needsUpdate=!0}F.computeVertexNormals(),this.activeGeometries.push(F);const D=new j(F,p);D.castShadow=!0,D.receiveShadow=!0,D.name="２室分け仕切り板",this.dividerGroup.add(D),this.recordPart(`２室分け仕切り板 (${g})`,`${c} x ${h}`,1,`２室分け仕切り板後付け仕様 (${g})`,"panel",{panelCode:d,partCode:d,widthMm:c,heightMm:h});let b=30;if(s==="A"||s==="A_FRONT"){const J=r||"2x";J==="3x"?b=50:J==="2x"?b=30:b=10}else b=20+(o||50)+10;const y=18,E=18,U=18,I=3.5,O=new gt;O.moveTo(0,0),O.lineTo(-E,0),O.lineTo(-E,-I),O.lineTo(-I,-I),O.lineTo(-I,-U),O.lineTo(0,-U),O.closePath();const N=new dt(O,{depth:y,bevelEnabled:!1}),k=N.attributes.position;for(let J=0;J<k.count;J++){const X=k.getX(J),fe=k.getY(J),ae=k.getZ(J);k.setXYZ(J,-u/2+X,b-y/2+ae,_+fe)}k.needsUpdate=!0,N.computeVertexNormals(),this.activeGeometries.push(N);const K=new j(N,this.materials.perchAluminum);K.castShadow=!0,K.name="２室分け・ABL-2015-4",this.dividerGroup.add(K);const W=-u/2-E/2,ce=b,te=_-I-1,re=new Ze(3.5,3.5,1.8,16);re.rotateX(Math.PI/2),re.translate(W,ce,te),this.activeGeometries.push(re);const pe=new j(re,this.materials.handleMaterial);pe.name="２室分け・フレーム固定プラスネジ",this.dividerGroup.add(pe);const ve=new Ve(4,.8,.5);ve.translate(W,ce,te-.7),this.activeGeometries.push(ve);const Y=new j(ve,this.materials.wireMesh);this.dividerGroup.add(Y);const Z=new Ve(.8,4,.5);Z.translate(W,ce,te-.7),this.activeGeometries.push(Z);const xe=new j(Z,this.materials.wireMesh);this.dividerGroup.add(xe);const V=-u/2-I-2.5,Q=b,ue=_-U/2,me=new Ze(4.8,4.8,5,18);me.rotateZ(Math.PI/2),me.translate(V,Q,ue),this.activeGeometries.push(me);const Pe=new j(me,this.materials.perchWhiteScrew);Pe.name="２室分け・M3つまみネジ(ブラケット固定)",this.dividerGroup.add(Pe);const ie=n-20+u,he=ie+2,P=[{x:-3.5,z:-t/2+50},{x:3.5,z:-t/2+65},{x:-3.5,z:t/2-60},{x:3.5,z:t/2-75}];for(const J of P){const X=new Ze(4.5,4.5,4,16);X.translate(J.x,he,J.z),this.activeGeometries.push(X);const fe=new j(X,this.materials.perchWhiteScrew);fe.name="２室分け・天板M3つまみネジ",this.dividerGroup.add(fe);const ae=new Ze(1.5,1.5,7,12);ae.translate(J.x,ie-3.5,J.z),this.activeGeometries.push(ae);const Ae=new j(ae,this.materials.handleMaterial);this.dividerGroup.add(Ae)}this.recordPart("ABL-2015-4","20x15x15mm",1,"２室分け L字ブラケット ABL-2015-4 (シルバー)","rail_cap",{partCode:"ABL-2015-4",unitType:"piece"}),this.recordPart("M3 つまみネジ (白)","M3 x L8mm",5,"２室分け固定・倒れ防止用つまみネジ","other"),this.recordPart("M4 皿ネジ","M4 x L8mm",1,"２室分けフレーム固定用皿ネジ","other")}recordPart(e,t,n,s,r="other",o={}){const a=typeof t=="number"?`${Math.round(t)} mm`:t,l=typeof t=="number"?Math.round(t):o.lengthMm||null;let c=e;if(typeof t=="number"&&e.includes("-")){const h=e.split("-");isNaN(h[h.length-1])||(c=h.slice(0,-1).join("-"))}this.partsList.push({name:e,size:a,count:n,note:s,category:r,lengthMm:l,partCode:o.partCode||c,unitType:o.unitType||(typeof t=="number"?"m":"piece"),...o})}getPartsSummary(){return this.partsList}}class O1{constructor(){this.group=new mt,this.group.name="DimensionLines",this.lineMaterial=new Ql({color:165063,linewidth:2,depthTest:!1,transparent:!0,opacity:.85}),this.textSprites=[],this.activeGeometries=[]}clear(){for(;this.group.children.length>0;){const e=this.group.children[0];this.group.remove(e)}for(const e of this.activeGeometries)e.dispose();this.activeGeometries=[];for(const e of this.textSprites)e.material.map&&e.material.map.dispose(),e.material.dispose();this.textSprites=[]}createTextSprite(e,t="#38bdf8",n="#ffffff",s="rgba(20, 26, 38, 0.88)"){const r=document.createElement("canvas");r.width=384,r.height=120;const o=r.getContext("2d");o.fillStyle=s,o.strokeStyle=t,o.lineWidth=4;const a=24;o.beginPath(),o.roundRect(10,10,364,100,a),o.fill(),o.stroke(),o.font="bold 44px sans-serif",o.fillStyle=n,o.textAlign="center",o.textBaseline="middle",o.fillText(e,192,60);const l=new Lo(r);l.minFilter=Ut;const c=new Bu({map:l,depthTest:!1,transparent:!0}),h=new __(c);return h.scale.set(90,30,1),this.textSprites.push(h),h}update(e){this.clear();const{W:t,D:n,H:s,cageType:r,frontWindowH:o,hasSideReinforcement:a,sideOpeningH:l}=e,c=5,h=n/2+55,u=this.createTextSprite(`W: ${t} mm`,"#38bdf8","#ffffff");u.position.set(0,c,h),this.group.add(u);const p=t/2+55,d=5,g=this.createTextSprite(`D: ${n} mm`,"#38bdf8","#ffffff");g.position.set(p,d,0),this.group.add(g);const _=-t/2-55,m=n/2,f=this.createTextSprite(`H: ${s} mm`,"#38bdf8","#ffffff");if(f.position.set(_,s/2,m),this.group.add(f),r==="C"){const w=t/2+50,M=n/2+10,x=20+o/2,F=this.createTextSprite(`前窓: ${o} mm`,"#fb923c","#ffffff","rgba(35, 20, 12, 0.9)");F.scale.set(80,27,1),F.position.set(w,x,M),this.group.add(F)}if(a){const w=-t/2-50,M=0,x=l,F=s-20-x/2,C=this.createTextSprite(`側面上部開口: ${x} mm`,"#34d399","#ffffff","rgba(12, 32, 24, 0.9)");C.scale.set(95,27,1),C.position.set(w,F,M),this.group.add(C)}}setVisible(e){this.group.visible=e}}class B1{constructor(e){this.container=e,this.width=e.clientWidth,this.height=e.clientHeight,this.scene=new Ou,this.scene.background=null,this.camera=new Qt(40,this.width/this.height,1,8e3),this.camera.position.set(-1130,740,1070),this.isAutoRotating=!1,this._autoRotateAngle=0,this._autoRotateSpeed=.003,this._lastAutoParams=null,this.renderer=new m_({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=su,this.renderer.toneMapping=ou,this.renderer.toneMappingExposure=1.05,this.container.appendChild(this.renderer.domElement);const t=new Al(this.renderer);t.compileEquirectangularShader();const n=t.fromScene(new x1,.04).texture;this.scene.environment=n,this.controls=new o1(this.camera,this.renderer.domElement),this.controls.target.set(-60,100,-15),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI-.05,this.controls.minDistance=200,this.controls.maxDistance=4e3,this.setupLighting(),this.setupFloorGrid(),this.materials=new M1,this.cageModel=new N1(this.materials),this.scene.add(this.cageModel.root),this.dimensions=new O1,this.scene.add(this.dimensions.group),window.addEventListener("resize",()=>this.onResize()),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}setupLighting(){const e=new Q_(16777215,1975344,.38);e.position.set(0,1e3,0),this.scene.add(e);const t=new to(16777215,1.35);t.position.set(1e3,1600,1200),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=100,t.shadow.camera.far=4e3;const n=1e3;t.shadow.camera.left=-n,t.shadow.camera.right=n,t.shadow.camera.top=n,t.shadow.camera.bottom=-n,t.shadow.bias=-5e-4,t.shadow.radius=3.5,this.scene.add(t);const s=new to(16777215,.65);s.position.set(0,1200,0),this.scene.add(s);const r=new to(16777215,.5);r.position.set(-1e3,1e3,-1200),this.scene.add(r);const o=new to(2765376,.25);o.position.set(0,-1e3,0),this.scene.add(o)}setupFloorGrid(){this.gridHelper=new i1(2400,24,5924219,3028291),this.gridHelper.position.y=-10,this.scene.add(this.gridHelper);const e=new Ei(3e3,3e3),t=new J_({opacity:.35});this.floor=new j(e,t),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=-10.1,this.floor.receiveShadow=!0,this.scene.add(this.floor)}setFrameColor(e){this.materials.setFrameColor(e)}update(e){const t=e.footType==="caster"?-66:-11;this.gridHelper&&(this.gridHelper.position.y=t),this.floor&&(this.floor.position.y=t-.1),this.cageModel.update(e),this.dimensions.update(e);const n=e.H/2;this.controls.target.set(0,n,0)}setDimensionsVisible(e){this.dimensions.setVisible(e)}setPanelsVisible(e){this.cageModel.panelGroup.visible=e,this.cageModel.doorGroup.visible=e}setDoorState(e){this.cageModel.params.doorState=e,this.cageModel.buildDoors()}setViewPreset(e,t){const n=t.H||300,s=t.W||750,r=t.D||450,o=n/2,a=Math.max(s,r,n)*2.2;switch(this.controls.target.set(0,o,0),e){case"front":this.controls.target.set(0,o,0),this.camera.position.set(0,o,a);break;case"iso":default:{const c=Math.max(s,r,n)*1.5;this.controls.target.set(0,n*.45,0),this.camera.position.set(-c*.82,n*1.05+c*.55,c*.82);break}case"top":this.controls.target.set(0,o,0),this.camera.position.set(0,o+a*1.3,1);break;case"side":this.controls.target.set(0,o,0),this.camera.position.set(a,o,0);break;case"bottom":this.controls.target.set(0,o,0),this.camera.position.set(a*.4,-a*.7,a*.6);break}this.controls.update()}onResize(){this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}setAutoRotate(e,t){if(this.isAutoRotating=e,e){const n=this.controls.target,s=this.camera.position.x-n.x,r=this.camera.position.y-n.y,o=this.camera.position.z-n.z,a=Math.sqrt(s*s+r*r+o*o);this._autoRotateAngle=Math.atan2(o,s),this._autoRotatePhi=Math.asin(Math.max(-1,Math.min(1,r/a))),this._autoTargetYOffset=0,this._autoRadiusScale=1,this._lastAutoParams=t?{...t}:null,this.controls.enableDamping=!1,this.controls.enabled=!1,this._setupAutoRotateDrag()}else this.controls.enabled=!0,this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this._teardownAutoRotateDrag()}_setupAutoRotateDrag(){const e=this.renderer.domElement;this._dragState={active:!1,button:-1,lastY:0},this._onPointerDown=t=>{this._dragState.active=!0,this._dragState.button=t.button,this._dragState.lastY=t.clientY,t.preventDefault()},this._onPointerMove=t=>{if(!this._dragState.active)return;const n=t.clientY-this._dragState.lastY;this._dragState.lastY=t.clientY;const s=.005;if(this._dragState.button===0)this._autoRotatePhi-=n*s,this._autoRotatePhi=Math.max(-.05,Math.min(Math.PI/2-.05,this._autoRotatePhi));else if(this._dragState.button===2){const r=this._lastAutoParams&&this._lastAutoParams.H||300;this._autoTargetYOffset-=n*.5;const o=r*.8;this._autoTargetYOffset=Math.max(-o,Math.min(o,this._autoTargetYOffset))}},this._onPointerUp=()=>{this._dragState.active=!1,this._dragState.button=-1},this._onWheel=t=>{t.preventDefault();const n=.001;this._autoRadiusScale*=1+t.deltaY*n,this._autoRadiusScale=Math.max(.3,Math.min(3,this._autoRadiusScale))},e.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),e.addEventListener("wheel",this._onWheel,{passive:!1}),this._onContextMenu=t=>t.preventDefault(),e.addEventListener("contextmenu",this._onContextMenu)}_teardownAutoRotateDrag(){const e=this.renderer.domElement;this._onPointerDown&&e.removeEventListener("pointerdown",this._onPointerDown),this._onPointerMove&&window.removeEventListener("pointermove",this._onPointerMove),this._onPointerUp&&window.removeEventListener("pointerup",this._onPointerUp),this._onWheel&&e.removeEventListener("wheel",this._onWheel),this._onContextMenu&&e.removeEventListener("contextmenu",this._onContextMenu),this._onPointerDown=null,this._onPointerMove=null,this._onPointerUp=null,this._onWheel=null,this._onContextMenu=null}_calcAutoRotateCamera(e){const t=e&&e.W||750,n=e&&e.D||450,s=e&&e.H||300,r=Math.max(t,n,s)*1.45,o=s*.5;return{radius:r,targetY:o}}animate(){if(requestAnimationFrame(this.animate),this.cageModel.updateDoorAnimation(),this.isAutoRotating&&this._lastAutoParams){this._autoRotateAngle+=this._autoRotateSpeed;const{radius:e,targetY:t}=this._calcAutoRotateCamera(this._lastAutoParams),n=e*(this._autoRadiusScale||1),s=this._autoRotatePhi,r=Math.cos(s),o=Math.cos(this._autoRotateAngle)*n*r,a=Math.sin(this._autoRotateAngle)*n*r,l=t+(this._autoTargetYOffset||0)+n*Math.sin(s),c=t+(this._autoTargetYOffset||0);this.camera.position.set(o,l,a),this.camera.lookAt(0,c,0)}else this.controls.update();this.renderer.render(this.scene,this.camera)}getPartsSummary(){return this.cageModel.getPartsSummary()}captureImage(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/png")}}const Ke={frames:{"AFS-2020-4":{name:"2020標準フレーム (シルバー)",unit:"m",weightPerMeter:.437,pricePerMeter:801,note:"標準4面溝あり"},"AFSF-2020-4":{name:"2020フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.44,pricePerMeter:801,note:"補強・中桟用 1面フラット"},"AFSW-2020-4":{name:"2020フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.444,pricePerMeter:801,note:"2面フラット"},"AFS-2040-4":{name:"2040フレーム (シルバー)",unit:"m",weightPerMeter:.752,pricePerMeter:1394,note:"正面2倍幅・40mm高"},"AFSF-2040-4":{name:"2040フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.712,pricePerMeter:1394,note:"40mm幅 1面フラット"},"AFST-2040-4":{name:"2040フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.715,pricePerMeter:1394,note:"40mm幅 2面フラット"},"AFS-2060-4":{name:"2060フレーム (シルバー)",unit:"m",weightPerMeter:1.09,pricePerMeter:1923,note:"正面3倍幅・60mm高"},"AFS-4040-4":{name:"4040フレーム (シルバー)",unit:"m",weightPerMeter:1.188,pricePerMeter:2095,note:"正面下部 40x40枠囲い用"},"AFS-2020-4-BK":{name:"2020フレーム (ブラック)",unit:"m",weightPerMeter:.437,pricePerMeter:1037,note:"ブラックアルマイト"},"AFS-2040-4-BK":{name:"2040フレーム (ブラック)",unit:"m",weightPerMeter:.752,pricePerMeter:1809,note:"ブラックアルマイト 40mm高"},"AFS-4040-4-BK":{name:"4040フレーム (ブラック)",unit:"m",weightPerMeter:1.188,pricePerMeter:2710,note:"正面下部 40x40枠囲い用 (ブラック)"},"AFS-2020-5":{name:"2020フレーム (金網受用・シルバー)",unit:"m",weightPerMeter:.404,pricePerMeter:822,note:"天面金網受用 (5シリーズ)"},"AFS-2040-5":{name:"2040フレーム (金網受用・シルバー)",unit:"m",weightPerMeter:.752,pricePerMeter:1394,note:"正面枠囲い天面金網用 (シルバー・5シリーズ)"},"AFS-1530-6":{name:"1530フレーム (シルバー)",unit:"m",weightPerMeter:.684,pricePerMeter:1273,note:"止まり木垂直吊り下げ用フレーム"},"ASTP-30":{name:"φ30アルミパイプ (シルバー)",unit:"m",weightPerMeter:.795,pricePerMeter:1874,note:"止まり木丸棒"}},rails:{"PGRU-03-4-GY":{name:"上側ガラスレール (グレー)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部"},"PGRU-03-4-BK":{name:"上側ガラスレール (ブラック)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部 (黒ケージ連動)"},"PGRL-03-4-GY":{name:"下側ガラスレール (グレー)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用"},"PGRL-03-4-BK":{name:"下側ガラスレール (ブラック)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用 (黒ケージ連動)"}},packings:{"NSCP1H-S-6":{name:"モレ対策ゴムパッキン (グレー)",unit:"m",weightPerMeter:.035,pricePerMeter:841/6,note:"側面・背面 隙間モレ抑制用"}},caps:{"ECP-2020-4":{name:"2020用エンドキャップ",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"奥行きフレーム両端用"},"ECP-2020-4-GY":{name:"2020用エンドキャップ (グレー)",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"止まり木天板固定フレーム両端用"},"ECP-1530-6":{name:"1530用エンドキャップ (ブラック)",unit:"piece",weightPerPiece:.0016,pricePerPiece:143,note:"止まり木吊り下げフレーム下端用"},"ABL-2015-4":{name:"L字ブラケット ABL-2015-4 (シルバー)",unit:"piece",weightPerPiece:.0041,pricePerPiece:201,note:"2室分け仕切り板固定用L字ブラケット (シルバー固定)"},"ECP-2040-4":{name:"2040用エンドキャップ",unit:"piece",weightPerPiece:.0022,pricePerPiece:143,note:"正面枠囲い左扉スペーサーフレーム両端用 (ブラック)"},"ECP-2040-4-GY":{name:"2040用エンドキャップ (グレー)",unit:"piece",weightPerPiece:.0022,pricePerPiece:143,note:"正面枠囲い左扉スペーサーフレーム両端用 (グレー)"}},hardware:{"TH-31":{name:"TH-31 ステンレス蝶番",unit:"piece",weightPerPiece:.028,pricePerPiece:347,note:"前開き扉用 ステンレス製平蝶番 (下部2箇所)"},"C-1249-4":{name:"C-1249-4 ステンレス打掛",unit:"piece",weightPerPiece:.05,pricePerPiece:660,note:"前開き扉用 ステンレス製打掛錠 (上部2箇所)"},"CP-294N":{name:"タキゲン CP-294N スライドラッチ",unit:"piece",weightPerPiece:.055,pricePerPiece:792,note:"正面枠囲い扉用 ワンタッチスライドラッチ (左右各1個)"},"ACRYLIC-ROUND-20-5":{name:"アクリル丸板 透明 φ20mm t5mm (穴加工済)",unit:"piece",weightPerPiece:.002,pricePerPiece:190,note:"正面枠囲い柱側 スライドラッチ受金高さ調整スペーサー (各2枚・計4枚)"}},panels:{acrylic_extrusion_3_0:{name:"透明アクリル 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:7568,note:"標準透明パネル (床・背・側面・天面・固定窓 / acrylic_extrusion_price_config.jsより自動積算)"},acrylic_cast_3_0:{name:"透明アクリル 3.0mm (キャスト板・正面扉専用)",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:14652,note:"正面扉専用 (キャスト板 / acrylic_cast_price_config.jsより自動積算: 穴加工2箇所310円+磨き4辺2056円=計2366円/枚込)"},polyca_4_0:{name:"中空ポリカ 4.0mm",thicknessMm:4,unit:"m2",weightPerM2:.9,pricePerM2:7500,note:"高断熱・軽量中空ポリカーボネート"},pvc_punching_3_0:{name:"塩ビパンチングボード 透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:4.3,pricePerM2:20092,note:"通気孔パネル (φ3.1-P7 / pvc_punching_price_config.js価格表より自動積算)"},acrylic_black_matte_3_0:{name:"アクリル黒両面マット 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10344,baseCostPerPiece:400,note:"低反射・マットブラックアクリル (acrylic_black_matte_price_config.jsより自動積算 / スライド部材は固定原価+400円)"},acrylic_smoke_gray_3_0:{name:"アクリル グレースモーク半透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10976,note:"暗め半透明スモークアクリル (コモグラス 530K / acrylic_smoke_gray_price_config.jsより自動積算)"},acrylic_extrusion_1_5:{name:"透明アクリル 1.5mm",thicknessMm:1.5,unit:"m2",weightPerM2:1.8,pricePerM2:4336,note:"側面換気量調整板等 (acrylic_extrusion_price_config.jsより自動積算)"},acrylic_extrusion_2_0:{name:"透明アクリル 2.0mm",thicknessMm:2,unit:"m2",weightPerM2:2.4,pricePerM2:5296,note:"予備・薄物パネル (acrylic_extrusion_price_config.jsより自動積算)"},wire_mesh_15:{name:"金網15mmピッチ（黒粉体塗装）",pitchMm:15,unit:"m2",weightPerM2:8.9,pricePerM2:42712,note:"天面金網 (FENP15, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"},wire_mesh_25:{name:"金網25mmピッチ（黒粉体塗装）",pitchMm:25,unit:"m2",weightPerM2:6.2,pricePerM2:25627,note:"天面金網 (FENP25, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"},wire_mesh_30:{name:"金網30mmピッチ（黒粉体塗装）",pitchMm:30,unit:"m2",weightPerM2:4.4,pricePerM2:14949,note:"天面金網 (FENP30, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"}},options:{labor:{splitFloor:{name:"床面2分割 加工工賃",price:500,note:"床面中央補強フレーム追加に伴う2分割加工工賃"},splitTop:{name:"天面2分割 加工工賃",price:500,note:"天面中央補強フレーム追加に伴う2分割加工工賃 (幅940mm超の必須時を含む)"},typeC:{name:"Type C (前窓＋扉) 加工工賃",price:500,note:"下部アクリル固定窓および扉加工に伴う加工工賃"},splitSide:{name:"側面2分割 加工工賃",price:1e3,note:"側面補強フレーム追加に伴う左右側面の上下2分割加工工賃"},frontWide3x:{name:"正面下側幅広フレーム3倍幅 加工工賃",price:500,note:"正面下側フレームの3倍幅(60mm)特殊加工工賃"},perch:{name:"止まり木 加工工賃",price:1e3,note:"天板付け止まり木 穴あけ・組み立て加工工賃"},rubberPacking:{name:"モレ対策ゴムパッキン 加工工賃",price:800,note:"側面・背面隙間モレ抑制ゴムパッキン施工工賃 (施工面数に関わらず一律)"},roomDivider:{name:"2室分け仕切り板 加工工賃",price:500,note:"仕切り板C面カット・取付穴あけ・組み立て加工工賃"},frontOpenDoor:{name:"TypeA 前開き 加工工賃",price:3e3,note:"前開き扉 切欠き・穴あけ加工工賃"},frontFramedDoor:{name:"TypeA 正面枠囲い 加工工賃",price:3e3,note:"正面枠囲いアルミ扉・ラッチ組み立て加工工賃"}},items:{caster:{name:"自在キャスター仕様 (4輪)",price:1500,cost:800,note:"車輪径φ50 / 取付高66mm (標準ゴム脚からの変更)"},sideVentCover:{name:"側面換気量調整板 (つまみネジ付)",price:500,cost:200,holeCostPerPiece:94,holesPerPanel:4,note:"t1.5透明アクリル外張り＋φ9mm穴加工4箇所/枚＋No.1化粧つまみネジ (穴加工費は原価に積み上げ)"}}},pricing:{markupRate:1.4,roundingUnit:100,note:"基本販売価格 = Math.ceil((baseMaterialsCost * markupRate) / roundingUnit) * roundingUnit"},system:{gasLogEndpointUrl:"https://script.google.com/macros/s/AKfycbwWv5VmeJGCnvvD0U3WTJBkT3ZnrFIj1qUHXXMlF2TA3vn2hSu9J1zp-9fc4PY_whjp/exec",shop:{name:"Animal SHOP きなと",subtitle:"3Dケージ設計・見積もりシミュレーター",logoUrl:"/logo_kinato.png",characterUrl:"/character_transparent.png",contactUrl:""}}},Do=[{id:"standard",name:"標準仕様",icon:"📐",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","標準枠2倍幅"],desc:"サイズやオプション変更してカスタマイズしてください。"},{id:"leopard_gecko",name:"レオパ向け",icon:"🦎",W:540,D:400,H:200,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)"],desc:"保温性ありのレオパちゃんにゆったりサイズ"},{id:"ball_python",name:"ボールパイソン向け",icon:"🐍",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)","ロータイプ"],desc:"保温性抜群のロータイプケージ"},{id:"carpet_python",name:"カーペットパイソン",icon:"🐍",W:900,D:450,H:450,cageType:"C",frameColor:"black",frontWindowH:50,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!1,hasSideVentCover:!1,hasFloorReinforcement:!0,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"black_matte",back:"black_matte",side:"black_matte",sideUpper:"punching",sideLower:"black_matte",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type C (前窓50)","ブラック","黒アクリル(側・背)","たわみ防止レール"],desc:"のびのび多彩なレイアウトを組める広々サイズ"},{id:"tortoise",name:"リクガメ",icon:"🐢",W:900,D:500,H:500,cageType:"C",frameColor:"silver",frontWindowH:120,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!1,hasSideVentCover:!1,hasFloorReinforcement:!0,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"mesh30",topLeft:"mesh30",topRight:"mesh30"},tags:["Type C (前窓120)","シルバー","天板金網30mm","たわみ防止レール"],desc:"熱源ライトを安心しておける天板金網仕様"},{id:"bearded_dragon",name:"フトアゴヒゲトカゲ",icon:"🦎",W:800,D:450,H:450,cageType:"C",frameColor:"black",frontWindowH:80,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!0,sideOpeningH:200,hasSideVentCover:!1,hasFloorReinforcement:!0,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"black_matte",back:"black_matte",side:"black_matte",sideUpper:"punching",sideLower:"black_matte",top:"mesh25",topLeft:"mesh25",topRight:"mesh25"},tags:["Type C (前窓80)","ブラック","天板金網25mm","側面2分割","たわみ防止レール"],desc:"通気性も確保しつつ、熱源ライト乗せれる金網仕様"},{id:"hedgehog",name:"ハリネズミ",icon:"🦔",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!0,sideOpeningH:120,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)","側面2分割","換気量調整板"],desc:"側面、背面中空ポリカ・側面2分割・換気量調整板仕様"},{id:"hamster",name:"ハムスター向け",icon:"🐹",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"3x",hasSideReinforcement:!0,sideOpeningH:120,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","正面幅広3倍","中空ポリカ","換気量調整板"],desc:"正面幅広フレーム3倍＆中空ポリカ・換気量調整板仕様"},{id:"sugar_glider",name:"フクロモモンガ",icon:"🐿️",W:350,D:350,H:500,cageType:"A_FRONT",frameColor:"silver",frontWideFrame:"none",hasSideReinforcement:!1,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"punching",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},doorHingeSide:"left",tags:["Type A (前開き)","シルバー","側面パンチング","換気量調整板"],desc:"W350×D350×H500mm前開き仕様。側面全面パンチング＆外張り側面換気量調整板で通気・保温を両立"}],k1=1.6,G1=[{min:100,max:400,label:"100〜400"},{min:401,max:500,label:"401〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"}],z1=[{min:100,max:400,label:"100〜400"},{min:401,max:500,label:"401〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"},{min:1801,max:1900,label:"1801〜1900"},{min:1901,max:2e3,label:"1901〜2000"}],H1={15:[[4970,null,null,null,null,null,null,null],[5240,5290,null,null,null,null,null,null],[7730,7850,7920,null,null,null,null,null],[7920,7980,8040,8110,null,null,null,null],[8040,8070,8110,8170,8230,null,null,null],[8730,8790,8860,8930,8990,9060,null,null],[8990,9060,9120,9200,9260,9320,9400,null],[10440,10500,10540,10570,10610,10640,10680,10710]],25:[[2760,null,null,null,null,null,null,null],[3720,3770,null,null,null,null,null,null],[5280,5410,5470,null,null,null,null,null],[5470,5530,5600,5660,null,null,null,null],[5600,5630,5660,5720,5790,null,null,null],[5950,6020,6080,6150,6220,6280,null,null],[6220,6280,6350,6420,6480,6550,6620,null],[7080,7140,7180,7210,7250,7280,7320,7350],[9910,10910,11460,12030,12400,12780,13170,13830],[10420,11470,12040,12650,13040,13440,13850,14540],[10940,12040,12650,13290,13690,14110,14540,15280],[11500,12650,13290,13970,14390,14830,15280,16040],[12080,13280,13950,14660,15100,15560,16030,16840],[12680,13950,14660,15390,15860,16340,16830,17680],[13070,14390,15110,15870,16350,16840,17360,18230],[13470,14830,15570,16360,16850,17370,17890,18800],[13880,15280,16040,16850,17370,17890,18440,19360]],30:[[2750,null,null,null,null,null,null,null],[2770,2800,null,null,null,null,null,null],[2800,2820,2860,null,null,null,null,null],[2820,2860,2880,2900,null,null,null,null],[2860,2880,2900,2920,2940,null,null,null],[3100,3150,3190,3230,3280,3150,null,null],[3150,3190,3230,3280,3320,3360,3470,null],[3370,3410,3450,3500,3530,3560,3590,3650],[5060,5830,6990,7350,7500,7580,7740,7900],[5580,6420,7710,8100,8260,8350,8520,8690],[5860,6740,8100,8510,8680,8780,8960,9150],[6040,6950,8350,8770,8950,9040,9230,9420],[6230,7160,8600,9030,9220,9310,9500,9700],[6420,7380,8860,9310,9500,9610,9810,10010],[6620,7610,9140,9600,9800,9900,10100,10310],[6810,7840,9420,9890,10090,10200,10410,10620],[6950,8e3,9610,10090,10300,10410,10620,10840]]};function Dh(i,e){for(let t=0;t<e.length;t++)if(i>=e[t].min&&i<=e[t].max)return t;return i<e[0].min?0:i>e[e.length-1].max?e.length-1:-1}function V1(i,e,t){const n=parseInt(i,10),s=H1[n];if(!s)return null;const r=Math.max(e,t),o=Math.min(e,t),a=Dh(r,z1),l=Dh(o,G1);if(a===-1||l===-1)return null;if(a>=s.length){const u=s[s.length-1];return u[Math.min(l,u.length-1)]||null}const c=s[a];if(!c)return null;const h=c[l];if(h!=null)return h;for(let u=l;u>=0;u--)if(c[u]!=null)return c[u];return null}function W1(i,e,t){const n=V1(i,e,t);return n==null?null:Math.round(n*k1)}const X1=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Y1=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],$1=[[345,null,null,null,null,null,null,null,null,null,null,null,null,null],[446,611,null,null,null,null,null,null,null,null,null,null,null,null],[560,762,979,null,null,null,null,null,null,null,null,null,null,null],[661,929,1180,1450,null,null,null,null,null,null,null,null,null,null],[778,1079,1399,1701,2022,null,null,null,null,null,null,null,null,null],[878,1248,1600,1972,2324,2697,null,null,null,null,null,null,null,null],[997,1399,1821,2223,2646,3049,3474,null,null,null,null,null,null,null],[1097,1569,2022,2496,2948,3424,3877,4355,null,null,null,null,null,null],[1217,1720,2244,2747,3273,3776,4305,4808,5339,null,null,null,null,null],[1439,2043,2669,3273,3903,4506,5138,5741,6345,7583,null,null,null,null],[1663,2368,3098,3802,4534,5238,5943,6647,7382,8790,10233,null,null,null],[1891,2695,3528,4333,5138,5943,6778,7583,8388,10032,11641,13288,null,null],[2120,3025,3931,4836,5772,6678,7583,8489,9428,11239,13087,14897,16749,null],[2321,3327,4364,5370,6376,7382,8422,9428,10434,12483,14495,16548,18560,20617],[2553,3660,4766,5873,7014,8120,9227,10333,11477,13690,15944,18158,20416,22629],[2754,3962,5203,6410,7617,8824,10069,11276,12483,14938,17353,19812,22227,24691],[2990,4297,5605,6913,8258,9566,10873,12181,13530,16146,18806,21422,24087,26703],[3191,4599,6045,7453,8861,10270,11719,13128,14536,17398,20215,23081,25898,28770],[3429,4938,6447,7956,9506,11015,12524,14033,15587,18605,21673,24691,27764,30782],[3630,5240,6890,8500,10110,11719,13374,14983,16593,19862,23081,26356,29575,32854],[3872,5583,7293,9003,10758,12468,14179,15889,17649,21069,24545,27965,31446,34866],[4074,5884,7740,9551,11362,13173,15033,16844,18655,22332,25953,29635,33256,36944]];function Ih(i,e){for(let t=0;t<e.length;t++)if(i>=e[t].min&&i<=e[t].max)return t;return i<e[0].min?0:i>e[e.length-1].max?e.length-1:-1}function q1(i,e){const t=Math.max(i,e),n=Math.min(i,e),s=Ih(t,Y1),r=Ih(n,X1);if(s===-1||r===-1)return null;const o=$1[s];if(!o)return null;const a=o[r];if(a!=null)return a;for(let l=r;l>=0;l--)if(o[l]!=null)return o[l];return null}const Z1=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],K1=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Fh={"1.5":[[149,null,null,null,null,null,null,null,null,null,null,null,null,null],[167,206,null,null,null,null,null,null,null,null,null,null,null,null],[197,233,281,null,null,null,null,null,null,null,null,null,null,null],[215,272,318,377,null,null,null,null,null,null,null,null,null,null],[245,299,368,422,492,null,null,null,null,null,null,null,null,null],[263,341,404,483,546,627,null,null,null,null,null,null,null,null],[295,368,455,528,618,690,781,null,null,null,null,null,null,null],[313,410,492,590,672,772,853,955,null,null,null,null,null,null],[347,437,545,636,745,835,946,1037,1150,null,null,null,null,null],[400,509,636,745,873,982,1113,1222,1331,1573,null,null,null,null],[454,581,728,855,1004,1131,1258,1385,1537,1791,2072,null,null,null],[510,656,823,968,1113,1258,1428,1573,1718,2035,2326,2645,null,null],[569,732,895,1059,1246,1409,1573,1736,1927,2253,2609,2936,3294,null],[605,787,992,1174,1355,1537,1745,1927,2108,2500,2863,3258,3621,4019],[665,865,1065,1264,1491,1691,1890,2090,2319,2718,3149,3548,3983,4382],[702,919,1164,1382,1600,1818,2064,2282,2500,2968,3403,3874,4309,4784],[765,1001,1237,1473,1738,1974,2210,2446,2714,3185,3692,4164,4675,5147],[801,1055,1338,1593,1847,2101,2387,2641,2895,3438,3946,4494,5002,5553],[867,1139,1411,1683,1988,2260,2532,2804,3112,3656,4240,4784,5372,5916],[903,1193,1516,1806,2096,2387,2712,3003,3293,3913,4494,5117,5698,6326],[971,1280,1588,1897,2240,2549,2857,3166,3514,4131,4791,5408,6072,6689],[1007,1334,1696,2023,2349,2676,3042,3368,3695,4391,5045,5745,6399,7104]],"2.0":[[172,null,null,null,null,null,null,null,null,null,null,null,null,null],[195,242,null,null,null,null,null,null,null,null,null,null,null,null],[231,276,335,null,null,null,null,null,null,null,null,null,null,null],[253,324,380,453,null,null,null,null,null,null,null,null,null,null],[290,358,442,509,594,null,null,null,null,null,null,null,null,null],[312,408,487,583,662,759,null,null,null,null,null,null,null,null],[351,442,549,640,748,839,950,null,null,null,null,null,null,null],[374,492,594,714,816,939,1041,1164,null,null,null,null,null,null],[413,526,658,771,905,1018,1153,1266,1404,null,null,null,null,null],[477,612,769,905,1063,1198,1359,1495,1631,1930,null,null,null,null],[543,701,882,1040,1223,1382,1540,1699,1885,2202,2548,null,null,null],[610,791,997,1178,1359,1540,1749,1930,2111,2503,2865,3260,null,null],[680,884,1088,1291,1523,1727,1930,2134,2367,2775,3215,3622,4066,null],[726,952,1206,1432,1659,1885,2141,2367,2594,3079,3532,4020,4473,4966],[799,1048,1297,1546,1824,2073,2322,2571,2853,3351,3885,4382,4920,5418],[844,1116,1417,1689,1960,2232,2536,2808,3079,3658,4201,4784,5328,5915],[919,1213,1508,1802,2129,2423,2717,3011,3342,3930,4558,5147,5779,6367],[965,1281,1631,1948,2265,2581,2934,3251,3568,4241,4875,5553,6186,6868],[1043,1382,1722,2061,2436,2776,3115,3455,3834,4513,5236,5915,6641,7320],[1088,1450,1848,2210,2572,2934,3336,3698,4060,4828,5553,6325,7049,7827],[1169,1554,1939,2323,2748,3133,3517,3902,4331,5100,5917,6687,7510,8279],[1215,1622,2069,2476,2884,3291,3742,4150,4557,5420,6234,7103,7917,8790]],"3.0":[[212,null,null,null,null,null,null,null,null,null,null,null,null,null],[246,311,null,null,null,null,null,null,null,null,null,null,null,null],[294,362,446,null,null,null,null,null,null,null,null,null,null,null],[328,429,514,617,null,null,null,null,null,null,null,null,null,null],[378,480,600,702,823,null,null,null,null,null,null,null,null,null],[412,549,668,806,925,1065,null,null,null,null,null,null,null,null],[464,600,755,891,1048,1184,1343,null,null,null,null,null,null,null],[498,670,823,997,1150,1326,1479,1658,null,null,null,null,null,null],[551,721,912,1082,1275,1445,1641,1811,2009,null,null,null,null,null],[640,844,1071,1275,1505,1709,1941,2145,2349,2788,null,null,null,null],[731,969,1233,1471,1737,1975,2213,2451,2720,3196,3706,null,null,null],[825,1097,1397,1669,1941,2213,2516,2788,3060,3638,4182,4763,null,null],[921,1227,1533,1839,2176,2482,2788,3094,3434,4046,4695,5307,5960,null],[989,1329,1700,2040,2380,2720,3094,3434,3774,4491,5171,5892,6572,7297],[1088,1462,1836,2210,2618,2992,3366,3740,4151,4899,5688,6436,7229,7977],[1156,1564,2006,2414,2822,3230,3675,4083,4491,5348,6164,7025,7841,8707],[1258,1700,2142,2584,3063,3505,3947,4389,4872,5756,6685,7569,8503,9387],[1326,1802,2315,2791,3267,3743,4260,4736,5212,6209,7161,8163,9115,10122],[1431,1941,2451,2961,3512,4022,4532,5042,5597,6617,7687,8707,9782,10802],[1499,2043,2628,3172,3716,4260,4849,5393,5937,7075,8163,9306,10394,11542],[1608,2186,2764,3342,3965,4543,5121,5699,6327,7483,8694,9850,11066,12222],[1676,2288,2945,3557,4169,4781,5443,6055,6667,7946,9170,10454,11678,12968]]};function Uh(i,e){for(let t=0;t<e.length;t++)if(i>=e[t].min&&i<=e[t].max)return t;return i<e[0].min?0:i>e[e.length-1].max?e.length-1:-1}function j1(i,e,t){const n=parseFloat(i).toFixed(1),s=Fh[n]||Fh["3.0"];if(!s)return null;const r=Math.max(e,t),o=Math.min(e,t),a=Uh(r,K1),l=Uh(o,Z1);if(a===-1||l===-1)return null;const c=s[a];if(!c)return null;const h=c[l];if(h!=null)return h;for(let u=l;u>=0;u--)if(c[u]!=null)return c[u];return null}const J1=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Q1=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],ev=[[242,null,null,null,null,null,null,null,null,null,null,null,null,null],[290,377,null,null,null,null,null,null,null,null,null,null,null,null],[353,451,564,null,null,null,null,null,null,null,null,null,null,null],[402,540,662,802,null,null,null,null,null,null,null,null,null,null],[467,613,777,923,1089,null,null,null,null,null,null,null,null,null],[515,704,875,1064,1235,1427,null,null,null,null,null,null,null,null],[582,777,991,1186,1402,1597,1815,null,null,null,null,null,null,null],[631,869,1089,1329,1549,1791,2010,2256,null,null,null,null,null,null],[699,942,1207,1451,1718,1962,2231,2475,2747,null,null,null,null,null],[817,1110,1425,1718,2036,2329,2650,2942,3235,3851,null,null,null,null],[938,1279,1646,1988,2357,2698,3040,3381,3753,4436,5153,null,null,null],[1061,1451,1869,2259,2650,3040,3461,3851,4241,5055,5835,6653,null,null],[1187,1626,2064,2503,2973,3412,3851,4290,4763,5640,6555,7433,8351,null],[1284,1772,2290,2778,3266,3753,4275,4763,5250,6262,7238,8254,9229,10249],[1413,1949,2486,3022,3592,4129,4665,5201,5775,6848,7961,9034,10152,11225],[1510,2095,2715,3300,3885,4470,5092,5677,6262,7474,8644,9859,11030,12250],[1642,2276,2910,3544,4214,4848,5482,6116,6791,8059,9372,10640,11957,13225],[1739,2422,3142,3824,4507,5190,5913,6596,7279,8689,10054,11470,12835,14255],[1874,2605,3337,4068,4841,5572,6303,7035,7811,9274,10787,12250,13768,15231],[1971,2752,3573,4353,5133,5913,6739,7519,8299,9909,11470,13085,14646,16266],[2110,2939,3768,4597,5471,6300,7129,7958,8837,10495,12207,13865,15583,17241],[2207,3085,4008,4886,5763,6641,7569,8446,9324,11135,12890,14706,16461,18282]];function Nh(i,e){for(let t=0;t<e.length;t++)if(i>=e[t].min&&i<=e[t].max)return t;return i<e[0].min?0:i>e[e.length-1].max?e.length-1:-1}function tv(i,e){const t=Math.max(i,e),n=Math.min(i,e),s=Nh(t,Q1),r=Nh(n,J1);if(s===-1||r===-1)return null;const o=ev[s];if(!o)return null;const a=o[r];if(a!=null)return a;for(let l=r;l>=0;l--)if(o[l]!=null)return o[l];return null}const nv=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],iv=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],sv=[[248,null,null,null,null,null,null,null,null,null,null,null,null,null],[300,393,null,null,null,null,null,null,null,null,null,null,null,null],[367,471,591,null,null,null,null,null,null,null,null,null,null,null],[419,565,695,844,null,null,null,null,null,null,null,null,null,null],[487,643,818,974,1149,null,null,null,null,null,null,null,null,null],[539,739,922,1123,1306,1509,null,null,null,null,null,null,null,null],[609,818,1045,1254,1483,1692,1923,null,null,null,null,null,null,null],[661,915,1149,1405,1639,1897,2132,2392,null,null,null,null,null,null],[732,993,1275,1535,1819,2079,2366,2627,2915,null,null,null,null,null],[858,1170,1506,1819,2158,2470,2811,3124,3437,4093,null,null,null,null],[985,1350,1741,2105,2498,2863,3228,3593,3989,4719,5482,null,null,null],[1115,1532,1977,2394,2811,3228,3676,4093,4510,5378,6212,7083,null,null],[1247,1716,2186,2655,3155,3624,4093,4562,5065,6004,6979,7917,8896,null],[1352,1873,2425,2946,3468,3989,4544,5065,5587,6666,7709,8792,9835,10922],[1487,2060,2634,3207,3814,4388,4961,5534,6145,7292,8479,9626,10818,11965],[1591,2217,2876,3502,4127,4753,5415,6041,6666,7958,9209,10505,11756,13057],[1729,2407,3085,3762,4477,5154,5832,6510,7228,8584,9984,11339,12744,14100],[1834,2563,3330,4060,4790,5519,6290,7020,7750,9254,10714,12223,13683,15197],[1975,2757,3539,4320,5143,5925,6707,7489,8316,9880,11493,13057,14676,16240],[2079,2913,3788,4622,5456,6290,7169,8003,8837,10555,12223,13946,15614,17342],[2224,3110,3997,4883,5814,6700,7586,8472,9408,11181,13008,14780,16612,18385],[2329,3267,4250,5188,6127,7065,8053,8991,9930,11861,13738,15674,17551,19493]];function Oh(i,e){for(let t=0;t<e.length;t++)if(i>=e[t].min&&i<=e[t].max)return t;return i<e[0].min?0:i>e[e.length-1].max?e.length-1:-1}function rv(i,e){const t=Math.max(i,e),n=Math.min(i,e),s=Oh(t,iv),r=Oh(n,nv);if(s===-1||r===-1)return null;const o=sv[s];if(!o)return null;const a=o[r];if(a!=null)return a;for(let l=r;l>=0;l--)if(o[l]!=null)return o[l];return null}const ov={totalProcessingPerPiece:2366},av=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],lv=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],cv=[[287,null,null,null,null,null,null,null,null,null,null,null,null,null],[359,481,null,null,null,null,null,null,null,null,null,null,null,null],[445,588,747,null,null,null,null,null,null,null,null,null,null,null],[516,712,891,1088,null,null,null,null,null,null,null,null,null,null],[604,819,1052,1267,1501,null,null,null,null,null,null,null,null,null],[676,945,1195,1465,1716,1988,null,null,null,null,null,null,null,null],[765,1052,1358,1645,1952,2239,2549,null,null,null,null,null,null,null],[837,1179,1501,1845,2167,2513,2835,3184,null,null,null,null,null,null],[928,1286,1666,2024,2405,2764,3148,3506,3893,null,null,null,null,null],[1092,1522,1975,2405,2861,3291,3749,4179,4610,5501,null,null,null,null],[1258,1760,2288,2790,3319,3821,4323,4825,5357,6361,7398,null,null,null],[1428,2001,2603,3176,3749,4323,4927,5501,6074,7255,8402,9585,null,null],[1599,2244,2889,3534,4210,4856,5501,6146,6825,8115,9442,10732,12063,null],[1743,2459,3207,3924,4641,5357,6108,6825,7542,9012,10446,11920,13354,14832],[1917,2705,3494,4282,5105,5893,6681,7470,8295,9872,11490,13067,14689,16266],[2060,2920,3814,4675,5535,6395,7292,8152,9012,10773,12493,14259,15979,17749],[2238,3169,4101,5033,6002,6933,7865,8797,9770,11633,13542,15405,17319,19183],[2381,3384,4425,5428,6432,7435,8480,9483,10487,12538,14545,16602,18609,20671],[2561,3636,4712,5787,6903,7978,9053,10128,11248,13399,15599,17749,19954,22105],[2705,3851,5039,6186,7333,8480,9671,10818,11965,14309,16602,18951,21244,23598],[2889,4107,5326,6544,7808,9026,10245,11463,12732,15169,17661,20098,22595,25032],[3032,4322,5658,6948,8238,9528,10868,12158,13449,16084,18664,21304,23885,26531]];function Bh(i,e){for(let t=0;t<e.length;t++)if(i>=e[t].min&&i<=e[t].max)return t;return i<e[0].min?0:i>e[e.length-1].max?e.length-1:-1}function Zu(i,e){const t=Math.max(i,e),n=Math.min(i,e),s=Bh(t,lv),r=Bh(n,av);if(s===-1||r===-1)return null;const o=cv[s];if(!o)return null;const a=o[r];if(a!=null)return a;for(let l=r;l>=0;l--)if(o[l]!=null)return o[l];return null}function hv(i,e){const t=Zu(i,e);return t==null?null:t+ov.totalProcessingPerPiece}const uv=document.getElementById("canvas-container"),yo=document.getElementById("creature-preset-grid"),dv=document.getElementById("btn-save-image");document.getElementById("btn-copy-spec");document.getElementById("inquiry-spec-textarea");document.getElementById("copy-toast");const on=document.getElementById("estimate-result-modal"),kh=document.getElementById("modal-estimate-id"),Gh=document.getElementById("modal-price-total"),zh=document.getElementById("modal-weight-total"),ur=document.getElementById("modal-spec-textarea"),Da=document.getElementById("btn-copy-spec-modal"),_s=document.getElementById("modal-copy-toast"),Dl=document.getElementById("btn-save-image-modal"),Hh=document.getElementById("btn-close-modal"),Vh=document.getElementById("btn-dismiss-modal"),Wh=document.getElementById("btn-open-estimate-modal"),qt=document.getElementById("modal-download-success"),vs=document.getElementById("download-success-title"),pi=document.getElementById("download-filename-label"),Io=document.getElementById("modal-preview-section"),Ss=document.getElementById("modal-preview-img");let Hi=null,dr=null;const fv=Date.now(),Ku=cd(),Il=hd();let Xh=0,et=null;function Ci(i,e=5e3){let t=document.getElementById("app-notice-toast");t||(t=document.createElement("div"),t.id="app-notice-toast",t.className="app-notice-toast hidden",document.body.appendChild(t)),t.textContent=i,t.classList.remove("hidden"),requestAnimationFrame(()=>{t.classList.add("show")}),t._timer&&clearTimeout(t._timer),t._timer=setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.classList.add("hidden"),300)},e)}const vn=document.getElementById("slider-w"),xn=document.getElementById("input-w"),Us=document.getElementById("slider-d"),Ns=document.getElementById("input-d"),Mn=document.getElementById("slider-h"),yn=document.getElementById("input-h"),Ri=document.getElementById("row-front-window"),Os=document.getElementById("slider-fw"),Bs=document.getElementById("input-fw"),Fo=document.getElementById("toggle-side-reinforce"),_r=document.getElementById("card-side-reinforce"),vr=document.getElementById("box-side-h"),_t=document.getElementById("input-side-h"),On=document.getElementById("btn-type-a"),Et=document.getElementById("btn-type-a-front"),wt=document.getElementById("btn-type-a-framed"),si=document.getElementById("btn-type-c"),Zt=document.getElementById("type-badge");let ro=null,or=null,So=null,ar=null,bo=null,Fl=null;const $i=document.getElementById("btn-frame-silver"),qi=document.getElementById("btn-frame-black"),Ia=document.getElementById("section-front-door-hinge"),ei=document.getElementById("btn-hinge-left"),ti=document.getElementById("btn-hinge-right"),ks=document.getElementById("toggle-caster"),Zi=document.getElementById("card-caster"),bn=document.getElementById("toggle-floor-reinforce"),Ul=document.getElementById("card-floor-reinforce"),Nl=document.getElementById("floor-reinf-sub"),Tn=document.getElementById("toggle-top-reinforce"),xr=document.getElementById("card-top-reinforce"),Mr=document.getElementById("top-reinf-sub"),Fn=document.getElementById("toggle-door-anti-flex"),En=document.getElementById("card-door-anti-flex"),ni=document.getElementById("toggle-side-vent-cover"),Nn=document.getElementById("card-side-vent-cover"),nr=document.getElementById("vent-cover-badge"),oo=document.getElementById("vent-cover-sub"),Ft=document.getElementById("toggle-perch"),Lt=document.getElementById("card-perch"),$n=document.getElementById("toggle-front-wide-2x"),mn=document.getElementById("card-front-wide-2x"),ao=document.getElementById("front-wide-2x-sub"),qn=document.getElementById("toggle-front-wide-3x"),gn=document.getElementById("card-front-wide-3x"),lo=document.getElementById("front-wide-3x-sub"),yi=document.getElementById("toggle-rubber-packing"),Zn=document.getElementById("card-rubber-packing"),mi=document.getElementById("rubber-packing-badge"),Fa=document.getElementById("rubber-packing-sub"),Ua=document.getElementById("floor-warning-banner"),Yh=document.getElementById("seismic-warning-banner"),pv=document.getElementById("seismic-warning-text"),ju=document.getElementById("btn-door-closed"),Ju=document.getElementById("btn-door-left"),Qu=document.getElementById("btn-door-right"),To=document.getElementById("btn-front-door-closed"),Eo=document.getElementById("btn-front-door-open"),co=document.getElementById("slide-door-group"),$h=document.getElementById("front-door-group"),qh=document.getElementById("door-control-title"),ed=[ju,Ju,Qu,To,Eo].filter(Boolean),Na=document.getElementById("reinforce-tip"),Oa=document.getElementById("reinforce-text"),Zh=document.getElementById("current-spec-summary");document.getElementById("cost-hud-card");const bs=document.getElementById("cost-hud-result"),gi=document.getElementById("hud-cost-total"),_i=document.getElementById("hud-weight-total"),_n=document.getElementById("btn-calc-estimate"),Ol=document.querySelectorAll(".preset-btn:not(#btn-auto-rotate)"),Bl=document.getElementById("btn-auto-rotate"),mv=document.getElementById("btn-reset-specs"),Ba=document.getElementById("panel-config-toggle-btn"),Kh=document.getElementById("panel-config-container"),ka=document.getElementById("options-toggle-btn"),jh=document.getElementById("options-container"),Uo=document.getElementById("select-panel-floor"),td=document.getElementById("select-panel-back"),nd=document.getElementById("select-panel-side"),id=document.getElementById("select-panel-side-upper"),sd=document.getElementById("select-panel-side-lower"),No=document.getElementById("select-panel-top"),Oo=document.getElementById("select-panel-top-left"),Bo=document.getElementById("select-panel-top-right"),ko=document.getElementById("select-panel-partition"),Jh=document.getElementById("row-panel-side"),Qh=document.getElementById("row-panel-side-split"),eu=document.getElementById("row-panel-top"),tu=document.getElementById("row-panel-top-split"),Un=document.getElementById("row-panel-partition"),wn=document.getElementById("toggle-room-divider"),an=document.getElementById("card-room-divider"),xi=document.getElementById("room-divider-sub"),Ts=document.getElementById("perch-sub"),v={W:750,D:450,H:300,cageType:"A",frameColor:"silver",footType:"rubber",hasFloorReinforcement:!1,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasPerch:!1,hasRubberPacking:!1,hasRoomDivider:!1,frontWideFrame:"2x",doorHingeSide:"left",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,showPanels:!0,showDimensions:!0,doorState:"closed",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"}};let ri="2x",sc=!1;const bt=new B1(uv);window.viewer=bt;const rd=750*450;function gv(i,e,t,n){const s=Math.min(i,e)/10,r=t/10,o=s/Math.sqrt(r),a=n==="caster"?4.2:3.8,l=o<a;return{ratio:o,threshold:a,isProneToToppling:l,footType:n}}function je(){bt.update(v),bt.setPanelsVisible(v.showPanels),bt.setDimensionsVisible(v.showDimensions),sc&&(bt._lastAutoParams={...v});const i=v.W*v.D;i>rd&&!v.hasFloorReinforcement?(Ua.classList.remove("hidden"),Na.classList.remove("reinforced"),Oa.textContent=`床面積: ${(i/1e4).toFixed(0)}c㎡ (> 750×450mm) 床面補強なし：アクリルたわみ防止のため床面中央補強フレーム (2分割) を推奨します`):v.hasFloorReinforcement?(Ua.classList.add("hidden"),Na.classList.add("reinforced"),Oa.textContent="床面中央補強フレーム（2分割）が配置されています"):(Ua.classList.add("hidden"),Na.classList.remove("reinforced"),Oa.textContent=`床面積: ${(i/1e4).toFixed(0)}c㎡ (≦ 750×450mm) 床面補強フレームなし（標準枠）`);const t=gv(v.W,v.D,v.H,v.footType);if(t.isProneToToppling){Yh.classList.remove("hidden");const n=v.footType==="caster"?"キャスター装備（車輪向きによる支点変化を考慮した安全目安: 4.2）":"安全目安: 3.8";pv.innerHTML=`<strong>転倒注意：</strong>耐震安定値 <span class="metric-tag">${t.ratio.toFixed(2)}</span> ＜ 基準 ${t.threshold}（${n}）。地震等で転倒しやすいため、壁固定等の転倒防止対策を推奨します`}else Yh.classList.add("hidden");Sv(),rc(),Xo(),vv(),_v(),yv(),od()}function _v(){v.hasSideReinforcement?(Jh.classList.add("hidden"),Qh.classList.remove("hidden")):(Jh.classList.remove("hidden"),Qh.classList.add("hidden"));const i=v.hasTopReinforcement||v.W>940;i?(eu.classList.add("hidden"),tu.classList.remove("hidden")):(eu.classList.remove("hidden"),tu.classList.add("hidden")),Uo&&(Uo.value=v.panelConfig.floor||"acrylic"),td.value=v.panelConfig.back,nd.value=v.panelConfig.side,id.value=v.panelConfig.sideUpper,sd.value=v.panelConfig.sideLower,No.value=v.panelConfig.top,Oo.value=v.panelConfig.topLeft,Bo.value=v.panelConfig.topRight;const e=document.getElementById("panel-summary-badge");if(e){let t="パンチング";const n=i?v.panelConfig.topLeft:v.panelConfig.top;n.startsWith("mesh")?t=`金網${n.replace("mesh","")}mm`:n==="acrylic"&&(t="アクリル天面");let s="背面アクリル";v.panelConfig.back==="punching"?s="背面パンチング":v.panelConfig.back==="polyca"?s="背面中空ポリカ":v.panelConfig.back==="black_matte"?s="背面ブラックマット":v.panelConfig.back==="smoke_gray"&&(s="背面グレースモーク"),e.textContent=`${s} / ${t}`}}function Xo(){const i=v.hasSideReinforcement&&v.panelConfig.sideUpper==="punching",e=!v.hasSideReinforcement&&v.panelConfig.side==="punching";i||e?(ni.disabled=!1,Nn.classList.remove("disabled"),nr.classList.add("ready"),nr.textContent="選択可能",e?oo.textContent="冬場の保温・換気調整用。左右上下4枚外張り":oo.textContent="冬場の保温・換気調整用。左右外張り"):(ni.checked=!1,v.hasSideVentCover=!1,ni.disabled=!0,Nn.classList.add("disabled"),Nn.classList.remove("active"),nr.classList.remove("ready"),v.hasSideReinforcement?(nr.textContent="要上部パンチング",oo.textContent="※側面上部が塩ビパンチングパネル時に選択できます"):(nr.textContent="要側面パンチング",oo.textContent="※側面パネルが塩ビパンチング時に選択できます"))}function rc(){if(v.cageType==="C"||v.cageType==="A_FRAMED")$n.checked=!1,$n.disabled=!0,mn.classList.remove("active"),mn.classList.add("disabled"),ao.textContent=v.cageType==="A_FRAMED"?"※正面枠囲いは正面下部40x40固定のため選択不可":"※Type Cは前窓構造のため選択不可（Type A専用）",qn.checked=!1,qn.disabled=!0,gn.classList.remove("active"),gn.classList.add("disabled"),lo.textContent=v.cageType==="A_FRAMED"?"※正面枠囲いは正面下部40x40固定のため選択不可":"※Type Cは前窓構造のため選択不可（Type A専用）";else{const e=v.frameColor==="black"?"高さ60mm(ブラック: 40mm+20mm 2段重ね)使用。深床材・高剛性仕様":"高さ60mmフレーム使用。深床材・高剛性仕様";v.frontWideFrame==="2x"?($n.checked=!0,$n.disabled=!1,mn.classList.add("active"),mn.classList.remove("disabled"),ao.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",qn.checked=!1,qn.disabled=!0,gn.classList.remove("active"),gn.classList.add("disabled"),lo.textContent="※2倍幅がONのため選択不可（2倍幅を外すと選択可能）"):v.frontWideFrame==="3x"?($n.checked=!1,$n.disabled=!0,mn.classList.remove("active"),mn.classList.add("disabled"),ao.textContent="※3倍幅がONのため選択不可（3倍幅を外すと選択可能）",qn.checked=!0,qn.disabled=!1,gn.classList.add("active"),gn.classList.remove("disabled"),lo.textContent=e):($n.checked=!1,$n.disabled=!1,mn.classList.remove("active"),mn.classList.remove("disabled"),ao.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",qn.checked=!1,qn.disabled=!1,gn.classList.remove("active"),gn.classList.remove("disabled"),lo.textContent=e)}}function vv(){const i=v.panelConfig.back==="polyca";let e=!1;v.hasSideReinforcement?e=v.panelConfig.sideLower==="polyca"&&v.panelConfig.sideUpper==="polyca":e=v.panelConfig.side==="polyca",i&&e?(yi.checked=!1,v.hasRubberPacking=!1,yi.disabled=!0,Zn.classList.add("disabled"),Zn.classList.remove("active"),mi.textContent="中空ポリカのみ時は施工不可",mi.className="option-cond-badge",mi.classList.remove("hidden"),Fa.textContent="※中空ポリカ仕様には施工できません（アクリル等の面がある場合に選択可）"):(yi.disabled=!1,Zn.classList.remove("disabled"),v.hasRubberPacking?(Zn.classList.add("active"),yi.checked=!0):(Zn.classList.remove("active"),yi.checked=!1),i||(v.hasSideReinforcement?v.panelConfig.sideLower==="polyca"||v.panelConfig.sideUpper==="polyca":v.panelConfig.side==="polyca")?(mi.textContent="中空ポリカ除く面に施工",mi.className="option-cond-badge info",mi.classList.remove("hidden"),Fa.textContent="側面・背面からの水漏れの抑制（中空ポリカ面を除くアクリル面に施工）"):(mi.textContent="",mi.classList.add("hidden"),Fa.textContent="側面・背面からの水漏れの抑制（完全に水漏れなしを保証するものではありません）"))}function kl(i){if(!i)return null;if(Ke.panels&&Ke.panels[i])return Ke.panels[i];if(Ke.frames&&Ke.frames[i])return Ke.frames[i];if(Ke.rails&&Ke.rails[i])return Ke.rails[i];if(Ke.caps&&Ke.caps[i])return Ke.caps[i];if(Ke.packings&&Ke.packings[i])return Ke.packings[i];if(Ke.hardware&&Ke.hardware[i])return Ke.hardware[i];for(const e of[Ke.panels,Ke.frames,Ke.rails,Ke.caps,Ke.packings,Ke.hardware])if(e){for(const[t,n]of Object.entries(e))if(i===t||i.startsWith(t)||t.startsWith(i)||n.name&&(n.name===i||i.includes(n.name)||n.name.includes(i)))return n}return null}function od(){if(!or||!So)return;const i=bt.getPartsSummary(),e=[],t=[];for(const l of i)l.category==="frame"||l.category==="rail_cap"||l.category==="hardware"?e.push(l):t.push(l);const n=new Map;for(const l of e){const c=l.partCode||l.name,h=l.lengthMm!=null?Math.round(l.lengthMm):null,u=`${c}__${h??"none"}`;if(n.has(u)){const p=n.get(u);p.count+=l.count}else n.set(u,{...l,partCode:c,lengthMm:h,count:l.count})}const s=Array.from(n.values());So.innerHTML="",ar&&(ar.innerHTML="");let r=0,o=0,a=0;for(const l of s){a+=l.count;const c=kl(l.partCode);let h=0,u=0,p=0,d="-";if(c)if(c.unit==="m"){const _=l.lengthMm||0,w=(l.partCode&&(l.partCode.startsWith("PGRU")||l.partCode.startsWith("PGRL"))?Math.ceil(_/250)*250:_)/1e3;d=`${l.lengthMm||Math.round(w*1e3)} mm`,h=Math.round(c.pricePerMeter*w),u=h*l.count,p=c.weightPerMeter*(_/1e3)*l.count}else d="-",h=c.pricePerPiece||0,u=h*l.count,p=(c.weightPerPiece||0)*l.count;else d=l.size||"-";r+=u,o+=p;const g=document.createElement("tr");g.className="bom-cat-frame",g.innerHTML=`
      <td><strong>${l.partCode||l.name}</strong></td>
      <td style="text-align: right; font-family: monospace;">${d}</td>
      <td style="text-align: center; font-family: monospace;">${l.count}</td>
      <td style="text-align: right; font-family: monospace;">¥${u.toLocaleString()}</td>
      <td style="text-align: right; font-family: monospace;">${p.toFixed(3)} kg</td>
    `,So.appendChild(g)}if(ar){const l=document.createElement("tr");l.innerHTML=`
      <td><strong>フレーム等 合計</strong></td>
      <td style="text-align: center;">-</td>
      <td style="text-align: center; font-family: monospace;"><strong>${a}点</strong></td>
      <td style="text-align: right; font-family: monospace;"><strong>¥${r.toLocaleString()}</strong></td>
      <td style="text-align: right; font-family: monospace;"><strong>${o.toFixed(3)} kg</strong></td>
    `,ar.appendChild(l)}if(bo){bo.innerHTML="";for(const l of t){const c=document.createElement("tr");c.className=`bom-cat-${l.category||"other"}`,c.innerHTML=`
        <td><strong>${l.name}</strong></td>
        <td>${l.size||"-"}</td>
        <td style="text-align: center; font-family: monospace;">${l.count}</td>
        <td>${l.note||"-"}</td>
      `,bo.appendChild(c)}}Fl&&(Fl.textContent=`${i.length}品目 / フレーム計${a}点`)}function xv(){try{const i=new URLSearchParams(window.location.search),e=i.get("debug")==="bom"||i.get("dev")==="bom";if(i.get("debug")==="off"){sessionStorage.removeItem("cage_debug_bom");return}if(!(e||sessionStorage.getItem("cage_debug_bom")==="true")||(sessionStorage.setItem("cage_debug_bom","true"),document.getElementById("debug-bom-section")))return;const s=document.createElement("section");s.id="debug-bom-section",s.className="control-section accordion-section",s.style.cssText="margin: 16px 12px 10px; border: 1px dashed rgba(245, 158, 11, 0.4);",s.innerHTML=`
      <div style="background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.4); border-radius: 8px; padding: 10px 14px; margin-bottom: 10px; font-size: 0.78rem; color: #fbbf24; display: flex; align-items: flex-start; gap: 10px; line-height: 1.45;">
        <span style="font-size: 1.1rem; line-height: 1;">🛠️</span>
        <div>
          <strong style="color: #f59e0b; display: block; margin-bottom: 2px;">【管理者デバッグ表示中】資材リスト (BOM)</strong>
          <span>URLパラメータ（?debug=bom）により動的生成されています。<strong style="color: #60a5fa;">静的HTMLには最初から含まれていません。</strong>（解除: ?debug=off）</span>
        </div>
      </div>

      <div class="accordion-header bom-accordion-header active" id="bom-toggle-btn">
        <div class="accordion-title-wrap">
          <svg class="accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span class="section-title" style="margin-bottom: 0;">資材リスト内訳 (BOM)</span>
        </div>
        <div class="accordion-header-right" style="display: flex; align-items: center; gap: 8px;">
          <span class="bom-badge" id="parts-count-badge">計算中</span>
          <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      <div class="bom-table-container accordion-content" id="bom-container" style="margin-top: 8px;">
        <div class="bom-section-title-bar" style="padding: 10px 12px 6px; display: flex; justify-content: space-between; align-items: center;">
          <span class="bom-section-title" style="font-weight: 700; color: #38bdf8;">■ フレーム類（レール・キャップ含む）</span>
          <span class="bom-section-sub" style="font-size: 0.7rem; color: #94a3b8;">※型番・長さ・数量・原価・重量</span>
        </div>
        <table class="bom-table frame-bom-table">
          <thead>
            <tr>
              <th style="width: 32%;">型番</th>
              <th style="width: 18%; text-align: right;">長さ</th>
              <th style="width: 12%; text-align: center;">数量</th>
              <th style="width: 22%; text-align: right;">原価合計</th>
              <th style="width: 16%; text-align: right;">重量</th>
            </tr>
          </thead>
          <tbody id="bom-frame-tbody"></tbody>
          <tfoot id="bom-frame-tfoot"></tfoot>
        </table>

        <div class="bom-section-title-bar" style="margin-top: 14px; padding: 10px 12px 6px;">
          <span class="bom-section-title" style="font-weight: 700; color: #34d399;">■ パネル・その他部材</span>
        </div>
        <table class="bom-table other-bom-table">
          <thead>
            <tr>
              <th>部材種別</th>
              <th>寸法 / 仕様</th>
              <th style="width: 45px; text-align: center;">数量</th>
              <th>用途・配置</th>
            </tr>
          </thead>
          <tbody id="bom-other-tbody"></tbody>
        </table>
      </div>
    `;const r=document.querySelector(".sidebar-content")||document.querySelector(".sidebar");r&&r.appendChild(s),ro=document.getElementById("bom-toggle-btn"),or=document.getElementById("bom-container"),So=document.getElementById("bom-frame-tbody"),ar=document.getElementById("bom-frame-tfoot"),bo=document.getElementById("bom-other-tbody"),Fl=document.getElementById("parts-count-badge"),ro&&or&&ro.addEventListener("click",()=>{const o=or.classList.contains("hidden");or.classList.toggle("hidden",!o),ro.classList.toggle("active",o)}),console.log("[Debug] 🛠️ BOMデバッグUIを動的生成・表示しました。"),od()}catch(i){console.warn("[Debug] setupDebugBOMIfRequested エラー:",i)}}let yr=!1;function Mv(){var P,J,X,fe,ae,Ae,ye,A,S,H,ne,le,ee,De,Ee,Ce;const i=bt.getPartsSummary();let e=0,t=0,n=0,s=0;for(const ge of i)if(ge.category==="frame"||ge.category==="rail_cap"||ge.category==="hardware"||ge.category==="other"){const oe=kl(ge.partCode||ge.name);if(oe)if(oe.unit==="m"){const Te=ge.lengthMm||0,Ie=(ge.partCode&&(ge.partCode.startsWith("PGRU")||ge.partCode.startsWith("PGRL"))?Math.ceil(Te/250)*250:Te)/1e3,Ge=Math.round(oe.pricePerMeter*Ie);e+=Ge*ge.count,t+=oe.weightPerMeter*(Te/1e3)*ge.count}else e+=(oe.pricePerPiece||0)*ge.count,t+=(oe.weightPerPiece||0)*ge.count}else if(ge.category==="panel"){const oe=kl(ge.panelCode||ge.partCode||ge.name);let Te=ge.widthMm,Fe=ge.heightMm;if((Te==null||Fe==null)&&ge.size){const Ue=ge.size.match(/(\d+)\s*[x×]\s*(\d+)/);Ue&&(Te=parseInt(Ue[1],10),Fe=parseInt(Ue[2],10))}if(oe&&oe.unit==="m2"&&Te&&Fe){const Ue=Te/1e3*(Fe/1e3);if(!(ge.panelCode==="acrylic_extrusion_1_5"||ge.name&&ge.name.includes("換気量調整板"))){let Ge=0;const He=ge.panelCode&&ge.panelCode.startsWith("wire_mesh_")||ge.partCode&&ge.partCode.startsWith("wire_mesh_")||oe.pitchMm!=null,ot=ge.panelCode==="pvc_punching_3_0"||ge.partCode==="pvc_punching_3_0"||ge.name&&ge.name.includes("塩ビパンチング"),B=ge.panelCode&&ge.panelCode.startsWith("acrylic_extrusion_")||ge.partCode&&ge.partCode.startsWith("acrylic_extrusion_")||ge.panelCode==="acrylic_extrusion_3_0"||ge.panelCode==="acrylic_extrusion_2_0"||ge.panelCode==="acrylic_extrusion_1_5",Re=ge.panelCode==="acrylic_black_matte_3_0"||ge.partCode==="acrylic_black_matte_3_0"||ge.name&&ge.name.includes("黒両面マット"),se=ge.panelCode==="acrylic_smoke_gray_3_0"||ge.partCode==="acrylic_smoke_gray_3_0"||ge.name&&ge.name.includes("グレースモーク"),de=ge.panelCode==="acrylic_cast_3_0"||ge.partCode==="acrylic_cast_3_0"||ge.name&&ge.name.includes("キャスト");if(He){const Se=oe.pitchMm||(ge.panelCode?parseInt(ge.panelCode.replace("wire_mesh_",""),10):25),be=W1(Se,Te,Fe);Ge=be??Math.round(oe.pricePerM2*Ue)}else if(ot){const Se=q1(Te,Fe);Ge=Se??Math.round(oe.pricePerM2*Ue)}else if(B){const Se=oe.thicknessMm||3,be=j1(Se,Te,Fe);Ge=be??Math.round(oe.pricePerM2*Ue)}else if(Re){const Se=tv(Te,Fe);Ge=Se??Math.round(oe.pricePerM2*Ue)}else if(se){const Se=rv(Te,Fe);Ge=Se??Math.round(oe.pricePerM2*Ue)}else if(de)if(ge.name&&ge.name.includes("扉")){const be=hv(Te,Fe);Ge=be??Math.round(oe.pricePerM2*Ue)+2366}else{const be=Zu(Te,Fe);Ge=be??Math.round(oe.pricePerM2*Ue)}else Ge=Math.round(oe.pricePerM2*Ue);n+=Ge*ge.count,oe.baseCostPerPiece&&(n+=oe.baseCostPerPiece*ge.count),oe.baseCost&&(n+=oe.baseCost)}s+=oe.weightPerM2*Ue*ge.count}}const r=Ke.options||{},o=r.labor||{},a=r.items||{},l=!!v.hasFloorReinforcement,c=!!(v.hasTopReinforcement||v.W>940),h=v.cageType==="C",u=!!v.hasSideReinforcement,p=v.cageType==="A"&&v.frontWideFrame==="3x",d=v.footType==="caster",g=!!v.hasSideVentCover,_=!!v.hasPerch,m=!!v.hasRubberPacking,f=!!v.hasRoomDivider,w=v.cageType==="A_FRONT",M=v.cageType==="A_FRAMED",x=l?((P=o.splitFloor)==null?void 0:P.price)??500:0,F=c?((J=o.splitTop)==null?void 0:J.price)??500:0,C=h?((X=o.typeC)==null?void 0:X.price)??500:0,L=u?((fe=o.splitSide)==null?void 0:fe.price)??1e3:0,D=p?((ae=o.frontWide3x)==null?void 0:ae.price)??500:0,b=_?((Ae=o.perch)==null?void 0:Ae.price)??1e3:0,y=m?((ye=o.rubberPacking)==null?void 0:ye.price)??800:0,E=f?((A=o.roomDivider)==null?void 0:A.price)??500:0,U=w?((S=o.frontOpenDoor)==null?void 0:S.price)??3e3:0,I=M?((H=o.frontFramedDoor)==null?void 0:H.price)??3e3:0,O=x+F+C+L+D+b+y+E+U+I,N=d?((ne=a.caster)==null?void 0:ne.price)??1500:0,k=d?((le=a.caster)==null?void 0:le.cost)??800:0;let K=0;if(g){const ge=Array.isArray(i)?i.find(oe=>oe.name&&oe.name.includes("換気量調整板")):null;K=ge?ge.count:v.hasSideReinforcement?2:4}const W=g?((ee=a.sideVentCover)==null?void 0:ee.price)??500:0,ce=g?((De=a.sideVentCover)==null?void 0:De.cost)??200:0,te=((Ee=a.sideVentCover)==null?void 0:Ee.holeCostPerPiece)??94,re=((Ce=a.sideVentCover)==null?void 0:Ce.holesPerPanel)??4,pe=g?K*re*te:0,ve=ce+pe,Y=N+W,Z=k+ve,xe=Ke.pricing||{},V=typeof xe.markupRate=="number"?xe.markupRate:1.4,Q=typeof xe.roundingUnit=="number"?xe.roundingUnit:100,ue=e+n,me=Math.ceil(ue*V/Q)*Q,Pe=ue+Z,ie=me+Y+O,he=t+s;return{rawCost:Pe,priceWithMarkup:ie,weight:he}}let Si=null;function yv(){if(Si&&(Si.aborted=!0,Si=null,_n)){_n.classList.remove("is-calculating");const i=_n.querySelector(".calc-btn-title");i&&(i.textContent="見積もりと重量計算（β版）")}(yr||bs&&!bs.classList.contains("hidden"))&&(yr=!1,bs&&bs.classList.add("hidden"))}async function Gl(){Si&&(Si.aborted=!0);const i={aborted:!1};if(Si=i,bs&&bs.classList.remove("hidden"),gi&&(gi.classList.remove("value-appear"),gi.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>部材積算中...</span>
      </span>
    `),_i&&(_i.classList.remove("value-appear"),_i.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>重量計算中...</span>
      </span>
    `),_n){_n.classList.add("is-calculating");const o=_n.querySelector(".calc-btn-title");o&&(o.textContent="部材積算・構造検証中...")}const e=5e3,t=Math.floor(Math.random()*5001),n=e+t,s=100,r=Math.floor(n/s);try{for(let a=0;a<r;a++)if(await new Promise(l=>setTimeout(l,s)),i.aborted)return;const o=Mv();gi&&(gi.textContent=`¥${o.priceWithMarkup.toLocaleString()}`,gi.classList.add("value-appear")),_i&&(_i.textContent=`${o.weight.toFixed(1)} kg`,_i.classList.add("value-appear")),yr=!0,Nv(o)}catch(o){console.error("Structural simulation error:",o),gi&&(gi.innerHTML='<span style="color: #ef4444; font-size: 0.82rem; font-weight: 600;">⚠️ 計算中にエラーが発生しました</span>'),_i&&(_i.innerHTML='<span style="color: #94a3b8; font-size: 0.85rem;">-</span>'),zv(o)}finally{if(Si===i&&(Si=null,_n)){_n.classList.remove("is-calculating");const o=_n.querySelector(".calc-btn-title");o&&(o.textContent="見積もりと重量計算（β版）")}}}function Rn(i=v.doorHingeSide){return i==="right"?"左打掛、右ヒンジ":"左ヒンジ、右打掛"}function Yo(i=!1){if(v.cageType==="A_FRAMED")return i?"Type A 正面枠囲い（高剛性アルミ枠スライド扉仕様）":"Type A 正面枠囲い";if(v.cageType==="A_FRONT"){const e=Rn();return i?`Type A 前開き (${e})`:`Type A 前開き (${e})`}else if(v.cageType==="C")return i?"Type C（下部前窓＋扉仕様）":"Type C（前窓＋扉）";return i?"Type A（全面スライド扉仕様）":"Type A（全面スライド扉）"}function Sv(){if(!Zh)return;const i=Yo(!1),e=`W${v.W} × D${v.D} × H${v.H} mm`,t=[];if(v.cageType==="A"){const n=v.frontWideFrame==="3x"?"正面3倍幅":v.frontWideFrame==="2x"?"正面2倍幅":"正面標準幅";t.push(n)}t.push(v.hasFloorReinforcement?"床補強: あり":"床補強: なし"),(v.hasTopReinforcement||v.W>940)&&t.push("天板補強: あり"),v.hasSideReinforcement&&t.push(`側面補強(上部開口): ${v.sideOpeningH}mm`),v.hasDoorAntiFlex&&t.push("扉たわみ防止"),v.hasSideVentCover&&t.push("換気調整板"),v.hasPerch&&t.push("止まり木"),v.hasRoomDivider&&t.push("２室分け"),t.push(v.footType==="caster"?"キャスター":"ゴム脚"),Zh.innerHTML=`
    <div class="spec-line-primary">${i} | ${e}</div>
    <div class="spec-line-sub">${t.join(" / ")}</div>
  `}function $o(i,e,t,n){i.addEventListener("input",s=>{const r=parseInt(s.target.value,10);e.value=r,v[t]=r,n&&n(r),je()}),e.addEventListener("change",s=>{let r=parseInt(s.target.value,10);const o=parseInt(i.min,10),a=parseInt(i.max,10),l=parseInt(i.step,10)||10;isNaN(r)&&(r=o),r=Math.round(r/l)*l,r=Math.max(o,Math.min(a,r)),e.value=r,i.value=r,v[t]=r,n&&n(r),je()})}function Gs(){if(v.W>940)bn.checked=!0,bn.disabled=!0,Ul.classList.add("disabled"),Nl.textContent="幅940mm超のため必須（解除不可）",v.hasFloorReinforcement=!0;else{bn.disabled=!1,Ul.classList.remove("disabled"),Nl.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください";const i=v.W*v.D>rd;v.hasFloorReinforcement=i,bn.checked=i}}$o(vn,xn,"W",i=>{Gs(),i>940?(Tn.checked=!0,Tn.disabled=!0,xr.classList.add("disabled"),Mr.textContent="幅940mm超のため必須（解除不可）",v.hasTopReinforcement=!0):(Tn.disabled=!1,xr.classList.remove("disabled"),Mr.textContent="940mm以下は任意指定（W>940mmは必須）",Tn.checked=!1,v.hasTopReinforcement=!1)});$o(Us,Ns,"D",()=>{Gs()});$o(Mn,yn,"H",i=>{const e=Math.max(30,i-120);Os.max=e,Bs.max=e,v.frontWindowH>e&&(v.frontWindowH=e,Os.value=e,Bs.value=e);const t=50,n=Math.max(t,i-110),s=Math.round((i-60)/20)*10;_t.min=t,_t.max=n,v.hasSideReinforcement?v.sideOpeningH>n?(v.sideOpeningH=n,_t.value=n):v.sideOpeningH<t&&(v.sideOpeningH=t,_t.value=t):(v.sideOpeningH=s,_t.value=s)});$o(Os,Bs,"frontWindowH");_t.addEventListener("change",i=>{let e=parseInt(i.target.value,10);const t=50,n=Math.max(t,v.H-110),s=10;isNaN(e)&&(e=t),e=Math.round(e/s)*s,e=Math.max(t,Math.min(n,e)),_t.value=e,v.sideOpeningH=e,je()});Fo.addEventListener("change",i=>{if(v.hasSideReinforcement=i.target.checked,v.hasSideReinforcement){_r.classList.add("active"),vr.classList.remove("disabled");const e=50,t=Math.max(e,v.H-110);_t.min=e,_t.max=t;const n=Math.round((v.H-60)/20)*10;(v.sideOpeningH<e||v.sideOpeningH>t)&&(v.sideOpeningH=n,_t.value=n)}else _r.classList.remove("active"),vr.classList.add("disabled");je()});bn.addEventListener("change",i=>{v.hasFloorReinforcement=i.target.checked,je()});Tn.addEventListener("change",i=>{v.hasTopReinforcement=i.target.checked,je()});function bv(){if(!Fn||!En)return;const i=v.cageType==="A_FRONT",e=v.cageType==="A_FRAMED",t=document.getElementById("door-anti-flex-sub");i||e?(v.hasDoorAntiFlex&&(v.hasDoorAntiFlex=!1,Fn.checked=!1),Fn.disabled=!0,En.classList.add("disabled"),En.classList.remove("active"),t&&(t.textContent=e?"※正面枠囲い仕様（扉なし）のため選択不可":"※前開き（横開き扉）仕様のためスライド扉用レールは選択不可")):(Fn.disabled=!1,En.classList.remove("disabled"),t&&(t.textContent="強力生体向け。左右端に縦レールを追加し内側からの変形を防止"))}function zl(){if(!wn||!an)return;const i=v.cageType==="A_FRONT",e=v.cageType==="A_FRAMED",t=v.hasPerch;i||t||e?(v.hasRoomDivider&&(v.hasRoomDivider=!1,wn.checked=!1,Un&&Un.classList.add("hidden")),wn.disabled=!0,an.classList.add("disabled"),an.classList.remove("active"),xi&&(e?xi.textContent="※正面枠囲い仕様では2室分け仕切り板は選択不可":i?xi.textContent="※前開き仕様では2室分け仕切り板は選択不可":xi.textContent="※止まり木オプション選択時は利用できません")):(wn.disabled=!1,an.classList.remove("disabled"),xi&&(xi.textContent="正面扉戸の隙間が7mmあります。小さい生体にはご注意ください"))}Fn.addEventListener("change",i=>{if(v.cageType==="A_FRONT"){i.target.checked=!1,v.hasDoorAntiFlex=!1;return}v.hasDoorAntiFlex=i.target.checked,i.target.checked?En.classList.add("active"):En.classList.remove("active"),je()});ni.addEventListener("change",i=>{v.hasSideVentCover=i.target.checked,i.target.checked?Nn.classList.add("active"):Nn.classList.remove("active"),je()});Ft&&Ft.addEventListener("change",i=>{v.hasPerch=i.target.checked,i.target.checked?(Lt&&Lt.classList.add("active"),zl(),(v.panelConfig.top!=="punching"||v.panelConfig.topLeft!=="punching"||v.panelConfig.topRight!=="punching")&&(v.panelConfig.top="punching",v.panelConfig.topLeft="punching",v.panelConfig.topRight="punching",No&&(No.value="punching"),Oo&&(Oo.value="punching"),Bo&&(Bo.value="punching"),Ci("※天面パンチングボードの穴を利用して固定するため、天面を塩ビパンチングに変更しました。金網天板との組み合わせは直接DMにてご相談ください。",6e3))):(Lt&&Lt.classList.remove("active"),zl()),je()});wn&&wn.addEventListener("change",i=>{v.hasRoomDivider=i.target.checked,i.target.checked?(an&&an.classList.add("active"),Un&&Un.classList.remove("hidden"),Ft&&(v.hasPerch&&(v.hasPerch=!1,Ft.checked=!1,Lt&&Lt.classList.remove("active")),Ft.disabled=!0),Lt&&Lt.classList.add("disabled"),Ts&&(Ts.textContent="※２室分けオプション選択時は利用できません"),(v.panelConfig.top!=="punching"||v.panelConfig.topLeft!=="punching"||v.panelConfig.topRight!=="punching")&&Ci("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3)):(an&&an.classList.remove("active"),Un&&Un.classList.add("hidden"),Ft&&(Ft.disabled=!1),Lt&&Lt.classList.remove("disabled"),Ts&&(Ts.textContent="天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応")),je()});ko&&ko.addEventListener("change",i=>{v.panelConfig.partition=i.target.value,je()});$n.addEventListener("change",i=>{i.target.checked?(v.frontWideFrame="2x",ri="2x"):(v.frontWideFrame="none",ri="none"),je()});qn.addEventListener("change",i=>{i.target.checked?(v.frontWideFrame="3x",ri="3x"):(v.frontWideFrame="none",ri="none"),je()});yi.addEventListener("change",i=>{v.hasRubberPacking=i.target.checked,i.target.checked?Zn.classList.add("active"):Zn.classList.remove("active"),je()});On.addEventListener("click",()=>{v.cageType="A",v.frontWideFrame=ri,On.classList.add("active"),Et==null||Et.classList.remove("active"),wt==null||wt.classList.remove("active"),si.classList.remove("active"),Ri.classList.add("hidden"),Zt.textContent="Type A 選択中 (全面スライド扉)",Vs(),je()});Et==null||Et.addEventListener("click",()=>{v.cageType="A_FRONT",v.frontWideFrame=ri,Et.classList.add("active"),On.classList.remove("active"),wt==null||wt.classList.remove("active"),si.classList.remove("active"),Ri.classList.add("hidden"),Zt.textContent=`Type A 前開き 選択中 (${Rn()})`,Vs(),je()});wt==null||wt.addEventListener("click",()=>{v.cageType="A_FRAMED",wt.classList.add("active"),On.classList.remove("active"),Et==null||Et.classList.remove("active"),si.classList.remove("active"),Ri.classList.add("hidden"),Zt.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)",Vs(),je()});si.addEventListener("click",()=>{v.cageType="C",v.frontWideFrame="none",si.classList.add("active"),On.classList.remove("active"),Et==null||Et.classList.remove("active"),wt==null||wt.classList.remove("active"),Ri.classList.remove("hidden"),Zt.textContent="Type C 選択中 (前窓＋扉)",Vs(),je()});const Tv=600,Ev=700,wv=900,Av=450,Cv=300,Rv=200,Pv=1800,Lv=900;function Dv(){const i=v.cageType==="A_FRONT",e=v.cageType==="A_FRAMED",t=e?wv:Cv,n=e?Av:Rv,s=i?Tv:Pv,r=i?Ev:Lv;vn&&xn&&(vn.min=t,xn.min=t,vn.max=s,xn.max=s,v.W<t?(v.W=t,vn.value=t,xn.value=t,Gs()):v.W>s&&(v.W=s,vn.value=s,xn.value=s,Gs())),Mn&&yn&&(Mn.min=n,yn.min=n,Mn.max=r,yn.max=r,v.H<n?(v.H=n,Mn.value=n,yn.value=n):v.H>r&&(v.H=r,Mn.value=r,yn.value=r))}function Vs(){const i=v.cageType==="A_FRONT",e=v.cageType==="A_FRAMED";Dv(),bv(),zl(),mn==null||mn.classList.toggle("hidden",e||v.cageType==="C"),gn==null||gn.classList.toggle("hidden",e||v.cageType==="C"),Ia&&(i?(Ia.classList.remove("hidden"),ei==null||ei.classList.toggle("active",v.doorHingeSide!=="right"),ti==null||ti.classList.toggle("active",v.doorHingeSide==="right")):Ia.classList.add("hidden"));const t=co?co.closest(".control-section"):null;t&&t.classList.remove("hidden"),co&&$h&&(co.style.display=i?"none":"grid",$h.style.display=i?"grid":"none"),qh&&(qh.textContent=i?"前開き扉 開閉":"引き違いスライド扉 開閉");const n=v.doorState||"closed";ed.forEach(s=>{s.classList.toggle("active",s.getAttribute("data-mode")===n)})}ei&&ei.addEventListener("click",()=>{v.doorHingeSide="left",ei.classList.add("active"),ti==null||ti.classList.remove("active"),v.cageType==="A_FRONT"&&(Zt.textContent=`Type A 前開き 選択中 (${Rn()})`),je()});ti&&ti.addEventListener("click",()=>{v.doorHingeSide="right",ti.classList.add("active"),ei==null||ei.classList.remove("active"),v.cageType==="A_FRONT"&&(Zt.textContent=`Type A 前開き 選択中 (${Rn()})`),je()});$i.addEventListener("click",()=>{v.frameColor="silver",$i.classList.add("active"),qi.classList.remove("active"),je()});qi.addEventListener("click",()=>{v.frameColor="black",qi.classList.add("active"),$i.classList.remove("active"),je()});ks.addEventListener("change",i=>{v.footType=i.target.checked?"caster":"rubber",i.target.checked?Zi.classList.add("active"):Zi.classList.remove("active"),je()});let ho=null;function Ws(i){v.doorState=i,ed.forEach(t=>{t.getAttribute("data-mode")===i?t.classList.add("active"):t.classList.remove("active")});const e=document.querySelector(".door-mode-group");e.classList.add("door-animating"),ho&&clearTimeout(ho),ho=setTimeout(()=>{e.classList.remove("door-animating"),ho=null},3100),bt.setDoorState(i)}ju.addEventListener("click",()=>Ws("closed"));Ju.addEventListener("click",()=>Ws("left_open"));Qu.addEventListener("click",()=>Ws("right_open"));To==null||To.addEventListener("click",()=>Ws("closed"));Eo==null||Eo.addEventListener("click",()=>Ws("open"));function ad(i){sc=i,bt.setAutoRotate(i,v),i?(Bl.classList.add("active","rotating"),Ol.forEach(e=>e.classList.remove("active"))):Bl.classList.remove("active","rotating")}Bl.addEventListener("click",()=>{ad(!sc)});Ol.forEach(i=>{i.addEventListener("click",()=>{ad(!1),Ol.forEach(t=>t.classList.remove("active")),i.classList.add("active");const e=i.getAttribute("data-view");bt.setViewPreset(e,v)})});mv.addEventListener("click",()=>{v.W=750,v.D=450,v.H=300,v.cageType="A",v.frontWindowH=50,v.hasSideReinforcement=!1,v.sideOpeningH=120,Ws("closed"),vn.value=750,xn.value=750,Us.value=450,Ns.value=450,Mn.value=300,yn.value=300,Os.value=50,Bs.value=50,Fo.checked=!1,_r.classList.remove("active"),vr.classList.add("disabled"),_t.min=50,_t.max=190,_t.value=120,bn.checked=!1,bn.disabled=!1,Ul.classList.remove("disabled"),Nl.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください",v.hasFloorReinforcement=!1,Tn.checked=!1,Tn.disabled=!1,xr.classList.remove("disabled"),Mr.textContent="940mm以下は任意指定（W>940mmは必須）",v.hasTopReinforcement=!1,ks.checked=!1,Zi.classList.remove("active"),v.footType="rubber",Fn.checked=!1,En.classList.remove("active"),v.hasDoorAntiFlex=!1,ni.checked=!1,Nn.classList.remove("active"),v.hasSideVentCover=!1,Ft&&(Ft.checked=!1,Ft.disabled=!1),Lt&&Lt.classList.remove("active","disabled"),Ts&&(Ts.textContent="天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応"),v.hasPerch=!1,wn&&(wn.checked=!1,wn.disabled=!1),an&&an.classList.remove("active","disabled"),xi&&(xi.textContent="正面扉戸の隙間が7mmあります。小さい生体にはご注意ください"),Un&&Un.classList.add("hidden"),ko&&(ko.value="black_matte"),v.hasRoomDivider=!1,yi&&(yi.checked=!1),Zn&&Zn.classList.remove("active"),v.hasRubberPacking=!1,v.panelConfig={front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"},v.frontWideFrame="2x",ri="2x",On.click(),bt.setViewPreset("iso",v),je()});Uo&&Uo.addEventListener("change",i=>{v.panelConfig.floor=i.target.value,je()});td.addEventListener("change",i=>{v.panelConfig.back=i.target.value,je()});nd.addEventListener("change",i=>{v.panelConfig.side=i.target.value,je()});id.addEventListener("change",i=>{v.panelConfig.sideUpper=i.target.value,Xo(),je()});sd.addEventListener("change",i=>{v.panelConfig.sideLower=i.target.value,je()});No.addEventListener("change",i=>{v.panelConfig.top=i.target.value,v.hasPerch&&i.target.value!=="punching"?Ci("※止まり木は天面パンチングボードの穴を利用します。金網天板やアクリル天板との組み合わせは直接DMにてご相談ください。",5e3):v.hasRoomDivider&&i.target.value!=="punching"&&Ci("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),je()});Oo.addEventListener("change",i=>{v.panelConfig.topLeft=i.target.value,v.hasPerch&&i.target.value!=="punching"?Ci("※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。",5e3):v.hasRoomDivider&&i.target.value!=="punching"&&Ci("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),je()});Bo.addEventListener("change",i=>{v.panelConfig.topRight=i.target.value,v.hasPerch&&i.target.value!=="punching"?Ci("※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。",5e3):v.hasRoomDivider&&i.target.value!=="punching"&&Ci("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),je()});const nu=document.querySelectorAll(".sidebar-tab"),Iv=document.querySelectorAll(".tab-pane");nu.forEach(i=>{i.addEventListener("click",()=>{const e=i.getAttribute("data-tab");nu.forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false")}),i.classList.add("active"),i.setAttribute("aria-selected","true"),Iv.forEach(t=>{t.id===e?t.classList.add("active"):t.classList.remove("active")}),bt&&typeof bt.onResize=="function"&&setTimeout(()=>bt.onResize(),50)})});let uo=!0;Ba&&Ba.addEventListener("click",()=>{uo=!uo,Ba.classList.toggle("active",uo),Kh&&Kh.classList.toggle("hidden",!uo)});let fo=!0;ka&&ka.addEventListener("click",()=>{fo=!fo,ka.classList.toggle("active",fo),jh&&jh.classList.toggle("hidden",!fo)});_t&&(_t.min=50,_t.max=Math.max(50,v.H-110),_t.value=v.sideOpeningH);je();bt.setViewPreset("iso",v);_n&&_n.addEventListener("click",()=>{Gl()});function Fv(){!yo||!Array.isArray(Do)||(yo.innerHTML="",Do.forEach(i=>{const e=document.createElement("button");e.className="creature-card",e.dataset.presetId=i.id,e.title=`${i.name} (${i.W}×${i.D}×${i.H}mm)`;const t=Array.isArray(i.tags)&&i.tags.length>0?`<div class="creature-card-tags">
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
    `,e.addEventListener("click",()=>{ld(i)}),yo.appendChild(e)}))}function ld(i){if(v.W=i.W,v.D=i.D,v.H=i.H,i.cageType&&(i.cageType==="A"||i.cageType==="A_FRONT"||i.cageType==="A_FRAMED"||i.cageType==="C")&&(v.cageType=i.cageType,On&&si&&(On.classList.toggle("active",v.cageType==="A"),Et==null||Et.classList.toggle("active",v.cageType==="A_FRONT"),wt==null||wt.classList.toggle("active",v.cageType==="A_FRAMED"),si.classList.toggle("active",v.cageType==="C"),Zt&&(v.cageType==="A_FRAMED"?Zt.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":v.cageType==="A_FRONT"?(v.doorHingeSide=i.doorHingeSide||"left",Zt.textContent=`Type A 前開き 選択中 (${Rn()})`):Zt.textContent=v.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),Ri&&Ri.classList.toggle("hidden",v.cageType!=="C"),Vs())),v.cageType==="C"){const s=i.frontWindowH!=null?i.frontWindowH:50;v.frontWindowH=s,Bs&&(Bs.value=s),Os&&(Os.value=s)}if(i.frameColor&&(i.frameColor==="silver"||i.frameColor==="black")&&(v.frameColor=i.frameColor,$i&&qi&&($i.classList.toggle("active",v.frameColor==="silver"),qi.classList.toggle("active",v.frameColor==="black"))),v.cageType==="A"){const s=i.frontWideFrame||"2x";v.frontWideFrame=s,ri=s}else v.frontWideFrame="none";v.hasSideReinforcement=!!i.hasSideReinforcement,Fo&&(Fo.checked=v.hasSideReinforcement),_r&&_r.classList.toggle("active",v.hasSideReinforcement),vr&&vr.classList.toggle("disabled",!v.hasSideReinforcement);const e=50,t=Math.max(e,v.H-110);if(_t&&(_t.min=e,_t.max=t),i.sideOpeningH!=null)v.sideOpeningH=Math.max(e,Math.min(t,i.sideOpeningH)),_t&&(_t.value=v.sideOpeningH);else if(v.hasSideReinforcement){const s=Math.round((v.H-60)/20)*10;v.sideOpeningH=s,_t&&(_t.value=s)}v.hasDoorAntiFlex=!!i.hasDoorAntiFlex,Fn&&(Fn.checked=v.hasDoorAntiFlex),En&&En.classList.toggle("active",v.hasDoorAntiFlex),v.hasSideVentCover=!!i.hasSideVentCover,ni&&(ni.checked=v.hasSideVentCover),Nn&&Nn.classList.toggle("active",v.hasSideVentCover),v.hasPerch=!!i.hasPerch,Ft&&(Ft.checked=v.hasPerch),Lt&&Lt.classList.toggle("active",v.hasPerch),i.panelConfig&&(v.panelConfig={...v.panelConfig,...i.panelConfig}),v.footType=i.footType||"rubber",ks&&(ks.checked=v.footType==="caster"),Zi&&Zi.classList.toggle("active",v.footType==="caster"),xn&&(xn.value=v.W),vn&&(vn.value=v.W),Ns&&(Ns.value=v.D),Us&&(Us.value=v.D),yn&&(yn.value=v.H),Mn&&(Mn.value=v.H),i.hasFloorReinforcement!=null?(v.hasFloorReinforcement=!!i.hasFloorReinforcement,bn&&(bn.checked=v.hasFloorReinforcement)):Gs(),v.W>940?(Tn.checked=!0,Tn.disabled=!0,xr.classList.add("disabled"),Mr.textContent="幅940mm超のため必須（解除不可）",v.hasTopReinforcement=!0):(Tn.disabled=!1,xr.classList.remove("disabled"),Mr.textContent="940mm以下は任意指定（W>940mmは必須）",v.hasTopReinforcement=!!i.hasTopReinforcement,Tn.checked=v.hasTopReinforcement),rc(),Xo(),yo.querySelectorAll(".creature-card").forEach(s=>{s.classList.toggle("active",s.dataset.presetId===i.id)}),je(),bt.setViewPreset("iso",v)}function Uv(){const i=new Date,e=i.getFullYear()+String(i.getMonth()+1).padStart(2,"0")+String(i.getDate()).padStart(2,"0"),t=Math.random().toString(36).substring(2,6).toUpperCase();return`EST-${e}-${t}`}function cd(){try{let i=localStorage.getItem("cage_visitor_id");return i||(i="usr_"+Math.random().toString(36).substring(2,8),localStorage.setItem("cage_visitor_id",i)),i}catch{return"usr_"+Math.random().toString(36).substring(2,8)}}function hd(){try{let i=sessionStorage.getItem("cage_session_id");return i||(i="ses_"+Math.random().toString(36).substring(2,8),sessionStorage.setItem("cage_session_id",i)),i}catch{return"ses_"+Math.random().toString(36).substring(2,8)}}function Nv(i){Hi=Uv(),Xh++;let e="初期表示からの試算";if(et){const n=[];v.W!==et.W&&n.push(`W:${et.W}→${v.W}`),v.D!==et.D&&n.push(`D:${et.D}→${v.D}`),v.H!==et.H&&n.push(`H:${et.H}→${v.H}`),v.cageType!==et.cageType&&n.push(`タイプ:${v.cageType}`),v.cageType==="C"&&v.frontWindowH!==et.frontWindowH&&n.push(`前窓高:${et.frontWindowH}→${v.frontWindowH}`),v.cageType==="A_FRONT"&&v.doorHingeSide!==et.doorHingeSide&&n.push(`開き:${Rn(et.doorHingeSide)}→${Rn(v.doorHingeSide)}`),v.frameColor!==et.frameColor&&n.push(`色:${et.frameColor==="black"?"黒":"銀"}→${v.frameColor==="black"?"黒":"銀"}`),v.frontWideFrame!==et.frontWideFrame&&n.push(`正面下部:${et.frontWideFrame||"なし"}→${v.frontWideFrame||"なし"}`),v.footType!==et.footType&&n.push(`脚:${v.footType==="caster"?"キャスター":"ゴム脚"}`),v.hasFloorReinforcement!==et.hasFloorReinforcement&&n.push(v.hasFloorReinforcement?"床補強追加":"床補強解除"),v.hasTopReinforcement!==et.hasTopReinforcement&&n.push(v.hasTopReinforcement?"天板補強追加":"天板補強解除"),v.hasSideReinforcement!==et.hasSideReinforcement&&n.push(v.hasSideReinforcement?"側面補強追加":"側面補強解除"),v.hasDoorAntiFlex!==et.hasDoorAntiFlex&&n.push(v.hasDoorAntiFlex?"扉たわみ防止追加":"扉たわみ防止解除"),v.hasSideVentCover!==et.hasSideVentCover&&n.push(v.hasSideVentCover?"換気調整板追加":"換気調整板解除"),v.hasPerch!==et.hasPerch&&n.push(v.hasPerch?"止まり木追加":"止まり木解除"),v.hasRubberPacking!==et.hasRubberPacking&&n.push(v.hasRubberPacking?"ゴムパッキン追加":"ゴムパッキン解除"),v.hasRoomDivider!==et.hasRoomDivider&&n.push(v.hasRoomDivider?"2室分け追加":"2室分け解除"),v.hasSideReinforcement&&v.sideOpeningH!==et.sideOpeningH&&n.push(`側上部開口:${et.sideOpeningH}→${v.sideOpeningH}`);const s=et.panelConfig||{},r=v.panelConfig||{};r.floor!==s.floor&&n.push(`床:${$t(s.floor)}→${$t(r.floor)}`),r.back!==s.back&&n.push(`背:${$t(s.back)}→${$t(r.back)}`),v.hasSideReinforcement?(r.sideUpper!==s.sideUpper||r.sideLower!==s.sideLower)&&n.push(`側分割:${$t(r.sideUpper)}/${$t(r.sideLower)}`):r.side!==s.side&&n.push(`側:${$t(s.side)}→${$t(r.side)}`);const o=v.hasTopReinforcement||v.W>940,a=et.hasTopReinforcement||et.W>940;o||a?(r.topLeft!==s.topLeft||r.topRight!==s.topRight||!a)&&n.push(`天分割:${$t(r.topLeft)}/${$t(r.topRight)}`):r.top!==s.top&&n.push(`天:${$t(s.top)}→${$t(r.top)}`),v.hasRoomDivider&&r.partition!==s.partition&&n.push(`仕切り:${$t(s.partition)}→${$t(r.partition)}`),n.length>0?e=n.join(", "):e="同一条件での再計算"}const t=Ov(Hi,i);kh&&(kh.textContent=Hi),Gh&&(Gh.textContent=`¥${i.priceWithMarkup.toLocaleString()}`),zh&&(zh.textContent=`${i.weight.toFixed(1)} kg`),ur&&(ur.value=t),on&&(qt&&qt.classList.add("hidden"),Io&&Io.classList.add("hidden"),window.lastGeneratedEstimateImage=null,on.classList.remove("hidden")),dr={estimateId:Hi,timestamp:new Date().toISOString(),visitorId:Ku,sessionId:Il,seq:Xh,spec:{...v},totals:{...i},diffNote:e,elapsedSec:Math.round((Date.now()-fv)/1e3)},et=JSON.parse(JSON.stringify(v)),Gv(dr)}function oc(){return v.frameColor==="black"?"ブラック":"シルバー"}function Ln(i){switch(i){case"acrylic":return"透明アクリル 3.0mm";case"black_matte":return"アクリル黒両面マット 3.0mm";case"smoke_gray":return"アクリル グレースモーク半透明 3.0mm";case"punching":return"塩ビパンチングボード 3.0mm";case"polyca":return"中空ポリカ 4.0mm";case"mesh15":return"金網15mmピッチ (黒粉体塗装)";case"mesh25":return"金網25mmピッチ (黒粉体塗装)";case"mesh30":return"金網30mmピッチ (黒粉体塗装)";default:return i||"透明アクリル 3.0mm"}}function $t(i){switch(i){case"acrylic":return"透明アクリル";case"black_matte":return"黒マット";case"smoke_gray":return"グレースモーク";case"punching":return"パンチング";case"polyca":return"中空ポリカ";case"mesh15":return"金網15mm";case"mesh25":return"金網25mm";case"mesh30":return"金網30mm";default:return i||"アクリル"}}function ac(){const i=[];return v.cageType==="C"?(i.push({face:"正面扉",name:"透明アクリル 3.0mm (スライド扉)"}),i.push({face:"正面固定窓",name:`透明アクリル 3.0mm (開口高 ${v.frontWindowH}mm)`})):v.cageType==="A_FRONT"?i.push({face:"正面扉",name:`透明アクリル 3.0mm (前開き扉: ${Rn()})`}):i.push({face:"正面扉",name:"透明アクリル 3.0mm (全面スライド扉)"}),i.push({face:v.hasFloorReinforcement?"床面 (中央2分割)":"床面",name:Ln(v.panelConfig.floor)}),i.push({face:"背面",name:Ln(v.panelConfig.back)}),v.hasSideReinforcement?i.push({face:"側面 (左右2分割)",name:`上部: ${Ln(v.panelConfig.sideUpper)} / 下部: ${Ln(v.panelConfig.sideLower)}`}):i.push({face:"側面 (左右)",name:Ln(v.panelConfig.side)}),v.hasTopReinforcement||v.W>940?v.panelConfig.topLeft===v.panelConfig.topRight?i.push({face:"天面 (中央2分割)",name:`${Ln(v.panelConfig.topLeft)} (左右共通)`}):i.push({face:"天面 (中央2分割)",name:`左: ${Ln(v.panelConfig.topLeft)} / 右: ${Ln(v.panelConfig.topRight)}`}):i.push({face:"天面",name:Ln(v.panelConfig.top)}),v.hasRoomDivider&&i.push({face:"仕切り板",name:Ln(v.panelConfig.partition||"black_matte")}),i}function lc(){const i=[];if(v.cageType==="A_FRONT"&&i.push(`前開き扉仕様 (${Rn()})`),v.cageType==="A"&&(v.frontWideFrame==="2x"?i.push("正面下側幅広フレーム2倍幅 (40mm)"):v.frontWideFrame==="3x"&&i.push("正面下側幅広フレーム3倍幅 (60mm)")),v.cageType==="C"&&i.push(`前窓固定仕様 (開口高さ ${v.frontWindowH}mm)`),v.hasSideReinforcement&&i.push(`側面補強フレーム (側面上部開口 ${v.sideOpeningH}mm・左右2分割)`),v.hasSideVentCover&&(v.hasSideReinforcement?i.push("側面換気量調整板 (左右ペア・外張りt1.5アクリル板・化粧つまみネジ付)"):i.push("側面換気量調整板 (左右上下4枚・外張りt1.5アクリル板・化粧つまみネジ付)")),v.hasFloorReinforcement&&i.push("床面中央補強フレーム (2分割仕様)"),v.W>940?i.push("天板中央補強フレーム (幅940mm超・標準付属/2分割仕様)"):v.hasTopReinforcement&&i.push("天板中央補強フレーム (2分割仕様)"),v.hasDoorAntiFlex&&i.push("正面スライド扉たわみ防止レール"),v.footType==="caster"&&i.push("自在キャスター仕様 (4輪・高さ66mm)"),v.hasPerch){const e=v.W-120,t=Math.floor(e/7)*7,n=Math.max(10,t-15);i.push(`止まり木（天板吊り下げ式・φ30アルミ丸棒 L=${n}mm・後付け可）`)}return v.hasRubberPacking&&i.push("モレ対策ゴムパッキン (側面・背面 隙間モレ抑制)"),v.hasRoomDivider&&i.push("２室分け（後付け仕切り板仕様）"),i}function Ov(i,e){const t=Yo(!0),n=oc(),r=ac().map(l=>`  ・${l.face}: ${l.name}`).join(`
`),o=lc(),a=o.length>0?o.map(l=>`  ・${l}`).join(`
`):"  ・標準構成（追加オプションなし）";return`【ケージお見積もり仕様】
・見積ID: ${i}
・ケージ種類: ${t}
・外寸サイズ: 幅 ${v.W}mm × 奥行 ${v.D}mm × 高さ ${v.H}mm
・フレーム色: ${n}
・選択パネル素材・板厚:
${r}
・選択オプション:
${a}
・概算総重量: 約 ${e.weight.toFixed(1)} kg
・お見積り合計金額: ¥${e.priceWithMarkup.toLocaleString()}（税込・送料別）
※まだβ版なので誤差（最大±8%程度）が出ております。詳細はDMよりお問い合わせください。
※公式サイト: https://kinato-cage-site.pages.dev/`}Wh&&on&&Wh.addEventListener("click",()=>{yr?(qt&&qt.classList.add("hidden"),on.classList.remove("hidden")):alert("先に「見積もりと重量計算」を実行してください。")});Hh&&on&&Hh.addEventListener("click",()=>{on.classList.add("hidden")});Vh&&on&&Vh.addEventListener("click",()=>{on.classList.add("hidden")});on&&on.addEventListener("click",i=>{i.target===on&&on.classList.add("hidden")});Da&&ur&&Da.addEventListener("click",async()=>{const i=ur.value;if(i)try{await navigator.clipboard.writeText(i),_s&&(_s.classList.remove("hidden"),setTimeout(()=>_s.classList.add("hidden"),2200));const e=Da.querySelector(".copy-text-label");if(e){const t=e.textContent;e.textContent="済！",setTimeout(()=>{e.textContent=t},1800)}}catch{ur.select(),document.execCommand("copy"),_s&&(_s.classList.remove("hidden"),setTimeout(()=>_s.classList.add("hidden"),2200))}});Dl&&Dl.addEventListener("click",()=>{Bv()});Ss&&Ss.addEventListener("click",()=>{Ss.src&&window.open(Ss.src,"_blank")});async function Bv(){if(!yr||!dr){alert("先に見積もり計算を実行してください。");return}const i=Dl||dv;let e="";i&&(i.classList.add("is-exporting"),e=i.innerHTML,i.innerHTML="<span>⏳ 画像を生成中...</span>");try{const t=bt.captureImage?bt.captureImage():bt.renderer.domElement.toDataURL("image/png"),n=document.createElement("canvas");n.width=1080,n.height=1920;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,1920);r.addColorStop(0,"#090d16"),r.addColorStop(.35,"#0f172a"),r.addColorStop(1,"#1e293b"),s.fillStyle=r,s.fillRect(0,0,1080,1920),s.strokeStyle="rgba(56, 189, 248, 0.06)",s.lineWidth=1;for(let te=60;te<1080;te+=80)s.beginPath(),s.moveTo(te,0),s.lineTo(te,1920),s.stroke();for(let te=60;te<1920;te+=80)s.beginPath(),s.moveTo(0,te),s.lineTo(1080,te),s.stroke();s.strokeStyle="rgba(56, 189, 248, 0.35)",s.lineWidth=2,s.strokeRect(40,40,1e3,1840);const o=te=>new Promise(re=>{if(!te)return re(null);const pe=new Image;pe.onload=()=>re(pe),pe.onerror=()=>re(null),pe.src=te}),a="./",[l,c,h,u]=await Promise.all([o(`${a}logo_kinato.png`),o(`${a}character_transparent.png`),o(t),o(`${a}qr_code_kinato.png`)]);l&&s.drawImage(l,65,65,135,135);const p=l?215:65;s.fillStyle="#ffffff",s.font='bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("きなとのケージ屋さん",p,104),s.fillStyle="#38bdf8",s.font='600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3Dオーダーメイドケージ お見積書",p,140),s.fillStyle="#f9c784",s.font="500 16px ui-monospace, SFMono-Regular, monospace",s.fillText("https://kinato-cage-site.pages.dev/",p,172),u&&(s.fillStyle="#ffffff",s.shadowColor="rgba(56, 189, 248, 0.3)",s.shadowBlur=10,ir(s,605,67,130,130,8),s.fill(),s.shadowColor="transparent",s.shadowBlur=0,s.drawImage(u,610,72,120,120)),s.textAlign="right",s.fillStyle="#fb7185",s.font="bold 24px ui-monospace, monospace",s.fillText(Hi,1015,110),s.fillStyle="#94a3b8",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const d=new Date,g=`${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,"0")}/${String(d.getDate()).padStart(2,"0")} ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;s.fillText(`発行日時: ${g}`,1015,148),s.textAlign="left";const _=65,m=240,f=950,w=700;if(s.fillStyle="rgba(15, 23, 42, 0.75)",s.strokeStyle="rgba(56, 189, 248, 0.25)",s.lineWidth=2,ir(s,_,m,f,w,16),s.fill(),s.stroke(),h){const te=Math.min((f-40)/h.width,(w-40)/h.height),re=h.width*te,pe=h.height*te,ve=_+(f-re)/2,Y=m+(w-pe)/2;s.drawImage(h,ve,Y,re,pe)}s.fillStyle="rgba(2, 6, 23, 0.85)",s.strokeStyle="rgba(56, 189, 248, 0.5)",ir(s,_+20,m+w-55,230,36,6),s.fill(),s.stroke(),s.fillStyle="#38bdf8",s.font='600 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3D外観シミュレーション",_+35,m+w-31);const M=65,x=960,F=950,C=505;s.fillStyle="rgba(30, 41, 59, 0.65)",s.strokeStyle="rgba(148, 163, 184, 0.2)",s.lineWidth=1.5,ir(s,M,x,F,C,16),s.fill(),s.stroke(),s.fillStyle="#f8fafc",s.font='bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("📐 ケージ設計パラメータ",M+30,x+40),s.strokeStyle="rgba(148, 163, 184, 0.15)",s.lineWidth=1,s.beginPath(),s.moveTo(M+25,x+56),s.lineTo(M+F-25,x+56),s.stroke();const L=Yo(!0),D=oc(),b=ac(),y=lc();s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("ケージ種類",M+30,x+90),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(L,M+230,x+90),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("外寸サイズ",M+30,x+125),s.fillStyle="#38bdf8",s.font='bold 21px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`幅 ${v.W} mm  ×  奥行 ${v.D} mm  ×  高さ ${v.H} mm`,M+230,x+125),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("フレーム仕様",M+30,x+160),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(D,M+230,x+160),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択パネル・板厚",M+30,x+198);let E=x+198;b.forEach(te=>{s.fillStyle="#38bdf8",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`[${te.face}]`,M+230,E),s.fillStyle="#e2e8f0",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(te.name,M+380,E),E+=25}),s.strokeStyle="rgba(148, 163, 184, 0.12)",s.beginPath(),s.moveTo(M+25,E+6),s.lineTo(M+F-25,E+6),s.stroke();const U=E+34;if(s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択オプション",M+30,U),y.length===0)s.fillStyle="#94a3b8",s.font='500 17px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("標準構成（追加オプションなし）",M+230,U);else{let te=U;y.forEach(re=>{s.fillStyle="#fbbf24",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("✔",M+230,te),s.fillStyle="#f8fafc",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(re,M+255,te),te+=24})}const I=!!(c||u),O=65,N=1485,k=I?650:950,K=345,W=s.createLinearGradient(O,N,O+k,N+K);if(W.addColorStop(0,"rgba(15, 23, 42, 0.88)"),W.addColorStop(1,"rgba(30, 41, 59, 0.92)"),s.fillStyle=W,s.strokeStyle="rgba(217, 70, 239, 0.4)",s.lineWidth=2,ir(s,O,N,k,K,16),s.fill(),s.stroke(),s.fillStyle="#cbd5e1",s.font='600 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("概算総重量 (計算値)",O+35,N+48),s.fillStyle="#38bdf8",s.font="bold 32px ui-monospace, monospace",s.fillText(`約 ${dr.totals.weight.toFixed(1)} kg`,O+280,N+50),s.strokeStyle="rgba(148, 163, 184, 0.2)",s.beginPath(),s.moveTo(O+30,N+70),s.lineTo(O+k-30,N+70),s.stroke(),s.fillStyle="#f1f5f9",s.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("お見積もり合計金額 (税込・送料別)",O+35,N+110),s.fillStyle="#fbbf24",s.font='bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`¥${dr.totals.priceWithMarkup.toLocaleString()}`,O+35,N+180),s.fillStyle="#fcd34d",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("※まだβ版なので誤差（最大±8%程度）が出ております。",O+35,N+220),s.fillText("　詳細はDMよりお問い合わせください。",O+35,N+244),s.fillStyle="#94a3b8",s.font='500 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("※本画像はお見積もりシミュレーション結果の控えです。",O+35,N+282),s.fillText("　お問い合わせ・ご注文の際にお手元にご準備ください。",O+35,N+306),I&&c){const ve=c.height/c.width*270,Y=735+10/2,Z=N+(K-ve)/2+5;s.drawImage(c,Y,Z,270,ve)}const ce=`Cage_Estimate_${Hi}.png`;try{const te=n.toDataURL("image/png");window.lastGeneratedEstimateImage=te,Ss&&(Ss.src=te),Io&&Io.classList.remove("hidden");const re=await new Promise(Z=>n.toBlob(Z,"image/png"));let pe=null;if(re&&window.File)try{pe=new File([re],ce,{type:"image/png"})}catch(Z){console.warn("File constructor failed:",Z)}const ve=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);let Y=!1;if(ve&&pe&&navigator.canShare&&navigator.canShare({files:[pe]}))try{await navigator.share({files:[pe],title:"きなとのケージ屋さん お見積もり結果カード",text:`ケージお見積もり結果カード（${Hi}）です。`}),Y=!0,console.log("Shared estimate card image via Web Share API successfully"),qt&&pi&&(pi.textContent=ce,vs&&(vs.textContent="✅ 共有メニューを開きました（「画像を保存」で写真アプリに保存されます）"),qt.classList.remove("hidden"))}catch(Z){Z.name==="AbortError"?(console.log("User closed the share sheet"),qt&&pi&&(pi.textContent=ce,vs&&(vs.textContent="💡 共有メニューを閉じました。下の画像を長押しして「写真」に追加も可能です"),qt.classList.remove("hidden")),Y=!0):console.warn("navigator.share failed, falling back to download:",Z)}if(!Y){const Z=document.createElement("a");Z.href=te,Z.download=ce,Z.target="_self",document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),console.log("Downloaded estimate card image via DataURL:",ce),qt&&pi&&(pi.textContent=ce,vs&&(vs.textContent=ve?"✅ 画像をダウンロードしました（下の画像を長押しして「写真」に追加も可能です）":"✅ ダウンロード完了（保存先: ダウンロードフォルダ）"),qt.classList.remove("hidden"),setTimeout(()=>{qt&&qt.classList.add("hidden")},7e3))}}catch(te){console.warn("toDataURL / export failed, falling back to Blob URL:",te),n.toBlob&&n.toBlob(re=>{if(!re){alert("画像の書き出しに失敗しました。");return}const pe=URL.createObjectURL(re),ve=document.createElement("a");ve.href=pe,ve.download=ce,document.body.appendChild(ve),ve.click(),document.body.removeChild(ve),setTimeout(()=>URL.revokeObjectURL(pe),1e4),qt&&pi&&(pi.textContent=ce,qt.classList.remove("hidden"))},"image/png")}}catch(t){console.error("Estimate card export failed:",t),alert("画像の生成中にエラーが発生しました: "+t.message)}finally{i&&(i.classList.remove("is-exporting"),i.innerHTML=e)}}function ir(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.lineTo(e+n-r,t),i.arcTo(e+n,t,e+n,t+r,r),i.lineTo(e+n,t+s-r),i.arcTo(e+n,t+s,e+n-r,t+s,r),i.lineTo(e+r,t+s),i.arcTo(e,t+s,e,t+s-r,r),i.lineTo(e,t+r),i.arcTo(e,t,e+r,t,r),i.closePath()}const kv=!0;function ud(){const i=window.location.hostname||"",e=window.location.port||"";return i==="localhost"||i==="127.0.0.1"||i==="[::1]"||i==="0.0.0.0"||i.endsWith(".local")||i.startsWith("192.168.")||i.startsWith("10.")||e==="5173"||e==="4173"}async function Gv(i){var t;if(ud()){console.log("[Log] ローカル開発環境のため、Googleスプレッドシートへの見積もりログ保存を自動スキップしました。");return}const e=(t=Ke==null?void 0:Ke.system)==null?void 0:t.gasLogEndpointUrl;if(!e.startsWith("http")){console.warn("[Log] gasLogEndpointUrl が未設定のため、ログ送信をスキップしました。");return}try{const n=navigator.userAgent;let s="PC";/iPhone/i.test(n)?s="iPhone":/iPad/i.test(n)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?s="iPad":/Android/i.test(n)?s="Android":/Mac/i.test(n)?s="Mac":/Win/i.test(n)&&(s="Windows");let r="Browser";/Chrome/i.test(n)&&!/Edge|Edg/i.test(n)?r="Chrome":/Safari/i.test(n)&&!/Chrome/i.test(n)?r="Safari":/Edge|Edg/i.test(n)?r="Edge":/Firefox/i.test(n)&&(r="Firefox");const a=ac().map(d=>`${d.face}:${d.name}`).join(" | "),l=lc(),c=l.length>0?l.join(", "):"なし",h=oc();let u=[];try{const d=sessionStorage.getItem("cage_page_history");d&&(u=JSON.parse(d)),u.includes("見積もりシステム")||(u.push("見積もりシステム"),sessionStorage.setItem("cage_page_history",JSON.stringify(u)))}catch{}const p={type:"estimate",timestamp:i.timestamp,estimateId:i.estimateId,visitorId:i.visitorId,sessionId:i.sessionId,seq:i.seq,device:{type:s,browser:r,screen:`${window.innerWidth}x${window.innerHeight}`},spec:{...i.spec,typeName:Yo(!0),doorHingeDisplayName:v.cageType==="A_FRONT"?Rn():void 0,frameColorDisplayName:h,panelsSummary:a,optionsSummary:c},calculated:i.totals,meta:{elapsedSec:i.elapsedSec,referrer:document.referrer||"Direct",diffNote:i.diffNote,pageHistory:u}};console.log("[Log] GASへ送信中 (type: estimate)...",p),await fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),console.log("[Log] 見積もりログをスプレッドシートへ送信完了:",i.estimateId)}catch(n){console.warn("[Log] スプレッドシート送信エラー:",n)}}function zv(i){var e;try{const t=(e=Ke==null?void 0:Ke.system)==null?void 0:e.gasLogEndpointUrl;if(!t||typeof t!="string"||!t.startsWith("http"))return;const n={type:"calc_error",timestamp:new Date().toISOString(),visitorId:cd(),sessionId:hd(),errorMessage:(i==null?void 0:i.message)||String(i),errorStack:i!=null&&i.stack?String(i.stack).substring(0,1e3):"",spec:{...v},url:window.location.href,device:{userAgent:navigator.userAgent,screen:`${window.innerWidth}x${window.innerHeight}`}};console.warn("[Log] 🚨 エラー発生をGASへ通報中...",n),fetch(t,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n),keepalive:!0}).catch(()=>{})}catch(t){console.warn("[Log] エラーログ自動送信失敗:",t)}}Fv();xv();function Hv(){try{let i=null;const e=sessionStorage.getItem("kinato_sim_initial_state");if(e)try{i=JSON.parse(e),sessionStorage.removeItem("kinato_sim_initial_state"),console.log("[Sim] sessionStorageから初期設定を読み込みました:",i)}catch(t){console.warn("[Sim] sessionStorageのパースに失敗:",t)}if(!i&&window.location.search){const t=new URLSearchParams(window.location.search);i={},t.has("preset")&&(i.preset=t.get("preset")),t.has("w")&&(i.W=parseInt(t.get("w"),10)),t.has("d")&&(i.D=parseInt(t.get("d"),10)),t.has("h")&&(i.H=parseInt(t.get("h"),10)),t.has("type")&&(i.cageType=t.get("type").toUpperCase()),t.has("frame")&&(i.frameColor=t.get("frame")),t.has("foot")&&(i.footType=t.get("foot")),t.has("doorAntiFlex")&&(i.hasDoorAntiFlex=t.get("doorAntiFlex")==="1"||t.get("doorAntiFlex")==="true"),t.has("sideVentCover")&&(i.hasSideVentCover=t.get("sideVentCover")==="1"||t.get("sideVentCover")==="true"),t.has("perch")&&(i.hasPerch=t.get("perch")==="1"||t.get("perch")==="true"),t.has("roomDivider")&&(i.hasRoomDivider=t.get("roomDivider")==="1"||t.get("roomDivider")==="true"),t.has("floorReinf")&&(i.hasFloorReinforcement=t.get("floorReinf")==="1"||t.get("floorReinf")==="true"),t.has("topReinf")&&(i.hasTopReinforcement=t.get("topReinf")==="1"||t.get("topReinf")==="true"),t.has("frontWide")&&(i.frontWideFrame=t.get("frontWide")),window.history&&window.history.replaceState&&window.history.replaceState({},document.title,window.location.pathname),console.log("[Sim] URLパラメータから初期設定を読み込み、URLをクリーンにしました:",i)}if(!i||Object.keys(i).length===0)return;if(i.preset&&Array.isArray(Do)){const t=Do.find(n=>n.id===i.preset);t&&ld(t)}Number.isFinite(i.W)&&(v.W=i.W,xn&&(xn.value=v.W),vn&&(vn.value=v.W)),Number.isFinite(i.D)&&(v.D=i.D,Ns&&(Ns.value=v.D),Us&&(Us.value=v.D)),Number.isFinite(i.H)&&(v.H=i.H,yn&&(yn.value=v.H),Mn&&(Mn.value=v.H)),(i.cageType==="A"||i.cageType==="A_FRONT"||i.cageType==="A_FRAMED"||i.cageType==="C")&&(v.cageType=i.cageType,On&&si&&(On.classList.toggle("active",v.cageType==="A"),Et==null||Et.classList.toggle("active",v.cageType==="A_FRONT"),wt==null||wt.classList.toggle("active",v.cageType==="A_FRAMED"),si.classList.toggle("active",v.cageType==="C"),Zt&&(v.cageType==="A_FRAMED"?Zt.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":v.cageType==="A_FRONT"?(v.doorHingeSide=i.doorHingeSide||"left",Zt.textContent=`Type A 前開き 選択中 (${Rn()})`):Zt.textContent=v.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),Ri&&Ri.classList.toggle("hidden",v.cageType!=="C"),Vs())),(i.frameColor==="silver"||i.frameColor==="black")&&(v.frameColor=i.frameColor,$i&&qi&&($i.classList.toggle("active",v.frameColor==="silver"),qi.classList.toggle("active",v.frameColor==="black"))),(i.footType==="rubber"||i.footType==="caster")&&(v.footType=i.footType,ks&&(ks.checked=v.footType==="caster"),Zi&&Zi.classList.toggle("active",v.footType==="caster")),typeof i.hasDoorAntiFlex=="boolean"&&(v.hasDoorAntiFlex=i.hasDoorAntiFlex,Fn&&(Fn.checked=v.hasDoorAntiFlex),En&&En.classList.toggle("active",v.hasDoorAntiFlex)),typeof i.hasSideVentCover=="boolean"&&(v.hasSideVentCover=i.hasSideVentCover,ni&&(ni.checked=v.hasSideVentCover),Nn&&Nn.classList.toggle("active",v.hasSideVentCover)),typeof i.hasPerch=="boolean"&&(v.hasPerch=i.hasPerch,Ft&&(Ft.checked=v.hasPerch),Lt&&Lt.classList.toggle("active",v.hasPerch)),typeof i.hasRoomDivider=="boolean"&&(v.hasRoomDivider=i.hasRoomDivider,wn&&(wn.checked=v.hasRoomDivider),an&&an.classList.toggle("active",v.hasRoomDivider),Un&&Un.classList.toggle("hidden",!v.hasRoomDivider),v.hasRoomDivider&&Ft&&(v.hasPerch=!1,Ft.checked=!1,Ft.disabled=!0,Lt&&Lt.classList.add("disabled"))),typeof i.hasFloorReinforcement=="boolean"?(v.hasFloorReinforcement=i.hasFloorReinforcement,bn&&(bn.checked=v.hasFloorReinforcement)):Gs(),i.frontWideFrame&&(v.frontWideFrame=i.frontWideFrame,ri=i.frontWideFrame),rc(),Xo(),je(),bt.setViewPreset("iso",v),typeof Gl=="function"&&Gl()}catch(i){console.error("[Sim] 初期状態の反映エラー:",i)}}Hv();(function(){var t;const e=(t=Ke==null?void 0:Ke.system)==null?void 0:t.gasLogEndpointUrl;if(e.startsWith("http"))try{let n=[];try{const p=sessionStorage.getItem("cage_page_history");p&&(n=JSON.parse(p))}catch{}(n.length===0||n[n.length-1]!=="見積もりシステム")&&(n.push("見積もりシステム"),sessionStorage.setItem("cage_page_history",JSON.stringify(n)));let s=sessionStorage.getItem("cage_initial_referrer"),r=sessionStorage.getItem("cage_landing_page");if(!s){s=document.referrer||"Direct";const p=new URLSearchParams(window.location.search),d=p.get("origin")||p.get("utm_source")||p.get("ref");d&&(s=`${s} [Param:${d}]`),sessionStorage.setItem("cage_initial_referrer",s)}r||(r=window.location.pathname,sessionStorage.setItem("cage_landing_page",r));const o=navigator.userAgent;let a="PC";/iPhone/i.test(o)?a="iPhone":/iPad/i.test(o)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?a="iPad":/Android/i.test(o)?a="Android":/Mac/i.test(o)?a="Mac":/Win/i.test(o)&&(a="Windows");let l="Browser";/Chrome/i.test(o)&&!/Edge|Edg/i.test(o)?l="Chrome":/Safari/i.test(o)&&!/Chrome/i.test(o)?l="Safari":/Edge|Edg/i.test(o)?l="Edge":/Firefox/i.test(o)&&(l="Firefox");let c="直接 / お気に入り";const h=s.toLowerCase();h.includes("instagram.com")?c="Instagram":h.includes("t.co")||h.includes("twitter.com")||h.includes("x.com")?c="X (Twitter)":h.includes("google.")?c="Google検索":h.includes("yahoo.")?c="Yahoo!検索":h.includes("line.me")?c="LINE":h.includes("tiktok.com")?c="TikTok":s!=="Direct"&&(c="外部Webサイト");const u={type:"web_access",visitorId:Ku,sessionId:Il,referrer:s,referrerCategory:c,landingPage:r,pageHistory:n,pageCount:n.length,device:{type:a,browser:l,screen:`${window.innerWidth}x${window.innerHeight}`}};if(ud()&&kv){console.log("[Log] ローカル開発環境のため、シミュレーター訪問ログ送信をスキップしました。");return}fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(u),keepalive:!0}).then(()=>{console.log("[Log] シミュレーター訪問ログをGASへ送信完了 (セッション:",Il,")")}).catch(p=>{console.warn("[Log] シミュレーター訪問ログ送信エラー:",p)})}catch(n){console.warn("[Log] sendSimAccessLog エラー:",n)}})();
