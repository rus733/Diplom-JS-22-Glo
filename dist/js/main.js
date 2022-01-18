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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scrollTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollTabs */ \"./modules/scrollTabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollUp */ \"./modules/scrollUp.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordion */ \"./modules/accordion.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_formsValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/formsValidation */ \"./modules/formsValidation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_scrollTabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_formsValidation__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordion.js":
/*!******************************!*\
  !*** ./modules/accordion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst accordion = () => {\r\n  let accordion = document.querySelectorAll('.accordeon>.element'),\r\n    elementContent = document.querySelectorAll('.acc-section'),\r\n    i;\r\n\r\n  for (i = 0; i < accordion.length; i++) {\r\n    accordion[i].onclick = function () {\r\n      hideAll();\r\n\r\n      this.classList.toggle('active');\r\n      let blocks = this.children;\r\n      Array.from(blocks).forEach((em) => {\r\n        em.classList.toggle('faq');\r\n      });\r\n    };\r\n  }\r\n\r\n  function hideAll() {\r\n    for (i = 0; i < accordion.length; i++) {\r\n      accordion[i].classList.toggle('active', false);\r\n      elementContent[i].classList.toggle('faq', false);\r\n    }\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);\r\n\n\n//# sourceURL=webpack:///./modules/accordion.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n//import Swiper from 'swiper';\r\n\r\nconst carousel = () => {\r\n  //console.log('carousel');\r\n\r\n  const swiper = new Swiper('.swiper', {\r\n    //loop: true,\r\n    navigation: {\r\n      nextEl: '.arrow-right', //arrow-left\r\n      prevEl: '.arrow-left',\r\n    },\r\n    //slidesPerView: 1,\r\n    //spaceBetween: 10,\r\n\r\n    breakpoints: {\r\n      640: {\r\n        slidesPerView: 1,\r\n        spaceBetween: 20,\r\n      },\r\n      768: {\r\n        slidesPerView: 2,\r\n        spaceBetween: 40,\r\n      },\r\n      1024: {\r\n        slidesPerView: 3,\r\n        spaceBetween: 50,\r\n      },\r\n    },\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\r\n\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/formsValidation.js":
/*!************************************!*\
  !*** ./modules/formsValidation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst formsValidation = () => {\r\n  const inputName = document.querySelectorAll('input[name=\"fio\"]');\r\n  const inputPhone = document.querySelectorAll('.tel');\r\n  const customTrim = (val) =>\r\n    val\r\n      .replace(/([ \\-()@_.!~*'])(?=[ \\-()@_.!~*']*\\1)/g, '')\r\n      //.replace(/^[ |\\-+]/g, '')\r\n      .replace(/^[ |-]/g, '')\r\n      .replace(/[ |\\-+]$/g, '');\r\n\r\n  // валидация ввода имени верхней и нижней формы\r\n\r\n  inputName.forEach((input) => {\r\n    input.addEventListener('blur', (e) => {\r\n      let val = e.target.value;\r\n      val = val.replace(/[^а-яё -]/gi, '');\r\n      val = customTrim(val);\r\n      val = val.toLowerCase();\r\n      val = val.replace(/( |^|-)[ а-яё]/g, (u) => u.toUpperCase());\r\n      e.target.value = val;\r\n    });\r\n    input.addEventListener('input', () => {\r\n      input.value = input.value.replace(/[^а-яё -]/gi, '');\r\n    });\r\n  });\r\n\r\n  //  валидация ввода номера телефона\r\n\r\n  inputPhone.forEach((input) => {\r\n    input.addEventListener('blur', (e) => {\r\n      let val = e.target.value;\r\n      val = val.replace(/[^0-9()\\-+]/, '');\r\n      val = customTrim(val);\r\n      e.target.value = val;\r\n    });\r\n    input.addEventListener('input', () => {\r\n      input.value = input.value.replace(/[^0-9()\\-+]/, '');\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formsValidation);\r\n\n\n//# sourceURL=webpack:///./modules/formsValidation.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blockBody\": () => (/* binding */ blockBody),\n/* harmony export */   \"unBlockBody\": () => (/* binding */ unBlockBody),\n/* harmony export */   \"calcScroll\": () => (/* binding */ calcScroll)\n/* harmony export */ });\nconst blockBody = () => {\r\n  const body = document.body;\r\n  body.style.overflow = 'hidden';\r\n  const bodyScroll = calcScroll();\r\n  body.style.marginRight = `${bodyScroll}px`;\r\n};\r\n\r\nconst unBlockBody = () => {\r\n  const body = document.body;\r\n  body.style.overflow = 'auto';\r\n  body.style.marginRight = `0`;\r\n};\r\n\r\nfunction calcScroll() {\r\n  let div = document.createElement('div');\r\n  div.style.width = '500px';\r\n  div.style.height = '500px';\r\n  div.style.overflowY = 'scroll';\r\n  div.style.visibility = 'hidden';\r\n  document.body.appendChild(div);\r\n  let scrollWidth = div.offsetWidth - div.clientWidth;\r\n  div.remove();\r\n  return scrollWidth;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst modal = () => {\r\n  const modalOpen = document.getElementById('callback'),\r\n    modalOverlay = document.querySelector('.modal-overlay'),\r\n    callBtn = document.querySelectorAll('.callback-btn'),\r\n    findService = document.querySelector('.button-services'),\r\n    carouselElem = document.querySelectorAll('.absolute');\r\n\r\n  callBtn.forEach((btn) => {\r\n    btn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      modalOpen.style.display = 'flex';\r\n      modalOverlay.style.display = 'flex';\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.blockBody)();\r\n    });\r\n  });\r\n  //\r\n  findService.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    modalOpen.style.display = 'flex';\r\n    modalOverlay.style.display = 'flex';\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.blockBody)();\r\n  });\r\n\r\n  carouselElem.forEach((elem) => {\r\n    elem.addEventListener('click', (e) => {\r\n      e.preventDefault(); //\r\n      modalOpen.style.display = 'flex';\r\n      modalOverlay.style.display = 'flex';\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.blockBody)();\r\n    });\r\n  });\r\n\r\n  document.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close')) {\r\n      modalOpen.style.display = 'none';\r\n      modalOverlay.style.display = 'none';\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.unBlockBody)();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scrollTabs.js":
