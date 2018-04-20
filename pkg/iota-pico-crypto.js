(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("big-integer"));
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/crypto", ["big-integer"], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/crypto"] = factory(require("big-integer"));
	else
		root["IotaPicoCrypto"] = factory(root["bigInt"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_big_integer__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../iota-pico-core/dist/error/coreError.js":
/*!*************************************************!*\
  !*** ../iota-pico-core/dist/error/coreError.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonHelper_1 = __webpack_require__(/*! ../helpers/jsonHelper */ "../iota-pico-core/dist/helpers/jsonHelper.js");

var stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "../iota-pico-core/dist/helpers/stringHelper.js");
/**
 * A core implementation of an error.
 */


var CoreError =
/*#__PURE__*/
function (_extendableBuiltin2) {
  _inherits(CoreError, _extendableBuiltin2);

  /**
   * Create an instance of CoreError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CoreError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CoreError);

    _this = _possibleConstructorReturn(this, (CoreError.__proto__ || Object.getPrototypeOf(CoreError)).call(this, message));
    _this.additional = additional ? additional : {};
    _this.innerError = innerError;
    _this.domain = "Core";
    return _this;
  }
  /**
   * Check if an object could be a CoreError.
   * @param obj The object to check if it is a CoreError.
   * @returns true If the tested object is a CoreError.
   */


  _createClass(CoreError, [{
    key: "format",

    /**
     * Format the error to a readable version.
     */
    value: function format() {
      var _this2 = this;

      var out = "";

      if (!stringHelper_1.StringHelper.isEmpty(this.domain)) {
        out += "".concat(this.domain, ": ");
      }

      if (!stringHelper_1.StringHelper.isEmpty(this.message)) {
        out += "".concat(this.message);
      }

      var keys = Object.keys(this.additional);

      if (keys.length > 0) {
        if (out.length > 0) {
          out += "\n";
        }

        keys.forEach(function (key) {
          out += "\t".concat(key, ": ").concat(jsonHelper_1.JsonHelper.stringify(_this2.additional[key]), "\n");
        });
      }

      return out;
    }
  }], [{
    key: "isError",
    value: function isError(obj) {
      return obj !== undefined && obj !== null && _typeof(obj) === "object" && "message" in obj && "additional" in obj;
    }
  }]);

  return CoreError;
}(_extendableBuiltin(Error));

exports.CoreError = CoreError;

/***/ }),

/***/ "../iota-pico-core/dist/factories/factoryBase.js":
/*!*******************************************************!*\
  !*** ../iota-pico-core/dist/factories/factoryBase.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */

var FactoryBase =
/*#__PURE__*/
function () {
  function FactoryBase() {
    _classCallCheck(this, FactoryBase);

    /* @internal */
    this._types = {};
  }
  /**
   * Register a new type with the factory.
   * @param name The name of the type to register.
   * @param typeConstructor The constructor for the type.
   */


  _createClass(FactoryBase, [{
    key: "register",
    value: function register(name, typeConstructor) {
      this.getInstance()._types[name] = typeConstructor;
    }
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */

  }, {
    key: "unregister",
    value: function unregister(name) {
      delete this.getInstance()._types[name];
    }
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "exists",
    value: function exists(name) {
      return this.getInstance()._types[name] !== undefined;
    }
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "types",
    value: function types() {
      return Object.keys(this.getInstance()._types);
    }
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */

  }, {
    key: "create",
    value: function create(name) {
      var instance = this.getInstance();

      if (instance._types[name]) {
        var _instance$_types;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_instance$_types = instance._types)[name].apply(_instance$_types, args);
      } else {
        return undefined;
      }
    }
  }]);

  return FactoryBase;
}();

exports.FactoryBase = FactoryBase;

/***/ }),

/***/ "../iota-pico-core/dist/helpers/arrayHelper.js":
/*!*****************************************************!*\
  !*** ../iota-pico-core/dist/helpers/arrayHelper.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! ./objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");
/**
 * Array helper methods.
 */


var ArrayHelper =
/*#__PURE__*/
function () {
  function ArrayHelper() {
    _classCallCheck(this, ArrayHelper);
  }

  _createClass(ArrayHelper, null, [{
    key: "isArray",

    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    value: function isArray(value) {
      return value === null || value === undefined ? false : Array.isArray(value);
    }
    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !ArrayHelper.isArray(value) || value.length === 0;
    }
    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */

  }, {
    key: "isTyped",
    value: function isTyped(value, type) {
      return !ArrayHelper.isEmpty(value) && !value.includes(undefined) && !value.includes(null) && value.every(function (a) {
        return objectHelper_1.ObjectHelper.isType(a, type);
      });
    }
  }]);

  return ArrayHelper;
}();

exports.ArrayHelper = ArrayHelper;

/***/ }),

/***/ "../iota-pico-core/dist/helpers/jsonHelper.js":
/*!****************************************************!*\
  !*** ../iota-pico-core/dist/helpers/jsonHelper.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Json helper methods.
 */

var JsonHelper =
/*#__PURE__*/
function () {
  function JsonHelper() {
    _classCallCheck(this, JsonHelper);
  }

  _createClass(JsonHelper, null, [{
    key: "stringify",

    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    value: function stringify(value, replacer, space) {
      // eliminates any recursion in the stringify
      var cache = [];

      var recusionReplacer = function recusionReplacer(key, replaceValue) {
        if (_typeof(replaceValue) === "object" && value !== null && replaceValue !== undefined) {
          if (cache.indexOf(replaceValue) !== -1) {
            // circular reference found, discard key
            return;
          } else {
            cache.push(replaceValue);
          }
        }

        return replacer ? replacer(key, replaceValue) : replaceValue;
      };

      return JSON.stringify(value, recusionReplacer, space);
    }
  }]);

  return JsonHelper;
}();

exports.JsonHelper = JsonHelper;

/***/ }),

/***/ "../iota-pico-core/dist/helpers/numberHelper.js":
/*!******************************************************!*\
  !*** ../iota-pico-core/dist/helpers/numberHelper.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Number helper methods.
 */

var NumberHelper =
/*#__PURE__*/
function () {
  function NumberHelper() {
    _classCallCheck(this, NumberHelper);
  }

  _createClass(NumberHelper, null, [{
    key: "isInteger",

    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    value: function isInteger(value) {
      return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */

  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isFloatString",
    value: function isFloatString(value) {
      return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isIntegerString",
    value: function isIntegerString(value) {
      return /^-?\d+$/.test(value);
    }
  }]);

  return NumberHelper;
}();

exports.NumberHelper = NumberHelper;

/***/ }),

/***/ "../iota-pico-core/dist/helpers/objectHelper.js":
/*!******************************************************!*\
  !*** ../iota-pico-core/dist/helpers/objectHelper.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Object helper methods.
 */

var ObjectHelper =
/*#__PURE__*/
function () {
  function ObjectHelper() {
    _classCallCheck(this, ObjectHelper);
  }

  _createClass(ObjectHelper, null, [{
    key: "isEmpty",

    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    value: function isEmpty(value) {
      return value === null || value === undefined;
    }
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */

  }, {
    key: "isObject",
    value: function isObject(value) {
      return value === null || value === undefined ? false : _typeof(value) === "object" && !Array.isArray(value);
    }
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is an object of the specified type.
     */

  }, {
    key: "isType",
    value: function isType(value, typeConstructor) {
      var valueClassName = ObjectHelper.getClassName(value);
      return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */

  }, {
    key: "getClassName",
    value: function getClassName(object) {
      if (object === null || object === undefined) {
        return undefined;
      } else {
        var _constructor = typeof object === "function" ? object.toString() : object.constructor.toString();

        var results = _constructor.match(/\w+/g);

        return results && results.length > 1 ? results[1] : undefined;
      }
    }
  }]);

  return ObjectHelper;
}();

exports.ObjectHelper = ObjectHelper;

/***/ }),

/***/ "../iota-pico-core/dist/helpers/stringHelper.js":
/*!******************************************************!*\
  !*** ../iota-pico-core/dist/helpers/stringHelper.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * String helper methods.
 */

var StringHelper =
/*#__PURE__*/
function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: "isString",

    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    value: function isString(value) {
      return value === null || value === undefined ? false : Object.prototype.toString.call(value) === "[object String]";
    }
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !StringHelper.isString(value) || value.length === 0;
    }
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */

  }, {
    key: "isAscii",
    value: function isAscii(value) {
      return value === null || value === undefined ? false : /^[\x00-\xFF]*$/.test(value);
    }
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */

  }, {
    key: "encodeNonASCII",
    value: function encodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/[\u007F-\uFFFF]/g, function (chr) {
        return "\\u".concat("0000".concat(chr.charCodeAt(0).toString(16)).substr(-4));
      }) : undefined;
    }
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */

  }, {
    key: "decodeNonASCII",
    value: function decodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
      }) : undefined;
    }
  }]);

  return StringHelper;
}();

exports.StringHelper = StringHelper;

/***/ }),

/***/ "../iota-pico-core/dist/services/timeService.js":
/*!******************************************************!*\
  !*** ../iota-pico-core/dist/services/timeService.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Represents a class which can provide the time.
 */

var TimeService =
/*#__PURE__*/
function () {
  function TimeService() {
    _classCallCheck(this, TimeService);
  }

  _createClass(TimeService, [{
    key: "msSinceEpoch",

    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    value: function msSinceEpoch() {
      return Date.now();
    }
  }]);

  return TimeService;
}();

exports.TimeService = TimeService;

/***/ }),

/***/ "../iota-pico-data/dist/data/address.js":
/*!**********************************************!*\
  !*** ../iota-pico-data/dist/data/address.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../iota-pico-data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../iota-pico-data/dist/data/trytes.js");
/**
 * A class for handling addresses.
 */


var Address =
/*#__PURE__*/
function () {
  /* @internal */
  function Address(addressTrytes, checksumTrytes) {
    _classCallCheck(this, Address);

    this._addressTrytes = addressTrytes;
    this._checksumTrytes = checksumTrytes;
  }
  /**
   * Create address from trytes.
   * @param address The trytes to create the address from.
   * @returns An instance of Address.
   */


  _createClass(Address, [{
    key: "toTrytes",

    /**
     * Convert the address to trytes with no checksum.
     * @returns Trytes version of the address with no checksum.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._addressTrytes);
    }
    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */

  }, {
    key: "toTrytesWithChecksum",
    value: function toTrytesWithChecksum() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return trytes_1.Trytes.fromString(this._addressTrytes + this._checksumTrytes);
      } else {
        throw new dataError_1.DataError("This address has no checksum calculated for it");
      }
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return this._addressTrytes + this._checksumTrytes;
      } else {
        return this._addressTrytes;
      }
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(address) {
      if (!objectHelper_1.ObjectHelper.isType(address, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The address should be a valid Trytes object");
      }

      var trytesString = address.toString();

      if (trytesString.length !== Address.LENGTH && trytesString.length !== Address.LENGTH_WITH_CHECKSUM) {
        throw new dataError_1.DataError("The address should either be ".concat(Address.LENGTH, " or ").concat(Address.LENGTH_WITH_CHECKSUM, " characters in length"), {
          length: trytesString.length
        });
      }

      var addressTrytes = trytesString.substr(0, Address.LENGTH);
      var checksumTrytes;

      if (trytesString.length === Address.LENGTH_WITH_CHECKSUM) {
        checksumTrytes = trytesString.substr(Address.LENGTH);
      }

      return new Address(addressTrytes, checksumTrytes);
    }
  }]);

  return Address;
}();
/**
 * The length for a valid address without checksum (81).
 */


Address.LENGTH = 81;
/**
 * The length for an address checksum (9).
 */

Address.LENGTH_CHECKSUM = 9;
/**
 * The length for valid address with checksum (90).
 */

Address.LENGTH_WITH_CHECKSUM = Address.LENGTH + Address.LENGTH_CHECKSUM;
/**
 * An empty hash all 9s.
 */

Address.EMPTY = Address.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Address.LENGTH)));
exports.Address = Address;

/***/ }),

/***/ "../iota-pico-data/dist/data/addressSecurity.js":
/*!******************************************************!*\
  !*** ../iota-pico-data/dist/data/addressSecurity.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Represents an enum for the address security values.
 */

var AddressSecurity;

(function (AddressSecurity) {
  AddressSecurity[AddressSecurity["low"] = 1] = "low";
  AddressSecurity[AddressSecurity["medium"] = 2] = "medium";
  AddressSecurity[AddressSecurity["high"] = 3] = "high";
})(AddressSecurity = exports.AddressSecurity || (exports.AddressSecurity = {}));

/***/ }),

/***/ "../iota-pico-data/dist/data/hash.js":
/*!*******************************************!*\
  !*** ../iota-pico-data/dist/data/hash.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../iota-pico-data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../iota-pico-data/dist/data/trytes.js");
/**
 * A class for handling hashes.
 */


var Hash =
/*#__PURE__*/
function () {
  /* @internal */
  function Hash(trytes) {
    _classCallCheck(this, Hash);

    this._trytes = trytes;
  }
  /**
   * Create hash from trytes.
   * @param hash The trytes to create the hash from.
   * @returns An instance of Hash.
   */


  _createClass(Hash, [{
    key: "toTrytes",

    /**
     * Convert the hash to trytes.
     * @returns Trytes version of the hash.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(hash) {
      if (!objectHelper_1.ObjectHelper.isType(hash, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The hash should be a valid Trytes object");
      }

      var length = hash.length();

      if (length !== Hash.LENGTH) {
        throw new dataError_1.DataError("The hash should be ".concat(Hash.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new Hash(hash);
    }
  }]);

  return Hash;
}();
/**
 * The length for a valid hash (81).
 */


Hash.LENGTH = 81;
/**
 * An empty hash all 9s.
 */

Hash.EMPTY = Hash.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Hash.LENGTH)));
exports.Hash = Hash;

/***/ }),

/***/ "../iota-pico-data/dist/data/signatureMessageFragment.js":
/*!***************************************************************!*\
  !*** ../iota-pico-data/dist/data/signatureMessageFragment.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../iota-pico-data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../iota-pico-data/dist/data/trytes.js");
/**
 * A class for handling signature message fragments.
 */


var SignatureMessageFragment =
/*#__PURE__*/
function () {
  /* @internal */
  function SignatureMessageFragment(trytes) {
    _classCallCheck(this, SignatureMessageFragment);

    this._trytes = trytes;
  }
  /**
   * Create signature fragment from trytes.
   * @param signatureMessageFragment The trytes to create the signature fragment from.
   * @returns An instance of SignatureMessageFragment.
   */


  _createClass(SignatureMessageFragment, [{
    key: "toTrytes",

    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(signatureMessageFragment) {
      if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The signatureMessageFragment should be a valid Trytes object");
      }

      var length = signatureMessageFragment.length();

      if (length !== SignatureMessageFragment.LENGTH) {
        throw new dataError_1.DataError("The signatureMessageFragment should be ".concat(SignatureMessageFragment.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new SignatureMessageFragment(signatureMessageFragment);
    }
  }]);

  return SignatureMessageFragment;
}();
/**
 * The length of a valid signature message fragment (2187)
 */


SignatureMessageFragment.LENGTH = 2187;
/**
 * An empty signature message fragment all 9s.
 */

SignatureMessageFragment.EMPTY = SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString("9".repeat(SignatureMessageFragment.LENGTH)));
exports.SignatureMessageFragment = SignatureMessageFragment;

/***/ }),

/***/ "../iota-pico-data/dist/data/tag.js":
/*!******************************************!*\
  !*** ../iota-pico-data/dist/data/tag.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../iota-pico-data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../iota-pico-data/dist/data/trytes.js");
/**
 * A class for handling tags.
 */


var Tag =
/*#__PURE__*/
function () {
  /* @internal */
  function Tag(trytes) {
    _classCallCheck(this, Tag);

    this._trytes = trytes;
  }
  /**
   * Create tag from trytes.
   * @param tag The trytes to create the tag from.
   * @returns An instance of Tag.
   */


  _createClass(Tag, [{
    key: "toTrytes",

    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(tag) {
      if (!objectHelper_1.ObjectHelper.isType(tag, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The tag should be a valid Trytes object");
      }

      var trytesString = tag.toString();

      if (trytesString.length > Tag.LENGTH) {
        throw new dataError_1.DataError("The tag should be at most ".concat(Tag.LENGTH, " characters in length"), {
          length: trytesString.length
        });
      }

      while (trytesString.length < Tag.LENGTH) {
        trytesString += "9";
      }

      return new Tag(trytesString);
    }
  }]);

  return Tag;
}();
/**
 * The length of a valid tag (27).
 */


Tag.LENGTH = 27;
/**
 * An empty tag all 9s.
 */

Tag.EMPTY = Tag.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Tag.LENGTH)));
exports.Tag = Tag;

/***/ }),

/***/ "../iota-pico-data/dist/data/transaction.js":
/*!**************************************************!*\
  !*** ../iota-pico-data/dist/data/transaction.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../iota-pico-data/dist/error/dataError.js");

var address_1 = __webpack_require__(/*! ./address */ "../iota-pico-data/dist/data/address.js");

var hash_1 = __webpack_require__(/*! ./hash */ "../iota-pico-data/dist/data/hash.js");

var signatureMessageFragment_1 = __webpack_require__(/*! ./signatureMessageFragment */ "../iota-pico-data/dist/data/signatureMessageFragment.js");

var tag_1 = __webpack_require__(/*! ./tag */ "../iota-pico-data/dist/data/tag.js");

var tryteNumber_1 = __webpack_require__(/*! ./tryteNumber */ "../iota-pico-data/dist/data/tryteNumber.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../iota-pico-data/dist/data/trytes.js");
/**
 * A class for handling transactions.
 */


var Transaction =
/*#__PURE__*/
function () {
  /* @internal */
  function Transaction() {
    _classCallCheck(this, Transaction);
  }
  /**
   * Create instance of transaction from parameters.
   * @param signatureMessageFragment The signature message fragment.
   * @param address The address.
   * @param value The value.
   * @param obsoleteTag Obsolete transaction tag.
   * @param timestamp The timestamp.
   * @param currentIndex The current index.
   * @param lastIndex The last index.
   * @param bundle The bundle.
   * @param trunkTransaction The trunk transaction.
   * @param branchTransaction The branch transaction.
   * @param tag The tag.
   * @param attachmentTimestamp The attachment timestamp.
   * @param attachmentTimestampLowerBound The attachment timestamp lower bound.
   * @param attachmentTimestampUpperBound  The attachment timestamp upper bound.
   * @param nonce The nonce.
   * @returns New instance of transaction.
   */


  _createClass(Transaction, [{
    key: "toTrytes",

    /**
     * Convert the transaction to trytes.
     * @returns The transaction as trytes.
     */
    value: function toTrytes() {
      if (!objectHelper_1.ObjectHelper.isType(this.signatureMessageFragment, signatureMessageFragment_1.SignatureMessageFragment)) {
        throw new dataError_1.DataError("The signatureMessageFragment must be set to create transaction trytes", {
          signatureMessageFragment: this.signatureMessageFragment
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.address, address_1.Address)) {
        throw new dataError_1.DataError("The address must be set to create transaction trytes", {
          address: this.address
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.obsoleteTag, tag_1.Tag)) {
        throw new dataError_1.DataError("The obsoleteTag must be set to create transaction trytes", {
          obsoleteTag: this.obsoleteTag
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.bundle, hash_1.Hash)) {
        throw new dataError_1.DataError("The bundle must be set to create transaction trytes", {
          bundle: this.bundle
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.trunkTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The trunkTransaction must be set to create transaction trytes", {
          trunkTransaction: this.trunkTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.branchTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The branchTransaction must be set to create transaction trytes", {
          branchTransaction: this.branchTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.nonce, tag_1.Tag)) {
        throw new dataError_1.DataError("The nonce must be set to create transaction trytes", {
          nonce: this.nonce
        });
      }

      var trytes = this.signatureMessageFragment.toTrytes().toString() + this.address.toTrytes().toString() + (this.value || Transaction.EMPTY_11).toTrytes().toString() + Transaction.CHECK_VALUE + this.obsoleteTag.toTrytes().toString() + (this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.bundle.toTrytes().toString() + this.trunkTransaction.toTrytes().toString() + this.branchTransaction.toTrytes().toString() + (this.tag || this.obsoleteTag).toTrytes().toString() + (this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.nonce.toTrytes().toString();
      var length = trytes.length;

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length ").concat(length), {
          length: length
        });
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string view of the object.
     */

  }, {
    key: "toString",
    value: function toString() {
      return "{\n\tsignatureMessageFragment: \"".concat((this.signatureMessageFragment || signatureMessageFragment_1.SignatureMessageFragment.EMPTY).toTrytes().toString(), "\"\n\taddress: \"").concat((this.address || address_1.Address.EMPTY).toTrytes().toString(), "\"\n\tvalue: ").concat((this.value || Transaction.EMPTY_11).toNumber(), "\n\tobsoleteTag: \"").concat((this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\ttimestamp: ").concat((this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tcurrentIndex: ").concat((this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tlastIndex: ").concat((this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tbundle: \"").concat((this.bundle || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttrunkTransaction: \"").concat((this.trunkTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\tbranchTransaction: \"").concat((this.branchTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttag: \"").concat((this.tag || this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\tattachmentTimestamp: ").concat((this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampLowerBound: ").concat((this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampUpperBound: ").concat((this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tnonce: \"").concat((this.nonce || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n}");
    }
  }], [{
    key: "fromParams",
    value: function fromParams(signatureMessageFragment, address, value, obsoleteTag, timestamp, currentIndex, lastIndex, bundle, trunkTransaction, branchTransaction, tag, attachmentTimestamp, attachmentTimestampLowerBound, attachmentTimestampUpperBound, nonce) {
      var tx = new Transaction();
      tx.signatureMessageFragment = signatureMessageFragment;
      tx.address = address;
      tx.value = tryteNumber_1.TryteNumber.fromNumber(value, 11);
      tx.obsoleteTag = obsoleteTag;
      tx.timestamp = tryteNumber_1.TryteNumber.fromNumber(timestamp);
      tx.currentIndex = tryteNumber_1.TryteNumber.fromNumber(currentIndex);
      tx.lastIndex = tryteNumber_1.TryteNumber.fromNumber(lastIndex);
      tx.bundle = bundle;
      tx.trunkTransaction = trunkTransaction;
      tx.branchTransaction = branchTransaction;
      tx.tag = tag;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestamp);
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampLowerBound);
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampUpperBound);
      tx.nonce = nonce;
      return tx;
    }
    /**
     * Create instance of transaction from trytes.
     * @param trytes The trytes for the this.
     * @returns An instance of this.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(trytes) {
      if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The trytes should be a valid Trytes object");
      }

      var length = trytes.length();

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length"), {
          length: length
        });
      }

      var checkIndexStart = 2279;
      var checkIndexLength = 16;
      var check = trytes.sub(checkIndexStart, checkIndexLength).toString();

      if (check !== Transaction.CHECK_VALUE) {
        throw new dataError_1.DataError("The trytes between ".concat(checkIndexStart, " and ").concat(checkIndexStart + checkIndexLength, " should be all 9s"), {
          check: check
        });
      }

      var tx = new Transaction();
      var startPos = 0;
      tx.signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes.sub(startPos, signatureMessageFragment_1.SignatureMessageFragment.LENGTH));
      startPos += signatureMessageFragment_1.SignatureMessageFragment.LENGTH;
      tx.address = address_1.Address.fromTrytes(trytes.sub(startPos, address_1.Address.LENGTH));
      startPos += address_1.Address.LENGTH;
      tx.value = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, 11), 11);
      startPos += 11;
      startPos += Transaction.CHECK_VALUE_LENGTH;
      tx.obsoleteTag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.timestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.currentIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.lastIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.bundle = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.trunkTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.branchTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.tag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.nonce = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      return tx;
    }
  }]);

  return Transaction;
}();
/**
 * The length of a valid transaction (2673).
 */


Transaction.LENGTH = 2673;
/**
 * The length of a valid check value (16).
 */

Transaction.CHECK_VALUE_LENGTH = 16;
/**
 * The check value for bundles all 9s.
 */

Transaction.CHECK_VALUE = "9".repeat(Transaction.CHECK_VALUE_LENGTH);
/* @internal */

Transaction.EMPTY_11 = tryteNumber_1.TryteNumber.fromNumber(0, 11);
exports.Transaction = Transaction;

/***/ }),

/***/ "../iota-pico-data/dist/data/trits.js":
/*!********************************************!*\
  !*** ../iota-pico-data/dist/data/trits.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "../iota-pico-core/dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../iota-pico-core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../iota-pico-data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../iota-pico-data/dist/data/trytes.js");
/**
 * A class for handling trits.
 */


var Trits =
/*#__PURE__*/
function () {
  /* @internal */
  function Trits(trits) {
    _classCallCheck(this, Trits);

    this._trits = trits;
  }
  /**
   * Create instance of trits from Int8Array array.
   * @param value Trytes used to create trits.
   * @returns An instance of Trits.
   */


  _createClass(Trits, [{
    key: "toArray",

    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    value: function toArray() {
      return this._trits;
    }
    /**
     * Get the value of the trits array as a number array.
     * @returns Array representation of the trits.
     */

  }, {
    key: "toNumberArray",
    value: function toNumberArray() {
      return Array.from(this._trits);
    }
    /**
     * Get the trits as trytes.
     * @returns Instance of Trytes.
     */

  }, {
    key: "toTrytes",
    value: function toTrytes() {
      var trytes = "";

      for (var i = 0; i < this._trits.length; i += 3) {
        // Iterate over all possible tryte values to find correct trit representation
        for (var j = 0; j < trytes_1.Trytes.ALPHABET.length; j++) {
          if (Trits.TRYTES_TRITS[j][0] === this._trits[i] && Trits.TRYTES_TRITS[j][1] === this._trits[i + 1] && Trits.TRYTES_TRITS[j][2] === this._trits[i + 2]) {
            trytes += trytes_1.Trytes.ALPHABET.charAt(j);
            break;
          }
        }
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the trits as a number.
     * @returns The trits converted to a number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      var returnValue = 0;

      for (var i = this._trits.length - 1; i >= 0; i--) {
        returnValue = returnValue * 3 + this._trits[i];
      }

      return returnValue;
    }
    /**
     * What is the length of the trits.
     * @returns Length of the trits.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trits.length;
    }
    /**
     * Get a sub of the trits.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trits sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trits.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trits.length));
      }

      return Trits.fromArray(this._trits.slice(start, start + length));
    }
  }], [{
    key: "fromArray",
    value: function fromArray(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, Int8Array)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(value);
    }
    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumberArray",
    value: function fromNumberArray(value) {
      if (!arrayHelper_1.ArrayHelper.isTyped(value, Number)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(new Int8Array(value));
    }
    /**
     * Create instance of trits from trytes.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var trytesString = value.toString();
      var trits = new Int8Array(trytesString.length * 3);

      for (var i = 0; i < trytesString.length; i++) {
        var idx = trytes_1.Trytes.ALPHABET.indexOf(trytesString.charAt(i));
        trits[i * 3] = Trits.TRYTES_TRITS[idx][0];
        trits[i * 3 + 1] = Trits.TRYTES_TRITS[idx][1];
        trits[i * 3 + 2] = Trits.TRYTES_TRITS[idx][2];
      }

      return new Trits(trits);
    }
    /**
     * Create instance of trits from number
     * @param value Number used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumber",
    value: function fromNumber(value) {
      if (!numberHelper_1.NumberHelper.isInteger(value)) {
        throw new dataError_1.DataError("The value is not an integer");
      }

      var trits = [];
      var absoluteValue = value < 0 ? -value : value;

      while (absoluteValue > 0) {
        var remainder = absoluteValue % 3;
        absoluteValue = Math.floor(absoluteValue / 3);

        if (remainder > 1) {
          remainder = -1;
          absoluteValue++;
        }

        trits[trits.length] = remainder;
      }

      if (value < 0) {
        for (var i = 0; i < trits.length; i++) {
          trits[i] = -trits[i];
        }
      }

      return new Trits(new Int8Array(trits));
    }
    /**
     * Add two trits together.
     * @param first The first trit.
     * @param second The second trit.
     * @returns New trit which is the addition of the a + b.
     */

  }, {
    key: "add",
    value: function add(first, second) {
      if (!objectHelper_1.ObjectHelper.isType(first, Trits)) {
        throw new dataError_1.DataError("The first should be a valid Trits object");
      }

      if (!objectHelper_1.ObjectHelper.isType(second, Trits)) {
        throw new dataError_1.DataError("The seconds should be a valid Trits object");
      }

      var out = new Int8Array(Math.max(first._trits.length, second._trits.length));
      var carry = 0;
      var iA;
      var iB;

      for (var i = 0; i < out.length; i++) {
        iA = i < first._trits.length ? first._trits[i] : 0;
        iB = i < second._trits.length ? second._trits[i] : 0;
        var fA = Trits.fullAdd(iA, iB, carry);
        out[i] = fA[0];
        carry = fA[1];
      }

      return Trits.fromArray(out);
    }
    /* @internal */

  }, {
    key: "fullAdd",
    value: function fullAdd(a, b, c) {
      var sA = Trits.sum(a, b);
      var cA = Trits.cons(a, b);
      var cB = Trits.cons(sA, c);
      var cOut = Trits.any(cA, cB);
      var sOUt = Trits.sum(sA, c);
      return new Int8Array([sOUt, cOut]);
    }
    /* @internal */

  }, {
    key: "sum",
    value: function sum(a, b) {
      var s = a + b;

      switch (s) {
        case 2:
          return -1;

        case -2:
          return 1;

        default:
          return s;
      }
    }
    /* @internal */

  }, {
    key: "cons",
    value: function cons(a, b) {
      if (a === b) {
        return a;
      }

      return 0;
    }
    /* @internal */

  }, {
    key: "any",
    value: function any(a, b) {
      var s = a + b;

      if (s > 0) {
        return 1;
      } else if (s < 0) {
        return -1;
      }

      return 0;
    }
  }]);

  return Trits;
}();
/* @internal */


Trits.TRYTES_TRITS = [new Int8Array([0, 0, 0]), new Int8Array([1, 0, 0]), new Int8Array([-1, 1, 0]), new Int8Array([0, 1, 0]), new Int8Array([1, 1, 0]), new Int8Array([-1, -1, 1]), new Int8Array([0, -1, 1]), new Int8Array([1, -1, 1]), new Int8Array([-1, 0, 1]), new Int8Array([0, 0, 1]), new Int8Array([1, 0, 1]), new Int8Array([-1, 1, 1]), new Int8Array([0, 1, 1]), new Int8Array([1, 1, 1]), new Int8Array([-1, -1, -1]), new Int8Array([0, -1, -1]), new Int8Array([1, -1, -1]), new Int8Array([-1, 0, -1]), new Int8Array([0, 0, -1]), new Int8Array([1, 0, -1]), new Int8Array([-1, 1, -1]), new Int8Array([0, 1, -1]), new Int8Array([1, 1, -1]), new Int8Array([-1, -1, 0]), new Int8Array([0, -1, 0]), new Int8Array([1, -1, 0]), new Int8Array([-1, 0, 0])];
exports.Trits = Trits;

/***/ }),

/***/ "../iota-pico-data/dist/data/tryteNumber.js":
/*!**************************************************!*\
  !*** ../iota-pico-data/dist/data/tryteNumber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../iota-pico-core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../iota-pico-data/dist/error/dataError.js");

var trits_1 = __webpack_require__(/*! ./trits */ "../iota-pico-data/dist/data/trits.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../iota-pico-data/dist/data/trytes.js");
/**
 * A class for handling tryte number.
 */


var TryteNumber =
/*#__PURE__*/
function () {
  /* @internal */
  function TryteNumber(trytes) {
    _classCallCheck(this, TryteNumber);

    this._trytes = trytes;
  }
  /**
   * Create tryte number from number.
   * @param value The number value to create the object from.
   * @param length The tryte length to pad the number with.
   * @returns An instance of TryteNumber.
   */


  _createClass(TryteNumber, [{
    key: "toTrytes",

    /**
     * Convert the tryte number to trytes.
     * @returns Trytes version of the tryte number.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      return trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(this._trytes)).toNumber();
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the value of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toNumber();
    }
  }], [{
    key: "fromNumber",
    value: function fromNumber(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;
      var trytes;

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (objectHelper_1.ObjectHelper.isEmpty(value)) {
        trytes = "9".repeat(length);
      } else {
        if (!numberHelper_1.NumberHelper.isInteger(value)) {
          throw new dataError_1.DataError("The value is not an integer", {
            value: value
          });
        }

        var trits = trits_1.Trits.fromNumber(value).toNumberArray();

        while (trits.length < length * 3) {
          trits.push(0);
        }

        trytes = trits_1.Trits.fromNumberArray(trits).toTrytes().toString();
      }

      return new TryteNumber(trytes);
    }
    /**
     * Create tryte number from trytes.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;

      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var tryteString = value.toString();

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (tryteString.length > length) {
        throw new dataError_1.DataError("The value contains too many characters", {
          length: tryteString.length
        });
      }

      while (tryteString.length < length) {
        tryteString += "9";
      }

      return new TryteNumber(tryteString);
    }
  }]);

  return TryteNumber;
}();
/**
 * Length of a number that uses 9 trytes.
 */


TryteNumber.LENGTH_9 = 9;
/**
 * An empty 9 length tryte number.
 */

TryteNumber.EMPTY_9 = TryteNumber.fromNumber(0, TryteNumber.LENGTH_9);
exports.TryteNumber = TryteNumber;

/***/ }),

/***/ "../iota-pico-data/dist/data/trytes.js":
/*!*********************************************!*\
  !*** ../iota-pico-data/dist/data/trytes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../iota-pico-core/dist/helpers/numberHelper.js");

var stringHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/stringHelper */ "../iota-pico-core/dist/helpers/stringHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../iota-pico-data/dist/error/dataError.js");
/**
 * A class for handling trytes.
 */


var Trytes =
/*#__PURE__*/
function () {
  /* @internal */
  function Trytes(trytes) {
    _classCallCheck(this, Trytes);

    this._trytes = trytes;
  }
  /**
   * Create trytes from a string.
   * @param value A string to create the trytes from.
   * @param length An optional validation length for the trytes, 0 means ignore length.
   * @returns An instance of Trytes.
   */


  _createClass(Trytes, [{
    key: "toString",

    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the length of the trytes.
     * @returns The length of the trytes.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trytes.length;
    }
    /**
     * Get a sub of the trytes.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trytes sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trytes.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trytes.length));
      }

      return Trytes.fromString(this._trytes.substr(start, length));
    }
  }], [{
    key: "fromString",
    value: function fromString(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        throw new dataError_1.DataError("The value must be a non empty string");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new dataError_1.DataError("The length must be >= 0");
      }

      if (!Trytes.isValid(value, length)) {
        throw new dataError_1.DataError("The value and length do not contain valid trytes", {
          value: value,
          length: length
        });
      }

      return new Trytes(value);
    }
    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */

  }, {
    key: "isValid",
    value: function isValid(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        return false;
      } else {
        return new RegExp("^[9A-Z]{".concat(length ? length : "0,", "}$")).test(value);
      }
    }
  }]);

  return Trytes;
}();
/**
 * All the characters that can be used in trytes.
 */


Trytes.ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.Trytes = Trytes;

/***/ }),

/***/ "../iota-pico-data/dist/error/dataError.js":
/*!*************************************************!*\
  !*** ../iota-pico-data/dist/error/dataError.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "../iota-pico-core/dist/error/coreError.js");
/**
 * A data implementation of an error.
 */


var DataError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(DataError, _coreError_1$CoreErro);

  /**
   * Create an instance of DataError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function DataError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, DataError);

    _this = _possibleConstructorReturn(this, (DataError.__proto__ || Object.getPrototypeOf(DataError)).call(this, message, additional, innerError));
    _this.domain = "Data";
    return _this;
  }

  return DataError;
}(coreError_1.CoreError);

exports.DataError = DataError;

/***/ }),

/***/ "./dist/digests/sha3.js":
/*!******************************!*\
  !*** ./dist/digests/sha3.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist/error/cryptoError.js");
/**
 * Sha3 implementation.
 */


var Sha3 =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of SHA3.
   * @param bits The number of input bits.
   * @param padding The padding to use.
   * @param outputBits The number of output bits.
   */
  function Sha3(bits, padding, outputBits) {
    _classCallCheck(this, Sha3);

    this._padding = padding;
    this._outputBits = outputBits;
    this._blockCount = 1600 - (bits << 1) >> 5;
    this._byteCount = this._blockCount << 2;
    this._outputBlocks = outputBits >> 5;
    this._extraBytes = (outputBits & 31) >> 3;
    this.reset();
  }
  /**
   * Reset the digest.
   */


  _createClass(Sha3, [{
    key: "reset",
    value: function reset() {
      this._reset = true;
      this._block = 0;
      this._start = 0;
      this._blocks = new Uint32Array(this._blockCount + 1);
      this._state = new Uint32Array(50);
    }
    /**
     * Update the digest.
     * @param input Array of data to use in the update.
     */

  }, {
    key: "update",
    value: function update(input) {
      if (!objectHelper_1.ObjectHelper.isType(input, ArrayBuffer)) {
        throw new cryptoError_1.CryptoError("Input is not of type ArrayBuffer");
      }

      var message = new Uint8Array(input);
      var length = message.length;
      var index = 0;
      var i;

      while (index < length) {
        if (this._reset) {
          this._reset = false;
          this._blocks[0] = this._block;

          for (i = 1; i < this._blockCount + 1; ++i) {
            this._blocks[i] = 0;
          }
        }

        for (i = this._start; index < length && i < this._byteCount; ++index) {
          this._blocks[i >> 2] |= message[index] << Sha3.SHIFT[i++ & 3];
        }

        this._lastByteIndex = i;

        if (i >= this._byteCount) {
          this._start = i - this._byteCount;
          this._block = this._blocks[this._blockCount];

          for (i = 0; i < this._blockCount; ++i) {
            this._state[i] ^= this._blocks[i];
          }

          this.keccakPermutation(this._state);
          this._reset = true;
        } else {
          this._start = i;
        }
      }
    }
    /**
     * Finalize and return the hash for the digest, will also reset the state.
     * @returns Array buffer containing the digest.
     */

  }, {
    key: "digest",
    value: function digest() {
      this.finalize();
      var i = 0;
      var j = 0;
      var bytes = this._outputBits >> 3;
      var buffer;

      if (this._extraBytes) {
        buffer = new ArrayBuffer(this._outputBlocks + 1 << 2);
      } else {
        buffer = new ArrayBuffer(bytes);
      }

      var array = new Uint32Array(buffer);

      while (j < this._outputBlocks) {
        for (i = 0; i < this._blockCount && j < this._outputBlocks; ++i, ++j) {
          array[j] = this._state[i];
        }
      }

      if (this._extraBytes) {
        array[i] = this._state[i];
        buffer = buffer.slice(0, bytes);
      }

      this.reset();
      return buffer;
    }
    /* @internal */

  }, {
    key: "finalize",
    value: function finalize() {
      var i = this._lastByteIndex;
      this._blocks[i >> 2] |= this._padding[i & 3];

      if (this._lastByteIndex === this._byteCount) {
        this._blocks[0] = this._blocks[this._blockCount];

        for (i = 1; i < this._blockCount + 1; ++i) {
          this._blocks[i] = 0;
        }
      }

      this._blocks[this._blockCount - 1] |= 0x80000000;

      for (i = 0; i < this._blockCount; ++i) {
        this._state[i] ^= this._blocks[i];
      }

      this.keccakPermutation(this._state);
    }
    /* @internal */

  }, {
    key: "keccakPermutation",
    value: function keccakPermutation(s) {
      // tslint:disable-next-line:one-variable-per-declaration
      var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;

      for (n = 0; n < 48; n += 2) {
        c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
        c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
        c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
        c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
        c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
        c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
        c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
        c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
        c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
        c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
        h = c8 ^ (c2 << 1 | c3 >>> 31);
        l = c9 ^ (c3 << 1 | c2 >>> 31);
        s[0] ^= h;
        s[1] ^= l;
        s[10] ^= h;
        s[11] ^= l;
        s[20] ^= h;
        s[21] ^= l;
        s[30] ^= h;
        s[31] ^= l;
        s[40] ^= h;
        s[41] ^= l;
        h = c0 ^ (c4 << 1 | c5 >>> 31);
        l = c1 ^ (c5 << 1 | c4 >>> 31);
        s[2] ^= h;
        s[3] ^= l;
        s[12] ^= h;
        s[13] ^= l;
        s[22] ^= h;
        s[23] ^= l;
        s[32] ^= h;
        s[33] ^= l;
        s[42] ^= h;
        s[43] ^= l;
        h = c2 ^ (c6 << 1 | c7 >>> 31);
        l = c3 ^ (c7 << 1 | c6 >>> 31);
        s[4] ^= h;
        s[5] ^= l;
        s[14] ^= h;
        s[15] ^= l;
        s[24] ^= h;
        s[25] ^= l;
        s[34] ^= h;
        s[35] ^= l;
        s[44] ^= h;
        s[45] ^= l;
        h = c4 ^ (c8 << 1 | c9 >>> 31);
        l = c5 ^ (c9 << 1 | c8 >>> 31);
        s[6] ^= h;
        s[7] ^= l;
        s[16] ^= h;
        s[17] ^= l;
        s[26] ^= h;
        s[27] ^= l;
        s[36] ^= h;
        s[37] ^= l;
        s[46] ^= h;
        s[47] ^= l;
        h = c6 ^ (c0 << 1 | c1 >>> 31);
        l = c7 ^ (c1 << 1 | c0 >>> 31);
        s[8] ^= h;
        s[9] ^= l;
        s[18] ^= h;
        s[19] ^= l;
        s[28] ^= h;
        s[29] ^= l;
        s[38] ^= h;
        s[39] ^= l;
        s[48] ^= h;
        s[49] ^= l;
        b0 = s[0];
        b1 = s[1];
        b32 = s[11] << 4 | s[10] >>> 28;
        b33 = s[10] << 4 | s[11] >>> 28;
        b14 = s[20] << 3 | s[21] >>> 29;
        b15 = s[21] << 3 | s[20] >>> 29;
        b46 = s[31] << 9 | s[30] >>> 23;
        b47 = s[30] << 9 | s[31] >>> 23;
        b28 = s[40] << 18 | s[41] >>> 14;
        b29 = s[41] << 18 | s[40] >>> 14;
        b20 = s[2] << 1 | s[3] >>> 31;
        b21 = s[3] << 1 | s[2] >>> 31;
        b2 = s[13] << 12 | s[12] >>> 20;
        b3 = s[12] << 12 | s[13] >>> 20;
        b34 = s[22] << 10 | s[23] >>> 22;
        b35 = s[23] << 10 | s[22] >>> 22;
        b16 = s[33] << 13 | s[32] >>> 19;
        b17 = s[32] << 13 | s[33] >>> 19;
        b48 = s[42] << 2 | s[43] >>> 30;
        b49 = s[43] << 2 | s[42] >>> 30;
        b40 = s[5] << 30 | s[4] >>> 2;
        b41 = s[4] << 30 | s[5] >>> 2;
        b22 = s[14] << 6 | s[15] >>> 26;
        b23 = s[15] << 6 | s[14] >>> 26;
        b4 = s[25] << 11 | s[24] >>> 21;
        b5 = s[24] << 11 | s[25] >>> 21;
        b36 = s[34] << 15 | s[35] >>> 17;
        b37 = s[35] << 15 | s[34] >>> 17;
        b18 = s[45] << 29 | s[44] >>> 3;
        b19 = s[44] << 29 | s[45] >>> 3;
        b10 = s[6] << 28 | s[7] >>> 4;
        b11 = s[7] << 28 | s[6] >>> 4;
        b42 = s[17] << 23 | s[16] >>> 9;
        b43 = s[16] << 23 | s[17] >>> 9;
        b24 = s[26] << 25 | s[27] >>> 7;
        b25 = s[27] << 25 | s[26] >>> 7;
        b6 = s[36] << 21 | s[37] >>> 11;
        b7 = s[37] << 21 | s[36] >>> 11;
        b38 = s[47] << 24 | s[46] >>> 8;
        b39 = s[46] << 24 | s[47] >>> 8;
        b30 = s[8] << 27 | s[9] >>> 5;
        b31 = s[9] << 27 | s[8] >>> 5;
        b12 = s[18] << 20 | s[19] >>> 12;
        b13 = s[19] << 20 | s[18] >>> 12;
        b44 = s[29] << 7 | s[28] >>> 25;
        b45 = s[28] << 7 | s[29] >>> 25;
        b26 = s[38] << 8 | s[39] >>> 24;
        b27 = s[39] << 8 | s[38] >>> 24;
        b8 = s[48] << 14 | s[49] >>> 18;
        b9 = s[49] << 14 | s[48] >>> 18;
        s[0] = b0 ^ ~b2 & b4;
        s[1] = b1 ^ ~b3 & b5;
        s[10] = b10 ^ ~b12 & b14;
        s[11] = b11 ^ ~b13 & b15;
        s[20] = b20 ^ ~b22 & b24;
        s[21] = b21 ^ ~b23 & b25;
        s[30] = b30 ^ ~b32 & b34;
        s[31] = b31 ^ ~b33 & b35;
        s[40] = b40 ^ ~b42 & b44;
        s[41] = b41 ^ ~b43 & b45;
        s[2] = b2 ^ ~b4 & b6;
        s[3] = b3 ^ ~b5 & b7;
        s[12] = b12 ^ ~b14 & b16;
        s[13] = b13 ^ ~b15 & b17;
        s[22] = b22 ^ ~b24 & b26;
        s[23] = b23 ^ ~b25 & b27;
        s[32] = b32 ^ ~b34 & b36;
        s[33] = b33 ^ ~b35 & b37;
        s[42] = b42 ^ ~b44 & b46;
        s[43] = b43 ^ ~b45 & b47;
        s[4] = b4 ^ ~b6 & b8;
        s[5] = b5 ^ ~b7 & b9;
        s[14] = b14 ^ ~b16 & b18;
        s[15] = b15 ^ ~b17 & b19;
        s[24] = b24 ^ ~b26 & b28;
        s[25] = b25 ^ ~b27 & b29;
        s[34] = b34 ^ ~b36 & b38;
        s[35] = b35 ^ ~b37 & b39;
        s[44] = b44 ^ ~b46 & b48;
        s[45] = b45 ^ ~b47 & b49;
        s[6] = b6 ^ ~b8 & b0;
        s[7] = b7 ^ ~b9 & b1;
        s[16] = b16 ^ ~b18 & b10;
        s[17] = b17 ^ ~b19 & b11;
        s[26] = b26 ^ ~b28 & b20;
        s[27] = b27 ^ ~b29 & b21;
        s[36] = b36 ^ ~b38 & b30;
        s[37] = b37 ^ ~b39 & b31;
        s[46] = b46 ^ ~b48 & b40;
        s[47] = b47 ^ ~b49 & b41;
        s[8] = b8 ^ ~b0 & b2;
        s[9] = b9 ^ ~b1 & b3;
        s[18] = b18 ^ ~b10 & b12;
        s[19] = b19 ^ ~b11 & b13;
        s[28] = b28 ^ ~b20 & b22;
        s[29] = b29 ^ ~b21 & b23;
        s[38] = b38 ^ ~b30 & b32;
        s[39] = b39 ^ ~b31 & b33;
        s[48] = b48 ^ ~b40 & b42;
        s[49] = b49 ^ ~b41 & b43;
        s[0] ^= Sha3.ROUND_CONSTANTS[n];
        s[1] ^= Sha3.ROUND_CONSTANTS[n + 1];
      }
    }
  }]);

  return Sha3;
}();
/* Padding to use for Keccak */


Sha3.KECCAK_PADDING = new Uint32Array([1, 256, 65536, 16777216]);
/* @internal */

Sha3.SHIFT = new Uint8Array([0, 8, 16, 24]);
/* @internal */

Sha3.ROUND_CONSTANTS = new Uint32Array([1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]);
exports.Sha3 = Sha3;

/***/ }),

/***/ "./dist/error/cryptoError.js":
/*!***********************************!*\
  !*** ./dist/error/cryptoError.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "../iota-pico-core/dist/error/coreError.js");
/**
 * A crypto implementation of an error.
 */


var CryptoError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(CryptoError, _coreError_1$CoreErro);

  /**
   * Create an instance of CryptoError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CryptoError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CryptoError);

    _this = _possibleConstructorReturn(this, (CryptoError.__proto__ || Object.getPrototypeOf(CryptoError)).call(this, message, additional, innerError));
    _this.domain = "Crypto";
    return _this;
  }

  return CryptoError;
}(coreError_1.CoreError);

exports.CryptoError = CryptoError;

/***/ }),

