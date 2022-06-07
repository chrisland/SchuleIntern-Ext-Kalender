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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CalendarList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CalendarList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'Calendarlist',\n  props: {\n    kalender: Array\n  },\n  data: function data() {\n    return {\n      selected: []\n    };\n  },\n  created: function created() {\n    var that = this;\n    EventBus.$on('list--preselected', function (data) {\n      if (data.selected[0]) {\n        that.selected = data.selected;\n      }\n    });\n  },\n  computed: {},\n  methods: {\n    checkAcl: function checkAcl(acl) {\n      //console.log(acl);\n      if (acl && acl) {\n        if (parseInt(acl.read) != 1) {\n          return false;\n        }\n      }\n\n      return true;\n    },\n    styleButton: function styleButton(kalenderID, kalenderColor) {\n      if (this.selected.indexOf(parseInt(kalenderID)) > -1) {\n        return {\n          backgroundColor: kalenderColor\n        };\n      } else {\n        return {\n          borderLeft: '5px solid ' + kalenderColor\n        };\n      }\n    },\n    // activeKalender: function (kalenderID) {\n    //   if(this.selected.indexOf(parseInt(kalenderID)) > -1) {\n    //     return true;\n    //   } \n    //   return false;\n    // },\n    handlerClickKalender: function handlerClickKalender(kalenderID) {\n      kalenderID = parseInt(kalenderID);\n\n      if (kalenderID) {\n        var index = this.selected.indexOf(kalenderID);\n\n        if (index > -1) {\n          this.selected.splice(index, 1);\n        } else {\n          this.selected.push(kalenderID);\n        }\n      }\n\n      EventBus.$emit('list--selected', {\n        'selected': this.selected\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://extensions/./src/components/CalendarList.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bc25018a32c1d8e46578")
/******/ })();
/******/ 
/******/ }
);