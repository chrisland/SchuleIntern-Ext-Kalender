"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateextensions"]("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mixins_Error_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/Error.vue */ \"./src/mixins/Error.vue\");\n/* harmony import */ var _mixins_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/Spinner.vue */ \"./src/mixins/Spinner.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar axios = (__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")[\"default\"]);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    Error: _mixins_Error_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Spinner: _mixins_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data: function data() {\n    return {\n      selfURL: globals.selfURL,\n      error: false,\n      loading: false,\n      list: []\n    };\n  },\n  created: function created() {},\n  mounted: function mounted() {},\n  methods: {}\n});\n\n//# sourceURL=webpack://extensions/./src/App.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"Error\", { attrs: { error: _vm.error } }),\n      _vm._v(\" \"),\n      _c(\"Spinner\", { attrs: { loading: _vm.loading } }),\n      _vm._v(\" \"),\n      _vm.data.length > 0\n        ? _c(\"div\", { staticClass: \"list\" }, [\n            _c(\"table\", { staticClass: \"si-table\" }, [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\n                \"tbody\",\n                _vm._l(_vm.data, function (item, index) {\n                  return _c(\"tr\", { key: index }, [\n                    _c(\"td\"),\n                    _vm._v(\" \"),\n                    _c(\"td\", [_vm._v(_vm._s(item.einheiten))]),\n                    _vm._v(\" \"),\n                    _c(\n                      \"td\",\n                      [\n                        item.user\n                          ? _c(\"User\", {\n                              attrs: { data: item.user, size: \"line\" },\n                            })\n                          : _vm._e(),\n                      ],\n                      1\n                    ),\n                    _vm._v(\" \"),\n                    _c(\"td\", [_vm._v(_vm._s(item.info))]),\n                    _vm._v(\" \"),\n                    _c(\"td\", [_vm._v(_vm._s(item.timeCreated))]),\n                    _vm._v(\" \"),\n                    _c(\"td\", [\n                      item.status == \"reserve\"\n                        ? _c(\n                            \"button\",\n                            {\n                              staticClass: \"si-btn si-btn-light\",\n                              on: {\n                                click: function ($event) {\n                                  return _vm.handlerClose(item)\n                                },\n                              },\n                            },\n                            [\n                              _c(\"i\", { staticClass: \"fas fa-power-off\" }),\n                              _vm._v(\"Abbrechen\"),\n                            ]\n                          )\n                        : _vm._e(),\n                    ]),\n                  ])\n                }),\n                0\n              ),\n            ]),\n          ])\n        : _vm._e(),\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"thead\", [\n      _c(\"tr\", [\n        _c(\"td\", [_vm._v(\"Status\")]),\n        _vm._v(\" \"),\n        _c(\"td\", [_vm._v(\"Einheiten\")]),\n        _vm._v(\" \"),\n        _c(\"td\", [_vm._v(\"Schueler\")]),\n        _vm._v(\" \"),\n        _c(\"td\", [_vm._v(\"Info\")]),\n        _vm._v(\" \"),\n        _c(\"td\", [_vm._v(\"Erstellt\")]),\n        _vm._v(\" \"),\n        _c(\"td\"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://extensions/./src/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8de29a97d65876222f48")
/******/ })();
/******/ 
/******/ }
);