/***/ "./dist/factories/proofOfWorkFactory.js":
/*!**********************************************!*\
  !*** ./dist/factories/proofOfWorkFactory.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/factoryBase */ "../iota-pico-core/dist/factories/factoryBase.js");
/**
 * Factory to generate proof of work.
 */


var ProofOfWorkFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(ProofOfWorkFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function ProofOfWorkFactory() {
    _classCallCheck(this, ProofOfWorkFactory);

    return _possibleConstructorReturn(this, (ProofOfWorkFactory.__proto__ || Object.getPrototypeOf(ProofOfWorkFactory)).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(ProofOfWorkFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return ProofOfWorkFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!ProofOfWorkFactory._instance) {
        ProofOfWorkFactory._instance = new ProofOfWorkFactory();
      }

      return ProofOfWorkFactory._instance;
    }
  }]);

  return ProofOfWorkFactory;
}(factoryBase_1.FactoryBase);

exports.ProofOfWorkFactory = ProofOfWorkFactory;

/***/ }),

/***/ "./dist/factories/spongeFactory.js":
/*!*****************************************!*\
  !*** ./dist/factories/spongeFactory.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/factoryBase */ "../iota-pico-core/dist/factories/factoryBase.js");

var curl_1 = __webpack_require__(/*! ../sponges/curl */ "./dist/sponges/curl.js");

var kerl_1 = __webpack_require__(/*! ../sponges/kerl */ "./dist/sponges/kerl.js");
/**
 * Factory to generate sponges.
 */


var SpongeFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(SpongeFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function SpongeFactory() {
    _classCallCheck(this, SpongeFactory);

    return _possibleConstructorReturn(this, (SpongeFactory.__proto__ || Object.getPrototypeOf(SpongeFactory)).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(SpongeFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return SpongeFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!SpongeFactory._instance) {
        SpongeFactory._instance = new SpongeFactory();

        SpongeFactory._instance.register("curl", function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return new (Function.prototype.bind.apply(curl_1.Curl, [null].concat(args)))();
        });

        SpongeFactory._instance.register("curl81", function () {
          return new curl_1.Curl(81);
        });

        SpongeFactory._instance.register("curl27", function () {
          return new curl_1.Curl(27);
        });

        SpongeFactory._instance.register("kerl", function () {
          return new kerl_1.Kerl();
        });
      }

      return SpongeFactory._instance;
    }
  }]);

  return SpongeFactory;
}(factoryBase_1.FactoryBase);

exports.SpongeFactory = SpongeFactory;

/***/ }),

/***/ "./dist/hash/iss.js":
/*!**************************!*\
  !*** ./dist/hash/iss.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "../iota-pico-core/dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../iota-pico-core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var address_1 = __webpack_require__(/*! @iota-pico/data/dist/data/address */ "../iota-pico-data/dist/data/address.js");

var addressSecurity_1 = __webpack_require__(/*! @iota-pico/data/dist/data/addressSecurity */ "../iota-pico-data/dist/data/addressSecurity.js");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "../iota-pico-data/dist/data/hash.js");

var signatureMessageFragment_1 = __webpack_require__(/*! @iota-pico/data/dist/data/signatureMessageFragment */ "../iota-pico-data/dist/data/signatureMessageFragment.js");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "../iota-pico-data/dist/data/trits.js");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "../iota-pico-data/dist/data/trytes.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist/error/cryptoError.js");

var spongeFactory_1 = __webpack_require__(/*! ../factories/spongeFactory */ "./dist/factories/spongeFactory.js");
/**
 * ISS Hashing functions.
 * Converted https://github.com/iotaledger/iri/src/main/java/com/iota/iri/hash/ISS.java
 */


var ISS =
/*#__PURE__*/
function () {
  function ISS() {
    _classCallCheck(this, ISS);
  }

  _createClass(ISS, null, [{
    key: "subseed",

    /**
     * Get the subseed for the seed and index.
     * @param seed The seed.
     * @param index The index for the seed.
     * @param spongeType The sponge type to use for operations.
     * @returns The subseed.
     */
    value: function subseed(seed, index) {
      var spongeType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "curl27";

      if (!objectHelper_1.ObjectHelper.isType(seed, Int8Array)) {
        throw new cryptoError_1.CryptoError("The seed must be of type Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
        throw new cryptoError_1.CryptoError("The index must be an integer >= 0");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");
      sponge.initialize();
      var subseedPreimage = seed.slice();
      var localIndex = index;

      while (localIndex-- > 0) {
        for (var i = 0; i < subseedPreimage.length; i++) {
          if (++subseedPreimage[i] > ISS.MAX_TRIT_VALUE) {
            subseedPreimage[i] = ISS.MIN_TRIT_VALUE;
          } else {
            break;
          }
        }
      }

      var subseed = new Int8Array(hashLength);
      sponge.absorb(subseedPreimage, 0, subseedPreimage.length);
      sponge.squeeze(subseed, 0, subseed.length);
      return subseed;
    }
    /**
     * Create the key for the seed.
     * @param seed The seed to create the key for.
     * @param index The index to use for the seed.
     * @param length The security level to create the key.
     * @param spongeType The sponge type to use for operations.
     * @returns the key.
     */

  }, {
    key: "key",
    value: function key(seed, index, security) {
      var spongeType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "kerl";

      if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
        throw new cryptoError_1.CryptoError("The seed must be of type Hash");
      }

      if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
        throw new cryptoError_1.CryptoError("The index must be an integer >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(security) || security < addressSecurity_1.AddressSecurity.low || security > addressSecurity_1.AddressSecurity.high) {
        throw new cryptoError_1.CryptoError("The security must be an integer >= 1 and <= 3");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var seedTrits = trits_1.Trits.fromTrytes(seed.toTrytes());
      var indexTrits = trits_1.Trits.fromNumber(index);
      var subseed = trits_1.Trits.add(seedTrits, indexTrits).toArray();
      var subseedLength = subseed.length;
      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");
      sponge.initialize();
      sponge.absorb(subseed, 0, subseedLength);
      sponge.squeeze(subseed, 0, subseedLength);
      sponge.reset();
      sponge.absorb(subseed, 0, subseedLength);
      var key = new Int8Array(ISS.NUMBER_OF_FRAGMENT_CHUNKS * hashLength * security);
      var offset = 0;
      var buffer = new Int8Array(subseedLength);
      var localLength = security;

      while (localLength-- > 0) {
        for (var i = 0; i < ISS.NUMBER_OF_FRAGMENT_CHUNKS; i++) {
          sponge.squeeze(buffer, 0, subseedLength);

          for (var j = 0; j < hashLength; j++) {
            key[offset++] = buffer[j];
          }
        }
      }

      return key;
    }
    /**
     * Create the digests for the given subseed.
     * @param subseed To create the digests for.
     * @param spongeType The sponge type to use for operations.
     * @returns The digests.
     */

  }, {
    key: "digests",
    value: function digests(subseed) {
      var spongeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "kerl";

      if (!objectHelper_1.ObjectHelper.isType(subseed, Int8Array)) {
        throw new cryptoError_1.CryptoError("The subseed must be of type Int8Array");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");
      var fragmentLength = hashLength * ISS.NUMBER_OF_FRAGMENT_CHUNKS;

      if (subseed.length % fragmentLength !== 0) {
        throw new cryptoError_1.CryptoError("The subseed length must be a multiple of ".concat(fragmentLength));
      }

      var tryteRange = ISS.MAX_TRYTE_VALUE - ISS.MIN_TRYTE_VALUE;
      var keyLenDiv = subseed.length / fragmentLength;
      var digests = new Int8Array(keyLenDiv * hashLength);
      var buffer;

      for (var i = 0; i < keyLenDiv; i++) {
        var iMul = i * fragmentLength;
        var keyFragment = subseed.slice(iMul, iMul + fragmentLength);

        for (var j = 0; j < ISS.NUMBER_OF_FRAGMENT_CHUNKS; j++) {
          var jMul = j * hashLength;
          buffer = keyFragment.slice(jMul, jMul + hashLength);

          for (var k = 0; k < tryteRange; k++) {
            sponge.reset();
            sponge.absorb(buffer, 0, buffer.length);
            sponge.squeeze(buffer, 0, hashLength);
          }

          for (var _k = 0; _k < hashLength; _k++) {
            keyFragment[jMul + _k] = buffer[_k];
          }
        }

        sponge.reset();
        sponge.absorb(keyFragment, 0, keyFragment.length);
        sponge.squeeze(buffer, 0, hashLength);
        var iMul2 = i * hashLength;

        for (var _j = 0; _j < hashLength; _j++) {
          digests[iMul2 + _j] = buffer[_j];
        }
      }

      return digests;
    }
    /**
     * Create the address for the digests.
     * @param digests The digests to create the address for.
     * @param spongeType The sponge type to use for operations.
     * @returns the address trits.
     */

  }, {
    key: "address",
    value: function address(digests) {
      var spongeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "kerl";

      if (!objectHelper_1.ObjectHelper.isType(digests, Int8Array)) {
        throw new cryptoError_1.CryptoError("The digests must be of type Int8Array");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");

      if (digests.length % hashLength !== 0) {
        throw new cryptoError_1.CryptoError("Invalid digests length, must be a multiple of ".concat(hashLength));
      }

      sponge.initialize();
      sponge.absorb(digests, 0, digests.length);
      var addressTrits = new Int8Array(hashLength);
      sponge.squeeze(addressTrits, 0, addressTrits.length);
      return addressTrits;
    }
    /**
     * Create digest of the normalized bundle fragment.
     * @param normalizedBundleFragment The fragment to create digest.
     * @param signatureMessageFragment The trits for signature message fragment.
     * @param spongeType The sponge type to use for operations.
     * @returns The digest of the bundle and signature message fragment.
     */

  }, {
    key: "digest",
    value: function digest(normalizedBundleFragment, signatureMessageFragment) {
      var spongeType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "kerl";

      if (!objectHelper_1.ObjectHelper.isType(normalizedBundleFragment, Int8Array)) {
        throw new cryptoError_1.CryptoError("The normalizedBundleFragment must be of type Int8Array");
      }

      if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, Int8Array)) {
        throw new cryptoError_1.CryptoError("The signatureMessageFragment must be of type Int8Array");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var buffer;
      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");
      sponge.initialize();

      for (var i = 0; i < ISS.NUMBER_OF_FRAGMENT_CHUNKS; i++) {
        buffer = new Int8Array(signatureMessageFragment.slice(i * hashLength, (i + 1) * hashLength));

        for (var j = normalizedBundleFragment[i] - ISS.MIN_TRYTE_VALUE; j > 0; j--) {
          var sponge2 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
          sponge2.initialize();
          sponge2.absorb(buffer, 0, buffer.length);
          sponge2.squeeze(buffer, 0, sponge2.getConstant("HASH_LENGTH"));
        }

        sponge.absorb(buffer, 0, buffer.length);
      }

      sponge.squeeze(buffer, 0, sponge.getConstant("HASH_LENGTH"));
      return buffer;
    }
    /**
     * Get the digest for the subseed.
     * @param subseed The subseed to get the digest for.
     * @param security The security level.
     * @param spongeType The sponge type to use for operations.
     * @returns The digest.
     */

  }, {
    key: "subseedToDigest",
    value: function subseedToDigest(subseed, security) {
      var spongeType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "curl27";

      if (!objectHelper_1.ObjectHelper.isType(subseed, Int8Array)) {
        throw new cryptoError_1.CryptoError("The subseed must be of type Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(security) || security < addressSecurity_1.AddressSecurity.low || security > addressSecurity_1.AddressSecurity.high) {
        throw new cryptoError_1.CryptoError("The security must be an integer >= 1 and <= 3");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var c1 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var c2 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var c3 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      c1.initialize();
      c2.initialize();
      c3.initialize();
      var hashLength = c1.getConstant("HASH_LENGTH");
      var keyLength = hashLength / 3 / ISS.RADIX * hashLength;
      var length = security * keyLength / hashLength;
      var out = new Int8Array(hashLength);
      c1.absorb(subseed, 0, subseed.length);

      for (var i = 0; i < length; i++) {
        c1.squeeze(out, 0, out.length);

        for (var j = 0; j < ISS.MAX_TRYTE_VALUE - ISS.MIN_TRYTE_VALUE + 1; j++) {
          c2.reset();
          c2.absorb(out, 0, out.length);
          out = c2.getState().slice(0, hashLength);
        }

        c3.absorb(out, 0, out.length);
      }

      c3.squeeze(out, 0, out.length);
      return out;
    }
    /**
     * Create a normalized bundle.
     * @param bundleHash The hash of the bundle.
     * @param spongeType The sponge type to use for operations.
     * @returns the normalized bundle.
     */

  }, {
    key: "normalizedBundle",
    value: function normalizedBundle(bundleHash) {
      var spongeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "curl81";

      if (!objectHelper_1.ObjectHelper.isType(bundleHash, hash_1.Hash)) {
        throw new cryptoError_1.CryptoError("The bundleHash must be of type Hash");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");
      var normalizedBundle = new Int8Array(ISS.NUMBER_OF_FRAGMENT_CHUNKS * ISS.NUMBER_OF_SECURITY_LEVELS);
      var hashString = bundleHash.toTrytes().toString();
      var normalizedFragmentLength = hashLength / ISS.TRYTE_WIDTH / ISS.NUMBER_OF_SECURITY_LEVELS;

      for (var i = 0; i < ISS.NUMBER_OF_SECURITY_LEVELS; i++) {
        var sum = 0;

        for (var j = 0; j < normalizedFragmentLength; j++) {
          var hashChar = hashString.charAt(i * normalizedFragmentLength + j);
          var val = trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(hashChar)).toNumber();
          normalizedBundle[i * normalizedFragmentLength + j] = val;
          sum += val;
        }

        if (sum >= 0) {
          while (sum-- > 0) {
            for (var _j2 = 0; _j2 < normalizedFragmentLength; _j2++) {
              if (normalizedBundle[i * normalizedFragmentLength + _j2] > ISS.MIN_TRYTE_VALUE) {
                normalizedBundle[i * normalizedFragmentLength + _j2]--;
                break;
              }
            }
          }
        } else {
          while (sum++ < 0) {
            for (var _j3 = 0; _j3 < normalizedFragmentLength; _j3++) {
              if (normalizedBundle[i * normalizedFragmentLength + _j3] < ISS.MAX_TRYTE_VALUE) {
                normalizedBundle[i * normalizedFragmentLength + _j3]++;
                break;
              }
            }
          }
        }
      }

      return normalizedBundle;
    }
    /**
     * Validate the signature fragments from the address.
     * @param expectedAddress The address.
     * @param signatureMessageFragments The signature message fragments.
     * @param bundleHash The hash for the bundle.
     * @param spongeType The sponge type to use for operations.
     * @returns True if the signature message fragment are signed by the expected address.
     */

  }, {
    key: "validateSignatures",
    value: function validateSignatures(expectedAddress, signatureMessageFragments, bundleHash) {
      var spongeType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "kerl";

      if (!objectHelper_1.ObjectHelper.isType(expectedAddress, address_1.Address)) {
        throw new cryptoError_1.CryptoError("The expectedAddress must be of type Hash");
      }

      if (!arrayHelper_1.ArrayHelper.isTyped(signatureMessageFragments, signatureMessageFragment_1.SignatureMessageFragment)) {
        throw new cryptoError_1.CryptoError("The signatureMessageFragments must be an array of type SignatureMessageFragment");
      }

      if (!objectHelper_1.ObjectHelper.isType(bundleHash, hash_1.Hash)) {
        throw new cryptoError_1.CryptoError("The bundleHash must be of type Hash");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var normalizedBundleFragments = [];
      var normalizedBundleHash = ISS.normalizedBundle(bundleHash);
      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");

      for (var f = 0; f < 3; f++) {
        normalizedBundleFragments[f] = normalizedBundleHash.slice(f * ISS.NUMBER_OF_FRAGMENT_CHUNKS, (f + 1) * ISS.NUMBER_OF_FRAGMENT_CHUNKS);
      }

      var digests = new Int8Array(signatureMessageFragments.length * hashLength);

      for (var i = 0; i < signatureMessageFragments.length; i++) {
        var digestBuffer = ISS.digest(normalizedBundleFragments[i % 3], trits_1.Trits.fromTrytes(signatureMessageFragments[i].toTrytes()).toArray());

        for (var j = 0; j < hashLength; j++) {
          digests[i * hashLength + j] = digestBuffer[j];
        }
      }

      return expectedAddress.toTrytes().toString() === trits_1.Trits.fromArray(ISS.address(digests)).toTrytes().toString();
    }
    /**
     * Create a signed signature message fragment.
     * @param normalizedBundleFragment The fragment to sign.
     * @param keyFragment The key fragment to sign with.
     * @param spongeType The sponge type to use for operations.
     * @returns The signed fragment.
     */

  }, {
    key: "signatureMessageFragment",
    value: function signatureMessageFragment(normalizedBundleFragment, keyFragment) {
      var spongeType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "kerl";

      if (!objectHelper_1.ObjectHelper.isType(normalizedBundleFragment, Int8Array)) {
        throw new cryptoError_1.CryptoError("The normalizedBundleFragment must be of type Int8Array");
      }

      if (!objectHelper_1.ObjectHelper.isType(keyFragment, Int8Array)) {
        throw new cryptoError_1.CryptoError("The keyFragment must be of type Int8Array");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var signatureMessageFragment = keyFragment.slice();
      var hash;
      var kerl = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = kerl.getConstant("HASH_LENGTH");

      for (var i = 0; i < 27; i++) {
        hash = signatureMessageFragment.slice(i * hashLength, (i + 1) * hashLength);

        for (var j = 0; j < 13 - normalizedBundleFragment[i]; j++) {
          kerl.initialize();
          kerl.reset();
          kerl.absorb(hash, 0, hashLength);
          kerl.squeeze(hash, 0, hashLength);
        }

        for (var _j4 = 0; _j4 < hashLength; _j4++) {
          signatureMessageFragment[i * hashLength + _j4] = hash[_j4];
        }
      }

      return signatureMessageFragment;
    }
  }]);

  return ISS;
}();
/* @internal */


ISS.NUMBER_OF_FRAGMENT_CHUNKS = 27;
/* @internal */

ISS.NUMBER_OF_SECURITY_LEVELS = 3;
/* @internal */

ISS.TRYTE_WIDTH = 3;
/* @internal */

ISS.MIN_TRYTE_VALUE = -13;
/* @internal */

ISS.MAX_TRYTE_VALUE = 13;
/* @internal */

ISS.MIN_TRIT_VALUE = -1;
/* @internal */

ISS.MAX_TRIT_VALUE = 1;
/* @internal */

ISS.RADIX = 3;
exports.ISS = ISS;

/***/ }),

/***/ "./dist/helpers/bigIntegerHelper.js":
/*!******************************************!*\
  !*** ./dist/helpers/bigIntegerHelper.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../iota-pico-core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js"); // tslint:disable-next-line:import-name


var big_integer_1 = __importDefault(__webpack_require__(/*! big-integer */ "big-integer"));

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist/error/cryptoError.js");
/**
 * Helper class to convert between BigInteger and other types.
 * Converted from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */


var BigIntegerHelper =
/*#__PURE__*/
function () {
  function BigIntegerHelper() {
    _classCallCheck(this, BigIntegerHelper);
  }

  _createClass(BigIntegerHelper, null, [{
    key: "tritsToBigInteger",

    /**
     * Convert trits to a bigInteger.
     * @param trits The trits to convert.
     * @param offset Offset within the array to start.
     * @param length The length of the trits array to convert.
     */
    value: function tritsToBigInteger(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("The trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (offset + length > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
      }

      var value = big_integer_1.default.zero;

      for (var i = length - 1; i >= 0; i--) {
        value = value.multiply(BigIntegerHelper.RADIX).add(big_integer_1.default(trits[offset + i]));
      }

      return value;
    }
    /**
     * Convert bigInteger to trits.
     * @param value The bigInteger to convert to trits.
     * @param trits The array to receive the trits.
     * @param offset The offset to place the trits in the array.
     * @param length The length of the array.
     */

  }, {
    key: "bigIntegerToTrits",
    value: function bigIntegerToTrits(value, trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
        throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
      }

      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array)) {
        throw new cryptoError_1.CryptoError("The trits must be an Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (offset + length > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
      }

      var absoluteValue = value.compareTo(big_integer_1.default.zero) < 0 ? value.negate() : value;

      for (var i = 0; i < length; i++) {
        var divRemainder = absoluteValue.divmod(BigIntegerHelper.RADIX);
        absoluteValue = divRemainder.quotient;
        var remainder = divRemainder.remainder;

        if (remainder > BigIntegerHelper.MAX_TRIT_VALUE) {
          remainder = BigIntegerHelper.MIN_TRIT_VALUE;
          absoluteValue = absoluteValue.add(big_integer_1.default["1"]);
        }

        trits[offset + i] = remainder.toJSNumber();
      }

      if (value.compareTo(big_integer_1.default.zero) < 0) {
        for (var _i = 0; _i < length; _i++) {
          // Avoid negative zero
          trits[offset + _i] = trits[offset + _i] === 0 ? 0 : -trits[offset + _i];
        }
      }
    }
    /**
     * Convert the bigInteger into bytes.
     * @param value The value to convert.
     * @param destination The destination array to store the bytes.
     * @param offset The offset within the array to store the bytes.
     */

  }, {
    key: "bigIntegerToBytes",
    value: function bigIntegerToBytes(value, destination, offset) {
      if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
        throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
      }

      if (!objectHelper_1.ObjectHelper.isType(destination, ArrayBuffer) || destination.byteLength === 0) {
        throw new cryptoError_1.CryptoError("The destination must be an array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (destination.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
        throw new cryptoError_1.CryptoError("Destination array has invalid size, it must be at least ".concat(BigIntegerHelper.BYTE_HASH_LENGTH));
      } // Remember if it is negative for later


      var isNeg = value.isNegative() ? -1 : 0;
      var hexString = value.toString(16);

      if (isNeg === -1) {
        // But remove it for now
        hexString = hexString.slice(1);
      } // Now make sure the hex string is an even length so the regex works


      if (hexString.length % 2 === 1) {
        hexString = "0".concat(hexString);
      }

      var matches = hexString.match(/[0-9a-f]{2}/g); // Convert the hex to numbers

      var signedBytes = new Int8Array(matches.map(function (hex) {
        return parseInt("0x".concat(hex), 16);
      }));

      if (isNeg === -1) {
        BigIntegerHelper.twosComplement(signedBytes);
      }

      var dataView = new DataView(destination); // Pad the start of the buffer with the neg value

      var i = offset;

      while (i + signedBytes.length < BigIntegerHelper.BYTE_HASH_LENGTH) {
        dataView.setInt8(i++, isNeg);
      } // And copy in the actual bytes


      for (var j = signedBytes.length; j-- > 0;) {
        dataView.setInt8(i++, signedBytes[signedBytes.length - 1 - j]);
      }
    }
    /**
     * Convert bytes to a bigInteger.
     * @param source The source bytes.
     * @param offset The offset within the bytes to start conversion.
     * @param length The length of the bytes to use for conversion.
     */

  }, {
    key: "bytesToBigInteger",
    value: function bytesToBigInteger(source, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(source, ArrayBuffer) || source.byteLength === 0) {
        throw new cryptoError_1.CryptoError("The source must be a non empty number array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (source.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
        throw new cryptoError_1.CryptoError("Source array has invalid size, it must be at least ".concat(BigIntegerHelper.BYTE_HASH_LENGTH));
      }

      var dataView = new DataView(source);
      var signedBytes = new Int8Array(dataView.byteLength);

      for (var b = 0; b < dataView.byteLength; b++) {
        signedBytes[b] = dataView.getInt8(b + offset);
      } // Remove the initial padding leaving at least one byte


      var paddingOffset = 0;
      var firstByte = signedBytes[0];
      var isNeg = firstByte < 0; // If the first padding character is negative then reverse the 2s complement
      // but first strip of the leading padding

      if (firstByte === 0 || firstByte === -1) {
        while (signedBytes[paddingOffset] === firstByte && paddingOffset < signedBytes.length - 1) {
          paddingOffset++;
        } // Strip any padding


        signedBytes = signedBytes.slice(paddingOffset);
      }

      if (isNeg) {
        BigIntegerHelper.twosComplement(signedBytes);
      }

      var hexString = isNeg ? "-" : "";
      var dv = new DataView(signedBytes.buffer);

      for (var h = 0; h < dv.byteLength; h++) {
        hexString += "00".concat(dv.getUint8(h).toString(16)).slice(-2);
      }

      return big_integer_1.default(hexString, 16);
    }
    /* @internal */

  }, {
    key: "twosComplement",
    value: function twosComplement(signedBytes) {
      // if the whole number is negative then
      // change to 2's complements by noting all the numbers
      // and adding 1 to the last i.e. ~bignum+1
      for (var b = 0; b < signedBytes.length; b++) {
        signedBytes[b] = ~signedBytes[b];
      } // Add 1 to last number, if the number is 0xFF continue to carry


      var c = signedBytes.length - 1;

      do {
        signedBytes[c]++;
      } while (signedBytes[c--] === 0 && c > 0);
    }
  }]);

  return BigIntegerHelper;
}();
/* @internal */


BigIntegerHelper.RADIX = big_integer_1.default(3);
/* @internal */

BigIntegerHelper.MAX_TRIT_VALUE = BigIntegerHelper.RADIX.minus(1).divide(2);
/* @internal */

BigIntegerHelper.MIN_TRIT_VALUE = BigIntegerHelper.MAX_TRIT_VALUE.negate();
/* @internal */

BigIntegerHelper.BIT_HASH_LENGTH = 384;
/* @internal */

BigIntegerHelper.BYTE_HASH_LENGTH = BigIntegerHelper.BIT_HASH_LENGTH / 8;
exports.BigIntegerHelper = BigIntegerHelper;

/***/ }),

/***/ "./dist/helpers/transactionHelper.js":
/*!*******************************************!*\
  !*** ./dist/helpers/transactionHelper.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "../iota-pico-data/dist/data/hash.js");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "../iota-pico-data/dist/data/transaction.js");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "../iota-pico-data/dist/data/trits.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist/error/cryptoError.js");

var spongeFactory_1 = __webpack_require__(/*! ../factories/spongeFactory */ "./dist/factories/spongeFactory.js");
/**
 * Helper class for transactions.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */


