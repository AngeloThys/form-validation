(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>u});var t=r(537),a=r.n(t),i=r(645),o=r.n(i),c=r(667),A=r.n(c),s=new URL(r(356),r.b),d=o()(a()),l=A()(s);d.push([n.id,`:root {\n  --purple: #7b506f;\n  --violet: #dd99bb;\n  --beige: #ead7d1;\n  --grey: #dbcdc6;\n  --valid: #4f8a10;\n  --valid-bg: #dff2bf;\n  --invalid: #d8000c;\n  --invalid-bg: #ffbaba;\n}\n\n@font-face {\n  font-family: "Virgil";\n  src: url(${l}) format("woff2");\n}\n\n* {\n  font-family: "Virgil";\n}\n\nhtml,\nbody {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--purple);\n  display: grid;\n  width: 100vw;\n  height: 100vh;\n}\n\nform {\n  width: 90%;\n  place-self: center;\n  justify-content: center;\n  background-color: var(--beige);\n  border: 4px solid black;\n  border-radius: 1rem;\n  padding: 1rem;\n  display: grid;\n  grid:\n    "email email" 2fr\n    "country zip" 2fr\n    "pass passconf" 2fr\n    "submit submit" 1fr\n    / 48% 48%;\n  gap: 1rem;\n  box-shadow: 0px 0px 4px black;\n}\n\n.email-container {\n  grid-area: email;\n}\n\n.country-container {\n  grid-area: country;\n}\n\n.zip-container {\n  grid-area: zip;\n}\n\n.password-container {\n  grid-area: pass;\n}\n\n.password-confirmation-container {\n  grid-area: passconf;\n}\n\n.submit-button {\n  grid-area: submit;\n  place-self: center;\n  padding: 0.5rem 1rem;\n  background-color: var(--purple);\n  border: 4px solid black;\n  border-radius: 8px;\n  font-size: 2rem;\n  box-shadow: 0px 4px 2px 0px black;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n\n  &:hover {\n    /* transform: scale(0.9); */\n    transform: translateY(2px);\n    box-shadow: 0px 2px 2px 0px black;\n  }\n\n  &:active {\n    /* transform: scale(0.8); */\n    transform: translateY(4px);\n    box-shadow: 0px 0px 2px 0px black;\n  }\n}\n\n.input-container {\n  background-color: var(--violet);\n  border: 4px solid black;\n  border-radius: 8px;\n  display: grid;\n  grid:\n    "header input"\n    "header instr"\n    / auto 1fr;\n  padding: 1rem;\n  gap: 0.8rem;\n  box-shadow: 0px 0px 4px black;\n}\n\n.container-header {\n  grid-area: header;\n  place-self: start;\n  background-color: var(--grey);\n  margin: 0;\n  padding: 1rem 1.5rem;\n  border: 4px solid black;\n  border-radius: 8px;\n  font-size: 1.2rem;\n  box-shadow: 0px 0px 4px black;\n}\n\n.container-input,\n.instructions-container {\n  background-color: white;\n}\n\n.container-input {\n  grid-area: input;\n  border: 4px solid black;\n  border-radius: 8px;\n  font-size: 1rem;\n  outline: 0;\n  box-shadow: 0px 0px 4px black;\n\n  &:valid {\n    background-color: var(--valid-bg);\n  }\n\n  &:invalid {\n    background-color: var(--invalid-bg);\n  }\n}\n\n.instructions-container {\n  grid-area: instr;\n  place-self: center;\n  width: calc(100% - 8px);\n  border-radius: 8px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 1rem;\n  min-height: 2rem;\n\n  & h2 {\n    place-self: center start;\n    font-size: 1.2rem;\n    margin: 0 0 0 0.5rem;\n\n    &.valid {\n      color: var(--valid);\n    }\n\n    &.invalid {\n      color: var(--invalid);\n    }\n  }\n\n  & .instructions {\n    padding: 0.2rem;\n    place-self: center start;\n    font-size: 0.6rem;\n    display: flex;\n    align-items: center;\n  }\n}\n\n.successful-creation {\n  padding: 0;\n  border: 0;\n  border-radius: 8px;\n}\n\n.creation-message-container {\n  display: grid;\n  place-items: center;\n  border: 4px solid black;\n  border-radius: 8px;\n  background-color: var(--violet);\n  padding: 1rem 2rem;\n}\n`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,4DAA0C;AAC5C;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;EAEE,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;EAC/B,aAAa;EACb,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,uBAAuB;EACvB,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb;;;;;aAKW;EACX,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,oBAAoB;EACpB,+BAA+B;EAC/B,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,iCAAiC;EACjC,gCAAgC;EAChC,eAAe;;EAEf;IACE,2BAA2B;IAC3B,0BAA0B;IAC1B,iCAAiC;EACnC;;EAEA;IACE,2BAA2B;IAC3B,0BAA0B;IAC1B,iCAAiC;EACnC;AACF;;AAEA;EACE,+BAA+B;EAC/B,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb;;;cAGY;EACZ,aAAa;EACb,WAAW;EACX,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,6BAA6B;EAC7B,SAAS;EACT,oBAAoB;EACpB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,UAAU;EACV,6BAA6B;;EAE7B;IACE,iCAAiC;EACnC;;EAEA;IACE,mCAAmC;EACrC;AACF;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,+BAA+B;EAC/B,SAAS;EACT,gBAAgB;;EAEhB;IACE,wBAAwB;IACxB,iBAAiB;IACjB,oBAAoB;;IAEpB;MACE,mBAAmB;IACrB;;IAEA;MACE,qBAAqB;IACvB;EACF;;EAEA;IACE,eAAe;IACf,wBAAwB;IACxB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;EACrB;AACF;;AAEA;EACE,UAAU;EACV,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,+BAA+B;EAC/B,kBAAkB;AACpB",sourcesContent:[':root {\n  --purple: #7b506f;\n  --violet: #dd99bb;\n  --beige: #ead7d1;\n  --grey: #dbcdc6;\n  --valid: #4f8a10;\n  --valid-bg: #dff2bf;\n  --invalid: #d8000c;\n  --invalid-bg: #ffbaba;\n}\n\n@font-face {\n  font-family: "Virgil";\n  src: url("./Virgil.woff2") format("woff2");\n}\n\n* {\n  font-family: "Virgil";\n}\n\nhtml,\nbody {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--purple);\n  display: grid;\n  width: 100vw;\n  height: 100vh;\n}\n\nform {\n  width: 90%;\n  place-self: center;\n  justify-content: center;\n  background-color: var(--beige);\n  border: 4px solid black;\n  border-radius: 1rem;\n  padding: 1rem;\n  display: grid;\n  grid:\n    "email email" 2fr\n    "country zip" 2fr\n    "pass passconf" 2fr\n    "submit submit" 1fr\n    / 48% 48%;\n  gap: 1rem;\n  box-shadow: 0px 0px 4px black;\n}\n\n.email-container {\n  grid-area: email;\n}\n\n.country-container {\n  grid-area: country;\n}\n\n.zip-container {\n  grid-area: zip;\n}\n\n.password-container {\n  grid-area: pass;\n}\n\n.password-confirmation-container {\n  grid-area: passconf;\n}\n\n.submit-button {\n  grid-area: submit;\n  place-self: center;\n  padding: 0.5rem 1rem;\n  background-color: var(--purple);\n  border: 4px solid black;\n  border-radius: 8px;\n  font-size: 2rem;\n  box-shadow: 0px 4px 2px 0px black;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n\n  &:hover {\n    /* transform: scale(0.9); */\n    transform: translateY(2px);\n    box-shadow: 0px 2px 2px 0px black;\n  }\n\n  &:active {\n    /* transform: scale(0.8); */\n    transform: translateY(4px);\n    box-shadow: 0px 0px 2px 0px black;\n  }\n}\n\n.input-container {\n  background-color: var(--violet);\n  border: 4px solid black;\n  border-radius: 8px;\n  display: grid;\n  grid:\n    "header input"\n    "header instr"\n    / auto 1fr;\n  padding: 1rem;\n  gap: 0.8rem;\n  box-shadow: 0px 0px 4px black;\n}\n\n.container-header {\n  grid-area: header;\n  place-self: start;\n  background-color: var(--grey);\n  margin: 0;\n  padding: 1rem 1.5rem;\n  border: 4px solid black;\n  border-radius: 8px;\n  font-size: 1.2rem;\n  box-shadow: 0px 0px 4px black;\n}\n\n.container-input,\n.instructions-container {\n  background-color: white;\n}\n\n.container-input {\n  grid-area: input;\n  border: 4px solid black;\n  border-radius: 8px;\n  font-size: 1rem;\n  outline: 0;\n  box-shadow: 0px 0px 4px black;\n\n  &:valid {\n    background-color: var(--valid-bg);\n  }\n\n  &:invalid {\n    background-color: var(--invalid-bg);\n  }\n}\n\n.instructions-container {\n  grid-area: instr;\n  place-self: center;\n  width: calc(100% - 8px);\n  border-radius: 8px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 1rem;\n  min-height: 2rem;\n\n  & h2 {\n    place-self: center start;\n    font-size: 1.2rem;\n    margin: 0 0 0 0.5rem;\n\n    &.valid {\n      color: var(--valid);\n    }\n\n    &.invalid {\n      color: var(--invalid);\n    }\n  }\n\n  & .instructions {\n    padding: 0.2rem;\n    place-self: center start;\n    font-size: 0.6rem;\n    display: flex;\n    align-items: center;\n  }\n}\n\n.successful-creation {\n  padding: 0;\n  border: 0;\n  border-radius: 8px;\n}\n\n.creation-message-container {\n  display: grid;\n  place-items: center;\n  border: 4px solid black;\n  border-radius: 8px;\n  background-color: var(--violet);\n  padding: 1rem 2rem;\n}\n'],sourceRoot:""}]);const u=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(o[A]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(a," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},o=[],c=0;c<n.length;c++){var A=n[c],s=t.base?A[0]+t.base:A[0],d=i[s]||0,l="".concat(s," ").concat(d);i[s]=d+1;var u=r(l),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=a(p,t);t.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}o.push(l)}return o}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var i=t(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=r(i[o]);e[c].references--}for(var A=t(n,a),s=0;s<i.length;s++){var d=r(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=A}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},356:(n,e,r)=>{n.exports=r.p+"740490b285bcdadee39a.woff2"}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!n;)n=t[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),a=r.n(t),i=r(569),o=r.n(i),c=r(565),A=r.n(c),s=r(216),d=r.n(s),l=r(589),u=r.n(l),p=r(426),f={};function m(){const n=document.querySelector(".email-container .container-input"),e=document.querySelector(".email-container .instructions"),r=document.querySelector(".email-container h2");n.validity.valid?(e.textContent="",r.className="valid"):(n.validity.valueMissing?e.textContent="Required field. Please, enter an email address.":n.validity.typeMismatch&&(e.textContent="Invalid format. Please, enter a valid email address. e.g. test@test.com"),r.className="invalid")}function B(){const n=document.querySelector(".country-container .container-input"),e=document.querySelector(".country-container .instructions"),r=document.querySelector(".country-container h2");n.validity.valid?(e.textContent="",r.className="valid"):n.validity.valueMissing&&(e.textContent="Required field. Please, enter a country.",r.className="invalid")}function b(){const n=document.querySelector(".zip-container .container-input"),e=document.querySelector(".zip-container .instructions"),r=document.querySelector(".zip-container h2");n.validity.valid?(e.textContent="",r.className="valid"):n.validity.valueMissing&&(e.textContent="Required field. Please, enter a zip code.",r.className="invalid")}function v(){const n=document.querySelector(".password-container .container-input"),e=document.querySelector(".password-container .instructions"),r=document.querySelector(".password-container h2");n.validity.valid?(e.textContent="",r.className="valid"):n.validity.valueMissing&&(e.textContent="Required field. Please, enter a password.",r.className="invalid")}function C(){const n=document.querySelector(".password-confirmation-container .container-input"),e=document.querySelector(".password-confirmation-container .instructions"),r=document.querySelector(".password-confirmation-container h2");n.validity.valid?(e.textContent="",r.className="valid"):n.validity.valueMissing&&(e.textContent="Required field. Please, enter the password again.",r.className="invalid")}function E(){return!!document.querySelector(".email-container .container-input").validity.valid||(m(),B(),b(),v(),C(),!1)}f.styleTagTransform=u(),f.setAttributes=A(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,document.querySelector(".email-container .container-input").addEventListener("input",m),document.querySelector(".country-container .container-input").addEventListener("input",B),document.querySelector(".zip-container .container-input").addEventListener("input",b),document.querySelector(".password-container .container-input").addEventListener("input",v),document.querySelector(".password-confirmation-container .container-input").addEventListener("input",C),function(){const n=document.querySelector(".submit-button"),e=document.querySelector("form");n.addEventListener("click",(n=>{if(E()){const r=document.querySelector(".successful-creation");n.preventDefault(),r.showModal(),e.reset(),E()}else n.preventDefault()}))}(),E(),function(){const n=document.querySelector(".successful-creation");n.addEventListener("click",(e=>{e.target===n&&n.close()}))}()})()})();
//# sourceMappingURL=main.js.map