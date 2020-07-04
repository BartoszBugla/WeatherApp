module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Forecast.tsx":
/*!*********************************!*\
  !*** ./components/Forecast.tsx ***!
  \*********************************/
/*! exports provided: Container, Block, SvgContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgContainer", function() { return SvgContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _customF_ConvertSkies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customF/ConvertSkies */ "./customF/ConvertSkies.js");
/* harmony import */ var _static_svg_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/svg/svg */ "./static/svg/svg.js");
/* harmony import */ var _customF_ConvertDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customF/ConvertDate */ "./customF/ConvertDate.js");
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\weatherApp\\components\\Forecast.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Forecast__Container",
  componentId: "sc-17es5hb-0"
})(["display:flex;flex-direction:row;margin-top:50px;flex-wrap:wrap;align-items:center;justify-content:center;"]);
const Block = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Forecast__Block",
  componentId: "sc-17es5hb-1"
})(["width:160px;height:160px;", " display:flex;flex-direction:column;align-items:center;justify-content:center;margin:3px;border-radius:10px;", ""], props => props.border ? "border:solid 1px white;" : "", props => {
  if (props.colors) {
    if (props.colors[2]) return `background: linear-gradient(180deg, ${props.colors[0]} 0%, ${props.colors[1]} 50.52%, ${props.colors[2]} 100%);`;else return `background: linear-gradient(180deg, ${props.colors[0]} 0%,  ${props.colors[1]} 100%);`;
  }
});
const Temp = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Forecast__Temp",
  componentId: "sc-17es5hb-2"
})(["font-size:2.5rem;"]);
const SvgContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Forecast__SvgContainer",
  componentId: "sc-17es5hb-3"
})(["display:flex;flex-direction:column;align-items:center;text-align:center;*{margin:2px 5px;}svg{height:40px;width:40px;fill:white;}"]);

const Forecast = ({
  forecast = []
}) => {
  const items = forecast.map((item, index) => {
    const sky = item.weather[0].description;
    const temperature = Math.round(item.temp.day - 273.15);
    const {
      colors,
      name,
      icon
    } = Object(_customF_ConvertSkies__WEBPACK_IMPORTED_MODULE_2__["default"])(sky, temperature);
    const {
      weekday
    } = Object(_customF_ConvertDate__WEBPACK_IMPORTED_MODULE_4__["default"])(item.dt);
    return __jsx(Block, {
      border: true,
      key: index,
      colors: colors,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, weekday), __jsx(Temp, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, temperature, "\xB0"), __jsx(SvgContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx(_static_svg_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }), __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }, sky)));
  });
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 12
    }
  }, items);
};

/* harmony default export */ __webpack_exports__["default"] = (Forecast);

/***/ }),

/***/ "./components/Menu.tsx":
/*!*****************************!*\
  !*** ./components/Menu.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\weatherApp\\components\\Menu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
  displayName: "Menu__Nav",
  componentId: "sc-222not-0"
})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;color:#bc5a5a;list-style:none;font-size:1.4rem;*{padding:2px 10px;}li{&:hover{background-color:#bc5a5a;color:white;box-shadow:0px 0px 5px rgba(0,0,0,0.25);}}"]);

const Menu = () => {
  return __jsx(Nav, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Home")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Contact"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Language"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Options"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitButton */ "./components/SubmitButton.tsx");
/* harmony import */ var _formItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formItem */ "./components/formItem.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "./components/Menu.tsx");
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\weatherApp\\components\\Search.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Search__Container",
  componentId: "sc-1ptmakm-0"
})(["width:100%;display:flex;flex-direction:row;align-items:center;padding-bottom:20px;box-shadow:0px 4px 15px rgba(0,0,0,0.25);flex-wrap:wrap;justify-content:center;z-index:5;header{text-align:center;}*{margin:10px 5px;}form{display:flex;flex-direction:row;align-items:center;*{margin:0 5px;}}"]);

const Search = () => {
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const handleSubmit = e => {
    e.preventDefault();
    e.persist();
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
      pathname: `/result`,
      query: {
        cityName: search
      }
    });
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Weather App with External API")), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_formItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: search,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx(_SubmitButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Search")));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/SubmitButton.tsx":
/*!*************************************!*\
  !*** ./components/SubmitButton.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\weatherApp\\components\\SubmitButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "SubmitButton__Button",
  componentId: "m3od27-0"
})(["border:solid 2px #ffffff;color:#bc5a5a;background-color:#ffffff;box-shadow:0px 0px 15px rgba(0,0,0,0.3);padding:5px;font-size:1.4rem;&:focus{border:2px solid #93acec;}&:active{box-shadow:inset 0px 0px 10px rgba(0,0,0,0.25);color:#bc5a5a !important;}&:hover{background-color:#f2f2f2;color:#e59797;box-shadow:inset 2px 2px 4px rgba(0,0,0,0.1),0px 0px 15px rgba(0,0,0,0.3);}"]);

const SubmitButton = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Button, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (SubmitButton);

/***/ }),

/***/ "./components/Useless.tsx":
/*!********************************!*\
  !*** ./components/Useless.tsx ***!
  \********************************/
/*! exports provided: SvgContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgContainer", function() { return SvgContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forecast */ "./components/Forecast.tsx");
/* harmony import */ var _customF_ConvertDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customF/ConvertDate */ "./customF/ConvertDate.js");
/* harmony import */ var _static_svg_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/svg/svg */ "./static/svg/svg.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\weatherApp\\components\\Useless.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SvgContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Useless__SvgContainer",
  componentId: "sc-1ln5oi6-0"
})(["display:flex;flex-direction:column;align-items:center;text-align:center;font-size:1.2rem;*{margin:2px 5px;}svg{height:75px;width:75px;fill:white;}"]);

const Useless = ({
  wind,
  sunset,
  sunrise
}) => {
  const {
    hour: sunriseHour,
    min: sunriseMinute
  } = Object(_customF_ConvertDate__WEBPACK_IMPORTED_MODULE_2__["default"])(sunrise);
  const {
    hour: sunsetHour,
    min: sunsetMinute
  } = Object(_customF_ConvertDate__WEBPACK_IMPORTED_MODULE_2__["default"])(sunset);
  const sunriseTime = `${HourConverter(sunriseHour)}:${HourConverter(sunriseMinute)}`;
  const sunsetTime = `${HourConverter(sunsetHour)}:${HourConverter(sunsetMinute)}`;
  return __jsx(_Forecast__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_Forecast__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(SvgContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Wind strenght", __jsx(_static_svg_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "windIcon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }), Math.round(wind * 3.6), " km/h")), __jsx(_Forecast__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(SvgContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Sunrise", __jsx(_static_svg_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "sunrise",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), sunriseTime, " am")), __jsx(_Forecast__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(SvgContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Sunset", __jsx(_static_svg_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "sunset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), sunsetTime, " am")));
};

const HourConverter = item => {
  if (item < 10) return `0${item}`;else return item;
};

/* harmony default export */ __webpack_exports__["default"] = (Useless);

/***/ }),

/***/ "./components/WeatherBox.tsx":
/*!***********************************!*\
  !*** ./components/WeatherBox.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _customF_ConvertSkies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customF/ConvertSkies */ "./customF/ConvertSkies.js");
/* harmony import */ var _static_svg_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/svg/svg */ "./static/svg/svg.js");
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\weatherApp\\components\\WeatherBox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "WeatherBox__Section",
  componentId: "sc-13zs880-0"
})(["margin:0 auto;width:100vw;display:flex;flex-direction:column;align-items:center;padding-top:30px;", " color:white;flex-grow:1;"], props => {
  if (props.colors[2]) return `background: linear-gradient(180deg, ${props.colors[0]} 0%, ${props.colors[1]} 50.52%, ${props.colors[2]} 100%);`;else return `background: linear-gradient(180deg, ${props.colors[0]} 0%,  ${props.colors[1]} 100%);`;
});
const Temp = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "WeatherBox__Temp",
  componentId: "sc-13zs880-1"
})(["font-size:4.5rem;padding:20px;"]);
const City = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "WeatherBox__City",
  componentId: "sc-13zs880-2"
})(["font-size:4.5rem;"]);
const Date = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "WeatherBox__Date",
  componentId: "sc-13zs880-3"
})(["font-size:1.5rem;color:#e6e2e2;"]);
const SvgContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "WeatherBox__SvgContainer",
  componentId: "sc-13zs880-4"
})(["display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;*{flex:1 1 auto;margin:0 10px;}svg{height:100px;width:100px;fill:white;}"]);

const Result = ({
  city,
  temperature,
  sky,
  date,
  children
}) => {
  const {
    colors,
    name,
    icon
  } = Object(_customF_ConvertSkies__WEBPACK_IMPORTED_MODULE_2__["default"])(sky, temperature);
  return __jsx(Section, {
    colors: colors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(City, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, city), __jsx(Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, date), __jsx(SvgContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(_static_svg_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx(Temp, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, temperature, "\xB0")), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ "./components/formItem.tsx":
/*!*********************************!*\
  !*** ./components/formItem.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\weatherApp\\components\\formItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "formItem__Container",
  componentId: "sc-1n8t88c-0"
})(["font-size:1.4rem;color:black;display:flex;flex-direction:column;svg{width:40px;height:40px;margin-right:20px;fill:black;}div{display:flex;flex-direction:row;}label{text-align:center;}"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "formItem__Input",
  componentId: "sc-1n8t88c-1"
})(["border-radius:10px;height:35px;width:100%;box-shadow:0px 0px 10px rgba(0,0,0,0.25);background-color:rgba(0,0,0,0.1);border:2px solid #ffffff;font-size:1em;color:#2e2e2e;position:relative;padding:0 20px;transition:all 150ms;&::placeholder{color:#666666;}&:focus{border:2px solid #93acec;}"]); //* custom props "label" another are for input

const FormItem = props => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, props.label), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, props.svg, " ", __jsx(Input, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormItem);

/***/ }),

/***/ "./customF/ConvertDate.js":
/*!********************************!*\
  !*** ./customF/ConvertDate.js ***!
  \********************************/
/*! exports provided: ConvertDate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertDate", function() { return ConvertDate; });
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const shortDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const ConvertDate = date => {
  let {
    weekday,
    day,
    hour,
    min
  } = getItems(date);
  if (min < 10) min = `0${min}`;
  if (hour < 10) hour = `0${hour}`;
  return `${weekday} , ${hour}:${min} am `;
};

const getItems = date => {
  let string = new Date(date * 1000);
  let weekday = string.getDay();
  let day = string.getDate();
  let hour = string.getHours();
  let min = string.getMinutes();
  weekday = shortDays[weekday];
  return {
    weekday,
    day,
    hour,
    min
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getItems);

/***/ }),

/***/ "./customF/ConvertSkies.js":
/*!*********************************!*\
  !*** ./customF/ConvertSkies.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConvertSkies; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const types = [{
  name: ["light rain", "light intensity shower rain"],
  icon: "lightRain",
  colors: ["#C5C5C5", "#858383"]
}, {
  name: ["overcast clouds"],
  icon: "cloud",
  colors: ["#C5C5C5", "#858383"]
}, {
  name: ["clear sky"],
  icon: "clear",
  colors: ["#3991F3", "#66BEFE"]
}, {
  name: ["few clouds", "broken clouds", "scattered clouds"],
  icon: "cloudWithSun",
  colors: ["#BACDE6", "#406FA3", "#2667AB"]
}, {
  name: ["heavy intensity rain", "very heavy rain", "moderate rain"],
  icon: "rain",
  colors: ["#C5C5C5", "#858383"]
}, {
  name: ["fog"],
  icon: "fog",
  colors: ["#B2CBCF", "#3D7485", "#01081F"]
}, {
  name: ["hot"],
  icon: "clear",
  colors: ["rgba(183, 63, 130, 0.78)", "rgba(232, 33, 53, 0.76)", "rgba(250, 100, 16, 0.8)"]
}];
function ConvertSkies(sky, temp, day) {
  if (temp > 30 && sky == "clear sky") sky = "hot";
  const skyinfo = types.find(item => {
    const result = item.name.find(name => {
      if (name === sky) {
        return _objectSpread(_objectSpread({}, item), {}, {
          name
        });
      }
    });
    return result;
  });

  if (!skyinfo) {
    return {
      name: "not found",
      icon: null,
      colors: ["#C5C5C5", "#858383"]
    };
  }

  return skyinfo;
}

/***/ }),

