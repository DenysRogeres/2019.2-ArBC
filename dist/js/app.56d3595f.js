(function(e){function t(t){for(var n,a,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-28fc7f00":"3b913f4a","chunk-c2e4a3e6":"d557a6a1"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-28fc7f00":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-28fc7f00":"1a945d8a","chunk-c2e4a3e6":"31d6cfe0"}[e]+".css",o=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===n||f===o))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===n||f===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],p.parentNode.removeChild(p),r(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=f;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0e9d":function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("bc3a"),o=r.n(a),c="https://arbc-app.herokuapp.com/api/v1",u={timeout:5e3,baseURL:c,headers:{Accept:"application/json"}},i=function(e){return e.data.hasOwnProperty("results")?e.data.results:e.data};t["a"]={get:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(t,u);case 2:return r=e.sent,e.abrupt("return",i(r));case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},"9dee":function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=(r("7f7f"),r("d225")),o=r("b0b4"),c=r("308d"),u=r("6bb5"),i=r("4e2b"),s=r("9ab4"),f=r("0e9d"),l=r("6fc5"),p=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.words={},e}return Object(i["a"])(t,e),Object(o["a"])(t,[{key:"setWord",value:function(e){this.words[e.name]=e.image}},{key:"getWord",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.words.hasOwnProperty(t)){e.next=12;break}return r="/Word/".concat(t.toUpperCase()),e.prev=2,e.next=5,f["a"].get(r);case 5:n=e.sent,this.setWord({name:n.name,image:{url:n.image,isValid:!0}}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),this.setWord({name:t,image:{url:"",isValid:!1}});case 12:return e.abrupt("return",this.words[t]);case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"Words",get:function(){return this.words}}]),t}(l["d"]);Object(s["a"])([l["c"]],p.prototype,"setWord",null),Object(s["a"])([l["a"]],p.prototype,"getWord",null),p=Object(s["a"])([Object(l["b"])({name:"words"})],p),t["a"]=p},cd49:function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-view")},o=[],c=r("d225"),u=r("308d"),i=r("6bb5"),s=r("4e2b"),f=r("9ab4"),l=r("2fe1"),p=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(i["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),t}(n["default"]);p=Object(f["a"])([Object(l["b"])({})],p);var d=p,h=d,b=r("2877"),m=Object(b["a"])(h,a,o,!1,null,null,null),g=m.exports,v=r("8c4f");n["default"].use(v["a"]);var y=new v["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:function(){return r.e("chunk-28fc7f00").then(r.bind(null,"bb51"))}},{path:"/camera",name:"Camera",component:function(){return r.e("chunk-c2e4a3e6").then(r.bind(null,"6ec0"))}}]}),w=r("2f62"),O=r("f41a"),j=r("9dee");n["default"].use(w["a"]);var k=new w["a"].Store({modules:{letters:O["a"],words:j["a"]}}),x=k,L=r("9483");Object(L["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["default"].config.productionTip=!1,new n["default"]({router:y,store:x,render:function(e){return e(g)}}).$mount("#app")},f41a:function(e,t,r){"use strict";r("7f7f"),r("ac6a"),r("96cf");var n=r("3b8d"),a=r("d225"),o=r("b0b4"),c=r("308d"),u=r("6bb5"),i=r("4e2b"),s=r("9ab4"),f=r("0e9d"),l=r("6fc5"),p=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.letters={},e}return Object(i["a"])(t,e),Object(o["a"])(t,[{key:"setLetters",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.forEach((function(e){r.letters[e.name]=e.image}));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getLetters",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="/Letter",e.next=3,f["a"].get(t);case 3:return r=e.sent,e.next=6,this.setLetters(r);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"Letters",get:function(){return this.letters}}]),t}(l["d"]);Object(s["a"])([l["c"]],p.prototype,"setLetters",null),Object(s["a"])([l["a"]],p.prototype,"getLetters",null),p=Object(s["a"])([Object(l["b"])({name:"letters"})],p),t["a"]=p}});
//# sourceMappingURL=app.56d3595f.js.map