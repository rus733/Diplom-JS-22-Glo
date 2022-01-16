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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scrollTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollTabs */ \"./modules/scrollTabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_scrollTabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); //carousel\r\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carousel = () => {\r\n  let serviceCarousel = document.getElementsByClassName('services-carousel'),\r\n    arrowLeft = document.querySelector('.arrow-left'),\r\n    arrowRight = document.querySelector('.arrow-right'),\r\n    current = 0;\r\n\r\n  // Clear all images\r\n  function reset() {\r\n    for (let i = 0; i < serviceCarousel.length; i++) {\r\n      serviceCarousel[i].style.display = 'none';\r\n    }\r\n  }\r\n\r\n  // Initial slide\r\n  function startSlide() {\r\n    reset();\r\n    serviceCarousel[0].style.display = 'block';\r\n  }\r\n\r\n  // Show previous\r\n  function slideLeft() {\r\n    reset();\r\n    serviceCarousel[current - 1].style.display = 'block';\r\n    current--;\r\n  }\r\n\r\n  // Show next\r\n  function slideRight() {\r\n    reset();\r\n    serviceCarousel[current + 1].style.display = 'block';\r\n    current++;\r\n  }\r\n\r\n  // Left arrow click\r\n  arrowLeft.addEventListener('click', function () {\r\n    if (current === 0) {\r\n      current = serviceCarousel.length;\r\n    }\r\n    slideLeft();\r\n  });\r\n\r\n  // Right arrow click\r\n  arrowRight.addEventListener('click', function () {\r\n    if (current === serviceCarousel.length - 1) {\r\n      current = -1;\r\n    }\r\n    slideRight();\r\n  });\r\n\r\n  startSlide();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\r\n\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst modal = () => {\r\n  const modalOverlay = document.querySelector('.modal-overlay');\r\n  const callBtn = document.querySelectorAll('.callback-btn'); //\r\n  const openModal = document.getElementById('callback');\r\n\r\n  callBtn.forEach((btn) => {\r\n    btn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      modalOverlay.style.display = 'flex';\r\n      openModal.style.display = 'flex';\r\n    });\r\n  });\r\n\r\n  document.addEventListener('click', (e) => {\r\n    if (e.target.closest('.modal-overlay') || e.target.closest('.modal-close')) {\r\n      modalOverlay.style.display = 'none';\r\n      openModal.style.display = 'none';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scrollTabs.js":
/*!*******************************!*\
  !*** ./modules/scrollTabs.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst scrollTabs = () => {\r\n  //console.log('HI');\r\n\r\n  const buttonsMenu = document.querySelectorAll(\"a[href^='#']\");\r\n\r\n  buttonsMenu.forEach((btn) => {\r\n    btn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      document.querySelector(e.target.getAttribute('href')).scrollIntoView({\r\n        behavior: 'smooth',\r\n      });\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollTabs);\r\n\n\n//# sourceURL=webpack:///./modules/scrollTabs.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst slider = () => {\r\n  const sliderBlock = document.querySelector('.top-slider'),\r\n    sliderDot = document.querySelector('.slider-dots'),\r\n    //slides = document.querySelectorAll('.item'),\r\n    slides = document.getElementsByClassName('item'),\r\n    //cells = document.querySelectorAll('.table-cell'),\r\n    dot = document.querySelectorAll('.dot'),\r\n    timeInterval = 2000;\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n  //let dots;\r\n\r\n  /*\r\n  const createDots = () => {\r\n    slides.forEach(() => {\r\n      const dot = document.createElement('li');\r\n      dot.classList.add('dot'); //'dot',\r\n      sliderDot.append(dot); //\r\n    });\r\n    dots = document.querySelectorAll('.dot'); //'dot',\r\n    dots[currentSlide].classList.add('dot-active');\r\n  };\r\n*/\r\n  const prevSlide = (elems, index, className) => {\r\n    elems[index].classList.remove(className);\r\n  };\r\n\r\n  const nextSlide = (elems, index, className) => {\r\n    elems[index].classList.add(className);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'slide-active');\r\n    prevSlide(dot, currentSlide, 'dot-active');\r\n    currentSlide++;\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slides, currentSlide, 'slide-active');\r\n    nextSlide(dot, currentSlide, 'dot-active');\r\n  };\r\n\r\n  const startSlide = (timer = 3000) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches('.dot, .slider-dots')) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'slide-active');\r\n    prevSlide(dot, currentSlide, 'dot-active');\r\n\r\n    if (e.target.matches('.dot')) {\r\n      dot.forEach((elem, index) => {\r\n        if (elem === e.target) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'slide-active');\r\n    nextSlide(dot, currentSlide, 'dot-active');\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    'mouseenter',\r\n    (e) => {\r\n      if (e.target.matches('.dot')) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    'mouseleave',\r\n    (e) => {\r\n      if (e.target.matches('.dot')) {\r\n        startSlide(timeInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n  //createDots();\r\n  //autoSlide();\r\n\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;