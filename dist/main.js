/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reset-css */ \"./node_modules/reset-css/reset.css\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~~styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _containers_Gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~~containers/Gallery */ \"./src/containers/Gallery/index.js\");\n/* harmony import */ var _src_Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~~src/Store */ \"./src/Store.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_Store__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_Gallery__WEBPACK_IMPORTED_MODULE_3__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {\n    path: \"/gallery\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_Gallery__WEBPACK_IMPORTED_MODULE_3__.default, null))))));\n}\n\nvar _default = App;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, \"App\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\App.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\App.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://rex_main_page/./src/App.js?");

/***/ }),

/***/ "./src/Store.js":
/*!**********************!*\
  !*** ./src/Store.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nvar initialState = {\n  loading: true\n};\n\nfunction Reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    default:\n      return _objectSpread({}, state);\n  }\n}\n\nvar Store = function Store(_ref) {\n  var children = _ref.children;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(Reducer, initialState),\n      _useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Context.Provider, {\n    value: [state, dispatch]\n  }, children);\n};\n\n__signature__(Store, \"useReducer{[state, dispatch](initialState)}\");\n\nvar Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(initialState);\nvar _default = Store;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(initialState, \"initialState\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\Store.js\");\n  reactHotLoader.register(Reducer, \"Reducer\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\Store.js\");\n  reactHotLoader.register(Store, \"Store\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\Store.js\");\n  reactHotLoader.register(Context, \"Context\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\Store.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\Store.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://rex_main_page/./src/Store.js?");

/***/ }),

