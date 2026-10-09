import{a3 as Mt,a as b,j as bt,a4 as mr}from"./index-C_hYcw5r.js";function ur(t){var r=Object.create(null);return function(e){return r[e]===void 0&&(r[e]=t(e)),r[e]}}function pr(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function yr(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var hr=function(){function t(e){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(yr(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=pr(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},t}(),A="-ms-",et="-moz-",y="-webkit-",jt="comm",$t="rule",Ot="decl",gr="@import",Dt="@keyframes",br="@layer",xr=Math.abs,nt=String.fromCharCode,vr=Object.assign;function wr(t,r){return R(t,0)^45?(((r<<2^R(t,0))<<2^R(t,1))<<2^R(t,2))<<2^R(t,3):0}function Wt(t){return t.trim()}function Sr(t,r){return(t=r.exec(t))?t[0]:t}function h(t,r,e){return t.replace(r,e)}function xt(t,r){return t.indexOf(r)}function R(t,r){return t.charCodeAt(r)|0}function D(t,r,e){return t.slice(r,e)}function P(t){return t.length}function kt(t){return t.length}function H(t,r){return r.push(t),t}function Cr(t,r){return t.map(r).join("")}var at=1,V=1,Ut=0,z=0,k=0,B="";function st(t,r,e,n,a,s,i){return{value:t,root:r,parent:e,type:n,props:a,children:s,line:at,column:V,length:i,return:""}}function j(t,r){return vr(st("",null,null,"",null,null,0),t,{length:-t.length},r)}function $r(){return k}function Or(){return k=z>0?R(B,--z):0,V--,k===10&&(V=1,at--),k}function T(){return k=z<Ut?R(B,z++):0,V++,k===10&&(V=1,at++),k}function X(){return R(B,z)}function Q(){return z}function Z(t,r){return D(B,t,r)}function W(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gt(t){return at=V=1,Ut=P(B=t),z=0,[]}function Zt(t){return B="",t}function tt(t){return Wt(Z(z-1,vt(t===91?t+2:t===40?t+1:t)))}function kr(t){for(;(k=X())&&k<33;)T();return W(t)>2||W(k)>3?"":" "}function Ir(t,r){for(;--r&&T()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return Z(t,Q()+(r<6&&X()==32&&T()==32))}function vt(t){for(;T();)switch(k){case t:return z;case 34:case 39:t!==34&&t!==39&&vt(k);break;case 40:t===41&&vt(t);break;case 92:T();break}return z}function Er(t,r){for(;T()&&t+k!==57;)if(t+k===84&&X()===47)break;return"/*"+Z(r,z-1)+"*"+nt(t===47?t:T())}function Rr(t){for(;!W(X());)T();return Z(t,z)}function Ar(t){return Zt(rt("",null,null,null,[""],t=Gt(t),0,[0],t))}function rt(t,r,e,n,a,s,i,c,f){for(var l=0,d=0,u=i,S=0,I=0,x=0,m=1,O=1,v=1,p=0,C="",M=a,_=s,Y=n,w=C;O;)switch(x=p,p=T()){case 40:if(x!=108&&R(w,u-1)==58){xt(w+=h(tt(p),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:w+=tt(p);break;case 9:case 10:case 13:case 32:w+=kr(x);break;case 92:w+=Ir(Q()-1,7);continue;case 47:switch(X()){case 42:case 47:H(zr(Er(T(),Q()),r,e),f);break;default:w+="/"}break;case 123*m:c[l++]=P(w)*v;case 125*m:case 59:case 0:switch(p){case 0:case 125:O=0;case 59+d:v==-1&&(w=h(w,/\f/g,"")),I>0&&P(w)-u&&H(I>32?Yt(w+";",n,e,u-1):Yt(h(w," ","")+";",n,e,u-2),f);break;case 59:w+=";";default:if(H(Y=_t(w,r,e,l,d,a,c,C,M=[],_=[],u),s),p===123)if(d===0)rt(w,r,Y,Y,M,s,u,c,_);else switch(S===99&&R(w,3)===110?100:S){case 100:case 108:case 109:case 115:rt(t,Y,Y,n&&H(_t(t,Y,Y,0,0,a,c,C,a,M=[],u),_),a,_,u,c,n?M:_);break;default:rt(w,Y,Y,Y,[""],_,0,c,_)}}l=d=I=0,m=v=1,C=w="",u=i;break;case 58:u=1+P(w),I=x;default:if(m<1){if(p==123)--m;else if(p==125&&m++==0&&Or()==125)continue}switch(w+=nt(p),p*m){case 38:v=d>0?1:(w+="\f",-1);break;case 44:c[l++]=(P(w)-1)*v,v=1;break;case 64:X()===45&&(w+=tt(T())),S=X(),d=u=P(C=w+=Rr(Q())),p++;break;case 45:x===45&&P(w)==2&&(m=0)}}return s}function _t(t,r,e,n,a,s,i,c,f,l,d){for(var u=a-1,S=a===0?s:[""],I=kt(S),x=0,m=0,O=0;x<n;++x)for(var v=0,p=D(t,u+1,u=xr(m=i[x])),C=t;v<I;++v)(C=Wt(m>0?S[v]+" "+p:h(p,/&\f/g,S[v])))&&(f[O++]=C);return st(t,r,e,a===0?$t:c,f,l,d)}function zr(t,r,e){return st(t,r,e,jt,nt($r()),D(t,2,-2),0)}function Yt(t,r,e,n){return st(t,r,e,Ot,D(t,0,n),D(t,n+1,-1),n)}function L(t,r){for(var e="",n=kt(t),a=0;a<n;a++)e+=r(t[a],a,t,r)||"";return e}function Tr(t,r,e,n){switch(t.type){case br:if(t.children.length)break;case gr:case Ot:return t.return=t.return||t.value;case jt:return"";case Dt:return t.return=t.value+"{"+L(t.children,n)+"}";case $t:t.value=t.props.join(",")}return P(e=L(t.children,n))?t.return=t.value+"{"+e+"}":""}function Nr(t){var r=kt(t);return function(e,n,a,s){for(var i="",c=0;c<r;c++)i+=t[c](e,n,a,s)||"";return i}}function Mr(t){return function(r){r.root||(r=r.return)&&t(r)}}var _r=function(r,e,n){for(var a=0,s=0;a=s,s=X(),a===38&&s===12&&(e[n]=1),!W(s);)T();return Z(r,z)},Yr=function(r,e){var n=-1,a=44;do switch(W(a)){case 0:a===38&&X()===12&&(e[n]=1),r[n]+=_r(z-1,e,n);break;case 2:r[n]+=tt(a);break;case 4:if(a===44){r[++n]=X()===58?"&\f":"",e[n]=r[n].length;break}default:r[n]+=nt(a)}while(a=T());return r},Pr=function(r,e){return Zt(Yr(Gt(r),e))},Pt=new WeakMap,Fr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!Pt.get(n))&&!a){Pt.set(r,!0);for(var s=[],i=Pr(e,s),c=n.props,f=0,l=0;f<i.length;f++)for(var d=0;d<c.length;d++,l++)r.props[l]=s[f]?i[f].replace(/&\f/g,c[d]):c[d]+" "+i[f]}}},Xr=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function qt(t,r){switch(wr(t,r)){case 5103:return y+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return y+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return y+t+et+t+A+t+t;case 6828:case 4268:return y+t+A+t+t;case 6165:return y+t+A+"flex-"+t+t;case 5187:return y+t+h(t,/(\w+).+(:[^]+)/,y+"box-$1$2"+A+"flex-$1$2")+t;case 5443:return y+t+A+"flex-item-"+h(t,/flex-|-self/,"")+t;case 4675:return y+t+A+"flex-line-pack"+h(t,/align-content|flex-|-self/,"")+t;case 5548:return y+t+A+h(t,"shrink","negative")+t;case 5292:return y+t+A+h(t,"basis","preferred-size")+t;case 6060:return y+"box-"+h(t,"-grow","")+y+t+A+h(t,"grow","positive")+t;case 4554:return y+h(t,/([^-])(transform)/g,"$1"+y+"$2")+t;case 6187:return h(h(h(t,/(zoom-|grab)/,y+"$1"),/(image-set)/,y+"$1"),t,"")+t;case 5495:case 3959:return h(t,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return h(h(t,/(.+:)(flex-)?(.*)/,y+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+y+t+t;case 4095:case 3583:case 4068:case 2532:return h(t,/(.+)-inline(.+)/,y+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(t)-1-r>6)switch(R(t,r+1)){case 109:if(R(t,r+4)!==45)break;case 102:return h(t,/(.+:)(.+)-([^]+)/,"$1"+y+"$2-$3$1"+et+(R(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~xt(t,"stretch")?qt(h(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(R(t,r+1)!==115)break;case 6444:switch(R(t,P(t)-3-(~xt(t,"!important")&&10))){case 107:return h(t,":",":"+y)+t;case 101:return h(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+y+(R(t,14)===45?"inline-":"")+"box$3$1"+y+"$2$3$1"+A+"$2box$3")+t}break;case 5936:switch(R(t,r+11)){case 114:return y+t+A+h(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return y+t+A+h(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return y+t+A+h(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return y+t+A+t+t}return t}var Lr=function(r,e,n,a){if(r.length>-1&&!r.return)switch(r.type){case Ot:r.return=qt(r.value,r.length);break;case Dt:return L([j(r,{value:h(r.value,"@","@"+y)})],a);case $t:if(r.length)return Cr(r.props,function(s){switch(Sr(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return L([j(r,{props:[h(s,/:(read-\w+)/,":"+et+"$1")]})],a);case"::placeholder":return L([j(r,{props:[h(s,/:(plac\w+)/,":"+y+"input-$1")]}),j(r,{props:[h(s,/:(plac\w+)/,":"+et+"$1")]}),j(r,{props:[h(s,/:(plac\w+)/,A+"input-$1")]})],a)}return""})}},Vr=[Lr],Br=function(r){var e=r.key;if(e==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(m){var O=m.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var a=r.stylisPlugins||Vr,s={},i,c=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(m){for(var O=m.getAttribute("data-emotion").split(" "),v=1;v<O.length;v++)s[O[v]]=!0;c.push(m)});var f,l=[Fr,Xr];{var d,u=[Tr,Mr(function(m){d.insert(m)})],S=Nr(l.concat(a,u)),I=function(O){return L(Ar(O),S)};f=function(O,v,p,C){d=p,I(O?O+"{"+v.styles+"}":v.styles),C&&(x.inserted[v.name]=!0)}}var x={key:e,sheet:new hr({key:e,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:f};return x.sheet.hydrate(c),x},Ht={exports:{}},g={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=typeof Symbol=="function"&&Symbol.for,It=E?Symbol.for("react.element"):60103,Et=E?Symbol.for("react.portal"):60106,ot=E?Symbol.for("react.fragment"):60107,it=E?Symbol.for("react.strict_mode"):60108,ct=E?Symbol.for("react.profiler"):60114,ft=E?Symbol.for("react.provider"):60109,dt=E?Symbol.for("react.context"):60110,Rt=E?Symbol.for("react.async_mode"):60111,lt=E?Symbol.for("react.concurrent_mode"):60111,mt=E?Symbol.for("react.forward_ref"):60112,ut=E?Symbol.for("react.suspense"):60113,jr=E?Symbol.for("react.suspense_list"):60120,pt=E?Symbol.for("react.memo"):60115,yt=E?Symbol.for("react.lazy"):60116,Dr=E?Symbol.for("react.block"):60121,Wr=E?Symbol.for("react.fundamental"):60117,Ur=E?Symbol.for("react.responder"):60118,Gr=E?Symbol.for("react.scope"):60119;function N(t){if(typeof t=="object"&&t!==null){var r=t.$$typeof;switch(r){case It:switch(t=t.type,t){case Rt:case lt:case ot:case ct:case it:case ut:return t;default:switch(t=t&&t.$$typeof,t){case dt:case mt:case yt:case pt:case ft:return t;default:return r}}case Et:return r}}}function Kt(t){return N(t)===lt}g.AsyncMode=Rt;g.ConcurrentMode=lt;g.ContextConsumer=dt;g.ContextProvider=ft;g.Element=It;g.ForwardRef=mt;g.Fragment=ot;g.Lazy=yt;g.Memo=pt;g.Portal=Et;g.Profiler=ct;g.StrictMode=it;g.Suspense=ut;g.isAsyncMode=function(t){return Kt(t)||N(t)===Rt};g.isConcurrentMode=Kt;g.isContextConsumer=function(t){return N(t)===dt};g.isContextProvider=function(t){return N(t)===ft};g.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===It};g.isForwardRef=function(t){return N(t)===mt};g.isFragment=function(t){return N(t)===ot};g.isLazy=function(t){return N(t)===yt};g.isMemo=function(t){return N(t)===pt};g.isPortal=function(t){return N(t)===Et};g.isProfiler=function(t){return N(t)===ct};g.isStrictMode=function(t){return N(t)===it};g.isSuspense=function(t){return N(t)===ut};g.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ot||t===lt||t===ct||t===it||t===ut||t===jr||typeof t=="object"&&t!==null&&(t.$$typeof===yt||t.$$typeof===pt||t.$$typeof===ft||t.$$typeof===dt||t.$$typeof===mt||t.$$typeof===Wr||t.$$typeof===Ur||t.$$typeof===Gr||t.$$typeof===Dr)};g.typeOf=N;Ht.exports=g;var Zr=Ht.exports,Jt=Zr,qr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qt={};Qt[Jt.ForwardRef]=qr;Qt[Jt.Memo]=Hr;var Kr=!0;function tr(t,r,e){var n="";return e.split(" ").forEach(function(a){t[a]!==void 0?r.push(t[a]+";"):a&&(n+=a+" ")}),n}var At=function(r,e,n){var a=r.key+"-"+e.name;(n===!1||Kr===!1)&&r.registered[a]===void 0&&(r.registered[a]=e.styles)},rr=function(r,e,n){At(r,e,n);var a=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var s=e;do r.insert(e===s?"."+a:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function Jr(t){for(var r=0,e,n=0,a=t.length;a>=4;++n,a-=4)e=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(t.charCodeAt(n+2)&255)<<16;case 2:r^=(t.charCodeAt(n+1)&255)<<8;case 1:r^=t.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Qr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},te=/[A-Z]|^ms/g,re=/_EMO_([^_]+?)_([^]*?)_EMO_/g,er=function(r){return r.charCodeAt(1)===45},Ft=function(r){return r!=null&&typeof r!="boolean"},ht=ur(function(t){return er(t)?t:t.replace(te,"-$&").toLowerCase()}),Xt=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(re,function(n,a,s){return F={name:a,styles:s,next:F},a})}return Qr[r]!==1&&!er(r)&&typeof e=="number"&&e!==0?e+"px":e};function U(t,r,e){if(e==null)return"";var n=e;if(n.__emotion_styles!==void 0)return n;switch(typeof e){case"boolean":return"";case"object":{var a=e;if(a.anim===1)return F={name:a.name,styles:a.styles,next:F},a.name;var s=e;if(s.styles!==void 0){var i=s.next;if(i!==void 0)for(;i!==void 0;)F={name:i.name,styles:i.styles,next:F},i=i.next;var c=s.styles+";";return c}return ee(t,r,e)}case"function":{if(t!==void 0){var f=F,l=e(t);return F=f,U(t,r,l)}break}}var d=e;if(r==null)return d;var u=r[d];return u!==void 0?u:d}function ee(t,r,e){var n="";if(Array.isArray(e))for(var a=0;a<e.length;a++)n+=U(t,r,e[a])+";";else for(var s in e){var i=e[s];if(typeof i!="object"){var c=i;r!=null&&r[c]!==void 0?n+=s+"{"+r[c]+"}":Ft(c)&&(n+=ht(s)+":"+Xt(s,c)+";")}else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var f=0;f<i.length;f++)Ft(i[f])&&(n+=ht(s)+":"+Xt(s,i[f])+";");else{var l=U(t,r,i);switch(s){case"animation":case"animationName":{n+=ht(s)+":"+l+";";break}default:n+=s+"{"+l+"}"}}}return n}var Lt=/label:\s*([^\s;{]+)\s*(;|$)/g,F;function zt(t,r,e){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var n=!0,a="";F=void 0;var s=t[0];if(s==null||s.raw===void 0)n=!1,a+=U(e,r,s);else{var i=s;a+=i[0]}for(var c=1;c<t.length;c++)if(a+=U(e,r,t[c]),n){var f=s;a+=f[c]}Lt.lastIndex=0;for(var l="",d;(d=Lt.exec(a))!==null;)l+="-"+d[1];var u=Jr(a)+l;return{name:u,styles:a,next:F}}var ne=function(r){return r()},ae=Mt.useInsertionEffect?Mt.useInsertionEffect:!1,nr=ae||ne,Tt={}.hasOwnProperty,ar=b.createContext(typeof HTMLElement<"u"?Br({key:"css"}):null);ar.Provider;var sr=function(r){return b.forwardRef(function(e,n){var a=b.useContext(ar);return r(e,a,n)})},or=b.createContext({}),wt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",se=function(r,e){var n={};for(var a in e)Tt.call(e,a)&&(n[a]=e[a]);return n[wt]=r,n},oe=function(r){var e=r.cache,n=r.serialized,a=r.isStringTag;return At(e,n,a),nr(function(){return rr(e,n,a)}),null},ie=sr(function(t,r,e){var n=t.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=t[wt],s=[n],i="";typeof t.className=="string"?i=tr(r.registered,s,t.className):t.className!=null&&(i=t.className+" ");var c=zt(s,void 0,b.useContext(or));i+=r.key+"-"+c.name;var f={};for(var l in t)Tt.call(t,l)&&l!=="css"&&l!==wt&&(f[l]=t[l]);return f.ref=e,f.className=i,b.createElement(b.Fragment,null,b.createElement(oe,{cache:r,serialized:c,isStringTag:typeof a=="string"}),b.createElement(a,f))}),ce=ie,fe=bt.Fragment;function $(t,r,e){return Tt.call(r,"css")?bt.jsx(ce,se(t,r),e):bt.jsx(t,r,e)}function ir(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return zt(r)}var o=function(){var r=ir.apply(void 0,arguments),e="animation-"+r.name;return{name:e,styles:"@keyframes "+e+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},de=function t(r){for(var e=r.length,n=0,a="";n<e;n++){var s=r[n];if(s!=null){var i=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))i=t(s);else{i="";for(var c in s)s[c]&&c&&(i&&(i+=" "),i+=c)}break}default:i=s}i&&(a&&(a+=" "),a+=i)}}return a};function le(t,r,e){var n=[],a=tr(t,n,e);return n.length<2?e:a+r(n)}var me=function(r){var e=r.cache,n=r.serializedArr;return nr(function(){for(var a=0;a<n.length;a++)rr(e,n[a],!1)}),null},gt=sr(function(t,r){var e=[],n=function(){for(var f=arguments.length,l=new Array(f),d=0;d<f;d++)l[d]=arguments[d];var u=zt(l,r.registered);return e.push(u),At(r,u,!1),r.key+"-"+u.name},a=function(){for(var f=arguments.length,l=new Array(f),d=0;d<f;d++)l[d]=arguments[d];return le(r.registered,n,de(l))},s={css:n,cx:a,theme:b.useContext(or)},i=t.children(s);return b.createElement(b.Fragment,null,b.createElement(me,{cache:r,serializedArr:e}),i)}),ue=Object.defineProperty,pe=(t,r,e)=>r in t?ue(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,K=(t,r,e)=>pe(t,typeof r!="symbol"?r+"":r,e),St=new Map,J=new WeakMap,Vt=0,ye=void 0;function he(t){return t?(J.has(t)||(Vt+=1,J.set(t,Vt.toString())),J.get(t)):"0"}function ge(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?he(t.root):t[r]}`).toString()}function be(t){const r=ge(t);let e=St.get(r);if(!e){const n=new Map;let a;const s=new IntersectionObserver(i=>{i.forEach(c=>{var f;const l=c.isIntersecting&&a.some(d=>c.intersectionRatio>=d);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=l),(f=n.get(c.target))==null||f.forEach(d=>{d(l,c)})})},t);a=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:s,elements:n},St.set(r,e)}return e}function cr(t,r,e={},n=ye){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const f=t.getBoundingClientRect();return r(n,{isIntersecting:n,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:a,observer:s,elements:i}=be(e),c=i.get(t)||[];return i.has(t)||i.set(t,c),c.push(r),s.observe(t),function(){c.splice(c.indexOf(r),1),c.length===0&&(i.delete(t),s.unobserve(t)),i.size===0&&(s.disconnect(),St.delete(a))}}function xe(t){return typeof t.children!="function"}var Bt=class extends b.Component{constructor(t){super(t),K(this,"node",null),K(this,"_unobserveCb",null),K(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),K(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),xe(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a,fallbackInView:s}=this.props;this._unobserveCb=cr(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:I,entry:x}=this.state;return t({inView:I,entry:x,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:n,root:a,rootMargin:s,onChange:i,skip:c,trackVisibility:f,delay:l,initialInView:d,fallbackInView:u,...S}=this.props;return b.createElement(r||"div",{ref:this.handleNode,...S},t)}};function fr({threshold:t,delay:r,trackVisibility:e,rootMargin:n,root:a,triggerOnce:s,skip:i,initialInView:c,fallbackInView:f,onChange:l}={}){var d;const[u,S]=b.useState(null),I=b.useRef(l),[x,m]=b.useState({inView:!!c,entry:void 0});I.current=l,b.useEffect(()=>{if(i||!u)return;let C;return C=cr(u,(M,_)=>{m({inView:M,entry:_}),I.current&&I.current(M,_),_.isIntersecting&&s&&C&&(C(),C=void 0)},{root:a,rootMargin:n,threshold:t,trackVisibility:e,delay:r},f),()=>{C&&C()}},[Array.isArray(t)?t.toString():t,u,a,n,s,i,e,f,r]);const O=(d=x.entry)==null?void 0:d.target,v=b.useRef(void 0);!u&&O&&!s&&!i&&v.current!==O&&(v.current=O,m({inView:!!c,entry:void 0}));const p=[S,x.inView,x.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const ve=o`
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
`,we=o`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Se=o`
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
`,Ce=o`
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
`,$e=o`
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
`,Oe=o`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,ke=o`
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
`,Ie=o`
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
`,Ee=o`
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
`,Re=o`
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
`,Ae=o`
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
`,ze=o`
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
`,Te=o`
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
`,Ne=o`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Me=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_e=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ye=o`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pe=o`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Nt=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fe=o`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xe=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Le=o`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ve=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Be=o`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,je=o`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,De=o`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function We({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:n=Nt,iterationCount:a=1}){return ir`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Ue(t){return t==null}function Ge(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function dr(t,r){return e=>e?t():r()}function G(t){return dr(t,()=>null)}function Ct(t){return G(()=>({opacity:0}))(t)}const q=t=>{const{cascade:r=!1,damping:e=.5,delay:n=0,duration:a=1e3,fraction:s=0,keyframes:i=Nt,triggerOnce:c=!1,className:f,style:l,childClassName:d,childStyle:u,children:S,onVisibilityChange:I}=t,x=b.useMemo(()=>We({keyframes:i,duration:a}),[a,i]);return Ue(S)?null:Ge(S)?$(qe,{...t,animationStyles:x,children:String(S)}):mr.isFragment(S)?$(lr,{...t,animationStyles:x}):$(fe,{children:b.Children.map(S,(m,O)=>{if(!b.isValidElement(m))return null;const v=n+(r?O*a*e:0);switch(m.type){case"ol":case"ul":return $(gt,{children:({cx:p})=>$(m.type,{...m.props,className:p(f,m.props.className),style:Object.assign({},l,m.props.style),children:$(q,{...t,children:m.props.children})})});case"li":return $(Bt,{threshold:s,triggerOnce:c,onChange:I,children:({inView:p,ref:C})=>$(gt,{children:({cx:M})=>$(m.type,{...m.props,ref:C,className:M(d,m.props.className),css:G(()=>x)(p),style:Object.assign({},u,m.props.style,Ct(!p),{animationDelay:v+"ms"})})})});default:return $(Bt,{threshold:s,triggerOnce:c,onChange:I,children:({inView:p,ref:C})=>$("div",{ref:C,className:f,css:G(()=>x)(p),style:Object.assign({},l,Ct(!p),{animationDelay:v+"ms"}),children:$(gt,{children:({cx:M})=>$(m.type,{...m.props,className:M(d,m.props.className),style:Object.assign({},u,m.props.style)})})})})}})})},Ze={display:"inline-block",whiteSpace:"pre"},qe=t=>{const{animationStyles:r,cascade:e=!1,damping:n=.5,delay:a=0,duration:s=1e3,fraction:i=0,triggerOnce:c=!1,className:f,style:l,children:d,onVisibilityChange:u}=t,{ref:S,inView:I}=fr({triggerOnce:c,threshold:i,onChange:u});return dr(()=>$("div",{ref:S,className:f,style:Object.assign({},l,Ze),children:d.split("").map((x,m)=>$("span",{css:G(()=>r)(I),style:{animationDelay:a+m*s*n+"ms"},children:x},m))}),()=>$(lr,{...t,children:d}))(e)},lr=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:n=!1,className:a,style:s,children:i,onVisibilityChange:c}=t,{ref:f,inView:l}=fr({triggerOnce:n,threshold:e,onChange:c});return $("div",{ref:f,className:a,css:G(()=>r)(l),style:Object.assign({},s,Ct(!l)),children:i})};function He(t){switch(t){case"bounce":return[ve,{transformOrigin:"center bottom"}];case"flash":return[we];case"headShake":return[Se,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[Ce,{animationTimingFunction:"ease-in-out"}];case"jello":return[$e,{transformOrigin:"center"}];case"pulse":return[Oe,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[ke];case"shake":return[Ie];case"shakeX":return[Ee];case"shakeY":return[Re];case"swing":return[Ae,{transformOrigin:"top center"}];case"tada":return[ze];case"wobble":return[Te]}}const Nn=t=>{const{effect:r="bounce",style:e,...n}=t,[a,s]=b.useMemo(()=>He(r),[r]);return $(q,{keyframes:a,style:Object.assign({},e,s),...n})};o`
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
`;const Ke=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Je=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Qe=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,tn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,rn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,en=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,nn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,an=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,sn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,on=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,cn=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,fn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,dn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function ln(t,r,e){switch(e){case"bottom-left":return r?Je:Me;case"bottom-right":return r?Qe:_e;case"down":return t?r?rn:Pe:r?tn:Ye;case"left":return t?r?nn:Fe:r?en:Nt;case"right":return t?r?sn:Le:r?an:Xe;case"top-left":return r?on:Ve;case"top-right":return r?cn:Be;case"up":return t?r?dn:De:r?fn:je;default:return r?Ke:Ne}}const Mn=t=>{const{big:r=!1,direction:e,reverse:n=!1,...a}=t,s=b.useMemo(()=>ln(r,n,e),[r,e,n]);return $(q,{keyframes:s,...a})};o`
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
`;const mn=o`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,un=o`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,pn=o`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,yn=o`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,hn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,gn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,bn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,xn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function vn(t,r){switch(r){case"down":return t?hn:mn;case"right":return t?bn:pn;case"up":return t?xn:yn;case"left":default:return t?gn:un}}const _n=t=>{const{direction:r,reverse:e=!1,...n}=t,a=b.useMemo(()=>vn(e,r),[r,e]);return $(q,{keyframes:a,...n})},wn=o`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Sn=o`
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
`,Cn=o`
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
`,$n=o`
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
`,On=o`
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
`,kn=o`
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
`,In=o`
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
`,En=o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Rn=o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,An=o`
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
`;function zn(t,r){switch(r){case"down":return t?In:Sn;case"left":return t?En:Cn;case"right":return t?Rn:$n;case"up":return t?An:On;default:return t?kn:wn}}const Yn=t=>{const{direction:r,reverse:e=!1,...n}=t,a=b.useMemo(()=>zn(e,r),[r,e]);return $(q,{keyframes:a,...n})};export{Nn as A,Mn as F,_n as S,Yn as Z};