var TransactionHelper =
/*#__PURE__*/
function () {
  function TransactionHelper() {
    _classCallCheck(this, TransactionHelper);
  }

  _createClass(TransactionHelper, null, [{
    key: "hash",

    /**
     * Create the hash for a transaction.
     * @param transaction The transaction to generate the hash.
     * @returns The hash of thr transaction.
     */
    value: function hash(transaction) {
      if (!objectHelper_1.ObjectHelper.isType(transaction, transaction_1.Transaction)) {
        throw new cryptoError_1.CryptoError("The transaction must be of type Transaction");
      }

      var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
      var transactionTrits = trits_1.Trits.fromTrytes(transaction.toTrytes()).toArray();
      curl.initialize();
      curl.absorb(transactionTrits, 0, transactionTrits.length);
      var hashTrits = new Int8Array(curl.getConstant("HASH_LENGTH"));
      curl.squeeze(hashTrits, 0, hashTrits.length);
      return hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());
    }
  }]);

  return TransactionHelper;
}();

exports.TransactionHelper = TransactionHelper;

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(/*! ./digests/sha3 */ "./dist/digests/sha3.js"));

__export(__webpack_require__(/*! ./error/cryptoError */ "./dist/error/cryptoError.js"));

__export(__webpack_require__(/*! ./factories/proofOfWorkFactory */ "./dist/factories/proofOfWorkFactory.js"));

__export(__webpack_require__(/*! ./factories/spongeFactory */ "./dist/factories/spongeFactory.js"));

__export(__webpack_require__(/*! ./hash/iss */ "./dist/hash/iss.js"));

__export(__webpack_require__(/*! ./helpers/bigIntegerHelper */ "./dist/helpers/bigIntegerHelper.js"));

__export(__webpack_require__(/*! ./helpers/transactionHelper */ "./dist/helpers/transactionHelper.js"));

__export(__webpack_require__(/*! ./proofOfWork/proofOfWorkBase */ "./dist/proofOfWork/proofOfWorkBase.js"));

__export(__webpack_require__(/*! ./sponges/curl */ "./dist/sponges/curl.js"));

__export(__webpack_require__(/*! ./sponges/kerl */ "./dist/sponges/kerl.js"));

/***/ }),

/***/ "./dist/proofOfWork/proofOfWorkBase.js":
/*!*********************************************!*\
  !*** ./dist/proofOfWork/proofOfWorkBase.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "../iota-pico-core/dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../iota-pico-core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var timeService_1 = __webpack_require__(/*! @iota-pico/core/dist/services/timeService */ "../iota-pico-core/dist/services/timeService.js");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "../iota-pico-data/dist/data/hash.js");

var tag_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tag */ "../iota-pico-data/dist/data/tag.js");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "../iota-pico-data/dist/data/transaction.js");

var tryteNumber_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tryteNumber */ "../iota-pico-data/dist/data/tryteNumber.js");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "../iota-pico-data/dist/data/trytes.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist/error/cryptoError.js");

var transactionHelper_1 = __webpack_require__(/*! ../helpers/transactionHelper */ "./dist/helpers/transactionHelper.js");
/**
 * Base class for proof of work.
 */


var ProofOfWorkBase =
/*#__PURE__*/
function () {
  /**
   * Create an instance of ProofOfWork.
   * @param timeService Service to get the time for attachments.
   */
  function ProofOfWorkBase(timeService) {
    _classCallCheck(this, ProofOfWorkBase);

    this._timeService = timeService || new timeService_1.TimeService();
  }
  /**
   * Allow the proof of work to perform any initialization.
   * Will throw an exception if the implementation is not supported.
   */


  _createClass(ProofOfWorkBase, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.resolve());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */

  }, {
    key: "pow",
    value: function () {
      var _pow = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(trunkTransaction, branchTransaction, trytes, minWeightMagnitude) {
        var finalTrytes, previousTransactionHash, i, transaction, newTrytes, singleTrytes, returnTransaction;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
                  _context2.next = 2;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trunkTransaction must be an object of type Hash");

              case 2:
                if (objectHelper_1.ObjectHelper.isType(branchTransaction, hash_1.Hash)) {
                  _context2.next = 4;
                  break;
                }

                throw new cryptoError_1.CryptoError("The branchTransaction must be an object of type Hash");

              case 4:
                if (arrayHelper_1.ArrayHelper.isTyped(trytes, trytes_1.Trytes)) {
                  _context2.next = 6;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trytes must be an array of type Trytes");

              case 6:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context2.next = 8;
                  break;
                }

                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");

              case 8:
                finalTrytes = [];
                i = 0;

              case 10:
                if (!(i < trytes.length)) {
                  _context2.next = 35;
                  break;
                }

                transaction = transaction_1.Transaction.fromTrytes(trytes[i]); // Start with last index transaction
                // Assign it the trunk / branch which the user has supplied
                // If there is a bundle, chain the bundle transactions via
                // trunkTransaction together

                transaction.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(this._timeService.msSinceEpoch());
                transaction.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(0);
                transaction.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(ProofOfWorkBase.MAX_TIMESTAMP_VALUE); // If this is the first transaction, to be processed
                // Make sure that it's the last in the bundle and then
                // assign it the supplied trunk and branch transactions

                if (!objectHelper_1.ObjectHelper.isEmpty(previousTransactionHash)) {
                  _context2.next = 22;
                  break;
                }

                if (!(transaction.lastIndex.toNumber() !== transaction.currentIndex.toNumber())) {
                  _context2.next = 18;
                  break;
                }

                throw new cryptoError_1.CryptoError("Wrong bundle order. The bundle should be ordered in descending order from currentIndex");

              case 18:
                transaction.trunkTransaction = trunkTransaction;
                transaction.branchTransaction = branchTransaction;
                _context2.next = 24;
                break;

              case 22:
                transaction.trunkTransaction = previousTransactionHash;
                transaction.branchTransaction = trunkTransaction;

              case 24:
                newTrytes = transaction.toTrytes();
                _context2.next = 27;
                return this.singlePow(newTrytes, minWeightMagnitude);

              case 27:
                singleTrytes = _context2.sent;
                transaction.nonce = tag_1.Tag.fromTrytes(singleTrytes.sub(transaction_1.Transaction.LENGTH - tag_1.Tag.LENGTH, tag_1.Tag.LENGTH)); // Calculate the hash of the new transaction with nonce and use that as the previous hash for next entry

                returnTransaction = transaction_1.Transaction.fromTrytes(singleTrytes);
                previousTransactionHash = transactionHelper_1.TransactionHelper.hash(returnTransaction);
                finalTrytes.push(returnTransaction);

              case 32:
                i++;
                _context2.next = 10;
                break;

              case 35:
                return _context2.abrupt("return", finalTrytes.reverse().map(function (transaction) {
                  return transaction.toTrytes();
                }));

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function pow(_x, _x2, _x3, _x4) {
        return _pow.apply(this, arguments);
      };
    }()
  }]);

  return ProofOfWorkBase;
}();
/**
 * The maximum timestamp value used in proof of work.
 */


ProofOfWorkBase.MAX_TIMESTAMP_VALUE = (Math.pow(3, 27) - 1) / 2;
exports.ProofOfWorkBase = ProofOfWorkBase;

/***/ }),

/***/ "./dist/sponges/curl.js":
/*!******************************!*\
  !*** ./dist/sponges/curl.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../iota-pico-core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist/error/cryptoError.js");
/**
 * Implementation of ISponge using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 */


var Curl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Curl.
   * @param rounds The number of rounds to use.
   */
  function Curl() {
    var rounds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Curl.NUMBER_OF_ROUNDS;

    _classCallCheck(this, Curl);

    this._numberOfRounds = rounds;
  }
  /**
   * Get the constant for the spone.
   * @name The name of the contant to get.
   * @returns The constant.
   */


  _createClass(Curl, [{
    key: "getConstant",
    value: function getConstant(name) {
      switch (name) {
        case "NUMBER_OF_ROUNDS":
          {
            return this._numberOfRounds;
          }

        case "HASH_LENGTH":
        case "STATE_LENGTH":
          {
            return Curl[name];
          }

        default:
          throw new cryptoError_1.CryptoError("Unknown constant requested ".concat(name));
      }
    }
    /**
     * Get the state.
     * @returns The state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return this._state;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */

  }, {
    key: "initialize",
    value: function initialize(state) {
      if (state) {
        this._state = state;
      } else {
        this._state = new Int8Array(Curl.STATE_LENGTH);
      }
    }
    /**
     * Reset the hasher.
     */

  }, {
    key: "reset",
    value: function reset() {
      this.initialize();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */

  }, {
    key: "absorb",
    value: function absorb(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var i = 0;
        var limit = localLength < Curl.HASH_LENGTH ? localLength : Curl.HASH_LENGTH;

        while (i < limit) {
          this._state[i++] = trits[localOffset++];
        }

        this.transform();
        localLength -= Curl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */

  }, {
    key: "squeeze",
    value: function squeeze(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var i = 0;
        var limit = localLength < Curl.HASH_LENGTH ? length : Curl.HASH_LENGTH;

        while (i < limit) {
          trits[localOffset++] = this._state[i++];
        }

        this.transform();
        localLength -= Curl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Transform the hash.
     * @internal
     */

  }, {
    key: "transform",
    value: function transform() {
      var stateCopy;
      var index = 0;

      for (var round = 0; round < this._numberOfRounds; round++) {
        stateCopy = new Int8Array(this._state.slice());

        for (var i = 0; i < Curl.STATE_LENGTH; i++) {
          this._state[i] = Curl.TRUTH_TABLE[stateCopy[index] + (stateCopy[index += index < 365 ? 364 : -365] << 2) + 5];
        }
      }
    }
  }]);

  return Curl;
}();

Curl.HASH_LENGTH = 243;
Curl.NUMBER_OF_ROUNDS = 81;
Curl.STATE_LENGTH = Curl.HASH_LENGTH * 3;
/* @internal */

Curl.TRUTH_TABLE = new Int8Array([1, 0, -1, 2, 1, -1, 0, 2, -1, 1, 0]);
exports.Curl = Curl;

/***/ }),

/***/ "./dist/sponges/kerl.js":
/*!******************************!*\
  !*** ./dist/sponges/kerl.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../iota-pico-core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../iota-pico-core/dist/helpers/objectHelper.js");

var sha3_1 = __webpack_require__(/*! ../digests/sha3 */ "./dist/digests/sha3.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist/error/cryptoError.js");

var bigIntegerHelper_1 = __webpack_require__(/*! ../helpers/bigIntegerHelper */ "./dist/helpers/bigIntegerHelper.js");
/**
 * Implementation of ISponge using Kerl algorithm.
 * https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */


