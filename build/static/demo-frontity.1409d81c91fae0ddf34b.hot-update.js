webpackHotUpdate("demo-frontity",{

/***/ "./packages/osw-theme-example/src/components/Link.js":
/*!***********************************************************!*\
  !*** ./packages/osw-theme-example/src/components/Link.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\nconst Link=(_ref)=>{let{actions,link,className,children}=_ref;const onClick=event=>{event.preventDefault();// Set the router to the new url.\nactions.router.set(link);window.scrollTo(0,0);};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"a\",{href:link,onClick:onClick,className:className},children);};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Link));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9vc3ctdGhlbWUtZXhhbXBsZS9zcmMvY29tcG9uZW50cy9MaW5rLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvb3N3LXRoZW1lLWV4YW1wbGUvc3JjL2NvbXBvbmVudHMvTGluay5qcz80YzQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuY29uc3QgTGluayA9ICh7IGFjdGlvbnMsIGxpbmssIGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBvbkNsaWNrID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gU2V0IHRoZSByb3V0ZXIgdG8gdGhlIG5ldyB1cmwuXG4gICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGxpbmspO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e2xpbmt9IG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpbmspO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/osw-theme-example/src/components/Link.js\n");

/***/ }),

/***/ "./packages/osw-theme-example/src/components/menu.js":
/*!***********************************************************!*\
  !*** ./packages/osw-theme-example/src/components/menu.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/connect */ \"./node_modules/@frontity/connect/src/index.js\");\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ \"./packages/osw-theme-example/src/components/Link.js\");\nconst Menu=(_ref)=>{let{state}=_ref;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\",null,state.theme.menu.map((_ref2)=>{let[name,link]=_ref2;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:link},name);}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_frontity_connect__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Menu));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9vc3ctdGhlbWUtZXhhbXBsZS9zcmMvY29tcG9uZW50cy9tZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvb3N3LXRoZW1lLWV4YW1wbGUvc3JjL2NvbXBvbmVudHMvbWVudS5qcz9hMWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnQGZyb250aXR5L2Nvbm5lY3QnO1xuXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xuXG5jb25zdCBNZW51ID0gKHsgc3RhdGUgfSkgPT4gKFxuICA8ZGl2PlxuICAgIHtzdGF0ZS50aGVtZS5tZW51Lm1hcCgoW25hbWUsIGxpbmtdKSA9PiAoXG4gICAgICA8TGluayBsaW5rPXtsaW5rfT57bmFtZX08L0xpbms+XG4gICAgKSl9XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/osw-theme-example/src/components/menu.js\n");

/***/ }),

/***/ "./packages/osw-theme-example/src/components/theme.js":
/*!************************************************************!*\
  !*** ./packages/osw-theme-example/src/components/theme.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./packages/osw-theme-example/src/components/header.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ \"./packages/osw-theme-example/src/components/list/index.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post */ \"./packages/osw-theme-example/src/components/post.js\");\n/* harmony import */ var _page404_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page404.js */ \"./packages/osw-theme-example/src/components/page404.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading */ \"./packages/osw-theme-example/src/components/loading.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu */ \"./packages/osw-theme-example/src/components/menu.js\");\nfunction _templateObject3(){const data=_taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: center;\\n  background-image: linear-gradient(\\n    180deg,\\n    rgba(66, 174, 228, 0.1),\\n    rgba(66, 174, 228, 0)\\n  );\\n\"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){const data=_taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  background-color: #1f38c5;\\n\"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){const data=_taggedTemplateLiteral([\"\\n  body {\\n    margin: 0;\\n    font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto,\\n      \\\"Droid Sans\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  }\\n  a,\\n  a:visited {\\n    color: inherit;\\n    text-decoration: none;\\n  }\\n\"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}const globalStyles=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject());const Theme=(_ref)=>{let{state}=_ref;const data=state.source.get(state.router.link);let Content=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"],null);if(data.isArchive)Content=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null);if(data.isPostType)Content=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null);if(data.is404)Content=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_page404_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],null);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"title\",null,state.frontity.title),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"html\",{lang:\"en\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:globalStyles}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(HeadContainer,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Body,null,Content));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Theme));const HeadContainer=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject2());const Body=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject3());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9vc3ctdGhlbWUtZXhhbXBsZS9zcmMvY29tcG9uZW50cy90aGVtZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhY2thZ2VzL29zdy10aGVtZS1leGFtcGxlL3NyYy9jb21wb25lbnRzL3RoZW1lLmpzPzUyNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MsIGNvbm5lY3QsIHN0eWxlZCwgSGVhZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCBQYWdlNDA0IGZyb20gXCIuL3BhZ2U0MDQuanNcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcblxuY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzYFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgICBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIGEsXG4gIGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIGxldCBDb250ZW50ID0gPExvYWRpbmcgLz47XG5cbiAgaWYgKGRhdGEuaXNBcmNoaXZlKSBDb250ZW50ID0gPExpc3QgLz47XG4gIGlmIChkYXRhLmlzUG9zdFR5cGUpIENvbnRlbnQgPSA8UG9zdCAvPjtcbiAgaWYgKGRhdGEuaXM0MDQpIENvbnRlbnQgPSA8UGFnZTQwNCAvPjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntzdGF0ZS5mcm9udGl0eS50aXRsZX08L3RpdGxlPlxuICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFN0eWxlc30gLz5cbiAgICAgIDxIZWFkQ29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICA8L0hlYWRDb250YWluZXI+XG4gICAgICA8Qm9keT57Q29udGVudH08L0JvZHk+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRoZW1lKTtcblxuY29uc3QgSGVhZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjM4YzU7XG5gO1xuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAxODBkZWcsXG4gICAgcmdiYSg2NiwgMTc0LCAyMjgsIDAuMSksXG4gICAgcmdiYSg2NiwgMTc0LCAyMjgsIDApXG4gICk7XG5gO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/osw-theme-example/src/components/theme.js\n");

/***/ })

})