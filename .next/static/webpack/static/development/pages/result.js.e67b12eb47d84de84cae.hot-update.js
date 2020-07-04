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
  }), Math.round(wind * 3.6), " mph")), __jsx(_Forecast__WEBPACK_IMPORTED_MODULE_1__["Block"], {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZWxlc3MudHN4Il0sIm5hbWVzIjpbIlN2Z0NvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlVzZWxlc3MiLCJ3aW5kIiwic3Vuc2V0Iiwic3VucmlzZSIsImdldEl0ZW1zIiwic3VucmlzZUhvdXIiLCJob3VyIiwic3VucmlzZU1pbnV0ZSIsIm1pbiIsInN1bnNldEhvdXIiLCJzdW5zZXRNaW51dGUiLCJzdW5yaXNlVGltZSIsIkhvdXJDb252ZXJ0ZXIiLCJzdW5zZXRUaW1lIiwiTWF0aCIsInJvdW5kIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEpBQWxCO0tBQU1GLFk7O0FBZWIsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBK0I7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDT0Msb0VBQVEsQ0FBQ0QsT0FBRCxDQURmO0FBQUEsTUFDN0JFLFdBRDZCLGFBQ25DQyxJQURtQztBQUFBLE1BQ1hDLGFBRFcsYUFDaEJDLEdBRGdCOztBQUFBLG1CQUVLSixvRUFBUSxDQUFDRixNQUFELENBRmI7QUFBQSxNQUU3Qk8sVUFGNkIsY0FFbkNILElBRm1DO0FBQUEsTUFFWkksWUFGWSxjQUVqQkYsR0FGaUI7O0FBSTNDLE1BQU1HLFdBQVcsYUFBTUMsYUFBYSxDQUFDUCxXQUFELENBQW5CLGNBQW9DTyxhQUFhLENBQUNMLGFBQUQsQ0FBakQsQ0FBakI7QUFDQSxNQUFNTSxVQUFVLGFBQU1ELGFBQWEsQ0FBQ0gsVUFBRCxDQUFuQixjQUFtQ0csYUFBYSxDQUFDRixZQUFELENBQWhELENBQWhCO0FBQ0EsU0FDSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFFSSxNQUFDLHVEQUFEO0FBQUssUUFBSSxFQUFDLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0tJLElBQUksQ0FBQ0MsS0FBTCxDQUFXZCxJQUFJLEdBQUcsR0FBbEIsQ0FITCxTQURKLENBREosRUFRSSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFSSxNQUFDLHVEQUFEO0FBQUssUUFBSSxFQUFDLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0tVLFdBSEwsUUFESixDQVJKLEVBZUksTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFSSxNQUFDLHVEQUFEO0FBQUssUUFBSSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0tFLFVBSEwsUUFESixDQWZKLENBREo7QUF5QkgsQ0EvQkQ7O01BQU1iLE87O0FBZ0NOLElBQU1ZLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0ksSUFBRCxFQUFVO0FBQzVCLE1BQUlBLElBQUksR0FBRyxFQUFYLEVBQWUsa0JBQVdBLElBQVgsRUFBZixLQUNLLE9BQU9BLElBQVA7QUFDUixDQUhEOztNQUFNSixhO0FBS1NaLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZXN1bHQuanMuZTY3YjEyZWI0N2Q4NGRlODRjYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQmxvY2ssIENvbnRhaW5lciB9IGZyb20gXCIuL0ZvcmVjYXN0XCI7XHJcbmltcG9ydCBnZXRJdGVtcyBmcm9tIFwiLi4vY3VzdG9tRi9Db252ZXJ0RGF0ZVwiO1xyXG5pbXBvcnQgU1ZHIGZyb20gXCIuLi9zdGF0aWMvc3ZnL3N2Z1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5leHBvcnQgY29uc3QgU3ZnQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgKiB7XHJcbiAgICAgICAgbWFyZ2luOiAycHggNXB4O1xyXG4gICAgfVxyXG4gICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IFVzZWxlc3MgPSAoeyB3aW5kLCBzdW5zZXQsIHN1bnJpc2UgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBob3VyOiBzdW5yaXNlSG91ciwgbWluOiBzdW5yaXNlTWludXRlIH0gPSBnZXRJdGVtcyhzdW5yaXNlKTtcclxuICAgIGNvbnN0IHsgaG91cjogc3Vuc2V0SG91ciwgbWluOiBzdW5zZXRNaW51dGUgfSA9IGdldEl0ZW1zKHN1bnNldCk7XHJcblxyXG4gICAgY29uc3Qgc3VucmlzZVRpbWUgPSBgJHtIb3VyQ29udmVydGVyKHN1bnJpc2VIb3VyKX06JHtIb3VyQ29udmVydGVyKHN1bnJpc2VNaW51dGUpfWA7XHJcbiAgICBjb25zdCBzdW5zZXRUaW1lID0gYCR7SG91ckNvbnZlcnRlcihzdW5zZXRIb3VyKX06JHtIb3VyQ29udmVydGVyKHN1bnNldE1pbnV0ZSl9YDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgPFN2Z0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICBXaW5kIHN0cmVuZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgPFNWRyB0eXBlPVwid2luZEljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKHdpbmQgKiAzLjYpfSBtcGhcclxuICAgICAgICAgICAgICAgIDwvU3ZnQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0Jsb2NrPlxyXG4gICAgICAgICAgICA8QmxvY2s+XHJcbiAgICAgICAgICAgICAgICA8U3ZnQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1bnJpc2VcclxuICAgICAgICAgICAgICAgICAgICA8U1ZHIHR5cGU9XCJzdW5yaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7c3VucmlzZVRpbWV9IGFtXHJcbiAgICAgICAgICAgICAgICA8L1N2Z0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9CbG9jaz5cclxuICAgICAgICAgICAgPEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgPFN2Z0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICBTdW5zZXRcclxuICAgICAgICAgICAgICAgICAgICA8U1ZHIHR5cGU9XCJzdW5zZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdW5zZXRUaW1lfSBhbVxyXG4gICAgICAgICAgICAgICAgPC9TdmdDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQmxvY2s+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5jb25zdCBIb3VyQ29udmVydGVyID0gKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtIDwgMTApIHJldHVybiBgMCR7aXRlbX1gO1xyXG4gICAgZWxzZSByZXR1cm4gaXRlbTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZWxlc3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=