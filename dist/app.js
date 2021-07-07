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

/***/ "./assets/js/animal.js":
/*!*****************************!*\
  !*** ./assets/js/animal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Animal\": () => (/* binding */ Animal)\n/* harmony export */ });\n/* harmony import */ var _propietario_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propietario.js */ \"./assets/js/propietario.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar Animal = /*#__PURE__*/function (_Propietario) {\n  _inherits(Animal, _Propietario);\n\n  var _super = _createSuper(Animal);\n\n  function Animal(tipo, nombrePropietario, direccionPropietario, telefonoPropietario) {\n    var _this;\n\n    _classCallCheck(this, Animal);\n\n    // hereda en la clase propietario\n    _this = _super.call(this, nombrePropietario, direccionPropietario, telefonoPropietario);\n    _this.tipo = tipo;\n    return _this;\n  }\n\n  _createClass(Animal, [{\n    key: \"getTipo\",\n    value: function getTipo() {\n      return \"El tipo de animal es un : \".concat(this.tipo);\n    }\n  }]);\n\n  return Animal;\n}(_propietario_js__WEBPACK_IMPORTED_MODULE_0__.Propietario);\n\n//# sourceURL=webpack://listadeanimales/./assets/js/animal.js?");

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mascota_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mascota.js */ \"./assets/js/mascota.js\");\n\nvar formularioElement = document.getElementById(\"formulario\");\nformularioElement.addEventListener(\"submit\", function (event) {\n  event.preventDefault(); ////////////////////////////\n\n  var propietarioElement = document.querySelector(\"#propietario\");\n  var telefonoElement = document.querySelector(\"#telefono\");\n  var direccionElement = document.querySelector(\"#direccion\");\n  var nombreMascotaElement = document.querySelector(\"#nombreMascota\");\n  var tipoMascotaElement = document.querySelector(\"#tipo\");\n  var enfermedadElement = document.querySelector(\"#enfermedad\");\n  var mascota = new _mascota_js__WEBPACK_IMPORTED_MODULE_0__.Mascota(nombreMascotaElement.value, enfermedadElement.value, tipoMascotaElement.value, propietarioElement.value, direccionElement.value, telefonoElement.value);\n\n  function enviarResultado(mascota) {\n    var resultadoElement = document.querySelector(\"#resultado\");\n    resultadoElement.innerHTML = \"\\n          <ul>\\n            <li>\".concat(mascota.datosPropietario(), \"</li>\\n            <li>\").concat(mascota.getTipo(), \", mientras que el nombre de la mascota es: \").concat(mascota.nombre, \" y la enfermedad es: \").concat(mascota.enfermedad, \"</li>\\n          </ul>\\n        \");\n  }\n\n  if (propietarioElement.value == \"\" || tipoMascotaElement.value == \"\" || nombreMascotaElement.value == \"\" || enfermedadElement.value == \"\" || direccionElement.value == \"\" || telefonoElement.value == \"\") {\n    alert(\"los campos son obligatorios\");\n  } else {\n    if (tipoMascotaElement.value == \"perro\") {\n      var Perro = mascota;\n      enviarResultado(Perro);\n      return;\n    }\n\n    if (tipoMascotaElement.value == \"gato\") {\n      var gato = mascota;\n      enviarResultado(gato);\n      return;\n    }\n\n    if (tipoMascotaElement.value == \"conejo\") {\n      var conejo = mascota;\n      enviarResultado(conejo);\n      return;\n    }\n  }\n});\n\n//# sourceURL=webpack://listadeanimales/./assets/js/app.js?");

/***/ }),

/***/ "./assets/js/mascota.js":
/*!******************************!*\
  !*** ./assets/js/mascota.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mascota\": () => (/* binding */ Mascota)\n/* harmony export */ });\n/* harmony import */ var _animal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal.js */ \"./assets/js/animal.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar Mascota = /*#__PURE__*/function (_Animal) {\n  _inherits(Mascota, _Animal);\n\n  var _super = _createSuper(Mascota);\n\n  function Mascota(nombre, enfermedad, tipo, nombrePropietario, direccionPropietario, telefonoPropietario) {\n    var _this;\n\n    _classCallCheck(this, Mascota);\n\n    _this = _super.call(this, tipo, nombrePropietario, direccionPropietario, telefonoPropietario);\n    _this._nombre = nombre;\n    _this._enfermedad = enfermedad;\n    return _this;\n  }\n\n  _createClass(Mascota, [{\n    key: \"nombre\",\n    get: function get() {\n      return this._nombre;\n    },\n    set: function set(value) {\n      this._nombre = value;\n    }\n  }, {\n    key: \"enfermedad\",\n    get: function get() {\n      return this._enfermedad;\n    },\n    set: function set(value) {\n      this._enfermedad = value;\n    }\n  }]);\n\n  return Mascota;\n}(_animal_js__WEBPACK_IMPORTED_MODULE_0__.Animal);\n\n//# sourceURL=webpack://listadeanimales/./assets/js/mascota.js?");

/***/ }),

/***/ "./assets/js/propietario.js":
/*!**********************************!*\
  !*** ./assets/js/propietario.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Propietario\": () => (/* binding */ Propietario)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Propietario = /*#__PURE__*/function () {\n  function Propietario(nombre, direccion, telefono) {\n    _classCallCheck(this, Propietario);\n\n    this.nombrePropietario = nombre;\n    this.direccion = direccion;\n    this.telefono = telefono;\n  }\n\n  _createClass(Propietario, [{\n    key: \"datosPropietario\",\n    value: function datosPropietario() {\n      return \"El nombre del propietario es \".concat(this.nombrePropietario, \", su direcci\\xF3n es: \").concat(this.direccion, \" y su telefono es \").concat(this.telefono);\n    }\n  }]);\n\n  return Propietario;\n}();\n\n//# sourceURL=webpack://listadeanimales/./assets/js/propietario.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/app.js");
/******/ 	
/******/ })()
;