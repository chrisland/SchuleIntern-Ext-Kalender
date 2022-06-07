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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"Error\", { attrs: { error: _vm.error } }),\n      _vm._v(\" \"),\n      _c(\"Spinner\", { attrs: { loading: _vm.loading } }),\n      _vm._v(\" \"),\n      _c(\"button\", { staticClass: \"si-btn\", on: { click: _vm.handlerAdd } }, [\n        _c(\"i\", { staticClass: \"fa fa-plus\" }),\n        _vm._v(\" Neuer Kalender\"),\n      ]),\n      _vm._v(\" \"),\n      _vm.list.length > 0\n        ? _c(\"div\", { staticClass: \"list\" }, [\n            _c(\"table\", { staticClass: \"si-table\" }, [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\n                \"tbody\",\n                _vm._l(_vm.list, function (item, index) {\n                  return _c(\"tr\", { key: index }, [\n                    _c(\"td\", [\n                      _c(\"input\", {\n                        directives: [\n                          {\n                            name: \"model\",\n                            rawName: \"v-model\",\n                            value: item.title,\n                            expression: \"item.title\",\n                          },\n                        ],\n                        attrs: { type: \"text\" },\n                        domProps: { value: item.title },\n                        on: {\n                          input: function ($event) {\n                            if ($event.target.composing) {\n                              return\n                            }\n                            _vm.$set(item, \"title\", $event.target.value)\n                          },\n                        },\n                      }),\n                      _vm._v(_vm._s(item.title)),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"td\", [_vm._v(_vm._s(item.color))]),\n                    _vm._v(\" \"),\n                    _c(\"td\", [_vm._v(_vm._s(item.sort))]),\n                    _vm._v(\" \"),\n                    _c(\"td\", [_vm._v(_vm._s(item.preSelect))]),\n                    _vm._v(\" \"),\n                    _c(\"td\", [_vm._v(_vm._s(item.ferien))]),\n                    _vm._v(\" \"),\n                    _c(\"td\", [_vm._v(_vm._s(item.public))]),\n                    _vm._v(\" \"),\n                    _c(\"td\", [_vm._v(_vm._s(item.state))]),\n                  ])\n                }),\n                0\n              ),\n            ]),\n          ])\n        : _vm._e(),\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"thead\", [\n      _c(\"tr\", [\n        _c(\"td\", [_vm._v(\"Title\")]),\n        _vm._v(\" \"),\n        _c(\"td\", [_vm._v(\"Farbe\")]),\n        _vm._v(\" \"),\n        _c(\"td\", [_vm._v(\"Sortierung\")]),\n        _vm._v(\" \"),\n        _c(\"td\", [_vm._v(\"Vorausgewählt\")]),\n        _vm._v(\" \"),\n        _c(\"td\", [_vm._v(\"Ferien\")]),\n        _vm._v(\" \"),\n        _c(\"td\", [_vm._v(\"Veröffentlichen (ICS)\")]),\n        _vm._v(\" \"),\n        _c(\"td\", [_vm._v(\"Status\")]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://extensions/./src/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("03b07d69385a95b83a50")
/******/ })();
/******/ 
/******/ }
);