/*!*******************************!*\
  !*** ./modules/scrollTabs.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst scrollTabs = () => {\r\n  //console.log('HI');\r\n  const buttonsMenu = document.querySelectorAll(\"a[href^='#']\");\r\n  buttonsMenu.forEach((btn) => {\r\n    btn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      document.querySelector(e.target.getAttribute('href')).scrollIntoView({\r\n        behavior: 'smooth',\r\n      });\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollTabs);\r\n\n\n//# sourceURL=webpack:///./modules/scrollTabs.js?");

/***/ }),

/***/ "./modules/scrollUp.js":
/*!*****************************!*\
  !*** ./modules/scrollUp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst scrollUp = () => {\r\n  const arrowUp = document.querySelector('.up'),\r\n    servicesSection = document.querySelector('.services-section'),\r\n    sectionTop = servicesSection.offsetTop;\r\n\r\n  arrowUp.style.display = 'none';\r\n\r\n  window.onscroll = function () {\r\n    if (window.pageYOffset >= sectionTop) {\r\n      arrowUp.style.display = 'block';\r\n    } else {\r\n      arrowUp.style.display = 'none';\r\n    }\r\n  };\r\n\r\n  arrowUp.addEventListener('click', () => {\r\n    window.scrollTo({ top: 0, behavior: 'smooth' });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\r\n\n\n//# sourceURL=webpack:///./modules/scrollUp.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst sendForm = () => {\r\n  /*\r\n  const sendData = async (data) => {\r\n    const res = await fetch('server.php', {\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n    });\r\n    return await res.json();\r\n  };\r\n  */\r\n\r\n  const sendData = (data) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers: { 'Content-Type': 'application/json' },\r\n    });\r\n  };\r\n  //https://jsonplaceholder.typicode.com/posts\r\n\r\n  const submitForm = (form) => {\r\n    const statusMessage = document.createElement('div');\r\n\r\n    const showStatus = (status) => {\r\n      const img = document.createElement('img');\r\n      const statusList = {\r\n        load: {\r\n          message: ' Загрузка...',\r\n          img: './images/message/waiting.gif',\r\n        },\r\n        error: {\r\n          message: ' Что-то пошло не так...',\r\n          img: './images/message/error.png',\r\n        },\r\n        success: {\r\n          message: ' Спасибо. Наш менеджер скоро с вами свяжемся!',\r\n          img: './images/message/success.png',\r\n        },\r\n      };\r\n\r\n      statusMessage.textContent = statusList[status].message;\r\n      img.src = statusList[status].img;\r\n      img.height = 35;\r\n\r\n      statusMessage.insertBefore(img, statusMessage.firstChild);\r\n    };\r\n\r\n    statusMessage.style.cssText = 'font-size: 2rem; color: #000';\r\n\r\n    form.addEventListener('submit', (e) => {\r\n      const formElements = form.querySelectorAll('input'),\r\n        formData = new FormData(form),\r\n        formBody = {};\r\n      e.preventDefault();\r\n\r\n      showStatus('load');\r\n      form.appendChild(statusMessage);\r\n\r\n      formData.forEach((val, key) => {\r\n        formBody[key] = val;\r\n      });\r\n\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          showStatus('success');\r\n\r\n          formElements.forEach((input) => {\r\n            input.value = '';\r\n            document.querySelectorAll('input[type=\"submit\"]').forEach((btn) => {\r\n              btn.value = 'Отправить';\r\n            });\r\n          });\r\n          form.style.paddingLeft = '10px';\r\n          setTimeout(() => {\r\n            document.querySelector('.modal-callback').style.display = 'none';\r\n            document.querySelector('.modal-overlay').style.display = 'none';\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.unBlockBody)();\r\n            statusMessage.textContent = '';\r\n          }, 3500);\r\n        })\r\n        .catch((error) => {\r\n          showStatus('error');\r\n        });\r\n    });\r\n  };\r\n\r\n  document.querySelectorAll('form').forEach((elem) => submitForm(elem));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst slider = () => {\r\n  const sliderBlock = document.querySelector('.top-slider'),\r\n    sliderDot = document.querySelector('.slider-dots'),\r\n    slides = document.querySelectorAll('.item'),\r\n    dots = document.querySelectorAll('.dot'),\r\n    timeInterval = 3000;\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const createDots = () => {\r\n    slides.forEach(() => {\r\n      const addedDot = document.createElement('li');\r\n      addedDot.classList.add('dot'); //\r\n      sliderDot.append(addedDot); //\r\n    });\r\n    let dots = document.querySelectorAll('.dot'); //\r\n    dots[currentSlide].classList.add('dot-active');\r\n  };\r\n\r\n  const prevSlide = (elems, index, className) => {\r\n    elems[index].classList.remove(className);\r\n  };\r\n\r\n  const nextSlide = (elems, index, className) => {\r\n    elems[index].classList.add(className);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    let dots = document.querySelectorAll('.dot');\r\n    prevSlide(slides, currentSlide, 'slide-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n    currentSlide++;\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slides, currentSlide, 'slide-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  };\r\n\r\n  const startSlide = (timer = 3000) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    let dots = document.querySelectorAll('.dot');\r\n\r\n    if (!e.target.matches('.dot, .slider-dots')) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'slide-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n\r\n    if (e.target.matches('.dot')) {\r\n      dots.forEach((elem, index) => {\r\n        if (elem === e.target) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'slide-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    'mouseenter',\r\n    (e) => {\r\n      if (e.target.matches('.dot')) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    'mouseleave',\r\n    (e) => {\r\n      if (e.target.matches('.dot')) {\r\n        startSlide(timeInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n  createDots();\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

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