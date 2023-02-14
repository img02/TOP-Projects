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

/***/ "./src/about_page.js":
/*!***************************!*\
  !*** ./src/about_page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _images_about_us_image1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/about_us/image1.png */ \"./src/images/about_us/image1.png\");\n/**\n *  About Page\n */\n\n// https://www.pexels.com/photo/egg-and-vegetable-dish-2067473/\n\n\nconst headline = \"Who are we? Why are we? What are we? Where are we?\";\nconst copyText =\n    \"<blockquote>Food. What is it?</br>\" +\n    \"<i>Nourishment.</i></p>\" +\n    \"What is nourishment?</br>\" +\n    \"<i>Nuture of the soul</i>.</p>\" +\n    \"What is nuture, but a warm hug from a mother.</br>\" +\n    \"<i>Buy our food so your mother will love you.</blockquote></i>\";\nconst baseId = \"about_page\";\n\nfunction loadPage() {\n    const div = document.querySelector(\"#content\");\n    // const div = document.getElementById(\"content\");\n\n    const heading = document.createElement(\"h1\");\n    heading.textContent = headline;\n    heading.classList.add(\"heading\");\n    heading.id = `${baseId}_heading`;\n\n    const image = new Image();\n    image.src = _images_about_us_image1_png__WEBPACK_IMPORTED_MODULE_0__;\n    image.classList.add(\"main_image\");\n    image.id = `${baseId}_id`;\n\n    // Temp sizing\n    image.width = 550;\n    image.height = 800;\n\n    const text = document.createElement(\"div\");\n    text.innerHTML = copyText;\n    text.classList.add(\"main_text\");\n    text.id = `${baseId}_text`;\n\n    div.append(heading, image, text);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/about_page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing_page */ \"./src/landing_page.js\");\n/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about_page */ \"./src/about_page.js\");\n\n\n\nconst menuId = \"menu\";\nconst menuTabItem = \"menu_tab_item\";\n\n// module for nav bar\nconst navigation = (() => {\n    const contentDiv = document.getElementById(\"content\");\n    const landingTab = document.createElement(\"div\");\n    const aboutTab = document.createElement(\"div\");\n    const menusTab = document.createElement(\"div\");\n\n    function loadNavBar() {\n        // draw html menu\n        const body = document.querySelector(\"body\");\n        const nav = document.createElement(\"nav\");\n        nav.id = menuId;\n\n        landingTab.classList.add(menuTabItem);\n        aboutTab.classList.add(menuTabItem);\n        menusTab.classList.add(menuTabItem);\n\n        landingTab.innerText = \"Home\";\n        aboutTab.innerText = \"About\";\n        menusTab.innerText = \"Menu\";\n\n        nav.append(landingTab, menusTab, aboutTab);\n        body.prepend(nav);\n    }\n\n    function clearPage() {\n        contentDiv.innerHTML = \"\";\n    }\n\n    function loadPage(pageFn) {\n        clearPage();\n        pageFn();\n    }\n    function subscribeMenuItems() {\n        landingTab.addEventListener(\"click\", () => {\n            loadPage(_landing_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        });\n\n        aboutTab.addEventListener(\"click\", () => {\n            loadPage(_about_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        });\n\n        menusTab.addEventListener(\"click\", () => {\n            // ToDo\n        });\n    }\n\n    const startup = () => {\n        loadNavBar();\n        subscribeMenuItems();\n    };\n\n    return { startup };\n})();\n\nnavigation.startup();\n// default to landing page\n(0,_landing_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/landing_page.js":
/*!*****************************!*\
  !*** ./src/landing_page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _images_landing_page_image1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/landing_page/image1.png */ \"./src/images/landing_page/image1.png\");\n/**\n *  Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is.\n */\n\n// https://www.pexels.com/photo/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545/\n\n\nconst headline = \"A wonderful restaurant, food is good! (no refunds tho)\";\n\n// const imgUrl = \"./images/landing_page/image1.png\";\nconst copyText =\n    \"This is a good restaurant, I swear. I'm not just saying this because there's a gun to my head, pinky promise. Please eat here, (help me). Haha, it's not like I'm under threat and lying to you (wink wink, sos)\";\nconst baseId = \"landing_page\";\n\nfunction loadPage() {\n    const div = document.querySelector(\"#content\");\n    // const div = document.getElementById(\"content\");\n\n    const heading = document.createElement(\"h1\");\n    heading.textContent = headline;\n    heading.classList.add(\"heading\");\n    heading.id = `${baseId}_heading`;\n\n    const image = new Image();\n    image.src = _images_landing_page_image1_png__WEBPACK_IMPORTED_MODULE_0__;\n    image.classList.add(\"main_image\");\n    image.id = `${baseId}_id`;\n\n    // Temp sizing\n    image.width = 800;\n    image.height = 450;\n\n    const text = document.createElement(\"div\");\n    text.textContent = copyText;\n    text.classList.add(\"main_text\");\n    text.id = `${baseId}_text`;\n\n    div.append(heading, image, text);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/landing_page.js?");

/***/ }),

/***/ "./src/images/about_us/image1.png":
/*!****************************************!*\
  !*** ./src/images/about_us/image1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb392cb247d09352ceec.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/about_us/image1.png?");

/***/ }),

/***/ "./src/images/landing_page/image1.png":
/*!********************************************!*\
  !*** ./src/images/landing_page/image1.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8853d8baf70e6047a60.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/landing_page/image1.png?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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