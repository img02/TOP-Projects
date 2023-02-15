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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/**\n *      class list(){\n *      name : string\n *      status/complete : bool\n *      date : date ? *\n *      }\n *\n *      fn for getting data from local storage => update instance array\n *      fn for updating local storage => pass thru instance array\n *\n *      fn for adding list item => adds to array, updates local stoage, update html elements (all separate fn)\n *          - update html elements => for if date or hour is less than xx hours or days -> set class \"last-day\" \"last-hour\" or something, css style to reddish\n *\n *      fn for drawing basic layout and main list\n *\n *      (maybe)\n *      fn for loading default some random list items (if local storage empty) -- to better display website\n *\n *\n *\n *\n */\n\n// The manager that composes of the todo and view logic objects\n// used to manage state of the todo list and update the view accordingly.\n\n\n\nconst testData = [\n    { name: \"item 1\", description: \"description one\", date: \"todo\" },\n    {\n        name: \"item 2\",\n        description: \"This is an item I need to finish\",\n        date: \"todo\"\n    },\n    { name: \"item 3\", description: \"ughhhhhhh\", date: \"todo\" },\n    {\n        name: \"item 4\",\n        description: \"I'm too lazy to finish this\",\n        date: \"todo\"\n    },\n    { name: \"item 5\", description: \"gotta do this\", date: \"todo\" }\n];\nfunction fn(i) {\n    console.log(`${i} delete button pressed~!`);\n}\n_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startUp();\n// pass through todo logics delete function later\n_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateView(testData, fn);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// the logic for drawing the HTML UI\nconst listId = \"description-list\";\nconst addButtonId = \"add-button\";\nconst deleteButtonBaseId = \"delete-button-\";\n\nconst descriptionTextClass = \"description-text\";\nconst descriptionDateClass = \"description-date\";\n\nconst viewManager = (() => {\n    const body = document.getElementsByTagName(\"body\")[0];\n    const descriptionList = document.createElement(\"dl\");\n    descriptionList.id = listId;\n\n    const addButton = document.createElement(\"button\");\n    addButton.id = addButtonId;\n\n    function addListItemModal() {\n        // draw modal form for list item...\n    }\n\n    function drawList() {\n        body.append(descriptionList);\n        addButton.addEventListener(\"click\", () => {\n            addListItemModal();\n        });\n    }\n\n    function subscribeDeleteButton(btn, index, deleteFunc) {\n        btn.addEventListener(\"click\", () => {\n            deleteFunc(index);\n        });\n    }\n\n    function createItemDescription(item, i, deleteFunc) {\n        const btnId = `${deleteButtonBaseId}${i}`;\n        const itemTerm = document.createElement(\"dt\");\n        itemTerm.innerText = item.name;\n\n        // description will be a div flexbox flow row - for description, date, delete button?\n        const itemDescription = document.createElement(\"dd\");\n        const div = document.createElement(\"div\");\n        const text = document.createElement(\"p\");\n        const date = document.createElement(\"p\");\n        const deleteBtn = document.createElement(\"button\");\n\n        text.textContent = item.description;\n        date.textContent = item.date;\n        deleteBtn.textContent = \"DELETE\";\n\n        text.classList = descriptionTextClass;\n        date.classList = descriptionDateClass;\n        deleteBtn.id = btnId;\n\n        div.append(text, date, deleteBtn);\n        itemDescription.append(div);\n        descriptionList.append(itemTerm, itemDescription);\n\n        // subscribe buttons click event\n        subscribeDeleteButton(deleteBtn, i, deleteFunc);\n    }\n    const updateView = (arr, deleteFunc) => {\n        // array of todo objects\n        /*\n         *  <dl>\n            <dt>Coffee</dt>\n            <dd>- black hot drink</dd>\n            <dt>Milk</dt>\n            <dd>- white cold drink</dd>\n            </dl> \n         */\n        for (let i = 0; i < arr.length; i++) {\n            createItemDescription(arr[i], i, deleteFunc);\n        }\n        // for each item, draw button, give unique id `list-item-${index???}`\n        // then subscribeDeleteButton(id);\n    };\n    const startUp = () => {\n        drawList();\n    };\n\n    return { startUp, updateView };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewManager);\n\n\n//# sourceURL=webpack://todo-list/./src/view.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;