import*as e from"@dropins/elsie/event-bus.js";import*as r from"@dropins/elsie/fetch-graphql.js";import*as t from"@dropins/elsie/preact-compat.js";import*as n from"@dropins/elsie/preact-hooks.js";import*as o from"@dropins/elsie/preact-jsx-runtime.js";import*as i from"@dropins/elsie/preact.js";export const id=166;export const ids=[166];export const modules={51:(e,r,t)=>{t.d(r,{i:()=>g});var n=t(5587),o=t(1892),i=t.n(o),a=t(5760),s=t.n(a),l=t(8311),u=t.n(l),c=t(8192),p=t.n(c),f=t(8060),d=t.n(f),m=t(4865),y=t.n(m),v=t(5238),b={};b.styleTagTransform=y(),b.setAttributes=p(),b.insert=u().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=d(),i()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;var h=t(7188),g=function(e){var r=e.variant,t=void 0===r?"primary":r,o=e.className;return(0,h.jsx)("hr",{role:"separator",className:(0,n.S)(["elsie-divider","elsie-divider--".concat(t),o])})}},1988:(e,r,t)=>{t.d(r,{t:()=>x});var n=t(5587),o=t(1892),i=t.n(o),a=t(5760),s=t.n(a),l=t(8311),u=t.n(l),c=t(8192),p=t.n(c),f=t(8060),d=t.n(f),m=t(4865),y=t.n(m),v=t(6948),b={};b.styleTagTransform=y(),b.setAttributes=p(),b.insert=u().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=d(),i()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;var h=t(7188);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}var j=["amount","currency","locale","variant","className","children","sale","formatOptions"];function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){var n,o,i;n=e,o=r,i=t[r],(o=function(e){var r=function(e,r){if("object"!==g(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(r)?r:String(r)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var x=function(e){var r=e.amount,t=void 0===r?0:r,o=e.currency,i=e.locale,a=void 0===i?void 0:i,s=e.variant,l=void 0===s?"default":s,u=e.className,c=(e.children,e.sale),p=void 0!==c&&c,f=e.formatOptions,d=void 0===f?{}:f,m=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,j),y=new Intl.NumberFormat(a,w({style:"currency",currency:o||"USD",minimumFractionDigits:2,maximumFractionDigits:2},d));return(0,h.jsx)("span",w(w({},m),{},{className:(0,n.S)(["elsie-price",u,"elsie-price--".concat(l),["elsie-price--sale",p]]),children:y.format(t)}))}},1715:(e,r,t)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==n(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}t.d(r,{D:()=>i});var i=function(){function e(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=r}var r,t;return r=e,(t=[{key:"getConfig",value:function(){return this.config}},{key:"setConfig",value:function(e){this.config=e}}])&&o(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),e}()},1750:(e,r,t)=>{t.d(r,{m:()=>m});var n=t(1715);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i,a,s=[],l=!0,u=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=i.call(t)).done)&&(s.push(n.value),s.length!==r);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(e,r)||function(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function c(e,r,t){return r&&u(e.prototype,r),t&&u(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function f(e,r,t){return(r=d(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){var r=function(e,r){if("object"!==o(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(r)?r:String(r)}var m=c((function e(r){var t=this,o=r.init,i=r.listeners;p(this,e),f(this,"_listeners",[]),f(this,"config",new n.D({})),this.listeners=function(e){return t._listeners.forEach((function(e){return e.off()})),t._listeners=i(e)},this.init=function(e){return t.config.setConfig(l(l({},t.config.getConfig()),e)),o(e)}})),y=function(){function e(){p(this,e)}return c(e,null,[{key:"register",value:function(r,t){var n,o;e._mounted&&(null===(n=r.listeners)||void 0===n||n.call(r,t),null===(o=r.init)||void 0===o||o.call(r,t)),e._initializers.push([r,t])}},{key:"mount",value:function(){var r,t;e._mounted=!0,null===(r=e._initializers)||void 0===r||r.forEach((function(e){var r,t=i(e,2),n=t[0],o=t[1];null===(r=n.listeners)||void 0===r||r.call(n,o)})),null===(t=e._initializers)||void 0===t||t.forEach((function(e){var r,t=i(e,2),n=t[0],o=t[1];null===(r=n.init)||void 0===r||r.call(n,o)}))}}]),e}();f(y,"_initializers",[]),f(y,"_mounted",!1)},3483:(e,r,t)=>{t.d(r,{X:()=>h});var n=t(1892),o=t.n(n),i=t(5760),a=t.n(i),s=t(8311),l=t.n(s),u=t(8192),c=t.n(u),p=t(8060),f=t.n(p),d=t(4865),m=t.n(d),y=t(8695),v={};v.styleTagTransform=m(),v.setAttributes=c(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=f(),o()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;var b=t(7188),h=function(e){var r=e.className,t=e.children,n=e.level,o=void 0===n?2:n,i=o>=1&&o<=6?"h".concat(o):"h2";return(0,b.jsx)(i,{className:r,children:t})}},1970:(e,r,t)=>{t.d(r,{He:()=>n.H,Yj:()=>n.Y,ZP:()=>n.H});var n=t(7357)},5963:(e,r,t)=>{t.d(r,{b:()=>n});var n=(0,t(6364).td)({localData:void 0})},5238:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(4933),o=t.n(n),i=t(3476),a=t.n(i)()(o());a.push([e.id,".elsie-divider {\n  border: none;\n}\n\n.elsie-divider--primary {\n  border-top: var(--shape-border-width-3) solid var(--color-neutral-400);\n  margin: var(--spacing-xbig) auto;\n}\n\n.elsie-divider--secondary {\n  border-top: var(--shape-border-width-2) solid var(--color-neutral-400);\n  margin: var(--spacing-medium) auto;\n}\n",""]);const s=a},6948:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(4933),o=t.n(n),i=t(3476),a=t.n(i)()(o());a.push([e.id,"/* https://cssguidelin.es/#bem-like-naming */\n\n.elsie-price {\n  color: var(--color-neutral-800);\n  font: var(--type-body-2-emphasized-font);\n}\n\n.elsie-price--strikethrough {\n  text-decoration: line-through;\n}\n\n.elsie-price--sale {\n  color: var(--color-alert-800);\n}\n\n/* Medium (portrait tablets and large phones, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large (landscape tablets, 1024px and up) */\n/* @media only screen and (min-width: 1024px) { } */\n\n/* XLarge (laptops/desktops, 1366px and up) */\n/* @media only screen and (min-width: 1366px) { } */\n\n/* XXlarge (large laptops and desktops, 1920px and up) */\n/* @media only screen and (min-width: 1920px) { } */\n",""]);const s=a},8695:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(4933),o=t.n(n),i=t(3476),a=t.n(i)()(o());a.push([e.id,"/* https://cssguidelin.es/#bem-like-naming */\n\n/* .elsie-heading { } */\n\n/* Extra small devices (phones, 600px and down) */\n/* @media only screen and (max-width: 600px) { } */\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n/* @media only screen and (min-width: 600px) { } */\n\n/* Medium devices (landscape tablets, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large devices (laptops/desktops, 992px and up) */\n/* @media only screen and (min-width: 992px) { } */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n/* @media only screen and (min-width: 1200px) { } */\n",""]);const s=a},6765:(r,t,n)=>{var o,i;r.exports=(o={events:()=>e.events},i={},n.d(i,o),i)},9699:(e,t,n)=>{var o,i;e.exports=(o={FetchGraphQL:()=>r.FetchGraphQL},i={},n.d(i,o),i)},4853:(e,r,n)=>{var o,i;e.exports=(o={forwardRef:()=>t.forwardRef,useCallback:()=>t.useCallback,useEffect:()=>t.useEffect,useImperativeHandle:()=>t.useImperativeHandle,useMemo:()=>t.useMemo,useRef:()=>t.useRef,useState:()=>t.useState},i={},n.d(i,o),i)},5437:(e,r,t)=>{var o,i;e.exports=(o={useCallback:()=>n.useCallback,useContext:()=>n.useContext,useDebugValue:()=>n.useDebugValue,useEffect:()=>n.useEffect,useId:()=>n.useId,useImperativeHandle:()=>n.useImperativeHandle,useLayoutEffect:()=>n.useLayoutEffect,useMemo:()=>n.useMemo,useReducer:()=>n.useReducer,useRef:()=>n.useRef,useState:()=>n.useState},i={},t.d(i,o),i)},4142:(e,r,t)=>{var n,i;e.exports=(n={Fragment:()=>o.Fragment,jsx:()=>o.jsx,jsxs:()=>o.jsxs},i={},t.d(i,n),i)},3474:(e,r,t)=>{var n,o;e.exports=(n={Component:()=>i.Component,Fragment:()=>i.Fragment,cloneElement:()=>i.cloneElement,createContext:()=>i.createContext,createElement:()=>i.createElement,createRef:()=>i.createRef,h:()=>i.h,hydrate:()=>i.hydrate,isValidElement:()=>i.isValidElement,options:()=>i.options,render:()=>i.render,toChildArray:()=>i.toChildArray},o={},t.d(o,n),o)}};import a from"../runtime.js";import*as s from"../4.js";a.C(s);import*as l from"../584.js";a.C(l);import*as u from"../292.js";a.C(u);import*as c from"../357.js";a.C(c);import*as p from"./OrderSummary.js";a.C(p);var f=(1970,a(a.s=1970)),d=f.He,m=f.ZP,y=f.Yj;export{d as OrderSummary,m as default,y as useOrderSummary};