/***/ "./pages/result.tsx":
/*!**************************!*\
  !*** ./pages/result.tsx ***!
  \**************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ "./components/Search.tsx");
/* harmony import */ var _components_WeatherBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WeatherBox */ "./components/WeatherBox.tsx");
/* harmony import */ var _customF_ConvertDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customF/ConvertDate */ "./customF/ConvertDate.js");
/* harmony import */ var _components_Forecast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Forecast */ "./components/Forecast.tsx");
/* harmony import */ var _components_Useless__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Useless */ "./components/Useless.tsx");
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\weatherApp\\pages\\result.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "result__Container",
  componentId: "sc-1jcwjlt-0"
})(["display:flex;flex-direction:column;height:100vh;max-width:100vw;"]);

const result = ({
  data,
  city,
  error,
  forecast,
  timezone
}) => {
  if (error) return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 23
    }
  }, "You passed Wrong localization");
  const temperature = Math.round(data.temp - 273.15);
  const sky = data.weather[0].description;
  const date = Object(_customF_ConvertDate__WEBPACK_IMPORTED_MODULE_5__["ConvertDate"])(data.dt);
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_components_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx(_components_WeatherBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    date: date,
    temperature: temperature,
    sky: sky,
    city: city,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(_components_Useless__WEBPACK_IMPORTED_MODULE_7__["default"], {
    wind: data.wind_speed,
    sunrise: data.sunrise,
    sunset: data.sunset,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx(_components_Forecast__WEBPACK_IMPORTED_MODULE_6__["default"], {
    forecast: forecast,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  })));
};

async function getServerSideProps(ctx) {
  const {
    query
  } = ctx;
  const queryCity = query.cityName ? query.cityName : "Berlin";
  const url = `https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=FI0ZPYdRRTTdhdTKQwENNV-OAS4OA13qj97BqtkoU2M&searchtext=${queryCity}`;
  const fetchedCoords = await (await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url)).json();

  if (fetchedCoords.Response.View[0] == undefined) {
    return {
      props: {
        error: "oops"
      }
    };
  }

  const {
    Latitude,
    Longitude
  } = fetchedCoords.Response.View[0].Result[0].Location.DisplayPosition;
  const city = fetchedCoords.Response.View[0].Result[0].Location.Address.District ? fetchedCoords.Response.View[0].Result[0].Location.Address.District : fetchedCoords.Response.View[0].Result[0].Location.Address.City;
  console.log(fetchedCoords.Response.View[0]); // ////////////////////////////////////`

  const url2 = `    https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude}&lon=${Longitude}&
    exclude=current,daily&appid=ba590e34cd2c5e9d9bfa284e3f0b6a6e`;
  const data = await (await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url2)).json();
  const current = data.current;
  const forecast = data.daily;
  const timezone = data.timezone_offset;
  return {
    props: {
      data: current,
      forecast,
      city,
      timezone
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (result);

/***/ }),

