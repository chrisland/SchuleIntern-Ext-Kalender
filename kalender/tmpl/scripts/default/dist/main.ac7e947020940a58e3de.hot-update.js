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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"Error\", { attrs: { error: _vm.error } }),\n      _vm._v(\" \"),\n      _c(\"Spinner\", { attrs: { loading: _vm.loading } }),\n      _vm._v(\"\\n\\n\" + _vm._s(_vm.acl) + \"\\n\\n    \"),\n      _c(\"CalendarForm\", {\n        attrs: {\n          kalender: _vm.kalender,\n          calendarSelected: _vm.calendarSelected,\n          acl: _vm.acl,\n        },\n      }),\n      _vm._v(\" \"),\n      _c(\"CalendarEintrag\", {\n        attrs: { kalender: _vm.kalender, acl: _vm.acl },\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { attrs: { id: \"\" } },\n        [\n          _c(\"CalendarList\", { attrs: { kalender: _vm.kalender } }),\n          _vm._v(\" \"),\n          _c(\"Calendar\", {\n            attrs: {\n              eintraege: _vm.eintraege,\n              kalender: _vm.kalender,\n              acl: _vm.acl,\n            },\n          }),\n        ],\n        1\n      ),\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://extensions/./src/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CalendarEintrag.vue?vue&type=template&id=0c49f960&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CalendarEintrag.vue?vue&type=template&id=0c49f960& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      directives: [\n        {\n          name: \"show\",\n          rawName: \"v-show\",\n          value: _vm.modalActive,\n          expression: \"modalActive\",\n        },\n      ],\n      staticClass: \"form-modal\",\n      on: {\n        click: function ($event) {\n          if ($event.target !== $event.currentTarget) {\n            return null\n          }\n          return _vm.handlerCloseModal.apply(null, arguments)\n        },\n      },\n    },\n    [\n      _c(\"div\", { staticClass: \"form form-style-2 form-modal-content\" }, [\n        _c(\n          \"div\",\n          {\n            staticClass: \"form-modal-close\",\n            on: { click: _vm.handlerCloseModal },\n          },\n          [_c(\"i\", { staticClass: \"fa fa-times\" })]\n        ),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"text-small text-gey\" }, [\n          _vm._v(\"Datum und Uhrzeit:\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"labelDay\" }, [\n          _vm._v(\"\\n      \" + _vm._s(_vm.form.startDay) + \"\\n      \"),\n          _vm.form.endDay != \"0000-00-00\"\n            ? _c(\"span\", [_vm._v(\"bis \" + _vm._s(_vm.form.endDay))])\n            : _vm._e(),\n        ]),\n        _vm._v(\" \"),\n        _vm.form.wholeDay == false\n          ? _c(\"div\", { staticClass: \"labelTime\" }, [\n              _vm.form.startTime != \"00:00\"\n                ? _c(\"span\", [_vm._v(_vm._s(_vm.form.startTime))])\n                : _vm._e(),\n              _vm._v(\" \"),\n              _vm.form.endTime != \"00:00\"\n                ? _c(\"span\", [_vm._v(\" - \" + _vm._s(_vm.form.endTime))])\n                : _vm._e(),\n            ])\n          : _vm._e(),\n        _vm._v(\" \"),\n        _vm.form.wholeDay == true\n          ? _c(\"div\", [\n              _vm.form.startTime != \"00:00\"\n                ? _c(\"div\", { staticClass: \"labelTime\" }, [\n                    _vm._v(_vm._s(_vm.form.startTime)),\n                  ])\n                : _vm._e(),\n              _vm._v(\"\\n      Ganztägig\\n    \"),\n            ])\n          : _vm._e(),\n        _vm._v(\" \"),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"text-small text-gey\" }, [_vm._v(\"Titel:\")]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"labelDay\" }, [\n          _vm._v(_vm._s(_vm.form.title)),\n        ]),\n        _vm._v(\" \"),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"flex-row\" }, [\n          _c(\"div\", { staticClass: \"flex-1\" }, [\n            _c(\"ul\", { staticClass: \"noListStyle\" }, [\n              _vm.form.place\n                ? _c(\"li\", [\n                    _vm._m(0),\n                    _vm._v(\n                      \"\\n            \" + _vm._s(_vm.form.place) + \"\\n          \"\n                    ),\n                  ])\n                : _vm._e(),\n              _vm._v(\" \"),\n              _vm.form.comment\n                ? _c(\"li\", { staticClass: \"margin-t-m\" }, [\n                    _vm._m(1),\n                    _vm._v(\" \"),\n                    _c(\"br\"),\n                    _vm._v(\" \"),\n                    _c(\n                      \"span\",\n                      { domProps: { innerHTML: _vm._s(_vm.form.comment) } },\n                      [_vm._v(_vm._s(_vm.form.comment))]\n                    ),\n                  ])\n                : _vm._e(),\n              _vm._v(\" \"),\n              _c(\"li\", { staticClass: \"margin-t-l\" }, [\n                _c(\n                  \"div\",\n                  {\n                    staticClass: \"btn noCursor\",\n                    style: { backgroundColor: _vm.formKalender.kalenderColor },\n                  },\n                  [_vm._v(_vm._s(_vm.formKalender.kalenderName))]\n                ),\n              ]),\n            ]),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\n          \"button\",\n          {\n            directives: [\n              {\n                name: \"show\",\n                rawName: \"v-show\",\n                value: _vm.acl.write == 1,\n                expression: \"acl.write == 1\",\n              },\n            ],\n            staticClass: \"btn margin-r-s\",\n            on: { click: _vm.handlerClickEdit },\n          },\n          [_c(\"i\", { staticClass: \"fa fa-edit\" }), _vm._v(\"Bearbeiten\")]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"button\",\n          {\n            directives: [\n              {\n                name: \"show\",\n                rawName: \"v-show\",\n                value: !_vm.deleteBtn && _vm.acl.delete == 1,\n                expression: \"!deleteBtn && acl.delete == 1\",\n              },\n            ],\n            staticClass: \"btn\",\n            on: { click: _vm.handlerClickDelete },\n          },\n          [_c(\"i\", { staticClass: \"fa fa-trash\" }), _vm._v(\"Löschen\")]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"button\",\n          {\n            directives: [\n              {\n                name: \"show\",\n                rawName: \"v-show\",\n                value: _vm.deleteBtn && _vm.acl.delete == 1,\n                expression: \"deleteBtn  && acl.delete == 1\",\n              },\n            ],\n            staticClass: \"btn btn-red\",\n            on: { click: _vm.handlerClickDeleteSecond },\n          },\n          [_vm._v(\"Endgültig Entfernen!\")]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            directives: [\n              {\n                name: \"show\",\n                rawName: \"v-show\",\n                value: _vm.acl.write == 1,\n                expression: \"acl.write == 1\",\n              },\n            ],\n          },\n          [\n            _c(\"hr\"),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"text-small text-gey\" }, [\n              _c(\"b\", [_vm._v(\"Erstellt von:\")]),\n              _vm._v(\" \"),\n              _c(\"div\", [_vm._v(_vm._s(_vm.form.createdUserName))]),\n              _vm._v(\" \"),\n              _c(\"div\", [\n                _vm._v(\n                  _vm._s(_vm.form.createdTime) +\n                    \" - \" +\n                    _vm._s(_vm.form.modifiedTime)\n                ),\n              ]),\n            ]),\n          ]\n        ),\n      ]),\n    ]\n  )\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"label\", { staticClass: \"text-small text-gey\" }, [\n      _c(\"i\", { staticClass: \"fas fa-map-marker-alt margin-r-xs\" }),\n      _vm._v(\"Ort:\"),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"label\", { staticClass: \"text-small text-gey\" }, [\n      _c(\"i\", { staticClass: \"fas fa-comment margin-r-xs\" }),\n      _vm._v(\"Notiz:\"),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://extensions/./src/components/CalendarEintrag.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3495d6a669e56d011400")
/******/ })();
/******/ 
/******/ }
);