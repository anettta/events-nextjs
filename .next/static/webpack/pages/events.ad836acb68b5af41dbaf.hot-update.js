webpackHotUpdate_N_E("pages/events",{

/***/ "./pages/events/index.js":
/*!*******************************!*\
  !*** ./pages/events/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AllEvents; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _components_events_events_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/events-search */ \"./components/events/events-search.js\");\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n\n\nvar _jsxFileName = \"/Users/anyagapyuk/Desktop/next/pages/events/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AllEvents() {\n  _s();\n\n  var events = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_5__[\"getAllEvents\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  function findEventsHandler(year, month) {\n    var fullPath = \"/events/\".concat(year, \"/\").concat(month);\n    router.push(fullPath);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_events_search__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onSearch: findEventsHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      items: events\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AllEvents, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = AllEvents;\n\nvar _c;\n\n$RefreshReg$(_c, \"AllEvents\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL2luZGV4LmpzP2FjZTMiXSwibmFtZXMiOlsiQWxsRXZlbnRzIiwiZXZlbnRzIiwiZ2V0QWxsRXZlbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmluZEV2ZW50c0hhbmRsZXIiLCJ5ZWFyIiwibW9udGgiLCJmdWxsUGF0aCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUNsQyxNQUFNQyxNQUFNLEdBQUdDLGdFQUFZLEVBQTNCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxXQUFTQyxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUNDLEtBQWpDLEVBQXdDO0FBQ3RDLFFBQU1DLFFBQVEscUJBQWNGLElBQWQsY0FBc0JDLEtBQXRCLENBQWQ7QUFFQUosVUFBTSxDQUFDTSxJQUFQLENBQVlELFFBQVo7QUFDRDs7QUFDRCxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLHdFQUFEO0FBQWMsY0FBUSxFQUFFSDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxxRUFBRDtBQUFXLFdBQUssRUFBRUo7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBZHVCRCxTO1VBRVBJLHFEOzs7S0FGT0osUyIsImZpbGUiOiIuL3BhZ2VzL2V2ZW50cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0XCI7XG5pbXBvcnQgRXZlbnRzU2VhcmNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudHMtc2VhcmNoXCI7XG5pbXBvcnQgeyBnZXRBbGxFdmVudHMgfSBmcm9tIFwiLi4vLi4vZHVtbXktZGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGxFdmVudHMoKSB7XG4gIGNvbnN0IGV2ZW50cyA9IGdldEFsbEV2ZW50cygpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgZnVuY3Rpb24gZmluZEV2ZW50c0hhbmRsZXIoeWVhciwgbW9udGgpIHtcbiAgICBjb25zdCBmdWxsUGF0aCA9IGAvZXZlbnRzLyR7eWVhcn0vJHttb250aH1gO1xuXG4gICAgcm91dGVyLnB1c2goZnVsbFBhdGgpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEV2ZW50c1NlYXJjaCBvblNlYXJjaD17ZmluZEV2ZW50c0hhbmRsZXJ9IC8+XG4gICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtldmVudHN9IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/index.js\n");

/***/ })

})