/***/ "./static/svg/svg.js":
/*!***************************!*\
  !*** ./static/svg/svg.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bartosz\\Desktop\\weatherApp\\static\\svg\\svg.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Wind = function Wind(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M496.217 381.033h-24.851c-22.405 0-40.633 18.228-40.633 40.633v30.027l-14.37 14.37a7.5 7.5 0 0 0 5.304 12.803 7.478 7.478 0 0 0 5.304-2.197l14.37-14.37h30.026c22.405 0 40.634-18.228 40.634-40.633v-24.85c-.001-8.702-7.081-15.783-15.784-15.783zm.783 40.634c0 14.134-11.499 25.633-25.634 25.633H456.34l20.33-20.33a7.5 7.5 0 0 0-10.607-10.606l-20.329 20.329v-15.026c0-14.134 11.499-25.633 25.633-25.633h24.851c.432 0 .783.352.783.784v24.849zM24.066 130.967a7.478 7.478 0 0 0 5.304-2.197l14.37-14.37h30.026c22.405 0 40.634-18.228 40.634-40.633v-24.85c0-8.703-7.081-15.783-15.784-15.783h-24.85c-22.405 0-40.633 18.228-40.633 40.633v30.026l-14.371 14.371a7.5 7.5 0 0 0 5.304 12.803zm24.068-57.2c0-14.134 11.499-25.633 25.633-25.633h24.85c.433 0 .784.352.784.783v24.85C99.4 87.901 87.901 99.4 73.767 99.4H58.74l20.33-20.33a7.5 7.5 0 0 0-10.607-10.606L48.134 88.793zM173.167 147.533a7.5 7.5 0 0 0 7.5-7.5c0-23.269 18.931-42.2 42.199-42.2 23.27 0 42.2 18.931 42.2 42.2s-18.931 42.2-42.2 42.2h-198.8c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h198.8c31.54 0 57.2-25.66 57.2-57.2s-25.66-57.2-57.2-57.2-57.199 25.66-57.199 57.2a7.5 7.5 0 0 0 7.5 7.5z"
  }), __jsx("path", {
    d: "M7.5 263.5h414.167c49.81 0 90.333-40.523 90.333-90.333s-40.523-90.333-90.333-90.333c-49.811 0-90.334 40.523-90.334 90.333 0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-41.539 33.795-75.333 75.334-75.333S497 131.628 497 173.167 463.206 248.5 421.667 248.5H7.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5zM338.833 314.767H105.864c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h232.969c23.27 0 42.2 18.931 42.2 42.2s-18.931 42.2-42.2 42.2c-23.268 0-42.199-18.931-42.199-42.2 0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5c0 31.54 25.659 57.2 57.199 57.2s57.2-25.66 57.2-57.2c0-31.541-25.66-57.2-57.2-57.2zM82.302 322.267a7.5 7.5 0 0 0-7.5-7.5H7.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h67.302a7.5 7.5 0 0 0 7.5-7.5zM107.936 381.033H57.2c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h50.735a7.5 7.5 0 0 0 7.5-7.5 7.499 7.499 0 0 0-7.499-7.5z"
  }), __jsx("path", {
    d: "M239.434 381.033H138.998c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h100.436a7.5 7.5 0 0 0 0-15z"
  }));
};

Wind.defaultProps = {
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

var Rain = function Rain(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M106.434 298.2h-16.1C48.794 298.2 15 264.406 15 222.867c0-41.514 33.753-75.293 75.257-75.334.152.005.305.01.456.01h.002c41.364.208 74.952 33.913 74.952 75.324a7.5 7.5 0 0 0 15 0c0-47.276-36.506-86.18-82.807-90.017-.005-.365-.026-.737-.026-1.099 0-17.086 5.117-33.515 14.797-47.509a7.5 7.5 0 0 0-12.336-8.533C88.872 92.221 82.833 111.6 82.833 131.75c0 .363.002.726.006 1.091C36.522 136.663 0 175.58 0 222.867c0 49.81 40.523 90.333 90.333 90.333h16.1a7.5 7.5 0 0 0 .001-15z"
  }), __jsx("path", {
    d: "M441.747 165.749a73.409 73.409 0 0 0-9.252-18.227l5.738.012c31.54 0 57.2-25.66 57.2-57.2 0-31.541-25.66-57.2-57.2-57.2-1.56 0-3.136.067-4.716.2C419.999 12.65 396.862 0 371.967 0c-31.954 0-59.654 20.206-69.633 49.935a49.036 49.036 0 0 0-4.788-.234c-15.729 0-30.361 7.718-39.42 20.067a98.773 98.773 0 0 0-15.071-15.026c-17.395-13.934-39.273-21.608-61.605-21.608-21.287 0-41.557 6.676-58.619 19.305a7.5 7.5 0 1 0 8.925 12.056c14.46-10.704 31.645-16.362 49.694-16.362 36.938 0 68.924 23.782 79.77 58.52-17.757 9.918-29.287 28.845-29.287 49.947a7.5 7.5 0 0 0 15 0c0-17.243 10.431-32.515 25.98-38.969.024-.01.048-.016.072-.025a41.944 41.944 0 0 1 16.148-3.206c16.235 0 31.217 9.494 38.167 24.186a7.499 7.499 0 0 0 11.073 2.942c9.894-6.909 21.51-10.561 33.593-10.561 26.854 0 50.264 18.141 56.927 44.116a7.476 7.476 0 0 0 7.498 5.633s1.397-.049 1.842-.049c32.404 0 58.767 26.363 58.767 58.767s-26.362 58.767-58.767 58.767-58.767-26.363-58.767-58.767c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5c0 23.962 11.491 45.284 29.244 58.767H136.817a7.5 7.5 0 0 0 0 15h301.417c40.675 0 73.767-33.092 73.767-73.767-.001-39.499-31.203-71.846-70.254-73.685zm-104.999-40.832C326.24 109.194 308.335 99.4 289.134 99.4c-4.74 0-9.4.574-13.932 1.712a98.48 98.48 0 0 0-7.854-17.749c5.676-11.28 17.403-18.663 30.198-18.663 2.809 0 5.607.348 8.316 1.033a7.495 7.495 0 0 0 9.143-5.567C321.209 33.573 344.632 15 371.967 15c17.902 0 34.661 8.222 45.668 21.953-21.733 8.336-36.602 29.296-36.602 53.38 0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-20.557 14.67-38.039 34.881-41.569a42.708 42.708 0 0 1 7.319-.631c23.27 0 42.2 18.931 42.2 42.2s-18.931 42.2-42.185 42.2l-19.734-.04c-12.816-10.412-29.099-16.526-46.548-16.526-12.419 0-24.446 3.074-35.218 8.95zM40.633 331.333a7.5 7.5 0 0 0-7.5 7.5V405.1a7.5 7.5 0 0 0 15 0v-66.267a7.5 7.5 0 0 0-7.5-7.5zM148.317 331.333a7.5 7.5 0 0 0-7.5 7.5V405.1a7.5 7.5 0 0 0 15 0v-66.267a7.5 7.5 0 0 0-7.5-7.5zM94.475 430.733a7.5 7.5 0 0 0-7.5 7.5V504.5a7.5 7.5 0 0 0 15 0v-66.267a7.5 7.5 0 0 0-7.5-7.5zM202.158 430.733a7.5 7.5 0 0 0-7.5 7.5V504.5a7.5 7.5 0 0 0 15 0v-66.267a7.5 7.5 0 0 0-7.5-7.5zM309.842 430.733a7.5 7.5 0 0 0-7.5 7.5V504.5c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-66.267a7.5 7.5 0 0 0-7.5-7.5zM256 331.333a7.5 7.5 0 0 0-7.5 7.5V405.1a7.5 7.5 0 0 0 15 0v-66.267a7.5 7.5 0 0 0-7.5-7.5zM363.684 331.333a7.5 7.5 0 0 0-7.5 7.5V405.1c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-66.267a7.5 7.5 0 0 0-7.5-7.5zM471.366 331.333a7.5 7.5 0 0 0-7.5 7.5V405.1c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-66.267a7.5 7.5 0 0 0-7.5-7.5zM417.525 430.733a7.5 7.5 0 0 0-7.5 7.5V504.5c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-66.267a7.5 7.5 0 0 0-7.5-7.5z"
  }));
};

Rain.defaultProps = {
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

var Clear = function Clear(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M256 112.071c-79.363 0-143.929 64.566-143.929 143.929 0 9.886 1.008 19.766 3 29.364 1.12 5.405 6.414 8.881 11.816 7.757 5.405-1.12 8.879-6.411 7.757-11.816A124.957 124.957 0 0 1 132.061 256c0-68.34 55.598-123.939 123.939-123.939S379.938 187.66 379.938 256 324.34 379.938 256 379.938c-36.975 0-71.744-16.332-95.394-44.808-3.526-4.247-9.828-4.83-14.075-1.303-4.247 3.526-4.831 9.828-1.303 14.075 27.459 33.064 67.834 52.026 110.772 52.026 79.363 0 143.929-64.566 143.929-143.929S335.363 112.071 256 112.071zM256 0c-5.52 0-9.995 4.475-9.995 9.995V75.13c0 5.52 4.475 9.995 9.995 9.995s9.995-4.475 9.995-9.995V9.995C265.995 4.475 261.52 0 256 0zM256 426.875c-5.52 0-9.995 4.475-9.995 9.995v65.135c0 5.52 4.475 9.995 9.995 9.995s9.995-4.475 9.995-9.995V436.87c0-5.52-4.475-9.995-9.995-9.995zM502.005 246.005H436.87c-5.52 0-9.995 4.475-9.995 9.995s4.475 9.995 9.995 9.995h65.135c5.52 0 9.995-4.475 9.995-9.995s-4.475-9.995-9.995-9.995zM75.13 246.005H9.995C4.475 246.005 0 250.48 0 256s4.475 9.995 9.995 9.995H75.13c5.52 0 9.995-4.475 9.995-9.995s-4.475-9.995-9.995-9.995zM437.02 74.98c-3.904-3.902-10.233-3.902-14.136 0l-46.057 46.057c-3.903 3.904-3.903 10.233 0 14.136 1.951 1.951 4.51 2.928 7.068 2.928s5.116-.977 7.068-2.928l46.057-46.057c3.903-3.904 3.903-10.233 0-14.136zM135.174 376.826c-3.904-3.902-10.233-3.902-14.136 0l-46.057 46.057c-3.903 3.904-3.903 10.233 0 14.136 1.951 1.951 4.51 2.928 7.068 2.928s5.116-.977 7.068-2.928l46.057-46.057c3.903-3.904 3.903-10.233 0-14.136zM437.02 422.883l-46.057-46.057c-3.904-3.902-10.233-3.902-14.136 0-3.903 3.904-3.903 10.233 0 14.136l46.057 46.057a9.967 9.967 0 0 0 7.068 2.928 9.969 9.969 0 0 0 7.068-2.928c3.903-3.904 3.903-10.233 0-14.136zM135.174 121.037L89.117 74.98c-3.904-3.902-10.233-3.902-14.136 0-3.903 3.904-3.903 10.233 0 14.136l46.057 46.057a9.967 9.967 0 0 0 7.068 2.928 9.969 9.969 0 0 0 7.068-2.928c3.903-3.904 3.903-10.233 0-14.136z"
  }), __jsx("path", {
    d: "M143.106 308.537c-1.859-1.859-4.438-2.929-7.067-2.929s-5.207 1.069-7.066 2.929a10.054 10.054 0 0 0-2.929 7.066 10.07 10.07 0 0 0 2.929 7.067c1.859 1.859 4.438 2.929 7.066 2.929s5.207-1.069 7.067-2.929 2.929-4.438 2.929-7.067c0-2.628-1.07-5.207-2.929-7.066zM353.513 249.205c-1.5-21.814-10.447-42.755-25.193-58.963-3.714-4.083-10.035-4.382-14.119-.667-4.082 3.714-4.382 10.036-.667 14.119 11.727 12.892 18.843 29.541 20.035 46.882.362 5.273 4.754 9.309 9.961 9.309.23 0 .463-.008.696-.023 5.507-.378 9.665-5.149 9.287-10.657zM350.813 280.791a10.054 10.054 0 0 0-7.066-2.929c-2.629 0-5.207 1.07-7.067 2.929-1.859 1.859-2.929 4.438-2.929 7.067s1.069 5.207 2.929 7.067a10.072 10.072 0 0 0 7.067 2.929c2.639 0 5.207-1.07 7.066-2.929 1.869-1.859 2.929-4.438 2.929-7.067s-1.06-5.208-2.929-7.067z"
  }));
};

Clear.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};

var Cloud = function Cloud(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M445.993 324.533l.952-.488 1-.568c.8-.464 1.6-.912 2.56-1.496a64.36 64.36 0 0 0 29.408-52.4c.064-.531.093-1.065.088-1.6-.039-32.432-24.3-59.722-56.504-63.56-3.821-27.732-27.502-48.403-55.496-48.44-1.152 0-2.296 0-3.424.096-13.958-54.672-62.17-93.684-118.552-95.928-4.152-.176-8.08-.168-12.32 0-56.303 2.376-104.385 41.393-118.304 96-27.463 2.084-50.546 21.434-57.392 48.112C25.147 207.389.038 234.97.001 267.981c-.005.535.024 1.069.088 1.6.622 25.665 16.506 48.479 40.36 57.968-3.351 20.941 10.91 40.634 31.851 43.984 2.545.407 5.125.557 7.701.448h160c.026 26.499 21.501 47.974 48 48h136c22.091-.026 39.979-17.956 39.952-40.048a39.999 39.999 0 0 0-25.856-37.368 46.782 46.782 0 0 0-5.912-12.744 67.718 67.718 0 0 0 8.632-2.808 55.08 55.08 0 0 0 5.176-2.48zm-203.192 31.448h-162.8c-13.255 0-24-10.745-24-24s10.745-24 24-24c2.07.017 4.131.285 6.136.8a8 8 0 0 0 9.864-8.872c.04-13.227 10.773-23.928 24-23.928 2.096-.009 4.183.26 6.208.8a8.001 8.001 0 0 0 10.08-6.96c3.349-35.187 34.589-60.997 69.776-57.648 32.885 3.13 57.985 30.774 57.936 63.808v1.04a8 8 0 0 0 10.168 7.704c1.9-.519 3.863-.77 5.832-.744 13.255 0 24 10.745 24 24 0 .36-.072.696-.096 1.048a55.514 55.514 0 0 0-10.616 15.248 46.952 46.952 0 0 0-5.288-.296c-20.322.023-38.427 12.841-45.2 32zm205.2 24c0 13.255-10.745 24-24 24h-136c-17.673.014-32.011-14.302-32.025-31.975-.014-17.673 14.302-32.011 31.975-32.025a32.031 32.031 0 0 1 8.299 1.088 8 8 0 0 0 9.696-5.296c6.737-21.039 29.254-32.633 50.293-25.896a40.004 40.004 0 0 1 18.723 12.72 8 8 0 0 0 8.312 2.608c17.086-4.77 34.804 5.215 39.573 22.301.255.914.469 1.838.643 2.771a8 8 0 0 0 6.024 6.4 23.922 23.922 0 0 1 18.487 23.304zm-9.248-69.72a40.514 40.514 0 0 1-4 1.928 50.23 50.23 0 0 1-10.28 3.024 27.94 27.94 0 0 1-3.088.448c-.313 0-.626.024-.936.072-.8.096-1.536.088-2.304.128a47.748 47.748 0 0 0-34.256-7.2c-17.11-17.426-43.568-21.693-65.288-10.528-4.49-17.674-20.365-30.075-38.6-30.152h-.4c-4.387-43.964-43.583-76.049-87.548-71.662-34.9 3.482-63.463 29.292-70.452 63.662-19.575-.682-36.798 12.827-40.8 32a40.266 40.266 0 0 0-35.368 20.28 47.92 47.92 0 0 1-29.352-43.48 8.294 8.294 0 0 0-.08-1.032c.237-26.619 22.009-48.006 48.628-47.768h.012a8 8 0 0 0 7.92-6.88c3.447-23.564 23.625-41.054 47.44-41.12.317-.016.635-.016.952 0a8 8 0 0 0 8.848-6.528c10.046-50.362 53.286-87.285 104.6-89.32a127.27 127.27 0 0 1 10.912 0c51.746 1.908 95.315 39.308 105.04 90.168a8 8 0 0 0 9.496 6.48 40.726 40.726 0 0 1 8.152-.8c22.08.026 39.974 17.92 40 40a8 8 0 0 0 8 8c26.406.039 47.837 21.37 48 47.776a8.482 8.482 0 0 0-.08 1.264 48.162 48.162 0 0 1-21.96 39.432c-.608.376-1.224.712-1.856 1.072l-1.352.736z"
  }));
};

Cloud.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 480.001 480.001"
};

var CloudWithSun = function CloudWithSun(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M149.32 88.748c5.523 0 10-4.478 10-10v-25.88c0-5.522-4.477-10-10-10s-10 4.478-10 10v25.88c0 5.523 4.477 10 10 10zM45.88 192.191c0-5.522-4.477-10-10-10H10c-5.523 0-10 4.478-10 10s4.477 10 10 10h25.88c5.523 0 10-4.477 10-10zM62.03 119.042c1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929c3.905-3.905 3.906-10.237 0-14.143L57.861 86.587c-3.905-3.903-10.237-3.904-14.142 0-3.905 3.905-3.906 10.237 0 14.143zM229.539 121.971a9.97 9.97 0 0 0 7.077-2.935l18.283-18.312c3.902-3.908 3.897-10.24-.011-14.143-3.908-3.9-10.24-3.896-14.142.012l-18.283 18.312c-3.902 3.908-3.897 10.24.011 14.143a9.97 9.97 0 0 0 7.065 2.923zM43.724 283.62c-3.908 3.902-3.913 10.233-.011 14.142a9.97 9.97 0 0 0 7.077 2.935 9.966 9.966 0 0 0 7.065-2.924l18.312-18.283c3.908-3.902 3.913-10.233.011-14.142-3.902-3.907-10.234-3.912-14.142-.011z"
  }), __jsx("path", {
    d: "M433.074 240.809c-8.566-34.612-39.995-59.751-76.404-59.751A78.826 78.826 0 0 0 325 187.71c-15.921-17.368-38.081-27.175-61.984-27.175-13.423 0-26.335 3.111-38.04 9.063a78.822 78.822 0 0 0-22.314-35.628c-14.591-13.378-33.535-20.746-53.341-20.746-43.542 0-78.966 35.425-78.966 78.967 0 32.188 19.844 60.936 48.786 72.969-8.165 14.378-12.446 30.539-12.446 47.448 0 1.425.041 2.851.102 4.276-12.625 7.052-22.35 18.85-26.55 33.125-30.04 3.1-53.544 28.558-53.544 59.403 0 32.93 26.79 59.72 59.719 59.72h150.347c34.792 0 63.545-26.272 67.49-60.01h36.455c5.523 0 10-4.478 10-10s-4.477-10-10-10h-37.077c-4.774-26.162-24.746-47.646-50.857-53.979-8.539-23.323-30.739-39.11-56.064-39.11-15.879 0-31.175 6.459-42.312 17.592a56.069 56.069 0 0 0-20.389-3.844c-2.46 0-4.887.167-7.272.48.482-16.294 5.968-31.636 15.966-44.5 12.301-15.85 29.937-26.118 49.657-28.914a10 10 0 0 0 8.308-7.52c3.451-14.068 11.755-26.723 23.374-35.624 11.272-8.614 24.748-13.167 38.97-13.167 20.391 0 39.122 9.362 51.391 25.687a10 10 0 0 0 12.985 2.658 58.749 58.749 0 0 1 29.279-7.822c29.364 0 54.385 21.913 58.2 50.972a10 10 0 0 0 10.485 8.682 42.976 42.976 0 0 1 2.407-.068c35.421 0 64.238 28.818 64.238 64.24 0 34.723-27.172 62.931-61.859 64.218-5.52.205-9.827 4.845-9.623 10.364.2 5.393 4.635 9.629 9.986 9.629.125 0 .251-.002.377-.007 21.838-.811 42.243-9.928 57.457-25.672C503.597 367.625 512 346.838 512 324.883c0-44.667-34.94-81.326-78.926-84.074zM134.013 329.78c6.295 0 12.5 1.656 17.943 4.79a10 10 0 0 0 12.978-2.652c7.601-10.096 19.185-15.886 31.78-15.886a39.64 39.64 0 0 1 38.565 30.185 9.998 9.998 0 0 0 8.301 7.502c23.461 3.334 41.154 23.743 41.154 47.473 0 26.435-21.518 47.94-47.968 47.94H86.42c-21.901 0-39.719-17.818-39.719-39.72s17.818-39.72 39.719-39.72c.508 0 1.015.025 1.522.047 5.194.238 9.671-3.544 10.348-8.683 2.352-17.829 17.71-31.276 35.723-31.276zm49.075-111.596c-20.085 4.247-38.12 14.749-51.847 30.141-24.004-7.74-40.887-30.471-40.887-56.133 0-32.515 26.452-58.967 58.966-58.967 28.924 0 53.012 20.461 57.999 48.369-11.164 9.872-19.562 22.549-24.231 36.59z"
  }), __jsx("path", {
    d: "M384.591 389.122h-.057c-5.523 0-9.972 4.478-9.972 10s4.505 10 10.028 10 10-4.478 10-10-4.476-10-9.999-10z"
  }));
};

CloudWithSun.defaultProps = {
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

var LightRain = function LightRain(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M445.735 189.733c0-27.423-8.802-53.39-25.454-75.094a7.5 7.5 0 0 0-11.901 9.131c14.624 19.062 22.354 41.871 22.354 65.963 0 33.576-15.367 64.831-41.518 85.339-11.864-25.395-37.945-43.139-67.936-43.139h-33.186c-13.561 0-24.594-11.033-24.594-24.594 0-23.678-8.971-46.167-25.261-63.324a91.938 91.938 0 0 0-9.714-8.868c19.424-33.389 54.776-53.881 93.741-53.881 24.211 0 47.11 7.8 66.224 22.556a7.5 7.5 0 1 0 9.166-11.874c-21.762-16.802-47.831-25.683-75.39-25.683-44.076 0-84.093 23.029-106.286 60.609a88.776 88.776 0 0 0-39.727-10.858c-24.715-.818-48.129 8.176-65.881 25.345-16.018 15.49-25.544 35.769-27.259 57.72C61.586 200.77 41.604 210 26.222 225.496 9.135 242.71-.176 265.553.003 289.816c.367 49.434 41.355 89.65 91.371 89.65H265.07c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5H91.374c-41.806 0-76.065-33.538-76.371-74.762-.15-20.236 7.615-39.286 21.864-53.642 14.251-14.355 33.24-22.262 53.467-22.262 4.143 0 7.5-3.357 7.5-7.5 0-20.599 8.156-39.831 22.967-54.156 14.802-14.316 34.302-21.842 54.953-21.134 40.112 1.34 72.747 35.581 72.747 76.33 0 21.832 17.762 39.594 39.594 39.594h33.186c32.53 0 59.334 26.012 59.749 57.984.205 15.853-5.81 30.791-16.936 42.063-11.13 11.275-25.983 17.485-41.825 17.485H295.07c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h27.199c19.885 0 38.53-7.795 52.5-21.947 13.968-14.15 21.519-32.9 21.26-52.797a72.076 72.076 0 0 0-1.712-14.729c32.29-23.213 51.418-60.291 51.418-100.26zM322.268 48.134c4.143 0 7.5-3.357 7.5-7.5V7.5c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v33.134a7.5 7.5 0 0 0 7.5 7.5zM211.534 89.607c1.465 1.464 3.385 2.196 5.304 2.196s3.839-.732 5.304-2.196a7.5 7.5 0 0 0 0-10.607l-23.429-23.429a7.5 7.5 0 0 0-10.607 10.607zM433.001 289.859a7.5 7.5 0 0 0-10.607 10.607l23.429 23.429c1.465 1.464 3.385 2.196 5.304 2.196s3.839-.732 5.304-2.196a7.5 7.5 0 0 0 0-10.607zM504.501 182.233h-33.134c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h33.134c4.143 0 7.5-3.357 7.5-7.5a7.5 7.5 0 0 0-7.5-7.5zM445.823 55.571L422.394 79a7.5 7.5 0 1 0 10.608 10.607l23.429-23.429a7.5 7.5 0 1 0-10.608-10.607zM159.955 398.392a7.498 7.498 0 0 0-10.063 3.353l-16.566 33.134a7.501 7.501 0 0 0 13.417 6.709l16.566-33.134a7.5 7.5 0 0 0-3.354-10.062zM242.789 398.392a7.501 7.501 0 0 0-10.063 3.353l-16.567 33.134a7.501 7.501 0 0 0 13.417 6.709l16.567-33.134a7.5 7.5 0 0 0-3.354-10.062zM275.922 464.658a7.498 7.498 0 0 0-10.063 3.353l-16.566 33.134a7.501 7.501 0 0 0 13.417 6.709l16.566-33.134a7.501 7.501 0 0 0-3.354-10.062zM193.089 464.658a7.498 7.498 0 0 0-10.063 3.353l-16.566 33.134a7.5 7.5 0 1 0 13.417 6.709l16.566-33.134a7.501 7.501 0 0 0-3.354-10.062zM325.622 398.392a7.498 7.498 0 0 0-10.063 3.353l-16.566 33.134a7.5 7.5 0 1 0 13.417 6.709l16.566-33.134a7.5 7.5 0 0 0-3.354-10.062z"
  }));
};

LightRain.defaultProps = {
  height: "512",
  viewBox: "0 0 512.002 512.002",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

var Moon = function Moon(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M123.467 31.566h9.066v9.067c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-9.067h9.066c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-9.066V7.5c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.066h-9.066c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5zM388.533 480.434h-9.066v-9.067c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.067H355.4c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h9.066v9.066c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-9.066h9.066c4.143 0 7.5-3.357 7.5-7.5s-3.356-7.5-7.499-7.5zM139.25 305.7c0-13.271-10.796-24.066-24.066-24.066S91.116 292.43 91.116 305.7s10.797 24.066 24.067 24.066 24.067-10.795 24.067-24.066zm-24.066 9.067c-5 0-9.067-4.067-9.067-9.066s4.067-9.066 9.067-9.066c4.999 0 9.066 4.067 9.066 9.066s-4.067 9.066-9.066 9.066zM131.75 263.5c13.27 0 24.066-10.796 24.066-24.066s-10.796-24.067-24.066-24.067-24.066 10.797-24.066 24.067S118.479 263.5 131.75 263.5zm0-33.134c4.999 0 9.066 4.067 9.066 9.067 0 4.999-4.067 9.066-9.066 9.066s-9.066-4.067-9.066-9.066 4.067-9.067 9.066-9.067z"
  }), __jsx("path", {
    d: "M462.3 255.666c-.011-6.411-4.423-11.787-10.729-13.074-6.296-1.279-12.45 1.93-14.968 7.814-21.044 49.196-69.145 80.929-122.624 80.929l-.359-.001c-73.116-.195-132.759-59.838-132.953-132.953-.143-53.619 31.623-101.894 80.929-122.983 5.884-2.518 9.097-8.672 7.812-14.968-1.287-6.306-6.663-10.718-13.087-10.729H256c-49.345 0-97.096 17.697-134.458 49.832a7.5 7.5 0 0 0 9.781 11.373c32.781-28.195 74.191-44.403 117.316-46.063-50.804 24.916-83.125 76.527-82.973 133.577.217 81.343 66.569 147.696 147.913 147.914l.4.001c56.893-.002 108.324-32.289 133.18-82.979C443.277 365.44 359.018 447.3 256 447.3c-8.348 0-16.77-.549-25.034-1.632-.476-.062-.641-.589-.663-.892a24.17 24.17 0 0 0-.397-2.922c-2.131-10.735-11.224-18.696-22.113-19.359-8.759-.518-17.137 3.747-21.829 11.172-.079.126-.434.221-.782.082-19.635-7.83-37.752-18.818-53.85-32.661a7.497 7.497 0 0 0-10.576.797 7.499 7.499 0 0 0 .797 10.576c17.356 14.926 36.895 26.776 58.071 35.221 7.049 2.812 15.046.287 19.021-6.003a9.072 9.072 0 0 1 8.236-4.211c4.024.245 7.52 3.318 8.311 7.308.073.371.125.742.151 1.102.562 7.652 6.185 13.683 13.673 14.664a208.475 208.475 0 0 0 26.983 1.759c113.754 0 206.3-92.546 206.3-206.3v-.335zM64.7 256c0-45.757 16.409-90.035 46.205-124.677a7.5 7.5 0 0 0-11.373-9.781C67.397 158.904 49.7 206.655 49.7 256c0 49.343 17.699 97.092 49.837 134.451a7.482 7.482 0 0 0 5.688 2.608 7.5 7.5 0 0 0 5.683-12.392C81.11 346.03 64.7 301.755 64.7 256zM463.083 381.033a7.499 7.499 0 0 0-7.5 7.5V405.1c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-16.566a7.5 7.5 0 0 0-7.5-7.501zM463.083 447.3a7.499 7.499 0 0 0-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5V454.8c0-4.143-3.357-7.5-7.5-7.5zM504.5 422.45h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5H504.5c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5zM438.233 422.45h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5zM48.917 64.7c4.143 0 7.5-3.357 7.5-7.5V40.634c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5V57.2c0 4.143 3.357 7.5 7.5 7.5zM56.417 123.467V106.9c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.499zM73.767 89.55h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5H73.767a7.499 7.499 0 0 0-7.5 7.5 7.5 7.5 0 0 0 7.5 7.5zM24.066 74.55H7.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"
  }));
};

Moon.defaultProps = {
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

var Night = function Night(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M227.699 76.219l27.205 13.8 13.775 27.208c.887 1.749 3.585 7.07 9.443 7.071 5.862 0 8.572-5.344 9.463-7.1l13.772-27.177 27.178-13.773c1.755-.89 7.098-3.6 7.098-9.462 0-5.858-5.322-8.556-7.074-9.446l-27.203-13.772-13.799-27.205c-.889-1.752-3.593-7.084-9.439-7.084s-8.55 5.333-9.44 7.089L254.905 43.57l-27.206 13.774c-1.752.889-7.084 3.593-7.083 9.439 0 5.845 5.332 8.548 7.083 9.436zm36.174-20.377a7.507 7.507 0 0 0 3.304-3.304l10.944-21.617 10.966 21.621a7.504 7.504 0 0 0 3.301 3.299l21.627 10.949-21.629 10.961a7.504 7.504 0 0 0-3.3 3.3l-10.961 21.629-10.948-21.626a7.507 7.507 0 0 0-3.298-3.301l-21.621-10.968zM51.809 176.698c.887 1.748 3.585 7.07 9.429 7.07 5.848-.001 8.557-5.344 9.446-7.095l13.801-27.183 27.178-13.8c1.756-.89 7.098-3.599 7.099-9.447.001-5.844-5.321-8.543-7.069-9.429l-27.207-13.8-13.8-27.207c-.887-1.749-3.585-7.07-9.429-7.071-5.847 0-8.557 5.344-9.446 7.095L38.01 103.014l-27.179 13.799c-1.756.891-7.099 3.6-7.098 9.449 0 5.845 5.323 8.542 7.069 9.427l27.207 13.801zm-4.826-61.419a7.504 7.504 0 0 0 3.292-3.292l10.977-21.621 10.965 21.618a7.502 7.502 0 0 0 3.296 3.296l21.618 10.965-21.621 10.978a7.5 7.5 0 0 0-3.292 3.292l-10.977 21.621-10.965-21.618a7.502 7.502 0 0 0-3.296-3.296l-21.618-10.966z"
  }), __jsx("path", {
    d: "M460.39 404.423c-2.979-10.135-9.375-18.78-17.753-24.719 80.561-96.683 74.615-239.637-15.168-329.423-18.086-18.086-38.717-33.138-61.319-44.738-9.528-4.89-19.098-8.527-24.556-2.068-5.421 6.412-.376 15.051 5.884 23.435 34.187 45.735 47.893 104.359 37.603 160.841a7.5 7.5 0 0 0 6.034 8.722c4.073.732 7.98-1.96 8.722-6.035 10.906-59.866-3.334-121.989-39.077-170.794 20.641 10.781 39.51 24.652 56.102 41.243 85.166 85.169 89.982 221.304 11.839 312.077a45.618 45.618 0 0 0-12.744-1.82c-2.087 0-4.16.137-6.204.409-9.679-17.791-28.268-28.982-48.927-28.982-18.135 0-35.223 8.963-45.588 23.656-23.058 1.017-41.505 20.094-41.505 43.399 0 2.265.173 4.52.516 6.745-10.583 9.34-17.176 22.531-18.318 36.616-61.175.385-120.551-23.909-163.903-67.264-16.609-16.583-30.479-35.441-41.241-56.073 41.991 30.741 93.736 45.696 145.969 42.154 53.458-3.631 103.795-26.519 141.741-64.452 22.677-22.705 39.83-49.355 50.983-79.209a7.5 7.5 0 0 0-14.052-5.25c-10.398 27.832-26.394 52.682-47.541 73.854-72.197 72.174-188.201 80.608-269.829 19.625-8.378-6.273-17.016-11.332-23.433-5.915-6.463 5.453-2.83 15.036 2.06 24.579 11.582 22.596 26.635 43.22 44.739 61.295 24.499 24.501 53.193 43.162 85.283 55.466 28.087 10.768 57.494 16.209 87.55 16.208.839 0 1.681-.015 2.521-.023 4.961 25.06 27.114 44.016 53.621 44.016h27.636c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-27.636c-21.872 0-39.667-17.782-39.667-39.639 0-12.597 6.068-24.555 16.23-31.987a7.5 7.5 0 0 0 2.804-8.044 29.033 29.033 0 0 1-1.035-7.704c0-15.683 12.759-28.443 28.442-28.443.609 0 1.218.026 1.827.051 2.736.09 5.348-1.301 6.753-3.674 7.299-12.33 20.738-19.99 35.072-19.99 16.652 0 31.461 9.939 37.727 25.321a7.495 7.495 0 0 0 8.966 4.392 31.32 31.32 0 0 1 8.439-1.141c15.358 0 28.657 11.416 30.935 26.555a7.5 7.5 0 0 0 7.416 6.384c21.482 0 38.958 17.477 38.958 38.96 0 21.482-17.477 38.959-38.958 38.959h-81.634c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h81.634c29.753 0 53.958-24.205 53.958-53.958.002-27.696-20.975-50.587-47.876-53.617z"
  }), __jsx("path", {
    d: "M112.705 241.025c0 20.735 16.855 37.603 37.574 37.603h97.763c29.018 0 52.625-23.609 52.625-52.627s-23.608-52.626-52.625-52.626c-.182 0-.362.001-.541.003-10.663-18.426-30.583-30.078-52.096-30.078-33.16 0-60.137 26.978-60.137 60.139 0 1.03.026 2.063.08 3.097-13.604 5.849-22.643 19.225-22.643 34.489zm32.427-21.98a7.5 7.5 0 0 0 5.696-8.471 45.842 45.842 0 0 1-.56-7.136c0-24.89 20.248-45.139 45.137-45.139 17.457 0 33.516 10.219 40.911 26.035a7.504 7.504 0 0 0 7.707 4.267 32.774 32.774 0 0 1 4.018-.228c20.747 0 37.626 16.879 37.626 37.627s-16.879 37.628-37.626 37.628h-97.763c-12.448 0-22.575-10.14-22.575-22.604.002-10.534 7.168-19.572 17.429-21.979z"
  }));
};

Night.defaultProps = {
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

var Storm = function Storm(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M441.754 165.749a73.409 73.409 0 0 0-9.252-18.227l5.738.012c31.54 0 57.2-25.66 57.2-57.2 0-31.541-25.66-57.2-57.2-57.2-1.56 0-3.136.067-4.716.2C420.006 12.65 396.869 0 371.973 0c-31.954 0-59.654 20.206-69.633 49.935a49.036 49.036 0 0 0-4.788-.234c-15.729 0-30.361 7.718-39.42 20.067a98.773 98.773 0 0 0-15.071-15.026c-17.395-13.934-39.273-21.608-61.605-21.608-21.287 0-41.558 6.676-58.619 19.306a7.502 7.502 0 0 0-1.567 10.491 7.501 7.501 0 0 0 10.49 1.566c14.461-10.705 31.645-16.362 49.695-16.362 29.426 0 55.71 15.094 70.67 38.792l.926 1.512a83.616 83.616 0 0 1 8.173 18.217c-17.757 9.918-29.286 28.845-29.286 49.947 0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-17.244 10.433-32.516 25.982-38.97.023-.009-.023.01 0 0a42.315 42.315 0 0 1 16.218-3.23c16.235 0 31.217 9.494 38.167 24.186a7.499 7.499 0 0 0 11.073 2.942c9.894-6.909 21.51-10.561 33.593-10.561 26.854 0 50.264 18.141 56.927 44.116a7.472 7.472 0 0 0 7.498 5.633s1.397-.049 1.842-.049c32.404 0 58.767 26.363 58.767 58.767s-26.362 58.767-58.767 58.767-58.767-26.363-58.767-58.767c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5c0 23.962 11.491 45.284 29.244 58.767h-88.65l4.12-12.359c1.6-4.8.789-10.115-2.169-14.22a15.824 15.824 0 0 0-12.805-6.555h-64.466a15.791 15.791 0 0 0-15.513 12.874l-3.799 20.259H136.44c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h71.184l-15.132 80.708a15.732 15.732 0 0 0 3.367 12.989 15.736 15.736 0 0 0 12.145 5.704h38.148c.091 0 .365 0 .601.279a.74.74 0 0 1 .171.639l-14.816 84.911c-.947 5.679 2.184 10.981 7.613 12.894 1.321.466 2.662.69 3.976.69 4.085 0 7.904-2.166 10.04-5.961.048-.085.095-.172.14-.259l60.612-118.348c2.526-4.932 2.31-10.7-.581-15.428s-7.924-7.551-13.466-7.551h-16.375c-.1 0-.401 0-.636-.325a.735.735 0 0 1-.107-.706l16.745-50.235H438.24c40.675 0 73.767-33.092 73.767-73.767 0-39.502-31.202-71.849-70.253-73.688zm-104.999-40.832C326.247 109.194 308.342 99.4 289.14 99.4c-4.74 0-9.4.574-13.932 1.712a98.48 98.48 0 0 0-7.854-17.749c5.677-11.28 17.403-18.663 30.198-18.663 2.809 0 5.607.348 8.316 1.033a7.495 7.495 0 0 0 9.143-5.567C321.216 33.573 344.638 15 371.973 15c17.901 0 34.661 8.222 45.668 21.953-21.733 8.336-36.602 29.296-36.602 53.38 0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-20.507 14.601-37.952 34.736-41.54.051-.008 5.065-.66 7.464-.66 23.27 0 42.2 18.931 42.2 42.2s-18.931 42.2-42.185 42.2l-19.734-.04c-12.816-10.412-29.099-16.526-46.548-16.526-12.419 0-24.446 3.074-35.217 8.95zm-67.663 233.775c-1.6 4.8-.789 10.116 2.169 14.22s7.745 6.555 12.805 6.555h16.375c.132 0 .438 0 .668.375a.71.71 0 0 1 .028.766l-50.425 98.456 10.988-62.965a15.749 15.749 0 0 0-3.466-12.869 15.749 15.749 0 0 0-12.083-5.628h-38.148c-.091 0-.367 0-.603-.283a.743.743 0 0 1-.167-.645l16.773-89.456.003-.014 4.968-26.497a.782.782 0 0 1 .77-.638h64.466c.1 0 .401 0 .636.325a.735.735 0 0 1 .107.706l-7.452 22.358-.007.02z"
  }), __jsx("path", {
    d: "M106.441 298.2H90.34c-41.539 0-75.333-33.794-75.333-75.333 0-41.514 33.755-75.293 75.259-75.334.142.005.283.009.425.01l.011-.001c41.373.196 74.972 33.907 74.972 75.324 0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-47.276-36.506-86.18-82.808-90.018-.005-.365-.025-.738-.025-1.099 0-17.117 5.134-33.57 14.848-47.581a7.5 7.5 0 1 0-12.329-8.546c-11.461 16.532-17.52 35.94-17.52 56.126 0 .362.002.726.006 1.091C36.53 136.66.007 175.578.007 222.864c0 49.81 40.523 90.333 90.333 90.333h16.102a7.5 7.5 0 0 0 7.5-7.5 7.5 7.5 0 0 0-7.501-7.497zM40.64 331.333a7.5 7.5 0 0 0-7.5 7.5V405.1c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-66.267a7.5 7.5 0 0 0-7.5-7.5zM148.323 331.333a7.5 7.5 0 0 0-7.5 7.5V405.1c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-66.267a7.5 7.5 0 0 0-7.5-7.5zM94.481 430.733a7.5 7.5 0 0 0-7.5 7.5V504.5c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-66.267a7.5 7.5 0 0 0-7.5-7.5zM363.69 331.333a7.5 7.5 0 0 0-7.5 7.5V405.1c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-66.267a7.5 7.5 0 0 0-7.5-7.5zM471.373 331.333a7.5 7.5 0 0 0-7.5 7.5V405.1c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-66.267a7.5 7.5 0 0 0-7.5-7.5zM417.532 430.733a7.5 7.5 0 0 0-7.5 7.5V504.5c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-66.267a7.5 7.5 0 0 0-7.5-7.5z"
  }));
};

Storm.defaultProps = {
  height: "512",
  viewBox: "0 0 512.013 512.013",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

var Storm2 = function Storm2(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M303.2 52.55v16.4c54.2 0 98.3 44.1 98.3 98.3h16.4c0-63.2-51.5-114.7-114.7-114.7z"
  }), __jsx("path", {
    d: "M462.5 165.55c0-84.9-69-153.9-153.9-153.9-46.4 0-89.4 20.5-118.8 56.3-6-1.1-12-1.7-17.8-1.7-52.1 0-94.9 40.3-98.9 91.4-41 4-73.1 38.6-73.1 80.6 0 44.7 36.4 81 81 81h35.9l-14.2 36.4h46.5L111 496.35l125.5-177.1h40.9c19 23.2 46.7 36.4 76.7 36.4s57.8-13.3 76.8-36.5c42.8-2.1 77.1-37.6 77.1-80.9 0-31.2-17.7-59.2-45.5-72.7zm-311.4 246.1l19.6-72.3h-44l51-131.1h39.5l-23.6 57.4h60.9l-103.4 146zm275.7-108.7h-4.1s-19.8 36.4-68.6 36.4c-48.9 0-68.6-36.4-68.6-36.4h-37.3l38-53.7h-68.1l23.6-57.4h-75.2l-43.2 111.1H81c-35.6 0-64.6-29-64.6-64.6 0-35.6 29-64.6 64.6-64.6h8.2v-8.2c0-45.7 37.2-82.8 82.8-82.8 13.1 0 24.3 3.5 24.3 3.5l3.2-4.2c26.3-34.3 66-54 109-54 75.8 0 137.5 61.7 137.5 137.5 0 .9-.5 10.7-.5 10.7l5.4 2.1c24.7 9.9 40.6 33.4 40.6 60 .1 35.6-28.9 64.6-64.7 64.6z"
  }));
};

Storm2.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 508 508"
};

var Fog = function Fog(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M360 96c-27.296 0-40.68-7.296-54.848-15.024C289.84 72.632 274.024 64 242.64 64s-47.2 8.632-62.504 16.976C165.96 88.704 152.576 96 125.28 96 98 96 84.632 88.704 70.472 80.976 55.176 72.632 39.36 64 8 64c-4.424 0-8 3.584-8 8s3.576 8 8 8c27.28 0 40.648 7.296 54.808 15.024C78.104 103.368 93.92 112 125.28 112c31.384 0 47.2-8.632 62.504-16.976C201.96 87.296 215.344 80 242.64 80s40.68 7.296 54.848 15.024C312.8 103.368 328.616 112 360 112c4.424 0 8-3.584 8-8s-3.576-8-8-8zM360 160c-27.296 0-40.68-7.296-54.848-15.024C289.84 136.632 274.024 128 242.64 128s-47.2 8.632-62.504 16.976C165.96 152.704 152.576 160 125.28 160c-27.28 0-40.648-7.296-54.808-15.024C55.176 136.632 39.36 128 8 128c-4.424 0-8 3.584-8 8s3.576 8 8 8c27.28 0 40.648 7.296 54.808 15.024C78.104 167.368 93.92 176 125.28 176c31.384 0 47.2-8.632 62.504-16.976C201.96 151.296 215.344 144 242.64 144s40.68 7.296 54.848 15.024C312.8 167.368 328.616 176 360 176c4.424 0 8-3.584 8-8s-3.576-8-8-8zM360 288c-27.296 0-40.68-7.296-54.848-15.024C289.84 264.632 274.024 256 242.64 256s-47.2 8.632-62.504 16.976C165.96 280.704 152.576 288 125.28 288c-27.28 0-40.648-7.296-54.808-15.024C55.176 264.632 39.36 256 8 256c-4.424 0-8 3.584-8 8s3.576 8 8 8c27.28 0 40.648 7.296 54.808 15.024C78.104 295.368 93.92 304 125.28 304c31.384 0 47.2-8.632 62.504-16.976C201.96 279.296 215.344 272 242.64 272s40.68 7.296 54.848 15.024C312.8 295.368 328.616 304 360 304c4.424 0 8-3.584 8-8s-3.576-8-8-8zM360 224c-27.296 0-40.68-7.296-54.848-15.024C289.84 200.632 274.024 192 242.64 192s-47.2 8.632-62.504 16.976C165.96 216.704 152.576 224 125.28 224c-27.28 0-40.648-7.296-54.808-15.024C55.176 200.632 39.36 192 8 192c-4.424 0-8 3.584-8 8s3.576 8 8 8c27.28 0 40.648 7.296 54.808 15.024C78.104 231.368 93.92 240 125.28 240c31.384 0 47.2-8.632 62.504-16.976C201.96 215.296 215.344 208 242.64 208s40.68 7.296 54.848 15.024C312.8 231.368 328.616 240 360 240c4.424 0 8-3.584 8-8s-3.576-8-8-8z"
  }));
};

Fog.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 368 368"
};

var Sunrise = function Sunrise(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M323.472 106.609a7.725 7.725 0 0 1-7.726-7.726V58.816a7.726 7.726 0 1 1 15.452 0v40.066a7.727 7.727 0 0 1-7.726 7.727zM252.774 129.241a7.702 7.702 0 0 1-5.464-2.263l-27.041-27.042a7.727 7.727 0 0 1 10.928-10.927l27.041 27.042a7.727 7.727 0 0 1-5.464 13.19zM200.267 198.191c-.875 0-1.766-.15-2.636-.466l-35.948-13.054a7.727 7.727 0 0 1 5.273-14.525l35.948 13.054a7.727 7.727 0 0 1-2.637 14.991zM394.141 129.241a7.7 7.7 0 0 1-5.463-2.263 7.726 7.726 0 0 1-.001-10.927l27.04-27.042a7.726 7.726 0 0 1 10.927 0 7.726 7.726 0 0 1 .001 10.927l-27.04 27.042a7.708 7.708 0 0 1-5.464 2.263zM446.676 198.191a7.727 7.727 0 0 1-2.638-14.991l35.948-13.054a7.727 7.727 0 0 1 5.273 14.525l-35.948 13.054a7.702 7.702 0 0 1-2.635.466z",
    fill: "#fde588"
  }), __jsx("path", {
    clipRule: "evenodd",
    d: "M408.157 242.473c0-46.783-37.904-84.688-84.686-84.688s-84.715 37.905-84.715 84.688a85.037 85.037 0 0 0 3.008 22.457l88.19 20.822 75.195-20.822a85.037 85.037 0 0 0 3.008-22.457z",
    fill: "#fde588",
    fillRule: "evenodd"
  }), __jsx("path", {
    clipRule: "evenodd",
    d: "M408.157 242.473c0-46.783-37.904-84.688-84.686-84.688-13.813 0-26.837 3.3-38.372 9.14 38.079 8.323 66.581 42.198 66.581 82.761 0 5.198-.467 10.309-1.343 15.244h54.812a85.037 85.037 0 0 0 3.008-22.457z",
    fill: "#fdd76f",
    fillRule: "evenodd"
  }), __jsx("path", {
    clipRule: "evenodd",
    d: "M226.228 302.718c26.399 0 24.033-37.789 0-37.789H5a5 5 0 0 0-5 5v185.98a5 5 0 0 0 5 5h75.189c-18.222 0-18.105-28.765-1.577-28.823l17.142-.058c17.346-.088 17.083-29.933 1.226-31.977h-1.635c-22.894 0-23.917-38.081 4.439-38.081h63.047c24.209 0 19.186-28.823 3.3-28.823h-5.753c-20.179 0-20.354-30.429-.117-30.429h36.298zM512 455.91V269.93a5 5 0 0 0-5-5H395.484c24.033 0 26.428 37.789 0 37.789h-65.938c-20.237 0-20.062 30.429.088 30.429h5.782c15.886 0 20.909 28.823-3.3 28.823H269.04c-28.326 0-27.304 38.081-4.439 38.081h1.635c15.886 2.044 16.149 31.89-1.197 31.977l-17.171.058c-16.499.058-16.645 28.823 1.577 28.823H507a5 5 0 0 0 5-5z",
    fill: "#a0ddfa",
    fillRule: "evenodd"
  }), __jsx("path", {
    clipRule: "evenodd",
    d: "M285.626 432.029c17.346-.088 17.112-29.933 1.226-31.977h-1.635c-22.894 0-23.887-38.081 4.439-38.081h63.077c24.179 0 19.186-28.823 3.271-28.823h-5.753c-20.179 0-20.354-30.429-.117-30.429H416.1c26.399 0 24.033-37.789 0-37.789H205.611c24.033 0 26.428 37.789 0 37.789h-65.938c-20.237 0-20.062 30.429.088 30.429h5.782c15.886 0 20.879 28.823-3.3 28.823H79.167c-28.326 0-27.304 38.081-4.439 38.081h1.635c15.886 2.044 16.12 31.89-1.226 31.977l-17.142.058c-16.499.058-16.645 28.823 1.577 28.823h210.489c-18.222 0-18.105-28.765-1.577-28.823z",
    fill: "#eff6ff",
    fillRule: "evenodd"
  }), __jsx("path", {
    clipRule: "evenodd",
    d: "M486.653 318.955c0 38.46-13.316 109.628-68.566 141.955H507a5 5 0 0 0 5-5V269.93a5 5 0 0 0-5-5h-31.094c6.979 17.025 10.747 15.594 10.747 54.025z",
    fill: "#75cef9",
    fillRule: "evenodd"
  }));
};

Sunrise.defaultProps = {
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

var WindIcon = function WindIcon(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M405.051 42.294c-24.259 0-48.037 8.364-66.953 23.551-6.46 5.187-7.492 14.627-2.307 21.087 5.187 6.459 14.628 7.493 21.088 2.306 13.61-10.927 30.718-16.944 48.172-16.944 42.43 0 76.949 34.519 76.949 76.949s-34.52 76.949-76.949 76.949H122.999c-8.284 0-15 6.716-15 15s6.716 15 15 15h282.052c58.972 0 106.949-47.977 106.949-106.949S464.022 42.294 405.051 42.294z"
  }), __jsx("path", {
    d: "M94.262 196.293h160.237c8.285 0 15-6.716 15-15s-6.715-15-15-15H94.262c-8.284 0-15 6.716-15 15s6.716 15 15 15zM250.295 286.294H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h235.295c34.025 0 61.707 27.681 61.707 61.706s-27.682 61.706-61.707 61.706c-13.997 0-27.715-4.826-38.63-13.588-6.459-5.186-15.9-4.154-21.087 2.306s-4.154 15.901 2.306 21.087c16.221 13.022 36.61 20.194 57.411 20.194 50.567 0 91.707-41.139 91.707-91.706s-41.14-91.705-91.707-91.705zM15 196.293h20.235c8.284 0 15-6.716 15-15s-6.716-15-15-15H15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
  }), __jsx("path", {
    d: "M196 361.001c0-8.284-6.716-15-15-15H91c-8.284 0-15 6.716-15 15s6.716 15 15 15h90c8.285 0 15-6.716 15-15z"
  }));
};

WindIcon.defaultProps = {
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

var Sunset = function Sunset(props) {
  return __jsx("svg", props, __jsx("linearGradient", {
    id: "a",
    gradientUnits: "userSpaceOnUse",
    x1: "256",
    x2: "256",
    y1: "496",
    y2: "148"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#fd5900"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#ffde00"
  })), __jsx("linearGradient", {
    id: "b",
    gradientUnits: "userSpaceOnUse",
    x1: "256",
    x2: "256",
    y1: "195.999",
    y2: "16"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#ffe59a"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#ffffd5"
  })), __jsx("path", {
    d: "M406 346H106c-8.291 0-15 6.709-15 15s6.709 15 15 15h300c8.291 0 15-6.709 15-15s-6.709-15-15-15zm-60 60H166c-8.291 0-15 6.709-15 15s6.709 15 15 15h180c8.291 0 15-6.709 15-15s-6.709-15-15-15zm-60 60h-60c-8.291 0-15 6.709-15 15s6.709 15 15 15h60c8.291 0 15-6.709 15-15s-6.709-15-15-15zm211-168h-76.762C412.614 214.097 341.84 148 256 148S99.386 214.097 91.762 298H15c-8.284 0-15 6.714-15 15 0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15 0-8.286-6.716-15-15-15z",
    fill: "url(#a)"
  }), __jsx("path", {
    d: "M256 16c-8.291 0-15 6.709-15 15v60c0 8.291 6.709 15 15 15s15-6.709 15-15V31c0-8.291-6.709-15-15-15zM148.979 55.653c-4.131-7.207-13.33-9.624-20.479-5.493-7.178 4.146-9.639 13.315-5.479 20.493l30 51.958c4.088 7.153 13.269 9.632 20.479 5.493 7.178-4.146 9.639-13.315 5.479-20.493zm-41.368 112.354l-51.943-30c-7.148-4.087-16.348-1.699-20.479 5.493-4.16 7.178-1.699 16.348 5.479 20.493l51.943 30c7.219 4.144 16.395 1.653 20.479-5.493 4.16-7.178 1.699-16.348-5.479-20.493zM383.5 50.16c-7.148-4.087-16.348-1.685-20.479 5.493l-30 51.958c-4.16 7.178-1.699 16.348 5.479 20.493 7.219 4.144 16.395 1.653 20.479-5.493l30-51.958c4.16-7.177 1.699-16.347-5.479-20.493zm93.311 93.34c-4.131-7.207-13.301-9.624-20.479-5.493l-51.943 30c-7.178 4.146-9.639 13.315-5.479 20.493 4.088 7.153 13.269 9.632 20.479 5.493l51.943-30c7.178-4.145 9.639-13.315 5.479-20.493z",
    fill: "url(#b)"
  }));
};

Sunset.defaultProps = {
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

const Svg = ({
  type
}) => {
  switch (type) {
    case "rain":
      return __jsx(Rain, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 20
        }
      });

    case "wind":
      return __jsx(Wind, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 20
        }
      });

    case "clear":
      return __jsx(Clear, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 20
        }
      });

    case "cloud":
      return __jsx(Cloud, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 20
        }
      });

    case "cloudWithSun":
      return __jsx(CloudWithSun, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 20
        }
      });

    case "lightRain":
      return __jsx(LightRain, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 20
        }
      });

    case "moon":
      return __jsx(Moon, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 20
        }
      });

    case "night":
      return __jsx(Night, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 20
        }
      });

    case "storm":
      return __jsx(Storm, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 20
        }
      });

    case "storm2":
      return __jsx(Storm2, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 20
        }
      });

    case "fog":
      return __jsx(Fog, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 20
        }
      });

    case "sunset":
      return __jsx(Sunset, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 20
        }
      });

    case "sunrise":
      return __jsx(Sunrise, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 20
        }
      });

    case "windIcon":
      return __jsx(WindIcon, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 20
        }
      });

    default:
      return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Svg);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/result.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bartosz\Desktop\weatherApp\pages\result.tsx */"./pages/result.tsx");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JlY2FzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdWJtaXRCdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlbGVzcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XZWF0aGVyQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1JdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9jdXN0b21GL0NvbnZlcnREYXRlLmpzIiwid2VicGFjazovLy8uL2N1c3RvbUYvQ29udmVydFNraWVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Jlc3VsdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3N2Zy9zdmcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQmxvY2siLCJwcm9wcyIsImJvcmRlciIsImNvbG9ycyIsIlRlbXAiLCJwIiwiU3ZnQ29udGFpbmVyIiwiRm9yZWNhc3QiLCJmb3JlY2FzdCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2t5Iiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwidGVtcGVyYXR1cmUiLCJNYXRoIiwicm91bmQiLCJ0ZW1wIiwiZGF5IiwibmFtZSIsImljb24iLCJDb252ZXJ0U2tpZXMiLCJ3ZWVrZGF5IiwiZ2V0SXRlbXMiLCJkdCIsIk5hdiIsIm5hdiIsIk1lbnUiLCJTZWFyY2giLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBlcnNpc3QiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImNpdHlOYW1lIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJCdXR0b24iLCJidXR0b24iLCJTdWJtaXRCdXR0b24iLCJjaGlsZHJlbiIsIlVzZWxlc3MiLCJ3aW5kIiwic3Vuc2V0Iiwic3VucmlzZSIsImhvdXIiLCJzdW5yaXNlSG91ciIsIm1pbiIsInN1bnJpc2VNaW51dGUiLCJzdW5zZXRIb3VyIiwic3Vuc2V0TWludXRlIiwic3VucmlzZVRpbWUiLCJIb3VyQ29udmVydGVyIiwic3Vuc2V0VGltZSIsIlNlY3Rpb24iLCJzZWN0aW9uIiwiQ2l0eSIsIkRhdGUiLCJSZXN1bHQiLCJjaXR5IiwiZGF0ZSIsIklucHV0IiwiaW5wdXQiLCJGb3JtSXRlbSIsImxhYmVsIiwic3ZnIiwiZGF5cyIsInNob3J0RGF5cyIsIkNvbnZlcnREYXRlIiwic3RyaW5nIiwiZ2V0RGF5IiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsInR5cGVzIiwic2t5aW5mbyIsImZpbmQiLCJyZXN1bHQiLCJkYXRhIiwiZXJyb3IiLCJ0aW1lem9uZSIsIndpbmRfc3BlZWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJxdWVyeUNpdHkiLCJ1cmwiLCJmZXRjaGVkQ29vcmRzIiwiZmV0Y2giLCJqc29uIiwiUmVzcG9uc2UiLCJWaWV3IiwidW5kZWZpbmVkIiwiTGF0aXR1ZGUiLCJMb25naXR1ZGUiLCJMb2NhdGlvbiIsIkRpc3BsYXlQb3NpdGlvbiIsIkFkZHJlc3MiLCJEaXN0cmljdCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwyIiwiY3VycmVudCIsImRhaWx5IiwidGltZXpvbmVfb2Zmc2V0IiwiV2luZCIsIlJhaW4iLCJDbGVhciIsIkNsb3VkIiwiQ2xvdWRXaXRoU3VuIiwiTGlnaHRSYWluIiwiTW9vbiIsIk5pZ2h0IiwiU3Rvcm0iLCJTdG9ybTIiLCJGb2ciLCJTdW5yaXNlIiwiV2luZEljb24iLCJTdW5zZXQiLCJTdmciLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ08sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlIQUFmO0FBVUEsTUFBTUMsS0FBSyxHQUFHRix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNKQUdYRSxLQUFELElBQVlBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLHlCQUFmLEdBQTJDLEVBSDNDLEVBVVhELEtBQUQsSUFBVztBQUNULE1BQUlBLEtBQUssQ0FBQ0Us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LE1BQUw7QUFDSSxhQUFPLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7O0FBQ0osU0FBSyxPQUFMO0FBQ0ksYUFBTyxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQOztBQUNKLFNBQUssT0FBTDtBQUNJLGFBQU8sTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDs7QUFDSixTQUFLLGNBQUw7QUFDSSxhQUFPLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7O0FBQ0osU0FBSyxXQUFMO0FBQ0ksYUFBTyxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQOztBQUNKLFNBQUssTUFBTDtBQUNJLGFBQU8sTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDs7QUFDSixTQUFLLE9BQUw7QUFDSSxhQUFPLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7O0FBQ0osU0FBSyxPQUFMO0FBQ0ksYUFBTyxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQOztBQUNKLFNBQUssUUFBTDtBQUNJLGFBQU8sTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDs7QUFDSixTQUFLLEtBQUw7QUFDSSxhQUFPLE1BQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7O0FBQ0osU0FBSyxRQUFMO0FBQ0ksYUFBTyxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQOztBQUVKLFNBQUssU0FBTDtBQUNJLGFBQU8sTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDs7QUFFSixTQUFLLFVBQUw7QUFDSSxhQUFPLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7O0FBQ0o7QUFDSSxhQUFPLElBQVA7QUFoQ1I7QUFrQ0gsQ0FuQ0Q7O0FBb0NlRCxrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVzdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IENvbnZlcnRTa2llcyBmcm9tIFwiLi4vY3VzdG9tRi9Db252ZXJ0U2tpZXNcIjtcclxuXHJcbmltcG9ydCBTVkcgZnJvbSBcIi4uL3N0YXRpYy9zdmcvc3ZnXCI7XHJcbmltcG9ydCBnZXRJdGVtcyBmcm9tIFwiLi4vY3VzdG9tRi9Db252ZXJ0RGF0ZVwiO1xyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIC8qIG1heC13aWR0aDogMTAwdnc7ICovXHJcbiAgICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCbG9jayA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgJHsocHJvcHMpID0+IChwcm9wcy5ib3JkZXIgPyBcImJvcmRlcjpzb2xpZCAxcHggd2hpdGU7XCIgOiBcIlwiKX1cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgJHsocHJvcHMpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuY29sb3JzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jb2xvcnNbMl0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICR7cHJvcHMuY29sb3JzWzBdfSAwJSwgJHtwcm9wcy5jb2xvcnNbMV19IDUwLjUyJSwgJHtwcm9wcy5jb2xvcnNbMl19IDEwMCUpO2A7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIGBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAke3Byb3BzLmNvbG9yc1swXX0gMCUsICAke3Byb3BzLmNvbG9yc1sxXX0gMTAwJSk7YDtcclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5gO1xyXG5jb25zdCBUZW1wID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFN2Z0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDJweCA1cHg7XHJcbiAgICB9XHJcbiAgICBzdmcge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEZvcmVjYXN0ID0gKHsgZm9yZWNhc3QgPSBbXSB9KSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGZvcmVjYXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBza3kgPSBpdGVtLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKGl0ZW0udGVtcC5kYXkgLSAyNzMuMTUpO1xyXG4gICAgICAgIGNvbnN0IHsgY29sb3JzLCBuYW1lLCBpY29uIH0gPSBDb252ZXJ0U2tpZXMoc2t5LCB0ZW1wZXJhdHVyZSk7XHJcbiAgICAgICAgY29uc3QgeyB3ZWVrZGF5IH0gPSBnZXRJdGVtcyhpdGVtLmR0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJsb2NrIGJvcmRlciBrZXk9e2luZGV4fSBjb2xvcnM9e2NvbG9yc30+XHJcbiAgICAgICAgICAgICAgICA8cD57d2Vla2RheX08L3A+XHJcbiAgICAgICAgICAgICAgICA8VGVtcD57dGVtcGVyYXR1cmV9wrA8L1RlbXA+XHJcbiAgICAgICAgICAgICAgICA8U3ZnQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTVkcgdHlwZT17aWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD57c2t5fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvU3ZnQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0Jsb2NrPlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiA8Q29udGFpbmVyPntpdGVtc308L0NvbnRhaW5lcj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JlY2FzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5jb25zdCBOYXYgPSBzdHlsZWQubmF2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAvKiB3aWR0aDogNjAwcHg7ICovXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjYmM1YTVhO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG5cclxuICAgICoge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmM1YTVhO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2PlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8Yj5Ib21lPC9iPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+Q29udGFjdDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5MYW5ndWFnZTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5PcHRpb25zPC9saT5cclxuICAgICAgICA8L05hdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi9TdWJtaXRCdXR0b25cIjtcclxuaW1wb3J0IEZvcm1JdGVtIGZyb20gXCIuL2Zvcm1JdGVtXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgKiB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDVweDtcclxuICAgIH1cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IGAvcmVzdWx0YCxcclxuICAgICAgICAgICAgcXVlcnk6IHsgY2l0eU5hbWU6IHNlYXJjaCB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+V2VhdGhlciBBcHAgd2l0aCBFeHRlcm5hbCBBUEk8L2gxPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0gdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3VibWl0QnV0dG9uPlNlYXJjaDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICNiYzVhNWE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzkzYWNlYztcclxuICAgIH1cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBjb2xvcjogI2JjNWE1YSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICBjb2xvcjogI2U1OTc5NztcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gPEJ1dHRvbiB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0J1dHRvbj47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdEJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCbG9jaywgQ29udGFpbmVyIH0gZnJvbSBcIi4vRm9yZWNhc3RcIjtcclxuaW1wb3J0IGdldEl0ZW1zIGZyb20gXCIuLi9jdXN0b21GL0NvbnZlcnREYXRlXCI7XHJcbmltcG9ydCBTVkcgZnJvbSBcIi4uL3N0YXRpYy9zdmcvc3ZnXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmV4cG9ydCBjb25zdCBTdmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDJweCA1cHg7XHJcbiAgICB9XHJcbiAgICBzdmcge1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgIH1cclxuYDtcclxuY29uc3QgVXNlbGVzcyA9ICh7IHdpbmQsIHN1bnNldCwgc3VucmlzZSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGhvdXI6IHN1bnJpc2VIb3VyLCBtaW46IHN1bnJpc2VNaW51dGUgfSA9IGdldEl0ZW1zKHN1bnJpc2UpO1xyXG4gICAgY29uc3QgeyBob3VyOiBzdW5zZXRIb3VyLCBtaW46IHN1bnNldE1pbnV0ZSB9ID0gZ2V0SXRlbXMoc3Vuc2V0KTtcclxuXHJcbiAgICBjb25zdCBzdW5yaXNlVGltZSA9IGAke0hvdXJDb252ZXJ0ZXIoc3VucmlzZUhvdXIpfToke0hvdXJDb252ZXJ0ZXIoc3VucmlzZU1pbnV0ZSl9YDtcclxuICAgIGNvbnN0IHN1bnNldFRpbWUgPSBgJHtIb3VyQ29udmVydGVyKHN1bnNldEhvdXIpfToke0hvdXJDb252ZXJ0ZXIoc3Vuc2V0TWludXRlKX1gO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8QmxvY2s+XHJcbiAgICAgICAgICAgICAgICA8U3ZnQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIFdpbmQgc3RyZW5naHRcclxuICAgICAgICAgICAgICAgICAgICA8U1ZHIHR5cGU9XCJ3aW5kSWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQod2luZCAqIDMuNil9IGttL2hcclxuICAgICAgICAgICAgICAgIDwvU3ZnQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0Jsb2NrPlxyXG4gICAgICAgICAgICA8QmxvY2s+XHJcbiAgICAgICAgICAgICAgICA8U3ZnQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1bnJpc2VcclxuICAgICAgICAgICAgICAgICAgICA8U1ZHIHR5cGU9XCJzdW5yaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7c3VucmlzZVRpbWV9IGFtXHJcbiAgICAgICAgICAgICAgICA8L1N2Z0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9CbG9jaz5cclxuICAgICAgICAgICAgPEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgPFN2Z0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICBTdW5zZXRcclxuICAgICAgICAgICAgICAgICAgICA8U1ZHIHR5cGU9XCJzdW5zZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdW5zZXRUaW1lfSBhbVxyXG4gICAgICAgICAgICAgICAgPC9TdmdDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQmxvY2s+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5jb25zdCBIb3VyQ29udmVydGVyID0gKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtIDwgMTApIHJldHVybiBgMCR7aXRlbX1gO1xyXG4gICAgZWxzZSByZXR1cm4gaXRlbTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZWxlc3M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBDb252ZXJ0U2tpZXMgZnJvbSBcIi4uL2N1c3RvbUYvQ29udmVydFNraWVzXCI7XHJcbmltcG9ydCBTdmcgZnJvbSBcIi4uL3N0YXRpYy9zdmcvc3ZnXCI7XHJcblxyXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICR7KHByb3BzKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmNvbG9yc1syXSlcclxuICAgICAgICAgICAgcmV0dXJuIGBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAke3Byb3BzLmNvbG9yc1swXX0gMCUsICR7cHJvcHMuY29sb3JzWzFdfSA1MC41MiUsICR7cHJvcHMuY29sb3JzWzJdfSAxMDAlKTtgO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAke3Byb3BzLmNvbG9yc1swXX0gMCUsICAke3Byb3BzLmNvbG9yc1sxXX0gMTAwJSk7YDtcclxuICAgIH19XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbmA7XHJcbmNvbnN0IFRlbXAgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuYDtcclxuY29uc3QgQ2l0eSA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiA0LjVyZW07XHJcbmA7XHJcbmNvbnN0IERhdGUgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6ICNlNmUyZTI7XHJcbmA7XHJcblxyXG5jb25zdCBTdmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgKiB7XHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICBzdmcge1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBSZXN1bHQgPSAoeyBjaXR5LCB0ZW1wZXJhdHVyZSwgc2t5LCBkYXRlLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbG9ycywgbmFtZSwgaWNvbiB9ID0gQ29udmVydFNraWVzKHNreSwgdGVtcGVyYXR1cmUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlY3Rpb24gY29sb3JzPXtjb2xvcnN9PlxyXG4gICAgICAgICAgICA8Q2l0eT57Y2l0eX08L0NpdHk+XHJcbiAgICAgICAgICAgIDxEYXRlPntkYXRlfTwvRGF0ZT5cclxuICAgICAgICAgICAgPFN2Z0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxTdmcgdHlwZT17aWNvbn0gLz5cclxuICAgICAgICAgICAgICAgIDxUZW1wPnt0ZW1wZXJhdHVyZX3CsDwvVGVtcD5cclxuICAgICAgICAgICAgPC9TdmdDb250YWluZXI+XHJcbiAgICAgICAgICAgIHsvKiA8U2tpZXM+e3NreX08L1NraWVzPiAqL31cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBmaWxsOiBibGFjaztcclxuICAgIH1cclxuICAgIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuYDtcclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMmUyZTJlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zO1xyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzkzYWNlYztcclxuICAgIH1cclxuYDtcclxuXHJcbi8vKiBjdXN0b20gcHJvcHMgXCJsYWJlbFwiIGFub3RoZXIgYXJlIGZvciBpbnB1dFxyXG5jb25zdCBGb3JtSXRlbSA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bGFiZWw+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc3ZnfSA8SW5wdXQgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtSXRlbTtcclxuIiwiY29uc3QgZGF5cyA9IFtcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIsIFwiU3VuZGF5XCJdO1xyXG5jb25zdCBzaG9ydERheXMgPSBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl07XHJcbmV4cG9ydCBjb25zdCBDb252ZXJ0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICBsZXQgeyB3ZWVrZGF5LCBkYXksIGhvdXIsIG1pbiB9ID0gZ2V0SXRlbXMoZGF0ZSk7XHJcbiAgICBpZiAobWluIDwgMTApIG1pbiA9IGAwJHttaW59YDtcclxuICAgIGlmIChob3VyIDwgMTApIGhvdXIgPSBgMCR7aG91cn1gO1xyXG5cclxuICAgIHJldHVybiBgJHt3ZWVrZGF5fSAsICR7aG91cn06JHttaW59IGFtIGA7XHJcbn07XHJcbmNvbnN0IGdldEl0ZW1zID0gKGRhdGUpID0+IHtcclxuICAgIGxldCBzdHJpbmcgPSBuZXcgRGF0ZShkYXRlICogMTAwMCk7XHJcblxyXG4gICAgbGV0IHdlZWtkYXkgPSBzdHJpbmcuZ2V0RGF5KCk7XHJcbiAgICBsZXQgZGF5ID0gc3RyaW5nLmdldERhdGUoKTtcclxuICAgIGxldCBob3VyID0gc3RyaW5nLmdldEhvdXJzKCk7XHJcbiAgICBsZXQgbWluID0gc3RyaW5nLmdldE1pbnV0ZXMoKTtcclxuICAgIHdlZWtkYXkgPSBzaG9ydERheXNbd2Vla2RheV07XHJcblxyXG4gICAgcmV0dXJuIHsgd2Vla2RheSwgZGF5LCBob3VyLCBtaW4gfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZ2V0SXRlbXM7XHJcbiIsImNvbnN0IHR5cGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFtcImxpZ2h0IHJhaW5cIiwgXCJsaWdodCBpbnRlbnNpdHkgc2hvd2VyIHJhaW5cIl0sXHJcbiAgICAgICAgaWNvbjogXCJsaWdodFJhaW5cIixcclxuICAgICAgICBjb2xvcnM6IFtcIiNDNUM1QzVcIiwgXCIjODU4MzgzXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBbXCJvdmVyY2FzdCBjbG91ZHNcIl0sXHJcbiAgICAgICAgaWNvbjogXCJjbG91ZFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wiI0M1QzVDNVwiLCBcIiM4NTgzODNcIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFtcImNsZWFyIHNreVwiXSxcclxuICAgICAgICBpY29uOiBcImNsZWFyXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCIjMzk5MUYzXCIsIFwiIzY2QkVGRVwiXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogW1wiZmV3IGNsb3Vkc1wiLCBcImJyb2tlbiBjbG91ZHNcIiwgXCJzY2F0dGVyZWQgY2xvdWRzXCJdLFxyXG4gICAgICAgIGljb246IFwiY2xvdWRXaXRoU3VuXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCIjQkFDREU2XCIsIFwiIzQwNkZBM1wiLCBcIiMyNjY3QUJcIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFtcImhlYXZ5IGludGVuc2l0eSByYWluXCIsIFwidmVyeSBoZWF2eSByYWluXCIsIFwibW9kZXJhdGUgcmFpblwiXSxcclxuICAgICAgICBpY29uOiBcInJhaW5cIixcclxuICAgICAgICBjb2xvcnM6IFtcIiNDNUM1QzVcIiwgXCIjODU4MzgzXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBbXCJmb2dcIl0sXHJcbiAgICAgICAgaWNvbjogXCJmb2dcIixcclxuICAgICAgICBjb2xvcnM6IFtcIiNCMkNCQ0ZcIiwgXCIjM0Q3NDg1XCIsIFwiIzAxMDgxRlwiXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogW1wiaG90XCJdLFxyXG4gICAgICAgIGljb246IFwiY2xlYXJcIixcclxuICAgICAgICBjb2xvcnM6IFtcInJnYmEoMTgzLCA2MywgMTMwLCAwLjc4KVwiLCBcInJnYmEoMjMyLCAzMywgNTMsIDAuNzYpXCIsIFwicmdiYSgyNTAsIDEwMCwgMTYsIDAuOClcIl0sXHJcbiAgICB9LFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb252ZXJ0U2tpZXMoc2t5LCB0ZW1wLCBkYXkpIHtcclxuICAgIGlmICh0ZW1wID4gMzAgJiYgc2t5ID09IFwiY2xlYXIgc2t5XCIpIHNreSA9IFwiaG90XCI7XHJcbiAgICBjb25zdCBza3lpbmZvID0gdHlwZXMuZmluZCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGl0ZW0ubmFtZS5maW5kKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuYW1lID09PSBza3kpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIG5hbWUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXNreWluZm8pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBcIm5vdCBmb3VuZFwiLFxyXG4gICAgICAgICAgICBpY29uOiBudWxsLFxyXG4gICAgICAgICAgICBjb2xvcnM6IFtcIiNDNUM1QzVcIiwgXCIjODU4MzgzXCJdLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNreWluZm87XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFwiO1xyXG5pbXBvcnQgUmVzdWx0IGZyb20gXCIuLi9jb21wb25lbnRzL1dlYXRoZXJCb3hcIjtcclxuXHJcbmltcG9ydCB7IENvbnZlcnREYXRlIH0gZnJvbSBcIi4uL2N1c3RvbUYvQ29udmVydERhdGVcIjtcclxuaW1wb3J0IEZvcmVjYXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0ZvcmVjYXN0XCI7XHJcbmltcG9ydCBVc2VsZXNzIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZWxlc3NcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG5gO1xyXG5jb25zdCByZXN1bHQgPSAoeyBkYXRhLCBjaXR5LCBlcnJvciwgZm9yZWNhc3QsIHRpbWV6b25lIH0pID0+IHtcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+WW91IHBhc3NlZCBXcm9uZyBsb2NhbGl6YXRpb248L2Rpdj47XHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IE1hdGgucm91bmQoZGF0YS50ZW1wIC0gMjczLjE1KTtcclxuICAgIGNvbnN0IHNreSA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IGRhdGUgPSBDb252ZXJ0RGF0ZShkYXRhLmR0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgICAgICAgPFJlc3VsdCBkYXRlPXtkYXRlfSB0ZW1wZXJhdHVyZT17dGVtcGVyYXR1cmV9IHNreT17c2t5fSBjaXR5PXtjaXR5fT5cclxuICAgICAgICAgICAgICAgIDxVc2VsZXNzIHdpbmQ9e2RhdGEud2luZF9zcGVlZH0gc3VucmlzZT17ZGF0YS5zdW5yaXNlfSBzdW5zZXQ9e2RhdGEuc3Vuc2V0fSAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcmVjYXN0IGZvcmVjYXN0PXtmb3JlY2FzdH0gLz5cclxuICAgICAgICAgICAgPC9SZXN1bHQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICAgIGNvbnN0IHsgcXVlcnkgfSA9IGN0eDtcclxuXHJcbiAgICBjb25zdCBxdWVyeUNpdHkgPSBxdWVyeS5jaXR5TmFtZSA/IHF1ZXJ5LmNpdHlOYW1lIDogXCJCZXJsaW5cIjtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9nZW9jb2Rlci5scy5oZXJlYXBpLmNvbS82LjIvZ2VvY29kZS5qc29uP2FwaUtleT1GSTBaUFlkUlJUVGRoZFRLUXdFTk5WLU9BUzRPQTEzcWo5N0JxdGtvVTJNJnNlYXJjaHRleHQ9JHtxdWVyeUNpdHl9YDtcclxuXHJcbiAgICBjb25zdCBmZXRjaGVkQ29vcmRzID0gYXdhaXQgKGF3YWl0IGZldGNoKHVybCkpLmpzb24oKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hlZENvb3Jkcy5SZXNwb25zZS5WaWV3WzBdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJvb3BzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgTGF0aXR1ZGUsIExvbmdpdHVkZSB9ID0gZmV0Y2hlZENvb3Jkcy5SZXNwb25zZS5WaWV3WzBdLlJlc3VsdFswXS5Mb2NhdGlvbi5EaXNwbGF5UG9zaXRpb247XHJcbiAgICBjb25zdCBjaXR5ID0gZmV0Y2hlZENvb3Jkcy5SZXNwb25zZS5WaWV3WzBdLlJlc3VsdFswXS5Mb2NhdGlvbi5BZGRyZXNzLkRpc3RyaWN0XHJcbiAgICAgICAgPyBmZXRjaGVkQ29vcmRzLlJlc3BvbnNlLlZpZXdbMF0uUmVzdWx0WzBdLkxvY2F0aW9uLkFkZHJlc3MuRGlzdHJpY3RcclxuICAgICAgICA6IGZldGNoZWRDb29yZHMuUmVzcG9uc2UuVmlld1swXS5SZXN1bHRbMF0uTG9jYXRpb24uQWRkcmVzcy5DaXR5O1xyXG4gICAgY29uc29sZS5sb2coZmV0Y2hlZENvb3Jkcy5SZXNwb25zZS5WaWV3WzBdKTtcclxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2BcclxuXHJcbiAgICBjb25zdCB1cmwyID0gYCAgICBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtMYXRpdHVkZX0mbG9uPSR7TG9uZ2l0dWRlfSZcclxuICAgIGV4Y2x1ZGU9Y3VycmVudCxkYWlseSZhcHBpZD1iYTU5MGUzNGNkMmM1ZTlkOWJmYTI4NGUzZjBiNmE2ZWA7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgKGF3YWl0IGZldGNoKHVybDIpKS5qc29uKCk7XHJcbiAgICBjb25zdCBjdXJyZW50ID0gZGF0YS5jdXJyZW50O1xyXG4gICAgY29uc3QgZm9yZWNhc3QgPSBkYXRhLmRhaWx5O1xyXG4gICAgY29uc3QgdGltZXpvbmUgPSBkYXRhLnRpbWV6b25lX29mZnNldDtcclxuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGE6IGN1cnJlbnQsIGZvcmVjYXN0LCBjaXR5LCB0aW1lem9uZSB9IH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc3VsdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2luZCBmcm9tIFwiLi93aW5kLnN2Z1wiO1xyXG5pbXBvcnQgUmFpbiBmcm9tIFwiLi9yYWluLnN2Z1wiO1xyXG5pbXBvcnQgQ2xlYXIgZnJvbSBcIi4vY2xlYXIuc3ZnXCI7XHJcbmltcG9ydCBDbG91ZCBmcm9tIFwiLi9jbG91ZC5zdmdcIjtcclxuaW1wb3J0IENsb3VkV2l0aFN1biBmcm9tIFwiLi9jbG91ZFdpdGhTdW4uc3ZnXCI7XHJcbmltcG9ydCBMaWdodFJhaW4gZnJvbSBcIi4vbGlnaHRSYWluLnN2Z1wiO1xyXG5pbXBvcnQgTW9vbiBmcm9tIFwiLi9tb29uLnN2Z1wiO1xyXG5pbXBvcnQgTmlnaHQgZnJvbSBcIi4vbmlnaHQuc3ZnXCI7XHJcbmltcG9ydCBTdG9ybSBmcm9tIFwiLi9zdG9ybS5zdmdcIjtcclxuaW1wb3J0IFN0b3JtMiBmcm9tIFwiLi9zdG9ybTIuc3ZnXCI7XHJcbmltcG9ydCBGb2cgZnJvbSBcIi4vZm9nLnN2Z1wiO1xyXG5pbXBvcnQgU3VucmlzZSBmcm9tIFwiLi9zdW5yaXNlLnN2Z1wiO1xyXG5pbXBvcnQgV2luZEljb24gZnJvbSBcIi4vd2luZEljb24uc3ZnXCI7XHJcbmltcG9ydCBTdW5zZXQgZnJvbSBcIi4vc3Vuc2V0LnN2Z1wiO1xyXG5jb25zdCBTdmcgPSAoeyB0eXBlIH0pID0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJyYWluXCI6XHJcbiAgICAgICAgICAgIHJldHVybiA8UmFpbiAvPjtcclxuICAgICAgICBjYXNlIFwid2luZFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gPFdpbmQgLz47XHJcbiAgICAgICAgY2FzZSBcImNsZWFyXCI6XHJcbiAgICAgICAgICAgIHJldHVybiA8Q2xlYXIgLz47XHJcbiAgICAgICAgY2FzZSBcImNsb3VkXCI6XHJcbiAgICAgICAgICAgIHJldHVybiA8Q2xvdWQgLz47XHJcbiAgICAgICAgY2FzZSBcImNsb3VkV2l0aFN1blwiOlxyXG4gICAgICAgICAgICByZXR1cm4gPENsb3VkV2l0aFN1biAvPjtcclxuICAgICAgICBjYXNlIFwibGlnaHRSYWluXCI6XHJcbiAgICAgICAgICAgIHJldHVybiA8TGlnaHRSYWluIC8+O1xyXG4gICAgICAgIGNhc2UgXCJtb29uXCI6XHJcbiAgICAgICAgICAgIHJldHVybiA8TW9vbiAvPjtcclxuICAgICAgICBjYXNlIFwibmlnaHRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDxOaWdodCAvPjtcclxuICAgICAgICBjYXNlIFwic3Rvcm1cIjpcclxuICAgICAgICAgICAgcmV0dXJuIDxTdG9ybSAvPjtcclxuICAgICAgICBjYXNlIFwic3Rvcm0yXCI6XHJcbiAgICAgICAgICAgIHJldHVybiA8U3Rvcm0yIC8+O1xyXG4gICAgICAgIGNhc2UgXCJmb2dcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDxGb2cgLz47XHJcbiAgICAgICAgY2FzZSBcInN1bnNldFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gPFN1bnNldCAvPjtcclxuXHJcbiAgICAgICAgY2FzZSBcInN1bnJpc2VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDxTdW5yaXNlIC8+O1xyXG5cclxuICAgICAgICBjYXNlIFwid2luZEljb25cIjpcclxuICAgICAgICAgICAgcmV0dXJuIDxXaW5kSWNvbiAvPjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==