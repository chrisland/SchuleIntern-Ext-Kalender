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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Calendar.vue?vue&type=template&id=12cb4c6e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Calendar.vue?vue&type=template&id=12cb4c6e& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"si-calendar\" }, [\n    _c(\"div\", { staticClass: \"si-calendar-header\" }, [\n      _c(\n        \"button\",\n        {\n          staticClass: \"si-btn chevron-left margin-r-xs\",\n          on: { click: _vm.prevMonth },\n        },\n        [_c(\"i\", { staticClass: \"fa fa-arrow-left\" }), _vm._v(\"Vor\\n      \")]\n      ),\n      _vm._v(\" \"),\n      _c(\"button\", { staticClass: \"si-btn\", on: { click: _vm.gotoToday } }, [\n        _c(\"i\", { staticClass: \"fa fa-home\" }),\n        _vm._v(\"Heute\\n      \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"h3\", [_vm._v(_vm._s(_vm._f(\"moment\")(_vm.openMonth, \"MMMM YYYY\")))]),\n      _vm._v(\" \"),\n      _c(\n        \"button\",\n        { staticClass: \"si-btn chevron-right\", on: { click: _vm.nextMonth } },\n        [\n          _vm._v(\"\\n         Weiter\"),\n          _c(\"i\", { staticClass: \"fa fa-arrow-right\" }),\n        ]\n      ),\n    ]),\n    _vm._v(\" \"),\n    _c(\"table\", { staticClass: \"si-table\" }, [\n      _c(\"thead\", [\n        _c(\n          \"tr\",\n          [\n            _c(\"td\", { staticClass: \"labelKW\" }),\n            _vm._v(\" \"),\n            _vm._l(_vm.days, function (item, index) {\n              return _c(\"td\", { key: index, staticClass: \"day\" }, [\n                _vm._v(\"\\n          \" + _vm._s(item) + \"\\n        \"),\n              ])\n            }),\n          ],\n          2\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"tbody\",\n        _vm._l(_vm.weekInMonthFormat, function (week, a) {\n          return _c(\n            \"tr\",\n            { key: a },\n            [\n              _c(\"td\", { staticClass: \"labelKW\" }, [\n                _c(\"span\", { staticClass: \"text-small\" }, [_vm._v(\"KW\")]),\n                _c(\"br\"),\n                _vm._v(_vm._s(_vm.kwInMonth(week)) + \"\\n        \"),\n              ]),\n              _vm._v(\" \"),\n              _vm._l(_vm.daysInWeekFormat(week), function (day, i) {\n                return _c(\n                  \"td\",\n                  {\n                    key: i,\n                    staticClass: \"day\",\n                    class: { \"bg-orange\": day[1] == _vm.getToday },\n                    on: {\n                      dblclick: function ($event) {\n                        if ($event.target !== $event.currentTarget) {\n                          return null\n                        }\n                        return _vm.handlerClickAdd(day[1])\n                      },\n                    },\n                  },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass: \"dayLabel\",\n                        on: {\n                          dblclick: function ($event) {\n                            if ($event.target !== $event.currentTarget) {\n                              return null\n                            }\n                            return _vm.handlerClickAdd(day[1])\n                          },\n                        },\n                      },\n                      [_vm._v(_vm._s(_vm._f(\"moment\")(day[1], \"Do\")))]\n                    ),\n                    _vm._v(\" \"),\n                    _vm._l(_vm.getEintrag(day), function (eintrag, j) {\n                      return _c(\n                        \"div\",\n                        {\n                          key: j,\n                          staticClass: \"eintrag\",\n                          class: {\n                            \"eintrag-multiple\": _vm.styleMultipe(eintrag),\n                          },\n                          style: _vm.styleEintrag(eintrag, day[1]),\n                          on: {\n                            click: function ($event) {\n                              return _vm.handlerClickEintrag(eintrag)\n                            },\n                            mouseover: function ($event) {\n                              return _vm.handlerMouseoverEintrag($event)\n                            },\n                            mouseleave: function ($event) {\n                              return _vm.handlerMouseleaveEintrag($event)\n                            },\n                          },\n                        },\n                        [\n                          _c(\"div\", { staticClass: \"date\" }, [\n                            _c(\"strong\", [\n                              eintrag.startTime != \"00:00\"\n                                ? _c(\"span\", [\n                                    _vm._v(\n                                      \"\\n                  \" +\n                                        _vm._s(eintrag.startTime) +\n                                        \"\\n                \"\n                                    ),\n                                  ])\n                                : _vm._e(),\n                              _vm._v(\" \"),\n                              eintrag.endTime != \"00:00\" &&\n                              eintrag.wholeDay == false\n                                ? _c(\"span\", [\n                                    _vm._v(\n                                      \"\\n                  - \" +\n                                        _vm._s(eintrag.endTime) +\n                                        \"\\n                \"\n                                    ),\n                                  ])\n                                : _vm._e(),\n                            ]),\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\"div\", { staticClass: \"title\" }, [\n                            _vm._v(_vm._s(eintrag.title)),\n                          ]),\n                          _vm._v(\" \"),\n                          eintrag.place || eintrag.comment\n                            ? _c(\n                                \"div\",\n                                {\n                                  staticClass:\n                                    \"info margin-t-s flex-row text-gey text-small\",\n                                },\n                                [\n                                  eintrag.place\n                                    ? _c(\"div\", { staticClass: \"flex-1\" }, [\n                                        _c(\"i\", {\n                                          staticClass:\n                                            \"fas fa-map-marker-alt margin-r-xs\",\n                                        }),\n                                        _vm._v(\" \" + _vm._s(eintrag.place)),\n                                      ])\n                                    : _vm._e(),\n                                  _vm._v(\" \"),\n                                  eintrag.comment\n                                    ? _c(\"div\", { staticClass: \"margin-t-s\" }, [\n                                        _c(\"i\", {\n                                          staticClass: \"fas fa-comment\",\n                                        }),\n                                        _vm._v(\" \" + _vm._s(eintrag.comment)),\n                                      ])\n                                    : _vm._e(),\n                                ]\n                              )\n                            : _vm._e(),\n                        ]\n                      )\n                    }),\n                  ],\n                  2\n                )\n              }),\n            ],\n            2\n          )\n        }),\n        0\n      ),\n    ]),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://extensions/./src/components/Calendar.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7dc35f2a9c98e688f314")
/******/ })();
/******/ 
/******/ }
);