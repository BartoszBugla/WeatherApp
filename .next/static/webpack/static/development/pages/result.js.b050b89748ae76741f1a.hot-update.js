webpackHotUpdate("static\\development\\pages\\result.js",{

/***/ "./components/Useless.tsx":
/*!********************************!*\
  !*** ./components/Useless.tsx ***!
  \********************************/
/*! exports provided: SvgContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgContainer", function() { return SvgContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forecast */ "./components/Forecast.tsx");
/* harmony import */ var _customF_ConvertDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customF/ConvertDate */ "./customF/ConvertDate.js");
/* harmony import */ var _static_svg_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/svg/svg */ "./static/svg/svg.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\weatherApp\\components\\Useless.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SvgContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Useless__SvgContainer",
  componentId: "sc-1ln5oi6-0"
})(["display:flex;flex-direction:column;align-items:center;text-align:center;font-size:1.2rem;*{margin:2px 5px;}svg{height:75px;width:75px;fill:white;}"]);
_c = SvgContainer;

var Useless = function Useless(_ref) {
  var wind = _ref.wind,
      sunset = _ref.sunset,
      sunrise = _ref.sunrise;

  var _getItems = Object(_customF_ConvertDate__WEBPACK_IMPORTED_MODULE_2__["default"])(sunrise),
      sunriseHour = _getItems.hour,
      sunriseMinute = _getItems.min;

  var _getItems2 = Object(_customF_ConvertDate__WEBPACK_IMPORTED_MODULE_2__["default"])(sunset),
      sunsetHour = _getItems2.hour,
      sunsetMinute = _getItems2.min;

  var sunriseTime = "".concat(HourConverter(sunriseHour), ":").concat(HourConverter(sunriseMinute));
  var sunsetTime = "".concat(HourConverter(sunsetHour), ":").concat(HourConverter(sunsetMinute));
  return __jsx(_Forecast__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_Forecast__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(SvgContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Wind strenght", __jsx(_static_svg_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "windIcon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }), wind * 3.6, " mph")), __jsx(_Forecast__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(SvgContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Sunrise", __jsx(_static_svg_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "sunrise",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), sunriseTime, " am")), __jsx(_Forecast__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(SvgContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Sunset", __jsx(_static_svg_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "sunset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), sunsetTime, " am")));
};

_c2 = Useless;

var HourConverter = function HourConverter(item) {
  if (item < 10) return "0".concat(item);else return item;
};

_c3 = HourConverter;
/* harmony default export */ __webpack_exports__["default"] = (Useless);

var _c, _c2, _c3;

$RefreshReg$(_c, "SvgContainer");
$RefreshReg$(_c2, "Useless");
$RefreshReg$(_c3, "HourConverter");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZWxlc3MudHN4Il0sIm5hbWVzIjpbIlN2Z0NvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlVzZWxlc3MiLCJ3aW5kIiwic3Vuc2V0Iiwic3VucmlzZSIsImdldEl0ZW1zIiwic3VucmlzZUhvdXIiLCJob3VyIiwic3VucmlzZU1pbnV0ZSIsIm1pbiIsInN1bnNldEhvdXIiLCJzdW5zZXRNaW51dGUiLCJzdW5yaXNlVGltZSIsIkhvdXJDb252ZXJ0ZXIiLCJzdW5zZXRUaW1lIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEpBQWxCO0tBQU1GLFk7O0FBZWIsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBK0I7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDT0Msb0VBQVEsQ0FBQ0QsT0FBRCxDQURmO0FBQUEsTUFDN0JFLFdBRDZCLGFBQ25DQyxJQURtQztBQUFBLE1BQ1hDLGFBRFcsYUFDaEJDLEdBRGdCOztBQUFBLG1CQUVLSixvRUFBUSxDQUFDRixNQUFELENBRmI7QUFBQSxNQUU3Qk8sVUFGNkIsY0FFbkNILElBRm1DO0FBQUEsTUFFWkksWUFGWSxjQUVqQkYsR0FGaUI7O0FBSTNDLE1BQU1HLFdBQVcsYUFBTUMsYUFBYSxDQUFDUCxXQUFELENBQW5CLGNBQW9DTyxhQUFhLENBQUNMLGFBQUQsQ0FBakQsQ0FBakI7QUFDQSxNQUFNTSxVQUFVLGFBQU1ELGFBQWEsQ0FBQ0gsVUFBRCxDQUFuQixjQUFtQ0csYUFBYSxDQUFDRixZQUFELENBQWhELENBQWhCO0FBQ0EsU0FDSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFFSSxNQUFDLHVEQUFEO0FBQUssUUFBSSxFQUFDLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0tULElBQUksR0FBRyxHQUhaLFNBREosQ0FESixFQVFJLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUVJLE1BQUMsdURBQUQ7QUFBSyxRQUFJLEVBQUMsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHS1UsV0FITCxRQURKLENBUkosRUFlSSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVJLE1BQUMsdURBQUQ7QUFBSyxRQUFJLEVBQUMsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHS0UsVUFITCxRQURKLENBZkosQ0FESjtBQXlCSCxDQS9CRDs7TUFBTWIsTzs7QUFnQ04sSUFBTVksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRSxJQUFELEVBQVU7QUFDNUIsTUFBSUEsSUFBSSxHQUFHLEVBQVgsRUFBZSxrQkFBV0EsSUFBWCxFQUFmLEtBQ0ssT0FBT0EsSUFBUDtBQUNSLENBSEQ7O01BQU1GLGE7QUFLU1osc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJlc3VsdC5qcy5iMDUwYjg5NzQ4YWU3Njc0MWYxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCbG9jaywgQ29udGFpbmVyIH0gZnJvbSBcIi4vRm9yZWNhc3RcIjtcclxuaW1wb3J0IGdldEl0ZW1zIGZyb20gXCIuLi9jdXN0b21GL0NvbnZlcnREYXRlXCI7XHJcbmltcG9ydCBTVkcgZnJvbSBcIi4uL3N0YXRpYy9zdmcvc3ZnXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmV4cG9ydCBjb25zdCBTdmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDJweCA1cHg7XHJcbiAgICB9XHJcbiAgICBzdmcge1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgIH1cclxuYDtcclxuY29uc3QgVXNlbGVzcyA9ICh7IHdpbmQsIHN1bnNldCwgc3VucmlzZSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGhvdXI6IHN1bnJpc2VIb3VyLCBtaW46IHN1bnJpc2VNaW51dGUgfSA9IGdldEl0ZW1zKHN1bnJpc2UpO1xyXG4gICAgY29uc3QgeyBob3VyOiBzdW5zZXRIb3VyLCBtaW46IHN1bnNldE1pbnV0ZSB9ID0gZ2V0SXRlbXMoc3Vuc2V0KTtcclxuXHJcbiAgICBjb25zdCBzdW5yaXNlVGltZSA9IGAke0hvdXJDb252ZXJ0ZXIoc3VucmlzZUhvdXIpfToke0hvdXJDb252ZXJ0ZXIoc3VucmlzZU1pbnV0ZSl9YDtcclxuICAgIGNvbnN0IHN1bnNldFRpbWUgPSBgJHtIb3VyQ29udmVydGVyKHN1bnNldEhvdXIpfToke0hvdXJDb252ZXJ0ZXIoc3Vuc2V0TWludXRlKX1gO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8QmxvY2s+XHJcbiAgICAgICAgICAgICAgICA8U3ZnQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIFdpbmQgc3RyZW5naHRcclxuICAgICAgICAgICAgICAgICAgICA8U1ZHIHR5cGU9XCJ3aW5kSWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3dpbmQgKiAzLjZ9IG1waFxyXG4gICAgICAgICAgICAgICAgPC9TdmdDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQmxvY2s+XHJcbiAgICAgICAgICAgIDxCbG9jaz5cclxuICAgICAgICAgICAgICAgIDxTdmdDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VucmlzZVxyXG4gICAgICAgICAgICAgICAgICAgIDxTVkcgdHlwZT1cInN1bnJpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdW5yaXNlVGltZX0gYW1cclxuICAgICAgICAgICAgICAgIDwvU3ZnQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0Jsb2NrPlxyXG4gICAgICAgICAgICA8QmxvY2s+XHJcbiAgICAgICAgICAgICAgICA8U3ZnQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1bnNldFxyXG4gICAgICAgICAgICAgICAgICAgIDxTVkcgdHlwZT1cInN1bnNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1bnNldFRpbWV9IGFtXHJcbiAgICAgICAgICAgICAgICA8L1N2Z0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9CbG9jaz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcbmNvbnN0IEhvdXJDb252ZXJ0ZXIgPSAoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0gPCAxMCkgcmV0dXJuIGAwJHtpdGVtfWA7XHJcbiAgICBlbHNlIHJldHVybiBpdGVtO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlbGVzcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==