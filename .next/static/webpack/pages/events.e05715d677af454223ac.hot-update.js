webpackHotUpdate_N_E("pages/events",{

/***/ "./helpers/api-util.js":
/*!*****************************!*\
  !*** ./helpers/api-util.js ***!
  \*****************************/
/*! exports provided: getAllEvents, getFeaturedEvents, getEventById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllEvents\", function() { return getAllEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeaturedEvents\", function() { return getFeaturedEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventById\", function() { return getEventById; });\n/* harmony import */ var _Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction getAllEvents() {\n  return _getAllEvents.apply(this, arguments);\n}\n\nfunction _getAllEvents() {\n  _getAllEvents = Object(_Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var response, data, events, key;\n    return _Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://meetups-869d8-default-rtdb.firebaseio.com/meetups.json\");\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context.sent;\n            events = [];\n\n            for (key in data) {\n              events.push(_objectSpread({\n                id: key\n              }, data[key]));\n            }\n\n            return _context.abrupt(\"return\", events);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getAllEvents.apply(this, arguments);\n}\n\nfunction getFeaturedEvents() {\n  return _getFeaturedEvents.apply(this, arguments);\n} // export async function getFilteredEvents(dateFilter) {\n//   const { year, month } = dateFilter;\n//   const allEvents = await getAllEvents();\n//   let filteredEvents = allEvents.filter((event) => {\n//     const eventDate = new Date(event.date);\n//     return (\n//       eventDate.getFullYear() === year && eventDate.getMonth() === month - 1\n//     );\n//   });\n//   return filteredEvents;\n// }\n\nfunction _getFeaturedEvents() {\n  _getFeaturedEvents = Object(_Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n    var allEvents;\n    return _Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return getAllEvents();\n\n          case 2:\n            allEvents = _context2.sent;\n            return _context2.abrupt(\"return\", allEvents.filter(function (event) {\n              return event.isFeatured;\n            }));\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getFeaturedEvents.apply(this, arguments);\n}\n\nfunction getEventById(_x) {\n  return _getEventById.apply(this, arguments);\n}\n\nfunction _getEventById() {\n  _getEventById = Object(_Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {\n    var allEvents;\n    return _Users_anyagapyuk_Desktop_events_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return getAllEvents();\n\n          case 2:\n            allEvents = _context3.sent;\n            return _context3.abrupt(\"return\", allEvents.find(function (event) {\n              return event.id === id;\n            }));\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _getEventById.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9hcGktdXRpbC5qcz8wN2Y0Il0sIm5hbWVzIjpbImdldEFsbEV2ZW50cyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImV2ZW50cyIsImtleSIsInB1c2giLCJpZCIsImdldEZlYXR1cmVkRXZlbnRzIiwiYWxsRXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJpc0ZlYXR1cmVkIiwiZ2V0RXZlbnRCeUlkIiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLFNBQWVBLFlBQXRCO0FBQUE7QUFBQTs7OzJTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2tCQyxLQUFLLENBQzFCLGdFQUQwQixDQUR2Qjs7QUFBQTtBQUNDQyxvQkFERDtBQUFBO0FBQUEsbUJBSWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUpkOztBQUFBO0FBSUNDLGdCQUpEO0FBTUNDLGtCQU5ELEdBTVUsRUFOVjs7QUFPTCxpQkFBV0MsR0FBWCxJQUFrQkYsSUFBbEIsRUFBd0I7QUFDdEJDLG9CQUFNLENBQUNFLElBQVA7QUFDRUMsa0JBQUUsRUFBRUY7QUFETixpQkFFS0YsSUFBSSxDQUFDRSxHQUFELENBRlQ7QUFJRDs7QUFaSSw2Q0FhRUQsTUFiRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBZ0JBLFNBQWVJLGlCQUF0QjtBQUFBO0FBQUEsQyxDQUtBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztnVEFsQk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDbUJULFlBQVksRUFEL0I7O0FBQUE7QUFDQ1UscUJBREQ7QUFBQSw4Q0FFRUEsU0FBUyxDQUFDQyxNQUFWLENBQWlCLFVBQUNDLEtBQUQ7QUFBQSxxQkFBV0EsS0FBSyxDQUFDQyxVQUFqQjtBQUFBLGFBQWpCLENBRkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQW9CQSxTQUFlQyxZQUF0QjtBQUFBO0FBQUE7OzsyU0FBTyxrQkFBNEJOLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ21CUixZQUFZLEVBRC9COztBQUFBO0FBQ0NVLHFCQUREO0FBQUEsOENBRUVBLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLFVBQUNILEtBQUQ7QUFBQSxxQkFBV0EsS0FBSyxDQUFDSixFQUFOLEtBQWFBLEVBQXhCO0FBQUEsYUFBZixDQUZGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoiLi9oZWxwZXJzL2FwaS11dGlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEV2ZW50cygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vbWVldHVwcy04NjlkOC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vbWVldHVwcy5qc29uXCJcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBjb25zdCBldmVudHMgPSBbXTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgIGlkOiBrZXksXG4gICAgICAuLi5kYXRhW2tleV0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGV2ZW50cztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZlYXR1cmVkRXZlbnRzKCkge1xuICBjb25zdCBhbGxFdmVudHMgPSBhd2FpdCBnZXRBbGxFdmVudHMoKTtcbiAgcmV0dXJuIGFsbEV2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5pc0ZlYXR1cmVkKTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbHRlcmVkRXZlbnRzKGRhdGVGaWx0ZXIpIHtcbi8vICAgY29uc3QgeyB5ZWFyLCBtb250aCB9ID0gZGF0ZUZpbHRlcjtcblxuLy8gICBjb25zdCBhbGxFdmVudHMgPSBhd2FpdCBnZXRBbGxFdmVudHMoKTtcblxuLy8gICBsZXQgZmlsdGVyZWRFdmVudHMgPSBhbGxFdmVudHMuZmlsdGVyKChldmVudCkgPT4ge1xuLy8gICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICBldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJiBldmVudERhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGggLSAxXG4vLyAgICAgKTtcbi8vICAgfSk7XG5cbi8vICAgcmV0dXJuIGZpbHRlcmVkRXZlbnRzO1xuLy8gfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXZlbnRCeUlkKGlkKSB7XG4gIGNvbnN0IGFsbEV2ZW50cyA9IGF3YWl0IGdldEFsbEV2ZW50cygpO1xuICByZXR1cm4gYWxsRXZlbnRzLmZpbmQoKGV2ZW50KSA9PiBldmVudC5pZCA9PT0gaWQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/api-util.js\n");

/***/ })

})