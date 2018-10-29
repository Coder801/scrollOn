var ScrollOn =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaults = {
  parent: window,
  element: null,
  offset: 0,
  scrollIn: function scrollIn() {
    console.info('Scroll in element');
  },
  scrollOut: function scrollOut() {
    console.info('Scroll out element');
  }
};

var ToggleFunctionManager =
/*#__PURE__*/
function () {
  function ToggleFunctionManager() {
    _classCallCheck(this, ToggleFunctionManager);

    this.cache = null;

    for (var _len = arguments.length, callbacks = new Array(_len), _key = 0; _key < _len; _key++) {
      callbacks[_key] = arguments[_key];
    }

    this.callbacks = callbacks.map(function (callback) {
      return {
        called: false,
        name: callback.name,
        callback: callback
      };
    });
  }

  _createClass(ToggleFunctionManager, [{
    key: "call",
    value: function call(func) {
      if (func && func.name && func.name !== this.cache) {
        var callback = this.callbacks.find(function (item) {
          return item.name === func.name;
        });

        if (!callback.called) {
          this.callbacks.forEach(function (item) {
            item.called = false;
          });
          callback.callback();
          callback.called = true;
          this.cache = callback.name;
        }
      }
    }
  }]);

  return ToggleFunctionManager;
}();

var ScrollOn =
/*#__PURE__*/
function () {
  function ScrollOn(options) {
    _classCallCheck(this, ScrollOn);

    this.option = Object.assign(defaults, options);
    this.listener = this.listener.bind(this);
    this.scrollTop = 0;
    this.elementTop = this.getElementTop(this.option.element);
    this.toggleFunctionManager = new ToggleFunctionManager(this.option.scrollIn, this.option.scrollOut);

    if (this.elementTop) {
      this.recountScroll(this.option.parent);
      this.init();
    }
  }

  _createClass(ScrollOn, [{
    key: "getTopCordinats",
    value: function getTopCordinats(element) {
      var box = element.getBoundingClientRect();
      var body = document.body;
      var documentElement = document.documentElement;
      var scrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop;
      var clientTop = documentElement.clientTop || body.clientTop || 0;
      var top = box.top + scrollTop - clientTop;
      return Math.round(top);
    }
  }, {
    key: "recountScroll",
    value: function recountScroll(parent) {
      this.scrollTop = Math.round(parent.pageYOffset) + this.option.offset;
    }
  }, {
    key: "getElementTop",
    value: function getElementTop(element) {
      var elementNode = document.querySelector(element);

      if (elementNode) {
        return Math.round(this.getTopCordinats(elementNode));
      }

      return false;
    }
  }, {
    key: "listener",
    value: function listener() {
      this.recountScroll(this.option.parent);

      if (this.scrollTop >= this.elementTop) {
        this.toggleFunctionManager.call(this.option.scrollIn);
      } else {
        this.toggleFunctionManager.call(this.option.scrollOut);
      }
    }
  }, {
    key: "init",
    value: function init() {
      document.addEventListener('scroll', this.listener);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      document.removeEventListener('scroll', this.listener);
    }
  }]);

  return ScrollOn;
}();

module.exports = ScrollOn;

/***/ })

/******/ });