/***/ "./src/containers/Gallery/index.js":
/*!*****************************************!*\
  !*** ./src/containers/Gallery/index.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-masonry */ \"./node_modules/react-responsive-masonry/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var react_images_loaded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-images-loaded */ \"./node_modules/react-images-loaded/dist/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _src_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~~src/Store */ \"./src/Store.js\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data.json */ \"./src/containers/Gallery/data.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _templateObject, _templateObject2;\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n // import { Trail } from 'react-spring/renderprops';\n\n\n\n\n // import { Swiper, SwiperSlide } from 'swiper/react';\n// import 'swiper/swiper.scss';\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)([\"\\n  width: 1200px;\\n  max-width: 100%;\\n  padding: 0 12px;\\n  margin: 0 auto;\\n\"])));\nvar GalleryItemComponent = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.default)(react_spring__WEBPACK_IMPORTED_MODULE_9__.animated.div).attrs(function (props) {\n  return _objectSpread({}, props.style);\n})(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)([\"\\n  display: block;\\n  width: 100%;\\n  padding: 6px;\\n\\n  .gallery-item {\\n    cursor: pointer;\\n    overflow: hidden;\\n    position: relative;\\n    &:hover {\\n      img {\\n        opacity: 0.6;\\n        transform: scale(1.08)\\n      }\\n      .title {\\n        opacity: 1;\\n        visibility: visible;\\n      }\\n    }\\n    img {\\n      position: relative;\\n      width: 100%;\\n      transition: 0.3s ease all;\\n      z-index: 1;\\n    }\\n\\n    .title {\\n      position: absolute;\\n      top: 50%;\\n      left: 50%;\\n      transform: translate(-50%, -50%);\\n      z-index: 2;\\n      color: white;\\n      font-size: 1.6em;\\n      white-space: nowrap;\\n      opacity: 0;\\n      visibility: hidden;\\n      transition: 0.3s ease all;\\n    }\\n  }\\n\"])));\n\nfunction GalleryItem(props) {\n  var _props$obj = props.obj,\n      obj = _props$obj === void 0 ? {} : _props$obj;\n  var bg = obj.bg,\n      _obj$title = obj.title,\n      title = _obj$title === void 0 ? '' : _obj$title;\n  var aniStyle = (0,react_spring__WEBPACK_IMPORTED_MODULE_9__.useSpring)({\n    opacity: 1,\n    from: {\n      opacity: 0\n    }\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(GalleryItemComponent, {\n    style: aniStyle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    className: \"gallery-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"img\", {\n    className: \"pic\",\n    src: bg,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"p\", {\n    className: \"title\"\n  }, title)));\n}\n\n__signature__(GalleryItem, \"useSpring{aniStyle}\", function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_9__.useSpring];\n});\n\nvar BREAK_POINTS = {\n  350: 1,\n  750: 2,\n  900: 3\n};\n\nfunction Gallery(props) {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_src_Store__WEBPACK_IMPORTED_MODULE_6__.Context),\n      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useContext, 2),\n      state = _useContext2[0],\n      dispatch = _useContext2[1];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      galleryData = _useState2[0],\n      setGalleryData = _useState2[1];\n\n  var _useTrail = (0,react_spring__WEBPACK_IMPORTED_MODULE_9__.useTrail)(galleryData.length, function () {\n    return {\n      opacity: 1\n    };\n  }),\n      _useTrail2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useTrail, 3),\n      trail = _useTrail2[0],\n      set = _useTrail2[1],\n      stop = _useTrail2[2];\n\n  set({\n    opacity: 0\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var newData = _data_json__WEBPACK_IMPORTED_MODULE_7__.map(function (o) {\n      return _objectSpread({\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_10__.default)()\n      }, o);\n    });\n    setGalleryData(newData);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_images_loaded__WEBPACK_IMPORTED_MODULE_5__.default, {\n    done: function done() {\n      console.log('done');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_4__.ResponsiveMasonry, {\n    columnsCountBreakPoints: BREAK_POINTS\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_4__.default, null, trail.map(function (style, index) {\n    var obj = galleryData === null || galleryData === void 0 ? void 0 : galleryData[index];\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(GalleryItem, {\n      key: obj.id,\n      style: style,\n      obj: obj\n    });\n  }))))); // return (\n  //   <Swiper\n  //     spaceBetween={50}\n  //     slidesPerView={3}\n  //     onSlideChange={() => console.log('slide change')}\n  //     onSwiper={(swiper) => console.log(swiper)}\n  //   >\n  //     <SwiperSlide>Slide 1</SwiperSlide>\n  //     <SwiperSlide>Slide 2</SwiperSlide>\n  //     <SwiperSlide>Slide 3</SwiperSlide>\n  //     <SwiperSlide>Slide 4</SwiperSlide>\n  //   </Swiper>\n  // );\n}\n\n__signature__(Gallery, \"useContext{[state, dispatch]}\\nuseState{[galleryData, setGalleryData]([])}\\nuseTrail{[trail, set, stop]}\\nuseEffect{}\", function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_9__.useTrail];\n});\n\nvar _default = Gallery;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Container, \"Container\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\containers\\\\Gallery\\\\index.js\");\n  reactHotLoader.register(GalleryItemComponent, \"GalleryItemComponent\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\containers\\\\Gallery\\\\index.js\");\n  reactHotLoader.register(GalleryItem, \"GalleryItem\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\containers\\\\Gallery\\\\index.js\");\n  reactHotLoader.register(BREAK_POINTS, \"BREAK_POINTS\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\containers\\\\Gallery\\\\index.js\");\n  reactHotLoader.register(Gallery, \"Gallery\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\containers\\\\Gallery\\\\index.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\young\\\\Rex-Main-Page\\\\src\\\\containers\\\\Gallery\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://rex_main_page/./src/containers/Gallery/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById('app'));\n\n//# sourceURL=webpack://rex_main_page/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important; }\\n\\nhtml,\\nbody {\\n  font-size: 12px;\\n  background-color: black;\\n  font-family: 'Noto Sans TC' !important;\\n  line-height: 1.5; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://rex_main_page/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://rex_main_page/./src/styles/style.scss?");

/***/ }),

