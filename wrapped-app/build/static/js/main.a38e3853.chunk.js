(this["webpackJsonpwrapped-app"] = this["webpackJsonpwrapped-app"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(10);

// EXTERNAL MODULE: ./src/logo.svg
var logo = __webpack_require__(4);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./src/App.css
var App = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(1);

// CONCATENATED MODULE: ./src/button.js
var COLORS=['yellow','antiquewhite'];/* harmony default export */ var src_button = (function(){var _useState=Object(react["useState"])({}),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),versions=_useState2[0],setVersions=_useState2[1];var _useState3=Object(react["useState"])(COLORS[0]),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),color=_useState4[0],setColor=_useState4[1];var handleClick=function handleClick(){var _window$React;var _require=__webpack_require__(0),version=_require.version;setVersions({});setVersions({bundle:version,global:(_window$React=window.React)===null||_window$React===void 0?void 0:_window$React.version});setColor(function(current){return COLORS.find(function(c){return c!==current;});});};return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement("button",{type:"button",onClick:handleClick},"Get versions"),versions.bundle&&/*#__PURE__*/react_default.a.createElement("div",{id:"nko-log",style:{backgroundColor:color,color:'black'}},/*#__PURE__*/react_default.a.createElement("h3",null,"App: ",versions.bundle),/*#__PURE__*/react_default.a.createElement("h3",null,"Window: ",versions.global)));});
// CONCATENATED MODULE: ./src/App.js
function App_App(){return/*#__PURE__*/react_default.a.createElement("div",{className:"App"},/*#__PURE__*/react_default.a.createElement("header",{className:"App-header"},/*#__PURE__*/react_default.a.createElement("img",{src:logo_default.a,className:"App-logo",alt:"logo"}),/*#__PURE__*/react_default.a.createElement("p",null,"Hi! I am a React app!!"),/*#__PURE__*/react_default.a.createElement(src_button,null)));}/* harmony default export */ var src_App = (App_App);
// CONCATENATED MODULE: ./src/serviceWorker.js
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(config){if( true&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("",window.location.href);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebook/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl="".concat("","/service-worker.js");if(isLocalhost){// This is running on localhost. Let's check if a service worker still exists or not.
checkValidServiceWorker(swUrl,config);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit https://bit.ly/CRA-PWA');});}else{// Is not localhost. Just register service worker
registerValidSW(swUrl,config);}});}}function registerValidSW(swUrl,config){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;if(installingWorker==null){return;}installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the updated precached content has been fetched,
// but the previous service worker will still serve the older
// content until all client tabs are closed.
console.log('New content is available and will be used when all '+'tabs for this page are closed. See https://bit.ly/CRA-PWA.');// Execute callback
if(config&&config.onUpdate){config.onUpdate(registration);}}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');// Execute callback
if(config&&config.onSuccess){config.onSuccess(registration);}}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl,config){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl,{headers:{'Service-Worker':'script'}}).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
var contentType=response.headers.get('content-type');if(response.status===404||contentType!=null&&contentType.indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl,config);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();}).catch(function(error){console.error(error.message);});}}
// CONCATENATED MODULE: ./src/index.js
react_dom_default.a.render(/*#__PURE__*/react_default.a.createElement(react_default.a.StrictMode,null,/*#__PURE__*/react_default.a.createElement(src_App,null)),document.getElementById('root'));// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();

/***/ })
],[[5,1,2]]]);
//# sourceMappingURL=main.a38e3853.chunk.js.map