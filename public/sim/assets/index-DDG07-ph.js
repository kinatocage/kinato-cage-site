(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="170",Vi={ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fu=0,Tl=1,pu=2,nh=1,ih=2,Sn=3,Zn=0,Ue=1,Re=2,Yn=0,Wi=1,bl=2,wl=3,Al=4,mu=5,oi=100,gu=101,_u=102,vu=103,xu=104,Mu=200,yu=201,Su=202,Eu=203,Yo=204,qo=205,Tu=206,bu=207,wu=208,Au=209,Cu=210,Ru=211,Pu=212,Lu=213,Du=214,$o=0,Zo=1,Ko=2,$i=3,jo=4,Jo=5,Qo=6,ta=7,sh=0,Iu=1,Uu=2,qn=0,Fu=1,Nu=2,Ou=3,rh=4,Bu=5,zu=6,ku=7,oh=300,Zi=301,Ki=302,ea=303,na=304,Yr=306,ia=1e3,He=1001,sa=1002,an=1003,Gu=1004,Os=1005,be=1006,to=1007,li=1008,Ln=1009,ah=1010,lh=1011,bs=1012,Ka=1013,hi=1014,bn=1015,Is=1016,ja=1017,Ja=1018,ji=1020,ch=35902,hh=1021,uh=1022,rn=1023,dh=1024,fh=1025,Xi=1026,Ji=1027,ph=1028,Qa=1029,mh=1030,tl=1031,el=1033,yr=33776,Sr=33777,Er=33778,Tr=33779,ra=35840,oa=35841,aa=35842,la=35843,ca=36196,ha=37492,ua=37496,da=37808,fa=37809,pa=37810,ma=37811,ga=37812,_a=37813,va=37814,xa=37815,Ma=37816,ya=37817,Sa=37818,Ea=37819,Ta=37820,ba=37821,br=36492,wa=36494,Aa=36495,gh=36283,Ca=36284,Ra=36285,Pa=36286,Hu=3200,Vu=3201,_h=0,Wu=1,Vn="",qe="srgb",ns="srgb-linear",qr="linear",Qt="srgb",gi=7680,Cl=519,Xu=512,Yu=513,qu=514,vh=515,$u=516,Zu=517,Ku=518,ju=519,La=35044,Rl="300 es",wn=2e3,Rr=2001;class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wr=Math.PI/180,Da=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Ju(i,t){return(i%t+t)%t}function eo(i,t,e){return(1-e)*i+e*t}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Qu={DEG2RAD:wr};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,r,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],b=s[1],y=s[4],M=s[7],D=s[2],L=s[5],R=s[8];return r[0]=o*_+a*b+l*D,r[3]=o*m+a*y+l*L,r[6]=o*f+a*M+l*R,r[1]=c*_+h*b+u*D,r[4]=c*m+h*y+u*L,r[7]=c*f+h*M+u*R,r[2]=d*_+p*b+g*D,r[5]=d*m+p*y+g*L,r[8]=d*f+p*M+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(no.makeScale(t,e)),this}rotate(t){return this.premultiply(no.makeRotation(-t)),this}translate(t,e){return this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const no=new Ht;function xh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){const i=Pr("canvas");return i.style.display="block",i}const Pl={};function _s(i){i in Pl||(Pl[i]=!0,console.warn(i))}function ed(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function nd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function id(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vn?qr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ll=[.64,.33,.3,.6,.15,.06],Dl=[.2126,.7152,.0722],Il=[.3127,.329],Ul=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[ns]:{primaries:Ll,whitePoint:Il,transfer:qr,toXYZ:Ul,fromXYZ:Fl,luminanceCoefficients:Dl,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:Ll,whitePoint:Il,transfer:Qt,toXYZ:Ul,fromXYZ:Fl,luminanceCoefficients:Dl,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});let _i;class sd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Pr("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rn(e[n]/255)*255):e[n]=Rn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rd=0;class Mh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Cn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(io(s[o].image)):r.push(io(s[o]))}else r=io(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let od=0;class Fe extends pi{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=He,s=He,r=be,o=li,a=rn,l=Ln,c=Fe.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Cn(),this.name="",this.source=new Mh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=oh;Fe.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(p+1)/2,D=(f+1)/2,L=(h+d)/4,R=(u+_)/4,I=(g+m)/4;return y>M&&y>D?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=L/n,r=R/n):M>D?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=L/s,r=I/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=I/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ad extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends ad{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yh extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ld extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,b=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const D=Math.sqrt(y),L=Math.atan2(D,f*b);m=Math.sin(m*L)/D,a=Math.sin(a*L)/D}const M=a*b;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+_*M,m===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return so.copy(this).projectOnVector(t),this.sub(so)}reflect(t){return this.sub(so.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const so=new C,Nl=new di;class Us{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qe):Qe.fromBufferAttribute(r,o),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),zs.subVectors(this.max,os),vi.subVectors(t.a,os),xi.subVectors(t.b,os),Mi.subVectors(t.c,os),Un.subVectors(xi,vi),Fn.subVectors(Mi,xi),Qn.subVectors(vi,Mi);let e=[0,-Un.z,Un.y,0,-Fn.z,Fn.y,0,-Qn.z,Qn.y,Un.z,0,-Un.x,Fn.z,0,-Fn.x,Qn.z,0,-Qn.x,-Un.y,Un.x,0,-Fn.y,Fn.x,0,-Qn.y,Qn.x,0];return!ro(e,vi,xi,Mi,zs)||(e=[1,0,0,0,1,0,0,0,1],!ro(e,vi,xi,Mi,zs))?!1:(ks.crossVectors(Un,Fn),e=[ks.x,ks.y,ks.z],ro(e,vi,xi,Mi,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new C,new C,new C,new C,new C,new C,new C,new C],Qe=new C,Bs=new Us,vi=new C,xi=new C,Mi=new C,Un=new C,Fn=new C,Qn=new C,os=new C,zs=new C,ks=new C,ti=new C;function ro(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ti.fromArray(i,r);const a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const cd=new Us,as=new C,oo=new C;class $r{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);const e=as.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(oo)),this.expandByPoint(as.copy(t.center).sub(oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new C,ao=new C,Gs=new C,Nn=new C,lo=new C,Hs=new C,co=new C;class nl{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ao.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(ao);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Gs),a=Nn.dot(this.direction),l=-Nn.dot(Gs),c=Nn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ao).addScaledVector(Gs,d),p}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){lo.subVectors(e,t),Hs.subVectors(n,t),co.crossVectors(lo,Hs);let o=this.direction.dot(co),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,t);const l=a*this.direction.dot(Hs.crossVectors(Nn,Hs));if(l<0)return null;const c=a*this.direction.dot(lo.cross(Nn));if(c<0||l+c>o)return null;const h=-a*Nn.dot(co);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),o=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hd,t,ud)}lookAt(t,e,n){const s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),On.crossVectors(n,ze),On.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),On.crossVectors(n,ze)),On.normalize(),Vs.crossVectors(ze,On),s[0]=On.x,s[4]=Vs.x,s[8]=ze.x,s[1]=On.y,s[5]=Vs.y,s[9]=ze.y,s[2]=On.z,s[6]=Vs.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],b=n[3],y=n[7],M=n[11],D=n[15],L=s[0],R=s[4],I=s[8],E=s[12],x=s[1],A=s[5],z=s[9],O=s[13],G=s[2],q=s[6],X=s[10],j=s[14],W=s[3],ht=s[7],tt=s[11],lt=s[15];return r[0]=o*L+a*x+l*G+c*W,r[4]=o*R+a*A+l*q+c*ht,r[8]=o*I+a*z+l*X+c*tt,r[12]=o*E+a*O+l*j+c*lt,r[1]=h*L+u*x+d*G+p*W,r[5]=h*R+u*A+d*q+p*ht,r[9]=h*I+u*z+d*X+p*tt,r[13]=h*E+u*O+d*j+p*lt,r[2]=g*L+_*x+m*G+f*W,r[6]=g*R+_*A+m*q+f*ht,r[10]=g*I+_*z+m*X+f*tt,r[14]=g*E+_*O+m*j+f*lt,r[3]=b*L+y*x+M*G+D*W,r[7]=b*R+y*A+M*q+D*ht,r[11]=b*I+y*z+M*X+D*tt,r[15]=b*E+y*O+M*j+D*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],b=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,y=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,M=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,D=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,L=e*b+n*y+s*M+r*D;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return t[0]=b*R,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*R,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*R,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*R,t[4]=y*R,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*R,t[8]=M*R,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*R,t[12]=D*R,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,b=l*c,y=l*h,M=l*u,D=n.x,L=n.y,R=n.z;return s[0]=(1-(_+f))*D,s[1]=(p+M)*D,s[2]=(g-y)*D,s[3]=0,s[4]=(p-M)*L,s[5]=(1-(d+f))*L,s[6]=(m+b)*L,s[7]=0,s[8]=(g+y)*R,s[9]=(m-b)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=yi.set(s[0],s[1],s[2]).length();const o=yi.set(s[4],s[5],s[6]).length(),a=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);const c=1/r,h=1/o,u=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=wn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===wn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Rr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let g,_;if(a===wn)g=(o+r)*u,_=-2*u;else if(a===Rr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new C,tn=new ie,hd=new C(0,0,0),ud=new C(1,1,1),On=new C,Vs=new C,ze=new C,Ol=new ie,Bl=new di;class Ve{constructor(t=0,e=0,n=0,s=Ve.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ve.DEFAULT_ORDER="XYZ";class Sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dd=0;const zl=new C,Si=new di,vn=new ie,Ws=new C,ls=new C,fd=new C,pd=new di,kl=new C(1,0,0),Gl=new C(0,1,0),Hl=new C(0,0,1),Vl={type:"added"},md={type:"removed"},Ei={type:"childadded",child:null},ho={type:"childremoved",child:null};class xe extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new C,e=new Ve,n=new di,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ht}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ls,Ws,this.up):vn.lookAt(Ws,ls,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(vn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(md),ho.child=t,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}xe.DEFAULT_UP=new C(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new C,xn=new C,uo=new C,Mn=new C,Ti=new C,bi=new C,Wl=new C,fo=new C,po=new C,mo=new C,go=new ne,_o=new ne,vo=new ne;class $e{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),xn.subVectors(n,e),uo.subVectors(t,e);const o=en.dot(en),a=en.dot(xn),l=en.dot(uo),c=xn.dot(xn),h=xn.dot(uo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return go.setScalar(0),_o.setScalar(0),vo.setScalar(0),go.fromBufferAttribute(t,e),_o.fromBufferAttribute(t,n),vo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(go,r.x),o.addScaledVector(_o,r.y),o.addScaledVector(vo,r.z),o}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),xn.subVectors(t,e),en.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),en.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ti.subVectors(s,n),bi.subVectors(r,n),fo.subVectors(t,n);const l=Ti.dot(fo),c=bi.dot(fo);if(l<=0&&c<=0)return e.copy(n);po.subVectors(t,s);const h=Ti.dot(po),u=bi.dot(po);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ti,o);mo.subVectors(t,r);const p=Ti.dot(mo),g=bi.dot(mo);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(bi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Wl.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Wl,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Ti,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Ju(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xo(o,r,t+1/3),this.g=xo(o,r,t),this.b=xo(o,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=Eh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return $t.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Te(Ce.r*255,0,255))*65536+Math.round(Te(Ce.g*255,0,255))*256+Math.round(Te(Ce.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=qe){$t.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Xs);const n=eo(Bn.h,Xs.h,e),s=eo(Bn.s,Xs.s,e),r=eo(Bn.l,Xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Xt;Xt.NAMES=Eh;let gd=0;class jn extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Cn(),this.name="",this.blending=Wi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=qo,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class il extends jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new C,Ys=new ct;class ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==La&&(t.usage=this.usage),t}}class Th extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bh extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _d=0;const Xe=new ie,Mo=new xe,wi=new C,ke=new Us,cs=new Us,Se=new C;class Ke extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xh(t)?bh:Th)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Mo.lookAt(t),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(ke.min,cs.min),ke.expandByPoint(Se),Se.addVectors(ke.max,cs.max),ke.expandByPoint(Se)):(ke.expandByPoint(cs.min),ke.expandByPoint(cs.max))}ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(wi.fromBufferAttribute(t,c),Se.add(wi)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new C,l[I]=new C;const c=new C,h=new C,u=new C,d=new ct,p=new ct,g=new ct,_=new C,m=new C;function f(I,E,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),a[I].add(_),a[E].add(_),a[x].add(_),l[I].add(m),l[E].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,E=b.length;I<E;++I){const x=b[I],A=x.start,z=x.count;for(let O=A,G=A+z;O<G;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new C,M=new C,D=new C,L=new C;function R(I){D.fromBufferAttribute(s,I),L.copy(D);const E=a[I];y.copy(E),y.sub(D.multiplyScalar(D.dot(E))).normalize(),M.crossVectors(L,E);const A=M.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,A)}for(let I=0,E=b.length;I<E;++I){const x=b[I],A=x.start,z=x.count;for(let O=A,G=A+z;O<G;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ln(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new ie,ei=new nl,qs=new $r,Yl=new C,$s=new C,Zs=new C,Ks=new C,yo=new C,js=new C,ql=new C,Js=new C;class gt extends xe{constructor(t=new Ke,e=new il){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(yo.fromBufferAttribute(u,t),o?js.addScaledVector(yo,h):js.addScaledVector(yo.sub(e),h))}e.add(js)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(qs.containsPoint(ei.origin)===!1&&(ei.intersectSphere(qs,Yl)===null||ei.origin.distanceToSquared(Yl)>(t.far-t.near)**2))&&(Xl.copy(r).invert(),ei.copy(t.ray).applyMatrix4(Xl),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,D=y;M<D;M+=3){const L=a.getX(M),R=a.getX(M+1),I=a.getX(M+2);s=Qs(this,f,t,n,c,h,u,L,R,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=Qs(this,o,t,n,c,h,u,b,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,D=y;M<D;M+=3){const L=M,R=M+1,I=M+2;s=Qs(this,f,t,n,c,h,u,L,R,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=m,y=m+1,M=m+2;s=Qs(this,o,t,n,c,h,u,b,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vd(i,t,e,n,s,r,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Zn,a),l===null)return null;Js.copy(a),Js.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Js);return c<e.near||c>e.far?null:{distance:c,point:Js.clone(),object:i}}function Qs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,$s),i.getVertexPosition(l,Zs),i.getVertexPosition(c,Ks);const h=vd(i,t,e,n,$s,Zs,Ks,ql);if(h){const u=new C;$e.getBarycoord(ql,$s,Zs,Ks,u),s&&(h.uv=$e.getInterpolatedAttribute(s,a,l,c,u,new ct)),r&&(h.uv1=$e.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=$e.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new C,materialIndex:0};$e.getNormal($s,Zs,Ks,d.normal),h.face=d,h.barycoord=u}return h}class fe extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function g(_,m,f,b,y,M,D,L,R,I,E){const x=M/R,A=D/I,z=M/2,O=D/2,G=L/2,q=R+1,X=I+1;let j=0,W=0;const ht=new C;for(let tt=0;tt<X;tt++){const lt=tt*A-O;for(let K=0;K<q;K++){const st=K*x-z;ht[_]=st*b,ht[m]=lt*y,ht[f]=G,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[f]=L>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(K/R),u.push(1-tt/I),j+=1}}for(let tt=0;tt<I;tt++)for(let lt=0;lt<R;lt++){const K=d+lt+q*tt,st=d+lt+q*(tt+1),B=d+(lt+1)+q*(tt+1),Y=d+(lt+1)+q*tt;l.push(K,st,Y),l.push(st,B,Y),W+=6}a.addGroup(p,W,E),p+=W,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=Qi(i[e]);for(const s in n)t[s]=n[s]}return t}function xd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Md={clone:Qi,merge:De};var yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yd,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ah extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new C,$l=new ct,Zl=new ct;class Ge extends Ah{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,$l,Zl),e.subVectors(Zl,$l)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ci=1;class Ed extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(Ai,Ci,t,e);s.layers=this.layers,this.add(s);const r=new Ge(Ai,Ci,t,e);r.layers=this.layers,this.add(r);const o=new Ge(Ai,Ci,t,e);o.layers=this.layers,this.add(o);const a=new Ge(Ai,Ci,t,e);a.layers=this.layers,this.add(a);const l=new Ge(Ai,Ci,t,e);l.layers=this.layers,this.add(l);const c=new Ge(Ai,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ch extends Fe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Td extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ch(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fe(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Yn});r.uniforms.tEquirect.value=e;const o=new gt(s,r),a=e.minFilter;return e.minFilter===li&&(e.minFilter=be),new Ed(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const So=new C,bd=new C,wd=new Ht;class Hn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=So.subVectors(n,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(So),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wd.getNormalMatrix(t),s=this.coplanarPoint(So).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new $r,tr=new C;class sl{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],b=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-p,M-f).normalize(),n[1].setComponents(l+r,d+c,m+p,M+f).normalize(),n[2].setComponents(l+o,d+h,m+g,M+b).normalize(),n[3].setComponents(l-o,d-h,m-g,M-b).normalize(),n[4].setComponents(l-a,d-u,m-_,M-y).normalize(),e===wn)n[5].setComponents(l+a,d+u,m+_,M+y).normalize();else if(e===Rr)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(tr.x=s.normal.x>0?t.max.x:t.min.x,tr.y=s.normal.y>0?t.max.y:t.min.y,tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ad(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class $n extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const b=f*d-o;for(let y=0;y<c;y++){const M=y*u-r;g.push(M,-b,0),_.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const y=b+c*f,M=b+c*(f+1),D=b+1+c*(f+1),L=b+1+c*f;p.push(y,M,L),p.push(M,D,L)}this.setIndex(p),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.widthSegments,t.heightSegments)}}var Cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rd=`#ifdef USE_ALPHAHASH
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
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
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
#endif`,Fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nd=`#ifdef USE_BATCHING
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
#endif`,Od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gd=`#ifdef USE_IRIDESCENCE
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
#endif`,Hd=`#ifdef USE_BUMPMAP
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jd=`#define PI 3.141592653589793
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
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qd=`vec3 transformedNormal = objectNormal;
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
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gf=`#ifdef USE_GRADIENTMAP
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
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mf=`uniform bool receiveShadow;
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
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wf=`PhysicalMaterial material;
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
#endif`,Af=`struct PhysicalMaterial {
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
}`,Cf=`
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
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Df=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bf=`#if defined( USE_POINTS_UV )
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
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
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
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jf=`#ifdef USE_NORMALMAP
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
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fp=`float getShadowMask() {
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
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rp=`uniform sampler2D t2D;
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`#include <common>
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
}`,Fp=`#if DEPTH_PACKING == 3200
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
}`,Np=`#define DISTANCE
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
}`,Op=`#define DISTANCE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`uniform float scale;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define LAMBERT
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
}`,Yp=`#define MATCAP
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
}`,qp=`#define MATCAP
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
}`,$p=`#define NORMAL
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
}`,Zp=`#define NORMAL
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
}`,Kp=`#define PHONG
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
}`,jp=`#define PHONG
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
}`,Jp=`#define STANDARD
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
}`,Qp=`#define STANDARD
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
}`,tm=`#define TOON
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
}`,em=`#define TOON
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
}`,nm=`uniform float size;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,am=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Cd,alphahash_pars_fragment:Rd,alphamap_fragment:Pd,alphamap_pars_fragment:Ld,alphatest_fragment:Dd,alphatest_pars_fragment:Id,aomap_fragment:Ud,aomap_pars_fragment:Fd,batching_pars_vertex:Nd,batching_vertex:Od,begin_vertex:Bd,beginnormal_vertex:zd,bsdfs:kd,iridescence_fragment:Gd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Wd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:Yd,color_fragment:qd,color_pars_fragment:$d,color_pars_vertex:Zd,color_vertex:Kd,common:jd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:tf,displacementmap_vertex:ef,emissivemap_fragment:nf,emissivemap_pars_fragment:sf,colorspace_fragment:rf,colorspace_pars_fragment:of,envmap_fragment:af,envmap_common_pars_fragment:lf,envmap_pars_fragment:cf,envmap_pars_vertex:hf,envmap_physical_pars_fragment:yf,envmap_vertex:uf,fog_vertex:df,fog_pars_vertex:ff,fog_fragment:pf,fog_pars_fragment:mf,gradientmap_pars_fragment:gf,lightmap_pars_fragment:_f,lights_lambert_fragment:vf,lights_lambert_pars_fragment:xf,lights_pars_begin:Mf,lights_toon_fragment:Sf,lights_toon_pars_fragment:Ef,lights_phong_fragment:Tf,lights_phong_pars_fragment:bf,lights_physical_fragment:wf,lights_physical_pars_fragment:Af,lights_fragment_begin:Cf,lights_fragment_maps:Rf,lights_fragment_end:Pf,logdepthbuf_fragment:Lf,logdepthbuf_pars_fragment:Df,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Uf,map_fragment:Ff,map_pars_fragment:Nf,map_particle_fragment:Of,map_particle_pars_fragment:Bf,metalnessmap_fragment:zf,metalnessmap_pars_fragment:kf,morphinstance_vertex:Gf,morphcolor_vertex:Hf,morphnormal_vertex:Vf,morphtarget_pars_vertex:Wf,morphtarget_vertex:Xf,normal_fragment_begin:Yf,normal_fragment_maps:qf,normal_pars_fragment:$f,normal_pars_vertex:Zf,normal_vertex:Kf,normalmap_pars_fragment:jf,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:tp,iridescence_pars_fragment:ep,opaque_fragment:np,packing:ip,premultiplied_alpha_fragment:sp,project_vertex:rp,dithering_fragment:op,dithering_pars_fragment:ap,roughnessmap_fragment:lp,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:hp,shadowmap_pars_vertex:up,shadowmap_vertex:dp,shadowmask_pars_fragment:fp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:gp,skinnormal_vertex:_p,specularmap_fragment:vp,specularmap_pars_fragment:xp,tonemapping_fragment:Mp,tonemapping_pars_fragment:yp,transmission_fragment:Sp,transmission_pars_fragment:Ep,uv_pars_fragment:Tp,uv_pars_vertex:bp,uv_vertex:wp,worldpos_vertex:Ap,background_vert:Cp,background_frag:Rp,backgroundCube_vert:Pp,backgroundCube_frag:Lp,cube_vert:Dp,cube_frag:Ip,depth_vert:Up,depth_frag:Fp,distanceRGBA_vert:Np,distanceRGBA_frag:Op,equirect_vert:Bp,equirect_frag:zp,linedashed_vert:kp,linedashed_frag:Gp,meshbasic_vert:Hp,meshbasic_frag:Vp,meshlambert_vert:Wp,meshlambert_frag:Xp,meshmatcap_vert:Yp,meshmatcap_frag:qp,meshnormal_vert:$p,meshnormal_frag:Zp,meshphong_vert:Kp,meshphong_frag:jp,meshphysical_vert:Jp,meshphysical_frag:Qp,meshtoon_vert:tm,meshtoon_frag:em,points_vert:nm,points_frag:im,shadow_vert:sm,shadow_frag:rm,sprite_vert:om,sprite_frag:am},vt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},hn={basic:{uniforms:De([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:De([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:De([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:De([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:De([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:De([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:De([vt.points,vt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:De([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:De([vt.common,vt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:De([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:De([vt.sprite,vt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:De([vt.common,vt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:De([vt.lights,vt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};hn.physical={uniforms:De([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const er={r:0,b:0,g:0},ii=new Ve,lm=new ie;function cm(i,t,e,n,s,r,o){const a=new Xt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function _(b){let y=!1;const M=g(b);M===null?f(a,l):M&&M.isColor&&(f(M,1),y=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===Yr)?(h===void 0&&(h=new gt(new fe(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Qi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(y.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lm.makeRotationFromEuler(ii)),h.material.toneMapped=$t.getTransfer(M.colorSpace)!==Qt,(u!==M||d!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new gt(new $n(2,2),new Kn({name:"BackgroundMaterial",uniforms:Qi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$t.getTransfer(M.colorSpace)!==Qt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,y){b.getRGB(er,wh(i)),n.buffers.color.setClear(er.r,er.g,er.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:_,addToRenderList:m}}function hm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,A,z,O,G){let q=!1;const X=u(O,z,A);r!==X&&(r=X,c(r.object)),q=p(x,O,z,G),q&&g(x,O,z,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(x,A,z,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,A,z){const O=z.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let q=G[A.id];q===void 0&&(q={},G[A.id]=q);let X=q[O];return X===void 0&&(X=d(l()),q[O]=X),X}function d(x){const A=[],z=[],O=[];for(let G=0;G<e;G++)A[G]=0,z[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:O,object:x,attributes:{},index:null}}function p(x,A,z,O){const G=r.attributes,q=A.attributes;let X=0;const j=z.getAttributes();for(const W in j)if(j[W].location>=0){const tt=G[W];let lt=q[W];if(lt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),tt===void 0||tt.attribute!==lt||lt&&tt.data!==lt.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function g(x,A,z,O){const G={},q=A.attributes;let X=0;const j=z.getAttributes();for(const W in j)if(j[W].location>=0){let tt=q[W];tt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor));const lt={};lt.attribute=tt,tt&&tt.data&&(lt.data=tt.data),G[W]=lt,X++}r.attributes=G,r.attributesNum=X,r.index=O}function _(){const x=r.newAttributes;for(let A=0,z=x.length;A<z;A++)x[A]=0}function m(x){f(x,0)}function f(x,A){const z=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;z[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),G[x]!==A&&(i.vertexAttribDivisor(x,A),G[x]=A)}function b(){const x=r.newAttributes,A=r.enabledAttributes;for(let z=0,O=A.length;z<O;z++)A[z]!==x[z]&&(i.disableVertexAttribArray(z),A[z]=0)}function y(x,A,z,O,G,q,X){X===!0?i.vertexAttribIPointer(x,A,z,G,q):i.vertexAttribPointer(x,A,z,O,G,q)}function M(x,A,z,O){_();const G=O.attributes,q=z.getAttributes(),X=A.defaultAttributeValues;for(const j in q){const W=q[j];if(W.location>=0){let ht=G[j];if(ht===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),ht!==void 0){const tt=ht.normalized,lt=ht.itemSize,K=t.get(ht);if(K===void 0)continue;const st=K.buffer,B=K.type,Y=K.bytesPerElement,it=B===i.INT||B===i.UNSIGNED_INT||ht.gpuType===Ka;if(ht.isInterleavedBufferAttribute){const rt=ht.data,_t=rt.stride,xt=ht.offset;if(rt.isInstancedInterleavedBuffer){for(let ft=0;ft<W.locationSize;ft++)f(W.location+ft,rt.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ft=0;ft<W.locationSize;ft++)m(W.location+ft);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ft=0;ft<W.locationSize;ft++)y(W.location+ft,lt/W.locationSize,B,tt,_t*Y,(xt+lt/W.locationSize*ft)*Y,it)}else{if(ht.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)f(W.location+rt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let rt=0;rt<W.locationSize;rt++)m(W.location+rt);i.bindBuffer(i.ARRAY_BUFFER,st);for(let rt=0;rt<W.locationSize;rt++)y(W.location+rt,lt/W.locationSize,B,tt,lt*Y,lt/W.locationSize*rt*Y,it)}}else if(X!==void 0){const tt=X[j];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(W.location,tt);break;case 3:i.vertexAttrib3fv(W.location,tt);break;case 4:i.vertexAttrib4fv(W.location,tt);break;default:i.vertexAttrib1fv(W.location,tt)}}}}b()}function D(){I();for(const x in n){const A=n[x];for(const z in A){const O=A[z];for(const G in O)h(O[G].object),delete O[G];delete A[z]}delete n[x]}}function L(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const z in A){const O=A[z];for(const G in O)h(O[G].object),delete O[G];delete A[z]}delete n[x.id]}function R(x){for(const A in n){const z=n[A];if(z[x.id]===void 0)continue;const O=z[x.id];for(const G in O)h(O[G].object),delete O[G];delete z[x.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function um(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===Is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==bn&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:D,maxSamples:L}}function fm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Hn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,y=b*4;let M=f.clippingState||null;l.value=M,M=h(g,d,y,p);for(let D=0;D!==y;++D)M[D]=e[D];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==_;++y,M+=4)o.copy(u[y]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function pm(i){let t=new WeakMap;function e(o,a){return a===ea?o.mapping=Zi:a===na&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ea||a===na)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Td(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ph extends Ah{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zi=4,Kl=[.125,.215,.35,.446,.526,.582],ai=20,Eo=new Ph,jl=new Xt;let To=null,bo=0,wo=0,Ao=!1;const ri=(1+Math.sqrt(5))/2,Ri=1/ri,Jl=[new C(-ri,Ri,0),new C(ri,Ri,0),new C(-Ri,0,ri),new C(Ri,0,ri),new C(0,ri,-Ri),new C(0,ri,Ri),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Ia{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){To=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(To,bo,wo),this._renderer.xr.enabled=Ao,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:be,minFilter:be,generateMipmaps:!1,type:Is,format:rn,colorSpace:ns,depthBuffer:!1},s=Ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(r)),this._blurMaterial=gm(r,t,e)}return s}_compileMaterial(t){const e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,n,s){const a=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jl),h.toneMapping=qn,h.autoClear=!1;const p=new il({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new gt(new fe,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(jl),_=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;nr(s,b*y,f>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Zi||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Eo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jl[(s-r-1)%Jl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new gt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ai-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const f=[];let b=0;for(let R=0;R<ai;++R){const I=R/_,E=Math.exp(-I*I/2);f.push(E),R===0?b+=E:R<m&&(b+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const M=this._sizeLods[s],D=3*M*(s>y-zi?s-y+zi:0),L=4*(this._cubeSize-M);nr(e,D,L,3*M,2*M),l.setRenderTarget(e),l.render(u,Eo)}}function mm(i){const t=[],e=[],n=[];let s=i;const r=i-zi+1+Kl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-zi?l=Kl[o-i+zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,b=new Float32Array(_*g*p),y=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let L=0;L<p;L++){const R=L%3*2/3-1,I=L>2?0:-1,E=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];b.set(E,_*g*L),y.set(d,m*g*L);const x=[L,L,L,L,L,L];M.set(x,f*g*L)}const D=new Ke;D.setAttribute("position",new ln(b,_)),D.setAttribute("uv",new ln(y,m)),D.setAttribute("faceIndex",new ln(M,f)),t.push(D),s>zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ql(i,t,e){const n=new ui(i,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gm(i,t,e){const n=new Float32Array(ai),s=new C(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function tc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ec(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function rl(){return`

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
	`}function _m(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ea||l===na,h=l===Zi||l===Ki;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ia(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ia(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&_s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let y=0,M=b.length;y<M;y+=3){const D=b[y+0],L=b[y+1],R=b[y+2];d.push(D,L,L,R,R,D)}}else if(g!==void 0){const b=g.array;_=g.version;for(let y=0,M=b.length/3-1;y<M;y+=3){const D=y+0,L=y+1,R=y+2;d.push(D,L,L,R,R,D)}}else return;const m=new(xh(d)?bh:Th)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Mm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*_[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ym(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sm(i,t,e){const n=new WeakMap,s=new ne;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let D=a.attributes.position.count*M,L=1;D>t.maxTextureSize&&(L=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const R=new Float32Array(D*L*4*u),I=new yh(R,D,L,u);I.type=bn,I.needsUpdate=!0;const E=M*4;for(let A=0;A<u;A++){const z=f[A],O=b[A],G=y[A],q=D*L*4*A;for(let X=0;X<z.count;X++){const j=X*E;g===!0&&(s.fromBufferAttribute(z,X),R[q+j+0]=s.x,R[q+j+1]=s.y,R[q+j+2]=s.z,R[q+j+3]=0),_===!0&&(s.fromBufferAttribute(O,X),R[q+j+4]=s.x,R[q+j+5]=s.y,R[q+j+6]=s.z,R[q+j+7]=0),m===!0&&(s.fromBufferAttribute(G,X),R[q+j+8]=s.x,R[q+j+9]=s.y,R[q+j+10]=s.z,R[q+j+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new ct(D,L)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Em(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Lh extends Fe{constructor(t,e,n,s,r,o,a,l,c,h=Xi){if(h!==Xi&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=hi),n===void 0&&h===Ji&&(n=ji),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Dh=new Fe,nc=new Lh(1,1),Ih=new yh,Uh=new ld,Fh=new Ch,ic=[],sc=[],rc=new Float32Array(16),oc=new Float32Array(9),ac=new Float32Array(4);function is(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ic[s];if(r===void 0&&(r=new Float32Array(s),ic[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zr(i,t){let e=sc[t];e===void 0&&(e=new Int32Array(t),sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),ye(e,n)}}function Rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;oc.set(n),i.uniformMatrix3fv(this.addr,!1,oc),ye(e,n)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;rc.set(n),i.uniformMatrix4fv(this.addr,!1,rc),ye(e,n)}}function Lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function Fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nc.compareFunction=vh,r=nc):r=Dh,e.setTexture2D(t||r,s)}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uh,s)}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fh,s)}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ih,s)}function Vm(i){switch(i){case 5126:return Tm;case 35664:return bm;case 35665:return wm;case 35666:return Am;case 35674:return Cm;case 35675:return Rm;case 35676:return Pm;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Im;case 35669:case 35673:return Um;case 5125:return Fm;case 36294:return Nm;case 36295:return Om;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Hm}}function Wm(i,t){i.uniform1fv(this.addr,t)}function Xm(i,t){const e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function Ym(i,t){const e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function qm(i,t){const e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function $m(i,t){const e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zm(i,t){const e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Km(i,t){const e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jm(i,t){i.uniform1iv(this.addr,t)}function Jm(i,t){i.uniform2iv(this.addr,t)}function Qm(i,t){i.uniform3iv(this.addr,t)}function tg(i,t){i.uniform4iv(this.addr,t)}function eg(i,t){i.uniform1uiv(this.addr,t)}function ng(i,t){i.uniform2uiv(this.addr,t)}function ig(i,t){i.uniform3uiv(this.addr,t)}function sg(i,t){i.uniform4uiv(this.addr,t)}function rg(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Dh,r[o])}function og(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Uh,r[o])}function ag(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fh,r[o])}function lg(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ih,r[o])}function cg(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return Ym;case 35666:return qm;case 35674:return $m;case 35675:return Zm;case 35676:return Km;case 5124:case 35670:return jm;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return lg}}class hg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vm(e.type)}}class ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}}class dg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function lc(i,t){i.seq.push(t),i.map[t.id]=t}function fg(i,t,e){const n=i.name,s=n.length;for(Co.lastIndex=0;;){const r=Co.exec(n),o=Co.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lc(e,c===void 0?new hg(a,i,t):new ug(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new dg(a),lc(e,u)),e=u}}}class Ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);fg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function cc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pg=37297;let mg=0;function gg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const hc=new Ht;function _g(i){$t._getMatrix(hc,$t.workingColorSpace,i);const t=`mat3( ${hc.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case qr:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gg(i.getShaderSource(t),o)}else return s}function vg(i,t){const e=_g(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xg(i,t){let e;switch(t){case Fu:e="Linear";break;case Nu:e="Reinhard";break;case Ou:e="Cineon";break;case rh:e="ACESFilmic";break;case zu:e="AgX";break;case ku:e="Neutral";break;case Bu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new C;function Mg(){$t.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function Sg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vs(i){return i!==""}function dc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(i){return i.replace(Tg,wg)}const bg=new Map;function wg(i,t){let e=Wt[t];if(e===void 0){const n=bg.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ua(e)}const Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(i){return i.replace(Ag,Cg)}function Cg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Pg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case Ki:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function Dg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sh:t="ENVMAP_BLENDING_MULTIPLY";break;case Iu:t="ENVMAP_BLENDING_MIX";break;case Uu:t="ENVMAP_BLENDING_ADD";break}return t}function Ig(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ug(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Rg(e),c=Pg(e),h=Lg(e),u=Dg(e),d=Ig(e),p=yg(e),g=Sg(r),_=s.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vs).join(`
`),f.length>0&&(f+=`
`)):(m=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),f=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==qn?xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),Mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),o=Ua(o),o=dc(o,e),o=fc(o,e),a=Ua(a),a=dc(a,e),a=fc(a,e),o=pc(o),a=pc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=b+m+o,M=b+f+a,D=cc(s,s.VERTEX_SHADER,y),L=cc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,D),s.attachShader(_,L),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(A){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(D).trim(),G=s.getShaderInfoLog(L).trim();let q=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,L);else{const j=uc(s,D,"vertex"),W=uc(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+j+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||G==="")&&(X=!1);X&&(A.diagnostics={runnable:q,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:f}})}s.deleteShader(D),s.deleteShader(L),I=new Ar(s,_),E=Eg(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,pg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=L,this}let Fg=0;class Ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Og(t),e.set(t,n)),n}}class Og{constructor(t){this.id=Fg++,this.code=t,this.usedTimes=0}}function Bg(i,t,e,n,s,r,o){const a=new Sh,l=new Ng,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,A,z,O){const G=z.fog,q=O.geometry,X=E.isMeshStandardMaterial?z.environment:null,j=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),W=j&&j.mapping===Yr?j.image.height:null,ht=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const tt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=tt!==void 0?tt.length:0;let K=0;q.morphAttributes.position!==void 0&&(K=1),q.morphAttributes.normal!==void 0&&(K=2),q.morphAttributes.color!==void 0&&(K=3);let st,B,Y,it;if(ht){const Jt=hn[ht];st=Jt.vertexShader,B=Jt.fragmentShader}else st=E.vertexShader,B=E.fragmentShader,l.update(E),Y=l.getVertexShaderID(E),it=l.getFragmentShaderID(E);const rt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),xt=O.isInstancedMesh===!0,ft=O.isBatchedMesh===!0,yt=!!E.map,$=!!E.matcap,et=!!j,w=!!E.aoMap,At=!!E.lightMap,ot=!!E.bumpMap,mt=!!E.normalMap,ut=!!E.displacementMap,Nt=!!E.emissiveMap,St=!!E.metalnessMap,T=!!E.roughnessMap,v=E.anisotropy>0,k=E.clearcoat>0,J=E.dispersion>0,at=E.iridescence>0,Q=E.sheen>0,Lt=E.transmission>0,Mt=v&&!!E.anisotropyMap,Ct=k&&!!E.clearcoatMap,Yt=k&&!!E.clearcoatNormalMap,dt=k&&!!E.clearcoatRoughnessMap,Rt=at&&!!E.iridescenceMap,Ot=at&&!!E.iridescenceThicknessMap,Bt=Q&&!!E.sheenColorMap,Pt=Q&&!!E.sheenRoughnessMap,qt=!!E.specularMap,Vt=!!E.specularColorMap,se=!!E.specularIntensityMap,U=Lt&&!!E.transmissionMap,Et=Lt&&!!E.thicknessMap,Z=!!E.gradientMap,nt=!!E.alphaMap,wt=E.alphaTest>0,Tt=!!E.alphaHash,kt=!!E.extensions;let de=qn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(de=i.toneMapping);const we={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:st,fragmentShader:B,defines:E.defines,customVertexShaderID:Y,customFragmentShaderID:it,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ft,batchingColor:ft&&O._colorsTexture!==null,instancing:xt,instancingColor:xt&&O.instanceColor!==null,instancingMorph:xt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ns,alphaToCoverage:!!E.alphaToCoverage,map:yt,matcap:$,envMap:et,envMapMode:et&&j.mapping,envMapCubeUVHeight:W,aoMap:w,lightMap:At,bumpMap:ot,normalMap:mt,displacementMap:d&&ut,emissiveMap:Nt,normalMapObjectSpace:mt&&E.normalMapType===Wu,normalMapTangentSpace:mt&&E.normalMapType===_h,metalnessMap:St,roughnessMap:T,anisotropy:v,anisotropyMap:Mt,clearcoat:k,clearcoatMap:Ct,clearcoatNormalMap:Yt,clearcoatRoughnessMap:dt,dispersion:J,iridescence:at,iridescenceMap:Rt,iridescenceThicknessMap:Ot,sheen:Q,sheenColorMap:Bt,sheenRoughnessMap:Pt,specularMap:qt,specularColorMap:Vt,specularIntensityMap:se,transmission:Lt,transmissionMap:U,thicknessMap:Et,gradientMap:Z,opaque:E.transparent===!1&&E.blending===Wi&&E.alphaToCoverage===!1,alphaMap:nt,alphaTest:wt,alphaHash:Tt,combine:E.combine,mapUv:yt&&_(E.map.channel),aoMapUv:w&&_(E.aoMap.channel),lightMapUv:At&&_(E.lightMap.channel),bumpMapUv:ot&&_(E.bumpMap.channel),normalMapUv:mt&&_(E.normalMap.channel),displacementMapUv:ut&&_(E.displacementMap.channel),emissiveMapUv:Nt&&_(E.emissiveMap.channel),metalnessMapUv:St&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:Mt&&_(E.anisotropyMap.channel),clearcoatMapUv:Ct&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(E.sheenRoughnessMap.channel),specularMapUv:qt&&_(E.specularMap.channel),specularColorMapUv:Vt&&_(E.specularColorMap.channel),specularIntensityMapUv:se&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:Et&&_(E.thicknessMap.channel),alphaMapUv:nt&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(mt||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(yt||nt),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:_t,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:K,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:yt&&E.map.isVideoTexture===!0&&$t.getTransfer(E.map.colorSpace)===Qt,decodeVideoTextureEmissive:Nt&&E.emissiveMap.isVideoTexture===!0&&$t.getTransfer(E.emissiveMap.colorSpace)===Qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Re,flipSided:E.side===Ue,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:kt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&E.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function f(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const A in E.defines)x.push(A),x.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(b(x,E),y(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function b(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function y(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){const x=g[E.type];let A;if(x){const z=hn[x];A=Md.clone(z.uniforms)}else A=E.uniforms;return A}function D(E,x){let A;for(let z=0,O=h.length;z<O;z++){const G=h[z];if(G.cacheKey===x){A=G,++A.usedTimes;break}}return A===void 0&&(A=new Ug(i,x,E,r),h.push(A)),A}function L(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:D,releaseProgram:L,releaseShaderCache:R,programs:h,dispose:I}}function zg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function kg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _c(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||kg),n.length>1&&n.sort(d||gc),s.length>1&&s.sort(d||gc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Gg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new _c,i.set(n,[o])):s>=r.length?(o=new _c,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Xt};break;case"SpotLight":e={position:new C,direction:new C,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wg=0;function Xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yg(i){const t=new Hg,e=Vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new ie,o=new ie;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,b=0,y=0,M=0,D=0,L=0,R=0;c.sort(Xg);for(let E=0,x=c.length;E<x;E++){const A=c[E],z=A.color,O=A.intensity,G=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(A.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(A.sh.coefficients[X],O);R++}else if(A.isDirectionalLight){const X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const j=A.shadow,W=e.get(A);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=A.shadow.matrix,b++}n.directional[p]=X,p++}else if(A.isSpotLight){const X=t.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(z).multiplyScalar(O),X.distance=G,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,n.spot[_]=X;const j=A.shadow;if(A.map&&(n.spotLightMap[D]=A.map,D++,j.updateMatrices(A),A.castShadow&&L++),n.spotLightMatrix[_]=j.matrix,A.castShadow){const W=e.get(A);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=q,M++}_++}else if(A.isRectAreaLight){const X=t.get(A);X.color.copy(z).multiplyScalar(O),X.halfWidth.set(A.width*.5,0,0),X.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=X,m++}else if(A.isPointLight){const X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){const j=A.shadow,W=e.get(A);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=A.shadow.matrix,y++}n.point[g]=X,g++}else if(A.isHemisphereLight){const X=t.get(A);X.skyColor.copy(A.color).multiplyScalar(O),X.groundColor.copy(A.groundColor).multiplyScalar(O),n.hemi[f]=X,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==b||I.numPointShadows!==y||I.numSpotShadows!==M||I.numSpotMaps!==D||I.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+D-L,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=b,I.numPointShadows=y,I.numSpotShadows=M,I.numSpotMaps=D,I.numLightProbes=R,n.version=Wg++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const y=c[f];if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(y.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function vc(i){const t=new Yg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new vc(i),t.set(s,[a])):r>=o.length?(a=new vc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class $g extends jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zg extends jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
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
}`;function Jg(i,t,e){let n=new sl;const s=new ct,r=new ct,o=new ne,a=new $g({depthPacking:Vu}),l=new Zg,c={},h=e.maxTextureSize,u={[Zn]:Ue,[Ue]:Zn,[Re]:Re},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Kg,fragmentShader:jg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let f=this.type;this.render=function(L,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Yn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=f!==Sn&&this.type===Sn,G=f===Sn&&this.type!==Sn;for(let q=0,X=L.length;q<X;q++){const j=L[q],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ht=W.getFrameExtents();if(s.multiply(ht),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,W.mapSize.y=r.y)),W.map===null||O===!0||G===!0){const lt=this.type!==Sn?{minFilter:an,magFilter:an}:{};W.map!==null&&W.map.dispose(),W.map=new ui(s.x,s.y,lt),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const tt=W.getViewportCount();for(let lt=0;lt<tt;lt++){const K=W.getViewport(lt);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(o),W.updateMatrices(j,lt),n=W.getFrustum(),M(R,I,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Sn&&b(W,I),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,x,A)};function b(L,R){const I=t.update(_);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ui(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,_,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(R,null,I,p,_,null)}function y(L,R,I,E){let x=null;const A=I.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(A!==void 0)x=A;else if(x=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=x.uuid,O=R.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let q=G[O];q===void 0&&(q=x.clone(),G[O]=q,R.addEventListener("dispose",D)),x=q}if(x.visible=R.visible,x.wireframe=R.wireframe,E===Sn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=i.properties.get(x);z.light=I}return x}function M(L,R,I,E,x){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&x===Sn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,L.matrixWorld);const O=t.update(L),G=L.material;if(Array.isArray(G)){const q=O.groups;for(let X=0,j=q.length;X<j;X++){const W=q[X],ht=G[W.materialIndex];if(ht&&ht.visible){const tt=y(L,ht,E,x);L.onBeforeShadow(i,L,R,I,O,tt,W),i.renderBufferDirect(I,null,O,tt,L,W),L.onAfterShadow(i,L,R,I,O,tt,W)}}}else if(G.visible){const q=y(L,G,E,x);L.onBeforeShadow(i,L,R,I,O,q,null),i.renderBufferDirect(I,null,O,q,L,null),L.onAfterShadow(i,L,R,I,O,q,null)}}const z=L.children;for(let O=0,G=z.length;O<G;O++)M(z[O],R,I,E,x)}function D(L){L.target.removeEventListener("dispose",D);for(const I in c){const E=c[I],x=L.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const Qg={[$o]:Zo,[Ko]:Qo,[jo]:ta,[$i]:Jo,[Zo]:$o,[Qo]:Ko,[ta]:jo,[Jo]:$i};function t0(i,t){function e(){let U=!1;const Et=new ne;let Z=null;const nt=new ne(0,0,0,0);return{setMask:function(wt){Z!==wt&&!U&&(i.colorMask(wt,wt,wt,wt),Z=wt)},setLocked:function(wt){U=wt},setClear:function(wt,Tt,kt,de,we){we===!0&&(wt*=de,Tt*=de,kt*=de),Et.set(wt,Tt,kt,de),nt.equals(Et)===!1&&(i.clearColor(wt,Tt,kt,de),nt.copy(Et))},reset:function(){U=!1,Z=null,nt.set(-1,0,0,0)}}}function n(){let U=!1,Et=!1,Z=null,nt=null,wt=null;return{setReversed:function(Tt){if(Et!==Tt){const kt=t.get("EXT_clip_control");Et?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const de=wt;wt=null,this.setClear(de)}Et=Tt},getReversed:function(){return Et},setTest:function(Tt){Tt?rt(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(Tt){Z!==Tt&&!U&&(i.depthMask(Tt),Z=Tt)},setFunc:function(Tt){if(Et&&(Tt=Qg[Tt]),nt!==Tt){switch(Tt){case $o:i.depthFunc(i.NEVER);break;case Zo:i.depthFunc(i.ALWAYS);break;case Ko:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case jo:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case Qo:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=Tt}},setLocked:function(Tt){U=Tt},setClear:function(Tt){wt!==Tt&&(Et&&(Tt=1-Tt),i.clearDepth(Tt),wt=Tt)},reset:function(){U=!1,Z=null,nt=null,wt=null,Et=!1}}}function s(){let U=!1,Et=null,Z=null,nt=null,wt=null,Tt=null,kt=null,de=null,we=null;return{setTest:function(Jt){U||(Jt?rt(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Jt){Et!==Jt&&!U&&(i.stencilMask(Jt),Et=Jt)},setFunc:function(Jt,je,pn){(Z!==Jt||nt!==je||wt!==pn)&&(i.stencilFunc(Jt,je,pn),Z=Jt,nt=je,wt=pn)},setOp:function(Jt,je,pn){(Tt!==Jt||kt!==je||de!==pn)&&(i.stencilOp(Jt,je,pn),Tt=Jt,kt=je,de=pn)},setLocked:function(Jt){U=Jt},setClear:function(Jt){we!==Jt&&(i.clearStencil(Jt),we=Jt)},reset:function(){U=!1,Et=null,Z=null,nt=null,wt=null,Tt=null,kt=null,de=null,we=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,y=null,M=null,D=null,L=null,R=new Xt(0,0,0),I=0,E=!1,x=null,A=null,z=null,O=null,G=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=j>=2);let ht=null,tt={};const lt=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),st=new ne().fromArray(lt),B=new ne().fromArray(K);function Y(U,Et,Z,nt){const wt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(U,Tt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Z;kt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(Et+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Tt}const it={};it[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc($i),ot(!1),mt(Tl),rt(i.CULL_FACE),w(Yn);function rt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function _t(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function xt(U,Et){return u[U]!==Et?(i.bindFramebuffer(U,Et),u[U]=Et,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Et),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function ft(U,Et){let Z=p,nt=!1;if(U){Z=d.get(Et),Z===void 0&&(Z=[],d.set(Et,Z));const wt=U.textures;if(Z.length!==wt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,kt=wt.length;Tt<kt;Tt++)Z[Tt]=i.COLOR_ATTACHMENT0+Tt;Z.length=wt.length,nt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Z)}function yt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const $={[oi]:i.FUNC_ADD,[gu]:i.FUNC_SUBTRACT,[_u]:i.FUNC_REVERSE_SUBTRACT};$[vu]=i.MIN,$[xu]=i.MAX;const et={[Mu]:i.ZERO,[yu]:i.ONE,[Su]:i.SRC_COLOR,[Yo]:i.SRC_ALPHA,[Cu]:i.SRC_ALPHA_SATURATE,[wu]:i.DST_COLOR,[Tu]:i.DST_ALPHA,[Eu]:i.ONE_MINUS_SRC_COLOR,[qo]:i.ONE_MINUS_SRC_ALPHA,[Au]:i.ONE_MINUS_DST_COLOR,[bu]:i.ONE_MINUS_DST_ALPHA,[Ru]:i.CONSTANT_COLOR,[Pu]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Du]:i.ONE_MINUS_CONSTANT_ALPHA};function w(U,Et,Z,nt,wt,Tt,kt,de,we,Jt){if(U===Yn){_===!0&&(_t(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),U!==mu){if(U!==m||Jt!==E){if((f!==oi||M!==oi)&&(i.blendEquation(i.FUNC_ADD),f=oi,M=oi),Jt)switch(U){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,y=null,D=null,L=null,R.set(0,0,0),I=0,m=U,E=Jt}return}wt=wt||Et,Tt=Tt||Z,kt=kt||nt,(Et!==f||wt!==M)&&(i.blendEquationSeparate($[Et],$[wt]),f=Et,M=wt),(Z!==b||nt!==y||Tt!==D||kt!==L)&&(i.blendFuncSeparate(et[Z],et[nt],et[Tt],et[kt]),b=Z,y=nt,D=Tt,L=kt),(de.equals(R)===!1||we!==I)&&(i.blendColor(de.r,de.g,de.b,we),R.copy(de),I=we),m=U,E=!1}function At(U,Et){U.side===Re?_t(i.CULL_FACE):rt(i.CULL_FACE);let Z=U.side===Ue;Et&&(Z=!Z),ot(Z),U.blending===Wi&&U.transparent===!1?w(Yn):w(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const nt=U.stencilWrite;a.setTest(nt),nt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(U){x!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),x=U)}function mt(U){U!==fu?(rt(i.CULL_FACE),U!==A&&(U===Tl?i.cullFace(i.BACK):U===pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),A=U}function ut(U){U!==z&&(X&&i.lineWidth(U),z=U)}function Nt(U,Et,Z){U?(rt(i.POLYGON_OFFSET_FILL),(O!==Et||G!==Z)&&(i.polygonOffset(Et,Z),O=Et,G=Z)):_t(i.POLYGON_OFFSET_FILL)}function St(U){U?rt(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+q-1),ht!==U&&(i.activeTexture(U),ht=U)}function v(U,Et,Z){Z===void 0&&(ht===null?Z=i.TEXTURE0+q-1:Z=ht);let nt=tt[Z];nt===void 0&&(nt={type:void 0,texture:void 0},tt[Z]=nt),(nt.type!==U||nt.texture!==Et)&&(ht!==Z&&(i.activeTexture(Z),ht=Z),i.bindTexture(U,Et||it[U]),nt.type=U,nt.texture=Et)}function k(){const U=tt[ht];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(U){st.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),st.copy(U))}function Pt(U){B.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),B.copy(U))}function qt(U,Et){let Z=c.get(Et);Z===void 0&&(Z=new WeakMap,c.set(Et,Z));let nt=Z.get(U);nt===void 0&&(nt=i.getUniformBlockIndex(Et,U.name),Z.set(U,nt))}function Vt(U,Et){const nt=c.get(Et).get(U);l.get(Et)!==nt&&(i.uniformBlockBinding(Et,nt,U.__bindingPointIndex),l.set(Et,nt))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,tt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,y=null,M=null,D=null,L=null,R=new Xt(0,0,0),I=0,E=!1,x=null,A=null,z=null,O=null,G=null,st.set(0,0,i.canvas.width,i.canvas.height),B.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:_t,bindFramebuffer:xt,drawBuffers:ft,useProgram:yt,setBlending:w,setMaterial:At,setFlipSided:ot,setCullFace:mt,setLineWidth:ut,setPolygonOffset:Nt,setScissorTest:St,activeTexture:T,bindTexture:v,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:at,texImage2D:Rt,texImage3D:Ot,updateUBOMapping:qt,uniformBlockBinding:Vt,texStorage2D:Yt,texStorage3D:dt,texSubImage2D:Q,texSubImage3D:Lt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Ct,scissor:Bt,viewport:Pt,reset:se}}function xc(i,t,e,n){const s=e0(n);switch(e){case hh:return i*t;case dh:return i*t;case fh:return i*t*2;case ph:return i*t/s.components*s.byteLength;case Qa:return i*t/s.components*s.byteLength;case mh:return i*t*2/s.components*s.byteLength;case tl:return i*t*2/s.components*s.byteLength;case uh:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case el:return i*t*4/s.components*s.byteLength;case yr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:case la:return Math.max(i,16)*Math.max(t,8)/4;case ra:case aa:return Math.max(i,8)*Math.max(t,8)/2;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case br:case wa:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case gh:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ra:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e0(i){switch(i){case Ln:case ah:return{byteLength:1,components:1};case bs:case lh:case Is:return{byteLength:2,components:1};case ja:case Ja:return{byteLength:2,components:4};case hi:case Ka:case bn:return{byteLength:4,components:1};case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):Pr("canvas")}function _(T,v,k){let J=1;const at=St(T);if((at.width>k||at.height>k)&&(J=k/Math.max(at.width,at.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor(J*at.width),Lt=Math.floor(J*at.height);u===void 0&&(u=g(Q,Lt));const Mt=v?g(Q,Lt):u;return Mt.width=Q,Mt.height=Lt,Mt.getContext("2d").drawImage(T,0,0,Q,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Q+"x"+Lt+")."),Mt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,v,k,J,at=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=v;if(v===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),v===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),v===i.RGBA){const Lt=at?qr:$t.getTransfer(J);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=Lt===Qt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(T,v){let k;return T?v===null||v===hi||v===ji?k=i.DEPTH24_STENCIL8:v===bn?k=i.DEPTH32F_STENCIL8:v===bs&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hi||v===ji?k=i.DEPTH_COMPONENT24:v===bn?k=i.DEPTH_COMPONENT32F:v===bs&&(k=i.DEPTH_COMPONENT16),k}function D(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==an&&T.minFilter!==be?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function L(T){const v=T.target;v.removeEventListener("dispose",L),I(v),v.isVideoTexture&&h.delete(v)}function R(T){const v=T.target;v.removeEventListener("dispose",R),x(v)}function I(T){const v=n.get(T);if(v.__webglInit===void 0)return;const k=T.source,J=d.get(k);if(J){const at=J[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&E(T),Object.keys(J).length===0&&d.delete(k)}n.remove(T)}function E(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const k=T.source,J=d.get(k);delete J[v.__cacheKey],o.memory.textures--}function x(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let at=0;at<v.__webglFramebuffer[J].length;at++)i.deleteFramebuffer(v.__webglFramebuffer[J][at]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=T.textures;for(let J=0,at=k.length;J<at;J++){const Q=n.get(k[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(T)}let A=0;function z(){A=0}function O(){const T=A;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),A+=1,T}function G(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function q(T,v){const k=n.get(T);if(T.isVideoTexture&&ut(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(k,T,v);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function X(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){B(k,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function j(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){B(k,T,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function W(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){Y(k,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const ht={[ia]:i.REPEAT,[He]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},tt={[an]:i.NEAREST,[Gu]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[be]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},lt={[Xu]:i.NEVER,[ju]:i.ALWAYS,[Yu]:i.LESS,[vh]:i.LEQUAL,[qu]:i.EQUAL,[Ku]:i.GEQUAL,[$u]:i.GREATER,[Zu]:i.NOTEQUAL};function K(T,v){if(v.type===bn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===be||v.magFilter===to||v.magFilter===Os||v.magFilter===li||v.minFilter===be||v.minFilter===to||v.minFilter===Os||v.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ht[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ht[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ht[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,tt[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,tt[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,lt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==Os&&v.minFilter!==li||v.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function st(T,v){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",L));const J=v.source;let at=d.get(J);at===void 0&&(at={},d.set(J,at));const Q=G(v);if(Q!==T.__cacheKey){at[Q]===void 0&&(at[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),at[Q].usedTimes++;const Lt=at[T.__cacheKey];Lt!==void 0&&(at[T.__cacheKey].usedTimes--,Lt.usedTimes===0&&E(v)),T.__cacheKey=Q,T.__webglTexture=at[Q].texture}return k}function B(T,v,k){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);const at=st(T,v),Q=v.source;e.bindTexture(J,T.__webglTexture,i.TEXTURE0+k);const Lt=n.get(Q);if(Q.version!==Lt.__version||at===!0){e.activeTexture(i.TEXTURE0+k);const Mt=$t.getPrimaries($t.workingColorSpace),Ct=v.colorSpace===Vn?null:$t.getPrimaries(v.colorSpace),Yt=v.colorSpace===Vn||Mt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let dt=_(v.image,!1,s.maxTextureSize);dt=Nt(v,dt);const Rt=r.convert(v.format,v.colorSpace),Ot=r.convert(v.type);let Bt=y(v.internalFormat,Rt,Ot,v.colorSpace,v.isVideoTexture);K(J,v);let Pt;const qt=v.mipmaps,Vt=v.isVideoTexture!==!0,se=Lt.__version===void 0||at===!0,U=Q.dataReady,Et=D(v,dt);if(v.isDepthTexture)Bt=M(v.format===Ji,v.type),se&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Bt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,dt.width,dt.height,0,Rt,Ot,null));else if(v.isDataTexture)if(qt.length>0){Vt&&se&&e.texStorage2D(i.TEXTURE_2D,Et,Bt,qt[0].width,qt[0].height);for(let Z=0,nt=qt.length;Z<nt;Z++)Pt=qt[Z],Vt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,Rt,Ot,Pt.data):e.texImage2D(i.TEXTURE_2D,Z,Bt,Pt.width,Pt.height,0,Rt,Ot,Pt.data);v.generateMipmaps=!1}else Vt?(se&&e.texStorage2D(i.TEXTURE_2D,Et,Bt,dt.width,dt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Rt,Ot,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,dt.width,dt.height,0,Rt,Ot,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Bt,qt[0].width,qt[0].height,dt.depth);for(let Z=0,nt=qt.length;Z<nt;Z++)if(Pt=qt[Z],v.format!==rn)if(Rt!==null)if(Vt){if(U)if(v.layerUpdates.size>0){const wt=xc(Pt.width,Pt.height,v.format,v.type);for(const Tt of v.layerUpdates){const kt=Pt.data.subarray(Tt*wt/Pt.data.BYTES_PER_ELEMENT,(Tt+1)*wt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Tt,Pt.width,Pt.height,1,Rt,kt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Pt.width,Pt.height,dt.depth,Rt,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Bt,Pt.width,Pt.height,dt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Pt.width,Pt.height,dt.depth,Rt,Ot,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Bt,Pt.width,Pt.height,dt.depth,0,Rt,Ot,Pt.data)}else{Vt&&se&&e.texStorage2D(i.TEXTURE_2D,Et,Bt,qt[0].width,qt[0].height);for(let Z=0,nt=qt.length;Z<nt;Z++)Pt=qt[Z],v.format!==rn?Rt!==null?Vt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,Rt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Bt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,Rt,Ot,Pt.data):e.texImage2D(i.TEXTURE_2D,Z,Bt,Pt.width,Pt.height,0,Rt,Ot,Pt.data)}else if(v.isDataArrayTexture)if(Vt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Bt,dt.width,dt.height,dt.depth),U)if(v.layerUpdates.size>0){const Z=xc(dt.width,dt.height,v.format,v.type);for(const nt of v.layerUpdates){const wt=dt.data.subarray(nt*Z/dt.data.BYTES_PER_ELEMENT,(nt+1)*Z/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,dt.width,dt.height,1,Rt,Ot,wt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Rt,Ot,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,dt.width,dt.height,dt.depth,0,Rt,Ot,dt.data);else if(v.isData3DTexture)Vt?(se&&e.texStorage3D(i.TEXTURE_3D,Et,Bt,dt.width,dt.height,dt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Rt,Ot,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,dt.width,dt.height,dt.depth,0,Rt,Ot,dt.data);else if(v.isFramebufferTexture){if(se)if(Vt)e.texStorage2D(i.TEXTURE_2D,Et,Bt,dt.width,dt.height);else{let Z=dt.width,nt=dt.height;for(let wt=0;wt<Et;wt++)e.texImage2D(i.TEXTURE_2D,wt,Bt,Z,nt,0,Rt,Ot,null),Z>>=1,nt>>=1}}else if(qt.length>0){if(Vt&&se){const Z=St(qt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Bt,Z.width,Z.height)}for(let Z=0,nt=qt.length;Z<nt;Z++)Pt=qt[Z],Vt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Rt,Ot,Pt):e.texImage2D(i.TEXTURE_2D,Z,Bt,Rt,Ot,Pt);v.generateMipmaps=!1}else if(Vt){if(se){const Z=St(dt);e.texStorage2D(i.TEXTURE_2D,Et,Bt,Z.width,Z.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Ot,dt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Rt,Ot,dt);m(v)&&f(J),Lt.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Y(T,v,k){if(v.image.length!==6)return;const J=st(T,v),at=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);const Q=n.get(at);if(at.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+k);const Lt=$t.getPrimaries($t.workingColorSpace),Mt=v.colorSpace===Vn?null:$t.getPrimaries(v.colorSpace),Ct=v.colorSpace===Vn||Lt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Yt=v.isCompressedTexture||v.image[0].isCompressedTexture,dt=v.image[0]&&v.image[0].isDataTexture,Rt=[];for(let nt=0;nt<6;nt++)!Yt&&!dt?Rt[nt]=_(v.image[nt],!0,s.maxCubemapSize):Rt[nt]=dt?v.image[nt].image:v.image[nt],Rt[nt]=Nt(v,Rt[nt]);const Ot=Rt[0],Bt=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type),qt=y(v.internalFormat,Bt,Pt,v.colorSpace),Vt=v.isVideoTexture!==!0,se=Q.__version===void 0||J===!0,U=at.dataReady;let Et=D(v,Ot);K(i.TEXTURE_CUBE_MAP,v);let Z;if(Yt){Vt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,qt,Ot.width,Ot.height);for(let nt=0;nt<6;nt++){Z=Rt[nt].mipmaps;for(let wt=0;wt<Z.length;wt++){const Tt=Z[wt];v.format!==rn?Bt!==null?Vt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,Tt.width,Tt.height,Bt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,qt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,Tt.width,Tt.height,Bt,Pt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,qt,Tt.width,Tt.height,0,Bt,Pt,Tt.data)}}}else{if(Z=v.mipmaps,Vt&&se){Z.length>0&&Et++;const nt=St(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,qt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(dt){Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Rt[nt].width,Rt[nt].height,Bt,Pt,Rt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,qt,Rt[nt].width,Rt[nt].height,0,Bt,Pt,Rt[nt].data);for(let wt=0;wt<Z.length;wt++){const kt=Z[wt].image[nt].image;Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,kt.width,kt.height,Bt,Pt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,qt,kt.width,kt.height,0,Bt,Pt,kt.data)}}else{Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Bt,Pt,Rt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,qt,Bt,Pt,Rt[nt]);for(let wt=0;wt<Z.length;wt++){const Tt=Z[wt];Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,Bt,Pt,Tt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,qt,Bt,Pt,Tt.image[nt])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),Q.__version=at.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function it(T,v,k,J,at,Q){const Lt=r.convert(k.format,k.colorSpace),Mt=r.convert(k.type),Ct=y(k.internalFormat,Lt,Mt,k.colorSpace),Yt=n.get(v),dt=n.get(k);if(dt.__renderTarget=v,!Yt.__hasExternalTextures){const Rt=Math.max(1,v.width>>Q),Ot=Math.max(1,v.height>>Q);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,Q,Ct,Rt,Ot,v.depth,0,Lt,Mt,null):e.texImage2D(at,Q,Ct,Rt,Ot,0,Lt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),mt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,at,dt.__webglTexture,0,ot(v)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,at,dt.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const J=v.depthTexture,at=J&&J.isDepthTexture?J.type:null,Q=M(v.stencilBuffer,at),Lt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=ot(v);mt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,Q,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,T)}else{const J=v.textures;for(let at=0;at<J.length;at++){const Q=J[at],Lt=r.convert(Q.format,Q.colorSpace),Mt=r.convert(Q.type),Ct=y(Q.internalFormat,Lt,Mt,Q.colorSpace),Yt=ot(v);k&&mt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Ct,v.width,v.height):mt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,Ct,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const at=J.__webglTexture,Q=ot(v);if(v.depthTexture.format===Xi)mt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(v.depthTexture.format===Ji)mt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function xt(T){const v=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const at=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",at)};J.addEventListener("dispose",at),v.__depthDisposeCallback=at}v.__boundDepthTexture=J}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");_t(v.__webglFramebuffer,T)}else if(k){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[J],T,!1);else{const at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(T,v,k){const J=n.get(T);v!==void 0&&it(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&xt(T)}function yt(T){const v=T.texture,k=n.get(T),J=n.get(v);T.addEventListener("dispose",R);const at=T.textures,Q=T.isWebGLCubeRenderTarget===!0,Lt=at.length>1;if(Lt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,o.memory.textures++),Q){k.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[Mt]=[];for(let Ct=0;Ct<v.mipmaps.length;Ct++)k.__webglFramebuffer[Mt][Ct]=i.createFramebuffer()}else k.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Mt=0;Mt<v.mipmaps.length;Mt++)k.__webglFramebuffer[Mt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let Mt=0,Ct=at.length;Mt<Ct;Mt++){const Yt=n.get(at[Mt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&mt(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Mt=0;Mt<at.length;Mt++){const Ct=at[Mt];k.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Mt]);const Yt=r.convert(Ct.format,Ct.colorSpace),dt=r.convert(Ct.type),Rt=y(Ct.internalFormat,Yt,dt,Ct.colorSpace,T.isXRRenderTarget===!0),Ot=ot(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Rt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,k.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),K(i.TEXTURE_CUBE_MAP,v);for(let Mt=0;Mt<6;Mt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ct=0;Ct<v.mipmaps.length;Ct++)it(k.__webglFramebuffer[Mt][Ct],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ct);else it(k.__webglFramebuffer[Mt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let Mt=0,Ct=at.length;Mt<Ct;Mt++){const Yt=at[Mt],dt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),K(i.TEXTURE_2D,Yt),it(k.__webglFramebuffer,T,Yt,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),m(Yt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Mt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,J.__webglTexture),K(Mt,v),v.mipmaps&&v.mipmaps.length>0)for(let Ct=0;Ct<v.mipmaps.length;Ct++)it(k.__webglFramebuffer[Ct],T,v,i.COLOR_ATTACHMENT0,Mt,Ct);else it(k.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,Mt,0);m(v)&&f(Mt),e.unbindTexture()}T.depthBuffer&&xt(T)}function $(T){const v=T.textures;for(let k=0,J=v.length;k<J;k++){const at=v[k];if(m(at)){const Q=b(T),Lt=n.get(at).__webglTexture;e.bindTexture(Q,Lt),f(Q),e.unbindTexture()}}}const et=[],w=[];function At(T){if(T.samples>0){if(mt(T)===!1){const v=T.textures,k=T.width,J=T.height;let at=i.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(T),Mt=v.length>1;if(Mt)for(let Ct=0;Ct<v.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ct=0;Ct<v.length;Ct++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ct]);const Yt=n.get(v[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,at,i.NEAREST),l===!0&&(et.length=0,w.length=0,et.push(i.COLOR_ATTACHMENT0+Ct),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push(Q),w.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Ct=0;Ct<v.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ct]);const Yt=n.get(v[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ot(T){return Math.min(s.maxSamples,T.samples)}function mt(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ut(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Nt(T,v){const k=T.colorSpace,J=T.format,at=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==ns&&k!==Vn&&($t.getTransfer(k)===Qt?(J!==rn||at!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=ft,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=mt}function i0(i,t){function e(n,s=Vn){let r;const o=$t.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ah)return i.BYTE;if(n===lh)return i.SHORT;if(n===bs)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Is)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===uh)return i.RGB;if(n===rn)return i.RGBA;if(n===dh)return i.LUMINANCE;if(n===fh)return i.LUMINANCE_ALPHA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===ph)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===mh)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===yr||n===Sr||n===Er||n===Tr)if(o===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===oa||n===aa||n===la)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===ha||n===ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ca||n===ha)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ua)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===ya||n===Sa||n===Ea||n===Ta||n===ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===da)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ma)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ga)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_a)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===va)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ma)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===wa||n===Aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===br)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gh||n===Ca||n===Ra||n===Pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class s0 extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ie extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r0={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const o0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a0=`
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

}`;class l0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:o0,fragmentShader:a0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c0 extends pi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new l0,m=e.getContextAttributes();let f=null,b=null;const y=[],M=[],D=new ct;let L=null;const R=new Ge;R.viewport=new ne;const I=new Ge;I.viewport=new ne;const E=[R,I],x=new s0;let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=y[B];return Y===void 0&&(Y=new Ro,y[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=y[B];return Y===void 0&&(Y=new Ro,y[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=y[B];return Y===void 0&&(Y=new Ro,y[B]=Y),Y.getHandSpace()};function O(B){const Y=M.indexOf(B.inputSource);if(Y===-1)return;const it=y[Y];it!==void 0&&(it.update(B.inputSource,B.frame,c||o),it.dispatchEvent({type:B.type,data:B.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",q);for(let B=0;B<y.length;B++){const Y=M[B];Y!==null&&(M[B]=null,y[B].disconnect(Y))}A=null,z=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,b=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ui(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,it=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?Ji:Xi,it=m.stencil?ji:hi);const _t={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ui(d.textureWidth,d.textureHeight,{format:rn,type:Ln,depthTexture:new Lh(d.textureWidth,d.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(B){for(let Y=0;Y<B.removed.length;Y++){const it=B.removed[Y],rt=M.indexOf(it);rt>=0&&(M[rt]=null,y[rt].disconnect(it))}for(let Y=0;Y<B.added.length;Y++){const it=B.added[Y];let rt=M.indexOf(it);if(rt===-1){for(let xt=0;xt<y.length;xt++)if(xt>=M.length){M.push(it),rt=xt;break}else if(M[xt]===null){M[xt]=it,rt=xt;break}if(rt===-1)break}const _t=y[rt];_t&&_t.connect(it)}}const X=new C,j=new C;function W(B,Y,it){X.setFromMatrixPosition(Y.matrixWorld),j.setFromMatrixPosition(it.matrixWorld);const rt=X.distanceTo(j),_t=Y.projectionMatrix.elements,xt=it.projectionMatrix.elements,ft=_t[14]/(_t[10]-1),yt=_t[14]/(_t[10]+1),$=(_t[9]+1)/_t[5],et=(_t[9]-1)/_t[5],w=(_t[8]-1)/_t[0],At=(xt[8]+1)/xt[0],ot=ft*w,mt=ft*At,ut=rt/(-w+At),Nt=ut*-w;if(Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Nt),B.translateZ(ut),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),_t[10]===-1)B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const St=ft+ut,T=yt+ut,v=ot-Nt,k=mt+(rt-Nt),J=$*yt/T*St,at=et*yt/T*St;B.projectionMatrix.makePerspective(v,k,J,at,St,T),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function ht(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let Y=B.near,it=B.far;_.texture!==null&&(_.depthNear>0&&(Y=_.depthNear),_.depthFar>0&&(it=_.depthFar)),x.near=I.near=R.near=Y,x.far=I.far=R.far=it,(A!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,z=x.far),R.layers.mask=B.layers.mask|2,I.layers.mask=B.layers.mask|4,x.layers.mask=R.layers.mask|I.layers.mask;const rt=B.parent,_t=x.cameras;ht(x,rt);for(let xt=0;xt<_t.length;xt++)ht(_t[xt],rt);_t.length===2?W(x,R,I):x.projectionMatrix.copy(R.projectionMatrix),tt(B,x,rt)};function tt(B,Y,it){it===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(it.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Da*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let lt=null;function K(B,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){const it=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let rt=!1;it.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let xt=0;xt<it.length;xt++){const ft=it[xt];let yt=null;if(p!==null)yt=p.getViewport(ft);else{const et=u.getViewSubImage(d,ft);yt=et.viewport,xt===0&&(t.setRenderTargetTextures(b,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(b))}let $=E[xt];$===void 0&&($=new Ge,$.layers.enable(xt),$.viewport=new ne,E[xt]=$),$.matrix.fromArray(ft.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(ft.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(yt.x,yt.y,yt.width,yt.height),xt===0&&(x.matrix.copy($.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push($)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const xt=u.getDepthInformation(it[0]);xt&&xt.isValid&&xt.texture&&_.init(t,xt,s.renderState)}}for(let it=0;it<y.length;it++){const rt=M[it],_t=y[it];rt!==null&&_t!==void 0&&_t.update(rt,Y,c||o)}lt&&lt(B,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const st=new Rh;st.setAnimationLoop(K),this.setAnimationLoop=function(B){lt=B},this.dispose=function(){}}}const si=new Ve,h0=new ie;function u0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,wh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ue&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ue&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),y=b.envMap,M=b.envMapRotation;y&&(m.envMap.value=y,si.copy(M),si.x*=-1,si.y*=-1,si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(h0.makeRotationFromEuler(si)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ue&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function d0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const M=y.program;n.uniformBlockBinding(b,M)}function c(b,y){let M=s[b.id];M===void 0&&(g(b),M=h(b),s[b.id]=M,b.addEventListener("dispose",m));const D=y.program;n.updateUBOMapping(b,D);const L=t.render.frame;r[b.id]!==L&&(d(b),r[b.id]=L)}function h(b){const y=u();b.__bindingPointIndex=y;const M=i.createBuffer(),D=b.__size,L=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,D,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=s[b.id],M=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let L=0,R=M.length;L<R;L++){const I=Array.isArray(M[L])?M[L]:[M[L]];for(let E=0,x=I.length;E<x;E++){const A=I[E];if(p(A,L,E,D)===!0){const z=A.__offset,O=Array.isArray(A.value)?A.value:[A.value];let G=0;for(let q=0;q<O.length;q++){const X=O[q],j=_(X);typeof X=="number"||typeof X=="boolean"?(A.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,z+G,A.__data)):X.isMatrix3?(A.__data[0]=X.elements[0],A.__data[1]=X.elements[1],A.__data[2]=X.elements[2],A.__data[3]=0,A.__data[4]=X.elements[3],A.__data[5]=X.elements[4],A.__data[6]=X.elements[5],A.__data[7]=0,A.__data[8]=X.elements[6],A.__data[9]=X.elements[7],A.__data[10]=X.elements[8],A.__data[11]=0):(X.toArray(A.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,y,M,D){const L=b.value,R=y+"_"+M;if(D[R]===void 0)return typeof L=="number"||typeof L=="boolean"?D[R]=L:D[R]=L.clone(),!0;{const I=D[R];if(typeof L=="number"||typeof L=="boolean"){if(I!==L)return D[R]=L,!0}else if(I.equals(L)===!1)return I.copy(L),!0}return!1}function g(b){const y=b.uniforms;let M=0;const D=16;for(let R=0,I=y.length;R<I;R++){const E=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,A=E.length;x<A;x++){const z=E[x],O=Array.isArray(z.value)?z.value:[z.value];for(let G=0,q=O.length;G<q;G++){const X=O[G],j=_(X),W=M%D,ht=W%j.boundary,tt=W+ht;M+=ht,tt!==0&&D-tt<j.storage&&(M+=D-tt),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=j.storage}}}const L=M%D;return L>0&&(M+=D-L),b.__size=M,b.__cache={},this}function _(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class f0{constructor(t={}){const{canvas:e=td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=qn,this.toneMappingExposure=1;const M=this;let D=!1,L=0,R=0,I=null,E=-1,x=null;const A=new ne,z=new ne;let O=null;const G=new Xt(0);let q=0,X=e.width,j=e.height,W=1,ht=null,tt=null;const lt=new ne(0,0,X,j),K=new ne(0,0,X,j);let st=!1;const B=new sl;let Y=!1,it=!1;const rt=new ie,_t=new ie,xt=new C,ft=new ne,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function et(){return I===null?W:1}let w=n;function At(S,F){return e.getContext(S,F)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),w===null){const F="webgl2";if(w=At(F,S),w===null)throw At(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ot,mt,ut,Nt,St,T,v,k,J,at,Q,Lt,Mt,Ct,Yt,dt,Rt,Ot,Bt,Pt,qt,Vt,se,U;function Et(){ot=new vm(w),ot.init(),Vt=new i0(w,ot),mt=new dm(w,ot,t,Vt),ut=new t0(w,ot),mt.reverseDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),Nt=new ym(w),St=new zg,T=new n0(w,ot,ut,St,mt,Vt,Nt),v=new pm(M),k=new _m(M),J=new Ad(w),se=new hm(w,J),at=new xm(w,J,Nt,se),Q=new Em(w,at,J,Nt),Bt=new Sm(w,mt,T),dt=new fm(St),Lt=new Bg(M,v,k,ot,mt,se,dt),Mt=new u0(M,St),Ct=new Gg,Yt=new qg(ot),Ot=new cm(M,v,k,ut,Q,p,l),Rt=new Jg(M,Q,mt),U=new d0(w,Nt,mt,ut),Pt=new um(w,ot,Nt),qt=new Mm(w,ot,Nt),Nt.programs=Lt.programs,M.capabilities=mt,M.extensions=ot,M.properties=St,M.renderLists=Ct,M.shadowMap=Rt,M.state=ut,M.info=Nt}Et();const Z=new c0(M,w);this.xr=Z,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const S=ot.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ot.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(X,j,!1))},this.getSize=function(S){return S.set(X,j)},this.setSize=function(S,F,H=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,j=F,e.width=Math.floor(S*W),e.height=Math.floor(F*W),H===!0&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(X*W,j*W).floor()},this.setDrawingBufferSize=function(S,F,H){X=S,j=F,W=H,e.width=Math.floor(S*H),e.height=Math.floor(F*H),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(lt)},this.setViewport=function(S,F,H,V){S.isVector4?lt.set(S.x,S.y,S.z,S.w):lt.set(S,F,H,V),ut.viewport(A.copy(lt).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(K)},this.setScissor=function(S,F,H,V){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,F,H,V),ut.scissor(z.copy(K).multiplyScalar(W).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){ut.setScissorTest(st=S)},this.setOpaqueSort=function(S){ht=S},this.setTransparentSort=function(S){tt=S},this.getClearColor=function(S){return S.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(S=!0,F=!0,H=!0){let V=0;if(S){let N=!1;if(I!==null){const pt=I.texture.format;N=pt===el||pt===tl||pt===Qa}if(N){const pt=I.texture.type,bt=pt===Ln||pt===hi||pt===bs||pt===ji||pt===ja||pt===Ja,Dt=Ot.getClearColor(),It=Ot.getClearAlpha(),zt=Dt.r,Gt=Dt.g,Ut=Dt.b;bt?(g[0]=zt,g[1]=Gt,g[2]=Ut,g[3]=It,w.clearBufferuiv(w.COLOR,0,g)):(_[0]=zt,_[1]=Gt,_[2]=Ut,_[3]=It,w.clearBufferiv(w.COLOR,0,_))}else V|=w.COLOR_BUFFER_BIT}F&&(V|=w.DEPTH_BUFFER_BIT),H&&(V|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Ct.dispose(),Yt.dispose(),St.dispose(),v.dispose(),k.dispose(),Q.dispose(),se.dispose(),U.dispose(),Lt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",gl),Z.removeEventListener("sessionend",_l),Jn.stop()};function nt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const S=Nt.autoReset,F=Rt.enabled,H=Rt.autoUpdate,V=Rt.needsUpdate,N=Rt.type;Et(),Nt.autoReset=S,Rt.enabled=F,Rt.autoUpdate=H,Rt.needsUpdate=V,Rt.type=N}function Tt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function kt(S){const F=S.target;F.removeEventListener("dispose",kt),de(F)}function de(S){we(S),St.remove(S)}function we(S){const F=St.get(S).programs;F!==void 0&&(F.forEach(function(H){Lt.releaseProgram(H)}),S.isShaderMaterial&&Lt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,H,V,N,pt){F===null&&(F=yt);const bt=N.isMesh&&N.matrixWorld.determinant()<0,Dt=hu(S,F,H,V,N);ut.setMaterial(V,bt);let It=H.index,zt=1;if(V.wireframe===!0){if(It=at.getWireframeAttribute(H),It===void 0)return;zt=2}const Gt=H.drawRange,Ut=H.attributes.position;let Zt=Gt.start*zt,re=(Gt.start+Gt.count)*zt;pt!==null&&(Zt=Math.max(Zt,pt.start*zt),re=Math.min(re,(pt.start+pt.count)*zt)),It!==null?(Zt=Math.max(Zt,0),re=Math.min(re,It.count)):Ut!=null&&(Zt=Math.max(Zt,0),re=Math.min(re,Ut.count));const ae=re-Zt;if(ae<0||ae===1/0)return;se.setup(N,V,Dt,H,It);let Ne,Kt=Pt;if(It!==null&&(Ne=J.get(It),Kt=qt,Kt.setIndex(Ne)),N.isMesh)V.wireframe===!0?(ut.setLineWidth(V.wireframeLinewidth*et()),Kt.setMode(w.LINES)):Kt.setMode(w.TRIANGLES);else if(N.isLine){let Ft=V.linewidth;Ft===void 0&&(Ft=1),ut.setLineWidth(Ft*et()),N.isLineSegments?Kt.setMode(w.LINES):N.isLineLoop?Kt.setMode(w.LINE_LOOP):Kt.setMode(w.LINE_STRIP)}else N.isPoints?Kt.setMode(w.POINTS):N.isSprite&&Kt.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ft=N._multiDrawStarts,mn=N._multiDrawCounts,jt=N._multiDrawCount,Je=It?J.get(It).bytesPerElement:1,mi=St.get(V).currentProgram.getUniforms();for(let Be=0;Be<jt;Be++)mi.setValue(w,"_gl_DrawID",Be),Kt.render(Ft[Be]/Je,mn[Be])}else if(N.isInstancedMesh)Kt.renderInstances(Zt,ae,N.count);else if(H.isInstancedBufferGeometry){const Ft=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,mn=Math.min(H.instanceCount,Ft);Kt.renderInstances(Zt,ae,mn)}else Kt.render(Zt,ae)};function Jt(S,F,H){S.transparent===!0&&S.side===Re&&S.forceSinglePass===!1?(S.side=Ue,S.needsUpdate=!0,Ns(S,F,H),S.side=Zn,S.needsUpdate=!0,Ns(S,F,H),S.side=Re):Ns(S,F,H)}this.compile=function(S,F,H=null){H===null&&(H=S),f=Yt.get(H),f.init(F),y.push(f),H.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==H&&S.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const V=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const pt=N.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){const Dt=pt[bt];Jt(Dt,H,N),V.add(Dt)}else Jt(pt,H,N),V.add(pt)}),y.pop(),f=null,V},this.compileAsync=function(S,F,H=null){const V=this.compile(S,F,H);return new Promise(N=>{function pt(){if(V.forEach(function(bt){St.get(bt).currentProgram.isReady()&&V.delete(bt)}),V.size===0){N(S);return}setTimeout(pt,10)}ot.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let je=null;function pn(S){je&&je(S)}function gl(){Jn.stop()}function _l(){Jn.start()}const Jn=new Rh;Jn.setAnimationLoop(pn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(S){je=S,Z.setAnimationLoop(S),S===null?Jn.stop():Jn.start()},Z.addEventListener("sessionstart",gl),Z.addEventListener("sessionend",_l),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,F,I),f=Yt.get(S,y.length),f.init(F),y.push(f),_t.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B.setFromProjectionMatrix(_t),it=this.localClippingEnabled,Y=dt.init(this.clippingPlanes,it),m=Ct.get(S,b.length),m.init(),b.push(m),Z.enabled===!0&&Z.isPresenting===!0){const pt=M.xr.getDepthSensingMesh();pt!==null&&Qr(pt,F,-1/0,M.sortObjects)}Qr(S,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ht,tt),$=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,$&&Ot.addToRenderList(m,S),this.info.render.frame++,Y===!0&&dt.beginShadows();const H=f.state.shadowsArray;Rt.render(H,S,F),Y===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(f.setupLights(),F.isArrayCamera){const pt=F.cameras;if(N.length>0)for(let bt=0,Dt=pt.length;bt<Dt;bt++){const It=pt[bt];xl(V,N,S,It)}$&&Ot.render(S);for(let bt=0,Dt=pt.length;bt<Dt;bt++){const It=pt[bt];vl(m,S,It,It.viewport)}}else N.length>0&&xl(V,N,S,F),$&&Ot.render(S),vl(m,S,F);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(M,S,F),se.resetDefaultState(),E=-1,x=null,y.pop(),y.length>0?(f=y[y.length-1],Y===!0&&dt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Qr(S,F,H,V){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||B.intersectsSprite(S)){V&&ft.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);const bt=Q.update(S),Dt=S.material;Dt.visible&&m.push(S,bt,Dt,H,ft.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||B.intersectsObject(S))){const bt=Q.update(S),Dt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ft.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),ft.copy(bt.boundingSphere.center)),ft.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(Dt)){const It=bt.groups;for(let zt=0,Gt=It.length;zt<Gt;zt++){const Ut=It[zt],Zt=Dt[Ut.materialIndex];Zt&&Zt.visible&&m.push(S,bt,Zt,H,ft.z,Ut)}}else Dt.visible&&m.push(S,bt,Dt,H,ft.z,null)}}const pt=S.children;for(let bt=0,Dt=pt.length;bt<Dt;bt++)Qr(pt[bt],F,H,V)}function vl(S,F,H,V){const N=S.opaque,pt=S.transmissive,bt=S.transparent;f.setupLightsView(H),Y===!0&&dt.setGlobalState(M.clippingPlanes,H),V&&ut.viewport(A.copy(V)),N.length>0&&Fs(N,F,H),pt.length>0&&Fs(pt,F,H),bt.length>0&&Fs(bt,F,H),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function xl(S,F,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new ui(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Is:Ln,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const pt=f.state.transmissionRenderTarget[V.id],bt=V.viewport||A;pt.setSize(bt.z,bt.w);const Dt=M.getRenderTarget();M.setRenderTarget(pt),M.getClearColor(G),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),$&&Ot.render(H);const It=M.toneMapping;M.toneMapping=qn;const zt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),Y===!0&&dt.setGlobalState(M.clippingPlanes,V),Fs(S,H,V),T.updateMultisampleRenderTarget(pt),T.updateRenderTargetMipmap(pt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ut=0,Zt=F.length;Ut<Zt;Ut++){const re=F[Ut],ae=re.object,Ne=re.geometry,Kt=re.material,Ft=re.group;if(Kt.side===Re&&ae.layers.test(V.layers)){const mn=Kt.side;Kt.side=Ue,Kt.needsUpdate=!0,Ml(ae,H,V,Ne,Kt,Ft),Kt.side=mn,Kt.needsUpdate=!0,Gt=!0}}Gt===!0&&(T.updateMultisampleRenderTarget(pt),T.updateRenderTargetMipmap(pt))}M.setRenderTarget(Dt),M.setClearColor(G,q),zt!==void 0&&(V.viewport=zt),M.toneMapping=It}function Fs(S,F,H){const V=F.isScene===!0?F.overrideMaterial:null;for(let N=0,pt=S.length;N<pt;N++){const bt=S[N],Dt=bt.object,It=bt.geometry,zt=V===null?bt.material:V,Gt=bt.group;Dt.layers.test(H.layers)&&Ml(Dt,F,H,It,zt,Gt)}}function Ml(S,F,H,V,N,pt){S.onBeforeRender(M,F,H,V,N,pt),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(M,F,H,V,S,pt),N.transparent===!0&&N.side===Re&&N.forceSinglePass===!1?(N.side=Ue,N.needsUpdate=!0,M.renderBufferDirect(H,F,V,N,S,pt),N.side=Zn,N.needsUpdate=!0,M.renderBufferDirect(H,F,V,N,S,pt),N.side=Re):M.renderBufferDirect(H,F,V,N,S,pt),S.onAfterRender(M,F,H,V,N,pt)}function Ns(S,F,H){F.isScene!==!0&&(F=yt);const V=St.get(S),N=f.state.lights,pt=f.state.shadowsArray,bt=N.state.version,Dt=Lt.getParameters(S,N.state,pt,F,H),It=Lt.getProgramCacheKey(Dt);let zt=V.programs;V.environment=S.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(S.isMeshStandardMaterial?k:v).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,zt===void 0&&(S.addEventListener("dispose",kt),zt=new Map,V.programs=zt);let Gt=zt.get(It);if(Gt!==void 0){if(V.currentProgram===Gt&&V.lightsStateVersion===bt)return Sl(S,Dt),Gt}else Dt.uniforms=Lt.getUniforms(S),S.onBeforeCompile(Dt,M),Gt=Lt.acquireProgram(Dt,It),zt.set(It,Gt),V.uniforms=Dt.uniforms;const Ut=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ut.clippingPlanes=dt.uniform),Sl(S,Dt),V.needsLights=du(S),V.lightsStateVersion=bt,V.needsLights&&(Ut.ambientLightColor.value=N.state.ambient,Ut.lightProbe.value=N.state.probe,Ut.directionalLights.value=N.state.directional,Ut.directionalLightShadows.value=N.state.directionalShadow,Ut.spotLights.value=N.state.spot,Ut.spotLightShadows.value=N.state.spotShadow,Ut.rectAreaLights.value=N.state.rectArea,Ut.ltc_1.value=N.state.rectAreaLTC1,Ut.ltc_2.value=N.state.rectAreaLTC2,Ut.pointLights.value=N.state.point,Ut.pointLightShadows.value=N.state.pointShadow,Ut.hemisphereLights.value=N.state.hemi,Ut.directionalShadowMap.value=N.state.directionalShadowMap,Ut.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ut.spotShadowMap.value=N.state.spotShadowMap,Ut.spotLightMatrix.value=N.state.spotLightMatrix,Ut.spotLightMap.value=N.state.spotLightMap,Ut.pointShadowMap.value=N.state.pointShadowMap,Ut.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Gt,V.uniformsList=null,Gt}function yl(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Ar.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Sl(S,F){const H=St.get(S);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function hu(S,F,H,V,N){F.isScene!==!0&&(F=yt),T.resetTextureUnits();const pt=F.fog,bt=V.isMeshStandardMaterial?F.environment:null,Dt=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ns,It=(V.isMeshStandardMaterial?k:v).get(V.envMap||bt),zt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Gt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ut=!!H.morphAttributes.position,Zt=!!H.morphAttributes.normal,re=!!H.morphAttributes.color;let ae=qn;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ae=M.toneMapping);const Ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Kt=Ne!==void 0?Ne.length:0,Ft=St.get(V),mn=f.state.lights;if(Y===!0&&(it===!0||S!==x)){const We=S===x&&V.id===E;dt.setState(V,S,We)}let jt=!1;V.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==mn.state.version||Ft.outputColorSpace!==Dt||N.isBatchedMesh&&Ft.batching===!1||!N.isBatchedMesh&&Ft.batching===!0||N.isBatchedMesh&&Ft.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ft.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ft.instancing===!1||!N.isInstancedMesh&&Ft.instancing===!0||N.isSkinnedMesh&&Ft.skinning===!1||!N.isSkinnedMesh&&Ft.skinning===!0||N.isInstancedMesh&&Ft.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ft.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ft.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ft.instancingMorph===!1&&N.morphTexture!==null||Ft.envMap!==It||V.fog===!0&&Ft.fog!==pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==dt.numPlanes||Ft.numIntersection!==dt.numIntersection)||Ft.vertexAlphas!==zt||Ft.vertexTangents!==Gt||Ft.morphTargets!==Ut||Ft.morphNormals!==Zt||Ft.morphColors!==re||Ft.toneMapping!==ae||Ft.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,Ft.__version=V.version);let Je=Ft.currentProgram;jt===!0&&(Je=Ns(V,F,N));let mi=!1,Be=!1,ss=!1;const le=Je.getUniforms(),cn=Ft.uniforms;if(ut.useProgram(Je.program)&&(mi=!0,Be=!0,ss=!0),V.id!==E&&(E=V.id,Be=!0),mi||x!==S){ut.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),nd(rt),id(rt),le.setValue(w,"projectionMatrix",rt)):le.setValue(w,"projectionMatrix",S.projectionMatrix),le.setValue(w,"viewMatrix",S.matrixWorldInverse);const Dn=le.map.cameraPosition;Dn!==void 0&&Dn.setValue(w,xt.setFromMatrixPosition(S.matrixWorld)),mt.logarithmicDepthBuffer&&le.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&le.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Be=!0,ss=!0)}if(N.isSkinnedMesh){le.setOptional(w,N,"bindMatrix"),le.setOptional(w,N,"bindMatrixInverse");const We=N.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),le.setValue(w,"boneTexture",We.boneTexture,T))}N.isBatchedMesh&&(le.setOptional(w,N,"batchingTexture"),le.setValue(w,"batchingTexture",N._matricesTexture,T),le.setOptional(w,N,"batchingIdTexture"),le.setValue(w,"batchingIdTexture",N._indirectTexture,T),le.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&le.setValue(w,"batchingColorTexture",N._colorsTexture,T));const rs=H.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&Bt.update(N,H,Je),(Be||Ft.receiveShadow!==N.receiveShadow)&&(Ft.receiveShadow=N.receiveShadow,le.setValue(w,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(cn.envMap.value=It,cn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(cn.envMapIntensity.value=F.environmentIntensity),Be&&(le.setValue(w,"toneMappingExposure",M.toneMappingExposure),Ft.needsLights&&uu(cn,ss),pt&&V.fog===!0&&Mt.refreshFogUniforms(cn,pt),Mt.refreshMaterialUniforms(cn,V,W,j,f.state.transmissionRenderTarget[S.id]),Ar.upload(w,yl(Ft),cn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ar.upload(w,yl(Ft),cn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&le.setValue(w,"center",N.center),le.setValue(w,"modelViewMatrix",N.modelViewMatrix),le.setValue(w,"normalMatrix",N.normalMatrix),le.setValue(w,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const We=V.uniformsGroups;for(let Dn=0,In=We.length;Dn<In;Dn++){const El=We[Dn];U.update(El,Je),U.bind(El,Je)}}return Je}function uu(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function du(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,F,H){St.get(S.texture).__webglTexture=F,St.get(S.depthTexture).__webglTexture=H;const V=St.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const H=St.get(S);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,H=0){I=S,L=F,R=H;let V=!0,N=null,pt=!1,bt=!1;if(S){const It=St.get(S);if(It.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(w.FRAMEBUFFER,null),V=!1;else if(It.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(It.__hasExternalTextures)T.rebindTextures(S,St.get(S.texture).__webglTexture,St.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ut=S.depthTexture;if(It.__boundDepthTexture!==Ut){if(Ut!==null&&St.has(Ut)&&(S.width!==Ut.image.width||S.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const zt=S.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(bt=!0);const Gt=St.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?N=Gt[F][H]:N=Gt[F],pt=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?N=St.get(S).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[H]:N=Gt,A.copy(S.viewport),z.copy(S.scissor),O=S.scissorTest}else A.copy(lt).multiplyScalar(W).floor(),z.copy(K).multiplyScalar(W).floor(),O=st;if(ut.bindFramebuffer(w.FRAMEBUFFER,N)&&V&&ut.drawBuffers(S,N),ut.viewport(A),ut.scissor(z),ut.setScissorTest(O),pt){const It=St.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+F,It.__webglTexture,H)}else if(bt){const It=St.get(S.texture),zt=F||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,It.__webglTexture,H||0,zt)}E=-1},this.readRenderTargetPixels=function(S,F,H,V,N,pt,bt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){ut.bindFramebuffer(w.FRAMEBUFFER,Dt);try{const It=S.texture,zt=It.format,Gt=It.type;if(!mt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-V&&H>=0&&H<=S.height-N&&w.readPixels(F,H,V,N,Vt.convert(zt),Vt.convert(Gt),pt)}finally{const It=I!==null?St.get(I).__webglFramebuffer:null;ut.bindFramebuffer(w.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(S,F,H,V,N,pt,bt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){const It=S.texture,zt=It.format,Gt=It.type;if(!mt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-V&&H>=0&&H<=S.height-N){ut.bindFramebuffer(w.FRAMEBUFFER,Dt);const Ut=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ut),w.bufferData(w.PIXEL_PACK_BUFFER,pt.byteLength,w.STREAM_READ),w.readPixels(F,H,V,N,Vt.convert(zt),Vt.convert(Gt),0);const Zt=I!==null?St.get(I).__webglFramebuffer:null;ut.bindFramebuffer(w.FRAMEBUFFER,Zt);const re=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await ed(w,re,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ut),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,pt),w.deleteBuffer(Ut),w.deleteSync(re),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,H=0){S.isTexture!==!0&&(_s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-H),N=Math.floor(S.image.width*V),pt=Math.floor(S.image.height*V),bt=F!==null?F.x:0,Dt=F!==null?F.y:0;T.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,H,0,0,bt,Dt,N,pt),ut.unbindTexture()},this.copyTextureToTexture=function(S,F,H=null,V=null,N=0){S.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],F=arguments[2],N=arguments[3]||0,H=null);let pt,bt,Dt,It,zt,Gt,Ut,Zt,re;const ae=S.isCompressedTexture?S.mipmaps[N]:S.image;H!==null?(pt=H.max.x-H.min.x,bt=H.max.y-H.min.y,Dt=H.isBox3?H.max.z-H.min.z:1,It=H.min.x,zt=H.min.y,Gt=H.isBox3?H.min.z:0):(pt=ae.width,bt=ae.height,Dt=ae.depth||1,It=0,zt=0,Gt=0),V!==null?(Ut=V.x,Zt=V.y,re=V.z):(Ut=0,Zt=0,re=0);const Ne=Vt.convert(F.format),Kt=Vt.convert(F.type);let Ft;F.isData3DTexture?(T.setTexture3D(F,0),Ft=w.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),Ft=w.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),Ft=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,F.unpackAlignment);const mn=w.getParameter(w.UNPACK_ROW_LENGTH),jt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Je=w.getParameter(w.UNPACK_SKIP_PIXELS),mi=w.getParameter(w.UNPACK_SKIP_ROWS),Be=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ae.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ae.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,It),w.pixelStorei(w.UNPACK_SKIP_ROWS,zt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Gt);const ss=S.isDataArrayTexture||S.isData3DTexture,le=F.isDataArrayTexture||F.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const cn=St.get(S),rs=St.get(F),We=St.get(cn.__renderTarget),Dn=St.get(rs.__renderTarget);ut.bindFramebuffer(w.READ_FRAMEBUFFER,We.__webglFramebuffer),ut.bindFramebuffer(w.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let In=0;In<Dt;In++)ss&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,St.get(S).__webglTexture,N,Gt+In),S.isDepthTexture?(le&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,St.get(F).__webglTexture,N,re+In),w.blitFramebuffer(It,zt,pt,bt,Ut,Zt,pt,bt,w.DEPTH_BUFFER_BIT,w.NEAREST)):le?w.copyTexSubImage3D(Ft,N,Ut,Zt,re+In,It,zt,pt,bt):w.copyTexSubImage2D(Ft,N,Ut,Zt,re+In,It,zt,pt,bt);ut.bindFramebuffer(w.READ_FRAMEBUFFER,null),ut.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else le?S.isDataTexture||S.isData3DTexture?w.texSubImage3D(Ft,N,Ut,Zt,re,pt,bt,Dt,Ne,Kt,ae.data):F.isCompressedArrayTexture?w.compressedTexSubImage3D(Ft,N,Ut,Zt,re,pt,bt,Dt,Ne,ae.data):w.texSubImage3D(Ft,N,Ut,Zt,re,pt,bt,Dt,Ne,Kt,ae):S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,N,Ut,Zt,pt,bt,Ne,Kt,ae.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,N,Ut,Zt,ae.width,ae.height,Ne,ae.data):w.texSubImage2D(w.TEXTURE_2D,N,Ut,Zt,pt,bt,Ne,Kt,ae);w.pixelStorei(w.UNPACK_ROW_LENGTH,mn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,jt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Je),w.pixelStorei(w.UNPACK_SKIP_ROWS,mi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Be),N===0&&F.generateMipmaps&&w.generateMipmap(Ft),ut.unbindTexture()},this.copyTextureToTexture3D=function(S,F,H=null,V=null,N=0){return S.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,S=arguments[2],F=arguments[3],N=arguments[4]||0),_s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,H,V,N)},this.initRenderTarget=function(S){St.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),ut.unbindTexture()},this.resetState=function(){L=0,R=0,I=null,ut.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Nh extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ve,this.environmentIntensity=1,this.environmentRotation=new Ve,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class p0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=La,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Le=new C;class Lr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Lr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Oh extends jn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Pi;const hs=new C,Li=new C,Di=new C,Ii=new ct,us=new ct,Bh=new ie,sr=new C,ds=new C,rr=new C,Mc=new ct,Po=new ct,yc=new ct;class m0 extends xe{constructor(t=new Oh){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new Ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new p0(e,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new Lr(n,3,0,!1)),Pi.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=Pi,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),Bh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Di.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;or(sr.set(-.5,-.5,0),Di,o,Li,s,r),or(ds.set(.5,-.5,0),Di,o,Li,s,r),or(rr.set(.5,.5,0),Di,o,Li,s,r),Mc.set(0,0),Po.set(1,0),yc.set(1,1);let a=t.ray.intersectTriangle(sr,ds,rr,!1,hs);if(a===null&&(or(ds.set(-.5,.5,0),Di,o,Li,s,r),Po.set(0,1),a=t.ray.intersectTriangle(sr,rr,ds,!1,hs),a===null))return;const l=t.ray.origin.distanceTo(hs);l<t.near||l>t.far||e.push({distance:l,point:hs.clone(),uv:$e.getInterpolation(hs,sr,ds,rr,Mc,Po,yc,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function or(i,t,e,n,s,r){Ii.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(us.x=r*Ii.x-s*Ii.y,us.y=s*Ii.x+r*Ii.y):us.copy(Ii),i.copy(t),i.x+=us.x,i.y+=us.y,i.applyMatrix4(Bh)}class ol extends jn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Dr=new C,Ir=new C,Sc=new ie,fs=new nl,ar=new $r,Lo=new C,Ec=new C;class g0 extends xe{constructor(t=new Ke,e=new ol){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Dr.fromBufferAttribute(e,s-1),Ir.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Dr.distanceTo(Ir);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;Sc.copy(s).invert(),fs.copy(t.ray).applyMatrix4(Sc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),b=h.getX(_+1),y=lr(this,t,fs,l,f,b);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=lr(this,t,fs,l,_,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=lr(this,t,fs,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=lr(this,t,fs,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Dr.fromBufferAttribute(o,s),Ir.fromBufferAttribute(o,r),e.distanceSqToSegment(Dr,Ir,Lo,Ec)>n)return;Lo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Lo);if(!(l<t.near||l>t.far))return{distance:l,point:Ec.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Tc=new C,bc=new C;class _0 extends g0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Tc.fromBufferAttribute(e,s),bc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tc.distanceTo(bc);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ur extends Fe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],o=[],a=new C,l=new ie;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class al extends fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class v0 extends al{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ll(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const cr=new C,Do=new ll,Io=new ll,Uo=new ll;class x0 extends fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(cr.subVectors(s[0],s[1]).add(s[0]),c=cr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=cr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Do.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Io.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Uo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Do.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Io.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Uo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Do.calc(l),Io.calc(l),Uo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function M0(i,t){const e=1-i;return e*e*t}function y0(i,t){return 2*(1-i)*i*t}function S0(i,t){return i*i*t}function xs(i,t,e,n){return M0(i,t)+y0(i,e)+S0(i,n)}function E0(i,t){const e=1-i;return e*e*e*t}function T0(i,t){const e=1-i;return 3*e*e*i*t}function b0(i,t){return 3*(1-i)*i*i*t}function w0(i,t){return i*i*i*t}function Ms(i,t,e,n,s){return E0(i,t)+T0(i,e)+b0(i,n)+w0(i,s)}class zh extends fn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ms(t,s.x,r.x,o.x,a.x),Ms(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class A0 extends fn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ms(t,s.x,r.x,o.x,a.x),Ms(t,s.y,r.y,o.y,a.y),Ms(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kh extends fn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C0 extends fn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gh extends fn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xs(t,s.x,r.x,o.x),xs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R0 extends fn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xs(t,s.x,r.x,o.x),xs(t,s.y,r.y,o.y),xs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hh extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(wc(a,l.x,c.x,h.x,u.x),wc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var Fa=Object.freeze({__proto__:null,ArcCurve:v0,CatmullRomCurve3:x0,CubicBezierCurve:zh,CubicBezierCurve3:A0,EllipseCurve:al,LineCurve:kh,LineCurve3:C0,QuadraticBezierCurve:Gh,QuadraticBezierCurve3:R0,SplineCurve:Hh});class P0 extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Fa[s.type]().fromJSON(s))}return this}}class Pn extends P0{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new kh(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Gh(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new zh(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new al(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class pe extends Ke{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;b(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(p,2));function b(){const M=new C,D=new C;let L=0;const R=(e-t)/n;for(let I=0;I<=r;I++){const E=[],x=I/r,A=x*(e-t)+t;for(let z=0;z<=s;z++){const O=z/s,G=O*l+a,q=Math.sin(G),X=Math.cos(G);D.x=A*q,D.y=-x*n+m,D.z=A*X,u.push(D.x,D.y,D.z),M.set(q,R,X).normalize(),d.push(M.x,M.y,M.z),p.push(O,1-x),E.push(g++)}_.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){const x=_[E][I],A=_[E+1][I],z=_[E+1][I+1],O=_[E][I+1];(t>0||E!==0)&&(h.push(x,A,O),L+=3),(e>0||E!==r-1)&&(h.push(A,z,O),L+=3)}c.addGroup(f,L,0),f+=L}function y(M){const D=g,L=new ct,R=new C;let I=0;const E=M===!0?t:e,x=M===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;const A=g;for(let z=0;z<=s;z++){const G=z/s*l+a,q=Math.cos(G),X=Math.sin(G);R.x=E*X,R.y=m*x,R.z=E*q,u.push(R.x,R.y,R.z),d.push(0,x,0),L.x=q*.5+.5,L.y=X*.5*x+.5,p.push(L.x,L.y),g++}for(let z=0;z<s;z++){const O=D+z,G=A+z;M===!0?h.push(G,G+1,O):h.push(G+1,G,O),I+=3}c.addGroup(f,I,M===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class An extends Pn{constructor(t){super(t),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Pn().fromJSON(s))}return this}}const L0={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Vh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(n&&(r=N0(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return ws(r,o,e,a,l,p,0),o}};function Vh(i,t,e,n,s){let r,o;if(s===q0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ac(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ac(r,i[r],i[r+1],o);return o&&Kr(o,o.next)&&(Cs(o),o=o.next),o}function fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Kr(e,e.next)||ue(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ws(i,t,e,n,s,r,o){if(!i)return;!o&&r&&G0(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?I0(i,n,s,r):D0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Cs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=U0(fi(i),t,e),ws(i,t,e,n,s,r,2)):o===2&&F0(i,t,e,n,s,r):ws(fi(i),t,e,n,s,r,1);break}}}function D0(i){const t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&ki(s,a,r,l,o,c,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function I0(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ue(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Na(p,g,t,e,n),b=Na(_,m,t,e,n);let y=i.prevZ,M=i.nextZ;for(;y&&y.z>=f&&M&&M.z<=b;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ki(a,h,l,u,c,d,y.x,y.y)&&ue(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ki(a,h,l,u,c,d,M.x,M.y)&&ue(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ki(a,h,l,u,c,d,y.x,y.y)&&ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=b;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ki(a,h,l,u,c,d,M.x,M.y)&&ue(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function U0(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Kr(s,r)&&Wh(s,n,n.next,r)&&As(s,r)&&As(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Cs(n),Cs(n.next),n=i=r),n=n.next}while(n!==i);return fi(n)}function F0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&W0(o,a)){let l=Xh(o,a);o=fi(o,o.next),l=fi(l,l.next),ws(o,t,e,n,s,r,0),ws(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function N0(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Vh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(V0(c));for(s.sort(O0),r=0;r<s.length;r++)e=B0(s[r],e);return e}function O0(i,t){return i.x-t.x}function B0(i,t){const e=z0(i,t);if(!e)return t;const n=Xh(e,i);return fi(n,n.next),fi(e,e.next)}function z0(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ki(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),As(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&k0(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function k0(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function G0(i,t,e,n){let s=i;do s.z===0&&(s.z=Na(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,H0(s)}function H0(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Na(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function V0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ki(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function W0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!X0(i,t)&&(As(i,t)&&As(t,i)&&Y0(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||Kr(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Kr(i,t){return i.x===t.x&&i.y===t.y}function Wh(i,t,e,n){const s=ur(ue(i,t,e)),r=ur(ue(i,t,n)),o=ur(ue(e,n,i)),a=ur(ue(e,n,t));return!!(s!==r&&o!==a||s===0&&hr(i,e,t)||r===0&&hr(i,n,t)||o===0&&hr(e,i,n)||a===0&&hr(e,t,n))}function hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ur(i){return i>0?1:i<0?-1:0}function X0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function As(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function Y0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xh(i,t){const e=new Oa(i.i,i.x,i.y),n=new Oa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ac(i,t,e,n){const s=new Oa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Oa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function q0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ys{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ys.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Cc(t),Rc(n,t);let o=t.length;e.forEach(Cc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Rc(n,e[l]);const a=L0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Cc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Rc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class sn extends Ke{constructor(t=new An([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Pe(s,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:$0;let y,M=!1,D,L,R,I;f&&(y=f.getSpacedPoints(h),M=!0,d=!1,D=f.computeFrenetFrames(h,!1),L=new C,R=new C,I=new C),d||(m=0,p=0,g=0,_=0);const E=a.extractPoints(c);let x=E.shape;const A=E.holes;if(!ys.isClockWise(x)){x=x.reverse();for(let $=0,et=A.length;$<et;$++){const w=A[$];ys.isClockWise(w)&&(A[$]=w.reverse())}}const O=ys.triangulateShape(x,A),G=x;for(let $=0,et=A.length;$<et;$++){const w=A[$];x=x.concat(w)}function q($,et,w){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(et,w)}const X=x.length,j=O.length;function W($,et,w){let At,ot,mt;const ut=$.x-et.x,Nt=$.y-et.y,St=w.x-$.x,T=w.y-$.y,v=ut*ut+Nt*Nt,k=ut*T-Nt*St;if(Math.abs(k)>Number.EPSILON){const J=Math.sqrt(v),at=Math.sqrt(St*St+T*T),Q=et.x-Nt/J,Lt=et.y+ut/J,Mt=w.x-T/at,Ct=w.y+St/at,Yt=((Mt-Q)*T-(Ct-Lt)*St)/(ut*T-Nt*St);At=Q+ut*Yt-$.x,ot=Lt+Nt*Yt-$.y;const dt=At*At+ot*ot;if(dt<=2)return new ct(At,ot);mt=Math.sqrt(dt/2)}else{let J=!1;ut>Number.EPSILON?St>Number.EPSILON&&(J=!0):ut<-Number.EPSILON?St<-Number.EPSILON&&(J=!0):Math.sign(Nt)===Math.sign(T)&&(J=!0),J?(At=-Nt,ot=ut,mt=Math.sqrt(v)):(At=ut,ot=Nt,mt=Math.sqrt(v/2))}return new ct(At/mt,ot/mt)}const ht=[];for(let $=0,et=G.length,w=et-1,At=$+1;$<et;$++,w++,At++)w===et&&(w=0),At===et&&(At=0),ht[$]=W(G[$],G[w],G[At]);const tt=[];let lt,K=ht.concat();for(let $=0,et=A.length;$<et;$++){const w=A[$];lt=[];for(let At=0,ot=w.length,mt=ot-1,ut=At+1;At<ot;At++,mt++,ut++)mt===ot&&(mt=0),ut===ot&&(ut=0),lt[At]=W(w[At],w[mt],w[ut]);tt.push(lt),K=K.concat(lt)}for(let $=0;$<m;$++){const et=$/m,w=p*Math.cos(et*Math.PI/2),At=g*Math.sin(et*Math.PI/2)+_;for(let ot=0,mt=G.length;ot<mt;ot++){const ut=q(G[ot],ht[ot],At);rt(ut.x,ut.y,-w)}for(let ot=0,mt=A.length;ot<mt;ot++){const ut=A[ot];lt=tt[ot];for(let Nt=0,St=ut.length;Nt<St;Nt++){const T=q(ut[Nt],lt[Nt],At);rt(T.x,T.y,-w)}}}const st=g+_;for(let $=0;$<X;$++){const et=d?q(x[$],K[$],st):x[$];M?(R.copy(D.normals[0]).multiplyScalar(et.x),L.copy(D.binormals[0]).multiplyScalar(et.y),I.copy(y[0]).add(R).add(L),rt(I.x,I.y,I.z)):rt(et.x,et.y,0)}for(let $=1;$<=h;$++)for(let et=0;et<X;et++){const w=d?q(x[et],K[et],st):x[et];M?(R.copy(D.normals[$]).multiplyScalar(w.x),L.copy(D.binormals[$]).multiplyScalar(w.y),I.copy(y[$]).add(R).add(L),rt(I.x,I.y,I.z)):rt(w.x,w.y,u/h*$)}for(let $=m-1;$>=0;$--){const et=$/m,w=p*Math.cos(et*Math.PI/2),At=g*Math.sin(et*Math.PI/2)+_;for(let ot=0,mt=G.length;ot<mt;ot++){const ut=q(G[ot],ht[ot],At);rt(ut.x,ut.y,u+w)}for(let ot=0,mt=A.length;ot<mt;ot++){const ut=A[ot];lt=tt[ot];for(let Nt=0,St=ut.length;Nt<St;Nt++){const T=q(ut[Nt],lt[Nt],At);M?rt(T.x,T.y+y[h-1].y,y[h-1].x+w):rt(T.x,T.y,u+w)}}}B(),Y();function B(){const $=s.length/3;if(d){let et=0,w=X*et;for(let At=0;At<j;At++){const ot=O[At];_t(ot[2]+w,ot[1]+w,ot[0]+w)}et=h+m*2,w=X*et;for(let At=0;At<j;At++){const ot=O[At];_t(ot[0]+w,ot[1]+w,ot[2]+w)}}else{for(let et=0;et<j;et++){const w=O[et];_t(w[2],w[1],w[0])}for(let et=0;et<j;et++){const w=O[et];_t(w[0]+X*h,w[1]+X*h,w[2]+X*h)}}n.addGroup($,s.length/3-$,0)}function Y(){const $=s.length/3;let et=0;it(G,et),et+=G.length;for(let w=0,At=A.length;w<At;w++){const ot=A[w];it(ot,et),et+=ot.length}n.addGroup($,s.length/3-$,1)}function it($,et){let w=$.length;for(;--w>=0;){const At=w;let ot=w-1;ot<0&&(ot=$.length-1);for(let mt=0,ut=h+m*2;mt<ut;mt++){const Nt=X*mt,St=X*(mt+1),T=et+At+Nt,v=et+ot+Nt,k=et+ot+St,J=et+At+St;xt(T,v,k,J)}}}function rt($,et,w){l.push($),l.push(et),l.push(w)}function _t($,et,w){ft($),ft(et),ft(w);const At=s.length/3,ot=b.generateTopUV(n,s,At-3,At-2,At-1);yt(ot[0]),yt(ot[1]),yt(ot[2])}function xt($,et,w,At){ft($),ft(et),ft(At),ft(et),ft(w),ft(At);const ot=s.length/3,mt=b.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);yt(mt[0]),yt(mt[1]),yt(mt[3]),yt(mt[1]),yt(mt[2]),yt(mt[3])}function ft($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function yt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Z0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Fa[s.type]().fromJSON(s)),new sn(n,t.options)}}const $0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(d,1-g),new ct(_,1-f)]:[new ct(a,1-l),new ct(h,1-u),new ct(p,1-g),new ct(m,1-f)]}};function Z0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class K0 extends jn{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Xt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class ve extends jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cl extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class j0 extends cl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fo=new ie,Pc=new C,Lc=new C;class Yh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sl,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pc),Lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lc),e.updateMatrixWorld(),Fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Dc=new ie,ps=new C,No=new C;class J0 extends Yh{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(ps),No.copy(n.position),No.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(No),n.updateMatrixWorld(),s.makeTranslation(-ps.x,-ps.y,-ps.z),Dc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc)}}class Q0 extends cl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new J0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class t_ extends Yh{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dr extends cl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new t_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ic{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class e_ extends _0{constructor(t=10,e=10,n=4473924,s=8947848){n=new Xt(n),s=new Xt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new Ke;h.setAttribute("position",new Pe(l,3)),h.setAttribute("color",new Pe(c,3));const u=new ol({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class n_ extends pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);const Uc={type:"change"},hl={type:"start"},qh={type:"end"},fr=new nl,Fc=new Hn,i_=Math.cos(70*Qu.DEG2RAD),_e=new C,Oe=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oo=1e-6;class s_ extends n_{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new di,this._lastTargetPosition=new C,this._quat=new di().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ic,this._sphericalDelta=new Ic,this._scale=1,this._panOffset=new C,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new C,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o_.bind(this),this._onPointerDown=r_.bind(this),this._onPointerUp=a_.bind(this),this._onContextMenu=p_.bind(this),this._onMouseWheel=h_.bind(this),this._onKeyDown=u_.bind(this),this._onTouchStart=d_.bind(this),this._onTouchMove=f_.bind(this),this._onMouseDown=l_.bind(this),this._onMouseMove=c_.bind(this),this._interceptControlDown=m_.bind(this),this._interceptControlUp=g_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uc),this.update(),this.state=ee.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Oe:n>Math.PI&&(n-=Oe),s<-Math.PI?s+=Oe:s>Math.PI&&(s-=Oe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_e.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(fr.origin.copy(this.object.position),fr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fr.direction))<i_?this.object.lookAt(this.target):(Fc.setFromNormalAndCoplanarPoint(this.object.up,this.target),fr.intersectPlane(Fc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Oo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oo||this._lastTargetPosition.distanceToSquared(this.target)>Oo?(this.dispatchEvent(Uc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Oe/60*this.autoRotateSpeed*t:Oe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function r_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function o_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function a_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qh),this.state=ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function l_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case Vi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case Vi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(hl)}function c_(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function h_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(hl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qh))}function u_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function d_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Bi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case Bi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case Bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(hl)}function f_(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function p_(i){this.enabled!==!1&&i.preventDefault()}function m_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function g_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class __ extends Nh{constructor(){super();const t=new fe;t.deleteAttribute("uv");const e=new ve({side:Ue}),n=new ve,s=new Q0(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new gt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new gt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new gt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new gt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new gt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new gt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new gt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new gt(t,Ui(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new gt(t,Ui(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new gt(t,Ui(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new gt(t,Ui(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new gt(t,Ui(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new gt(t,Ui(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ui(i){const t=new il;return t.color.setScalar(i),t}class v_{constructor(){this.aluminum=new ve({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.currentFrameColor="silver",this.acrylic=new ve({color:9684477,transparent:!0,opacity:.42,roughness:.1,metalness:.1,depthWrite:!1,side:Re}),this.doorGlassLeft=new ve({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:Re}),this.doorGlassRight=new ve({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:Re}),this.handleMaterial=new ve({color:16777215,metalness:.75,roughness:.12,envMapIntensity:1.2}),this.grommetMaterial=new ve({color:1579035,metalness:.1,roughness:.85}),this.railMaterial=new ve({color:4738388,metalness:.15,roughness:.55}),this.endCapMaterial=new ve({color:10133670,metalness:.1,roughness:.65}),this.casterWheel=new ve({color:1579035,roughness:.7,metalness:.15}),this.casterBracket=new ve({color:14212838,roughness:.22,metalness:.85,envMapIntensity:1.2}),this.wireMesh=new ve({color:1842463,roughness:.55,metalness:.25,envMapIntensity:.9}),this.silverInnerFrame=new ve({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.ventCoverAcrylic=new ve({color:9684477,transparent:!0,opacity:.5,roughness:.08,metalness:.1,depthWrite:!1,side:Re}),this.thumbScrewMaterial=new ve({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.blackMatteAcrylic=new ve({color:1579292,roughness:.82,metalness:.04,side:Re})}createPolycaMaterial(t,e){return new ve({map:t,bumpMap:e,bumpScale:1.2,transparent:!0,opacity:.78,roughness:.32,metalness:.1,side:Re,depthWrite:!1})}createPunchingMaterial(t){return new ve({color:9684477,alphaMap:t,transparent:!0,opacity:.58,roughness:.35,metalness:.05,side:Re,depthWrite:!1})}setFrameColor(t){this.currentFrameColor=t,t==="black"?(this.aluminum.color.setHex(1974308),this.aluminum.metalness=.28,this.aluminum.roughness=.42,this.aluminum.envMapIntensity=.85,this.endCapMaterial.color.setHex(2237222),this.railMaterial.color.setHex(1974050),this.thumbScrewMaterial.color.setHex(1974050)):(this.aluminum.color.setHex(12897236),this.aluminum.metalness=.85,this.aluminum.roughness=.25,this.aluminum.envMapIntensity=1.3,this.endCapMaterial.color.setHex(10133670),this.railMaterial.color.setHex(4738388),this.thumbScrewMaterial.color.setHex(16119544)),this.aluminum.needsUpdate=!0,this.endCapMaterial.needsUpdate=!0,this.railMaterial.needsUpdate=!0,this.thumbScrewMaterial.needsUpdate=!0}dispose(){this.aluminum.dispose(),this.acrylic.dispose(),this.doorGlassLeft.dispose(),this.doorGlassRight.dispose(),this.handleMaterial.dispose(),this.grommetMaterial.dispose(),this.railMaterial.dispose(),this.endCapMaterial.dispose(),this.casterWheel.dispose(),this.casterBracket.dispose(),this.wireMesh.dispose(),this.silverInnerFrame.dispose(),this.ventCoverAcrylic.dispose(),this.thumbScrewMaterial.dispose(),this.blackMatteAcrylic.dispose()}}function x_(){const i=new An,t=10,e=3,n=1.8,s=5.5,r=5;i.moveTo(t,t),i.lineTo(t,e),i.lineTo(t-n,e),i.lineTo(t-n,s),i.lineTo(t-r,s),i.lineTo(t-r,-s),i.lineTo(t-n,-s),i.lineTo(t-n,-e),i.lineTo(t,-e),i.lineTo(t,-t),i.lineTo(e,-t),i.lineTo(e,-t+n),i.lineTo(s,-t+n),i.lineTo(s,-t+r),i.lineTo(-s,-t+r),i.lineTo(-s,-t+n),i.lineTo(-e,-t+n),i.lineTo(-e,-t),i.lineTo(-t,-t),i.lineTo(-t,-e),i.lineTo(-t+n,-e),i.lineTo(-t+n,-s),i.lineTo(-t+r,-s),i.lineTo(-t+r,s),i.lineTo(-t+n,s),i.lineTo(-t+n,e),i.lineTo(-t,e),i.lineTo(-t,t),i.lineTo(-e,t),i.lineTo(-e,t-n),i.lineTo(-s,t-n),i.lineTo(-s,t-r),i.lineTo(s,t-r),i.lineTo(s,t-n),i.lineTo(e,t-n),i.lineTo(e,t),i.lineTo(t,t);const o=new Pn;return o.absarc(0,0,2.25,0,Math.PI*2,!0),i.holes.push(o),i}function M_(){const i=new An,t=10,e=20,n=3,s=1.8,r=5.5,o=5;i.moveTo(t,e),i.lineTo(t,10+n),i.lineTo(t-s,10+n),i.lineTo(t-s,10+r),i.lineTo(t-o,10+r),i.lineTo(t-o,10-r),i.lineTo(t-s,10-r),i.lineTo(t-s,10-n),i.lineTo(t,10-n),i.lineTo(t,-10+n),i.lineTo(t-s,-10+n),i.lineTo(t-s,-10+r),i.lineTo(t-o,-10+r),i.lineTo(t-o,-10-r),i.lineTo(t-s,-10-r),i.lineTo(t-s,-10-n),i.lineTo(t,-10-n),i.lineTo(t,-e),i.lineTo(n,-e),i.lineTo(n,-e+s),i.lineTo(r,-e+s),i.lineTo(r,-e+o),i.lineTo(-r,-e+o),i.lineTo(-r,-e+s),i.lineTo(-n,-e+s),i.lineTo(-n,-e),i.lineTo(-t,-e),i.lineTo(-t,-10-n),i.lineTo(-t+s,-10-n),i.lineTo(-t+s,-10-r),i.lineTo(-t+o,-10-r),i.lineTo(-t+o,-10+r),i.lineTo(-t+s,-10+r),i.lineTo(-t+s,-10+n),i.lineTo(-t,-10+n),i.lineTo(-t,10-n),i.lineTo(-t+s,10-n),i.lineTo(-t+s,10-r),i.lineTo(-t+o,10-r),i.lineTo(-t+o,10+r),i.lineTo(-t+s,10+r),i.lineTo(-t+s,10+n),i.lineTo(-t,10+n),i.lineTo(-t,e),i.lineTo(-n,e),i.lineTo(-n,e-s),i.lineTo(-r,e-s),i.lineTo(-r,e-o),i.lineTo(r,e-o),i.lineTo(r,e-s),i.lineTo(n,e-s),i.lineTo(n,e),i.lineTo(t,e);const a=new Pn;a.absarc(0,10,2.25,0,Math.PI*2,!0),i.holes.push(a);const l=new Pn;return l.absarc(0,-10,2.25,0,Math.PI*2,!0),i.holes.push(l),i}const y_=x_(),S_=M_(),E_=T_();function T_(){const i=new An,t=10,e=30,n=3,s=1.8,r=5.5,o=5;i.moveTo(t,e),i.lineTo(t,20+n),i.lineTo(t-s,20+n),i.lineTo(t-s,20+r),i.lineTo(t-o,20+r),i.lineTo(t-o,20-r),i.lineTo(t-s,20-r),i.lineTo(t-s,20-n),i.lineTo(t,20-n),i.lineTo(t,n),i.lineTo(t-s,n),i.lineTo(t-s,r),i.lineTo(t-o,r),i.lineTo(t-o,-r),i.lineTo(t-s,-r),i.lineTo(t-s,-n),i.lineTo(t,-n),i.lineTo(t,-20+n),i.lineTo(t-s,-20+n),i.lineTo(t-s,-20+r),i.lineTo(t-o,-20+r),i.lineTo(t-o,-20-r),i.lineTo(t-s,-20-r),i.lineTo(t-s,-20-n),i.lineTo(t,-20-n),i.lineTo(t,-e),i.lineTo(n,-e),i.lineTo(n,-e+s),i.lineTo(r,-e+s),i.lineTo(r,-e+o),i.lineTo(-r,-e+o),i.lineTo(-r,-e+s),i.lineTo(-n,-e+s),i.lineTo(-n,-e),i.lineTo(-t,-e),i.lineTo(-t,-20-n),i.lineTo(-t+s,-20-n),i.lineTo(-t+s,-20-r),i.lineTo(-t+o,-20-r),i.lineTo(-t+o,-20+r),i.lineTo(-t+s,-20+r),i.lineTo(-t+s,-20+n),i.lineTo(-t,-20+n),i.lineTo(-t,-n),i.lineTo(-t+s,-n),i.lineTo(-t+s,-r),i.lineTo(-t+o,-r),i.lineTo(-t+o,r),i.lineTo(-t+s,r),i.lineTo(-t+s,n),i.lineTo(-t,n),i.lineTo(-t,20-n),i.lineTo(-t+s,20-n),i.lineTo(-t+s,20-r),i.lineTo(-t+o,20-r),i.lineTo(-t+o,20+r),i.lineTo(-t+s,20+r),i.lineTo(-t+s,20+n),i.lineTo(-t,20+n),i.lineTo(-t,e),i.lineTo(-n,e),i.lineTo(-n,e-s),i.lineTo(-r,e-s),i.lineTo(-r,e-o),i.lineTo(r,e-o),i.lineTo(r,e-s),i.lineTo(n,e-s),i.lineTo(n,e),i.lineTo(t,e);const a=new Pn;a.absarc(0,20,2.25,0,Math.PI*2,!0),i.holes.push(a);const l=new Pn;l.absarc(0,0,2.25,0,Math.PI*2,!0),i.holes.push(l);const c=new Pn;return c.absarc(0,-20,2.25,0,Math.PI*2,!0),i.holes.push(c),i}function b_(i){return new sn(y_,{depth:i,bevelEnabled:!1,steps:1})}function pr(i="bottom"){const t=new An,e=10,n=3,s=1.8,r=5.5,o=5;t.moveTo(e,e),i==="right"||(t.lineTo(e,n),t.lineTo(e-s,n),t.lineTo(e-s,r),t.lineTo(e-o,r),t.lineTo(e-o,-r),t.lineTo(e-s,-r),t.lineTo(e-s,-n),t.lineTo(e,-n)),t.lineTo(e,-e),i==="bottom"||(t.lineTo(n,-e),t.lineTo(n,-e+s),t.lineTo(r,-e+s),t.lineTo(r,-e+o),t.lineTo(-r,-e+o),t.lineTo(-r,-e+s),t.lineTo(-n,-e+s),t.lineTo(-n,-e)),t.lineTo(-e,-e),i==="left"||(t.lineTo(-e,-n),t.lineTo(-e+s,-n),t.lineTo(-e+s,-r),t.lineTo(-e+o,-r),t.lineTo(-e+o,r),t.lineTo(-e+s,r),t.lineTo(-e+s,n),t.lineTo(-e,n)),t.lineTo(-e,e),i==="top"||(t.lineTo(-n,e),t.lineTo(-n,e-s),t.lineTo(-r,e-s),t.lineTo(-r,e-o),t.lineTo(r,e-o),t.lineTo(r,e-s),t.lineTo(n,e-s),t.lineTo(n,e)),t.lineTo(e,e);const a=new Pn;return a.absarc(0,0,2.25,0,Math.PI*2,!0),t.holes.push(a),t}const Nc={top:pr("top"),bottom:pr("bottom"),left:pr("left"),right:pr("right")};function w_(i,t="bottom"){const e=Nc[t]||Nc.bottom;return new sn(e,{depth:i,bevelEnabled:!1,steps:1})}function A_(i){return new sn(S_,{depth:i,bevelEnabled:!1,steps:1})}function C_(i){return new sn(E_,{depth:i,bevelEnabled:!1,steps:1})}function Bo(i,t,e=!0){const s=Math.min(2048,Math.max(256,Math.round(i*4))),r=Math.min(2048,Math.max(256,Math.round(t*4))),o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");a.fillStyle="#ffffff",a.fillRect(0,0,s,r),a.fillStyle="#000000";const l=7,h=3.1/2*(s/i),u=15,d={x:35,y:35},p={x:i-35,y:35};for(let _=l/2;_<i;_+=l)for(let m=l/2;m<t;m+=l){if(e){const y=Math.hypot(_-d.x,m-d.y),M=Math.hypot(_-p.x,m-p.y);if(y<u+2.5||M<u+2.5)continue}const f=_/i*s,b=m/t*r;a.beginPath(),a.arc(f,b,h,0,Math.PI*2),a.fill()}if(e){const _=u*(s/i);a.beginPath(),a.arc(d.x/i*s,d.y/t*r,_,0,Math.PI*2),a.arc(p.x/i*s,p.y/t*r,_,0,Math.PI*2),a.fill()}const g=new Ur(o);return g.wrapS=He,g.wrapT=He,g.minFilter=be,g.magFilter=be,g}function Oc(i,t){const n=Math.min(1024,Math.max(128,Math.round(i*3))),s=Math.min(2048,Math.max(256,Math.round(t*3))),r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d");o.fillStyle="rgba(235, 242, 248, 0.72)",o.fillRect(0,0,n,s);const a=document.createElement("canvas");a.width=n,a.height=s;const l=a.getContext("2d");l.fillStyle="#808080",l.fillRect(0,0,n,s);const h=6/t*s;for(let p=0;p<s;p+=h){const g=Math.min(s,p+h),_=g-p,m=o.createLinearGradient(0,p,0,g);m.addColorStop(0,"rgba(140, 165, 185, 0.95)"),m.addColorStop(.18,"rgba(255, 255, 255, 1.0)"),m.addColorStop(.5,"rgba(220, 235, 248, 0.55)"),m.addColorStop(.82,"rgba(240, 248, 255, 0.80)"),m.addColorStop(1,"rgba(140, 165, 185, 0.95)"),o.fillStyle=m,o.fillRect(0,p,n,_);const f=Math.max(1.5,Math.round(h*.12));o.fillStyle="rgba(90, 115, 135, 0.85)",o.fillRect(0,p,n,f);const b=Math.max(1.5,Math.round(h*.16));o.fillStyle="rgba(255, 255, 255, 0.98)",o.fillRect(0,p+f,n,b);const y=l.createLinearGradient(0,p,0,g);y.addColorStop(0,"#1a1a1a"),y.addColorStop(.2,"#f0f0f0"),y.addColorStop(.5,"#999999"),y.addColorStop(.8,"#d8d8d8"),y.addColorStop(1,"#1a1a1a"),l.fillStyle=y,l.fillRect(0,p,n,_)}const u=new Ur(r);u.wrapS=He,u.wrapT=He,u.minFilter=be,u.magFilter=be;const d=new Ur(a);return d.wrapS=He,d.wrapT=He,d.minFilter=be,d.magFilter=be,{map:u,bumpMap:d}}function R_(i,t,e=!1,n=!1){return e?"AFS-2020-5":i==="2060"?"AFS-2060-4":i==="2040"?t==="black"?"AFS-2040-4-BK":"AFS-2040-4":n&&t==="silver"?"AFSF-2020-4":t==="black"?"AFS-2020-4-BK":"AFS-2020-4"}function he(i,t,e,n=!1,s=!1){const r=Math.round(t);return`${R_(i,e,n,s)}-${r}`}class P_{constructor(t){this.materials=t,this.root=new Ie,this.root.name="CageRoot",this.frameGroup=new Ie,this.frameGroup.name="Frames",this.root.add(this.frameGroup),this.panelGroup=new Ie,this.panelGroup.name="Panels",this.root.add(this.panelGroup),this.doorGroup=new Ie,this.doorGroup.name="Doors",this.root.add(this.doorGroup),this.feetGroup=new Ie,this.feetGroup.name="Feet",this.root.add(this.feetGroup),this.params={W:750,D:450,H:300,cageType:"A",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,hasFloorReinforcement:!1,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,frontWideFrame:"2x",footType:"rubber",showPanels:!0,doorState:"closed",frameColor:"silver",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"}},this.activeGeometries=[],this.activeTextures=[],this.activeMaterials=[],this.partsList=[]}disposeResources(){for(const t of this.activeGeometries)t.dispose();this.activeGeometries=[];for(const t of this.activeTextures)t.dispose();this.activeTextures=[];for(const t of this.activeMaterials)t.dispose();this.activeMaterials=[]}clearGroup(t){for(;t.children.length>0;){const e=t.children[0];t.remove(e)}}addFrameMember(t,e,n,s,r="",o=null,a="bottom"){let l;t==="2060"?l=C_(e):t==="2040"?l=A_(e):t==="2020_flat"?l=w_(e,a):l=b_(e),l.translate(0,0,-e/2),this.activeGeometries.push(l);const c=new gt(l,o||this.materials.aluminum);return c.position.copy(n),c.rotation.copy(s),c.castShadow=!0,c.receiveShadow=!0,c.name=r,this.frameGroup.add(c),c}addEndCap(t,e,n){const a=new An;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const l={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},c=new sn(a,l);c.translate(0,0,-1.5),this.activeGeometries.push(c);const h=new gt(c,this.materials.endCapMaterial);return h.position.set(t,e,n),h.castShadow=!0,h.receiveShadow=!0,h.name="M4エンドキャップ",this.frameGroup.add(h),h}createWireMesh(t,e,n){const s=new Ie;s.name=`WireMesh_P${n}_${t}x${e}`;const r=1.6,o=Math.max(2,Math.floor(e/n)+1),a=-((o-1)*n)/2,l=new pe(r,r,t,8);l.rotateZ(Math.PI/2),this.activeGeometries.push(l);for(let d=0;d<o;d++){const p=new gt(l,this.materials.wireMesh);p.position.set(0,r,a+d*n),p.castShadow=!0,s.add(p)}const c=Math.max(2,Math.floor(t/n)+1),h=-((c-1)*n)/2,u=new pe(r,r,e,8);u.rotateX(Math.PI/2),this.activeGeometries.push(u);for(let d=0;d<c;d++){const p=new gt(u,this.materials.wireMesh);p.position.set(h+d*n,-r,0),p.castShadow=!0,s.add(p)}return s}update(t){if(t&&t.panelConfig){this.params.panelConfig=Object.assign({},this.params.panelConfig,t.panelConfig);const D={...t};delete D.panelConfig,Object.assign(this.params,D)}else t&&Object.assign(this.params,t);const{W:e,D:n,H:s,cageType:r,frontWindowH:o,hasSideReinforcement:a,sideOpeningH:l,showPanels:c,frameColor:h,hasFloorReinforcement:u,hasTopReinforcement:d,footType:p}=this.params,g=h==="silver";h&&this.materials.setFrameColor(h),this.clearGroup(this.frameGroup),this.clearGroup(this.panelGroup),this.clearGroup(this.doorGroup),this.clearGroup(this.feetGroup),this.disposeResources(),this._doorAnim=null,this.partsList=[];const _=new Ve(0,0,0),m=new Ve(0,Math.PI/2,0),f=new Ve(Math.PI/2,0,0),b=Math.max(10,s-40),y=Math.max(10,n-6);if(r==="A"){this.addFrameMember("2020",y,new C(-e/2+10,10,0),_,"床・左2020"),this.addFrameMember("2020",y,new C(e/2-10,10,0),_,"床・右2020"),this.recordPart(he("2020",y,h),y,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const D=Math.max(10,e-40),L=this.params.frontWideFrame||"2x";L==="3x"?h==="black"?(this.addFrameMember("2040",D,new C(0,20,n/2-10),m,"床・正面2040 (3倍幅下段)"),this.recordPart(he("2040",D,"black"),D,1,"床面 正面 3倍幅下段 (40mm幅・ブラック)","frame"),this.addFrameMember("2020",D,new C(0,50,n/2-10),m,"床・正面2020 (3倍幅上段)"),this.recordPart(he("2020",D,"black"),D,1,"床面 正面 3倍幅上段 (20mm幅・ブラック2段構成)","frame")):(this.addFrameMember("2060",D,new C(0,30,n/2-10),m,"床・正面2060 (3倍幅)"),this.recordPart(he("2060",D,"silver"),D,1,"床面 正面 3倍幅 (AFS-2060-4)","frame")):L==="2x"?(this.addFrameMember("2040",D,new C(0,20,n/2-10),m,"床・正面2040 (2倍幅)"),this.recordPart(he("2040",D,h),D,1,"床面 正面 2倍幅 (AFS-2040・内側)","frame")):(this.addFrameMember("2020",D,new C(0,10,n/2-10),m,"床・正面2020 (標準幅)"),this.recordPart(he("2020",D,h),D,1,"床面 正面 (標準2020)","frame"));const R=Math.max(10,e-40);if(this.addFrameMember("2020",R,new C(0,10,-n/2+10),m,"床・背面2020"),this.recordPart(he("2020",R,h),R,1,"床面 背面","frame"),u){const x=Math.max(10,n-40),A=g?"2020_flat":"2020";this.addFrameMember(A,x,new C(0,10,0),_,"床・中央補強2020",null,"top"),this.recordPart(he("2020",x,h,!1,!0),x,1,"床面 中央補強 (2分割)","frame")}const I=s/2;this.addFrameMember("2020",b,new C(-e/2+10,I,n/2-10),f,"柱・手前左"),this.addFrameMember("2020",b,new C(e/2-10,I,n/2-10),f,"柱・手前右"),this.addFrameMember("2020",b,new C(-e/2+10,I,-n/2+10),f,"柱・奥左"),this.addFrameMember("2020",b,new C(e/2-10,I,-n/2+10),f,"柱・奥右"),this.recordPart(he("2020",b,h),b,4,"柱 (4隅・床奥行き乗せ)","frame"),this.addFrameMember("2020",y,new C(-e/2+10,s-10,0),_,"天面・左2020"),this.addFrameMember("2020",y,new C(e/2-10,s-10,0),_,"天面・右2020"),this.recordPart(he("2020",y,h),y,2,"天面 左右通し (前後3mm短縮・キャップ取付)","frame");const E=Math.max(10,e-40);if(this.addFrameMember("2020",E,new C(0,s-10,-n/2+10),m,"天面・背面2020"),this.addFrameMember("2020",E,new C(0,s-10,n/2-10),m,"天面・手前2020"),this.recordPart(he("2020",E,h),E,2,"天面 前後","frame"),d||e>940){const x=Math.max(10,n-40),A=g?"2020_flat":"2020";this.addFrameMember(A,x,new C(0,s-10,0),_,"天面・中央補強2020",null,"bottom"),this.recordPart(he("2020",x,h,!1,!0),x,1,"天面 中央補強 (2分割)","frame")}}else{this.addFrameMember("2020",y,new C(-e/2+10,10,0),_,"床・左2020"),this.addFrameMember("2020",y,new C(e/2-10,10,0),_,"床・右2020"),this.recordPart(he("2020",y,h),y,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const D=Math.max(10,e-40);if(this.addFrameMember("2020",D,new C(0,10,n/2-10),m,"床・手前2020"),this.addFrameMember("2020",D,new C(0,10,-n/2+10),m,"床・背面2020"),this.recordPart(he("2020",D,h),D,2,"床面 前後","frame"),u){const A=Math.max(10,n-40),z=g?"2020_flat":"2020";this.addFrameMember(z,A,new C(0,10,0),_,"床・中央補強2020",null,"top"),this.recordPart(he("2020",A,h,!1,!0),A,1,"床面 中央補強 (2分割)","frame")}const L=s/2;this.addFrameMember("2020",b,new C(-e/2+10,L,n/2-10),f,"柱・手前左"),this.addFrameMember("2020",b,new C(e/2-10,L,n/2-10),f,"柱・手前右"),this.addFrameMember("2020",b,new C(-e/2+10,L,-n/2+10),f,"柱・奥左"),this.addFrameMember("2020",b,new C(e/2-10,L,-n/2+10),f,"柱・奥右"),this.recordPart(he("2020",b,h),b,4,"柱 (4隅)","frame"),this.addFrameMember("2020",y,new C(-e/2+10,s-10,0),_,"天面・左2020"),this.addFrameMember("2020",y,new C(e/2-10,s-10,0),_,"天面・右2020"),this.recordPart(he("2020",y,h),y,2,"天面 左右通し (前後3mm短縮・キャップ取付)","frame");const R=Math.max(10,e-40);if(this.addFrameMember("2020",R,new C(0,s-10,-n/2+10),m,"天面・背面2020"),this.addFrameMember("2020",R,new C(0,s-10,n/2-10),m,"天面・手前2020"),this.recordPart(he("2020",R,h),R,2,"天面 前後","frame"),d||e>940){const A=Math.max(10,n-40),z=g?"2020_flat":"2020";this.addFrameMember(z,A,new C(0,s-10,0),_,"天面・中央補強2020",null,"bottom"),this.recordPart(he("2020",A,h,!1,!0),A,1,"天面 中央補強 (2分割)","frame")}const I=20+o+10,E=Math.max(10,e-40),x=g?"2020_flat":"2020";this.addFrameMember(x,E,new C(0,I,n/2-10),m,"正面・中桟2020",null,"right"),this.recordPart(he("2020",E,h,!1,!0),E,1,"正面 中桟 (レール受け)","frame")}const M=[{x:-e/2+10,y:10,z:n/2-1.5},{x:e/2-10,y:10,z:n/2-1.5},{x:-e/2+10,y:s-10,z:n/2-1.5},{x:e/2-10,y:s-10,z:n/2-1.5},{x:-e/2+10,y:10,z:-n/2+1.5},{x:e/2-10,y:10,z:-n/2+1.5},{x:-e/2+10,y:s-10,z:-n/2+1.5},{x:e/2-10,y:s-10,z:-n/2+1.5}];for(const D of M)this.addEndCap(D.x,D.y,D.z);if(this.recordPart("ECP-2020-4","-",8,"奥行きフレーム両端 (前後計8箇所)","frame",{partCode:"ECP-2020-4",lengthMm:null,unitType:"piece"}),a){const D=Math.max(10,n-40),L=20+l+10,R=g?"2020_flat":"2020";this.addFrameMember(R,D,new C(-e/2+10,L,0),_,"側面補強・左2020",null,"right"),this.addFrameMember(R,D,new C(e/2-10,L,0),_,"側面補強・右2020",null,"left"),this.recordPart(he("2020",D,h,!1,!0),D,2,"側面 補強フレーム (左右)","frame")}this.buildPanels(m,_),this.buildDoors(),this.buildDoorPartsRecord(),this.params.footType==="caster"?this.buildCasters():this.buildFeet(),this.panelGroup.visible=c,this.doorGroup.visible=c}buildPanels(t,e){const{W:n,D:s,H:r,cageType:o,frontWindowH:a,hasSideReinforcement:l,sideOpeningH:c,hasFloorReinforcement:h,hasTopReinforcement:u,frameColor:d}=this.params,p=this.params.panelConfig||{},g=3,_=p.floor||"acrylic",m=p.back||"acrylic",f=p.side||"acrylic",b=p.sideUpper||"punching",y=p.sideLower||"acrylic",M=p.top||"punching",D=p.topLeft||"punching",L=p.topRight||"punching",R=s-30,I=_==="black_matte",E=I?this.materials.blackMatteAcrylic:this.materials.acrylic,x=I?"アクリル黒両面マット 3.0mm 底板":"透明アクリル 3.0mm 底板",A=I?"acrylic_black_matte_3_0":"acrylic_extrusion_3_0";if(h){const K=(n-60)/2,st=Math.round(K+10),B=new fe(st,g,R);this.activeGeometries.push(B);const Y=new gt(B,E);Y.position.set(-K/2-10,20-g/2,0),this.panelGroup.add(Y);const it=new gt(B,E);it.position.set(K/2+10,20-g/2,0),this.panelGroup.add(it),this.recordPart(x,`${st} x ${R} mm`,2,"床面 (2分割)","panel",{panelCode:A,partCode:A,widthMm:st,heightMm:R,unitType:"m2"})}else{const K=n-30,st=new fe(K,g,R);this.activeGeometries.push(st);const B=new gt(st,E);B.position.set(0,20-g/2,0),this.panelGroup.add(B),this.recordPart(x,`${K} x ${R} mm`,1,"床面 (1枚)","panel",{panelCode:A,partCode:A,widthMm:K,heightMm:R,unitType:"m2"})}const z=n-30,O=r-30;if(m==="punching"){const K=Bo(z,O,!1);this.activeTextures.push(K);const st=this.materials.createPunchingMaterial(K);this.activeMaterials.push(st);const B=new $n(z,O);this.activeGeometries.push(B);const Y=new gt(B,st);Y.position.set(0,r/2,-s/2+10),this.panelGroup.add(Y),this.recordPart("塩ビパンチングボード 透明 3.0mm 背板",`${z} x ${O} mm`,1,"背面 (通気パネル・φ3.1-P7)","panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:z,heightMm:O,unitType:"m2"})}else if(m==="polyca"){const{map:K,bumpMap:st}=Oc(z,O);this.activeTextures.push(K,st);const B=this.materials.createPolycaMaterial(K,st);this.activeMaterials.push(B);const Y=new fe(z,O,4);this.activeGeometries.push(Y);const it=new gt(Y,B);it.position.set(0,r/2,-s/2+10),this.panelGroup.add(it),this.recordPart("中空ポリカ 4.0mm 背板",`${z} x ${O} mm`,1,"背面 (中空ポリカ・横筋)","panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:z,heightMm:O,unitType:"m2"})}else if(m==="black_matte"){const K=new fe(z,O,g);this.activeGeometries.push(K);const st=new gt(K,this.materials.blackMatteAcrylic);st.position.set(0,r/2,-s/2+10),this.panelGroup.add(st),this.recordPart("アクリル黒両面マット 3.0mm 背板",`${z} x ${O} mm`,1,"背面","panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:z,heightMm:O,unitType:"m2"})}else{const K=new fe(z,O,g);this.activeGeometries.push(K);const st=new gt(K,this.materials.acrylic);st.position.set(0,r/2,-s/2+10),this.panelGroup.add(st),this.recordPart("透明アクリル 3.0mm 背板",`${z} x ${O} mm`,1,"背面","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:z,heightMm:O,unitType:"m2"})}const G=u||n>940,q=!G&&M==="punching",X=G&&D==="punching"&&L==="punching";let j="back_top_2";if(q?j="top_single_2":X&&(j="top_split_4"),j==="back_top_2"){const K=r-20-35,st=-s/2+10,B=new pe(19,19,4.5,32);B.rotateX(Math.PI/2),this.activeGeometries.push(B);const Y=-(n-40)/2+35,it=(n-40)/2-35,rt=new gt(B,this.materials.grommetMaterial);rt.position.set(Y,K,st),this.panelGroup.add(rt);const _t=new gt(B,this.materials.grommetMaterial);_t.position.set(it,K,st),this.panelGroup.add(_t);const xt=G?"背面板 上部左右2箇所 (天面仕様・端から35mm)":"背面板 上部左右 (端から35mm)";this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,xt,"other")}const W=s-30,ht=(K,st,B,Y,it)=>{const rt=it?`${it}・`:"",_t=it?`${it} `:"";if(Y==="punching"){const xt=Bo(K,st,!1);this.activeTextures.push(xt);const ft=this.materials.createPunchingMaterial(xt);this.activeMaterials.push(ft);const yt=new $n(K,st);yt.rotateY(Math.PI/2),this.activeGeometries.push(yt);const $=new gt(yt,ft);$.position.set(-n/2+10,B,0),this.panelGroup.add($);const et=new gt(yt,ft);et.position.set(n/2-10,B,0),this.panelGroup.add(et),this.recordPart(`塩ビパンチングボード 透明 3.0mm 側板 (${rt}φ3.1-P7)`,`${K} x ${st} mm`,2,`左右側面 ${_t}(通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:K,heightMm:st,unitType:"m2"})}else if(Y==="polyca"){const{map:xt,bumpMap:ft}=Oc(K,st);this.activeTextures.push(xt,ft);const yt=this.materials.createPolycaMaterial(xt,ft);this.activeMaterials.push(yt);const $=new fe(4,st,K);this.activeGeometries.push($);const et=new gt($,yt);et.position.set(-n/2+10,B,0),this.panelGroup.add(et);const w=new gt($,yt);w.position.set(n/2-10,B,0),this.panelGroup.add(w),this.recordPart(`中空ポリカ 4.0mm 側板 (${rt}奥行筋)`,`${K} x ${st} mm`,2,`左右側面 ${_t}(中空ポリカ)`,"panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:K,heightMm:st,unitType:"m2"})}else if(Y==="black_matte"){const xt=new fe(g,st,K);this.activeGeometries.push(xt);const ft=new gt(xt,this.materials.blackMatteAcrylic);ft.position.set(-n/2+10,B,0),this.panelGroup.add(ft);const yt=new gt(xt,this.materials.blackMatteAcrylic);yt.position.set(n/2-10,B,0),this.panelGroup.add(yt),this.recordPart(`アクリル黒両面マット 3.0mm 側板 (${rt})`,`${K} x ${st} mm`,2,`左右側面 ${_t}`,"panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:K,heightMm:st,unitType:"m2"})}else{const xt=new fe(g,st,K);this.activeGeometries.push(xt);const ft=new gt(xt,this.materials.acrylic);ft.position.set(-n/2+10,B,0),this.panelGroup.add(ft);const yt=new gt(xt,this.materials.acrylic);yt.position.set(n/2-10,B,0),this.panelGroup.add(yt),this.recordPart(`透明アクリル 3.0mm 側板 (${rt})`,`${K} x ${st} mm`,2,`左右側面 ${_t}`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:K,heightMm:st,unitType:"m2"})}};if(l){const K=c,st=Math.max(10,r-60-c),B=Math.round(K+10),Y=Math.round(st+10);ht(W,B,20+K/2,y,"下部");const it=(40+c+(r-20))/2;if(ht(W,Y,it,b,"上部"),this.params.hasSideVentCover&&b==="punching"){const _t=st+10,xt=s-2,ft=new fe(1.5,_t,xt);this.activeGeometries.push(ft);const yt=-n/2-1.5/2,$=n/2+1.5/2,et=new gt(ft,this.materials.ventCoverAcrylic);et.position.set(yt,it,0),et.castShadow=!0,this.panelGroup.add(et);const w=new gt(ft,this.materials.ventCoverAcrylic);w.position.set($,it,0),w.castShadow=!0,this.panelGroup.add(w);const At=(s-2)/2-9,ot=-(s-2)/2+9,mt=it+_t/2-40,ut=it-_t/2+40,Nt=[{y:mt,z:At},{y:mt,z:ot},{y:ut,z:At},{y:ut,z:ot}];for(const T of Nt)this.addThumbScrew(-n/2-1.5,T.y,T.z,-1),this.addThumbScrew(n/2+1.5,T.y,T.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${_t} x ${xt} mm`,2,"左右側面上部 外張り (保温・換気量調整用)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:_t,heightMm:xt,unitType:"m2"});const St=d==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${St})`,"外径φ15mm / M4 (手締め・工具不要)",8,"側面換気量調整板 固定用 (左右計8箇所)","other")}}else{const K=r-30;ht(W,K,r/2,f,"")}const tt=(K,st,B,Y,it,rt=!1)=>{const _t=Y&&Y.startsWith("mesh"),xt=d==="black";if(_t){const ft=parseInt(Y.replace("mesh",""),10);if(xt){const yt=Math.max(10,Math.round(st-6)),$=Math.max(10,Math.round(K-46)),et=B-K/2+10,w=B+K/2-10;this.addFrameMember("2020",yt,new C(et,r-10,0),e,`天面インナー左2020 (${it})`,this.materials.silverInnerFrame),this.addFrameMember("2020",yt,new C(w,r-10,0),e,`天面インナー右2020 (${it})`,this.materials.silverInnerFrame);const At=st/2-10,ot=-st/2+10;this.addFrameMember("2020",$,new C(B,r-10,At),t,`天面インナー前2020 (${it})`,this.materials.silverInnerFrame),this.addFrameMember("2020",$,new C(B,r-10,ot),t,`天面インナー後2020 (${it})`,this.materials.silverInnerFrame),this.recordPart(he("2020",yt,"silver",!0),yt,2,`天面 金網取付用インナーフレーム左右 (${it}・黒ケージ専用)`,"frame"),this.recordPart(he("2020",$,"silver",!0),$,2,`天面 金網取付用インナーフレーム前後 (${it}・黒ケージ専用)`,"frame");const mt=Math.max(10,Math.round(K-30)),ut=Math.max(10,Math.round(st-30)),Nt=this.createWireMesh(mt,ut,ft);Nt.position.set(B,r-10,0),this.panelGroup.add(Nt);const St=`FENP${ft}-A${mt}-B${ut}`,T=`wire_mesh_${ft}`;this.recordPart(`金網 ${ft}mmピッチ（黒粉体塗装） (型番: ${St})`,`${mt} x ${ut} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${it})`,"panel",{panelCode:T,partCode:T,widthMm:mt,heightMm:ut,unitType:"m2"})}else{const yt=Math.max(10,Math.round(K+10)),$=Math.max(10,Math.round(st+10)),et=this.createWireMesh(yt,$,ft);et.position.set(B,r-10,0),this.panelGroup.add(et);const w=`FENP${ft}-A${yt}-B${$}`,At=`wire_mesh_${ft}`;this.recordPart(`金網 ${ft}mmピッチ（黒粉体塗装） (型番: ${w})`,`${yt} x ${$} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${it})`,"panel",{panelCode:At,partCode:At,widthMm:yt,heightMm:$,unitType:"m2"})}}else if(Y==="acrylic"){const ft=Math.round(K+10),yt=Math.round(st+10),$=new fe(ft,g,yt);this.activeGeometries.push($);const et=new gt($,this.materials.acrylic);et.position.set(B,r-20+g/2,0),this.panelGroup.add(et),this.recordPart("透明アクリル 3.0mm 天板",`${ft} x ${yt} mm`,1,`天面 (${it})`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:ft,heightMm:yt,unitType:"m2"})}else{const ft=Math.round(K+10),yt=Math.round(st+10),$=Bo(ft,yt,rt);this.activeTextures.push($);const et=this.materials.createPunchingMaterial($);this.activeMaterials.push(et);const w=new $n(ft,yt);w.rotateX(-Math.PI/2),this.activeGeometries.push(w);const At=new gt(w,et);if(At.position.set(B,r-20+g/2,0),this.panelGroup.add(At),this.recordPart("塩ビパンチングボード 透明 3.0mm 天板 (φ3.1-P7)",`${ft} x ${yt} mm`,1,`天面 (${it}・通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:ft,heightMm:yt,unitType:"m2"}),rt){const ot=new pe(19,19,4.5,32);this.activeGeometries.push(ot);const mt=r-20+g/2,ut=-yt/2+35,Nt=B-ft/2+35,St=B+ft/2-35,T=new gt(ot,this.materials.grommetMaterial);T.position.set(Nt,mt,ut),this.panelGroup.add(T);const v=new gt(ot,this.materials.grommetMaterial);v.position.set(St,mt,ut),this.panelGroup.add(v)}}},lt=s-40;if(G){const K=(n-60)/2,st=-K/2-10,B=K/2+10,Y=j==="top_split_4";tt(K,lt,st,D,"左側",Y),tt(K,lt,B,L,"右側",Y),j==="top_split_4"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",4,"天面板 奥側各2箇所 (計4箇所・端から35mm)","other")}else{const K=j==="top_single_2";tt(n-40,lt,0,M,"全面",K),j==="top_single_2"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,"天面板 奥側左右 (端から35mm)","other")}if(o==="C"){const K=n-30,st=a+10,B=new fe(K,st,g);this.activeGeometries.push(B);const Y=new gt(B,this.materials.acrylic);Y.position.set(0,20+a/2,s/2-10),this.panelGroup.add(Y),this.recordPart("透明アクリル 3.0mm 前窓",`${K} x ${st} mm`,1,"正面 下部はめ殺し固定窓","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:K,heightMm:st,unitType:"m2"})}}buildGlassRails(t,e,n,s){const{frameColor:r}=this.params,o=new An;o.moveTo(-8,2.5),o.lineTo(-6.5,2.5),o.lineTo(-6.5,7),o.lineTo(-5,7),o.lineTo(-5,2),o.lineTo(-1.5,2),o.lineTo(-1.5,7),o.lineTo(1.5,7),o.lineTo(1.5,2),o.lineTo(5,2),o.lineTo(5,7),o.lineTo(6.5,7),o.lineTo(6.5,2.5),o.lineTo(8,2.5),o.lineTo(8,0),o.lineTo(-8,0),o.closePath();const a={depth:t,bevelEnabled:!1,steps:1},l=new sn(o,a);l.translate(0,0,-t/2),l.rotateY(-Math.PI/2),this.activeGeometries.push(l);const c=new gt(l,this.materials.railMaterial);c.position.set(0,e,s),c.castShadow=!0,c.receiveShadow=!0,c.name="下側ガラスレール",this.doorGroup.add(c);const h=new An;h.moveTo(-8,12-2.5),h.lineTo(-6.5,12-2.5),h.lineTo(-6.5,0),h.lineTo(-5,0),h.lineTo(-5,11),h.lineTo(-1.5,11),h.lineTo(-1.5,0),h.lineTo(1.5,0),h.lineTo(1.5,11),h.lineTo(5,11),h.lineTo(5,0),h.lineTo(6.5,0),h.lineTo(6.5,12-2.5),h.lineTo(8,12-2.5),h.lineTo(8,12),h.lineTo(-8,12),h.closePath();const u={depth:t,bevelEnabled:!1,steps:1},d=new sn(h,u);d.translate(0,0,-t/2),d.rotateY(-Math.PI/2),this.activeGeometries.push(d);const p=new gt(d,this.materials.railMaterial);p.position.set(0,n-12,s),p.castShadow=!0,p.receiveShadow=!0,p.name="上側ガラスレール",this.doorGroup.add(p)}buildAntiFlexRails(t,e,n,s,r,o){const a=Math.max(10,e-25),l=new An;l.moveTo(-8,2.5),l.lineTo(-6.5,2.5),l.lineTo(-6.5,7),l.lineTo(-5,7),l.lineTo(-5,2),l.lineTo(-1.5,2),l.lineTo(-1.5,7),l.lineTo(1.5,7),l.lineTo(1.5,2),l.lineTo(5,2),l.lineTo(5,7),l.lineTo(6.5,7),l.lineTo(6.5,2.5),l.lineTo(8,2.5),l.lineTo(8,0),l.lineTo(-8,0),l.closePath();const c={depth:a,bevelEnabled:!1,steps:1},h=(n+7+s-12)/2,u=new sn(l,c);u.translate(0,0,-a/2);const d=new ie().set(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);u.applyMatrix4(d),this.activeGeometries.push(u);const p=new gt(u,this.materials.railMaterial);p.position.set(-t/2,h,r),p.castShadow=!0,p.receiveShadow=!0,p.name="左側たわみ防止レール",this.doorGroup.add(p);const g=new sn(l,c);g.translate(0,0,-a/2);const _=new ie().set(0,-1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);g.applyMatrix4(_),this.activeGeometries.push(g);const m=new gt(g,this.materials.railMaterial);m.position.set(t/2,h,r),m.castShadow=!0,m.receiveShadow=!0,m.name="右側たわみ防止レール",this.doorGroup.add(m)}buildDoors(){this.clearGroup(this.doorGroup);const{W:t,D:e,H:n,cageType:s,frontWindowH:r,doorState:o,hasDoorAntiFlex:a,frameColor:l}=this.params,c=t-40;let h=(c+30)/2;a&&(h-=2);let u=0;const d=n-20;if(s==="A"){const st=this.params.frontWideFrame||"2x";st==="3x"?u=60:st==="2x"?u=40:u=20}else u=40+r;const p=Math.max(10,d-u),g=e/2-10;this.buildGlassRails(c,u,d,g),a&&this.buildAntiFlexRails(c,p,u,d,g,l);const _=Math.max(10,p-9),m=u+2.5+_/2,f=3,b=new fe(h,_,f);this.activeGeometries.push(b);const y=Math.max(0,h-50),M=g-3.25,D=g+3.25,L=a?2:0,R=-c/2+L+h/2,I=c/2-L-h/2;let E=R,x=I;o==="left_open"?E=R+y:o==="right_open"&&(x=I-y);let A=E,z=x;this._doorAnim&&(A=this._doorAnim.currentLeftX,z=this._doorAnim.currentRightX);const O=new gt(b,this.materials.doorGlassLeft);O.position.set(A,m,M),O.castShadow=!1,this.doorGroup.add(O);const G=-h/2+15,q=this.addKnobScrew(A+G,m,M+f/2),X=new gt(b,this.materials.doorGlassRight);X.position.set(z,m,D),X.castShadow=!1,this.doorGroup.add(X);const j=h/2-15,W=this.addKnobScrew(z+j,m,D+f/2),tt=m-_/2+20,lt=-h/2+15,K=this.addDoorLock(z+lt,tt,D+f/2);this._doorAnim={leftDoor:O,rightDoor:X,leftKnobGroup:q,rightKnobGroup:W,lockGroup:K,leftKnobOffsetX:G,rightKnobOffsetX:j,lockOffsetX:lt,currentLeftX:A,currentRightX:z,targetLeftX:E,targetRightX:x,animating:A!==E||z!==x,startLeftX:A,startRightX:z,startTime:performance.now(),duration:3e3}}buildDoorPartsRecord(){const{W:t,H:e,cageType:n,frontWindowH:s,hasDoorAntiFlex:r,frameColor:o}=this.params,a=t-40;let l=(a+30)/2;r&&(l-=2);let c=0;const h=e-20;if(n==="A"){const f=this.params.frontWideFrame||"2x";f==="3x"?c=60:f==="2x"?c=40:c=20}else c=40+s;const u=Math.max(10,h-c),d=Math.max(10,u-9),p=a,g=o==="black"?"BK":"GY",_=`PGRU-03-4-${g}`,m=`PGRL-03-4-${g}`;if(this.recordPart(_,p,1,"正面開口 上部 (間口高12mm縮小)","frame",{partCode:_,lengthMm:p,unitType:"m"}),this.recordPart(m,p,1,"正面開口 下部 (間口高7mm縮小)","frame",{partCode:m,lengthMm:p,unitType:"m"}),r){const f=Math.max(10,u-25);this.recordPart(m,f,2,"正面スライド扉 左右端 (扉たわみ防止)","frame",{partCode:m,lengthMm:f,unitType:"m"})}this.recordPart("透明アクリル扉 3.0mm",`${Math.round(l)} x ${Math.round(d)} mm`,2,"正面 引き違い (重なり30mm)","panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(l),heightMm:Math.round(d),unitType:"m2"}),this.recordPart("段付きローレットノブ (SUS303, RNSFS4)","外径φ16 / ボスφ8 / 全長9.5mm",2,"扉端から15mm・上下中央","other"),this.recordPart("プッシュ式スライド扉鍵 (C-108)","外径φ18.5mm / 全長30mm (キー付)",1,"右スライド扉 下部 (端から15mm・下端から20mm)","other")}updateDoorAnimation(){if(!this._doorAnim||!this._doorAnim.animating)return;const t=this._doorAnim,e=performance.now()-t.startTime,n=Math.min(1,e/t.duration),s=n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;t.currentLeftX=t.startLeftX+(t.targetLeftX-t.startLeftX)*s,t.currentRightX=t.startRightX+(t.targetRightX-t.startRightX)*s,t.leftDoor&&(t.leftDoor.position.x=t.currentLeftX),t.leftKnobGroup&&(t.leftKnobGroup.position.x=t.currentLeftX+t.leftKnobOffsetX),t.rightDoor&&(t.rightDoor.position.x=t.currentRightX),t.rightKnobGroup&&(t.rightKnobGroup.position.x=t.currentRightX+t.rightKnobOffsetX),t.lockGroup&&(t.lockGroup.position.x=t.currentRightX+t.lockOffsetX),n>=1&&(t.animating=!1)}addKnobScrew(t,e,n){const s=new Ie;s.position.set(t,e,n);const r=new pe(4,4,6,24);r.rotateX(Math.PI/2),this.activeGeometries.push(r);const o=new gt(r,this.materials.handleMaterial);o.position.set(0,0,3),o.castShadow=!0,s.add(o);const a=new pe(8,8,3.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const l=new gt(a,this.materials.handleMaterial);l.position.set(0,0,6+1.75),l.castShadow=!0,s.add(l);const c=new pe(2,2,3,16);c.rotateX(Math.PI/2),this.activeGeometries.push(c);const h=new gt(c,this.materials.grommetMaterial);return h.position.set(0,0,9.5-1.5+.1),s.add(h),this.doorGroup.add(s),s}addDoorLock(t,e,n){const s=new Ie;s.position.set(t,e,n);const r=new pe(9.25,9.25,2.5,32);r.rotateX(Math.PI/2),this.activeGeometries.push(r);const o=new gt(r,this.materials.handleMaterial);o.position.set(0,0,1.25),o.castShadow=!0,s.add(o);const a=new pe(7.75,7.75,20.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const l=new gt(a,this.materials.handleMaterial);l.position.set(0,0,2.5+10.25),l.castShadow=!0,s.add(l);const c=new pe(5.5,5.5,.8,32);c.rotateX(Math.PI/2),this.activeGeometries.push(c);const h=new gt(c,this.materials.handleMaterial);h.position.set(0,0,23+.4),s.add(h);const u=new fe(1.4,6.5,1.2);this.activeGeometries.push(u);const d=new gt(u,this.materials.grommetMaterial);return d.position.set(0,0,23.6),s.add(d),this.doorGroup.add(s),s}addThumbScrew(t,e,n,s){const r=new Ie;r.position.set(t,e,n);const o=new pe(4,4,1.5,24);o.rotateZ(Math.PI/2),this.activeGeometries.push(o);const a=new gt(o,this.materials.thumbScrewMaterial);a.position.set(s*.75,0,0),a.castShadow=!0,r.add(a);const l=new pe(7.5,7.5,4.5,24);l.rotateZ(Math.PI/2),this.activeGeometries.push(l);const c=new gt(l,this.materials.thumbScrewMaterial);c.position.set(s*(1.5+2.25),0,0),c.castShadow=!0,r.add(c);const h=new pe(3,3,.2,16);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);const u=new gt(h,this.materials.grommetMaterial);return u.position.set(-s*.1,0,0),r.add(u),this.panelGroup.add(r),r}buildFeet(){const{W:t,D:e}=this.params,n=11,s=-n/2,r=[-t/2+10,t/2-10],o=[e/2-50,-e/2+50],a=new pe(9,7.5,n,32);this.activeGeometries.push(a);const l=new pe(4,4,4,24);this.activeGeometries.push(l);const c=new pe(3.5,3.5,.8,24);this.activeGeometries.push(c);for(const h of r)for(const u of o){const d=new gt(a,this.materials.grommetMaterial);d.position.set(h,s,u),d.castShadow=!0,d.receiveShadow=!0,this.feetGroup.add(d);const p=new gt(l,this.materials.railMaterial);p.position.set(h,-n+2,u),this.feetGroup.add(p);const g=new gt(c,this.materials.handleMaterial);g.position.set(h,-n+3.6,u),this.feetGroup.add(g)}this.recordPart("ゴム脚 (黒)","外径φ18(上)/φ15(下) x H11mm (M4用座金入)",4,"床面 奥行きフレーム下面 (前後端から50mm・接地用)","other")}buildCasters(){const{W:t,D:e}=this.params,n=[-t/2+10,t/2-10],s=[e/2-7-20,-(e/2-7)+20],r=new fe(20,3,40);this.activeGeometries.push(r);const o=new pe(10,10,12,24);this.activeGeometries.push(o);const a=new fe(2.5,28,22);this.activeGeometries.push(a);const l=new fe(2.5,28,22);this.activeGeometries.push(l);const c=new pe(25,25,20,32);c.rotateZ(Math.PI/2),this.activeGeometries.push(c);const h=new pe(4,4,24,16);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);for(const u of n)for(const d of s){const p=new Ie;p.position.set(u,0,d);const g=new gt(r,this.materials.casterBracket);g.position.set(0,-1.5,0),g.castShadow=!0,p.add(g);const _=new gt(o,this.materials.casterBracket);_.position.set(0,-9,0),p.add(_);const m=new gt(a,this.materials.casterBracket);m.position.set(-10,-27,0),p.add(m);const f=new gt(l,this.materials.casterBracket);f.position.set(10,-27,0),p.add(f);const b=new gt(c,this.materials.casterWheel);b.position.set(0,-41,0),b.castShadow=!0,b.receiveShadow=!0,p.add(b);const y=new gt(h,this.materials.casterBracket);y.position.set(0,-41,0),p.add(y),this.feetGroup.add(p)}this.recordPart("自在キャスター","車輪径φ50 / 取付高66mm",4,"床面 奥行きフレーム下面 (端から7mm控え)","other")}recordPart(t,e,n,s,r="other",o={}){const a=typeof e=="number"?`${Math.round(e)} mm`:e,l=typeof e=="number"?Math.round(e):o.lengthMm||null;let c=t;if(typeof e=="number"&&t.includes("-")){const h=t.split("-");isNaN(h[h.length-1])||(c=h.slice(0,-1).join("-"))}this.partsList.push({name:t,size:a,count:n,note:s,category:r,lengthMm:l,partCode:o.partCode||c,unitType:o.unitType||(typeof e=="number"?"m":"piece"),...o})}getPartsSummary(){return this.partsList}}class L_{constructor(){this.group=new Ie,this.group.name="DimensionLines",this.lineMaterial=new ol({color:165063,linewidth:2,depthTest:!1,transparent:!0,opacity:.85}),this.textSprites=[],this.activeGeometries=[]}clear(){for(;this.group.children.length>0;){const t=this.group.children[0];this.group.remove(t)}for(const t of this.activeGeometries)t.dispose();this.activeGeometries=[];for(const t of this.textSprites)t.material.map&&t.material.map.dispose(),t.material.dispose();this.textSprites=[]}createTextSprite(t,e="#38bdf8",n="#ffffff",s="rgba(20, 26, 38, 0.88)"){const r=document.createElement("canvas");r.width=384,r.height=120;const o=r.getContext("2d");o.fillStyle=s,o.strokeStyle=e,o.lineWidth=4;const a=24;o.beginPath(),o.roundRect(10,10,364,100,a),o.fill(),o.stroke(),o.font="bold 44px sans-serif",o.fillStyle=n,o.textAlign="center",o.textBaseline="middle",o.fillText(t,192,60);const l=new Ur(r);l.minFilter=be;const c=new Oh({map:l,depthTest:!1,transparent:!0}),h=new m0(c);return h.scale.set(90,30,1),this.textSprites.push(h),h}update(t){this.clear();const{W:e,D:n,H:s,cageType:r,frontWindowH:o,hasSideReinforcement:a,sideOpeningH:l}=t,c=5,h=n/2+55,u=this.createTextSprite(`W: ${e} mm`,"#38bdf8","#ffffff");u.position.set(0,c,h),this.group.add(u);const d=e/2+55,p=5,g=this.createTextSprite(`D: ${n} mm`,"#38bdf8","#ffffff");g.position.set(d,p,0),this.group.add(g);const _=-e/2-55,m=n/2,f=this.createTextSprite(`H: ${s} mm`,"#38bdf8","#ffffff");if(f.position.set(_,s/2,m),this.group.add(f),r==="C"){const b=e/2+50,y=n/2+10,M=20+o/2,D=this.createTextSprite(`前窓: ${o} mm`,"#fb923c","#ffffff","rgba(35, 20, 12, 0.9)");D.scale.set(80,27,1),D.position.set(b,M,y),this.group.add(D)}if(a){const b=-e/2-50,y=0,M=20+l/2,D=this.createTextSprite(`側面開口: ${l} mm`,"#34d399","#ffffff","rgba(12, 32, 24, 0.9)");D.scale.set(85,27,1),D.position.set(b,M,y),this.group.add(D)}}setVisible(t){this.group.visible=t}}class D_{constructor(t){this.container=t,this.width=t.clientWidth,this.height=t.clientHeight,this.scene=new Nh,this.scene.background=null,this.camera=new Ge(40,this.width/this.height,1,8e3),this.camera.position.set(-1130,740,1070),this.isAutoRotating=!1,this._autoRotateAngle=0,this._autoRotateSpeed=.003,this._lastAutoParams=null,this.renderer=new f0({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ih,this.renderer.toneMapping=rh,this.renderer.toneMappingExposure=1.05,this.container.appendChild(this.renderer.domElement);const e=new Ia(this.renderer);e.compileEquirectangularShader();const n=e.fromScene(new __,.04).texture;this.scene.environment=n,this.controls=new s_(this.camera,this.renderer.domElement),this.controls.target.set(-60,100,-15),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI-.05,this.controls.minDistance=200,this.controls.maxDistance=4e3,this.setupLighting(),this.setupFloorGrid(),this.materials=new v_,this.cageModel=new P_(this.materials),this.scene.add(this.cageModel.root),this.dimensions=new L_,this.scene.add(this.dimensions.group),window.addEventListener("resize",()=>this.onResize()),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}setupLighting(){const t=new j0(16777215,1975344,.38);t.position.set(0,1e3,0),this.scene.add(t);const e=new dr(16777215,1.35);e.position.set(1e3,1600,1200),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=100,e.shadow.camera.far=4e3;const n=1e3;e.shadow.camera.left=-n,e.shadow.camera.right=n,e.shadow.camera.top=n,e.shadow.camera.bottom=-n,e.shadow.bias=-5e-4,e.shadow.radius=3.5,this.scene.add(e);const s=new dr(16777215,.65);s.position.set(0,1200,0),this.scene.add(s);const r=new dr(16777215,.5);r.position.set(-1e3,1e3,-1200),this.scene.add(r);const o=new dr(2765376,.25);o.position.set(0,-1e3,0),this.scene.add(o)}setupFloorGrid(){this.gridHelper=new e_(2400,24,5924219,3028291),this.gridHelper.position.y=-10,this.scene.add(this.gridHelper);const t=new $n(3e3,3e3),e=new K0({opacity:.35});this.floor=new gt(t,e),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=-10.1,this.floor.receiveShadow=!0,this.scene.add(this.floor)}setFrameColor(t){this.materials.setFrameColor(t)}update(t){const e=t.footType==="caster"?-66:-11;this.gridHelper&&(this.gridHelper.position.y=e),this.floor&&(this.floor.position.y=e-.1),this.cageModel.update(t),this.dimensions.update(t);const n=t.H/2;this.controls.target.set(0,n,0)}setDimensionsVisible(t){this.dimensions.setVisible(t)}setPanelsVisible(t){this.cageModel.panelGroup.visible=t,this.cageModel.doorGroup.visible=t}setDoorState(t){this.cageModel.params.doorState=t,this.cageModel.buildDoors()}setViewPreset(t,e){const n=e.H||300,s=e.W||750,r=e.D||450,o=n/2,a=Math.max(s,r,n)*2.2;switch(this.controls.target.set(0,o,0),t){case"front":this.controls.target.set(0,o,0),this.camera.position.set(0,o,a);break;case"iso":default:{const c=Math.max(s,r,n)*1.5;this.controls.target.set(0,n*.45,0),this.camera.position.set(-c*.82,n*1.05+c*.55,c*.82);break}case"top":this.controls.target.set(0,o,0),this.camera.position.set(0,o+a*1.3,1);break;case"side":this.controls.target.set(0,o,0),this.camera.position.set(a,o,0);break;case"bottom":this.controls.target.set(0,o,0),this.camera.position.set(a*.4,-a*.7,a*.6);break}this.controls.update()}onResize(){this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}setAutoRotate(t,e){if(this.isAutoRotating=t,t){const n=this.controls.target,s=this.camera.position.x-n.x,r=this.camera.position.y-n.y,o=this.camera.position.z-n.z,a=Math.sqrt(s*s+r*r+o*o);this._autoRotateAngle=Math.atan2(o,s),this._autoRotatePhi=Math.asin(Math.max(-1,Math.min(1,r/a))),this._autoTargetYOffset=0,this._autoRadiusScale=1,this._lastAutoParams=e?{...e}:null,this.controls.enableDamping=!1,this.controls.enabled=!1,this._setupAutoRotateDrag()}else this.controls.enabled=!0,this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this._teardownAutoRotateDrag()}_setupAutoRotateDrag(){const t=this.renderer.domElement;this._dragState={active:!1,button:-1,lastY:0},this._onPointerDown=e=>{this._dragState.active=!0,this._dragState.button=e.button,this._dragState.lastY=e.clientY,e.preventDefault()},this._onPointerMove=e=>{if(!this._dragState.active)return;const n=e.clientY-this._dragState.lastY;this._dragState.lastY=e.clientY;const s=.005;if(this._dragState.button===0)this._autoRotatePhi-=n*s,this._autoRotatePhi=Math.max(-.05,Math.min(Math.PI/2-.05,this._autoRotatePhi));else if(this._dragState.button===2){const r=this._lastAutoParams&&this._lastAutoParams.H||300;this._autoTargetYOffset-=n*.5;const o=r*.8;this._autoTargetYOffset=Math.max(-o,Math.min(o,this._autoTargetYOffset))}},this._onPointerUp=()=>{this._dragState.active=!1,this._dragState.button=-1},this._onWheel=e=>{e.preventDefault();const n=.001;this._autoRadiusScale*=1+e.deltaY*n,this._autoRadiusScale=Math.max(.3,Math.min(3,this._autoRadiusScale))},t.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),t.addEventListener("wheel",this._onWheel,{passive:!1}),this._onContextMenu=e=>e.preventDefault(),t.addEventListener("contextmenu",this._onContextMenu)}_teardownAutoRotateDrag(){const t=this.renderer.domElement;this._onPointerDown&&t.removeEventListener("pointerdown",this._onPointerDown),this._onPointerMove&&window.removeEventListener("pointermove",this._onPointerMove),this._onPointerUp&&window.removeEventListener("pointerup",this._onPointerUp),this._onWheel&&t.removeEventListener("wheel",this._onWheel),this._onContextMenu&&t.removeEventListener("contextmenu",this._onContextMenu),this._onPointerDown=null,this._onPointerMove=null,this._onPointerUp=null,this._onWheel=null,this._onContextMenu=null}_calcAutoRotateCamera(t){const e=t&&t.W||750,n=t&&t.D||450,s=t&&t.H||300,r=Math.max(e,n,s)*1.45,o=s*.5;return{radius:r,targetY:o}}animate(){if(requestAnimationFrame(this.animate),this.cageModel.updateDoorAnimation(),this.isAutoRotating&&this._lastAutoParams){this._autoRotateAngle+=this._autoRotateSpeed;const{radius:t,targetY:e}=this._calcAutoRotateCamera(this._lastAutoParams),n=t*(this._autoRadiusScale||1),s=this._autoRotatePhi,r=Math.cos(s),o=Math.cos(this._autoRotateAngle)*n*r,a=Math.sin(this._autoRotateAngle)*n*r,l=e+(this._autoTargetYOffset||0)+n*Math.sin(s),c=e+(this._autoTargetYOffset||0);this.camera.position.set(o,l,a),this.camera.lookAt(0,c,0)}else this.controls.update();this.renderer.render(this.scene,this.camera)}getPartsSummary(){return this.cageModel.getPartsSummary()}captureImage(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/png")}}const ge={frames:{"AFS-2020-4":{name:"2020標準フレーム (シルバー)",unit:"m",weightPerMeter:.437,pricePerMeter:801,note:"標準4面溝あり"},"AFSF-2020-4":{name:"2020フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.44,pricePerMeter:801,note:"補強・中桟用 1面フラット"},"AFSW-2020-4":{name:"2020フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.444,pricePerMeter:801,note:"2面フラット"},"AFS-2040-4":{name:"2040フレーム (シルバー)",unit:"m",weightPerMeter:.752,pricePerMeter:1394,note:"正面2倍幅・40mm高"},"AFSF-2040-4":{name:"2040フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.712,pricePerMeter:1394,note:"40mm幅 1面フラット"},"AFST-2040-4":{name:"2040フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.715,pricePerMeter:1394,note:"40mm幅 2面フラット"},"AFS-2060-4":{name:"2060フレーム (シルバー)",unit:"m",weightPerMeter:1.09,pricePerMeter:1923,note:"正面3倍幅・60mm高"},"AFS-2020-4-BK":{name:"2020フレーム (ブラック)",unit:"m",weightPerMeter:.437,pricePerMeter:1037,note:"ブラックアルマイト"},"AFS-2040-4-BK":{name:"2040フレーム (ブラック)",unit:"m",weightPerMeter:.752,pricePerMeter:1809,note:"ブラックアルマイト 40mm高"},"AFS-2020-5":{name:"2020インナーフレーム (金網受用・シルバー)",unit:"m",weightPerMeter:.404,pricePerMeter:822,note:"黒ケージ金網取付用インナー"}},rails:{"PGRU-03-4-GY":{name:"上側ガラスレール (グレー)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部"},"PGRU-03-4-BK":{name:"上側ガラスレール (ブラック)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部 (黒ケージ連動)"},"PGRL-03-4-GY":{name:"下側ガラスレール (グレー)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用"},"PGRL-03-4-BK":{name:"下側ガラスレール (ブラック)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用 (黒ケージ連動)"}},caps:{"ECP-2020-4":{name:"2020用エンドキャップ",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"奥行きフレーム両端用"}},panels:{acrylic_extrusion_3_0:{name:"透明アクリル 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:7568,note:"標準透明パネル (床・背・側面・天面・固定窓)"},acrylic_cast_3_0:{name:"透明アクリル 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:14652,note:"正面扉専用 (高透明・高平滑パネル)"},polyca_4_0:{name:"中空ポリカ 4.0mm",thicknessMm:4,unit:"m2",weightPerM2:.9,pricePerM2:7500,note:"高断熱・軽量中空ポリカーボネート"},pvc_punching_3_0:{name:"塩ビパンチングボード 透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:4.3,pricePerM2:20092,note:"通気孔パネル (φ3.1-P7)"},acrylic_black_matte_3_0:{name:"アクリル黒両面マット 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10344,note:"低反射・マットブラックアクリル"},acrylic_extrusion_1_5:{name:"透明アクリル 1.5mm",thicknessMm:1.5,unit:"m2",weightPerM2:1.8,pricePerM2:4336,note:"側面換気量調整板等"},acrylic_extrusion_2_0:{name:"透明アクリル 2.0mm",thicknessMm:2,unit:"m2",weightPerM2:2.4,pricePerM2:5296,note:"予備・薄物パネル"},wire_mesh_15:{name:"金網15mmピッチ（黒粉体塗装）",pitchMm:15,unit:"m2",weightPerM2:8.9,pricePerM2:42712,note:"天面金網 (FENP15, 線径φ3.2)"},wire_mesh_25:{name:"金網25mmピッチ（黒粉体塗装）",pitchMm:25,unit:"m2",weightPerM2:6.2,pricePerM2:25627,note:"天面金網 (FENP25, 線径φ3.2)"},wire_mesh_30:{name:"金網30mmピッチ（黒粉体塗装）",pitchMm:30,unit:"m2",weightPerM2:4.4,pricePerM2:14949,note:"天面金網 (FENP30, 線径φ3.2)"}},options:{labor:{splitFloor:{price:500},splitTop:{price:500},typeC:{price:500},splitSide:{price:1e3},frontWide3x:{price:500}},items:{caster:{price:1500,cost:800},sideVentCover:{price:500,cost:200}}},system:{gasLogEndpointUrl:"https://script.google.com/macros/s/AKfycbyGOKgX2Yy01VbMNe4g_2oyr9Lr_Kq-ziKmvh3rnwGmXKV-kLkoEkVUQ2uOqnwNE7tX/exec"}},Bc=[{id:"bearded_dragon",name:"フトアゴヒゲトカゲ",icon:"🦎",W:900,D:450,H:450,desc:"標準ゆったりサイズ（活動スペース確保）",cageType:"A"},{id:"ball_python",name:"ボールパイソン",icon:"🐍",W:600,D:450,H:300,desc:"保温・保湿重視のロータイプケージ",cageType:"A"},{id:"leopard_gecko",name:"ヒョウモントカゲモドキ",icon:"🦎",W:450,D:300,H:300,desc:"省スペースで扱いやすい標準サイズ",cageType:"A"},{id:"tortoise",name:"ヘルマンリクガメ / ロシアリクガメ",icon:"🐢",W:1200,D:600,H:450,desc:"十分な運動量と床材深さを確保するワイド設計",cageType:"A"},{id:"corn_snake",name:"コーンスネーク",icon:"🐍",W:600,D:300,H:350,desc:"細身のヘビに適したコンパクトスリムケージ",cageType:"A"},{id:"uromastyx",name:"トゲオアガマ",icon:"🦎",W:900,D:450,H:400,desc:"高温バスキング対応のワイドケージ",cageType:"A"}],I_=document.getElementById("canvas-container"),Cr=document.getElementById("creature-preset-grid"),U_=document.getElementById("btn-save-image");document.getElementById("btn-copy-spec");document.getElementById("inquiry-spec-textarea");document.getElementById("copy-toast");const Ze=document.getElementById("estimate-result-modal"),zc=document.getElementById("modal-estimate-id"),kc=document.getElementById("modal-price-total"),Gc=document.getElementById("modal-weight-total"),Ss=document.getElementById("modal-spec-textarea"),zo=document.getElementById("btn-copy-spec-modal"),Fi=document.getElementById("modal-copy-toast"),Ba=document.getElementById("btn-save-image-modal"),Hc=document.getElementById("btn-close-modal"),Vc=document.getElementById("btn-dismiss-modal"),Wc=document.getElementById("btn-open-estimate-modal"),un=document.getElementById("modal-download-success"),mr=document.getElementById("download-filename-label");let Gi=null,Es=null;const F_=Date.now(),N_=J_(),O_=Q_();let Xc=0,ce=null;const Fr=document.getElementById("slider-w"),Nr=document.getElementById("input-w"),Or=document.getElementById("slider-d"),Br=document.getElementById("input-d"),zr=document.getElementById("slider-h"),kr=document.getElementById("input-h"),Gr=document.getElementById("row-front-window"),Hr=document.getElementById("slider-fw"),Vr=document.getElementById("input-fw"),$h=document.getElementById("toggle-side-reinforce"),za=document.getElementById("card-side-reinforce"),ka=document.getElementById("box-side-h"),Xn=document.getElementById("input-side-h"),ts=document.getElementById("btn-type-a"),Rs=document.getElementById("btn-type-c"),Wr=document.getElementById("type-badge"),Ga=document.getElementById("btn-frame-silver"),Ha=document.getElementById("btn-frame-black"),Zh=document.getElementById("toggle-caster"),Va=document.getElementById("card-caster"),ci=document.getElementById("toggle-floor-reinforce"),Wa=document.getElementById("card-floor-reinforce"),Xa=document.getElementById("floor-reinf-sub"),on=document.getElementById("toggle-top-reinforce"),Ps=document.getElementById("card-top-reinforce"),Ls=document.getElementById("top-reinf-sub"),Kh=document.getElementById("toggle-door-anti-flex"),Ya=document.getElementById("card-door-anti-flex"),Ts=document.getElementById("toggle-side-vent-cover"),qi=document.getElementById("card-side-vent-cover"),ms=document.getElementById("vent-cover-badge"),ko=document.getElementById("vent-cover-sub"),En=document.getElementById("toggle-front-wide-2x"),kn=document.getElementById("card-front-wide-2x"),gr=document.getElementById("front-wide-2x-sub"),Tn=document.getElementById("toggle-front-wide-3x"),Gn=document.getElementById("card-front-wide-3x"),_r=document.getElementById("front-wide-3x-sub"),Go=document.getElementById("floor-warning-banner"),Yc=document.getElementById("seismic-warning-banner"),B_=document.getElementById("seismic-warning-text"),jh=document.getElementById("btn-door-closed"),Jh=document.getElementById("btn-door-left"),Qh=document.getElementById("btn-door-right"),z_=[jh,Jh,Qh],Ho=document.getElementById("reinforce-tip"),Vo=document.getElementById("reinforce-text"),qc=document.getElementById("current-spec-summary");document.getElementById("cost-hud-card");const Hi=document.getElementById("cost-hud-result"),Ni=document.getElementById("hud-cost-total"),Oi=document.getElementById("hud-weight-total"),nn=document.getElementById("btn-calc-estimate"),qa=document.querySelectorAll(".preset-btn:not(#btn-auto-rotate)"),$a=document.getElementById("btn-auto-rotate"),k_=document.getElementById("btn-reset-specs"),Wo=document.getElementById("panel-config-toggle-btn"),$c=document.getElementById("panel-config-container"),Xo=document.getElementById("options-toggle-btn"),Zc=document.getElementById("options-container"),Xr=document.getElementById("select-panel-floor"),tu=document.getElementById("select-panel-back"),eu=document.getElementById("select-panel-side"),nu=document.getElementById("select-panel-side-upper"),iu=document.getElementById("select-panel-side-lower"),su=document.getElementById("select-panel-top"),ru=document.getElementById("select-panel-top-left"),ou=document.getElementById("select-panel-top-right"),Kc=document.getElementById("row-panel-side"),jc=document.getElementById("row-panel-side-split"),Jc=document.getElementById("row-panel-top"),Qc=document.getElementById("row-panel-top-split"),P={W:750,D:450,H:300,cageType:"A",frameColor:"silver",footType:"rubber",hasFloorReinforcement:!1,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,frontWideFrame:"2x",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,showPanels:!0,showDimensions:!0,doorState:"closed",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"}};let es="2x",ul=!1;const Ee=new D_(I_);window.viewer=Ee;const au=750*450;function G_(i,t,e,n){const s=Math.min(i,t)/10,r=e/10,o=s/Math.sqrt(r),a=n==="caster"?4.2:3.8,l=o<a;return{ratio:o,threshold:a,isProneToToppling:l,footType:n}}function oe(){Ee.update(P),Ee.setPanelsVisible(P.showPanels),Ee.setDimensionsVisible(P.showDimensions),ul&&(Ee._lastAutoParams={...P});const i=P.W*P.D;i>au&&!P.hasFloorReinforcement?(Go.classList.remove("hidden"),Ho.classList.remove("reinforced"),Vo.textContent=`床面積: ${(i/1e4).toFixed(0)}c㎡ (> 750×450mm) 床面補強なし：アクリルたわみ防止のため床面中央補強フレーム (2分割) を推奨します`):P.hasFloorReinforcement?(Go.classList.add("hidden"),Ho.classList.add("reinforced"),Vo.textContent="床面中央補強フレーム（2分割）が配置されています"):(Go.classList.add("hidden"),Ho.classList.remove("reinforced"),Vo.textContent=`床面積: ${(i/1e4).toFixed(0)}c㎡ (≦ 750×450mm) 床面補強フレームなし（標準枠）`);const e=G_(P.W,P.D,P.H,P.footType);if(e.isProneToToppling){Yc.classList.remove("hidden");const n=P.footType==="caster"?"キャスター装備（車輪向きによる支点変化を考慮した安全目安: 4.2）":"安全目安: 3.8";B_.innerHTML=`<strong>転倒注意：</strong>耐震安定値 <span class="metric-tag">${e.ratio.toFixed(2)}</span> ＜ 基準 ${e.threshold}（${n}）。地震等で転倒しやすいため、壁固定等の転倒防止対策を推奨します`}else Yc.classList.add("hidden");q_(),V_(),lu(),H_(),X_()}function H_(){P.hasSideReinforcement?(Kc.classList.add("hidden"),jc.classList.remove("hidden")):(Kc.classList.remove("hidden"),jc.classList.add("hidden"));const i=P.hasTopReinforcement||P.W>940;i?(Jc.classList.add("hidden"),Qc.classList.remove("hidden")):(Jc.classList.remove("hidden"),Qc.classList.add("hidden")),Xr&&(Xr.value=P.panelConfig.floor||"acrylic"),tu.value=P.panelConfig.back,eu.value=P.panelConfig.side,nu.value=P.panelConfig.sideUpper,iu.value=P.panelConfig.sideLower,su.value=P.panelConfig.top,ru.value=P.panelConfig.topLeft,ou.value=P.panelConfig.topRight;const t=document.getElementById("panel-summary-badge");if(t){let e="パンチング";const n=i?P.panelConfig.topLeft:P.panelConfig.top;n.startsWith("mesh")?e=`金網${n.replace("mesh","")}mm`:n==="acrylic"&&(e="アクリル天面");let s="背面アクリル";P.panelConfig.back==="punching"?s="背面パンチング":P.panelConfig.back==="polyca"?s="背面中空ポリカ":P.panelConfig.back==="black_matte"&&(s="背面ブラックマット"),t.textContent=`${s} / ${e}`}}function lu(){P.hasSideReinforcement&&P.panelConfig.sideUpper==="punching"?(Ts.disabled=!1,qi.classList.remove("disabled"),ms.classList.add("ready"),ms.textContent="選択可能",ko.textContent="冬場の保温・換気調整用。左右外張り"):(Ts.checked=!1,P.hasSideVentCover=!1,Ts.disabled=!0,qi.classList.add("disabled"),qi.classList.remove("active"),ms.classList.remove("ready"),P.hasSideReinforcement?(ms.textContent="要上部パンチング",ko.textContent="※側面上部が塩ビパンチングパネル時に選択できます"):(ms.textContent="要側面2分割",ko.textContent="※側面補強フレームを有効にすると選択できます"))}function V_(){if(P.cageType==="C")En.checked=!1,En.disabled=!0,kn.classList.remove("active"),kn.classList.add("disabled"),gr.textContent="※Type Cは前窓構造のため選択不可（Type A専用）",Tn.checked=!1,Tn.disabled=!0,Gn.classList.remove("active"),Gn.classList.add("disabled"),_r.textContent="※Type Cは前窓構造のため選択不可（Type A専用）";else{const t=P.frameColor==="black"?"高さ60mm(ブラック: 40mm+20mm 2段重ね)使用。深床材・高剛性仕様":"高さ60mmフレーム使用。深床材・高剛性仕様";P.frontWideFrame==="2x"?(En.checked=!0,En.disabled=!1,kn.classList.add("active"),kn.classList.remove("disabled"),gr.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",Tn.checked=!1,Tn.disabled=!0,Gn.classList.remove("active"),Gn.classList.add("disabled"),_r.textContent="※2倍幅がONのため選択不可（2倍幅を外すと選択可能）"):P.frontWideFrame==="3x"?(En.checked=!1,En.disabled=!0,kn.classList.remove("active"),kn.classList.add("disabled"),gr.textContent="※3倍幅がONのため選択不可（3倍幅を外すと選択可能）",Tn.checked=!0,Tn.disabled=!1,Gn.classList.add("active"),Gn.classList.remove("disabled"),_r.textContent=t):(En.checked=!1,En.disabled=!1,kn.classList.remove("active"),kn.classList.remove("disabled"),gr.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",Tn.checked=!1,Tn.disabled=!1,Gn.classList.remove("active"),Gn.classList.remove("disabled"),_r.textContent=t)}}function th(i){if(!i)return null;if(ge.panels&&ge.panels[i])return ge.panels[i];if(ge.frames&&ge.frames[i])return ge.frames[i];if(ge.rails&&ge.rails[i])return ge.rails[i];if(ge.caps&&ge.caps[i])return ge.caps[i];for(const t of[ge.panels,ge.frames,ge.rails,ge.caps])if(t){for(const[e,n]of Object.entries(t))if(i===e||i.startsWith(e)||e.startsWith(i)||n.name&&(n.name===i||i.includes(n.name)||n.name.includes(i)))return n}return null}let Ds=!1;function W_(){var X,j,W,ht,tt,lt,K,st,B;const i=Ee.getPartsSummary();let t=0,e=0,n=0,s=0;for(const Y of i)if(Y.category==="frame"||Y.category==="rail_cap"){const it=th(Y.partCode||Y.name);if(it)if(it.unit==="m"){const rt=(Y.lengthMm||0)/1e3,_t=Math.round(it.pricePerMeter*rt);t+=_t*Y.count,e+=it.weightPerMeter*rt*Y.count}else t+=(it.pricePerPiece||0)*Y.count,e+=(it.weightPerPiece||0)*Y.count}else if(Y.category==="panel"){const it=th(Y.panelCode||Y.partCode||Y.name);let rt=Y.widthMm,_t=Y.heightMm;if((rt==null||_t==null)&&Y.size){const xt=Y.size.match(/(\d+)\s*[x×]\s*(\d+)/);xt&&(rt=parseInt(xt[1],10),_t=parseInt(xt[2],10))}if(it&&it.unit==="m2"&&rt&&_t){const xt=rt/1e3*(_t/1e3);if(!(Y.panelCode==="acrylic_extrusion_1_5"||Y.name&&Y.name.includes("換気量調整板"))){const yt=Math.round(it.pricePerM2*xt);n+=yt*Y.count}s+=it.weightPerM2*xt*Y.count}}const r=ge.options||{},o=r.labor||{},a=r.items||{},l=!!P.hasFloorReinforcement,c=!!(P.hasTopReinforcement||P.W>940),h=P.cageType==="C",u=!!P.hasSideReinforcement,d=P.cageType==="A"&&P.frontWideFrame==="3x",p=P.footType==="caster",g=!!P.hasSideVentCover,_=l?((X=o.splitFloor)==null?void 0:X.price)??500:0,m=c?((j=o.splitTop)==null?void 0:j.price)??500:0,f=h?((W=o.typeC)==null?void 0:W.price)??500:0,b=u?((ht=o.splitSide)==null?void 0:ht.price)??1e3:0,y=d?((tt=o.frontWide3x)==null?void 0:tt.price)??500:0,M=_+m+f+b+y,D=p?((lt=a.caster)==null?void 0:lt.price)??1500:0,L=p?((K=a.caster)==null?void 0:K.cost)??800:0,R=g?((st=a.sideVentCover)==null?void 0:st.price)??500:0,I=g?((B=a.sideVentCover)==null?void 0:B.cost)??200:0,E=D+R,x=L+I,A=t+n,z=Math.ceil(A*1.5/100)*100,O=A+x,G=z+E+M,q=e+s;return{rawCost:O,priceWithMarkup:G,weight:q}}let Wn=null;function X_(){if(Wn&&(Wn.aborted=!0,Wn=null,nn)){nn.classList.remove("is-calculating");const i=nn.querySelector(".calc-btn-title");i&&(i.textContent="見積もりと重量計算（β版）")}(Ds||Hi&&!Hi.classList.contains("hidden"))&&(Ds=!1,Hi&&Hi.classList.add("hidden"))}async function Y_(){Wn&&(Wn.aborted=!0);const i={aborted:!1};if(Wn=i,Hi&&Hi.classList.remove("hidden"),Ni&&(Ni.classList.remove("value-appear"),Ni.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>部材積算中...</span>
      </span>
    `),Oi&&(Oi.classList.remove("value-appear"),Oi.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>重量計算中...</span>
      </span>
    `),nn){nn.classList.add("is-calculating");const o=nn.querySelector(".calc-btn-title");o&&(o.textContent="部材積算・構造検証中...")}const t=5e3,e=Math.floor(Math.random()*5001),n=t+e,s=100,r=Math.floor(n/s);try{for(let a=0;a<r;a++)if(await new Promise(l=>setTimeout(l,s)),i.aborted)return;const o=W_();Ni&&(Ni.textContent=`¥${o.priceWithMarkup.toLocaleString()}`,Ni.classList.add("value-appear")),Oi&&(Oi.textContent=`${o.weight.toFixed(1)} kg`,Oi.classList.add("value-appear")),Ds=!0,tv(o)}catch(o){console.error("Structural simulation error:",o)}finally{if(Wn===i&&(Wn=null,nn)){nn.classList.remove("is-calculating");const o=nn.querySelector(".calc-btn-title");o&&(o.textContent="見積もりと重量計算（β版）")}}}function q_(){if(!qc)return;const i=P.cageType==="A"?"Type A（全面扉）":"Type C（前窓＋扉）",t=`W${P.W} × D${P.D} × H${P.H} mm`,e=[];if(P.cageType==="A"){const n=P.frontWideFrame==="3x"?"正面3倍幅":P.frontWideFrame==="2x"?"正面2倍幅":"正面標準幅";e.push(n)}e.push(P.hasFloorReinforcement?"床補強: あり":"床補強: なし"),(P.hasTopReinforcement||P.W>940)&&e.push("天板補強: あり"),P.hasSideReinforcement&&e.push(`側面補強: ${P.sideOpeningH}mm`),P.hasDoorAntiFlex&&e.push("扉たわみ防止"),P.hasSideVentCover&&e.push("換気調整板"),e.push(P.footType==="caster"?"キャスター":"ゴム脚"),qc.innerHTML=`
    <div class="spec-line-primary">${i} | ${t}</div>
    <div class="spec-line-sub">${e.join(" / ")}</div>
  `}function jr(i,t,e,n){i.addEventListener("input",s=>{const r=parseInt(s.target.value,10);t.value=r,P[e]=r,n&&n(r),oe()}),t.addEventListener("change",s=>{let r=parseInt(s.target.value,10);const o=parseInt(i.min,10),a=parseInt(i.max,10),l=parseInt(i.step,10)||10;isNaN(r)&&(r=o),r=Math.round(r/l)*l,r=Math.max(o,Math.min(a,r)),t.value=r,i.value=r,P[e]=r,n&&n(r),oe()})}function dl(){if(P.W>940)ci.checked=!0,ci.disabled=!0,Wa.classList.add("disabled"),Xa.textContent="幅940mm超のため必須（解除不可）",P.hasFloorReinforcement=!0;else{ci.disabled=!1,Wa.classList.remove("disabled"),Xa.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください";const i=P.W*P.D>au;P.hasFloorReinforcement=i,ci.checked=i}}jr(Fr,Nr,"W",i=>{dl(),i>940?(on.checked=!0,on.disabled=!0,Ps.classList.add("disabled"),Ls.textContent="幅940mm超のため必須（解除不可）",P.hasTopReinforcement=!0):(on.disabled=!1,Ps.classList.remove("disabled"),Ls.textContent="940mm以下は任意指定（W>940mmは必須）",on.checked=!1,P.hasTopReinforcement=!1)});jr(Or,Br,"D",()=>{dl()});jr(zr,kr,"H",i=>{const t=Math.max(30,i-120);Hr.max=t,Vr.max=t,P.frontWindowH>t&&(P.frontWindowH=t,Hr.value=t,Vr.value=t);const e=Math.round((i-60)/20)*10,n=Math.max(30,i-100);Xn.max=n,(!P.hasSideReinforcement||P.sideOpeningH>n)&&(P.sideOpeningH=Math.min(n,e),Xn.value=P.sideOpeningH)});jr(Hr,Vr,"frontWindowH");Xn.addEventListener("change",i=>{let t=parseInt(i.target.value,10);const e=parseInt(Xn.min,10)||30,n=parseInt(Xn.max,10)||P.H-100,s=10;isNaN(t)&&(t=e),t=Math.round(t/s)*s,t=Math.max(e,Math.min(n,t)),Xn.value=t,P.sideOpeningH=t,oe()});$h.addEventListener("change",i=>{if(P.hasSideReinforcement=i.target.checked,P.hasSideReinforcement){za.classList.add("active"),ka.classList.remove("disabled");const t=Math.round((P.H-60)/20)*10;(P.sideOpeningH<=0||P.sideOpeningH>P.H-100)&&(P.sideOpeningH=t,Xn.value=t)}else za.classList.remove("active"),ka.classList.add("disabled");oe()});ci.addEventListener("change",i=>{P.hasFloorReinforcement=i.target.checked,oe()});on.addEventListener("change",i=>{P.hasTopReinforcement=i.target.checked,oe()});Kh.addEventListener("change",i=>{P.hasDoorAntiFlex=i.target.checked,i.target.checked?Ya.classList.add("active"):Ya.classList.remove("active"),oe()});Ts.addEventListener("change",i=>{P.hasSideVentCover=i.target.checked,i.target.checked?qi.classList.add("active"):qi.classList.remove("active"),oe()});En.addEventListener("change",i=>{i.target.checked?(P.frontWideFrame="2x",es="2x"):(P.frontWideFrame="none",es="none"),oe()});Tn.addEventListener("change",i=>{i.target.checked?(P.frontWideFrame="3x",es="3x"):(P.frontWideFrame="none",es="none"),oe()});ts.addEventListener("click",()=>{P.cageType="A",P.frontWideFrame=es,ts.classList.add("active"),Rs.classList.remove("active"),Gr.classList.add("hidden"),Wr.textContent="Type A 選択中 (全面スライド扉)",oe()});Rs.addEventListener("click",()=>{P.cageType="C",P.frontWideFrame="none",Rs.classList.add("active"),ts.classList.remove("active"),Gr.classList.remove("hidden"),Wr.textContent="Type C 選択中 (前窓＋扉)",oe()});Ga.addEventListener("click",()=>{P.frameColor="silver",Ga.classList.add("active"),Ha.classList.remove("active"),oe()});Ha.addEventListener("click",()=>{P.frameColor="black",Ha.classList.add("active"),Ga.classList.remove("active"),oe()});Zh.addEventListener("change",i=>{P.footType=i.target.checked?"caster":"rubber",i.target.checked?Va.classList.add("active"):Va.classList.remove("active"),oe()});let vr=null;function Jr(i){P.doorState=i,z_.forEach(e=>{e.getAttribute("data-mode")===i?e.classList.add("active"):e.classList.remove("active")});const t=document.querySelector(".door-mode-group");t.classList.add("door-animating"),vr&&clearTimeout(vr),vr=setTimeout(()=>{t.classList.remove("door-animating"),vr=null},3100),Ee.setDoorState(i)}jh.addEventListener("click",()=>Jr("closed"));Jh.addEventListener("click",()=>Jr("left_open"));Qh.addEventListener("click",()=>Jr("right_open"));function cu(i){ul=i,Ee.setAutoRotate(i,P),i?($a.classList.add("active","rotating"),qa.forEach(t=>t.classList.remove("active"))):$a.classList.remove("active","rotating")}$a.addEventListener("click",()=>{cu(!ul)});qa.forEach(i=>{i.addEventListener("click",()=>{cu(!1),qa.forEach(e=>e.classList.remove("active")),i.classList.add("active");const t=i.getAttribute("data-view");Ee.setViewPreset(t,P)})});k_.addEventListener("click",()=>{P.W=750,P.D=450,P.H=300,P.cageType="A",P.frontWindowH=50,P.hasSideReinforcement=!1,P.sideOpeningH=120,Jr("closed"),Fr.value=750,Nr.value=750,Or.value=450,Br.value=450,zr.value=300,kr.value=300,Hr.value=50,Vr.value=50,$h.checked=!1,za.classList.remove("active"),ka.classList.add("disabled"),Xn.value=120,ci.checked=!1,ci.disabled=!1,Wa.classList.remove("disabled"),Xa.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください",P.hasFloorReinforcement=!1,on.checked=!1,on.disabled=!1,Ps.classList.remove("disabled"),Ls.textContent="940mm以下は任意指定（W>940mmは必須）",P.hasTopReinforcement=!1,Zh.checked=!1,Va.classList.remove("active"),P.footType="rubber",Kh.checked=!1,Ya.classList.remove("active"),P.hasDoorAntiFlex=!1,Ts.checked=!1,qi.classList.remove("active"),P.hasSideVentCover=!1,P.panelConfig={front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},P.frontWideFrame="2x",es="2x",ts.click(),Ee.setViewPreset("iso",P),oe()});Xr&&Xr.addEventListener("change",i=>{P.panelConfig.floor=i.target.value,oe()});tu.addEventListener("change",i=>{P.panelConfig.back=i.target.value,oe()});eu.addEventListener("change",i=>{P.panelConfig.side=i.target.value,oe()});nu.addEventListener("change",i=>{P.panelConfig.sideUpper=i.target.value,lu(),oe()});iu.addEventListener("change",i=>{P.panelConfig.sideLower=i.target.value,oe()});su.addEventListener("change",i=>{P.panelConfig.top=i.target.value,oe()});ru.addEventListener("change",i=>{P.panelConfig.topLeft=i.target.value,oe()});ou.addEventListener("change",i=>{P.panelConfig.topRight=i.target.value,oe()});const eh=document.querySelectorAll(".sidebar-tab"),$_=document.querySelectorAll(".tab-pane");eh.forEach(i=>{i.addEventListener("click",()=>{const t=i.getAttribute("data-tab");eh.forEach(e=>{e.classList.remove("active"),e.setAttribute("aria-selected","false")}),i.classList.add("active"),i.setAttribute("aria-selected","true"),$_.forEach(e=>{e.id===t?e.classList.add("active"):e.classList.remove("active")}),Ee&&typeof Ee.onResize=="function"&&setTimeout(()=>Ee.onResize(),50)})});let xr=!0;Wo&&Wo.addEventListener("click",()=>{xr=!xr,Wo.classList.toggle("active",xr),$c&&$c.classList.toggle("hidden",!xr)});let Mr=!0;Xo&&Xo.addEventListener("click",()=>{Mr=!Mr,Xo.classList.toggle("active",Mr),Zc&&Zc.classList.toggle("hidden",!Mr)});oe();Ee.setViewPreset("iso",P);nn&&nn.addEventListener("click",()=>{Y_()});function Z_(){!Cr||!Array.isArray(Bc)||(Cr.innerHTML="",Bc.forEach(i=>{const t=document.createElement("button");t.className="creature-card",t.dataset.presetId=i.id,t.title=`${i.name} (${i.W}×${i.D}×${i.H}mm)`,t.innerHTML=`
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
      <p class="creature-card-desc">${i.desc||""}</p>
    `,t.addEventListener("click",()=>{K_(i)}),Cr.appendChild(t)}))}function K_(i){P.W=i.W,P.D=i.D,P.H=i.H,i.cageType&&(i.cageType==="A"||i.cageType==="C")&&(P.cageType=i.cageType,ts&&Rs&&(ts.classList.toggle("active",P.cageType==="A"),Rs.classList.toggle("active",P.cageType==="C"),Wr&&(Wr.textContent=P.cageType==="A"?"Type A 選択中":"Type C 選択中"),Gr&&(Gr.style.display=P.cageType==="C"?"block":"none"))),Nr&&(Nr.value=P.W),Fr&&(Fr.value=P.W),Br&&(Br.value=P.D),Or&&(Or.value=P.D),kr&&(kr.value=P.H),zr&&(zr.value=P.H),dl(),P.W>940?(on.checked=!0,on.disabled=!0,Ps.classList.add("disabled"),Ls.textContent="幅940mm超のため必須（解除不可）",P.hasTopReinforcement=!0):(on.disabled=!1,Ps.classList.remove("disabled"),Ls.textContent="940mm以下は任意指定（W>940mmは必須）",on.checked=!1,P.hasTopReinforcement=!1),Cr.querySelectorAll(".creature-card").forEach(e=>{e.classList.toggle("active",e.dataset.presetId===i.id)}),oe(),Ee.setViewPreset("iso",P)}function j_(){const i=new Date,t=i.getFullYear()+String(i.getMonth()+1).padStart(2,"0")+String(i.getDate()).padStart(2,"0"),e=Math.random().toString(36).substring(2,6).toUpperCase();return`EST-${t}-${e}`}function J_(){try{let i=localStorage.getItem("cage_visitor_id");return i||(i="usr_"+Math.random().toString(36).substring(2,8),localStorage.setItem("cage_visitor_id",i)),i}catch{return"usr_"+Math.random().toString(36).substring(2,8)}}function Q_(){try{let i=sessionStorage.getItem("cage_session_id");return i||(i="ses_"+Math.random().toString(36).substring(2,8),sessionStorage.setItem("cage_session_id",i)),i}catch{return"ses_"+Math.random().toString(36).substring(2,8)}}function tv(i){Gi=j_(),Xc++;let t="初期表示からの試算";if(ce){const n=[];P.W!==ce.W&&n.push(`W:${ce.W}→${P.W}`),P.D!==ce.D&&n.push(`D:${ce.D}→${P.D}`),P.H!==ce.H&&n.push(`H:${ce.H}→${P.H}`),P.cageType!==ce.cageType&&n.push(`タイプ:${P.cageType}`),P.cageType==="C"&&P.frontWindowH!==ce.frontWindowH&&n.push(`前窓高:${ce.frontWindowH}→${P.frontWindowH}`),P.frameColor!==ce.frameColor&&n.push(`色:${ce.frameColor==="black"?"黒":"銀"}→${P.frameColor==="black"?"黒":"銀"}`),P.frontWideFrame!==ce.frontWideFrame&&n.push(`正面下部:${ce.frontWideFrame||"なし"}→${P.frontWideFrame||"なし"}`),P.footType!==ce.footType&&n.push(`脚:${P.footType==="caster"?"キャスター":"ゴム脚"}`),P.hasFloorReinforcement!==ce.hasFloorReinforcement&&n.push(P.hasFloorReinforcement?"床補強追加":"床補強解除"),P.hasTopReinforcement!==ce.hasTopReinforcement&&n.push(P.hasTopReinforcement?"天板補強追加":"天板補強解除"),P.hasSideReinforcement!==ce.hasSideReinforcement&&n.push(P.hasSideReinforcement?"側面補強追加":"側面補強解除"),P.hasDoorAntiFlex!==ce.hasDoorAntiFlex&&n.push(P.hasDoorAntiFlex?"扉たわみ防止追加":"扉たわみ防止解除"),P.hasSideVentCover!==ce.hasSideVentCover&&n.push(P.hasSideVentCover?"換気調整板追加":"換気調整板解除");const s=ce.panelConfig||{},r=P.panelConfig||{};r.floor!==s.floor&&n.push(`床:${Ye(s.floor)}→${Ye(r.floor)}`),r.back!==s.back&&n.push(`背:${Ye(s.back)}→${Ye(r.back)}`),P.hasSideReinforcement?(r.sideUpper!==s.sideUpper||r.sideLower!==s.sideLower)&&n.push(`側分割:${Ye(r.sideUpper)}/${Ye(r.sideLower)}`):r.side!==s.side&&n.push(`側:${Ye(s.side)}→${Ye(r.side)}`);const o=P.hasTopReinforcement||P.W>940,a=ce.hasTopReinforcement||ce.W>940;o||a?(r.topLeft!==s.topLeft||r.topRight!==s.topRight||!a)&&n.push(`天分割:${Ye(r.topLeft)}/${Ye(r.topRight)}`):r.top!==s.top&&n.push(`天:${Ye(s.top)}→${Ye(r.top)}`),n.length>0?t=n.join(", "):t="同一条件での再計算"}const e=ev(Gi,i);zc&&(zc.textContent=Gi),kc&&(kc.textContent=`¥${i.priceWithMarkup.toLocaleString()}`),Gc&&(Gc.textContent=`${i.weight.toFixed(1)} kg`),Ss&&(Ss.value=e),Ze&&(un&&un.classList.add("hidden"),Ze.classList.remove("hidden")),Es={estimateId:Gi,timestamp:new Date().toISOString(),visitorId:N_,sessionId:O_,seq:Xc,spec:{...P},totals:{...i},diffNote:t,elapsedSec:Math.round((Date.now()-F_)/1e3)},ce=JSON.parse(JSON.stringify(P)),iv(Es)}function fl(){return P.frameColor==="black"?"ブラック":"シルバー"}function yn(i){switch(i){case"acrylic":return"透明アクリル 3.0mm";case"black_matte":return"アクリル黒両面マット 3.0mm";case"punching":return"塩ビパンチングボード 3.0mm";case"polyca":return"中空ポリカ 4.0mm";case"mesh15":return"金網15mmピッチ (黒粉体塗装)";case"mesh25":return"金網25mmピッチ (黒粉体塗装)";case"mesh30":return"金網30mmピッチ (黒粉体塗装)";default:return i||"透明アクリル 3.0mm"}}function Ye(i){switch(i){case"acrylic":return"透明アクリル";case"black_matte":return"黒マット";case"punching":return"パンチング";case"polyca":return"中空ポリカ";case"mesh15":return"金網15mm";case"mesh25":return"金網25mm";case"mesh30":return"金網30mm";default:return i||"アクリル"}}function pl(){const i=[];return P.cageType==="C"?(i.push({face:"正面扉",name:"透明アクリル 3.0mm"}),i.push({face:"正面固定窓",name:`透明アクリル 3.0mm (開口高 ${P.frontWindowH}mm)`})):i.push({face:"正面扉",name:"透明アクリル 3.0mm (全面スライド)"}),i.push({face:P.hasFloorReinforcement?"床面 (中央2分割)":"床面",name:yn(P.panelConfig.floor)}),i.push({face:"背面",name:yn(P.panelConfig.back)}),P.hasSideReinforcement?i.push({face:"側面 (左右2分割)",name:`上部: ${yn(P.panelConfig.sideUpper)} / 下部: ${yn(P.panelConfig.sideLower)}`}):i.push({face:"側面 (左右)",name:yn(P.panelConfig.side)}),P.hasTopReinforcement||P.W>940?P.panelConfig.topLeft===P.panelConfig.topRight?i.push({face:"天面 (中央2分割)",name:`${yn(P.panelConfig.topLeft)} (左右共通)`}):i.push({face:"天面 (中央2分割)",name:`左: ${yn(P.panelConfig.topLeft)} / 右: ${yn(P.panelConfig.topRight)}`}):i.push({face:"天面",name:yn(P.panelConfig.top)}),i}function ml(){const i=[];return P.cageType==="A"&&(P.frontWideFrame==="2x"?i.push("正面下側幅広フレーム2倍幅 (40mm)"):P.frontWideFrame==="3x"&&i.push("正面下側幅広フレーム3倍幅 (60mm)")),P.cageType==="C"&&i.push(`前窓固定仕様 (開口高さ ${P.frontWindowH}mm)`),P.hasSideReinforcement&&i.push(`側面補強フレーム (開口部高 ${P.sideOpeningH}mm・左右2分割)`),P.hasSideVentCover&&i.push("側面換気量調整板 (左右ペア・外張りt1.5アクリル板・化粧つまみネジ付)"),P.hasFloorReinforcement&&i.push("床面中央補強フレーム (2分割仕様)"),P.W>940?i.push("天板中央補強フレーム (幅940mm超・標準付属/2分割仕様)"):P.hasTopReinforcement&&i.push("天板中央補強フレーム (2分割仕様)"),P.hasDoorAntiFlex&&i.push("正面スライド扉たわみ防止レール"),P.footType==="caster"&&i.push("自在キャスター仕様 (4輪・高さ66mm)"),i}function ev(i,t){const e=P.cageType==="A"?"Type A（全面スライド扉仕様）":"Type C（下部前窓＋扉仕様）",n=fl(),r=pl().map(l=>`  ・${l.face}: ${l.name}`).join(`
`),o=ml(),a=o.length>0?o.map(l=>`  ・${l}`).join(`
`):"  ・標準構成（追加オプションなし）";return`【ケージお見積もり仕様】
・見積ID: ${i}
・ケージ種類: ${e}
・外寸サイズ: 幅 ${P.W}mm × 奥行 ${P.D}mm × 高さ ${P.H}mm
・フレーム色: ${n}
・選択パネル素材・板厚:
${r}
・選択オプション:
${a}
・概算総重量: 約 ${t.weight.toFixed(1)} kg
・お見積り合計金額: ¥${t.priceWithMarkup.toLocaleString()}（税込・送料別）
※公式サイト: https://kinato-cage-site.pages.dev/`}Wc&&Ze&&Wc.addEventListener("click",()=>{Ds?(un&&un.classList.add("hidden"),Ze.classList.remove("hidden")):alert("先に「見積もりと重量計算」を実行してください。")});Hc&&Ze&&Hc.addEventListener("click",()=>{Ze.classList.add("hidden")});Vc&&Ze&&Vc.addEventListener("click",()=>{Ze.classList.add("hidden")});Ze&&Ze.addEventListener("click",i=>{i.target===Ze&&Ze.classList.add("hidden")});zo&&Ss&&zo.addEventListener("click",async()=>{const i=Ss.value;if(i)try{await navigator.clipboard.writeText(i),Fi&&(Fi.classList.remove("hidden"),setTimeout(()=>Fi.classList.add("hidden"),2200));const t=zo.querySelector(".copy-text-label");if(t){const e=t.textContent;t.textContent="済！",setTimeout(()=>{t.textContent=e},1800)}}catch{Ss.select(),document.execCommand("copy"),Fi&&(Fi.classList.remove("hidden"),setTimeout(()=>Fi.classList.add("hidden"),2200))}});Ba&&Ba.addEventListener("click",()=>{nv()});async function nv(){if(!Ds||!Es){alert("先に見積もり計算を実行してください。");return}const i=Ba||U_;let t="";i&&(i.classList.add("is-exporting"),t=i.innerHTML,i.innerHTML="<span>⏳ 画像を生成中...</span>");try{const e=Ee.captureImage?Ee.captureImage():Ee.renderer.domElement.toDataURL("image/png"),n=document.createElement("canvas");n.width=1080,n.height=1920;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,1920);r.addColorStop(0,"#090d16"),r.addColorStop(.35,"#0f172a"),r.addColorStop(1,"#1e293b"),s.fillStyle=r,s.fillRect(0,0,1080,1920),s.strokeStyle="rgba(56, 189, 248, 0.06)",s.lineWidth=1;for(let tt=60;tt<1080;tt+=80)s.beginPath(),s.moveTo(tt,0),s.lineTo(tt,1920),s.stroke();for(let tt=60;tt<1920;tt+=80)s.beginPath(),s.moveTo(0,tt),s.lineTo(1080,tt),s.stroke();s.strokeStyle="rgba(56, 189, 248, 0.35)",s.lineWidth=2,s.strokeRect(40,40,1e3,1840);const o=tt=>new Promise(lt=>{if(!tt)return lt(null);const K=new Image;K.onload=()=>lt(K),K.onerror=()=>lt(null),K.src=tt}),a="./",[l,c,h,u]=await Promise.all([o(`${a}logo_kinato.png`),o(`${a}character_transparent.png`),o(e),o(`${a}qr_code_kinato.png`)]);l&&s.drawImage(l,65,65,135,135);const d=l?215:65;s.fillStyle="#ffffff",s.font='bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("きなとのケージ屋さん",d,104),s.fillStyle="#38bdf8",s.font='600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3Dオーダーメイドケージ お見積書",d,140),s.fillStyle="#f9c784",s.font="500 16px ui-monospace, SFMono-Regular, monospace",s.fillText("https://kinato-cage-site.pages.dev/",d,172),u&&(s.fillStyle="#ffffff",s.shadowColor="rgba(56, 189, 248, 0.3)",s.shadowBlur=10,gs(s,605,67,130,130,8),s.fill(),s.shadowColor="transparent",s.shadowBlur=0,s.drawImage(u,610,72,120,120)),s.textAlign="right",s.fillStyle="#fb7185",s.font="bold 24px ui-monospace, monospace",s.fillText(Gi,1015,110),s.fillStyle="#94a3b8",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const p=new Date,g=`${p.getFullYear()}/${String(p.getMonth()+1).padStart(2,"0")}/${String(p.getDate()).padStart(2,"0")} ${String(p.getHours()).padStart(2,"0")}:${String(p.getMinutes()).padStart(2,"0")}`;s.fillText(`発行日時: ${g}`,1015,148),s.textAlign="left";const _=65,m=240,f=950,b=700;if(s.fillStyle="rgba(15, 23, 42, 0.75)",s.strokeStyle="rgba(56, 189, 248, 0.25)",s.lineWidth=2,gs(s,_,m,f,b,16),s.fill(),s.stroke(),h){const tt=Math.min((f-40)/h.width,(b-40)/h.height),lt=h.width*tt,K=h.height*tt,st=_+(f-lt)/2,B=m+(b-K)/2;s.drawImage(h,st,B,lt,K)}s.fillStyle="rgba(2, 6, 23, 0.85)",s.strokeStyle="rgba(56, 189, 248, 0.5)",gs(s,_+20,m+b-55,230,36,6),s.fill(),s.stroke(),s.fillStyle="#38bdf8",s.font='600 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3D外観シミュレーション",_+35,m+b-31);const y=65,M=960,D=950,L=505;s.fillStyle="rgba(30, 41, 59, 0.65)",s.strokeStyle="rgba(148, 163, 184, 0.2)",s.lineWidth=1.5,gs(s,y,M,D,L,16),s.fill(),s.stroke(),s.fillStyle="#f8fafc",s.font='bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("📐 ケージ設計パラメータ",y+30,M+40),s.strokeStyle="rgba(148, 163, 184, 0.15)",s.lineWidth=1,s.beginPath(),s.moveTo(y+25,M+56),s.lineTo(y+D-25,M+56),s.stroke();const R=P.cageType==="A"?"Type A（全面スライド扉仕様）":"Type C（下部前窓＋スライド扉仕様）",I=fl(),E=pl(),x=ml();s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("ケージ種類",y+30,M+90),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(R,y+230,M+90),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("外寸サイズ",y+30,M+125),s.fillStyle="#38bdf8",s.font='bold 21px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`幅 ${P.W} mm  ×  奥行 ${P.D} mm  ×  高さ ${P.H} mm`,y+230,M+125),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("フレーム仕様",y+30,M+160),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(I,y+230,M+160),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択パネル・板厚",y+30,M+198);let A=M+198;E.forEach(tt=>{s.fillStyle="#38bdf8",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`[${tt.face}]`,y+230,A),s.fillStyle="#e2e8f0",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(tt.name,y+380,A),A+=25}),s.strokeStyle="rgba(148, 163, 184, 0.12)",s.beginPath(),s.moveTo(y+25,A+6),s.lineTo(y+D-25,A+6),s.stroke();const z=A+34;if(s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択オプション",y+30,z),x.length===0)s.fillStyle="#94a3b8",s.font='500 17px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("標準構成（追加オプションなし）",y+230,z);else{let tt=z;x.forEach(lt=>{s.fillStyle="#fbbf24",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("✔",y+230,tt),s.fillStyle="#f8fafc",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(lt,y+255,tt),tt+=24})}const O=!!(c||u),G=65,q=1485,X=O?650:950,j=295,W=s.createLinearGradient(G,q,G+X,q+j);if(W.addColorStop(0,"rgba(15, 23, 42, 0.88)"),W.addColorStop(1,"rgba(30, 41, 59, 0.92)"),s.fillStyle=W,s.strokeStyle="rgba(217, 70, 239, 0.4)",s.lineWidth=2,gs(s,G,q,X,j,16),s.fill(),s.stroke(),s.fillStyle="#cbd5e1",s.font='600 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("概算総重量 (計算値)",G+35,q+50),s.fillStyle="#38bdf8",s.font="bold 32px ui-monospace, monospace",s.fillText(`約 ${Es.totals.weight.toFixed(1)} kg`,G+280,q+52),s.strokeStyle="rgba(148, 163, 184, 0.2)",s.beginPath(),s.moveTo(G+30,q+75),s.lineTo(G+X-30,q+75),s.stroke(),s.fillStyle="#f1f5f9",s.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("お見積もり合計金額 (税込・送料別)",G+35,q+120),s.fillStyle="#fbbf24",s.font='bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`¥${Es.totals.priceWithMarkup.toLocaleString()}`,G+35,q+195),s.fillStyle="#94a3b8",s.font='500 17px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("※本画像はお見積もりシミュレーション結果の控えです。",G+35,q+238),s.fillText("お問い合わせ・ご注文の際にお手元にご準備ください。",G+35,q+265),O&&c){const st=c.height/c.width*270,B=735+10/2,Y=q+(j-st)/2+5;s.drawImage(c,B,Y,270,st)}const ht=`Cage_Estimate_${Gi}.png`;try{const tt=n.toDataURL("image/png");window.lastGeneratedEstimateImage=tt;const lt=document.createElement("a");lt.href=tt,lt.download=ht,lt.target="_self",document.body.appendChild(lt),lt.click(),document.body.removeChild(lt),console.log("Downloaded estimate card image via DataURL:",ht),un&&mr&&(mr.textContent=ht,un.classList.remove("hidden"),setTimeout(()=>{un&&un.classList.add("hidden")},7e3))}catch(tt){console.warn("toDataURL failed, falling back to Blob:",tt),n.toBlob&&n.toBlob(lt=>{if(!lt){alert("画像の書き出しに失敗しました。");return}const K=URL.createObjectURL(lt),st=document.createElement("a");st.href=K,st.download=ht,document.body.appendChild(st),st.click(),document.body.removeChild(st),setTimeout(()=>URL.revokeObjectURL(K),1e4),un&&mr&&(mr.textContent=ht,un.classList.remove("hidden"))},"image/png")}}catch(e){console.error("Estimate card export failed:",e),alert("画像の生成中にエラーが発生しました: "+e.message)}finally{i&&(i.classList.remove("is-exporting"),i.innerHTML=t)}}function gs(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.lineTo(t+n-r,e),i.arcTo(t+n,e,t+n,e+r,r),i.lineTo(t+n,e+s-r),i.arcTo(t+n,e+s,t+n-r,e+s,r),i.lineTo(t+r,e+s),i.arcTo(t,e+s,t,e+s-r,r),i.lineTo(t,e+r),i.arcTo(t,e,t+r,e,r),i.closePath()}async function iv(i){var e;const t=(e=ge==null?void 0:ge.system)==null?void 0:e.gasLogEndpointUrl;if(t.startsWith("http"))try{const n=navigator.userAgent;let s="PC";/iPhone/i.test(n)?s="iPhone":/iPad/i.test(n)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?s="iPad":/Android/i.test(n)?s="Android":/Mac/i.test(n)?s="Mac":/Win/i.test(n)&&(s="Windows");let r="Browser";/Chrome/i.test(n)&&!/Edge|Edg/i.test(n)?r="Chrome":/Safari/i.test(n)&&!/Chrome/i.test(n)?r="Safari":/Edge|Edg/i.test(n)?r="Edge":/Firefox/i.test(n)&&(r="Firefox");const a=pl().map(d=>`${d.face}:${d.name}`).join(" | "),l=ml(),c=l.length>0?l.join(", "):"なし",h=fl(),u={timestamp:i.timestamp,estimateId:i.estimateId,visitorId:i.visitorId,sessionId:i.sessionId,seq:i.seq,device:{type:s,browser:r,screen:`${window.innerWidth}x${window.innerHeight}`},spec:{...i.spec,frameColorDisplayName:h,panelsSummary:a,optionsSummary:c},calculated:i.totals,meta:{elapsedSec:i.elapsedSec,referrer:document.referrer||"Direct",diffNote:i.diffNote}};await fetch(t,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}),console.log("[Log] 見積もりログをスプレッドシートへ送信完了:",i.estimateId)}catch(n){console.warn("[Log] スプレッドシート送信エラー:",n)}}Z_();
