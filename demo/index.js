!function(e){var r={};function __webpack_require__(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,__webpack_require__),t.l=!0,t.exports}__webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.d=function(e,r,n){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,r){if(1&r&&(e=__webpack_require__(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)__webpack_require__.d(n,t,function(r){return e[r]}.bind(null,t));return n},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="/",__webpack_require__(__webpack_require__.s=0)}([function(e,r,n){"use strict";function App_defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}n.r(r);var t=function App(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,App),App_defineProperty(this,"myVar",!0),App_defineProperty(this,"myArrowMethod",(function(){console.log("Arrow method fired")}));var e=this.myArrowMethod,r=this.myVar;console.log("Lib constructor called",r),e()};new function App(){var e,r,n;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,App),n=function(){console.log("Arrow methods will work")},(r="demoArrowMethod")in(e=this)?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;var o=new t;console.log("Demo loaded!",o),this.demoArrowMethod()}}]);
//# sourceMappingURL=index.js.map