var Kerl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Kerl.
   */
  function Kerl() {
    _classCallCheck(this, Kerl);

    this._keccak = new sha3_1.Sha3(384, sha3_1.Sha3.KECCAK_PADDING, 384);
  }
  /**
   * Get the constant for the spone.
   * @name The name of the contant to get.
   * @returns The constant.
   */


  _createClass(Kerl, [{
    key: "getConstant",
    value: function getConstant(name) {
      switch (name) {
        case "HASH_LENGTH":
        case "BIT_HASH_LENGTH":
        case "BYTE_HASH_LENGTH":
          {
            return Kerl[name];
          }

        default:
          throw new cryptoError_1.CryptoError("Unknown constant requested ".concat(name));
      }
    }
    /**
     * Get the state.
     * @returns The state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return undefined;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */

  }, {
    key: "initialize",
    value: function initialize(state) {}
    /**
     * Reset the hasher.
     */

  }, {
    key: "reset",
    value: function reset() {
      this._keccak.reset();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */

  }, {
    key: "absorb",
    value: function absorb(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      if (length % 243 !== 0) {
        throw new cryptoError_1.CryptoError("Length must be a multiple of ".concat(Kerl.HASH_LENGTH), {
          length: length
        });
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var tritState = trits.slice(localOffset, localOffset + Kerl.HASH_LENGTH);
        tritState[Kerl.HASH_LENGTH - 1] = 0;
        var bigInt = bigIntegerHelper_1.BigIntegerHelper.tritsToBigInteger(tritState, 0, tritState.length);
        var byteState = new ArrayBuffer(Kerl.BYTE_HASH_LENGTH);
        bigIntegerHelper_1.BigIntegerHelper.bigIntegerToBytes(bigInt, byteState, 0);

        this._keccak.update(byteState);

        localOffset += Kerl.HASH_LENGTH;
        localLength -= Kerl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */

  }, {
    key: "squeeze",
    value: function squeeze(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      if (length % 243 !== 0) {
        throw new cryptoError_1.CryptoError("Length must be a multiple of ".concat(Kerl.HASH_LENGTH), {
          length: length
        });
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var byteStateBuffer = this._keccak.digest();

        var bigInt = bigIntegerHelper_1.BigIntegerHelper.bytesToBigInteger(byteStateBuffer, 0, Kerl.BYTE_HASH_LENGTH);
        var tritState = new Int8Array(Kerl.HASH_LENGTH);
        bigIntegerHelper_1.BigIntegerHelper.bigIntegerToTrits(bigInt, tritState, 0, Kerl.HASH_LENGTH);
        tritState[Kerl.HASH_LENGTH - 1] = 0;
        var i = 0;

        while (i < Kerl.HASH_LENGTH) {
          trits[localOffset++] = tritState[i++];
        }

        var dv = new DataView(byteStateBuffer);

        for (i = 0; i < dv.byteLength; i++) {
          dv.setUint8(i, dv.getUint8(i) ^ 0xFF);
        }

        this._keccak.update(byteStateBuffer);

        localLength -= Kerl.HASH_LENGTH;
      } while (localLength > 0);
    }
  }]);

  return Kerl;
}();
/* @internal */


Kerl.HASH_LENGTH = 243;
/* @internal */

Kerl.BIT_HASH_LENGTH = 384;
/* @internal */

Kerl.BYTE_HASH_LENGTH = Kerl.BIT_HASH_LENGTH / 8;
exports.Kerl = Kerl;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "big-integer":
/*!*********************************************************************************************************!*\
  !*** external {"amd":"big-integer","commonjs":"big-integer","commonjs2":"big-integer","root":"bigInt"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_big_integer__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9oZWxwZXJzL2FycmF5SGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2hlbHBlcnMvbnVtYmVySGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9oZWxwZXJzL29iamVjdEhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL3NlcnZpY2VzL3RpbWVTZXJ2aWNlLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9kYXRhL2FkZHJlc3MudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2RhdGEvYWRkcmVzc1NlY3VyaXR5LnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9kYXRhL2hhc2gudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9kYXRhL3RhZy50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZGF0YS90cmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZGF0YS90cml0cy50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZGF0YS90cnl0ZU51bWJlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZGF0YS90cnl0ZXMudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2Vycm9yL2RhdGFFcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZGlnZXN0cy9zaGEzLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9lcnJvci9jcnlwdG9FcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZmFjdG9yaWVzL3Byb29mT2ZXb3JrRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2hhc2gvaXNzLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9oZWxwZXJzL2JpZ0ludGVnZXJIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL3Nwb25nZXMvY3VybC50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvc3Bvbmdlcy9rZXJsLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvL2V4dGVybmFsIHtcImFtZFwiOlwiYmlnLWludGVnZXJcIixcImNvbW1vbmpzXCI6XCJiaWctaW50ZWdlclwiLFwiY29tbW9uanMyXCI6XCJiaWctaW50ZWdlclwiLFwicm9vdFwiOlwiYmlnSW50XCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSx1Q0FBbUQ7O0FBQ25ELHlDQUF1RDtBQUt2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QUFJLE1BQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFLO0FBQ3hDLGFBQUksRUFBRyxLQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUs7QUFDeEMsYUFBSSxFQUFHLEtBQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSztBQUV6QyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07QUFDVCxVQUFHLE1BQU07QUFDVCxVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07QUFDVCxVQUFHLE1BQU07QUFDVCxVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07QUFDVCxVQUFHLE1BQU07QUFDVCxVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07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SSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFHLEtBQVEsS0FBQyxDQUFHLEtBQU87QUFDdEIsVUFBRyxLQUFRLEtBQUMsQ0FBRyxLQUFPO0FBQ3RCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBRyxLQUFRLEtBQUMsQ0FBRyxLQUFPO0FBQ3RCLFVBQUcsS0FBUSxLQUFDLENBQUcsS0FBTztBQUN0QixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUcsS0FBUSxLQUFDLENBQUcsS0FBTztBQUN0QixVQUFHLEtBQVEsS0FBQyxDQUFHLEtBQU87QUFDdEIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJ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QUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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b3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJiaWctaW50ZWdlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBpb3RhLXBpY28vY3J5cHRvXCIsIFtcImJpZy1pbnRlZ2VyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBpb3RhLXBpY28vY3J5cHRvXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYmlnLWludGVnZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvQ3J5cHRvXCJdID0gZmFjdG9yeShyb290W1wiYmlnSW50XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JpZ19pbnRlZ2VyX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kaXN0L2luZGV4LmpzXCIpO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBqc29uSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9qc29uSGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIEEgY29yZSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIENvcmVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIENvcmVFcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuYWRkaXRpb25hbCA9IGFkZGl0aW9uYWwgPyBhZGRpdGlvbmFsIDoge307XHJcbiAgICAgICAgdGhpcy5pbm5lckVycm9yID0gaW5uZXJFcnJvcjtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiQ29yZVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhbiBvYmplY3QgY291bGQgYmUgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2sgaWYgaXQgaXMgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIElmIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFcnJvcihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgXCJtZXNzYWdlXCIgaW4gb2JqICYmIFwiYWRkaXRpb25hbFwiIGluIG9iajtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IHRoZSBlcnJvciB0byBhIHJlYWRhYmxlIHZlcnNpb24uXHJcbiAgICAgKi9cclxuICAgIGZvcm1hdCgpIHtcclxuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMuZG9tYWluKSkge1xyXG4gICAgICAgICAgICBvdXQgKz0gYCR7dGhpcy5kb21haW59OiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMubWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMubWVzc2FnZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5hZGRpdGlvbmFsKTtcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvdXQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdXQgKz0gYFxcdCR7a2V5fTogJHtqc29uSGVscGVyXzEuSnNvbkhlbHBlci5zdHJpbmdpZnkodGhpcy5hZGRpdGlvbmFsW2tleV0pfVxcbmA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29yZUVycm9yID0gQ29yZUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl5WlVWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDJOdmNtVkZjbkp2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYzBSQlFXMUVPMEZCUTI1RUxEQkVRVUYxUkR0QlFVVjJSRHM3UjBGRlJ6dEJRVU5JTEdWQlFYVkNMRk5CUVZFc1MwRkJTenRKUVdkQ2FFTTdPenM3TzA5QlMwYzdTVUZEU0N4WlFVRlpMRTlCUVdVc1JVRkJSU3hWUVVGclF5eEZRVUZGTEZWQlFXdENPMUZCUXk5RkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTm1MRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFJRVU12UXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExGVkJRVlVzUTBGQlF6dFJRVU0zUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlVUdFJRVU14UWl4UFFVRlBMRWRCUVVjc1MwRkJTeXhUUVVGVExFbEJRVWtzUjBGQlJ5eExRVUZMTEVsQlFVa3NTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFbEJRVWtzVTBGQlV5eEpRVUZKTEVkQlFVY3NTVUZCU1N4WlFVRlpMRWxCUVVrc1IwRkJSeXhEUVVGRE8wbEJRMjVJTEVOQlFVTTdTVUZGUkRzN1QwRkZSenRKUVVOSkxFMUJRVTA3VVVGRFZDeEpRVUZKTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkZZaXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTzFsQlEzQkRMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXp0VFFVTTNRanRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdXVUZEY2tNc1IwRkJSeXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMU5CUXpWQ08xRkJSVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVVUZETVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTnFRaXhKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVOb1FpeEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRPMkZCUTJZN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVObUxFZEJRVWNzU1VGQlNTeExRVUZMTEVkQlFVY3NTMEZCU3l4MVFrRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dFpRVU4yUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOT08xRkJSVVFzVDBGQlR5eEhRVUZITEVOQlFVTTdTVUZEWml4RFFVRkRPME5CUTBvN1FVRXZSRVFzT0VKQkswUkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSB0eXBlcy5cclxuICogQHR5cGVwYXJhbSBUIFRoZSBnZW5lcmljIHR5cGUgZm9yIHRoZSBvYmplY3QgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAqL1xyXG5jbGFzcyBGYWN0b3J5QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgICAgICB0aGlzLl90eXBlcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIG5ldyB0eXBlIHdpdGggdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byByZWdpc3Rlci5cclxuICAgICAqIEBwYXJhbSB0eXBlQ29uc3RydWN0b3IgVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIobmFtZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSA9IHR5cGVDb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlciBhIHR5cGUgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHVucmVnaXN0ZXIuXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXIobmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSBmYWN0b3J5IGNvbnRhaW4gYSBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gbG9vayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0eXBlIGV4aXN0cy5cclxuICAgICAqL1xyXG4gICAgZXhpc3RzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IHRoZSB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIHR5cGVzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gY3JlYXRlLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQW55IHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBpbnN0YW5jZSBvZiB0aGUgdHlwZSBpZiBpdCBleGlzdHMsIG9yIHVuZGVmaW5lZCBpZiBpdCBkb2VzIG5vdC5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKG5hbWUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuX3R5cGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5fdHlwZXNbbmFtZV0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZhY3RvcnlCYXNlID0gRmFjdG9yeUJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptRmpkRzl5ZVVKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwyWmhZM1J2Y25sQ1lYTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTRHRKUVVGQk8xRkJRMGtzWlVGQlpUdFJRVU5GTEZkQlFVMHNSMEZCT0VNc1JVRkJSU3hEUVVGRE8wbEJjMFExUlN4RFFVRkRPMGxCY0VSSE96czdPMDlCU1VjN1NVRkRTU3hSUVVGUkxFTkJRVU1zU1VGQldTeEZRVUZGTEdWQlFYTkRPMUZCUTJoRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzWlVGQlpTeERRVUZETzBsQlEzUkVMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VlFVRlZMRU5CUVVNc1NVRkJXVHRSUVVNeFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zU1VGQldUdFJRVU4wUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRE8wbEJRM3BFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVmtzUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEZEVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNCRExFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOMlFpeFBRVUZQTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjZRenRoUVVGTk8xbEJRMGdzVDBGQlR5eFRRVUZUTEVOQlFVTTdVMEZEY0VJN1NVRkRUQ3hEUVVGRE8wTkJTVW83UVVGNFJFUXNhME5CZDBSREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIi4vb2JqZWN0SGVscGVyXCIpO1xyXG4vKipcclxuICogQXJyYXkgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBBcnJheUhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgZW1wdHkgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIGVtcHR5IGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXlIZWxwZXIuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBub24gZW1wdHkgYXJyYXkgb2Ygc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgbm9uIGVtcHR5IGFycmF5IG9mIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZWQodmFsdWUsIHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzRW1wdHkodmFsdWUpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyh1bmRlZmluZWQpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyhudWxsKSAmJlxyXG4gICAgICAgICAgICB2YWx1ZS5ldmVyeSgoYSkgPT4gb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhLCB0eXBlKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcnJheUhlbHBlciA9IEFycmF5SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEp5WVhsSVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OWhjbkpoZVVobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNhVVJCUVRoRE8wRkJSVGxET3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXp0WlFVTjRReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6ZEVMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCVlN4RlFVRkZMRWxCUVdNN1VVRkROVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRemxDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRE1VSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF6dFpRVU55UWl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNNVJDeERRVUZETzBOQlJVbzdRVUZxUTBRc2EwTkJhVU5ESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEpzb24gaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBKc29uSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RyaW5naWZ5IGFuIG9iamVjdCB3aXRoIHJlY3Vyc2lvbiBicmVha2luZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIEphdmFTY3JpcHQgdmFsdWUsIHVzdWFsbHkgYW4gb2JqZWN0IG9yIGFycmF5LCB0byBiZSBjb252ZXJ0ZWQuXHJcbiAgICAgKiBAcGFyYW0gcmVwbGFjZXIgQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgdGhlIHJlc3VsdHMuXHJcbiAgICAgKiBAcGFyYW0gc3BhY2UgQWRkcyBpbmRlbnRhdGlvbiwgd2hpdGUgc3BhY2UsIGFuZCBsaW5lIGJyZWFrIGNoYXJhY3RlcnMgdG8gdGhlIHJldHVybi12YWx1ZSBKU09OIHRleHQgdG8gbWFrZSBpdCBlYXNpZXIgdG8gcmVhZC5cclxuICAgICAqIEByZXR1cm5zIFN0cmluZyB2ZXJzaW9uIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdHJpbmdpZnkodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkge1xyXG4gICAgICAgIC8vIGVsaW1pbmF0ZXMgYW55IHJlY3Vyc2lvbiBpbiB0aGUgc3RyaW5naWZ5XHJcbiAgICAgICAgY29uc3QgY2FjaGUgPSBbXTtcclxuICAgICAgICBjb25zdCByZWN1c2lvblJlcGxhY2VyID0gKGtleSwgcmVwbGFjZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZVZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHJlcGxhY2VWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUuaW5kZXhPZihyZXBsYWNlVmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNpcmN1bGFyIHJlZmVyZW5jZSBmb3VuZCwgZGlzY2FyZCBrZXlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKHJlcGxhY2VWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VyID8gcmVwbGFjZXIoa2V5LCByZXBsYWNlVmFsdWUpIDogcmVwbGFjZVZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCByZWN1c2lvblJlcGxhY2VyLCBzcGFjZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Kc29uSGVscGVyID0gSnNvbkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYW5OdmJraGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMnB6YjI1SVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenM3TzA5QlRVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVlVzUlVGQlJTeFJRVUV5UXl4RlFVRkZMRXRCUVhWQ08xRkJRM0JITERSRFFVRTBRenRSUVVNMVF5eE5RVUZOTEV0QlFVc3NSMEZCVlN4RlFVRkZMRU5CUVVNN1VVRkZlRUlzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFZEJRVmNzUlVGQlJTeFpRVUZwUWl4RlFVRkZMRVZCUVVVN1dVRkRlRVFzU1VGQlNTeFBRVUZQTEZsQlFWa3NTMEZCU3l4UlFVRlJMRWxCUVVrc1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeFpRVUZaTEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVOc1JpeEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUTNCRExIZERRVUYzUXp0dlFrRkRlRU1zVDBGQlR6dHBRa0ZEVmp0eFFrRkJUVHR2UWtGRFNDeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8ybENRVU0xUWp0aFFVTktPMWxCUlVRc1QwRkJUeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTnFSU3hEUVVGRExFTkJRVU03VVVGRlJpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxHZENRVUZuUWl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTTdRMEZEU2p0QlFUTkNSQ3huUTBFeVFrTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogTnVtYmVyIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgTnVtYmVySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBpbnRlZ2VybmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGludGVnZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgJiYgIU51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbnVtYmVyeW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBmbG9hdCBudW1iZXIgZm9ybWF0dGVkIGFzIGEgc3RyaW5nLCBjYW4gYmUgdXNlZCBmb3IgYmlnIG51bWJlcnMgdGhhdCB3b3VsZCBvdmVyZmxvdyBwYXJzZUZsb2F0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGZvcm1hdHRlZCBjb3JyZWN0bHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0Zsb2F0U3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQqXFwuP1xcZCskLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgaW50ZWdlciBudW1iZXIgZm9ybWF0dGVkIGFzIGEgc3RyaW5nLCBjYW4gYmUgdXNlZCBmb3IgYmlnIG51bWJlcnMgdGhhdCB3b3VsZCBvdmVyZmxvdyBwYXJzZUludC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG51bWJlciBpcyBmb3JtYXR0ZWQgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQrJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdW1iZXJIZWxwZXIgPSBOdW1iZXJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJuVnRZbVZ5U0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmJuVnRZbVZ5U0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlZUdFJRVU01UWl4UFFVRlBMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGNrWXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVlU3VVVGRE4wSXNUMEZCVHl4TFFVRkxMRXRCUVVzc1UwRkJVeXhKUVVGSkxFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NUMEZCVHl4TFFVRkxMRXRCUVVzc1VVRkJVU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJoSkxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRmhPMUZCUTNKRExFOUJRVThzWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJZVHRSUVVOMlF5eFBRVUZQTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGFrTXNRMEZCUXp0RFFVTktPMEZCY0VORUxHOURRVzlEUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE9iamVjdCBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE9iamVjdEhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogdHlwZW9mICh2YWx1ZSkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0IGlmIGdpdmVuIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdGhlIHNwZWNpZmllZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlKHZhbHVlLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZUNsYXNzTmFtZSA9IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZUNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlQ2xhc3NOYW1lID09PSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHR5cGVDb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QgaWYgaXQgaGFzIG9uZS5cclxuICAgICAqIEBwYXJhbSBvYmplY3QgVGhlIG9iamVjdCB0byBnZXQgdGhlIGNsYXNzIG5hbWUgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNsYXNzIG5hbWUgaWYgaXQgaGFzIG9uZSBvciB1bmRlZmluZWQgaWYgbm90LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q2xhc3NOYW1lKG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdHlwZW9mIG9iamVjdCA9PT0gXCJmdW5jdGlvblwiID8gb2JqZWN0LnRvU3RyaW5nKCkgOiBvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNvbnN0cnVjdG9yLm1hdGNoKC9cXHcrL2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuT2JqZWN0SGVscGVyID0gT2JqZWN0SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liMkpxWldOMFNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiMkpxWldOMFNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJWVHRSUVVNMVFpeFBRVUZQTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zUTBGQlF6dEpRVU5xUkN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU0zUWl4UFFVRlBMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTTdXVUZEZUVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGRFVXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZWTEVWQlFVVXNaVUZCZVVJN1VVRkRkRVFzVFVGQlRTeGpRVUZqTEVkQlFVY3NXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU40UkN4UFFVRlBMR05CUVdNc1MwRkJTeXhUUVVGVExFbEJRVWtzWTBGQll5eExRVUZMTEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03U1VGRGVrY3NRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVmM3VVVGRGJFTXNTVUZCU1N4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEZWtNc1QwRkJUeXhUUVVGVExFTkJRVU03VTBGRGNFSTdZVUZCVFR0WlFVTklMRTFCUVUwc1YwRkJWeXhIUVVGSExFOUJRVThzVFVGQlRTeExRVUZMTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFsQlEzSkhMRTFCUVUwc1QwRkJUeXhIUVVGSExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zVDBGQlR5eERRVUZETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXp0VFFVTnVSVHRKUVVOTUxFTkJRVU03UTBGRFNqdEJRVGREUkN4dlEwRTJRME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFN0cmluZyBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIFN0cmluZ0hlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIHN0cmluZ3luZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nIHRoYXQgaXMgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBubyBlbXB0eW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYW4gZW1wdHkgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSBzdHJpbmcgYWxsIEFTQ0lJIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgc3RyaW5nIHRvIHRlc3QgaWYgaXMgaXMgQVNDSUkuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYWxsIEFTQ0lJLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBc2NpaSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiAvXltcXHgwMC1cXHhGRl0qJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZSBub24gQVNDSUkgY2hhcmFjdGVycyB3aXRoIGNvbnRyb2wgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RyaW5nIHZhbHVlIHRvIGVzY2FwZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlc2NhcGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGVuY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9bXFx1MDA3Ri1cXHVGRkZGXS9nLCAoY2hyKSA9PiBgXFxcXHUkeyhgMDAwMCR7Y2hyLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpfWApLnN1YnN0cigtNCl9YCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlY29kZSBjb250cm9sIGNoYXJhY3RlcnMgdG8gQVNDSUkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVuY29kZWQgc3RyaW5nIHRvIGNvbnZlcnQgYmFjayB0byBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkZWNvZGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9cXFxcdShbXFxkXFx3XXs0fSkvZ2ksIChtYXRjaCwgZ3JwKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGdycCwgMTYpKSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TdHJpbmdIZWxwZXIgPSBTdHJpbmdIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUnlhVzVuU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmMzUnlhVzVuU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU0zUWl4UFFVRlBMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTTdXVUZEZUVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMR2xDUVVGcFFpeERRVUZETzBsQlF6bEZMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF5OUVMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZoTzFGQlF5OUNMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXp0WlFVTjRReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVdFN1VVRkRkRU1zVDBGQlR5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03U1VGREwwb3NRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRV0U3VVVGRGRFTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExHdENRVUZyUWl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzBsQlEyaEtMRU5CUVVNN1EwRkRTanRCUVM5RFJDeHZRMEVyUTBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgY2xhc3Mgd2hpY2ggY2FuIHByb3ZpZGUgdGhlIHRpbWUuXHJcbiAqL1xyXG5jbGFzcyBUaW1lU2VydmljZSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgMTk3MC8wMS8wMS5cclxuICAgICAqIEByZXR1cm5zIE51bWJlciBvZiBtaWxsaXNlY29uZHMuXHJcbiAgICAgKi9cclxuICAgIG1zU2luY2VFcG9jaCgpIHtcclxuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRpbWVTZXJ2aWNlID0gVGltZVNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHbHRaVk5sY25acFkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmMyVnlkbWxqWlhNdmRHbHRaVk5sY25acFkyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVWQk96dEhRVVZITzBGQlEwZzdTVUZEU1RzN08wOUJSMGM3U1VGRFNTeFpRVUZaTzFGQlEyWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXp0RFFVTktPMEZCVWtRc2EwTkJVVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBhZGRyZXNzZXMuXHJcbiAqL1xyXG5jbGFzcyBBZGRyZXNzIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IoYWRkcmVzc1RyeXRlcywgY2hlY2tzdW1Ucnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl9hZGRyZXNzVHJ5dGVzID0gYWRkcmVzc1RyeXRlcztcclxuICAgICAgICB0aGlzLl9jaGVja3N1bVRyeXRlcyA9IGNoZWNrc3VtVHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYWRkcmVzcyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBhZGRyZXNzIFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBhZGRyZXNzIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBBZGRyZXNzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyhhZGRyZXNzKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGFkZHJlc3MsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBhZGRyZXNzIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyeXRlc1N0cmluZyA9IGFkZHJlc3MudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodHJ5dGVzU3RyaW5nLmxlbmd0aCAhPT0gQWRkcmVzcy5MRU5HVEggJiYgdHJ5dGVzU3RyaW5nLmxlbmd0aCAhPT0gQWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYWRkcmVzcyBzaG91bGQgZWl0aGVyIGJlICR7QWRkcmVzcy5MRU5HVEh9IG9yICR7QWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTX0gY2hhcmFjdGVycyBpbiBsZW5ndGhgLCB7IGxlbmd0aDogdHJ5dGVzU3RyaW5nLmxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc1RyeXRlcyA9IHRyeXRlc1N0cmluZy5zdWJzdHIoMCwgQWRkcmVzcy5MRU5HVEgpO1xyXG4gICAgICAgIGxldCBjaGVja3N1bVRyeXRlcztcclxuICAgICAgICBpZiAodHJ5dGVzU3RyaW5nLmxlbmd0aCA9PT0gQWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTSkge1xyXG4gICAgICAgICAgICBjaGVja3N1bVRyeXRlcyA9IHRyeXRlc1N0cmluZy5zdWJzdHIoQWRkcmVzcy5MRU5HVEgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEFkZHJlc3MoYWRkcmVzc1RyeXRlcywgY2hlY2tzdW1Ucnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBhZGRyZXNzIHRvIHRyeXRlcyB3aXRoIG5vIGNoZWNrc3VtLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIGFkZHJlc3Mgd2l0aCBubyBjaGVja3N1bS5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX2FkZHJlc3NUcnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBhZGRyZXNzIHRvIHRyeXRlcyB3aXRoIGEgY2hlY2tzdW0sIGNyZWF0aW5nIGEgYmxhbmsgb25lIGlmIG5lZWRlZC5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSBhZGRyZXNzIHdpdGggY2hlY2tzdSwuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzV2l0aENoZWNrc3VtKCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkodGhpcy5fY2hlY2tzdW1Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl9hZGRyZXNzVHJ5dGVzICsgdGhpcy5fY2hlY2tzdW1Ucnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhpcyBhZGRyZXNzIGhhcyBubyBjaGVja3N1bSBjYWxjdWxhdGVkIGZvciBpdGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkodGhpcy5fY2hlY2tzdW1Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRyZXNzVHJ5dGVzICsgdGhpcy5fY2hlY2tzdW1Ucnl0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkcmVzc1RyeXRlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIGEgdmFsaWQgYWRkcmVzcyB3aXRob3V0IGNoZWNrc3VtICg4MSkuXHJcbiAqL1xyXG5BZGRyZXNzLkxFTkdUSCA9IDgxO1xyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgYW4gYWRkcmVzcyBjaGVja3N1bSAoOSkuXHJcbiAqL1xyXG5BZGRyZXNzLkxFTkdUSF9DSEVDS1NVTSA9IDk7XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciB2YWxpZCBhZGRyZXNzIHdpdGggY2hlY2tzdW0gKDkwKS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIX1dJVEhfQ0hFQ0tTVU0gPSBBZGRyZXNzLkxFTkdUSCArIEFkZHJlc3MuTEVOR1RIX0NIRUNLU1VNO1xyXG4vKipcclxuICogQW4gZW1wdHkgaGFzaCBhbGwgOXMuXHJcbiAqL1xyXG5BZGRyZXNzLkVNUFRZID0gQWRkcmVzcy5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChBZGRyZXNzLkxFTkdUSCkpKTtcclxuZXhwb3J0cy5BZGRyZXNzID0gQWRkcmVzcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVdSa2NtVnpjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWtZWFJoTDJGa1pISmxjM011ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN4clJFRkJLME03UVVGREwwTXNjVU5CUVd0RE8wRkJSV3hET3p0SFFVVkhPMEZCUTBnN1NVRjNRa2tzWlVGQlpUdEpRVU5tTEZsQlFXOUNMR0ZCUVhGQ0xFVkJRVVVzWTBGQmMwSTdVVUZETjBRc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eGhRVUZoTEVOQlFVTTdVVUZEY0VNc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlNTeGpRVUZqTEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFXVTdVVUZEY0VNc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hsUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU4yUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzJRMEZCTmtNc1EwRkJReXhEUVVGRE8xTkJRM1JGTzFGQlJVUXNUVUZCVFN4WlFVRlpMRWRCUVVjc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJYaERMRWxCUVVrc1dVRkJXU3hEUVVGRExFMUJRVTBzUzBGQlN5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRmxCUVZrc1EwRkJReXhOUVVGTkxFdEJRVXNzVDBGQlR5eERRVUZETEc5Q1FVRnZRaXhGUVVGRk8xbEJRMmhITEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHZERRVUZuUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hQUVVGUExFOUJRVThzUTBGQlF5eHZRa0ZCYjBJc2RVSkJRWFZDTEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1dVRkJXU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEYkVzN1VVRkZSQ3hOUVVGTkxHRkJRV0VzUjBGQlJ5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZETjBRc1NVRkJTU3hqUVVGakxFTkJRVU03VVVGRGJrSXNTVUZCU1N4WlFVRlpMRU5CUVVNc1RVRkJUU3hMUVVGTExFOUJRVThzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSVHRaUVVOMFJDeGpRVUZqTEVkQlFVY3NXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVMEZEZUVRN1VVRkRSQ3hQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEdGQlFXRXNSVUZCUlN4alFVRmpMRU5CUVVNc1EwRkJRenRKUVVOMFJDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRzlDUVVGdlFqdFJRVU4yUWl4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVGRk8xbEJRemRETEU5QlFVOHNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRUUVVONFJUdGhRVUZOTzFsQlEwZ3NUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zWjBSQlFXZEVMRU5CUVVNc1EwRkJRenRUUVVONlJUdEpRVU5NTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1JVRkJSVHRaUVVNM1F5eFBRVUZQTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF6dFRRVU55UkR0aFFVRk5PMWxCUTBnc1QwRkJUeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETzFOQlF6bENPMGxCUTB3c1EwRkJRenM3UVVGdVJrUTdPMGRCUlVjN1FVRkRiMElzWTBGQlRTeEhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTXpRenM3UjBGRlJ6dEJRVU52UWl4MVFrRkJaU3hIUVVGWExFTkJRVU1zUTBGQlF6dEJRVU51UkRzN1IwRkZSenRCUVVOdlFpdzBRa0ZCYjBJc1IwRkJWeXhQUVVGUExFTkJRVU1zVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4bFFVRmxMRU5CUVVNN1FVRkZMMFk3TzBkQlJVYzdRVUZEYjBJc1lVRkJTeXhIUVVGWkxFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGcVFqbEhMREJDUVhGR1F5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGFuIGVudW0gZm9yIHRoZSBhZGRyZXNzIHNlY3VyaXR5IHZhbHVlcy5cclxuICovXHJcbnZhciBBZGRyZXNzU2VjdXJpdHk7XHJcbihmdW5jdGlvbiAoQWRkcmVzc1NlY3VyaXR5KSB7XHJcbiAgICBBZGRyZXNzU2VjdXJpdHlbQWRkcmVzc1NlY3VyaXR5W1wibG93XCJdID0gMV0gPSBcImxvd1wiO1xyXG4gICAgQWRkcmVzc1NlY3VyaXR5W0FkZHJlc3NTZWN1cml0eVtcIm1lZGl1bVwiXSA9IDJdID0gXCJtZWRpdW1cIjtcclxuICAgIEFkZHJlc3NTZWN1cml0eVtBZGRyZXNzU2VjdXJpdHlbXCJoaWdoXCJdID0gM10gPSBcImhpZ2hcIjtcclxufSkoQWRkcmVzc1NlY3VyaXR5ID0gZXhwb3J0cy5BZGRyZXNzU2VjdXJpdHkgfHwgKGV4cG9ydHMuQWRkcmVzc1NlY3VyaXR5ID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVdSa2NtVnpjMU5sWTNWeWFYUjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2WVdSa2NtVnpjMU5sWTNWeWFYUjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMRWxCUVZrc1pVRkpXRHRCUVVwRUxGZEJRVmtzWlVGQlpUdEpRVU4yUWl4dFJFRkJVU3hEUVVGQk8wbEJRMUlzZVVSQlFWVXNRMEZCUVR0SlFVTldMSEZFUVVGUkxFTkJRVUU3UVVGRFdpeERRVUZETEVWQlNsY3NaVUZCWlN4SFFVRm1MSFZDUVVGbExFdEJRV1lzZFVKQlFXVXNVVUZKTVVJaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgaGFzaGVzLlxyXG4gKi9cclxuY2xhc3MgSGFzaCB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGhhc2ggZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gaGFzaCBUaGUgdHJ5dGVzIHRvIGNyZWF0ZSB0aGUgaGFzaCBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgSGFzaC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXMoaGFzaCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShoYXNoLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgaGFzaCBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSBoYXNoLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IEhhc2guTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBoYXNoIHNob3VsZCBiZSAke0hhc2guTEVOR1RIfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEhhc2goaGFzaCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGhhc2ggdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIGhhc2guXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIGEgdmFsaWQgaGFzaCAoODEpLlxyXG4gKi9cclxuSGFzaC5MRU5HVEggPSA4MTtcclxuLyoqXHJcbiAqIEFuIGVtcHR5IGhhc2ggYWxsIDlzLlxyXG4gKi9cclxuSGFzaC5FTVBUWSA9IEhhc2guZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoSGFzaC5MRU5HVEgpKSk7XHJcbmV4cG9ydHMuSGFzaCA9IEhhc2g7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFHRnphQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWtZWFJoTDJoaGMyZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2NVTkJRV3RETzBGQlJXeERPenRIUVVWSE8wRkJRMGc3U1VGaFNTeGxRVUZsTzBsQlEyWXNXVUZCYjBJc1RVRkJZenRSUVVNNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJXVHRSUVVOcVF5eEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEdWQlFVMHNRMEZCUXl4RlFVRkZPMWxCUTNCRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMREJEUVVFd1F5eERRVUZETEVOQlFVTTdVMEZEYmtVN1VVRkZSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1VVRkROMElzU1VGQlNTeE5RVUZOTEV0QlFVc3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVONFFpeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UWtGQmMwSXNTVUZCU1N4RFFVRkRMRTFCUVUwc2RVSkJRWFZDTEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRemRHTzFGQlJVUXNUMEZCVHl4SlFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTnVReXhEUVVGRE96dEJRV3BFUkRzN1IwRkZSenRCUVVOdlFpeFhRVUZOTEVkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpORE96dEhRVVZITzBGQlEyOUNMRlZCUVVzc1IwRkJVeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEdWQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJVbkpITEc5Q1FXMUVReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50cy5cclxuICovXHJcbmNsYXNzIFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHNpZ25hdHVyZSBmcmFnbWVudCBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIHNpZ25hdHVyZSBmcmFnbWVudCBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyhzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5sZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgc2hvdWxkIGJlICR7U2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSH0gY2hhcmFjdGVycyBpbiBsZW5ndGhgLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgc2lnbmF0dXJlIGZyYWdtZW50IHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSBzaWduYXR1cmUgZnJhZ21lbnQuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudCAoMjE4NylcclxuICovXHJcblNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEggPSAyMTg3O1xyXG4vKipcclxuICogQW4gZW1wdHkgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQgYWxsIDlzLlxyXG4gKi9cclxuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkVNUFRZID0gU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEgpKSk7XHJcbmV4cG9ydHMuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMmxuYm1GMGRYSmxUV1Z6YzJGblpVWnlZV2R0Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJSaGRHRXZjMmxuYm1GMGRYSmxUV1Z6YzJGblpVWnlZV2R0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNhMFJCUVN0RE8wRkJReTlETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWVVrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEUxQlFXTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEhkQ1FVRm5RenRSUVVOeVJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zZDBKQlFYZENMRVZCUVVVc1pVRkJUU3hEUVVGRExFVkJRVVU3V1VGRGVFUXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zT0VSQlFUaEVMRU5CUVVNc1EwRkJRenRUUVVOMlJqdFJRVVZFTEUxQlFVMHNUVUZCVFN4SFFVRkhMSGRDUVVGM1FpeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUTJwRUxFbEJRVWtzVFVGQlRTeExRVUZMTEhkQ1FVRjNRaXhEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU0xUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5d3dRMEZCTUVNc2QwSkJRWGRDTEVOQlFVTXNUVUZCVFN4MVFrRkJkVUlzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRja2s3VVVGRFJDeFBRVUZQTEVsQlFVa3NkMEpCUVhkQ0xFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1EwRkJRenRKUVVOc1JTeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU51UXl4RFFVRkRPenRCUVdoRVJEczdSMEZGUnp0QlFVTnZRaXdyUWtGQlRTeEhRVUZYTEVsQlFVa3NRMEZCUXp0QlFVTTNRenM3UjBGRlJ6dEJRVU52UWl3NFFrRkJTeXhIUVVFMlFpeDNRa0ZCZDBJc1EwRkJReXhWUVVGVkxFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVkpxU3l3MFJFRnJSRU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0YWdzLlxyXG4gKi9cclxuY2xhc3MgVGFnIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGFnIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHRhZyBUaGUgdHJ5dGVzIHRvIGNyZWF0ZSB0aGUgdGFnIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUYWcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHRhZykge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0YWcsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB0YWcgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRyeXRlc1N0cmluZyA9IHRhZy50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0cnl0ZXNTdHJpbmcubGVuZ3RoID4gVGFnLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdGFnIHNob3VsZCBiZSBhdCBtb3N0ICR7VGFnLkxFTkdUSH0gY2hhcmFjdGVycyBpbiBsZW5ndGhgLCB7IGxlbmd0aDogdHJ5dGVzU3RyaW5nLmxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRyeXRlc1N0cmluZy5sZW5ndGggPCBUYWcuTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRyeXRlc1N0cmluZyArPSBcIjlcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUYWcodHJ5dGVzU3RyaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdGFnIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSB0YWcuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBvZiBhIHZhbGlkIHRhZyAoMjcpLlxyXG4gKi9cclxuVGFnLkxFTkdUSCA9IDI3O1xyXG4vKipcclxuICogQW4gZW1wdHkgdGFnIGFsbCA5cy5cclxuICovXHJcblRhZy5FTVBUWSA9IFRhZy5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChUYWcuTEVOR1RIKSkpO1xyXG5leHBvcnRzLlRhZyA9IFRhZztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdGbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJSaGRHRXZkR0ZuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc2EwUkJRU3RETzBGQlF5OURMSEZEUVVGclF6dEJRVVZzUXpzN1IwRkZSenRCUVVOSU8wbEJZVWtzWlVGQlpUdEpRVU5tTEZsQlFXOUNMRTFCUVdNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVZjN1VVRkRhRU1zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeGxRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTnVReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4NVEwRkJlVU1zUTBGQlF5eERRVUZETzFOQlEyeEZPMUZCUlVRc1NVRkJTU3haUVVGWkxFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUld4RExFbEJRVWtzV1VGQldTeERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRMnhETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEWkNRVUUyUWl4SFFVRkhMRU5CUVVNc1RVRkJUU3gxUWtGQmRVSXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3haUVVGWkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTjRTRHRSUVVWRUxFOUJRVThzV1VGQldTeERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRM0pETEZsQlFWa3NTVUZCU1N4SFFVRkhMRU5CUVVNN1UwRkRka0k3VVVGRlJDeFBRVUZQTEVsQlFVa3NSMEZCUnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NUMEZCVHl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTXpReXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE96dEJRWFJFUkRzN1IwRkZSenRCUVVOdlFpeFZRVUZOTEVkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpORE96dEhRVVZITzBGQlEyOUNMRk5CUVVzc1IwRkJVU3hIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEdWQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJVbXhITEd0Q1FYZEVReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCBhZGRyZXNzXzEgPSByZXF1aXJlKFwiLi9hZGRyZXNzXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiLi9oYXNoXCIpO1xyXG5jb25zdCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMSA9IHJlcXVpcmUoXCIuL3NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFwiKTtcclxuY29uc3QgdGFnXzEgPSByZXF1aXJlKFwiLi90YWdcIik7XHJcbmNvbnN0IHRyeXRlTnVtYmVyXzEgPSByZXF1aXJlKFwiLi90cnl0ZU51bWJlclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cmFuc2FjdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBUcmFuc2FjdGlvbiB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJhbnNhY3Rpb24gZnJvbSBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBUaGUgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQuXHJcbiAgICAgKiBAcGFyYW0gYWRkcmVzcyBUaGUgYWRkcmVzcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gb2Jzb2xldGVUYWcgT2Jzb2xldGUgdHJhbnNhY3Rpb24gdGFnLlxyXG4gICAgICogQHBhcmFtIHRpbWVzdGFtcCBUaGUgdGltZXN0YW1wLlxyXG4gICAgICogQHBhcmFtIGN1cnJlbnRJbmRleCBUaGUgY3VycmVudCBpbmRleC5cclxuICAgICAqIEBwYXJhbSBsYXN0SW5kZXggVGhlIGxhc3QgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0gYnVuZGxlIFRoZSBidW5kbGUuXHJcbiAgICAgKiBAcGFyYW0gdHJ1bmtUcmFuc2FjdGlvbiBUaGUgdHJ1bmsgdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gYnJhbmNoVHJhbnNhY3Rpb24gVGhlIGJyYW5jaCB0cmFuc2FjdGlvbi5cclxuICAgICAqIEBwYXJhbSB0YWcgVGhlIHRhZy5cclxuICAgICAqIEBwYXJhbSBhdHRhY2htZW50VGltZXN0YW1wIFRoZSBhdHRhY2htZW50IHRpbWVzdGFtcC5cclxuICAgICAqIEBwYXJhbSBhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCBUaGUgYXR0YWNobWVudCB0aW1lc3RhbXAgbG93ZXIgYm91bmQuXHJcbiAgICAgKiBAcGFyYW0gYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgIFRoZSBhdHRhY2htZW50IHRpbWVzdGFtcCB1cHBlciBib3VuZC5cclxuICAgICAqIEBwYXJhbSBub25jZSBUaGUgbm9uY2UuXHJcbiAgICAgKiBAcmV0dXJucyBOZXcgaW5zdGFuY2Ugb2YgdHJhbnNhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tUGFyYW1zKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgYWRkcmVzcywgdmFsdWUsIG9ic29sZXRlVGFnLCB0aW1lc3RhbXAsIGN1cnJlbnRJbmRleCwgbGFzdEluZGV4LCBidW5kbGUsIHRydW5rVHJhbnNhY3Rpb24sIGJyYW5jaFRyYW5zYWN0aW9uLCB0YWcsIGF0dGFjaG1lbnRUaW1lc3RhbXAsIGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kLCBhdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCwgbm9uY2UpIHtcclxuICAgICAgICBjb25zdCB0eCA9IG5ldyBUcmFuc2FjdGlvbigpO1xyXG4gICAgICAgIHR4LnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDtcclxuICAgICAgICB0eC5hZGRyZXNzID0gYWRkcmVzcztcclxuICAgICAgICB0eC52YWx1ZSA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcih2YWx1ZSwgMTEpO1xyXG4gICAgICAgIHR4Lm9ic29sZXRlVGFnID0gb2Jzb2xldGVUYWc7XHJcbiAgICAgICAgdHgudGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgdHguY3VycmVudEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgdHgubGFzdEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGxhc3RJbmRleCk7XHJcbiAgICAgICAgdHguYnVuZGxlID0gYnVuZGxlO1xyXG4gICAgICAgIHR4LnRydW5rVHJhbnNhY3Rpb24gPSB0cnVua1RyYW5zYWN0aW9uO1xyXG4gICAgICAgIHR4LmJyYW5jaFRyYW5zYWN0aW9uID0gYnJhbmNoVHJhbnNhY3Rpb247XHJcbiAgICAgICAgdHgudGFnID0gdGFnO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoYXR0YWNobWVudFRpbWVzdGFtcCk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQpO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kKTtcclxuICAgICAgICB0eC5ub25jZSA9IG5vbmNlO1xyXG4gICAgICAgIHJldHVybiB0eDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyYW5zYWN0aW9uIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIGZvciB0aGUgdGhpcy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIHRoaXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHRyeXRlcykge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cnl0ZXMsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB0cnl0ZXMgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdHJ5dGVzLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IFRyYW5zYWN0aW9uLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIG11c3QgYmUgJHtUcmFuc2FjdGlvbi5MRU5HVEh9IGluIGxlbmd0aGAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjaGVja0luZGV4U3RhcnQgPSAyMjc5O1xyXG4gICAgICAgIGNvbnN0IGNoZWNrSW5kZXhMZW5ndGggPSAxNjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHRyeXRlcy5zdWIoY2hlY2tJbmRleFN0YXJ0LCBjaGVja0luZGV4TGVuZ3RoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmIChjaGVjayAhPT0gVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRyeXRlcyBiZXR3ZWVuICR7Y2hlY2tJbmRleFN0YXJ0fSBhbmQgJHtjaGVja0luZGV4U3RhcnQgKyBjaGVja0luZGV4TGVuZ3RofSBzaG91bGQgYmUgYWxsIDlzYCwgeyBjaGVjayB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHggPSBuZXcgVHJhbnNhY3Rpb24oKTtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSAwO1xyXG4gICAgICAgIHR4LnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIO1xyXG4gICAgICAgIHR4LmFkZHJlc3MgPSBhZGRyZXNzXzEuQWRkcmVzcy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIGFkZHJlc3NfMS5BZGRyZXNzLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IGFkZHJlc3NfMS5BZGRyZXNzLkxFTkdUSDtcclxuICAgICAgICB0eC52YWx1ZSA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCAxMSksIDExKTtcclxuICAgICAgICBzdGFydFBvcyArPSAxMTtcclxuICAgICAgICBzdGFydFBvcyArPSBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRV9MRU5HVEg7XHJcbiAgICAgICAgdHgub2Jzb2xldGVUYWcgPSB0YWdfMS5UYWcuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdGFnXzEuVGFnLkxFTkdUSDtcclxuICAgICAgICB0eC50aW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguY3VycmVudEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4Lmxhc3RJbmRleCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5idW5kbGUgPSBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIGhhc2hfMS5IYXNoLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IGhhc2hfMS5IYXNoLkxFTkdUSDtcclxuICAgICAgICB0eC50cnVua1RyYW5zYWN0aW9uID0gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBoYXNoXzEuSGFzaC5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBoYXNoXzEuSGFzaC5MRU5HVEg7XHJcbiAgICAgICAgdHguYnJhbmNoVHJhbnNhY3Rpb24gPSBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIGhhc2hfMS5IYXNoLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IGhhc2hfMS5IYXNoLkxFTkdUSDtcclxuICAgICAgICB0eC50YWcgPSB0YWdfMS5UYWcuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdGFnXzEuVGFnLkxFTkdUSDtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4Lm5vbmNlID0gdGFnXzEuVGFnLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdGFnXzEuVGFnLkxFTkdUSCkpO1xyXG4gICAgICAgIHJldHVybiB0eDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJhbnNhY3Rpb24gdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyYW5zYWN0aW9uIGFzIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50OiB0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuYWRkcmVzcywgYWRkcmVzc18xLkFkZHJlc3MpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBhZGRyZXNzIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IGFkZHJlc3M6IHRoaXMuYWRkcmVzcyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMub2Jzb2xldGVUYWcsIHRhZ18xLlRhZykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIG9ic29sZXRlVGFnIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IG9ic29sZXRlVGFnOiB0aGlzLm9ic29sZXRlVGFnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5idW5kbGUsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYnVuZGxlIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IGJ1bmRsZTogdGhpcy5idW5kbGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLnRydW5rVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ1bmtUcmFuc2FjdGlvbiBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyB0cnVua1RyYW5zYWN0aW9uOiB0aGlzLnRydW5rVHJhbnNhY3Rpb24gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLmJyYW5jaFRyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGJyYW5jaFRyYW5zYWN0aW9uIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IGJyYW5jaFRyYW5zYWN0aW9uOiB0aGlzLmJyYW5jaFRyYW5zYWN0aW9uIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5ub25jZSwgdGFnXzEuVGFnKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgbm9uY2UgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgbm9uY2U6IHRoaXMubm9uY2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyeXRlcyA9IHRoaXMuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIHRoaXMuYWRkcmVzcy50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy52YWx1ZSB8fCBUcmFuc2FjdGlvbi5FTVBUWV8xMSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVcclxuICAgICAgICAgICAgKyB0aGlzLm9ic29sZXRlVGFnLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLnRpbWVzdGFtcCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmN1cnJlbnRJbmRleCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmxhc3RJbmRleCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIHRoaXMuYnVuZGxlLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIHRoaXMudHJ1bmtUcmFuc2FjdGlvbi50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLmJyYW5jaFRyYW5zYWN0aW9uLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLnRhZyB8fCB0aGlzLm9ic29sZXRlVGFnKS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5hdHRhY2htZW50VGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5hdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIHRoaXMubm9uY2UudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRyeXRlcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gVHJhbnNhY3Rpb24uTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnl0ZXMgbXVzdCBiZSAke1RyYW5zYWN0aW9uLkxFTkdUSH0gaW4gbGVuZ3RoICR7bGVuZ3RofWAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGB7XG5cXHRzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQ6IFwiJHsodGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgfHwgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdGFkZHJlc3M6IFwiJHsodGhpcy5hZGRyZXNzIHx8IGFkZHJlc3NfMS5BZGRyZXNzLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdHZhbHVlOiAkeyh0aGlzLnZhbHVlIHx8IFRyYW5zYWN0aW9uLkVNUFRZXzExKS50b051bWJlcigpfVxuXFx0b2Jzb2xldGVUYWc6IFwiJHsodGhpcy5vYnNvbGV0ZVRhZyB8fCB0YWdfMS5UYWcuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0dGltZXN0YW1wOiAkeyh0aGlzLnRpbWVzdGFtcCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRjdXJyZW50SW5kZXg6ICR7KHRoaXMuY3VycmVudEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGxhc3RJbmRleDogJHsodGhpcy5sYXN0SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0YnVuZGxlOiBcIiR7KHRoaXMuYnVuZGxlIHx8IGhhc2hfMS5IYXNoLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdHRydW5rVHJhbnNhY3Rpb246IFwiJHsodGhpcy50cnVua1RyYW5zYWN0aW9uIHx8IGhhc2hfMS5IYXNoLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdGJyYW5jaFRyYW5zYWN0aW9uOiBcIiR7KHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24gfHwgaGFzaF8xLkhhc2guRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0dGFnOiBcIiR7KHRoaXMudGFnIHx8IHRoaXMub2Jzb2xldGVUYWcgfHwgdGFnXzEuVGFnLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdGF0dGFjaG1lbnRUaW1lc3RhbXA6ICR7KHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZDogJHsodGhpcy5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRhdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZDogJHsodGhpcy5hdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRub25jZTogXCIkeyh0aGlzLm5vbmNlIHx8IHRhZ18xLlRhZy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG59YDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBvZiBhIHZhbGlkIHRyYW5zYWN0aW9uICgyNjczKS5cclxuICovXHJcblRyYW5zYWN0aW9uLkxFTkdUSCA9IDI2NzM7XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgY2hlY2sgdmFsdWUgKDE2KS5cclxuICovXHJcblRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFX0xFTkdUSCA9IDE2O1xyXG4vKipcclxuICogVGhlIGNoZWNrIHZhbHVlIGZvciBidW5kbGVzIGFsbCA5cy5cclxuICovXHJcblRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFID0gXCI5XCIucmVwZWF0KFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFX0xFTkdUSCk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5UcmFuc2FjdGlvbi5FTVBUWV8xMSA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcigwLCAxMSk7XHJcbmV4cG9ydHMuVHJhbnNhY3Rpb24gPSBUcmFuc2FjdGlvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKaGJuTmhZM1JwYjI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOTBjbUZ1YzJGamRHbHZiaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTEd0RVFVRXJRenRCUVVNdlF5eDFRMEZCYjBNN1FVRkRjRU1zYVVOQlFUaENPMEZCUXpsQ0xIbEZRVUZ6UlR0QlFVTjBSU3dyUWtGQk5FSTdRVUZETlVJc0swTkJRVFJETzBGQlF6VkRMSEZEUVVGclF6dEJRVVZzUXpzN1IwRkZSenRCUVVOSU8wbEJaMFpKTEdWQlFXVTdTVUZEWmp0SlFVTkJMRU5CUVVNN1NVRkZSRHM3T3pzN096czdPenM3T3pzN096czdPMDlCYTBKSE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4M1FrRkJhMFFzUlVGRGJFUXNUMEZCWjBJc1JVRkRhRUlzUzBGQllTeEZRVU5pTEZkQlFXZENMRVZCUTJoQ0xGTkJRV2xDTEVWQlEycENMRmxCUVc5Q0xFVkJRM0JDTEZOQlFXbENMRVZCUTJwQ0xFMUJRVmtzUlVGRFdpeG5Ra0ZCYzBJc1JVRkRkRUlzYVVKQlFYVkNMRVZCUTNaQ0xFZEJRVkVzUlVGRFVpeHRRa0ZCTWtJc1JVRkRNMElzTmtKQlFYRkRMRVZCUTNKRExEWkNRVUZ4UXl4RlFVTnlReXhMUVVGVk8xRkJReTlDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRE4wSXNSVUZCUlN4RFFVRkRMSGRDUVVGM1FpeEhRVUZITEhkQ1FVRjNRaXhEUVVGRE8xRkJRM1pFTEVWQlFVVXNRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRE8xRkJRM0pDTEVWQlFVVXNRMEZCUXl4TFFVRkxMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemRETEVWQlFVVXNRMEZCUXl4WFFVRlhMRWRCUVVjc1YwRkJWeXhEUVVGRE8xRkJRemRDTEVWQlFVVXNRMEZCUXl4VFFVRlRMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRha1FzUlVGQlJTeERRVUZETEZsQlFWa3NSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hGUVVGRkxFTkJRVU1zVTBGQlV5eEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEycEVMRVZCUVVVc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEyNUNMRVZCUVVVc1EwRkJReXhuUWtGQlowSXNSMEZCUnl4blFrRkJaMElzUTBGQlF6dFJRVU4yUXl4RlFVRkZMRU5CUVVNc2FVSkJRV2xDTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03VVVGRGVrTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU03VVVGRFlpeEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXp0UlFVTnlSU3hGUVVGRkxFTkJRVU1zTmtKQlFUWkNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU1zUTBGQlF6dFJRVU42Uml4RlFVRkZMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1EwRkJRenRSUVVONlJpeEZRVUZGTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOcVFpeFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTmtMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZqTzFGQlEyNURMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1pVRkJUU3hEUVVGRExFVkJRVVU3V1VGRGRFTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zTkVOQlFUUkRMRU5CUVVNc1EwRkJRenRUUVVOeVJUdFJRVVZFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVU12UWl4SlFVRkpMRTFCUVUwc1MwRkJTeXhYUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlF5OUNMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhOQ1FVRnpRaXhYUVVGWExFTkJRVU1zVFVGQlRTeFpRVUZaTEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM3BHTzFGQlJVUXNUVUZCVFN4bFFVRmxMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRemRDTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUlVGQlJTeERRVUZETzFGQlF6VkNMRTFCUVUwc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNaVUZCWlN4RlFVRkZMR2RDUVVGblFpeERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkZka1VzU1VGQlNTeExRVUZMTEV0QlFVc3NWMEZCVnl4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVOdVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UWtGQmMwSXNaVUZCWlN4UlFVRlJMR1ZCUVdVc1IwRkJSeXhuUWtGQlowSXNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNSSk8xRkJSVVFzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVVM1FpeEpRVUZKTEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRha0lzUlVGQlJTeERRVUZETEhkQ1FVRjNRaXhIUVVGSExHMUVRVUYzUWl4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4dFJFRkJkMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNwSUxGRkJRVkVzU1VGQlNTeHRSRUZCZDBJc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRE5VTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeHBRa0ZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRFVXNVVUZCVVN4SlFVRkpMR2xDUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzFGQlF6TkNMRVZCUVVVc1EwRkJReXhMUVVGTExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGFFVXNVVUZCVVN4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVObUxGRkJRVkVzU1VGQlNTeFhRVUZYTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU03VVVGRE0wTXNSVUZCUlN4RFFVRkRMRmRCUVZjc1IwRkJSeXhUUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxGTkJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4RkxGRkJRVkVzU1VGQlNTeFRRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUTNaQ0xFVkJRVVVzUTBGQlF5eFRRVUZUTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4R0xGRkJRVkVzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVOcVF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxIbENRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVJpeFJRVUZSTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRGFrTXNSVUZCUlN4RFFVRkRMRk5CUVZNc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeDVRa0ZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFWXNVVUZCVVN4SlFVRkpMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETzFGQlEycERMRVZCUVVVc1EwRkJReXhOUVVGTkxFZEJRVWNzVjBGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeFhRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlJDeFJRVUZSTEVsQlFVa3NWMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVONFFpeEZRVUZGTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzVjBGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeFhRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONlJTeFJRVUZSTEVsQlFVa3NWMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVONFFpeEZRVUZGTEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzVjBGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeFhRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNeFJTeFJRVUZSTEVsQlFVa3NWMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVONFFpeEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRk5CUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1UwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETVVRc1VVRkJVU3hKUVVGSkxGTkJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZEZGtJc1JVRkJSU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxIbENRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVJpeFJRVUZSTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRGFrTXNSVUZCUlN4RFFVRkRMRFpDUVVFMlFpeEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjBSeXhSUVVGUkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRha01zUlVGQlJTeERRVUZETERaQ1FVRTJRaXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUnl4UlFVRlJMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYWtNc1JVRkJSU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEZOQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVFZFTEU5QlFVOHNSVUZCUlN4RFFVRkRPMGxCUTJRc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RlFVRkZMRzFFUVVGM1FpeERRVUZETEVWQlFVVTdXVUZETDBVc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNkVVZCUVhWRkxFVkJRVVVzUlVGQlJTeDNRa0ZCZDBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zZDBKQlFYZENMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRemRLTzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc2FVSkJRVThzUTBGQlF5eEZRVUZGTzFsQlF6ZERMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhORVFVRnpSQ3hGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRekZITzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1UwRkJSeXhEUVVGRExFVkJRVVU3V1VGRE4wTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zTUVSQlFUQkVMRVZCUVVVc1JVRkJSU3hYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRkRWc3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4WFFVRkpMRU5CUVVNc1JVRkJSVHRaUVVONlF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh4UkVGQmNVUXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTjJSenRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1YwRkJTU3hEUVVGRExFVkJRVVU3V1VGRGJrUXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zSzBSQlFTdEVMRVZCUVVVc1JVRkJSU3huUWtGQlowSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNKSk8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hYUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU53UkN4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eG5SVUZCWjBVc1JVRkJSU3hGUVVGRkxHbENRVUZwUWl4RlFVRkZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRlRWs3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVOMlF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh2UkVGQmIwUXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTndSenRSUVVWRUxFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4M1FrRkJkMElzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkROVVFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGJFTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRE1VUXNWMEZCVnl4RFFVRkRMRmRCUVZjN1kwRkRka0lzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGRFTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlF6ZEVMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTm9SU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkROMFFzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGFrTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRqUVVNelF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUXpWRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUTNCRUxFTkJRVU1zU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlEzWkZMRU5CUVVNc1NVRkJTU3hEUVVGRExEWkNRVUUyUWl4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRMnBHTEVOQlFVTXNTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUTJwR0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRmRrTXNUVUZCVFN4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU0zUWl4SlFVRkpMRTFCUVUwc1MwRkJTeXhYUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlF5OUNMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhOQ1FVRnpRaXhYUVVGWExFTkJRVU1zVFVGQlRTeGpRVUZqTEUxQlFVMHNSVUZCUlN4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU51Unp0UlFVVkVMRTlCUVU4c1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTnlReXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVTg3SzBKQlEyZENMRU5CUVVNc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4SlFVRkpMRzFFUVVGM1FpeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU40Unl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzYVVKQlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdWMEZEZUVRc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVU3YTBKQlEzaERMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeFRRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJWQlEzaEVMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJUdHJRa0ZETDBNc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTzJWQlEzaEVMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJUdGhRVU53UkN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzVjBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdDFRa0ZEZGtNc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1YwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHQzUWtGRE1VUXNRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVsQlFVa3NWMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0VlFVTXhSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hUUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8zbENRVU5zUkN4RFFVRkRMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlR0dFEwRkRiRVFzUTBGQlF5eEpRVUZKTEVOQlFVTXNOa0pCUVRaQ0xFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVU3YlVOQlEzUkZMRU5CUVVNc1NVRkJTU3hEUVVGRExEWkNRVUUyUWl4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZPMWxCUXpkR0xFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4VFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMFZCUTNwRUxFTkJRVU03U1VGRFF5eERRVUZET3p0QlFYQlNSRHM3UjBGRlJ6dEJRVU52UWl4clFrRkJUU3hIUVVGWExFbEJRVWtzUTBGQlF6dEJRVVUzUXpzN1IwRkZSenRCUVVOdlFpdzRRa0ZCYTBJc1IwRkJWeXhGUVVGRkxFTkJRVU03UVVGRmRrUTdPMGRCUlVjN1FVRkRiMElzZFVKQlFWY3NSMEZCVnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8wRkJSWGhHTEdWQlFXVTdRVUZEVXl4dlFrRkJVU3hIUVVGblFpeDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZxUW14R0xHdERRWE5TUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cml0cy5cclxuICovXHJcbmNsYXNzIFRyaXRzIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJpdHMpIHtcclxuICAgICAgICB0aGlzLl90cml0cyA9IHRyaXRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSBJbnQ4QXJyYXkgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ5dGVzIHVzZWQgdG8gY3JlYXRlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tQXJyYXkodmFsdWUpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBkb2VzIG5vdCBjb250YWluIHZhbGlkIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyaXRzKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyaXRzIGZyb20gbnVtYmVyIGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRyeXRlcyB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbU51bWJlckFycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQodmFsdWUsIE51bWJlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBkb2VzIG5vdCBjb250YWluIHZhbGlkIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyaXRzKG5ldyBJbnQ4QXJyYXkodmFsdWUpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyaXRzIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRyeXRlcyB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyeXRlc1N0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdHJpdHMgPSBuZXcgSW50OEFycmF5KHRyeXRlc1N0cmluZy5sZW5ndGggKiAzKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyeXRlc1N0cmluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSB0cnl0ZXNfMS5Ucnl0ZXMuQUxQSEFCRVQuaW5kZXhPZih0cnl0ZXNTdHJpbmcuY2hhckF0KGkpKTtcclxuICAgICAgICAgICAgdHJpdHNbaSAqIDNdID0gVHJpdHMuVFJZVEVTX1RSSVRTW2lkeF1bMF07XHJcbiAgICAgICAgICAgIHRyaXRzW2kgKiAzICsgMV0gPSBUcml0cy5UUllURVNfVFJJVFNbaWR4XVsxXTtcclxuICAgICAgICAgICAgdHJpdHNbaSAqIDMgKyAyXSA9IFRyaXRzLlRSWVRFU19UUklUU1tpZHhdWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyaXRzKHRyaXRzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyaXRzIGZyb20gbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgTnVtYmVyIHVzZWQgdG8gY3JlYXRlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGlzIG5vdCBhbiBpbnRlZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cml0cyA9IFtdO1xyXG4gICAgICAgIGxldCBhYnNvbHV0ZVZhbHVlID0gdmFsdWUgPCAwID8gLXZhbHVlIDogdmFsdWU7XHJcbiAgICAgICAgd2hpbGUgKGFic29sdXRlVmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZW1haW5kZXIgPSBhYnNvbHV0ZVZhbHVlICUgMztcclxuICAgICAgICAgICAgYWJzb2x1dGVWYWx1ZSA9IE1hdGguZmxvb3IoYWJzb2x1dGVWYWx1ZSAvIDMpO1xyXG4gICAgICAgICAgICBpZiAocmVtYWluZGVyID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gLTE7XHJcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZVZhbHVlKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJpdHNbdHJpdHMubGVuZ3RoXSA9IHJlbWFpbmRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0cml0c1tpXSA9IC10cml0c1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyaXRzKG5ldyBJbnQ4QXJyYXkodHJpdHMpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIHR3byB0cml0cyB0b2dldGhlci5cclxuICAgICAqIEBwYXJhbSBmaXJzdCBUaGUgZmlyc3QgdHJpdC5cclxuICAgICAqIEBwYXJhbSBzZWNvbmQgVGhlIHNlY29uZCB0cml0LlxyXG4gICAgICogQHJldHVybnMgTmV3IHRyaXQgd2hpY2ggaXMgdGhlIGFkZGl0aW9uIG9mIHRoZSBhICsgYi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZChmaXJzdCwgc2Vjb25kKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGZpcnN0LCBUcml0cykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBmaXJzdCBzaG91bGQgYmUgYSB2YWxpZCBUcml0cyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzZWNvbmQsIFRyaXRzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHNlY29uZHMgc2hvdWxkIGJlIGEgdmFsaWQgVHJpdHMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvdXQgPSBuZXcgSW50OEFycmF5KE1hdGgubWF4KGZpcnN0Ll90cml0cy5sZW5ndGgsIHNlY29uZC5fdHJpdHMubGVuZ3RoKSk7XHJcbiAgICAgICAgbGV0IGNhcnJ5ID0gMDtcclxuICAgICAgICBsZXQgaUE7XHJcbiAgICAgICAgbGV0IGlCO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlBID0gaSA8IGZpcnN0Ll90cml0cy5sZW5ndGggPyBmaXJzdC5fdHJpdHNbaV0gOiAwO1xyXG4gICAgICAgICAgICBpQiA9IGkgPCBzZWNvbmQuX3RyaXRzLmxlbmd0aCA/IHNlY29uZC5fdHJpdHNbaV0gOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBmQSA9IFRyaXRzLmZ1bGxBZGQoaUEsIGlCLCBjYXJyeSk7XHJcbiAgICAgICAgICAgIG91dFtpXSA9IGZBWzBdO1xyXG4gICAgICAgICAgICBjYXJyeSA9IGZBWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVHJpdHMuZnJvbUFycmF5KG91dCk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBmdWxsQWRkKGEsIGIsIGMpIHtcclxuICAgICAgICBjb25zdCBzQSA9IFRyaXRzLnN1bShhLCBiKTtcclxuICAgICAgICBjb25zdCBjQSA9IFRyaXRzLmNvbnMoYSwgYik7XHJcbiAgICAgICAgY29uc3QgY0IgPSBUcml0cy5jb25zKHNBLCBjKTtcclxuICAgICAgICBjb25zdCBjT3V0ID0gVHJpdHMuYW55KGNBLCBjQik7XHJcbiAgICAgICAgY29uc3Qgc09VdCA9IFRyaXRzLnN1bShzQSwgYyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkoW3NPVXQsIGNPdXRdKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIHN1bShhLCBiKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IGEgKyBiO1xyXG4gICAgICAgIHN3aXRjaCAocykge1xyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiAtMTtcclxuICAgICAgICAgICAgY2FzZSAtMjogcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGNvbnMoYSwgYikge1xyXG4gICAgICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGFueShhLCBiKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IGEgKyBiO1xyXG4gICAgICAgIGlmIChzID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocyA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgdHJpdHMgYXJyYXkuXHJcbiAgICAgKiBAcmV0dXJucyBBcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHRvQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSB0cml0cyBhcnJheSBhcyBhIG51bWJlciBhcnJheS5cclxuICAgICAqIEByZXR1cm5zIEFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0cml0cy5cclxuICAgICAqL1xyXG4gICAgdG9OdW1iZXJBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl90cml0cyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdHJpdHMgYXMgdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgSW5zdGFuY2Ugb2YgVHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICBsZXQgdHJ5dGVzID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RyaXRzLmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgcG9zc2libGUgdHJ5dGUgdmFsdWVzIHRvIGZpbmQgY29ycmVjdCB0cml0IHJlcHJlc2VudGF0aW9uXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVHJpdHMuVFJZVEVTX1RSSVRTW2pdWzBdID09PSB0aGlzLl90cml0c1tpXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFRyaXRzLlRSWVRFU19UUklUU1tqXVsxXSA9PT0gdGhpcy5fdHJpdHNbaSArIDFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVHJpdHMuVFJZVEVTX1RSSVRTW2pdWzJdID09PSB0aGlzLl90cml0c1tpICsgMl0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnl0ZXMgKz0gdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmNoYXJBdChqKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB0cml0cyBhcyBhIG51bWJlci5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cml0cyBjb252ZXJ0ZWQgdG8gYSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyKCkge1xyXG4gICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX3RyaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gcmV0dXJuVmFsdWUgKiAzICsgdGhpcy5fdHJpdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV2hhdCBpcyB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIExlbmd0aCBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpdHMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBzdWIgb2YgdGhlIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbiB0byBnZXQgdGhlIHN1Yi5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3ViLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyaXRzIHN1Yi5cclxuICAgICAqL1xyXG4gICAgc3ViKHN0YXJ0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc3RhcnQpIHx8IHN0YXJ0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHN0YXJ0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgKHN0YXJ0ICsgbGVuZ3RoKSA+IHRoaXMuX3RyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc3RhcnQgKyBsZW5ndGggbXVzdCA8PSAke3RoaXMuX3RyaXRzLmxlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyaXRzLmZyb21BcnJheSh0aGlzLl90cml0cy5zbGljZShzdGFydCwgc3RhcnQgKyBsZW5ndGgpKTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuVHJpdHMuVFJZVEVTX1RSSVRTID0gW1xyXG4gICAgbmV3IEludDhBcnJheShbMCwgMCwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMCwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAtMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgLTEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIC0xLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMCwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMCwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMCwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAtMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIC0xLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgLTEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMCwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDAsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAwLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAxLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAtMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgLTEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIC0xLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMCwgMF0pXHJcbl07XHJcbmV4cG9ydHMuVHJpdHMgPSBUcml0cztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKcGRITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY21sMGN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc01FVkJRWFZGTzBGQlEzWkZMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNhMFJCUVN0RE8wRkJReTlETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCYlVOSkxHVkJRV1U3U1VGRFppeFpRVUZ2UWl4TFFVRm5RanRSUVVOb1F5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJaMEk3VVVGRGNFTXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1JVRkJSVHRaUVVONFF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXgzUTBGQmQwTXNRMEZCUXl4RFFVRkRPMU5CUTJwRk8xRkJRMFFzVDBGQlR5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNMVFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJaVHRSUVVONlF5eEpRVUZKTEVOQlFVTXNlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RlFVRkZPMWxCUTNKRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSGREUVVGM1F5eERRVUZETEVOQlFVTTdVMEZEYWtVN1VVRkRSQ3hQUVVGUExFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRV0U3VVVGRGJFTXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4bFFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOeVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXd5UTBGQk1rTXNRMEZCUXl4RFFVRkRPMU5CUTNCRk8xRkJRMFFzVFVGQlRTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRM1JETEUxQlFVMHNTMEZCU3l4SFFVRmpMRWxCUVVrc1UwRkJVeXhEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRVVzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGbEJRVmtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRNVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NaVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZFTEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UXl4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGFrUTdVVUZEUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6VkNMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZoTzFGQlEyeERMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOb1F5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXcyUWtGQk5rSXNRMEZCUXl4RFFVRkRPMU5CUTNSRU8xRkJRMFFzVFVGQlRTeExRVUZMTEVkQlFXRXNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzWVVGQllTeEhRVUZITEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkZMME1zVDBGQlR5eGhRVUZoTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTNSQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlJUbERMRWxCUVVrc1UwRkJVeXhIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEWml4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyWXNZVUZCWVN4RlFVRkZMRU5CUVVNN1lVRkRia0k3V1VGRlJDeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF6dFRRVU51UXp0UlFVTkVMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU5ZTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU51UXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRlRUk3VTBGRFNqdFJRVVZFTEU5QlFVOHNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXpReXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVZrc1JVRkJSU3hOUVVGaE8xRkJRM3BETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRjRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc01FTkJRVEJETEVOQlFVTXNRMEZCUXp0VFFVTnVSVHRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEY2tNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNORU5CUVRSRExFTkJRVU1zUTBGQlF6dFRRVU55UlR0UlFVVkVMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF5OUZMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5rTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTFBc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRlVDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVWcVF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia1FzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKRUxFMUJRVTBzUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTjRReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMllzUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOcVFqdFJRVVZFTEU5QlFVOHNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU5vUXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGVE8xRkJRMnhFTEUxQlFVMHNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpOQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemRDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXk5Q0xFMUJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJUbENMRTlCUVU4c1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZEYmtNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVm9RaXhSUVVGUkxFTkJRVU1zUlVGQlJUdFpRVU5RTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUWl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdXVUZEYkVJc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVMEZEY2tJN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk03VVVGRGNFTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRMVFzVDBGQlR5eERRVUZETEVOQlFVTTdVMEZEV2p0UlFVTkVMRTlCUVU4c1EwRkJReXhEUVVGRE8wbEJRMklzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTzFGQlEyNURMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGYUVJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlExQXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkRXanRoUVVGTkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTmtMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03VTBGRFlqdFJRVVZFTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTJJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTlCUVU4N1VVRkRWaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEZGtJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMR0ZCUVdFN1VVRkRhRUlzVDBGQlR5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU51UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRWxCUVVrc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVZvUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTFReXcyUlVGQk5rVTdXVUZETjBVc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMR1ZCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVNM1F5eEpRVUZKTEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6TkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMjlDUVVNdlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTzI5Q1FVTnFSQ3hOUVVGTkxFbEJRVWtzWlVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzQkRMRTFCUVUwN2FVSkJRMVE3WVVGRFNqdFRRVU5LTzFGQlJVUXNUMEZCVHl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzSkRMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1NVRkJTU3hYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJYQkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRPVU1zVjBGQlZ5eEhRVUZITEZkQlFWY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnNSRHRSUVVWRUxFOUJRVThzVjBGQlZ5eERRVUZETzBsQlEzWkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5PMUZCUTFRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTTVRaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeEhRVUZITEVOQlFVTXNTMEZCWVN4RlFVRkZMRTFCUVdNN1VVRkRjRU1zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkROME1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2FVTkJRV2xETEVOQlFVTXNRMEZCUXp0VFFVTXhSRHRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTXhSU3hOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3NFFrRkJPRUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRek5GTzFGQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnlSU3hEUVVGRE96dEJRWFpSUkN4bFFVRmxPMEZCUTFNc2EwSkJRVmtzUjBGQlowSTdTVUZEYUVRc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE1VSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZUVJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNelFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETVVJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU14UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6RkNMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETVVJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdRMEZETlVJc1EwRkJRenRCUVRsQ1RpeHpRa0V3VVVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIi4vdHJpdHNcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJ5dGUgbnVtYmVyLlxyXG4gKi9cclxuY2xhc3MgVHJ5dGVOdW1iZXIge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cnl0ZSBudW1iZXIgZnJvbSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB2YWx1ZSB0byBjcmVhdGUgdGhlIG9iamVjdCBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgdHJ5dGUgbGVuZ3RoIHRvIHBhZCB0aGUgbnVtYmVyIHdpdGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcnl0ZU51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21OdW1iZXIodmFsdWUsIGxlbmd0aCA9IFRyeXRlTnVtYmVyLkxFTkdUSF85KSB7XHJcbiAgICAgICAgbGV0IHRyeXRlcztcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGxlbmd0aCBzaG91bGQgYmUgYSBudW1iZXIgPiAwXCIsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRyeXRlcyA9IFwiOVwiLnJlcGVhdChsZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBpcyBub3QgYW4gaW50ZWdlclwiLCB7IHZhbHVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaXRzID0gdHJpdHNfMS5Ucml0cy5mcm9tTnVtYmVyKHZhbHVlKS50b051bWJlckFycmF5KCk7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cml0cy5sZW5ndGggPCBsZW5ndGggKiAzKSB7XHJcbiAgICAgICAgICAgICAgICB0cml0cy5wdXNoKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeXRlcyA9IHRyaXRzXzEuVHJpdHMuZnJvbU51bWJlckFycmF5KHRyaXRzKS50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJ5dGVOdW1iZXIodHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyeXRlIG51bWJlciBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHZhbHVlIHRvIGNyZWF0ZSB0aGUgb2JqZWN0IGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSB0cnl0ZSBsZW5ndGggdG8gcGFkIHRoZSBudW1iZXIgd2l0aC5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyeXRlTnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyh2YWx1ZSwgbGVuZ3RoID0gVHJ5dGVOdW1iZXIuTEVOR1RIXzkpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdHJ5dGVTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgbGVuZ3RoIHNob3VsZCBiZSBhIG51bWJlciA+IDBcIiwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cnl0ZVN0cmluZy5sZW5ndGggPiBsZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBjb250YWlucyB0b28gbWFueSBjaGFyYWN0ZXJzXCIsIHsgbGVuZ3RoOiB0cnl0ZVN0cmluZy5sZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0cnl0ZVN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgdHJ5dGVTdHJpbmcgKz0gXCI5XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJ5dGVOdW1iZXIodHJ5dGVTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cnl0ZSBudW1iZXIgdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIHRyeXRlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRyeXRlIG51bWJlciB0byBudW1iZXIuXHJcbiAgICAgKiBAcmV0dXJucyBudW1iZXIgdmFsdWUgb2YgdGhlIHRyeXRlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgdG9OdW1iZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMpKS50b051bWJlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHZhbHVlT2YoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogTGVuZ3RoIG9mIGEgbnVtYmVyIHRoYXQgdXNlcyA5IHRyeXRlcy5cclxuICovXHJcblRyeXRlTnVtYmVyLkxFTkdUSF85ID0gOTtcclxuLyoqXHJcbiAqIEFuIGVtcHR5IDkgbGVuZ3RoIHRyeXRlIG51bWJlci5cclxuICovXHJcblRyeXRlTnVtYmVyLkVNUFRZXzkgPSBUcnl0ZU51bWJlci5mcm9tTnVtYmVyKDAsIFRyeXRlTnVtYmVyLkxFTkdUSF85KTtcclxuZXhwb3J0cy5Ucnl0ZU51bWJlciA9IFRyeXRlTnVtYmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEo1ZEdWT2RXMWlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5MGNubDBaVTUxYldKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMRFJGUVVGNVJUdEJRVU42UlN4clJFRkJLME03UVVGREwwTXNiVU5CUVdkRE8wRkJRMmhETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWVVrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEUxQlFXTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRmhMRVZCUVVVc1UwRkJhVUlzVjBGQlZ5eERRVUZETEZGQlFWRTdVVUZEZWtVc1NVRkJTU3hOUVVGTkxFTkJRVU03VVVGRldDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOb1JDeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh0UTBGQmJVTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGVFVTdVVUZGUkN4SlFVRkpMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpkQ0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJReTlDTzJGQlFVMDdXVUZEU0N4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRMmhETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEWkNRVUUyUWl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU5xUlR0WlFVVkVMRTFCUVUwc1MwRkJTeXhIUVVGSExHRkJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1lVRkJZU3hGUVVGRkxFTkJRVU03V1VGRmRFUXNUMEZCVHl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUXpsQ0xFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRha0k3V1VGRlJDeE5RVUZOTEVkQlFVY3NZVUZCU3l4RFFVRkRMR1ZCUVdVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRUUVVNdlJEdFJRVVZFTEU5QlFVOHNTVUZCU1N4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJrTXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1YwRkJWeXhEUVVGRExGRkJRVkU3VVVGRGVrVXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4bFFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOeVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXd5UTBGQk1rTXNRMEZCUXl4RFFVRkRPMU5CUTNCRk8xRkJRMFFzU1VGQlNTeFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSVzVETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRMmhFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHMURRVUZ0UXl4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU40UlR0UlFVVkVMRWxCUVVrc1YwRkJWeXhEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVWQlFVVTdXVUZETjBJc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNkME5CUVhkRExFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNWMEZCVnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGFrYzdVVUZGUkN4UFFVRlBMRmRCUVZjc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeEZRVUZGTzFsQlEyaERMRmRCUVZjc1NVRkJTU3hIUVVGSExFTkJRVU03VTBGRGRFSTdVVUZGUkN4UFFVRlBMRWxCUVVrc1YwRkJWeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1QwRkJUeXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVNelF5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNZVUZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlEzaEZMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlEzaENMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UFFVRlBPMUZCUTFZc1QwRkJUeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZETTBJc1EwRkJRenM3UVVFeFIwUTdPMGRCUlVjN1FVRkRiMElzYjBKQlFWRXNSMEZCVnl4RFFVRkRMRU5CUVVNN1FVRkROVU03TzBkQlJVYzdRVUZEYjBJc2JVSkJRVThzUjBGQlowSXNWMEZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFVkJRVVVzVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCVW14SExHdERRVFJIUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cnl0ZXMuXHJcbiAqL1xyXG5jbGFzcyBUcnl0ZXMge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cnl0ZXMgZnJvbSBhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHN0cmluZyB0byBjcmVhdGUgdGhlIHRyeXRlcyBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBBbiBvcHRpb25hbCB2YWxpZGF0aW9uIGxlbmd0aCBmb3IgdGhlIHRyeXRlcywgMCBtZWFucyBpZ25vcmUgbGVuZ3RoLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVN0cmluZyh2YWx1ZSwgbGVuZ3RoID0gMCkge1xyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgbGVuZ3RoIG11c3QgYmUgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFUcnl0ZXMuaXNWYWxpZCh2YWx1ZSwgbGVuZ3RoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGFuZCBsZW5ndGggZG8gbm90IGNvbnRhaW4gdmFsaWQgdHJ5dGVzXCIsIHsgdmFsdWUsIGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcnl0ZXModmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSB2YWx1ZSBjb250YWluIHZhbGlkIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHN0cmluZyB0byB2YWxpZGF0ZSBhcyB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIEFuIG9wdGlvbmFsIHZhbGlkYXRpb24gbGVuZ3RoIGZvciB0aGUgdHJ5dGVzLCAwIG1lYW5zIGlnbm9yZSBsZW5ndGguXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBpbnB1dCB3YXMgdmFsaWQgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNWYWxpZCh2YWx1ZSwgbGVuZ3RoID0gMCkge1xyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgXls5QS1aXXske2xlbmd0aCA/IGxlbmd0aCA6IFwiMCxcIn19JGApLnRlc3QodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJ5dGVzIHRvIGEgc3RyaW5nLlxyXG4gICAgICogQHJldHVybnMgU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbGVuZ3RoIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgc3ViIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uIHRvIGdldCB0aGUgc3ViLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBzdWIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJ5dGVzIHN1Yi5cclxuICAgICAqL1xyXG4gICAgc3ViKHN0YXJ0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc3RhcnQpIHx8IHN0YXJ0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHN0YXJ0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgKHN0YXJ0ICsgbGVuZ3RoKSA+IHRoaXMuX3RyeXRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHN0YXJ0ICsgbGVuZ3RoIG11c3QgPD0gJHt0aGlzLl90cnl0ZXMubGVuZ3RofWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzLnN1YnN0cihzdGFydCwgbGVuZ3RoKSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEFsbCB0aGUgY2hhcmFjdGVycyB0aGF0IGNhbiBiZSB1c2VkIGluIHRyeXRlcy5cclxuICovXHJcblRyeXRlcy5BTFBIQUJFVCA9IFwiOUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XHJcbmV4cG9ydHMuVHJ5dGVzID0gVHJ5dGVzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEo1ZEdWekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJSaGRHRXZkSEo1ZEdWekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNORVZCUVhsRk8wRkJRM3BGTEd0RVFVRXJRenRCUVVVdlF6czdSMEZGUnp0QlFVTklPMGxCVTBrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEUxQlFXTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRmhMRVZCUVVVc1UwRkJhVUlzUTBGQlF6dFJRVU4wUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRMMElzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2MwTkJRWE5ETEVOQlFVTXNRMEZCUXp0VFFVTXZSRHRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVOQlFVTTdVMEZEYkVRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zYTBSQlFXdEVMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTTVSanRSUVVORUxFOUJRVThzU1VGQlNTeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROMElzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGaExFVkJRVVVzVTBGQmFVSXNRMEZCUXp0UlFVTnVSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGREwwSXNUMEZCVHl4TFFVRkxMRU5CUVVNN1UwRkRhRUk3WVVGQlRUdFpRVU5JTEU5QlFVOHNTVUZCU1N4TlFVRk5MRU5CUVVNc1YwRkJWeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRlRVU3U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVFVGQlRUdFJRVU5VTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU03U1VGREwwSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1IwRkJSeXhEUVVGRExFdEJRV0VzUlVGQlJTeE5RVUZqTzFGQlEzQkRMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF6ZERMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEdsRFFVRnBReXhEUVVGRExFTkJRVU03VTBGRE1VUTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRE0wVXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zT0VKQlFUaENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTTFSVHRSUVVORUxFOUJRVThzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOcVJTeERRVUZET3p0QlFUVkZSRHM3UjBGRlJ6dEJRVU5YTEdWQlFWRXNSMEZCVnl3MlFrRkJOa0lzUTBGQlF6dEJRVXB1UlN4M1FrRTRSVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29yZUVycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvY29yZUVycm9yXCIpO1xyXG4vKipcclxuICogQSBkYXRhIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgRGF0YUVycm9yIGV4dGVuZHMgY29yZUVycm9yXzEuQ29yZUVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIERhdGFFcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJEYXRhXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EYXRhRXJyb3IgPSBEYXRhRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHRjBZVVZ5Y205eUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJWeWNtOXlMMlJoZEdGRmNuSnZjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNiMFZCUVdsRk8wRkJSV3BGT3p0SFFVVkhPMEZCUTBnc1pVRkJkVUlzVTBGQlVTeHhRa0ZCVXp0SlFVTndRenM3T3pzN1QwRkxSenRKUVVOSUxGbEJRVmtzVDBGQlpTeEZRVUZGTEZWQlFXdERMRVZCUVVVc1ZVRkJhMEk3VVVGREwwVXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZEZGtNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZEZWtJc1EwRkJRenREUVVOS08wRkJXRVFzT0VKQlYwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuLyoqXHJcbiAqIFNoYTMgaW1wbGVtZW50YXRpb24uXHJcbiAqL1xyXG5jbGFzcyBTaGEzIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFNIQTMuXHJcbiAgICAgKiBAcGFyYW0gYml0cyBUaGUgbnVtYmVyIG9mIGlucHV0IGJpdHMuXHJcbiAgICAgKiBAcGFyYW0gcGFkZGluZyBUaGUgcGFkZGluZyB0byB1c2UuXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0Qml0cyBUaGUgbnVtYmVyIG9mIG91dHB1dCBiaXRzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihiaXRzLCBwYWRkaW5nLCBvdXRwdXRCaXRzKSB7XHJcbiAgICAgICAgdGhpcy5fcGFkZGluZyA9IHBhZGRpbmc7XHJcbiAgICAgICAgdGhpcy5fb3V0cHV0Qml0cyA9IG91dHB1dEJpdHM7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tDb3VudCA9ICgxNjAwIC0gKGJpdHMgPDwgMSkpID4+IDU7XHJcbiAgICAgICAgdGhpcy5fYnl0ZUNvdW50ID0gdGhpcy5fYmxvY2tDb3VudCA8PCAyO1xyXG4gICAgICAgIHRoaXMuX291dHB1dEJsb2NrcyA9IG91dHB1dEJpdHMgPj4gNTtcclxuICAgICAgICB0aGlzLl9leHRyYUJ5dGVzID0gKG91dHB1dEJpdHMgJiAzMSkgPj4gMztcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBkaWdlc3QuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuX3Jlc2V0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9ibG9jayA9IDA7XHJcbiAgICAgICAgdGhpcy5fc3RhcnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX2Jsb2NrcyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLl9ibG9ja0NvdW50ICsgMSk7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXcgVWludDMyQXJyYXkoNTApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGRpZ2VzdC5cclxuICAgICAqIEBwYXJhbSBpbnB1dCBBcnJheSBvZiBkYXRhIHRvIHVzZSBpbiB0aGUgdXBkYXRlLlxyXG4gICAgICovXHJcbiAgICB1cGRhdGUoaW5wdXQpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoaW5wdXQsIEFycmF5QnVmZmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIklucHV0IGlzIG5vdCBvZiB0eXBlIEFycmF5QnVmZmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFVpbnQ4QXJyYXkoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG1lc3NhZ2UubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXNldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1swXSA9IHRoaXMuX2Jsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHRoaXMuX2Jsb2NrQ291bnQgKyAxOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoaSA9IHRoaXMuX3N0YXJ0OyBpbmRleCA8IGxlbmd0aCAmJiBpIDwgdGhpcy5fYnl0ZUNvdW50OyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbaSA+PiAyXSB8PSBtZXNzYWdlW2luZGV4XSA8PCBTaGEzLlNISUZUW2krKyAmIDNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RCeXRlSW5kZXggPSBpO1xyXG4gICAgICAgICAgICBpZiAoaSA+PSB0aGlzLl9ieXRlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gaSAtIHRoaXMuX2J5dGVDb3VudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrID0gdGhpcy5fYmxvY2tzW3RoaXMuX2Jsb2NrQ291bnRdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2Jsb2NrQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlW2ldIF49IHRoaXMuX2Jsb2Nrc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMua2VjY2FrUGVybXV0YXRpb24odGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5hbGl6ZSBhbmQgcmV0dXJuIHRoZSBoYXNoIGZvciB0aGUgZGlnZXN0LCB3aWxsIGFsc28gcmVzZXQgdGhlIHN0YXRlLlxyXG4gICAgICogQHJldHVybnMgQXJyYXkgYnVmZmVyIGNvbnRhaW5pbmcgdGhlIGRpZ2VzdC5cclxuICAgICAqL1xyXG4gICAgZGlnZXN0KCkge1xyXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgIGNvbnN0IGJ5dGVzID0gdGhpcy5fb3V0cHV0Qml0cyA+PiAzO1xyXG4gICAgICAgIGxldCBidWZmZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V4dHJhQnl0ZXMpIHtcclxuICAgICAgICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKCh0aGlzLl9vdXRwdXRCbG9ja3MgKyAxKSA8PCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XHJcbiAgICAgICAgd2hpbGUgKGogPCB0aGlzLl9vdXRwdXRCbG9ja3MpIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2Jsb2NrQ291bnQgJiYgaiA8IHRoaXMuX291dHB1dEJsb2NrczsgKytpLCArK2opIHtcclxuICAgICAgICAgICAgICAgIGFycmF5W2pdID0gdGhpcy5fc3RhdGVbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V4dHJhQnl0ZXMpIHtcclxuICAgICAgICAgICAgYXJyYXlbaV0gPSB0aGlzLl9zdGF0ZVtpXTtcclxuICAgICAgICAgICAgYnVmZmVyID0gYnVmZmVyLnNsaWNlKDAsIGJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGZpbmFsaXplKCkge1xyXG4gICAgICAgIGxldCBpID0gdGhpcy5fbGFzdEJ5dGVJbmRleDtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbaSA+PiAyXSB8PSB0aGlzLl9wYWRkaW5nW2kgJiAzXTtcclxuICAgICAgICBpZiAodGhpcy5fbGFzdEJ5dGVJbmRleCA9PT0gdGhpcy5fYnl0ZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1swXSA9IHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja0NvdW50XTtcclxuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHRoaXMuX2Jsb2NrQ291bnQgKyAxOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tpXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW3RoaXMuX2Jsb2NrQ291bnQgLSAxXSB8PSAweDgwMDAwMDAwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9ibG9ja0NvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGVbaV0gXj0gdGhpcy5fYmxvY2tzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtlY2Nha1Blcm11dGF0aW9uKHRoaXMuX3N0YXRlKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAga2VjY2FrUGVybXV0YXRpb24ocykge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uXHJcbiAgICAgICAgbGV0IGgsIGwsIG4sIGMwLCBjMSwgYzIsIGMzLCBjNCwgYzUsIGM2LCBjNywgYzgsIGM5LCBiMCwgYjEsIGIyLCBiMywgYjQsIGI1LCBiNiwgYjcsIGI4LCBiOSwgYjEwLCBiMTEsIGIxMiwgYjEzLCBiMTQsIGIxNSwgYjE2LCBiMTcsIGIxOCwgYjE5LCBiMjAsIGIyMSwgYjIyLCBiMjMsIGIyNCwgYjI1LCBiMjYsIGIyNywgYjI4LCBiMjksIGIzMCwgYjMxLCBiMzIsIGIzMywgYjM0LCBiMzUsIGIzNiwgYjM3LCBiMzgsIGIzOSwgYjQwLCBiNDEsIGI0MiwgYjQzLCBiNDQsIGI0NSwgYjQ2LCBiNDcsIGI0OCwgYjQ5O1xyXG4gICAgICAgIGZvciAobiA9IDA7IG4gPCA0ODsgbiArPSAyKSB7XHJcbiAgICAgICAgICAgIGMwID0gc1swXSBeIHNbMTBdIF4gc1syMF0gXiBzWzMwXSBeIHNbNDBdO1xyXG4gICAgICAgICAgICBjMSA9IHNbMV0gXiBzWzExXSBeIHNbMjFdIF4gc1szMV0gXiBzWzQxXTtcclxuICAgICAgICAgICAgYzIgPSBzWzJdIF4gc1sxMl0gXiBzWzIyXSBeIHNbMzJdIF4gc1s0Ml07XHJcbiAgICAgICAgICAgIGMzID0gc1szXSBeIHNbMTNdIF4gc1syM10gXiBzWzMzXSBeIHNbNDNdO1xyXG4gICAgICAgICAgICBjNCA9IHNbNF0gXiBzWzE0XSBeIHNbMjRdIF4gc1szNF0gXiBzWzQ0XTtcclxuICAgICAgICAgICAgYzUgPSBzWzVdIF4gc1sxNV0gXiBzWzI1XSBeIHNbMzVdIF4gc1s0NV07XHJcbiAgICAgICAgICAgIGM2ID0gc1s2XSBeIHNbMTZdIF4gc1syNl0gXiBzWzM2XSBeIHNbNDZdO1xyXG4gICAgICAgICAgICBjNyA9IHNbN10gXiBzWzE3XSBeIHNbMjddIF4gc1szN10gXiBzWzQ3XTtcclxuICAgICAgICAgICAgYzggPSBzWzhdIF4gc1sxOF0gXiBzWzI4XSBeIHNbMzhdIF4gc1s0OF07XHJcbiAgICAgICAgICAgIGM5ID0gc1s5XSBeIHNbMTldIF4gc1syOV0gXiBzWzM5XSBeIHNbNDldO1xyXG4gICAgICAgICAgICBoID0gYzggXiAoKGMyIDw8IDEpIHwgKGMzID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzkgXiAoKGMzIDw8IDEpIHwgKGMyID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMV0gXj0gbDtcclxuICAgICAgICAgICAgc1sxMF0gXj0gaDtcclxuICAgICAgICAgICAgc1sxMV0gXj0gbDtcclxuICAgICAgICAgICAgc1syMF0gXj0gaDtcclxuICAgICAgICAgICAgc1syMV0gXj0gbDtcclxuICAgICAgICAgICAgc1szMF0gXj0gaDtcclxuICAgICAgICAgICAgc1szMV0gXj0gbDtcclxuICAgICAgICAgICAgc1s0MF0gXj0gaDtcclxuICAgICAgICAgICAgc1s0MV0gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGMwIF4gKChjNCA8PCAxKSB8IChjNSA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGMxIF4gKChjNSA8PCAxKSB8IChjNCA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1syXSBePSBoO1xyXG4gICAgICAgICAgICBzWzNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDNdIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjMiBeICgoYzYgPDwgMSkgfCAoYzcgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjMyBeICgoYzcgPDwgMSkgfCAoYzYgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbNF0gXj0gaDtcclxuICAgICAgICAgICAgc1s1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzE0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzE1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzI0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzI1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzM0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzM1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzQ0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzQ1XSBePSBsO1xyXG4gICAgICAgICAgICBoID0gYzQgXiAoKGM4IDw8IDEpIHwgKGM5ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzUgXiAoKGM5IDw8IDEpIHwgKGM4ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbN10gXj0gbDtcclxuICAgICAgICAgICAgc1sxNl0gXj0gaDtcclxuICAgICAgICAgICAgc1sxN10gXj0gbDtcclxuICAgICAgICAgICAgc1syNl0gXj0gaDtcclxuICAgICAgICAgICAgc1syN10gXj0gbDtcclxuICAgICAgICAgICAgc1szNl0gXj0gaDtcclxuICAgICAgICAgICAgc1szN10gXj0gbDtcclxuICAgICAgICAgICAgc1s0Nl0gXj0gaDtcclxuICAgICAgICAgICAgc1s0N10gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGM2IF4gKChjMCA8PCAxKSB8IChjMSA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGM3IF4gKChjMSA8PCAxKSB8IChjMCA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1s4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzldIF49IGw7XHJcbiAgICAgICAgICAgIHNbMThdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTldIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjldIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzldIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDldIF49IGw7XHJcbiAgICAgICAgICAgIGIwID0gc1swXTtcclxuICAgICAgICAgICAgYjEgPSBzWzFdO1xyXG4gICAgICAgICAgICBiMzIgPSAoc1sxMV0gPDwgNCkgfCAoc1sxMF0gPj4+IDI4KTtcclxuICAgICAgICAgICAgYjMzID0gKHNbMTBdIDw8IDQpIHwgKHNbMTFdID4+PiAyOCk7XHJcbiAgICAgICAgICAgIGIxNCA9IChzWzIwXSA8PCAzKSB8IChzWzIxXSA+Pj4gMjkpO1xyXG4gICAgICAgICAgICBiMTUgPSAoc1syMV0gPDwgMykgfCAoc1syMF0gPj4+IDI5KTtcclxuICAgICAgICAgICAgYjQ2ID0gKHNbMzFdIDw8IDkpIHwgKHNbMzBdID4+PiAyMyk7XHJcbiAgICAgICAgICAgIGI0NyA9IChzWzMwXSA8PCA5KSB8IChzWzMxXSA+Pj4gMjMpO1xyXG4gICAgICAgICAgICBiMjggPSAoc1s0MF0gPDwgMTgpIHwgKHNbNDFdID4+PiAxNCk7XHJcbiAgICAgICAgICAgIGIyOSA9IChzWzQxXSA8PCAxOCkgfCAoc1s0MF0gPj4+IDE0KTtcclxuICAgICAgICAgICAgYjIwID0gKHNbMl0gPDwgMSkgfCAoc1szXSA+Pj4gMzEpO1xyXG4gICAgICAgICAgICBiMjEgPSAoc1szXSA8PCAxKSB8IChzWzJdID4+PiAzMSk7XHJcbiAgICAgICAgICAgIGIyID0gKHNbMTNdIDw8IDEyKSB8IChzWzEyXSA+Pj4gMjApO1xyXG4gICAgICAgICAgICBiMyA9IChzWzEyXSA8PCAxMikgfCAoc1sxM10gPj4+IDIwKTtcclxuICAgICAgICAgICAgYjM0ID0gKHNbMjJdIDw8IDEwKSB8IChzWzIzXSA+Pj4gMjIpO1xyXG4gICAgICAgICAgICBiMzUgPSAoc1syM10gPDwgMTApIHwgKHNbMjJdID4+PiAyMik7XHJcbiAgICAgICAgICAgIGIxNiA9IChzWzMzXSA8PCAxMykgfCAoc1szMl0gPj4+IDE5KTtcclxuICAgICAgICAgICAgYjE3ID0gKHNbMzJdIDw8IDEzKSB8IChzWzMzXSA+Pj4gMTkpO1xyXG4gICAgICAgICAgICBiNDggPSAoc1s0Ml0gPDwgMikgfCAoc1s0M10gPj4+IDMwKTtcclxuICAgICAgICAgICAgYjQ5ID0gKHNbNDNdIDw8IDIpIHwgKHNbNDJdID4+PiAzMCk7XHJcbiAgICAgICAgICAgIGI0MCA9IChzWzVdIDw8IDMwKSB8IChzWzRdID4+PiAyKTtcclxuICAgICAgICAgICAgYjQxID0gKHNbNF0gPDwgMzApIHwgKHNbNV0gPj4+IDIpO1xyXG4gICAgICAgICAgICBiMjIgPSAoc1sxNF0gPDwgNikgfCAoc1sxNV0gPj4+IDI2KTtcclxuICAgICAgICAgICAgYjIzID0gKHNbMTVdIDw8IDYpIHwgKHNbMTRdID4+PiAyNik7XHJcbiAgICAgICAgICAgIGI0ID0gKHNbMjVdIDw8IDExKSB8IChzWzI0XSA+Pj4gMjEpO1xyXG4gICAgICAgICAgICBiNSA9IChzWzI0XSA8PCAxMSkgfCAoc1syNV0gPj4+IDIxKTtcclxuICAgICAgICAgICAgYjM2ID0gKHNbMzRdIDw8IDE1KSB8IChzWzM1XSA+Pj4gMTcpO1xyXG4gICAgICAgICAgICBiMzcgPSAoc1szNV0gPDwgMTUpIHwgKHNbMzRdID4+PiAxNyk7XHJcbiAgICAgICAgICAgIGIxOCA9IChzWzQ1XSA8PCAyOSkgfCAoc1s0NF0gPj4+IDMpO1xyXG4gICAgICAgICAgICBiMTkgPSAoc1s0NF0gPDwgMjkpIHwgKHNbNDVdID4+PiAzKTtcclxuICAgICAgICAgICAgYjEwID0gKHNbNl0gPDwgMjgpIHwgKHNbN10gPj4+IDQpO1xyXG4gICAgICAgICAgICBiMTEgPSAoc1s3XSA8PCAyOCkgfCAoc1s2XSA+Pj4gNCk7XHJcbiAgICAgICAgICAgIGI0MiA9IChzWzE3XSA8PCAyMykgfCAoc1sxNl0gPj4+IDkpO1xyXG4gICAgICAgICAgICBiNDMgPSAoc1sxNl0gPDwgMjMpIHwgKHNbMTddID4+PiA5KTtcclxuICAgICAgICAgICAgYjI0ID0gKHNbMjZdIDw8IDI1KSB8IChzWzI3XSA+Pj4gNyk7XHJcbiAgICAgICAgICAgIGIyNSA9IChzWzI3XSA8PCAyNSkgfCAoc1syNl0gPj4+IDcpO1xyXG4gICAgICAgICAgICBiNiA9IChzWzM2XSA8PCAyMSkgfCAoc1szN10gPj4+IDExKTtcclxuICAgICAgICAgICAgYjcgPSAoc1szN10gPDwgMjEpIHwgKHNbMzZdID4+PiAxMSk7XHJcbiAgICAgICAgICAgIGIzOCA9IChzWzQ3XSA8PCAyNCkgfCAoc1s0Nl0gPj4+IDgpO1xyXG4gICAgICAgICAgICBiMzkgPSAoc1s0Nl0gPDwgMjQpIHwgKHNbNDddID4+PiA4KTtcclxuICAgICAgICAgICAgYjMwID0gKHNbOF0gPDwgMjcpIHwgKHNbOV0gPj4+IDUpO1xyXG4gICAgICAgICAgICBiMzEgPSAoc1s5XSA8PCAyNykgfCAoc1s4XSA+Pj4gNSk7XHJcbiAgICAgICAgICAgIGIxMiA9IChzWzE4XSA8PCAyMCkgfCAoc1sxOV0gPj4+IDEyKTtcclxuICAgICAgICAgICAgYjEzID0gKHNbMTldIDw8IDIwKSB8IChzWzE4XSA+Pj4gMTIpO1xyXG4gICAgICAgICAgICBiNDQgPSAoc1syOV0gPDwgNykgfCAoc1syOF0gPj4+IDI1KTtcclxuICAgICAgICAgICAgYjQ1ID0gKHNbMjhdIDw8IDcpIHwgKHNbMjldID4+PiAyNSk7XHJcbiAgICAgICAgICAgIGIyNiA9IChzWzM4XSA8PCA4KSB8IChzWzM5XSA+Pj4gMjQpO1xyXG4gICAgICAgICAgICBiMjcgPSAoc1szOV0gPDwgOCkgfCAoc1szOF0gPj4+IDI0KTtcclxuICAgICAgICAgICAgYjggPSAoc1s0OF0gPDwgMTQpIHwgKHNbNDldID4+PiAxOCk7XHJcbiAgICAgICAgICAgIGI5ID0gKHNbNDldIDw8IDE0KSB8IChzWzQ4XSA+Pj4gMTgpO1xyXG4gICAgICAgICAgICBzWzBdID0gYjAgXiAofmIyICYgYjQpO1xyXG4gICAgICAgICAgICBzWzFdID0gYjEgXiAofmIzICYgYjUpO1xyXG4gICAgICAgICAgICBzWzEwXSA9IGIxMCBeICh+YjEyICYgYjE0KTtcclxuICAgICAgICAgICAgc1sxMV0gPSBiMTEgXiAofmIxMyAmIGIxNSk7XHJcbiAgICAgICAgICAgIHNbMjBdID0gYjIwIF4gKH5iMjIgJiBiMjQpO1xyXG4gICAgICAgICAgICBzWzIxXSA9IGIyMSBeICh+YjIzICYgYjI1KTtcclxuICAgICAgICAgICAgc1szMF0gPSBiMzAgXiAofmIzMiAmIGIzNCk7XHJcbiAgICAgICAgICAgIHNbMzFdID0gYjMxIF4gKH5iMzMgJiBiMzUpO1xyXG4gICAgICAgICAgICBzWzQwXSA9IGI0MCBeICh+YjQyICYgYjQ0KTtcclxuICAgICAgICAgICAgc1s0MV0gPSBiNDEgXiAofmI0MyAmIGI0NSk7XHJcbiAgICAgICAgICAgIHNbMl0gPSBiMiBeICh+YjQgJiBiNik7XHJcbiAgICAgICAgICAgIHNbM10gPSBiMyBeICh+YjUgJiBiNyk7XHJcbiAgICAgICAgICAgIHNbMTJdID0gYjEyIF4gKH5iMTQgJiBiMTYpO1xyXG4gICAgICAgICAgICBzWzEzXSA9IGIxMyBeICh+YjE1ICYgYjE3KTtcclxuICAgICAgICAgICAgc1syMl0gPSBiMjIgXiAofmIyNCAmIGIyNik7XHJcbiAgICAgICAgICAgIHNbMjNdID0gYjIzIF4gKH5iMjUgJiBiMjcpO1xyXG4gICAgICAgICAgICBzWzMyXSA9IGIzMiBeICh+YjM0ICYgYjM2KTtcclxuICAgICAgICAgICAgc1szM10gPSBiMzMgXiAofmIzNSAmIGIzNyk7XHJcbiAgICAgICAgICAgIHNbNDJdID0gYjQyIF4gKH5iNDQgJiBiNDYpO1xyXG4gICAgICAgICAgICBzWzQzXSA9IGI0MyBeICh+YjQ1ICYgYjQ3KTtcclxuICAgICAgICAgICAgc1s0XSA9IGI0IF4gKH5iNiAmIGI4KTtcclxuICAgICAgICAgICAgc1s1XSA9IGI1IF4gKH5iNyAmIGI5KTtcclxuICAgICAgICAgICAgc1sxNF0gPSBiMTQgXiAofmIxNiAmIGIxOCk7XHJcbiAgICAgICAgICAgIHNbMTVdID0gYjE1IF4gKH5iMTcgJiBiMTkpO1xyXG4gICAgICAgICAgICBzWzI0XSA9IGIyNCBeICh+YjI2ICYgYjI4KTtcclxuICAgICAgICAgICAgc1syNV0gPSBiMjUgXiAofmIyNyAmIGIyOSk7XHJcbiAgICAgICAgICAgIHNbMzRdID0gYjM0IF4gKH5iMzYgJiBiMzgpO1xyXG4gICAgICAgICAgICBzWzM1XSA9IGIzNSBeICh+YjM3ICYgYjM5KTtcclxuICAgICAgICAgICAgc1s0NF0gPSBiNDQgXiAofmI0NiAmIGI0OCk7XHJcbiAgICAgICAgICAgIHNbNDVdID0gYjQ1IF4gKH5iNDcgJiBiNDkpO1xyXG4gICAgICAgICAgICBzWzZdID0gYjYgXiAofmI4ICYgYjApO1xyXG4gICAgICAgICAgICBzWzddID0gYjcgXiAofmI5ICYgYjEpO1xyXG4gICAgICAgICAgICBzWzE2XSA9IGIxNiBeICh+YjE4ICYgYjEwKTtcclxuICAgICAgICAgICAgc1sxN10gPSBiMTcgXiAofmIxOSAmIGIxMSk7XHJcbiAgICAgICAgICAgIHNbMjZdID0gYjI2IF4gKH5iMjggJiBiMjApO1xyXG4gICAgICAgICAgICBzWzI3XSA9IGIyNyBeICh+YjI5ICYgYjIxKTtcclxuICAgICAgICAgICAgc1szNl0gPSBiMzYgXiAofmIzOCAmIGIzMCk7XHJcbiAgICAgICAgICAgIHNbMzddID0gYjM3IF4gKH5iMzkgJiBiMzEpO1xyXG4gICAgICAgICAgICBzWzQ2XSA9IGI0NiBeICh+YjQ4ICYgYjQwKTtcclxuICAgICAgICAgICAgc1s0N10gPSBiNDcgXiAofmI0OSAmIGI0MSk7XHJcbiAgICAgICAgICAgIHNbOF0gPSBiOCBeICh+YjAgJiBiMik7XHJcbiAgICAgICAgICAgIHNbOV0gPSBiOSBeICh+YjEgJiBiMyk7XHJcbiAgICAgICAgICAgIHNbMThdID0gYjE4IF4gKH5iMTAgJiBiMTIpO1xyXG4gICAgICAgICAgICBzWzE5XSA9IGIxOSBeICh+YjExICYgYjEzKTtcclxuICAgICAgICAgICAgc1syOF0gPSBiMjggXiAofmIyMCAmIGIyMik7XHJcbiAgICAgICAgICAgIHNbMjldID0gYjI5IF4gKH5iMjEgJiBiMjMpO1xyXG4gICAgICAgICAgICBzWzM4XSA9IGIzOCBeICh+YjMwICYgYjMyKTtcclxuICAgICAgICAgICAgc1szOV0gPSBiMzkgXiAofmIzMSAmIGIzMyk7XHJcbiAgICAgICAgICAgIHNbNDhdID0gYjQ4IF4gKH5iNDAgJiBiNDIpO1xyXG4gICAgICAgICAgICBzWzQ5XSA9IGI0OSBeICh+YjQxICYgYjQzKTtcclxuICAgICAgICAgICAgc1swXSBePSBTaGEzLlJPVU5EX0NPTlNUQU5UU1tuXTtcclxuICAgICAgICAgICAgc1sxXSBePSBTaGEzLlJPVU5EX0NPTlNUQU5UU1tuICsgMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qIFBhZGRpbmcgdG8gdXNlIGZvciBLZWNjYWsgKi9cclxuU2hhMy5LRUNDQUtfUEFERElORyA9IG5ldyBVaW50MzJBcnJheShbMSwgMjU2LCA2NTUzNiwgMTY3NzcyMTZdKTtcclxuLyogQGludGVybmFsICovXHJcblNoYTMuU0hJRlQgPSBuZXcgVWludDhBcnJheShbMCwgOCwgMTYsIDI0XSk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5TaGEzLlJPVU5EX0NPTlNUQU5UUyA9IG5ldyBVaW50MzJBcnJheShbMSwgMCwgMzI4OTgsIDAsIDMyOTA2LCAyMTQ3NDgzNjQ4LCAyMTQ3NTE2NDE2LCAyMTQ3NDgzNjQ4LCAzMjkwNywgMCwgMjE0NzQ4MzY0OSxcclxuICAgIDAsIDIxNDc1MTY1NDUsIDIxNDc0ODM2NDgsIDMyNzc3LCAyMTQ3NDgzNjQ4LCAxMzgsIDAsIDEzNiwgMCwgMjE0NzUxNjQyNSwgMCxcclxuICAgIDIxNDc0ODM2NTgsIDAsIDIxNDc1MTY1NTUsIDAsIDEzOSwgMjE0NzQ4MzY0OCwgMzI5MDUsIDIxNDc0ODM2NDgsIDMyNzcxLFxyXG4gICAgMjE0NzQ4MzY0OCwgMzI3NzAsIDIxNDc0ODM2NDgsIDEyOCwgMjE0NzQ4MzY0OCwgMzI3NzgsIDAsIDIxNDc0ODM2NTgsIDIxNDc0ODM2NDgsXHJcbiAgICAyMTQ3NTE2NTQ1LCAyMTQ3NDgzNjQ4LCAzMjg5NiwgMjE0NzQ4MzY0OCwgMjE0NzQ4MzY0OSwgMCwgMjE0NzUxNjQyNCwgMjE0NzQ4MzY0OF0pO1xyXG5leHBvcnRzLlNoYTMgPSBTaGEzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMmhoTXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdkbGMzUnpMM05vWVRNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTeHpSRUZCYlVRN1FVRkZia1E3TzBkQlJVYzdRVUZEU0R0SlFYRkRTVHM3T3pzN1QwRkxSenRKUVVOSUxGbEJRVmtzU1VGQldTeEZRVUZGTEU5QlFXOUNMRVZCUVVVc1ZVRkJhMEk3VVVGRE9VUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU03VVVGRGVFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRE9VSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NWVUZCVlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOeVF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVXhReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEYWtJc1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NTMEZCU3p0UlFVTlNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyaENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyaENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNSRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zUzBGQmEwSTdVVUZETlVJc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hYUVVGWExFTkJRVU1zUlVGQlJUdFpRVU14UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc1EwRkJReXhEUVVGRE8xTkJRemRFTzFGQlEwUXNUVUZCVFN4UFFVRlBMRWRCUVdVc1NVRkJTU3hWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEYkVRc1RVRkJUU3hOUVVGTkxFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVWT0xFOUJRVThzUzBGQlN5eEhRVUZITEUxQlFVMHNSVUZCUlR0WlFVTnVRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTJJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdaMEpCUTNCQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dG5Ra0ZET1VJc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlR0dlFrRkRka01zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03YVVKQlEzWkNPMkZCUTBvN1dVRkRSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVU3WjBKQlEyeEZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEycEZPMWxCUTBRc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEZUVJc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlR0blFrRkRkRUlzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF6dG5Ra0ZEYkVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dG5Ra0ZETjBNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzI5Q1FVTnVReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUTNKRE8yZENRVU5FTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1owSkJRM0JETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8yRkJRM1JDTzJsQ1FVRk5PMmRDUVVOSUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTI1Q08xTkJRMG83U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVFVGQlRUdFJRVU5VTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVWb1FpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRWaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEVml4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTndReXhKUVVGSkxFMUJRVTBzUTBGQlF6dFJRVU5ZTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVOc1FpeE5RVUZOTEVkQlFVY3NTVUZCU1N4WFFVRlhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRek5FTzJGQlFVMDdXVUZEU0N4TlFVRk5MRWRCUVVjc1NVRkJTU3hYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEYmtNN1VVRkRSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOMFF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRk8xbEJRek5DTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRuUWtGRGJFVXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkROMEk3VTBGRFNqdFJRVU5FTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVOc1FpeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhRaXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGJrTTdVVUZEUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRllpeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZGQlFWRTdVVUZEV2l4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETzFGQlF6VkNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpkRExFbEJRVWtzU1VGQlNTeERRVUZETEdOQlFXTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xbEJRM3BETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRGFrUXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJUdG5Ra0ZEZGtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRka0k3VTBGRFNqdFJRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNN1VVRkRha1FzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZPMWxCUTI1RExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnlRenRSUVVORUxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEZUVNc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeHBRa0ZCYVVJc1EwRkJReXhEUVVGak8xRkJRM0JETEhkRVFVRjNSRHRSUVVONFJDeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGREwwTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlF6bEZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGRE9VVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8xRkJRMjVHTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRlRUlzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRk1VTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOV0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOV0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRldDeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMVlzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOV0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5zUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY2tNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0pETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeERMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeERMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY2tNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0pETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlJYQkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkZNMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzWkRPMGxCUTB3c1EwRkJRenM3UVVGb1ZrUXNLMEpCUVN0Q08wRkJRMUlzYlVKQlFXTXNSMEZCWjBJc1NVRkJTU3hYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEyaEhMR1ZCUVdVN1FVRkRVeXhWUVVGTExFZEJRV1VzU1VGQlNTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpORkxHVkJRV1U3UVVGRFV5eHZRa0ZCWlN4SFFVRm5RaXhKUVVGSkxGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VlFVRlZPMGxCUTI1S0xFTkJRVU1zUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxGVkJRVlVzUlVGQlJTeERRVUZETzBsQlF6TkZMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNTMEZCU3p0SlFVTjJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRhRVlzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGV00wWXNiMEpCYTFaREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL2NvcmVFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgY3J5cHRvIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgQ3J5cHRvRXJyb3IgZXh0ZW5kcyBjb3JlRXJyb3JfMS5Db3JlRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQ3J5cHRvRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKTtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiQ3J5cHRvXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5DcnlwdG9FcnJvciA9IENyeXB0b0Vycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0o1Y0hSdlJYSnliM0l1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaWEp5YjNJdlkzSjVjSFJ2UlhKeWIzSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxHOUZRVUZwUlR0QlFVVnFSVHM3UjBGRlJ6dEJRVU5JTEdsQ1FVRjVRaXhUUVVGUkxIRkNRVUZUTzBsQlEzUkRPenM3T3p0UFFVdEhPMGxCUTBnc1dVRkJXU3hQUVVGbExFVkJRVVVzVlVGQmEwTXNSVUZCUlN4VlFVRnJRanRSUVVNdlJTeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU4yUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF6dEpRVU16UWl4RFFVRkRPME5CUTBvN1FVRllSQ3hyUTBGWFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZhY3RvcnlCYXNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBwcm9vZiBvZiB3b3JrLlxyXG4gKi9cclxuY2xhc3MgUHJvb2ZPZldvcmtGYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFQcm9vZk9mV29ya0ZhY3RvcnkuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFByb29mT2ZXb3JrRmFjdG9yeS5faW5zdGFuY2UgPSBuZXcgUHJvb2ZPZldvcmtGYWN0b3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9vZk9mV29ya0ZhY3RvcnkuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvb2ZPZldvcmtGYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qcm9vZk9mV29ya0ZhY3RvcnkgPSBQcm9vZk9mV29ya0ZhY3Rvcnk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZiMlpQWmxkdmNtdEdZV04wYjNKNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJaaFkzUnZjbWxsY3k5d2NtOXZaazltVjI5eWEwWmhZM1J2Y25rdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVkNlJUczdSMEZGUnp0QlFVTklMSGRDUVVGblF5eFRRVUZSTEhsQ1FVRjVRanRKUVVrM1JEczdPMDlCUjBjN1NVRkRTRHRSUVVOSkxFdEJRVXNzUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhUUVVGVExFVkJRVVU3V1VGREwwSXNhMEpCUVd0Q0xFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NhMEpCUVd0Q0xFVkJRVVVzUTBGQlF6dFRRVU16UkR0UlFVTkVMRTlCUVU4c2EwSkJRV3RDTEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTNoRExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlEwd3NWMEZCVnp0UlFVTnFRaXhQUVVGUExHdENRVUZyUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRM3BETEVOQlFVTTdRMEZEU2p0QlFUTkNSQ3huUkVFeVFrTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmYWN0b3J5QmFzZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiKTtcclxuY29uc3QgY3VybF8xID0gcmVxdWlyZShcIi4uL3Nwb25nZXMvY3VybFwiKTtcclxuY29uc3Qga2VybF8xID0gcmVxdWlyZShcIi4uL3Nwb25nZXMva2VybFwiKTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgc3Bvbmdlcy5cclxuICovXHJcbmNsYXNzIFNwb25nZUZhY3RvcnkgZXh0ZW5kcyBmYWN0b3J5QmFzZV8xLkZhY3RvcnlCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogRG9uJ3QgYWxsb3cgbWFudWFsIGNvbnN0cnVjdGlvbiBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGZhY3RvcnkgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIVNwb25nZUZhY3RvcnkuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlID0gbmV3IFNwb25nZUZhY3RvcnkoKTtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UucmVnaXN0ZXIoXCJjdXJsXCIsICguLi5hcmdzKSA9PiBuZXcgY3VybF8xLkN1cmwoLi4uYXJncykpO1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZS5yZWdpc3RlcihcImN1cmw4MVwiLCAoLi4uYXJncykgPT4gbmV3IGN1cmxfMS5DdXJsKDgxKSk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwiY3VybDI3XCIsICguLi5hcmdzKSA9PiBuZXcgY3VybF8xLkN1cmwoMjcpKTtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UucmVnaXN0ZXIoXCJrZXJsXCIsICguLi5hcmdzKSA9PiBuZXcga2VybF8xLktlcmwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNwb25nZUZhY3RvcnkgPSBTcG9uZ2VGYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM0J2Ym1kbFJtRmpkRzl5ZVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTltWVdOMGIzSnBaWE12YzNCdmJtZGxSbUZqZEc5eWVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlJYcEZMREJEUVVGMVF6dEJRVU4yUXl3d1EwRkJkVU03UVVGRmRrTTdPMGRCUlVjN1FVRkRTQ3h0UWtGQk1rSXNVMEZCVVN4NVFrRkJiMEk3U1VGSmJrUTdPenRQUVVkSE8wbEJRMGc3VVVGRFNTeExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVVHRSUVVOc1FpeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRk5CUVZNc1JVRkJSVHRaUVVNeFFpeGhRVUZoTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1lVRkJZU3hGUVVGRkxFTkJRVU03V1VGRE9VTXNZVUZCWVN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzVjBGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlJTeGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hYUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBSU3hoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4WFFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUlN4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeFhRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNKRk8xRkJRMFFzVDBGQlR5eGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTI1RExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlEwd3NWMEZCVnp0UlFVTnFRaXhQUVVGUExHRkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTndReXhEUVVGRE8wTkJRMG83UVVFdlFrUXNjME5CSzBKREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBhZGRyZXNzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9hZGRyZXNzXCIpO1xyXG5jb25zdCBhZGRyZXNzU2VjdXJpdHlfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2FkZHJlc3NTZWN1cml0eVwiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvaGFzaFwiKTtcclxuY29uc3Qgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcIik7XHJcbmNvbnN0IHRyaXRzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IHNwb25nZUZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuLi9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiKTtcclxuLyoqXHJcbiAqIElTUyBIYXNoaW5nIGZ1bmN0aW9ucy5cclxuICogQ29udmVydGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lyaS9zcmMvbWFpbi9qYXZhL2NvbS9pb3RhL2lyaS9oYXNoL0lTUy5qYXZhXHJcbiAqL1xyXG5jbGFzcyBJU1Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN1YnNlZWQgZm9yIHRoZSBzZWVkIGFuZCBpbmRleC5cclxuICAgICAqIEBwYXJhbSBzZWVkIFRoZSBzZWVkLlxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBmb3IgdGhlIHNlZWQuXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN1YnNlZWQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdWJzZWVkKHNlZWQsIGluZGV4LCBzcG9uZ2VUeXBlID0gXCJjdXJsMjdcIikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzZWVkLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHNlZWQgbXVzdCBiZSBvZiB0eXBlIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGluZGV4KSB8fCBpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgaW5kZXggbXVzdCBiZSBhbiBpbnRlZ2VyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5leGlzdHMoc3BvbmdlVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzcG9uZ2VUeXBlIG11c3QgYmUgb25lIG9mIFske3Nwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkudHlwZXMoKS5qb2luKFwiLCBcIil9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcG9uZ2UgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0gc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgc3BvbmdlLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjb25zdCBzdWJzZWVkUHJlaW1hZ2UgPSBzZWVkLnNsaWNlKCk7XHJcbiAgICAgICAgbGV0IGxvY2FsSW5kZXggPSBpbmRleDtcclxuICAgICAgICB3aGlsZSAobG9jYWxJbmRleC0tID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNlZWRQcmVpbWFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCsrc3Vic2VlZFByZWltYWdlW2ldID4gSVNTLk1BWF9UUklUX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic2VlZFByZWltYWdlW2ldID0gSVNTLk1JTl9UUklUX1ZBTFVFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3Vic2VlZCA9IG5ldyBJbnQ4QXJyYXkoaGFzaExlbmd0aCk7XHJcbiAgICAgICAgc3BvbmdlLmFic29yYihzdWJzZWVkUHJlaW1hZ2UsIDAsIHN1YnNlZWRQcmVpbWFnZS5sZW5ndGgpO1xyXG4gICAgICAgIHNwb25nZS5zcXVlZXplKHN1YnNlZWQsIDAsIHN1YnNlZWQubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gc3Vic2VlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRoZSBrZXkgZm9yIHRoZSBzZWVkLlxyXG4gICAgICogQHBhcmFtIHNlZWQgVGhlIHNlZWQgdG8gY3JlYXRlIHRoZSBrZXkgZm9yLlxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCB0byB1c2UgZm9yIHRoZSBzZWVkLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgc2VjdXJpdHkgbGV2ZWwgdG8gY3JlYXRlIHRoZSBrZXkuXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgdGhlIGtleS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGtleShzZWVkLCBpbmRleCwgc2VjdXJpdHksIHNwb25nZVR5cGUgPSBcImtlcmxcIikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzZWVkLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc2VlZCBtdXN0IGJlIG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGluZGV4KSB8fCBpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgaW5kZXggbXVzdCBiZSBhbiBpbnRlZ2VyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzZWN1cml0eSkgfHwgc2VjdXJpdHkgPCBhZGRyZXNzU2VjdXJpdHlfMS5BZGRyZXNzU2VjdXJpdHkubG93IHx8IHNlY3VyaXR5ID4gYWRkcmVzc1NlY3VyaXR5XzEuQWRkcmVzc1NlY3VyaXR5LmhpZ2gpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzZWN1cml0eSBtdXN0IGJlIGFuIGludGVnZXIgPj0gMSBhbmQgPD0gM2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VlZFRyaXRzID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHNlZWQudG9Ucnl0ZXMoKSk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhUcml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbU51bWJlcihpbmRleCk7XHJcbiAgICAgICAgY29uc3Qgc3Vic2VlZCA9IHRyaXRzXzEuVHJpdHMuYWRkKHNlZWRUcml0cywgaW5kZXhUcml0cykudG9BcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IHN1YnNlZWRMZW5ndGggPSBzdWJzZWVkLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBzcG9uZ2UgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0gc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgc3BvbmdlLmluaXRpYWxpemUoKTtcclxuICAgICAgICBzcG9uZ2UuYWJzb3JiKHN1YnNlZWQsIDAsIHN1YnNlZWRMZW5ndGgpO1xyXG4gICAgICAgIHNwb25nZS5zcXVlZXplKHN1YnNlZWQsIDAsIHN1YnNlZWRMZW5ndGgpO1xyXG4gICAgICAgIHNwb25nZS5yZXNldCgpO1xyXG4gICAgICAgIHNwb25nZS5hYnNvcmIoc3Vic2VlZCwgMCwgc3Vic2VlZExlbmd0aCk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gbmV3IEludDhBcnJheShJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUyAqIGhhc2hMZW5ndGggKiBzZWN1cml0eSk7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IEludDhBcnJheShzdWJzZWVkTGVuZ3RoKTtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBzZWN1cml0eTtcclxuICAgICAgICB3aGlsZSAobG9jYWxMZW5ndGgtLSA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzcG9uZ2Uuc3F1ZWV6ZShidWZmZXIsIDAsIHN1YnNlZWRMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYXNoTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlbb2Zmc2V0KytdID0gYnVmZmVyW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0aGUgZGlnZXN0cyBmb3IgdGhlIGdpdmVuIHN1YnNlZWQuXHJcbiAgICAgKiBAcGFyYW0gc3Vic2VlZCBUbyBjcmVhdGUgdGhlIGRpZ2VzdHMgZm9yLlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkaWdlc3RzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGlnZXN0cyhzdWJzZWVkLCBzcG9uZ2VUeXBlID0gXCJrZXJsXCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc3Vic2VlZCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzdWJzZWVkIG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5leGlzdHMoc3BvbmdlVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzcG9uZ2VUeXBlIG11c3QgYmUgb25lIG9mIFske3Nwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkudHlwZXMoKS5qb2luKFwiLCBcIil9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcG9uZ2UgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0gc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnRMZW5ndGggPSBoYXNoTGVuZ3RoICogSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1M7XHJcbiAgICAgICAgaWYgKHN1YnNlZWQubGVuZ3RoICUgZnJhZ21lbnRMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzdWJzZWVkIGxlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtmcmFnbWVudExlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVSYW5nZSA9IElTUy5NQVhfVFJZVEVfVkFMVUUgLSBJU1MuTUlOX1RSWVRFX1ZBTFVFO1xyXG4gICAgICAgIGNvbnN0IGtleUxlbkRpdiA9IHN1YnNlZWQubGVuZ3RoIC8gZnJhZ21lbnRMZW5ndGg7XHJcbiAgICAgICAgY29uc3QgZGlnZXN0cyA9IG5ldyBJbnQ4QXJyYXkoa2V5TGVuRGl2ICogaGFzaExlbmd0aCk7XHJcbiAgICAgICAgbGV0IGJ1ZmZlcjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleUxlbkRpdjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlNdWwgPSBpICogZnJhZ21lbnRMZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUZyYWdtZW50ID0gc3Vic2VlZC5zbGljZShpTXVsLCBpTXVsICsgZnJhZ21lbnRMZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IElTUy5OVU1CRVJfT0ZfRlJBR01FTlRfQ0hVTktTOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpNdWwgPSBqICogaGFzaExlbmd0aDtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IGtleUZyYWdtZW50LnNsaWNlKGpNdWwsIGpNdWwgKyBoYXNoTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdHJ5dGVSYW5nZTsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BvbmdlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BvbmdlLmFic29yYihidWZmZXIsIDAsIGJ1ZmZlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwb25nZS5zcXVlZXplKGJ1ZmZlciwgMCwgaGFzaExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGhhc2hMZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleUZyYWdtZW50W2pNdWwgKyBrXSA9IGJ1ZmZlcltrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcG9uZ2UucmVzZXQoKTtcclxuICAgICAgICAgICAgc3BvbmdlLmFic29yYihrZXlGcmFnbWVudCwgMCwga2V5RnJhZ21lbnQubGVuZ3RoKTtcclxuICAgICAgICAgICAgc3BvbmdlLnNxdWVlemUoYnVmZmVyLCAwLCBoYXNoTGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgaU11bDIgPSBpICogaGFzaExlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYXNoTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGRpZ2VzdHNbaU11bDIgKyBqXSA9IGJ1ZmZlcltqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlnZXN0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRoZSBhZGRyZXNzIGZvciB0aGUgZGlnZXN0cy5cclxuICAgICAqIEBwYXJhbSBkaWdlc3RzIFRoZSBkaWdlc3RzIHRvIGNyZWF0ZSB0aGUgYWRkcmVzcyBmb3IuXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgdGhlIGFkZHJlc3MgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGRyZXNzKGRpZ2VzdHMsIHNwb25nZVR5cGUgPSBcImtlcmxcIikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShkaWdlc3RzLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGRpZ2VzdHMgbXVzdCBiZSBvZiB0eXBlIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmV4aXN0cyhzcG9uZ2VUeXBlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVGhlIHNwb25nZVR5cGUgbXVzdCBiZSBvbmUgb2YgWyR7c3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS50eXBlcygpLmpvaW4oXCIsIFwiKX1dYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwb25nZSA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hMZW5ndGggPSBzcG9uZ2UuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKTtcclxuICAgICAgICBpZiAoZGlnZXN0cy5sZW5ndGggJSBoYXNoTGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBJbnZhbGlkIGRpZ2VzdHMgbGVuZ3RoLCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtoYXNoTGVuZ3RofWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcG9uZ2UuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHNwb25nZS5hYnNvcmIoZGlnZXN0cywgMCwgZGlnZXN0cy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NUcml0cyA9IG5ldyBJbnQ4QXJyYXkoaGFzaExlbmd0aCk7XHJcbiAgICAgICAgc3BvbmdlLnNxdWVlemUoYWRkcmVzc1RyaXRzLCAwLCBhZGRyZXNzVHJpdHMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gYWRkcmVzc1RyaXRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgZGlnZXN0IG9mIHRoZSBub3JtYWxpemVkIGJ1bmRsZSBmcmFnbWVudC5cclxuICAgICAqIEBwYXJhbSBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQgVGhlIGZyYWdtZW50IHRvIGNyZWF0ZSBkaWdlc3QuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSB0cml0cyBmb3Igc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQuXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRpZ2VzdCBvZiB0aGUgYnVuZGxlIGFuZCBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRpZ2VzdChub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgc3BvbmdlVHlwZSA9IFwia2VybFwiKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQgbXVzdCBiZSBvZiB0eXBlIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgbXVzdCBiZSBvZiB0eXBlIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmV4aXN0cyhzcG9uZ2VUeXBlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVGhlIHNwb25nZVR5cGUgbXVzdCBiZSBvbmUgb2YgWyR7c3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS50eXBlcygpLmpvaW4oXCIsIFwiKX1dYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidWZmZXI7XHJcbiAgICAgICAgY29uc3Qgc3BvbmdlID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIHNwb25nZS5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyBJbnQ4QXJyYXkoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnNsaWNlKGkgKiBoYXNoTGVuZ3RoLCAoaSArIDEpICogaGFzaExlbmd0aCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50W2ldIC0gSVNTLk1JTl9UUllURV9WQUxVRTsgaiA+IDA7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BvbmdlMiA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgc3BvbmdlMi5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICBzcG9uZ2UyLmFic29yYihidWZmZXIsIDAsIGJ1ZmZlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgc3BvbmdlMi5zcXVlZXplKGJ1ZmZlciwgMCwgc3BvbmdlMi5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcG9uZ2UuYWJzb3JiKGJ1ZmZlciwgMCwgYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwb25nZS5zcXVlZXplKGJ1ZmZlciwgMCwgc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIikpO1xyXG4gICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZGlnZXN0IGZvciB0aGUgc3Vic2VlZC5cclxuICAgICAqIEBwYXJhbSBzdWJzZWVkIFRoZSBzdWJzZWVkIHRvIGdldCB0aGUgZGlnZXN0IGZvci5cclxuICAgICAqIEBwYXJhbSBzZWN1cml0eSBUaGUgc2VjdXJpdHkgbGV2ZWwuXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRpZ2VzdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN1YnNlZWRUb0RpZ2VzdChzdWJzZWVkLCBzZWN1cml0eSwgc3BvbmdlVHlwZSA9IFwiY3VybDI3XCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc3Vic2VlZCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzdWJzZWVkIG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzZWN1cml0eSkgfHwgc2VjdXJpdHkgPCBhZGRyZXNzU2VjdXJpdHlfMS5BZGRyZXNzU2VjdXJpdHkubG93IHx8IHNlY3VyaXR5ID4gYWRkcmVzc1NlY3VyaXR5XzEuQWRkcmVzc1NlY3VyaXR5LmhpZ2gpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzZWN1cml0eSBtdXN0IGJlIGFuIGludGVnZXIgPj0gMSBhbmQgPD0gM2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYzEgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBjMiA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGMzID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgYzEuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGMyLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjMy5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IGMxLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgY29uc3Qga2V5TGVuZ3RoID0gKChoYXNoTGVuZ3RoIC8gMykgLyBJU1MuUkFESVgpICogaGFzaExlbmd0aDtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBzZWN1cml0eSAqIGtleUxlbmd0aCAvIGhhc2hMZW5ndGg7XHJcbiAgICAgICAgbGV0IG91dCA9IG5ldyBJbnQ4QXJyYXkoaGFzaExlbmd0aCk7XHJcbiAgICAgICAgYzEuYWJzb3JiKHN1YnNlZWQsIDAsIHN1YnNlZWQubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGMxLnNxdWVlemUob3V0LCAwLCBvdXQubGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAoSVNTLk1BWF9UUllURV9WQUxVRSAtIElTUy5NSU5fVFJZVEVfVkFMVUUgKyAxKTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjMi5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgYzIuYWJzb3JiKG91dCwgMCwgb3V0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBvdXQgPSBjMi5nZXRTdGF0ZSgpLnNsaWNlKDAsIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGMzLmFic29yYihvdXQsIDAsIG91dC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjMy5zcXVlZXplKG91dCwgMCwgb3V0Lmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbm9ybWFsaXplZCBidW5kbGUuXHJcbiAgICAgKiBAcGFyYW0gYnVuZGxlSGFzaCBUaGUgaGFzaCBvZiB0aGUgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIHRoZSBub3JtYWxpemVkIGJ1bmRsZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG5vcm1hbGl6ZWRCdW5kbGUoYnVuZGxlSGFzaCwgc3BvbmdlVHlwZSA9IFwiY3VybDgxXCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYnVuZGxlSGFzaCwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGJ1bmRsZUhhc2ggbXVzdCBiZSBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5leGlzdHMoc3BvbmdlVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzcG9uZ2VUeXBlIG11c3QgYmUgb25lIG9mIFske3Nwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkudHlwZXMoKS5qb2luKFwiLCBcIil9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcG9uZ2UgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0gc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEJ1bmRsZSA9IG5ldyBJbnQ4QXJyYXkoSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1MgKiBJU1MuTlVNQkVSX09GX1NFQ1VSSVRZX0xFVkVMUyk7XHJcbiAgICAgICAgY29uc3QgaGFzaFN0cmluZyA9IGJ1bmRsZUhhc2gudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCA9IGhhc2hMZW5ndGggLyBJU1MuVFJZVEVfV0lEVEggLyBJU1MuTlVNQkVSX09GX1NFQ1VSSVRZX0xFVkVMUztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IElTUy5OVU1CRVJfT0ZfU0VDVVJJVFlfTEVWRUxTOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9ybWFsaXplZEZyYWdtZW50TGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc2hDaGFyID0gaGFzaFN0cmluZy5jaGFyQXQoaSAqIG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCArIGopO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKGhhc2hDaGFyKSkudG9OdW1iZXIoKTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRCdW5kbGVbaSAqIG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCArIGpdID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgc3VtICs9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3VtID49IDApIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChzdW0tLSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkQnVuZGxlW2kgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqXSA+IElTUy5NSU5fVFJZVEVfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRCdW5kbGVbaSAqIG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCArIGpdLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChzdW0rKyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkQnVuZGxlW2kgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqXSA8IElTUy5NQVhfVFJZVEVfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRCdW5kbGVbaSAqIG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCArIGpdKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9ybWFsaXplZEJ1bmRsZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGUgdGhlIHNpZ25hdHVyZSBmcmFnbWVudHMgZnJvbSB0aGUgYWRkcmVzcy5cclxuICAgICAqIEBwYXJhbSBleHBlY3RlZEFkZHJlc3MgVGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cyBUaGUgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnRzLlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZUhhc2ggVGhlIGhhc2ggZm9yIHRoZSBidW5kbGUuXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQgYXJlIHNpZ25lZCBieSB0aGUgZXhwZWN0ZWQgYWRkcmVzcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHZhbGlkYXRlU2lnbmF0dXJlcyhleHBlY3RlZEFkZHJlc3MsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMsIGJ1bmRsZUhhc2gsIHNwb25nZVR5cGUgPSBcImtlcmxcIikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShleHBlY3RlZEFkZHJlc3MsIGFkZHJlc3NfMS5BZGRyZXNzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBleHBlY3RlZEFkZHJlc3MgbXVzdCBiZSBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cyBtdXN0IGJlIGFuIGFycmF5IG9mIHR5cGUgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYnVuZGxlSGFzaCwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGJ1bmRsZUhhc2ggbXVzdCBiZSBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5leGlzdHMoc3BvbmdlVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzcG9uZ2VUeXBlIG11c3QgYmUgb25lIG9mIFske3Nwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkudHlwZXMoKS5qb2luKFwiLCBcIil9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnRzID0gW107XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEJ1bmRsZUhhc2ggPSBJU1Mubm9ybWFsaXplZEJ1bmRsZShidW5kbGVIYXNoKTtcclxuICAgICAgICBjb25zdCBzcG9uZ2UgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0gc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgZm9yIChsZXQgZiA9IDA7IGYgPCAzOyBmKyspIHtcclxuICAgICAgICAgICAgbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50c1tmXSA9IG5vcm1hbGl6ZWRCdW5kbGVIYXNoLnNsaWNlKGYgKiBJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUywgKGYgKyAxKSAqIElTUy5OVU1CRVJfT0ZfRlJBR01FTlRfQ0hVTktTKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGlnZXN0cyA9IG5ldyBJbnQ4QXJyYXkoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cy5sZW5ndGggKiBoYXNoTGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGlnZXN0QnVmZmVyID0gSVNTLmRpZ2VzdChub3JtYWxpemVkQnVuZGxlRnJhZ21lbnRzW2kgJSAzXSwgdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHNbaV0udG9Ucnl0ZXMoKSkudG9BcnJheSgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYXNoTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGRpZ2VzdHNbaSAqIGhhc2hMZW5ndGggKyBqXSA9IGRpZ2VzdEJ1ZmZlcltqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwZWN0ZWRBZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKSA9PT0gdHJpdHNfMS5Ucml0cy5mcm9tQXJyYXkoSVNTLmFkZHJlc3MoZGlnZXN0cykpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgc2lnbmVkIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50LlxyXG4gICAgICogQHBhcmFtIG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudCBUaGUgZnJhZ21lbnQgdG8gc2lnbi5cclxuICAgICAqIEBwYXJhbSBrZXlGcmFnbWVudCBUaGUga2V5IGZyYWdtZW50IHRvIHNpZ24gd2l0aC5cclxuICAgICAqIEBwYXJhbSBzcG9uZ2VUeXBlIFRoZSBzcG9uZ2UgdHlwZSB0byB1c2UgZm9yIG9wZXJhdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc2lnbmVkIGZyYWdtZW50LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudCwga2V5RnJhZ21lbnQsIHNwb25nZVR5cGUgPSBcImtlcmxcIikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50IG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShrZXlGcmFnbWVudCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBrZXlGcmFnbWVudCBtdXN0IGJlIG9mIHR5cGUgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0ga2V5RnJhZ21lbnQuc2xpY2UoKTtcclxuICAgICAgICBsZXQgaGFzaDtcclxuICAgICAgICBjb25zdCBrZXJsID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IGtlcmwuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcclxuICAgICAgICAgICAgaGFzaCA9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5zbGljZShpICogaGFzaExlbmd0aCwgKGkgKyAxKSAqIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEzIC0gbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50W2ldOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGtlcmwuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAga2VybC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAga2VybC5hYnNvcmIoaGFzaCwgMCwgaGFzaExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBrZXJsLnNxdWVlemUoaGFzaCwgMCwgaGFzaExlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYXNoTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFtpICogaGFzaExlbmd0aCArIGpdID0gaGFzaFtqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50O1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUyA9IDI3O1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLk5VTUJFUl9PRl9TRUNVUklUWV9MRVZFTFMgPSAzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLlRSWVRFX1dJRFRIID0gMztcclxuLyogQGludGVybmFsICovXHJcbklTUy5NSU5fVFJZVEVfVkFMVUUgPSAtMTM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuTUFYX1RSWVRFX1ZBTFVFID0gMTM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuTUlOX1RSSVRfVkFMVUUgPSAtMTtcclxuLyogQGludGVybmFsICovXHJcbklTUy5NQVhfVFJJVF9WQUxVRSA9IDE7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuUkFESVggPSAzO1xyXG5leHBvcnRzLklTUyA9IElTUztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVhOekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJoaGMyZ3ZhWE56TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3d3UlVGQmRVVTdRVUZEZGtVc05FVkJRWGxGTzBGQlEzcEZMRFJGUVVGNVJUdEJRVU42UlN3clJFRkJORVE3UVVGRE5VUXNLMFZCUVRSRk8wRkJRelZGTEhsRVFVRnpSRHRCUVVOMFJDeHBSMEZCT0VZN1FVRkRPVVlzTWtSQlFYZEVPMEZCUTNoRUxEWkVRVUV3UkR0QlFVTXhSQ3h6UkVGQmJVUTdRVUZEYmtRc09FUkJRVEpFTzBGQlJUTkVPenM3UjBGSFJ6dEJRVU5JTzBsQmEwSkpPenM3T3pzN1QwRk5SenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCWlN4RlFVRkZMRXRCUVdFc1JVRkJSU3hoUVVGeFFpeFJRVUZSTzFGQlF5OUZMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhEUVVGRExFVkJRVVU3V1VGRGRrTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYjBOQlFXOURMRU5CUVVNc1EwRkJRenRUUVVNdlJEdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRemRETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHMURRVUZ0UXl4RFFVRkRMRU5CUVVNN1UwRkRPVVE3VVVGRlJDeEpRVUZKTEVOQlFVTXNOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1dVRkRPVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2EwTkJRV3RETERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU16Unp0UlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF6TkVMRTFCUVUwc1ZVRkJWU3hIUVVGSExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkRja1FzVFVGQlRTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMUZCUlhCQ0xFMUJRVTBzWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOeVF5eEpRVUZKTEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkZka0lzVDBGQlR5eFZRVUZWTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRja0lzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExHVkJRV1VzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRemRETEVsQlFVa3NSVUZCUlN4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEdOQlFXTXNSVUZCUlR0dlFrRkRNME1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhqUVVGakxFTkJRVU03YVVKQlF6TkRPM0ZDUVVGTk8yOUNRVU5JTEUxQlFVMDdhVUpCUTFRN1lVRkRTanRUUVVOS08xRkJSVVFzVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRk1VTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlF5eEZRVUZGTEdWQlFXVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNeFJDeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFVkJRVVVzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUlRORExFOUJRVThzVDBGQlR5eERRVUZETzBsQlEyNUNMRU5CUVVNN1NVRkZSRHM3T3pzN096dFBRVTlITzBsQlEwa3NUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGVkxFVkJRVVVzUzBGQllTeEZRVUZGTEZGQlFYbENMRVZCUVVVc1lVRkJjVUlzVFVGQlRUdFJRVU12Uml4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmRCUVVrc1EwRkJReXhGUVVGRk8xbEJRMnhETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExDdENRVUVyUWl4RFFVRkRMRU5CUVVNN1UwRkRNVVE3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNM1F5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXh0UTBGQmJVTXNRMEZCUXl4RFFVRkRPMU5CUXpsRU8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEZGQlFWRXNSMEZCUnl4cFEwRkJaU3hEUVVGRExFZEJRVWNzU1VGQlNTeFJRVUZSTEVkQlFVY3NhVU5CUVdVc1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGRGVFY3NUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zSzBOQlFTdERMRU5CUVVNc1EwRkJRenRUUVVNeFJUdFJRVVZFTEVsQlFVa3NRMEZCUXl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHRaUVVNNVF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhyUTBGQmEwTXNOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlF6TkhPMUZCUlVRc1RVRkJUU3hUUVVGVExFZEJRVWNzWVVGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU53UkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhoUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpORExFMUJRVTBzVDBGQlR5eEhRVUZITEdGQlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUXpORUxFMUJRVTBzWVVGQllTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkZja01zVFVGQlRTeE5RVUZOTEVkQlFVY3NOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRNMFFzVFVGQlRTeFZRVUZWTEVkQlFVY3NUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVVZ5UkN4TlFVRk5MRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03VVVGRGNFSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUTNwRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hoUVVGaExFTkJRVU1zUTBGQlF6dFJRVVV4UXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRFppeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFVkJRVVVzWVVGQllTeERRVUZETEVOQlFVTTdVVUZGZWtNc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMSGxDUVVGNVFpeEhRVUZITEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOcVJpeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRSUVVNMVF5eEpRVUZKTEZkQlFWY3NSMEZCUnl4UlFVRlJMRU5CUVVNN1VVRkZNMElzVDBGQlR5eFhRVUZYTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRkRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eDVRa0ZCZVVJc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEY0VRc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMR0ZCUVdFc1EwRkJReXhEUVVGRE8yZENRVU42UXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVU5xUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRemRDTzJGQlEwbzdVMEZEU2p0UlFVTkVMRTlCUVU4c1IwRkJSeXhEUVVGRE8wbEJRMllzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGclFpeEZRVUZGTEdGQlFYRkNMRTFCUVUwN1VVRkRha1VzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUlR0WlFVTXhReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4MVEwRkJkVU1zUTBGQlF5eERRVUZETzFOQlEyeEZPMUZCUlVRc1NVRkJTU3hEUVVGRExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTzFsQlF6bERMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXcyUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRNMGM3VVVGRlJDeE5RVUZOTEUxQlFVMHNSMEZCUnl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVNelJDeE5RVUZOTEZWQlFWVXNSMEZCVnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlF6ZEVMRTFCUVUwc1kwRkJZeXhIUVVGSExGVkJRVlVzUjBGQlJ5eEhRVUZITEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU03VVVGRmJFVXNTVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExHTkJRV01zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEZGtNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNORU5CUVRSRExHTkJRV01zUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZGtZN1VVRkZSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eEhRVUZITEVOQlFVTXNaVUZCWlN4SFFVRkhMRWRCUVVjc1EwRkJReXhsUVVGbExFTkJRVU03VVVGRk4wUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eGpRVUZqTEVOQlFVTTdVVUZGYkVRc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNVMEZCVXl4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRM1JFTEVsQlFVa3NUVUZCYVVJc1EwRkJRenRSUVVWMFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTJoRExFMUJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNSMEZCUnl4alFVRmpMRU5CUVVNN1dVRkRhRU1zVFVGQlRTeFhRVUZYTEVkQlFVY3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEhRVUZITEdOQlFXTXNRMEZCUXl4RFFVRkRPMWxCUlM5RUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zZVVKQlFYbENMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzQkVMRTFCUVUwc1NVRkJTU3hIUVVGWExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTTdaMEpCUTNCRExFMUJRVTBzUjBGQlJ5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTTdaMEpCUlhCRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTJwRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0dlFrRkRaaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzI5Q1FVTjRReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03YVVKQlEzcERPMmRDUVVWRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTJwRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVTnlRenRoUVVOS08xbEJSVVFzVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUTJZc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4RlFVRkZMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU5zUkN4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkZkRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJRenRaUVVNM1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVOcVF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTnNRenRUUVVOS08xRkJRMFFzVDBGQlR5eFBRVUZQTEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRnJRaXhGUVVGRkxHRkJRWEZDTEUxQlFVMDdVVUZEYWtVc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJUdFpRVU14UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDFRMEZCZFVNc1EwRkJReXhEUVVGRE8xTkJRMnhGTzFGQlJVUXNTVUZCU1N4RFFVRkRMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8xbEJRemxETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZETTBjN1VVRkZSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTXpSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJSWEpFTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGVkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEyNURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEdsRVFVRnBSQ3hWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzaEdPMUZCUlVRc1RVRkJUU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzFGQlEzQkNMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRk1VTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVVUZETDBNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RlFVRkZMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVVZ5UkN4UFFVRlBMRmxCUVZrc1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenM3T3p0UFFVMUhPMGxCUTBrc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eDNRa0ZCYlVNc1JVRkJSU3gzUWtGQmJVTXNSVUZCUlN4aFFVRnhRaXhOUVVGTk8xRkJRM1JJTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eDNRa0ZCZDBJc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJUdFpRVU16UkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDNSRUZCZDBRc1EwRkJReXhEUVVGRE8xTkJRMjVHTzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEhkQ1FVRjNRaXhGUVVGRkxGTkJRVk1zUTBGQlF5eEZRVUZGTzFsQlF6TkVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhkRVFVRjNSQ3hEUVVGRExFTkJRVU03VTBGRGJrWTdVVUZGUkN4SlFVRkpMRU5CUVVNc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3V1VGRE9VTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYTBOQlFXdERMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTXpSenRSUVVWRUxFbEJRVWtzVFVGQmFVSXNRMEZCUXp0UlFVVjBRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTXpSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJRM0pFTEUxQlFVMHNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVWd1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEhsQ1FVRjVRaXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzQkVMRTFCUVUwc1IwRkJSeXhKUVVGSkxGTkJRVk1zUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlRkR0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVONFJTeE5RVUZOTEU5QlFVOHNSMEZCUnl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRuUWtGRk5VUXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8yZENRVU55UWl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVU42UXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyeEZPMWxCUlVRc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU16UXp0UlFVVkVMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETjBRc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVVkVPenM3T3pzN1QwRk5SenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNUMEZCYTBJc1JVRkJSU3hSUVVGNVFpeEZRVUZGTEdGQlFYRkNMRkZCUVZFN1VVRkRkRWNzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUlR0WlFVTXhReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4MVEwRkJkVU1zUTBGQlF5eERRVUZETzFOQlEyeEZPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxGRkJRVkVzUjBGQlJ5eHBRMEZCWlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hSUVVGUkxFZEJRVWNzYVVOQlFXVXNRMEZCUXl4SlFVRkpMRVZCUVVVN1dVRkRlRWNzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc0swTkJRU3RETEVOQlFVTXNRMEZCUXp0VFFVTXhSVHRSUVVWRUxFbEJRVWtzUTBGQlF5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlR0WlFVTTVReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4clEwRkJhME1zTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRek5ITzFGQlJVUXNUVUZCVFN4RlFVRkZMRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGRrUXNUVUZCVFN4RlFVRkZMRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGRrUXNUVUZCVFN4RlFVRkZMRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGRrUXNSVUZCUlN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8xRkJRMmhDTEVWQlFVVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVOb1FpeEZRVUZGTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkZhRUlzVFVGQlRTeFZRVUZWTEVkQlFVY3NSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU5xUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZGT1VRc1RVRkJUU3hOUVVGTkxFZEJRVWNzVVVGQlVTeEhRVUZITEZOQlFWTXNSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRha1FzU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRmNFTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOMFF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpkQ0xFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZGTDBJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExHVkJRV1VzUjBGQlJ5eEhRVUZITEVOQlFVTXNaVUZCWlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTjBSU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdaMEpCUTFnc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZET1VJc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzJGQlF6VkRPMWxCUlVRc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU5xUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRkwwSXNUMEZCVHl4SFFVRkhMRU5CUVVNN1NVRkRaaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVlVGQlowSXNSVUZCUlN4aFFVRnhRaXhSUVVGUk8xRkJRekZGTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVWQlFVVXNWMEZCU1N4RFFVRkRMRVZCUVVVN1dVRkRlRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTm9SVHRSUVVWRUxFbEJRVWtzUTBGQlF5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlR0WlFVTTVReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4clEwRkJhME1zTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRek5ITzFGQlJVUXNUVUZCVFN4TlFVRk5MRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRE0wUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVVnlSQ3hOUVVGTkxHZENRVUZuUWl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eDVRa0ZCZVVJc1IwRkJSeXhIUVVGSExFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1EwRkJRenRSUVVOMFJ5eE5RVUZOTEZWQlFWVXNSMEZCUnl4VlFVRlZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZGY0VRc1RVRkJUU3gzUWtGQmQwSXNSMEZCUnl4VlFVRlZMRWRCUVVjc1IwRkJSeXhEUVVGRExGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU03VVVGRk9VWXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4NVFrRkJlVUlzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTndSQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEV2l4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NkMEpCUVhkQ0xFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUXk5RExFMUJRVTBzVVVGQlVTeEhRVUZITEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExIZENRVUYzUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU55UlN4TlFVRk5MRWRCUVVjc1IwRkJSeXhoUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEdWQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0blFrRkRja1VzWjBKQlFXZENMRU5CUVVNc1EwRkJReXhIUVVGSExIZENRVUYzUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dG5Ra0ZEZWtRc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF6dGhRVU5rTzFsQlJVUXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRk8yZENRVU5XTEU5QlFVOHNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRk8yOUNRVU5rTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eDNRa0ZCZDBJc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdDNRa0ZETDBNc1NVRkJTU3huUWtGQlowSXNRMEZCUXl4RFFVRkRMRWRCUVVjc2QwSkJRWGRDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExHVkJRV1VzUlVGQlJUczBRa0ZETVVVc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4SFFVRkhMSGRDUVVGM1FpeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN05FSkJRM0pFTEUxQlFVMDdlVUpCUTFRN2NVSkJRMG83YVVKQlEwbzdZVUZEU2p0cFFrRkJUVHRuUWtGRFNDeFBRVUZQTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRFpDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzZDBKQlFYZENMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3ZDBKQlF5OURMRWxCUVVrc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4SFFVRkhMSGRDUVVGM1FpeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhsUVVGbExFVkJRVVU3TkVKQlF6RkZMR2RDUVVGblFpeERRVUZETEVOQlFVTXNSMEZCUnl4M1FrRkJkMElzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPelJDUVVOeVJDeE5RVUZOTzNsQ1FVTlVPM0ZDUVVOS08ybENRVU5LTzJGQlEwbzdVMEZEU2p0UlFVVkVMRTlCUVU4c1owSkJRV2RDTEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVWRU96czdPenM3TzA5QlQwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNaVUZCZDBJc1JVRkJSU3g1UWtGQmNVUXNSVUZCUlN4VlFVRm5RaXhGUVVGRkxHRkJRWEZDTEUxQlFVMDdVVUZETTBvc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hwUWtGQlR5eERRVUZETEVWQlFVVTdXVUZEYUVRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dFRRVU55UlR0UlFVVkVMRWxCUVVrc1EwRkJReXg1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4NVFrRkJlVUlzUlVGQlJTeHRSRUZCZDBJc1EwRkJReXhGUVVGRk8xbEJRek5GTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHbEdRVUZwUml4RFFVRkRMRU5CUVVNN1UwRkROVWM3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeEZRVUZGTEZkQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTNoRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVMEZEYUVVN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVTdXVUZET1VNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNhME5CUVd0RExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVNelJ6dFJRVVZFTEUxQlFVMHNlVUpCUVhsQ0xFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEzSkRMRTFCUVUwc2IwSkJRVzlDTEVkQlFVY3NSMEZCUnl4RFFVRkRMR2RDUVVGblFpeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUlRsRUxFMUJRVTBzVFVGQlRTeEhRVUZITERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpORUxFMUJRVTBzVlVGQlZTeEhRVUZITEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRmNrUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVONFFpeDVRa0ZCZVVJc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eHZRa0ZCYjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4NVFrRkJlVUlzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1EwRkJRenRUUVVONlNUdFJRVVZFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVVUzUlN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NlVUpCUVhsQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNaRUxFMUJRVTBzV1VGQldTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxHRkJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlJYWkpMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEycERMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5xUkR0VFFVTktPMUZCUlVRc1QwRkJUeXhsUVVGbExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1lVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRha2dzUTBGQlF6dEpRVVZFT3pzN096czdUMEZOUnp0SlFVTkpMRTFCUVUwc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4M1FrRkJiVU1zUlVGQlJTeFhRVUZ6UWl4RlFVRkZMR0ZCUVhGQ0xFMUJRVTA3VVVGRE0wZ3NTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEhkQ1FVRjNRaXhGUVVGRkxGTkJRVk1zUTBGQlF5eEZRVUZGTzFsQlF6TkVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhkRVFVRjNSQ3hEUVVGRExFTkJRVU03VTBGRGJrWTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRk5CUVZNc1EwRkJReXhGUVVGRk8xbEJRemxETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExESkRRVUV5UXl4RFFVRkRMRU5CUVVNN1UwRkRkRVU3VVVGRFJDeEpRVUZKTEVOQlFVTXNOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1dVRkRPVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2EwTkJRV3RETERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU16Unp0UlFVVkVMRTFCUVUwc2QwSkJRWGRDTEVkQlFVY3NWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRM0pFTEVsQlFVa3NTVUZCWlN4RFFVRkRPMUZCUlhCQ0xFMUJRVTBzU1VGQlNTeEhRVUZITERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUTNwRUxFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRmJrUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVONlFpeEpRVUZKTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkZOVVVzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRka1FzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMmRDUVVOc1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRMklzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzJkQ1FVTnFReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03WVVGRGNrTTdXVUZGUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU5xUXl4M1FrRkJkMElzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTXhSRHRUUVVOS08xRkJSVVFzVDBGQlR5eDNRa0ZCZDBJc1EwRkJRenRKUVVOd1F5eERRVUZET3p0QlFXcGpSQ3hsUVVGbE8wRkJRMU1zTmtKQlFYbENMRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJReTlFTEdWQlFXVTdRVUZEVXl3MlFrRkJlVUlzUjBGQlZ5eERRVUZETEVOQlFVTTdRVUZET1VRc1pVRkJaVHRCUVVOVExHVkJRVmNzUjBGQlZ5eERRVUZETEVOQlFVTTdRVUZEYUVRc1pVRkJaVHRCUVVOVExHMUNRVUZsTEVkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNN1FVRkRkRVFzWlVGQlpUdEJRVU5UTEcxQ1FVRmxMRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRM0pFTEdWQlFXVTdRVUZEVXl4clFrRkJZeXhIUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzQkVMR1ZCUVdVN1FVRkRVeXhyUWtGQll5eEhRVUZYTEVOQlFVTXNRMEZCUXp0QlFVTnVSQ3hsUVVGbE8wRkJRMU1zVTBGQlN5eEhRVUZYTEVOQlFVTXNRMEZCUXp0QlFXaENPVU1zYTBKQmJXTkRJbjA9IiwidmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTppbXBvcnQtbmFtZVxyXG5jb25zdCBiaWdfaW50ZWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJiaWctaW50ZWdlclwiKSk7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgdG8gY29udmVydCBiZXR3ZWVuIEJpZ0ludGVnZXIgYW5kIG90aGVyIHR5cGVzLlxyXG4gKiBDb252ZXJ0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pcmkvYmxvYi9kZXYvc3JjL21haW4vamF2YS9jb20vaW90YS9pcmkvaGFzaC9LZXJsLmphdmFcclxuICovXHJcbmNsYXNzIEJpZ0ludGVnZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRyaXRzIHRvIGEgYmlnSW50ZWdlci5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gY29udmVydC5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgT2Zmc2V0IHdpdGhpbiB0aGUgYXJyYXkgdG8gc3RhcnQuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHRyaXRzIGFycmF5IHRvIGNvbnZlcnQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0cml0c1RvQmlnSW50ZWdlcih0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9mZnNldCArIGxlbmd0aCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmFsdWUgPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQuemVybztcclxuICAgICAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5tdWx0aXBseShCaWdJbnRlZ2VySGVscGVyLlJBRElYKS5hZGQoYmlnX2ludGVnZXJfMS5kZWZhdWx0KHRyaXRzW29mZnNldCArIGldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBiaWdJbnRlZ2VyIHRvIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBiaWdJbnRlZ2VyIHRvIGNvbnZlcnQgdG8gdHJpdHMuXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIGFycmF5IHRvIHJlY2VpdmUgdGhlIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IHRvIHBsYWNlIHRoZSB0cml0cyBpbiB0aGUgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYmlnSW50ZWdlclRvVHJpdHModmFsdWUsIHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgYmlnX2ludGVnZXJfMS5kZWZhdWx0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgYmlnSW50ZWdlciB0eXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJpdHMgbXVzdCBiZSBhbiBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2Zmc2V0ICsgbGVuZ3RoID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhYnNvbHV0ZVZhbHVlID0gdmFsdWUuY29tcGFyZVRvKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdC56ZXJvKSA8IDAgPyB2YWx1ZS5uZWdhdGUoKSA6IHZhbHVlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGl2UmVtYWluZGVyID0gYWJzb2x1dGVWYWx1ZS5kaXZtb2QoQmlnSW50ZWdlckhlbHBlci5SQURJWCk7XHJcbiAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBkaXZSZW1haW5kZXIucXVvdGllbnQ7XHJcbiAgICAgICAgICAgIGxldCByZW1haW5kZXIgPSBkaXZSZW1haW5kZXIucmVtYWluZGVyO1xyXG4gICAgICAgICAgICBpZiAocmVtYWluZGVyID4gQmlnSW50ZWdlckhlbHBlci5NQVhfVFJJVF9WQUxVRSkge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gQmlnSW50ZWdlckhlbHBlci5NSU5fVFJJVF9WQUxVRTtcclxuICAgICAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBhYnNvbHV0ZVZhbHVlLmFkZChiaWdfaW50ZWdlcl8xLmRlZmF1bHRbXCIxXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cml0c1tvZmZzZXQgKyBpXSA9IHJlbWFpbmRlci50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5jb21wYXJlVG8oYmlnX2ludGVnZXJfMS5kZWZhdWx0Lnplcm8pIDwgMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBdm9pZCBuZWdhdGl2ZSB6ZXJvXHJcbiAgICAgICAgICAgICAgICB0cml0c1tvZmZzZXQgKyBpXSA9IHRyaXRzW29mZnNldCArIGldID09PSAwID8gMCA6IC10cml0c1tvZmZzZXQgKyBpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgYmlnSW50ZWdlciBpbnRvIGJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxyXG4gICAgICogQHBhcmFtIGRlc3RpbmF0aW9uIFRoZSBkZXN0aW5hdGlvbiBhcnJheSB0byBzdG9yZSB0aGUgYnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgd2l0aGluIHRoZSBhcnJheSB0byBzdG9yZSB0aGUgYnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBiaWdJbnRlZ2VyVG9CeXRlcyh2YWx1ZSwgZGVzdGluYXRpb24sIG9mZnNldCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgYmlnX2ludGVnZXJfMS5kZWZhdWx0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgYmlnSW50ZWdlciB0eXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoZGVzdGluYXRpb24sIEFycmF5QnVmZmVyKSB8fCBkZXN0aW5hdGlvbi5ieXRlTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGRlc3RpbmF0aW9uIG11c3QgYmUgYW4gYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLmJ5dGVMZW5ndGggLSBvZmZzZXQgPCBCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYERlc3RpbmF0aW9uIGFycmF5IGhhcyBpbnZhbGlkIHNpemUsIGl0IG11c3QgYmUgYXQgbGVhc3QgJHtCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbWVtYmVyIGlmIGl0IGlzIG5lZ2F0aXZlIGZvciBsYXRlclxyXG4gICAgICAgIGNvbnN0IGlzTmVnID0gdmFsdWUuaXNOZWdhdGl2ZSgpID8gLTEgOiAwO1xyXG4gICAgICAgIGxldCBoZXhTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygxNik7XHJcbiAgICAgICAgaWYgKGlzTmVnID09PSAtMSkge1xyXG4gICAgICAgICAgICAvLyBCdXQgcmVtb3ZlIGl0IGZvciBub3dcclxuICAgICAgICAgICAgaGV4U3RyaW5nID0gaGV4U3RyaW5nLnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBOb3cgbWFrZSBzdXJlIHRoZSBoZXggc3RyaW5nIGlzIGFuIGV2ZW4gbGVuZ3RoIHNvIHRoZSByZWdleCB3b3Jrc1xyXG4gICAgICAgIGlmIChoZXhTdHJpbmcubGVuZ3RoICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICBoZXhTdHJpbmcgPSBgMCR7aGV4U3RyaW5nfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBoZXhTdHJpbmcubWF0Y2goL1swLTlhLWZdezJ9L2cpO1xyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGhleCB0byBudW1iZXJzXHJcbiAgICAgICAgY29uc3Qgc2lnbmVkQnl0ZXMgPSBuZXcgSW50OEFycmF5KG1hdGNoZXNcclxuICAgICAgICAgICAgLm1hcChoZXggPT4gcGFyc2VJbnQoYDB4JHtoZXh9YCwgMTYpKSk7XHJcbiAgICAgICAgaWYgKGlzTmVnID09PSAtMSkge1xyXG4gICAgICAgICAgICBCaWdJbnRlZ2VySGVscGVyLnR3b3NDb21wbGVtZW50KHNpZ25lZEJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZGVzdGluYXRpb24pO1xyXG4gICAgICAgIC8vIFBhZCB0aGUgc3RhcnQgb2YgdGhlIGJ1ZmZlciB3aXRoIHRoZSBuZWcgdmFsdWVcclxuICAgICAgICBsZXQgaSA9IG9mZnNldDtcclxuICAgICAgICB3aGlsZSAoaSArIHNpZ25lZEJ5dGVzLmxlbmd0aCA8IEJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICBkYXRhVmlldy5zZXRJbnQ4KGkrKywgaXNOZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBbmQgY29weSBpbiB0aGUgYWN0dWFsIGJ5dGVzXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHNpZ25lZEJ5dGVzLmxlbmd0aDsgai0tID4gMDspIHtcclxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0SW50OChpKyssIHNpZ25lZEJ5dGVzW3NpZ25lZEJ5dGVzLmxlbmd0aCAtIDEgLSBqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGJ5dGVzIHRvIGEgYmlnSW50ZWdlci5cclxuICAgICAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBieXRlcy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCB3aXRoaW4gdGhlIGJ5dGVzIHRvIHN0YXJ0IGNvbnZlcnNpb24uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGJ5dGVzIHRvIHVzZSBmb3IgY29udmVyc2lvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJ5dGVzVG9CaWdJbnRlZ2VyKHNvdXJjZSwgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc291cmNlLCBBcnJheUJ1ZmZlcikgfHwgc291cmNlLmJ5dGVMZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc291cmNlIG11c3QgYmUgYSBub24gZW1wdHkgbnVtYmVyIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNvdXJjZS5ieXRlTGVuZ3RoIC0gb2Zmc2V0IDwgQmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBTb3VyY2UgYXJyYXkgaGFzIGludmFsaWQgc2l6ZSwgaXQgbXVzdCBiZSBhdCBsZWFzdCAke0JpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoc291cmNlKTtcclxuICAgICAgICBsZXQgc2lnbmVkQnl0ZXMgPSBuZXcgSW50OEFycmF5KGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgZGF0YVZpZXcuYnl0ZUxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzW2JdID0gZGF0YVZpZXcuZ2V0SW50OChiICsgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBpbml0aWFsIHBhZGRpbmcgbGVhdmluZyBhdCBsZWFzdCBvbmUgYnl0ZVxyXG4gICAgICAgIGxldCBwYWRkaW5nT2Zmc2V0ID0gMDtcclxuICAgICAgICBjb25zdCBmaXJzdEJ5dGUgPSBzaWduZWRCeXRlc1swXTtcclxuICAgICAgICBjb25zdCBpc05lZyA9IGZpcnN0Qnl0ZSA8IDA7XHJcbiAgICAgICAgLy8gSWYgdGhlIGZpcnN0IHBhZGRpbmcgY2hhcmFjdGVyIGlzIG5lZ2F0aXZlIHRoZW4gcmV2ZXJzZSB0aGUgMnMgY29tcGxlbWVudFxyXG4gICAgICAgIC8vIGJ1dCBmaXJzdCBzdHJpcCBvZiB0aGUgbGVhZGluZyBwYWRkaW5nXHJcbiAgICAgICAgaWYgKGZpcnN0Qnl0ZSA9PT0gMCB8fCBmaXJzdEJ5dGUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChzaWduZWRCeXRlc1twYWRkaW5nT2Zmc2V0XSA9PT0gZmlyc3RCeXRlICYmIHBhZGRpbmdPZmZzZXQgPCBzaWduZWRCeXRlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nT2Zmc2V0Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU3RyaXAgYW55IHBhZGRpbmdcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXMgPSBzaWduZWRCeXRlcy5zbGljZShwYWRkaW5nT2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTmVnKSB7XHJcbiAgICAgICAgICAgIEJpZ0ludGVnZXJIZWxwZXIudHdvc0NvbXBsZW1lbnQoc2lnbmVkQnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGV4U3RyaW5nID0gaXNOZWcgPyBcIi1cIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoc2lnbmVkQnl0ZXMuYnVmZmVyKTtcclxuICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IGR2LmJ5dGVMZW5ndGg7IGgrKykge1xyXG4gICAgICAgICAgICBoZXhTdHJpbmcgKz0gYDAwJHtkdi5nZXRVaW50OChoKS50b1N0cmluZygxNil9YC5zbGljZSgtMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoaGV4U3RyaW5nLCAxNik7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyB0d29zQ29tcGxlbWVudChzaWduZWRCeXRlcykge1xyXG4gICAgICAgIC8vIGlmIHRoZSB3aG9sZSBudW1iZXIgaXMgbmVnYXRpdmUgdGhlblxyXG4gICAgICAgIC8vIGNoYW5nZSB0byAyJ3MgY29tcGxlbWVudHMgYnkgbm90aW5nIGFsbCB0aGUgbnVtYmVyc1xyXG4gICAgICAgIC8vIGFuZCBhZGRpbmcgMSB0byB0aGUgbGFzdCBpLmUuIH5iaWdudW0rMVxyXG4gICAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgc2lnbmVkQnl0ZXMubGVuZ3RoOyBiKyspIHtcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXNbYl0gPSB+c2lnbmVkQnl0ZXNbYl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCAxIHRvIGxhc3QgbnVtYmVyLCBpZiB0aGUgbnVtYmVyIGlzIDB4RkYgY29udGludWUgdG8gY2FycnlcclxuICAgICAgICBsZXQgYyA9IHNpZ25lZEJ5dGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlc1tjXSsrO1xyXG4gICAgICAgIH0gd2hpbGUgKHNpZ25lZEJ5dGVzW2MtLV0gPT09IDAgJiYgYyA+IDApO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLlJBRElYID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KDMpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5NQVhfVFJJVF9WQUxVRSA9IEJpZ0ludGVnZXJIZWxwZXIuUkFESVgubWludXMoMSkuZGl2aWRlKDIpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5NSU5fVFJJVF9WQUxVRSA9IEJpZ0ludGVnZXJIZWxwZXIuTUFYX1RSSVRfVkFMVUUubmVnYXRlKCk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLkJJVF9IQVNIX0xFTkdUSCA9IDM4NDtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCA9IEJpZ0ludGVnZXJIZWxwZXIuQklUX0hBU0hfTEVOR1RIIC8gODtcclxuZXhwb3J0cy5CaWdJbnRlZ2VySGVscGVyID0gQmlnSW50ZWdlckhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW1sblNXNTBaV2RsY2tobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwySnBaMGx1ZEdWblpYSklaV3h3WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZEZWtVc2RVTkJRWFZETzBGQlEzWkRMRGhFUVVGcFF6dEJRVU5xUXl4elJFRkJiVVE3UVVGRmJrUTdPenRIUVVkSE8wRkJRMGc3U1VGaFNUczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eExRVUZuUWl4RlFVRkZMRTFCUVdNc1JVRkJSU3hOUVVGak8xRkJRelZGTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZET1VRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNlVU5CUVhsRExFTkJRVU1zUTBGQlF6dFRRVU53UlR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VTBGRE4wUTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU5vUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlJVUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVVJCUVhWRUxFTkJRVU1zUTBGQlF6dFRRVU5zUmp0UlFVVkVMRWxCUVVrc1MwRkJTeXhIUVVGSExIRkNRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUlhoQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTJ4RExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXh4UWtGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEycEdPMUZCUlVRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFVVkVPenM3T3pzN1QwRk5SenRKUVVOSkxFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhMUVVGM1FpeEZRVUZGTEV0QlFXZENMRVZCUVVVc1RVRkJZeXhGUVVGRkxFMUJRV003VVVGRGRFY3NTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4eFFrRkJUU3hEUVVGRExFVkJRVVU3V1VGRGNrTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOb1JUdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRVZCUVVVN1dVRkRlRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1owTkJRV2RETEVOQlFVTXNRMEZCUXp0VFFVTXpSRHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5eERRVUZETEVOQlFVTTdVMEZETjBRN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4cFEwRkJhVU1zUTBGQlF5eERRVUZETzFOQlF6VkVPMUZCUlVRc1NVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVUkJRWFZFTEVOQlFVTXNRMEZCUXp0VFFVTnNSanRSUVVWRUxFbEJRVWtzWVVGQllTeEhRVUZITEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc2NVSkJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJSVGxGTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkROMElzVFVGQlRTeFpRVUZaTEVkQlFVY3NZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOc1JTeGhRVUZoTEVkQlFVY3NXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJRenRaUVVOMFF5eEpRVUZKTEZOQlFWTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRE8xbEJSWFpETEVsQlFVa3NVMEZCVXl4SFFVRkhMR2RDUVVGblFpeERRVUZETEdOQlFXTXNSVUZCUlR0blFrRkROME1zVTBGQlV5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRExHTkJRV01zUTBGQlF6dG5Ra0ZETlVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNjVUpCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyeEVPMWxCUTBRc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03VTBGRE9VTTdVVUZGUkN4SlFVRkpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zY1VKQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGJFTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRE4wSXNjMEpCUVhOQ08yZENRVU4wUWl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVONFJUdFRRVU5LTzBsQlEwd3NRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRXRCUVhkQ0xFVkJRVVVzVjBGQmQwSXNSVUZCUlN4TlFVRmpPMUZCUXpsR0xFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzY1VKQlFVMHNRMEZCUXl4RlFVRkZPMWxCUTNKRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVMEZEYUVVN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxGZEJRVmNzUTBGQlF5eEpRVUZKTEZkQlFWY3NRMEZCUXl4VlFVRlZMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRMmhHTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl4RFFVRkRMRU5CUVVNN1UwRkROMFE3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhyUTBGQmEwTXNRMEZCUXl4RFFVRkRPMU5CUXpkRU8xRkJSVVFzU1VGQlNTeFhRVUZYTEVOQlFVTXNWVUZCVlN4SFFVRkhMRTFCUVUwc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4blFrRkJaMElzUlVGQlJUdFpRVU55UlN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5d3lSRUZCTWtRc1owSkJRV2RDTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzcElPMUZCUlVRc2RVTkJRWFZETzFGQlEzWkRMRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVXhReXhKUVVGSkxGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJSVzVETEVsQlFVa3NTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8xbEJRMlFzZDBKQlFYZENPMWxCUTNoQ0xGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnhETzFGQlEwUXNiMFZCUVc5Rk8xRkJRM0JGTEVsQlFVa3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6VkNMRk5CUVZNc1IwRkJSeXhKUVVGSkxGTkJRVk1zUlVGQlJTeERRVUZETzFOQlF5OUNPMUZCUTBRc1RVRkJUU3hQUVVGUExFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVWb1JDdzJRa0ZCTmtJN1VVRkROMElzVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1QwRkJUenRoUVVOd1F5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRk0wTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVU3V1VGRFpDeG5Ra0ZCWjBJc1EwRkJReXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZEYUVRN1VVRkZSQ3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVVelF5eHBSRUZCYVVRN1VVRkRha1FzU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTJZc1QwRkJUeXhEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4blFrRkJaMElzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSVHRaUVVNdlJDeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFOQlEyaERPMUZCUTBRc0swSkJRU3RDTzFGQlF5OUNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWM3V1VGRGRrTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeFhRVUZYTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnNSVHRKUVVOTUxFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eE5RVUZ0UWl4RlFVRkZMRTFCUVdNc1JVRkJSU3hOUVVGak8xRkJReTlGTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNWMEZCVnl4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGVkJRVlVzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEZEVVc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNOa05CUVRaRExFTkJRVU1zUTBGQlF6dFRRVU40UlR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VTBGRE4wUTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU5vUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlJVUXNTVUZCU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hIUVVGSExFMUJRVTBzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhuUWtGQlowSXNSVUZCUlR0WlFVTm9SU3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4elJFRkJjMFFzWjBKQlFXZENMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNCSU8xRkJSVVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRmRFTXNTVUZCU1N4WFFVRlhMRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUTNKRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0VFFVTnFSRHRSUVVWRUxIVkVRVUYxUkR0UlFVTjJSQ3hKUVVGSkxHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZEVJc1RVRkJUU3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwRExFMUJRVTBzUzBGQlN5eEhRVUZITEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZOVUlzTkVWQlFUUkZPMUZCUXpWRkxIbERRVUY1UXp0UlFVTjZReXhKUVVGSkxGTkJRVk1zUzBGQlN5eERRVUZETEVsQlFVa3NVMEZCVXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8xbEJRM0pETEU5QlFVOHNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGTExGTkJRVk1zU1VGQlNTeGhRVUZoTEVkQlFVY3NWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlEzWkdMR0ZCUVdFc1JVRkJSU3hEUVVGRE8yRkJRMjVDTzFsQlEwUXNiMEpCUVc5Q08xbEJRM0JDTEZkQlFWY3NSMEZCUnl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFOQlEyeEVPMUZCUlVRc1NVRkJTU3hMUVVGTExFVkJRVVU3V1VGRFVDeG5Ra0ZCWjBJc1EwRkJReXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZEYUVRN1VVRkZSQ3hKUVVGSkxGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEycERMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNMVF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOd1F5eFRRVUZUTEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpkRU8xRkJSVVFzVDBGQlR5eHhRa0ZCVFN4RFFVRkRMRk5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNWMEZCYzBJN1VVRkRhRVFzZFVOQlFYVkRPMUZCUTNaRExITkVRVUZ6UkR0UlFVTjBSQ3d3UTBGQk1FTTdVVUZETVVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZWtNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM0JETzFGQlEwUXNaMFZCUVdkRk8xRkJRMmhGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF5OUNMRWRCUVVjN1dVRkRReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0VFFVTndRaXhSUVVGUkxGZEJRVmNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBsQlF6bERMRU5CUVVNN08wRkJhRTlFTEdWQlFXVTdRVUZEVXl4elFrRkJTeXhIUVVGelFpeHhRa0ZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRemRFTEdWQlFXVTdRVUZEVXl3clFrRkJZeXhIUVVGelFpeG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4wUnl4bFFVRmxPMEZCUTFNc0swSkJRV01zUjBGQmMwSXNaMEpCUVdkQ0xFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMEZCUlhKSExHVkJRV1U3UVVGRFV5eG5RMEZCWlN4SFFVRlhMRWRCUVVjc1EwRkJRenRCUVVOMFJDeGxRVUZsTzBGQlExTXNhVU5CUVdkQ0xFZEJRVmNzWjBKQlFXZENMRU5CUVVNc1pVRkJaU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVmcxUml3MFEwRnJUME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2FjdGlvblwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBzcG9uZ2VGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgZm9yIHRyYW5zYWN0aW9ucy5cclxuICogQ29udmVydGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lvdGEubGliLmpzL2Jsb2IvbWFzdGVyL2xpYi9jcnlwdG8vc2lnbmluZy9zaWduaW5nLmpzXHJcbiAqL1xyXG5jbGFzcyBUcmFuc2FjdGlvbkhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0aGUgaGFzaCBmb3IgYSB0cmFuc2FjdGlvbi5cclxuICAgICAqIEBwYXJhbSB0cmFuc2FjdGlvbiBUaGUgdHJhbnNhY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGhhc2guXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgaGFzaCBvZiB0aHIgdHJhbnNhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBoYXNoKHRyYW5zYWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyYW5zYWN0aW9uLCB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cmFuc2FjdGlvbiBtdXN0IGJlIG9mIHR5cGUgVHJhbnNhY3Rpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN1cmwgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShcImN1cmxcIik7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ucml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyh0cmFuc2FjdGlvbi50b1RyeXRlcygpKS50b0FycmF5KCk7XHJcbiAgICAgICAgY3VybC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY3VybC5hYnNvcmIodHJhbnNhY3Rpb25Ucml0cywgMCwgdHJhbnNhY3Rpb25Ucml0cy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hUcml0cyA9IG5ldyBJbnQ4QXJyYXkoY3VybC5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpKTtcclxuICAgICAgICBjdXJsLnNxdWVlemUoaGFzaFRyaXRzLCAwLCBoYXNoVHJpdHMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cml0c18xLlRyaXRzLmZyb21BcnJheShoYXNoVHJpdHMpLnRvVHJ5dGVzKCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVHJhbnNhY3Rpb25IZWxwZXIgPSBUcmFuc2FjdGlvbkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKaGJuTmhZM1JwYjI1SVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OTBjbUZ1YzJGamRHbHZia2hsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMSGxFUVVGelJEdEJRVU4wUkN4MVJVRkJiMFU3UVVGRGNFVXNNa1JCUVhkRU8wRkJRM2hFTEhORVFVRnRSRHRCUVVOdVJDdzRSRUZCTWtRN1FVRkZNMFE3T3p0SFFVZEhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUYzUWp0UlFVTjJReXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxIbENRVUZYTEVOQlFVTXNSVUZCUlR0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3MlEwRkJOa01zUTBGQlF5eERRVUZETzFOQlEzaEZPMUZCUlVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEY2tRc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4aFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJSVFZGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVOc1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVXhSQ3hOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RlFVRkZMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVVUzUXl4UFFVRlBMRmRCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zWVVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEyeEZMRU5CUVVNN1EwRkRTanRCUVhSQ1JDdzRRMEZ6UWtNaWZRPT0iLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxuX19leHBvcnQocmVxdWlyZShcIi4vZGlnZXN0cy9zaGEzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZXJyb3IvY3J5cHRvRXJyb3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mYWN0b3JpZXMvcHJvb2ZPZldvcmtGYWN0b3J5XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oYXNoL2lzc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvYmlnSW50ZWdlckhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcG9uZ2VzL2N1cmxcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcG9uZ2VzL2tlcmxcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NiME5CUVN0Q08wRkJReTlDTEhsRFFVRnZRenRCUVVOd1F5eHZSRUZCSzBNN1FVRkRMME1zSzBOQlFUQkRPMEZCUXpGRExHZERRVUV5UWp0QlFVTXpRaXhuUkVGQk1rTTdRVUZETTBNc2FVUkJRVFJETzBGQlJ6VkRMRzFFUVVFNFF6dEJRVU01UXl4dlEwRkJLMEk3UVVGREwwSXNiME5CUVN0Q0luMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCB0aW1lU2VydmljZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L3NlcnZpY2VzL3RpbWVTZXJ2aWNlXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RhZ1wiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25fMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zYWN0aW9uXCIpO1xyXG5jb25zdCB0cnl0ZU51bWJlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVOdW1iZXJcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBwcm9vZiBvZiB3b3JrLlxyXG4gKi9cclxuY2xhc3MgUHJvb2ZPZldvcmtCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIFByb29mT2ZXb3JrLlxyXG4gICAgICogQHBhcmFtIHRpbWVTZXJ2aWNlIFNlcnZpY2UgdG8gZ2V0IHRoZSB0aW1lIGZvciBhdHRhY2htZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGltZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl90aW1lU2VydmljZSA9IHRpbWVTZXJ2aWNlIHx8IG5ldyB0aW1lU2VydmljZV8xLlRpbWVTZXJ2aWNlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHRoZSBwcm9vZiBvZiB3b3JrIHRvIHBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uLlxyXG4gICAgICogV2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIGltcGxlbWVudGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgcHJvb2Ygb2Ygd29yayBvbiB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSB0cnVua1RyYW5zYWN0aW9uIFRoZSB0cnVua1RyYW5zYWN0aW9uIHRvIHVzZSBmb3IgdGhlIHBvdy5cclxuICAgICAqIEBwYXJhbSBicmFuY2hUcmFuc2FjdGlvbiBUaGUgYnJhbmNoVHJhbnNhY3Rpb24gdG8gdXNlIGZvciB0aGUgcG93LlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIHBlcmZvcm0gdGhlIHBvdyBvbi5cclxuICAgICAqIEBwYXJhbSBtaW5XZWlnaHRNYWduaXR1ZGUgVGhlIG1pbmltdW0gd2VpZ2h0IG1hZ25pdHVkZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgcHJvZHVjZWQgYnkgdGhlIHByb29mIG9mIHdvcmsuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHBvdyh0cnVua1RyYW5zYWN0aW9uLCBicmFuY2hUcmFuc2FjdGlvbiwgdHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJ1bmtUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRydW5rVHJhbnNhY3Rpb24gbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYnJhbmNoVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBicmFuY2hUcmFuc2FjdGlvbiBtdXN0IGJlIGFuIG9iamVjdCBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnl0ZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB0eXBlIFRyeXRlc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG1pbldlaWdodE1hZ25pdHVkZSkgfHwgbWluV2VpZ2h0TWFnbml0dWRlIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbWluV2VpZ2h0TWFnbml0dWRlIG11c3QgYmUgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmaW5hbFRyeXRlcyA9IFtdO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1RyYW5zYWN0aW9uSGFzaDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyeXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24uZnJvbVRyeXRlcyh0cnl0ZXNbaV0pO1xyXG4gICAgICAgICAgICAvLyBTdGFydCB3aXRoIGxhc3QgaW5kZXggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgLy8gQXNzaWduIGl0IHRoZSB0cnVuayAvIGJyYW5jaCB3aGljaCB0aGUgdXNlciBoYXMgc3VwcGxpZWRcclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBidW5kbGUsIGNoYWluIHRoZSBidW5kbGUgdHJhbnNhY3Rpb25zIHZpYVxyXG4gICAgICAgICAgICAvLyB0cnVua1RyYW5zYWN0aW9uIHRvZ2V0aGVyXHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmF0dGFjaG1lbnRUaW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodGhpcy5fdGltZVNlcnZpY2UubXNTaW5jZUVwb2NoKCkpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcigwKTtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoUHJvb2ZPZldvcmtCYXNlLk1BWF9USU1FU1RBTVBfVkFMVUUpO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCB0cmFuc2FjdGlvbiwgdG8gYmUgcHJvY2Vzc2VkXHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGl0J3MgdGhlIGxhc3QgaW4gdGhlIGJ1bmRsZSBhbmQgdGhlblxyXG4gICAgICAgICAgICAvLyBhc3NpZ24gaXQgdGhlIHN1cHBsaWVkIHRydW5rIGFuZCBicmFuY2ggdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShwcmV2aW91c1RyYW5zYWN0aW9uSGFzaCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGxhc3QgdHJhbnNhY3Rpb24gaW4gdGhlIGJ1bmRsZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmxhc3RJbmRleC50b051bWJlcigpICE9PSB0cmFuc2FjdGlvbi5jdXJyZW50SW5kZXgudG9OdW1iZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiV3JvbmcgYnVuZGxlIG9yZGVyLiBUaGUgYnVuZGxlIHNob3VsZCBiZSBvcmRlcmVkIGluIGRlc2NlbmRpbmcgb3JkZXIgZnJvbSBjdXJyZW50SW5kZXhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi50cnVua1RyYW5zYWN0aW9uID0gdHJ1bmtUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmJyYW5jaFRyYW5zYWN0aW9uID0gYnJhbmNoVHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi50cnVua1RyYW5zYWN0aW9uID0gcHJldmlvdXNUcmFuc2FjdGlvbkhhc2g7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5icmFuY2hUcmFuc2FjdGlvbiA9IHRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmV3VHJ5dGVzID0gdHJhbnNhY3Rpb24udG9Ucnl0ZXMoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2luZ2xlVHJ5dGVzID0gYXdhaXQgdGhpcy5zaW5nbGVQb3cobmV3VHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5ub25jZSA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHNpbmdsZVRyeXRlcy5zdWIodHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5MRU5HVEggLSB0YWdfMS5UYWcuTEVOR1RILCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaGFzaCBvZiB0aGUgbmV3IHRyYW5zYWN0aW9uIHdpdGggbm9uY2UgYW5kIHVzZSB0aGF0IGFzIHRoZSBwcmV2aW91cyBoYXNoIGZvciBuZXh0IGVudHJ5XHJcbiAgICAgICAgICAgIGNvbnN0IHJldHVyblRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5mcm9tVHJ5dGVzKHNpbmdsZVRyeXRlcyk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoID0gdHJhbnNhY3Rpb25IZWxwZXJfMS5UcmFuc2FjdGlvbkhlbHBlci5oYXNoKHJldHVyblRyYW5zYWN0aW9uKTtcclxuICAgICAgICAgICAgZmluYWxUcnl0ZXMucHVzaChyZXR1cm5UcmFuc2FjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldmVyc2UgdGhlIG9yZGVyIHNvIHRoYXQgaXQncyBhc2NlbmRpbmcgZnJvbSBjdXJyZW50SW5kZXhcclxuICAgICAgICByZXR1cm4gZmluYWxUcnl0ZXMucmV2ZXJzZSgpLm1hcCh0cmFuc2FjdGlvbiA9PiB0cmFuc2FjdGlvbi50b1RyeXRlcygpKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIG1heGltdW0gdGltZXN0YW1wIHZhbHVlIHVzZWQgaW4gcHJvb2Ygb2Ygd29yay5cclxuICovXHJcblByb29mT2ZXb3JrQmFzZS5NQVhfVElNRVNUQU1QX1ZBTFVFID0gKE1hdGgucG93KDMsIDI3KSAtIDEpIC8gMjtcclxuZXhwb3J0cy5Qcm9vZk9mV29ya0Jhc2UgPSBQcm9vZk9mV29ya0Jhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZiMlpQWmxkdmNtdENZWE5sTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM0J5YjI5bVQyWlhiM0pyTDNCeWIyOW1UMlpYYjNKclFtRnpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNNRVZCUVhWRk8wRkJRM1pGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkZla1VzTWtWQlFYZEZPMEZCUTNoRkxIbEVRVUZ6UkR0QlFVTjBSQ3gxUkVGQmIwUTdRVUZEY0VRc2RVVkJRVzlGTzBGQlEzQkZMSFZGUVVGdlJUdEJRVU53UlN3MlJFRkJNRVE3UVVGRE1VUXNjMFJCUVcxRU8wRkJRMjVFTEc5RlFVRnBSVHRCUVVkcVJUczdSMEZGUnp0QlFVTklPMGxCVTBrN096dFBRVWRITzBsQlEwZ3NXVUZCV1N4WFFVRXdRanRSUVVOc1F5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRmRCUVZjc1NVRkJTU3hKUVVGSkxIbENRVUZYTEVWQlFVVXNRMEZCUXp0SlFVTjZSQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1MwRkJTeXhEUVVGRExGVkJRVlU3VVVGRGJrSXNUMEZCVHl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03U1VGRE4wSXNRMEZCUXp0SlFVVkVPenM3T3pzN08wOUJUMGM3U1VGRFNTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMR2RDUVVGelFpeEZRVUZGTEdsQ1FVRjFRaXhGUVVGRkxFMUJRV2RDTEVWQlFVVXNhMEpCUVRCQ08xRkJRekZITEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hYUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU01UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHhSRUZCY1VRc1EwRkJReXhEUVVGRE8xTkJRMmhHTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxGZEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhORVFVRnpSQ3hEUVVGRExFTkJRVU03VTBGRGFrWTdVVUZEUkN4SlFVRkpMRU5CUVVNc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMR1ZCUVUwc1EwRkJReXhGUVVGRk8xbEJRM1JETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEUkRRVUUwUXl4RFFVRkRMRU5CUVVNN1UwRkRka1U3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1NVRkJTU3hyUWtGQmEwSXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRlRVVzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2IwTkJRVzlETEVOQlFVTXNRMEZCUXp0VFFVTXZSRHRSUVVWRUxFMUJRVTBzVjBGQlZ5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVjJRaXhKUVVGSkxIVkNRVUUyUWl4RFFVRkRPMUZCUld4RExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNCRExFMUJRVTBzVjBGQlZ5eEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlhSRUxHOURRVUZ2UXp0WlFVTndReXd5UkVGQk1rUTdXVUZETTBRc01FUkJRVEJFTzFsQlF6RkVMRFJDUVVFMFFqdFpRVU0xUWl4WFFVRlhMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRek5HTEZkQlFWY3NRMEZCUXl3MlFrRkJOa0lzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUlN4WFFVRlhMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zWlVGQlpTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03V1VGRmVFY3NiMFJCUVc5RU8xbEJRM0JFTEhORVFVRnpSRHRaUVVOMFJDeDFSRUZCZFVRN1dVRkZka1FzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4RlFVRkZPMmRDUVVNdlF5d3dRMEZCTUVNN1owSkJRekZETEVsQlFVa3NWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFVkJRVVVzUzBGQlN5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRk8yOUNRVU14UlN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDNSa0ZCZDBZc1EwRkJReXhEUVVGRE8ybENRVU51U0R0blFrRkRSQ3hYUVVGWExFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdaMEpCUTJoRUxGZEJRVmNzUTBGQlF5eHBRa0ZCYVVJc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0aFFVTnlSRHRwUWtGQlRUdG5Ra0ZEU0N4WFFVRlhMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NkVUpCUVhWQ0xFTkJRVU03WjBKQlEzWkVMRmRCUVZjc1EwRkJReXhwUWtGQmFVSXNSMEZCUnl4blFrRkJaMElzUTBGQlF6dGhRVU53UkR0WlFVVkVMRTFCUVUwc1UwRkJVeXhIUVVGSExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0WlFVVjZReXhOUVVGTkxGbEJRVmtzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1UwRkJVeXhGUVVGRkxHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1dVRkZla1VzVjBGQlZ5eERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNlVUpCUVZjc1EwRkJReXhOUVVGTkxFZEJRVWNzVTBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVVZzUnl4M1IwRkJkMGM3V1VGRGVFY3NUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFpRVU12UkN4MVFrRkJkVUlzUjBGQlJ5eHhRMEZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJRenRaUVVWd1JTeFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdVMEZEZGtNN1VVRkRSQ3cyUkVGQk5rUTdVVUZETjBRc1QwRkJUeXhYUVVGWExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkROVVVzUTBGQlF6czdRVUV6UmtRN08wZEJSVWM3UVVGRGIwSXNiVU5CUVcxQ0xFZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRktia1lzTUVOQmNVZERJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBJU3BvbmdlIHVzaW5nIEN1cmwgYWxnb3JpdGhtLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pb3RhLmxpYi5qcy9ibG9iL21hc3Rlci9saWIvY3J5cHRvL2N1cmwvY3VybC5qc1xyXG4gKi9cclxuY2xhc3MgQ3VybCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBDdXJsLlxyXG4gICAgICogQHBhcmFtIHJvdW5kcyBUaGUgbnVtYmVyIG9mIHJvdW5kcyB0byB1c2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHJvdW5kcyA9IEN1cmwuTlVNQkVSX09GX1JPVU5EUykge1xyXG4gICAgICAgIHRoaXMuX251bWJlck9mUm91bmRzID0gcm91bmRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNvbnN0YW50IGZvciB0aGUgc3BvbmUuXHJcbiAgICAgKiBAbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29udGFudCB0byBnZXQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29uc3RhbnQuXHJcbiAgICAgKi9cclxuICAgIGdldENvbnN0YW50KG5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9ST1VORFNcIjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlck9mUm91bmRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJIQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiU1RBVEVfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cmxbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBVbmtub3duIGNvbnN0YW50IHJlcXVlc3RlZCAke25hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0YXRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpc2UgdGhlIGhhc2hlci5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSBmb3IgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZShzdGF0ZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXcgSW50OEFycmF5KEN1cmwuU1RBVEVfTEVOR1RIKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBoYXNoZXIuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBYnNvcmIgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGludG8gdGhlIHRyaXRzIHRvIGFic29yYiBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqL1xyXG4gICAgYWJzb3JiKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUcml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJMZW5ndGggbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICsgb2Zmc2V0ID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gbG9jYWxMZW5ndGggPCBDdXJsLkhBU0hfTEVOR1RIID8gbG9jYWxMZW5ndGggOiBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpKytdID0gdHJpdHNbbG9jYWxPZmZzZXQrK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTcXVlZXplIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gc3F1ZWV6ZSBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKi9cclxuICAgIHNxdWVlemUodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBsb2NhbExlbmd0aCA8IEN1cmwuSEFTSF9MRU5HVEggPyBsZW5ndGggOiBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0cml0c1tsb2NhbE9mZnNldCsrXSA9IHRoaXMuX3N0YXRlW2krK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2Zvcm0gdGhlIGhhc2guXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKCkge1xyXG4gICAgICAgIGxldCBzdGF0ZUNvcHk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCByb3VuZCA9IDA7IHJvdW5kIDwgdGhpcy5fbnVtYmVyT2ZSb3VuZHM7IHJvdW5kKyspIHtcclxuICAgICAgICAgICAgc3RhdGVDb3B5ID0gbmV3IEludDhBcnJheSh0aGlzLl9zdGF0ZS5zbGljZSgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDdXJsLlNUQVRFX0xFTkdUSDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpXSA9IEN1cmwuVFJVVEhfVEFCTEVbc3RhdGVDb3B5W2luZGV4XSArIChzdGF0ZUNvcHlbaW5kZXggKz0gKGluZGV4IDwgMzY1ID8gMzY0IDogLTM2NSldIDw8IDIpICsgNV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQ3VybC5IQVNIX0xFTkdUSCA9IDI0MztcclxuQ3VybC5OVU1CRVJfT0ZfUk9VTkRTID0gODE7XHJcbkN1cmwuU1RBVEVfTEVOR1RIID0gQ3VybC5IQVNIX0xFTkdUSCAqIDM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5DdXJsLlRSVVRIX1RBQkxFID0gbmV3IEludDhBcnJheShbMSwgMCwgLTEsIDIsIDEsIC0xLCAwLCAyLCAtMSwgMSwgMF0pO1xyXG5leHBvcnRzLkN1cmwgPSBDdXJsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM1Z5YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl6Y0c5dVoyVnpMMk4xY213dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzYzBSQlFXMUVPMEZCUjI1RU96czdSMEZIUnp0QlFVTklPMGxCWVVrN096dFBRVWRITzBsQlEwZ3NXVUZCV1N4VFFVRnBRaXhKUVVGSkxFTkJRVU1zWjBKQlFXZENPMUZCUXpsRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NUVUZCVFN4RFFVRkRPMGxCUTJ4RExFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVjBGQlZ5eERRVUZETEVsQlFWazdVVUZETTBJc1VVRkJVU3hKUVVGSkxFVkJRVVU3V1VGRFZpeExRVUZMTEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03WjBKQlEzSkNMRTlCUVU4c1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF6dGhRVU12UWp0WlFVTkVMRXRCUVVzc1lVRkJZU3hEUVVGRE8xbEJRMjVDTEV0QlFVc3NZMEZCWXp0blFrRkRia0k3YjBKQlEwa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YVVKQlEzSkNPMWxCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRlRVU3U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOMlFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVlVGQlZTeERRVUZETEV0QlFXbENPMUZCUXk5Q0xFbEJRVWtzUzBGQlN5eEZRVUZGTzFsQlExQXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03VTBGRGRrSTdZVUZCVFR0WlFVTklMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xTkJRMnhFTzBsQlEwd3NRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJaMElzUlVGQlJTeE5RVUZqTEVWQlFVVXNUVUZCWXp0UlFVTXhSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRemxFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1UwRkRhRVU3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMU5CUTNwRU8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRMME1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXp0VFFVTjZSRHRSUVVORUxFbEJRVWtzVFVGQlRTeEhRVUZITEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRMmhETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIVkVRVUYxUkN4RFFVRkRMRU5CUVVNN1UwRkRiRVk3VVVGRlJDeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRla0lzU1VGQlNTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUlhwQ0xFZEJRVWM3V1VGRFF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRWaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJSVGxGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRXRCUVVzc1JVRkJSVHRuUWtGRFpDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRNME03V1VGRlJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1dVRkZha0lzVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1UwRkRia01zVVVGQlVTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RlFVRkZPMGxCUXpsQ0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEU5QlFVOHNRMEZCUXl4TFFVRm5RaXhGUVVGRkxFMUJRV01zUlVGQlJTeE5RVUZqTzFGQlF6TkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRPVVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTm9SVHRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdVMEZEZWtRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVUkJRWFZFTEVOQlFVTXNRMEZCUXp0VFFVTnNSanRSUVVWRUxFbEJRVWtzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVTjZRaXhKUVVGSkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZGZWtJc1IwRkJSenRaUVVWRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTldMRTFCUVUwc1MwRkJTeXhIUVVGSExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkZla1VzVDBGQlR5eERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZPMmRDUVVOa0xFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTXpRenRaUVVWRUxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0WlFVVnFRaXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTnVReXhSUVVGUkxGZEJRVmNzUjBGQlJ5eERRVUZETEVWQlFVVTdTVUZET1VJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkxMRk5CUVZNN1VVRkRZaXhKUVVGSkxGTkJRVzlDTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJXUXNTMEZCU3l4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRGRrUXNVMEZCVXl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVVdlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRmVFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU51U0R0VFFVTktPMGxCUTB3c1EwRkJRenM3UVVFM1NuTkNMR2RDUVVGWExFZEJRVmNzUjBGQlJ5eERRVUZETzBGQlF6RkNMSEZDUVVGblFpeEhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTVRaXhwUWtGQldTeEhRVUZYTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJSVzVGTEdWQlFXVTdRVUZEVXl4blFrRkJWeXhIUVVGakxFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZPZWtjc2IwSkJLMHBESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBzaGEzXzEgPSByZXF1aXJlKFwiLi4vZGlnZXN0cy9zaGEzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBiaWdJbnRlZ2VySGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9iaWdJbnRlZ2VySGVscGVyXCIpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgSVNwb25nZSB1c2luZyBLZXJsIGFsZ29yaXRobS5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaXJpL2Jsb2IvZGV2L3NyYy9tYWluL2phdmEvY29tL2lvdGEvaXJpL2hhc2gvS2VybC5qYXZhXHJcbiAqL1xyXG5jbGFzcyBLZXJsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEtlcmwuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2tlY2NhayA9IG5ldyBzaGEzXzEuU2hhMygzODQsIHNoYTNfMS5TaGEzLktFQ0NBS19QQURESU5HLCAzODQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNvbnN0YW50IGZvciB0aGUgc3BvbmUuXHJcbiAgICAgKiBAbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29udGFudCB0byBnZXQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29uc3RhbnQuXHJcbiAgICAgKi9cclxuICAgIGdldENvbnN0YW50KG5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkhBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJCSVRfSEFTSF9MRU5HVEhcIjpcclxuICAgICAgICAgICAgY2FzZSBcIkJZVEVfSEFTSF9MRU5HVEhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gS2VybFtuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFVua25vd24gY29uc3RhbnQgcmVxdWVzdGVkICR7bmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpc2UgdGhlIGhhc2hlci5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSBmb3IgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZShzdGF0ZSkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgaGFzaGVyLlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9rZWNjYWsucmVzZXQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWJzb3JiIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBhYnNvcmIgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKi9cclxuICAgIGFic29yYih0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICUgMjQzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7S2VybC5IQVNIX0xFTkdUSH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaXRTdGF0ZSA9IHRyaXRzLnNsaWNlKGxvY2FsT2Zmc2V0LCBsb2NhbE9mZnNldCArIEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICB0cml0U3RhdGVbS2VybC5IQVNIX0xFTkdUSCAtIDFdID0gMDtcclxuICAgICAgICAgICAgY29uc3QgYmlnSW50ID0gYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIudHJpdHNUb0JpZ0ludGVnZXIodHJpdFN0YXRlLCAwLCB0cml0U3RhdGUubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZVN0YXRlID0gbmV3IEFycmF5QnVmZmVyKEtlcmwuQllURV9IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLmJpZ0ludGVnZXJUb0J5dGVzKGJpZ0ludCwgYnl0ZVN0YXRlLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5fa2VjY2FrLnVwZGF0ZShieXRlU3RhdGUpO1xyXG4gICAgICAgICAgICBsb2NhbE9mZnNldCArPSBLZXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBLZXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNxdWVlemUgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBzcXVlZXplIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqL1xyXG4gICAgc3F1ZWV6ZSh0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICUgMjQzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7S2VybC5IQVNIX0xFTkdUSH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVTdGF0ZUJ1ZmZlciA9IHRoaXMuX2tlY2Nhay5kaWdlc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgYmlnSW50ID0gYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIuYnl0ZXNUb0JpZ0ludGVnZXIoYnl0ZVN0YXRlQnVmZmVyLCAwLCBLZXJsLkJZVEVfSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cml0U3RhdGUgPSBuZXcgSW50OEFycmF5KEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBiaWdJbnRlZ2VySGVscGVyXzEuQmlnSW50ZWdlckhlbHBlci5iaWdJbnRlZ2VyVG9Ucml0cyhiaWdJbnQsIHRyaXRTdGF0ZSwgMCwgS2VybC5IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIHRyaXRTdGF0ZVtLZXJsLkhBU0hfTEVOR1RIIC0gMV0gPSAwO1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgS2VybC5IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbbG9jYWxPZmZzZXQrK10gPSB0cml0U3RhdGVbaSsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhieXRlU3RhdGVCdWZmZXIpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZHYuYnl0ZUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkdi5zZXRVaW50OChpLCBkdi5nZXRVaW50OChpKSBeIDB4RkYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2tlY2Nhay51cGRhdGUoYnl0ZVN0YXRlQnVmZmVyKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gS2VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5LZXJsLkhBU0hfTEVOR1RIID0gMjQzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuS2VybC5CSVRfSEFTSF9MRU5HVEggPSAzODQ7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5LZXJsLkJZVEVfSEFTSF9MRU5HVEggPSBLZXJsLkJJVF9IQVNIX0xFTkdUSCAvIDg7XHJcbmV4cG9ydHMuS2VybCA9IEtlcmw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWEyVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXpjRzl1WjJWekwydGxjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNNRU5CUVhWRE8wRkJRM1pETEhORVFVRnRSRHRCUVVOdVJDeHJSVUZCSzBRN1FVRkhMMFE3T3p0SFFVZEhPMEZCUTBnN1NVRlhTVHM3VDBGRlJ6dEpRVU5JTzFGQlEwa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxGZEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNWMEZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU16UkN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRmRCUVZjc1EwRkJReXhKUVVGWk8xRkJRek5DTEZGQlFWRXNTVUZCU1N4RlFVRkZPMWxCUTFZc1MwRkJTeXhoUVVGaExFTkJRVU03V1VGRGJrSXNTMEZCU3l4cFFrRkJhVUlzUTBGQlF6dFpRVU4yUWl4TFFVRkxMR3RDUVVGclFqdG5Ra0ZEZGtJN2IwSkJRMGtzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRM0pDTzFsQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNPRUpCUVRoQ0xFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZUVVN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzVTBGQlV5eERRVUZETzBsQlEzSkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VlFVRlZMRU5CUVVNc1MwRkJhVUk3U1VGRGJrTXNRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFdEJRV2RDTEVWQlFVVXNUVUZCWXl4RlFVRkZMRTFCUVdNN1VVRkRNVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU01UkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHhRMEZCY1VNc1EwRkJReXhEUVVGRE8xTkJRMmhGTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGREwwTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zT0VKQlFUaENMRU5CUVVNc1EwRkJRenRUUVVONlJEdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNN1UwRkRla1E3VVVGRFJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU5vUXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDFSRUZCZFVRc1EwRkJReXhEUVVGRE8xTkJRMnhHTzFGQlEwUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU53UWl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eG5RMEZCWjBNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVONlJqdFJRVVZFTEVsQlFVa3NWMEZCVnl4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVONlFpeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkZla0lzUjBGQlJ6dFpRVU5ETEUxQlFVMHNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eEZRVUZGTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRk0wVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTNCRExFMUJRVTBzVFVGQlRTeEhRVUZITEcxRFFVRm5RaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMWxCUTJ4R0xFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMWxCUTNwRUxHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmVrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZGTDBJc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZEYUVNc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdVMEZEYmtNc1VVRkJVU3hYUVVGWExFZEJRVWNzUTBGQlF5eEZRVUZGTzBsQlF6bENMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFOUJRVThzUTBGQlF5eExRVUZuUWl4RlFVRkZMRTFCUVdNc1JVRkJSU3hOUVVGak8xRkJRek5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZET1VRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFRRVU5vUlR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERoQ1FVRTRRaXhEUVVGRExFTkJRVU03VTBGRGVrUTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU12UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8xTkJRM3BFTzFGQlEwUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVVJCUVhWRUxFTkJRVU1zUTBGQlF6dFRRVU5zUmp0UlFVTkVMRWxCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEY0VJc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNaME5CUVdkRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGVrWTdVVUZGUkN4SlFVRkpMRmRCUVZjc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGVrSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJSWHBDTEVkQlFVYzdXVUZEUXl4TlFVRk5MR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMWxCUlRsRExFMUJRVTBzVFVGQlRTeEhRVUZITEcxRFFVRm5RaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03V1VGRk4wWXNUVUZCVFN4VFFVRlRMRWRCUVdNc1NVRkJTU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpkRUxHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0WlFVVXpSU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRmNFTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMVlzVDBGQlR5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRGVrSXNTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRla003V1VGRlJDeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6dFpRVU42UXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEyaERMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdZVUZEZWtNN1dVRkZSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRaUVVWeVF5eFhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRUUVVOdVF5eFJRVUZSTEZkQlFWY3NSMEZCUnl4RFFVRkRMRVZCUVVVN1NVRkRPVUlzUTBGQlF6czdRVUZ1U2tRc1pVRkJaVHRCUVVOVExHZENRVUZYTEVkQlFWY3NSMEZCUnl4RFFVRkRPMEZCUTJ4RUxHVkJRV1U3UVVGRFV5eHZRa0ZCWlN4SFFVRlhMRWRCUVVjc1EwRkJRenRCUVVOMFJDeGxRVUZsTzBGQlExTXNjVUpCUVdkQ0xFZEJRVmNzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRk9hRVlzYjBKQmNVcERJbjA9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmlnX2ludGVnZXJfXzsiXSwic291cmNlUm9vdCI6IiJ9