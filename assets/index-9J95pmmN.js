import{a4 as Vt,a5 as Bt,a6 as Lt,a7 as jt,a8 as Dt,a9 as X,aa as N,ab as y,ac as u,ad as Ut,ae as Wt,af as qt,ag as Zt,ah as k,ai as S,aj as dt,ak as mt,al as F,am as Kt,an as vt,ao as wt,ap as Ht,aq as Q,ar as Gt,as as Jt,at as St,au as Qt,av as tr,aw as ut,a as h,j as tt,ax as rr}from"./index-B_0T6ivQ.js";function er(t){var r=Vt(t);return function(e,a,n,s){for(var i="",c=0;c<r;c++)i+=t[c](e,a,n,s)||"";return i}}function ar(t){return function(r){r.root||(r=r.return)&&t(r)}}function nr(t){var r=Object.create(null);return function(e){return r[e]===void 0&&(r[e]=t(e)),r[e]}}function sr(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function or(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var ir=function(){function t(e){var a=this;this._insertTag=function(n){var s;a.tags.length===0?a.insertionPoint?s=a.insertionPoint.nextSibling:a.prepend?s=a.container.firstChild:s=a.before:s=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(n,s),a.tags.push(n)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(a){a.forEach(this._insertTag)},r.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(or(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var s=sr(n);try{s.insertRule(a,s.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(a));this.ctr++},r.flush=function(){this.tags.forEach(function(a){return a.parentNode&&a.parentNode.removeChild(a)}),this.tags=[],this.ctr=0},t}(),cr=function(r,e,a){for(var n=0,s=0;n=s,s=Q(),n===38&&s===12&&(e[a]=1),!wt(s);)vt();return Jt(r,St)},fr=function(r,e){var a=-1,n=44;do switch(wt(n)){case 0:n===38&&Q()===12&&(e[a]=1),r[a]+=cr(St-1,e,a);break;case 2:r[a]+=Gt(n);break;case 4:if(n===44){r[++a]=Q()===58?"&\f":"",e[a]=r[a].length;break}default:r[a]+=Ht(n)}while(n=vt());return r},lr=function(r,e){return Wt(fr(qt(r),e))},pt=new WeakMap,dr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,a=r.parent,n=r.column===a.column&&r.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!pt.get(a))&&!n){pt.set(r,!0);for(var s=[],i=lr(e,s),c=a.props,f=0,l=0;f<i.length;f++)for(var d=0;d<c.length;d++,l++)r.props[l]=s[f]?i[f].replace(/&\f/g,c[d]):c[d]+" "+i[f]}}},mr=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function $t(t,r){switch(Zt(t,r)){case 5103:return u+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return u+t+F+t+S+t+t;case 6828:case 4268:return u+t+S+t+t;case 6165:return u+t+S+"flex-"+t+t;case 5187:return u+t+y(t,/(\w+).+(:[^]+)/,u+"box-$1$2"+S+"flex-$1$2")+t;case 5443:return u+t+S+"flex-item-"+y(t,/flex-|-self/,"")+t;case 4675:return u+t+S+"flex-line-pack"+y(t,/align-content|flex-|-self/,"")+t;case 5548:return u+t+S+y(t,"shrink","negative")+t;case 5292:return u+t+S+y(t,"basis","preferred-size")+t;case 6060:return u+"box-"+y(t,"-grow","")+u+t+S+y(t,"grow","positive")+t;case 4554:return u+y(t,/([^-])(transform)/g,"$1"+u+"$2")+t;case 6187:return y(y(y(t,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),t,"")+t;case 5495:case 3959:return y(t,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return y(y(t,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+t+t;case 4095:case 3583:case 4068:case 2532:return y(t,/(.+)-inline(.+)/,u+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(t)-1-r>6)switch(k(t,r+1)){case 109:if(k(t,r+4)!==45)break;case 102:return y(t,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+F+(k(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~mt(t,"stretch")?$t(y(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(k(t,r+1)!==115)break;case 6444:switch(k(t,dt(t)-3-(~mt(t,"!important")&&10))){case 107:return y(t,":",":"+u)+t;case 101:return y(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(k(t,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+S+"$2box$3")+t}break;case 5936:switch(k(t,r+11)){case 114:return u+t+S+y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return u+t+S+y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return u+t+S+y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return u+t+S+t+t}return t}var ur=function(r,e,a,n){if(r.length>-1&&!r.return)switch(r.type){case Ut:r.return=$t(r.value,r.length);break;case Dt:return X([N(r,{value:y(r.value,"@","@"+u)})],n);case Lt:if(r.length)return jt(r.props,function(s){switch(Kt(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return X([N(r,{props:[y(s,/:(read-\w+)/,":"+F+"$1")]})],n);case"::placeholder":return X([N(r,{props:[y(s,/:(plac\w+)/,":"+u+"input-$1")]}),N(r,{props:[y(s,/:(plac\w+)/,":"+F+"$1")]}),N(r,{props:[y(s,/:(plac\w+)/,S+"input-$1")]})],n)}return""})}},pr=[ur],yr=function(r){var e=r.key;if(e==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(m){var $=m.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var n=r.stylisPlugins||pr,s={},i,c=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(m){for(var $=m.getAttribute("data-emotion").split(" "),O=1;O<$.length;O++)s[$[O]]=!0;c.push(m)});var f,l=[dr,mr];{var d,v=[Bt,ar(function(m){d.insert(m)})],C=er(l.concat(n,v)),E=function($){return X(Qt($),C)};f=function($,O,x,R){d=x,E($?$+"{"+O.styles+"}":O.styles),R&&(w.inserted[O.name]=!0)}}var w={key:e,sheet:new ir({key:e,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:f};return w.sheet.hydrate(c),w},Ct={exports:{}},p={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=typeof Symbol=="function"&&Symbol.for,nt=b?Symbol.for("react.element"):60103,st=b?Symbol.for("react.portal"):60106,V=b?Symbol.for("react.fragment"):60107,B=b?Symbol.for("react.strict_mode"):60108,L=b?Symbol.for("react.profiler"):60114,j=b?Symbol.for("react.provider"):60109,D=b?Symbol.for("react.context"):60110,ot=b?Symbol.for("react.async_mode"):60111,U=b?Symbol.for("react.concurrent_mode"):60111,W=b?Symbol.for("react.forward_ref"):60112,q=b?Symbol.for("react.suspense"):60113,hr=b?Symbol.for("react.suspense_list"):60120,Z=b?Symbol.for("react.memo"):60115,K=b?Symbol.for("react.lazy"):60116,gr=b?Symbol.for("react.block"):60121,br=b?Symbol.for("react.fundamental"):60117,xr=b?Symbol.for("react.responder"):60118,vr=b?Symbol.for("react.scope"):60119;function I(t){if(typeof t=="object"&&t!==null){var r=t.$$typeof;switch(r){case nt:switch(t=t.type,t){case ot:case U:case V:case L:case B:case q:return t;default:switch(t=t&&t.$$typeof,t){case D:case W:case K:case Z:case j:return t;default:return r}}case st:return r}}}function Ot(t){return I(t)===U}p.AsyncMode=ot;p.ConcurrentMode=U;p.ContextConsumer=D;p.ContextProvider=j;p.Element=nt;p.ForwardRef=W;p.Fragment=V;p.Lazy=K;p.Memo=Z;p.Portal=st;p.Profiler=L;p.StrictMode=B;p.Suspense=q;p.isAsyncMode=function(t){return Ot(t)||I(t)===ot};p.isConcurrentMode=Ot;p.isContextConsumer=function(t){return I(t)===D};p.isContextProvider=function(t){return I(t)===j};p.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===nt};p.isForwardRef=function(t){return I(t)===W};p.isFragment=function(t){return I(t)===V};p.isLazy=function(t){return I(t)===K};p.isMemo=function(t){return I(t)===Z};p.isPortal=function(t){return I(t)===st};p.isProfiler=function(t){return I(t)===L};p.isStrictMode=function(t){return I(t)===B};p.isSuspense=function(t){return I(t)===q};p.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===V||t===U||t===L||t===B||t===q||t===hr||typeof t=="object"&&t!==null&&(t.$$typeof===K||t.$$typeof===Z||t.$$typeof===j||t.$$typeof===D||t.$$typeof===W||t.$$typeof===br||t.$$typeof===xr||t.$$typeof===vr||t.$$typeof===gr)};p.typeOf=I;Ct.exports=p;var wr=Ct.exports,It=wr,Sr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$r={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Et={};Et[It.ForwardRef]=Sr;Et[It.Memo]=$r;var Cr=!0;function Rt(t,r,e){var a="";return e.split(" ").forEach(function(n){t[n]!==void 0?r.push(t[n]+";"):a+=n+" "}),a}var it=function(r,e,a){var n=r.key+"-"+e.name;(a===!1||Cr===!1)&&r.registered[n]===void 0&&(r.registered[n]=e.styles)},At=function(r,e,a){it(r,e,a);var n=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var s=e;do r.insert(e===s?"."+n:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function Or(t){for(var r=0,e,a=0,n=t.length;n>=4;++a,n-=4)e=t.charCodeAt(a)&255|(t.charCodeAt(++a)&255)<<8|(t.charCodeAt(++a)&255)<<16|(t.charCodeAt(++a)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(n){case 3:r^=(t.charCodeAt(a+2)&255)<<16;case 2:r^=(t.charCodeAt(a+1)&255)<<8;case 1:r^=t.charCodeAt(a)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Ir=/[A-Z]|^ms/g,Er=/_EMO_([^_]+?)_([^]*?)_EMO_/g,kt=function(r){return r.charCodeAt(1)===45},yt=function(r){return r!=null&&typeof r!="boolean"},G=nr(function(t){return kt(t)?t:t.replace(Ir,"-$&").toLowerCase()}),ht=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(Er,function(a,n,s){return A={name:n,styles:s,next:A},n})}return tr[r]!==1&&!kt(r)&&typeof e=="number"&&e!==0?e+"px":e};function T(t,r,e){if(e==null)return"";if(e.__emotion_styles!==void 0)return e;switch(typeof e){case"boolean":return"";case"object":{if(e.anim===1)return A={name:e.name,styles:e.styles,next:A},e.name;if(e.styles!==void 0){var a=e.next;if(a!==void 0)for(;a!==void 0;)A={name:a.name,styles:a.styles,next:A},a=a.next;var n=e.styles+";";return n}return Rr(t,r,e)}case"function":{if(t!==void 0){var s=A,i=e(t);return A=s,T(t,r,i)}break}}if(r==null)return e;var c=r[e];return c!==void 0?c:e}function Rr(t,r,e){var a="";if(Array.isArray(e))for(var n=0;n<e.length;n++)a+=T(t,r,e[n])+";";else for(var s in e){var i=e[s];if(typeof i!="object")r!=null&&r[i]!==void 0?a+=s+"{"+r[i]+"}":yt(i)&&(a+=G(s)+":"+ht(s,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var c=0;c<i.length;c++)yt(i[c])&&(a+=G(s)+":"+ht(s,i[c])+";");else{var f=T(t,r,i);switch(s){case"animation":case"animationName":{a+=G(s)+":"+f+";";break}default:a+=s+"{"+f+"}"}}}return a}var gt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,A,ct=function(r,e,a){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var n=!0,s="";A=void 0;var i=r[0];i==null||i.raw===void 0?(n=!1,s+=T(a,e,i)):s+=i[0];for(var c=1;c<r.length;c++)s+=T(a,e,r[c]),n&&(s+=i[c]);gt.lastIndex=0;for(var f="",l;(l=gt.exec(s))!==null;)f+="-"+l[1];var d=Or(s)+f;return{name:d,styles:s,next:A}},Ar=function(r){return r()},kr=ut.useInsertionEffect?ut.useInsertionEffect:!1,zt=kr||Ar,ft={}.hasOwnProperty,Nt=h.createContext(typeof HTMLElement<"u"?yr({key:"css"}):null);Nt.Provider;var Tt=function(r){return h.forwardRef(function(e,a){var n=h.useContext(Nt);return r(e,n,a)})},Mt=h.createContext({}),rt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",zr=function(r,e){var a={};for(var n in e)ft.call(e,n)&&(a[n]=e[n]);return a[rt]=r,a},Nr=function(r){var e=r.cache,a=r.serialized,n=r.isStringTag;return it(e,a,n),zt(function(){return At(e,a,n)}),null},Tr=Tt(function(t,r,e){var a=t.css;typeof a=="string"&&r.registered[a]!==void 0&&(a=r.registered[a]);var n=t[rt],s=[a],i="";typeof t.className=="string"?i=Rt(r.registered,s,t.className):t.className!=null&&(i=t.className+" ");var c=ct(s,void 0,h.useContext(Mt));i+=r.key+"-"+c.name;var f={};for(var l in t)ft.call(t,l)&&l!=="css"&&l!==rt&&(f[l]=t[l]);return f.ref=e,f.className=i,h.createElement(h.Fragment,null,h.createElement(Nr,{cache:r,serialized:c,isStringTag:typeof n=="string"}),h.createElement(n,f))}),Mr=Tr,Yr=tt.Fragment;function g(t,r,e){return ft.call(r,"css")?tt.jsx(Mr,zr(t,r),e):tt.jsx(t,r,e)}function Yt(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return ct(r)}var o=function(){var r=Yt.apply(void 0,arguments),e="animation-"+r.name;return{name:e,styles:"@keyframes "+e+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Pr=function t(r){for(var e=r.length,a=0,n="";a<e;a++){var s=r[a];if(s!=null){var i=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))i=t(s);else{i="";for(var c in s)s[c]&&c&&(i&&(i+=" "),i+=c)}break}default:i=s}i&&(n&&(n+=" "),n+=i)}}return n};function _r(t,r,e){var a=[],n=Rt(t,a,e);return a.length<2?e:n+r(a)}var Xr=function(r){var e=r.cache,a=r.serializedArr;return zt(function(){for(var n=0;n<a.length;n++)At(e,a[n],!1)}),null},J=Tt(function(t,r){var e=[],a=function(){for(var f=arguments.length,l=new Array(f),d=0;d<f;d++)l[d]=arguments[d];var v=ct(l,r.registered);return e.push(v),it(r,v,!1),r.key+"-"+v.name},n=function(){for(var f=arguments.length,l=new Array(f),d=0;d<f;d++)l[d]=arguments[d];return _r(r.registered,a,Pr(l))},s={css:a,cx:n,theme:h.useContext(Mt)},i=t.children(s);return h.createElement(h.Fragment,null,h.createElement(Xr,{cache:r,serializedArr:e}),i)}),Fr=Object.defineProperty,Vr=(t,r,e)=>r in t?Fr(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,P=(t,r,e)=>(Vr(t,typeof r!="symbol"?r+"":r,e),e),et=new Map,_=new WeakMap,bt=0,Br=void 0;function Lr(t){return t?(_.has(t)||(bt+=1,_.set(t,bt.toString())),_.get(t)):"0"}function jr(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?Lr(t.root):t[r]}`).toString()}function Dr(t){const r=jr(t);let e=et.get(r);if(!e){const a=new Map;let n;const s=new IntersectionObserver(i=>{i.forEach(c=>{var f;const l=c.isIntersecting&&n.some(d=>c.intersectionRatio>=d);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=l),(f=a.get(c.target))==null||f.forEach(d=>{d(l,c)})})},t);n=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:s,elements:a},et.set(r,e)}return e}function Pt(t,r,e={},a=Br){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const f=t.getBoundingClientRect();return r(a,{isIntersecting:a,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:n,observer:s,elements:i}=Dr(e),c=i.get(t)||[];return i.has(t)||i.set(t,c),c.push(r),s.observe(t),function(){c.splice(c.indexOf(r),1),c.length===0&&(i.delete(t),s.unobserve(t)),i.size===0&&(s.disconnect(),et.delete(n))}}function Ur(t){return typeof t.children!="function"}var xt=class extends h.Component{constructor(t){super(t),P(this,"node",null),P(this,"_unobserveCb",null),P(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),P(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),Ur(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:n,fallbackInView:s}=this.props;this._unobserveCb=Pt(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:n},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:E,entry:w}=this.state;return t({inView:E,entry:w,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:a,root:n,rootMargin:s,onChange:i,skip:c,trackVisibility:f,delay:l,initialInView:d,fallbackInView:v,...C}=this.props;return h.createElement(r||"div",{ref:this.handleNode,...C},t)}};function _t({threshold:t,delay:r,trackVisibility:e,rootMargin:a,root:n,triggerOnce:s,skip:i,initialInView:c,fallbackInView:f,onChange:l}={}){var d;const[v,C]=h.useState(null),E=h.useRef(),[w,m]=h.useState({inView:!!c,entry:void 0});E.current=l,h.useEffect(()=>{if(i||!v)return;let R;return R=Pt(v,(z,H)=>{m({inView:z,entry:H}),E.current&&E.current(z,H),H.isIntersecting&&s&&R&&(R(),R=void 0)},{root:n,rootMargin:a,threshold:t,trackVisibility:e,delay:r},f),()=>{R&&R()}},[Array.isArray(t)?t.toString():t,v,n,a,s,i,e,f,r]);const $=(d=w.entry)==null?void 0:d.target,O=h.useRef();!v&&$&&!s&&!i&&O.current!==$&&(O.current=$,m({inView:!!c,entry:void 0}));const x=[C,w.inView,w.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}const Wr=o`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,qr=o`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Zr=o`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,Kr=o`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Hr=o`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,Gr=o`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Jr=o`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Qr=o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,te=o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,re=o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,ee=o`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,ae=o`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,ne=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,se=o`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,oe=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ie=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ce=o`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fe=o`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lt=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,le=o`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,de=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,me=o`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ue=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pe=o`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ye=o`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,he=o`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ge({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:a=lt,iterationCount:n=1}){return Yt`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function be(t){return t==null}function xe(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function Xt(t,r){return e=>e?t():r()}function M(t){return Xt(t,()=>null)}function at(t){return M(()=>({opacity:0}))(t)}const Y=t=>{const{cascade:r=!1,damping:e=.5,delay:a=0,duration:n=1e3,fraction:s=0,keyframes:i=lt,triggerOnce:c=!1,className:f,style:l,childClassName:d,childStyle:v,children:C,onVisibilityChange:E}=t,w=h.useMemo(()=>ge({keyframes:i,duration:n}),[n,i]);return be(C)?null:xe(C)?g(we,{...t,animationStyles:w,children:String(C)}):rr.isFragment(C)?g(Ft,{...t,animationStyles:w}):g(Yr,{children:h.Children.map(C,(m,$)=>{if(!h.isValidElement(m))return null;const O=a+(r?$*n*e:0);switch(m.type){case"ol":case"ul":return g(J,{children:({cx:x})=>g(m.type,{...m.props,className:x(f,m.props.className),style:Object.assign({},l,m.props.style),children:g(Y,{...t,children:m.props.children})})});case"li":return g(xt,{threshold:s,triggerOnce:c,onChange:E,children:({inView:x,ref:R})=>g(J,{children:({cx:z})=>g(m.type,{...m.props,ref:R,className:z(d,m.props.className),css:M(()=>w)(x),style:Object.assign({},v,m.props.style,at(!x),{animationDelay:O+"ms"})})})});default:return g(xt,{threshold:s,triggerOnce:c,onChange:E,children:({inView:x,ref:R})=>g("div",{ref:R,className:f,css:M(()=>w)(x),style:Object.assign({},l,at(!x),{animationDelay:O+"ms"}),children:g(J,{children:({cx:z})=>g(m.type,{...m.props,className:z(d,m.props.className),style:Object.assign({},v,m.props.style)})})})})}})})},ve={display:"inline-block",whiteSpace:"pre"},we=t=>{const{animationStyles:r,cascade:e=!1,damping:a=.5,delay:n=0,duration:s=1e3,fraction:i=0,triggerOnce:c=!1,className:f,style:l,children:d,onVisibilityChange:v}=t,{ref:C,inView:E}=_t({triggerOnce:c,threshold:i,onChange:v});return Xt(()=>g("div",{ref:C,className:f,style:Object.assign({},l,ve),children:d.split("").map((w,m)=>g("span",{css:M(()=>r)(E),style:{animationDelay:n+m*s*a+"ms"},children:w},m))}),()=>g(Ft,{...t,children:d}))(e)},Ft=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:a=!1,className:n,style:s,children:i,onVisibilityChange:c}=t,{ref:f,inView:l}=_t({triggerOnce:a,threshold:e,onChange:c});return g("div",{ref:f,className:n,css:M(()=>r)(l),style:Object.assign({},s,at(!l)),children:i})};function Se(t){switch(t){case"bounce":return[Wr,{transformOrigin:"center bottom"}];case"flash":return[qr];case"headShake":return[Zr,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[Kr,{animationTimingFunction:"ease-in-out"}];case"jello":return[Hr,{transformOrigin:"center"}];case"pulse":return[Gr,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[Jr];case"shake":return[Qr];case"shakeX":return[te];case"shakeY":return[re];case"swing":return[ee,{transformOrigin:"top center"}];case"tada":return[ae];case"wobble":return[ne]}}const na=t=>{const{effect:r="bounce",style:e,...a}=t,[n,s]=h.useMemo(()=>Se(r),[r]);return g(Y,{keyframes:n,style:Object.assign({},e,s),...a})};o`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;o`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const $e=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Ce=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Oe=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ie=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Ee=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Re=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Ae=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ke=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,ze=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ne=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Te=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Me=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ye=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Pe(t,r,e){switch(e){case"bottom-left":return r?Ce:oe;case"bottom-right":return r?Oe:ie;case"down":return t?r?Ee:fe:r?Ie:ce;case"left":return t?r?Ae:le:r?Re:lt;case"right":return t?r?ze:me:r?ke:de;case"top-left":return r?Ne:ue;case"top-right":return r?Te:pe;case"up":return t?r?Ye:he:r?Me:ye;default:return r?$e:se}}const sa=t=>{const{big:r=!1,direction:e,reverse:a=!1,...n}=t,s=h.useMemo(()=>Pe(r,a,e),[r,e,a]);return g(Y,{keyframes:s,...n})};o`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;o`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;o`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;o`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;o`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const _e=o`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Xe=o`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fe=o`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ve=o`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Be=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Le=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,je=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,De=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Ue(t,r){switch(r){case"down":return t?Be:_e;case"right":return t?je:Fe;case"up":return t?De:Ve;case"left":default:return t?Le:Xe}}const oa=t=>{const{direction:r,reverse:e=!1,...a}=t,n=h.useMemo(()=>Ue(e,r),[r,e]);return g(Y,{keyframes:n,...a})},We=o`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,qe=o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ze=o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ke=o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,He=o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ge=o`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Je=o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Qe=o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,ta=o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,ra=o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function ea(t,r){switch(r){case"down":return t?Je:qe;case"left":return t?Qe:Ze;case"right":return t?ta:Ke;case"up":return t?ra:He;default:return t?Ge:We}}const ia=t=>{const{direction:r,reverse:e=!1,...a}=t,n=h.useMemo(()=>ea(e,r),[r,e]);return g(Y,{keyframes:n,...a})};export{na as A,sa as F,oa as S,ia as Z};
