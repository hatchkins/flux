(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-002dafad"],{"205f":function(t,e,a){"use strict";a.d(e,"a",(function(){return B}));var n=a("2b0e"),r=a("b42e"),o=a("c637"),c=a("a723"),i=a("9b76"),s=a("8690"),u=a("365c"),l=a("d82f"),d=a("cf75"),b=a("d580"),f=a("6197"),m=a("b885");function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){h(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function h(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var O=Object(d["d"])(Object(l["m"])(p(p({},Object(d["a"])(b["a"],d["f"].bind(null,"footer"))),{},{footer:Object(d["c"])(c["t"]),footerClass:Object(d["c"])(c["e"]),footerHtml:Object(d["c"])(c["t"])})),o["l"]),j=n["default"].extend({name:o["l"],functional:!0,props:O,render:function(t,e){var a,n=e.props,o=e.data,c=e.children,i=n.footerBgVariant,u=n.footerBorderVariant,l=n.footerTextVariant;return t(n.footerTag,Object(r["a"])(o,{staticClass:"card-footer",class:[n.footerClass,(a={},h(a,"bg-".concat(i),i),h(a,"border-".concat(u),u),h(a,"text-".concat(l),l),a)],domProps:c?{}:Object(s["a"])(n.footerHtml,n.footer)}),c)}}),v=a("4918");function w(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function x(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(Object(a),!0).forEach((function(e){y(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function y(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var D=Object(d["d"])(Object(l["m"])(x(x({},Object(l["k"])(v["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(d["c"])(c["g"],!1),end:Object(d["c"])(c["g"],!1),start:Object(d["c"])(c["g"],!1),top:Object(d["c"])(c["g"],!1)})),o["n"]),T=n["default"].extend({name:o["n"],functional:!0,props:D,render:function(t,e){var a=e.props,n=e.data,o=a.src,c=a.alt,i=a.width,s=a.height,u="card-img";return a.top?u+="-top":a.right||a.end?u+="-right":a.bottom?u+="-bottom":(a.left||a.start)&&(u+="-left"),t("img",Object(r["a"])(n,{class:u,attrs:{src:o,alt:c,width:i,height:s}}))}});function P(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function C(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?P(Object(a),!0).forEach((function(e){k(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function k(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var S=Object(d["a"])(D,d["f"].bind(null,"img"));S.imgSrc.required=!1;var z=Object(d["d"])(Object(l["m"])(C(C(C(C(C(C({},f["b"]),m["b"]),O),S),b["a"]),{},{align:Object(d["c"])(c["t"]),noBody:Object(d["c"])(c["g"],!1)})),o["j"]),B=n["default"].extend({name:o["j"],functional:!0,props:z,render:function(t,e){var a,n=e.props,o=e.data,c=e.slots,l=e.scopedSlots,b=n.imgSrc,g=n.imgLeft,p=n.imgRight,h=n.imgStart,v=n.imgEnd,w=n.imgBottom,x=n.header,y=n.headerHtml,D=n.footer,P=n.footerHtml,C=n.align,z=n.textVariant,B=n.bgVariant,E=n.borderVariant,I=l||{},_=c(),V={},R=t(),H=t();if(b){var N=t(T,{props:Object(d["e"])(S,n,d["h"].bind(null,"img"))});w?H=N:R=N}var F=t(),q=Object(u["a"])(i["p"],I,_);(q||x||y)&&(F=t(m["a"],{props:Object(d["e"])(m["b"],n),domProps:q?{}:Object(s["a"])(y,x)},Object(u["b"])(i["p"],V,I,_)));var A=Object(u["b"])(i["h"],V,I,_);n.noBody||(A=t(f["a"],{props:Object(d["e"])(f["b"],n)},A),n.overlay&&b&&(A=t("div",{staticClass:"position-relative"},[R,A,H]),R=t(),H=t()));var L=t(),U=Object(u["a"])(i["o"],I,_);return(U||D||P)&&(L=t(j,{props:Object(d["e"])(O,n),domProps:q?{}:Object(s["a"])(P,D)},Object(u["b"])(i["o"],V,I,_))),t(n.tag,Object(r["a"])(o,{staticClass:"card",class:(a={"flex-row":g||h,"flex-row-reverse":(p||v)&&!(g||h)},k(a,"text-".concat(C),C),k(a,"bg-".concat(B),B),k(a,"border-".concat(E),E),k(a,"text-".concat(z),z),a)}),[R,F,A,L,H])}})},"25f0":function(t,e,a){"use strict";var n=a("6eeb"),r=a("825a"),o=a("577e"),c=a("d039"),i=a("ad6d"),s="toString",u=RegExp.prototype,l=u[s],d=c((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),b=l.name!=s;(d||b)&&n(RegExp.prototype,s,(function(){var t=r(this),e=o(t.source),a=t.flags,n=o(void 0===a&&t instanceof RegExp&&!("flags"in u)?i.call(t):a);return"/"+e+"/"+n}),{unsafe:!0})},"327f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-popover",{ref:"popover",attrs:{target:""+t.target,triggers:"click blur",show:t.show,placement:"auto",container:"my-container","custom-class":"confirm-dialog-"+t.width},on:{"update:show":function(e){t.show=e}},scopedSlots:t._u([{key:"title",fn:function(){return[a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("span",[t._v(t._s(t.title))]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(e){t.show=!1}}},[a("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}])},[a("div",{staticClass:"text-center"},[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(e){t.show=!1}}},[t._v(" "+t._s(t.cancelButton)+" ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.confirm()}}},[t._v(" "+t._s(t.confirmButton)+" ")])],1)])},r=[],o=(a("a9e3"),a("1947")),c=a("3828"),i=a("e009"),s={components:{BButton:o["a"],BPopover:c["a"]},directives:{Ripple:i["a"]},props:{target:{type:String,required:!0},title:{type:String,required:!1,default:"Are You Sure?"},cancelButton:{type:String,required:!1,default:"Cancel"},confirmButton:{type:String,required:!0},width:{type:Number,required:!1,default:300}},data:function(){return{show:!1}},methods:{confirm:function(){this.show=!1,this.$emit("confirm")}}},u=s,l=(a("f88e"),a("2877")),d=Object(l["a"])(u,n,r,!1,null,null,null);e["a"]=d.exports},3828:function(t,e,a){"use strict";a.d(e,"a",(function(){return v}));var n=a("2b0e"),r=a("c637"),o=a("0056"),c=a("a723"),i=a("9b76"),s=a("cf75"),u=a("b4ae"),l=a("8df8"),d=a("7b1e"),b=a("df44"),f=n["default"].extend({name:r["lb"],extends:b["a"],computed:{templateType:function(){return"popover"}},methods:{renderTemplate:function(t){var e=this.title,a=this.content,n=Object(d["e"])(e)?e({}):e,r=Object(d["e"])(a)?a({}):a,o=this.html&&!Object(d["e"])(e)?{innerHTML:e}:{},c=this.html&&!Object(d["e"])(a)?{innerHTML:a}:{};return t("div",{staticClass:"popover b-popover",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{staticClass:"arrow",ref:"arrow"}),Object(d["o"])(n)||""===n?t():t("h3",{staticClass:"popover-header",domProps:o},[n]),Object(d["o"])(r)||""===r?t():t("div",{staticClass:"popover-body",domProps:c},[r])])}}}),m=n["default"].extend({name:r["kb"],extends:l["a"],computed:{templateType:function(){return"popover"}},methods:{getTemplate:function(){return f}}}),g=a("d82f");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){O(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var j=Object(s["d"])(Object(g["m"])(h(h({},u["b"]),{},{content:Object(s["c"])(c["t"]),placement:Object(s["c"])(c["t"],"right"),triggers:Object(s["c"])(c["f"],o["f"])})),r["jb"]),v=n["default"].extend({name:r["jb"],extends:u["a"],inheritAttrs:!1,props:j,methods:{getComponent:function(){return m},updateContent:function(){this.setContent(this.normalizeSlot()||this.content),this.setTitle(this.normalizeSlot(i["O"])||this.title)}}})},4968:function(t,e,a){"use strict";a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return l}));var n=a("2b0e"),r=a("b42e"),o=a("c637"),c=a("a723"),i=a("cf75"),s=a("fa73"),u=Object(i["d"])({title:Object(i["c"])(c["t"]),titleTag:Object(i["c"])(c["t"],"h4")},o["q"]),l=n["default"].extend({name:o["q"],functional:!0,props:u,render:function(t,e){var a=e.props,n=e.data,o=e.children;return t(a.titleTag,Object(r["a"])(n,{staticClass:"card-title"}),o||Object(s["g"])(a.title))}})},6076:function(t,e,a){"use strict";a("99af");var n=a("b4c0");e["a"]={help:function(){return Object(n["a"])().get("/daemon/help")},helpSpecific:function(t){return Object(n["a"])().get("/daemon/help/".concat(t))},getInfo:function(){return Object(n["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(n["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(t,e){return Object(n["a"])().get("/daemon/getrawtransaction/".concat(t,"/").concat(e))},listZelNodes:function(){return Object(n["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(n["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(n["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(n["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(n["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(n["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(n["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(n["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(t){return Object(n["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark:function(t){return Object(n["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo:function(){return Object(n["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(n["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(n["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(t,e){return Object(n["a"])().get("/daemon/validateaddress/".concat(e),{headers:{zelidauth:t}})},getWalletInfo:function(t){return Object(n["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listZelNodeConf:function(t){return Object(n["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start:function(t){return Object(n["a"])().get("/daemon/start",{headers:{zelidauth:t}})},restart:function(t){return Object(n["a"])().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon:function(t){return Object(n["a"])().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon:function(t,e){return Object(n["a"])().get("/daemon/rescanblockchain/".concat(e),{headers:{zelidauth:t}})},getBlock:function(t,e){return Object(n["a"])().get("/daemon/getblock/".concat(t,"/").concat(e))},tailDaemonDebug:function(t){return Object(n["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(n["a"])()},cancelToken:function(){return n["b"]}}},6197:function(t,e,a){"use strict";a.d(e,"b",(function(){return g})),a.d(e,"a",(function(){return p}));var n=a("2b0e"),r=a("b42e"),o=a("c637"),c=a("a723"),i=a("d82f"),s=a("cf75"),u=a("d580"),l=a("4968"),d=a("ba06");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g=Object(s["d"])(Object(i["m"])(f(f(f(f({},l["b"]),d["b"]),Object(s["a"])(u["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(c["e"]),overlay:Object(s["c"])(c["g"],!1)})),o["k"]),p=n["default"].extend({name:o["k"],functional:!0,props:g,render:function(t,e){var a,n=e.props,o=e.data,c=e.children,i=n.bodyBgVariant,u=n.bodyBorderVariant,b=n.bodyTextVariant,f=t();n.title&&(f=t(l["a"],{props:Object(s["e"])(l["b"],n)}));var g=t();return n.subTitle&&(g=t(d["a"],{props:Object(s["e"])(d["b"],n),class:["mb-2"]})),t(n.bodyTag,Object(r["a"])(o,{staticClass:"card-body",class:[(a={"card-img-overlay":n.overlay},m(a,"bg-".concat(i),i),m(a,"border-".concat(u),u),m(a,"text-".concat(b),b),a),n.bodyClass]}),[f,g,c])}})},"867f":function(t,e,a){"use strict";a("99af");var n=a("b4c0");e["a"]={softUpdateFlux:function(t){return Object(n["a"])().get("/flux/softupdate",{headers:{zelidauth:t}})},softUpdateInstallFlux:function(t){return Object(n["a"])().get("/flux/softupdateinstall",{headers:{zelidauth:t}})},updateFlux:function(t){return Object(n["a"])().get("/flux/updateflux",{headers:{zelidauth:t}})},hardUpdateFlux:function(t){return Object(n["a"])().get("/flux/hardupdateflux",{headers:{zelidauth:t}})},rebuildHome:function(t){return Object(n["a"])().get("/flux/rebuildhome",{headers:{zelidauth:t}})},updateDaemon:function(t){return Object(n["a"])().get("/flux/updatedaemon",{headers:{zelidauth:t}})},reindexDaemon:function(t){return Object(n["a"])().get("/flux/reindexdaemon",{headers:{zelidauth:t}})},updateBenchmark:function(t){return Object(n["a"])().get("/flux/updatebenchmark",{headers:{zelidauth:t}})},getFluxVersion:function(){return Object(n["a"])().get("/flux/version")},broadcastMessage:function(t,e){var a=e,r={headers:{zelidauth:t}};return Object(n["a"])().post("/flux/broadcastmessage",JSON.stringify(a),r)},connectedPeers:function(){return Object(n["a"])().get("/flux/connectedpeers?timestamp=".concat((new Date).getTime()))},connectedPeersInfo:function(){return Object(n["a"])().get("/flux/connectedpeersinfo?timestamp=".concat((new Date).getTime()))},incomingConnections:function(){return Object(n["a"])().get("/flux/incomingconnections?timestamp=".concat((new Date).getTime()))},incomingConnectionsInfo:function(){return Object(n["a"])().get("/flux/incomingconnectionsinfo?timestamp=".concat((new Date).getTime()))},addPeer:function(t,e){return Object(n["a"])().get("/flux/addpeer/".concat(e),{headers:{zelidauth:t}})},removePeer:function(t,e){return Object(n["a"])().get("/flux/removepeer/".concat(e),{headers:{zelidauth:t}})},removeIncomingPeer:function(t,e){return Object(n["a"])().get("/flux/removeincomingpeer/".concat(e),{headers:{zelidauth:t}})},adjustCruxID:function(t,e){return Object(n["a"])().get("/flux/adjustcruxid/".concat(e),{headers:{zelidauth:t}})},adjustKadena:function(t,e,a){return Object(n["a"])().get("/flux/adjustkadena/".concat(e,"/").concat(a),{headers:{zelidauth:t}})},getCruxID:function(){return Object(n["a"])().get("/flux/cruxid")},getKadenaAccount:function(){return Object(n["a"])().get("/flux/kadena")},getZelid:function(){return Object(n["a"])().get("/flux/zelid")},tailFluxLog:function(t,e){return Object(n["a"])().get("/flux/tail".concat(t,"log"),{headers:{zelidauth:e}})},justAPI:function(){return Object(n["a"])()},cancelToken:function(){return n["b"]}}},b885:function(t,e,a){"use strict";a.d(e,"b",(function(){return m})),a.d(e,"a",(function(){return g}));var n=a("2b0e"),r=a("b42e"),o=a("c637"),c=a("a723"),i=a("8690"),s=a("d82f"),u=a("cf75"),l=a("d580");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){f(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m=Object(u["d"])(Object(s["m"])(b(b({},Object(u["a"])(l["a"],u["f"].bind(null,"header"))),{},{header:Object(u["c"])(c["t"]),headerClass:Object(u["c"])(c["e"]),headerHtml:Object(u["c"])(c["t"])})),o["m"]),g=n["default"].extend({name:o["m"],functional:!0,props:m,render:function(t,e){var a,n=e.props,o=e.data,c=e.children,s=n.headerBgVariant,u=n.headerBorderVariant,l=n.headerTextVariant;return t(n.headerTag,Object(r["a"])(o,{staticClass:"card-header",class:[n.headerClass,(a={},f(a,"bg-".concat(s),s),f(a,"border-".concat(u),u),f(a,"text-".concat(l),l),a)],domProps:c?{}:Object(i["a"])(n.headerHtml,n.header)}),c)}})},ba06:function(t,e,a){"use strict";a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return l}));var n=a("2b0e"),r=a("b42e"),o=a("c637"),c=a("a723"),i=a("cf75"),s=a("fa73"),u=Object(i["d"])({subTitle:Object(i["c"])(c["t"]),subTitleTag:Object(i["c"])(c["t"],"h6"),subTitleTextVariant:Object(i["c"])(c["t"],"muted")},o["o"]),l=n["default"].extend({name:o["o"],functional:!0,props:u,render:function(t,e){var a=e.props,n=e.data,o=e.children;return t(a.subTitleTag,Object(r["a"])(n,{staticClass:"card-subtitle",class:[a.subTitleTextVariant?"text-".concat(a.subTitleTextVariant):null]}),o||Object(s["g"])(a.subTitle))}})},d580:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("2b0e"),r=a("c637"),o=a("a723"),c=a("cf75"),i=Object(c["d"])({bgVariant:Object(c["c"])(o["t"]),borderVariant:Object(c["c"])(o["t"]),tag:Object(c["c"])(o["t"],"div"),textVariant:Object(c["c"])(o["t"])},r["j"]);n["default"].extend({props:i})},d6e4:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a("2b0e"),r=a("b42e"),o=a("c637"),c=a("a723"),i=a("cf75"),s=Object(i["d"])({textTag:Object(i["c"])(c["t"],"p")},o["p"]),u=n["default"].extend({name:o["p"],functional:!0,props:s,render:function(t,e){var a=e.props,n=e.data,o=e.children;return t(a.textTag,Object(r["a"])(n,{staticClass:"card-text"}),o)}})},e189:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{sm:"12",lg:"6"}},[a("b-card",{attrs:{title:"Daemon"}},[a("b-card-text",{staticClass:"mb-3"},[t._v(" An easy way to update your Flux daemon to the latest version. Flux will be automatically started once update is done. ")]),a("div",{staticClass:"text-center"},[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"update-daemon",variant:"success","aria-label":"Update Daemon"}},[t._v(" Update Daemon ")]),a("confirm-dialog",{attrs:{target:"update-daemon","confirm-button":"Update Daemon"},on:{confirm:function(e){return t.updateDaemon()}}})],1)],1)],1),a("b-col",{attrs:{sm:"12",lg:"6"}},[a("b-card",{attrs:{title:"Manage Process"}},[a("b-card-text",{staticClass:"mb-3"},[t._v(" Here you can manage your Flux daemon process. ")]),a("div",{staticClass:"text-center"},[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"start-daemon",variant:"success","aria-label":"Start Daemon"}},[t._v(" Start Daemon ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"stop-daemon",variant:"success","aria-label":"Stop Daemon"}},[t._v(" Stop Daemon ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"restart-daemon",variant:"success","aria-label":"Restart Daemon"}},[t._v(" Restart Daemon ")]),a("confirm-dialog",{attrs:{target:"start-daemon","confirm-button":"Start Daemon"},on:{confirm:function(e){return t.startDaemon()}}}),a("confirm-dialog",{attrs:{target:"stop-daemon","confirm-button":"Stop Daemon"},on:{confirm:function(e){return t.stopDaemon()}}}),a("confirm-dialog",{attrs:{target:"restart-daemon","confirm-button":"Restart Daemon"},on:{confirm:function(e){return t.restartDaemon()}}})],1)],1)],1)],1),a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{sm:"12",lg:"8"}},[a("b-card",{attrs:{title:"Rescan"}},[a("b-card-text",{staticClass:"mb-2"},[t._v(" Choose a blockheight to rescan Daemon from and click on Rescan Daemon to begin rescanning. ")]),a("div",{staticClass:"mb-1",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[a("b-card-text",{staticClass:"mr-1 mb-0"},[t._v(" Block Height ")]),a("b-form-spinbutton",{staticStyle:{width:"250px"},attrs:{id:"sb-vertical",min:"0",max:"2000000"},model:{value:t.rescanDaemonHeight,callback:function(e){t.rescanDaemonHeight=e},expression:"rescanDaemonHeight"}}),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1",staticStyle:{width:"250px"},attrs:{id:"rescan-daemon",variant:"success","aria-label":"Rescan Daemon"}},[t._v(" Rescan Daemon ")]),a("confirm-dialog",{attrs:{target:"rescan-daemon","confirm-button":"Rescan Daemon"},on:{confirm:function(e){return t.rescanDaemon()}}})],1)],1)],1),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("b-card",{attrs:{title:"Reindex"}},[a("b-card-text",{staticClass:"mb-2"},[t._v(" This option reindexes Flux blockchain data. It will take several hours to finish the operation. ")]),a("div",{staticClass:"text-center"},[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"reindex-daemon",variant:"success","aria-label":"Reindex Daemon"}},[t._v(" Reindex Daemon ")]),a("confirm-dialog",{attrs:{target:"reindex-daemon","confirm-button":"Reindex Daemon"},on:{confirm:function(e){return t.reindexDaemon()}}})],1)],1)],1)],1)],1)},r=[],o=(a("d3b7"),a("25f0"),a("205f")),c=a("a15b"),i=a("b28b"),s=a("d6e4"),u=a("1947"),l=a("93aa"),d=a("b307"),b=a("e009"),f=a("bc3a"),m=a.n(f),g=a("327f"),p=a("6076"),h=a("867f"),O=a("4328"),j={components:{BCard:o["a"],BRow:c["a"],BCol:i["a"],BCardText:s["a"],BButton:u["a"],BFormSpinbutton:l["a"],ConfirmDialog:g["a"],ToastificationContent:d["a"]},directives:{Ripple:b["a"]},data:function(){return{rescanDaemonHeight:0}},mounted:function(){this.checkDaemonVersion()},methods:{checkDaemonVersion:function(){var t=this;p["a"].getInfo().then((function(e){console.log(e);var a=e.data.data.version;m.a.get("https://raw.githubusercontent.com/runonflux/flux/master/helpers/daemoninfo.json").then((function(e){console.log(e),e.data.version!==a?t.showToast("warning","Daemon requires an update!"):t.showToast("success","Daemon is up to date.")})).catch((function(e){console.log(e),t.showToast("danger","Error verifying recent version")}))})).catch((function(e){console.log(e),t.showToast("danger","Error connecting to Daemon")}))},updateDaemon:function(){var t=this;p["a"].getInfo().then((function(e){console.log(e);var a=e.data.data.version;m.a.get("https://raw.githubusercontent.com/runonflux/flux/master/helpers/daemoninfo.json").then((function(e){if(console.log(e),e.data.version!==a){var n=localStorage.getItem("zelidauth"),r=O.parse(n);console.log(r),t.showToast("warning","Daemon is now updating in the background"),h["a"].updateDaemon(n).then((function(e){console.log(e),"error"===e.data.status&&t.showToast("danger",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),console.log(e.code),t.showToast("danger",e.toString())}))}else t.showToast("success","Daemon is already up to date")})).catch((function(e){console.log(e),t.showToast("danger","Error verifying recent version")}))})).catch((function(e){console.log(e),t.showToast("danger","Error connecting to Daemon")}))},startDaemon:function(){var t=this;this.showToast("warning","Daemon will start");var e=localStorage.getItem("zelidauth");p["a"].start(e).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to start Daemon")}))},stopDaemon:function(){var t=this;this.showToast("warning","Daemon will be stopped");var e=localStorage.getItem("zelidauth");p["a"].stopDaemon(e).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to stop Daemon")}))},restartDaemon:function(){var t=this;this.showToast("warning","Daemon will now restart");var e=localStorage.getItem("zelidauth");p["a"].restart(e).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to restart Daemon")}))},rescanDaemon:function(){var t=this;this.showToast("warning","Daemon will now rescan. This will take up to an hour.");var e=localStorage.getItem("zelidauth"),a=this.rescanDaemonHeight>0?this.rescanDaemonHeight:0;p["a"].rescanDaemon(e,a).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to rescan Daemon")}))},reindexDaemon:function(){var t=this;this.showToast("warning","Daemon will now reindex. This will take several hours.");var e=localStorage.getItem("zelidauth");h["a"].reindexDaemon(e).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to reindex Daemon")}))},showToast:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"InfoIcon";this.$toast({component:d["a"],props:{title:e,icon:a,variant:t}})}}},v=j,w=a("2877"),x=Object(w["a"])(v,n,r,!1,null,null,null);e["default"]=x.exports},f76f:function(t,e,a){},f88e:function(t,e,a){"use strict";a("f76f")}}]);