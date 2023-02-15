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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    font-family: \\\"Bebas Neue\\\", cursive;\\n    font-family: \\\"Source Code Pro\\\", monospace;\\n    background-color: #888;\\n}\\n\\n/* modal base from https://www.w3schools.com/howto/howto_css_modals.asp*/\\n/* The Modal (background) */\\n#modal {\\n    display: none; /* Hidden by default */\\n    position: fixed; /* Stay in place */\\n    z-index: 1; /* Sit on top */\\n    left: 0;\\n    top: 0;\\n    width: 100%; /* Full width */\\n    height: 100%; /* Full height */\\n    overflow: auto; /* Enable scroll if needed */\\n    background-color: rgb(0, 0, 0); /* Fallback color */\\n    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\\n}\\n\\n/* Modal Content/Box */\\n#modal-content {\\n    background-color: #888;\\n    margin: 15% auto; /* 15% from the top and centered */\\n    padding: 20px;\\n\\n    border-style: outset;\\n    border-width: 4px;\\n\\n    width: 25%;\\n    height: 40%;\\n\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n#modal-button {\\n    margin-top: 8px;\\n    align-self: flex-end;\\n}\\n.modal-input {\\n    margin-bottom: 5px;\\n}\\n.modal-input {\\n    margin: 1% 25% 1% 1%;\\n}\\n\\n/* The Close Button */\\n.close {\\n    color: #aaa;\\n    float: right;\\n    font-size: 28px;\\n    font-weight: bold;\\n}\\n\\n.close:hover,\\n.close:focus {\\n    color: black;\\n    text-decoration: none;\\n    cursor: pointer;\\n}\\n\\n#description-list {\\n    display: flex;\\n    flex-direction: column;\\n    padding: 2% 35% 1% 35%;\\n\\n    border-style: inset;\\n    border-width: 2px;\\n}\\n\\n.description-div,\\n.modal-input-div {\\n    display: flex;\\n    flex-direction: column;\\n    border-style: inset;\\n    border-width: 1px;\\n    margin: 5px 0 10px 0;\\n    padding: 2px 5px 5px 5px;\\n}\\n\\n.delete-button {\\n    width: 50px;\\n    height: 22px;\\n    align-self: flex-end;\\n}\\n\\n#add-button {\\n    align-self: flex-end;\\n}\\n\\np {\\n    margin: 5px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// The manager that composes of the todo and view logic objects\n\n\n\n\n\n\nconst testData = [\n    { name: \"item 1\", description: \"description one\", date: \"todo\" },\n    {\n        name: \"item 2\",\n        description: \"This is an item I need to finish\",\n        date: \"todo\"\n    },\n    { name: \"item 3\", description: \"ughhhhhhh\", date: \"todo\" },\n    {\n        name: \"item 4\",\n        description: \"I'm too lazy to finish this\",\n        date: \"todo\"\n    },\n    { name: \"item 5\", description: \"gotta do this\", date: \"2023\" }\n];\n\n// if local storage contains data, use that\nconst localData = _localstorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadStorage();\nif (localData != null) {\n    _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadFromStorage(localData);\n}\n\n// pass through logic's delete, add, getList functions\n_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startUp(\n    _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteItem,\n    _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addItem,\n    _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getList,\n    _localstorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].saveStorage\n);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst localStorage = (() => {\n    const storage = window.localStorage;\n    const loadStorage = () => storage.getItem(\"todo\");\n    const saveStorage = (value) => storage.setItem(\"todo\", value);\n    return { loadStorage, saveStorage };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorage);\n\n\n//# sourceURL=webpack://todo-list/./src/localstorage.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// the logic for the todo list\n\nclass ToDoItem {\n    constructor(name, description, date, done) {\n        this.name = name;\n        this.description = description;\n        this.date = date;\n        this.done = done;\n    }\n}\n\nconst toDo = (() => {\n    let list = [\n        new ToDoItem(\"wake up.\", \"you're asleep!\", \"01/01/1999\", false),\n        new ToDoItem(\"shopping.\", \"get some food.\", \"01/01/1999\", false),\n        new ToDoItem(\"study.\", \"exams soon.\", \"01/01/1999\", false),\n        new ToDoItem(\n            \"walk the dog.\",\n            \"but.. i don't have one?\",\n            \"01/01/1999\",\n            true\n        ),\n        new ToDoItem(\n            \"seriously, wake up.\",\n            \"this is all a dream\",\n            \"01/01/1999\",\n            false\n        ),\n        new ToDoItem(\"please wake up.\", \"we miss you\", \"01/01/1999\", true)\n    ];\n\n    const addItem = (item) => {\n        console.log(\n            `button clicked: Creating new list item.... ${item.name}: ${item.description} : ${item.date} : ${item.done}`\n        );\n        // validate item?\n        list.push(item);\n    };\n    const deleteItem = (i) => {\n        console.log(`${i} delete button pressed~!`);\n        if (i === 0) list.shift();\n        else if (i === list.length - 1) list.pop();\n        else {\n            const start = list.slice(0, i);\n            const end = list.slice(i + 1);\n            list = start.concat(end);\n        }\n    };\n    const getList = () => list;\n    const loadFromStorage = (value) => {\n        list = JSON.parse(value);\n    };\n\n    return { addItem, deleteItem, getList, loadFromStorage };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDo);\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// the logic for drawing the HTML UI\nconst listId = \"description-list\";\nconst addButtonId = \"add-button\";\nconst deleteButtonBaseId = \"delete-button\";\nconst modalId = \"modal\";\nconst modalContentId = \"modal-content\";\nconst nameInputId = \"modal-name-input\";\nconst descriptionInputId = \"modal-description-input\";\nconst dateInputId = \"modal-date-input\";\nconst inputButtonId = \"modal-button\";\n\nconst descriptionTextClass = \"description-text\";\nconst descriptionDateClass = \"description-date\";\nconst deleteButtonClass = \"delete-button\";\nconst descriptionDivClass = \"description-div\";\nconst modalInputClass = \"modal-input\";\nconst modalInputDivClass = \"modal-input-div\";\n\nconst deleteBtnText = \"delete.\";\nconst saveBtnText = \"save.\";\n\nconst viewManager = (() => {\n    let deleteFunc;\n    let addFunc;\n    let getList;\n    let updateLocalStorage;\n    const body = document.getElementsByTagName(\"body\")[0];\n    const descriptionList = document.createElement(\"dl\");\n    descriptionList.id = listId;\n\n    const addButton = document.createElement(\"button\");\n    addButton.id = addButtonId;\n    addButton.textContent = \"+\";\n\n    const modal = document.createElement(\"div\");\n    modal.id = modalId;\n\n    function hideModal() {\n        modal.style.display = \"none\";\n    }\n    function showModal() {\n        modal.style.display = \"block\";\n    }\n\n    function subscribeDeleteButton(btn, index) {\n        btn.addEventListener(\"click\", () => {\n            deleteFunc(index);\n            updateView();\n        });\n    }\n\n    function createItemDescription(item, i) {\n        const btnId = `${deleteButtonBaseId}${i}`;\n        const itemTerm = document.createElement(\"dt\");\n        itemTerm.innerText = item.name;\n\n        // description will be a div flexbox flow row - for description, date, delete button?\n        const itemDescription = document.createElement(\"dd\");\n        const div = document.createElement(\"div\");\n        const text = document.createElement(\"p\");\n        const date = document.createElement(\"p\");\n        const deleteBtn = document.createElement(\"button\");\n\n        text.textContent = item.description;\n        date.textContent = item.date;\n        deleteBtn.textContent = deleteBtnText;\n\n        div.classList.add(descriptionDivClass);\n        text.classList.add(descriptionTextClass);\n        date.classList.add(descriptionDateClass);\n        deleteBtn.classList.add(deleteButtonClass);\n        deleteBtn.id = btnId;\n\n        div.append(text, date, deleteBtn);\n        itemDescription.append(div);\n        descriptionList.append(itemTerm, itemDescription);\n\n        // subscribe buttons click event\n        subscribeDeleteButton(deleteBtn, i, deleteFunc);\n    }\n\n    // updates view to match todo state\n    const updateView = () => {\n        // clear list\n        descriptionList.innerHTML = \"\";\n        const arr = getList();\n        // recreate each list item\n        for (let i = 0; i < arr.length; i++) {\n            createItemDescription(arr[i], i, deleteFunc);\n        }\n        descriptionList.append(addButton);\n        updateLocalStorage(JSON.stringify(getList()));\n    };\n\n    function addItem(name, description, date) {\n        const item = { name, description, date };\n        addFunc(item);\n        updateView();\n    }\n\n    function drawAddItemModal() {\n        const modalDiv = document.createElement(\"div\");\n        modalDiv.id = modalContentId;\n\n        // input 'form' (not using an actual form)\n        const nameInput = document.createElement(\"input\");\n        const descriptionInput = document.createElement(\"input\");\n        const dateInput = document.createElement(\"input\");\n        const inputBtn = document.createElement(\"button\");\n\n        const nameInputName = document.createElement(\"p\");\n        const descriptionInputName = document.createElement(\"p\");\n        const dateInputName = document.createElement(\"p\");\n\n        const nameInputDiv = document.createElement(\"div\");\n        const descriptionInputDiv = document.createElement(\"div\");\n        const dateInputDiv = document.createElement(\"div\");\n\n        // names\n        nameInputName.textContent = \"name.\";\n        descriptionInputName.textContent = \"description.\";\n        dateInputName.textContent = \"date.\";\n\n        // ids\n        nameInput.id = nameInputId;\n        descriptionInput.id = descriptionInputId;\n        dateInput.id = dateInputId;\n        inputBtn.id = inputButtonId;\n\n        // classes\n        nameInput.classList.add(modalInputClass);\n        descriptionInput.classList.add(modalInputClass);\n        dateInput.classList.add(modalInputClass);\n        nameInputDiv.classList.add(modalInputDivClass);\n        descriptionInputDiv.classList.add(modalInputDivClass);\n        dateInputDiv.classList.add(modalInputDivClass);\n\n        // required -- not using form, so...\n        nameInput.required = true;\n        descriptionInput.required = true;\n        dateInput.required = true;\n\n        // type\n        nameInput.type = \"text\";\n        descriptionInput.type = \"text\";\n        // dates are ToDo\n        dateInput.type = \"text\";\n        dateInput.placeholder =\n            \"dates not yet implemented. don't hold your breath.\";\n\n        inputBtn.textContent = saveBtnText;\n\n        // when btn clicked, add item based in input values\n        inputBtn.addEventListener(\"click\", () => {\n            addItem(nameInput.value, descriptionInput.value, dateInput.value);\n            hideModal();\n            nameInput.value = \"\";\n            descriptionInput.value = \"\";\n            dateInput.value = \"\";\n        });\n\n        nameInputDiv.append(nameInputName, nameInput);\n        descriptionInputDiv.append(descriptionInputName, descriptionInput);\n        dateInputDiv.append(dateInputName, dateInput);\n\n        modalDiv.append(\n            nameInputDiv,\n            descriptionInputDiv,\n            dateInputDiv,\n            inputBtn\n        );\n\n        // modalDiv.append(\n        //     nameInputName,\n        //     nameInput,\n        //     descriptionInputName,\n        //     descriptionInput,\n        //     dateInputName,\n        //     dateInput,\n        //     inputBtn\n        // );\n        modal.append(modalDiv);\n        body.append(modal);\n    }\n\n    // adds the basic html for the description list\n    function drawList() {\n        body.append(descriptionList);\n        drawAddItemModal();\n\n        // just show the modal window\n        addButton.addEventListener(\"click\", () => {\n            showModal();\n        });\n        // if modal window focused, hide\n        window.onclick = (e) => {\n            if (e.target === modal) {\n                hideModal();\n            }\n        };\n    }\n\n    const startUp = (deleteFn, addFn, getListFn, updateLocalStorageFn) => {\n        deleteFunc = deleteFn;\n        addFunc = addFn;\n        getList = getListFn;\n        updateLocalStorage = updateLocalStorageFn;\n\n        drawList();\n        updateView();\n    };\n\n    return { startUp, updateView };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewManager);\n\n\n//# sourceURL=webpack://todo-list/./src/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;