/***/ "./src/containers/Gallery/data.json":
/*!******************************************!*\
  !*** ./src/containers/Gallery/data.json ***!
  \******************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"uid\":\"1\",\"type\":\"1\",\"bg\":\"../src/static/images/web01a.jpg\",\"date\":\"2016/07/02\",\"pic\":[\"../src/static/images/web01-1.jpg\",\"../src/static/images/web01-2.jpg\"],\"title\":\"Moist Diane 黛絲恩 官方網站\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://www.moist-diane.com.tw/\\'>官方網站(線上)</a></p><p>說明：很久以前的案子，沒有RWD，僅使用Jquery進行製作。</p>\"},{\"uid\":\"2\",\"type\":\"1\",\"bg\":\"../src/static/images/web02a.jpg\",\"date\":\"2016/07/28\",\"pic\":[\"../src/static/images/web02-1.jpg\",\"../src/static/images/web02-2.jpg\",\"../src/static/images/web02-3.jpg\"],\"title\":\"ASICS 亞瑟士台灣\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'https://www.asics.com/tw/zh-tw\\'>官方網站(線上/已改版)</a></p><p>說明：亞瑟士官網，不過之後他們好像換團隊製作了。不過頁面似乎沒有改很多。另外還有製作課程報名網站</p>\"},{\"uid\":\"3\",\"type\":\"2\",\"bg\":\"../src/static/images/web03a.jpg\",\"date\":\"2016/07/28\",\"pic\":[\"../src/static/images/web03-1.jpg\",\"../src/static/images/web03-2.jpg\",\"../src/static/images/web03-3.jpg\"],\"title\":\"KOTEX靠得住\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'https://event.eray.tw/y_20160605_kotex/\\'>備份連結(活動已結束)</a></p><p>說明：這個活動已經結束了。之前做的互動式遊戲，利用canvas製作，可以自己選擇貼圖貼在自己選擇的照片上，上傳後再分享在FB。下方使用瀑布流顯示大家的作品</p>\"},{\"uid\":\"4\",\"type\":\"1\",\"bg\":\"../src/static/images/web04a.jpg\",\"date\":\"2016/07/28\",\"pic\":[\"../src/static/images/web04-1.jpg\",\"../src/static/images/web04-2.jpg\",\"../src/static/images/web04-3.jpg\"],\"title\":\"中鋼運通股份有限公司\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://www.csebulk.com.tw/\\'>官方網站</a></p><p>說明：中鋼運通的官方網站，使用webpack封裝js。</p>\"},{\"uid\":\"5\",\"type\":\"2\",\"bg\":\"../src/static/images/web05a.jpg\",\"date\":\"2016/07/28\",\"pic\":[\"../src/static/images/web05-1.jpg\",\"../src/static/images/web05-2.jpg\",\"../src/static/images/web05-3.jpg\",\"../src/static/images/web05-4.jpg\",\"../src/static/images/web05-5.jpg\"],\"title\":\"【鋼の探偵】陽岱鋼身陷竊案謎團\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://grandlancer.mitsubishi-motors.com.tw/detective/\\'>備份連結(活動已結束)</a></p><p>說明：很有趣的活動網站，當時還配合youtuber影片猜真兇來抽獎。使用webpack封裝js</p>\"},{\"uid\":\"6\",\"type\":\"1\",\"bg\":\"../src/static/images/web06a.jpg\",\"date\":\"2016/07/28\",\"pic\":[\"../src/static/images/web06-1.jpg\",\"../src/static/images/web06-2.jpg\",\"../src/static/images/web06-3.jpg\",\"../src/static/images/web06-4.jpg\"],\"title\":\"emoving 電動機車\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://www.e-moving.com.tw/\\'>官方網站</a></p><p>描述：EMOVING的官方網站，跟後端配合使用PHP + VUEJS製作。</p>\"},{\"uid\":\"7\",\"type\":\"1\",\"bg\":\"../src/static/images/web07a.jpg\",\"date\":\"2016/07/28\",\"pic\":[\"../src/static/images/web07-1.jpg\",\"../src/static/images/web07-2.jpg\",\"../src/static/images/web07-3.jpg\",\"../src/static/images/web07-4.jpg\"],\"title\":\"朱志康空間規劃\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://www.kang.com.tw/\\'>官方網站</a></p>\"},{\"uid\":\"8\",\"type\":\"2\",\"bg\":\"../src/static/images/web08a.jpg\",\"date\":\"2017/09/27\",\"pic\":[\"../src/static/images/web08-1.jpg\",\"../src/static/images/web08-2.jpg\",\"../src/static/images/web08-3.jpg\",\"../src/static/images/web08-4.jpg\",\"../src/static/images/web08-5.jpg\",\"../src/static/images/web08-6.jpg\"],\"title\":\"Haagen Dazs繽紛水果嘉年華\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'https://event.eray.tw/y_20170927_dazs/\\'>備份連結(活動已結束)</a></p><p>說明：很有趣的活動網站，只能用手機開。<br/>可以選擇喜歡的口味進行遊戲。利用水平儀功能先搖晃手機把叢林搖開，接著把水果丟到冰淇淋裡參加抽獎。當時很多人參加完遊戲。</p>\"},{\"uid\":\"9\",\"type\":\"1\",\"bg\":\"\",\"date\":\"2017/09/27\",\"pic\":[\"../src/static/images/web09-1.jpg\",\"../src/static/images/web09-2.jpg\",\"../src/static/images/web09-3.jpg\"],\"title\":\"能恩非水解3 消化再升級\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'https://nan3.nestlebaby.com.tw/\\'>官方網站/活動網站</a></p><p>說明：已經改版了好幾次，現在有經由其他同仁接手。<br/>除了首頁以外還可以進行遊戲。可以上傳自己喜歡的照片，後製後上傳分享參加活動。</p>\"},{\"uid\":\"10\",\"type\":\"2\",\"bg\":\"\",\"date\":\"2016/03/08\",\"pic\":[\"../src/static/images/web10-1.jpg\",\"../src/static/images/web10-2.jpg\",\"../src/static/images/web10-3.jpg\",\"../src/static/images/web10-4.jpg\",\"../src/static/images/web10-5.jpg\",\"../src/static/images/web10-6.jpg\",\"../src/static/images/web10-7.jpg\"],\"title\":\"克寧 窈窕懶人包\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://event.eray.tw/y_20160308_klim/\\'>備份連結(活動已結束)</a></p><p>說明：很久很久以前做的活動網站，沒有RWD，卻有一堆動態必須製作。可以報名活動參加抽獎</p>\"},{\"uid\":\"11\",\"type\":\"1\",\"bg\":\"../src/static/images/web11a.jpg\",\"date\":\"2016/03/08\",\"pic\":[\"../src/static/images/web11-1.jpg\",\"../src/static/images/web11-2.jpg\",\"../src/static/images/web11-3.jpg\",\"../src/static/images/web11-4.jpg\"],\"title\":\"G-SHOCK/BABY-G\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'\\'>活動網站</a></p><p>說明：台灣版的G-SHOCK網站，基本上需求是要做得跟日本G-SHOCK做得一模一樣。</p>\"},{\"uid\":\"12\",\"type\":\"2\",\"bg\":\"../src/static/images/web12a.jpg\",\"date\":\"2018/04/19\",\"pic\":[\"../src/static/images/web12-1.jpg\",\"../src/static/images/web12-2.jpg\",\"../src/static/images/web12-3.jpg\",\"../src/static/images/web12-4.jpg\",\"../src/static/images/web12-5.jpg\"],\"title\":\"貓妻心理學\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://event.nissan.com.tw/MARCH_meow/\\'>活動網站</a></p><p>說明：近期做的AWD網站，由Vue + Pixi.js + createJs製作。</p>\"},{\"uid\":\"13\",\"type\":\"2\",\"bg\":\"\",\"date\":\"2018/04/19\",\"pic\":[\"../src/static/images/web13-1.jpg\",\"../src/static/images/web13-2.jpg\",\"../src/static/images/web13-3.jpg\",\"../src/static/images/web13-4.jpg\",\"../src/static/images/web13-5.jpg\",\"../src/static/images/web13-6.jpg\"],\"title\":\"熊寶貝醫美診所\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'https://www.snuggle.com.tw/2016Dr.snuggle/index.html\\'>活動網站</a></p><p>熊寶貝的RWD活動網站，當時使用Angular(1.0)製作，可以進行發問，並參加抽獎。</p>\"},{\"uid\":\"14\",\"type\":\"1\",\"bg\":\"../src/static/images/web14.jpg\",\"date\":\"2018/04/19\",\"pic\":[\"../src/static/images/web14-6.jpg\",\"../src/static/images/web14-2.jpg\",\"../src/static/images/web14-3.jpg\",\"../src/static/images/web14-4.jpg\",\"../src/static/images/web14-5.jpg\",\"../src/static/images/web14-1.jpg\"],\"title\":\"鞋生活APP\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'https://itunes.apple.com/tw/app/%E9%9E%8B%E7%94%9F%E6%B4%BBapp/id1353356591?mt=8\\'>Apple Store</a></p><p>網址：<a target=\\'_blank\\' href=\\'https://appadvice.com/app/e9-9e-8b-e7-94-9f-e6-b4-bbapp/1353356591\\'>網站</a></p><p>說明：使用Onsen-UI + ReactJS製作的Web app，具備多項功能的購物app，分為消費者/設計師兩款app，專賣鞋子，也可以進行訂做。</p>\"},{\"uid\":\"15\",\"type\":\"2\",\"bg\":\"\",\"date\":\"2018/04/19\",\"pic\":[\"../src/static/images/web15-1.jpg\",\"../src/static/images/web15-2.jpg\",\"../src/static/images/web15-3.jpg\",\"../src/static/images/web15-4.jpg\",\"../src/static/images/web15-5.jpg\",\"../src/static/images/web15-6.jpg\"],\"title\":\"元山科技官方網站\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://www.ystech.com.tw/news.html\\'>官方網站</a></p>\"},{\"uid\":\"16\",\"type\":\"2\",\"bg\":\"../src/static/images/web16a.jpg\",\"date\":\"2018/03/20\",\"pic\":[\"../src/static/images/web16-1.jpg\",\"../src/static/images/web16-2.jpg\",\"../src/static/images/web16-3.jpg\",\"../src/static/images/web16-4.jpg\",\"../src/static/images/web16-5.jpg\"],\"title\":\"107級視覺傳達設計系畢業製作─來噪電\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://event.eray.tw/y_20180426_ksu/\\'>官方網站</a></p><p>說明：協助實習生製作的畢業製作demo網站。<br>結合PixiJS + Vue.js + anime.js</p>\"},{\"uid\":\"17\",\"type\":\"1\",\"bg\":\"../src/static/images/web17-1.jpg\",\"date\":\"2016/05/28\",\"pic\":[\"../src/static/images/web17-1.jpg\"],\"title\":\"好奇寶寶動動貼 活動網站\",\"des\":\"<p>網址：無</p><p>說明：早期製作的網站，網站內容已遺失。利用CANVAS製作GIF，選擇想要的背景後、上傳分享FB的活動。</p>\"},{\"uid\":\"18\",\"type\":\"2\",\"bg\":\"../src/static/images/web18-1.jpg\",\"date\":\"2016/04/28\",\"pic\":[\"../src/static/images/web18-1.jpg\",\"../src/static/images/web18-2.jpg\",\"../src/static/images/web18-3.jpg\"],\"title\":\"大帑殿\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://www.tempoktv.com.tw/\\'>官方網站</a></p><p>說明：早期製作的網站，較為陽春的網站版型。使用jquery + php</p>\"},{\"uid\":\"19\",\"type\":\"2\",\"bg\":\"../src/static/images/web18-1.jpg\",\"date\":\"2016/04/28\",\"pic\":[\"../src/static/images/web19-1.jpg\",\"../src/static/images/web19-2.jpg\",\"../src/static/images/web19-3.jpg\",\"../src/static/images/web19-4.jpg\",\"../src/static/images/web19-5.jpg\",\"../src/static/images/web19-6.jpg\"],\"title\":\"楊式速讀\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://ssl.fla.com.tw/yangs_web/index.php\\'>官方網站</a></p><p>說明：早期製作的網站，較為陽春的網站版型。使用jquery + php，當時也還在用purecss + compass</p>\"},{\"uid\":\"20\",\"type\":\"1\",\"bg\":\"\",\"date\":\"2018/06/28\",\"pic\":[\"../src/static/images/web20-1.jpg\"],\"title\":\"三菱汽車\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://event.eray.tw/y_20180626_30/\\'>活動網站</a></p><p>說明：近期製作的網站，為三菱汽車的官網內頁</p>\"},{\"uid\":\"21\",\"type\":\"1\",\"bg\":\"\",\"date\":\"2018/06/15\",\"pic\":[\"../src/static/images/web21-1.png\"],\"title\":\"Haagen-dazs\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://event.eray.tw///y_20180611_dazs/\\'>活動網站</a></p><p>說明：由於之前活動辦得不錯，近期又在合作中的活動網站。使用Vue + Router + Redux</p>\"},{\"uid\":\"22\",\"type\":\"2\",\"bg\":\"\",\"date\":\"2018/06/03\",\"pic\":[\"../src/static/images/web22-1.jpg\"],\"title\":\"三菱青春還鄉\",\"des\":\"<p>網址：<a target=\\'_blank\\' href=\\'http://event.eray.tw/y_20180613_30_web/\\'>官方網站</a></p><p>說明：三菱汽車重新打掉重做的網站。使用Vue</p>\"}]');\n\n//# sourceURL=webpack://rex_main_page/./src/containers/Gallery/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/index.js","vendors-node_modules_babel_runtime_helpers_esm_defineProperty_js-node_modules_babel_runtime_h-66c720"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrex_main_page"] = self["webpackChunkrex_main_page"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;