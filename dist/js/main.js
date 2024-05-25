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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_up__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/up */ \"./modules/up.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mask */ \"./modules/mask.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_up__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_mask__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n  const titles = document.querySelectorAll(\".accordeon .title\");\r\n\r\n  titles.forEach((title) => {\r\n    title.addEventListener(\"click\", () => {\r\n      const currentElement = title.parentNode;\r\n      const isActive = currentElement.classList.contains(\"active\");\r\n\r\n      // закрываем элементы\r\n      document.querySelectorAll(\".accordeon .element\").forEach((element) => {\r\n        element.classList.remove(\"active\");\r\n        element.querySelector(\".element-content\").style.display = \"none\";\r\n      });\r\n\r\n      // открываем элемент если не был активен он\r\n      if (!isActive) {\r\n        currentElement.classList.add(\"active\");\r\n        currentElement.querySelector(\".element-content\").style.display =\r\n          \"block\";\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\r\n\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  const start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    const progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/mask.js":
/*!*************************!*\
  !*** ./modules/mask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mask = () => {\r\n  /* Создаем префикс +7, даже если вводят 8 или 9 */\r\n  const prefixNumber = (str) => {\r\n    /* если вводят семерку, добавляем ей скобку */\r\n    if (str === \"7\") {\r\n      return \"7 (\";\r\n    }\r\n    /* если вводят восьмерку, ставим вместо нее +7 ( */\r\n    if (str === \"8\") {\r\n      return \"+7 (\";\r\n    }\r\n    /* если пишут девятку, заменяем на +7 (9  */\r\n    if (str === \"9\") {\r\n      return \"7 (9\";\r\n    }\r\n    /* в других случаях просто 7 (  */\r\n    return \"7 (\";\r\n  }; /* профикс в любом раскладе будет +7 () */\r\n\r\n  /* Ловим события ввода в любом поле */\r\n  document.addEventListener(\"input\", (e) => {\r\n    /* Проверяем, что это поле имеет класс phone-mask */\r\n    if (e.target.classList.contains(\"phone-mask\")) {\r\n      /* поле с телефоном помещаем в переменную input */\r\n      const input = e.target;\r\n      /* вставляем плюс в начале номера */\r\n      const value = input.value.replace(/\\D+/g, \"\");\r\n      /* длинна номера 11 символов */\r\n      const numberLength = 11;\r\n\r\n      /* Создаем переменную, куда будем записывать номер */\r\n      let result;\r\n      /* Если пользователь ввел 8... */\r\n      if (input.value.includes(\"+8\") || input.value[0] === \"8\") {\r\n        /* Стираем восьмерку */\r\n        result = \"\";\r\n      } else {\r\n        /* Оставляем плюсик в поле */\r\n        result = \"+\";\r\n      }\r\n\r\n      /* Запускаем цикл, где переберем каждую цифру от 0 до 11 */\r\n      for (let i = 0; i < value.length && i < numberLength; i++) {\r\n        switch (i) {\r\n          case 0:\r\n            /* в самом начале ставим префикс +7 ( */\r\n            result += prefixNumber(value[i]);\r\n            continue;\r\n          case 4:\r\n            /* добавляем после \"+7 (\" круглую скобку \")\" */\r\n            result += \") \";\r\n            break;\r\n          case 7:\r\n            /* дефис после 7 символа */\r\n            result += \"-\";\r\n            break;\r\n          case 9:\r\n            /* еще дефис  */\r\n            result += \"-\";\r\n            break;\r\n          default:\r\n            break;\r\n        }\r\n        /* на каждом шаге цикла добавляем новую цифру к номеру */\r\n        result += value[i];\r\n      }\r\n      /* итог: номер в формате +7 (999) 123-45-67 */\r\n      input.value = result;\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);\r\n\n\n//# sourceURL=webpack:///./modules/mask.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector(\".modal-callback\");\r\n  const modalOverlay = document.querySelector(\".modal-overlay\");\r\n  const buttons = document.querySelectorAll(\".callback-btn\");\r\n  const btnServices = document.querySelector(\".button-services\");\r\n  const fancy = document.querySelectorAll(\".fancyboxModal\");\r\n\r\n  // Плавное анимирование\r\n  const animateModal = () => {\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 500,\r\n      timing(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n      draw(progress) {\r\n        modal.style.opacity = progress;\r\n        modalOverlay.style.opacity = progress;\r\n      },\r\n    });\r\n  };\r\n\r\n  // Открытие модального окна\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      modal.style.display = \"block\";\r\n      modalOverlay.style.display = \"block\";\r\n      animateModal();\r\n    });\r\n  });\r\n  // Открытие модального окна на \"Не нашли нужной услуги?\"\r\n  btnServices.addEventListener(\"click\", () => {\r\n    modal.style.display = \"block\";\r\n    modalOverlay.style.display = \"block\";\r\n\r\n    animateModal();\r\n  });\r\n\r\n  // Закрытие модального окна\r\n  document.addEventListener(\"click\", (e) => {\r\n    if (\r\n      e.target.matches(\".modal-overlay\") ||\r\n      e.target.matches(\".modal-close\")\r\n    ) {\r\n      modal.style.display = \"none\";\r\n      modalOverlay.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n  const links = document.querySelectorAll(\"ul li a\");\r\n\r\n  const scrollTo = (targetId) => {\r\n    const section = document.getElementById(targetId);\r\n    if (section) {\r\n      section.scrollIntoView({ behavior: \"smooth\" });\r\n    }\r\n  };\r\n\r\n  links.forEach((link) => {\r\n    link.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      const targetId = link.getAttribute(\"href\").substring(1);\r\n      scrollTo(targetId);\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\r\n  const form = document.querySelector(\"[name='form-callback']\");\r\n  const statusBlock = document.createElement(\"div\");\r\n  const loadText = \"Loading...\";\r\n  const errorText = \"Error!\";\r\n  const successText = \"Success!\";\r\n  const modal = document.querySelector(\".modal-callback\");\r\n  const modalOverlay = document.querySelector(\".modal-overlay\");\r\n\r\n  const sendData = (data) => {\r\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    }).then((res) => res.json());\r\n  };\r\n\r\n  form.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    const formElements = form.querySelectorAll(\".form-control\");\r\n    const valueInput = document.querySelector(\".required\");\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    if (valueInput.value === \"\") {\r\n      alert(\"Необходимо ввести номер телефона\");\r\n    } else {\r\n      statusBlock.textContent = loadText;\r\n      form.append(statusBlock);\r\n\r\n      formData.forEach((key, value) => {\r\n        formBody[value] = key;\r\n      });\r\n      sendData(formBody).then((data) => {\r\n        statusBlock.textContent = successText;\r\n        formElements.forEach((input) => {\r\n          input.value = \"\";\r\n        });\r\n\r\n        setTimeout(() => {\r\n          statusBlock.remove();\r\n        }, 2000);\r\n\r\n        setTimeout(() => {\r\n          modal.style.display = \"none\";\r\n          modalOverlay.style.display = \"none\";\r\n        }, 3000);\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  // const imgSlider = document.querySelectorAll(\".item.relative\");\r\n  // const slider = document.querySelector(\".top-slider\");\r\n  // console.log(imgSlider);\r\n  // console.log(slider);\r\n  // imgSlider.forEach((slider) => {\r\n  //   slider.addEventListener(\"click\", () => {});\r\n  // });\r\n  //\r\n  //   const slider = document.querySelector(\".top-slider\");\r\n  //   const slides = slider.querySelectorAll(\".item\");\r\n  //   let currentSlide = 0;\r\n  //   setInterval(() => {\r\n  //     slides[currentSlide].classList.remove(\"active\");\r\n  //     currentSlide = (currentSlide + 1) % slides.length;\r\n  //     slides[currentSlide].classList.add(\"active\");\r\n  //   }, 5000);\r\n  document.addEventListener(\"click\", (e) => {\r\n    console.log(e.target);\r\n  });\r\n\r\n  document.addEventListener(\"DOMContentLoaded\", function () {\r\n    const slider = document.querySelector(\".top-slider\");\r\n    const slides = slider.querySelectorAll(\".item\");\r\n    let currentSlide = 0;\r\n\r\n    setInterval(() => {\r\n      slides[currentSlide].classList.remove(\"active\");\r\n      currentSlide = (currentSlide + 1) % slides.length;\r\n      slides[currentSlide].classList.add(\"active\");\r\n    }, 1000); // Интервал переключения в миллисекундах (здесь 5000 = 5 секунд)\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/up.js":
/*!***********************!*\
  !*** ./modules/up.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst up = () => {\r\n  const arrowUp = document.querySelector(\".up\");\r\n  const secondSection = document.querySelector(\".services-section\");\r\n\r\n  arrowUp.style.display = \"none\";\r\n  // делаем скроллинг\r\n  window.addEventListener(\"scroll\", () => {\r\n    // топ второй секции\r\n    const secondSectionTop = secondSection.offsetTop;\r\n    // если скролл больше или == топу второй секции\r\n    if (window.scrollY >= secondSectionTop) {\r\n      // появляется стрелка вверх\r\n      arrowUp.style.display = \"block\";\r\n      // иначе ее вообще нет\r\n    } else {\r\n      arrowUp.style.display = \"none\";\r\n    }\r\n  });\r\n\r\n  // клик по стрелке для плавного возврата в топ.\r\n  arrowUp.addEventListener(\"click\", () => {\r\n    window.scrollTo({\r\n      top: 0,\r\n      behavior: \"smooth\",\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (up);\r\n\n\n//# sourceURL=webpack:///./modules/up.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n  const users = document.querySelectorAll('[name=\"fio\"]');\r\n  const phones = document.querySelectorAll('[name=\"tel\"]');\r\n\r\n  users.forEach((user) => {\r\n    user.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ]+/, \"\");\r\n    });\r\n  });\r\n\r\n  phones.forEach((phone) => {\r\n    phone.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^0-9\\+]+/, \"\");\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

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