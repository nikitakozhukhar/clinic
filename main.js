!function(){var t={9662:function(t,e,n){var r=n(614),o=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,n){var r=n(1694),o=n(614),i=n(4326),a=n(5112)("toStringTag"),c=Object,s="Arguments"==i(function(){return arguments}());t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=c(t),a))?n:s?i(e):"Object"==(r=i(e))&&o(e.callee)?"Arguments":r}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),o=n(3070),i=n(6339),a=n(3072);t.exports=function(t,e,n,c){c||(c={});var s=c.enumerable,u=void 0!==c.name?c.name:e;if(r(n)&&i(n,u,c),c.global)s?t[e]=n:a(e,n);else{try{c.unsafe?t[e]&&(s=!0):delete t[e]}catch(t){}s?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n=void 0===e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,o,i=n(7854),a=n(8113),c=i.process,s=i.Deno,u=c&&c.versions||s&&s.version,d=u&&u.v8;d&&(o=(r=d.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),s=c&&"something"===function(){}.name,u=c&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:s,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);t.exports=r?a:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614);t.exports=function(t,e){return arguments.length<2?(n=r[t],o(n)?n:void 0):r[t]&&r[t][e];var n}},8173:function(t,e,n){var r=n(9662),o=n(8554);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,a=n(4811),c=n(7854),s=n(111),u=n(8880),d=n(2597),l=n(5465),p=n(6200),C=n(3501),f="Object already initialized",m=c.TypeError,h=c.WeakMap;if(a||l.state){var v=l.state||(l.state=new h);v.get=v.get,v.has=v.has,v.set=v.set,r=function(t,e){if(v.has(t))throw m(f);return e.facade=t,v.set(t,e),e},o=function(t){return v.get(t)||{}},i=function(t){return v.has(t)}}else{var b=p("state");C[b]=!0,r=function(t,e){if(d(t,b))throw m(f);return e.facade=t,u(t,b,e),e},o=function(t){return d(t,b)?t[b]:{}},i=function(t){return d(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}}}},614:function(t,e,n){var r=n(4154),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},8554:function(t){t.exports=function(t){return null==t}},111:function(t,e,n){var r=n(614),o=n(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),o=n(614),i=n(7976),a=n(3307),c=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,c(t))}},6339:function(t,e,n){var r=n(1702),o=n(7293),i=n(614),a=n(2597),c=n(9781),s=n(6530).CONFIGURABLE,u=n(2788),d=n(9909),l=d.enforce,p=d.get,C=String,f=Object.defineProperty,m=r("".slice),h=r("".replace),v=r([].join),b=c&&!o((function(){return 8!==f((function(){}),"length",{value:8}).length})),g=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===m(C(e),0,7)&&(e="["+h(C(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!a(t,"name")||s&&t.name!==e)&&(c?f(t,"name",{value:e,configurable:!0}):t.name=e),b&&n&&a(n,"arity")&&t.length!==n.arity&&f(t,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?c&&f(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=l(t);return a(r,"source")||(r.source=v(g,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return i(this)&&p(this).source||u(this)}),"toString")},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(3353),a=n(9670),c=n(4948),s=TypeError,u=Object.defineProperty,d=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",C="writable";e.f=r?i?function(t,e,n){if(a(t),e=c(e),a(n),"function"==typeof t&&"prototype"===e&&"value"in n&&C in n&&!n[C]){var r=d(t,e);r&&r[C]&&(t[e]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:l in n?n[l]:r[l],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(a(t),e=c(e),a(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw s("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},288:function(t,e,n){"use strict";var r=n(1694),o=n(648);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},2140:function(t,e,n){var r=n(6916),o=n(614),i=n(111),a=TypeError;t.exports=function(t,e){var n,c;if("string"===e&&o(n=t.toString)&&!i(c=r(n,t)))return c;if(o(n=t.valueOf)&&!i(c=r(n,t)))return c;if("string"!==e&&o(n=t.toString)&&!i(c=r(n,t)))return c;throw a("Can't convert object to primitive value")}},4488:function(t,e,n){var r=n(8554),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),o=n(7293),i=n(7854).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),i=n(2190),a=n(8173),c=n(2140),s=n(5112),u=TypeError,d=s("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,s=a(t,d);if(s){if(void 0===e&&(e="default"),n=r(s,t,e),!o(n)||i(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),o=n(614),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),c=n(6293),s=n(3307),u=r.Symbol,d=o("wks"),l=s?u.for||u:u&&u.withoutSetter||a;t.exports=function(t){return i(d,t)||(d[t]=c&&i(u,t)?u[t]:l("Symbol."+t)),d[t]}},1539:function(t,e,n){var r=n(1694),o=n(8052),i=n(288);r||o(Object.prototype,"toString",i,{unsafe:!0})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(1539);var t=function(){var t,e,n,r,o,i,a=document.createElement("header"),c=document.createElement("div"),s=document.createElement("nav");return a.classList.add("header"),c.classList.add("header_container"),s.classList.add("header_nav"),c.appendChild((t=document.createElement("a"),(e=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("width","62"),e.setAttribute("height","19"),e.setAttribute("viewBox","0 0 62 19"),e.setAttribute("fill","none"),e.setAttribute("xmlns","http://www.w3.org/2000/svg"),["M12.1292 17.9674H0V0.352302H3.72433V14.696H12.1292V17.9674Z","M10.7981 9.15985C10.7981 7.71709 10.9826 6.42531 11.3517 5.28453C11.7208 4.14374 12.2492 3.18749 12.9371 2.41578C13.6417 1.6273 14.4973 1.03174 15.5038 0.629111C16.5104 0.209704 17.6512 0 18.9262 0C20.2851 0 21.4678 0.22648 22.4744 0.679439C23.4977 1.11562 24.3449 1.73635 25.016 2.54161C25.7038 3.34687 26.2155 4.3115 26.551 5.43551C26.9033 6.55952 27.0795 7.80097 27.0795 9.15985C27.0795 10.6026 26.8865 11.8944 26.5007 13.0352C26.1316 14.176 25.5948 15.1406 24.8902 15.9291C24.1856 16.7008 23.33 17.2963 22.3234 17.7157C21.3168 18.1184 20.1844 18.3197 18.9262 18.3197C17.5673 18.3197 16.3762 18.1016 15.3528 17.6654C14.3463 17.2125 13.4991 16.5833 12.8112 15.7781C12.1402 14.9728 11.6369 14.0082 11.3014 12.8842C10.9659 11.7602 10.7981 10.5187 10.7981 9.15985ZM14.7489 9.15985C14.7489 10.0322 14.8328 10.8291 15.0005 11.5505C15.1683 12.2718 15.42 12.8926 15.7555 13.4126C16.091 13.9327 16.5188 14.3353 17.0389 14.6205C17.5757 14.9057 18.2048 15.0483 18.9262 15.0483C20.2515 15.0483 21.2833 14.5954 22.0214 13.6894C22.7596 12.7835 23.1287 11.2737 23.1287 9.15985C23.1287 8.32103 23.0532 7.54094 22.9022 6.81956C22.7512 6.09818 22.4995 5.47745 22.1472 4.95739C21.8117 4.42055 21.3755 4.00953 20.8387 3.72433C20.3186 3.42236 19.6811 3.27137 18.9262 3.27137C17.6176 3.27137 16.5943 3.74111 15.8561 4.68058C15.118 5.62005 14.7489 7.11314 14.7489 9.15985Z","M36.4045 8.70689H43.6015V16.6085C43.2156 16.9105 42.7878 17.1705 42.3181 17.3886C41.8651 17.5899 41.3786 17.7661 40.8586 17.9171C40.3553 18.0513 39.8352 18.1519 39.2984 18.219C38.7615 18.2861 38.2331 18.3197 37.713 18.3197C36.5051 18.3197 35.3727 18.1435 34.3158 17.7912C33.2757 17.4389 32.3614 16.8937 31.5729 16.1556C30.8012 15.4006 30.1888 14.4444 29.7359 13.2868C29.2997 12.1292 29.0816 10.7536 29.0816 9.15985C29.0816 7.499 29.35 6.08979 29.8869 4.93223C30.4237 3.75789 31.1199 2.81003 31.9755 2.08865C32.8479 1.35049 33.8125 0.822038 34.8694 0.503289C35.9431 0.167763 37.0084 0 38.0653 0C39.1558 0 40.112 0.0838813 40.934 0.251644C41.7729 0.40263 42.4271 0.553617 42.8969 0.704603L42.1168 3.79983C41.6638 3.64884 41.1521 3.52302 40.5817 3.42236C40.0114 3.3217 39.2984 3.27137 38.4428 3.27137C37.6543 3.27137 36.9329 3.38042 36.2786 3.59851C35.6244 3.79983 35.054 4.13535 34.5675 4.60509C34.0809 5.07482 33.7035 5.68716 33.4351 6.44209C33.1666 7.19702 33.0324 8.11133 33.0324 9.18501C33.0324 10.2251 33.1666 11.1143 33.4351 11.8524C33.7035 12.5906 34.0642 13.2029 34.5171 13.6894C34.9869 14.1592 35.5237 14.5031 36.1276 14.7212C36.7316 14.9393 37.3691 15.0483 38.0401 15.0483C38.4931 15.0483 38.9461 14.998 39.399 14.8973C39.8688 14.7967 40.263 14.6373 40.5817 14.4192V11.3743L36.4045 10.9717V8.70689Z","M45.7186 9.15985C45.7186 7.71709 45.9032 6.42531 46.2722 5.28453C46.6413 4.14374 47.1698 3.18749 47.8576 2.41578C48.5622 1.6273 49.4178 1.03174 50.4244 0.629111C51.4309 0.209704 52.5717 0 53.8467 0C55.2056 0 56.3883 0.22648 57.3949 0.679439C58.4183 1.11562 59.2655 1.73635 59.9365 2.54161C60.6243 3.34687 61.136 4.3115 61.4715 5.43551C61.8238 6.55952 62 7.80097 62 9.15985C62 10.6026 61.8071 11.8944 61.4212 13.0352C61.0521 14.176 60.5153 15.1406 59.8107 15.9291C59.1061 16.7008 58.2505 17.2963 57.2439 17.7157C56.2374 18.1184 55.1049 18.3197 53.8467 18.3197C52.4879 18.3197 51.2967 18.1016 50.2734 17.6654C49.2668 17.2125 48.4196 16.5833 47.7318 15.7781C47.0607 14.9728 46.5574 14.0082 46.2219 12.8842C45.8864 11.7602 45.7186 10.5187 45.7186 9.15985ZM49.6694 9.15985C49.6694 10.0322 49.7533 10.8291 49.9211 11.5505C50.0888 12.2718 50.3405 12.8926 50.676 13.4126C51.0115 13.9327 51.4393 14.3353 51.9594 14.6205C52.4962 14.9057 53.1254 15.0483 53.8467 15.0483C55.1721 15.0483 56.2038 14.5954 56.942 13.6894C57.6801 12.7835 58.0492 11.2737 58.0492 9.15985C58.0492 8.32103 57.9737 7.54094 57.8227 6.81956C57.6717 6.09818 57.4201 5.47745 57.0678 4.95739C56.7323 4.42055 56.2961 4.00953 55.7592 3.72433C55.2392 3.42236 54.6017 3.27137 53.8467 3.27137C52.5382 3.27137 51.5148 3.74111 50.7767 4.68058C50.0385 5.62005 49.6694 7.11314 49.6694 9.15985Z"].forEach((function(t){var n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d",t),n.setAttribute("fill","#0DBC91"),e.appendChild(n)})),t.classList.add("logo-img-link","footer-logo"),e.classList.add("footer-logo"),t.appendChild(e),t)),c.appendChild((n=document.createElement("div"),r=document.createElement("p"),o=document.createElement("p"),n.classList.add("menu_contacts"),r.classList.add("menu_phone-number"),o.classList.add("menu_location"),r.textContent="+7 (863) 000 00 00",o.textContent="Ростов-на-Дону",n.appendChild(r),n.appendChild(o),n)),s.appendChild(function(){var t=document.createElement("div");t.classList.add("burger-menu");for(var e=1;e<=3;e++){var n=document.createElement("span");n.classList.add("bar","bar".concat(e)),t.appendChild(n)}return t}()),s.appendChild(function(){var t=document.createElement("ul"),e=document.createElement("button"),n=["О клинике","Услуги","Специалисты","Цены","Контакты"];e.classList.add("subscribe"),t.classList.add("menu-list","desktop-menu-list","hidden"),e.textContent="Записаться на прием";for(var r=0;r<=n.length-1;r++){var o=document.createElement("li");o.classList.add("menu-list-item"),o.textContent=n[r],t.appendChild(o)}return t.appendChild(e),t}()),c.appendChild(function(){var t=document.createElement("div"),e=document.createElement("p"),n=document.createElement("p");return t.classList.add("desktop-location"),e.classList.add("desktop-city"),n.classList.add("desktop-street"),e.textContent="Ростов-на-Дону",n.textContent="ул. Ленина, 2б",t.appendChild(e),t.appendChild(n),t}()),c.appendChild(function(){var t=document.createElement("div"),e=document.createElement("div"),n=document.createElement("p");return t.classList.add("desktop-phone"),e.classList.add("WA"),n.classList.add("menu_phone-number"),n.textContent="+7 (863) 000 00 00",t.appendChild(e),t.appendChild(n),t}()),c.appendChild(((i=document.createElement("button")).classList.add("header-btn-subscribe"),i.textContent="Записаться на прием",i)),a.appendChild(c),a.appendChild(s),a}();document.body.appendChild(t);var e,r,o=function(){var t,e,n,r,o,i=document.createElement("section");return i.classList.add("content"),i.appendChild((t=document.createElement("article"),e=document.createElement("img"),n=document.createElement("div"),r=document.createElement("h2"),o=document.createElement("p"),e.src="https://i.postimg.cc/htrBBQqM/Rectangle-9.png",e.alt="изображение приемной в клинике",t.classList.add("content_post"),e.classList.add("post_image"),n.classList.add("post_container"),r.classList.add("post_title"),o.classList.add("post_description"),r.textContent="Многопрофильная клиника для детей и взрослых",o.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, magnam distinctio! Fugiat provident pariatur officiis est non quia numquam possimus architecto consectetur corrupti rerum, incidunt nulla culpa sint ducimus necessitatibus!",n.appendChild(r),n.appendChild(o),t.appendChild(e),t.appendChild(n),t)),i}();document.body.appendChild(o),document.body.appendChild((e=document.createElement("section"),(r=document.createElement("img")).src="https://i.postimg.cc/7hZFqwSc/doctor-working-table-1.png",r.alt="доктор выписывает рецепт лечения",e.classList.add("check-up"),r.classList.add("check-up_img"),e.appendChild(function(){var t=document.createElement("div"),e=document.createElement("h2"),n=document.createElement("h5"),r=document.createElement("ul"),o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("span"),c=document.createElement("span"),s=document.createElement("div"),u=document.createElement("button"),d=document.createElement("button"),l=["Гормональный скрининг","Тестостерон","Свободный тестостерон","Глобулин, связывающий половые гормоны"];e.textContent="CHECK-UP",n.textContent="ДЛЯ МУЖЧИН",a.innerHTML="Всего 2800 &#8381",c.innerHTML="3500 &#8381",u.textContent="Записаться",d.textContent="Подробнее",t.classList.add("check-up_container"),e.classList.add("check-up_title"),n.classList.add("check-up_discription"),r.classList.add("check-up_list"),o.classList.add("product-price"),i.classList.add("price"),a.classList.add("old-price"),c.classList.add("new-price"),s.classList.add("btn-container"),u.classList.add("btn","btn-subscribe"),d.classList.add("btn","btn_more-detailed");for(var p=0;p<=l.length-1;p++){var C=document.createElement("li");C.classList.add("check-up_list-item"),C.textContent=l[p],r.appendChild(C)}return e.appendChild(n),i.appendChild(a),i.appendChild(c),o.appendChild(i),o.appendChild(s),s.appendChild(u),s.appendChild(d),t.appendChild(e),t.appendChild(r),t.appendChild(o),t}()),e.appendChild(r),e)),document.body.appendChild(function(){var t=document.createElement("div"),e=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=document.createElement("span"),r=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("slider-controll"),e.classList.add("SB"),r.classList.add("SF"),n.classList.add("slider_current"),e.setAttribute("width","34"),e.setAttribute("height","18"),e.setAttribute("viewBox","0 0 34 18"),e.setAttribute("fill","none"),e.setAttribute("xmlns","http://www.w3.org/2000/svg"),r.setAttribute("width","34"),r.setAttribute("height","18"),r.setAttribute("viewBox","0 0 34 18"),r.setAttribute("fill","none"),r.setAttribute("xmlns","http://www.w3.org/2000/svg");var o="#E1E1E1",i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M32.6718 7.67186H4.54493L9.20426 3.03512C9.72416 2.51768 9.72615 1.67678 9.20871 1.15689C8.69127 0.636925 7.8503 0.635 7.33041 1.15237L0.390691 8.05861C0.390226 8.05901 0.389894 8.05947 0.389496 8.05987C-0.129071 8.57731 -0.130731 9.42093 0.389363 9.94009C0.389828 9.94049 0.39016 9.94095 0.390558 9.94135L7.33028 16.8476C7.85011 17.3649 8.69107 17.3631 9.20858 16.8431C9.72602 16.3232 9.72402 15.4823 9.20413 14.9648L4.54493 10.3281H32.6718C33.4054 10.3281 34 9.7335 34 8.99998C34 8.26646 33.4054 7.67186 32.6718 7.67186Z"),i.setAttribute("fill",o),e.appendChild(i);var a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("d","M1.32817 7.67186H29.4551L24.7957 3.03512C24.2758 2.51768 24.2739 1.67678 24.7913 1.15689C25.3087 0.636925 26.1497 0.635 26.6696 1.15237L33.6093 8.05861C33.6098 8.05901 33.6101 8.05947 33.6105 8.05987C34.1291 8.57731 34.1307 9.42093 33.6106 9.94009C33.6102 9.94049 33.6098 9.94095 33.6094 9.94135L26.6697 16.8476C26.1499 17.3649 25.3089 17.3631 24.7914 16.8431C24.274 16.3232 24.276 15.4823 24.7959 14.9648L29.4551 10.3281H1.32817C0.594646 10.3281 4.57764e-05 9.7335 4.57764e-05 8.99998C4.57764e-05 8.26646 0.594646 7.67186 1.32817 7.67186Z"),a.setAttribute("fill",o),r.appendChild(a),n.textContent="1/4",t.appendChild(e),t.appendChild(n),t.appendChild(r),t}());var i,a,c,s,u,d=function(){var t=document.createElement("footer");return t.classList.add("footer"),t.appendChild(function(){for(var t,e,n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("nav"),i=document.createElement("ul"),a=document.createElement("addres"),c=document.createElement("ul"),s=["О клинике","Услуги","Специалисты","Цены","Контакты"],u=["instagram","whatsApp","telegram"],d=0;d<=s.length;d++){var l=document.createElement("li");l.classList.add("footer_menu-list-item"),l.textContent=s[d],i.appendChild(l)}for(var p=0;p<=u.length-1;p++){var C=document.createElement("li"),f=document.createElement("a"),m=document.createElement("span");f.setAttribute("href","#0"),C.classList.add("social-list-item"),f.classList.add("social-list-link","".concat(u[p])),m.classList.add("visually-hidden"),m.textContent=u[p],f.appendChild(m),C.appendChild(f),c.appendChild(C)}return n.classList.add("footer_container"),r.classList.add("footer","nav_container"),o.classList.add("footer_nav"),i.classList.add("footer_menu-list"),a.classList.add("socials"),c.classList.add("socials-list"),n.appendChild(r),r.appendChild((t=document.createElement("a"),(e=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("width","62"),e.setAttribute("height","19"),e.setAttribute("viewBox","0 0 62 19"),e.setAttribute("fill","none"),e.setAttribute("xmlns","http://www.w3.org/2000/svg"),["M12.1292 17.9674H0V0.352302H3.72433V14.696H12.1292V17.9674Z","M10.7981 9.15985C10.7981 7.71709 10.9826 6.42531 11.3517 5.28453C11.7208 4.14374 12.2492 3.18749 12.9371 2.41578C13.6417 1.6273 14.4973 1.03174 15.5038 0.629111C16.5104 0.209704 17.6512 0 18.9262 0C20.2851 0 21.4678 0.22648 22.4744 0.679439C23.4977 1.11562 24.3449 1.73635 25.016 2.54161C25.7038 3.34687 26.2155 4.3115 26.551 5.43551C26.9033 6.55952 27.0795 7.80097 27.0795 9.15985C27.0795 10.6026 26.8865 11.8944 26.5007 13.0352C26.1316 14.176 25.5948 15.1406 24.8902 15.9291C24.1856 16.7008 23.33 17.2963 22.3234 17.7157C21.3168 18.1184 20.1844 18.3197 18.9262 18.3197C17.5673 18.3197 16.3762 18.1016 15.3528 17.6654C14.3463 17.2125 13.4991 16.5833 12.8112 15.7781C12.1402 14.9728 11.6369 14.0082 11.3014 12.8842C10.9659 11.7602 10.7981 10.5187 10.7981 9.15985ZM14.7489 9.15985C14.7489 10.0322 14.8328 10.8291 15.0005 11.5505C15.1683 12.2718 15.42 12.8926 15.7555 13.4126C16.091 13.9327 16.5188 14.3353 17.0389 14.6205C17.5757 14.9057 18.2048 15.0483 18.9262 15.0483C20.2515 15.0483 21.2833 14.5954 22.0214 13.6894C22.7596 12.7835 23.1287 11.2737 23.1287 9.15985C23.1287 8.32103 23.0532 7.54094 22.9022 6.81956C22.7512 6.09818 22.4995 5.47745 22.1472 4.95739C21.8117 4.42055 21.3755 4.00953 20.8387 3.72433C20.3186 3.42236 19.6811 3.27137 18.9262 3.27137C17.6176 3.27137 16.5943 3.74111 15.8561 4.68058C15.118 5.62005 14.7489 7.11314 14.7489 9.15985Z","M36.4045 8.70689H43.6015V16.6085C43.2156 16.9105 42.7878 17.1705 42.3181 17.3886C41.8651 17.5899 41.3786 17.7661 40.8586 17.9171C40.3553 18.0513 39.8352 18.1519 39.2984 18.219C38.7615 18.2861 38.2331 18.3197 37.713 18.3197C36.5051 18.3197 35.3727 18.1435 34.3158 17.7912C33.2757 17.4389 32.3614 16.8937 31.5729 16.1556C30.8012 15.4006 30.1888 14.4444 29.7359 13.2868C29.2997 12.1292 29.0816 10.7536 29.0816 9.15985C29.0816 7.499 29.35 6.08979 29.8869 4.93223C30.4237 3.75789 31.1199 2.81003 31.9755 2.08865C32.8479 1.35049 33.8125 0.822038 34.8694 0.503289C35.9431 0.167763 37.0084 0 38.0653 0C39.1558 0 40.112 0.0838813 40.934 0.251644C41.7729 0.40263 42.4271 0.553617 42.8969 0.704603L42.1168 3.79983C41.6638 3.64884 41.1521 3.52302 40.5817 3.42236C40.0114 3.3217 39.2984 3.27137 38.4428 3.27137C37.6543 3.27137 36.9329 3.38042 36.2786 3.59851C35.6244 3.79983 35.054 4.13535 34.5675 4.60509C34.0809 5.07482 33.7035 5.68716 33.4351 6.44209C33.1666 7.19702 33.0324 8.11133 33.0324 9.18501C33.0324 10.2251 33.1666 11.1143 33.4351 11.8524C33.7035 12.5906 34.0642 13.2029 34.5171 13.6894C34.9869 14.1592 35.5237 14.5031 36.1276 14.7212C36.7316 14.9393 37.3691 15.0483 38.0401 15.0483C38.4931 15.0483 38.9461 14.998 39.399 14.8973C39.8688 14.7967 40.263 14.6373 40.5817 14.4192V11.3743L36.4045 10.9717V8.70689Z","M45.7186 9.15985C45.7186 7.71709 45.9032 6.42531 46.2722 5.28453C46.6413 4.14374 47.1698 3.18749 47.8576 2.41578C48.5622 1.6273 49.4178 1.03174 50.4244 0.629111C51.4309 0.209704 52.5717 0 53.8467 0C55.2056 0 56.3883 0.22648 57.3949 0.679439C58.4183 1.11562 59.2655 1.73635 59.9365 2.54161C60.6243 3.34687 61.136 4.3115 61.4715 5.43551C61.8238 6.55952 62 7.80097 62 9.15985C62 10.6026 61.8071 11.8944 61.4212 13.0352C61.0521 14.176 60.5153 15.1406 59.8107 15.9291C59.1061 16.7008 58.2505 17.2963 57.2439 17.7157C56.2374 18.1184 55.1049 18.3197 53.8467 18.3197C52.4879 18.3197 51.2967 18.1016 50.2734 17.6654C49.2668 17.2125 48.4196 16.5833 47.7318 15.7781C47.0607 14.9728 46.5574 14.0082 46.2219 12.8842C45.8864 11.7602 45.7186 10.5187 45.7186 9.15985ZM49.6694 9.15985C49.6694 10.0322 49.7533 10.8291 49.9211 11.5505C50.0888 12.2718 50.3405 12.8926 50.676 13.4126C51.0115 13.9327 51.4393 14.3353 51.9594 14.6205C52.4962 14.9057 53.1254 15.0483 53.8467 15.0483C55.1721 15.0483 56.2038 14.5954 56.942 13.6894C57.6801 12.7835 58.0492 11.2737 58.0492 9.15985C58.0492 8.32103 57.9737 7.54094 57.8227 6.81956C57.6717 6.09818 57.4201 5.47745 57.0678 4.95739C56.7323 4.42055 56.2961 4.00953 55.7592 3.72433C55.2392 3.42236 54.6017 3.27137 53.8467 3.27137C52.5382 3.27137 51.5148 3.74111 50.7767 4.68058C50.0385 5.62005 49.6694 7.11314 49.6694 9.15985Z"].forEach((function(t){var n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d",t),n.setAttribute("fill","#fff"),e.appendChild(n)})),t.classList.add("logo-img-link","footer-logo"),e.classList.add("footer-logo"),t.appendChild(e),t)),r.appendChild(o),o.appendChild(i),a.appendChild(c),n.appendChild(a),n}()),t}();document.body.appendChild(d),i=document.querySelector(".burger-menu"),a=document.querySelector(".menu-list"),c=document.querySelector(".bar1"),s=document.querySelector(".bar2"),u=document.querySelector(".bar3"),i.addEventListener("click",(function(){a.classList.toggle("hidden"),c.classList.toggle("rotated"),s.classList.toggle("rotated2"),u.classList.toggle("hidden")}))}()}();