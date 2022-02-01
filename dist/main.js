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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n    const divContent = document.getElementById('content');\n    divContent.innerHTML = \"\";\n    \n    const h1 = document.createElement('h1');\n    const img = document.createElement('img');\n    const p = document.createElement('p');\n\n    h1.innerHTML = \"Contact Prison Mike\";\n    img.src = \"../src/prison-mike.jpg\";\n    p.innerHTML = `\"Wassup lil bitch, this prison mike. If you don't buy my shit, I'll kill you.\"`;\n\n    divContent.appendChild(h1);\n    divContent.appendChild(img);\n    divContent.appendChild(p);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\n    const divContent = document.getElementById('content');\n    divContent.innerHTML = \"\";\n\n    const h1 = document.createElement('h1');\n    const img = document.createElement('img');\n    const p = document.createElement('p');\n\n    h1.innerHTML = \"Prison Mike's Salad\";\n    img.src = \"../src/prison-mike.jpg\";\n    p.innerHTML = \"Man, this restaurant is so good! I love the way they toss my salad!\";\n\n    divContent.appendChild(h1);\n    divContent.appendChild(img);\n    divContent.appendChild(p);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconsole.log(\"Watch this shit homie\");\nconst nav = document.createElement('nav');\nconst btn1 = document.createElement('button');\nconst btn2 = document.createElement('button');\nconst btn3 = document.createElement('button');\n\nbtn1.innerHTML = \"Home\";\nbtn2.innerHTML = \"Menu\";\nbtn3.innerHTML = \"Contact\";\n\ndocument.body.insertBefore(nav, document.getElementById('content'));\nnav.appendChild(btn1);\nnav.appendChild(btn2);\nnav.appendChild(btn3);\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nbtn1.onclick = _home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nbtn2.onclick = _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nbtn3.onclick = _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n    const divContent = document.getElementById('content');\n    divContent.innerHTML = \"\";\n    \n    const h1 = document.createElement('h1');\n    const img = document.createElement('img');\n    const p = document.createElement('p');\n\n    h1.innerHTML = \"Prison Mike's Menu\";\n    img.src = \"../src/prison-mike.jpg\";\n    p.innerHTML = \"Mike's Famous Salad\\n Toilet Cocktail\\n Mystery Parfait\";\n\n    divContent.appendChild(h1);\n    divContent.appendChild(img);\n    divContent.appendChild(p);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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