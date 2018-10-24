(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ScrollOn"] = factory();
	else
		root["ScrollOn"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollOn; });
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



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdHMiLCJwYXJlbnQiLCJ3aW5kb3ciLCJlbGVtZW50Iiwib2Zmc2V0Iiwic2Nyb2xsSW4iLCJjb25zb2xlIiwiaW5mbyIsInNjcm9sbE91dCIsIlRvZ2dsZUZ1bmN0aW9uTWFuYWdlciIsImNhY2hlIiwiY2FsbGJhY2tzIiwibWFwIiwiY2FsbGJhY2siLCJjYWxsZWQiLCJuYW1lIiwiZnVuYyIsImZpbmQiLCJpdGVtIiwiZm9yRWFjaCIsIlNjcm9sbE9uIiwib3B0aW9ucyIsIm9wdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsImxpc3RlbmVyIiwiYmluZCIsInNjcm9sbFRvcCIsImVsZW1lbnRUb3AiLCJnZXRFbGVtZW50VG9wIiwidG9nZ2xlRnVuY3Rpb25NYW5hZ2VyIiwicmVjb3VudFNjcm9sbCIsImluaXQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInRvcCIsIk1hdGgiLCJyb3VuZCIsImVsZW1lbnROb2RlIiwicXVlcnlTZWxlY3RvciIsImdldFRvcENvcmRpbmF0cyIsImNhbGwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFF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QUFZakIsUUFBNUM7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLeUIscUJBQUwsQ0FBMkJnQixJQUEzQixDQUFnQyxLQUFLeEIsTUFBTCxDQUFZZCxTQUE1QztBQUNEO0FBQ0Y7OzsyQkFFTTtBQUNMNEIsY0FBUSxDQUFDVyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxLQUFLdEIsUUFBekM7QUFDRDs7OzhCQUVTO0FBQ1JXLGNBQVEsQ0FBQ1ksbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUMsS0FBS3ZCLFFBQTVDO0FBQ0QiLCJmaWxlIjoic2Nyb2xsT24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTY3JvbGxPblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTY3JvbGxPblwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBkZWZhdWx0cyA9IHtcbiAgcGFyZW50OiB3aW5kb3csXG4gIGVsZW1lbnQ6IG51bGwsXG4gIG9mZnNldDogMCxcbiAgc2Nyb2xsSW46IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmluZm8oJ1Njcm9sbCBpbiBlbGVtZW50Jyk7XG4gIH0sXG4gIHNjcm9sbE91dDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUuaW5mbygnU2Nyb2xsIG91dCBlbGVtZW50Jyk7XG4gIH1cbn07XG5cbmNsYXNzIFRvZ2dsZUZ1bmN0aW9uTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKC4uLmNhbGxiYWNrcykge1xuICAgIHRoaXMuY2FjaGUgPSBudWxsO1xuICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzLm1hcChjYWxsYmFjayA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYWxsZWQ6IGZhbHNlLFxuICAgICAgICBuYW1lOiBjYWxsYmFjay5uYW1lLFxuICAgICAgICBjYWxsYmFja1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGwoZnVuYykge1xuICAgIGlmIChmdW5jICYmIGZ1bmMubmFtZSAmJiBmdW5jLm5hbWUgIT09IHRoaXMuY2FjaGUpIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5jYWxsYmFja3MuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZnVuYy5uYW1lKTtcbiAgICAgIGlmICghY2FsbGJhY2suY2FsbGVkKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5jYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNhbGxiYWNrLmNhbGxiYWNrKCk7XG4gICAgICAgIGNhbGxiYWNrLmNhbGxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBjYWxsYmFjay5uYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxPbiB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMubGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSAwO1xuICAgIHRoaXMuZWxlbWVudFRvcCA9IHRoaXMuZ2V0RWxlbWVudFRvcCh0aGlzLm9wdGlvbi5lbGVtZW50KTtcbiAgICB0aGlzLnRvZ2dsZUZ1bmN0aW9uTWFuYWdlciA9IG5ldyBUb2dnbGVGdW5jdGlvbk1hbmFnZXIodGhpcy5vcHRpb24uc2Nyb2xsSW4sIHRoaXMub3B0aW9uLnNjcm9sbE91dCk7XG4gICAgaWYgKHRoaXMuZWxlbWVudFRvcCkge1xuICAgICAgdGhpcy5yZWNvdW50U2Nyb2xsKHRoaXMub3B0aW9uLnBhcmVudCk7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBnZXRUb3BDb3JkaW5hdHMoZWxlbWVudCkge1xuICAgIGNvbnN0IGJveCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGNsaWVudFRvcCA9IGRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgICBjb25zdCB0b3AgPSBib3gudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodG9wKTtcbiAgfVxuXG4gIHJlY291bnRTY3JvbGwocGFyZW50KSB7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSBNYXRoLnJvdW5kKHBhcmVudC5wYWdlWU9mZnNldCkgKyB0aGlzLm9wdGlvbi5vZmZzZXQ7XG4gIH1cblxuICBnZXRFbGVtZW50VG9wKGVsZW1lbnQpIHtcbiAgICBjb25zdCBlbGVtZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgaWYgKGVsZW1lbnROb2RlKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmdldFRvcENvcmRpbmF0cyhlbGVtZW50Tm9kZSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsaXN0ZW5lcigpIHtcbiAgICB0aGlzLnJlY291bnRTY3JvbGwodGhpcy5vcHRpb24ucGFyZW50KTtcbiAgICBpZiAodGhpcy5zY3JvbGxUb3AgPj0gdGhpcy5lbGVtZW50VG9wKSB7XG4gICAgICB0aGlzLnRvZ2dsZUZ1bmN0aW9uTWFuYWdlci5jYWxsKHRoaXMub3B0aW9uLnNjcm9sbEluKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVGdW5jdGlvbk1hbmFnZXIuY2FsbCh0aGlzLm9wdGlvbi5zY3JvbGxPdXQpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5saXN0ZW5lcik7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMubGlzdGVuZXIpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9