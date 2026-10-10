(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rc="170",io={ROTATE:0,DOLLY:1,PAN:2},Zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gf=0,rh=1,_f=2,sd=1,od=2,di=3,Yi=0,qt=1,zt=2,Xi=0,so=1,Xo=2,ah=3,lh=4,vf=5,us=100,xf=101,Mf=102,yf=103,bf=104,Sf=200,Tf=201,wf=202,Ef=203,Ll=204,Dl=205,Cf=206,Af=207,Pf=208,Rf=209,Lf=210,Df=211,If=212,Ff=213,Uf=214,Il=0,Fl=1,Ul=2,lo=3,Nl=4,Bl=5,Ol=6,kl=7,rd=0,Nf=1,Bf=2,$i=0,Of=1,kf=2,Gf=3,ad=4,zf=5,Hf=6,Wf=7,ld=300,co=301,ho=302,Gl=303,zl=304,Pa=306,Hl=1e3,mn=1001,Wl=1002,$n=1003,Vf=1004,dr=1005,Vt=1006,Ga=1007,ps=1008,bi=1009,cd=1010,hd=1011,Jo=1012,Lc=1013,gs=1014,mi=1015,or=1016,Dc=1017,Ic=1018,uo=1020,ud=35902,dd=1021,fd=1022,Vn=1023,pd=1024,md=1025,oo=1026,fo=1027,gd=1028,Fc=1029,_d=1030,Uc=1031,Nc=1033,ea=33776,ta=33777,na=33778,ia=33779,Vl=35840,Xl=35841,$l=35842,Yl=35843,ql=36196,Zl=37492,Kl=37496,jl=37808,Jl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,oc=37816,rc=37817,ac=37818,lc=37819,cc=37820,hc=37821,sa=36492,uc=36494,dc=36495,vd=36283,fc=36284,pc=36285,mc=36286,Xf=3200,$f=3201,xd=0,Yf=1,Hi="",Tn="srgb",bo="srgb-linear",Ra="linear",ft="srgb",ws=7680,ch=519,qf=512,Zf=513,Kf=514,Md=515,jf=516,Jf=517,Qf=518,ep=519,gc=35044,hh="300 es",gi=2e3,da=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oa=Math.PI/180,fa=180/Math.PI;function vi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function tp(n,e){return(n%e+e)%e}function za(n,e,t){return(1-t)*n+t*e}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const np={DEG2RAD:oa};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*i-r*s+e.x,this.y=o*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,s,o,r,a,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,c,l)}set(e,t,i,s,o,r,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=o,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],p=i[5],_=i[8],v=s[0],g=s[3],u=s[6],w=s[1],y=s[4],M=s[7],I=s[2],R=s[5],C=s[8];return o[0]=r*v+a*w+c*I,o[3]=r*g+a*y+c*R,o[6]=r*u+a*M+c*C,o[1]=l*v+h*w+d*I,o[4]=l*g+h*y+d*R,o[7]=l*u+h*M+d*C,o[2]=f*v+p*w+_*I,o[5]=f*g+p*y+_*R,o[8]=f*u+p*M+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*a*l-i*o*h+i*a*c+s*o*l-s*r*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*r-a*l,f=a*c-h*o,p=l*o-r*c,_=t*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(s*l-h*i)*v,e[2]=(a*i-s*r)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*o-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(r*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+e,-s*l,s*c,-s*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Ze;function yd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ip(){const n=pa("canvas");return n.style.display="block",n}const uh={};function ko(n){n in uh||(uh[n]=!0,console.warn(n))}function sp(n,e,t){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function op(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(n.r=xi(n.r),n.g=xi(n.g),n.b=xi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(n.r=ro(n.r),n.g=ro(n.g),n.b=ro(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hi?Ra:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ro(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const dh=[.64,.33,.3,.6,.15,.06],fh=[.2126,.7152,.0722],ph=[.3127,.329],mh=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[bo]:{primaries:dh,whitePoint:ph,transfer:Ra,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:fh,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:dh,whitePoint:ph,transfer:ft,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:fh,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}});let Es;class ap{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=pa("canvas")),Es.width=e.width,Es.height=e.height;const i=Es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=xi(o[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lp=0;class bd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Wa(s[r].image)):o.push(Wa(s[r]))}else o=Wa(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ap.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cp=0;class en extends Ss{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=mn,s=mn,o=Vt,r=ps,a=Vn,c=bi,l=en.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=vi(),this.name="",this.source=new bd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hl:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hl:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=ld;en.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],_=c[9],v=c[2],g=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,M=(p+1)/2,I=(u+1)/2,R=(h+f)/4,C=(d+v)/4,L=(_+g)/4;return y>M&&y>I?y<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(y),s=R/i,o=C/i):M>I?M<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(M),i=R/s,o=L/s):I<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),i=C/o,s=L/o),this.set(i,s,o,t),this}let w=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(g-_)/w,this.y=(d-v)/w,this.z=(f-h)/w,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends Ss{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new en(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends hp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sd extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class up extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,r,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3];const f=o[r+0],p=o[r+1],_=o[r+2],v=o[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d!==v||c!==f||l!==p||h!==_){let g=1-a;const u=c*f+l*p+h*_+d*v,w=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const I=Math.sqrt(y),R=Math.atan2(I,u*w);g=Math.sin(g*R)/I,a=Math.sin(a*R)/I}const M=a*w;if(c=c*g+f*M,l=l*g+p*M,h=h*g+_*M,d=d*g+v*M,g===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=o[r],f=o[r+1],p=o[r+2],_=o[r+3];return e[t]=a*_+h*d+c*p-l*f,e[t+1]=c*_+h*f+l*d-a*p,e[t+2]=l*_+h*p+a*f-c*d,e[t+3]=h*_-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(o/2),f=c(i/2),p=c(s/2),_=c(o/2);switch(r){case"XYZ":this._x=f*h*d+l*p*_,this._y=l*p*d-f*h*_,this._z=l*h*_+f*p*d,this._w=l*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+l*p*_,this._y=l*p*d-f*h*_,this._z=l*h*_-f*p*d,this._w=l*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-l*p*_,this._y=l*p*d+f*h*_,this._z=l*h*_+f*p*d,this._w=l*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-l*p*_,this._y=l*p*d+f*h*_,this._z=l*h*_-f*p*d,this._w=l*h*d+f*p*_;break;case"YZX":this._x=f*h*d+l*p*_,this._y=l*p*d+f*h*_,this._z=l*h*_-f*p*d,this._w=l*h*d-f*p*_;break;case"XZY":this._x=f*h*d-l*p*_,this._y=l*p*d-f*h*_,this._z=l*h*_+f*p*d,this._w=l*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],r=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,r=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-i*l,this._z=o*h+r*l+i*c-s*a,this._w=r*h-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+i*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,r=e.y,a=e.z,c=e.w,l=2*(r*s-a*i),h=2*(a*t-o*s),d=2*(o*i-r*t);return this.x=t+c*l+r*d-a*h,this.y=i+c*h+a*l-o*d,this.z=s+c*d+o*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,r=t.x,a=t.y,c=t.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new P,_h=new vs;class rr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Nn):Nn.fromBufferAttribute(o,r),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fr.copy(i.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),pr.subVectors(this.max,Co),Cs.subVectors(e.a,Co),As.subVectors(e.b,Co),Ps.subVectors(e.c,Co),Pi.subVectors(As,Cs),Ri.subVectors(Ps,As),is.subVectors(Cs,Ps);let t=[0,-Pi.z,Pi.y,0,-Ri.z,Ri.y,0,-is.z,is.y,Pi.z,0,-Pi.x,Ri.z,0,-Ri.x,is.z,0,-is.x,-Pi.y,Pi.x,0,-Ri.y,Ri.x,0,-is.y,is.x,0];return!Xa(t,Cs,As,Ps,pr)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,Cs,As,Ps,pr))?!1:(mr.crossVectors(Pi,Ri),t=[mr.x,mr.y,mr.z],Xa(t,Cs,As,Ps,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new P,new P,new P,new P,new P,new P,new P,new P],Nn=new P,fr=new rr,Cs=new P,As=new P,Ps=new P,Pi=new P,Ri=new P,is=new P,Co=new P,pr=new P,mr=new P,ss=new P;function Xa(n,e,t,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){ss.fromArray(n,o);const a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),c=e.dot(ss),l=t.dot(ss),h=i.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const dp=new rr,Ao=new P,$a=new P;class La{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dp.setFromPoints(e).getCenter(i);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const t=Ao.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ao,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add($a)),this.expandByPoint(Ao.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new P,Ya=new P,gr=new P,Li=new P,qa=new P,_r=new P,Za=new P;class Bc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ya.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Ya);const o=e.distanceTo(t)*.5,r=-this.direction.dot(gr),a=Li.dot(this.direction),c=-Li.dot(gr),l=Li.lengthSq(),h=Math.abs(1-r*r);let d,f,p,_;if(h>0)if(d=r*c-a,f=r*a-c,_=o*h,d>=0)if(f>=-_)if(f<=_){const v=1/h;d*=v,f*=v,p=d*(d+r*f+2*a)+f*(r*d+f+2*c)+l}else f=o,d=Math.max(0,-(r*f+a)),p=-d*d+f*(f+2*c)+l;else f=-o,d=Math.max(0,-(r*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-_?(d=Math.max(0,-(-r*o+a)),f=d>0?-o:Math.min(Math.max(-o,-c),o),p=-d*d+f*(f+2*c)+l):f<=_?(d=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+l):(d=Math.max(0,-(r*o+a)),f=d>0?o:Math.min(Math.max(-o,-c),o),p=-d*d+f*(f+2*c)+l);else f=r>0?-o:o,d=Math.max(0,-(r*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ya).addScaledVector(gr,f),p}intersectSphere(e,t){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),s=li.dot(li)-i*i,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(o=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(o=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,s,o){qa.subVectors(t,e),_r.subVectors(i,e),Za.crossVectors(qa,_r);let r=this.direction.dot(Za),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Li.subVectors(this.origin,e);const c=a*this.direction.dot(_r.crossVectors(Li,_r));if(c<0)return null;const l=a*this.direction.dot(qa.cross(Li));if(l<0||c+l>r)return null;const h=-a*Li.dot(Za);return h<0?null:this.at(h/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,s,o,r,a,c,l,h,d,f,p,_,v,g){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,c,l,h,d,f,p,_,v,g)}set(e,t,i,s,o,r,a,c,l,h,d,f,p,_,v,g){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=o,u[5]=r,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=v,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),o=1/Rs.setFromMatrixColumn(e,1).length(),r=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=r*h,p=r*d,_=a*h,v=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+_*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=_+p*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*h,p=c*d,_=l*h,v=l*d;t[0]=f+v*a,t[4]=_*a-p,t[8]=r*l,t[1]=r*d,t[5]=r*h,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=r*c}else if(e.order==="ZXY"){const f=c*h,p=c*d,_=l*h,v=l*d;t[0]=f-v*a,t[4]=-r*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=r*h,t[9]=v-f*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const f=r*h,p=r*d,_=a*h,v=a*d;t[0]=c*h,t[4]=_*l-p,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,p=r*l,_=a*c,v=a*l;t[0]=c*h,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=r*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=r*c,p=r*l,_=a*c,v=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+v,t[5]=r*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,pp)}lookAt(e,t,i){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Di.crossVectors(i,cn),Di.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Di.crossVectors(i,cn)),Di.normalize(),vr.crossVectors(cn,Di),s[0]=Di.x,s[4]=vr.x,s[8]=cn.x,s[1]=Di.y,s[5]=vr.y,s[9]=cn.y,s[2]=Di.z,s[6]=vr.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],p=i[13],_=i[2],v=i[6],g=i[10],u=i[14],w=i[3],y=i[7],M=i[11],I=i[15],R=s[0],C=s[4],L=s[8],S=s[12],x=s[1],T=s[5],O=s[9],F=s[13],U=s[2],N=s[6],z=s[10],j=s[14],W=s[3],ie=s[7],J=s[11],ee=s[15];return o[0]=r*R+a*x+c*U+l*W,o[4]=r*C+a*T+c*N+l*ie,o[8]=r*L+a*O+c*z+l*J,o[12]=r*S+a*F+c*j+l*ee,o[1]=h*R+d*x+f*U+p*W,o[5]=h*C+d*T+f*N+p*ie,o[9]=h*L+d*O+f*z+p*J,o[13]=h*S+d*F+f*j+p*ee,o[2]=_*R+v*x+g*U+u*W,o[6]=_*C+v*T+g*N+u*ie,o[10]=_*L+v*O+g*z+u*J,o[14]=_*S+v*F+g*j+u*ee,o[3]=w*R+y*x+M*U+I*W,o[7]=w*C+y*T+M*N+I*ie,o[11]=w*L+y*O+M*z+I*J,o[15]=w*S+y*F+M*j+I*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],r=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],g=e[11],u=e[15];return _*(+o*c*d-s*l*d-o*a*f+i*l*f+s*a*p-i*c*p)+v*(+t*c*p-t*l*f+o*r*f-s*r*p+s*l*h-o*c*h)+g*(+t*l*d-t*a*p-o*r*d+i*r*p+o*a*h-i*l*h)+u*(-s*a*h-t*c*d+t*a*f+s*r*d-i*r*f+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],g=e[14],u=e[15],w=d*g*l-v*f*l+v*c*p-a*g*p-d*c*u+a*f*u,y=_*f*l-h*g*l-_*c*p+r*g*p+h*c*u-r*f*u,M=h*v*l-_*d*l+_*a*p-r*v*p-h*a*u+r*d*u,I=_*d*c-h*v*c-_*a*f+r*v*f+h*a*g-r*d*g,R=t*w+i*y+s*M+o*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=w*C,e[1]=(v*f*o-d*g*o-v*s*p+i*g*p+d*s*u-i*f*u)*C,e[2]=(a*g*o-v*c*o+v*s*l-i*g*l-a*s*u+i*c*u)*C,e[3]=(d*c*o-a*f*o-d*s*l+i*f*l+a*s*p-i*c*p)*C,e[4]=y*C,e[5]=(h*g*o-_*f*o+_*s*p-t*g*p-h*s*u+t*f*u)*C,e[6]=(_*c*o-r*g*o-_*s*l+t*g*l+r*s*u-t*c*u)*C,e[7]=(r*f*o-h*c*o+h*s*l-t*f*l-r*s*p+t*c*p)*C,e[8]=M*C,e[9]=(_*d*o-h*v*o-_*i*p+t*v*p+h*i*u-t*d*u)*C,e[10]=(r*v*o-_*a*o+_*i*l-t*v*l-r*i*u+t*a*u)*C,e[11]=(h*a*o-r*d*o-h*i*l+t*d*l+r*i*p-t*a*p)*C,e[12]=I*C,e[13]=(h*v*s-_*d*s+_*i*f-t*v*f-h*i*g+t*d*g)*C,e[14]=(_*a*s-r*v*s-_*i*c+t*v*c+r*i*g-t*a*g)*C,e[15]=(r*d*s-h*a*s+h*i*c-t*d*c-r*i*f+t*a*f)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,r=e.x,a=e.y,c=e.z,l=o*r,h=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,r){return this.set(1,i,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,r=t._y,a=t._z,c=t._w,l=o+o,h=r+r,d=a+a,f=o*l,p=o*h,_=o*d,v=r*h,g=r*d,u=a*d,w=c*l,y=c*h,M=c*d,I=i.x,R=i.y,C=i.z;return s[0]=(1-(v+u))*I,s[1]=(p+M)*I,s[2]=(_-y)*I,s[3]=0,s[4]=(p-M)*R,s[5]=(1-(f+u))*R,s[6]=(g+w)*R,s[7]=0,s[8]=(_+y)*C,s[9]=(g-w)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=Rs.set(s[0],s[1],s[2]).length();const r=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Bn.copy(this);const l=1/o,h=1/r,d=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,t.setFromRotationMatrix(Bn),i.x=o,i.y=r,i.z=a,this}makePerspective(e,t,i,s,o,r,a=gi){const c=this.elements,l=2*o/(t-e),h=2*o/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(a===gi)p=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===da)p=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,o,r,a=gi){const c=this.elements,l=1/(t-e),h=1/(i-s),d=1/(r-o),f=(t+e)*l,p=(i+s)*h;let _,v;if(a===gi)_=(r+o)*d,v=-2*d;else if(a===da)_=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Rs=new P,Bn=new ot,fp=new P(0,0,0),pp=new P(1,1,1),Di=new P,vr=new P,cn=new P,vh=new ot,xh=new vs;class Et{constructor(e=0,t=0,i=0,s=Et.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ht(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xh.setFromEuler(this),this.setFromQuaternion(xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Et.DEFAULT_ORDER="XYZ";class Td{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mp=0;const Mh=new P,Ls=new vs,ci=new ot,xr=new P,Po=new P,gp=new P,_p=new vs,yh=new P(1,0,0),bh=new P(0,1,0),Sh=new P(0,0,1),Th={type:"added"},vp={type:"removed"},Ds={type:"childadded",child:null},Ka={type:"childremoved",child:null};class Rt extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new P,t=new Et,i=new vs,s=new P(1,1,1);function o(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ze}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Td,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return Mh.copy(e).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xr.copy(e):xr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Po,xr,this.up):ci.lookAt(xr,Po,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ci),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Th),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vp),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Th),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,_p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),d=r(e.shapes),f=r(e.skeletons),p=r(e.animations),_=r(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new P(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new P,hi=new P,ja=new P,ui=new P,Is=new P,Fs=new P,wh=new P,Ja=new P,Qa=new P,el=new P,tl=new gt,nl=new gt,il=new gt;class En{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),On.subVectors(e,t),s.cross(On);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){On.subVectors(s,t),hi.subVectors(i,t),ja.subVectors(e,t);const r=On.dot(On),a=On.dot(hi),c=On.dot(ja),l=hi.dot(hi),h=hi.dot(ja),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,p=(l*c-a*h)*f,_=(r*h-a*c)*f;return o.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,s,o,r,a,c){return this.getBarycoord(e,t,i,s,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ui.x),c.addScaledVector(r,ui.y),c.addScaledVector(a,ui.z),c)}static getInterpolatedAttribute(e,t,i,s,o,r){return tl.setScalar(0),nl.setScalar(0),il.setScalar(0),tl.fromBufferAttribute(e,t),nl.fromBufferAttribute(e,i),il.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(tl,o.x),r.addScaledVector(nl,o.y),r.addScaledVector(il,o.z),r}static isFrontFacing(e,t,i,s){return On.subVectors(i,t),hi.subVectors(e,t),On.cross(hi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return En.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let r,a;Is.subVectors(s,i),Fs.subVectors(o,i),Ja.subVectors(e,i);const c=Is.dot(Ja),l=Fs.dot(Ja);if(c<=0&&l<=0)return t.copy(i);Qa.subVectors(e,s);const h=Is.dot(Qa),d=Fs.dot(Qa);if(h>=0&&d<=h)return t.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(i).addScaledVector(Is,r);el.subVectors(e,o);const p=Is.dot(el),_=Fs.dot(el);if(_>=0&&p<=_)return t.copy(o);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(Fs,a);const g=h*_-p*d;if(g<=0&&d-h>=0&&p-_>=0)return wh.subVectors(o,s),a=(d-h)/(d-h+(p-_)),t.copy(s).addScaledVector(wh,a);const u=1/(g+v+f);return r=v*u,a=f*u,t.copy(i).addScaledVector(Is,r).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=tp(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,r=2*i-o;this.r=sl(r,o,e+1/3),this.g=sl(r,o,e),this.b=sl(r,o,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Tn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const i=wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return nt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Ht(Yt.r*255,0,255))*65536+Math.round(Ht(Yt.g*255,0,255))*256+Math.round(Ht(Yt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Yt.copy(this),t);const i=Yt.r,s=Yt.g,o=Yt.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=h<=.5?d/(r+a):d/(2-r-a),r){case i:c=(s-o)/d+(s<o?6:0);break;case s:c=(o-i)/d+2;break;case o:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Tn){nt.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,s=Yt.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Mr);const i=za(Ii.h,Mr.h,t),s=za(Ii.s,Mr.s,t),o=za(Ii.l,Mr.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ke;Ke.NAMES=wd;let xp=0;class es extends Ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=vi(),this.name="",this.blending=so,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Dl,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ll&&(i.blendSrc=this.blendSrc),this.blendDst!==Dl&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oc extends es{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Et,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new P,yr=new Te;class Yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gc,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),o=pt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}}class Ed extends Yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cd extends Yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends Yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mp=0;const yn=new ot,ol=new Rt,Us=new P,hn=new rr,Ro=new rr,Bt=new P;class In extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?Cd:Ed)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ze().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Zt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];hn.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new La);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(hn.min,Ro.min),hn.expandByPoint(Bt),Bt.addVectors(hn.max,Ro.max),hn.expandByPoint(Bt)):(hn.expandByPoint(Ro.min),hn.expandByPoint(Ro.max))}hn.getCenter(i);let s=0;for(let o=0,r=e.count;o<r;o++)Bt.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Bt.fromBufferAttribute(a,l),c&&(Us.fromBufferAttribute(e,l),Bt.add(Us)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new P,c[L]=new P;const l=new P,h=new P,d=new P,f=new Te,p=new Te,_=new Te,v=new P,g=new P;function u(L,S,x){l.fromBufferAttribute(i,L),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,x),f.fromBufferAttribute(o,L),p.fromBufferAttribute(o,S),_.fromBufferAttribute(o,x),h.sub(l),d.sub(l),p.sub(f),_.sub(f);const T=1/(p.x*_.y-_.x*p.y);isFinite(T)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(T),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(T),a[L].add(v),a[S].add(v),a[x].add(v),c[L].add(g),c[S].add(g),c[x].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,S=w.length;L<S;++L){const x=w[L],T=x.start,O=x.count;for(let F=T,U=T+O;F<U;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new P,M=new P,I=new P,R=new P;function C(L){I.fromBufferAttribute(s,L),R.copy(I);const S=a[L];y.copy(S),y.sub(I.multiplyScalar(I.dot(S))).normalize(),M.crossVectors(R,S);const T=M.dot(c[L])<0?-1:1;r.setXYZW(L,y.x,y.y,y.z,T)}for(let L=0,S=w.length;L<S;++L){const x=w[L],T=x.start,O=x.count;for(let F=T,U=T+O;F<U;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new P,o=new P,r=new P,a=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let p=0,_=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let u=0;u<h;u++)f[_++]=l[p++]}return new Yn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const o=e.morphAttributes;for(const l in o){const h=[],d=o[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new ot,os=new Bc,br=new La,Ch=new P,Sr=new P,Tr=new P,wr=new P,rl=new P,Er=new P,Ah=new P,Cr=new P;class Z extends Rt{constructor(e=new In,t=new Oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){Er.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],d=o[c];h!==0&&(rl.fromBufferAttribute(d,e),r?Er.addScaledVector(rl,h):Er.addScaledVector(rl.sub(t),h))}t.add(Er)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(o),os.copy(e.ray).recast(e.near),!(br.containsPoint(os.origin)===!1&&(os.intersectSphere(br,Ch)===null||os.origin.distanceToSquared(Ch)>(e.far-e.near)**2))&&(Eh.copy(o).invert(),os.copy(e.ray).applyMatrix4(Eh),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,v=f.length;_<v;_++){const g=f[_],u=r[g.materialIndex],w=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=w,I=y;M<I;M+=3){const R=a.getX(M),C=a.getX(M+1),L=a.getX(M+2);s=Ar(this,u,e,i,l,h,d,R,C,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=_,u=v;g<u;g+=3){const w=a.getX(g),y=a.getX(g+1),M=a.getX(g+2);s=Ar(this,r,e,i,l,h,d,w,y,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,v=f.length;_<v;_++){const g=f[_],u=r[g.materialIndex],w=Math.max(g.start,p.start),y=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let M=w,I=y;M<I;M+=3){const R=M,C=M+1,L=M+2;s=Ar(this,u,e,i,l,h,d,R,C,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let g=_,u=v;g<u;g+=3){const w=g,y=g+1,M=g+2;s=Ar(this,r,e,i,l,h,d,w,y,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function yp(n,e,t,i,s,o,r,a){let c;if(e.side===qt?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,e.side===Yi,a),c===null)return null;Cr.copy(a),Cr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Cr);return l<t.near||l>t.far?null:{distance:l,point:Cr.clone(),object:n}}function Ar(n,e,t,i,s,o,r,a,c,l){n.getVertexPosition(a,Sr),n.getVertexPosition(c,Tr),n.getVertexPosition(l,wr);const h=yp(n,e,t,i,Sr,Tr,wr,Ah);if(h){const d=new P;En.getBarycoord(Ah,Sr,Tr,wr,d),s&&(h.uv=En.getInterpolatedAttribute(s,a,c,l,d,new Te)),o&&(h.uv1=En.getInterpolatedAttribute(o,a,c,l,d,new Te)),r&&(h.normal=En.getInterpolatedAttribute(r,a,c,l,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new P,materialIndex:0};En.getNormal(Sr,Tr,wr,f.normal),h.face=f,h.barycoord=d}return h}class ze extends In{constructor(e=1,t=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,r,o,0),_("z","y","x",1,-1,i,t,-e,r,o,1),_("x","z","y",1,1,e,i,t,s,r,2),_("x","z","y",1,-1,e,i,-t,s,r,3),_("x","y","z",1,-1,e,t,i,s,o,4),_("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function _(v,g,u,w,y,M,I,R,C,L,S){const x=M/C,T=I/L,O=M/2,F=I/2,U=R/2,N=C+1,z=L+1;let j=0,W=0;const ie=new P;for(let J=0;J<z;J++){const ee=J*T-F;for(let ge=0;ge<N;ge++){const ve=ge*x-O;ie[v]=ve*w,ie[g]=ee*y,ie[u]=U,l.push(ie.x,ie.y,ie.z),ie[v]=0,ie[g]=0,ie[u]=R>0?1:-1,h.push(ie.x,ie.y,ie.z),d.push(ge/C),d.push(1-J/L),j+=1}}for(let J=0;J<L;J++)for(let ee=0;ee<C;ee++){const ge=f+ee+N*J,ve=f+ee+N*(J+1),q=f+(ee+1)+N*(J+1),se=f+(ee+1)+N*J;c.push(ge,ve,se),c.push(ve,q,se),W+=6}a.addGroup(p,W,S),p+=W,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ze(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=po(n[t]);for(const s in i)e[s]=i[s]}return e}function bp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ad(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Sp={clone:po,merge:jt};var Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends es{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pd extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new P,Ph=new Te,Rh=new Te;class rn extends Pd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,Ph,Rh),t.subVectors(Rh,Ph)}setViewOffset(e,t,i,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,t-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=-90,Bs=1;class Ep extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Ns,Bs,e,t);s.layers=this.layers,this.add(s);const o=new rn(Ns,Bs,e,t);o.layers=this.layers,this.add(o);const r=new rn(Ns,Bs,e,t);r.layers=this.layers,this.add(r);const a=new rn(Ns,Bs,e,t);a.layers=this.layers,this.add(a);const c=new rn(Ns,Bs,e,t);c.layers=this.layers,this.add(c);const l=new rn(Ns,Bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,r,a,c]=t;for(const l of t)this.remove(l);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===da)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,r),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Rd extends en{constructor(e,t,i,s,o,r,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:co,super(e,t,i,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cp extends _s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Rd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ze(5,5,5),o=new qn({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Xi});o.uniforms.tEquirect.value=t;const r=new Z(s,o),a=t.minFilter;return t.minFilter===ps&&(t.minFilter=Vt),new Ep(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(o)}}const al=new P,Ap=new P,Pp=new Ze;class Gi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=al.subVectors(i,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(al),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Pp.getNormalMatrix(e),s=this.coplanarPoint(al).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new La,Pr=new P;class kc{constructor(e=new Gi,t=new Gi,i=new Gi,s=new Gi,o=new Gi,r=new Gi){this.planes=[e,t,i,s,o,r]}set(e,t,i,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){const i=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],p=s[8],_=s[9],v=s[10],g=s[11],u=s[12],w=s[13],y=s[14],M=s[15];if(i[0].setComponents(c-o,f-l,g-p,M-u).normalize(),i[1].setComponents(c+o,f+l,g+p,M+u).normalize(),i[2].setComponents(c+r,f+h,g+_,M+w).normalize(),i[3].setComponents(c-r,f-h,g-_,M-w).normalize(),i[4].setComponents(c-a,f-d,g-v,M-y).normalize(),t===gi)i[5].setComponents(c+a,f+d,g+v,M+y).normalize();else if(t===da)i[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Pr.x=s.normal.x>0?e.max.x:e.min.x,Pr.y=s.normal.y>0?e.max.y:e.min.y,Pr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ld(){let n=null,e=!1,t=null,i=null;function s(o,r){t(o,r),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Rp(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class ti extends In{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=e/a,f=t/c,p=[],_=[],v=[],g=[];for(let u=0;u<h;u++){const w=u*f-r;for(let y=0;y<l;y++){const M=y*d-o;_.push(M,-w,0),v.push(0,0,1),g.push(y/a),g.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<a;w++){const y=w+l*u,M=w+l*(u+1),I=w+1+l*(u+1),R=w+1+l*u;p.push(y,M,R),p.push(M,I,R)}this.setIndex(p),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dp=`#ifdef USE_ALPHAHASH
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
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bp=`#ifdef USE_AOMAP
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
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp=`#ifdef USE_BATCHING
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
#endif`,Gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,em=`#define PI 3.141592653589793
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
} // validated`,tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nm=`vec3 transformedNormal = objectNormal;
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
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vm=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
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
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
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
#endif`,Pm=`struct PhysicalMaterial {
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
}`,Rm=`
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gm=`#if defined( USE_POINTS_UV )
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
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
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
#endif`,e0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m0=`float getShadowMask() {
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
}`,g0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,M0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L0=`uniform sampler2D t2D;
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
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
}`,B0=`#if DEPTH_PACKING == 3200
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
}`,O0=`#define DISTANCE
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
}`,k0=`#define DISTANCE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
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
}`,W0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,X0=`uniform vec3 diffuse;
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
}`,$0=`#define LAMBERT
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
}`,Y0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,Z0=`#define MATCAP
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
}`,K0=`#define NORMAL
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
}`,j0=`#define NORMAL
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
}`,J0=`#define PHONG
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
}`,Q0=`#define PHONG
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
}`,eg=`#define STANDARD
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
}`,tg=`#define STANDARD
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
}`,ng=`#define TOON
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
}`,ig=`#define TOON
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
}`,sg=`uniform float size;
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
}`,og=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,ag=`uniform vec3 color;
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
}`,lg=`uniform float rotation;
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
}`,cg=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Lp,alphahash_pars_fragment:Dp,alphamap_fragment:Ip,alphamap_pars_fragment:Fp,alphatest_fragment:Up,alphatest_pars_fragment:Np,aomap_fragment:Bp,aomap_pars_fragment:Op,batching_pars_vertex:kp,batching_vertex:Gp,begin_vertex:zp,beginnormal_vertex:Hp,bsdfs:Wp,iridescence_fragment:Vp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Zp,color_fragment:Kp,color_pars_fragment:jp,color_pars_vertex:Jp,color_vertex:Qp,common:em,cube_uv_reflection_fragment:tm,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:sm,emissivemap_fragment:om,emissivemap_pars_fragment:rm,colorspace_fragment:am,colorspace_pars_fragment:lm,envmap_fragment:cm,envmap_common_pars_fragment:hm,envmap_pars_fragment:um,envmap_pars_vertex:dm,envmap_physical_pars_fragment:Sm,envmap_vertex:fm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:_m,gradientmap_pars_fragment:vm,lightmap_pars_fragment:xm,lights_lambert_fragment:Mm,lights_lambert_pars_fragment:ym,lights_pars_begin:bm,lights_toon_fragment:Tm,lights_toon_pars_fragment:wm,lights_phong_fragment:Em,lights_phong_pars_fragment:Cm,lights_physical_fragment:Am,lights_physical_pars_fragment:Pm,lights_fragment_begin:Rm,lights_fragment_maps:Lm,lights_fragment_end:Dm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:Nm,map_fragment:Bm,map_pars_fragment:Om,map_particle_fragment:km,map_particle_pars_fragment:Gm,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Hm,morphinstance_vertex:Wm,morphcolor_vertex:Vm,morphnormal_vertex:Xm,morphtarget_pars_vertex:$m,morphtarget_vertex:Ym,normal_fragment_begin:qm,normal_fragment_maps:Zm,normal_pars_fragment:Km,normal_pars_vertex:jm,normal_vertex:Jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:e0,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:s0,packing:o0,premultiplied_alpha_fragment:r0,project_vertex:a0,dithering_fragment:l0,dithering_pars_fragment:c0,roughnessmap_fragment:h0,roughnessmap_pars_fragment:u0,shadowmap_pars_fragment:d0,shadowmap_pars_vertex:f0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:g0,skinning_pars_vertex:_0,skinning_vertex:v0,skinnormal_vertex:x0,specularmap_fragment:M0,specularmap_pars_fragment:y0,tonemapping_fragment:b0,tonemapping_pars_fragment:S0,transmission_fragment:T0,transmission_pars_fragment:w0,uv_pars_fragment:E0,uv_pars_vertex:C0,uv_vertex:A0,worldpos_vertex:P0,background_vert:R0,background_frag:L0,backgroundCube_vert:D0,backgroundCube_frag:I0,cube_vert:F0,cube_frag:U0,depth_vert:N0,depth_frag:B0,distanceRGBA_vert:O0,distanceRGBA_frag:k0,equirect_vert:G0,equirect_frag:z0,linedashed_vert:H0,linedashed_frag:W0,meshbasic_vert:V0,meshbasic_frag:X0,meshlambert_vert:$0,meshlambert_frag:Y0,meshmatcap_vert:q0,meshmatcap_frag:Z0,meshnormal_vert:K0,meshnormal_frag:j0,meshphong_vert:J0,meshphong_frag:Q0,meshphysical_vert:eg,meshphysical_frag:tg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:sg,points_frag:og,shadow_vert:rg,shadow_frag:ag,sprite_vert:lg,sprite_frag:cg},Pe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Qn={basic:{uniforms:jt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:jt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:jt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:jt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:jt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:jt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:jt([Pe.points,Pe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:jt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:jt([Pe.common,Pe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:jt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:jt([Pe.sprite,Pe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:jt([Pe.common,Pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:jt([Pe.lights,Pe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Qn.physical={uniforms:jt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Rr={r:0,b:0,g:0},as=new Et,hg=new ot;function ug(n,e,t,i,s,o,r){const a=new Ke(0);let c=o===!0?0:1,l,h,d=null,f=0,p=null;function _(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function v(w){let y=!1;const M=_(w);M===null?u(a,c):M&&M.isColor&&(u(M,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,y){const M=_(y);M&&(M.isCubeTexture||M.mapping===Pa)?(h===void 0&&(h=new Z(new ze(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:po(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),as.copy(y.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hg.makeRotationFromEuler(as)),h.material.toneMapped=nt.getTransfer(M.colorSpace)!==ft,(d!==M||f!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Z(new ti(2,2),new qn({name:"BackgroundMaterial",uniforms:po(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=nt.getTransfer(M.colorSpace)!==ft,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function u(w,y){w.getRGB(Rr,Ad(n)),i.buffers.color.setClear(Rr.r,Rr.g,Rr.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),c=y,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,u(a,c)},render:v,addToRenderList:g}}function dg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let o=s,r=!1;function a(x,T,O,F,U){let N=!1;const z=d(F,O,T);o!==z&&(o=z,l(o.object)),N=p(x,F,O,U),N&&_(x,F,O,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,M(x,T,O,F),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function d(x,T,O){const F=O.wireframe===!0;let U=i[x.id];U===void 0&&(U={},i[x.id]=U);let N=U[T.id];N===void 0&&(N={},U[T.id]=N);let z=N[F];return z===void 0&&(z=f(c()),N[F]=z),z}function f(x){const T=[],O=[],F=[];for(let U=0;U<t;U++)T[U]=0,O[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:F,object:x,attributes:{},index:null}}function p(x,T,O,F){const U=o.attributes,N=T.attributes;let z=0;const j=O.getAttributes();for(const W in j)if(j[W].location>=0){const J=U[W];let ee=N[W];if(ee===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),J===void 0||J.attribute!==ee||ee&&J.data!==ee.data)return!0;z++}return o.attributesNum!==z||o.index!==F}function _(x,T,O,F){const U={},N=T.attributes;let z=0;const j=O.getAttributes();for(const W in j)if(j[W].location>=0){let J=N[W];J===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(J=x.instanceColor));const ee={};ee.attribute=J,J&&J.data&&(ee.data=J.data),U[W]=ee,z++}o.attributes=U,o.attributesNum=z,o.index=F}function v(){const x=o.newAttributes;for(let T=0,O=x.length;T<O;T++)x[T]=0}function g(x){u(x,0)}function u(x,T){const O=o.newAttributes,F=o.enabledAttributes,U=o.attributeDivisors;O[x]=1,F[x]===0&&(n.enableVertexAttribArray(x),F[x]=1),U[x]!==T&&(n.vertexAttribDivisor(x,T),U[x]=T)}function w(){const x=o.newAttributes,T=o.enabledAttributes;for(let O=0,F=T.length;O<F;O++)T[O]!==x[O]&&(n.disableVertexAttribArray(O),T[O]=0)}function y(x,T,O,F,U,N,z){z===!0?n.vertexAttribIPointer(x,T,O,U,N):n.vertexAttribPointer(x,T,O,F,U,N)}function M(x,T,O,F){v();const U=F.attributes,N=O.getAttributes(),z=T.defaultAttributeValues;for(const j in N){const W=N[j];if(W.location>=0){let ie=U[j];if(ie===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor)),ie!==void 0){const J=ie.normalized,ee=ie.itemSize,ge=e.get(ie);if(ge===void 0)continue;const ve=ge.buffer,q=ge.type,se=ge.bytesPerElement,xe=q===n.INT||q===n.UNSIGNED_INT||ie.gpuType===Lc;if(ie.isInterleavedBufferAttribute){const ue=ie.data,fe=ue.stride,Se=ie.offset;if(ue.isInstancedInterleavedBuffer){for(let Me=0;Me<W.locationSize;Me++)u(W.location+Me,ue.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Me=0;Me<W.locationSize;Me++)g(W.location+Me);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Me=0;Me<W.locationSize;Me++)y(W.location+Me,ee/W.locationSize,q,J,fe*se,(Se+ee/W.locationSize*Me)*se,xe)}else{if(ie.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)u(W.location+ue,ie.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ue=0;ue<W.locationSize;ue++)g(W.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ue=0;ue<W.locationSize;ue++)y(W.location+ue,ee/W.locationSize,q,J,ee*se,ee/W.locationSize*ue*se,xe)}}else if(z!==void 0){const J=z[j];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(W.location,J);break;case 3:n.vertexAttrib3fv(W.location,J);break;case 4:n.vertexAttrib4fv(W.location,J);break;default:n.vertexAttrib1fv(W.location,J)}}}}w()}function I(){L();for(const x in i){const T=i[x];for(const O in T){const F=T[O];for(const U in F)h(F[U].object),delete F[U];delete T[O]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const T=i[x.id];for(const O in T){const F=T[O];for(const U in F)h(F[U].object),delete F[U];delete T[O]}delete i[x.id]}function C(x){for(const T in i){const O=i[T];if(O[x.id]===void 0)continue;const F=O[x.id];for(const U in F)h(F[U].object),delete F[U];delete O[x.id]}}function L(){S(),r=!0,o!==s&&(o=s,l(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function fg(n,e,t){let i;function s(l){i=l}function o(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function r(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];t.update(p,i,1)}function c(l,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)r(l[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v]*f[v];t.update(_,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function pg(n,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Vn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==bi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==mi&&!L)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:I,maxSamples:R}}function mg(n){const e=this;let t=null,i=0,s=!1,o=!1;const r=new Gi,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,u=n.get(d);if(!s||_===null||_.length===0||o&&!g)o?h(null):l();else{const w=o?0:i,y=w*4;let M=u.clippingState||null;c.value=M,M=h(_,f,y,p);for(let I=0;I!==y;++I)M[I]=t[I];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,_){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=c.value,_!==!0||g===null){const u=p+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<u)&&(g=new Float32Array(u));for(let y=0,M=p;y!==v;++y,M+=4)r.copy(d[y]).applyMatrix4(w,a),r.normal.toArray(g,M),g[M+3]=r.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function gg(n){let e=new WeakMap;function t(r,a){return a===Gl?r.mapping=co:a===zl&&(r.mapping=ho),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Gl||a===zl)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Cp(c.height);return l.fromEquirectangularTexture(n,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Dd extends Pd{constructor(e=-1,t=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,r=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ks=4,Lh=[.125,.215,.35,.446,.526,.582],ds=20,ll=new Dd,Dh=new Ke;let cl=null,hl=0,ul=0,dl=!1;const hs=(1+Math.sqrt(5))/2,Os=1/hs,Ih=[new P(-hs,Os,0),new P(hs,Os,0),new P(-Os,0,hs),new P(Os,0,hs),new P(0,hs,-Os),new P(0,hs,Os),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class _c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cl,hl,ul),this._renderer.xr.enabled=dl,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===co||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:or,format:Vn,colorSpace:bo,depthBuffer:!1},s=Fh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_g(o)),this._blurMaterial=vg(o,e,t)}return s}_compileMaterial(e){const t=new Z(this._lodPlanes[0],e);this._renderer.compile(t,ll)}_sceneToCubeUV(e,t,i,s){const a=new rn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Dh),h.toneMapping=$i,h.autoClear=!1;const p=new Oc({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),_=new Z(new ze,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(Dh),v=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):w===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const y=this._cubeSize;Lr(s,w*y,u>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===co||e.mapping===ho;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Z(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;Lr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(r,ll)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Ih[(s-o-1)%Ih.length];this._blur(e,o-1,o,r,a)}t.autoClear=i}_blur(e,t,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,s,"latitudinal",o),this._halfBlur(r,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Z(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*ds-1),v=o/_,g=isFinite(o)?1+Math.floor(h*v):ds;g>ds&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ds}`);const u=[];let w=0;for(let C=0;C<ds;++C){const L=C/v,S=Math.exp(-L*L/2);u.push(S),C===0?w+=S:C<g&&(w+=2*S)}for(let C=0;C<u.length;C++)u[C]=u[C]/w;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const M=this._sizeLods[s],I=3*M*(s>y-Ks?s-y+Ks:0),R=4*(this._cubeSize-M);Lr(t,I,R,3*M,2*M),c.setRenderTarget(t),c.render(d,ll)}}function _g(n){const e=[],t=[],i=[];let s=n;const o=n-Ks+1+Lh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let c=1/a;r>n-Ks?c=Lh[r-n+Ks-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,v=3,g=2,u=1,w=new Float32Array(v*_*p),y=new Float32Array(g*_*p),M=new Float32Array(u*_*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,L=R>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(S,v*_*R),y.set(f,g*_*R);const x=[R,R,R,R,R,R];M.set(x,u*_*R)}const I=new In;I.setAttribute("position",new Yn(w,v)),I.setAttribute("uv",new Yn(y,g)),I.setAttribute("faceIndex",new Yn(M,u)),e.push(I),s>Ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fh(n,e,t){const i=new _s(n,e,t);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function vg(n,e,t){const i=new Float32Array(ds),s=new P(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Uh(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Nh(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function xg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Gl||c===zl,h=c===co||c===ho;if(l||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new _c(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new _c(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Mg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ko("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function yg(n,e,t,i){const s={},o=new WeakMap;function r(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let g=0,u=v.length;g<u;g++)e.remove(v[g])}f.removeEventListener("dispose",r),delete s[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const v=p[_];for(let g=0,u=v.length;g<u;g++)e.update(v[g],n.ARRAY_BUFFER)}}function l(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let y=0,M=w.length;y<M;y+=3){const I=w[y+0],R=w[y+1],C=w[y+2];f.push(I,R,R,C,C,I)}}else if(_!==void 0){const w=_.array;v=_.version;for(let y=0,M=w.length/3-1;y<M;y+=3){const I=y+0,R=y+1,C=y+2;f.push(I,R,R,C,C,I)}}else return;const g=new(yd(f)?Cd:Ed)(f,1);g.version=v;const u=o.get(d);u&&e.remove(u),o.set(d,g)}function h(d){const f=o.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function bg(n,e,t){let i;function s(f){i=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,p){n.drawElements(i,p,o,f*r),t.update(p,i,1)}function l(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,o,f*r,_),t.update(p,i,_))}function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,f,0,_);let g=0;for(let u=0;u<_;u++)g+=p[u];t.update(g,i,1)}function d(f,p,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<f.length;u++)l(f[u]/r,p[u],v[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,o,f,0,v,0,_);let u=0;for(let w=0;w<_;w++)u+=p[w]*v[w];t.update(u,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Sg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Tg(n,e,t){const i=new WeakMap,s=new gt;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),g===!0&&(M=3);let I=a.attributes.position.count*M,R=1;I>e.maxTextureSize&&(R=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*R*4*d),L=new Sd(C,I,R,d);L.type=mi,L.needsUpdate=!0;const S=M*4;for(let T=0;T<d;T++){const O=u[T],F=w[T],U=y[T],N=I*R*4*T;for(let z=0;z<O.count;z++){const j=z*S;_===!0&&(s.fromBufferAttribute(O,z),C[N+j+0]=s.x,C[N+j+1]=s.y,C[N+j+2]=s.z,C[N+j+3]=0),v===!0&&(s.fromBufferAttribute(F,z),C[N+j+4]=s.x,C[N+j+5]=s.y,C[N+j+6]=s.z,C[N+j+7]=0),g===!0&&(s.fromBufferAttribute(U,z),C[N+j+8]=s.x,C[N+j+9]=s.y,C[N+j+10]=s.z,C[N+j+11]=U.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new Te(I,R)},i.set(a,f),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let _=0;for(let g=0;g<l.length;g++)_+=l[g];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function wg(n,e,t,i){let s=new WeakMap;function o(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:r}}class Id extends en{constructor(e,t,i,s,o,r,a,c,l,h=oo){if(h!==oo&&h!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===oo&&(i=gs),i===void 0&&h===fo&&(i=uo),super(null,s,o,r,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$n,this.minFilter=c!==void 0?c:$n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fd=new en,Bh=new Id(1,1),Ud=new Sd,Nd=new up,Bd=new Rd,Oh=[],kh=[],Gh=new Float32Array(16),zh=new Float32Array(9),Hh=new Float32Array(4);function So(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let o=Oh[s];if(o===void 0&&(o=new Float32Array(s),Oh[s]=o),e!==0){i.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,n[r].toArray(o,a)}return o}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Da(n,e){let t=kh[e];t===void 0&&(t=new Int32Array(e),kh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Eg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function Rg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Hh.set(i),n.uniformMatrix2fv(this.addr,!1,Hh),Nt(t,i)}}function Lg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;zh.set(i),n.uniformMatrix3fv(this.addr,!1,zh),Nt(t,i)}}function Dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Gh.set(i),n.uniformMatrix4fv(this.addr,!1,Gh),Nt(t,i)}}function Ig(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function Bg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function zg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Bh.compareFunction=Md,o=Bh):o=Fd,t.setTexture2D(e||o,s)}function Hg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Nd,s)}function Wg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Bd,s)}function Vg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ud,s)}function Xg(n){switch(n){case 5126:return Eg;case 35664:return Cg;case 35665:return Ag;case 35666:return Pg;case 35674:return Rg;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ig;case 35667:case 35671:return Fg;case 35668:case 35672:return Ug;case 35669:case 35673:return Ng;case 5125:return Bg;case 36294:return Og;case 36295:return kg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Vg}}function $g(n,e){n.uniform1fv(this.addr,e)}function Yg(n,e){const t=So(e,this.size,2);n.uniform2fv(this.addr,t)}function qg(n,e){const t=So(e,this.size,3);n.uniform3fv(this.addr,t)}function Zg(n,e){const t=So(e,this.size,4);n.uniform4fv(this.addr,t)}function Kg(n,e){const t=So(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jg(n,e){const t=So(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jg(n,e){const t=So(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qg(n,e){n.uniform1iv(this.addr,e)}function e_(n,e){n.uniform2iv(this.addr,e)}function t_(n,e){n.uniform3iv(this.addr,e)}function n_(n,e){n.uniform4iv(this.addr,e)}function i_(n,e){n.uniform1uiv(this.addr,e)}function s_(n,e){n.uniform2uiv(this.addr,e)}function o_(n,e){n.uniform3uiv(this.addr,e)}function r_(n,e){n.uniform4uiv(this.addr,e)}function a_(n,e,t){const i=this.cache,s=e.length,o=Da(t,s);Ut(i,o)||(n.uniform1iv(this.addr,o),Nt(i,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Fd,o[r])}function l_(n,e,t){const i=this.cache,s=e.length,o=Da(t,s);Ut(i,o)||(n.uniform1iv(this.addr,o),Nt(i,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Nd,o[r])}function c_(n,e,t){const i=this.cache,s=e.length,o=Da(t,s);Ut(i,o)||(n.uniform1iv(this.addr,o),Nt(i,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Bd,o[r])}function h_(n,e,t){const i=this.cache,s=e.length,o=Da(t,s);Ut(i,o)||(n.uniform1iv(this.addr,o),Nt(i,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Ud,o[r])}function u_(n){switch(n){case 5126:return $g;case 35664:return Yg;case 35665:return qg;case 35666:return Zg;case 35674:return Kg;case 35675:return jg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return o_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return h_}}class d_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xg(t.type)}}class f_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u_(t.type)}}class p_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],i)}}}const fl=/(\w+)(\])?(\[|\.)?/g;function Wh(n,e){n.seq.push(e),n.map[e.id]=e}function m_(n,e,t){const i=n.name,s=i.length;for(fl.lastIndex=0;;){const o=fl.exec(i),r=fl.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Wh(t,l===void 0?new d_(a,n,e):new f_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new p_(a),Wh(t,d)),t=d}}}class ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);m_(o,r,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&i.push(r)}return i}}function Vh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const g_=37297;let __=0;function v_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}const Xh=new Ze;function x_(n){nt._getMatrix(Xh,nt.workingColorSpace,n);const e=`mat3( ${Xh.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Ra:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $h(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+v_(n.getShaderSource(e),r)}else return s}function M_(n,e){const t=x_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function y_(n,e){let t;switch(e){case Of:t="Linear";break;case kf:t="Reinhard";break;case Gf:t="Cineon";break;case ad:t="ACESFilmic";break;case Hf:t="AgX";break;case Wf:t="Neutral";break;case zf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dr=new P;function b_(){nt.getLuminanceCoefficients(Dr);const n=Dr.x.toFixed(4),e=Dr.y.toFixed(4),t=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function T_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function w_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(e,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:n.getAttribLocation(e,r),locationSize:a}}return t}function Go(n){return n!==""}function Yh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(n){return n.replace(E_,A_)}const C_=new Map;function A_(n,e){let t=Qe[e];if(t===void 0){const i=C_.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vc(t)}const P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(n){return n.replace(P_,R_)}function R_(n,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Kh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function L_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===od?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function D_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case co:case ho:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ho:e="ENVMAP_MODE_REFRACTION";break}return e}function F_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rd:e="ENVMAP_BLENDING_MULTIPLY";break;case Nf:e="ENVMAP_BLENDING_MIX";break;case Bf:e="ENVMAP_BLENDING_ADD";break}return e}function U_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function N_(n,e,t,i){const s=n.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=L_(t),l=D_(t),h=I_(t),d=F_(t),f=U_(t),p=S_(t),_=T_(o),v=s.createProgram();let g,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Go).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Go).join(`
`),u.length>0&&(u+=`
`)):(g=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),u=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?Qe.tonemapping_pars_fragment:"",t.toneMapping!==$i?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,M_("linearToOutputTexel",t.outputColorSpace),b_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Go).join(`
`)),r=vc(r),r=Yh(r,t),r=qh(r,t),a=vc(a),a=Yh(a,t),a=qh(a,t),r=Zh(r),a=Zh(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=w+g+r,M=w+u+a,I=Vh(s,s.VERTEX_SHADER,y),R=Vh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,I),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(T){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(I).trim(),U=s.getShaderInfoLog(R).trim();let N=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,R);else{const j=$h(s,I,"vertex"),W=$h(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+j+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||U==="")&&(z=!1);z&&(T.diagnostics={runnable:N,programLog:O,vertexShader:{log:F,prefix:g},fragmentShader:{log:U,prefix:u}})}s.deleteShader(I),s.deleteShader(R),L=new ra(s,v),S=w_(s,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,g_)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=__++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=R,this}let B_=0;class O_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new k_(e),t.set(e,i)),i}}class k_{constructor(e){this.id=B_++,this.code=e,this.usedTimes=0}}function G_(n,e,t,i,s,o,r){const a=new Td,c=new O_,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,x,T,O,F){const U=O.fog,N=F.geometry,z=S.isMeshStandardMaterial?O.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),W=j&&j.mapping===Pa?j.image.height:null,ie=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=J!==void 0?J.length:0;let ge=0;N.morphAttributes.position!==void 0&&(ge=1),N.morphAttributes.normal!==void 0&&(ge=2),N.morphAttributes.color!==void 0&&(ge=3);let ve,q,se,xe;if(ie){const ct=Qn[ie];ve=ct.vertexShader,q=ct.fragmentShader}else ve=S.vertexShader,q=S.fragmentShader,c.update(S),se=c.getVertexShaderID(S),xe=c.getFragmentShaderID(S);const ue=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Se=F.isInstancedMesh===!0,Me=F.isBatchedMesh===!0,Fe=!!S.map,ce=!!S.matcap,he=!!j,D=!!S.aoMap,me=!!S.lightMap,k=!!S.bumpMap,Q=!!S.normalMap,$=!!S.displacementMap,ae=!!S.emissiveMap,oe=!!S.metalnessMap,E=!!S.roughnessMap,b=S.anisotropy>0,B=S.clearcoat>0,G=S.dispersion>0,Y=S.iridescence>0,K=S.sheen>0,_e=S.transmission>0,pe=b&&!!S.anisotropyMap,ye=B&&!!S.clearcoatMap,Ce=B&&!!S.clearcoatNormalMap,le=B&&!!S.clearcoatRoughnessMap,be=Y&&!!S.iridescenceMap,Le=Y&&!!S.iridescenceThicknessMap,Ue=K&&!!S.sheenColorMap,we=K&&!!S.sheenRoughnessMap,He=!!S.specularMap,Ge=!!S.specularColorMap,je=!!S.specularIntensityMap,H=_e&&!!S.transmissionMap,Ae=_e&&!!S.thicknessMap,re=!!S.gradientMap,de=!!S.alphaMap,De=S.alphaTest>0,Re=!!S.alphaHash,Ve=!!S.extensions;let vt=$i;S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Xt={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:ve,fragmentShader:q,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Me,batchingColor:Me&&F._colorsTexture!==null,instancing:Se,instancingColor:Se&&F.instanceColor!==null,instancingMorph:Se&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:bo,alphaToCoverage:!!S.alphaToCoverage,map:Fe,matcap:ce,envMap:he,envMapMode:he&&j.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:me,bumpMap:k,normalMap:Q,displacementMap:f&&$,emissiveMap:ae,normalMapObjectSpace:Q&&S.normalMapType===Yf,normalMapTangentSpace:Q&&S.normalMapType===xd,metalnessMap:oe,roughnessMap:E,anisotropy:b,anisotropyMap:pe,clearcoat:B,clearcoatMap:ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:le,dispersion:G,iridescence:Y,iridescenceMap:be,iridescenceThicknessMap:Le,sheen:K,sheenColorMap:Ue,sheenRoughnessMap:we,specularMap:He,specularColorMap:Ge,specularIntensityMap:je,transmission:_e,transmissionMap:H,thicknessMap:Ae,gradientMap:re,opaque:S.transparent===!1&&S.blending===so&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:De,alphaHash:Re,combine:S.combine,mapUv:Fe&&v(S.map.channel),aoMapUv:D&&v(S.aoMap.channel),lightMapUv:me&&v(S.lightMap.channel),bumpMapUv:k&&v(S.bumpMap.channel),normalMapUv:Q&&v(S.normalMap.channel),displacementMapUv:$&&v(S.displacementMap.channel),emissiveMapUv:ae&&v(S.emissiveMap.channel),metalnessMapUv:oe&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:pe&&v(S.anisotropyMap.channel),clearcoatMapUv:ye&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(S.sheenRoughnessMap.channel),specularMapUv:He&&v(S.specularMap.channel),specularColorMapUv:Ge&&v(S.specularColorMap.channel),specularIntensityMapUv:je&&v(S.specularIntensityMap.channel),transmissionMapUv:H&&v(S.transmissionMap.channel),thicknessMapUv:Ae&&v(S.thicknessMap.channel),alphaMapUv:de&&v(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Q||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Fe||de),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:Fe&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zt,flipSided:S.side===qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function u(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)x.push(T),x.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(w(x,S),y(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function w(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function y(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){const x=_[S.type];let T;if(x){const O=Qn[x];T=Sp.clone(O.uniforms)}else T=S.uniforms;return T}function I(S,x){let T;for(let O=0,F=h.length;O<F;O++){const U=h[O];if(U.cacheKey===x){T=U,++T.usedTimes;break}}return T===void 0&&(T=new N_(n,x,S,o),h.push(T)),T}function R(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:M,acquireProgram:I,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:L}}function z_(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function H_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jh(){const n=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function r(d,f,p,_,v,g){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:g},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=g),e++,u}function a(d,f,p,_,v,g){const u=r(d,f,p,_,v,g);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):t.push(u)}function c(d,f,p,_,v,g){const u=r(d,f,p,_,v,g);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||H_),i.length>1&&i.sort(f||jh),s.length>1&&s.sort(f||jh)}function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function W_(){let n=new WeakMap;function e(i,s){const o=n.get(i);let r;return o===void 0?(r=new Jh,n.set(i,[r])):s>=o.length?(r=new Jh,o.push(r)):r=o[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function V_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ke};break;case"SpotLight":t={position:new P,direction:new P,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function X_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $_=0;function Y_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function q_(n){const e=new V_,t=X_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,o=new ot,r=new ot;function a(l){let h=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,v=0,g=0,u=0,w=0,y=0,M=0,I=0,R=0,C=0;l.sort(Y_);for(let S=0,x=l.length;S<x;S++){const T=l[S],O=T.color,F=T.intensity,U=T.distance,N=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=O.r*F,d+=O.g*F,f+=O.b*F;else if(T.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(T.sh.coefficients[z],F);C++}else if(T.isDirectionalLight){const z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const j=T.shadow,W=t.get(T);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=T.shadow.matrix,w++}i.directional[p]=z,p++}else if(T.isSpotLight){const z=e.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(O).multiplyScalar(F),z.distance=U,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,i.spot[v]=z;const j=T.shadow;if(T.map&&(i.spotLightMap[I]=T.map,I++,j.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[v]=j.matrix,T.castShadow){const W=t.get(T);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=N,M++}v++}else if(T.isRectAreaLight){const z=e.get(T);z.color.copy(O).multiplyScalar(F),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=z,g++}else if(T.isPointLight){const z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){const j=T.shadow,W=t.get(T);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=N,i.pointShadowMatrix[_]=T.shadow.matrix,y++}i.point[_]=z,_++}else if(T.isHemisphereLight){const z=e.get(T);z.skyColor.copy(T.color).multiplyScalar(F),z.groundColor.copy(T.groundColor).multiplyScalar(F),i.hemi[u]=z,u++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==u||L.numDirectionalShadows!==w||L.numPointShadows!==y||L.numSpotShadows!==M||L.numSpotMaps!==I||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,L.directionalLength=p,L.pointLength=_,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=u,L.numDirectionalShadows=w,L.numPointShadows=y,L.numSpotShadows=M,L.numSpotMaps=I,L.numLightProbes=C,i.version=$_++)}function c(l,h){let d=0,f=0,p=0,_=0,v=0;const g=h.matrixWorldInverse;for(let u=0,w=l.length;u<w;u++){const y=l[u];if(y.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(y.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),r.identity(),o.copy(y.matrixWorld),o.premultiply(g),r.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),_++}else if(y.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:i}}function Qh(n){const e=new q_(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function o(h){t.push(h)}function r(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Z_(n){let e=new WeakMap;function t(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new Qh(n),e.set(s,[a])):o>=r.length?(a=new Qh(n),r.push(a)):a=r[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class K_ extends es{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j_ extends es{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q_=`uniform sampler2D shadow_pass;
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
}`;function e1(n,e,t){let i=new kc;const s=new Te,o=new Te,r=new gt,a=new K_({depthPacking:$f}),c=new j_,l={},h=t.maxTextureSize,d={[Yi]:qt,[qt]:Yi,[zt]:zt},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:J_,fragmentShader:Q_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new In;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Z(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sd;let u=this.type;this.render=function(R,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const S=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Xi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=u!==di&&this.type===di,U=u===di&&this.type!==di;for(let N=0,z=R.length;N<z;N++){const j=R[N],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ie=W.getFrameExtents();if(s.multiply(ie),o.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/ie.x),s.x=o.x*ie.x,W.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/ie.y),s.y=o.y*ie.y,W.mapSize.y=o.y)),W.map===null||F===!0||U===!0){const ee=this.type!==di?{minFilter:$n,magFilter:$n}:{};W.map!==null&&W.map.dispose(),W.map=new _s(s.x,s.y,ee),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const J=W.getViewportCount();for(let ee=0;ee<J;ee++){const ge=W.getViewport(ee);r.set(o.x*ge.x,o.y*ge.y,o.x*ge.z,o.y*ge.w),O.viewport(r),W.updateMatrices(j,ee),i=W.getFrustum(),M(C,L,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===di&&w(W,L),W.needsUpdate=!1}u=this.type,g.needsUpdate=!1,n.setRenderTarget(S,x,T)};function w(R,C){const L=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new _s(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,L,f,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,L,p,v,null)}function y(R,C,L,S){let x=null;const T=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)x=T;else if(x=L.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=x.uuid,F=C.uuid;let U=l[O];U===void 0&&(U={},l[O]=U);let N=U[F];N===void 0&&(N=x.clone(),U[F]=N,C.addEventListener("dispose",I)),x=N}if(x.visible=C.visible,x.wireframe=C.wireframe,S===di?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=n.properties.get(x);O.light=L}return x}function M(R,C,L,S,x){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===di)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const F=e.update(R),U=R.material;if(Array.isArray(U)){const N=F.groups;for(let z=0,j=N.length;z<j;z++){const W=N[z],ie=U[W.materialIndex];if(ie&&ie.visible){const J=y(R,ie,S,x);R.onBeforeShadow(n,R,C,L,F,J,W),n.renderBufferDirect(L,null,F,J,R,W),R.onAfterShadow(n,R,C,L,F,J,W)}}}else if(U.visible){const N=y(R,U,S,x);R.onBeforeShadow(n,R,C,L,F,N,null),n.renderBufferDirect(L,null,F,N,R,null),R.onAfterShadow(n,R,C,L,F,N,null)}}const O=R.children;for(let F=0,U=O.length;F<U;F++)M(O[F],C,L,S,x)}function I(R){R.target.removeEventListener("dispose",I);for(const L in l){const S=l[L],x=R.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const t1={[Il]:Fl,[Ul]:Ol,[Nl]:kl,[lo]:Bl,[Fl]:Il,[Ol]:Ul,[kl]:Nl,[Bl]:lo};function n1(n,e){function t(){let H=!1;const Ae=new gt;let re=null;const de=new gt(0,0,0,0);return{setMask:function(De){re!==De&&!H&&(n.colorMask(De,De,De,De),re=De)},setLocked:function(De){H=De},setClear:function(De,Re,Ve,vt,Xt){Xt===!0&&(De*=vt,Re*=vt,Ve*=vt),Ae.set(De,Re,Ve,vt),de.equals(Ae)===!1&&(n.clearColor(De,Re,Ve,vt),de.copy(Ae))},reset:function(){H=!1,re=null,de.set(-1,0,0,0)}}}function i(){let H=!1,Ae=!1,re=null,de=null,De=null;return{setReversed:function(Re){if(Ae!==Re){const Ve=e.get("EXT_clip_control");Ae?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const vt=De;De=null,this.setClear(vt)}Ae=Re},getReversed:function(){return Ae},setTest:function(Re){Re?ue(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(Re){re!==Re&&!H&&(n.depthMask(Re),re=Re)},setFunc:function(Re){if(Ae&&(Re=t1[Re]),de!==Re){switch(Re){case Il:n.depthFunc(n.NEVER);break;case Fl:n.depthFunc(n.ALWAYS);break;case Ul:n.depthFunc(n.LESS);break;case lo:n.depthFunc(n.LEQUAL);break;case Nl:n.depthFunc(n.EQUAL);break;case Bl:n.depthFunc(n.GEQUAL);break;case Ol:n.depthFunc(n.GREATER);break;case kl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=Re}},setLocked:function(Re){H=Re},setClear:function(Re){De!==Re&&(Ae&&(Re=1-Re),n.clearDepth(Re),De=Re)},reset:function(){H=!1,re=null,de=null,De=null,Ae=!1}}}function s(){let H=!1,Ae=null,re=null,de=null,De=null,Re=null,Ve=null,vt=null,Xt=null;return{setTest:function(ct){H||(ct?ue(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(ct){Ae!==ct&&!H&&(n.stencilMask(ct),Ae=ct)},setFunc:function(ct,Fn,oi){(re!==ct||de!==Fn||De!==oi)&&(n.stencilFunc(ct,Fn,oi),re=ct,de=Fn,De=oi)},setOp:function(ct,Fn,oi){(Re!==ct||Ve!==Fn||vt!==oi)&&(n.stencilOp(ct,Fn,oi),Re=ct,Ve=Fn,vt=oi)},setLocked:function(ct){H=ct},setClear:function(ct){Xt!==ct&&(n.clearStencil(ct),Xt=ct)},reset:function(){H=!1,Ae=null,re=null,de=null,De=null,Re=null,Ve=null,vt=null,Xt=null}}}const o=new t,r=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,p=[],_=null,v=!1,g=null,u=null,w=null,y=null,M=null,I=null,R=null,C=new Ke(0,0,0),L=0,S=!1,x=null,T=null,O=null,F=null,U=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=j>=2);let ie=null,J={};const ee=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),ve=new gt().fromArray(ee),q=new gt().fromArray(ge);function se(H,Ae,re,de){const De=new Uint8Array(4),Re=n.createTexture();n.bindTexture(H,Re),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<re;Ve++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Ae+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return Re}const xe={};xe[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),r.setFunc(lo),k(!1),Q(rh),ue(n.CULL_FACE),D(Xi);function ue(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function fe(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function Se(H,Ae){return d[H]!==Ae?(n.bindFramebuffer(H,Ae),d[H]=Ae,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ae),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Me(H,Ae){let re=p,de=!1;if(H){re=f.get(Ae),re===void 0&&(re=[],f.set(Ae,re));const De=H.textures;if(re.length!==De.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,Ve=De.length;Re<Ve;Re++)re[Re]=n.COLOR_ATTACHMENT0+Re;re.length=De.length,de=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,de=!0);de&&n.drawBuffers(re)}function Fe(H){return _!==H?(n.useProgram(H),_=H,!0):!1}const ce={[us]:n.FUNC_ADD,[xf]:n.FUNC_SUBTRACT,[Mf]:n.FUNC_REVERSE_SUBTRACT};ce[yf]=n.MIN,ce[bf]=n.MAX;const he={[Sf]:n.ZERO,[Tf]:n.ONE,[wf]:n.SRC_COLOR,[Ll]:n.SRC_ALPHA,[Lf]:n.SRC_ALPHA_SATURATE,[Pf]:n.DST_COLOR,[Cf]:n.DST_ALPHA,[Ef]:n.ONE_MINUS_SRC_COLOR,[Dl]:n.ONE_MINUS_SRC_ALPHA,[Rf]:n.ONE_MINUS_DST_COLOR,[Af]:n.ONE_MINUS_DST_ALPHA,[Df]:n.CONSTANT_COLOR,[If]:n.ONE_MINUS_CONSTANT_COLOR,[Ff]:n.CONSTANT_ALPHA,[Uf]:n.ONE_MINUS_CONSTANT_ALPHA};function D(H,Ae,re,de,De,Re,Ve,vt,Xt,ct){if(H===Xi){v===!0&&(fe(n.BLEND),v=!1);return}if(v===!1&&(ue(n.BLEND),v=!0),H!==vf){if(H!==g||ct!==S){if((u!==us||M!==us)&&(n.blendEquation(n.FUNC_ADD),u=us,M=us),ct)switch(H){case so:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xo:n.blendFunc(n.ONE,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case so:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}w=null,y=null,I=null,R=null,C.set(0,0,0),L=0,g=H,S=ct}return}De=De||Ae,Re=Re||re,Ve=Ve||de,(Ae!==u||De!==M)&&(n.blendEquationSeparate(ce[Ae],ce[De]),u=Ae,M=De),(re!==w||de!==y||Re!==I||Ve!==R)&&(n.blendFuncSeparate(he[re],he[de],he[Re],he[Ve]),w=re,y=de,I=Re,R=Ve),(vt.equals(C)===!1||Xt!==L)&&(n.blendColor(vt.r,vt.g,vt.b,Xt),C.copy(vt),L=Xt),g=H,S=!1}function me(H,Ae){H.side===zt?fe(n.CULL_FACE):ue(n.CULL_FACE);let re=H.side===qt;Ae&&(re=!re),k(re),H.blending===so&&H.transparent===!1?D(Xi):D(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),o.setMask(H.colorWrite);const de=H.stencilWrite;a.setTest(de),de&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ae(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function k(H){x!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),x=H)}function Q(H){H!==gf?(ue(n.CULL_FACE),H!==T&&(H===rh?n.cullFace(n.BACK):H===_f?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),T=H}function $(H){H!==O&&(z&&n.lineWidth(H),O=H)}function ae(H,Ae,re){H?(ue(n.POLYGON_OFFSET_FILL),(F!==Ae||U!==re)&&(n.polygonOffset(Ae,re),F=Ae,U=re)):fe(n.POLYGON_OFFSET_FILL)}function oe(H){H?ue(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function E(H){H===void 0&&(H=n.TEXTURE0+N-1),ie!==H&&(n.activeTexture(H),ie=H)}function b(H,Ae,re){re===void 0&&(ie===null?re=n.TEXTURE0+N-1:re=ie);let de=J[re];de===void 0&&(de={type:void 0,texture:void 0},J[re]=de),(de.type!==H||de.texture!==Ae)&&(ie!==re&&(n.activeTexture(re),ie=re),n.bindTexture(H,Ae||xe[H]),de.type=H,de.texture=Ae)}function B(){const H=J[ie];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(H){ve.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ve.copy(H))}function we(H){q.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),q.copy(H))}function He(H,Ae){let re=l.get(Ae);re===void 0&&(re=new WeakMap,l.set(Ae,re));let de=re.get(H);de===void 0&&(de=n.getUniformBlockIndex(Ae,H.name),re.set(H,de))}function Ge(H,Ae){const de=l.get(Ae).get(H);c.get(Ae)!==de&&(n.uniformBlockBinding(Ae,de,H.__bindingPointIndex),c.set(Ae,de))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,J={},d={},f=new WeakMap,p=[],_=null,v=!1,g=null,u=null,w=null,y=null,M=null,I=null,R=null,C=new Ke(0,0,0),L=0,S=!1,x=null,T=null,O=null,F=null,U=null,ve.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ue,disable:fe,bindFramebuffer:Se,drawBuffers:Me,useProgram:Fe,setBlending:D,setMaterial:me,setFlipSided:k,setCullFace:Q,setLineWidth:$,setPolygonOffset:ae,setScissorTest:oe,activeTexture:E,bindTexture:b,unbindTexture:B,compressedTexImage2D:G,compressedTexImage3D:Y,texImage2D:be,texImage3D:Le,updateUBOMapping:He,uniformBlockBinding:Ge,texStorage2D:Ce,texStorage3D:le,texSubImage2D:K,texSubImage3D:_e,compressedTexSubImage2D:pe,compressedTexSubImage3D:ye,scissor:Ue,viewport:we,reset:je}}function eu(n,e,t,i){const s=i1(i);switch(t){case dd:return n*e;case pd:return n*e;case md:return n*e*2;case gd:return n*e/s.components*s.byteLength;case Fc:return n*e/s.components*s.byteLength;case _d:return n*e*2/s.components*s.byteLength;case Uc:return n*e*2/s.components*s.byteLength;case fd:return n*e*3/s.components*s.byteLength;case Vn:return n*e*4/s.components*s.byteLength;case Nc:return n*e*4/s.components*s.byteLength;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xl:case Yl:return Math.max(n,16)*Math.max(e,8)/4;case Vl:case $l:return Math.max(n,8)*Math.max(e,8)/2;case ql:case Zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case sa:case uc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vd:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pc:case mc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i1(n){switch(n){case bi:case cd:return{byteLength:1,components:1};case Jo:case hd:case or:return{byteLength:2,components:1};case Dc:case Ic:return{byteLength:2,components:4};case gs:case Lc:case mi:return{byteLength:4,components:1};case ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function s1(n,e,t,i,s,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,b){return p?new OffscreenCanvas(E,b):pa("canvas")}function v(E,b,B){let G=1;const Y=oe(E);if((Y.width>B||Y.height>B)&&(G=B/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const K=Math.floor(G*Y.width),_e=Math.floor(G*Y.height);d===void 0&&(d=_(K,_e));const pe=b?_(K,_e):d;return pe.width=K,pe.height=_e,pe.getContext("2d").drawImage(E,0,0,K,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+K+"x"+_e+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function g(E){return E.generateMipmaps}function u(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(E,b,B,G,Y=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=b;if(b===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8)),b===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),b===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8)),b===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),b===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),b===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),b===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),b===n.RGBA){const _e=Y?Ra:nt.getTransfer(G);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=_e===ft?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(E,b){let B;return E?b===null||b===gs||b===uo?B=n.DEPTH24_STENCIL8:b===mi?B=n.DEPTH32F_STENCIL8:b===Jo&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===gs||b===uo?B=n.DEPTH_COMPONENT24:b===mi?B=n.DEPTH_COMPONENT32F:b===Jo&&(B=n.DEPTH_COMPONENT16),B}function I(E,b){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==$n&&E.minFilter!==Vt?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function R(E){const b=E.target;b.removeEventListener("dispose",R),L(b),b.isVideoTexture&&h.delete(b)}function C(E){const b=E.target;b.removeEventListener("dispose",C),x(b)}function L(E){const b=i.get(E);if(b.__webglInit===void 0)return;const B=E.source,G=f.get(B);if(G){const Y=G[b.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(E),Object.keys(G).length===0&&f.delete(B)}i.remove(E)}function S(E){const b=i.get(E);n.deleteTexture(b.__webglTexture);const B=E.source,G=f.get(B);delete G[b.__cacheKey],r.memory.textures--}function x(E){const b=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(b.__webglFramebuffer[G]))for(let Y=0;Y<b.__webglFramebuffer[G].length;Y++)n.deleteFramebuffer(b.__webglFramebuffer[G][Y]);else n.deleteFramebuffer(b.__webglFramebuffer[G]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[G])}else{if(Array.isArray(b.__webglFramebuffer))for(let G=0;G<b.__webglFramebuffer.length;G++)n.deleteFramebuffer(b.__webglFramebuffer[G]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let G=0;G<b.__webglColorRenderbuffer.length;G++)b.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[G]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=E.textures;for(let G=0,Y=B.length;G<Y;G++){const K=i.get(B[G]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),r.memory.textures--),i.remove(B[G])}i.remove(E)}let T=0;function O(){T=0}function F(){const E=T;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),T+=1,E}function U(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function N(E,b){const B=i.get(E);if(E.isVideoTexture&&$(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,E,b);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+b)}function z(E,b){const B=i.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+b)}function j(E,b){const B=i.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,b);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+b)}function W(E,b){const B=i.get(E);if(E.version>0&&B.__version!==E.version){se(B,E,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+b)}const ie={[Hl]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[Wl]:n.MIRRORED_REPEAT},J={[$n]:n.NEAREST,[Vf]:n.NEAREST_MIPMAP_NEAREST,[dr]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[Ga]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},ee={[qf]:n.NEVER,[ep]:n.ALWAYS,[Zf]:n.LESS,[Md]:n.LEQUAL,[Kf]:n.EQUAL,[Qf]:n.GEQUAL,[jf]:n.GREATER,[Jf]:n.NOTEQUAL};function ge(E,b){if(b.type===mi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Vt||b.magFilter===Ga||b.magFilter===dr||b.magFilter===ps||b.minFilter===Vt||b.minFilter===Ga||b.minFilter===dr||b.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ie[b.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ie[b.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ie[b.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,J[b.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,J[b.minFilter]),b.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$n||b.minFilter!==dr&&b.minFilter!==ps||b.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ve(E,b){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",R));const G=b.source;let Y=f.get(G);Y===void 0&&(Y={},f.set(G,Y));const K=U(b);if(K!==E.__cacheKey){Y[K]===void 0&&(Y[K]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,B=!0),Y[K].usedTimes++;const _e=Y[E.__cacheKey];_e!==void 0&&(Y[E.__cacheKey].usedTimes--,_e.usedTimes===0&&S(b)),E.__cacheKey=K,E.__webglTexture=Y[K].texture}return B}function q(E,b,B){let G=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(G=n.TEXTURE_3D);const Y=ve(E,b),K=b.source;t.bindTexture(G,E.__webglTexture,n.TEXTURE0+B);const _e=i.get(K);if(K.version!==_e.__version||Y===!0){t.activeTexture(n.TEXTURE0+B);const pe=nt.getPrimaries(nt.workingColorSpace),ye=b.colorSpace===Hi?null:nt.getPrimaries(b.colorSpace),Ce=b.colorSpace===Hi||pe===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let le=v(b.image,!1,s.maxTextureSize);le=ae(b,le);const be=o.convert(b.format,b.colorSpace),Le=o.convert(b.type);let Ue=y(b.internalFormat,be,Le,b.colorSpace,b.isVideoTexture);ge(G,b);let we;const He=b.mipmaps,Ge=b.isVideoTexture!==!0,je=_e.__version===void 0||Y===!0,H=K.dataReady,Ae=I(b,le);if(b.isDepthTexture)Ue=M(b.format===fo,b.type),je&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,Ue,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,be,Le,null));else if(b.isDataTexture)if(He.length>0){Ge&&je&&t.texStorage2D(n.TEXTURE_2D,Ae,Ue,He[0].width,He[0].height);for(let re=0,de=He.length;re<de;re++)we=He[re],Ge?H&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,we.width,we.height,be,Le,we.data):t.texImage2D(n.TEXTURE_2D,re,Ue,we.width,we.height,0,be,Le,we.data);b.generateMipmaps=!1}else Ge?(je&&t.texStorage2D(n.TEXTURE_2D,Ae,Ue,le.width,le.height),H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,be,Le,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,be,Le,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ge&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ue,He[0].width,He[0].height,le.depth);for(let re=0,de=He.length;re<de;re++)if(we=He[re],b.format!==Vn)if(be!==null)if(Ge){if(H)if(b.layerUpdates.size>0){const De=eu(we.width,we.height,b.format,b.type);for(const Re of b.layerUpdates){const Ve=we.data.subarray(Re*De/we.data.BYTES_PER_ELEMENT,(Re+1)*De/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Re,we.width,we.height,1,be,Ve)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,we.width,we.height,le.depth,be,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ue,we.width,we.height,le.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,we.width,we.height,le.depth,be,Le,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ue,we.width,we.height,le.depth,0,be,Le,we.data)}else{Ge&&je&&t.texStorage2D(n.TEXTURE_2D,Ae,Ue,He[0].width,He[0].height);for(let re=0,de=He.length;re<de;re++)we=He[re],b.format!==Vn?be!==null?Ge?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,we.width,we.height,be,we.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ue,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?H&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,we.width,we.height,be,Le,we.data):t.texImage2D(n.TEXTURE_2D,re,Ue,we.width,we.height,0,be,Le,we.data)}else if(b.isDataArrayTexture)if(Ge){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ue,le.width,le.height,le.depth),H)if(b.layerUpdates.size>0){const re=eu(le.width,le.height,b.format,b.type);for(const de of b.layerUpdates){const De=le.data.subarray(de*re/le.data.BYTES_PER_ELEMENT,(de+1)*re/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,le.width,le.height,1,be,Le,De)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,be,Le,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,be,Le,le.data);else if(b.isData3DTexture)Ge?(je&&t.texStorage3D(n.TEXTURE_3D,Ae,Ue,le.width,le.height,le.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,be,Le,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,be,Le,le.data);else if(b.isFramebufferTexture){if(je)if(Ge)t.texStorage2D(n.TEXTURE_2D,Ae,Ue,le.width,le.height);else{let re=le.width,de=le.height;for(let De=0;De<Ae;De++)t.texImage2D(n.TEXTURE_2D,De,Ue,re,de,0,be,Le,null),re>>=1,de>>=1}}else if(He.length>0){if(Ge&&je){const re=oe(He[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Ue,re.width,re.height)}for(let re=0,de=He.length;re<de;re++)we=He[re],Ge?H&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,be,Le,we):t.texImage2D(n.TEXTURE_2D,re,Ue,be,Le,we);b.generateMipmaps=!1}else if(Ge){if(je){const re=oe(le);t.texStorage2D(n.TEXTURE_2D,Ae,Ue,re.width,re.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Le,le)}else t.texImage2D(n.TEXTURE_2D,0,Ue,be,Le,le);g(b)&&u(G),_e.__version=K.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function se(E,b,B){if(b.image.length!==6)return;const G=ve(E,b),Y=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);const K=i.get(Y);if(Y.version!==K.__version||G===!0){t.activeTexture(n.TEXTURE0+B);const _e=nt.getPrimaries(nt.workingColorSpace),pe=b.colorSpace===Hi?null:nt.getPrimaries(b.colorSpace),ye=b.colorSpace===Hi||_e===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,be=[];for(let de=0;de<6;de++)!Ce&&!le?be[de]=v(b.image[de],!0,s.maxCubemapSize):be[de]=le?b.image[de].image:b.image[de],be[de]=ae(b,be[de]);const Le=be[0],Ue=o.convert(b.format,b.colorSpace),we=o.convert(b.type),He=y(b.internalFormat,Ue,we,b.colorSpace),Ge=b.isVideoTexture!==!0,je=K.__version===void 0||G===!0,H=Y.dataReady;let Ae=I(b,Le);ge(n.TEXTURE_CUBE_MAP,b);let re;if(Ce){Ge&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,He,Le.width,Le.height);for(let de=0;de<6;de++){re=be[de].mipmaps;for(let De=0;De<re.length;De++){const Re=re[De];b.format!==Vn?Ue!==null?Ge?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,0,0,Re.width,Re.height,Ue,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,He,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,0,0,Re.width,Re.height,Ue,we,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,He,Re.width,Re.height,0,Ue,we,Re.data)}}}else{if(re=b.mipmaps,Ge&&je){re.length>0&&Ae++;const de=oe(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,He,de.width,de.height)}for(let de=0;de<6;de++)if(le){Ge?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,be[de].width,be[de].height,Ue,we,be[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,He,be[de].width,be[de].height,0,Ue,we,be[de].data);for(let De=0;De<re.length;De++){const Ve=re[De].image[de].image;Ge?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,0,0,Ve.width,Ve.height,Ue,we,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,He,Ve.width,Ve.height,0,Ue,we,Ve.data)}}else{Ge?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ue,we,be[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,He,Ue,we,be[de]);for(let De=0;De<re.length;De++){const Re=re[De];Ge?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,0,0,Ue,we,Re.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,He,Ue,we,Re.image[de])}}}g(b)&&u(n.TEXTURE_CUBE_MAP),K.__version=Y.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function xe(E,b,B,G,Y,K){const _e=o.convert(B.format,B.colorSpace),pe=o.convert(B.type),ye=y(B.internalFormat,_e,pe,B.colorSpace),Ce=i.get(b),le=i.get(B);if(le.__renderTarget=b,!Ce.__hasExternalTextures){const be=Math.max(1,b.width>>K),Le=Math.max(1,b.height>>K);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,K,ye,be,Le,b.depth,0,_e,pe,null):t.texImage2D(Y,K,ye,be,Le,0,_e,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Q(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Y,le.__webglTexture,0,k(b)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Y,le.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(E,b,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),b.depthBuffer){const G=b.depthTexture,Y=G&&G.isDepthTexture?G.type:null,K=M(b.stencilBuffer,Y),_e=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=k(b);Q(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,K,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,K,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,K,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,E)}else{const G=b.textures;for(let Y=0;Y<G.length;Y++){const K=G[Y],_e=o.convert(K.format,K.colorSpace),pe=o.convert(K.type),ye=y(K.internalFormat,_e,pe,K.colorSpace),Ce=k(b);B&&Q(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,ye,b.width,b.height):Q(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,ye,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ye,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(b.depthTexture);G.__renderTarget=b,(!G.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N(b.depthTexture,0);const Y=G.__webglTexture,K=k(b);if(b.depthTexture.format===oo)Q(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(b.depthTexture.format===fo)Q(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Se(E){const b=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),G){const Y=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),b.__depthDisposeCallback=Y}b.__boundDepthTexture=G}if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");fe(b.__webglFramebuffer,E)}else if(B){b.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[G]),b.__webglDepthbuffer[G]===void 0)b.__webglDepthbuffer[G]=n.createRenderbuffer(),ue(b.__webglDepthbuffer[G],E,!1);else{const Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ue(b.__webglDepthbuffer,E,!1);else{const G=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,Y)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(E,b,B){const G=i.get(E);b!==void 0&&xe(G.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Se(E)}function Fe(E){const b=E.texture,B=i.get(E),G=i.get(b);E.addEventListener("dispose",C);const Y=E.textures,K=E.isWebGLCubeRenderTarget===!0,_e=Y.length>1;if(_e||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=b.version,r.memory.textures++),K){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[pe]=[];for(let ye=0;ye<b.mipmaps.length;ye++)B.__webglFramebuffer[pe][ye]=n.createFramebuffer()}else B.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)B.__webglFramebuffer[pe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(_e)for(let pe=0,ye=Y.length;pe<ye;pe++){const Ce=i.get(Y[pe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),r.memory.textures++)}if(E.samples>0&&Q(E)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pe=0;pe<Y.length;pe++){const ye=Y[pe];B.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[pe]);const Ce=o.convert(ye.format,ye.colorSpace),le=o.convert(ye.type),be=y(ye.internalFormat,Ce,le,ye.colorSpace,E.isXRRenderTarget===!0),Le=k(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,B.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),ge(n.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)xe(B.__webglFramebuffer[pe][ye],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else xe(B.__webglFramebuffer[pe],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(b)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let pe=0,ye=Y.length;pe<ye;pe++){const Ce=Y[pe],le=i.get(Ce);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),ge(n.TEXTURE_2D,Ce),xe(B.__webglFramebuffer,E,Ce,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),g(Ce)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,G.__webglTexture),ge(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)xe(B.__webglFramebuffer[ye],E,b,n.COLOR_ATTACHMENT0,pe,ye);else xe(B.__webglFramebuffer,E,b,n.COLOR_ATTACHMENT0,pe,0);g(b)&&u(pe),t.unbindTexture()}E.depthBuffer&&Se(E)}function ce(E){const b=E.textures;for(let B=0,G=b.length;B<G;B++){const Y=b[B];if(g(Y)){const K=w(E),_e=i.get(Y).__webglTexture;t.bindTexture(K,_e),u(K),t.unbindTexture()}}}const he=[],D=[];function me(E){if(E.samples>0){if(Q(E)===!1){const b=E.textures,B=E.width,G=E.height;let Y=n.COLOR_BUFFER_BIT;const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(E),pe=b.length>1;if(pe)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);const Ce=i.get(b[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ce,0)}n.blitFramebuffer(0,0,B,G,0,0,B,G,Y,n.NEAREST),c===!0&&(he.length=0,D.length=0,he.push(n.COLOR_ATTACHMENT0+ye),E.depthBuffer&&E.resolveDepthBuffer===!1&&(he.push(K),D.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);const Ce=i.get(b[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const b=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function k(E){return Math.min(s.maxSamples,E.samples)}function Q(E){const b=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $(E){const b=r.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function ae(E,b){const B=E.colorSpace,G=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==bo&&B!==Hi&&(nt.getTransfer(B)===ft?(G!==Vn||Y!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function oe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=N,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Me,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Q}function o1(n,e){function t(i,s=Hi){let o;const r=nt.getTransfer(s);if(i===bi)return n.UNSIGNED_BYTE;if(i===Dc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ud)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cd)return n.BYTE;if(i===hd)return n.SHORT;if(i===Jo)return n.UNSIGNED_SHORT;if(i===Lc)return n.INT;if(i===gs)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===or)return n.HALF_FLOAT;if(i===dd)return n.ALPHA;if(i===fd)return n.RGB;if(i===Vn)return n.RGBA;if(i===pd)return n.LUMINANCE;if(i===md)return n.LUMINANCE_ALPHA;if(i===oo)return n.DEPTH_COMPONENT;if(i===fo)return n.DEPTH_STENCIL;if(i===gd)return n.RED;if(i===Fc)return n.RED_INTEGER;if(i===_d)return n.RG;if(i===Uc)return n.RG_INTEGER;if(i===Nc)return n.RGBA_INTEGER;if(i===ea||i===ta||i===na||i===ia)if(r===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ea)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ea)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===na)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ia)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Xl||i===$l||i===Yl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Vl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$l)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ql||i===Zl||i===Kl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ql||i===Zl)return r===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Kl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===oc||i===rc||i===ac||i===lc||i===cc||i===hc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===jl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ql)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ec)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tc)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nc)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ic)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sc)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oc)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ac)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lc)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cc)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hc)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sa||i===uc||i===dc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===sa)return r===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vd||i===fc||i===pc||i===mc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===sa)return o.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===uo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class r1 extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ut extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a1={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),u=this._getHandJoint(l,v);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const l1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c1=`
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

}`;class h1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new en,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qn({vertexShader:l1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u1 extends Ss{constructor(e,t){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,_=null;const v=new h1,g=t.getContextAttributes();let u=null,w=null;const y=[],M=[],I=new Te;let R=null;const C=new rn;C.viewport=new gt;const L=new rn;L.viewport=new gt;const S=[C,L],x=new r1;let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=y[q];return se===void 0&&(se=new pl,y[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=y[q];return se===void 0&&(se=new pl,y[q]=se),se.getGripSpace()},this.getHand=function(q){let se=y[q];return se===void 0&&(se=new pl,y[q]=se),se.getHandSpace()};function F(q){const se=M.indexOf(q.inputSource);if(se===-1)return;const xe=y[se];xe!==void 0&&(xe.update(q.inputSource,q.frame,l||r),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",N);for(let q=0;q<y.length;q++){const se=M[q];se!==null&&(M[q]=null,y[q].disconnect(se))}T=null,O=null,v.reset(),e.setRenderTarget(u),p=null,f=null,d=null,s=null,w=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",U),s.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const se={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new _s(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let se=null,xe=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=g.stencil?fo:oo,xe=g.stencil?uo:gs);const fe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:o};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new _s(f.textureWidth,f.textureHeight,{format:Vn,type:bi,depthTexture:new Id(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function N(q){for(let se=0;se<q.removed.length;se++){const xe=q.removed[se],ue=M.indexOf(xe);ue>=0&&(M[ue]=null,y[ue].disconnect(xe))}for(let se=0;se<q.added.length;se++){const xe=q.added[se];let ue=M.indexOf(xe);if(ue===-1){for(let Se=0;Se<y.length;Se++)if(Se>=M.length){M.push(xe),ue=Se;break}else if(M[Se]===null){M[Se]=xe,ue=Se;break}if(ue===-1)break}const fe=y[ue];fe&&fe.connect(xe)}}const z=new P,j=new P;function W(q,se,xe){z.setFromMatrixPosition(se.matrixWorld),j.setFromMatrixPosition(xe.matrixWorld);const ue=z.distanceTo(j),fe=se.projectionMatrix.elements,Se=xe.projectionMatrix.elements,Me=fe[14]/(fe[10]-1),Fe=fe[14]/(fe[10]+1),ce=(fe[9]+1)/fe[5],he=(fe[9]-1)/fe[5],D=(fe[8]-1)/fe[0],me=(Se[8]+1)/Se[0],k=Me*D,Q=Me*me,$=ue/(-D+me),ae=$*-D;if(se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ae),q.translateZ($),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),fe[10]===-1)q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const oe=Me+$,E=Fe+$,b=k-ae,B=Q+(ue-ae),G=ce*Fe/E*oe,Y=he*Fe/E*oe;q.projectionMatrix.makePerspective(b,B,G,Y,oe,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let se=q.near,xe=q.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),x.near=L.near=C.near=se,x.far=L.far=C.far=xe,(T!==x.near||O!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,O=x.far),C.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,x.layers.mask=C.layers.mask|L.layers.mask;const ue=q.parent,fe=x.cameras;ie(x,ue);for(let Se=0;Se<fe.length;Se++)ie(fe[Se],ue);fe.length===2?W(x,C,L):x.projectionMatrix.copy(C.projectionMatrix),J(q,x,ue)};function J(q,se,xe){xe===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=fa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let ee=null;function ge(q,se){if(h=se.getViewerPose(l||r),_=se,h!==null){const xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let ue=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,ue=!0);for(let Se=0;Se<xe.length;Se++){const Me=xe[Se];let Fe=null;if(p!==null)Fe=p.getViewport(Me);else{const he=d.getViewSubImage(f,Me);Fe=he.viewport,Se===0&&(e.setRenderTargetTextures(w,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(w))}let ce=S[Se];ce===void 0&&(ce=new rn,ce.layers.enable(Se),ce.viewport=new gt,S[Se]=ce),ce.matrix.fromArray(Me.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Me.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Se===0&&(x.matrix.copy(ce.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ue===!0&&x.cameras.push(ce)}const fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const Se=d.getDepthInformation(xe[0]);Se&&Se.isValid&&Se.texture&&v.init(e,Se,s.renderState)}}for(let xe=0;xe<y.length;xe++){const ue=M[xe],fe=y[xe];ue!==null&&fe!==void 0&&fe.update(ue,se,l||r)}ee&&ee(q,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),_=null}const ve=new Ld;ve.setAnimationLoop(ge),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}}const ls=new Et,d1=new ot;function f1(n,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Ad(n)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,w,y,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(g,u):u.isMeshToonMaterial?(o(g,u),d(g,u)):u.isMeshPhongMaterial?(o(g,u),h(g,u)):u.isMeshStandardMaterial?(o(g,u),f(g,u),u.isMeshPhysicalMaterial&&p(g,u,M)):u.isMeshMatcapMaterial?(o(g,u),_(g,u)):u.isMeshDepthMaterial?o(g,u):u.isMeshDistanceMaterial?(o(g,u),v(g,u)):u.isMeshNormalMaterial?o(g,u):u.isLineBasicMaterial?(r(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?c(g,u,w,y):u.isSpriteMaterial?l(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===qt&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===qt&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const w=e.get(u),y=w.envMap,M=w.envMapRotation;y&&(g.envMap.value=y,ls.copy(M),ls.x*=-1,ls.y*=-1,ls.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),g.envMapRotation.value.setFromMatrix4(d1.makeRotationFromEuler(ls)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function r(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function c(g,u,w,y){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*w,g.scale.value=y*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function l(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,w){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===qt&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function v(g,u){const w=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function p1(n,e,t,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,y){const M=y.program;i.uniformBlockBinding(w,M)}function l(w,y){let M=s[w.id];M===void 0&&(_(w),M=h(w),s[w.id]=M,w.addEventListener("dispose",g));const I=y.program;i.updateUBOMapping(w,I);const R=e.render.frame;o[w.id]!==R&&(f(w),o[w.id]=R)}function h(w){const y=d();w.__bindingPointIndex=y;const M=n.createBuffer(),I=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function d(){for(let w=0;w<a;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const y=s[w.id],M=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,C=M.length;R<C;R++){const L=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,x=L.length;S<x;S++){const T=L[S];if(p(T,R,S,I)===!0){const O=T.__offset,F=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let N=0;N<F.length;N++){const z=F[N],j=v(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,O+U,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,U),U+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,y,M,I){const R=w.value,C=y+"_"+M;if(I[C]===void 0)return typeof R=="number"||typeof R=="boolean"?I[C]=R:I[C]=R.clone(),!0;{const L=I[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return I[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function _(w){const y=w.uniforms;let M=0;const I=16;for(let C=0,L=y.length;C<L;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,T=S.length;x<T;x++){const O=S[x],F=Array.isArray(O.value)?O.value:[O.value];for(let U=0,N=F.length;U<N;U++){const z=F[U],j=v(z),W=M%I,ie=W%j.boundary,J=W+ie;M+=ie,J!==0&&I-J<j.storage&&(M+=I-J),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=j.storage}}}const R=M%I;return R>0&&(M+=I-R),w.__size=M,w.__cache={},this}function v(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function g(w){const y=w.target;y.removeEventListener("dispose",g);const M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function u(){for(const w in s)n.deleteBuffer(s[w]);r=[],s={},o={}}return{bind:c,update:l,dispose:u}}class m1{constructor(e={}){const{canvas:t=ip(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,u=null;const w=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=$i,this.toneMappingExposure=1;const M=this;let I=!1,R=0,C=0,L=null,S=-1,x=null;const T=new gt,O=new gt;let F=null;const U=new Ke(0);let N=0,z=t.width,j=t.height,W=1,ie=null,J=null;const ee=new gt(0,0,z,j),ge=new gt(0,0,z,j);let ve=!1;const q=new kc;let se=!1,xe=!1;const ue=new ot,fe=new ot,Se=new P,Me=new gt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function he(){return L===null?W:1}let D=i;function me(A,V){return t.getContext(A,V)}try{const A={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Re,!1),D===null){const V="webgl2";if(D=me(V,A),D===null)throw me(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let k,Q,$,ae,oe,E,b,B,G,Y,K,_e,pe,ye,Ce,le,be,Le,Ue,we,He,Ge,je,H;function Ae(){k=new Mg(D),k.init(),Ge=new o1(D,k),Q=new pg(D,k,e,Ge),$=new n1(D,k),Q.reverseDepthBuffer&&f&&$.buffers.depth.setReversed(!0),ae=new Sg(D),oe=new z_,E=new s1(D,k,$,oe,Q,Ge,ae),b=new gg(M),B=new xg(M),G=new Rp(D),je=new dg(D,G),Y=new yg(D,G,ae,je),K=new wg(D,Y,G,ae),Ue=new Tg(D,Q,E),le=new mg(oe),_e=new G_(M,b,B,k,Q,je,le),pe=new f1(M,oe),ye=new W_,Ce=new Z_(k),Le=new ug(M,b,B,$,K,p,c),be=new e1(M,K,Q),H=new p1(D,ae,Q,$),we=new fg(D,k,ae),He=new bg(D,k,ae),ae.programs=_e.programs,M.capabilities=Q,M.extensions=k,M.properties=oe,M.renderLists=ye,M.shadowMap=be,M.state=$,M.info=ae}Ae();const re=new u1(M,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=k.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=k.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(z,j,!1))},this.getSize=function(A){return A.set(z,j)},this.setSize=function(A,V,te=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,j=V,t.width=Math.floor(A*W),t.height=Math.floor(V*W),te===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(z*W,j*W).floor()},this.setDrawingBufferSize=function(A,V,te){z=A,j=V,W=te,t.width=Math.floor(A*te),t.height=Math.floor(V*te),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(ee)},this.setViewport=function(A,V,te,ne){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,V,te,ne),$.viewport(T.copy(ee).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,V,te,ne){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,V,te,ne),$.scissor(O.copy(ge).multiplyScalar(W).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(A){$.setScissorTest(ve=A)},this.setOpaqueSort=function(A){ie=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(A=!0,V=!0,te=!0){let ne=0;if(A){let X=!1;if(L!==null){const Ee=L.texture.format;X=Ee===Nc||Ee===Uc||Ee===Fc}if(X){const Ee=L.texture.type,Ie=Ee===bi||Ee===gs||Ee===Jo||Ee===uo||Ee===Dc||Ee===Ic,Ne=Le.getClearColor(),Be=Le.getClearAlpha(),Xe=Ne.r,Ye=Ne.g,Oe=Ne.b;Ie?(_[0]=Xe,_[1]=Ye,_[2]=Oe,_[3]=Be,D.clearBufferuiv(D.COLOR,0,_)):(v[0]=Xe,v[1]=Ye,v[2]=Oe,v[3]=Be,D.clearBufferiv(D.COLOR,0,v))}else ne|=D.COLOR_BUFFER_BIT}V&&(ne|=D.DEPTH_BUFFER_BIT),te&&(ne|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),ye.dispose(),Ce.dispose(),oe.dispose(),b.dispose(),B.dispose(),K.dispose(),je.dispose(),H.dispose(),_e.dispose(),re.dispose(),re.removeEventListener("sessionstart",Jc),re.removeEventListener("sessionend",Qc),ns.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=ae.autoReset,V=be.enabled,te=be.autoUpdate,ne=be.needsUpdate,X=be.type;Ae(),ae.autoReset=A,be.enabled=V,be.autoUpdate=te,be.needsUpdate=ne,be.type=X}function Re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ve(A){const V=A.target;V.removeEventListener("dispose",Ve),vt(V)}function vt(A){Xt(A),oe.remove(A)}function Xt(A){const V=oe.get(A).programs;V!==void 0&&(V.forEach(function(te){_e.releaseProgram(te)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,te,ne,X,Ee){V===null&&(V=Fe);const Ie=X.isMesh&&X.matrixWorld.determinant()<0,Ne=ff(A,V,te,ne,X);$.setMaterial(ne,Ie);let Be=te.index,Xe=1;if(ne.wireframe===!0){if(Be=Y.getWireframeAttribute(te),Be===void 0)return;Xe=2}const Ye=te.drawRange,Oe=te.attributes.position;let it=Ye.start*Xe,_t=(Ye.start+Ye.count)*Xe;Ee!==null&&(it=Math.max(it,Ee.start*Xe),_t=Math.min(_t,(Ee.start+Ee.count)*Xe)),Be!==null?(it=Math.max(it,0),_t=Math.min(_t,Be.count)):Oe!=null&&(it=Math.max(it,0),_t=Math.min(_t,Oe.count));const xt=_t-it;if(xt<0||xt===1/0)return;je.setup(X,ne,Ne,te,Be);let tn,rt=we;if(Be!==null&&(tn=G.get(Be),rt=He,rt.setIndex(tn)),X.isMesh)ne.wireframe===!0?($.setLineWidth(ne.wireframeLinewidth*he()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(X.isLine){let ke=ne.linewidth;ke===void 0&&(ke=1),$.setLineWidth(ke*he()),X.isLineSegments?rt.setMode(D.LINES):X.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else X.isPoints?rt.setMode(D.POINTS):X.isSprite&&rt.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)rt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))rt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ke=X._multiDrawStarts,ri=X._multiDrawCounts,at=X._multiDrawCount,Un=Be?G.get(Be).bytesPerElement:1,Ts=oe.get(ne).currentProgram.getUniforms();for(let ln=0;ln<at;ln++)Ts.setValue(D,"_gl_DrawID",ln),rt.render(ke[ln]/Un,ri[ln])}else if(X.isInstancedMesh)rt.renderInstances(it,xt,X.count);else if(te.isInstancedBufferGeometry){const ke=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ri=Math.min(te.instanceCount,ke);rt.renderInstances(it,xt,ri)}else rt.render(it,xt)};function ct(A,V,te){A.transparent===!0&&A.side===zt&&A.forceSinglePass===!1?(A.side=qt,A.needsUpdate=!0,ur(A,V,te),A.side=Yi,A.needsUpdate=!0,ur(A,V,te),A.side=zt):ur(A,V,te)}this.compile=function(A,V,te=null){te===null&&(te=A),u=Ce.get(te),u.init(V),y.push(u),te.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),A!==te&&A.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),u.setupLights();const ne=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){const Ne=Ee[Ie];ct(Ne,te,X),ne.add(Ne)}else ct(Ee,te,X),ne.add(Ee)}),y.pop(),u=null,ne},this.compileAsync=function(A,V,te=null){const ne=this.compile(A,V,te);return new Promise(X=>{function Ee(){if(ne.forEach(function(Ie){oe.get(Ie).currentProgram.isReady()&&ne.delete(Ie)}),ne.size===0){X(A);return}setTimeout(Ee,10)}k.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Fn=null;function oi(A){Fn&&Fn(A)}function Jc(){ns.stop()}function Qc(){ns.start()}const ns=new Ld;ns.setAnimationLoop(oi),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(A){Fn=A,re.setAnimationLoop(A),A===null?ns.stop():ns.start()},re.addEventListener("sessionstart",Jc),re.addEventListener("sessionend",Qc),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(V),V=re.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,V,L),u=Ce.get(A,y.length),u.init(V),y.push(u),fe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(fe),xe=this.localClippingEnabled,se=le.init(this.clippingPlanes,xe),g=ye.get(A,w.length),g.init(),w.push(g),re.enabled===!0&&re.isPresenting===!0){const Ee=M.xr.getDepthSensingMesh();Ee!==null&&ka(Ee,V,-1/0,M.sortObjects)}ka(A,V,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(ie,J),ce=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ce&&Le.addToRenderList(g,A),this.info.render.frame++,se===!0&&le.beginShadows();const te=u.state.shadowsArray;be.render(te,A,V),se===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=g.opaque,X=g.transmissive;if(u.setupLights(),V.isArrayCamera){const Ee=V.cameras;if(X.length>0)for(let Ie=0,Ne=Ee.length;Ie<Ne;Ie++){const Be=Ee[Ie];th(ne,X,A,Be)}ce&&Le.render(A);for(let Ie=0,Ne=Ee.length;Ie<Ne;Ie++){const Be=Ee[Ie];eh(g,A,Be,Be.viewport)}}else X.length>0&&th(ne,X,A,V),ce&&Le.render(A),eh(g,A,V);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(M,A,V),je.resetDefaultState(),S=-1,x=null,y.pop(),y.length>0?(u=y[y.length-1],se===!0&&le.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function ka(A,V,te,ne){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){ne&&Me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const Ie=K.update(A),Ne=A.material;Ne.visible&&g.push(A,Ie,Ne,te,Me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Ie=K.update(A),Ne=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Me.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Me.copy(Ie.boundingSphere.center)),Me.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(Ne)){const Be=Ie.groups;for(let Xe=0,Ye=Be.length;Xe<Ye;Xe++){const Oe=Be[Xe],it=Ne[Oe.materialIndex];it&&it.visible&&g.push(A,Ie,it,te,Me.z,Oe)}}else Ne.visible&&g.push(A,Ie,Ne,te,Me.z,null)}}const Ee=A.children;for(let Ie=0,Ne=Ee.length;Ie<Ne;Ie++)ka(Ee[Ie],V,te,ne)}function eh(A,V,te,ne){const X=A.opaque,Ee=A.transmissive,Ie=A.transparent;u.setupLightsView(te),se===!0&&le.setGlobalState(M.clippingPlanes,te),ne&&$.viewport(T.copy(ne)),X.length>0&&hr(X,V,te),Ee.length>0&&hr(Ee,V,te),Ie.length>0&&hr(Ie,V,te),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function th(A,V,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[ne.id]===void 0&&(u.state.transmissionRenderTarget[ne.id]=new _s(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?or:bi,minFilter:ps,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const Ee=u.state.transmissionRenderTarget[ne.id],Ie=ne.viewport||T;Ee.setSize(Ie.z,Ie.w);const Ne=M.getRenderTarget();M.setRenderTarget(Ee),M.getClearColor(U),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),ce&&Le.render(te);const Be=M.toneMapping;M.toneMapping=$i;const Xe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),u.setupLightsView(ne),se===!0&&le.setGlobalState(M.clippingPlanes,ne),hr(A,te,ne),E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee),k.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Oe=0,it=V.length;Oe<it;Oe++){const _t=V[Oe],xt=_t.object,tn=_t.geometry,rt=_t.material,ke=_t.group;if(rt.side===zt&&xt.layers.test(ne.layers)){const ri=rt.side;rt.side=qt,rt.needsUpdate=!0,nh(xt,te,ne,tn,rt,ke),rt.side=ri,rt.needsUpdate=!0,Ye=!0}}Ye===!0&&(E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee))}M.setRenderTarget(Ne),M.setClearColor(U,N),Xe!==void 0&&(ne.viewport=Xe),M.toneMapping=Be}function hr(A,V,te){const ne=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Ee=A.length;X<Ee;X++){const Ie=A[X],Ne=Ie.object,Be=Ie.geometry,Xe=ne===null?Ie.material:ne,Ye=Ie.group;Ne.layers.test(te.layers)&&nh(Ne,V,te,Be,Xe,Ye)}}function nh(A,V,te,ne,X,Ee){A.onBeforeRender(M,V,te,ne,X,Ee),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(M,V,te,ne,A,Ee),X.transparent===!0&&X.side===zt&&X.forceSinglePass===!1?(X.side=qt,X.needsUpdate=!0,M.renderBufferDirect(te,V,ne,X,A,Ee),X.side=Yi,X.needsUpdate=!0,M.renderBufferDirect(te,V,ne,X,A,Ee),X.side=zt):M.renderBufferDirect(te,V,ne,X,A,Ee),A.onAfterRender(M,V,te,ne,X,Ee)}function ur(A,V,te){V.isScene!==!0&&(V=Fe);const ne=oe.get(A),X=u.state.lights,Ee=u.state.shadowsArray,Ie=X.state.version,Ne=_e.getParameters(A,X.state,Ee,V,te),Be=_e.getProgramCacheKey(Ne);let Xe=ne.programs;ne.environment=A.isMeshStandardMaterial?V.environment:null,ne.fog=V.fog,ne.envMap=(A.isMeshStandardMaterial?B:b).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",Ve),Xe=new Map,ne.programs=Xe);let Ye=Xe.get(Be);if(Ye!==void 0){if(ne.currentProgram===Ye&&ne.lightsStateVersion===Ie)return sh(A,Ne),Ye}else Ne.uniforms=_e.getUniforms(A),A.onBeforeCompile(Ne,M),Ye=_e.acquireProgram(Ne,Be),Xe.set(Be,Ye),ne.uniforms=Ne.uniforms;const Oe=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=le.uniform),sh(A,Ne),ne.needsLights=mf(A),ne.lightsStateVersion=Ie,ne.needsLights&&(Oe.ambientLightColor.value=X.state.ambient,Oe.lightProbe.value=X.state.probe,Oe.directionalLights.value=X.state.directional,Oe.directionalLightShadows.value=X.state.directionalShadow,Oe.spotLights.value=X.state.spot,Oe.spotLightShadows.value=X.state.spotShadow,Oe.rectAreaLights.value=X.state.rectArea,Oe.ltc_1.value=X.state.rectAreaLTC1,Oe.ltc_2.value=X.state.rectAreaLTC2,Oe.pointLights.value=X.state.point,Oe.pointLightShadows.value=X.state.pointShadow,Oe.hemisphereLights.value=X.state.hemi,Oe.directionalShadowMap.value=X.state.directionalShadowMap,Oe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Oe.spotShadowMap.value=X.state.spotShadowMap,Oe.spotLightMatrix.value=X.state.spotLightMatrix,Oe.spotLightMap.value=X.state.spotLightMap,Oe.pointShadowMap.value=X.state.pointShadowMap,Oe.pointShadowMatrix.value=X.state.pointShadowMatrix),ne.currentProgram=Ye,ne.uniformsList=null,Ye}function ih(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=ra.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function sh(A,V){const te=oe.get(A);te.outputColorSpace=V.outputColorSpace,te.batching=V.batching,te.batchingColor=V.batchingColor,te.instancing=V.instancing,te.instancingColor=V.instancingColor,te.instancingMorph=V.instancingMorph,te.skinning=V.skinning,te.morphTargets=V.morphTargets,te.morphNormals=V.morphNormals,te.morphColors=V.morphColors,te.morphTargetsCount=V.morphTargetsCount,te.numClippingPlanes=V.numClippingPlanes,te.numIntersection=V.numClipIntersection,te.vertexAlphas=V.vertexAlphas,te.vertexTangents=V.vertexTangents,te.toneMapping=V.toneMapping}function ff(A,V,te,ne,X){V.isScene!==!0&&(V=Fe),E.resetTextureUnits();const Ee=V.fog,Ie=ne.isMeshStandardMaterial?V.environment:null,Ne=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:bo,Be=(ne.isMeshStandardMaterial?B:b).get(ne.envMap||Ie),Xe=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ye=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Oe=!!te.morphAttributes.position,it=!!te.morphAttributes.normal,_t=!!te.morphAttributes.color;let xt=$i;ne.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xt=M.toneMapping);const tn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,rt=tn!==void 0?tn.length:0,ke=oe.get(ne),ri=u.state.lights;if(se===!0&&(xe===!0||A!==x)){const Mn=A===x&&ne.id===S;le.setState(ne,A,Mn)}let at=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ri.state.version||ke.outputColorSpace!==Ne||X.isBatchedMesh&&ke.batching===!1||!X.isBatchedMesh&&ke.batching===!0||X.isBatchedMesh&&ke.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&ke.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&ke.instancing===!1||!X.isInstancedMesh&&ke.instancing===!0||X.isSkinnedMesh&&ke.skinning===!1||!X.isSkinnedMesh&&ke.skinning===!0||X.isInstancedMesh&&ke.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ke.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ke.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ke.instancingMorph===!1&&X.morphTexture!==null||ke.envMap!==Be||ne.fog===!0&&ke.fog!==Ee||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==Xe||ke.vertexTangents!==Ye||ke.morphTargets!==Oe||ke.morphNormals!==it||ke.morphColors!==_t||ke.toneMapping!==xt||ke.morphTargetsCount!==rt)&&(at=!0):(at=!0,ke.__version=ne.version);let Un=ke.currentProgram;at===!0&&(Un=ur(ne,V,X));let Ts=!1,ln=!1,wo=!1;const Mt=Un.getUniforms(),jn=ke.uniforms;if($.useProgram(Un.program)&&(Ts=!0,ln=!0,wo=!0),ne.id!==S&&(S=ne.id,ln=!0),Ts||x!==A){$.buffers.depth.getReversed()?(ue.copy(A.projectionMatrix),op(ue),rp(ue),Mt.setValue(D,"projectionMatrix",ue)):Mt.setValue(D,"projectionMatrix",A.projectionMatrix),Mt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Ci=Mt.map.cameraPosition;Ci!==void 0&&Ci.setValue(D,Se.setFromMatrixPosition(A.matrixWorld)),Q.logarithmicDepthBuffer&&Mt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Mt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,ln=!0,wo=!0)}if(X.isSkinnedMesh){Mt.setOptional(D,X,"bindMatrix"),Mt.setOptional(D,X,"bindMatrixInverse");const Mn=X.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Mt.setValue(D,"boneTexture",Mn.boneTexture,E))}X.isBatchedMesh&&(Mt.setOptional(D,X,"batchingTexture"),Mt.setValue(D,"batchingTexture",X._matricesTexture,E),Mt.setOptional(D,X,"batchingIdTexture"),Mt.setValue(D,"batchingIdTexture",X._indirectTexture,E),Mt.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&Mt.setValue(D,"batchingColorTexture",X._colorsTexture,E));const Eo=te.morphAttributes;if((Eo.position!==void 0||Eo.normal!==void 0||Eo.color!==void 0)&&Ue.update(X,te,Un),(ln||ke.receiveShadow!==X.receiveShadow)&&(ke.receiveShadow=X.receiveShadow,Mt.setValue(D,"receiveShadow",X.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(jn.envMap.value=Be,jn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&V.environment!==null&&(jn.envMapIntensity.value=V.environmentIntensity),ln&&(Mt.setValue(D,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&pf(jn,wo),Ee&&ne.fog===!0&&pe.refreshFogUniforms(jn,Ee),pe.refreshMaterialUniforms(jn,ne,W,j,u.state.transmissionRenderTarget[A.id]),ra.upload(D,ih(ke),jn,E)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ra.upload(D,ih(ke),jn,E),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Mt.setValue(D,"center",X.center),Mt.setValue(D,"modelViewMatrix",X.modelViewMatrix),Mt.setValue(D,"normalMatrix",X.normalMatrix),Mt.setValue(D,"modelMatrix",X.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Mn=ne.uniformsGroups;for(let Ci=0,Ai=Mn.length;Ci<Ai;Ci++){const oh=Mn[Ci];H.update(oh,Un),H.bind(oh,Un)}}return Un}function pf(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function mf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,V,te){oe.get(A.texture).__webglTexture=V,oe.get(A.depthTexture).__webglTexture=te;const ne=oe.get(A);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const te=oe.get(A);te.__webglFramebuffer=V,te.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,te=0){L=A,R=V,C=te;let ne=!0,X=null,Ee=!1,Ie=!1;if(A){const Be=oe.get(A);if(Be.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(D.FRAMEBUFFER,null),ne=!1;else if(Be.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Be.__hasExternalTextures)E.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Oe=A.depthTexture;if(Be.__boundDepthTexture!==Oe){if(Oe!==null&&oe.has(Oe)&&(A.width!==Oe.image.width||A.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const Ye=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[V])?X=Ye[V][te]:X=Ye[V],Ee=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?X=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?X=Ye[te]:X=Ye,T.copy(A.viewport),O.copy(A.scissor),F=A.scissorTest}else T.copy(ee).multiplyScalar(W).floor(),O.copy(ge).multiplyScalar(W).floor(),F=ve;if($.bindFramebuffer(D.FRAMEBUFFER,X)&&ne&&$.drawBuffers(A,X),$.viewport(T),$.scissor(O),$.setScissorTest(F),Ee){const Be=oe.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,Be.__webglTexture,te)}else if(Ie){const Be=oe.get(A.texture),Xe=V||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Be.__webglTexture,te||0,Xe)}S=-1},this.readRenderTargetPixels=function(A,V,te,ne,X,Ee,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){$.bindFramebuffer(D.FRAMEBUFFER,Ne);try{const Be=A.texture,Xe=Be.format,Ye=Be.type;if(!Q.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-ne&&te>=0&&te<=A.height-X&&D.readPixels(V,te,ne,X,Ge.convert(Xe),Ge.convert(Ye),Ee)}finally{const Be=L!==null?oe.get(L).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,V,te,ne,X,Ee,Ie){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){const Be=A.texture,Xe=Be.format,Ye=Be.type;if(!Q.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-ne&&te>=0&&te<=A.height-X){$.bindFramebuffer(D.FRAMEBUFFER,Ne);const Oe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Oe),D.bufferData(D.PIXEL_PACK_BUFFER,Ee.byteLength,D.STREAM_READ),D.readPixels(V,te,ne,X,Ge.convert(Xe),Ge.convert(Ye),0);const it=L!==null?oe.get(L).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,it);const _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sp(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Oe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ee),D.deleteBuffer(Oe),D.deleteSync(_t),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,te=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const ne=Math.pow(2,-te),X=Math.floor(A.image.width*ne),Ee=Math.floor(A.image.height*ne),Ie=V!==null?V.x:0,Ne=V!==null?V.y:0;E.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,te,0,0,Ie,Ne,X,Ee),$.unbindTexture()},this.copyTextureToTexture=function(A,V,te=null,ne=null,X=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,A=arguments[1],V=arguments[2],X=arguments[3]||0,te=null);let Ee,Ie,Ne,Be,Xe,Ye,Oe,it,_t;const xt=A.isCompressedTexture?A.mipmaps[X]:A.image;te!==null?(Ee=te.max.x-te.min.x,Ie=te.max.y-te.min.y,Ne=te.isBox3?te.max.z-te.min.z:1,Be=te.min.x,Xe=te.min.y,Ye=te.isBox3?te.min.z:0):(Ee=xt.width,Ie=xt.height,Ne=xt.depth||1,Be=0,Xe=0,Ye=0),ne!==null?(Oe=ne.x,it=ne.y,_t=ne.z):(Oe=0,it=0,_t=0);const tn=Ge.convert(V.format),rt=Ge.convert(V.type);let ke;V.isData3DTexture?(E.setTexture3D(V,0),ke=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(E.setTexture2DArray(V,0),ke=D.TEXTURE_2D_ARRAY):(E.setTexture2D(V,0),ke=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const ri=D.getParameter(D.UNPACK_ROW_LENGTH),at=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Un=D.getParameter(D.UNPACK_SKIP_PIXELS),Ts=D.getParameter(D.UNPACK_SKIP_ROWS),ln=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ye);const wo=A.isDataArrayTexture||A.isData3DTexture,Mt=V.isDataArrayTexture||V.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const jn=oe.get(A),Eo=oe.get(V),Mn=oe.get(jn.__renderTarget),Ci=oe.get(Eo.__renderTarget);$.bindFramebuffer(D.READ_FRAMEBUFFER,Mn.__webglFramebuffer),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ai=0;Ai<Ne;Ai++)wo&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,X,Ye+Ai),A.isDepthTexture?(Mt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(V).__webglTexture,X,_t+Ai),D.blitFramebuffer(Be,Xe,Ee,Ie,Oe,it,Ee,Ie,D.DEPTH_BUFFER_BIT,D.NEAREST)):Mt?D.copyTexSubImage3D(ke,X,Oe,it,_t+Ai,Be,Xe,Ee,Ie):D.copyTexSubImage2D(ke,X,Oe,it,_t+Ai,Be,Xe,Ee,Ie);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Mt?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(ke,X,Oe,it,_t,Ee,Ie,Ne,tn,rt,xt.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(ke,X,Oe,it,_t,Ee,Ie,Ne,tn,xt.data):D.texSubImage3D(ke,X,Oe,it,_t,Ee,Ie,Ne,tn,rt,xt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,X,Oe,it,Ee,Ie,tn,rt,xt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,X,Oe,it,xt.width,xt.height,tn,xt.data):D.texSubImage2D(D.TEXTURE_2D,X,Oe,it,Ee,Ie,tn,rt,xt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ri),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Un),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ts),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ln),X===0&&V.generateMipmaps&&D.generateMipmap(ke),$.unbindTexture()},this.copyTextureToTexture3D=function(A,V,te=null,ne=null,X=0){return A.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,A=arguments[2],V=arguments[3],X=arguments[4]||0),ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,V,te,ne,X)},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),$.unbindTexture()},this.resetState=function(){R=0,C=0,L=null,$.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class Od extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Et,this.environmentIntensity=1,this.environmentRotation=new Et,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class g1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gc,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new P;class ma{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),o=pt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new Yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ma(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kd extends es{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ks;const Lo=new P,Gs=new P,zs=new P,Hs=new Te,Do=new Te,Gd=new ot,Ir=new P,Io=new P,Fr=new P,tu=new Te,ml=new Te,nu=new Te;class _1 extends Rt{constructor(e=new kd){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new In;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new g1(t,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new ma(i,3,0,!1)),ks.setAttribute("uv",new ma(i,2,3,!1))}this.geometry=ks,this.material=e,this.center=new Te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),Gd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-zs.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const r=this.center;Ur(Ir.set(-.5,-.5,0),zs,r,Gs,s,o),Ur(Io.set(.5,-.5,0),zs,r,Gs,s,o),Ur(Fr.set(.5,.5,0),zs,r,Gs,s,o),tu.set(0,0),ml.set(1,0),nu.set(1,1);let a=e.ray.intersectTriangle(Ir,Io,Fr,!1,Lo);if(a===null&&(Ur(Io.set(-.5,.5,0),zs,r,Gs,s,o),ml.set(0,1),a=e.ray.intersectTriangle(Ir,Fr,Io,!1,Lo),a===null))return;const c=e.ray.origin.distanceTo(Lo);c<e.near||c>e.far||t.push({distance:c,point:Lo.clone(),uv:En.getInterpolation(Lo,Ir,Io,Fr,tu,ml,nu,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ur(n,e,t,i,s,o){Hs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Do.x=o*Hs.x-s*Hs.y,Do.y=s*Hs.x+o*Hs.y):Do.copy(Hs),n.copy(e),n.x+=Do.x,n.y+=Do.y,n.applyMatrix4(Gd)}class zc extends es{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ga=new P,_a=new P,iu=new ot,Fo=new Bc,Nr=new La,gl=new P,su=new P;class v1 extends Rt{constructor(e=new In,t=new zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)ga.fromBufferAttribute(t,s-1),_a.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ga.distanceTo(_a);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=o,e.ray.intersectsSphere(Nr)===!1)return;iu.copy(s).invert(),Fo.copy(e.ray).applyMatrix4(iu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),_=Math.min(h.count,r.start+r.count);for(let v=p,g=_-1;v<g;v+=l){const u=h.getX(v),w=h.getX(v+1),y=Br(this,e,Fo,c,u,w);y&&t.push(y)}if(this.isLineLoop){const v=h.getX(_-1),g=h.getX(p),u=Br(this,e,Fo,c,v,g);u&&t.push(u)}}else{const p=Math.max(0,r.start),_=Math.min(f.count,r.start+r.count);for(let v=p,g=_-1;v<g;v+=l){const u=Br(this,e,Fo,c,v,v+1);u&&t.push(u)}if(this.isLineLoop){const v=Br(this,e,Fo,c,_-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Br(n,e,t,i,s,o){const r=n.geometry.attributes.position;if(ga.fromBufferAttribute(r,s),_a.fromBufferAttribute(r,o),t.distanceSqToSegment(ga,_a,gl,su)>i)return;gl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(gl);if(!(c<e.near||c>e.far))return{distance:c,point:su.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const ou=new P,ru=new P;class x1 extends v1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)ou.fromBufferAttribute(t,s),ru.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ou.distanceTo(ru);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class va extends en{constructor(e,t,i,s,o,r,a,c,l){super(e,t,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),o=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),o+=i.distanceTo(s),t.push(o),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const o=i.length;let r;t?r=t:r=e*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const h=i[s],f=i[s+1]-h,p=(r-h)/f;return(s+p)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=t||(r.isVector2?new Te:new P);return c.copy(a).sub(r).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,s=[],o=[],r=[],a=new P,c=new ot;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new P)}o[0]=new P,r[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ht(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,_))}r[p].crossVectors(s[p],o[p])}if(t===!0){let p=Math.acos(Ht(o[0].dot(o[e]),-1,1));p/=e,s[0].dot(a.crossVectors(o[0],o[e]))>0&&(p=-p);for(let _=1;_<=e;_++)o[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hc extends si{constructor(e=0,t=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Te){const i=t,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+e*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*d+this.aX,l=f*d+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class M1 extends Hc{constructor(e,t,i,s,o,r){super(e,t,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Wc(){let n=0,e=0,t=0,i=0;function s(o,r,a,c){n=o,e=a,t=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,d){let f=(r-o)/l-(a-o)/(l+h)+(a-r)/h,p=(a-r)/h-(c-r)/(h+d)+(c-a)/d;f*=h,p*=h,s(r,a,f,p)},calc:function(o){const r=o*o,a=r*o;return n+e*o+t*r+i*a}}}const Or=new P,_l=new Wc,vl=new Wc,xl=new Wc;class y1 extends si{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){const i=t,s=this.points,o=s.length,r=(o-(this.closed?0:1))*e;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Or.subVectors(s[0],s[1]).add(s[0]),l=Or);const d=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Or.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),_l.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,_,v,g),vl.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,_,v,g),xl.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,_,v,g)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),vl.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),xl.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return i.set(_l.calc(c),vl.calc(c),xl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function au(n,e,t,i,s){const o=(i-e)*.5,r=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+o+r)*c+(-3*t+3*i-2*o-r)*a+o*n+t}function b1(n,e){const t=1-n;return t*t*e}function S1(n,e){return 2*(1-n)*n*e}function T1(n,e){return n*n*e}function $o(n,e,t,i){return b1(n,e)+S1(n,t)+T1(n,i)}function w1(n,e){const t=1-n;return t*t*t*e}function E1(n,e){const t=1-n;return 3*t*t*n*e}function C1(n,e){return 3*(1-n)*n*n*e}function A1(n,e){return n*n*n*e}function Yo(n,e,t,i,s){return w1(n,e)+E1(n,t)+C1(n,i)+A1(n,s)}class zd extends si{constructor(e=new Te,t=new Te,i=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Te){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Yo(e,s.x,o.x,r.x,a.x),Yo(e,s.y,o.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class P1 extends si{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Yo(e,s.x,o.x,r.x,a.x),Yo(e,s.y,o.y,r.y,a.y),Yo(e,s.z,o.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hd extends si{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R1 extends si{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wd extends si{constructor(e=new Te,t=new Te,i=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Te){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set($o(e,s.x,o.x,r.x),$o(e,s.y,o.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L1 extends si{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set($o(e,s.x,o.x,r.x),$o(e,s.y,o.y,r.y),$o(e,s.z,o.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vd extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){const i=t,s=this.points,o=(s.length-1)*e,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(au(a,c.x,l.x,h.x,d.x),au(a,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Te().fromArray(s))}return this}}var xc=Object.freeze({__proto__:null,ArcCurve:M1,CatmullRomCurve3:y1,CubicBezierCurve:zd,CubicBezierCurve3:P1,EllipseCurve:Hc,LineCurve:Hd,LineCurve3:R1,QuadraticBezierCurve:Wd,QuadraticBezierCurve3:L1,SplineCurve:Vd});class D1 extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new xc[s.type]().fromJSON(s))}return this}}class Qt extends D1{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Hd(this.currentPoint.clone(),new Te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const o=new Wd(this.currentPoint.clone(),new Te(e,t),new Te(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,o,r){const a=new zd(this.currentPoint.clone(),new Te(e,t),new Te(i,s),new Te(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Vd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,o,r),this}absarc(e,t,i,s,o,r){return this.absellipse(e,t,i,i,s,o,r),this}ellipse(e,t,i,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,o,r,a,c),this}absellipse(e,t,i,s,o,r,a,c){const l=new Hc(e,t,i,s,o,r,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qe extends In{constructor(e=1,t=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],d=[],f=[],p=[];let _=0;const v=[],g=i/2;let u=0;w(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(p,2));function w(){const M=new P,I=new P;let R=0;const C=(t-e)/i;for(let L=0;L<=o;L++){const S=[],x=L/o,T=x*(t-e)+e;for(let O=0;O<=s;O++){const F=O/s,U=F*c+a,N=Math.sin(U),z=Math.cos(U);I.x=T*N,I.y=-x*i+g,I.z=T*z,d.push(I.x,I.y,I.z),M.set(N,C,z).normalize(),f.push(M.x,M.y,M.z),p.push(F,1-x),S.push(_++)}v.push(S)}for(let L=0;L<s;L++)for(let S=0;S<o;S++){const x=v[S][L],T=v[S+1][L],O=v[S+1][L+1],F=v[S][L+1];(e>0||S!==0)&&(h.push(x,T,F),R+=3),(t>0||S!==o-1)&&(h.push(T,O,F),R+=3)}l.addGroup(u,R,0),u+=R}function y(M){const I=_,R=new Te,C=new P;let L=0;const S=M===!0?e:t,x=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*x,0),f.push(0,x,0),p.push(.5,.5),_++;const T=_;for(let O=0;O<=s;O++){const U=O/s*c+a,N=Math.cos(U),z=Math.sin(U);C.x=S*z,C.y=g*x,C.z=S*N,d.push(C.x,C.y,C.z),f.push(0,x,0),R.x=N*.5+.5,R.y=z*.5*x+.5,p.push(R.x,R.y),_++}for(let O=0;O<s;O++){const F=I+O,U=T+O;M===!0?h.push(U,U+1,F):h.push(U+1,U,F),L+=3}l.addGroup(u,L,M===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dt extends Qt{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Qt().fromJSON(s))}return this}}const I1={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let o=Xd(n,0,s,t,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,d,f,p;if(i&&(o=O1(n,e,o,t)),n.length>80*t){a=l=n[0],c=h=n[1];for(let _=t;_<s;_+=t)d=n[_],f=n[_+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Qo(o,r,t,a,c,p,0),r}};function Xd(n,e,t,i,s){let o,r;if(s===Z1(n,e,t,i)>0)for(o=e;o<t;o+=i)r=lu(o,n[o],n[o+1],r);else for(o=t-i;o>=e;o-=i)r=lu(o,n[o],n[o+1],r);return r&&Ia(r,r.next)&&(tr(r),r=r.next),r}function xs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ia(t,t.next)||wt(t.prev,t,t.next)===0)){if(tr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Qo(n,e,t,i,s,o,r){if(!n)return;!r&&o&&W1(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?U1(n,i,s,o):F1(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),tr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=N1(xs(n),e,t),Qo(n,e,t,i,s,o,2)):r===2&&B1(n,e,t,i,s,o):Qo(xs(n),e,t,i,s,o,1);break}}}function F1(n){const e=n.prev,t=n,i=n.next;if(wt(e,t,i)>=0)return!1;const s=e.x,o=t.x,r=i.x,a=e.y,c=t.y,l=i.y,h=s<o?s<r?s:r:o<r?o:r,d=a<c?a<l?a:l:c<l?c:l,f=s>o?s>r?s:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=d&&_.y<=p&&js(s,a,o,c,r,l,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function U1(n,e,t,i){const s=n.prev,o=n,r=n.next;if(wt(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,d=o.y,f=r.y,p=a<c?a<l?a:l:c<l?c:l,_=h<d?h<f?h:f:d<f?d:f,v=a>c?a>l?a:l:c>l?c:l,g=h>d?h>f?h:f:d>f?d:f,u=Mc(p,_,e,t,i),w=Mc(v,g,e,t,i);let y=n.prevZ,M=n.nextZ;for(;y&&y.z>=u&&M&&M.z<=w;){if(y.x>=p&&y.x<=v&&y.y>=_&&y.y<=g&&y!==s&&y!==r&&js(a,h,c,d,l,f,y.x,y.y)&&wt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=v&&M.y>=_&&M.y<=g&&M!==s&&M!==r&&js(a,h,c,d,l,f,M.x,M.y)&&wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=u;){if(y.x>=p&&y.x<=v&&y.y>=_&&y.y<=g&&y!==s&&y!==r&&js(a,h,c,d,l,f,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=w;){if(M.x>=p&&M.x<=v&&M.y>=_&&M.y<=g&&M!==s&&M!==r&&js(a,h,c,d,l,f,M.x,M.y)&&wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function N1(n,e,t){let i=n;do{const s=i.prev,o=i.next.next;!Ia(s,o)&&$d(s,i,i.next,o)&&er(s,o)&&er(o,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(o.i/t|0),tr(i),tr(i.next),i=n=o),i=i.next}while(i!==n);return xs(i)}function B1(n,e,t,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&$1(r,a)){let c=Yd(r,a);r=xs(r,r.next),c=xs(c,c.next),Qo(r,e,t,i,s,o,0),Qo(c,e,t,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function O1(n,e,t,i){const s=[];let o,r,a,c,l;for(o=0,r=e.length;o<r;o++)a=e[o]*i,c=o<r-1?e[o+1]*i:n.length,l=Xd(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(X1(l));for(s.sort(k1),o=0;o<s.length;o++)t=G1(s[o],t);return t}function k1(n,e){return n.x-e.x}function G1(n,e){const t=z1(n,e);if(!t)return e;const i=Yd(t,n);return xs(i,i.next),xs(t,t.next)}function z1(n,e){let t=e,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=o&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===o))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,d;t=s;do o>=t.x&&t.x>=c&&o!==t.x&&js(r<l?o:i,r,c,l,r<l?i:o,r,t.x,t.y)&&(d=Math.abs(r-t.y)/(o-t.x),er(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&H1(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function H1(n,e){return wt(n.prev,n,e.prev)<0&&wt(e.next,n,n.next)<0}function W1(n,e,t,i){let s=n;do s.z===0&&(s.z=Mc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,V1(s)}function V1(n){let e,t,i,s,o,r,a,c,l=1;do{for(t=n,n=null,o=null,r=0;t;){for(r++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;t=i}o.nextZ=null,l*=2}while(r>1);return n}function Mc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function X1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function js(n,e,t,i,s,o,r,a){return(s-r)*(e-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(t-r)*(e-a)&&(t-r)*(o-a)>=(s-r)*(i-a)}function $1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Y1(n,e)&&(er(n,e)&&er(e,n)&&q1(n,e)&&(wt(n.prev,n,e.prev)||wt(n,e.prev,e))||Ia(n,e)&&wt(n.prev,n,n.next)>0&&wt(e.prev,e,e.next)>0)}function wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ia(n,e){return n.x===e.x&&n.y===e.y}function $d(n,e,t,i){const s=Gr(wt(n,e,t)),o=Gr(wt(n,e,i)),r=Gr(wt(t,i,n)),a=Gr(wt(t,i,e));return!!(s!==o&&r!==a||s===0&&kr(n,t,e)||o===0&&kr(n,i,e)||r===0&&kr(t,n,i)||a===0&&kr(t,e,i))}function kr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Gr(n){return n>0?1:n<0?-1:0}function Y1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&$d(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function er(n,e){return wt(n.prev,n,n.next)<0?wt(n,e,n.next)>=0&&wt(n,n.prev,e)>=0:wt(n,e,n.prev)<0||wt(n,n.next,e)<0}function q1(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&s<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Yd(n,e){const t=new yc(n.i,n.x,n.y),i=new yc(e.i,e.x,e.y),s=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function lu(n,e,t,i){const s=new yc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function tr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Z1(n,e,t,i){let s=0;for(let o=e,r=t-i;o<t;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class qo{static area(e){const t=e.length;let i=0;for(let s=t-1,o=0;o<t;s=o++)i+=e[s].x*e[o].y-e[o].x*e[s].y;return i*.5}static isClockWise(e){return qo.area(e)<0}static triangulateShape(e,t){const i=[],s=[],o=[];cu(e),hu(i,e);let r=e.length;t.forEach(cu);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,hu(i,t[c]);const a=I1.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function cu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function hu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class lt extends In{constructor(e=new dt([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];r(l)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(o,2)),this.computeVertexNormals();function r(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const u=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:K1;let y,M=!1,I,R,C,L;u&&(y=u.getSpacedPoints(h),M=!0,f=!1,I=u.computeFrenetFrames(h,!1),R=new P,C=new P,L=new P),f||(g=0,p=0,_=0,v=0);const S=a.extractPoints(l);let x=S.shape;const T=S.holes;if(!qo.isClockWise(x)){x=x.reverse();for(let ce=0,he=T.length;ce<he;ce++){const D=T[ce];qo.isClockWise(D)&&(T[ce]=D.reverse())}}const F=qo.triangulateShape(x,T),U=x;for(let ce=0,he=T.length;ce<he;ce++){const D=T[ce];x=x.concat(D)}function N(ce,he,D){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(he,D)}const z=x.length,j=F.length;function W(ce,he,D){let me,k,Q;const $=ce.x-he.x,ae=ce.y-he.y,oe=D.x-ce.x,E=D.y-ce.y,b=$*$+ae*ae,B=$*E-ae*oe;if(Math.abs(B)>Number.EPSILON){const G=Math.sqrt(b),Y=Math.sqrt(oe*oe+E*E),K=he.x-ae/G,_e=he.y+$/G,pe=D.x-E/Y,ye=D.y+oe/Y,Ce=((pe-K)*E-(ye-_e)*oe)/($*E-ae*oe);me=K+$*Ce-ce.x,k=_e+ae*Ce-ce.y;const le=me*me+k*k;if(le<=2)return new Te(me,k);Q=Math.sqrt(le/2)}else{let G=!1;$>Number.EPSILON?oe>Number.EPSILON&&(G=!0):$<-Number.EPSILON?oe<-Number.EPSILON&&(G=!0):Math.sign(ae)===Math.sign(E)&&(G=!0),G?(me=-ae,k=$,Q=Math.sqrt(b)):(me=$,k=ae,Q=Math.sqrt(b/2))}return new Te(me/Q,k/Q)}const ie=[];for(let ce=0,he=U.length,D=he-1,me=ce+1;ce<he;ce++,D++,me++)D===he&&(D=0),me===he&&(me=0),ie[ce]=W(U[ce],U[D],U[me]);const J=[];let ee,ge=ie.concat();for(let ce=0,he=T.length;ce<he;ce++){const D=T[ce];ee=[];for(let me=0,k=D.length,Q=k-1,$=me+1;me<k;me++,Q++,$++)Q===k&&(Q=0),$===k&&($=0),ee[me]=W(D[me],D[Q],D[$]);J.push(ee),ge=ge.concat(ee)}for(let ce=0;ce<g;ce++){const he=ce/g,D=p*Math.cos(he*Math.PI/2),me=_*Math.sin(he*Math.PI/2)+v;for(let k=0,Q=U.length;k<Q;k++){const $=N(U[k],ie[k],me);ue($.x,$.y,-D)}for(let k=0,Q=T.length;k<Q;k++){const $=T[k];ee=J[k];for(let ae=0,oe=$.length;ae<oe;ae++){const E=N($[ae],ee[ae],me);ue(E.x,E.y,-D)}}}const ve=_+v;for(let ce=0;ce<z;ce++){const he=f?N(x[ce],ge[ce],ve):x[ce];M?(C.copy(I.normals[0]).multiplyScalar(he.x),R.copy(I.binormals[0]).multiplyScalar(he.y),L.copy(y[0]).add(C).add(R),ue(L.x,L.y,L.z)):ue(he.x,he.y,0)}for(let ce=1;ce<=h;ce++)for(let he=0;he<z;he++){const D=f?N(x[he],ge[he],ve):x[he];M?(C.copy(I.normals[ce]).multiplyScalar(D.x),R.copy(I.binormals[ce]).multiplyScalar(D.y),L.copy(y[ce]).add(C).add(R),ue(L.x,L.y,L.z)):ue(D.x,D.y,d/h*ce)}for(let ce=g-1;ce>=0;ce--){const he=ce/g,D=p*Math.cos(he*Math.PI/2),me=_*Math.sin(he*Math.PI/2)+v;for(let k=0,Q=U.length;k<Q;k++){const $=N(U[k],ie[k],me);ue($.x,$.y,d+D)}for(let k=0,Q=T.length;k<Q;k++){const $=T[k];ee=J[k];for(let ae=0,oe=$.length;ae<oe;ae++){const E=N($[ae],ee[ae],me);M?ue(E.x,E.y+y[h-1].y,y[h-1].x+D):ue(E.x,E.y,d+D)}}}q(),se();function q(){const ce=s.length/3;if(f){let he=0,D=z*he;for(let me=0;me<j;me++){const k=F[me];fe(k[2]+D,k[1]+D,k[0]+D)}he=h+g*2,D=z*he;for(let me=0;me<j;me++){const k=F[me];fe(k[0]+D,k[1]+D,k[2]+D)}}else{for(let he=0;he<j;he++){const D=F[he];fe(D[2],D[1],D[0])}for(let he=0;he<j;he++){const D=F[he];fe(D[0]+z*h,D[1]+z*h,D[2]+z*h)}}i.addGroup(ce,s.length/3-ce,0)}function se(){const ce=s.length/3;let he=0;xe(U,he),he+=U.length;for(let D=0,me=T.length;D<me;D++){const k=T[D];xe(k,he),he+=k.length}i.addGroup(ce,s.length/3-ce,1)}function xe(ce,he){let D=ce.length;for(;--D>=0;){const me=D;let k=D-1;k<0&&(k=ce.length-1);for(let Q=0,$=h+g*2;Q<$;Q++){const ae=z*Q,oe=z*(Q+1),E=he+me+ae,b=he+k+ae,B=he+k+oe,G=he+me+oe;Se(E,b,B,G)}}}function ue(ce,he,D){c.push(ce),c.push(he),c.push(D)}function fe(ce,he,D){Me(ce),Me(he),Me(D);const me=s.length/3,k=w.generateTopUV(i,s,me-3,me-2,me-1);Fe(k[0]),Fe(k[1]),Fe(k[2])}function Se(ce,he,D,me){Me(ce),Me(he),Me(me),Me(he),Me(D),Me(me);const k=s.length/3,Q=w.generateSideWallUV(i,s,k-6,k-3,k-2,k-1);Fe(Q[0]),Fe(Q[1]),Fe(Q[3]),Fe(Q[1]),Fe(Q[2]),Fe(Q[3])}function Me(ce){s.push(c[ce*3+0]),s.push(c[ce*3+1]),s.push(c[ce*3+2])}function Fe(ce){o.push(ce.x),o.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return j1(t,i,e)}static fromJSON(e,t){const i=[];for(let o=0,r=e.shapes.length;o<r;o++){const a=t[e.shapes[o]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xc[s.type]().fromJSON(s)),new lt(i,e.options)}}const K1={generateTopUV:function(n,e,t,i,s){const o=e[t*3],r=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new Te(o,r),new Te(a,c),new Te(l,h)]},generateSideWallUV:function(n,e,t,i,s,o){const r=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],d=e[i*3+2],f=e[s*3],p=e[s*3+1],_=e[s*3+2],v=e[o*3],g=e[o*3+1],u=e[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new Te(r,1-c),new Te(l,1-d),new Te(f,1-_),new Te(v,1-u)]:[new Te(a,1-c),new Te(h,1-d),new Te(p,1-_),new Te(g,1-u)]}};function j1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];t.shapes.push(o.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class J1 extends es{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class et extends es{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Et,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fa extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Q1 extends Fa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ml=new ot,uu=new P,du=new P;class Vc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kc,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),Ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ev extends Vc{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=fa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(i!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class tv extends Fa{constructor(e,t,i=0,s=Math.PI/3,o=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=i,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new ev}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fu=new ot,Uo=new P,yl=new P;class nv extends Vc{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Uo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Uo),yl.copy(i.position),yl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(yl),i.updateMatrixWorld(),s.makeTranslation(-Uo.x,-Uo.y,-Uo.z),fu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu)}}class qd extends Fa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new nv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iv extends Vc{constructor(){super(new Dd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zr extends Fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new iv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sv extends x1{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ke(i),s=new Ke(s);const o=t/2,r=e/t,a=e/2,c=[],l=[];for(let f=0,p=0,_=-a;f<=t;f++,_+=r){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const v=f===o?i:s;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}const h=new In;h.setAttribute("position",new Zt(c,3)),h.setAttribute("color",new Zt(l,3));const d=new zc({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ov extends Ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);const mu={type:"change"},Xc={type:"start"},Zd={type:"end"},Hr=new Bc,gu=new Gi,rv=Math.cos(70*np.DEG2RAD),Ft=new P,nn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bl=1e-6;class av extends ov{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:io.ROTATE,MIDDLE:io.DOLLY,RIGHT:io.PAN},this.touches={ONE:Zs.ROTATE,TWO:Zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new vs,this._lastTargetPosition=new P,this._quat=new vs().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pu,this._sphericalDelta=new pu,this._scale=1,this._panOffset=new P,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new P,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cv.bind(this),this._onPointerDown=lv.bind(this),this._onPointerUp=hv.bind(this),this._onContextMenu=_v.bind(this),this._onMouseWheel=fv.bind(this),this._onKeyDown=pv.bind(this),this._onTouchStart=mv.bind(this),this._onTouchMove=gv.bind(this),this._onMouseDown=uv.bind(this),this._onMouseMove=dv.bind(this),this._interceptControlDown=vv.bind(this),this._interceptControlUp=xv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mu),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ft.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Hr.origin.copy(this.object.position),Hr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hr.direction))<rv?this.object.lookAt(this.target):(gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hr.intersectPlane(gu,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bl||this._lastTargetPosition.distanceToSquared(this.target)>bl?(this.dispatchEvent(mu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?nn/60*this.autoRotateSpeed*e:nn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let o=Ft.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,o=t-i.top,r=i.width,a=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function lv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function cv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zd),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uv(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case io.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case io.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case io.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Xc)}function dv(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function fv(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(Xc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Zd))}function pv(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function mv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Zs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case Zs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case Zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Xc)}function gv(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function _v(n){this.enabled!==!1&&n.preventDefault()}function vv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Mv extends Od{constructor(){super();const e=new ze;e.deleteAttribute("uv");const t=new et({side:qt}),i=new et,s=new qd(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const o=new Z(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const r=new Z(e,i);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const a=new Z(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Z(e,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Z(e,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Z(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new Z(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const f=new Z(e,Ws(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new Z(e,Ws(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new Z(e,Ws(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new Z(e,Ws(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new Z(e,Ws(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const u=new Z(e,Ws(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ws(n){const e=new Oc;return e.color.setScalar(n),e}class yv{constructor(){this.aluminum=new et({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.currentFrameColor="silver",this.acrylic=new et({color:9684477,transparent:!0,opacity:.42,roughness:.1,metalness:.1,depthWrite:!1,side:zt}),this.doorGlassLeft=new et({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:zt}),this.doorGlassRight=new et({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:zt}),this.handleMaterial=new et({color:16777215,metalness:.75,roughness:.12,envMapIntensity:1.2}),this.screwSilver=new et({color:11055288,metalness:.85,roughness:.22,envMapIntensity:1}),this.screwSlot=new et({color:1842978,metalness:.1,roughness:.9}),this.grommetMaterial=new et({color:1579035,metalness:.1,roughness:.85}),this.railMaterial=new et({color:4738388,metalness:.15,roughness:.55}),this.endCapMaterial=new et({color:10133670,metalness:.1,roughness:.65}),this.casterWheel=new et({color:1579035,roughness:.7,metalness:.15}),this.casterBracket=new et({color:14212838,roughness:.22,metalness:.85,envMapIntensity:1.2}),this.wireMesh=new et({color:1842463,roughness:.55,metalness:.25,envMapIntensity:.9}),this.silverInnerFrame=new et({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.perchAluminum=new et({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.perchGrayCap=new et({color:10133670,metalness:.1,roughness:.65}),this.perchBlackCap=new et({color:2237222,metalness:.1,roughness:.65}),this.perchWhiteScrew=new et({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.ventCoverAcrylic=new et({color:9684477,transparent:!0,opacity:.5,roughness:.08,metalness:.1,depthWrite:!1,side:zt}),this.ledAluminum=new et({color:14212580,metalness:.8,roughness:.25,envMapIntensity:1.2}),this.ledDiffuser=new et({color:16777215,roughness:.4,metalness:.05}),this.ledEmissive=new et({color:16777215,emissive:16777215,emissiveIntensity:1.5,roughness:.2,metalness:0}),this.ledCable=new et({color:13421772,roughness:.7,metalness:.05}),this.ledBracket=new et({color:8950432,metalness:.6,roughness:.3}),this.thumbScrewMaterial=new et({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.blackMatteAcrylic=new et({color:1579292,roughness:.82,metalness:.04,side:zt}),this.smokeGrayAcrylic=new et({color:2829877,transparent:!0,opacity:.6,roughness:.12,metalness:.1,depthWrite:!1,side:zt}),this.caulkingMaterial=new et({color:13817821,roughness:.42,metalness:.04,envMapIntensity:.6}),this.rubberPackingMaterial=new et({color:7502212,roughness:.78,metalness:.06,envMapIntensity:.5})}createPolycaMaterial(e,t){return new et({map:e,bumpMap:t,bumpScale:1.2,transparent:!0,opacity:.78,roughness:.32,metalness:.1,side:zt,depthWrite:!1})}createPunchingMaterial(e){return new et({color:9684477,alphaMap:e,transparent:!0,opacity:.58,roughness:.35,metalness:.05,side:zt,depthWrite:!1})}setFrameColor(e){this.currentFrameColor=e,e==="black"?(this.aluminum.color.setHex(1974308),this.aluminum.metalness=.28,this.aluminum.roughness=.42,this.aluminum.envMapIntensity=.85,this.endCapMaterial.color.setHex(2237222),this.railMaterial.color.setHex(1974050),this.thumbScrewMaterial.color.setHex(1974050)):(this.aluminum.color.setHex(12897236),this.aluminum.metalness=.85,this.aluminum.roughness=.25,this.aluminum.envMapIntensity=1.3,this.endCapMaterial.color.setHex(10133670),this.railMaterial.color.setHex(4738388),this.thumbScrewMaterial.color.setHex(16119544)),this.aluminum.needsUpdate=!0,this.endCapMaterial.needsUpdate=!0,this.railMaterial.needsUpdate=!0,this.thumbScrewMaterial.needsUpdate=!0}dispose(){this.aluminum.dispose(),this.acrylic.dispose(),this.doorGlassLeft.dispose(),this.doorGlassRight.dispose(),this.handleMaterial.dispose(),this.grommetMaterial.dispose(),this.railMaterial.dispose(),this.endCapMaterial.dispose(),this.casterWheel.dispose(),this.casterBracket.dispose(),this.wireMesh.dispose(),this.silverInnerFrame.dispose(),this.perchAluminum.dispose(),this.perchGrayCap.dispose(),this.perchBlackCap.dispose(),this.perchWhiteScrew.dispose(),this.ventCoverAcrylic.dispose(),this.thumbScrewMaterial.dispose(),this.ledAluminum.dispose(),this.ledDiffuser.dispose(),this.ledEmissive.dispose(),this.ledCable.dispose(),this.ledBracket.dispose(),this.screwSilver.dispose(),this.screwSlot.dispose(),this.blackMatteAcrylic.dispose(),this.smokeGrayAcrylic.dispose()}}function bv(){const n=new dt,e=10,t=3,i=1.8,s=5.5,o=5;n.moveTo(e,e),n.lineTo(e,t),n.lineTo(e-i,t),n.lineTo(e-i,s),n.lineTo(e-o,s),n.lineTo(e-o,-s),n.lineTo(e-i,-s),n.lineTo(e-i,-t),n.lineTo(e,-t),n.lineTo(e,-e),n.lineTo(t,-e),n.lineTo(t,-e+i),n.lineTo(s,-e+i),n.lineTo(s,-e+o),n.lineTo(-s,-e+o),n.lineTo(-s,-e+i),n.lineTo(-t,-e+i),n.lineTo(-t,-e),n.lineTo(-e,-e),n.lineTo(-e,-t),n.lineTo(-e+i,-t),n.lineTo(-e+i,-s),n.lineTo(-e+o,-s),n.lineTo(-e+o,s),n.lineTo(-e+i,s),n.lineTo(-e+i,t),n.lineTo(-e,t),n.lineTo(-e,e),n.lineTo(-t,e),n.lineTo(-t,e-i),n.lineTo(-s,e-i),n.lineTo(-s,e-o),n.lineTo(s,e-o),n.lineTo(s,e-i),n.lineTo(t,e-i),n.lineTo(t,e),n.lineTo(e,e);const r=new Qt;return r.absarc(0,0,2.25,0,Math.PI*2,!0),n.holes.push(r),n}function Sv(){const n=new dt,e=10,t=20,i=3,s=1.8,o=5.5,r=5;n.moveTo(e,t),n.lineTo(e,10+i),n.lineTo(e-s,10+i),n.lineTo(e-s,10+o),n.lineTo(e-r,10+o),n.lineTo(e-r,10-o),n.lineTo(e-s,10-o),n.lineTo(e-s,10-i),n.lineTo(e,10-i),n.lineTo(e,-10+i),n.lineTo(e-s,-10+i),n.lineTo(e-s,-10+o),n.lineTo(e-r,-10+o),n.lineTo(e-r,-10-o),n.lineTo(e-s,-10-o),n.lineTo(e-s,-10-i),n.lineTo(e,-10-i),n.lineTo(e,-t),n.lineTo(i,-t),n.lineTo(i,-t+s),n.lineTo(o,-t+s),n.lineTo(o,-t+r),n.lineTo(-o,-t+r),n.lineTo(-o,-t+s),n.lineTo(-i,-t+s),n.lineTo(-i,-t),n.lineTo(-e,-t),n.lineTo(-e,-10-i),n.lineTo(-e+s,-10-i),n.lineTo(-e+s,-10-o),n.lineTo(-e+r,-10-o),n.lineTo(-e+r,-10+o),n.lineTo(-e+s,-10+o),n.lineTo(-e+s,-10+i),n.lineTo(-e,-10+i),n.lineTo(-e,10-i),n.lineTo(-e+s,10-i),n.lineTo(-e+s,10-o),n.lineTo(-e+r,10-o),n.lineTo(-e+r,10+o),n.lineTo(-e+s,10+o),n.lineTo(-e+s,10+i),n.lineTo(-e,10+i),n.lineTo(-e,t),n.lineTo(-i,t),n.lineTo(-i,t-s),n.lineTo(-o,t-s),n.lineTo(-o,t-r),n.lineTo(o,t-r),n.lineTo(o,t-s),n.lineTo(i,t-s),n.lineTo(i,t),n.lineTo(e,t);const a=new Qt;a.absarc(0,10,2.25,0,Math.PI*2,!0),n.holes.push(a);const c=new Qt;return c.absarc(0,-10,2.25,0,Math.PI*2,!0),n.holes.push(c),n}const Tv=bv(),wv=Sv(),Ev=Cv();function Cv(){const n=new dt,e=10,t=30,i=3,s=1.8,o=5.5,r=5;n.moveTo(e,t),n.lineTo(e,20+i),n.lineTo(e-s,20+i),n.lineTo(e-s,20+o),n.lineTo(e-r,20+o),n.lineTo(e-r,20-o),n.lineTo(e-s,20-o),n.lineTo(e-s,20-i),n.lineTo(e,20-i),n.lineTo(e,i),n.lineTo(e-s,i),n.lineTo(e-s,o),n.lineTo(e-r,o),n.lineTo(e-r,-o),n.lineTo(e-s,-o),n.lineTo(e-s,-i),n.lineTo(e,-i),n.lineTo(e,-20+i),n.lineTo(e-s,-20+i),n.lineTo(e-s,-20+o),n.lineTo(e-r,-20+o),n.lineTo(e-r,-20-o),n.lineTo(e-s,-20-o),n.lineTo(e-s,-20-i),n.lineTo(e,-20-i),n.lineTo(e,-t),n.lineTo(i,-t),n.lineTo(i,-t+s),n.lineTo(o,-t+s),n.lineTo(o,-t+r),n.lineTo(-o,-t+r),n.lineTo(-o,-t+s),n.lineTo(-i,-t+s),n.lineTo(-i,-t),n.lineTo(-e,-t),n.lineTo(-e,-20-i),n.lineTo(-e+s,-20-i),n.lineTo(-e+s,-20-o),n.lineTo(-e+r,-20-o),n.lineTo(-e+r,-20+o),n.lineTo(-e+s,-20+o),n.lineTo(-e+s,-20+i),n.lineTo(-e,-20+i),n.lineTo(-e,-i),n.lineTo(-e+s,-i),n.lineTo(-e+s,-o),n.lineTo(-e+r,-o),n.lineTo(-e+r,o),n.lineTo(-e+s,o),n.lineTo(-e+s,i),n.lineTo(-e,i),n.lineTo(-e,20-i),n.lineTo(-e+s,20-i),n.lineTo(-e+s,20-o),n.lineTo(-e+r,20-o),n.lineTo(-e+r,20+o),n.lineTo(-e+s,20+o),n.lineTo(-e+s,20+i),n.lineTo(-e,20+i),n.lineTo(-e,t),n.lineTo(-i,t),n.lineTo(-i,t-s),n.lineTo(-o,t-s),n.lineTo(-o,t-r),n.lineTo(o,t-r),n.lineTo(o,t-s),n.lineTo(i,t-s),n.lineTo(i,t),n.lineTo(e,t);const a=new Qt;a.absarc(0,20,2.25,0,Math.PI*2,!0),n.holes.push(a);const c=new Qt;c.absarc(0,0,2.25,0,Math.PI*2,!0),n.holes.push(c);const l=new Qt;return l.absarc(0,-20,2.25,0,Math.PI*2,!0),n.holes.push(l),n}function Av(n){return new lt(Tv,{depth:n,bevelEnabled:!1,steps:1})}function Wr(n="bottom"){const e=new dt,t=10,i=3,s=1.8,o=5.5,r=5;e.moveTo(t,t),n==="right"||(e.lineTo(t,i),e.lineTo(t-s,i),e.lineTo(t-s,o),e.lineTo(t-r,o),e.lineTo(t-r,-o),e.lineTo(t-s,-o),e.lineTo(t-s,-i),e.lineTo(t,-i)),e.lineTo(t,-t),n==="bottom"||(e.lineTo(i,-t),e.lineTo(i,-t+s),e.lineTo(o,-t+s),e.lineTo(o,-t+r),e.lineTo(-o,-t+r),e.lineTo(-o,-t+s),e.lineTo(-i,-t+s),e.lineTo(-i,-t)),e.lineTo(-t,-t),n==="left"||(e.lineTo(-t,-i),e.lineTo(-t+s,-i),e.lineTo(-t+s,-o),e.lineTo(-t+r,-o),e.lineTo(-t+r,o),e.lineTo(-t+s,o),e.lineTo(-t+s,i),e.lineTo(-t,i)),e.lineTo(-t,t),n==="top"||(e.lineTo(-i,t),e.lineTo(-i,t-s),e.lineTo(-o,t-s),e.lineTo(-o,t-r),e.lineTo(o,t-r),e.lineTo(o,t-s),e.lineTo(i,t-s),e.lineTo(i,t)),e.lineTo(t,t);const a=new Qt;return a.absarc(0,0,2.25,0,Math.PI*2,!0),e.holes.push(a),e}const _u={top:Wr("top"),bottom:Wr("bottom"),left:Wr("left"),right:Wr("right")};function vu(n,e="bottom"){const t=_u[e]||_u.bottom;return new lt(t,{depth:n,bevelEnabled:!1,steps:1})}function Pv(n){return new lt(wv,{depth:n,bevelEnabled:!1,steps:1})}function Rv(n){return new lt(Ev,{depth:n,bevelEnabled:!1,steps:1})}function Lv(){const n=new dt,e=7.5,t=15,i=3,s=1.5,o=5,r=4.5;n.moveTo(e,t),n.lineTo(e,i),n.lineTo(e-s,i),n.lineTo(e-s,o),n.lineTo(e-r,o),n.lineTo(e-r,-o),n.lineTo(e-s,-o),n.lineTo(e-s,-i),n.lineTo(e,-i),n.lineTo(e,-t),n.lineTo(-e,-t),n.lineTo(-e,-i),n.lineTo(-e+s,-i),n.lineTo(-e+s,-o),n.lineTo(-e+r,-o),n.lineTo(-e+r,o),n.lineTo(-e+s,o),n.lineTo(-e+s,i),n.lineTo(-e,i),n.lineTo(-e,t),n.lineTo(e,t);const a=new Qt;return a.absarc(0,0,2.5,0,Math.PI*2,!0),n.holes.push(a),n}const Dv=Lv();function Iv(n){return new lt(Dv,{depth:n,bevelEnabled:!1,steps:1})}function Fv(){const n=new dt,e=20,t=3,i=1.8,s=5.5,o=5;n.moveTo(e,e),n.lineTo(e,10+t),n.lineTo(e-i,10+t),n.lineTo(e-i,10+s),n.lineTo(e-o,10+s),n.lineTo(e-o,10-s),n.lineTo(e-i,10-s),n.lineTo(e-i,10-t),n.lineTo(e,10-t),n.lineTo(e,-10+t),n.lineTo(e-i,-10+t),n.lineTo(e-i,-10+s),n.lineTo(e-o,-10+s),n.lineTo(e-o,-10-s),n.lineTo(e-i,-10-s),n.lineTo(e-i,-10-t),n.lineTo(e,-10-t),n.lineTo(e,-e),n.lineTo(10+t,-e),n.lineTo(10+t,-e+i),n.lineTo(10+s,-e+i),n.lineTo(10+s,-e+o),n.lineTo(10-s,-e+o),n.lineTo(10-s,-e+i),n.lineTo(10-t,-e+i),n.lineTo(10-t,-e),n.lineTo(-10+t,-e),n.lineTo(-10+t,-e+i),n.lineTo(-10+s,-e+i),n.lineTo(-10+s,-e+o),n.lineTo(-10-s,-e+o),n.lineTo(-10-s,-e+i),n.lineTo(-10-t,-e+i),n.lineTo(-10-t,-e),n.lineTo(-e,-e),n.lineTo(-e,-10-t),n.lineTo(-e+i,-10-t),n.lineTo(-e+i,-10-s),n.lineTo(-e+o,-10-s),n.lineTo(-e+o,-10+s),n.lineTo(-e+i,-10+s),n.lineTo(-e+i,-10+t),n.lineTo(-e,-10+t),n.lineTo(-e,10-t),n.lineTo(-e+i,10-t),n.lineTo(-e+i,10-s),n.lineTo(-e+o,10-s),n.lineTo(-e+o,10+s),n.lineTo(-e+i,10+s),n.lineTo(-e+i,10+t),n.lineTo(-e,10+t),n.lineTo(-e,e),n.lineTo(-10-t,e),n.lineTo(-10-t,e-i),n.lineTo(-10-s,e-i),n.lineTo(-10-s,e-o),n.lineTo(-10+s,e-o),n.lineTo(-10+s,e-i),n.lineTo(-10+t,e-i),n.lineTo(-10+t,e),n.lineTo(10-t,e),n.lineTo(10-t,e-i),n.lineTo(10-s,e-i),n.lineTo(10-s,e-o),n.lineTo(10+s,e-o),n.lineTo(10+s,e-i),n.lineTo(10+t,e-i),n.lineTo(10+t,e),n.lineTo(e,e);const r=[{x:10,y:10},{x:-10,y:10},{x:-10,y:-10},{x:10,y:-10}];for(const a of r){const c=new Qt;c.absarc(a.x,a.y,2.25,0,Math.PI*2,!0),n.holes.push(c)}return n}const Uv=Fv();function Nv(n){return new lt(Uv,{depth:n,bevelEnabled:!1,steps:1})}function Vr(n,e,t=!0){const s=Math.min(2048,Math.max(256,Math.round(n*4))),o=Math.min(2048,Math.max(256,Math.round(e*4))),r=document.createElement("canvas");r.width=s,r.height=o;const a=r.getContext("2d");a.fillStyle="#ffffff",a.fillRect(0,0,s,o),a.fillStyle="#000000";const c=7,h=3.1/2*(s/n),d=15,f={x:35,y:35},p={x:n-35,y:35};for(let v=c/2;v<n;v+=c)for(let g=c/2;g<e;g+=c){if(t){const y=Math.hypot(v-f.x,g-f.y),M=Math.hypot(v-p.x,g-p.y);if(y<d+2.5||M<d+2.5)continue}const u=v/n*s,w=g/e*o;a.beginPath(),a.arc(u,w,h,0,Math.PI*2),a.fill()}if(t){const v=d*(s/n);a.beginPath(),a.arc(f.x/n*s,f.y/e*o,v,0,Math.PI*2),a.arc(p.x/n*s,p.y/e*o,v,0,Math.PI*2),a.fill()}const _=new va(r);return _.wrapS=mn,_.wrapT=mn,_.minFilter=Vt,_.magFilter=Vt,_}function No(n,e){const i=Math.min(1024,Math.max(128,Math.round(n*3))),s=Math.min(2048,Math.max(256,Math.round(e*3))),o=document.createElement("canvas");o.width=i,o.height=s;const r=o.getContext("2d");r.fillStyle="rgba(235, 242, 248, 0.72)",r.fillRect(0,0,i,s);const a=document.createElement("canvas");a.width=i,a.height=s;const c=a.getContext("2d");c.fillStyle="#808080",c.fillRect(0,0,i,s);const h=6/e*s;for(let p=0;p<s;p+=h){const _=Math.min(s,p+h),v=_-p,g=r.createLinearGradient(0,p,0,_);g.addColorStop(0,"rgba(140, 165, 185, 0.95)"),g.addColorStop(.18,"rgba(255, 255, 255, 1.0)"),g.addColorStop(.5,"rgba(220, 235, 248, 0.55)"),g.addColorStop(.82,"rgba(240, 248, 255, 0.80)"),g.addColorStop(1,"rgba(140, 165, 185, 0.95)"),r.fillStyle=g,r.fillRect(0,p,i,v);const u=Math.max(1.5,Math.round(h*.12));r.fillStyle="rgba(90, 115, 135, 0.85)",r.fillRect(0,p,i,u);const w=Math.max(1.5,Math.round(h*.16));r.fillStyle="rgba(255, 255, 255, 0.98)",r.fillRect(0,p+u,i,w);const y=c.createLinearGradient(0,p,0,_);y.addColorStop(0,"#1a1a1a"),y.addColorStop(.2,"#f0f0f0"),y.addColorStop(.5,"#999999"),y.addColorStop(.8,"#d8d8d8"),y.addColorStop(1,"#1a1a1a"),c.fillStyle=y,c.fillRect(0,p,i,v)}const d=new va(o);d.wrapS=mn,d.wrapT=mn,d.minFilter=Vt,d.magFilter=Vt;const f=new va(a);return f.wrapS=mn,f.wrapT=mn,f.minFilter=Vt,f.magFilter=Vt,{map:d,bumpMap:f}}function Gt(n,e,t=!1,i=!1){return t?n==="2040"?"AFS-2040-5":"AFS-2020-5":n==="4040"?e==="black"?"AFS-4040-4-BK":"AFS-4040-4":n==="2060"?"AFS-2060-4":n==="2040"?i&&e==="silver"?"AFSF-2040-4":e==="black"?"AFS-2040-4-BK":"AFS-2040-4":i&&e==="silver"?"AFSF-2020-4":e==="black"?"AFS-2020-4-BK":"AFS-2020-4"}function Je(n,e,t,i=!1,s=!1){const o=Math.round(e);return`${Gt(n,t,i,s)}-${o}`}class Bv{constructor(e){this.materials=e,this.root=new ut,this.root.name="CageRoot",this.frameGroup=new ut,this.frameGroup.name="Frames",this.root.add(this.frameGroup),this.panelGroup=new ut,this.panelGroup.name="Panels",this.root.add(this.panelGroup),this.doorGroup=new ut,this.doorGroup.name="Doors",this.root.add(this.doorGroup),this.feetGroup=new ut,this.feetGroup.name="Feet",this.root.add(this.feetGroup),this.perchGroup=new ut,this.perchGroup.name="Perch",this.root.add(this.perchGroup),this.caulkingGroup=new ut,this.caulkingGroup.name="Caulking",this.root.add(this.caulkingGroup),this.rubberPackingGroup=new ut,this.rubberPackingGroup.name="RubberPacking",this.root.add(this.rubberPackingGroup),this.dividerGroup=new ut,this.dividerGroup.name="RoomDivider",this.root.add(this.dividerGroup),this.ledGroup=new ut,this.ledGroup.name="LED",this.root.add(this.ledGroup),this.params={W:750,D:450,H:300,cageType:"A",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,hasFloorReinforcement:!1,floorSplitCount:2,hasBackReinforcement:!1,backSplitCount:2,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorHeaterSupport:!1,hasPerch:!1,hasRubberPacking:!1,hasRoomDivider:!1,ledType:"none",ledPower:!0,ledBrightness:1,ledColorMode:"white",ledRgbColor:"#ffffff",frontWideFrame:"2x",doorHingeSide:"left",footType:"rubber",showPanels:!0,doorState:"closed",frameColor:"silver",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"}},this.activeGeometries=[],this.activeTextures=[],this.activeMaterials=[],this.partsList=[]}disposeResources(){for(const e of this.activeGeometries)e.dispose();this.activeGeometries=[];for(const e of this.activeTextures)e.dispose();this.activeTextures=[];for(const e of this.activeMaterials)e.dispose();this.activeMaterials=[]}clearGroup(e){for(;e.children.length>0;){const t=e.children[0];e.remove(t)}}addFrameMember(e,t,i,s,o="",r=null,a="bottom",c=null){let l;e==="4040"?l=Nv(t):e==="2060"?l=Rv(t):e==="2040"?l=Pv(t):e==="2020_flat"?l=vu(t,a):l=Av(t),l.translate(0,0,-t/2),this.activeGeometries.push(l);const h=new Z(l,r||this.materials.aluminum);return h.position.copy(i),h.rotation.copy(s),h.castShadow=!0,h.receiveShadow=!0,h.name=o,(c||this.frameGroup).add(h),h}addDoorEndCap(e,t,i,s=null,o=null,r=null){const h=new dt;h.moveTo(-20/2+2,-20/2),h.lineTo(20/2-2,-20/2),h.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),h.lineTo(20/2,20/2-2),h.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),h.lineTo(-20/2+2,20/2),h.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),h.lineTo(-20/2,-20/2+2),h.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const d={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},f=new lt(h,d);f.translate(0,0,-1.5),this.activeGeometries.push(f);const p=new Z(f,o||this.materials.endCapMaterial);return p.position.set(e,t,i),s&&p.rotation.copy(s),p.castShadow=!0,p.receiveShadow=!0,p.name="扉用エンドキャップ",(r||this.frameGroup).add(p),p}addEndCap2040(e,t,i,s=null,o=null,r=null){const h=new dt;h.moveTo(-40/2+2,-20/2),h.lineTo(40/2-2,-20/2),h.absarc(40/2-2,-20/2+2,2,-Math.PI/2,0,!1),h.lineTo(40/2,20/2-2),h.absarc(40/2-2,20/2-2,2,0,Math.PI/2,!1),h.lineTo(-40/2+2,20/2),h.absarc(-40/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),h.lineTo(-40/2,-20/2+2),h.absarc(-40/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const d={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},f=new lt(h,d);f.translate(0,0,-1.5),this.activeGeometries.push(f);const p=new Z(f,o||this.materials.endCapMaterial);return p.position.set(e,t,i),s&&p.rotation.copy(s),p.castShadow=!0,p.receiveShadow=!0,p.name="2040スペーサー用エンドキャップ",(r||this.frameGroup).add(p),p}getLatchBlackMaterial(){return this.latchBlackMaterial||(this.latchBlackMaterial=new et({color:1579034,roughness:.5,metalness:.15,name:"CP294N_Black"}),this.activeMaterials.push(this.latchBlackMaterial)),this.latchBlackMaterial}createSlideLatchMesh(e){const t=new ut,i=this.getLatchBlackMaterial(),s=new dt,o=25,r=70,a=3;s.moveTo(-o/2+a,-r/2),s.lineTo(o/2-a,-r/2),s.quadraticCurveTo(o/2,-r/2,o/2,-r/2+a),s.lineTo(o/2,r/2-a),s.quadraticCurveTo(o/2,r/2,o/2-a,r/2),s.lineTo(-o/2+a,r/2),s.quadraticCurveTo(-o/2,r/2,-o/2,r/2-a),s.lineTo(-o/2,-r/2+a),s.quadraticCurveTo(-o/2,-r/2,-o/2+a,-r/2);const c=new lt(s,{depth:8,bevelEnabled:!1});this.activeGeometries.push(c);const l=new Z(c,i);l.position.set(0,0,0),l.castShadow=!0,t.add(l);for(const O of[-25,25]){const F=new qe(3.5,3.5,3,16);F.rotateX(Math.PI/2),this.activeGeometries.push(F);const U=new Z(F,i);U.position.set(0,O,8.5),t.add(U)}const h=new ut;h.position.set(0,0,8),t.add(h),t.userData.knobPivot=h;const d=e?-1:1,f=e?1:-1,p=new ze(12,28,6);this.activeGeometries.push(p);const _=new Z(p,i);_.position.set(0,0,3),h.add(_);const v=new ze(16,22,2.5);this.activeGeometries.push(v);const g=new Z(v,i);g.position.set(d*10,0,.5),g.castShadow=!0,h.add(g);const u=new dt;e?(u.moveTo(0,0),u.lineTo(-11,0),u.lineTo(-15,-2.8),u.lineTo(-12,-2.8),u.lineTo(-7,0),u.closePath()):(u.moveTo(0,0),u.lineTo(11,0),u.lineTo(15,-2.8),u.lineTo(12,-2.8),u.lineTo(7,0),u.closePath());const w=new lt(u,{depth:14,bevelEnabled:!1});w.translate(0,0,-7),w.rotateX(-Math.PI/2),this.activeGeometries.push(w);const y=new Z(w,i);y.position.set(0,0,-.75),y.castShadow=!0,h.add(y);const M=new ze(10,24,16);this.activeGeometries.push(M);const I=new Z(M,i);I.position.set(f*4,0,8),I.castShadow=!0,h.add(I);const R=new dt;R.moveTo(0,0),R.lineTo(f*8,4),R.lineTo(f*5,10),R.lineTo(f*-2,8),R.closePath();const C=new lt(R,{depth:22,bevelEnabled:!1});C.translate(0,0,-11),C.rotateX(-Math.PI/2),this.activeGeometries.push(C);const L=new Z(C,i);L.position.set(f*4,0,16),L.castShadow=!0,h.add(L);const S=new dt;S.moveTo(0,-9),S.lineTo(12,-9),S.quadraticCurveTo(18,-9,18,0),S.quadraticCurveTo(18,9,12,9),S.lineTo(0,9),S.closePath();const x=new lt(S,{depth:3,bevelEnabled:!1});this.activeGeometries.push(x);const T=new Z(x,i);return e||(T.rotation.y=Math.PI),T.position.set(f*6,0,10),T.castShadow=!0,h.add(T),t}createStrikerAssembly(e){const t=new ut,i=this.materials.acrylic,s=this.getLatchBlackMaterial(),o=e?1:-1;for(const p of[-10,10]){const _=new qe(10,10,5,24);_.rotateX(Math.PI/2),this.activeGeometries.push(_);const v=new Z(_,i);v.position.set(o*10,p,2.5),t.add(v);const g=new qe(3.5,3.5,2.5,16);g.rotateX(Math.PI/2),this.activeGeometries.push(g);const u=new Z(g,s);u.position.set(o*10,p,7.5),t.add(u)}const r=new dt,c=27/2,h=38-c;if(e){r.moveTo(0,-c),r.lineTo(h,-c),r.absarc(h,0,c,-Math.PI/2,Math.PI/2,!1),r.lineTo(0,c),r.closePath();const p=7.5,_=h-1,v=h-7.5,g=new Qt;g.moveTo(v,-p),g.lineTo(_,-p),g.absarc(_,0,p,-Math.PI/2,Math.PI/2,!1),g.lineTo(v,p),g.closePath(),r.holes.push(g);for(const u of[-10,10]){const w=new Qt;w.absarc(10,u,2.2,0,Math.PI*2,!0),r.holes.push(w)}}else{r.moveTo(0,-c),r.lineTo(-h,-c),r.absarc(-h,0,c,-Math.PI/2,-Math.PI*1.5,!0),r.lineTo(0,c),r.closePath();const p=7.5,_=-h+1,v=-h+7.5,g=new Qt;g.moveTo(v,-p),g.lineTo(_,-p),g.absarc(_,0,p,-Math.PI/2,-Math.PI*1.5,!0),g.lineTo(v,p),g.closePath(),r.holes.push(g);for(const u of[-10,10]){const w=new Qt;w.absarc(-10,u,2.2,0,Math.PI*2,!0),r.holes.push(w)}}const d=new lt(r,{depth:1.5,bevelEnabled:!1});this.activeGeometries.push(d);const f=new Z(d,s);return f.position.set(0,0,5),f.castShadow=!0,t.add(f),t}addEndCap(e,t,i){const a=new dt;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const c={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},l=new lt(a,c);l.translate(0,0,-1.5),this.activeGeometries.push(l);const h=new Z(l,this.materials.endCapMaterial);return h.position.set(e,t,i),h.castShadow=!0,h.receiveShadow=!0,h.name="M4エンドキャップ",this.frameGroup.add(h),h}createWireMesh(e,t,i){const s=new ut;s.name=`WireMesh_P${i}_${e}x${t}`;const o=1.6,r=Math.max(2,Math.floor(t/i)+1),a=-((r-1)*i)/2,c=new qe(o,o,e,8);c.rotateZ(Math.PI/2),this.activeGeometries.push(c);for(let f=0;f<r;f++){const p=new Z(c,this.materials.wireMesh);p.position.set(0,o,a+f*i),p.castShadow=!0,s.add(p)}const l=Math.max(2,Math.floor(e/i)+1),h=-((l-1)*i)/2,d=new qe(o,o,t,8);d.rotateX(Math.PI/2),this.activeGeometries.push(d);for(let f=0;f<l;f++){const p=new Z(d,this.materials.wireMesh);p.position.set(h+f*i,-o,0),p.castShadow=!0,s.add(p)}return s}update(e){if(e&&e.panelConfig){this.params.panelConfig=Object.assign({},this.params.panelConfig,e.panelConfig);const U={...e};delete U.panelConfig,Object.assign(this.params,U)}else e&&Object.assign(this.params,e);const{W:t,D:i,H:s,cageType:o,frontWindowH:r,hasSideReinforcement:a,sideOpeningH:c,showPanels:l,frameColor:h,hasFloorReinforcement:d,floorSplitCount:f,hasBackReinforcement:p,backSplitCount:_,hasTopReinforcement:v,footType:g,doorHingeSide:u,hasFloorHeaterSupport:w}=this.params,y=h==="silver",M=(t-80)/3,I=-t/2+30+M,R=t/2-30-M;h&&this.materials.setFrameColor(h),this.clearGroup(this.frameGroup),this.clearGroup(this.panelGroup),this.clearGroup(this.doorGroup),this.clearGroup(this.feetGroup),this.clearGroup(this.perchGroup),this.clearGroup(this.dividerGroup),this.clearGroup(this.caulkingGroup),this.clearGroup(this.rubberPackingGroup),this.clearGroup(this.ledGroup),this.disposeResources(),this._doorAnim=null,this.partsList=[];const C=new Et(0,0,0),L=new Et(0,Math.PI/2,0),S=new Et(Math.PI/2,0,0),x=Math.max(10,s-40),T=Math.max(10,i-6);if(o==="A_FRAMED"){this.addFrameMember("2020",T,new P(-t/2+10,10,0),C,"床・左2020"),this.addFrameMember("2020",T,new P(t/2-10,10,0),C,"床・右2020"),this.recordPart(Je("2020",T,h),T,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const U=Math.max(10,t-40);this.addFrameMember("4040",U,new P(0,20,i/2-20),L,"床・正面4040 (枠囲い下部)"),this.recordPart(Je("4040",U,h),U,1,"正面下部 40x40枠囲い (AFS-4040-4)","frame");const N=Math.max(10,t-40);if(this.addFrameMember("2020",N,new P(0,10,-i/2+10),L,"床・背面2020"),this.recordPart(Je("2020",N,h),N,1,"床面 背面","frame"),d){const he=Math.max(10,i-60),D=y?"2020_flat":"2020";f===3?(this.addFrameMember(D,he,new P(I,10,-10),C,"床・補強2020(左)",null,"top"),this.addFrameMember(D,he,new P(R,10,-10),C,"床・補強2020(右)",null,"top"),this.recordPart(Je("2020",he,h,!1,!0),he,2,"床面 補強フレーム (3分割・D-60mm)","frame")):(this.addFrameMember(D,he,new P(0,10,-10),C,"床・中央補強2020",null,"top"),this.recordPart(Je("2020",he,h,!1,!0),he,1,"床面 中央補強 (2分割・D-60mm)","frame"))}const z=s/2;if(this.addFrameMember("2020",x,new P(-t/2+10,z,-i/2+10),S,"柱・奥左2020"),this.addFrameMember("2020",x,new P(t/2-10,z,-i/2+10),S,"柱・奥右2020"),this.recordPart(Je("2020",x,h),x,2,"柱 (奥2隅)","frame"),p){const he=y?"2020_flat":"2020";_===3?(this.addFrameMember(he,x,new P(I,z,-i/2+10),S,"背面・補強2020(左)"),this.addFrameMember(he,x,new P(R,z,-i/2+10),S,"背面・補強2020(右)"),this.recordPart(Je("2020",x,h,!1,!0),x,2,"背面 補強フレーム (3分割)","frame")):(this.addFrameMember(he,x,new P(0,z,-i/2+10),S,"背面・中央補強2020"),this.recordPart(Je("2020",x,h,!1,!0),x,1,"背面 中央補強 (2分割)","frame"))}this.addFrameMember("2040",x,new P(-t/2+10,z,i/2-20),S,"柱・手前左2040"),this.addFrameMember("2040",x,new P(t/2-10,z,i/2-20),S,"柱・手前右2040"),this.recordPart(Je("2040",x,h),x,2,"柱・正面枠囲い (2040・奥行40mm)","frame");const j=v||t>940,W=this.params.panelConfig||{};let ie=!1;if(j){const he=!!(W.topLeft&&W.topLeft.startsWith("mesh")),D=!!(W.topRight&&W.topRight.startsWith("mesh"));ie=he||D}else ie=!!(W.top&&W.top.startsWith("mesh"));const J=y&&ie,ee=J?"AFS-2020-5":Gt("2020",h),ge=`${ee}-${T}`,ve=J?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",T,new P(-t/2+10,s-10,0),C,"天面・左2020"),this.addFrameMember("2020",T,new P(t/2-10,s-10,0),C,"天面・右2020"),this.recordPart(ge,T,2,ve,"frame",{partCode:ee,lengthMm:T,unitType:"m"});const q=Math.max(10,t-40),se=J?"AFS-2020-5":Gt("2020",h),xe=`${se}-${q}`,ue=J?"天面 背面 (天面金網受用・AFS-2020-5)":"天面 背面";this.addFrameMember("2020",q,new P(0,s-10,-i/2+10),L,"天面・背面2020"),this.recordPart(xe,q,1,ue,"frame",{partCode:se,lengthMm:q,unitType:"m"});const fe=J?"AFS-2040-5":Gt("2040",h),Se=`${fe}-${U}`,Me=J?"正面上部 2040横向き (天面金網受用・AFS-2040-5)":"正面上部 2040横向き (奥行40mm・AFS-2040-4)",Fe=new ot().makeBasis(new P(0,1,0),new P(0,0,1),new P(1,0,0)),ce=new Et().setFromRotationMatrix(Fe);if(this.addFrameMember("2040",U,new P(0,s-10,i/2-20),ce,"天面・手前2040 (横向き枠囲い上部)"),this.recordPart(Se,U,1,Me,"frame",{partCode:fe,lengthMm:U,unitType:"m"}),v||t>940){const he=Math.max(10,i-60),D=J?"AFS-2020-5":Gt("2020",h,!1,!0),me=`${D}-${he}`,k=J?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割・D-60mm)",Q=y&&!J?"2020_flat":"2020";this.addFrameMember(Q,he,new P(0,s-10,-10),C,"天面・中央補強2020",null,"bottom"),this.recordPart(me,he,1,k,"frame",{partCode:D,lengthMm:he,unitType:"m"})}}else if(o==="C_FRAMED"){this.addFrameMember("2020",T,new P(-t/2+10,10,0),C,"床・左2020"),this.addFrameMember("2020",T,new P(t/2-10,10,0),C,"床・右2020"),this.recordPart(Je("2020",T,h),T,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const U=new ot().makeBasis(new P(0,1,0),new P(0,0,1),new P(1,0,0)),N=new Et().setFromRotationMatrix(U),z=Math.max(10,t-40),j=Gt("2040",h),W=`${j}-${z}`;this.addFrameMember("2040",z,new P(0,10,i/2-20),N,"床・正面2040 (横向き枠囲い下部)"),this.recordPart(W,z,1,"床面 正面 2040横向き (枠囲い下部・AFS-2040-4)","frame",{partCode:j,lengthMm:z,unitType:"m"});const ie=Math.max(10,t-40);if(this.addFrameMember("2020",ie,new P(0,10,-i/2+10),L,"床・背面2020"),this.recordPart(Je("2020",ie,h),ie,1,"床面 背面","frame"),d){const ae=Math.max(10,i-60),oe=y?"2020_flat":"2020";f===3?(this.addFrameMember(oe,ae,new P(I,10,-10),C,"床・補強2020(左)",null,"top"),this.addFrameMember(oe,ae,new P(R,10,-10),C,"床・補強2020(右)",null,"top"),this.recordPart(Je("2020",ae,h,!1,!0),ae,2,"床面 補強フレーム (3分割・D-60mm)","frame")):(this.addFrameMember(oe,ae,new P(0,10,-10),C,"床・中央補強2020",null,"top"),this.recordPart(Je("2020",ae,h,!1,!0),ae,1,"床面 中央補強 (2分割・D-60mm)","frame"))}const J=s/2;if(this.addFrameMember("2020",x,new P(-t/2+10,J,-i/2+10),S,"柱・奥左2020"),this.addFrameMember("2020",x,new P(t/2-10,J,-i/2+10),S,"柱・奥右2020"),this.recordPart(Je("2020",x,h),x,2,"柱 (奥2隅)","frame"),p){const ae=y?"2020_flat":"2020";_===3?(this.addFrameMember(ae,x,new P(I,J,-i/2+10),S,"背面・補強2020(左)"),this.addFrameMember(ae,x,new P(R,J,-i/2+10),S,"背面・補強2020(右)"),this.recordPart(Je("2020",x,h,!1,!0),x,2,"背面 補強フレーム (3分割)","frame")):(this.addFrameMember(ae,x,new P(0,J,-i/2+10),S,"背面・中央補強2020"),this.recordPart(Je("2020",x,h,!1,!0),x,1,"背面 中央補強 (2分割)","frame"))}this.addFrameMember("2040",x,new P(-t/2+10,J,i/2-20),S,"柱・手前左2040"),this.addFrameMember("2040",x,new P(t/2-10,J,i/2-20),S,"柱・手前右2040"),this.recordPart(Je("2040",x,h),x,2,"柱・正面枠囲い (2040・奥行40mm)","frame");const ee=30+r,ge=Math.max(10,t-40),ve=Gt("2040",h),q=`${ve}-${ge}`;this.addFrameMember("2040",ge,new P(0,ee,i/2-20),N,"正面・中桟2040 (前窓上・横向き枠囲いレール受)"),this.recordPart(q,ge,1,"正面中桟 2040横向き (前窓上・枠囲い扉レール受)","frame",{partCode:ve,lengthMm:ge,unitType:"m"});const se=v||t>940,xe=this.params.panelConfig||{};let ue=!1;if(se){const ae=!!(xe.topLeft&&xe.topLeft.startsWith("mesh")),oe=!!(xe.topRight&&xe.topRight.startsWith("mesh"));ue=ae||oe}else ue=!!(xe.top&&xe.top.startsWith("mesh"));const fe=y&&ue,Se=fe?"AFS-2020-5":Gt("2020",h),Me=`${Se}-${T}`,Fe=fe?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",T,new P(-t/2+10,s-10,0),C,"天面・左2020"),this.addFrameMember("2020",T,new P(t/2-10,s-10,0),C,"天面・右2020"),this.recordPart(Me,T,2,Fe,"frame",{partCode:Se,lengthMm:T,unitType:"m"});const ce=Math.max(10,t-40),he=fe?"AFS-2020-5":Gt("2020",h),D=`${he}-${ce}`,me=fe?"天面 背面 (天面金網受用・AFS-2020-5)":"天面 背面";this.addFrameMember("2020",ce,new P(0,s-10,-i/2+10),L,"天面・背面2020"),this.recordPart(D,ce,1,me,"frame",{partCode:he,lengthMm:ce,unitType:"m"});const k=fe?"AFS-2040-5":Gt("2040",h),Q=`${k}-${z}`,$=fe?"正面上部 2040横向き (天面金網受用・AFS-2040-5)":"正面上部 2040横向き (奥行40mm・AFS-2040-4)";if(this.addFrameMember("2040",z,new P(0,s-10,i/2-20),N,"天面・手前2040 (横向き枠囲い上部)"),this.recordPart(Q,z,1,$,"frame",{partCode:k,lengthMm:z,unitType:"m"}),v||t>940){const ae=Math.max(10,i-60),oe=fe?"AFS-2020-5":Gt("2020",h,!1,!0),E=`${oe}-${ae}`,b=fe?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割・D-60mm)",B=y&&!fe?"2020_flat":"2020";this.addFrameMember(B,ae,new P(0,s-10,-10),C,"天面・中央補強2020",null,"bottom"),this.recordPart(E,ae,1,b,"frame",{partCode:oe,lengthMm:ae,unitType:"m"})}}else if(o==="A"||o==="A_FRONT"){this.addFrameMember("2020",T,new P(-t/2+10,10,0),C,"床・左2020"),this.addFrameMember("2020",T,new P(t/2-10,10,0),C,"床・右2020"),this.recordPart(Je("2020",T,h),T,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const U=Math.max(10,t-40),N=this.params.frontWideFrame||"2x";N==="3x"?h==="black"?(this.addFrameMember("2040",U,new P(0,20,i/2-10),L,"床・正面2040 (3倍幅下段)"),this.recordPart(Je("2040",U,"black"),U,1,"床面 正面 3倍幅下段 (40mm幅・ブラック)","frame"),this.addFrameMember("2020",U,new P(0,50,i/2-10),L,"床・正面2020 (3倍幅上段)"),this.recordPart(Je("2020",U,"black"),U,1,"床面 正面 3倍幅上段 (20mm幅・ブラック2段構成)","frame")):(this.addFrameMember("2060",U,new P(0,30,i/2-10),L,"床・正面2060 (3倍幅)"),this.recordPart(Je("2060",U,"silver"),U,1,"床面 正面 3倍幅 (AFS-2060-4)","frame")):N==="2x"?(this.addFrameMember("2040",U,new P(0,20,i/2-10),L,"床・正面2040 (2倍幅)"),this.recordPart(Je("2040",U,h),U,1,"床面 正面 2倍幅 (AFS-2040・内側)","frame")):(this.addFrameMember("2020",U,new P(0,10,i/2-10),L,"床・正面2020 (標準幅)"),this.recordPart(Je("2020",U,h),U,1,"床面 正面 (標準2020)","frame"));const z=Math.max(10,t-40);if(this.addFrameMember("2020",z,new P(0,10,-i/2+10),L,"床・背面2020"),this.recordPart(Je("2020",z,h),z,1,"床面 背面","frame"),d){const Se=Math.max(10,i-40),Me=y?"2020_flat":"2020";f===3?(this.addFrameMember(Me,Se,new P(I,10,0),C,"床・補強2020(左)",null,"top"),this.addFrameMember(Me,Se,new P(R,10,0),C,"床・補強2020(右)",null,"top"),this.recordPart(Je("2020",Se,h,!1,!0),Se,2,"床面 補強フレーム (3分割)","frame")):(this.addFrameMember(Me,Se,new P(0,10,0),C,"床・中央補強2020",null,"top"),this.recordPart(Je("2020",Se,h,!1,!0),Se,1,"床面 中央補強 (2分割)","frame"))}const j=s/2;if(this.addFrameMember("2020",x,new P(-t/2+10,j,i/2-10),S,"柱・手前左"),this.addFrameMember("2020",x,new P(t/2-10,j,i/2-10),S,"柱・手前右"),this.addFrameMember("2020",x,new P(-t/2+10,j,-i/2+10),S,"柱・奥左"),this.addFrameMember("2020",x,new P(t/2-10,j,-i/2+10),S,"柱・奥右"),this.recordPart(Je("2020",x,h),x,4,"柱 (4隅・床奥行き乗せ)","frame"),p){const Se=y?"2020_flat":"2020";_===3?(this.addFrameMember(Se,x,new P(I,j,-i/2+10),S,"背面・補強2020(左)"),this.addFrameMember(Se,x,new P(R,j,-i/2+10),S,"背面・補強2020(右)"),this.recordPart(Je("2020",x,h,!1,!0),x,2,"背面 補強フレーム (3分割)","frame")):(this.addFrameMember(Se,x,new P(0,j,-i/2+10),S,"背面・中央補強2020"),this.recordPart(Je("2020",x,h,!1,!0),x,1,"背面 中央補強 (2分割)","frame"))}const W=v||t>940,ie=this.params.panelConfig||{};let J=!1;if(W){const Se=!!(ie.topLeft&&ie.topLeft.startsWith("mesh")),Me=!!(ie.topRight&&ie.topRight.startsWith("mesh"));J=Se||Me}else J=!!(ie.top&&ie.top.startsWith("mesh"));const ee=y&&J,ge=ee?"AFS-2020-5":Gt("2020",h),ve=`${ge}-${T}`,q=ee?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",T,new P(-t/2+10,s-10,0),C,"天面・左2020"),this.addFrameMember("2020",T,new P(t/2-10,s-10,0),C,"天面・右2020"),this.recordPart(ve,T,2,q,"frame",{partCode:ge,lengthMm:T,unitType:"m"});const se=Math.max(10,t-40),xe=ee?"AFS-2020-5":Gt("2020",h),ue=`${xe}-${se}`,fe=ee?"天面 前後 (天面金網受用・AFS-2020-5)":"天面 前後";if(this.addFrameMember("2020",se,new P(0,s-10,-i/2+10),L,"天面・背面2020"),this.addFrameMember("2020",se,new P(0,s-10,i/2-10),L,"天面・手前2020"),this.recordPart(ue,se,2,fe,"frame",{partCode:xe,lengthMm:se,unitType:"m"}),v||t>940){const Se=Math.max(10,i-40),Me=ee?"AFS-2020-5":Gt("2020",h,!1,!0),Fe=`${Me}-${Se}`,ce=ee?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割)",he=y&&!ee?"2020_flat":"2020";this.addFrameMember(he,Se,new P(0,s-10,0),C,"天面・中央補強2020",null,"bottom"),this.recordPart(Fe,Se,1,ce,"frame",{partCode:Me,lengthMm:Se,unitType:"m"})}}else{this.addFrameMember("2020",T,new P(-t/2+10,10,0),C,"床・左2020"),this.addFrameMember("2020",T,new P(t/2-10,10,0),C,"床・右2020"),this.recordPart(Je("2020",T,h),T,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const U=Math.max(10,t-40);if(this.addFrameMember("2020",U,new P(0,10,i/2-10),L,"床・手前2020"),this.addFrameMember("2020",U,new P(0,10,-i/2+10),L,"床・背面2020"),this.recordPart(Je("2020",U,h),U,2,"床面 前後","frame"),d){const Me=Math.max(10,i-40),Fe=y?"2020_flat":"2020";f===3?(this.addFrameMember(Fe,Me,new P(I,10,0),C,"床・補強2020(左)",null,"top"),this.addFrameMember(Fe,Me,new P(R,10,0),C,"床・補強2020(右)",null,"top"),this.recordPart(Je("2020",Me,h,!1,!0),Me,2,"床面 補強フレーム (3分割)","frame")):(this.addFrameMember(Fe,Me,new P(0,10,0),C,"床・中央補強2020",null,"top"),this.recordPart(Je("2020",Me,h,!1,!0),Me,1,"床面 中央補強 (2分割)","frame"))}const N=s/2;if(this.addFrameMember("2020",x,new P(-t/2+10,N,i/2-10),S,"柱・手前左"),this.addFrameMember("2020",x,new P(t/2-10,N,i/2-10),S,"柱・手前右"),this.addFrameMember("2020",x,new P(-t/2+10,N,-i/2+10),S,"柱・奥左"),this.addFrameMember("2020",x,new P(t/2-10,N,-i/2+10),S,"柱・奥右"),this.recordPart(Je("2020",x,h),x,4,"柱 (4隅)","frame"),p){const Me=y?"2020_flat":"2020";_===3?(this.addFrameMember(Me,x,new P(I,N,-i/2+10),S,"背面・補強2020(左)"),this.addFrameMember(Me,x,new P(R,N,-i/2+10),S,"背面・補強2020(右)"),this.recordPart(Je("2020",x,h,!1,!0),x,2,"背面 補強フレーム (3分割)","frame")):(this.addFrameMember(Me,x,new P(0,N,-i/2+10),S,"背面・中央補強2020"),this.recordPart(Je("2020",x,h,!1,!0),x,1,"背面 中央補強 (2分割)","frame"))}const z=v||t>940,j=this.params.panelConfig||{};let W=!1;if(z){const Me=!!(j.topLeft&&j.topLeft.startsWith("mesh")),Fe=!!(j.topRight&&j.topRight.startsWith("mesh"));W=Me||Fe}else W=!!(j.top&&j.top.startsWith("mesh"));const ie=y&&W,J=ie?"AFS-2020-5":Gt("2020",h),ee=`${J}-${T}`,ge=ie?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",T,new P(-t/2+10,s-10,0),C,"天面・左2020"),this.addFrameMember("2020",T,new P(t/2-10,s-10,0),C,"天面・右2020"),this.recordPart(ee,T,2,ge,"frame",{partCode:J,lengthMm:T,unitType:"m"});const ve=Math.max(10,t-40),q=ie?"AFS-2020-5":Gt("2020",h),se=`${q}-${ve}`,xe=ie?"天面 前後 (天面金網受用・AFS-2020-5)":"天面 前後";if(this.addFrameMember("2020",ve,new P(0,s-10,-i/2+10),L,"天面・背面2020"),this.addFrameMember("2020",ve,new P(0,s-10,i/2-10),L,"天面・手前2020"),this.recordPart(se,ve,2,xe,"frame",{partCode:q,lengthMm:ve,unitType:"m"}),v||t>940){const Me=Math.max(10,i-40),Fe=ie?"AFS-2020-5":Gt("2020",h,!1,!0),ce=`${Fe}-${Me}`,he=ie?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割)",D=y&&!ie?"2020_flat":"2020";this.addFrameMember(D,Me,new P(0,s-10,0),C,"天面・中央補強2020",null,"bottom"),this.recordPart(ce,Me,1,he,"frame",{partCode:Fe,lengthMm:Me,unitType:"m"})}const ue=20+r+10,fe=Math.max(10,t-40),Se=y?"2020_flat":"2020";this.addFrameMember(Se,fe,new P(0,ue,i/2-10),L,"正面・中桟2020",null,"right"),this.recordPart(Je("2020",fe,h,!1,!0),fe,1,"正面 中桟 (レール受け)","frame")}const O=[{x:-t/2+10,y:10,z:i/2-1.5},{x:t/2-10,y:10,z:i/2-1.5},{x:-t/2+10,y:s-10,z:i/2-1.5},{x:t/2-10,y:s-10,z:i/2-1.5},{x:-t/2+10,y:10,z:-i/2+1.5},{x:t/2-10,y:10,z:-i/2+1.5},{x:-t/2+10,y:s-10,z:-i/2+1.5},{x:t/2-10,y:s-10,z:-i/2+1.5}];for(const U of O)this.addEndCap(U.x,U.y,U.z);const F=y?"ECP-2020-4-GY":"ECP-2020-4";if(this.recordPart(F,"-",8,"奥行きフレーム両端 (前後計8箇所)","frame",{partCode:F,lengthMm:null,unitType:"piece"}),a){const U=o==="A_FRAMED"||o==="C_FRAMED",N=Math.max(10,U?i-60:i-40),z=U?-10:0,j=c,ie=20+Math.max(10,s-60-j)+10,J=y?"2020_flat":"2020";this.addFrameMember(J,N,new P(-t/2+10,ie,z),C,"側面補強・左2020",null,"right"),this.addFrameMember(J,N,new P(t/2-10,ie,z),C,"側面補強・右2020",null,"left");const ee=U?" (D-60mm)":"";this.recordPart(Je("2020",N,h,!1,!0),N,2,`側面 補強フレーム (左右${ee})`,"frame")}this.buildPanels(L,C),this.buildDoors(),this.buildDoorPartsRecord(),this.params.footType==="caster"?this.buildCasters():this.buildFeet(),this.params.hasPerch&&this.buildPerch(),this.buildCaulking(),this.params.hasRubberPacking&&this.buildRubberPacking(),this.params.hasRoomDivider&&this.buildRoomDivider(),this.params.ledType&&this.params.ledType!=="none"&&this.buildLed(),this.panelGroup.visible=l,this.doorGroup.visible=l,this.caulkingGroup.visible=l,this.rubberPackingGroup.visible=l,this.dividerGroup.visible=l,this.ledGroup.visible=!0}buildPanels(e,t){const{W:i,D:s,H:o,cageType:r,frontWindowH:a,hasSideReinforcement:c,sideOpeningH:l,hasFloorReinforcement:h,floorSplitCount:d,hasBackReinforcement:f,backSplitCount:p,hasTopReinforcement:_,frameColor:v}=this.params,g=this.params.panelConfig||{},u=3,w=g.floor||"acrylic",y=g.back||"acrylic",M=g.side||"acrylic",I=g.sideUpper||"punching",R=g.sideLower||"acrylic",C=g.top||"punching",L=g.topLeft||"punching",S=g.topRight||"punching",x=(i-80)/3,T=-i/2+30+x,O=i/2-30-x,F=r==="A_FRAMED"||r==="C_FRAMED",U=F?s-50:s-30,N=F?-10:0,z=w==="black_matte",j=w==="smoke_gray";let W=this.materials.acrylic,ie="透明アクリル 3.0mm 底板",J="acrylic_extrusion_3_0";if(z?(W=this.materials.blackMatteAcrylic,ie="アクリル黒両面マット 3.0mm 底板",J="acrylic_black_matte_3_0"):j&&(W=this.materials.smokeGrayAcrylic,ie="アクリル グレースモーク半透明 3.0mm 底板",J="acrylic_smoke_gray_3_0"),h)if(d===3){const k=(i-80)/3,Q=Math.round(k+10),$=new ze(Q,u,U);this.activeGeometries.push($);const ae=new Z($,W);ae.position.set(-i/2+20+k/2,20-u/2,N),this.panelGroup.add(ae);const oe=new Z($,W);oe.position.set(0,20-u/2,N),this.panelGroup.add(oe);const E=new Z($,W);E.position.set(i/2-20-k/2,20-u/2,N),this.panelGroup.add(E),this.recordPart(ie,`${Q} x ${U} mm`,3,"床面 (3分割)","panel",{panelCode:J,partCode:J,widthMm:Q,heightMm:U,unitType:"m2"})}else{const k=(i-60)/2,Q=Math.round(k+10),$=new ze(Q,u,U);this.activeGeometries.push($);const ae=new Z($,W);ae.position.set(-k/2-10,20-u/2,N),this.panelGroup.add(ae);const oe=new Z($,W);oe.position.set(k/2+10,20-u/2,N),this.panelGroup.add(oe),this.recordPart(ie,`${Q} x ${U} mm`,2,"床面 (2分割)","panel",{panelCode:J,partCode:J,widthMm:Q,heightMm:U,unitType:"m2"})}else{const k=i-30,Q=new ze(k,u,U);this.activeGeometries.push(Q);const $=new Z(Q,W);$.position.set(0,20-u/2,N),this.panelGroup.add($),this.recordPart(ie,`${k} x ${U} mm`,1,"床面 (1枚)","panel",{panelCode:J,partCode:J,widthMm:k,heightMm:U,unitType:"m2"})}if(this.params.hasFloorHeaterSupport){const k=v==="black"?"ブラック":"ホワイト",Q=2,$=4;if(h&&d===3){const ae=(i-80)/3,oe=Math.round(ae+20),E=s-2,b=80,B=80,G=new dt;G.moveTo(b,-E/2),G.lineTo(oe,-E/2),G.lineTo(oe,E/2),G.lineTo(b,E/2),G.lineTo(0,E/2-B),G.lineTo(0,-E/2+B),G.closePath();const Y={depth:Q,bevelEnabled:!1},K=new lt(G,Y);K.rotateX(Math.PI/2),this.activeGeometries.push(K);const _e=new Z(K,this.materials.acrylic);_e.position.set(-i/2+1,0,0),_e.castShadow=!0,this.panelGroup.add(_e);const pe=K.clone();pe.rotateY(Math.PI),this.activeGeometries.push(pe);const ye=new Z(pe,this.materials.acrylic);ye.position.set(i/2-1,0,0),ye.castShadow=!0,this.panelGroup.add(ye);const Ce=Math.round(ae+20),le=new dt,be=Ce/2,Le=E/2;le.moveTo(-be,-Le),le.lineTo(be,-Le),le.lineTo(be,Le),le.lineTo(-be,Le),le.closePath();const Ue=new lt(le,Y);Ue.rotateX(Math.PI/2),this.activeGeometries.push(Ue);const we=new Z(Ue,this.materials.acrylic);we.position.set(0,0,0),we.castShadow=!0,this.panelGroup.add(we);const He=[{x:-i/2+10,z:-s/2+90},{x:-i/2+90,z:-s/2+10},{x:-i/2+10,z:s/2-90},{x:-i/2+90,z:s/2-10},{x:T,z:-s/2+90},{x:T,z:s/2-90},{x:T,z:-s/4},{x:T,z:s/4},{x:0,z:-s/2+10},{x:0,z:s/2-10},{x:O,z:-s/4},{x:O,z:s/4},{x:i/2-10,z:s/2-90},{x:i/2-90,z:s/2-10},{x:i/2-10,z:-s/2+90},{x:i/2-90,z:-s/2+10},{x:O,z:-s/2+90},{x:O,z:s/2-90}];for(const vt of He)this.addBottomThumbScrew(vt.x,-Q,vt.z);const Ge=Math.max(10,Math.round(ae-10)),je=Math.max(10,Math.round((F?s-60:s-40)-10)),{map:H,bumpMap:Ae}=No(Ge,je);this.activeTextures.push(H,Ae);const re=this.materials.createPolycaMaterial(H,Ae);this.activeMaterials.push(re);const de=new ze(Ge,$,je);this.activeGeometries.push(de);const De=new Z(de,re);De.position.set(-i/2+20+ae/2,$/2,N),this.panelGroup.add(De);const Re=new Z(de,re);Re.position.set(0,$/2,N),this.panelGroup.add(Re);const Ve=new Z(de,re);Ve.position.set(i/2-20-ae/2,$/2,N),this.panelGroup.add(Ve),this.recordPart("床下パネルヒータ支え板 (透明アクリル 2.0mm)",`${oe} x ${E} mm`,3,"床面外側固定 (3分割用・左右2枚+中央1枚・計3枚)","panel",{panelCode:"acrylic_extrusion_2_0",partCode:"acrylic_extrusion_2_0",widthMm:oe,heightMm:E,unitType:"m2"}),this.recordPart("床下パネルヒータ用 緩衝プラダン 4.0mm",`${Ge} x ${je} mm`,3,"床下パネルヒータ緩衝用 (間口-10mm・3枚)","panel",{panelCode:"danplate_4_0",partCode:"danplate_4_0",widthMm:Ge,heightMm:je,unitType:"m2"}),this.recordPart(`No.1 化粧つまみネジ (${k})`,"外径φ15mm / M4 (手締め・工具不要)",18,"床下パネルヒータ支え板 固定用 (計18箇所)","other")}else if(h){const ae=Math.round(i/2+9),oe=s-2,E=80,b=80,B=20,G=Math.max(10,oe-180),Y=new dt;Y.moveTo(E,-oe/2),Y.lineTo(ae,-oe/2),Y.lineTo(ae,oe/2-G),Y.lineTo(ae-B,oe/2-G),Y.lineTo(ae-B,oe/2),Y.lineTo(E,oe/2),Y.lineTo(0,oe/2-b),Y.lineTo(0,-oe/2+b),Y.closePath();const K={depth:Q,bevelEnabled:!1},_e=new lt(Y,K);_e.rotateX(Math.PI/2),this.activeGeometries.push(_e);const pe=new Z(_e,this.materials.acrylic);pe.position.set(-i/2+1,0,0),pe.castShadow=!0,this.panelGroup.add(pe);const ye=_e.clone();ye.rotateY(Math.PI),this.activeGeometries.push(ye);const Ce=new Z(ye,this.materials.acrylic);Ce.position.set(i/2-1,0,0),Ce.castShadow=!0,this.panelGroup.add(Ce);const le=[{x:-i/2+10,z:-s/2+90},{x:-i/2+90,z:-s/2+10},{x:-i/2+10,z:s/2-90},{x:-i/2+90,z:s/2-10},{x:0,z:-s/2+90},{x:-80,z:-s/2+10},{x:-80,z:s/2-10},{x:i/2-10,z:s/2-90},{x:i/2-90,z:s/2-10},{x:i/2-10,z:-s/2+90},{x:i/2-90,z:-s/2+10},{x:0,z:s/2-90},{x:80,z:s/2-10},{x:80,z:-s/2+10}];for(const re of le)this.addBottomThumbScrew(re.x,-Q,re.z);const be=(i-60)/2,Le=Math.max(10,Math.round(be-10)),Ue=Math.max(10,Math.round((F?s-60:s-40)-10)),{map:we,bumpMap:He}=No(Le,Ue);this.activeTextures.push(we,He);const Ge=this.materials.createPolycaMaterial(we,He);this.activeMaterials.push(Ge);const je=new ze(Le,$,Ue);this.activeGeometries.push(je);const H=new Z(je,Ge);H.position.set(-be/2-10,$/2,N),this.panelGroup.add(H);const Ae=new Z(je,Ge);Ae.position.set(be/2+10,$/2,N),this.panelGroup.add(Ae),this.recordPart("床下パネルヒータ支え板 (透明アクリル 2.0mm)",`${ae} x ${oe} mm`,2,"床面外側固定 (2枚互い違い配置・斜めカット各2箇所・切欠き各1箇所・φ6穴各7箇所)","panel",{panelCode:"acrylic_extrusion_2_0",partCode:"acrylic_extrusion_2_0",widthMm:ae,heightMm:oe,unitType:"m2"}),this.recordPart("床下パネルヒータ用 緩衝プラダン 4.0mm",`${Le} x ${Ue} mm`,2,"床下パネルヒータ緩衝用 (間口-10mm・2枚)","panel",{panelCode:"danplate_4_0",partCode:"danplate_4_0",widthMm:Le,heightMm:Ue,unitType:"m2"}),this.recordPart(`No.1 化粧つまみネジ (${k})`,"外径φ15mm / M4 (手締め・工具不要)",14,"床下パネルヒータ支え板 固定用 (計14箇所)","other")}else{const ae=i-2,oe=s-2,E=80,b=new dt,B=ae/2,G=oe/2;b.moveTo(-B+E,-G),b.lineTo(B-E,-G),b.lineTo(B,-G+E),b.lineTo(B,G-E),b.lineTo(B-E,G),b.lineTo(-B+E,G),b.lineTo(-B,G-E),b.lineTo(-B,-G+E),b.closePath();const Y={depth:Q,bevelEnabled:!1},K=new lt(b,Y);K.rotateX(Math.PI/2),this.activeGeometries.push(K);const _e=new Z(K,this.materials.acrylic);_e.position.set(0,0,0),_e.castShadow=!0,this.panelGroup.add(_e);const pe=[{x:-B+90,z:-G+9},{x:-B+9,z:-G+90},{x:B-90,z:-G+9},{x:B-9,z:-G+90},{x:-B+90,z:G-9},{x:-B+9,z:G-90},{x:B-90,z:G-9},{x:B-9,z:G-90},{x:0,z:-G+9},{x:0,z:G-9}];for(const He of pe)this.addBottomThumbScrew(He.x,-Q,He.z);const ye=Math.max(10,Math.round(i-40-10)),Ce=Math.max(10,Math.round((F?s-60:s-40)-10)),{map:le,bumpMap:be}=No(ye,Ce);this.activeTextures.push(le,be);const Le=this.materials.createPolycaMaterial(le,be);this.activeMaterials.push(Le);const Ue=new ze(ye,$,Ce);this.activeGeometries.push(Ue);const we=new Z(Ue,Le);we.position.set(0,$/2,N),this.panelGroup.add(we),this.recordPart("床下パネルヒータ支え板 (透明アクリル 2.0mm)",`${ae} x ${oe} mm`,1,"床面外側固定 (4隅斜めカット80mm・φ6穴10箇所)","panel",{panelCode:"acrylic_extrusion_2_0",partCode:"acrylic_extrusion_2_0",widthMm:ae,heightMm:oe,unitType:"m2"}),this.recordPart("床下パネルヒータ用 緩衝プラダン 4.0mm",`${ye} x ${Ce} mm`,1,"床下パネルヒータ緩衝用 (間口-10mm)","panel",{panelCode:"danplate_4_0",partCode:"danplate_4_0",widthMm:ye,heightMm:Ce,unitType:"m2"}),this.recordPart(`No.1 化粧つまみネジ (${k})`,"外径φ15mm / M4 (手締め・工具不要)",10,"床下パネルヒータ支え板 固定用 (計10箇所)","other")}}const ee=o-30;let ge=1,ve=i-30,q=[0],se="";if(f)if(p===3){ge=3;const k=(i-80)/3;ve=Math.round(k+10),q=[-i/2+20+k/2,0,i/2-20-k/2],se=" (3分割)"}else{ge=2;const k=(i-60)/2;ve=Math.round(k+10),q=[-k/2-10,k/2+10],se=" (2分割)"}if(y==="punching"){const k=Vr(ve,ee,!1);this.activeTextures.push(k);const Q=this.materials.createPunchingMaterial(k);this.activeMaterials.push(Q);const $=new ti(ve,ee);this.activeGeometries.push($);for(const ae of q){const oe=new Z($,Q);oe.position.set(ae,o/2,-s/2+10),this.panelGroup.add(oe)}this.recordPart("塩ビパンチングボード 透明 3.0mm 背板",`${ve} x ${ee} mm`,ge,`背面 (通気パネル・φ3.1-P7${se})`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:ve,heightMm:ee,unitType:"m2"})}else if(y==="polyca"){const{map:k,bumpMap:Q}=No(ve,ee);this.activeTextures.push(k,Q);const $=this.materials.createPolycaMaterial(k,Q);this.activeMaterials.push($);const ae=new ze(ve,ee,4);this.activeGeometries.push(ae);for(const oe of q){const E=new Z(ae,$);E.position.set(oe,o/2,-s/2+10),this.panelGroup.add(E)}this.recordPart("中空ポリカ 4.0mm 背板",`${ve} x ${ee} mm`,ge,`背面 (中空ポリカ・横筋${se})`,"panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:ve,heightMm:ee,unitType:"m2"})}else if(y==="black_matte"){const k=new ze(ve,ee,u);this.activeGeometries.push(k);for(const Q of q){const $=new Z(k,this.materials.blackMatteAcrylic);$.position.set(Q,o/2,-s/2+10),this.panelGroup.add($)}this.recordPart("アクリル黒両面マット 3.0mm 背板",`${ve} x ${ee} mm`,ge,`背面${se}`,"panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:ve,heightMm:ee,unitType:"m2"})}else if(y==="smoke_gray"){const k=new ze(ve,ee,u);this.activeGeometries.push(k);for(const Q of q){const $=new Z(k,this.materials.smokeGrayAcrylic);$.position.set(Q,o/2,-s/2+10),this.panelGroup.add($)}this.recordPart("アクリル グレースモーク半透明 3.0mm 背板",`${ve} x ${ee} mm`,ge,`背面${se}`,"panel",{panelCode:"acrylic_smoke_gray_3_0",partCode:"acrylic_smoke_gray_3_0",widthMm:ve,heightMm:ee,unitType:"m2"})}else{const k=new ze(ve,ee,u);this.activeGeometries.push(k);for(const Q of q){const $=new Z(k,this.materials.acrylic);$.position.set(Q,o/2,-s/2+10),this.panelGroup.add($)}this.recordPart("透明アクリル 3.0mm 背板",`${ve} x ${ee} mm`,ge,`背面${se}`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:ve,heightMm:ee,unitType:"m2"})}const xe=_||i>940,ue=!xe&&C==="punching",fe=xe&&L==="punching"&&S==="punching";let Se="back_top_2";if(ue?Se="top_single_2":fe&&(Se="top_split_4"),Se==="back_top_2"){const k=o-20-35,Q=-s/2+10,$=new qe(19,19,4.5,32);$.rotateX(Math.PI/2),this.activeGeometries.push($);const ae=-(i-40)/2+35,oe=(i-40)/2-35,E=new Z($,this.materials.grommetMaterial);E.position.set(ae,k,Q),this.panelGroup.add(E);const b=new Z($,this.materials.grommetMaterial);b.position.set(oe,k,Q),this.panelGroup.add(b);const B=xe?"背面板 上部左右2箇所 (天面仕様・端から35mm)":"背面板 上部左右 (端から35mm)";this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,B,"other")}const Me=F?s-50:s-30,Fe=F?-10:0,ce=(k,Q,$,ae,oe)=>{const E=oe?`${oe}・`:"",b=oe?`${oe} `:"";if(ae==="punching"){const B=Vr(k,Q,!1);this.activeTextures.push(B);const G=this.materials.createPunchingMaterial(B);this.activeMaterials.push(G);const Y=new ti(k,Q);Y.rotateY(Math.PI/2),this.activeGeometries.push(Y);const K=new Z(Y,G);K.position.set(-i/2+10,$,Fe),this.panelGroup.add(K);const _e=new Z(Y,G);_e.position.set(i/2-10,$,Fe),this.panelGroup.add(_e),this.recordPart(`塩ビパンチングボード 透明 3.0mm 側板 (${E}φ3.1-P7)`,`${k} x ${Q} mm`,2,`左右側面 ${b}(通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:k,heightMm:Q,unitType:"m2"})}else if(ae==="polyca"){const{map:B,bumpMap:G}=No(k,Q);this.activeTextures.push(B,G);const Y=this.materials.createPolycaMaterial(B,G);this.activeMaterials.push(Y);const K=new ze(4,Q,k);this.activeGeometries.push(K);const _e=new Z(K,Y);_e.position.set(-i/2+10,$,Fe),this.panelGroup.add(_e);const pe=new Z(K,Y);pe.position.set(i/2-10,$,Fe),this.panelGroup.add(pe),this.recordPart(`中空ポリカ 4.0mm 側板 (${E}奥行筋)`,`${k} x ${Q} mm`,2,`左右側面 ${b}(中空ポリカ)`,"panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:k,heightMm:Q,unitType:"m2"})}else if(ae==="black_matte"){const B=new ze(u,Q,k);this.activeGeometries.push(B);const G=new Z(B,this.materials.blackMatteAcrylic);G.position.set(-i/2+10,$,Fe),this.panelGroup.add(G);const Y=new Z(B,this.materials.blackMatteAcrylic);Y.position.set(i/2-10,$,Fe),this.panelGroup.add(Y),this.recordPart(`アクリル黒両面マット 3.0mm 側板 (${E})`,`${k} x ${Q} mm`,2,`左右側面 ${b}`,"panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:k,heightMm:Q,unitType:"m2"})}else if(ae==="smoke_gray"){const B=new ze(u,Q,k);this.activeGeometries.push(B);const G=new Z(B,this.materials.smokeGrayAcrylic);G.position.set(-i/2+10,$,Fe),this.panelGroup.add(G);const Y=new Z(B,this.materials.smokeGrayAcrylic);Y.position.set(i/2-10,$,Fe),this.panelGroup.add(Y),this.recordPart(`アクリル グレースモーク半透明 3.0mm 側板 (${E})`,`${k} x ${Q} mm`,2,`左右側面 ${b}`,"panel",{panelCode:"acrylic_smoke_gray_3_0",partCode:"acrylic_smoke_gray_3_0",widthMm:k,heightMm:Q,unitType:"m2"})}else{const B=new ze(u,Q,k);this.activeGeometries.push(B);const G=new Z(B,this.materials.acrylic);G.position.set(-i/2+10,$,Fe),this.panelGroup.add(G);const Y=new Z(B,this.materials.acrylic);Y.position.set(i/2-10,$,Fe),this.panelGroup.add(Y),this.recordPart(`透明アクリル 3.0mm 側板 (${E})`,`${k} x ${Q} mm`,2,`左右側面 ${b}`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:k,heightMm:Q,unitType:"m2"})}};if(c){const k=l,Q=Math.max(10,o-60-k),$=Math.round(Q+10),ae=Math.round(k+10);ce(Me,$,20+Q/2,R,"下部");const oe=o-20-k/2;if(ce(Me,ae,oe,I,"上部"),this.params.hasSideVentCover&&I==="punching"){const b=k+10,B=s-2,G=new ze(1.5,b,B);this.activeGeometries.push(G);const Y=-i/2-1.5/2,K=i/2+1.5/2,_e=new Z(G,this.materials.ventCoverAcrylic);_e.position.set(Y,oe,0),_e.castShadow=!0,this.panelGroup.add(_e);const pe=new Z(G,this.materials.ventCoverAcrylic);pe.position.set(K,oe,0),pe.castShadow=!0,this.panelGroup.add(pe);const ye=(s-2)/2-9,Ce=-(s-2)/2+9,le=oe+b/2-40,be=oe-b/2+40,Le=[{y:le,z:ye},{y:le,z:Ce},{y:be,z:ye},{y:be,z:Ce}];for(const we of Le)this.addThumbScrew(-i/2-1.5,we.y,we.z,-1),this.addThumbScrew(i/2+1.5,we.y,we.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${b} x ${B} mm`,2,"左右側面上部 外張り (φ6mm穴加工4箇所/枚・保温換気調整)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:b,heightMm:B,unitType:"m2"});const Ue=v==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${Ue})`,"外径φ15mm / M4 (手締め・工具不要)",8,"側面換気量調整板 固定用 (左右計8箇所)","other")}}else{const k=o-30;if(ce(Me,k,o/2,M,""),this.params.hasSideVentCover&&M==="punching"){const $=o-40,ae=Math.round($/2+10),oe=s-2,E=new ze(1.5,ae,oe);this.activeGeometries.push(E);const b=-i/2-1.5/2,B=i/2+1.5/2,G=10+ae/2,Y=o-10-ae/2,K=new Z(E,this.materials.ventCoverAcrylic);K.position.set(b,G,0),K.castShadow=!0,this.panelGroup.add(K);const _e=new Z(E,this.materials.ventCoverAcrylic);_e.position.set(B,G,0),_e.castShadow=!0,this.panelGroup.add(_e);const pe=new Z(E,this.materials.ventCoverAcrylic);pe.position.set(b,Y,0),pe.castShadow=!0,this.panelGroup.add(pe);const ye=new Z(E,this.materials.ventCoverAcrylic);ye.position.set(B,Y,0),ye.castShadow=!0,this.panelGroup.add(ye);const Ce=(s-2)/2-9,le=-(s-2)/2+9,be=Math.max(25,10+Math.min(30,ae*.2)),Le=Math.min(o/2-15,o/2-Math.min(25,ae*.2)),Ue=Math.max(o/2+15,o/2+Math.min(25,ae*.2)),we=Math.min(o-25,o-10-Math.min(30,ae*.2)),He=[{y:Le,z:Ce},{y:Le,z:le},{y:be,z:Ce},{y:be,z:le},{y:we,z:Ce},{y:we,z:le},{y:Ue,z:Ce},{y:Ue,z:le}];for(const je of He)this.addThumbScrew(-i/2-1.5,je.y,je.z,-1),this.addThumbScrew(i/2+1.5,je.y,je.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${ae} x ${oe} mm`,4,"左右側面外張り (上下各2枚・φ6mm穴加工4箇所/枚・保温換気調整)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:ae,heightMm:oe,unitType:"m2"});const Ge=v==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${Ge})`,"外径φ15mm / M4 (手締め・工具不要)",16,"側面換気量調整板 固定用 (左右計16箇所)","other")}}const he=(k,Q,$,ae,oe,E=!1)=>{const b=ae&&ae.startsWith("mesh"),B=v==="black";if(b){const G=parseInt(ae.replace("mesh",""),10);if(B){const Y=Math.max(10,Math.round(Q-6)),K=Math.max(10,Math.round(k-46)),_e=$-k/2+10,pe=$+k/2-10;this.addFrameMember("2020",Y,new P(_e,o-10,D),t,`天面インナー左2020 (${oe})`,this.materials.silverInnerFrame),this.addFrameMember("2020",Y,new P(pe,o-10,D),t,`天面インナー右2020 (${oe})`,this.materials.silverInnerFrame);const ye=D+Q/2-10,Ce=D-Q/2+10;this.addFrameMember("2020",K,new P($,o-10,ye),e,`天面インナー前2020 (${oe})`,this.materials.silverInnerFrame),this.addFrameMember("2020",K,new P($,o-10,Ce),e,`天面インナー後2020 (${oe})`,this.materials.silverInnerFrame),this.recordPart(Je("2020",Y,"silver",!0),Y,2,`天面 金網取付用インナーフレーム左右 (${oe}・黒ケージ専用)`,"frame",{partCode:"AFS-2020-5",lengthMm:Y,unitType:"m"}),this.recordPart(Je("2020",K,"silver",!0),K,2,`天面 金網取付用インナーフレーム前後 (${oe}・黒ケージ専用)`,"frame",{partCode:"AFS-2020-5",lengthMm:K,unitType:"m"});const le=Math.max(10,Math.round(k-30)),be=Math.max(10,Math.round(Q-30)),Le=this.createWireMesh(le,be,G);Le.position.set($,o-10,D),this.panelGroup.add(Le);const Ue=`FENP${G}-A${le}-B${be}`,we=`wire_mesh_${G}`;this.recordPart(`金網 ${G}mmピッチ（黒粉体塗装） (型番: ${Ue})`,`${le} x ${be} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${oe})`,"panel",{panelCode:we,partCode:we,widthMm:le,heightMm:be,unitType:"m2"})}else{const Y=Math.max(10,Math.round(k+10)),K=Math.max(10,Math.round(Q+10)),_e=this.createWireMesh(Y,K,G);_e.position.set($,o-10,D),this.panelGroup.add(_e);const pe=`FENP${G}-A${Y}-B${K}`,ye=`wire_mesh_${G}`;this.recordPart(`金網 ${G}mmピッチ（黒粉体塗装） (型番: ${pe})`,`${Y} x ${K} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${oe})`,"panel",{panelCode:ye,partCode:ye,widthMm:Y,heightMm:K,unitType:"m2"})}}else if(ae==="acrylic"){const G=Math.round(k+10),Y=Math.round(Q+10),K=new ze(G,u,Y);this.activeGeometries.push(K);const _e=new Z(K,this.materials.acrylic);_e.position.set($,o-20+u/2,D),this.panelGroup.add(_e),this.recordPart("透明アクリル 3.0mm 天板",`${G} x ${Y} mm`,1,`天面 (${oe})`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:G,heightMm:Y,unitType:"m2"})}else{const G=Math.round(k+10),Y=Math.round(Q+10),K=Vr(G,Y,E);this.activeTextures.push(K);const _e=this.materials.createPunchingMaterial(K);this.activeMaterials.push(_e);const pe=new ti(G,Y);pe.rotateX(-Math.PI/2),this.activeGeometries.push(pe);const ye=new Z(pe,_e);if(ye.position.set($,o-20+u/2,D),this.panelGroup.add(ye),this.recordPart("塩ビパンチングボード 透明 3.0mm 天板 (φ3.1-P7)",`${G} x ${Y} mm`,1,`天面 (${oe}・通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:G,heightMm:Y,unitType:"m2"}),E){const Ce=new qe(19,19,4.5,32);this.activeGeometries.push(Ce);const le=o-20+u/2,be=D-Y/2+35,Le=$-G/2+35,Ue=$+G/2-35,we=new Z(Ce,this.materials.grommetMaterial);we.position.set(Le,le,be),this.panelGroup.add(we);const He=new Z(Ce,this.materials.grommetMaterial);He.position.set(Ue,le,be),this.panelGroup.add(He)}}},D=F?-10:0,me=F?s-60:s-40;if(xe){const k=(i-60)/2,Q=-k/2-10,$=k/2+10,ae=Se==="top_split_4";he(k,me,Q,L,"左側",ae),he(k,me,$,S,"右側",ae),Se==="top_split_4"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",4,"天面板 奥側各2箇所 (計4箇所・端から35mm)","other")}else{const k=Se==="top_single_2";he(i-40,me,0,C,"全面",k),Se==="top_single_2"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,"天面板 奥側左右 (端から35mm)","other")}if(r==="C"||r==="C_FRAMED"){const k=i-30,Q=a+10,$=new ze(k,Q,u);this.activeGeometries.push($);const ae=new Z($,this.materials.acrylic);ae.position.set(0,20+a/2,s/2-10),this.panelGroup.add(ae),this.recordPart("透明アクリル 3.0mm 前窓",`${k} x ${Q} mm`,1,"正面 下部はめ殺し固定窓","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:k,heightMm:Q,unitType:"m2"})}}buildGlassRails(e,t,i,s){const{frameColor:o}=this.params,r=new dt;r.moveTo(-8,2.5),r.lineTo(-6.5,2.5),r.lineTo(-6.5,7),r.lineTo(-5,7),r.lineTo(-5,2),r.lineTo(-1.5,2),r.lineTo(-1.5,7),r.lineTo(1.5,7),r.lineTo(1.5,2),r.lineTo(5,2),r.lineTo(5,7),r.lineTo(6.5,7),r.lineTo(6.5,2.5),r.lineTo(8,2.5),r.lineTo(8,0),r.lineTo(-8,0),r.closePath();const a={depth:e,bevelEnabled:!1,steps:1},c=new lt(r,a);c.translate(0,0,-e/2),c.rotateY(-Math.PI/2),this.activeGeometries.push(c);const l=new Z(c,this.materials.railMaterial);l.position.set(0,t,s),l.castShadow=!0,l.receiveShadow=!0,l.name="下側ガラスレール",this.doorGroup.add(l);const h=new dt;h.moveTo(-8,12-2.5),h.lineTo(-6.5,12-2.5),h.lineTo(-6.5,0),h.lineTo(-5,0),h.lineTo(-5,11),h.lineTo(-1.5,11),h.lineTo(-1.5,0),h.lineTo(1.5,0),h.lineTo(1.5,11),h.lineTo(5,11),h.lineTo(5,0),h.lineTo(6.5,0),h.lineTo(6.5,12-2.5),h.lineTo(8,12-2.5),h.lineTo(8,12),h.lineTo(-8,12),h.closePath();const d={depth:e,bevelEnabled:!1,steps:1},f=new lt(h,d);f.translate(0,0,-e/2),f.rotateY(-Math.PI/2),this.activeGeometries.push(f);const p=new Z(f,this.materials.railMaterial);p.position.set(0,i-12,s),p.castShadow=!0,p.receiveShadow=!0,p.name="上側ガラスレール",this.doorGroup.add(p)}buildAntiFlexRails(e,t,i,s,o,r){const a=Math.max(10,t-25),c=new dt;c.moveTo(-8,2.5),c.lineTo(-6.5,2.5),c.lineTo(-6.5,7),c.lineTo(-5,7),c.lineTo(-5,2),c.lineTo(-1.5,2),c.lineTo(-1.5,7),c.lineTo(1.5,7),c.lineTo(1.5,2),c.lineTo(5,2),c.lineTo(5,7),c.lineTo(6.5,7),c.lineTo(6.5,2.5),c.lineTo(8,2.5),c.lineTo(8,0),c.lineTo(-8,0),c.closePath();const l={depth:a,bevelEnabled:!1,steps:1},h=(i+7+s-12)/2,d=new lt(c,l);d.translate(0,0,-a/2);const f=new ot().set(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);d.applyMatrix4(f),this.activeGeometries.push(d);const p=new Z(d,this.materials.railMaterial);p.position.set(-e/2,h,o),p.castShadow=!0,p.receiveShadow=!0,p.name="左側たわみ防止レール",this.doorGroup.add(p);const _=new lt(c,l);_.translate(0,0,-a/2);const v=new ot().set(0,-1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);_.applyMatrix4(v),this.activeGeometries.push(_);const g=new Z(_,this.materials.railMaterial);g.position.set(e/2,h,o),g.castShadow=!0,g.receiveShadow=!0,g.name="右側たわみ防止レール",this.doorGroup.add(g)}buildFramedDoors(){const{W:e,D:t,H:i,doorState:s,frameColor:o,cageType:r,frontWindowH:a}=this.params,c=o==="silver",l=r==="C_FRAMED",h=Math.max(10,e-40),d=Math.max(10,l?i-60-a:i-60),f=Math.max(10,Math.round(h/2+12)),p=Math.max(10,d-42),_=Math.max(10,f-64),v=Math.max(10,p+10),g=l?40+a:40,u=i-20,w=(g+u)/2,y=g+11,M=u-11,I=3,R=2,C=-h/2+R+I+f/2,L=h/2-R-I-f/2,S=Math.max(0,f-85);let x=C,T=L;s==="left_open"?x=C+S:s==="right_open"&&(T=L-S);let O=x,F=T;this._doorAnim&&!this._doorAnim.isFrontOpen&&(O=this._doorAnim.currentLeftX??x,F=this._doorAnim.currentRightX??T);const U=t/2-30,N=t/2-10,z=c?this.materials.aluminum:this.materials.blackFrame,j=c?this.materials.perchGrayCap:this.materials.endCapMaterial,W=new ot().makeBasis(new P(0,0,-1),new P(0,1,0),new P(1,0,0)),ie=new Et().setFromRotationMatrix(W),J=new ot().makeBasis(new P(0,0,1),new P(1,0,0),new P(0,1,0)),ee=new Et().setFromRotationMatrix(J),ge=ue=>{const fe=new ut;this.addFrameMember(c?"2020_flat":"2020",f,new P(0,y,0),ie,"扉下フレーム2020",z,"right",fe),this.addFrameMember(c?"2020_flat":"2020",f,new P(0,M,0),ie,"扉上フレーム2020",z,"right",fe),this.addFrameMember("2040",p,new P(-f/2+17,w,0),ee,"扉左縦フレーム2040",z,null,fe),this.addFrameMember("2040",p,new P(f/2-17,w,0),ee,"扉右縦フレーム2040",z,null,fe);const Se=new ze(_,v,3);this.activeGeometries.push(Se);const Me=new Z(Se,this.materials.acrylic);Me.position.set(0,w,0),Me.castShadow=!0,fe.add(Me);const Fe=new Et(0,-Math.PI/2,0),ce=new Et(0,Math.PI/2,0);if(this.addDoorEndCap(-f/2-1.5,y,0,Fe,j,fe),this.addDoorEndCap(f/2+1.5,y,0,ce,j,fe),this.addDoorEndCap(-f/2-1.5,M,0,Fe,j,fe),this.addDoorEndCap(f/2+1.5,M,0,ce,j,fe),ue){this.addFrameMember("2040",94,new P(-f/2+17,w,20),ee,"左扉スペーサー2040",z,null,fe);const he=new Et(-Math.PI/2,0,0),D=new Et(Math.PI/2,0,0);this.addEndCap2040(-f/2+17,w+47+1.5,20,he,j,fe),this.addEndCap2040(-f/2+17,w-47-1.5,20,D,j,fe);const me=this.createSlideLatchMesh(!0);me.position.set(-f/2+17,w,30),fe.add(me),fe.userData.latchKnob=me.userData.knobPivot}else{const he=this.createSlideLatchMesh(!1);he.position.set(f/2-17,w,10),fe.add(he),fe.userData.latchKnob=he.userData.knobPivot}return fe},ve=ge(!0);ve.position.set(O,0,U),this.doorGroup.add(ve);const q=ge(!1);q.position.set(F,0,N),this.doorGroup.add(q);const se=this.createStrikerAssembly(!0);se.position.set(-e/2,w,t/2),this.doorGroup.add(se);const xe=this.createStrikerAssembly(!1);xe.position.set(e/2,w,t/2),this.doorGroup.add(xe),this._doorAnim={isFramed:!0,leftDoor:ve,rightDoor:q,leftLatchKnob:ve.userData.latchKnob,rightLatchKnob:q.userData.latchKnob,baseLeftCenterX:C,baseRightCenterX:L,leftKnobGroup:null,rightKnobGroup:null,lockGroup:null,leftKnobOffsetX:0,rightKnobOffsetX:0,lockOffsetX:0,currentLeftX:O,currentRightX:F,targetLeftX:x,targetRightX:T,animating:O!==x||F!==T,startLeftX:O,startRightX:F,startTime:performance.now(),duration:1600}}buildDoors(){this.clearGroup(this.doorGroup);const{W:e,D:t,H:i,cageType:s,frontWindowH:o,doorState:r,hasDoorAntiFlex:a,frameColor:c}=this.params;if(s==="A_FRAMED"||s==="C_FRAMED"){this.buildFramedDoors();return}if(s==="A_FRONT"){this.buildFrontOpenDoor();return}const l=e-40;let h=(l+30)/2;a&&(h-=2);let d=0;const f=i-20;if(s==="A"){const ve=this.params.frontWideFrame||"2x";ve==="3x"?d=60:ve==="2x"?d=40:d=20}else d=40+o;const p=Math.max(10,f-d),_=t/2-10;this.buildGlassRails(l,d,f,_),a&&this.buildAntiFlexRails(l,p,d,f,_,c);const v=Math.max(10,p-9),g=d+2.5+v/2,u=3,w=new ze(h,v,u);this.activeGeometries.push(w);const y=Math.max(0,h-50),M=_-3.25,I=_+3.25,R=a?2:0,C=-l/2+R+h/2,L=l/2-R-h/2;let S=C,x=L;r==="left_open"?S=C+y:r==="right_open"&&(x=L-y);let T=S,O=x;this._doorAnim&&(T=this._doorAnim.currentLeftX,O=this._doorAnim.currentRightX);const F=new Z(w,this.materials.doorGlassLeft);F.position.set(T,g,M),F.castShadow=!1,this.doorGroup.add(F);const U=-h/2+15,N=this.addKnobScrew(T+U,g,M+u/2),z=new Z(w,this.materials.doorGlassRight);z.position.set(O,g,I),z.castShadow=!1,this.doorGroup.add(z);const j=h/2-15,W=this.addKnobScrew(O+j,g,I+u/2),J=g-v/2+20,ee=-h/2+15,ge=this.addDoorLock(O+ee,J,I+u/2);this._doorAnim={leftDoor:F,rightDoor:z,leftKnobGroup:N,rightKnobGroup:W,lockGroup:ge,leftKnobOffsetX:U,rightKnobOffsetX:j,lockOffsetX:ee,currentLeftX:T,currentRightX:O,targetLeftX:S,targetRightX:x,animating:T!==S||O!==x,startLeftX:T,startRightX:O,startTime:performance.now(),duration:3e3}}addCountersunkPhillipsScrew(e,t,i,s,o=0){const r=new qe(3.5,2,1.2,16);r.rotateX(Math.PI/2),this.activeGeometries.push(r);const a=new Z(r,this.materials.screwSilver);a.position.set(t,i,s),e.add(a);const c=new ze(3.8,.7,.4),l=new ze(.7,3.8,.4);this.activeGeometries.push(c,l);const h=new Z(c,this.materials.screwSlot),d=new Z(l,this.materials.screwSlot);h.position.set(t,i,s+.5),d.position.set(t,i,s+.5),o!==0&&(h.rotation.z=o,d.rotation.z=o),e.add(h),e.add(d)}buildFrontOpenDoor(){const{W:e,D:t,H:i,doorState:s}=this.params;let o=40;const r=this.params.frontWideFrame||"2x";r==="3x"?o=60:r==="2x"?o=40:o=20;const a=i-20,c=o-18,l=a+18,h=l-c,d=(c+l)/2,f=e-2-21.3,p=3,_=t/2,v=-e/2+21.3,g=e/2-2,u=(v+g)/2,w=c+h*1/4,y=c+h*3/4,M=19,I=52,R=-h/4+I/2,C=-h/4-I/2,L=h/4+I/2,S=h/4-I/2,x=10,T=f/2,O=h/2,F=Math.min(x,T/4,O/4),U=this.params.doorHingeSide==="right",N=new dt;U?(N.moveTo(-T+F,-O),N.lineTo(T-F,-O),N.absarc(T-F,-O+F,F,-Math.PI/2,0,!1),N.lineTo(T,O-F),N.absarc(T-F,O-F,F,0,Math.PI/2,!1),N.lineTo(-T+F,O),N.absarc(-T+F,O-F,F,Math.PI/2,Math.PI,!1),N.lineTo(-T,L),N.lineTo(-T+M,L),N.lineTo(-T+M,S),N.lineTo(-T,S),N.lineTo(-T,R),N.lineTo(-T+M,R),N.lineTo(-T+M,C),N.lineTo(-T,C),N.lineTo(-T,-O+F),N.absarc(-T+F,-O+F,F,Math.PI,Math.PI*1.5,!1)):(N.moveTo(-T+F,-O),N.lineTo(T-F,-O),N.absarc(T-F,-O+F,F,-Math.PI/2,0,!1),N.lineTo(T,C),N.lineTo(T-M,C),N.lineTo(T-M,R),N.lineTo(T,R),N.lineTo(T,S),N.lineTo(T-M,S),N.lineTo(T-M,L),N.lineTo(T,L),N.lineTo(T,O-F),N.absarc(T-F,O-F,F,0,Math.PI/2,!1),N.lineTo(-T+F,O),N.absarc(-T+F,O-F,F,Math.PI/2,Math.PI,!1),N.lineTo(-T,-O+F),N.absarc(-T+F,-O+F,F,Math.PI,Math.PI*1.5,!1));const z={steps:1,depth:p,bevelEnabled:!1},j=new lt(N,z);this.activeGeometries.push(j);const W=new Z(j,this.materials.doorGlassRight);W.castShadow=!1;const ie=U?e/2-10-11.25:-e/2+10+11.25,J=_+p,ee=new ut;ee.name="FrontOpenDoorPivot",ee.position.set(ie,0,J),W.position.set(u-ie,d,-p),ee.add(W);const ge=U?e/2-10:-e/2+10,ve=U?-e/2+10:e/2-10;this.addHingeTH31(ge,ie,y,_,p,ee,U),this.addHingeTH31(ge,ie,w,_,p,ee,U);const q=[];this.addLockC1249(ve,y,_,p,ie,ee,q,U),this.addLockC1249(ve,w,_,p,ie,ee,q,U),this.doorGroup.add(ee);const se=s==="open"||s==="left_open"||s==="right_open",xe=se?U?Math.PI*(120/180):-Math.PI*(120/180):0,ue=se?U?-Math.PI*1.5:Math.PI*1.5:0;let fe=xe,Se=ue;this._doorAnim&&typeof this._doorAnim.currentRotY=="number"&&(fe=this._doorAnim.currentRotY,Se=this._doorAnim.currentLockRotZ??ue),ee.rotation.y=fe;for(const Me of q)Me.rotation.z=Se;this._doorAnim={isFrontOpen:!0,doorPivot:ee,lockPivots:q,currentRotY:fe,targetRotY:xe,currentLockRotZ:Se,targetLockRotZ:ue,startRotY:fe,startLockRotZ:Se,animating:Math.abs(fe-xe)>.001||Math.abs(Se-ue)>.001,startTime:performance.now(),duration:2200}}addHingeTH31(e,t,i,s,o,r,a=!1){const c=this.materials.handleMaterial,l=s+o,h=new ze(16,52,o);this.activeGeometries.push(h);const d=new Z(h,this.materials.acrylic);d.position.set(e,i,s+o/2),this.doorGroup.add(d);const f=new ze(18,50,1.5);this.activeGeometries.push(f);const p=new Z(f,c),_=a?t+9:t-9;p.position.set(_,i,l+.75),p.castShadow=!0,this.doorGroup.add(p);const v=e;for(const R of[-17,8.5])this.addCountersunkPhillipsScrew(this.doorGroup,v,i+R,l+1.5,Math.PI/4);const g=new qe(2.5,2.5,50,16);this.activeGeometries.push(g);const u=new Z(g,c);u.position.set(0,i,0),r.add(u);const w=new ze(18,50,1.5);this.activeGeometries.push(w);const y=new Z(w,c),M=a?-9:9;y.position.set(M,i,.75),y.castShadow=!0,r.add(y);const I=a?-11.25:11.25;for(const R of[-8.5,17])this.addCountersunkPhillipsScrew(r,I,i+R,1.5,Math.PI/6)}addLockC1249(e,t,i,s,o,r,a,c=!1){const l=this.materials.handleMaterial,h=i+s,d=new ze(16,48,s);this.activeGeometries.push(d);const f=new Z(d,this.materials.acrylic);f.position.set(e,t,i+s/2),this.doorGroup.add(f);const p=new ze(16,46,2);this.activeGeometries.push(p);const _=new Z(p,l);_.position.set(e,t,h+1),this.doorGroup.add(_);for(const U of[-15,15])this.addCountersunkPhillipsScrew(this.doorGroup,e,t+U,h+2,Math.PI/4);const v=new ze(14,16,12);this.activeGeometries.push(v);const g=new Z(v,l);g.position.set(e,t,h+2+6),this.doorGroup.add(g);const w=(c?-this.params.W/2+29:this.params.W/2-29)-o,y=new ze(16,46,2);this.activeGeometries.push(y);const M=new Z(y,l);M.position.set(w,t,1),r.add(M);for(const U of[-15,15])this.addCountersunkPhillipsScrew(r,w,t+U,2,Math.PI/3);const I=new ut;I.name="LockArmPivot",I.position.set(w,t,2);const R=new qe(3,3,3,16);R.rotateX(Math.PI/2),this.activeGeometries.push(R);const C=new Z(R,l);C.position.set(0,0,1.5),I.add(C);const L=new ze(38,14,2.5);this.activeGeometries.push(L);const S=new Z(L,l),x=c?-19:19;S.position.set(x,0,6),I.add(S);const T=new qe(3.5,3.5,14,16);T.rotateX(Math.PI/2),this.activeGeometries.push(T);const O=new Z(T,l),F=c?-18:18;O.position.set(F,0,13),I.add(O),r.add(I),a&&a.push(I)}buildFramedDoorPartsRecord(){const{W:e,H:t,frameColor:i,cageType:s,frontWindowH:o}=this.params,r=i==="silver",a=s==="C_FRAMED",c=Math.max(10,e-40),l=Math.max(10,a?t-60-o:t-60),h=Math.max(10,Math.round(c/2+12)),d=Math.max(10,l-42),f=Math.max(10,h-64),p=Math.max(10,d+10),_=r?"AFSF-2020-4":"AFS-2020-4-BK",v=`${_}-${h}`;this.recordPart(v,`${h} mm`,4,"正面枠囲い扉 幅方向フレーム (上下各2本・計4本)","frame",{partCode:_,lengthMm:h,unitType:"m"});const g=r?"AFSF-2040-4":"AFS-2040-4-BK",u=`${g}-${d}`;this.recordPart(u,`${d} mm`,4,"正面枠囲い扉 高さ方向フレーム (左右各2本・計4本)","frame",{partCode:g,lengthMm:d,unitType:"m"});const w=r?"ECP-2020-4-GY":"ECP-2020-4",y=r?"ECP-2020-4-GY (グレー)":"ECP-2020-4 (ブラック)";this.recordPart(w,"-",8,`正面枠囲い扉 幅フレーム端部 (${y})`,"rail_cap",{partCode:w,unitType:"piece"}),this.recordPart("透明アクリル 3.0mm 扉板",`${f} x ${p} mm`,2,"正面枠囲い扉 (透明押出板3.0mm)","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:f,heightMm:p,unitType:"m2"});const M=h-22,I=14;this.recordPart("アクリル黒両面マット 3.0mm (スライド部材)",`${M} x ${I} mm`,4,"正面枠囲い扉 スライド用部材 (厚さ3mm)","panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:M,heightMm:I,unitType:"m2"});const R=r?"AFS-2040-4":"AFS-2040-4-BK",C=`${R}-94`;this.recordPart(C,"94 mm",1,"正面枠囲い扉 左扉ラッチ高さ合わせ用スペーサーフレーム","frame",{partCode:R,lengthMm:94,unitType:"m"});const L=r?"ECP-2040-4-GY":"ECP-2040-4",S=r?"ECP-2040-4-GY (グレー)":"ECP-2040-4 (ブラック)";this.recordPart(L,"-",2,`正面枠囲い扉 左扉スペーサー端部 (${S})`,"rail_cap",{partCode:L,unitType:"piece"}),this.recordPart("タキゲン CP-294N スライドラッチ","70 x 25 mm",2,"正面枠囲い扉 ワンタッチスライドラッチ (左右各1個)","other",{partCode:"CP-294N",unitType:"piece"}),this.recordPart("アクリル丸板 透明 φ20mm t5mm (穴加工済)","φ20 x t5 mm",4,"正面枠囲い柱側 スライドラッチ受金高さ調整スペーサー (各2枚・計4枚)","other",{partCode:"ACRYLIC-ROUND-20-5",unitType:"piece"})}buildDoorPartsRecord(){const{W:e,H:t,cageType:i,frontWindowH:s,hasDoorAntiFlex:o,frameColor:r}=this.params;if(i==="A_FRAMED"||i==="C_FRAMED"){this.buildFramedDoorPartsRecord();return}if(i==="A_FRONT"){const u=e-2-21.3;let w=40;const y=this.params.frontWideFrame||"2x";y==="3x"?w=60:y==="2x"?w=40:w=20;const I=Math.max(10,t-20-w)+36,R=this.params.doorHingeSide==="right",C=R?"正面 右ヒンジ・左打掛オープン扉":"正面 左ヒンジ・右打掛オープン扉";this.recordPart("透明アクリル扉 3.0mm（正面）（前開き）",`${Math.round(u*10)/10} x ${Math.round(I)} mm`,1,`${C} (切欠き・穴加工済)`,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(u*10)/10,heightMm:Math.round(I),unitType:"m2"});const L=R?"前開き扉 右ヒンジ (2箇所)":"前開き扉 左ヒンジ (2箇所)";this.recordPart("TH-31 ステンレス蝶番","50 x 36 mm (SUS304)",2,L,"rail_cap",{partCode:"TH-31",lengthMm:null,unitType:"piece"});const S=R?"前開き扉 左打掛ロック (2箇所)":"前開き扉 右打掛ロック (2箇所)";this.recordPart("C-1249-4 ステンレス打掛","58 x 46 mm (SUS304)",2,S,"rail_cap",{partCode:"C-1249-4",lengthMm:null,unitType:"piece"});const x=R?"前開き扉 右ヒンジ固定座 (フレーム隙間埋め用)":"前開き扉 左ヒンジ固定座 (フレーム隙間埋め用)";this.recordPart("透明アクリル 3.0mm ヒンジ座板 (切削加工)","16 x 52 mm",2,x,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:16,heightMm:52,unitType:"m2"});const T=R?"前開き扉 左打掛受具座 (フレーム隙間埋め用)":"前開き扉 右打掛受具座 (フレーム隙間埋め用)";this.recordPart("透明アクリル 3.0mm ロック受座板 (切削加工)","16 x 48 mm",2,T,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:16,heightMm:48,unitType:"m2"});return}const a=e-40;let c=(a+30)/2;o&&(c-=2);let l=0;const h=t-20;if(i==="A"){const u=this.params.frontWideFrame||"2x";u==="3x"?l=60:u==="2x"?l=40:l=20}else l=40+s;const d=Math.max(10,h-l),f=Math.max(10,d-9),p=a,_=r==="black"?"BK":"GY",v=`PGRU-03-4-${_}`,g=`PGRL-03-4-${_}`;if(this.recordPart(v,p,1,"正面開口 上部 (間口高12mm縮小)","frame",{partCode:v,lengthMm:p,unitType:"m"}),this.recordPart(g,p,1,"正面開口 下部 (間口高7mm縮小)","frame",{partCode:g,lengthMm:p,unitType:"m"}),o){const u=Math.max(10,d-25);this.recordPart(g,u,2,"正面スライド扉 左右端 (扉たわみ防止)","frame",{partCode:g,lengthMm:u,unitType:"m"})}this.recordPart("透明アクリル扉 3.0mm（正面）（スライド扉）",`${Math.round(c)} x ${Math.round(f)} mm`,2,"正面 引き違い (重なり30mm)","panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(c),heightMm:Math.round(f),unitType:"m2"}),this.recordPart("段付きローレットノブ (SUS303, RNSFS4)","外径φ16 / ボスφ8 / 全長9.5mm",2,"扉端から15mm・上下中央","other"),this.recordPart("プッシュ式スライド扉鍵 (C-108)","外径φ18.5mm / 全長30mm (キー付)",1,"右スライド扉 下部 (端から15mm・下端から20mm)","other")}updateDoorAnimation(){if(!this._doorAnim||!this._doorAnim.animating)return;const e=this._doorAnim,t=performance.now()-e.startTime,i=Math.min(1,t/e.duration),s=i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;if(e.isFrontOpen){if(e.targetRotY!==0){const r=Math.min(1,Math.max(0,i/.35)),a=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.currentLockRotZ=e.startLockRotZ+(e.targetLockRotZ-e.startLockRotZ)*a;const c=Math.min(1,Math.max(0,(i-.35)/.65)),l=c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;e.currentRotY=e.startRotY+(e.targetRotY-e.startRotY)*l}else{const r=Math.min(1,Math.max(0,i/.65)),a=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.currentRotY=e.startRotY+(e.targetRotY-e.startRotY)*a;const c=Math.min(1,Math.max(0,(i-.65)/.35)),l=c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;e.currentLockRotZ=e.startLockRotZ+(e.targetLockRotZ-e.startLockRotZ)*l}if(e.doorPivot&&(e.doorPivot.rotation.y=e.currentRotY),e.lockPivots)for(const r of e.lockPivots)r.rotation.z=e.currentLockRotZ;i>=1&&(e.animating=!1);return}if(e.isFramed){e.currentLeftX=e.startLeftX+(e.targetLeftX-e.startLeftX)*s,e.currentRightX=e.startRightX+(e.targetRightX-e.startRightX)*s,e.leftDoor&&(e.leftDoor.position.x=e.currentLeftX),e.rightDoor&&(e.rightDoor.position.x=e.currentRightX);const o=e.targetLeftX!==e.startLeftX,r=e.targetRightX!==e.startRightX,a=.28;if(o&&e.leftLatchKnob){const c=e.targetLeftX>e.baseLeftCenterX;let l=0;if(c)if(i<.18){const h=i/.18;l=a*(h*h*(3-2*h))}else if(i<.35)l=a;else if(i<.48){const h=(i-.35)/.13;l=a*(1-h*h*(3-2*h))}else l=0;else if(i<.65)l=0;else if(i<.82){const h=(i-.65)/.17;l=a*(h*h*(3-2*h))}else if(i<.9){const h=(i-.82)/.08;l=a*(1-h*h)}else l=0;e.leftLatchKnob.rotation.y=l}else e.leftLatchKnob&&(e.leftLatchKnob.rotation.y=0);if(r&&e.rightLatchKnob){const c=e.targetRightX<e.baseRightCenterX;let l=0;if(c)if(i<.18){const h=i/.18;l=a*(h*h*(3-2*h))}else if(i<.35)l=a;else if(i<.48){const h=(i-.35)/.13;l=a*(1-h*h*(3-2*h))}else l=0;else if(i<.65)l=0;else if(i<.82){const h=(i-.65)/.17;l=a*(h*h*(3-2*h))}else if(i<.9){const h=(i-.82)/.08;l=a*(1-h*h)}else l=0;e.rightLatchKnob.rotation.y=-l}else e.rightLatchKnob&&(e.rightLatchKnob.rotation.y=0);i>=1&&(e.animating=!1,e.leftLatchKnob&&(e.leftLatchKnob.rotation.y=0),e.rightLatchKnob&&(e.rightLatchKnob.rotation.y=0));return}e.currentLeftX=e.startLeftX+(e.targetLeftX-e.startLeftX)*s,e.currentRightX=e.startRightX+(e.targetRightX-e.startRightX)*s,e.leftDoor&&(e.leftDoor.position.x=e.currentLeftX),e.leftKnobGroup&&(e.leftKnobGroup.position.x=e.currentLeftX+e.leftKnobOffsetX),e.rightDoor&&(e.rightDoor.position.x=e.currentRightX),e.rightKnobGroup&&(e.rightKnobGroup.position.x=e.currentRightX+e.rightKnobOffsetX),e.lockGroup&&(e.lockGroup.position.x=e.currentRightX+e.lockOffsetX),i>=1&&(e.animating=!1)}addKnobScrew(e,t,i){const s=new ut;s.position.set(e,t,i);const o=new qe(4,4,6,24);o.rotateX(Math.PI/2),this.activeGeometries.push(o);const r=new Z(o,this.materials.handleMaterial);r.position.set(0,0,3),r.castShadow=!0,s.add(r);const a=new qe(8,8,3.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const c=new Z(a,this.materials.handleMaterial);c.position.set(0,0,6+1.75),c.castShadow=!0,s.add(c);const l=new qe(2,2,3,16);l.rotateX(Math.PI/2),this.activeGeometries.push(l);const h=new Z(l,this.materials.grommetMaterial);return h.position.set(0,0,9.5-1.5+.1),s.add(h),this.doorGroup.add(s),s}addDoorLock(e,t,i){const s=new ut;s.position.set(e,t,i);const o=new qe(9.25,9.25,2.5,32);o.rotateX(Math.PI/2),this.activeGeometries.push(o);const r=new Z(o,this.materials.handleMaterial);r.position.set(0,0,1.25),r.castShadow=!0,s.add(r);const a=new qe(7.75,7.75,20.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const c=new Z(a,this.materials.handleMaterial);c.position.set(0,0,2.5+10.25),c.castShadow=!0,s.add(c);const l=new qe(5.5,5.5,.8,32);l.rotateX(Math.PI/2),this.activeGeometries.push(l);const h=new Z(l,this.materials.handleMaterial);h.position.set(0,0,23+.4),s.add(h);const d=new ze(1.4,6.5,1.2);this.activeGeometries.push(d);const f=new Z(d,this.materials.grommetMaterial);return f.position.set(0,0,23.6),s.add(f),this.doorGroup.add(s),s}addThumbScrew(e,t,i,s){const o=new ut;o.position.set(e,t,i);const r=new qe(4,4,1.5,24);r.rotateZ(Math.PI/2),this.activeGeometries.push(r);const a=new Z(r,this.materials.thumbScrewMaterial);a.position.set(s*.75,0,0),a.castShadow=!0,o.add(a);const c=new qe(7.5,7.5,4.5,24);c.rotateZ(Math.PI/2),this.activeGeometries.push(c);const l=new Z(c,this.materials.thumbScrewMaterial);l.position.set(s*(1.5+2.25),0,0),l.castShadow=!0,o.add(l);const h=new qe(3,3,.2,16);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);const d=new Z(h,this.materials.grommetMaterial);return d.position.set(-s*.1,0,0),o.add(d),this.panelGroup.add(o),o}addBottomThumbScrew(e,t,i){const s=new ut;s.position.set(e,t,i);const o=new qe(4,4,1.5,24);this.activeGeometries.push(o);const r=new Z(o,this.materials.thumbScrewMaterial);r.position.set(0,-.75,0),r.castShadow=!0,s.add(r);const a=new qe(7.5,7.5,4.5,24);this.activeGeometries.push(a);const c=new Z(a,this.materials.thumbScrewMaterial);c.position.set(0,-3.75,0),c.castShadow=!0,s.add(c);const l=new qe(3,3,.2,16);this.activeGeometries.push(l);const h=new Z(l,this.materials.grommetMaterial);return h.position.set(0,.1,0),s.add(h),this.panelGroup.add(s),s}buildFeet(){const{W:e,D:t}=this.params,i=11,s=-i/2,o=[-e/2+10,e/2-10],r=[t/2-50,-t/2+50],a=new qe(9,7.5,i,32);this.activeGeometries.push(a);const c=new qe(4,4,4,24);this.activeGeometries.push(c);const l=new qe(3.5,3.5,.8,24);this.activeGeometries.push(l);for(const h of o)for(const d of r){const f=new Z(a,this.materials.grommetMaterial);f.position.set(h,s,d),f.castShadow=!0,f.receiveShadow=!0,this.feetGroup.add(f);const p=new Z(c,this.materials.railMaterial);p.position.set(h,-i+2,d),this.feetGroup.add(p);const _=new Z(l,this.materials.handleMaterial);_.position.set(h,-i+3.6,d),this.feetGroup.add(_)}this.recordPart("ゴム脚 (黒)","外径φ18(上)/φ15(下) x H11mm (M4用座金入)",4,"床面 奥行きフレーム下面 (前後端から50mm・接地用)","other")}buildCasters(){const{W:e,D:t}=this.params,i=[-e/2+10,e/2-10],s=[t/2-7-20,-(t/2-7)+20],o=new ze(20,3,40);this.activeGeometries.push(o);const r=new qe(10,10,12,24);this.activeGeometries.push(r);const a=new ze(2.5,28,22);this.activeGeometries.push(a);const c=new ze(2.5,28,22);this.activeGeometries.push(c);const l=new qe(25,25,20,32);l.rotateZ(Math.PI/2),this.activeGeometries.push(l);const h=new qe(4,4,24,16);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);for(const d of i)for(const f of s){const p=new ut;p.position.set(d,0,f);const _=new Z(o,this.materials.casterBracket);_.position.set(0,-1.5,0),_.castShadow=!0,p.add(_);const v=new Z(r,this.materials.casterBracket);v.position.set(0,-9,0),p.add(v);const g=new Z(a,this.materials.casterBracket);g.position.set(-10,-27,0),p.add(g);const u=new Z(c,this.materials.casterBracket);u.position.set(10,-27,0),p.add(u);const w=new Z(l,this.materials.casterWheel);w.position.set(0,-41,0),w.castShadow=!0,w.receiveShadow=!0,p.add(w);const y=new Z(h,this.materials.casterBracket);y.position.set(0,-41,0),p.add(y),this.feetGroup.add(p)}this.recordPart("自在キャスター","車輪径φ50 / 取付高66mm",4,"床面 奥行きフレーム下面 (端から7mm控え)","other")}addPerch2020GrayCap(e,t,i){const a=new dt;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const c={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},l=new lt(a,c);l.translate(0,0,-1.5),this.activeGeometries.push(l);const h=new Z(l,this.materials.perchGrayCap);return h.position.set(e,t,i),h.castShadow=!0,h.receiveShadow=!0,h.name="止まり木・ECP-2020-4-GY",this.perchGroup.add(h),h}addPerch1530BlackCap(e,t,i){const a=new dt;a.moveTo(-7.5+1,-15),a.lineTo(7.5-1,-15),a.absarc(7.5-1,-14,1,-Math.PI/2,0,!1),a.lineTo(7.5,14),a.absarc(7.5-1,14,1,0,Math.PI/2,!1),a.lineTo(-7.5+1,15),a.absarc(-7.5+1,14,1,Math.PI/2,Math.PI,!1),a.lineTo(-7.5,-14),a.absarc(-7.5+1,-14,1,Math.PI,Math.PI*1.5,!1);const c={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.2,bevelThickness:.2},l=new lt(a,c);l.rotateX(Math.PI/2),l.translate(0,-1.5,0),this.activeGeometries.push(l);const h=new Z(l,this.materials.perchBlackCap);return h.position.set(e,t,i),h.castShadow=!0,h.receiveShadow=!0,h.name="止まり木・ECP-1530-6",this.perchGroup.add(h),h}addPerchThumbScrew(e,t,i){const r=new qe(5,5,5,24);r.translate(0,5/2,0),this.activeGeometries.push(r);const a=new Z(r,this.materials.perchWhiteScrew);return a.position.set(e,t,i),a.castShadow=!0,a.name="止まり木・M3つまみネジ",this.perchGroup.add(a),a}buildPerch(){const{W:e,D:t,H:i}=this.params,s=e-120,o=Math.floor(s/7)*7,r=Math.max(10,o-15),a=Math.max(10,Math.round(i/2)),c=Math.max(0,a-50-15),l=Math.max(10,Math.floor(c/20)*10),h=15+l,d=this.materials.perchAluminum,f=this.materials.handleMaterial,p=o/2,_=i-20-10,v=90,g=new Et(0,0,0),u=[-p,p];for(const L of u){const S=vu(v,"bottom");S.translate(0,0,-v/2),this.activeGeometries.push(S);const x=new Z(S,d);x.position.set(L,_,0),x.rotation.copy(g),x.castShadow=!0,x.receiveShadow=!0,x.name="止まり木・天板固定フレーム2020",this.perchGroup.add(x),this.addPerch2020GrayCap(L,_,v/2),this.addPerch2020GrayCap(L,_,-v/2);const T=[25,-25];for(const O of T)this.addPerchThumbScrew(L,i-20,O)}const w=i-40,y=w-a/2,M=w-a;for(const L of u){const S=Iv(a);S.translate(0,0,-a/2),S.rotateX(Math.PI/2),this.activeGeometries.push(S);const x=new Z(S,d);x.position.set(L,y,0),x.castShadow=!0,x.receiveShadow=!0,x.name="止まり木・吊り下げフレーム1530",this.perchGroup.add(x),this.addPerch1530BlackCap(L,M,0);const T=[M+15,M+15+l,M+15+2*l];for(let O=0;O<T.length;O++){const F=T[O],U=L>0?1:-1,N=new qe(3,3,.4,16);N.rotateZ(Math.PI/2),this.activeGeometries.push(N);const z=new Z(N,this.materials.railMaterial);z.position.set(L+U*7.4,F,0),this.perchGroup.add(z)}}const I=M+h,R=new qe(15,15,r,32);R.rotateZ(Math.PI/2),this.activeGeometries.push(R);const C=new Z(R,d);C.position.set(0,I,0),C.castShadow=!0,C.receiveShadow=!0,C.name="止まり木・アルミ丸パイプASTP-30",this.perchGroup.add(C);for(const L of u){const S=L>0?1:-1,x=new qe(5,5,3.5,16);x.rotateZ(Math.PI/2),this.activeGeometries.push(x);const T=new Z(x,f);T.position.set(L+S*9.2,I,0),T.castShadow=!0,this.perchGroup.add(T)}this.recordPart("AFSF-2020-4-90",90,2,"止まり木 天板固定フレーム (溝なし下面・シルバー)","frame"),this.recordPart(`AFS-1530-6-${a}`,a,2,"止まり木 垂直吊り下げフレーム (高さ調整3穴加工・シルバー)","frame"),this.recordPart(`ASTP-30-${r}`,r,1,"止まり木 φ30アルミ丸パイプ (シルバー)","frame"),this.recordPart("ECP-2020-4-GY","20x20mm (グレー)",4,"止まり木 天板固定フレーム両端用エンドキャップ","rail_cap"),this.recordPart("ECP-1530-6","15x30mm (ブラック)",2,"止まり木 吊り下げフレーム下端用エンドキャップ","rail_cap"),this.recordPart("M3x8 つまみネジ (白)","M3 x L8mm",4,"止まり木 天板パンチング固定用つまみネジ","other"),this.recordPart("M6 ボルト","M6 x L20mm",2,"止まり木 φ30丸棒固定用ボルト","other")}buildCaulking(){const{W:e,D:t,hasFloorReinforcement:i}=this.params,s=this.materials.caulkingMaterial,o=5,r=3,a=w=>{const y=new dt;y.moveTo(0,0),y.lineTo(o,0),y.lineTo(0,r),y.closePath();const M=new lt(y,{depth:w,bevelEnabled:!1});return M.translate(0,0,-w/2),this.activeGeometries.push(M),M},c=Math.max(10,e-40),l=a(c),h=new Z(l,s);h.rotation.y=-Math.PI/2,h.position.set(0,20,-t/2+20),this.caulkingGroup.add(h);const d=a(c),f=new Z(d,s);f.rotation.y=Math.PI/2,f.position.set(0,20,t/2-20),this.caulkingGroup.add(f);const p=Math.max(10,t-50),_=a(p),v=new Z(_,s);v.position.set(-e/2+20,20,0),this.caulkingGroup.add(v);const g=a(p),u=new Z(g,s);if(u.rotation.y=Math.PI,u.position.set(e/2-20,20,0),this.caulkingGroup.add(u),i){const{floorSplitCount:w}=this.params,y=(e-80)/3,M=-e/2+30+y,I=e/2-30-y,R=w===3?[M,I]:[0];for(const C of R){const L=a(p),S=new Z(L,s);S.rotation.y=Math.PI,S.position.set(C-10,20,0),this.caulkingGroup.add(S);const x=a(p),T=new Z(x,s);T.position.set(C+10,20,0),this.caulkingGroup.add(T)}}}buildRubberPacking(){const{W:e,D:t,H:i,hasSideReinforcement:s,sideOpeningH:o}=this.params,r=this.params.panelConfig||{},a=this.materials.rubberPackingMaterial;let c=0;const l=(_,v,g,u,w,y,M)=>{const I=new ze(_,v,g);this.activeGeometries.push(I);const R=new Z(I,a);R.position.set(u,w,y),this.rubberPackingGroup.add(R),c+=M},h=1.6,d=3;if((r.back||"acrylic")!=="polyca"){const _=Math.max(10,e-40),v=Math.max(10,i-40),g=-t/2+20+h/2;l(_,d,h,0,20+d/2,g,_),l(d,v,h,-e/2+20+d/2,i/2,g,v),l(d,v,h,e/2-20-d/2,i/2,g,v)}const p=Math.max(10,t-40);if(s){const _=r.sideLower||"acrylic",v=r.sideUpper||"punching",g=Math.max(10,o),u=Math.max(10,i-60-g);if(_!=="polyca")for(const w of[-1,1]){const y=w*(e/2-20)-w*(h/2),M=20+u/2;l(h,d,p,y,20+d/2,0,p),l(h,u,d,y,M,-t/2+20+d/2,u),l(h,u,d,y,M,t/2-20-d/2,u)}if(v!=="polyca")for(const w of[-1,1]){const y=w*(e/2-20)-w*(h/2),M=20+u+20,I=M+g/2;l(h,d,p,y,M+d/2,0,p),l(h,g,d,y,I,-t/2+20+d/2,g),l(h,g,d,y,I,t/2-20-d/2,g)}}else if((r.side||"acrylic")!=="polyca"){const v=Math.max(10,i-40);for(const g of[-1,1]){const u=g*(e/2-20)-g*(h/2);l(h,d,p,u,20+d/2,0,p),l(h,v,d,u,i/2,-t/2+20+d/2,v),l(h,v,d,u,i/2,t/2-20-d/2,v)}}if(c>0){const _=Math.ceil(c/1e3);this.recordPart("モレ対策ゴムパッキン (グレー)",`${_} m`,1,`側面・背面 隙間モレ抑制用 (実施工長: ${Math.round(c)}mm / 1m単位積算)`,"other",{partCode:"NSCP1H-S-6",lengthMm:_*1e3,unitType:"m"})}}buildRoomDivider(){const{W:e,D:t,H:i,cageType:s,frontWideFrame:o,frontWindowH:r}=this.params,c=(this.params.panelConfig||{}).partition||"black_matte",l=Math.max(10,t-32),h=Math.max(10,i-23.5),d=3;let f=this.materials.blackMatteAcrylic,p="acrylic_black_matte_3_0",_="アクリル黒両面マット 3.0mm";if(c==="acrylic")f=this.materials.acrylic,p="acrylic_extrusion_3_0",_="透明アクリル 3.0mm";else if(c==="smoke_gray")f=this.materials.smokeGrayAcrylic,p="acrylic_smoke_gray_3_0",_="アクリル グレースモーク半透明 3.0mm";else if(c==="punching"){const me=Vr(l,h,!1);this.activeTextures.push(me),f=this.materials.createPunchingMaterial(me),this.activeMaterials.push(f),p="pvc_punching_3_0",_="塩ビパンチングボード 透明 3.0mm"}const v=t/2-20,g=v-l,u=11.5,w=u+h,y=18,M=new dt;M.moveTo(v,u+y),M.lineTo(v,w),M.lineTo(g+y,w),M.lineTo(g,w-y),M.lineTo(g,u+y),M.lineTo(g+y,u),M.lineTo(v-y,u),M.lineTo(v,u+y);const I=new lt(M,{depth:d,bevelEnabled:!1}),R=I.attributes.position;for(let me=0;me<R.count;me++){const k=R.getX(me),Q=R.getY(me),$=R.getZ(me);R.setXYZ(me,$-d/2,Q,k)}R.needsUpdate=!0;const C=I.attributes.uv;if(C){for(let me=0;me<C.count;me++){const k=R.getZ(me),Q=R.getY(me),$=(k-g)/l,ae=(Q-u)/h;C.setXY(me,$,ae)}C.needsUpdate=!0}I.computeVertexNormals(),this.activeGeometries.push(I);const L=new Z(I,f);L.castShadow=!0,L.receiveShadow=!0,L.name="２室分け仕切り板",this.dividerGroup.add(L),this.recordPart(`２室分け仕切り板 (${_})`,`${l} x ${h}`,1,`２室分け仕切り板後付け仕様 (${_})`,"panel",{panelCode:p,partCode:p,widthMm:l,heightMm:h});let S=30;if(s==="A"||s==="A_FRONT"){const me=o||"2x";me==="3x"?S=50:me==="2x"?S=30:S=10}else S=20+(r||50)+10;const x=18,T=18,O=18,F=3.5,U=new dt;U.moveTo(0,0),U.lineTo(-T,0),U.lineTo(-T,-F),U.lineTo(-F,-F),U.lineTo(-F,-O),U.lineTo(0,-O),U.closePath();const N=new lt(U,{depth:x,bevelEnabled:!1}),z=N.attributes.position;for(let me=0;me<z.count;me++){const k=z.getX(me),Q=z.getY(me),$=z.getZ(me);z.setXYZ(me,-d/2+k,S-x/2+$,v+Q)}z.needsUpdate=!0,N.computeVertexNormals(),this.activeGeometries.push(N);const j=new Z(N,this.materials.perchAluminum);j.castShadow=!0,j.name="２室分け・ABL-2015-4",this.dividerGroup.add(j);const W=-d/2-T/2,ie=S,J=v-F-1,ee=new qe(3.5,3.5,1.8,16);ee.rotateX(Math.PI/2),ee.translate(W,ie,J),this.activeGeometries.push(ee);const ge=new Z(ee,this.materials.handleMaterial);ge.name="２室分け・フレーム固定プラスネジ",this.dividerGroup.add(ge);const ve=new ze(4,.8,.5);ve.translate(W,ie,J-.7),this.activeGeometries.push(ve);const q=new Z(ve,this.materials.wireMesh);this.dividerGroup.add(q);const se=new ze(.8,4,.5);se.translate(W,ie,J-.7),this.activeGeometries.push(se);const xe=new Z(se,this.materials.wireMesh);this.dividerGroup.add(xe);const ue=-d/2-F-2.5,fe=S,Se=v-O/2,Me=new qe(4.8,4.8,5,18);Me.rotateZ(Math.PI/2),Me.translate(ue,fe,Se),this.activeGeometries.push(Me);const Fe=new Z(Me,this.materials.perchWhiteScrew);Fe.name="２室分け・M3つまみネジ(ブラケット固定)",this.dividerGroup.add(Fe);const ce=i-20+d,he=ce+2,D=[{x:-3.5,z:-t/2+50},{x:3.5,z:-t/2+65},{x:-3.5,z:t/2-60},{x:3.5,z:t/2-75}];for(const me of D){const k=new qe(4.5,4.5,4,16);k.translate(me.x,he,me.z),this.activeGeometries.push(k);const Q=new Z(k,this.materials.perchWhiteScrew);Q.name="２室分け・天板M3つまみネジ",this.dividerGroup.add(Q);const $=new qe(1.5,1.5,7,12);$.translate(me.x,ce-3.5,me.z),this.activeGeometries.push($);const ae=new Z($,this.materials.handleMaterial);this.dividerGroup.add(ae)}this.recordPart("ABL-2015-4","20x15x15mm",1,"２室分け L字ブラケット ABL-2015-4 (シルバー)","rail_cap",{partCode:"ABL-2015-4",unitType:"piece"}),this.recordPart("M3 つまみネジ (白)","M3 x L8mm",5,"２室分け固定・倒れ防止用つまみネジ","other"),this.recordPart("M4 皿ネジ","M4 x L8mm",1,"２室分けフレーム固定用皿ネジ","other")}buildLed(){const{W:e,D:t,H:i,ledType:s,ledPower:o,ledBrightness:r=1,ledColorMode:a,ledRgbColor:c}=this.params;if(!s||s==="none")return;const l=i-32,h=i-20,d=(_,v,g,u,w,y,M)=>{const C=h-(l-g/2),L=(h+(l-g/2))/2;for(const q of[-1,1]){const se=q*(_/2-35),xe=new ze(12,C,2.5);xe.translate(se,L,u),this.activeGeometries.push(xe);const ue=new Z(xe,this.materials.ledBracket);ue.name="LED天板吊り下げステー金具",this.ledGroup.add(ue);const fe=new qe(2.5,2.5,3,12);fe.rotateX(Math.PI/2),fe.translate(se,h-4,u+2.5/2),this.activeGeometries.push(fe);const Se=new Z(fe,this.materials.perchAluminum);this.ledGroup.add(Se)}const S=new ze(_,g*.65,v);S.translate(0,l+g*.175,u),this.activeGeometries.push(S);const x=new Z(S,this.materials.ledAluminum);x.name="LEDアルミボディ",this.ledGroup.add(x);const T=g*.45,O=v-2,F=l-g*.25;let U;U=new ze(_-4,T,O),U.translate(0,F,u),this.activeGeometries.push(U);const N=this.materials.ledEmissive.clone();if(M){const q=new Ke(y);N.color=q,N.emissive=q,N.emissiveIntensity=Math.max(.5,(r||1)*4)}else N.color=new Ke(15791094),N.emissive=new Ke(0),N.emissiveIntensity=0;const z=new Z(U,N);z.name="LED発光ディフューザー",this.ledGroup.add(z);const j=2.5;for(const q of[-1,1]){const se=q*(_/2+j/2),xe=new ze(j,g+.8,v+.8);xe.translate(se,l,u),this.activeGeometries.push(xe);const ue=new Z(xe,this.materials.perchGrayCap);this.ledGroup.add(ue)}const W=1.8,ie=_/2+j,J=e/2-25,ee=Math.max(10,J-ie),ge=new qe(W,W,ee,8);ge.rotateZ(Math.PI/2),ge.translate(ie+ee/2,l+2,u),this.activeGeometries.push(ge);const ve=new Z(ge,this.materials.ledCable);ve.name="LED給電コード",this.ledGroup.add(ve)},f=(_,v,g=350,u=-t/2+55)=>{if(!o||v<=0)return;const w=new Ke(_),y=e-44,M=t-44,I=i-44,R=i/2,C=new P(-y/2,22,-M/2),L=new P(y/2,i-22,M/2),S=new P(0,i-32,u),x=`
        varying vec3 vWorldPos;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,T=`
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
      `,O=new ze(y,I,M);O.translate(0,R,0),this.activeGeometries.push(O);const F=new qn({vertexShader:x,fragmentShader:T,uniforms:{uColor:{value:w},uBoxMin:{value:C},uBoxMax:{value:L},uLightPos:{value:S},uBarL:{value:g},uIntensity:{value:v}},transparent:!0,blending:Xo,depthWrite:!1,side:qt});this.activeMaterials.push(F);const U=new Z(O,F);U.name="ケージ室内大気グラデーションフォグ",this.ledGroup.add(U);const N=`
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
      `,z=new ti(y,M);z.rotateX(-Math.PI/2),z.translate(0,20.6,0),this.activeGeometries.push(z);const j=new qn({vertexShader:x,fragmentShader:N,uniforms:{uColor:{value:w},uBoxMin:{value:C},uBoxMax:{value:L},uLightPos:{value:S},uBarL:{value:g},uIntensity:{value:v}},transparent:!0,blending:Xo,depthWrite:!1});this.activeMaterials.push(j);const W=new Z(z,j);W.name="床面LED受光グラデーション",this.ledGroup.add(W);const ie=`
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
      `,J=new ti(y,I);J.translate(0,R,-t/2+20.6),this.activeGeometries.push(J);const ee=new qn({vertexShader:x,fragmentShader:ie,uniforms:{uColor:{value:w},uBoxMin:{value:C},uBoxMax:{value:L},uLightPos:{value:S},uBarL:{value:g},uIntensity:{value:v}},transparent:!0,blending:Xo,depthWrite:!1});this.activeMaterials.push(ee);const ge=new Z(J,ee);ge.name="背面LED受光グラデーション",this.ledGroup.add(ge)},p=-t/2+55;switch(s){case"usb":{const _=Math.min(350,e-60);let v=16777215;a==="warm"?v=16754470:a==="all"&&(v=16769202),d(_,18,13,p,!1,v,!!o),f(v,r,_,p),this.recordPart("USB 二色60LEDアルミライトバー [4023]","350mm",1,"USB給電アルミライトバー (白＆電球色 3パターン切替)","other",{partCode:"LED-4023",unitType:"piece",isLedOption:!0,ledKey:"ledUsb"});break}case"rgbw":{const _=Math.min(530,e-60),v=c||"#ffffff";d(_,18,13,p,!1,v,!!o),f(v,r*1.15,_,p),this.recordPart("RGB+W LEDライトバー 30LED [6839]","530mm",1,"RGBフルカラー+独立ホワイト素子アルミバー","other",{partCode:"LED-6839",unitType:"piece",isLedOption:!0,ledKey:"ledRgbw"}),this.recordPart("RGB+W 専用コントローラー [8166]","リモコン付属",1,"調光・調色RFリモコン式コントローラー","other",{partCode:"LED-8166",unitType:"piece",isLedOption:!0}),this.recordPart("ACアダプター 12V 1.5A [6207]","12V 1.5A",1,"DC12V電源アダプター","other",{partCode:"LED-6207",unitType:"piece",isLedOption:!0}),this.recordPart("RGB+W用 5pin延長コード1m [6433]","1m",1,"配線取り回し用 5pin延長コード","other",{partCode:"LED-6433",unitType:"piece",isLedOption:!0});break}}}recordPart(e,t,i,s,o="other",r={}){const a=typeof t=="number"?`${Math.round(t)} mm`:t,c=typeof t=="number"?Math.round(t):r.lengthMm||null;let l=e;if(typeof t=="number"&&e.includes("-")){const h=e.split("-");isNaN(h[h.length-1])||(l=h.slice(0,-1).join("-"))}this.partsList.push({name:e,size:a,count:i,note:s,category:o,lengthMm:c,partCode:r.partCode||l,unitType:r.unitType||(typeof t=="number"?"m":"piece"),...r})}getPartsSummary(){return this.partsList}}class Ov{constructor(){this.group=new ut,this.group.name="DimensionLines",this.lineMaterial=new zc({color:165063,linewidth:2,depthTest:!1,transparent:!0,opacity:.85}),this.textSprites=[],this.activeGeometries=[]}clear(){for(;this.group.children.length>0;){const e=this.group.children[0];this.group.remove(e)}for(const e of this.activeGeometries)e.dispose();this.activeGeometries=[];for(const e of this.textSprites)e.material.map&&e.material.map.dispose(),e.material.dispose();this.textSprites=[]}createTextSprite(e,t="#38bdf8",i="#ffffff",s="rgba(20, 26, 38, 0.88)"){const o=document.createElement("canvas");o.width=384,o.height=120;const r=o.getContext("2d");r.fillStyle=s,r.strokeStyle=t,r.lineWidth=4;const a=24;r.beginPath(),r.roundRect(10,10,364,100,a),r.fill(),r.stroke(),r.font="bold 44px sans-serif",r.fillStyle=i,r.textAlign="center",r.textBaseline="middle",r.fillText(e,192,60);const c=new va(o);c.minFilter=Vt;const l=new kd({map:c,depthTest:!1,transparent:!0}),h=new _1(l);return h.scale.set(90,30,1),this.textSprites.push(h),h}update(e){this.clear();const{W:t,D:i,H:s,cageType:o,frontWindowH:r,hasSideReinforcement:a,sideOpeningH:c}=e,l=5,h=i/2+55,d=this.createTextSprite(`W: ${t} mm`,"#38bdf8","#ffffff");d.position.set(0,l,h),this.group.add(d);const f=t/2+55,p=5,_=this.createTextSprite(`D: ${i} mm`,"#38bdf8","#ffffff");_.position.set(f,p,0),this.group.add(_);const v=-t/2-55,g=i/2,u=this.createTextSprite(`H: ${s} mm`,"#38bdf8","#ffffff");if(u.position.set(v,s/2,g),this.group.add(u),o==="C"){const w=t/2+50,y=i/2+10,M=20+r/2,I=this.createTextSprite(`前窓: ${r} mm`,"#fb923c","#ffffff","rgba(35, 20, 12, 0.9)");I.scale.set(80,27,1),I.position.set(w,M,y),this.group.add(I)}if(a){const w=-t/2-50,y=0,M=c,I=s-20-M/2,R=this.createTextSprite(`側面上部開口: ${M} mm`,"#34d399","#ffffff","rgba(12, 32, 24, 0.9)");R.scale.set(95,27,1),R.position.set(w,I,y),this.group.add(R)}}setVisible(e){this.group.visible=e}}class kv{constructor(e){this.container=e,this.width=e.clientWidth,this.height=e.clientHeight,this.scene=new Od,this.scene.background=null,this.camera=new rn(40,this.width/this.height,1,8e3),this.camera.position.set(-1130,740,1070),this.isAutoRotating=!1,this._autoRotateAngle=0,this._autoRotateSpeed=.003,this._lastAutoParams=null,this.renderer=new m1({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=od,this.renderer.toneMapping=ad,this.renderer.toneMappingExposure=1.05,this.container.appendChild(this.renderer.domElement);const t=new _c(this.renderer);t.compileEquirectangularShader();const i=t.fromScene(new Mv,.04).texture;this.scene.environment=i,this.controls=new av(this.camera,this.renderer.domElement),this.controls.target.set(-60,100,-15),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI-.05,this.controls.minDistance=200,this.controls.maxDistance=4e3,this.setupLighting(),this.setupFloorGrid(),this.materials=new yv,this.cageModel=new Bv(this.materials),this.scene.add(this.cageModel.root),this.dimensions=new Ov,this.scene.add(this.dimensions.group),window.addEventListener("resize",()=>this.onResize()),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}setupLighting(){this.studioLights=[];const e=new Q1(16777215,1975344,.38);e.position.set(0,1e3,0),this.scene.add(e),this.studioLights.push({light:e,baseIntensity:.38});const t=new zr(16777215,1.35);t.position.set(1e3,1600,1200),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=100,t.shadow.camera.far=4e3;const i=1e3;t.shadow.camera.left=-i,t.shadow.camera.right=i,t.shadow.camera.top=i,t.shadow.camera.bottom=-i,t.shadow.bias=-5e-4,t.shadow.radius=3.5,this.scene.add(t),this.studioLights.push({light:t,baseIntensity:1.35});const s=new zr(16777215,.65);s.position.set(0,1200,0),this.scene.add(s),this.studioLights.push({light:s,baseIntensity:.65});const o=new zr(16777215,.5);o.position.set(-1e3,1e3,-1200),this.scene.add(o),this.studioLights.push({light:o,baseIntensity:.5});const r=new zr(2765376,.25);r.position.set(0,-1e3,0),this.scene.add(r),this.studioLights.push({light:r,baseIntensity:.25}),this.ledLightGroup=new ut,this.scene.add(this.ledLightGroup),this.isDarkroomMode=!1,this.manualDarkroomOverride=null}setupFloorGrid(){this.gridHelper=new sv(2400,24,5924219,3028291),this.gridHelper.position.y=-10,this.scene.add(this.gridHelper);const e=new ti(3e3,3e3),t=new J1({opacity:.35});this.floor=new Z(e,t),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=-10.1,this.floor.receiveShadow=!0,this.scene.add(this.floor)}applyDarkroomMode(e){this.isDarkroomMode=e;const t=e?.05:1;if(this.studioLights)for(const i of this.studioLights)i.light.intensity=i.baseIntensity*t;this.gridHelper&&(this.gridHelper.material.opacity=e?.15:.85,this.gridHelper.material.transparent=!0),this.container&&this.container.classList.toggle("darkroom-active",e)}setDarkroomOverride(e){this.manualDarkroomOverride=e,this._lastAutoParams&&this.updateLedLighting(this._lastAutoParams)}updateLedLighting(e){for(;this.ledLightGroup.children.length>0;){const v=this.ledLightGroup.children[0];v.target&&v.target.parent&&v.target.parent.remove(v.target),this.ledLightGroup.remove(v),v.dispose&&v.dispose()}const{W:t,D:i,H:s,ledType:o,ledPower:r,ledBrightness:a=1,ledColorMode:c,ledRgbColor:l}=e,h=o&&o!=="none"&&!!r,d=this.manualDarkroomOverride!==null?this.manualDarkroomOverride:h;if(this.applyDarkroomMode(d),!h)return;const f=s-34,p=-i/2+55,_=(v,g,u,w,y=1)=>{const M=new tv(w,a*6.5*y);M.position.set(v,g,u),M.angle=Math.PI/2.3,M.penumbra=.85,M.decay=1.2,M.distance=Math.max(s*2,800);const I=new Rt;I.position.set(v,20,0),this.scene.add(I),M.target=I,this.ledLightGroup.add(M);const R=new qd(w,a*2.8*y,Math.max(t,i)*2.2);R.position.set(v,s*.65,u+25),this.ledLightGroup.add(R)};if(o==="usb"){let v=16777215;c==="warm"?v=16754470:c==="all"&&(v=16769722),_(0,f,p,v)}else if(o==="high_cri_white")_(0,f,p,16579578);else if(o==="red")_(0,f,p,16717636,1.4);else if(o==="white_and_red"){const v=c==="all"||c==="both"||c==="white",g=c==="all"||c==="both"||c==="red";v&&_(0,f,-i/2+85,16579578,1),g&&_(0,f,-i/2+45,16717636,1.3)}else o==="rgbw"&&_(0,f,p,l||"#ffffff",1.2)}setFrameColor(e){this.materials.setFrameColor(e)}update(e){this._lastAutoParams=e;const t=e.footType==="caster"?-66:-11;this.gridHelper&&(this.gridHelper.position.y=t),this.floor&&(this.floor.position.y=t-.1),this.cageModel.update(e),this.dimensions.update(e),this.updateLedLighting(e);const i=e.H/2;this.controls.target.set(0,i,0)}setDimensionsVisible(e){this.dimensions.setVisible(e)}setPanelsVisible(e){this.cageModel.panelGroup.visible=e,this.cageModel.doorGroup.visible=e}setDoorState(e){this.cageModel.params.doorState=e,this.cageModel.buildDoors()}setViewPreset(e,t){const i=t.H||300,s=t.W||750,o=t.D||450,r=i/2,a=Math.max(s,o,i)*2.2;switch(this.controls.target.set(0,r,0),e){case"front":this.controls.target.set(0,r,0),this.camera.position.set(0,r,a);break;case"iso":default:{const l=Math.max(s,o,i)*1.5;this.controls.target.set(0,i*.45,0),this.camera.position.set(-l*.82,i*1.05+l*.55,l*.82);break}case"top":this.controls.target.set(0,r,0),this.camera.position.set(0,r+a*1.3,1);break;case"side":this.controls.target.set(0,r,0),this.camera.position.set(a,r,0);break;case"bottom":this.controls.target.set(0,r,0),this.camera.position.set(a*.4,-a*.7,a*.6);break}this.controls.update()}onResize(){this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}setAutoRotate(e,t){if(this.isAutoRotating=e,e){const i=this.controls.target,s=this.camera.position.x-i.x,o=this.camera.position.y-i.y,r=this.camera.position.z-i.z,a=Math.sqrt(s*s+o*o+r*r);this._autoRotateAngle=Math.atan2(r,s),this._autoRotatePhi=Math.asin(Math.max(-1,Math.min(1,o/a))),this._autoTargetYOffset=0,this._autoRadiusScale=1,this._lastAutoParams=t?{...t}:null,this.controls.enableDamping=!1,this.controls.enabled=!1,this._setupAutoRotateDrag()}else this.controls.enabled=!0,this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this._teardownAutoRotateDrag()}_setupAutoRotateDrag(){const e=this.renderer.domElement;this._dragState={active:!1,button:-1,lastY:0},this._onPointerDown=t=>{this._dragState.active=!0,this._dragState.button=t.button,this._dragState.lastY=t.clientY,t.preventDefault()},this._onPointerMove=t=>{if(!this._dragState.active)return;const i=t.clientY-this._dragState.lastY;this._dragState.lastY=t.clientY;const s=.005;if(this._dragState.button===0)this._autoRotatePhi-=i*s,this._autoRotatePhi=Math.max(-.05,Math.min(Math.PI/2-.05,this._autoRotatePhi));else if(this._dragState.button===2){const o=this._lastAutoParams&&this._lastAutoParams.H||300;this._autoTargetYOffset-=i*.5;const r=o*.8;this._autoTargetYOffset=Math.max(-r,Math.min(r,this._autoTargetYOffset))}},this._onPointerUp=()=>{this._dragState.active=!1,this._dragState.button=-1},this._onWheel=t=>{t.preventDefault();const i=.001;this._autoRadiusScale*=1+t.deltaY*i,this._autoRadiusScale=Math.max(.3,Math.min(3,this._autoRadiusScale))},e.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),e.addEventListener("wheel",this._onWheel,{passive:!1}),this._onContextMenu=t=>t.preventDefault(),e.addEventListener("contextmenu",this._onContextMenu)}_teardownAutoRotateDrag(){const e=this.renderer.domElement;this._onPointerDown&&e.removeEventListener("pointerdown",this._onPointerDown),this._onPointerMove&&window.removeEventListener("pointermove",this._onPointerMove),this._onPointerUp&&window.removeEventListener("pointerup",this._onPointerUp),this._onWheel&&e.removeEventListener("wheel",this._onWheel),this._onContextMenu&&e.removeEventListener("contextmenu",this._onContextMenu),this._onPointerDown=null,this._onPointerMove=null,this._onPointerUp=null,this._onWheel=null,this._onContextMenu=null}_calcAutoRotateCamera(e){const t=e&&e.W||750,i=e&&e.D||450,s=e&&e.H||300,o=Math.max(t,i,s)*1.45,r=s*.5;return{radius:o,targetY:r}}animate(){if(requestAnimationFrame(this.animate),this.cageModel.updateDoorAnimation(),this.isAutoRotating&&this._lastAutoParams){this._autoRotateAngle+=this._autoRotateSpeed;const{radius:e,targetY:t}=this._calcAutoRotateCamera(this._lastAutoParams),i=e*(this._autoRadiusScale||1),s=this._autoRotatePhi,o=Math.cos(s),r=Math.cos(this._autoRotateAngle)*i*o,a=Math.sin(this._autoRotateAngle)*i*o,c=t+(this._autoTargetYOffset||0)+i*Math.sin(s),l=t+(this._autoTargetYOffset||0);this.camera.position.set(r,c,a),this.camera.lookAt(0,l,0)}else this.controls.update();this.renderer.render(this.scene,this.camera)}getPartsSummary(){return this.cageModel.getPartsSummary()}captureImage(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/png")}}const $e={frames:{"AFS-2020-4":{name:"2020標準フレーム (シルバー)",unit:"m",weightPerMeter:.437,pricePerMeter:801,note:"標準4面溝あり"},"AFSF-2020-4":{name:"2020フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.44,pricePerMeter:801,note:"補強・中桟用 1面フラット"},"AFSW-2020-4":{name:"2020フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.444,pricePerMeter:801,note:"2面フラット"},"AFS-2040-4":{name:"2040フレーム (シルバー)",unit:"m",weightPerMeter:.752,pricePerMeter:1394,note:"正面2倍幅・40mm高"},"AFSF-2040-4":{name:"2040フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.712,pricePerMeter:1394,note:"40mm幅 1面フラット"},"AFST-2040-4":{name:"2040フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.715,pricePerMeter:1394,note:"40mm幅 2面フラット"},"AFS-2060-4":{name:"2060フレーム (シルバー)",unit:"m",weightPerMeter:1.09,pricePerMeter:1923,note:"正面3倍幅・60mm高"},"AFS-4040-4":{name:"4040フレーム (シルバー)",unit:"m",weightPerMeter:1.188,pricePerMeter:2095,note:"正面下部 40x40枠囲い用"},"AFS-2020-4-BK":{name:"2020フレーム (ブラック)",unit:"m",weightPerMeter:.437,pricePerMeter:1037,note:"ブラックアルマイト"},"AFS-2040-4-BK":{name:"2040フレーム (ブラック)",unit:"m",weightPerMeter:.752,pricePerMeter:1809,note:"ブラックアルマイト 40mm高"},"AFS-4040-4-BK":{name:"4040フレーム (ブラック)",unit:"m",weightPerMeter:1.188,pricePerMeter:2710,note:"正面下部 40x40枠囲い用 (ブラック)"},"AFS-2020-5":{name:"2020フレーム (金網受用・シルバー)",unit:"m",weightPerMeter:.404,pricePerMeter:822,note:"天面金網受用 (5シリーズ)"},"AFS-2040-5":{name:"2040フレーム (金網受用・シルバー)",unit:"m",weightPerMeter:.752,pricePerMeter:1394,note:"正面枠囲い天面金網用 (シルバー・5シリーズ)"},"AFS-1530-6":{name:"1530フレーム (シルバー)",unit:"m",weightPerMeter:.684,pricePerMeter:1273,note:"止まり木垂直吊り下げ用フレーム"},"ASTP-30":{name:"φ30アルミパイプ (シルバー)",unit:"m",weightPerMeter:.795,pricePerMeter:1874,note:"止まり木丸棒"}},rails:{"PGRU-03-4-GY":{name:"上側ガラスレール (グレー)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部"},"PGRU-03-4-BK":{name:"上側ガラスレール (ブラック)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部 (黒ケージ連動)"},"PGRL-03-4-GY":{name:"下側ガラスレール (グレー)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用"},"PGRL-03-4-BK":{name:"下側ガラスレール (ブラック)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用 (黒ケージ連動)"}},packings:{"NSCP1H-S-6":{name:"モレ対策ゴムパッキン (グレー)",unit:"m",weightPerMeter:.035,pricePerMeter:841/6,note:"側面・背面 隙間モレ抑制用"}},caps:{"ECP-2020-4":{name:"2020用エンドキャップ",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"奥行きフレーム両端用"},"ECP-2020-4-GY":{name:"2020用エンドキャップ (グレー)",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"止まり木天板固定フレーム両端用"},"ECP-1530-6":{name:"1530用エンドキャップ (ブラック)",unit:"piece",weightPerPiece:.0016,pricePerPiece:143,note:"止まり木吊り下げフレーム下端用"},"ABL-2015-4":{name:"L字ブラケット ABL-2015-4 (シルバー)",unit:"piece",weightPerPiece:.0041,pricePerPiece:201,note:"2室分け仕切り板固定用L字ブラケット (シルバー固定)"},"ECP-2040-4":{name:"2040用エンドキャップ",unit:"piece",weightPerPiece:.0022,pricePerPiece:143,note:"正面枠囲い左扉スペーサーフレーム両端用 (ブラック)"},"ECP-2040-4-GY":{name:"2040用エンドキャップ (グレー)",unit:"piece",weightPerPiece:.0022,pricePerPiece:143,note:"正面枠囲い左扉スペーサーフレーム両端用 (グレー)"}},hardware:{"TH-31":{name:"TH-31 ステンレス蝶番",unit:"piece",weightPerPiece:.028,pricePerPiece:347,note:"前開き扉用 ステンレス製平蝶番 (下部2箇所)"},"C-1249-4":{name:"C-1249-4 ステンレス打掛",unit:"piece",weightPerPiece:.05,pricePerPiece:660,note:"前開き扉用 ステンレス製打掛錠 (上部2箇所)"},"CP-294N":{name:"タキゲン CP-294N スライドラッチ",unit:"piece",weightPerPiece:.055,pricePerPiece:792,note:"正面枠囲い扉用 ワンタッチスライドラッチ (左右各1個)"},"ACRYLIC-ROUND-20-5":{name:"アクリル丸板 透明 φ20mm t5mm (穴加工済)",unit:"piece",weightPerPiece:.002,pricePerPiece:190,note:"正面枠囲い柱側 スライドラッチ受金高さ調整スペーサー (各2枚・計4枚)"},"GROMMET-30":{name:"配線用ゴムグロメット (φ30穴用, 黒)",unit:"piece",weightPerPiece:.005,pricePerPiece:80,note:"天面板 奥側配線用グロメット"},RNSFS4:{name:"段付きローレットノブ (SUS303, RNSFS4)",unit:"piece",weightPerPiece:.012,pricePerPiece:350,note:"引き違い扉用 ステンレスつまみ"},"C-108":{name:"プッシュ式スライド扉鍵 (C-108)",unit:"piece",weightPerPiece:.045,pricePerPiece:800,note:"右スライド扉 下部プッシュ式シリンダー錠"},"RUBBER-FOOT":{name:"ゴム脚 (黒)",unit:"piece",weightPerPiece:.008,pricePerPiece:60,note:"床面接地用ゴム脚 (座金入り)"},"CASTER-50":{name:"自在キャスター",unit:"piece",weightPerPiece:.12,pricePerPiece:200,note:"車輪径φ50 自在キャスター"},"SCREW-M4-KNOB":{name:"No.1 化粧つまみネジ (ホワイト)",unit:"piece",weightPerPiece:.0025,pricePerPiece:25,note:"床下パネルヒータ支え板・換気量調整板用 手締め化粧ネジ"},"SCREW-M3-KNOB":{name:"M3 つまみネジ (白)",unit:"piece",weightPerPiece:.002,pricePerPiece:25,note:"止まり木・仕切り板用 固定つまみネジ"},"BOLT-M6-20":{name:"M6 ボルト",unit:"piece",weightPerPiece:.008,pricePerPiece:30,note:"止まり木 φ30丸棒固定用ボルト"},"SCREW-M4-FLAT":{name:"M4 皿ネジ",unit:"piece",weightPerPiece:.003,pricePerPiece:15,note:"仕切り板フレーム固定用皿ネジ"}},panels:{acrylic_extrusion_3_0:{name:"透明アクリル 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:7568,note:"標準透明パネル (床・背・側面・天面・固定窓 / acrylic_extrusion_price_config.jsより自動積算)"},acrylic_cast_3_0:{name:"透明アクリル 3.0mm (キャスト板・正面扉専用)",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:14652,note:"正面扉専用 (キャスト板 / acrylic_cast_price_config.jsより自動積算: 穴加工2箇所310円+磨き4辺2056円=計2366円/枚込)"},polyca_4_0:{name:"中空ポリカ 4.0mm",thicknessMm:4,unit:"m2",weightPerM2:.9,pricePerM2:7500,note:"高断熱・軽量中空ポリカーボネート"},danplate_4_0:{name:"プラダン 4.0mm",thicknessMm:4,unit:"m2",weightPerM2:.66,pricePerM2:1e3,note:"床下パネルヒータ用 緩衝プラダン"},pvc_punching_3_0:{name:"塩ビパンチングボード 透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:4.3,pricePerM2:20092,note:"通気孔パネル (φ3.1-P7 / pvc_punching_price_config.js価格表より自動積算)"},acrylic_black_matte_3_0:{name:"アクリル黒両面マット 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10344,baseCostPerPiece:400,note:"低反射・マットブラックアクリル (acrylic_black_matte_price_config.jsより自動積算 / スライド部材は固定原価+400円)"},acrylic_smoke_gray_3_0:{name:"アクリル グレースモーク半透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10976,note:"暗め半透明スモークアクリル (コモグラス 530K / acrylic_smoke_gray_price_config.jsより自動積算)"},acrylic_extrusion_1_5:{name:"透明アクリル 1.5mm",thicknessMm:1.5,unit:"m2",weightPerM2:1.8,pricePerM2:4336,note:"側面換気量調整板等 (acrylic_extrusion_price_config.jsより自動積算)"},acrylic_extrusion_2_0:{name:"透明アクリル 2.0mm",thicknessMm:2,unit:"m2",weightPerM2:2.4,pricePerM2:5296,note:"予備・薄物パネル (acrylic_extrusion_price_config.jsより自動積算)"},wire_mesh_15:{name:"金網15mmピッチ（黒粉体塗装）",pitchMm:15,unit:"m2",weightPerM2:8.9,pricePerM2:42712,note:"天面金網 (FENP15, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"},wire_mesh_25:{name:"金網25mmピッチ（黒粉体塗装）",pitchMm:25,unit:"m2",weightPerM2:6.2,pricePerM2:25627,note:"天面金網 (FENP25, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"},wire_mesh_30:{name:"金網30mmピッチ（黒粉体塗装）",pitchMm:30,unit:"m2",weightPerM2:4.4,pricePerM2:14949,note:"天面金網 (FENP30, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"}},options:{labor:{splitFloor:{name:"床面2分割 加工工賃",price:500,note:"床面中央補強フレーム追加に伴う2分割加工工賃"},splitTop:{name:"天面2分割 加工工賃",price:500,note:"天面中央補強フレーム追加に伴う2分割加工工賃 (幅940mm超の必須時を含む)"},typeC:{name:"Type C (前窓＋扉) 加工工賃",price:500,note:"下部アクリル固定窓および扉加工に伴う加工工賃"},splitSide:{name:"側面2分割 加工工賃",price:1e3,note:"側面補強フレーム追加に伴う左右側面の上下2分割加工工賃"},frontWide3x:{name:"正面下側幅広フレーム3倍幅 加工工賃",price:500,note:"正面下側フレームの3倍幅(60mm)特殊加工工賃"},perch:{name:"止まり木 加工工賃",price:1e3,note:"天板付け止まり木 穴あけ・組み立て加工工賃"},rubberPacking:{name:"モレ対策ゴムパッキン 加工工賃",price:800,note:"側面・背面隙間モレ抑制ゴムパッキン施工工賃 (施工面数に関わらず一律)"},roomDivider:{name:"2室分け仕切り板 加工工賃",price:500,note:"仕切り板C面カット・取付穴あけ・組み立て加工工賃"},frontOpenDoor:{name:"TypeA 前開き 加工工賃",price:3e3,note:"前開き扉 切欠き・穴あけ加工工賃"},frontFramedDoor:{name:"TypeA 正面枠囲い 加工工賃",price:5e3,note:"正面枠囲いアルミ扉・ラッチ組み立て加工工賃"},floorHeaterSupport:{name:"床下パネルヒータ支え板 加工工賃",price:1e3,note:"床下パネルヒータ支え板 取り付け・加工工賃"}},items:{caster:{name:"自在キャスター仕様 (4輪)",price:1500,cost:800,note:"車輪径φ50 / 取付高66mm (標準ゴム脚からの変更)"},sideVentCover:{name:"側面換気量調整板 (つまみネジ付)",price:500,cost:200,holeCostPerPiece:94,holesPerPanel:4,note:"t1.5透明アクリル外張り＋φ6mm穴加工4箇所/枚＋No.1化粧つまみネジ (穴加工費は原価に積み上げ)"},ledUsb:{name:"LED照明: USB式 白＆電球色 LED",price:3e3,cost:1980,length:350,weight:.12,note:"USB 二色60LEDアルミライトバー [4023] (USB-A給電・3パターン切替)"},ledRgbw:{name:"LED照明: リモコン操作 RGB+W",price:6500,cost:5490,length:530,weight:.35,note:"RGB+W 30LED[6839] + 専用コントローラー[8166] + 12Vアダプター[6207] + 5pin延長コード1m[6433]"},floorHeaterSupport:{name:"床下パネルヒータ支え板",holeCostPerPiece:112,diagonalCutCost:239,cornerCutCost:587,screwCostPerPiece:25,note:"透明アクリル2mm＋緩衝プラダン4mm＋穴加工＋斜めカット＋切欠き＋化粧ネジ"}}},pricing:{markupRate:1.3,roundingUnit:100,note:"基本販売価格 = Math.ceil((baseMaterialsCost * markupRate) / roundingUnit) * roundingUnit"},system:{gasLogEndpointUrl:"https://script.google.com/macros/s/AKfycbwWv5VmeJGCnvvD0U3WTJBkT3ZnrFIj1qUHXXMlF2TA3vn2hSu9J1zp-9fc4PY_whjp/exec",shop:{name:"Animal SHOP きなと",subtitle:"3Dケージ設計・見積もりシミュレーター",logoUrl:"/logo_kinato.png",characterUrl:"/character_transparent.png",contactUrl:""}}},xa=[{id:"standard",name:"標準仕様",icon:"📐",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","標準枠2倍幅"],desc:"サイズやオプション変更してカスタマイズしてください。"},{id:"leopard_gecko",name:"レオパ向け",icon:"🦎",W:540,D:400,H:200,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)"],desc:"保温性ありのレオパちゃんにゆったりサイズ"},{id:"ball_python",name:"ボールパイソン向け",icon:"🐍",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)","ロータイプ"],desc:"保温性抜群のロータイプケージ"},{id:"carpet_python",name:"カーペットパイソン",icon:"🐍",W:900,D:450,H:450,cageType:"C",frameColor:"black",frontWindowH:50,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!1,hasSideVentCover:!1,hasFloorReinforcement:!0,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"black_matte",back:"black_matte",side:"black_matte",sideUpper:"punching",sideLower:"black_matte",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type C (前窓50)","ブラック","黒アクリル(側・背)","たわみ防止レール"],desc:"のびのび多彩なレイアウトを組める広々サイズ"},{id:"tortoise",name:"リクガメ",icon:"🐢",W:900,D:500,H:500,cageType:"C",frameColor:"silver",frontWindowH:120,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!1,hasSideVentCover:!1,hasFloorReinforcement:!0,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"mesh30",topLeft:"mesh30",topRight:"mesh30"},tags:["Type C (前窓120)","シルバー","天板金網30mm","たわみ防止レール"],desc:"熱源ライトを安心しておける天板金網仕様"},{id:"bearded_dragon",name:"フトアゴヒゲトカゲ",icon:"🦎",W:800,D:450,H:450,cageType:"C",frameColor:"black",frontWindowH:80,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!0,sideOpeningH:200,hasSideVentCover:!1,hasFloorReinforcement:!0,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"black_matte",back:"black_matte",side:"black_matte",sideUpper:"punching",sideLower:"black_matte",top:"mesh25",topLeft:"mesh25",topRight:"mesh25"},tags:["Type C (前窓80)","ブラック","天板金網25mm","側面2分割","たわみ防止レール"],desc:"通気性も確保しつつ、熱源ライト乗せれる金網仕様"},{id:"hedgehog",name:"ハリネズミ",icon:"🦔",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!0,sideOpeningH:120,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)","側面2分割","換気量調整板"],desc:"側面、背面中空ポリカ・側面2分割・換気量調整板仕様"},{id:"hamster",name:"ハムスター向け",icon:"🐹",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"3x",hasSideReinforcement:!0,sideOpeningH:120,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","正面幅広3倍","中空ポリカ","換気量調整板"],desc:"正面幅広フレーム3倍＆中空ポリカ・換気量調整板仕様"},{id:"sugar_glider",name:"フクロモモンガ",icon:"🐿️",W:350,D:350,H:500,cageType:"A_FRONT",frameColor:"silver",frontWideFrame:"none",hasSideReinforcement:!1,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"punching",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},doorHingeSide:"left",tags:["Type A (前開き)","シルバー","側面パンチング","換気量調整板"],desc:"W350×D350×H500mm前開き仕様。側面全面パンチング＆外張り側面換気量調整板で通気・保温を両立"}],Gv=1.6,zv=[{min:100,max:400,label:"100〜400"},{min:401,max:500,label:"401〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"}],Hv=[{min:100,max:400,label:"100〜400"},{min:401,max:500,label:"401〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"},{min:1801,max:1900,label:"1801〜1900"},{min:1901,max:2e3,label:"1901〜2000"}],Wv={15:[[4970,null,null,null,null,null,null,null],[5240,5290,null,null,null,null,null,null],[7730,7850,7920,null,null,null,null,null],[7920,7980,8040,8110,null,null,null,null],[8040,8070,8110,8170,8230,null,null,null],[8730,8790,8860,8930,8990,9060,null,null],[8990,9060,9120,9200,9260,9320,9400,null],[10440,10500,10540,10570,10610,10640,10680,10710]],25:[[2760,null,null,null,null,null,null,null],[3720,3770,null,null,null,null,null,null],[5280,5410,5470,null,null,null,null,null],[5470,5530,5600,5660,null,null,null,null],[5600,5630,5660,5720,5790,null,null,null],[5950,6020,6080,6150,6220,6280,null,null],[6220,6280,6350,6420,6480,6550,6620,null],[7080,7140,7180,7210,7250,7280,7320,7350],[9910,10910,11460,12030,12400,12780,13170,13830],[10420,11470,12040,12650,13040,13440,13850,14540],[10940,12040,12650,13290,13690,14110,14540,15280],[11500,12650,13290,13970,14390,14830,15280,16040],[12080,13280,13950,14660,15100,15560,16030,16840],[12680,13950,14660,15390,15860,16340,16830,17680],[13070,14390,15110,15870,16350,16840,17360,18230],[13470,14830,15570,16360,16850,17370,17890,18800],[13880,15280,16040,16850,17370,17890,18440,19360]],30:[[2750,null,null,null,null,null,null,null],[2770,2800,null,null,null,null,null,null],[2800,2820,2860,null,null,null,null,null],[2820,2860,2880,2900,null,null,null,null],[2860,2880,2900,2920,2940,null,null,null],[3100,3150,3190,3230,3280,3150,null,null],[3150,3190,3230,3280,3320,3360,3470,null],[3370,3410,3450,3500,3530,3560,3590,3650],[5060,5830,6990,7350,7500,7580,7740,7900],[5580,6420,7710,8100,8260,8350,8520,8690],[5860,6740,8100,8510,8680,8780,8960,9150],[6040,6950,8350,8770,8950,9040,9230,9420],[6230,7160,8600,9030,9220,9310,9500,9700],[6420,7380,8860,9310,9500,9610,9810,10010],[6620,7610,9140,9600,9800,9900,10100,10310],[6810,7840,9420,9890,10090,10200,10410,10620],[6950,8e3,9610,10090,10300,10410,10620,10840]]};function xu(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function Vv(n,e,t){const i=parseInt(n,10),s=Wv[i];if(!s)return null;const o=Math.max(e,t),r=Math.min(e,t),a=xu(o,Hv),c=xu(r,zv);if(a===-1||c===-1)return null;if(a>=s.length){const d=s[s.length-1];return d[Math.min(c,d.length-1)]||null}const l=s[a];if(!l)return null;const h=l[c];if(h!=null)return h;for(let d=c;d>=0;d--)if(l[d]!=null)return l[d];return null}function Xv(n,e,t){const i=Vv(n,e,t);return i==null?null:Math.round(i*Gv)}function ar(n,e,t,i,s){if(!n||!e||!t||!i||!s)return null;const o=Math.max(n,e),r=Math.min(n,e),a=i.map(C=>C.max),c=t.map(C=>C.max);let l=0;for(;l<a.length-1&&r>a[l+1];)l++;let h=0;for(;h<c.length-1&&o>c[h+1];)h++;const d=a[l],f=a[Math.min(l+1,a.length-1)],p=c[h],_=c[Math.min(h+1,c.length-1)],v=f===d?0:Math.max(0,Math.min(1,(r-d)/(f-d))),g=_===p?0:Math.max(0,Math.min(1,(o-p)/(_-p))),u=(C,L)=>{const S=Math.max(0,Math.min(C,c.length-1)),x=Math.max(0,Math.min(L,a.length-1)),T=s[S];if(!T)return 0;const O=T[x];if(O!=null)return O;for(let F=x;F>=0;F--)if(T[F]!=null)return T[F];return 0},w=u(h,l),y=u(h,l+1),M=u(h+1,l),I=u(h+1,l+1),R=(1-v)*(1-g)*w+v*(1-g)*y+(1-v)*g*M+v*g*I;return Math.round(R)}const Mu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],yu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],bu=[[345,null,null,null,null,null,null,null,null,null,null,null,null,null],[446,611,null,null,null,null,null,null,null,null,null,null,null,null],[560,762,979,null,null,null,null,null,null,null,null,null,null,null],[661,929,1180,1450,null,null,null,null,null,null,null,null,null,null],[778,1079,1399,1701,2022,null,null,null,null,null,null,null,null,null],[878,1248,1600,1972,2324,2697,null,null,null,null,null,null,null,null],[997,1399,1821,2223,2646,3049,3474,null,null,null,null,null,null,null],[1097,1569,2022,2496,2948,3424,3877,4355,null,null,null,null,null,null],[1217,1720,2244,2747,3273,3776,4305,4808,5339,null,null,null,null,null],[1439,2043,2669,3273,3903,4506,5138,5741,6345,7583,null,null,null,null],[1663,2368,3098,3802,4534,5238,5943,6647,7382,8790,10233,null,null,null],[1891,2695,3528,4333,5138,5943,6778,7583,8388,10032,11641,13288,null,null],[2120,3025,3931,4836,5772,6678,7583,8489,9428,11239,13087,14897,16749,null],[2321,3327,4364,5370,6376,7382,8422,9428,10434,12483,14495,16548,18560,20617],[2553,3660,4766,5873,7014,8120,9227,10333,11477,13690,15944,18158,20416,22629],[2754,3962,5203,6410,7617,8824,10069,11276,12483,14938,17353,19812,22227,24691],[2990,4297,5605,6913,8258,9566,10873,12181,13530,16146,18806,21422,24087,26703],[3191,4599,6045,7453,8861,10270,11719,13128,14536,17398,20215,23081,25898,28770],[3429,4938,6447,7956,9506,11015,12524,14033,15587,18605,21673,24691,27764,30782],[3630,5240,6890,8500,10110,11719,13374,14983,16593,19862,23081,26356,29575,32854],[3872,5583,7293,9003,10758,12468,14179,15889,17649,21069,24545,27965,31446,34866],[4074,5884,7740,9551,11362,13173,15033,16844,18655,22332,25953,29635,33256,36944]];function Su(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function $v(n,e){const t=ar(n,e,yu,Mu,bu);if(t!=null&&t>0)return t;const i=Math.max(n,e),s=Math.min(n,e),o=Su(i,yu),r=Su(s,Mu);if(o===-1||r===-1)return null;const a=bu[o];if(!a)return null;const c=a[r];if(c!=null)return c;for(let l=r;l>=0;l--)if(a[l]!=null)return a[l];return null}const Tu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],wu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Eu={"1.5":[[149,null,null,null,null,null,null,null,null,null,null,null,null,null],[167,206,null,null,null,null,null,null,null,null,null,null,null,null],[197,233,281,null,null,null,null,null,null,null,null,null,null,null],[215,272,318,377,null,null,null,null,null,null,null,null,null,null],[245,299,368,422,492,null,null,null,null,null,null,null,null,null],[263,341,404,483,546,627,null,null,null,null,null,null,null,null],[295,368,455,528,618,690,781,null,null,null,null,null,null,null],[313,410,492,590,672,772,853,955,null,null,null,null,null,null],[347,437,545,636,745,835,946,1037,1150,null,null,null,null,null],[400,509,636,745,873,982,1113,1222,1331,1573,null,null,null,null],[454,581,728,855,1004,1131,1258,1385,1537,1791,2072,null,null,null],[510,656,823,968,1113,1258,1428,1573,1718,2035,2326,2645,null,null],[569,732,895,1059,1246,1409,1573,1736,1927,2253,2609,2936,3294,null],[605,787,992,1174,1355,1537,1745,1927,2108,2500,2863,3258,3621,4019],[665,865,1065,1264,1491,1691,1890,2090,2319,2718,3149,3548,3983,4382],[702,919,1164,1382,1600,1818,2064,2282,2500,2968,3403,3874,4309,4784],[765,1001,1237,1473,1738,1974,2210,2446,2714,3185,3692,4164,4675,5147],[801,1055,1338,1593,1847,2101,2387,2641,2895,3438,3946,4494,5002,5553],[867,1139,1411,1683,1988,2260,2532,2804,3112,3656,4240,4784,5372,5916],[903,1193,1516,1806,2096,2387,2712,3003,3293,3913,4494,5117,5698,6326],[971,1280,1588,1897,2240,2549,2857,3166,3514,4131,4791,5408,6072,6689],[1007,1334,1696,2023,2349,2676,3042,3368,3695,4391,5045,5745,6399,7104]],"2.0":[[172,null,null,null,null,null,null,null,null,null,null,null,null,null],[195,242,null,null,null,null,null,null,null,null,null,null,null,null],[231,276,335,null,null,null,null,null,null,null,null,null,null,null],[253,324,380,453,null,null,null,null,null,null,null,null,null,null],[290,358,442,509,594,null,null,null,null,null,null,null,null,null],[312,408,487,583,662,759,null,null,null,null,null,null,null,null],[351,442,549,640,748,839,950,null,null,null,null,null,null,null],[374,492,594,714,816,939,1041,1164,null,null,null,null,null,null],[413,526,658,771,905,1018,1153,1266,1404,null,null,null,null,null],[477,612,769,905,1063,1198,1359,1495,1631,1930,null,null,null,null],[543,701,882,1040,1223,1382,1540,1699,1885,2202,2548,null,null,null],[610,791,997,1178,1359,1540,1749,1930,2111,2503,2865,3260,null,null],[680,884,1088,1291,1523,1727,1930,2134,2367,2775,3215,3622,4066,null],[726,952,1206,1432,1659,1885,2141,2367,2594,3079,3532,4020,4473,4966],[799,1048,1297,1546,1824,2073,2322,2571,2853,3351,3885,4382,4920,5418],[844,1116,1417,1689,1960,2232,2536,2808,3079,3658,4201,4784,5328,5915],[919,1213,1508,1802,2129,2423,2717,3011,3342,3930,4558,5147,5779,6367],[965,1281,1631,1948,2265,2581,2934,3251,3568,4241,4875,5553,6186,6868],[1043,1382,1722,2061,2436,2776,3115,3455,3834,4513,5236,5915,6641,7320],[1088,1450,1848,2210,2572,2934,3336,3698,4060,4828,5553,6325,7049,7827],[1169,1554,1939,2323,2748,3133,3517,3902,4331,5100,5917,6687,7510,8279],[1215,1622,2069,2476,2884,3291,3742,4150,4557,5420,6234,7103,7917,8790]],"3.0":[[212,null,null,null,null,null,null,null,null,null,null,null,null,null],[246,311,null,null,null,null,null,null,null,null,null,null,null,null],[294,362,446,null,null,null,null,null,null,null,null,null,null,null],[328,429,514,617,null,null,null,null,null,null,null,null,null,null],[378,480,600,702,823,null,null,null,null,null,null,null,null,null],[412,549,668,806,925,1065,null,null,null,null,null,null,null,null],[464,600,755,891,1048,1184,1343,null,null,null,null,null,null,null],[498,670,823,997,1150,1326,1479,1658,null,null,null,null,null,null],[551,721,912,1082,1275,1445,1641,1811,2009,null,null,null,null,null],[640,844,1071,1275,1505,1709,1941,2145,2349,2788,null,null,null,null],[731,969,1233,1471,1737,1975,2213,2451,2720,3196,3706,null,null,null],[825,1097,1397,1669,1941,2213,2516,2788,3060,3638,4182,4763,null,null],[921,1227,1533,1839,2176,2482,2788,3094,3434,4046,4695,5307,5960,null],[989,1329,1700,2040,2380,2720,3094,3434,3774,4491,5171,5892,6572,7297],[1088,1462,1836,2210,2618,2992,3366,3740,4151,4899,5688,6436,7229,7977],[1156,1564,2006,2414,2822,3230,3675,4083,4491,5348,6164,7025,7841,8707],[1258,1700,2142,2584,3063,3505,3947,4389,4872,5756,6685,7569,8503,9387],[1326,1802,2315,2791,3267,3743,4260,4736,5212,6209,7161,8163,9115,10122],[1431,1941,2451,2961,3512,4022,4532,5042,5597,6617,7687,8707,9782,10802],[1499,2043,2628,3172,3716,4260,4849,5393,5937,7075,8163,9306,10394,11542],[1608,2186,2764,3342,3965,4543,5121,5699,6327,7483,8694,9850,11066,12222],[1676,2288,2945,3557,4169,4781,5443,6055,6667,7946,9170,10454,11678,12968]]};function Cu(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function Yv(n,e,t){const i=parseFloat(n).toFixed(1),s=Eu[i]||Eu["3.0"];if(!s)return null;const o=ar(e,t,wu,Tu,s);if(o!=null&&o>0)return o;const r=Math.max(e,t),a=Math.min(e,t),c=Cu(r,wu),l=Cu(a,Tu);if(c===-1||l===-1)return null;const h=s[c];if(!h)return null;const d=h[l];if(d!=null)return d;for(let f=l;f>=0;f--)if(h[f]!=null)return h[f];return null}const Au=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Pu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Ru=[[242,null,null,null,null,null,null,null,null,null,null,null,null,null],[290,377,null,null,null,null,null,null,null,null,null,null,null,null],[353,451,564,null,null,null,null,null,null,null,null,null,null,null],[402,540,662,802,null,null,null,null,null,null,null,null,null,null],[467,613,777,923,1089,null,null,null,null,null,null,null,null,null],[515,704,875,1064,1235,1427,null,null,null,null,null,null,null,null],[582,777,991,1186,1402,1597,1815,null,null,null,null,null,null,null],[631,869,1089,1329,1549,1791,2010,2256,null,null,null,null,null,null],[699,942,1207,1451,1718,1962,2231,2475,2747,null,null,null,null,null],[817,1110,1425,1718,2036,2329,2650,2942,3235,3851,null,null,null,null],[938,1279,1646,1988,2357,2698,3040,3381,3753,4436,5153,null,null,null],[1061,1451,1869,2259,2650,3040,3461,3851,4241,5055,5835,6653,null,null],[1187,1626,2064,2503,2973,3412,3851,4290,4763,5640,6555,7433,8351,null],[1284,1772,2290,2778,3266,3753,4275,4763,5250,6262,7238,8254,9229,10249],[1413,1949,2486,3022,3592,4129,4665,5201,5775,6848,7961,9034,10152,11225],[1510,2095,2715,3300,3885,4470,5092,5677,6262,7474,8644,9859,11030,12250],[1642,2276,2910,3544,4214,4848,5482,6116,6791,8059,9372,10640,11957,13225],[1739,2422,3142,3824,4507,5190,5913,6596,7279,8689,10054,11470,12835,14255],[1874,2605,3337,4068,4841,5572,6303,7035,7811,9274,10787,12250,13768,15231],[1971,2752,3573,4353,5133,5913,6739,7519,8299,9909,11470,13085,14646,16266],[2110,2939,3768,4597,5471,6300,7129,7958,8837,10495,12207,13865,15583,17241],[2207,3085,4008,4886,5763,6641,7569,8446,9324,11135,12890,14706,16461,18282]];function Lu(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function qv(n,e){const t=ar(n,e,Pu,Au,Ru);if(t!=null&&t>0)return t;const i=Math.max(n,e),s=Math.min(n,e),o=Lu(i,Pu),r=Lu(s,Au);if(o===-1||r===-1)return null;const a=Ru[o];if(!a)return null;const c=a[r];if(c!=null)return c;for(let l=r;l>=0;l--)if(a[l]!=null)return a[l];return null}const Du=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Iu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Fu=[[248,null,null,null,null,null,null,null,null,null,null,null,null,null],[300,393,null,null,null,null,null,null,null,null,null,null,null,null],[367,471,591,null,null,null,null,null,null,null,null,null,null,null],[419,565,695,844,null,null,null,null,null,null,null,null,null,null],[487,643,818,974,1149,null,null,null,null,null,null,null,null,null],[539,739,922,1123,1306,1509,null,null,null,null,null,null,null,null],[609,818,1045,1254,1483,1692,1923,null,null,null,null,null,null,null],[661,915,1149,1405,1639,1897,2132,2392,null,null,null,null,null,null],[732,993,1275,1535,1819,2079,2366,2627,2915,null,null,null,null,null],[858,1170,1506,1819,2158,2470,2811,3124,3437,4093,null,null,null,null],[985,1350,1741,2105,2498,2863,3228,3593,3989,4719,5482,null,null,null],[1115,1532,1977,2394,2811,3228,3676,4093,4510,5378,6212,7083,null,null],[1247,1716,2186,2655,3155,3624,4093,4562,5065,6004,6979,7917,8896,null],[1352,1873,2425,2946,3468,3989,4544,5065,5587,6666,7709,8792,9835,10922],[1487,2060,2634,3207,3814,4388,4961,5534,6145,7292,8479,9626,10818,11965],[1591,2217,2876,3502,4127,4753,5415,6041,6666,7958,9209,10505,11756,13057],[1729,2407,3085,3762,4477,5154,5832,6510,7228,8584,9984,11339,12744,14100],[1834,2563,3330,4060,4790,5519,6290,7020,7750,9254,10714,12223,13683,15197],[1975,2757,3539,4320,5143,5925,6707,7489,8316,9880,11493,13057,14676,16240],[2079,2913,3788,4622,5456,6290,7169,8003,8837,10555,12223,13946,15614,17342],[2224,3110,3997,4883,5814,6700,7586,8472,9408,11181,13008,14780,16612,18385],[2329,3267,4250,5188,6127,7065,8053,8991,9930,11861,13738,15674,17551,19493]];function Uu(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function Zv(n,e){const t=ar(n,e,Iu,Du,Fu);if(t!=null&&t>0)return t;const i=Math.max(n,e),s=Math.min(n,e),o=Uu(i,Iu),r=Uu(s,Du);if(o===-1||r===-1)return null;const a=Fu[o];if(!a)return null;const c=a[r];if(c!=null)return c;for(let l=r;l>=0;l--)if(a[l]!=null)return a[l];return null}const Kv=[{maxHalfPerimeter:250,pricePerEdge:121},{maxHalfPerimeter:350,pricePerEdge:146},{maxHalfPerimeter:480,pricePerEdge:175},{maxHalfPerimeter:550,pricePerEdge:210},{maxHalfPerimeter:650,pricePerEdge:252},{maxHalfPerimeter:780,pricePerEdge:302},{maxHalfPerimeter:880,pricePerEdge:362},{maxHalfPerimeter:980,pricePerEdge:435},{maxHalfPerimeter:1150,pricePerEdge:522},{maxHalfPerimeter:1350,pricePerEdge:626},{maxHalfPerimeter:1500,pricePerEdge:752},{maxHalfPerimeter:1800,pricePerEdge:902}];function jv(n,e){const t=(n||0)+(e||0);for(const i of Kv)if(t<=i.maxHalfPerimeter)return i.pricePerEdge;return 902}function Kd(n,e){return jv(n,e)*4+485}const Nu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Bu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Ou=[[287,null,null,null,null,null,null,null,null,null,null,null,null,null],[359,481,null,null,null,null,null,null,null,null,null,null,null,null],[445,588,747,null,null,null,null,null,null,null,null,null,null,null],[516,712,891,1088,null,null,null,null,null,null,null,null,null,null],[604,819,1052,1267,1501,null,null,null,null,null,null,null,null,null],[676,945,1195,1465,1716,1988,null,null,null,null,null,null,null,null],[765,1052,1358,1645,1952,2239,2549,null,null,null,null,null,null,null],[837,1179,1501,1845,2167,2513,2835,3184,null,null,null,null,null,null],[928,1286,1666,2024,2405,2764,3148,3506,3893,null,null,null,null,null],[1092,1522,1975,2405,2861,3291,3749,4179,4610,5501,null,null,null,null],[1258,1760,2288,2790,3319,3821,4323,4825,5357,6361,7398,null,null,null],[1428,2001,2603,3176,3749,4323,4927,5501,6074,7255,8402,9585,null,null],[1599,2244,2889,3534,4210,4856,5501,6146,6825,8115,9442,10732,12063,null],[1743,2459,3207,3924,4641,5357,6108,6825,7542,9012,10446,11920,13354,14832],[1917,2705,3494,4282,5105,5893,6681,7470,8295,9872,11490,13067,14689,16266],[2060,2920,3814,4675,5535,6395,7292,8152,9012,10773,12493,14259,15979,17749],[2238,3169,4101,5033,6002,6933,7865,8797,9770,11633,13542,15405,17319,19183],[2381,3384,4425,5428,6432,7435,8480,9483,10487,12538,14545,16602,18609,20671],[2561,3636,4712,5787,6903,7978,9053,10128,11248,13399,15599,17749,19954,22105],[2705,3851,5039,6186,7333,8480,9671,10818,11965,14309,16602,18951,21244,23598],[2889,4107,5326,6544,7808,9026,10245,11463,12732,15169,17661,20098,22595,25032],[3032,4322,5658,6948,8238,9528,10868,12158,13449,16084,18664,21304,23885,26531]];function ku(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function jd(n,e){const t=ar(n,e,Bu,Nu,Ou);if(t!=null&&t>0)return t;const i=Math.max(n,e),s=Math.min(n,e),o=ku(i,Bu),r=ku(s,Nu);if(o===-1||r===-1)return null;const a=Ou[o];if(!a)return null;const c=a[r];if(c!=null)return c;for(let l=r;l>=0;l--)if(a[l]!=null)return a[l];return null}function Jv(n,e){const t=jd(n,e);if(t==null)return null;const i=Kd(n,e);return t+i}function Qv(n,e=""){const t=n||"",i=e||"";return t==="acrylic_cast_3_0"||i.includes("キャスト")?{materialName:"透明アクリル キャスト板 3.0mm (または コモグラス押出)",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3316",hazaiyaExtrusionUrl:"https://www.hazaiya.co.jp/estimate/board/3302",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_extrusion_3_0"||i.includes("透明アクリル 3.0mm")&&!i.includes("キャスト")?{materialName:"透明アクリル 押出板 3.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_extrusion_2_0"||i.includes("2.0mm")?{materialName:"透明アクリル 押出板 2.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:2,isHazaiyaOrder:!0}:t==="acrylic_extrusion_1_5"||i.includes("1.5mm")?{materialName:"透明アクリル 押出板 1.5mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:1.5,isHazaiyaOrder:!0}:t==="pvc_punching_3_0"||i.includes("塩ビパンチング")?{materialName:"塩ビ透明パンチングボード (φ3.1-P7, 3.0mm厚)",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/4018",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_black_matte_3_0"||i.includes("黒両面マット")?{materialName:"アクリル黒両面マット 3.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3468",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_smoke_gray_3_0"||i.includes("グレースモーク")?{materialName:"アクリル グレースモーク半透明 3.0mm (コモグラス 530K)",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3356",thicknessMm:3,isHazaiyaOrder:!0}:t==="danplate_4_0"||i.includes("プラダン")?{materialName:"緩衝プラダン 4.0mm (市販品・別手配)",hazaiyaUrl:"※ホームセンター等にて市販品を手配（直線カットのみ）",thicknessMm:4,isHazaiyaOrder:!1}:t==="polyca_4_0"||i.includes("中空ポリカ")?{materialName:"ツインカーボ（中空ポリカーボネート） 4.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:4,isHazaiyaOrder:!0}:{materialName:i||"アクリル板",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate",thicknessMm:3,isHazaiyaOrder:!0}}function Jd(n,e){if(!n||!Array.isArray(n))return[];Number(e.W||540),Number(e.D||400),Number(e.H||400);const t=e.cageType||"A";e.hasDoorAntiFlex,e.frontWideFrame,Number(e.frontWindowH||100);const i=n.filter(o=>o.category==="panel"),s=[];for(const o of i){const r=o.name||"",a=Qv(o.panelCode||o.partCode,r);let c=o.widthMm,l=o.heightMm;if((!c||!l)&&o.size){const h=o.size.match(/([\d.]+)\s*[x×]\s*([\d.]+)/);h&&(c=parseFloat(h[1]),l=parseFloat(h[2]))}if(c=Math.round((c||0)*10)/10,l=Math.round((l||0)*10)/10,(t==="A"||t==="C")&&(r.includes("スライド扉")||r.includes("扉")&&!r.includes("前開き"))){const h=Math.round(l/2*10)/10,d=e.frontDoorMaterial==="cast";s.push({key:"front_slide_doors",title:`${r}（2枚構成・同一加工）`,materialName:d?"透明アクリル キャスト板 3.0mm":"アクリル押出-コモグラス 3.0mm",doorMaterialType:d?"cast":"extrusion",hazaiyaUrl:d?"https://www.hazaiya.co.jp/estimate/board/3316":"https://www.hazaiya.co.jp/estimate/board/3302",hazaiyaExtrusionUrl:"https://www.hazaiya.co.jp/estimate/board/3302",hazaiyaCastUrl:"https://www.hazaiya.co.jp/estimate/board/3316",widthMm:c,heightMm:l,thicknessMm:3,quantity:o.count||2,needsMachining:!0,edgeFinishing:"ABCD全4辺「磨き仕上げ」",holes:[{desc:"引き手ノブ穴 (段付きローレットノブ用)",corner:"C",x:15,y:h,base:`A辺(左)より15.0mm / D辺(下)より${h.toFixed(1)}mm (高さ寸法の1/2)`,diameterMm:4.1,taperMm:0},{desc:"プッシュ式スライド錠穴 (C-108用)",corner:"D",x:15.5,y:25,base:"角D(右下)より左方向へ15.5mm / 上方向へ25.0mm",diameterMm:10.5,taperMm:0}],corners:[],notches:[],notes:"【★加工あり】2枚同一仕様で発注（1枚を裏返して使用）。はざいや加工数量割引適用"});continue}if(r.includes("前開き")&&r.includes("扉")){const h=e.doorHingeSide==="right",d=Math.round(l*1/4*10)/10,f=Math.round(l*3/4*10)/10;s.push({key:"front_open_door",title:`${r}（${h?"右ヒンジ左打掛":"左ヒンジ右打掛"}）`,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c,heightMm:l,thicknessMm:3,quantity:1,needsMachining:!0,edgeFinishing:"ABCD全4辺「磨き仕上げ」",corners:[{desc:"4隅角丸",spec:"角A, 角B, 角C, 角D すべて R10 (10.0mm角丸)"}],notches:[{desc:h?"A辺(左・打掛受側) 切欠き2箇所":"C辺(右・打掛受側) 切欠き2箇所",spec:`下側(D辺より${d}mm中心) & 上側(D辺より${f}mm中心): 各 幅19.0mm x 高さ52.0mm`}],holes:[{desc:"TH-31蝶番固定用穴 (4箇所)",base:`${h?"C辺(右)":"A辺(左)"}端より11.25mm / 各ヒンジ中心より dy=-8.5mm, +17.0mm`,diameterMm:3.5,taperMm:0},{desc:"C-1249-4打掛固定用穴 (4箇所)",base:`${h?"A辺(左)":"C辺(右)"}端より9.7mm / 各打掛中心より dy=-15.0mm, +15.0mm`,diameterMm:3.5,taperMm:0}],notes:"【★加工あり】4隅R10角丸 / 切欠き2箇所 / 蝶番・打掛固定穴計8箇所"});continue}if(r.includes("ヒンジ座板")){s.push({key:"hinge_spacer",title:r,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c||16,heightMm:l||52,thicknessMm:3,quantity:o.count||2,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",holes:[{desc:"蝶番フレーム固定穴",base:"幅中心(8mm) / 上下中心より dy=-17.0mm, +8.5mm",diameterMm:3.5,taperMm:0}],corners:[],notches:[],notes:"【★加工あり】前開き扉蝶番フレーム取付スペーサー（フレーム溝固定用・2枚）"});continue}if(r.includes("ロック受座板")){s.push({key:"lock_spacer",title:r,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c||16,heightMm:l||48,thicknessMm:3,quantity:o.count||2,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",holes:[{desc:"打掛受具フレーム固定穴",base:"幅中心(8mm) / 上下中心より dy=-15.0mm, +15.0mm",diameterMm:3.5,taperMm:0}],corners:[],notches:[],notes:"【★加工あり】前開き扉打掛受具フレーム取付スペーサー（フレーム溝固定用・2枚）"});continue}if(r.includes("側面換気量調整板")||r.includes("換気量調整板")){s.push({key:"side_vent_cover",title:r,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c,heightMm:l,thicknessMm:1.5,quantity:o.count||2,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",holes:[{desc:"角A側",base:"A辺(左)より9.0mm / B辺(上)より40.0mm",diameterMm:6,taperMm:0},{desc:"角B側",base:"C辺(右)より9.0mm / B辺(上)より40.0mm",diameterMm:6,taperMm:0},{desc:"角C側",base:"A辺(左)より9.0mm / D辺(下)より40.0mm",diameterMm:6,taperMm:0},{desc:"角D側",base:"C辺(右)より9.0mm / D辺(下)より40.0mm",diameterMm:6,taperMm:0}],corners:[],notches:[],notes:`【★加工あり】1枚あたりφ6.0mm丸穴4箇所 (計${(o.count||2)*4}穴) / No.1化粧つまみネジ固定用`});continue}if(r.includes("床下パネルヒータ支え板")&&!r.includes("プラダン")){if(o.count===2||o.note&&o.note.includes("2枚")){const d=Math.max(10,l-180);s.push({key:"floor_heater_support_2",title:`${r}（2枚構成・床補強あり）`,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c,heightMm:l,thicknessMm:2,quantity:2,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",corners:[{desc:"外側角A(左上)斜めカット",corner:"A",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"},{desc:"外側角C(左下)斜めカット",corner:"C",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"}],notches:[{desc:"角D(右下)配線逃がし切欠き",corner:"D",type:"corner_notch",sizeX:20,sizeY:d,spec:`幅20.0mm x 長さ${d.toFixed(1)}mm 角落とし`}],holes:[{desc:"角A斜め脇 奥",corner:"A",x:90,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / A辺(左)より90.0mm"},{desc:"角A斜め脇 左",corner:"A",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / B辺(上)より90.0mm"},{desc:"角C斜め脇 手前",corner:"C",x:90,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / A辺(左)より90.0mm"},{desc:"角C斜め脇 左",corner:"C",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / D辺(下)より90.0mm"},{desc:"中央フレーム溝部",corner:"B",x:9,y:90,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / B辺(上)より90.0mm"},{desc:"奥フレーム固定",corner:"B",x:80,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / C辺(右)より80.0mm"},{desc:"手前フレーム固定",corner:"D",x:80,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / C辺(右)より80.0mm"}],notes:"【★加工あり】2枚互い違い(180度反転)配置。1枚あたりφ6.0mm丸穴7箇所・斜めカット2箇所・切欠き1箇所"})}else{const d=Math.round(c/2*10)/10;s.push({key:"floor_heater_support_1",title:`${r}（1枚構成・通常床面）`,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c,heightMm:l,thicknessMm:2,quantity:1,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",corners:[{desc:"角A(左上)斜めカット",corner:"A",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"},{desc:"角B(右上)斜めカット",corner:"B",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"},{desc:"角C(左下)斜めカット",corner:"C",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"},{desc:"角D(右下)斜めカット",corner:"D",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"}],notches:[],holes:[{desc:"奥フレーム長辺中央",corner:"A",x:d,y:9,diameterMm:6,taperMm:0,base:`B辺(上)より9.0mm / 角A(左)より${d}mm (中央)`},{desc:"手前フレーム長辺中央",corner:"C",x:d,y:9,diameterMm:6,taperMm:0,base:`D辺(下)より9.0mm / 角C(左)より${d}mm (中央)`},{desc:"角A斜め脇 奥",corner:"A",x:90,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / A辺(左)より90.0mm"},{desc:"角A斜め脇 左",corner:"A",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / B辺(上)より90.0mm"},{desc:"角B斜め脇 奥",corner:"B",x:90,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / C辺(右)より90.0mm"},{desc:"角B斜め脇 右",corner:"B",x:9,y:90,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / B辺(上)より90.0mm"},{desc:"角C斜め脇 手前",corner:"C",x:90,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / A辺(左)より90.0mm"},{desc:"角C斜め脇 左",corner:"C",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / D辺(下)より90.0mm"},{desc:"角D斜め脇 手前",corner:"D",x:90,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / C辺(右)より90.0mm"},{desc:"角D斜め脇 右",corner:"D",x:9,y:90,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / D辺(下)より90.0mm"}],notes:"【★加工あり】4隅80x80mm斜めカット / φ6.0mm丸穴10箇所 (端から9mm溝位置)"})}continue}s.push({key:`standard_panel_${s.length}`,title:r,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c,heightMm:l,thicknessMm:a.thicknessMm,quantity:o.count||1,needsMachining:!1,edgeFinishing:"仕上げなし（ノコカット）",holes:[],corners:[],notches:[],notes:`${o.note||"直線カットのみ"} / 【切断のみ (加工なし)】`})}return s}function ex(n,e={}){if(!n||n.length===0)return"【はざいや発注リスト】対象のパネル部材はありません。";const t=[],i=n.reduce((o,r)=>o+(r.quantity||1),0),s=n.filter(o=>o.needsMachining).length;return t.push("================================================================"),t.push("【アクリルショップ はざいや様向け パネル一括発注リスト（全パネル網羅版）】"),e.W&&e.D&&e.H&&t.push(`対象ケージ: W${e.W} x D${e.D} x H${e.H} mm (Type ${e.cageType||"A"})`),t.push(`発注品目数: ${n.length} 品目 (合計枚数: ${i} 枚 / うち加工あり: ${s} 品目)`),t.push("※ 2重発注防止のため、本リストを上から順に1回だけカートへ追加してください。"),t.push("※ 基準: A辺=左辺, B辺=上辺, C辺=右辺, D辺=下辺 / 角A=左上, 角B=右上, 角C=左下, 角D=右下"),t.push(`================================================================
`),n.forEach((o,r)=>{const a=o.needsMachining?"【★加工あり】":"【切断のみ (加工なし)】";t.push(`■ [${r+1}/${n.length}] ${o.title}  ${a}`),t.push(`・素材: ${o.materialName}`),t.push(`・発注URL: ${o.hazaiyaUrl}`),t.push(`・仕上がり寸法: ヨコ ${o.widthMm} mm x タテ ${o.heightMm} mm (厚み ${o.thicknessMm} mm)`),t.push(`・発注数量: ${o.quantity} 枚`),t.push(`・切断面仕上げ: ${o.edgeFinishing}`),o.needsMachining&&(o.corners&&o.corners.length>0&&(t.push("・コーナー加工:"),o.corners.forEach(c=>{const l=c.spec||(c.sizeX&&c.sizeY?`${c.sizeX} x ${c.sizeY} mm 斜めカット`:"指定あり");t.push(`   - ${c.desc}: ${l}`)})),o.notches&&o.notches.length>0&&(t.push("・切欠き加工:"),o.notches.forEach(c=>{const l=c.spec||(c.sizeX&&c.sizeY?`幅${c.sizeX}mm x 長さ${c.sizeY}mm`:"指定あり");t.push(`   - ${c.desc}: ${l}`)})),o.holes&&o.holes.length>0&&(t.push("・穴あけ加工:"),o.holes.forEach((c,l)=>{const h=c.base||(c.corner?`角${c.corner}基準 (X:${c.x}mm, Y:${c.y}mm)`:"図面指定");t.push(`   (${l+1}) [${c.desc}] 基準: ${h} ➜ 直径 φ${c.diameterMm} mm (テーパー深さ ${c.taperMm||0} mm)`)}))),o.notes&&t.push(`・備考: ${o.notes}`),t.push(`----------------------------------------------------------------
`)}),t.join(`
`)}const tx=document.getElementById("canvas-container"),ao=document.getElementById("creature-preset-grid"),fs=document.getElementById("input-restore-estimate-id"),Js=document.getElementById("btn-restore-estimate"),Xr=document.getElementById("restore-status-msg"),nx=document.getElementById("btn-save-image");document.getElementById("btn-copy-spec");document.getElementById("inquiry-spec-textarea");document.getElementById("copy-toast");const Cn=document.getElementById("estimate-result-modal"),Gu=document.getElementById("modal-estimate-id"),zu=document.getElementById("modal-price-total"),Hu=document.getElementById("modal-weight-total"),Zo=document.getElementById("modal-spec-textarea"),Sl=document.getElementById("btn-copy-spec-modal"),Vs=document.getElementById("modal-copy-toast"),bc=document.getElementById("btn-save-image-modal"),Wu=document.getElementById("btn-close-modal"),Vu=document.getElementById("btn-dismiss-modal"),Xu=document.getElementById("btn-open-estimate-modal"),on=document.getElementById("modal-download-success"),Xs=document.getElementById("download-success-title"),Ui=document.getElementById("download-filename-label"),Ma=document.getElementById("modal-preview-section"),Qs=document.getElementById("modal-preview-img"),Vi=document.getElementById("modal-share-url-input"),Tl=document.getElementById("btn-copy-share-url-modal"),$s=document.getElementById("modal-copy-url-toast");let zn=null,ms=null;const ix=Date.now(),Qd=uf(),Sc=df();let $u=0,st=null;function Si(n,e=5e3){let t=document.getElementById("app-notice-toast");t||(t=document.createElement("div"),t.id="app-notice-toast",t.className="app-notice-toast hidden",document.body.appendChild(t)),t.textContent=n,t.classList.remove("hidden"),requestAnimationFrame(()=>{t.classList.add("show")}),t._timer&&clearTimeout(t._timer),t._timer=setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.classList.add("hidden"),300)},e)}const un=document.getElementById("slider-w"),dn=document.getElementById("input-w"),qi=document.getElementById("slider-d"),Zi=document.getElementById("input-d"),fn=document.getElementById("slider-h"),pn=document.getElementById("input-h"),Kn=document.getElementById("row-front-window"),Ki=document.getElementById("slider-fw"),ji=document.getElementById("input-fw"),mo=document.getElementById("toggle-side-reinforce"),Ms=document.getElementById("card-side-reinforce"),ys=document.getElementById("box-side-h"),ht=document.getElementById("input-side-h"),xn=document.getElementById("btn-type-a"),bt=document.getElementById("btn-type-a-front"),St=document.getElementById("btn-type-a-framed"),Ln=document.getElementById("btn-type-c"),Tt=document.getElementById("btn-type-c-framed"),At=document.getElementById("type-badge");let $r=null,zo=null,aa=null,Ho=null,la=null,Wo=null,ca=null,Vo=null,Tc=null,ef=[];const Ti=document.getElementById("btn-frame-silver"),wi=document.getElementById("btn-frame-black"),wl=document.getElementById("section-front-door-hinge"),Mi=document.getElementById("btn-hinge-left"),yi=document.getElementById("btn-hinge-right"),Ji=document.getElementById("toggle-caster"),Ei=document.getElementById("card-caster"),gn=document.getElementById("toggle-floor-reinforce"),Jt=document.getElementById("card-floor-reinforce"),wc=document.getElementById("floor-reinf-sub"),Lt=document.getElementById("select-floor-split"),Wt=document.getElementById("toggle-back-reinforce"),Ot=document.getElementById("card-back-reinforce"),eo=document.getElementById("back-reinf-sub"),Dt=document.getElementById("select-back-split"),kt=document.getElementById("toggle-top-reinforce"),yt=document.getElementById("card-top-reinforce"),_i=document.getElementById("top-reinf-sub"),An=document.getElementById("toggle-door-anti-flex"),_n=document.getElementById("card-door-anti-flex"),Zn=document.getElementById("toggle-side-vent-cover"),Rn=document.getElementById("card-side-vent-cover"),Bo=document.getElementById("vent-cover-badge"),Yr=document.getElementById("vent-cover-sub"),Pt=document.getElementById("toggle-perch"),Ct=document.getElementById("card-perch"),fi=document.getElementById("toggle-front-wide-2x"),kn=document.getElementById("card-front-wide-2x"),qr=document.getElementById("front-wide-2x-sub"),pi=document.getElementById("toggle-front-wide-3x"),Gn=document.getElementById("card-front-wide-3x"),Zr=document.getElementById("front-wide-3x-sub"),ni=document.getElementById("toggle-rubber-packing"),Wn=document.getElementById("card-rubber-packing"),Ni=document.getElementById("rubber-packing-badge"),Yu=document.getElementById("rubber-packing-sub"),Qi=document.getElementById("toggle-floor-heater-support"),wn=document.getElementById("card-floor-heater-support"),cs=document.getElementById("floor-heater-support-badge"),sx=document.getElementById("floor-heater-support-sub"),El=document.getElementById("floor-warning-banner"),qu=document.getElementById("seismic-warning-banner"),ox=document.getElementById("seismic-warning-text"),tf=document.getElementById("btn-door-closed"),nf=document.getElementById("btn-door-left"),sf=document.getElementById("btn-door-right"),ha=document.getElementById("btn-front-door-closed"),ua=document.getElementById("btn-front-door-open"),Kr=document.getElementById("slide-door-group"),Zu=document.getElementById("front-door-group"),Ku=document.getElementById("door-control-title"),of=[tf,nf,sf,ha,ua].filter(Boolean),Cl=document.getElementById("reinforce-tip"),Al=document.getElementById("reinforce-text"),ju=document.getElementById("current-spec-summary");document.getElementById("cost-hud-card");const to=document.getElementById("cost-hud-result"),Bi=document.getElementById("hud-cost-total"),Oi=document.getElementById("hud-weight-total"),Hn=document.getElementById("btn-calc-estimate"),Ec=document.querySelectorAll(".preset-btn:not(#btn-auto-rotate)"),Cc=document.getElementById("btn-auto-rotate"),rx=document.getElementById("btn-reset-specs"),Pl=document.getElementById("panel-config-toggle-btn"),Ju=document.getElementById("panel-config-container"),Rl=document.getElementById("options-toggle-btn"),Qu=document.getElementById("options-container"),go=document.getElementById("select-panel-floor"),ya=document.getElementById("select-panel-back"),ba=document.getElementById("select-panel-side"),Sa=document.getElementById("select-panel-side-upper"),Ta=document.getElementById("select-panel-side-lower"),_o=document.getElementById("select-panel-top"),vo=document.getElementById("select-panel-top-left"),xo=document.getElementById("select-panel-top-right"),Mo=document.getElementById("select-panel-partition"),wa=document.getElementById("row-panel-side"),Ea=document.getElementById("row-panel-side-split"),Ca=document.getElementById("row-panel-top"),Aa=document.getElementById("row-panel-top-split"),Pn=document.getElementById("row-panel-partition"),vn=document.getElementById("toggle-room-divider"),an=document.getElementById("card-room-divider"),zi=document.getElementById("room-divider-sub"),no=document.getElementById("perch-sub"),Ys=document.getElementById("card-led-option"),yo=document.getElementById("select-led-type"),qs=document.getElementById("led-controller-panel"),Ko=document.getElementById("btn-led-power-on"),jo=document.getElementById("btn-led-power-off"),bn=document.getElementById("led-row-usb-modes"),Sn=document.getElementById("led-row-rgb-palette"),Xn=document.getElementById("btn-toggle-darkroom"),m={W:750,D:450,H:300,cageType:"A",frameColor:"silver",footType:"rubber",hasFloorReinforcement:!1,floorSplitCount:2,hasBackReinforcement:!1,backSplitCount:2,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasPerch:!1,hasRubberPacking:!1,hasFloorHeaterSupport:!1,hasRoomDivider:!1,ledType:"none",ledPower:!0,ledBrightness:1,ledColorMode:"all",ledRgbColor:"#ffffff",frontWideFrame:"2x",doorHingeSide:"left",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,showPanels:!0,showDimensions:!0,doorState:"closed",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"}};let ii="2x",$c=!1;const tt=new kv(tx);window.viewer=tt;const rf=750*450;function ax(n,e,t,i){const s=Math.min(n,e)/10,o=t/10,r=s/Math.sqrt(o),a=i==="caster"?4.2:3.8,c=r<a;return{ratio:r,threshold:a,isProneToToppling:c,footType:i}}function We(){tt.update(m),tt.setPanelsVisible(m.showPanels),tt.setDimensionsVisible(m.showDimensions),$c&&(tt._lastAutoParams={...m});const n=m.W*m.D;n>rf&&!m.hasFloorReinforcement?(El.classList.remove("hidden"),Cl.classList.remove("reinforced"),Al.textContent=`床面積: ${(n/1e4).toFixed(0)}c㎡ (> 750×450mm) 床面補強なし：アクリルたわみ防止のため床面中央補強フレーム (2分割) を推奨します`):m.hasFloorReinforcement?(El.classList.add("hidden"),Cl.classList.add("reinforced"),Al.textContent=`床面補強フレーム（${m.floorSplitCount}分割）が配置されています`):(El.classList.add("hidden"),Cl.classList.remove("reinforced"),Al.textContent=`床面積: ${(n/1e4).toFixed(0)}c㎡ (≦ 750×450mm) 床面補強フレームなし（標準枠）`);const t=ax(m.W,m.D,m.H,m.footType);if(t.isProneToToppling){qu.classList.remove("hidden");const i=m.footType==="caster"?"キャスター装備（車輪向きによる支点変化を考慮した安全目安: 4.2）":"安全目安: 3.8";ox.innerHTML=`<strong>転倒注意：</strong>耐震安定値 <span class="metric-tag">${t.ratio.toFixed(2)}</span> ＜ 基準 ${t.threshold}（${i}）。地震等で転倒しやすいため、壁固定等の転倒防止対策を推奨します`}else qu.classList.add("hidden");mx(),Ua(),lr(),cx(),lx(),px(),lf()}function lx(){m.hasSideReinforcement?(wa.classList.add("hidden"),Ea.classList.remove("hidden")):(wa.classList.remove("hidden"),Ea.classList.add("hidden"));const n=m.hasTopReinforcement||m.W>940;n?(Ca.classList.add("hidden"),Aa.classList.remove("hidden")):(Ca.classList.remove("hidden"),Aa.classList.add("hidden")),go&&(go.value=m.panelConfig.floor||"acrylic"),ya.value=m.panelConfig.back,ba.value=m.panelConfig.side,Sa.value=m.panelConfig.sideUpper,Ta.value=m.panelConfig.sideLower,_o.value=m.panelConfig.top,vo.value=m.panelConfig.topLeft,xo.value=m.panelConfig.topRight;const e=document.getElementById("panel-summary-badge");if(e){let t="パンチング";const i=n?m.panelConfig.topLeft:m.panelConfig.top;i.startsWith("mesh")?t=`金網${i.replace("mesh","")}mm`:i==="acrylic"&&(t="アクリル天面");let s="背面アクリル";m.panelConfig.back==="punching"?s="背面パンチング":m.panelConfig.back==="polyca"?s="背面中空ポリカ":m.panelConfig.back==="black_matte"?s="背面ブラックマット":m.panelConfig.back==="smoke_gray"&&(s="背面グレースモーク"),e.textContent=`${s} / ${t}`}}function lr(){const n=m.hasSideReinforcement&&m.panelConfig.sideUpper==="punching",e=!m.hasSideReinforcement&&m.panelConfig.side==="punching";n||e?(Zn.disabled=!1,Rn.classList.remove("disabled"),Bo.classList.add("ready"),Bo.textContent="選択可能",e?Yr.textContent="冬場の保温・換気調整用。左右上下4枚外張り":Yr.textContent="冬場の保温・換気調整用。左右外張り"):(Zn.checked=!1,m.hasSideVentCover=!1,Zn.disabled=!0,Rn.classList.add("disabled"),Rn.classList.remove("active"),Bo.classList.remove("ready"),m.hasSideReinforcement?(Bo.textContent="要上部パンチング",Yr.textContent="※側面上部が塩ビパンチングパネル時に選択できます"):(Bo.textContent="要側面パンチング",Yr.textContent="※側面パネルが塩ビパンチング時に選択できます"))}function Ua(){if(m.cageType==="C"||m.cageType==="C_FRAMED"||m.cageType==="A_FRAMED")fi.checked=!1,fi.disabled=!0,kn.classList.remove("active"),kn.classList.add("disabled"),qr.textContent=m.cageType==="A_FRAMED"||m.cageType==="C_FRAMED"?"※正面枠囲いは専用枠固定のため選択不可":"※Type Cは前窓構造のため選択不可（Type A専用）",pi.checked=!1,pi.disabled=!0,Gn.classList.remove("active"),Gn.classList.add("disabled"),Zr.textContent=m.cageType==="A_FRAMED"||m.cageType==="C_FRAMED"?"※正面枠囲いは専用枠固定のため選択不可":"※Type Cは前窓構造のため選択不可（Type A専用）";else{const e=m.frameColor==="black"?"高さ60mm(ブラック: 40mm+20mm 2段重ね)使用。深床材・高剛性仕様":"高さ60mmフレーム使用。深床材・高剛性仕様";m.frontWideFrame==="2x"?(fi.checked=!0,fi.disabled=!1,kn.classList.add("active"),kn.classList.remove("disabled"),qr.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",pi.checked=!1,pi.disabled=!0,Gn.classList.remove("active"),Gn.classList.add("disabled"),Zr.textContent="※2倍幅がONのため選択不可（2倍幅を外すと選択可能）"):m.frontWideFrame==="3x"?(fi.checked=!1,fi.disabled=!0,kn.classList.remove("active"),kn.classList.add("disabled"),qr.textContent="※3倍幅がONのため選択不可（3倍幅を外すと選択可能）",pi.checked=!0,pi.disabled=!1,Gn.classList.add("active"),Gn.classList.remove("disabled"),Zr.textContent=e):(fi.checked=!1,fi.disabled=!1,kn.classList.remove("active"),kn.classList.remove("disabled"),qr.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",pi.checked=!1,pi.disabled=!1,Gn.classList.remove("active"),Gn.classList.remove("disabled"),Zr.textContent=e)}}function cx(){const n=m.panelConfig.back==="polyca";let e=!1;m.hasSideReinforcement?e=m.panelConfig.sideLower==="polyca"&&m.panelConfig.sideUpper==="polyca":e=m.panelConfig.side==="polyca",n&&e?(ni.checked=!1,m.hasRubberPacking=!1,ni.disabled=!0,Wn.classList.add("disabled"),Wn.classList.remove("active"),Ni.textContent="中空ポリカのみ時は施工不可",Ni.className="option-cond-badge",Ni.classList.remove("hidden"),Yu.textContent="※中空ポリカ仕様には施工できません（アクリル等の面がある場合に選択可）"):(ni.disabled=!1,Wn.classList.remove("disabled"),m.hasRubberPacking?(Wn.classList.add("active"),ni.checked=!0):(Wn.classList.remove("active"),ni.checked=!1),n||(m.hasSideReinforcement?m.panelConfig.sideLower==="polyca"||m.panelConfig.sideUpper==="polyca":m.panelConfig.side==="polyca")?(Ni.textContent="中空ポリカ除く面に施工",Ni.className="option-cond-badge info",Ni.classList.remove("hidden"),Yu.textContent="側面・背面からの水漏れの抑制（中空ポリカ面を除くアクリル面に施工）"):(Ni.textContent="",Ni.classList.add("hidden"))),cs&&sx&&(m.hasFloorReinforcement?(cs.textContent=m.floorSplitCount===3?"床面3分割用 (3枚)":"床面2分割用 (2枚)",cs.className="option-cond-badge info",cs.classList.remove("hidden")):(cs.textContent="通常床面用 (1枚)",cs.className="option-cond-badge",cs.classList.remove("hidden")))}function cr(n){if(!n)return null;if($e.panels&&$e.panels[n])return $e.panels[n];if($e.frames&&$e.frames[n])return $e.frames[n];if($e.rails&&$e.rails[n])return $e.rails[n];if($e.caps&&$e.caps[n])return $e.caps[n];if($e.packings&&$e.packings[n])return $e.packings[n];if($e.hardware&&$e.hardware[n])return $e.hardware[n];for(const e of[$e.panels,$e.frames,$e.rails,$e.caps,$e.packings,$e.hardware])if(e){for(const[t,i]of Object.entries(e))if(n===t||n.startsWith(t)||t.startsWith(n)||i.name&&(i.name===n||n.includes(i.name)||i.name.includes(n)))return i}return null}function ed(n){const e=n.name||"";return e.includes("前窓")?2:e.includes("扉")?1:e.includes("底板")||e.includes("床面")&&!e.includes("支え板")&&!e.includes("プラダン")?3:e.includes("側板")||e.includes("側面")?e.includes("換気量調整板")?7:4:e.includes("背板")||e.includes("背面")?5:e.includes("天板")||e.includes("天面")||e.includes("金網")?6:e.includes("換気量調整板")?7:e.includes("床下パネルヒータ支え板")?8:e.includes("プラダン")?9:10}function td(n){const e=n.partCode||n.name||"";return e.startsWith("ECP")||e.includes("キャップ")?3:e.startsWith("PGRU")||e.startsWith("PGRL")||e.includes("レール")?2:1}function af(n){var a,c,l,h,d,f,p,_;const e=cr(n.panelCode||n.partCode||n.name);let t=n.widthMm,i=n.heightMm;if((!t||!i)&&n.size){const v=n.size.match(/(\d+(?:\.\d+)?)\s*[x×]\s*(\d+(?:\.\d+)?)/);v&&(t=parseFloat(v[1]),i=parseFloat(v[2]))}let s=0,o=0,r=0;if(e&&e.unit==="m2"&&t&&i){const v=t/1e3*(i/1e3),g=n.panelCode&&n.panelCode.startsWith("wire_mesh_")||n.partCode&&n.partCode.startsWith("wire_mesh_")||e.pitchMm!=null,u=n.panelCode==="pvc_punching_3_0"||n.partCode==="pvc_punching_3_0"||n.name&&n.name.includes("塩ビパンチング"),w=n.panelCode&&n.panelCode.startsWith("acrylic_extrusion_")||n.partCode&&n.partCode.startsWith("acrylic_extrusion_")||n.panelCode==="acrylic_extrusion_3_0"||n.panelCode==="acrylic_extrusion_2_0"||n.panelCode==="acrylic_extrusion_1_5",y=n.panelCode==="acrylic_black_matte_3_0"||n.partCode==="acrylic_black_matte_3_0"||n.name&&n.name.includes("黒両面マット"),M=n.panelCode==="acrylic_smoke_gray_3_0"||n.partCode==="acrylic_smoke_gray_3_0"||n.name&&n.name.includes("グレースモーク"),I=n.panelCode==="acrylic_cast_3_0"||n.partCode==="acrylic_cast_3_0"||n.name&&n.name.includes("キャスト");if(g){const R=e.pitchMm||(n.panelCode?parseInt(n.panelCode.replace("wire_mesh_",""),10):25),C=Xv(R,t,i);s=C??Math.round(e.pricePerM2*v)}else if(u){const R=$v(t,i);s=R??Math.round(e.pricePerM2*v)}else if(w){const R=e.thicknessMm||3,C=Yv(R,t,i);s=C??Math.round(e.pricePerM2*v)}else if(y){const R=qv(t,i);s=R??Math.round(e.pricePerM2*v)}else if(M){const R=Zv(t,i);s=R??Math.round(e.pricePerM2*v)}else if(I)if(n.name&&n.name.includes("扉")){const C=Jv(t,i),L=Kd(t,i);s=C??Math.round(e.pricePerM2*v)+L}else{const C=jd(t,i);s=C??Math.round(e.pricePerM2*v)}else s=Math.round(e.pricePerM2*v);if(n.name&&n.name.includes("換気量調整板")){const R=(l=(c=(a=$e.options)==null?void 0:a.items)==null?void 0:c.sideVentCover)==null?void 0:l.holeCostPerPiece,C=(f=(d=(h=$e.options)==null?void 0:h.items)==null?void 0:d.sideVentCover)==null?void 0:f.holesPerPanel;s+=C*R}if(n.name&&n.name.includes("床下パネルヒータ支え板")){const R=((_=(p=$e.options)==null?void 0:p.items)==null?void 0:_.floorHeaterSupport)||{},C=R.holeCostPerPiece??112,L=R.diagonalCutCost??239,S=R.cornerCutCost??587;if(n.count===2||n.note&&n.note.includes("2枚")){const T=7*C+2*L+1*S;s+=T}else{const T=10*C+4*L;s+=T}}e.baseCostPerPiece&&(s+=e.baseCostPerPiece),o=s*n.count,e.baseCost&&(o+=e.baseCost),r=(e.weightPerM2||0)*v*n.count}return{singleCost:s,totalCost:o,totalWeight:r}}function hx(n){var r,a,c;const e=n.partCode||n.name||"",t=cr(e);let i=0,s=0,o=0;if(t)if(t.unit==="m"){const h=(n.lengthMm||0)/1e3;i=Math.round(t.pricePerMeter*h),s=i*n.count,o=(t.weightPerMeter||0)*h*n.count}else i=t.pricePerPiece||0,s=i*n.count,o=(t.weightPerPiece||0)*n.count;else{const l=n.name||"";l.includes("化粧つまみネジ")||l.includes("No.1")?(i=(c=(a=(r=$e.options)==null?void 0:r.items)==null?void 0:a.floorHeaterSupport)==null?void 0:c.screwCostPerPiece,s=i*n.count,o=.0025*n.count):l.includes("ゴムグロメット")?(i=80,s=i*n.count,o=.005*n.count):l.includes("ローレットノブ")||l.includes("つまみ")&&l.includes("ノブ")?(i=350,s=i*n.count,o=.012*n.count):l.includes("鍵")||l.includes("C-108")?(i=800,s=i*n.count,o=.045*n.count):l.includes("キャスター")?(i=200,s=i*n.count,o=.12*n.count):l.includes("ゴム脚")?(i=60,s=i*n.count,o=.008*n.count):l.includes("M3")&&l.includes("つまみネジ")?(i=25,s=i*n.count,o=.002*n.count):l.includes("M6")&&l.includes("ボルト")?(i=30,s=i*n.count,o=.008*n.count):l.includes("M4")&&l.includes("皿ネジ")?(i=15,s=i*n.count,o=.003*n.count):l.includes("LED")&&(l.includes("USB")||l.includes("白＆電球色")?(i=1980,o=.12):(i=5490,o=.35),s=i*n.count)}return{singleCost:i,totalCost:s,totalWeight:o}}async function nd(n){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(n);else{const e=document.createElement("textarea");e.value=n,e.style.position="fixed",e.style.left="-9999px",e.style.top="0",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy")}finally{e.remove()}}}function ux(n){if(!n||n.length===0)return"";const e=[],t=[];for(const l of n){const h=l.partCode||l.name||"";h.startsWith("PGRU")||h.startsWith("PGRL")||l.name&&l.name.includes("レール")?t.push(l):e.push(l)}const i=[],s=[];for(const l of e){const h=l.partCode||l.name||"";h.startsWith("ECP")||h.includes("キャップ")||l.lengthMm==null||l.lengthMm===0?s.push(l):i.push(l)}i.sort((l,h)=>{const d=l.lengthMm||0,f=h.lengthMm||0;return f!==d?f-d:(l.partCode||l.name).localeCompare(h.partCode||h.name)}),s.sort((l,h)=>(l.partCode||l.name).localeCompare(h.partCode||h.name));const o=[...i,...s],r=[];let a=0;for(const l of o){const h=cr(l.partCode);let d=0,f=0;if(h)if(h.unit==="m"){const g=(l.lengthMm||0)/1e3;d=Math.round(h.pricePerMeter*g),f=d*l.count}else d=h.pricePerPiece||0,f=d*l.count;a+=f;let p=l.partCode||l.name;const _=l.lengthMm!=null&&l.lengthMm>0?Math.round(l.lengthMm):null;_!=null&&(p.endsWith(`-${_}`)||(p=`${p}-${_}`)),r.push(`${p}	${l.count}`)}r.push(`${a.toLocaleString()}円`),t.sort((l,h)=>{const d=(l.partCode||l.name||"").startsWith("PGRU"),f=(h.partCode||h.name||"").startsWith("PGRU");if(d&&!f)return-1;if(!d&&f)return 1;const p=l.lengthMm||0;return(h.lengthMm||0)-p});const c=[];for(const l of t){const h=l.partCode||l.name,d=l.lengthMm!=null?Math.round(l.lengthMm):0;c.push(`${h} ${d}mm x${l.count}`)}return c.length>0?`${r.join(`
`)}

${c.join(`
`)}`:r.join(`
`)}function lf(){if(!zo||!aa)return;const n=tt.getPartsSummary(),e=[],t=[],i=[];for(const u of n)u.partCode==="NSCP1H-S-6"||u.name&&u.name.includes("ゴムパッキン")?i.push(u):u.category==="panel"?t.push(u):u.category==="frame"||u.category==="rail_cap"||u.category==="hardware"?e.push(u):i.push(u);const s=new Map;for(const u of e){const w=u.partCode||u.name,y=u.lengthMm!=null?Math.round(u.lengthMm):null,M=`${w}__${y??"none"}`;if(s.has(M)){const I=s.get(M);I.count+=u.count}else s.set(M,{...u,partCode:w,lengthMm:y,count:u.count})}const o=Array.from(s.values());ef=o,o.sort((u,w)=>{const y=td(u),M=td(w);return y!==M?y-M:(u.partCode||u.name).localeCompare(w.partCode||w.name)}),aa.innerHTML="",Ho&&(Ho.innerHTML="");let r=0,a=0,c=0;for(const u of o){c+=u.count;const w=cr(u.partCode);let y=0,M=0,I=0,R="-";if(w)if(w.unit==="m"){const L=u.lengthMm||0,T=(u.partCode&&(u.partCode.startsWith("PGRU")||u.partCode.startsWith("PGRL"))?Math.ceil(L/250)*250:L)/1e3;R=`${u.lengthMm||Math.round(T*1e3)} mm`,y=Math.round(w.pricePerMeter*T),M=y*u.count,I=w.weightPerMeter*(L/1e3)*u.count}else R="-",y=w.pricePerPiece||0,M=y*u.count,I=(w.weightPerPiece||0)*u.count;else R=u.size||"-";r+=M,a+=I;const C=document.createElement("tr");C.className="bom-cat-frame",C.innerHTML=`
      <td><strong>${u.partCode||u.name}</strong></td>
      <td style="text-align: right; font-family: monospace;">${R}</td>
      <td style="text-align: center; font-family: monospace;">${u.count}</td>
      <td style="text-align: right; font-family: monospace;">¥${M.toLocaleString()}</td>
      <td style="text-align: right; font-family: monospace;">${I.toFixed(3)} kg</td>
    `,aa.appendChild(C)}if(Ho){const u=document.createElement("tr");u.innerHTML=`
      <td><strong>フレーム等 合計</strong></td>
      <td style="text-align: center;">-</td>
      <td style="text-align: center; font-family: monospace;"><strong>${c}点</strong></td>
      <td style="text-align: right; font-family: monospace;"><strong>¥${r.toLocaleString()}</strong></td>
      <td style="text-align: right; font-family: monospace;"><strong>${a.toFixed(3)} kg</strong></td>
    `,Ho.appendChild(u)}t.sort((u,w)=>{const y=ed(u),M=ed(w);return y-M}),[...t];let l=0,h=0,d=0;if(la){la.innerHTML="",Wo&&(Wo.innerHTML="");for(const u of t){d+=u.count;const{totalCost:w,totalWeight:y}=af(u);l+=w,h+=y;const M=u.note&&u.note.includes("枠囲い")||u.name&&u.name.includes("枠囲い"),R=u.name&&(u.name.includes("扉")&&!M||u.name.includes("換気量調整板")||u.name.includes("ヒンジ座板")||u.name.includes("ロック受座板")||u.name.includes("床下パネルヒータ支え板")&&!u.name.includes("プラダン"))?'<span style="display: inline-block; background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.45); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; margin-right: 4px; font-weight: bold;">★加工あり</span>':'<span style="display: inline-block; background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; margin-right: 4px;">切断のみ</span>',C=document.createElement("tr");C.className="bom-cat-panel",C.innerHTML=`
        <td><strong>${u.name}</strong></td>
        <td>${u.size||"-"}</td>
        <td style="text-align: center; font-family: monospace;">${u.count}</td>
        <td style="text-align: right; font-family: monospace;">¥${w.toLocaleString()}</td>
        <td style="text-align: right; font-family: monospace;">${y.toFixed(3)} kg</td>
        <td>${R}${u.note||"-"}</td>
      `,la.appendChild(C)}if(Wo){const u=document.createElement("tr");u.innerHTML=`
        <td><strong>パネル 合計</strong></td>
        <td style="text-align: center;">-</td>
        <td style="text-align: center; font-family: monospace;"><strong>${d}点</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>¥${l.toLocaleString()}</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>${h.toFixed(3)} kg</strong></td>
        <td>-</td>
      `,Wo.appendChild(u)}}let f=0,p=0,_=0;if(ca){ca.innerHTML="",Vo&&(Vo.innerHTML="");for(const u of i){_+=u.count;const{totalCost:w,totalWeight:y}=hx(u);f+=w,p+=y;const M=document.createElement("tr");M.className=`bom-cat-${u.category||"other"}`,M.innerHTML=`
        <td><strong>${u.name}</strong></td>
        <td>${u.size||"-"}</td>
        <td style="text-align: center; font-family: monospace;">${u.count}</td>
        <td style="text-align: right; font-family: monospace;">¥${w.toLocaleString()}</td>
        <td style="text-align: right; font-family: monospace;">${y.toFixed(3)} kg</td>
        <td>${u.note||"-"}</td>
      `,ca.appendChild(M)}if(Vo){const u=document.createElement("tr");u.innerHTML=`
        <td><strong>その他部材 合計</strong></td>
        <td style="text-align: center;">-</td>
        <td style="text-align: center; font-family: monospace;"><strong>${_}点</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>¥${f.toLocaleString()}</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>${p.toFixed(3)} kg</strong></td>
        <td>-</td>
      `,Vo.appendChild(u)}}const v=document.getElementById("bom-hazaiya-preview-body"),g=document.getElementById("hazaiya-parts-badge");if(v){const u=Jd(n,m),w=u.reduce((M,I)=>M+(I.quantity||1),0),y=u.filter(M=>M.needsMachining).length;if(g&&(g.textContent=`${u.length}品目 (${w}枚 / 加工あり${y}点)`),u.length===0)v.innerHTML='<p style="color: #94a3b8; font-style: italic; margin: 4px 0;">※対象のパネル部材はありません。</p>';else{let M="";u.forEach((I,R)=>{const C=I.needsMachining,L=C?"rgba(245, 158, 11, 0.35)":"rgba(56, 189, 248, 0.25)",S=C?'<span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.45); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; font-weight: bold;">★加工あり</span>':'<span style="background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem;">切断のみ</span>';M+=`
          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid ${L}; border-radius: 4px; padding: 6px 10px; margin-bottom: 6px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; flex-wrap: wrap; gap: 4px;">
              <div style="display: flex; align-items: center; gap: 6px;">
                <strong style="color: ${C?"#fbbf24":"#e2e8f0"};">[${R+1}/${u.length}] ${I.title}</strong>
                ${S}
              </div>
              <span style="font-family: monospace; font-size: 0.7rem; color: #38bdf8;">${I.widthMm} x ${I.heightMm} mm (t${I.thicknessMm}mm) × ${I.quantity}枚</span>
            </div>
            <div style="font-size: 0.68rem; color: #94a3b8; margin-bottom: 3px;">
              素材: <span style="color: #cbd5e1;">${I.materialName}</span> | 仕上げ: <span style="color: #cbd5e1;">${I.edgeFinishing}</span>
            </div>
        `,C&&(I.corners&&I.corners.length>0&&(M+='<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・コーナー: '+I.corners.map(x=>`<span style="color: #fca5a5;">${x.desc}(${x.spec})</span>`).join(", ")+"</div>"),I.notches&&I.notches.length>0&&(M+='<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・切欠き: '+I.notches.map(x=>`<span style="color: #fca5a5;">${x.desc}(${x.spec})</span>`).join(", ")+"</div>"),I.holes&&I.holes.length>0&&(M+='<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・穴あけ: '+I.holes.map((x,T)=>`<span style="color: #93c5fd;">(${T+1}) ${x.desc} [${x.base} ➜ φ${x.diameterMm}mm]</span>`).join("<br>&nbsp;&nbsp;")+"</div>")),M+="</div>"}),v.innerHTML=M}}Tc&&(Tc.textContent=`${n.length}品目 / フレーム計${c}点 / パネル計${d}点 / その他計${_}点`)}function dx(){try{return}catch(n){console.warn("[Debug] setupDebugBOMIfRequested エラー:",n)}}let nr=!1;function fx(){var me,k,Q,$,ae,oe,E,b,B,G,Y,K,_e,pe,ye;const n=tt.getPartsSummary();let e=0,t=0,i=0,s=0;for(const Ce of n)if(Ce.category==="frame"||Ce.category==="rail_cap"||Ce.category==="hardware"||Ce.category==="other"){const le=cr(Ce.partCode||Ce.name);if(le)if(le.unit==="m"){const be=Ce.lengthMm||0,we=(Ce.partCode&&(Ce.partCode.startsWith("PGRU")||Ce.partCode.startsWith("PGRL"))?Math.ceil(be/250)*250:be)/1e3,He=Math.round(le.pricePerMeter*we);e+=He*Ce.count,t+=le.weightPerMeter*(be/1e3)*Ce.count}else e+=(le.pricePerPiece||0)*Ce.count,t+=(le.weightPerPiece||0)*Ce.count}else if(Ce.category==="panel"){const{totalCost:le,totalWeight:be}=af(Ce);i+=le,s+=be}const o=$e.options||{},r=o.labor||{},a=o.items||{},c=!!m.hasFloorReinforcement,l=!!(m.hasTopReinforcement||m.W>940),h=m.cageType==="C"||m.cageType==="C_FRAMED",d=!!m.hasSideReinforcement,f=m.cageType==="A"&&m.frontWideFrame==="3x",p=m.footType==="caster",_=!!m.hasSideVentCover,v=!!m.hasPerch,g=!!m.hasRubberPacking,u=!!m.hasRoomDivider,w=m.cageType==="A_FRONT",y=m.cageType==="A_FRAMED"||m.cageType==="C_FRAMED",M=!!m.hasFloorHeaterSupport,I=c?((me=r.splitFloor)==null?void 0:me.price)??500:0,R=l?((k=r.splitTop)==null?void 0:k.price)??500:0,C=h?((Q=r.typeC)==null?void 0:Q.price)??500:0,L=d?(($=r.splitSide)==null?void 0:$.price)??1e3:0,S=f?((ae=r.frontWide3x)==null?void 0:ae.price)??500:0,x=v?((oe=r.perch)==null?void 0:oe.price)??1e3:0,T=g?((E=r.rubberPacking)==null?void 0:E.price)??800:0,O=u?((b=r.roomDivider)==null?void 0:b.price)??500:0,F=w?((B=r.frontOpenDoor)==null?void 0:B.price)??3e3:0,U=y?((G=r.frontFramedDoor)==null?void 0:G.price)??5e3:0,N=M?((Y=r.floorHeaterSupport)==null?void 0:Y.price)??1e3:0,z=I+R+C+L+S+x+T+O+F+U+N,j=p?((K=a.caster)==null?void 0:K.price)??1500:0,W=p?((_e=a.caster)==null?void 0:_e.cost)??800:0,ie=_?((pe=a.sideVentCover)==null?void 0:pe.price)??500:0,J=_?((ye=a.sideVentCover)==null?void 0:ye.cost)??200:0,ee=_?J:0;let ge=0,ve=0,q=0;if(m.ledType&&m.ledType!=="none"){const le={usb:a.ledUsb,rgbw:a.ledRgbw}[m.ledType];le&&(ge=le.price||0,ve=le.cost||0,q=le.weight||.15)}const se=j+ie+ge,xe=W+ee+ve,ue=$e.pricing||{},fe=typeof ue.markupRate=="number"?ue.markupRate:1.3,Se=typeof ue.roundingUnit=="number"?ue.roundingUnit:100,Me=e+i,Fe=Math.ceil(Me*fe/Se)*Se,ce=Me+xe,he=Fe+se+z,D=t+s+q;return{rawCost:ce,priceWithMarkup:he,weight:D}}let Wi=null;function px(){if(Wi&&(Wi.aborted=!0,Wi=null,Hn)){Hn.classList.remove("is-calculating");const n=Hn.querySelector(".calc-btn-title");n&&(n.textContent="見積もりと重量計算（β版）")}(nr||to&&!to.classList.contains("hidden"))&&(nr=!1,to&&to.classList.add("hidden"))}async function ir(){Wi&&(Wi.aborted=!0);const n={aborted:!1};if(Wi=n,to&&to.classList.remove("hidden"),Bi&&(Bi.classList.remove("value-appear"),Bi.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>部材積算中...</span>
      </span>
    `),Oi&&(Oi.classList.remove("value-appear"),Oi.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>重量計算中...</span>
      </span>
    `),Hn){Hn.classList.add("is-calculating");const r=Hn.querySelector(".calc-btn-title");r&&(r.textContent="部材積算・構造検証中...")}const e=5e3,t=Math.floor(Math.random()*5001),i=e+t,s=100,o=Math.floor(i/s);try{for(let a=0;a<o;a++)if(await new Promise(c=>setTimeout(c,s)),n.aborted)return;const r=fx();Bi&&(Bi.textContent=`¥${r.priceWithMarkup.toLocaleString()}`,Bi.classList.add("value-appear")),Oi&&(Oi.textContent=`${r.weight.toFixed(1)} kg`,Oi.classList.add("value-appear")),nr=!0,Rx(r)}catch(r){console.error("Structural simulation error:",r),Bi&&(Bi.innerHTML='<span style="color: #ef4444; font-size: 0.82rem; font-weight: 600;">⚠️ 計算中にエラーが発生しました</span>'),Oi&&(Oi.innerHTML='<span style="color: #94a3b8; font-size: 0.85rem;">-</span>'),Ux(r)}finally{if(Wi===n&&(Wi=null,Hn)){Hn.classList.remove("is-calculating");const r=Hn.querySelector(".calc-btn-title");r&&(r.textContent="見積もりと重量計算（β版）")}}}function Dn(n=m.doorHingeSide){return n==="right"?"左打掛、右ヒンジ":"左ヒンジ、右打掛"}function Na(n=!1){if(m.cageType==="A_FRAMED")return n?"Type A 正面枠囲い（高剛性アルミ枠スライド扉仕様）":"Type A 正面枠囲い";if(m.cageType==="C_FRAMED")return n?"Type C 正面枠囲い（下部前窓＋高剛性アルミ枠スライド扉仕様）":"Type C 正面枠囲い";if(m.cageType==="A_FRONT"){const e=Dn();return n?`Type A 前開き (${e})`:`Type A 前開き (${e})`}else if(m.cageType==="C")return n?"Type C（下部前窓＋扉仕様）":"Type C（前窓＋扉）";return n?"Type A（全面スライド扉仕様）":"Type A（全面スライド扉）"}function mx(){if(!ju)return;const n=Na(!1),e=`W${m.W} × D${m.D} × H${m.H} mm`,t=[];if(m.cageType==="A"){const i=m.frontWideFrame==="3x"?"正面3倍幅":m.frontWideFrame==="2x"?"正面2倍幅":"正面標準幅";t.push(i)}if(t.push(m.hasFloorReinforcement?"床補強: あり":"床補強: なし"),(m.hasTopReinforcement||m.W>940)&&t.push("天板補強: あり"),m.hasSideReinforcement&&t.push(`側面補強(上部開口): ${m.sideOpeningH}mm`),m.hasDoorAntiFlex&&t.push("扉たわみ防止"),m.hasSideVentCover&&t.push("換気調整板"),m.hasPerch&&t.push("止まり木"),m.hasRoomDivider&&t.push("２室分け"),m.ledType&&m.ledType!=="none"){const i={usb:"LED: USB式",rgbw:"LED: RGB+W"};t.push(i[m.ledType]||"LED照明")}t.push(m.footType==="caster"?"キャスター":"ゴム脚"),ju.innerHTML=`
    <div class="spec-line-primary">${n} | ${e}</div>
    <div class="spec-line-sub">${t.join(" / ")}</div>
  `}function Ba(n,e,t,i){n.addEventListener("input",s=>{const o=parseInt(s.target.value,10);e.value=o,m[t]=o,i&&i(o),We()}),e.addEventListener("change",s=>{let o=parseInt(s.target.value,10);const r=parseInt(n.min,10),a=parseInt(n.max,10),c=parseInt(n.step,10)||10;isNaN(o)&&(o=r),o=Math.round(o/c)*c,o=Math.max(r,Math.min(a,o)),e.value=o,n.value=o,m[t]=o,i&&i(o),We()})}function bs(){if(m.W>940)gn.checked=!0,gn.disabled=!0,Jt.classList.remove("disabled"),Jt.classList.add("required-locked"),wc.textContent="幅940mm超のため必須（解除不可）",m.hasFloorReinforcement=!0;else{gn.disabled=!1,Jt.classList.remove("disabled","required-locked"),wc.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください";const n=m.W*m.D>rf;m.hasFloorReinforcement=n,gn.checked=n}Lt&&(Lt.disabled=!m.hasFloorReinforcement),Jt&&Jt.classList.toggle("active",m.hasFloorReinforcement)}function Oa(){Wt&&(m.W>940?(Wt.checked=!0,Wt.disabled=!0,Ot&&(Ot.classList.remove("disabled"),Ot.classList.add("required-locked")),eo&&(eo.textContent="幅940mm超のため必須（解除不可）"),m.hasBackReinforcement=!0):(Wt.disabled&&(Wt.checked=!1,m.hasBackReinforcement=!1),Wt.disabled=!1,Ot&&Ot.classList.remove("disabled","required-locked"),eo&&(eo.textContent="940mm以下は任意指定（W>940mmは必須）")),Dt&&(Dt.disabled=!m.hasBackReinforcement),Ot&&Ot.classList.toggle("active",m.hasBackReinforcement))}Ba(un,dn,"W",n=>{bs(),Oa(),n>940?(kt.checked=!0,kt.disabled=!0,yt&&(yt.classList.remove("disabled"),yt.classList.add("required-locked")),_i.textContent="幅940mm超のため必須（解除不可）",m.hasTopReinforcement=!0):(kt.disabled=!1,yt&&yt.classList.remove("disabled","required-locked"),_i.textContent="940mm以下は任意指定（W>940mmは必須）",kt.checked=!1,m.hasTopReinforcement=!1),yt&&yt.classList.toggle("active",m.hasTopReinforcement)});Ba(qi,Zi,"D",()=>{bs()});Ba(fn,pn,"H",n=>{const e=Math.max(30,n-120);Ki.max=e,ji.max=e,m.frontWindowH>e&&(m.frontWindowH=e,Ki.value=e,ji.value=e);const t=50,i=Math.max(t,n-110),s=Math.round((n-60)/20)*10;ht.min=t,ht.max=i,m.hasSideReinforcement?m.sideOpeningH>i?(m.sideOpeningH=i,ht.value=i):m.sideOpeningH<t&&(m.sideOpeningH=t,ht.value=t):(m.sideOpeningH=s,ht.value=s)});Ba(Ki,ji,"frontWindowH");ht.addEventListener("change",n=>{let e=parseInt(n.target.value,10);const t=50,i=Math.max(t,m.H-110),s=10;isNaN(e)&&(e=t),e=Math.round(e/s)*s,e=Math.max(t,Math.min(i,e)),ht.value=e,m.sideOpeningH=e,We()});mo.addEventListener("change",n=>{if(m.hasSideReinforcement=n.target.checked,m.hasSideReinforcement){Ms.classList.add("active"),ys.classList.remove("disabled");const e=50,t=Math.max(e,m.H-110);ht.min=e,ht.max=t;const i=Math.round((m.H-60)/20)*10;(m.sideOpeningH<e||m.sideOpeningH>t)&&(m.sideOpeningH=i,ht.value=i)}else Ms.classList.remove("active"),ys.classList.add("disabled");We()});gn.addEventListener("change",n=>{m.hasFloorReinforcement=n.target.checked,Lt&&(Lt.disabled=!m.hasFloorReinforcement),Jt&&Jt.classList.toggle("active",m.hasFloorReinforcement),We()});Lt&&Lt.addEventListener("change",n=>{m.floorSplitCount=parseInt(n.target.value,10),We()});Wt&&Wt.addEventListener("change",n=>{m.hasBackReinforcement=n.target.checked,Dt&&(Dt.disabled=!m.hasBackReinforcement),Ot&&Ot.classList.toggle("active",m.hasBackReinforcement),We()});Dt&&Dt.addEventListener("change",n=>{m.backSplitCount=parseInt(n.target.value,10),We()});kt.addEventListener("change",n=>{m.hasTopReinforcement=n.target.checked,yt&&yt.classList.toggle("active",m.hasTopReinforcement),We()});function gx(){if(!An||!_n)return;const n=m.cageType==="A_FRONT",e=m.cageType==="A_FRAMED"||m.cageType==="C_FRAMED",t=document.getElementById("door-anti-flex-sub");n||e?(m.hasDoorAntiFlex&&(m.hasDoorAntiFlex=!1,An.checked=!1),An.disabled=!0,_n.classList.add("disabled"),_n.classList.remove("active"),t&&(t.textContent=e?"※正面枠囲い仕様（扉なし）のため選択不可":"※前開き（横開き扉）仕様のためスライド扉用レールは選択不可")):(An.disabled=!1,_n.classList.remove("disabled"),t&&(t.textContent="強力生体向け。左右端に縦レールを追加し内側からの変形を防止"))}function Ac(){if(!vn||!an)return;const n=m.cageType==="A_FRONT",e=m.cageType==="A_FRAMED"||m.cageType==="C_FRAMED",t=m.hasPerch;n||t||e?(m.hasRoomDivider&&(m.hasRoomDivider=!1,vn.checked=!1,Pn&&Pn.classList.add("hidden")),vn.disabled=!0,an.classList.add("disabled"),an.classList.remove("active"),zi&&(e?zi.textContent="※正面枠囲い仕様では2室分け仕切り板は選択不可":n?zi.textContent="※前開き仕様では2室分け仕切り板は選択不可":zi.textContent="※止まり木オプション選択時は利用できません")):(vn.disabled=!1,an.classList.remove("disabled"),zi&&(zi.textContent="正面扉戸の隙間が7mmあります。小さい生体にはご注意ください"))}An.addEventListener("change",n=>{if(m.cageType==="A_FRONT"){n.target.checked=!1,m.hasDoorAntiFlex=!1;return}m.hasDoorAntiFlex=n.target.checked,n.target.checked?_n.classList.add("active"):_n.classList.remove("active"),We()});Zn.addEventListener("change",n=>{m.hasSideVentCover=n.target.checked,n.target.checked?Rn.classList.add("active"):Rn.classList.remove("active"),We()});Pt&&Pt.addEventListener("change",n=>{m.hasPerch=n.target.checked,n.target.checked?(Ct&&Ct.classList.add("active"),Ac(),(m.panelConfig.top!=="punching"||m.panelConfig.topLeft!=="punching"||m.panelConfig.topRight!=="punching")&&(m.panelConfig.top="punching",m.panelConfig.topLeft="punching",m.panelConfig.topRight="punching",_o&&(_o.value="punching"),vo&&(vo.value="punching"),xo&&(xo.value="punching"),Si("※天面パンチングボードの穴を利用して固定するため、天面を塩ビパンチングに変更しました。金網天板との組み合わせは直接DMにてご相談ください。",6e3))):(Ct&&Ct.classList.remove("active"),Ac()),We()});vn&&vn.addEventListener("change",n=>{m.hasRoomDivider=n.target.checked,n.target.checked?(an&&an.classList.add("active"),Pn&&Pn.classList.remove("hidden"),Pt&&(m.hasPerch&&(m.hasPerch=!1,Pt.checked=!1,Ct&&Ct.classList.remove("active")),Pt.disabled=!0),Ct&&Ct.classList.add("disabled"),no&&(no.textContent="※２室分けオプション選択時は利用できません"),(m.panelConfig.top!=="punching"||m.panelConfig.topLeft!=="punching"||m.panelConfig.topRight!=="punching")&&Si("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3)):(an&&an.classList.remove("active"),Pn&&Pn.classList.add("hidden"),Pt&&(Pt.disabled=!1),Ct&&Ct.classList.remove("disabled"),no&&(no.textContent="天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応")),We()});Mo&&Mo.addEventListener("change",n=>{m.panelConfig.partition=n.target.value,We()});fi.addEventListener("change",n=>{n.target.checked?(m.frontWideFrame="2x",ii="2x"):(m.frontWideFrame="none",ii="none"),We()});pi.addEventListener("change",n=>{n.target.checked?(m.frontWideFrame="3x",ii="3x"):(m.frontWideFrame="none",ii="none"),We()});ni.addEventListener("change",n=>{m.hasRubberPacking=n.target.checked,n.target.checked?Wn.classList.add("active"):Wn.classList.remove("active"),We()});Qi&&Qi.addEventListener("change",n=>{m.hasFloorHeaterSupport=n.target.checked,n.target.checked?wn==null||wn.classList.add("active"):wn==null||wn.classList.remove("active"),We()});xn.addEventListener("click",()=>{m.cageType="A",m.frontWideFrame=ii,xn.classList.add("active"),bt==null||bt.classList.remove("active"),St==null||St.classList.remove("active"),Ln.classList.remove("active"),Tt==null||Tt.classList.remove("active"),Kn.classList.add("hidden"),At.textContent="Type A 選択中 (全面スライド扉)",ts(),We()});bt==null||bt.addEventListener("click",()=>{m.cageType="A_FRONT",m.frontWideFrame=ii,bt.classList.add("active"),xn.classList.remove("active"),St==null||St.classList.remove("active"),Ln.classList.remove("active"),Tt==null||Tt.classList.remove("active"),Kn.classList.add("hidden"),At.textContent=`Type A 前開き 選択中 (${Dn()})`,ts(),We()});St==null||St.addEventListener("click",()=>{m.cageType="A_FRAMED",St.classList.add("active"),xn.classList.remove("active"),bt==null||bt.classList.remove("active"),Ln.classList.remove("active"),Tt==null||Tt.classList.remove("active"),Kn.classList.add("hidden"),At.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)",ts(),We()});Ln.addEventListener("click",()=>{m.cageType="C",m.frontWideFrame="none",Ln.classList.add("active"),xn.classList.remove("active"),bt==null||bt.classList.remove("active"),St==null||St.classList.remove("active"),Tt==null||Tt.classList.remove("active"),Kn.classList.remove("hidden"),At.textContent="Type C 選択中 (前窓＋扉)",ts(),We()});Tt==null||Tt.addEventListener("click",()=>{m.cageType="C_FRAMED",m.frontWideFrame="none",Tt.classList.add("active"),xn.classList.remove("active"),bt==null||bt.classList.remove("active"),St==null||St.classList.remove("active"),Ln.classList.remove("active"),Kn.classList.remove("hidden"),At.textContent="Type C 正面枠囲い 選択中 (前窓＋高剛性枠スライド扉)",ts(),We()});const _x=600,vx=700,xx=900,Mx=450,yx=300,bx=200,Sx=1800,Tx=900;function wx(){const n=m.cageType==="A_FRONT",e=m.cageType==="A_FRAMED"||m.cageType==="C_FRAMED",t=e?xx:yx,i=e?Mx:bx,s=n?_x:Sx,o=n?vx:Tx;un&&dn&&(un.min=t,dn.min=t,un.max=s,dn.max=s,m.W<t?(m.W=t,un.value=t,dn.value=t,bs()):m.W>s&&(m.W=s,un.value=s,dn.value=s,bs())),fn&&pn&&(fn.min=i,pn.min=i,fn.max=o,pn.max=o,m.H<i?(m.H=i,fn.value=i,pn.value=i):m.H>o&&(m.H=o,fn.value=o,pn.value=o))}function ts(){const n=m.cageType==="A_FRONT",e=m.cageType==="A_FRAMED"||m.cageType==="C_FRAMED",t=m.cageType==="C"||m.cageType==="C_FRAMED";wx(),gx(),Ac(),kn==null||kn.classList.toggle("hidden",e||t),Gn==null||Gn.classList.toggle("hidden",e||t),wl&&(n?(wl.classList.remove("hidden"),Mi==null||Mi.classList.toggle("active",m.doorHingeSide!=="right"),yi==null||yi.classList.toggle("active",m.doorHingeSide==="right")):wl.classList.add("hidden"));const i=Kr?Kr.closest(".control-section"):null;i&&i.classList.remove("hidden"),Kr&&Zu&&(Kr.style.display=n?"none":"grid",Zu.style.display=n?"grid":"none"),Ku&&(Ku.textContent=n?"前開き扉 開閉":"引き違いスライド扉 開閉");const s=m.doorState||"closed";of.forEach(o=>{o.classList.toggle("active",o.getAttribute("data-mode")===s)})}Mi&&Mi.addEventListener("click",()=>{m.doorHingeSide="left",Mi.classList.add("active"),yi==null||yi.classList.remove("active"),m.cageType==="A_FRONT"&&(At.textContent=`Type A 前開き 選択中 (${Dn()})`),We()});yi&&yi.addEventListener("click",()=>{m.doorHingeSide="right",yi.classList.add("active"),Mi==null||Mi.classList.remove("active"),m.cageType==="A_FRONT"&&(At.textContent=`Type A 前開き 選択中 (${Dn()})`),We()});Ti.addEventListener("click",()=>{m.frameColor="silver",Ti.classList.add("active"),wi.classList.remove("active"),We()});wi.addEventListener("click",()=>{m.frameColor="black",wi.classList.add("active"),Ti.classList.remove("active"),We()});Ji.addEventListener("change",n=>{m.footType=n.target.checked?"caster":"rubber",n.target.checked?Ei.classList.add("active"):Ei.classList.remove("active"),We()});function sr(){m.ledType&&m.ledType!=="none"?(Ys==null||Ys.classList.add("active"),qs==null||qs.classList.remove("hidden"),m.ledType==="usb"?(bn==null||bn.classList.remove("hidden"),Sn==null||Sn.classList.add("hidden")):m.ledType==="rgbw"?(bn==null||bn.classList.add("hidden"),Sn==null||Sn.classList.remove("hidden")):(bn==null||bn.classList.add("hidden"),Sn==null||Sn.classList.add("hidden"))):(Ys==null||Ys.classList.remove("active"),qs==null||qs.classList.add("hidden")),Ko&&jo&&(m.ledPower?(Ko.classList.add("active"),jo.classList.remove("active")):(Ko.classList.remove("active"),jo.classList.add("active"))),Xn&&Xn.classList.toggle("active",!!tt.isDarkroomMode)}yo&&yo.addEventListener("change",n=>{m.ledType=n.target.value,m.ledType!=="none"&&(m.ledPower=!0),tt.setDarkroomOverride(null),sr(),We(),Xn&&Xn.classList.toggle("active",!!tt.isDarkroomMode)});Ko&&jo&&(Ko.addEventListener("click",()=>{m.ledPower=!0,tt.setDarkroomOverride(null),sr(),We(),Xn&&Xn.classList.toggle("active",!!tt.isDarkroomMode)}),jo.addEventListener("click",()=>{m.ledPower=!1,tt.setDarkroomOverride(null),sr(),We(),Xn&&Xn.classList.toggle("active",!!tt.isDarkroomMode)}));bn&&bn.querySelectorAll(".btn-led-mode").forEach(n=>{n.addEventListener("click",e=>{const t=e.target.dataset.usbMode;m.ledColorMode=t,bn.querySelectorAll(".btn-led-mode").forEach(i=>i.classList.remove("active")),e.target.classList.add("active"),We()})});Sn&&Sn.querySelectorAll(".btn-color-dot").forEach(n=>{n.addEventListener("click",e=>{const t=e.target.dataset.color;m.ledRgbColor=t,Sn.querySelectorAll(".btn-color-dot").forEach(i=>i.classList.remove("active")),e.target.classList.add("active"),We()})});Xn&&Xn.addEventListener("click",()=>{const n=!tt.isDarkroomMode;tt.setDarkroomOverride(n),Xn.classList.toggle("active",n)});let jr=null;function To(n){m.doorState=n,of.forEach(t=>{t.getAttribute("data-mode")===n?t.classList.add("active"):t.classList.remove("active")});const e=document.querySelector(".door-mode-group");e.classList.add("door-animating"),jr&&clearTimeout(jr),jr=setTimeout(()=>{e.classList.remove("door-animating"),jr=null},3100),tt.setDoorState(n)}tf.addEventListener("click",()=>To("closed"));nf.addEventListener("click",()=>To("left_open"));sf.addEventListener("click",()=>To("right_open"));ha==null||ha.addEventListener("click",()=>To("closed"));ua==null||ua.addEventListener("click",()=>To("open"));function cf(n){$c=n,tt.setAutoRotate(n,m),n?(Cc.classList.add("active","rotating"),Ec.forEach(e=>e.classList.remove("active"))):Cc.classList.remove("active","rotating")}Cc.addEventListener("click",()=>{cf(!$c)});Ec.forEach(n=>{n.addEventListener("click",()=>{cf(!1),Ec.forEach(t=>t.classList.remove("active")),n.classList.add("active");const e=n.getAttribute("data-view");tt.setViewPreset(e,m)})});rx.addEventListener("click",()=>{m.W=750,m.D=450,m.H=300,m.cageType="A",m.frontWindowH=50,m.hasSideReinforcement=!1,m.sideOpeningH=120,To("closed"),un.value=750,dn.value=750,qi.value=450,Zi.value=450,fn.value=300,pn.value=300,Ki.value=50,ji.value=50,mo.checked=!1,Ms.classList.remove("active"),ys.classList.add("disabled"),ht.min=50,ht.max=190,ht.value=120,gn.checked=!1,gn.disabled=!1,Jt.classList.remove("disabled"),Jt.classList.remove("active"),wc.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください",m.hasFloorReinforcement=!1,m.floorSplitCount=2,Lt&&(Lt.value="2",Lt.disabled=!0),Wt&&(Wt.checked=!1,Wt.disabled=!1,Ot&&(Ot.classList.remove("disabled"),Ot.classList.remove("active")),eo&&(eo.textContent="940mm以下は任意指定（W>940mmは必須）"),m.hasBackReinforcement=!1,m.backSplitCount=2,Dt&&(Dt.value="2",Dt.disabled=!0)),kt.checked=!1,kt.disabled=!1,yt.classList.remove("disabled"),yt.classList.remove("active"),_i.textContent="940mm以下は任意指定（W>940mmは必須）",m.hasTopReinforcement=!1,Ji.checked=!1,Ei.classList.remove("active"),m.footType="rubber",An.checked=!1,_n.classList.remove("active"),m.hasDoorAntiFlex=!1,Zn.checked=!1,Rn.classList.remove("active"),m.hasSideVentCover=!1,Pt&&(Pt.checked=!1,Pt.disabled=!1),Ct&&Ct.classList.remove("active","disabled"),no&&(no.textContent="天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応"),m.hasPerch=!1,vn&&(vn.checked=!1,vn.disabled=!1),an&&an.classList.remove("active","disabled"),zi&&(zi.textContent="正面扉戸の隙間が7mmあります。小さい生体にはご注意ください"),Pn&&Pn.classList.add("hidden"),Mo&&(Mo.value="black_matte"),m.hasRoomDivider=!1,ni&&(ni.checked=!1),Wn&&Wn.classList.remove("active"),m.hasRubberPacking=!1,Qi&&(Qi.checked=!1),wn&&wn.classList.remove("active"),m.hasFloorHeaterSupport=!1,m.panelConfig={front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"},m.ledType="none",m.ledPower=!0,m.ledBrightness=1,m.ledColorMode="all",m.ledRgbColor="#ffffff",yo&&(yo.value="none"),tt.setDarkroomOverride(null),sr(),m.frontWideFrame="2x",ii="2x",xn.click(),tt.setViewPreset("iso",m),We()});go&&go.addEventListener("change",n=>{m.panelConfig.floor=n.target.value,We()});ya.addEventListener("change",n=>{m.panelConfig.back=n.target.value,We()});ba.addEventListener("change",n=>{m.panelConfig.side=n.target.value,We()});Sa.addEventListener("change",n=>{m.panelConfig.sideUpper=n.target.value,lr(),We()});Ta.addEventListener("change",n=>{m.panelConfig.sideLower=n.target.value,We()});_o.addEventListener("change",n=>{m.panelConfig.top=n.target.value,m.hasPerch&&n.target.value!=="punching"?Si("※止まり木は天面パンチングボードの穴を利用します。金網天板やアクリル天板との組み合わせは直接DMにてご相談ください。",5e3):m.hasRoomDivider&&n.target.value!=="punching"&&Si("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),We()});vo.addEventListener("change",n=>{m.panelConfig.topLeft=n.target.value,m.hasPerch&&n.target.value!=="punching"?Si("※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。",5e3):m.hasRoomDivider&&n.target.value!=="punching"&&Si("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),We()});xo.addEventListener("change",n=>{m.panelConfig.topRight=n.target.value,m.hasPerch&&n.target.value!=="punching"?Si("※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。",5e3):m.hasRoomDivider&&n.target.value!=="punching"&&Si("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),We()});const id=document.querySelectorAll(".sidebar-tab"),Ex=document.querySelectorAll(".tab-pane");id.forEach(n=>{n.addEventListener("click",()=>{const e=n.getAttribute("data-tab");id.forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false")}),n.classList.add("active"),n.setAttribute("aria-selected","true"),Ex.forEach(t=>{t.id===e?t.classList.add("active"):t.classList.remove("active")}),tt&&typeof tt.onResize=="function"&&setTimeout(()=>tt.onResize(),50)})});let Jr=!0;Pl&&Pl.addEventListener("click",()=>{Jr=!Jr,Pl.classList.toggle("active",Jr),Ju&&Ju.classList.toggle("hidden",!Jr)});let Qr=!0;Rl&&Rl.addEventListener("click",()=>{Qr=!Qr,Rl.classList.toggle("active",Qr),Qu&&Qu.classList.toggle("hidden",!Qr)});ht&&(ht.min=50,ht.max=Math.max(50,m.H-110),ht.value=m.sideOpeningH);We();tt.setViewPreset("iso",m);Hn&&Hn.addEventListener("click",()=>{ir()});function Cx(){!ao||!Array.isArray(xa)||(ao.innerHTML="",xa.forEach(n=>{const e=document.createElement("button");e.className="creature-card",e.dataset.presetId=n.id,e.title=`${n.name} (${n.W}×${n.D}×${n.H}mm)`;const t=Array.isArray(n.tags)&&n.tags.length>0?`<div class="creature-card-tags">
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
    `,e.addEventListener("click",()=>{hf(n)}),ao.appendChild(e)}))}function hf(n){if(m.W=n.W,m.D=n.D,m.H=n.H,n.cageType&&(n.cageType==="A"||n.cageType==="A_FRONT"||n.cageType==="A_FRAMED"||n.cageType==="C"||n.cageType==="C_FRAMED")&&(m.cageType=n.cageType,xn&&Ln&&(xn.classList.toggle("active",m.cageType==="A"),bt==null||bt.classList.toggle("active",m.cageType==="A_FRONT"),St==null||St.classList.toggle("active",m.cageType==="A_FRAMED"),Ln.classList.toggle("active",m.cageType==="C"),Tt==null||Tt.classList.toggle("active",m.cageType==="C_FRAMED"),At&&(m.cageType==="A_FRAMED"?At.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":m.cageType==="C_FRAMED"?At.textContent="Type C 正面枠囲い 選択中 (前窓＋高剛性枠スライド扉)":m.cageType==="A_FRONT"?(m.doorHingeSide=n.doorHingeSide||"left",At.textContent=`Type A 前開き 選択中 (${Dn()})`):At.textContent=m.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),Kn&&Kn.classList.toggle("hidden",m.cageType!=="C"&&m.cageType!=="C_FRAMED"),ts())),m.cageType==="C"||m.cageType==="C_FRAMED"){const s=n.frontWindowH!=null?n.frontWindowH:50;m.frontWindowH=s,ji&&(ji.value=s),Ki&&(Ki.value=s)}if(n.frameColor&&(n.frameColor==="silver"||n.frameColor==="black")&&(m.frameColor=n.frameColor,Ti&&wi&&(Ti.classList.toggle("active",m.frameColor==="silver"),wi.classList.toggle("active",m.frameColor==="black"))),m.cageType==="A"){const s=n.frontWideFrame||"2x";m.frontWideFrame=s,ii=s}else m.frontWideFrame="none";m.hasSideReinforcement=!!n.hasSideReinforcement,mo&&(mo.checked=m.hasSideReinforcement),Ms&&Ms.classList.toggle("active",m.hasSideReinforcement),ys&&ys.classList.toggle("disabled",!m.hasSideReinforcement);const e=50,t=Math.max(e,m.H-110);if(ht&&(ht.min=e,ht.max=t),n.sideOpeningH!=null)m.sideOpeningH=Math.max(e,Math.min(t,n.sideOpeningH)),ht&&(ht.value=m.sideOpeningH);else if(m.hasSideReinforcement){const s=Math.round((m.H-60)/20)*10;m.sideOpeningH=s,ht&&(ht.value=s)}m.hasDoorAntiFlex=!!n.hasDoorAntiFlex,An&&(An.checked=m.hasDoorAntiFlex),_n&&_n.classList.toggle("active",m.hasDoorAntiFlex),m.hasSideVentCover=!!n.hasSideVentCover,Zn&&(Zn.checked=m.hasSideVentCover),Rn&&Rn.classList.toggle("active",m.hasSideVentCover),m.hasPerch=!!n.hasPerch,Pt&&(Pt.checked=m.hasPerch),Ct&&Ct.classList.toggle("active",m.hasPerch),n.panelConfig&&(m.panelConfig={...m.panelConfig,...n.panelConfig}),m.footType=n.footType||"rubber",Ji&&(Ji.checked=m.footType==="caster"),Ei&&Ei.classList.toggle("active",m.footType==="caster"),dn&&(dn.value=m.W),un&&(un.value=m.W),Zi&&(Zi.value=m.D),qi&&(qi.value=m.D),pn&&(pn.value=m.H),fn&&(fn.value=m.H),n.floorSplitCount!=null&&(m.floorSplitCount=n.floorSplitCount,Lt&&(Lt.value=String(m.floorSplitCount))),n.hasFloorReinforcement!=null?(m.hasFloorReinforcement=!!n.hasFloorReinforcement,gn&&(gn.checked=m.hasFloorReinforcement)):bs(),Lt&&(Lt.disabled=!m.hasFloorReinforcement),Jt&&Jt.classList.toggle("active",m.hasFloorReinforcement),n.backSplitCount!=null&&(m.backSplitCount=n.backSplitCount,Dt&&(Dt.value=String(m.backSplitCount))),n.hasBackReinforcement!=null?(m.hasBackReinforcement=!!n.hasBackReinforcement,Wt&&(Wt.checked=m.hasBackReinforcement)):Oa(),Dt&&(Dt.disabled=!m.hasBackReinforcement),Ot&&Ot.classList.toggle("active",m.hasBackReinforcement),m.W>940?(kt.checked=!0,kt.disabled=!0,yt&&(yt.classList.remove("disabled"),yt.classList.add("required-locked")),_i.textContent="幅940mm超のため必須（解除不可）",m.hasTopReinforcement=!0):(kt.disabled=!1,yt&&yt.classList.remove("disabled","required-locked"),_i.textContent="940mm以下は任意指定（W>940mmは必須）",m.hasTopReinforcement=!!n.hasTopReinforcement,kt.checked=m.hasTopReinforcement),yt&&yt.classList.toggle("active",m.hasTopReinforcement),Ua(),lr(),ao.querySelectorAll(".creature-card").forEach(s=>{s.classList.toggle("active",s.dataset.presetId===n.id)}),We(),tt.setViewPreset("iso",m)}function Ax(n){if(!n||typeof n!="object")return!1;Number.isFinite(n.W)&&(m.W=Number(n.W),dn&&(dn.value=m.W),un&&(un.value=m.W)),Number.isFinite(n.D)&&(m.D=Number(n.D),Zi&&(Zi.value=m.D),qi&&(qi.value=m.D)),Number.isFinite(n.H)&&(m.H=Number(n.H),pn&&(pn.value=m.H),fn&&(fn.value=m.H));const e=["A","A_FRONT","A_FRAMED","C","C_FRAMED"];if(n.cageType&&e.includes(n.cageType)&&(m.cageType=n.cageType,xn&&Ln&&(xn.classList.toggle("active",m.cageType==="A"),bt==null||bt.classList.toggle("active",m.cageType==="A_FRONT"),St==null||St.classList.toggle("active",m.cageType==="A_FRAMED"),Ln.classList.toggle("active",m.cageType==="C"),Tt==null||Tt.classList.toggle("active",m.cageType==="C_FRAMED"),At&&(m.cageType==="A_FRAMED"?At.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":m.cageType==="C_FRAMED"?At.textContent="Type C 正面枠囲い 選択中 (前窓＋高剛性枠スライド扉)":m.cageType==="A_FRONT"?(m.doorHingeSide=n.doorHingeSide||"left",At.textContent=`Type A 前開き 選択中 (${Dn()})`):At.textContent=m.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),Kn&&Kn.classList.toggle("hidden",m.cageType!=="C"&&m.cageType!=="C_FRAMED"),ts())),m.cageType==="C"||m.cageType==="C_FRAMED"){const i=n.frontWindowH!=null?Number(n.frontWindowH):50;m.frontWindowH=i,ji&&(ji.value=i),Ki&&(Ki.value=i)}if(n.doorHingeSide&&(n.doorHingeSide==="left"||n.doorHingeSide==="right")&&(m.doorHingeSide=n.doorHingeSide),n.frameColor&&(n.frameColor==="silver"||n.frameColor==="black")&&(m.frameColor=n.frameColor,Ti&&wi&&(Ti.classList.toggle("active",m.frameColor==="silver"),wi.classList.toggle("active",m.frameColor==="black"))),n.footType&&(n.footType==="caster"||n.footType==="rubber")&&(m.footType=n.footType,Ji&&(Ji.checked=m.footType==="caster"),Ei&&Ei.classList.toggle("active",m.footType==="caster")),m.cageType==="A"&&n.frontWideFrame?(m.frontWideFrame=n.frontWideFrame,ii=n.frontWideFrame):m.cageType!=="A"&&(m.frontWideFrame="none"),typeof n.hasSideReinforcement=="boolean"){m.hasSideReinforcement=n.hasSideReinforcement,mo&&(mo.checked=m.hasSideReinforcement),Ms&&Ms.classList.toggle("active",m.hasSideReinforcement),ys&&ys.classList.toggle("disabled",!m.hasSideReinforcement);const i=50,s=Math.max(i,m.H-110);ht&&(ht.min=i,ht.max=s),n.sideOpeningH!=null&&(m.sideOpeningH=Math.max(i,Math.min(s,Number(n.sideOpeningH))),ht&&(ht.value=m.sideOpeningH))}wa&&Ea&&(wa.classList.toggle("hidden",m.hasSideReinforcement),Ea.classList.toggle("hidden",!m.hasSideReinforcement)),typeof n.hasDoorAntiFlex=="boolean"&&(m.hasDoorAntiFlex=n.hasDoorAntiFlex,An&&(An.checked=m.hasDoorAntiFlex),_n&&_n.classList.toggle("active",m.hasDoorAntiFlex)),typeof n.hasSideVentCover=="boolean"&&(m.hasSideVentCover=n.hasSideVentCover,Zn&&(Zn.checked=m.hasSideVentCover),Rn&&Rn.classList.toggle("active",m.hasSideVentCover)),typeof n.hasPerch=="boolean"&&(m.hasPerch=n.hasPerch,Pt&&(Pt.checked=m.hasPerch),Ct&&Ct.classList.toggle("active",m.hasPerch)),typeof n.hasRubberPacking=="boolean"&&(m.hasRubberPacking=n.hasRubberPacking,ni&&(ni.checked=m.hasRubberPacking),Wn&&Wn.classList.toggle("active",m.hasRubberPacking)),typeof n.hasFloorHeaterSupport=="boolean"&&(m.hasFloorHeaterSupport=n.hasFloorHeaterSupport,Qi&&(Qi.checked=m.hasFloorHeaterSupport),wn&&wn.classList.toggle("active",m.hasFloorHeaterSupport)),n.floorSplitCount!=null&&(m.floorSplitCount=Number(n.floorSplitCount),Lt&&(Lt.value=String(m.floorSplitCount))),typeof n.hasFloorReinforcement=="boolean"?(m.hasFloorReinforcement=n.hasFloorReinforcement,gn&&(gn.checked=m.hasFloorReinforcement),Jt&&Jt.classList.toggle("active",m.hasFloorReinforcement)):bs(),Lt&&(Lt.disabled=!m.hasFloorReinforcement),n.backSplitCount!=null&&(m.backSplitCount=Number(n.backSplitCount),Dt&&(Dt.value=String(m.backSplitCount))),typeof n.hasBackReinforcement=="boolean"?(m.hasBackReinforcement=n.hasBackReinforcement,Wt&&(Wt.checked=m.hasBackReinforcement),Ot&&Ot.classList.toggle("active",m.hasBackReinforcement)):Oa(),Dt&&(Dt.disabled=!m.hasBackReinforcement),m.W>940?(kt&&(kt.checked=!0,kt.disabled=!0),yt&&(yt.classList.remove("disabled"),yt.classList.add("required-locked")),_i&&(_i.textContent="幅940mm超のため必須（解除不可）"),m.hasTopReinforcement=!0):(kt&&(kt.disabled=!1),yt&&yt.classList.remove("disabled","required-locked"),_i&&(_i.textContent="940mm以下は任意指定（W>940mmは必須）"),m.hasTopReinforcement=!!n.hasTopReinforcement,kt&&(kt.checked=m.hasTopReinforcement),yt&&yt.classList.toggle("active",m.hasTopReinforcement));const t=m.hasTopReinforcement||m.W>940;return Ca&&Aa&&(Ca.classList.toggle("hidden",t),Aa.classList.toggle("hidden",!t)),typeof n.hasRoomDivider=="boolean"&&(m.hasRoomDivider=n.hasRoomDivider,vn&&(vn.checked=m.hasRoomDivider),an&&an.classList.toggle("active",m.hasRoomDivider),Pn&&Pn.classList.toggle("hidden",!m.hasRoomDivider),m.hasRoomDivider&&Pt&&(m.hasPerch=!1,Pt.checked=!1,Pt.disabled=!0,Ct&&Ct.classList.add("disabled"))),n.ledType&&(m.ledType=n.ledType,yo&&(yo.value=m.ledType),typeof n.ledPower=="boolean"&&(m.ledPower=n.ledPower),typeof n.ledBrightness=="number"&&(m.ledBrightness=n.ledBrightness),n.ledColorMode&&(m.ledColorMode=n.ledColorMode),n.ledRgbColor&&(m.ledRgbColor=n.ledRgbColor),sr()),n.panelConfig&&typeof n.panelConfig=="object"&&(m.panelConfig={...m.panelConfig,...n.panelConfig},go&&m.panelConfig.floor&&(go.value=m.panelConfig.floor),ya&&m.panelConfig.back&&(ya.value=m.panelConfig.back),ba&&m.panelConfig.side&&(ba.value=m.panelConfig.side),Sa&&m.panelConfig.sideUpper&&(Sa.value=m.panelConfig.sideUpper),Ta&&m.panelConfig.sideLower&&(Ta.value=m.panelConfig.sideLower),_o&&m.panelConfig.top&&(_o.value=m.panelConfig.top),vo&&m.panelConfig.topLeft&&(vo.value=m.panelConfig.topLeft),xo&&m.panelConfig.topRight&&(xo.value=m.panelConfig.topRight),Mo&&m.panelConfig.partition&&(Mo.value=m.panelConfig.partition)),ao&&ao.querySelectorAll(".creature-card").forEach(s=>s.classList.remove("active")),Ua(),lr(),We(),tt.setViewPreset("iso",m),typeof ir=="function"&&ir(),!0}async function Pc(n){var t,i,s,o,r,a,c;if(!n||typeof n!="string"){ki("error","見積りIDを入力してください。");return}const e=n.trim().toUpperCase();if(!e.startsWith("EST-")||e.length<10){ki("error","見積りIDの形式が正しくありません。（例: EST-20261005-AB12）");return}ki("loading",`⏳ 見積ID「${e}」の仕様データを検索中...`),Js&&(Js.disabled=!0);try{let l=null,h=null;const d=(t=$e==null?void 0:$e.system)==null?void 0:t.gasLogEndpointUrl;let f=!1,p=!1;if(d&&d.startsWith("http"))try{const _=`${d}?estimateId=${encodeURIComponent(e)}`;console.log("[Restore] GASへ見積りデータ問い合わせ中:",_);const g=await(await fetch(_,{method:"GET",mode:"cors"})).text();if(g.includes("スクリプト関数が見つかりません")||g.includes("doGet"))f=!0,console.warn("[Restore] GAS側に doGet が未デプロイです。");else try{const u=JSON.parse(g);u.status==="success"&&u.spec?(l=u.spec,h=u,console.log("[Restore] GASから仕様データを正常に受信:",u)):u.status==="not_found"&&(p=!0,console.warn("[Restore] GAS上で該当見積りが見つかりませんでした:",u.message))}catch(u){console.warn("[Restore] レスポンスのJSONパースに失敗:",u,g.substring(0,200))}}catch(_){console.warn("[Restore] GAS通信エラー（ローカルキャッシュ検索へフォールバック）:",_)}if(!l)try{const _=localStorage.getItem(`kinato_estimate_${e}`);if(_){const v=JSON.parse(_);v&&v.spec&&(l=v.spec,h=v,console.log("[Restore] localStorageから仕様データを復元:",v))}else{const v=localStorage.getItem("kinato_latest_estimate");if(v){const g=JSON.parse(v);g&&g.estimateId===e&&g.spec&&(l=g.spec,h=g,console.log("[Restore] 最新localStorageキャッシュから仕様データを復元:",g))}}}catch(_){console.warn("[Restore] localStorage検索エラー:",_)}if(!l){f?ki("error","⚠️ スプレッドシート側のGASに最新コード（doGet）がまだ保存・デプロイされていません。Google Apps Scriptを更新して再度お試しください。"):p?ki("error",`❌ スプレッドシート内に見積ID「${e}」の記録が見つかりませんでした。IDをお確かめください。`):ki("error",`❌ 見積ID「${e}」が見つかりませんでした。入力内容をお確かめください。`);return}if(Ax(l),h){const _=((i=h.summary)==null?void 0:i.originalPrice)||((s=h.totals)==null?void 0:s.priceWithMarkup)||((o=h.originalTotals)==null?void 0:o.priceWithMarkup),v=((r=h.summary)==null?void 0:r.originalWeight)||((a=h.totals)==null?void 0:a.weight)||((c=h.originalTotals)==null?void 0:c.weight);console.log(`[仕様再現 検証] 見積ID: ${e} | 記録時価格: ¥${_==null?void 0:_.toLocaleString()} / 重量: ${v}kg`)}ki("success",`✅ 見積ID「${e}」のケージ仕様・全オプションを完全再現しました！`),Si(`✅ 見積ID: ${e} の仕様を完全に読み込みました！`,4500)}catch(l){console.error("[Restore] 復元処理エラー:",l),ki("error",`エラーが発生しました: ${l.message}`)}finally{Js&&(Js.disabled=!1)}}function ki(n,e){Xr&&(Xr.className=`restore-status-msg ${n}`,Xr.textContent=e,Xr.classList.remove("hidden"))}Js&&fs&&(Js.addEventListener("click",()=>{Pc(fs.value)}),fs.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),Pc(fs.value))}),fs.addEventListener("input",n=>{n.target.value=n.target.value.toUpperCase()}));function Px(){const n=new Date,e=n.getFullYear()+String(n.getMonth()+1).padStart(2,"0")+String(n.getDate()).padStart(2,"0"),t=Math.random().toString(36).substring(2,6).toUpperCase();return`EST-${e}-${t}`}function Yc(n){if(!n)return"";if(window.location.hostname.includes("pages.dev")||window.location.hostname.includes("kinatocage"))return`https://kinato-cage-site.pages.dev/sim/?estimateId=${encodeURIComponent(n)}`;const t=new URL(window.location.href);return t.search=`?estimateId=${encodeURIComponent(n)}`,t.toString()}function uf(){try{let n=localStorage.getItem("cage_visitor_id");return n||(n="usr_"+Math.random().toString(36).substring(2,8),localStorage.setItem("cage_visitor_id",n)),n}catch{return"usr_"+Math.random().toString(36).substring(2,8)}}function df(){try{let n=sessionStorage.getItem("cage_session_id");return n||(n="ses_"+Math.random().toString(36).substring(2,8),sessionStorage.setItem("cage_session_id",n)),n}catch{return"ses_"+Math.random().toString(36).substring(2,8)}}function Rx(n){zn=Px(),$u++;let e="初期表示からの試算";if(st){const i=[];m.W!==st.W&&i.push(`W:${st.W}→${m.W}`),m.D!==st.D&&i.push(`D:${st.D}→${m.D}`),m.H!==st.H&&i.push(`H:${st.H}→${m.H}`),m.cageType!==st.cageType&&i.push(`タイプ:${m.cageType}`),m.cageType==="C"&&m.frontWindowH!==st.frontWindowH&&i.push(`前窓高:${st.frontWindowH}→${m.frontWindowH}`),m.cageType==="A_FRONT"&&m.doorHingeSide!==st.doorHingeSide&&i.push(`開き:${Dn(st.doorHingeSide)}→${Dn(m.doorHingeSide)}`),m.frameColor!==st.frameColor&&i.push(`色:${st.frameColor==="black"?"黒":"銀"}→${m.frameColor==="black"?"黒":"銀"}`),m.frontWideFrame!==st.frontWideFrame&&i.push(`正面下部:${st.frontWideFrame||"なし"}→${m.frontWideFrame||"なし"}`),m.footType!==st.footType&&i.push(`脚:${m.footType==="caster"?"キャスター":"ゴム脚"}`),m.hasFloorReinforcement!==st.hasFloorReinforcement&&i.push(m.hasFloorReinforcement?"床補強追加":"床補強解除"),m.hasTopReinforcement!==st.hasTopReinforcement&&i.push(m.hasTopReinforcement?"天板補強追加":"天板補強解除"),m.hasSideReinforcement!==st.hasSideReinforcement&&i.push(m.hasSideReinforcement?"側面補強追加":"側面補強解除"),m.hasDoorAntiFlex!==st.hasDoorAntiFlex&&i.push(m.hasDoorAntiFlex?"扉たわみ防止追加":"扉たわみ防止解除"),m.hasSideVentCover!==st.hasSideVentCover&&i.push(m.hasSideVentCover?"換気調整板追加":"換気調整板解除"),m.hasPerch!==st.hasPerch&&i.push(m.hasPerch?"止まり木追加":"止まり木解除"),m.hasRubberPacking!==st.hasRubberPacking&&i.push(m.hasRubberPacking?"ゴムパッキン追加":"ゴムパッキン解除"),m.hasFloorHeaterSupport!==st.hasFloorHeaterSupport&&i.push(m.hasFloorHeaterSupport?"床下ヒータ支え板追加":"床下ヒータ支え板解除"),m.hasRoomDivider!==st.hasRoomDivider&&i.push(m.hasRoomDivider?"2室分け追加":"2室分け解除"),m.hasSideReinforcement&&m.sideOpeningH!==st.sideOpeningH&&i.push(`側上部開口:${st.sideOpeningH}→${m.sideOpeningH}`);const s=st.panelConfig||{},o=m.panelConfig||{};o.floor!==s.floor&&i.push(`床:${sn(s.floor)}→${sn(o.floor)}`),o.back!==s.back&&i.push(`背:${sn(s.back)}→${sn(o.back)}`),m.hasSideReinforcement?(o.sideUpper!==s.sideUpper||o.sideLower!==s.sideLower)&&i.push(`側分割:${sn(o.sideUpper)}/${sn(o.sideLower)}`):o.side!==s.side&&i.push(`側:${sn(s.side)}→${sn(o.side)}`);const r=m.hasTopReinforcement||m.W>940,a=st.hasTopReinforcement||st.W>940;r||a?(o.topLeft!==s.topLeft||o.topRight!==s.topRight||!a)&&i.push(`天分割:${sn(o.topLeft)}/${sn(o.topRight)}`):o.top!==s.top&&i.push(`天:${sn(s.top)}→${sn(o.top)}`),m.hasRoomDivider&&o.partition!==s.partition&&i.push(`仕切り:${sn(s.partition)}→${sn(o.partition)}`),i.length>0?e=i.join(", "):e="同一条件での再計算"}const t=Lx(zn,n);Gu&&(Gu.textContent=zn),zu&&(zu.textContent=`¥${n.priceWithMarkup.toLocaleString()}`),Hu&&(Hu.textContent=`${n.weight.toFixed(1)} kg`),Zo&&(Zo.value=t),Vi&&(Vi.value=Yc(zn)),Cn&&(on&&on.classList.add("hidden"),Ma&&Ma.classList.add("hidden"),window.lastGeneratedEstimateImage=null,Cn.classList.remove("hidden")),ms={estimateId:zn,timestamp:new Date().toISOString(),visitorId:Qd,sessionId:Sc,seq:$u,spec:{...m},totals:{...n},diffNote:e,elapsedSec:Math.round((Date.now()-ix)/1e3)},st=JSON.parse(JSON.stringify(m));try{localStorage.setItem(`kinato_estimate_${zn}`,JSON.stringify(ms)),localStorage.setItem("kinato_latest_estimate",JSON.stringify(ms))}catch{}Fx(ms)}function qc(){return m.frameColor==="black"?"ブラック":"シルバー"}function Jn(n){switch(n){case"acrylic":return"透明アクリル 3.0mm";case"black_matte":return"アクリル黒両面マット 3.0mm";case"smoke_gray":return"アクリル グレースモーク半透明 3.0mm";case"punching":return"塩ビパンチングボード 3.0mm";case"polyca":return"中空ポリカ 4.0mm";case"mesh15":return"金網15mmピッチ (黒粉体塗装)";case"mesh25":return"金網25mmピッチ (黒粉体塗装)";case"mesh30":return"金網30mmピッチ (黒粉体塗装)";default:return n||"透明アクリル 3.0mm"}}function sn(n){switch(n){case"acrylic":return"透明アクリル";case"black_matte":return"黒マット";case"smoke_gray":return"グレースモーク";case"punching":return"パンチング";case"polyca":return"中空ポリカ";case"mesh15":return"金網15mm";case"mesh25":return"金網25mm";case"mesh30":return"金網30mm";default:return n||"アクリル"}}function Zc(){const n=[];m.cageType==="C"?(n.push({face:"正面扉",name:"透明アクリル 3.0mm (スライド扉)"}),n.push({face:"正面固定窓",name:`透明アクリル 3.0mm (開口高 ${m.frontWindowH}mm)`})):m.cageType==="A_FRONT"?n.push({face:"正面扉",name:`透明アクリル 3.0mm (前開き扉: ${Dn()})`}):n.push({face:"正面扉",name:"透明アクリル 3.0mm (全面スライド扉)"});const e=m.floorSplitCount===3?"3分割":"2分割";n.push({face:m.hasFloorReinforcement?`床面 (中央${e})`:"床面",name:Jn(m.panelConfig.floor)});const t=m.backSplitCount===3?"3分割":"2分割";return n.push({face:m.hasBackReinforcement?`背面 (中央${t})`:"背面",name:Jn(m.panelConfig.back)}),m.hasSideReinforcement?n.push({face:"側面 (左右2分割)",name:`上部: ${Jn(m.panelConfig.sideUpper)} / 下部: ${Jn(m.panelConfig.sideLower)}`}):n.push({face:"側面 (左右)",name:Jn(m.panelConfig.side)}),m.hasTopReinforcement||m.W>940?m.panelConfig.topLeft===m.panelConfig.topRight?n.push({face:"天面 (中央2分割)",name:`${Jn(m.panelConfig.topLeft)} (左右共通)`}):n.push({face:"天面 (中央2分割)",name:`左: ${Jn(m.panelConfig.topLeft)} / 右: ${Jn(m.panelConfig.topRight)}`}):n.push({face:"天面",name:Jn(m.panelConfig.top)}),m.hasRoomDivider&&n.push({face:"仕切り板",name:Jn(m.panelConfig.partition||"black_matte")}),n}function Kc(){const n=[];if(m.cageType==="A_FRONT"&&n.push(`前開き扉仕様 (${Dn()})`),m.cageType==="A"&&(m.frontWideFrame==="2x"?n.push("正面下側幅広フレーム2倍幅 (40mm)"):m.frontWideFrame==="3x"&&n.push("正面下側幅広フレーム3倍幅 (60mm)")),m.cageType==="C"&&n.push(`前窓固定仕様 (開口高さ ${m.frontWindowH}mm)`),m.hasSideReinforcement&&n.push(`側面補強フレーム (側面上部開口 ${m.sideOpeningH}mm・左右2分割)`),m.hasSideVentCover&&(m.hasSideReinforcement?n.push("側面換気量調整板 (左右ペア・外張りt1.5アクリル板・化粧つまみネジ付)"):n.push("側面換気量調整板 (左右上下4枚・外張りt1.5アクリル板・化粧つまみネジ付)")),m.hasFloorReinforcement){const e=m.floorSplitCount===3?"3分割仕様":"2分割仕様";m.W>940?n.push(`床面補強フレーム (幅940mm超・標準付属/${e})`):n.push(`床面補強フレーム (${e})`)}if(m.hasBackReinforcement){const e=m.backSplitCount===3?"3分割仕様":"2分割仕様";m.W>940?n.push(`背面補強フレーム (幅940mm超・標準付属/${e})`):n.push(`背面補強フレーム (${e})`)}if(m.W>940?n.push("天板中央補強フレーム (幅940mm超・標準付属/2分割仕様)"):m.hasTopReinforcement&&n.push("天板中央補強フレーム (2分割仕様)"),m.hasDoorAntiFlex&&n.push("正面スライド扉たわみ防止レール"),m.footType==="caster"&&n.push("自在キャスター仕様 (4輪・高さ66mm)"),m.hasPerch){const e=m.W-120,t=Math.floor(e/7)*7,i=Math.max(10,t-15);n.push(`止まり木（天板吊り下げ式・φ30アルミ丸棒 L=${i}mm・後付け可）`)}if(m.hasRubberPacking&&n.push("モレ対策ゴムパッキン (側面・背面 隙間モレ抑制)"),m.hasFloorHeaterSupport&&(m.hasFloorReinforcement?m.floorSplitCount===3?n.push("床下パネルヒータ支え板 (床面3分割用・透明アクリル2.0mm 3枚＋緩衝プラダン4.0mm 3枚＋化粧ネジ付)"):n.push("床下パネルヒータ支え板 (床面2分割用・透明アクリル2.0mm 2枚＋緩衝プラダン4.0mm 2枚＋化粧ネジ付)"):n.push("床下パネルヒータ支え板 (通常床面用・透明アクリル2.0mm 1枚＋緩衝プラダン4.0mm 1枚＋化粧ネジ付)")),m.hasRoomDivider&&n.push("２室分け（後付け仕切り板仕様）"),m.ledType&&m.ledType!=="none"){const e={usb:"LED照明: USB式 白＆電球色 LED",rgbw:"LED照明: リモコン操作 RGB+W"};n.push(e[m.ledType]||"LED照明")}return n}function Lx(n,e){const t=Na(!0),i=qc(),o=Zc().map(l=>`  ・${l.face}: ${l.name}`).join(`
`),r=Kc(),a=r.length>0?r.map(l=>`  ・${l}`).join(`
`):"  ・標準構成（追加オプションなし）",c=Yc(n);return`【ケージお見積もり仕様】
・見積ID: ${n}
・仕様再現URL:
  ${c}
・ケージ種類: ${t}
・外寸サイズ: 幅 ${m.W}mm × 奥行 ${m.D}mm × 高さ ${m.H}mm
・フレーム色: ${i}
・選択パネル素材・板厚:
${o}
・選択オプション:
${a}
・概算総重量: 約 ${e.weight.toFixed(1)} kg
・お見積り合計金額: ¥${e.priceWithMarkup.toLocaleString()}（税込・送料別）
※URLを控えることで、この仕様にてロードされます。
※まだβ版なので誤差（最大±5%程度）が出ております。詳細はDMよりお問い合わせください。
※公式サイト: https://kinato-cage-site.pages.dev/`}Xu&&Cn&&Xu.addEventListener("click",()=>{nr?(on&&on.classList.add("hidden"),Vi&&zn&&(Vi.value=Yc(zn)),Cn.classList.remove("hidden")):alert("先に「見積もりと重量計算」を実行してください。")});Wu&&Cn&&Wu.addEventListener("click",()=>{Cn.classList.add("hidden")});Vu&&Cn&&Vu.addEventListener("click",()=>{Cn.classList.add("hidden")});Cn&&Cn.addEventListener("click",n=>{n.target===Cn&&Cn.classList.add("hidden")});Sl&&Zo&&Sl.addEventListener("click",async()=>{const n=Zo.value;if(n)try{await navigator.clipboard.writeText(n),Vs&&(Vs.classList.remove("hidden"),setTimeout(()=>Vs.classList.add("hidden"),2200));const e=Sl.querySelector(".copy-text-label");if(e){const t=e.textContent;e.textContent="済！",setTimeout(()=>{e.textContent=t},1800)}}catch{Zo.select(),document.execCommand("copy"),Vs&&(Vs.classList.remove("hidden"),setTimeout(()=>Vs.classList.add("hidden"),2200))}});Tl&&Vi&&Tl.addEventListener("click",async()=>{const n=Vi.value;if(n)try{navigator.clipboard&&navigator.clipboard.writeText?await navigator.clipboard.writeText(n):(Vi.select(),document.execCommand("copy")),$s&&($s.classList.remove("hidden"),setTimeout(()=>{$s.classList.add("hidden")},3e3));const e=Tl.querySelector(".copy-url-label");if(e){const t=e.textContent;e.textContent="コピー完了！",setTimeout(()=>{e.textContent=t},2e3)}}catch{Vi.select(),document.execCommand("copy"),$s&&($s.classList.remove("hidden"),setTimeout(()=>$s.classList.add("hidden"),3e3))}});bc&&bc.addEventListener("click",()=>{Dx()});Qs&&Qs.addEventListener("click",()=>{Qs.src&&window.open(Qs.src,"_blank")});async function Dx(){if(!nr||!ms){alert("先に見積もり計算を実行してください。");return}const n=bc||nx;let e="";n&&(n.classList.add("is-exporting"),e=n.innerHTML,n.innerHTML="<span>⏳ 画像を生成中...</span>");try{const t=tt.captureImage?tt.captureImage():tt.renderer.domElement.toDataURL("image/png"),i=document.createElement("canvas");i.width=1080,i.height=1920;const s=i.getContext("2d"),o=s.createLinearGradient(0,0,0,1920);o.addColorStop(0,"#090d16"),o.addColorStop(.35,"#0f172a"),o.addColorStop(1,"#1e293b"),s.fillStyle=o,s.fillRect(0,0,1080,1920),s.strokeStyle="rgba(56, 189, 248, 0.06)",s.lineWidth=1;for(let J=60;J<1080;J+=80)s.beginPath(),s.moveTo(J,0),s.lineTo(J,1920),s.stroke();for(let J=60;J<1920;J+=80)s.beginPath(),s.moveTo(0,J),s.lineTo(1080,J),s.stroke();s.strokeStyle="rgba(56, 189, 248, 0.35)",s.lineWidth=2,s.strokeRect(40,40,1e3,1840);const r=J=>new Promise(ee=>{if(!J)return ee(null);const ge=new Image;ge.onload=()=>ee(ge),ge.onerror=()=>ee(null),ge.src=J}),a="./",[c,l,h,d]=await Promise.all([r(`${a}logo_kinato.png`),r(`${a}character_transparent.png`),r(t),r(`${a}qr_code_kinato.png`)]);c&&s.drawImage(c,65,65,135,135);const f=c?215:65;s.fillStyle="#ffffff",s.font='bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("きなとのケージ屋さん",f,104),s.fillStyle="#38bdf8",s.font='600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3Dオーダーメイドケージ お見積書",f,140),s.fillStyle="#f9c784",s.font="500 16px ui-monospace, SFMono-Regular, monospace",s.fillText("https://kinato-cage-site.pages.dev/",f,172),d&&(s.fillStyle="#ffffff",s.shadowColor="rgba(56, 189, 248, 0.3)",s.shadowBlur=10,Oo(s,605,67,130,130,8),s.fill(),s.shadowColor="transparent",s.shadowBlur=0,s.drawImage(d,610,72,120,120)),s.textAlign="right",s.fillStyle="#fb7185",s.font="bold 24px ui-monospace, monospace",s.fillText(zn,1015,110),s.fillStyle="#94a3b8",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const p=new Date,_=`${p.getFullYear()}/${String(p.getMonth()+1).padStart(2,"0")}/${String(p.getDate()).padStart(2,"0")} ${String(p.getHours()).padStart(2,"0")}:${String(p.getMinutes()).padStart(2,"0")}`;s.fillText(`発行日時: ${_}`,1015,148),s.textAlign="left";const v=65,g=240,u=950,w=700;if(s.fillStyle="rgba(15, 23, 42, 0.75)",s.strokeStyle="rgba(56, 189, 248, 0.25)",s.lineWidth=2,Oo(s,v,g,u,w,16),s.fill(),s.stroke(),h){const J=Math.min((u-40)/h.width,(w-40)/h.height),ee=h.width*J,ge=h.height*J,ve=v+(u-ee)/2,q=g+(w-ge)/2;s.drawImage(h,ve,q,ee,ge)}s.fillStyle="rgba(2, 6, 23, 0.85)",s.strokeStyle="rgba(56, 189, 248, 0.5)",Oo(s,v+20,g+w-55,230,36,6),s.fill(),s.stroke(),s.fillStyle="#38bdf8",s.font='600 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3D外観シミュレーション",v+35,g+w-31);const y=65,M=960,I=950,R=505;s.fillStyle="rgba(30, 41, 59, 0.65)",s.strokeStyle="rgba(148, 163, 184, 0.2)",s.lineWidth=1.5,Oo(s,y,M,I,R,16),s.fill(),s.stroke(),s.fillStyle="#f8fafc",s.font='bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("📐 ケージ設計パラメータ",y+30,M+40),s.strokeStyle="rgba(148, 163, 184, 0.15)",s.lineWidth=1,s.beginPath(),s.moveTo(y+25,M+56),s.lineTo(y+I-25,M+56),s.stroke();const C=Na(!0),L=qc(),S=Zc(),x=Kc();s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("ケージ種類",y+30,M+90),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(C,y+230,M+90),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("外寸サイズ",y+30,M+125),s.fillStyle="#38bdf8",s.font='bold 21px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`幅 ${m.W} mm  ×  奥行 ${m.D} mm  ×  高さ ${m.H} mm`,y+230,M+125),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("フレーム仕様",y+30,M+160),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(L,y+230,M+160),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択パネル・板厚",y+30,M+198);let T=M+198;S.forEach(J=>{s.fillStyle="#38bdf8",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`[${J.face}]`,y+230,T),s.fillStyle="#e2e8f0",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(J.name,y+380,T),T+=25}),s.strokeStyle="rgba(148, 163, 184, 0.12)",s.beginPath(),s.moveTo(y+25,T+6),s.lineTo(y+I-25,T+6),s.stroke();const O=T+34;if(s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択オプション",y+30,O),x.length===0)s.fillStyle="#94a3b8",s.font='500 17px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("標準構成（追加オプションなし）",y+230,O);else{let J=O;x.forEach(ee=>{s.fillStyle="#fbbf24",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("✔",y+230,J),s.fillStyle="#f8fafc",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(ee,y+255,J),J+=24})}const F=!!(l||d),U=65,N=1485,z=F?650:950,j=345,W=s.createLinearGradient(U,N,U+z,N+j);if(W.addColorStop(0,"rgba(15, 23, 42, 0.88)"),W.addColorStop(1,"rgba(30, 41, 59, 0.92)"),s.fillStyle=W,s.strokeStyle="rgba(217, 70, 239, 0.4)",s.lineWidth=2,Oo(s,U,N,z,j,16),s.fill(),s.stroke(),s.fillStyle="#cbd5e1",s.font='600 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("概算総重量 (計算値)",U+35,N+48),s.fillStyle="#38bdf8",s.font="bold 32px ui-monospace, monospace",s.fillText(`約 ${ms.totals.weight.toFixed(1)} kg`,U+280,N+50),s.strokeStyle="rgba(148, 163, 184, 0.2)",s.beginPath(),s.moveTo(U+30,N+70),s.lineTo(U+z-30,N+70),s.stroke(),s.fillStyle="#f1f5f9",s.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("お見積もり合計金額 (税込・送料別)",U+35,N+110),s.fillStyle="#fbbf24",s.font='bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`¥${ms.totals.priceWithMarkup.toLocaleString()}`,U+35,N+180),s.fillStyle="#fcd34d",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("※まだβ版なので誤差（最大±5%程度）が出ております。",U+35,N+220),s.fillText("　詳細はDMよりお問い合わせください。",U+35,N+244),s.fillStyle="#94a3b8",s.font='500 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("※本画像はお見積もりシミュレーション結果の控えです。",U+35,N+282),s.fillText("　お問い合わせ・ご注文の際にお手元にご準備ください。",U+35,N+306),F&&l){const ve=l.height/l.width*270,q=735+10/2,se=N+(j-ve)/2+5;s.drawImage(l,q,se,270,ve)}const ie=`Cage_Estimate_${zn}.png`;try{const J=i.toDataURL("image/png");window.lastGeneratedEstimateImage=J,Qs&&(Qs.src=J),Ma&&Ma.classList.remove("hidden");const ee=await new Promise(se=>i.toBlob(se,"image/png"));let ge=null;if(ee&&window.File)try{ge=new File([ee],ie,{type:"image/png"})}catch(se){console.warn("File constructor failed:",se)}const ve=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);let q=!1;if(ve&&ge&&navigator.canShare&&navigator.canShare({files:[ge]}))try{await navigator.share({files:[ge],title:"きなとのケージ屋さん お見積もり結果カード",text:`ケージお見積もり結果カード（${zn}）です。`}),q=!0,console.log("Shared estimate card image via Web Share API successfully"),on&&Ui&&(Ui.textContent=ie,Xs&&(Xs.textContent="✅ 共有メニューを開きました（「画像を保存」で写真アプリに保存されます）"),on.classList.remove("hidden"))}catch(se){se.name==="AbortError"?(console.log("User closed the share sheet"),on&&Ui&&(Ui.textContent=ie,Xs&&(Xs.textContent="💡 共有メニューを閉じました。下の画像を長押しして「写真」に追加も可能です"),on.classList.remove("hidden")),q=!0):console.warn("navigator.share failed, falling back to download:",se)}if(!q){const se=document.createElement("a");se.href=J,se.download=ie,se.target="_self",document.body.appendChild(se),se.click(),document.body.removeChild(se),console.log("Downloaded estimate card image via DataURL:",ie),on&&Ui&&(Ui.textContent=ie,Xs&&(Xs.textContent=ve?"✅ 画像をダウンロードしました（下の画像を長押しして「写真」に追加も可能です）":"✅ ダウンロード完了（保存先: ダウンロードフォルダ）"),on.classList.remove("hidden"),setTimeout(()=>{on&&on.classList.add("hidden")},7e3))}}catch(J){console.warn("toDataURL / export failed, falling back to Blob URL:",J),i.toBlob&&i.toBlob(ee=>{if(!ee){alert("画像の書き出しに失敗しました。");return}const ge=URL.createObjectURL(ee),ve=document.createElement("a");ve.href=ge,ve.download=ie,document.body.appendChild(ve),ve.click(),document.body.removeChild(ve),setTimeout(()=>URL.revokeObjectURL(ge),1e4),on&&Ui&&(Ui.textContent=ie,on.classList.remove("hidden"))},"image/png")}}catch(t){console.error("Estimate card export failed:",t),alert("画像の生成中にエラーが発生しました: "+t.message)}finally{n&&(n.classList.remove("is-exporting"),n.innerHTML=e)}}function Oo(n,e,t,i,s,o){n.beginPath(),n.moveTo(e+o,t),n.lineTo(e+i-o,t),n.arcTo(e+i,t,e+i,t+o,o),n.lineTo(e+i,t+s-o),n.arcTo(e+i,t+s,e+i-o,t+s,o),n.lineTo(e+o,t+s),n.arcTo(e,t+s,e,t+s-o,o),n.lineTo(e,t+o),n.arcTo(e,t,e+o,t,o),n.closePath()}const Ix=!0;function jc(){const n=window.location.hostname||"",e=window.location.port||"";return n==="localhost"||n==="127.0.0.1"||n==="[::1]"||n==="0.0.0.0"||n.endsWith(".local")||n.startsWith("192.168.")||n.startsWith("10.")||e==="5173"||e==="4173"}async function Fx(n){var t;if(jc()){console.log("[Log] ローカル開発環境のため、Googleスプレッドシートへの見積もりログ保存を自動スキップしました。");return}const e=(t=$e==null?void 0:$e.system)==null?void 0:t.gasLogEndpointUrl;if(!e.startsWith("http")){console.warn("[Log] gasLogEndpointUrl が未設定のため、ログ送信をスキップしました。");return}try{const i=navigator.userAgent;let s="PC";/iPhone/i.test(i)?s="iPhone":/iPad/i.test(i)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?s="iPad":/Android/i.test(i)?s="Android":/Mac/i.test(i)?s="Mac":/Win/i.test(i)&&(s="Windows");let o="Browser";/Chrome/i.test(i)&&!/Edge|Edg/i.test(i)?o="Chrome":/Safari/i.test(i)&&!/Chrome/i.test(i)?o="Safari":/Edge|Edg/i.test(i)?o="Edge":/Firefox/i.test(i)&&(o="Firefox");const a=Zc().map(p=>`${p.face}:${p.name}`).join(" | "),c=Kc(),l=c.length>0?c.join(", "):"なし",h=qc();let d=[];try{const p=sessionStorage.getItem("cage_page_history");p&&(d=JSON.parse(p)),d.includes("見積もりシステム")||(d.push("見積もりシステム"),sessionStorage.setItem("cage_page_history",JSON.stringify(d)))}catch{}const f={type:"estimate",timestamp:n.timestamp,estimateId:n.estimateId,visitorId:n.visitorId,sessionId:n.sessionId,seq:n.seq,device:{type:s,browser:o,screen:`${window.innerWidth}x${window.innerHeight}`},spec:{...n.spec,typeName:Na(!0),doorHingeDisplayName:m.cageType==="A_FRONT"?Dn():void 0,frameColorDisplayName:h,panelsSummary:a,optionsSummary:l},calculated:n.totals,meta:{elapsedSec:n.elapsedSec,referrer:document.referrer||"Direct",diffNote:n.diffNote,pageHistory:d}};console.log("[Log] GASへ送信中 (type: estimate)...",f),await fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}),console.log("[Log] 見積もりログをスプレッドシートへ送信完了:",n.estimateId)}catch(i){console.warn("[Log] スプレッドシート送信エラー:",i)}}function Ux(n){var e;try{const t=(e=$e==null?void 0:$e.system)==null?void 0:e.gasLogEndpointUrl;if(!t||typeof t!="string"||!t.startsWith("http"))return;const i={type:"calc_error",timestamp:new Date().toISOString(),visitorId:uf(),sessionId:df(),errorMessage:(n==null?void 0:n.message)||String(n),errorStack:n!=null&&n.stack?String(n.stack).substring(0,1e3):"",spec:{...m},url:window.location.href,device:{userAgent:navigator.userAgent,screen:`${window.innerWidth}x${window.innerHeight}`}};console.warn("[Log] 🚨 エラー発生をGASへ通報中...",i),fetch(t,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0}).catch(()=>{})}catch(t){console.warn("[Log] エラーログ自動送信失敗:",t)}}Cx();dx();function Nx(){try{let n=null;const e=sessionStorage.getItem("kinato_sim_initial_state");if(e)try{n=JSON.parse(e),sessionStorage.removeItem("kinato_sim_initial_state"),console.log("[Sim] sessionStorageから初期設定を読み込みました:",n)}catch(t){console.warn("[Sim] sessionStorageのパースに失敗:",t)}if(!n&&window.location.search){const t=new URLSearchParams(window.location.search);let i=null;for(const[s,o]of t.entries()){const r=s.toLowerCase();if(["estimateid","id","estimate_id","est","quoteid","quote_id","estimate"].includes(r)&&o&&typeof o=="string"&&o.trim().length>0){i=o.trim();break}}if(i){const s=i.toUpperCase();if(fs&&(fs.value=s),Pc(s),window.history&&window.history.replaceState){const o=`${window.location.pathname}?estimateId=${encodeURIComponent(s)}`;window.history.replaceState({},document.title,o)}return}n={},t.has("preset")&&(n.preset=t.get("preset")),t.has("w")&&(n.W=parseInt(t.get("w"),10)),t.has("d")&&(n.D=parseInt(t.get("d"),10)),t.has("h")&&(n.H=parseInt(t.get("h"),10)),t.has("type")&&(n.cageType=t.get("type").toUpperCase()),t.has("frame")&&(n.frameColor=t.get("frame")),t.has("foot")&&(n.footType=t.get("foot")),t.has("doorAntiFlex")&&(n.hasDoorAntiFlex=t.get("doorAntiFlex")==="1"||t.get("doorAntiFlex")==="true"),t.has("sideVentCover")&&(n.hasSideVentCover=t.get("sideVentCover")==="1"||t.get("sideVentCover")==="true"),t.has("perch")&&(n.hasPerch=t.get("perch")==="1"||t.get("perch")==="true"),t.has("roomDivider")&&(n.hasRoomDivider=t.get("roomDivider")==="1"||t.get("roomDivider")==="true"),t.has("floorReinf")&&(n.hasFloorReinforcement=t.get("floorReinf")==="1"||t.get("floorReinf")==="true"),t.has("floorSplit")&&(n.floorSplitCount=parseInt(t.get("floorSplit"),10)),t.has("backReinf")&&(n.hasBackReinforcement=t.get("backReinf")==="1"||t.get("backReinf")==="true"),t.has("backSplit")&&(n.backSplitCount=parseInt(t.get("backSplit"),10)),t.has("topReinf")&&(n.hasTopReinforcement=t.get("topReinf")==="1"||t.get("topReinf")==="true"),t.has("frontWide")&&(n.frontWideFrame=t.get("frontWide")),t.has("floorHeater")&&(n.hasFloorHeaterSupport=t.get("floorHeater")==="1"||t.get("floorHeater")==="true"),window.history&&window.history.replaceState&&window.history.replaceState({},document.title,window.location.pathname),console.log("[Sim] URLパラメータから初期設定を読み込み、URLをクリーンにしました:",n)}if(!n||Object.keys(n).length===0)return;if(n.preset&&Array.isArray(xa)){const t=xa.find(i=>i.id===n.preset);t&&hf(t)}Number.isFinite(n.W)&&(m.W=n.W,dn&&(dn.value=m.W),un&&(un.value=m.W)),Number.isFinite(n.D)&&(m.D=n.D,Zi&&(Zi.value=m.D),qi&&(qi.value=m.D)),Number.isFinite(n.H)&&(m.H=n.H,pn&&(pn.value=m.H),fn&&(fn.value=m.H)),(n.cageType==="A"||n.cageType==="A_FRONT"||n.cageType==="A_FRAMED"||n.cageType==="C"||n.cageType==="C_FRAMED")&&(m.cageType=n.cageType,xn&&Ln&&(xn.classList.toggle("active",m.cageType==="A"),bt==null||bt.classList.toggle("active",m.cageType==="A_FRONT"),St==null||St.classList.toggle("active",m.cageType==="A_FRAMED"),Ln.classList.toggle("active",m.cageType==="C"),Tt==null||Tt.classList.toggle("active",m.cageType==="C_FRAMED"),At&&(m.cageType==="A_FRAMED"?At.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":m.cageType==="C_FRAMED"?At.textContent="Type C 正面枠囲い 選択中 (前窓＋高剛性枠スライド扉)":m.cageType==="A_FRONT"?(m.doorHingeSide=n.doorHingeSide||"left",At.textContent=`Type A 前開き 選択中 (${Dn()})`):At.textContent=m.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),Kn&&Kn.classList.toggle("hidden",m.cageType!=="C"&&m.cageType!=="C_FRAMED"),ts())),(n.frameColor==="silver"||n.frameColor==="black")&&(m.frameColor=n.frameColor,Ti&&wi&&(Ti.classList.toggle("active",m.frameColor==="silver"),wi.classList.toggle("active",m.frameColor==="black"))),(n.footType==="rubber"||n.footType==="caster")&&(m.footType=n.footType,Ji&&(Ji.checked=m.footType==="caster"),Ei&&Ei.classList.toggle("active",m.footType==="caster")),typeof n.hasDoorAntiFlex=="boolean"&&(m.hasDoorAntiFlex=n.hasDoorAntiFlex,An&&(An.checked=m.hasDoorAntiFlex),_n&&_n.classList.toggle("active",m.hasDoorAntiFlex)),typeof n.hasSideVentCover=="boolean"&&(m.hasSideVentCover=n.hasSideVentCover,Zn&&(Zn.checked=m.hasSideVentCover),Rn&&Rn.classList.toggle("active",m.hasSideVentCover)),typeof n.hasPerch=="boolean"&&(m.hasPerch=n.hasPerch,Pt&&(Pt.checked=m.hasPerch),Ct&&Ct.classList.toggle("active",m.hasPerch)),typeof n.hasRoomDivider=="boolean"&&(m.hasRoomDivider=n.hasRoomDivider,vn&&(vn.checked=m.hasRoomDivider),an&&an.classList.toggle("active",m.hasRoomDivider),Pn&&Pn.classList.toggle("hidden",!m.hasRoomDivider),m.hasRoomDivider&&Pt&&(m.hasPerch=!1,Pt.checked=!1,Pt.disabled=!0,Ct&&Ct.classList.add("disabled"))),n.floorSplitCount!=null&&(m.floorSplitCount=n.floorSplitCount,Lt&&(Lt.value=String(m.floorSplitCount))),typeof n.hasFloorReinforcement=="boolean"?(m.hasFloorReinforcement=n.hasFloorReinforcement,gn&&(gn.checked=m.hasFloorReinforcement)):bs(),Lt&&(Lt.disabled=!m.hasFloorReinforcement),Jt&&Jt.classList.toggle("active",m.hasFloorReinforcement),n.backSplitCount!=null&&(m.backSplitCount=n.backSplitCount,Dt&&(Dt.value=String(m.backSplitCount))),typeof n.hasBackReinforcement=="boolean"?(m.hasBackReinforcement=n.hasBackReinforcement,Wt&&(Wt.checked=m.hasBackReinforcement)):Oa(),Dt&&(Dt.disabled=!m.hasBackReinforcement),Ot&&Ot.classList.toggle("active",m.hasBackReinforcement),typeof n.hasFloorHeaterSupport=="boolean"&&(m.hasFloorHeaterSupport=n.hasFloorHeaterSupport,Qi&&(Qi.checked=m.hasFloorHeaterSupport),wn&&wn.classList.toggle("active",m.hasFloorHeaterSupport)),n.frontWideFrame&&(m.frontWideFrame=n.frontWideFrame,ii=n.frontWideFrame),Ua(),lr(),We(),tt.setViewPreset("iso",m),typeof ir=="function"&&ir()}catch(n){console.error("[Sim] 初期状態の反映エラー:",n)}}Nx();(function(){var t;const e=(t=$e==null?void 0:$e.system)==null?void 0:t.gasLogEndpointUrl;if(e.startsWith("http"))try{let i=[];try{const f=sessionStorage.getItem("cage_page_history");f&&(i=JSON.parse(f))}catch{}(i.length===0||i[i.length-1]!=="見積もりシステム")&&(i.push("見積もりシステム"),sessionStorage.setItem("cage_page_history",JSON.stringify(i)));let s=sessionStorage.getItem("cage_initial_referrer"),o=sessionStorage.getItem("cage_landing_page");if(!s){s=document.referrer||"Direct";const f=new URLSearchParams(window.location.search),p=f.get("origin")||f.get("utm_source")||f.get("ref");p&&(s=`${s} [Param:${p}]`),sessionStorage.setItem("cage_initial_referrer",s)}o||(o=window.location.pathname,sessionStorage.setItem("cage_landing_page",o));const r=navigator.userAgent;let a="PC";/iPhone/i.test(r)?a="iPhone":/iPad/i.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?a="iPad":/Android/i.test(r)?a="Android":/Mac/i.test(r)?a="Mac":/Win/i.test(r)&&(a="Windows");let c="Browser";/Chrome/i.test(r)&&!/Edge|Edg/i.test(r)?c="Chrome":/Safari/i.test(r)&&!/Chrome/i.test(r)?c="Safari":/Edge|Edg/i.test(r)?c="Edge":/Firefox/i.test(r)&&(c="Firefox");let l="直接 / お気に入り";const h=s.toLowerCase();h.includes("instagram.com")?l="Instagram":h.includes("t.co")||h.includes("twitter.com")||h.includes("x.com")?l="X (Twitter)":h.includes("google.")?l="Google検索":h.includes("yahoo.")?l="Yahoo!検索":h.includes("line.me")?l="LINE":h.includes("tiktok.com")?l="TikTok":s!=="Direct"&&(l="外部Webサイト");const d={type:"web_access",visitorId:Qd,sessionId:Sc,referrer:s,referrerCategory:l,landingPage:o,pageHistory:i,pageCount:i.length,device:{type:a,browser:c,screen:`${window.innerWidth}x${window.innerHeight}`}};if(jc()&&Ix){console.log("[Log] ローカル開発環境のため、シミュレーター訪問ログ送信をスキップしました。");return}fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(d),keepalive:!0}).then(()=>{console.log("[Log] シミュレーター訪問ログをGASへ送信完了 (セッション:",Sc,")")}).catch(f=>{console.warn("[Log] シミュレーター訪問ログ送信エラー:",f)})}catch(i){console.warn("[Log] sendSimAccessLog エラー:",i)}})();
