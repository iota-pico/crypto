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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../core/dist/error/coreError.js":
/*!***************************************!*\
  !*** ../core/dist/error/coreError.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var jsonHelper_1 = __webpack_require__(/*! ../helpers/jsonHelper */ "../core/dist/helpers/jsonHelper.js");

var stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "../core/dist/helpers/stringHelper.js");
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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CoreError).call(this, message));
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
     * @returns Formatted version of the error.
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

/***/ "../core/dist/factories/factoryBase.js":
/*!*********************************************!*\
  !*** ../core/dist/factories/factoryBase.js ***!
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

/***/ "../core/dist/helpers/arrayHelper.js":
/*!*******************************************!*\
  !*** ../core/dist/helpers/arrayHelper.js ***!
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

var objectHelper_1 = __webpack_require__(/*! ./objectHelper */ "../core/dist/helpers/objectHelper.js");
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

/***/ "../core/dist/helpers/jsonHelper.js":
/*!******************************************!*\
  !*** ../core/dist/helpers/jsonHelper.js ***!
  \******************************************/
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

/***/ "../core/dist/helpers/numberHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/numberHelper.js ***!
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

/***/ "../core/dist/helpers/objectHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/objectHelper.js ***!
  \********************************************/
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
     * @param typeConstructor A callback method which returns an instance of the object.
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

/***/ "../core/dist/helpers/stringHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/stringHelper.js ***!
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

/***/ "../core/dist/services/timeService.js":
/*!********************************************!*\
  !*** ../core/dist/services/timeService.js ***!
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

/***/ "../data/dist/data/address.js":
/*!************************************!*\
  !*** ../data/dist/data/address.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
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

/***/ "../data/dist/data/addressSecurity.js":
/*!********************************************!*\
  !*** ../data/dist/data/addressSecurity.js ***!
  \********************************************/
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

/***/ "../data/dist/data/hash.js":
/*!*********************************!*\
  !*** ../data/dist/data/hash.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
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

/***/ "../data/dist/data/signatureMessageFragment.js":
/*!*****************************************************!*\
  !*** ../data/dist/data/signatureMessageFragment.js ***!
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

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
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

/***/ "../data/dist/data/tag.js":
/*!********************************!*\
  !*** ../data/dist/data/tag.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
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

/***/ "../data/dist/data/transaction.js":
/*!****************************************!*\
  !*** ../data/dist/data/transaction.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var address_1 = __webpack_require__(/*! ./address */ "../data/dist/data/address.js");

var hash_1 = __webpack_require__(/*! ./hash */ "../data/dist/data/hash.js");

var signatureMessageFragment_1 = __webpack_require__(/*! ./signatureMessageFragment */ "../data/dist/data/signatureMessageFragment.js");

var tag_1 = __webpack_require__(/*! ./tag */ "../data/dist/data/tag.js");

var tryteNumber_1 = __webpack_require__(/*! ./tryteNumber */ "../data/dist/data/tryteNumber.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
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

/***/ "../data/dist/data/trits.js":
/*!**********************************!*\
  !*** ../data/dist/data/trits.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "../core/dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
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

/***/ "../data/dist/data/tryteNumber.js":
/*!****************************************!*\
  !*** ../data/dist/data/tryteNumber.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trits_1 = __webpack_require__(/*! ./trits */ "../data/dist/data/trits.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
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

/***/ "../data/dist/data/trytes.js":
/*!***********************************!*\
  !*** ../data/dist/data/trytes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var stringHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/stringHelper */ "../core/dist/helpers/stringHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");
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

/***/ "../data/dist/error/dataError.js":
/*!***************************************!*\
  !*** ../data/dist/error/dataError.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "../core/dist/error/coreError.js");
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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataError).call(this, message, additional, innerError));
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

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "../core/dist/error/coreError.js");
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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CryptoError).call(this, message, additional, innerError));
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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/factoryBase */ "../core/dist/factories/factoryBase.js");
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

    return _possibleConstructorReturn(this, _getPrototypeOf(ProofOfWorkFactory).call(this));
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

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/factoryBase */ "../core/dist/factories/factoryBase.js");

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

    return _possibleConstructorReturn(this, _getPrototypeOf(SpongeFactory).call(this));
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

          return _construct(curl_1.Curl, args);
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

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "../core/dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var address_1 = __webpack_require__(/*! @iota-pico/data/dist/data/address */ "../data/dist/data/address.js");

var addressSecurity_1 = __webpack_require__(/*! @iota-pico/data/dist/data/addressSecurity */ "../data/dist/data/addressSecurity.js");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "../data/dist/data/hash.js");

var signatureMessageFragment_1 = __webpack_require__(/*! @iota-pico/data/dist/data/signatureMessageFragment */ "../data/dist/data/signatureMessageFragment.js");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "../data/dist/data/trits.js");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "../data/dist/data/trytes.js");

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
     * @param security The security level to create the key.
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

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

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
     * @returns Big integer version of trits.
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
     * @returns Big integer version of bytes.
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

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "../data/dist/data/hash.js");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "../data/dist/data/transaction.js");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "../data/dist/data/trits.js");

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


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "../core/dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var timeService_1 = __webpack_require__(/*! @iota-pico/core/dist/services/timeService */ "../core/dist/services/timeService.js");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "../data/dist/data/hash.js");

var tag_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tag */ "../data/dist/data/tag.js");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "../data/dist/data/transaction.js");

var tryteNumber_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tryteNumber */ "../data/dist/data/tryteNumber.js");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "../data/dist/data/trytes.js");

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
   * @returns Promise.
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

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

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
   * @param name The name of the constant to get.
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

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

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
   * @param name The name of the constant to get.
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

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************************************************************************/
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

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js");

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

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9oZWxwZXJzL2FycmF5SGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2hlbHBlcnMvbnVtYmVySGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9oZWxwZXJzL29iamVjdEhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL3NlcnZpY2VzL3RpbWVTZXJ2aWNlLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9kYXRhL2FkZHJlc3MudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2RhdGEvYWRkcmVzc1NlY3VyaXR5LnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9kYXRhL2hhc2gudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9kYXRhL3RhZy50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZGF0YS90cmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZGF0YS90cml0cy50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZGF0YS90cnl0ZU51bWJlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZGF0YS90cnl0ZXMudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2Vycm9yL2RhdGFFcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZGlnZXN0cy9zaGEzLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9lcnJvci9jcnlwdG9FcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZmFjdG9yaWVzL3Byb29mT2ZXb3JrRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2hhc2gvaXNzLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9oZWxwZXJzL2JpZ0ludGVnZXJIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4uLy4uL3NyYy9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi4vLi4vc3JjL3Nwb25nZXMvY3VybC50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uLi8uLi9zcmMvc3Bvbmdlcy9rZXJsLnRzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQGJhYmVsL3J1bnRpbWUvNy4wLjAtYmV0YS40OS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9yZWdlbmVyYXRvci1ydW50aW1lLzAuMTEuMS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvMC4xMS4xL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vZXh0ZXJuYWwge1wiYW1kXCI6XCJiaWctaW50ZWdlclwiLFwiY29tbW9uanNcIjpcImJpZy1pbnRlZ2VyXCIsXCJjb21tb25qczJcIjpcImJpZy1pbnRlZ2VyXCIsXCJyb290XCI6XCJiaWdJbnRcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFD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UyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsWUFBSSxNQUFPLE1BQU0sQ0FBUCxHQUFhLE9BQU8sRUFBMUIsQ0FBSjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLENBQUYsS0FBUSxDQUFSO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsWUFBSSxNQUFPLE1BQU0sQ0FBUCxHQUFhLE9BQU8sRUFBMUIsQ0FBSjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLENBQUYsS0FBUSxDQUFSO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsWUFBSSxNQUFPLE1BQU0sQ0FBUCxHQUFhLE9BQU8sRUFBMUIsQ0FBSjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLENBQUYsS0FBUSxDQUFSO0FBQ0EsVUFBRSxFQUFGLEtB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R0FBZ0IsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxhQUFNLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxhQUFNLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsQ0FBRixLQUFRLEVBQVQsR0FBZ0IsRUFBRSxDQUFGLE1BQVMsQ0FBL0I7QUFDQSxjQUFPLEVBQUUsQ0FBRixLQUFRLEVBQVQsR0FBZ0IsRUFBRSxDQUFGLE1BQVMsQ0FBL0I7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxhQUFNLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxhQUFNLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsQ0FBakM7QUFDQSxjQUFPLEVBQUUsQ0FBRixLQUFRLEVBQVQsR0FBZ0IsRUFBRSxDQUFGLE1BQVMsQ0FBL0I7QUFDQSxjQUFPLEVBQUUsQ0FBRixLQUFRLEVBQVQsR0FBZ0IsRUFBRSxDQUFGLE1BQVMsQ0FBL0I7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBakM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLENBQVYsR0FBZ0IsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLENBQVYsR0FBZ0IsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLENBQVYsR0FBZ0IsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxjQUFPLEVBQUUsRUFBRixLQUFTLENBQVYsR0FBZ0IsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxhQUFNLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFDQSxhQUFNLEVBQUUsRUFBRixLQUFTLEVBQVYsR0FBaUIsRUFBRSxFQUFGLE1BQVUsRUFBaEM7QUFFQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsQ0FBRixJQUFPLEtBQU0sQ0FBQyxFQUFELEdBQU0sRUFBbkI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsQ0FBRixJQUFPLEtBQU0sQ0FBQyxFQUFELEdBQU0sRUFBbkI7QUFDQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsQ0FBRixJQUFPLEtBQU0sQ0FBQyxFQUFELEdBQU0sRUFBbkI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxN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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCOzs7Ozs7Ozs7Ozs7QUN0dEJBLHlEIiwiZmlsZSI6ImlvdGEtcGljby1jcnlwdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJiaWctaW50ZWdlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBpb3RhLXBpY28vY3J5cHRvXCIsIFtcImJpZy1pbnRlZ2VyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBpb3RhLXBpY28vY3J5cHRvXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYmlnLWludGVnZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvQ3J5cHRvXCJdID0gZmFjdG9yeShyb290W1wiYmlnSW50XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JpZ19pbnRlZ2VyX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QvaW5kZXguanNcIik7XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGpzb25IZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2pzb25IZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG4vKipcclxuICogQSBjb3JlIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgQ29yZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQ29yZUVycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsID0gYWRkaXRpb25hbCA/IGFkZGl0aW9uYWwgOiB7fTtcclxuICAgICAgICB0aGlzLmlubmVyRXJyb3IgPSBpbm5lckVycm9yO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJDb3JlXCI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIGFuIG9iamVjdCBjb3VsZCBiZSBhIENvcmVFcnJvci5cclxuICAgICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBjaGVjayBpZiBpdCBpcyBhIENvcmVFcnJvci5cclxuICAgICAqIEByZXR1cm5zIHRydWUgSWYgdGhlIHRlc3RlZCBvYmplY3QgaXMgYSBDb3JlRXJyb3IuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0Vycm9yKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiBcIm1lc3NhZ2VcIiBpbiBvYmogJiYgXCJhZGRpdGlvbmFsXCIgaW4gb2JqO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JtYXQgdGhlIGVycm9yIHRvIGEgcmVhZGFibGUgdmVyc2lvbi5cclxuICAgICAqIEByZXR1cm5zIEZvcm1hdHRlZCB2ZXJzaW9uIG9mIHRoZSBlcnJvci5cclxuICAgICAqL1xyXG4gICAgZm9ybWF0KCkge1xyXG4gICAgICAgIGxldCBvdXQgPSBcIlwiO1xyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodGhpcy5kb21haW4pKSB7XHJcbiAgICAgICAgICAgIG91dCArPSBgJHt0aGlzLmRvbWFpbn06IGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodGhpcy5tZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBvdXQgKz0gYCR7dGhpcy5tZXNzYWdlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmFkZGl0aW9uYWwpO1xyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKG91dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIG91dCArPSBgXFx0JHtrZXl9OiAke2pzb25IZWxwZXJfMS5Kc29uSGVscGVyLnN0cmluZ2lmeSh0aGlzLmFkZGl0aW9uYWxba2V5XSl9XFxuYDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db3JlRXJyb3IgPSBDb3JlRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXlaVVZ5Y205eUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJWeWNtOXlMMk52Y21WRmNuSnZjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNjMFJCUVcxRU8wRkJRMjVFTERCRVFVRjFSRHRCUVVWMlJEczdSMEZGUnp0QlFVTklMR1ZCUVhWQ0xGTkJRVkVzUzBGQlN6dEpRV2RDYUVNN096czdPMDlCUzBjN1NVRkRTQ3haUVVGWkxFOUJRV1VzUlVGQlJTeFZRVUZyUXl4RlFVRkZMRlZCUVd0Q08xRkJReTlGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVObUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0UlFVTXZReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEZWQlFWVXNRMEZCUXp0UlFVTTNRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCVVR0UlFVTXhRaXhQUVVGUExFZEJRVWNzUzBGQlN5eFRRVUZUTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVsQlFVa3NVMEZCVXl4SlFVRkpMRWRCUVVjc1NVRkJTU3haUVVGWkxFbEJRVWtzUjBGQlJ5eERRVUZETzBsQlEyNUlMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5PMUZCUTFRc1NVRkJTU3hIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlJXSXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOd1F5eEhRVUZITEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU03VTBGRE4wSTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8xbEJRM0pETEVkQlFVY3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFRRVU0xUWp0UlFVVkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRekZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGFrSXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEYUVJc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF6dGhRVU5tTzFsQlEwUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEWml4SFFVRkhMRWxCUVVrc1MwRkJTeXhIUVVGSExFdEJRVXNzZFVKQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkRka1VzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEVGp0UlFVVkVMRTlCUVU4c1IwRkJSeXhEUVVGRE8wbEJRMllzUTBGQlF6dERRVU5LTzBGQmFFVkVMRGhDUVdkRlF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHR5cGVzLlxyXG4gKiBAdHlwZXBhcmFtIFQgVGhlIGdlbmVyaWMgdHlwZSBmb3IgdGhlIG9iamVjdCB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICovXHJcbmNsYXNzIEZhY3RvcnlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgICAgIHRoaXMuX3R5cGVzID0ge307XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IHR5cGUgd2l0aCB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHJlZ2lzdGVyLlxyXG4gICAgICogQHBhcmFtIHR5cGVDb25zdHJ1Y3RvciBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSB0eXBlLlxyXG4gICAgICovXHJcbiAgICByZWdpc3RlcihuYW1lLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdID0gdHlwZUNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVyIGEgdHlwZSBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gdW5yZWdpc3Rlci5cclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3RlcihuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhlIGZhY3RvcnkgY29udGFpbiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBsb29rIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR5cGUgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICBleGlzdHMobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIExpc3QgdGhlIHR5cGVzIGluIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gbG9vayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0eXBlIGV4aXN0cy5cclxuICAgICAqL1xyXG4gICAgdHlwZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYW4gb2JqZWN0IGZyb20gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBjcmVhdGUuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBbnkgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBjb25zdHJ1Y3Rvci5cclxuICAgICAqIEByZXR1cm5zIEEgbmV3IGluc3RhbmNlIG9mIHRoZSB0eXBlIGlmIGl0IGV4aXN0cywgb3IgdW5kZWZpbmVkIGlmIGl0IGRvZXMgbm90LlxyXG4gICAgICovXHJcbiAgICBjcmVhdGUobmFtZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5fdHlwZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLl90eXBlc1tuYW1lXSguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRmFjdG9yeUJhc2UgPSBGYWN0b3J5QmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm1GamRHOXllVUpoYzJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Wm1GamRHOXlhV1Z6TDJaaFkzUnZjbmxDWVhObExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN08wZEJSMGM3UVVGRFNEdEpRVUZCTzFGQlEwa3NaVUZCWlR0UlFVTkZMRmRCUVUwc1IwRkJPRU1zUlVGQlJTeERRVUZETzBsQmMwUTFSU3hEUVVGRE8wbEJjRVJIT3pzN08wOUJTVWM3U1VGRFNTeFJRVUZSTEVOQlFVTXNTVUZCV1N4RlFVRkZMR1ZCUVhORE8xRkJRMmhGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NaVUZCWlN4RFFVRkRPMGxCUTNSRUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hWUVVGVkxFTkJRVU1zU1VGQldUdFJRVU14UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNTVUZCV1R0UlFVTjBRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETzBsQlEzcEVMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1MwRkJTenRSUVVOU0xFOUJRVThzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEVsQlFWa3NSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRkRU1zVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRM0JETEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU4yUWl4UFFVRlBMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVONlF6dGhRVUZOTzFsQlEwZ3NUMEZCVHl4VFFVRlRMRU5CUVVNN1UwRkRjRUk3U1VGRFRDeERRVUZETzBOQlNVbzdRVUY0UkVRc2EwTkJkMFJESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiLi9vYmplY3RIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBBcnJheSBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIEFycmF5SGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IEFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBlbXB0eSBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgZW1wdHkgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheUhlbHBlci5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIG5vbiBlbXB0eSBhcnJheSBvZiBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBub24gZW1wdHkgYXJyYXkgb2YgYSBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlZCh2YWx1ZSwgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXlIZWxwZXIuaXNFbXB0eSh2YWx1ZSkgJiZcclxuICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKHVuZGVmaW5lZCkgJiZcclxuICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKG51bGwpICYmXHJcbiAgICAgICAgICAgIHZhbHVlLmV2ZXJ5KChhKSA9PiBvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGEsIHR5cGUpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFycmF5SGVscGVyID0gQXJyYXlIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYSnlZWGxJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5aGNuSmhlVWhsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2FVUkJRVGhETzBGQlJUbERPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZPMUZCUXpWQ0xFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNaRExFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZPMUZCUXpWQ0xFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpkRUxFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJWU3hGUVVGRkxFbEJRV003VVVGRE5VTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETzFsQlF6bENMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZETVVJc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXp0WlFVTnlRaXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCVFN4RlFVRkZMRVZCUVVVc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU01UkN4RFFVRkRPME5CUlVvN1FVRnFRMFFzYTBOQmFVTkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogSnNvbiBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIEpzb25IZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdHJpbmdpZnkgYW4gb2JqZWN0IHdpdGggcmVjdXJzaW9uIGJyZWFraW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgSmF2YVNjcmlwdCB2YWx1ZSwgdXN1YWxseSBhbiBvYmplY3Qgb3IgYXJyYXksIHRvIGJlIGNvbnZlcnRlZC5cclxuICAgICAqIEBwYXJhbSByZXBsYWNlciBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyB0aGUgcmVzdWx0cy5cclxuICAgICAqIEBwYXJhbSBzcGFjZSBBZGRzIGluZGVudGF0aW9uLCB3aGl0ZSBzcGFjZSwgYW5kIGxpbmUgYnJlYWsgY2hhcmFjdGVycyB0byB0aGUgcmV0dXJuLXZhbHVlIEpTT04gdGV4dCB0byBtYWtlIGl0IGVhc2llciB0byByZWFkLlxyXG4gICAgICogQHJldHVybnMgU3RyaW5nIHZlcnNpb24gb2YgdGhlIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN0cmluZ2lmeSh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSB7XHJcbiAgICAgICAgLy8gZWxpbWluYXRlcyBhbnkgcmVjdXJzaW9uIGluIHRoZSBzdHJpbmdpZnlcclxuICAgICAgICBjb25zdCBjYWNoZSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHJlY3VzaW9uUmVwbGFjZXIgPSAoa2V5LCByZXBsYWNlVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlVmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgcmVwbGFjZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWNoZS5pbmRleE9mKHJlcGxhY2VWYWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2lyY3VsYXIgcmVmZXJlbmNlIGZvdW5kLCBkaXNjYXJkIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLnB1c2gocmVwbGFjZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZXIgPyByZXBsYWNlcihrZXksIHJlcGxhY2VWYWx1ZSkgOiByZXBsYWNlVmFsdWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIHJlY3VzaW9uUmVwbGFjZXIsIHNwYWNlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkpzb25IZWxwZXIgPSBKc29uSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhbk52YmtobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwycHpiMjVJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096czdPMDlCVFVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFWVXNSVUZCUlN4UlFVRXlReXhGUVVGRkxFdEJRWFZDTzFGQlEzQkhMRFJEUVVFMFF6dFJRVU0xUXl4TlFVRk5MRXRCUVVzc1IwRkJWU3hGUVVGRkxFTkJRVU03VVVGRmVFSXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eERRVUZETEVkQlFWY3NSVUZCUlN4WlFVRnBRaXhGUVVGRkxFVkJRVVU3V1VGRGVFUXNTVUZCU1N4UFFVRlBMRmxCUVZrc1MwRkJTeXhSUVVGUkxFbEJRVWtzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4WlFVRlpMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVU5zUml4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRM0JETEhkRFFVRjNRenR2UWtGRGVFTXNUMEZCVHp0cFFrRkRWanR4UWtGQlRUdHZRa0ZEU0N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJsQ1FVTTFRanRoUVVOS08xbEJSVVFzVDBGQlR5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVOcVJTeERRVUZETEVOQlFVTTdVVUZGUml4UFFVRlBMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNN1EwRkRTanRCUVROQ1JDeG5RMEV5UWtNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBOdW1iZXIgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gaW50ZWdlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIGludGVnZXJuZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgaW50ZWdlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBudW1iZXJ5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGZsb2F0IG51bWJlciBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGNhbiBiZSB1c2VkIGZvciBiaWcgbnVtYmVycyB0aGF0IHdvdWxkIG92ZXJmbG93IHBhcnNlRmxvYXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgZm9ybWF0dGVkIGNvcnJlY3RseS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRmxvYXRTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gL14tP1xcZCpcXC4/XFxkKyQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBpbnRlZ2VyIG51bWJlciBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGNhbiBiZSB1c2VkIGZvciBiaWcgbnVtYmVycyB0aGF0IHdvdWxkIG92ZXJmbG93IHBhcnNlSW50LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGZvcm1hdHRlZCBjb3JyZWN0bHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXJTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gL14tP1xcZCskLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bWJlckhlbHBlciA9IE51bWJlckhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5WdFltVnlTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12Ym5WdFltVnlTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCVlR0UlFVTTVRaXhQUVVGUExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEY2tZc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFWVTdVVUZETjBJc1QwRkJUeXhMUVVGTExFdEJRVXNzVTBGQlV5eEpRVUZKTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1QwRkJUeXhMUVVGTExFdEJRVXNzVVVGQlVTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMmhKTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGaE8xRkJRM0pETEU5QlFVOHNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQllUdFJRVU4yUXl4UFFVRlBMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJRenREUVVOS08wRkJjRU5FTEc5RFFXOURReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogT2JqZWN0IGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgT2JqZWN0SGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZW1wdHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiB0eXBlb2YgKHZhbHVlKSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBvYmplY3QgaWYgZ2l2ZW4gdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEBwYXJhbSB0eXBlQ29uc3RydWN0b3IgQSBjYWxsYmFjayBtZXRob2Qgd2hpY2ggcmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IG9mIHRoZSBzcGVjaWZpZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZSh2YWx1ZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVDbGFzc05hbWUgPSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWVDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZUNsYXNzTmFtZSA9PT0gT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh0eXBlQ29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNsYXNzIG5hbWUgb2YgYW4gb2JqZWN0IGlmIGl0IGhhcyBvbmUuXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBvYmplY3QgdG8gZ2V0IHRoZSBjbGFzcyBuYW1lIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjbGFzcyBuYW1lIGlmIGl0IGhhcyBvbmUgb3IgdW5kZWZpbmVkIGlmIG5vdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldENsYXNzTmFtZShvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHR5cGVvZiBvYmplY3QgPT09IFwiZnVuY3Rpb25cIiA/IG9iamVjdC50b1N0cmluZygpIDogb2JqZWN0LmNvbnN0cnVjdG9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBjb25zdHJ1Y3Rvci5tYXRjaCgvXFx3Ky9nKTtcclxuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLk9iamVjdEhlbHBlciA9IE9iamVjdEhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYjJKcVpXTjBTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YjJKcVpXTjBTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCVlR0UlFVTTFRaXhQUVVGUExFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNc1EwRkJRenRKUVVOcVJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVNM1FpeFBRVUZQTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk03V1VGRGVFTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRkZCUVZFc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRkRVVzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGVkxFVkJRVVVzWlVGQmVVSTdVVUZEZEVRc1RVRkJUU3hqUVVGakxFZEJRVWNzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVONFJDeFBRVUZQTEdOQlFXTXNTMEZCU3l4VFFVRlRMRWxCUVVrc1kwRkJZeXhMUVVGTExGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1NVRkRla2NzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVZjN1VVRkRiRU1zU1VGQlNTeE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRTFCUVUwc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRGVrTXNUMEZCVHl4VFFVRlRMRU5CUVVNN1UwRkRjRUk3WVVGQlRUdFpRVU5JTEUxQlFVMHNWMEZCVnl4SFFVRkhMRTlCUVU4c1RVRkJUU3hMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xbEJRM0pITEUxQlFVMHNUMEZCVHl4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETVVNc1QwRkJUeXhEUVVGRExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dFRRVU51UlR0SlFVTk1MRU5CUVVNN1EwRkRTanRCUVRkRFJDeHZRMEUyUTBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTdHJpbmcgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBTdHJpbmdIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBzdHJpbmd5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIHN0cmluZyB0aGF0IGlzIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbm8gZW1wdHluZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFuIGVtcHR5IHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIVN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgc3RyaW5nIGFsbCBBU0NJSSBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIHN0cmluZyB0byB0ZXN0IGlmIGlzIGlzIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFsbCBBU0NJSS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXNjaWkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogL15bXFx4MDAtXFx4RkZdKiQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmNvZGUgbm9uIEFTQ0lJIGNoYXJhY3RlcnMgd2l0aCBjb250cm9sIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB2YWx1ZSB0byBlc2NhcGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZXNjYXBlZCB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBlbmNvZGVOb25BU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpID8gdmFsdWUucmVwbGFjZSgvW1xcdTAwN0YtXFx1RkZGRl0vZywgKGNocikgPT4gYFxcXFx1JHsoYDAwMDAke2Noci5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KX1gKS5zdWJzdHIoLTQpfWApIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNvZGUgY29udHJvbCBjaGFyYWN0ZXJzIHRvIEFTQ0lJLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBlbmNvZGVkIHN0cmluZyB0byBjb252ZXJ0IGJhY2sgdG8gQVNDSUkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGVjb2RlZCB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZWNvZGVOb25BU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpID8gdmFsdWUucmVwbGFjZSgvXFxcXHUoW1xcZFxcd117NH0pL2dpLCAobWF0Y2gsIGdycCkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChncnAsIDE2KSkpIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3RyaW5nSGVscGVyID0gU3RyaW5nSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM1J5YVc1blNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZjM1J5YVc1blNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVNM1FpeFBRVUZQTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk03V1VGRGVFTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEdsQ1FVRnBRaXhEUVVGRE8wbEJRemxGTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGVk8xRkJRelZDTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJReTlFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGaE8xRkJReTlDTEU5QlFVOHNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFXRTdVVUZEZEVNc1QwRkJUeXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRMMG9zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVdFN1VVRkRkRU1zVDBGQlR5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRMmhLTEVOQlFVTTdRMEZEU2p0QlFTOURSQ3h2UTBFclEwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGNsYXNzIHdoaWNoIGNhbiBwcm92aWRlIHRoZSB0aW1lLlxyXG4gKi9cclxuY2xhc3MgVGltZVNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDE5NzAvMDEvMDEuXHJcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gICAgICovXHJcbiAgICBtc1NpbmNlRXBvY2goKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UaW1lU2VydmljZSA9IFRpbWVTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR2x0WlZObGNuWnBZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjMlZ5ZG1salpYTXZkR2x0WlZObGNuWnBZMlV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVVkJPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPMDlCUjBjN1NVRkRTU3haUVVGWk8xRkJRMllzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dERRVU5LTzBGQlVrUXNhME5CVVVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgYWRkcmVzc2VzLlxyXG4gKi9cclxuY2xhc3MgQWRkcmVzcyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKGFkZHJlc3NUcnl0ZXMsIGNoZWNrc3VtVHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fYWRkcmVzc1RyeXRlcyA9IGFkZHJlc3NUcnl0ZXM7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tzdW1Ucnl0ZXMgPSBjaGVja3N1bVRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFkZHJlc3MgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gYWRkcmVzcyBUaGUgdHJ5dGVzIHRvIGNyZWF0ZSB0aGUgYWRkcmVzcyBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgQWRkcmVzcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXMoYWRkcmVzcykge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhZGRyZXNzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgYWRkcmVzcyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXNTdHJpbmcgPSBhZGRyZXNzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHRyeXRlc1N0cmluZy5sZW5ndGggIT09IEFkZHJlc3MuTEVOR1RIICYmIHRyeXRlc1N0cmluZy5sZW5ndGggIT09IEFkZHJlc3MuTEVOR1RIX1dJVEhfQ0hFQ0tTVU0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGFkZHJlc3Mgc2hvdWxkIGVpdGhlciBiZSAke0FkZHJlc3MuTEVOR1RIfSBvciAke0FkZHJlc3MuTEVOR1RIX1dJVEhfQ0hFQ0tTVU19IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGg6IHRyeXRlc1N0cmluZy5sZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NUcnl0ZXMgPSB0cnl0ZXNTdHJpbmcuc3Vic3RyKDAsIEFkZHJlc3MuTEVOR1RIKTtcclxuICAgICAgICBsZXQgY2hlY2tzdW1Ucnl0ZXM7XHJcbiAgICAgICAgaWYgKHRyeXRlc1N0cmluZy5sZW5ndGggPT09IEFkZHJlc3MuTEVOR1RIX1dJVEhfQ0hFQ0tTVU0pIHtcclxuICAgICAgICAgICAgY2hlY2tzdW1Ucnl0ZXMgPSB0cnl0ZXNTdHJpbmcuc3Vic3RyKEFkZHJlc3MuTEVOR1RIKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBZGRyZXNzKGFkZHJlc3NUcnl0ZXMsIGNoZWNrc3VtVHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgYWRkcmVzcyB0byB0cnl0ZXMgd2l0aCBubyBjaGVja3N1bS5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSBhZGRyZXNzIHdpdGggbm8gY2hlY2tzdW0uXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl9hZGRyZXNzVHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgYWRkcmVzcyB0byB0cnl0ZXMgd2l0aCBhIGNoZWNrc3VtLCBjcmVhdGluZyBhIGJsYW5rIG9uZSBpZiBuZWVkZWQuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgYWRkcmVzcyB3aXRoIGNoZWNrc3UsLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlc1dpdGhDaGVja3N1bSgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHRoaXMuX2NoZWNrc3VtVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fYWRkcmVzc1RyeXRlcyArIHRoaXMuX2NoZWNrc3VtVHJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoaXMgYWRkcmVzcyBoYXMgbm8gY2hlY2tzdW0gY2FsY3VsYXRlZCBmb3IgaXRgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHRoaXMuX2NoZWNrc3VtVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkcmVzc1RyeXRlcyArIHRoaXMuX2NoZWNrc3VtVHJ5dGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3NUcnl0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciBhIHZhbGlkIGFkZHJlc3Mgd2l0aG91dCBjaGVja3N1bSAoODEpLlxyXG4gKi9cclxuQWRkcmVzcy5MRU5HVEggPSA4MTtcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIGFuIGFkZHJlc3MgY2hlY2tzdW0gKDkpLlxyXG4gKi9cclxuQWRkcmVzcy5MRU5HVEhfQ0hFQ0tTVU0gPSA5O1xyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgdmFsaWQgYWRkcmVzcyB3aXRoIGNoZWNrc3VtICg5MCkuXHJcbiAqL1xyXG5BZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNID0gQWRkcmVzcy5MRU5HVEggKyBBZGRyZXNzLkxFTkdUSF9DSEVDS1NVTTtcclxuLyoqXHJcbiAqIEFuIGVtcHR5IGhhc2ggYWxsIDlzLlxyXG4gKi9cclxuQWRkcmVzcy5FTVBUWSA9IEFkZHJlc3MuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoQWRkcmVzcy5MRU5HVEgpKSk7XHJcbmV4cG9ydHMuQWRkcmVzcyA9IEFkZHJlc3M7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlXUmtjbVZ6Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrWVhSaEwyRmtaSEpsYzNNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zY1VOQlFXdERPMEZCUld4RE96dEhRVVZITzBGQlEwZzdTVUYzUWtrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEdGQlFYRkNMRVZCUVVVc1kwRkJjMEk3VVVGRE4wUXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhoUVVGaExFTkJRVU03VVVGRGNFTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJTU3hqUVVGakxFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRV1U3VVVGRGNFTXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4bFFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOMlF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXcyUTBGQk5rTXNRMEZCUXl4RFFVRkRPMU5CUTNSRk8xRkJSVVFzVFVGQlRTeFpRVUZaTEVkQlFVY3NUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSWGhETEVsQlFVa3NXVUZCV1N4RFFVRkRMRTFCUVUwc1MwRkJTeXhQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEZsQlFWa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1QwRkJUeXhEUVVGRExHOUNRVUZ2UWl4RlFVRkZPMWxCUTJoSExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMR2REUVVGblF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4UFFVRlBMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNkVUpCUVhWQ0xFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNXVUZCV1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGJFczdVVUZGUkN4TlFVRk5MR0ZCUVdFc1IwRkJSeXhaUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRE4wUXNTVUZCU1N4alFVRmpMRU5CUVVNN1VVRkRia0lzU1VGQlNTeFpRVUZaTEVOQlFVTXNUVUZCVFN4TFFVRkxMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNSVUZCUlR0WlFVTjBSQ3hqUVVGakxFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGRGVFUTdVVUZEUkN4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExHRkJRV0VzUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXp0SlFVTjBSQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEc5Q1FVRnZRanRSUVVOMlFpeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RlFVRkZPMWxCUXpkRExFOUJRVThzWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0VFFVTjRSVHRoUVVGTk8xbEJRMGdzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc1owUkJRV2RFTEVOQlFVTXNRMEZCUXp0VFFVTjZSVHRKUVVOTUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNSVUZCUlR0WlFVTTNReXhQUVVGUExFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJRenRUUVVOeVJEdGhRVUZOTzFsQlEwZ3NUMEZCVHl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRE8xTkJRemxDTzBsQlEwd3NRMEZCUXpzN1FVRnVSa1E3TzBkQlJVYzdRVUZEYjBJc1kwRkJUU3hIUVVGWExFVkJRVVVzUTBGQlF6dEJRVU16UXpzN1IwRkZSenRCUVVOdlFpeDFRa0ZCWlN4SFFVRlhMRU5CUVVNc1EwRkJRenRCUVVOdVJEczdSMEZGUnp0QlFVTnZRaXcwUWtGQmIwSXNSMEZCVnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTTdRVUZGTDBZN08wZEJSVWM3UVVGRGIwSXNZVUZCU3l4SFFVRlpMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRnFRamxITERCQ1FYRkdReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBhbiBlbnVtIGZvciB0aGUgYWRkcmVzcyBzZWN1cml0eSB2YWx1ZXMuXHJcbiAqL1xyXG52YXIgQWRkcmVzc1NlY3VyaXR5O1xyXG4oZnVuY3Rpb24gKEFkZHJlc3NTZWN1cml0eSkge1xyXG4gICAgQWRkcmVzc1NlY3VyaXR5W0FkZHJlc3NTZWN1cml0eVtcImxvd1wiXSA9IDFdID0gXCJsb3dcIjtcclxuICAgIEFkZHJlc3NTZWN1cml0eVtBZGRyZXNzU2VjdXJpdHlbXCJtZWRpdW1cIl0gPSAyXSA9IFwibWVkaXVtXCI7XHJcbiAgICBBZGRyZXNzU2VjdXJpdHlbQWRkcmVzc1NlY3VyaXR5W1wiaGlnaFwiXSA9IDNdID0gXCJoaWdoXCI7XHJcbn0pKEFkZHJlc3NTZWN1cml0eSA9IGV4cG9ydHMuQWRkcmVzc1NlY3VyaXR5IHx8IChleHBvcnRzLkFkZHJlc3NTZWN1cml0eSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlXUmtjbVZ6YzFObFkzVnlhWFI1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdllXUmtjbVZ6YzFObFkzVnlhWFI1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEVsQlFWa3NaVUZKV0R0QlFVcEVMRmRCUVZrc1pVRkJaVHRKUVVOMlFpeHRSRUZCVVN4RFFVRkJPMGxCUTFJc2VVUkJRVlVzUTBGQlFUdEpRVU5XTEhGRVFVRlJMRU5CUVVFN1FVRkRXaXhEUVVGRExFVkJTbGNzWlVGQlpTeEhRVUZtTEhWQ1FVRmxMRXRCUVdZc2RVSkJRV1VzVVVGSk1VSWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIGhhc2hlcy5cclxuICovXHJcbmNsYXNzIEhhc2gge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBoYXNoIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGhhc2ggVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIGhhc2ggZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIEhhc2guXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKGhhc2gpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoaGFzaCwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGhhc2ggc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gaGFzaC5sZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBIYXNoLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgaGFzaCBzaG91bGQgYmUgJHtIYXNoLkxFTkdUSH0gY2hhcmFjdGVycyBpbiBsZW5ndGhgLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIYXNoKGhhc2gpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBoYXNoIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSBoYXNoLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciBhIHZhbGlkIGhhc2ggKDgxKS5cclxuICovXHJcbkhhc2guTEVOR1RIID0gODE7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBoYXNoIGFsbCA5cy5cclxuICovXHJcbkhhc2guRU1QVFkgPSBIYXNoLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KEhhc2guTEVOR1RIKSkpO1xyXG5leHBvcnRzLkhhc2ggPSBIYXNoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhR0Z6YUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrWVhSaEwyaGhjMmd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN4clJFRkJLME03UVVGREwwTXNjVU5CUVd0RE8wRkJSV3hET3p0SFFVVkhPMEZCUTBnN1NVRmhTU3hsUVVGbE8wbEJRMllzV1VGQmIwSXNUVUZCWXp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVTXhRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCV1R0UlFVTnFReXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxHVkJRVTBzUTBGQlF5eEZRVUZGTzFsQlEzQkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERCRFFVRXdReXhEUVVGRExFTkJRVU03VTBGRGJrVTdVVUZGUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZETjBJc1NVRkJTU3hOUVVGTkxFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTjRRaXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elFrRkJjMElzU1VGQlNTeERRVUZETEUxQlFVMHNkVUpCUVhWQ0xFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpkR08xRkJSVVFzVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU51UXl4RFFVRkRPenRCUVdwRVJEczdSMEZGUnp0QlFVTnZRaXhYUVVGTkxFZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6TkRPenRIUVVWSE8wRkJRMjlDTEZWQlFVc3NSMEZCVXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCVW5KSExHOUNRVzFFUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudHMuXHJcbiAqL1xyXG5jbGFzcyBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBzaWduYXR1cmUgZnJhZ21lbnQgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBzaWduYXR1cmUgZnJhZ21lbnQgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHNob3VsZCBiZSAke1NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHNpZ25hdHVyZSBmcmFnbWVudCB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgc2lnbmF0dXJlIGZyYWdtZW50LlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQgKDIxODcpXHJcbiAqL1xyXG5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIID0gMjE4NztcclxuLyoqXHJcbiAqIEFuIGVtcHR5IHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50IGFsbCA5cy5cclxuICovXHJcblNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5FTVBUWSA9IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKSkpO1xyXG5leHBvcnRzLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJsbmJtRjBkWEpsVFdWemMyRm5aVVp5WVdkdFpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2YzJsbmJtRjBkWEpsVFdWemMyRm5aVVp5WVdkdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExIZENRVUZuUXp0UlFVTnlSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNaVUZCVFN4RFFVRkRMRVZCUVVVN1dVRkRlRVFzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc09FUkJRVGhFTEVOQlFVTXNRMEZCUXp0VFFVTjJSanRSUVVWRUxFMUJRVTBzVFVGQlRTeEhRVUZITEhkQ1FVRjNRaXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEycEVMRWxCUVVrc1RVRkJUU3hMUVVGTExIZENRVUYzUWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVNMVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXd3UTBGQk1FTXNkMEpCUVhkQ0xFTkJRVU1zVFVGQlRTeDFRa0ZCZFVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEY2trN1VVRkRSQ3hQUVVGUExFbEJRVWtzZDBKQlFYZENMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNRMEZCUXp0SlFVTnNSU3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOdVF5eERRVUZET3p0QlFXaEVSRHM3UjBGRlJ6dEJRVU52UWl3clFrRkJUU3hIUVVGWExFbEJRVWtzUTBGQlF6dEJRVU0zUXpzN1IwRkZSenRCUVVOdlFpdzRRa0ZCU3l4SFFVRTJRaXgzUWtGQmQwSXNRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMSGRDUVVGM1FpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVZKcVN5dzBSRUZyUkVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdGFncy5cclxuICovXHJcbmNsYXNzIFRhZyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRhZyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB0YWcgVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIHRhZyBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVGFnLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyh0YWcpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGFnLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdGFnIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0cnl0ZXNTdHJpbmcgPSB0YWcudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodHJ5dGVzU3RyaW5nLmxlbmd0aCA+IFRhZy5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRhZyBzaG91bGQgYmUgYXQgbW9zdCAke1RhZy5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGg6IHRyeXRlc1N0cmluZy5sZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0cnl0ZXNTdHJpbmcubGVuZ3RoIDwgVGFnLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0cnl0ZXNTdHJpbmcgKz0gXCI5XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVGFnKHRyeXRlc1N0cmluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRhZyB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgdGFnLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCB0YWcgKDI3KS5cclxuICovXHJcblRhZy5MRU5HVEggPSAyNztcclxuLyoqXHJcbiAqIEFuIGVtcHR5IHRhZyBhbGwgOXMuXHJcbiAqL1xyXG5UYWcuRU1QVFkgPSBUYWcuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoVGFnLkxFTkdUSCkpKTtcclxuZXhwb3J0cy5UYWcgPSBUYWc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHRm5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2ZEdGbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNhMFJCUVN0RE8wRkJReTlETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWVVrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEUxQlFXTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFWYzdVVUZEYUVNc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hsUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU51UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eDVRMEZCZVVNc1EwRkJReXhEUVVGRE8xTkJRMnhGTzFGQlJVUXNTVUZCU1N4WlFVRlpMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJXeERMRWxCUVVrc1dVRkJXU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTJ4RExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRFpDUVVFMlFpeEhRVUZITEVOQlFVTXNUVUZCVFN4MVFrRkJkVUlzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4WlFVRlpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU40U0R0UlFVVkVMRTlCUVU4c1dVRkJXU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTNKRExGbEJRVmtzU1VGQlNTeEhRVUZITEVOQlFVTTdVMEZEZGtJN1VVRkZSQ3hQUVVGUExFbEJRVWtzUjBGQlJ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUTJwRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVDBGQlR5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPenRCUVhSRVJEczdSMEZGUnp0QlFVTnZRaXhWUVVGTkxFZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6TkRPenRIUVVWSE8wRkJRMjlDTEZOQlFVc3NSMEZCVVN4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCVW14SExHdENRWGRFUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgYWRkcmVzc18xID0gcmVxdWlyZShcIi4vYWRkcmVzc1wiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIi4vaGFzaFwiKTtcclxuY29uc3Qgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEgPSByZXF1aXJlKFwiLi9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcIik7XHJcbmNvbnN0IHRhZ18xID0gcmVxdWlyZShcIi4vdGFnXCIpO1xyXG5jb25zdCB0cnl0ZU51bWJlcl8xID0gcmVxdWlyZShcIi4vdHJ5dGVOdW1iZXJcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJhbnNhY3Rpb25zLlxyXG4gKi9cclxuY2xhc3MgVHJhbnNhY3Rpb24ge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyYW5zYWN0aW9uIGZyb20gcGFyYW1ldGVycy5cclxuICAgICAqIEBwYXJhbSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgVGhlIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50LlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIG9ic29sZXRlVGFnIE9ic29sZXRlIHRyYW5zYWN0aW9uIHRhZy5cclxuICAgICAqIEBwYXJhbSB0aW1lc3RhbXAgVGhlIHRpbWVzdGFtcC5cclxuICAgICAqIEBwYXJhbSBjdXJyZW50SW5kZXggVGhlIGN1cnJlbnQgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0gbGFzdEluZGV4IFRoZSBsYXN0IGluZGV4LlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZSBUaGUgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIHRydW5rVHJhbnNhY3Rpb24gVGhlIHRydW5rIHRyYW5zYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIGJyYW5jaFRyYW5zYWN0aW9uIFRoZSBicmFuY2ggdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gdGFnIFRoZSB0YWcuXHJcbiAgICAgKiBAcGFyYW0gYXR0YWNobWVudFRpbWVzdGFtcCBUaGUgYXR0YWNobWVudCB0aW1lc3RhbXAuXHJcbiAgICAgKiBAcGFyYW0gYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgVGhlIGF0dGFjaG1lbnQgdGltZXN0YW1wIGxvd2VyIGJvdW5kLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kICBUaGUgYXR0YWNobWVudCB0aW1lc3RhbXAgdXBwZXIgYm91bmQuXHJcbiAgICAgKiBAcGFyYW0gbm9uY2UgVGhlIG5vbmNlLlxyXG4gICAgICogQHJldHVybnMgTmV3IGluc3RhbmNlIG9mIHRyYW5zYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVBhcmFtcyhzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIGFkZHJlc3MsIHZhbHVlLCBvYnNvbGV0ZVRhZywgdGltZXN0YW1wLCBjdXJyZW50SW5kZXgsIGxhc3RJbmRleCwgYnVuZGxlLCB0cnVua1RyYW5zYWN0aW9uLCBicmFuY2hUcmFuc2FjdGlvbiwgdGFnLCBhdHRhY2htZW50VGltZXN0YW1wLCBhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCwgYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQsIG5vbmNlKSB7XHJcbiAgICAgICAgY29uc3QgdHggPSBuZXcgVHJhbnNhY3Rpb24oKTtcclxuICAgICAgICB0eC5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQ7XHJcbiAgICAgICAgdHguYWRkcmVzcyA9IGFkZHJlc3M7XHJcbiAgICAgICAgdHgudmFsdWUgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodmFsdWUsIDExKTtcclxuICAgICAgICB0eC5vYnNvbGV0ZVRhZyA9IG9ic29sZXRlVGFnO1xyXG4gICAgICAgIHR4LnRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcih0aW1lc3RhbXApO1xyXG4gICAgICAgIHR4LmN1cnJlbnRJbmRleCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIHR4Lmxhc3RJbmRleCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihsYXN0SW5kZXgpO1xyXG4gICAgICAgIHR4LmJ1bmRsZSA9IGJ1bmRsZTtcclxuICAgICAgICB0eC50cnVua1RyYW5zYWN0aW9uID0gdHJ1bmtUcmFuc2FjdGlvbjtcclxuICAgICAgICB0eC5icmFuY2hUcmFuc2FjdGlvbiA9IGJyYW5jaFRyYW5zYWN0aW9uO1xyXG4gICAgICAgIHR4LnRhZyA9IHRhZztcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGF0dGFjaG1lbnRUaW1lc3RhbXApO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kKTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCk7XHJcbiAgICAgICAgdHgubm9uY2UgPSBub25jZTtcclxuICAgICAgICByZXR1cm4gdHg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbiBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB0cnl0ZXMgVGhlIHRyeXRlcyBmb3IgdGhlIHRoaXMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiB0aGlzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyh0cnl0ZXMpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJ5dGVzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdHJ5dGVzIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRyeXRlcy5sZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBUcmFuc2FjdGlvbi5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRyeXRlcyBtdXN0IGJlICR7VHJhbnNhY3Rpb24uTEVOR1RIfSBpbiBsZW5ndGhgLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2hlY2tJbmRleFN0YXJ0ID0gMjI3OTtcclxuICAgICAgICBjb25zdCBjaGVja0luZGV4TGVuZ3RoID0gMTY7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSB0cnl0ZXMuc3ViKGNoZWNrSW5kZXhTdGFydCwgY2hlY2tJbmRleExlbmd0aCkudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoY2hlY2sgIT09IFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnl0ZXMgYmV0d2VlbiAke2NoZWNrSW5kZXhTdGFydH0gYW5kICR7Y2hlY2tJbmRleFN0YXJ0ICsgY2hlY2tJbmRleExlbmd0aH0gc2hvdWxkIGJlIGFsbCA5c2AsIHsgY2hlY2sgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHR4ID0gbmV3IFRyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gMDtcclxuICAgICAgICB0eC5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSDtcclxuICAgICAgICB0eC5hZGRyZXNzID0gYWRkcmVzc18xLkFkZHJlc3MuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBhZGRyZXNzXzEuQWRkcmVzcy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBhZGRyZXNzXzEuQWRkcmVzcy5MRU5HVEg7XHJcbiAgICAgICAgdHgudmFsdWUgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgMTEpLCAxMSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gMTE7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIO1xyXG4gICAgICAgIHR4Lm9ic29sZXRlVGFnID0gdGFnXzEuVGFnLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdGFnXzEuVGFnLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRhZ18xLlRhZy5MRU5HVEg7XHJcbiAgICAgICAgdHgudGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmN1cnJlbnRJbmRleCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5sYXN0SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYnVuZGxlID0gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBoYXNoXzEuSGFzaC5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBoYXNoXzEuSGFzaC5MRU5HVEg7XHJcbiAgICAgICAgdHgudHJ1bmtUcmFuc2FjdGlvbiA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LmJyYW5jaFRyYW5zYWN0aW9uID0gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBoYXNoXzEuSGFzaC5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBoYXNoXzEuSGFzaC5MRU5HVEg7XHJcbiAgICAgICAgdHgudGFnID0gdGFnXzEuVGFnLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdGFnXzEuVGFnLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRhZ18xLlRhZy5MRU5HVEg7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5ub25jZSA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICByZXR1cm4gdHg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRyYW5zYWN0aW9uIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2FjdGlvbiBhcyB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDogdGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLmFkZHJlc3MsIGFkZHJlc3NfMS5BZGRyZXNzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYWRkcmVzcyBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBhZGRyZXNzOiB0aGlzLmFkZHJlc3MgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLm9ic29sZXRlVGFnLCB0YWdfMS5UYWcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBvYnNvbGV0ZVRhZyBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBvYnNvbGV0ZVRhZzogdGhpcy5vYnNvbGV0ZVRhZyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuYnVuZGxlLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGJ1bmRsZSBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBidW5kbGU6IHRoaXMuYnVuZGxlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy50cnVua1RyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRydW5rVHJhbnNhY3Rpb24gbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgdHJ1bmtUcmFuc2FjdGlvbjogdGhpcy50cnVua1RyYW5zYWN0aW9uIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5icmFuY2hUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBicmFuY2hUcmFuc2FjdGlvbiBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBicmFuY2hUcmFuc2FjdGlvbjogdGhpcy5icmFuY2hUcmFuc2FjdGlvbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMubm9uY2UsIHRhZ18xLlRhZykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIG5vbmNlIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IG5vbmNlOiB0aGlzLm5vbmNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXMgPSB0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLmFkZHJlc3MudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudmFsdWUgfHwgVHJhbnNhY3Rpb24uRU1QVFlfMTEpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFXHJcbiAgICAgICAgICAgICsgdGhpcy5vYnNvbGV0ZVRhZy50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy50aW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5jdXJyZW50SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5sYXN0SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLmJ1bmRsZS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLnRydW5rVHJhbnNhY3Rpb24udG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5icmFuY2hUcmFuc2FjdGlvbi50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy50YWcgfHwgdGhpcy5vYnNvbGV0ZVRhZykudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLm5vbmNlLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0cnl0ZXMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IFRyYW5zYWN0aW9uLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIG11c3QgYmUgJHtUcmFuc2FjdGlvbi5MRU5HVEh9IGluIGxlbmd0aCAke2xlbmd0aH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBge1xuXFx0c2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50OiBcIiR7KHRoaXMuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHx8IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRhZGRyZXNzOiBcIiR7KHRoaXMuYWRkcmVzcyB8fCBhZGRyZXNzXzEuQWRkcmVzcy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR2YWx1ZTogJHsodGhpcy52YWx1ZSB8fCBUcmFuc2FjdGlvbi5FTVBUWV8xMSkudG9OdW1iZXIoKX1cblxcdG9ic29sZXRlVGFnOiBcIiR7KHRoaXMub2Jzb2xldGVUYWcgfHwgdGFnXzEuVGFnLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdHRpbWVzdGFtcDogJHsodGhpcy50aW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0Y3VycmVudEluZGV4OiAkeyh0aGlzLmN1cnJlbnRJbmRleCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRsYXN0SW5kZXg6ICR7KHRoaXMubGFzdEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGJ1bmRsZTogXCIkeyh0aGlzLmJ1bmRsZSB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0cnVua1RyYW5zYWN0aW9uOiBcIiR7KHRoaXMudHJ1bmtUcmFuc2FjdGlvbiB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRicmFuY2hUcmFuc2FjdGlvbjogXCIkeyh0aGlzLmJyYW5jaFRyYW5zYWN0aW9uIHx8IGhhc2hfMS5IYXNoLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdHRhZzogXCIkeyh0aGlzLnRhZyB8fCB0aGlzLm9ic29sZXRlVGFnIHx8IHRhZ18xLlRhZy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRhdHRhY2htZW50VGltZXN0YW1wOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0YXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQ6ICR7KHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0YXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQ6ICR7KHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0bm9uY2U6IFwiJHsodGhpcy5ub25jZSB8fCB0YWdfMS5UYWcuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxufWA7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCB0cmFuc2FjdGlvbiAoMjY3MykuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5MRU5HVEggPSAyNjczO1xyXG4vKipcclxuICogVGhlIGxlbmd0aCBvZiBhIHZhbGlkIGNoZWNrIHZhbHVlICgxNikuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5DSEVDS19WQUxVRV9MRU5HVEggPSAxNjtcclxuLyoqXHJcbiAqIFRoZSBjaGVjayB2YWx1ZSBmb3IgYnVuZGxlcyBhbGwgOXMuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5DSEVDS19WQUxVRSA9IFwiOVwiLnJlcGVhdChUcmFuc2FjdGlvbi5DSEVDS19WQUxVRV9MRU5HVEgpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuVHJhbnNhY3Rpb24uRU1QVFlfMTEgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoMCwgMTEpO1xyXG5leHBvcnRzLlRyYW5zYWN0aW9uID0gVHJhbnNhY3Rpb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5oWTNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY21GdWMyRmpkR2x2Ymk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxHdEVRVUVyUXp0QlFVTXZReXgxUTBGQmIwTTdRVUZEY0VNc2FVTkJRVGhDTzBGQlF6bENMSGxGUVVGelJUdEJRVU4wUlN3clFrRkJORUk3UVVGRE5VSXNLME5CUVRSRE8wRkJRelZETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWjBaSkxHVkJRV1U3U1VGRFpqdEpRVU5CTEVOQlFVTTdTVUZGUkRzN096czdPenM3T3pzN096czdPenM3TzA5QmEwSkhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eDNRa0ZCYTBRc1JVRkRiRVFzVDBGQlowSXNSVUZEYUVJc1MwRkJZU3hGUVVOaUxGZEJRV2RDTEVWQlEyaENMRk5CUVdsQ0xFVkJRMnBDTEZsQlFXOUNMRVZCUTNCQ0xGTkJRV2xDTEVWQlEycENMRTFCUVZrc1JVRkRXaXhuUWtGQmMwSXNSVUZEZEVJc2FVSkJRWFZDTEVWQlEzWkNMRWRCUVZFc1JVRkRVaXh0UWtGQk1rSXNSVUZETTBJc05rSkJRWEZETEVWQlEzSkRMRFpDUVVGeFF5eEZRVU55UXl4TFFVRlZPMUZCUXk5Q0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkROMElzUlVGQlJTeERRVUZETEhkQ1FVRjNRaXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMUZCUTNaRUxFVkJRVVVzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTNKQ0xFVkJRVVVzUTBGQlF5eExRVUZMTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpkRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eFRRVUZUTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYWtRc1JVRkJSU3hEUVVGRExGbEJRVmtzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU4yUkN4RlFVRkZMRU5CUVVNc1UwRkJVeXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRMnBFTEVWQlFVVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRMjVDTEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRSUVVOMlF5eEZRVUZGTEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkRla01zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRkRZaXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dFJRVU55UlN4RlFVRkZMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1EwRkJRenRSUVVONlJpeEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjZSaXhGUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTnFRaXhQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU5rTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGak8xRkJRMjVETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNaVUZCVFN4RFFVRkRMRVZCUVVVN1dVRkRkRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc05FTkJRVFJETEVOQlFVTXNRMEZCUXp0VFFVTnlSVHRSUVVWRUxFMUJRVTBzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVNdlFpeEpRVUZKTEUxQlFVMHNTMEZCU3l4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJReTlDTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExITkNRVUZ6UWl4WFFVRlhMRU5CUVVNc1RVRkJUU3haUVVGWkxFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNwR08xRkJSVVFzVFVGQlRTeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUXpkQ0xFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRelZDTEUxQlFVMHNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zWlVGQlpTeEZRVUZGTEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZGZGtVc1NVRkJTU3hMUVVGTExFdEJRVXNzVjBGQlZ5eERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTnVReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elFrRkJjMElzWlVGQlpTeFJRVUZSTEdWQlFXVXNSMEZCUnl4blFrRkJaMElzYlVKQlFXMUNMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzUkpPMUZCUlVRc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVVTNRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYWtJc1JVRkJSU3hEUVVGRExIZENRVUYzUWl4SFFVRkhMRzFFUVVGM1FpeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeHRSRUZCZDBJc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzcElMRkZCUVZFc1NVRkJTU3h0UkVGQmQwSXNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkROVU1zUlVGQlJTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hwUWtGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRkRVVzVVVGQlVTeEpRVUZKTEdsQ1FVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRek5DTEVWQlFVVXNRMEZCUXl4TFFVRkxMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRhRVVzVVVGQlVTeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTm1MRkZCUVZFc1NVRkJTU3hYUVVGWExFTkJRVU1zYTBKQlFXdENMRU5CUVVNN1VVRkRNME1zUlVGQlJTeERRVUZETEZkQlFWY3NSMEZCUnl4VFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeEZMRkZCUVZFc1NVRkJTU3hUUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEzWkNMRVZCUVVVc1EwRkJReXhUUVVGVExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeEdMRkZCUVZFc1NVRkJTU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTnFReXhGUVVGRkxFTkJRVU1zV1VGQldTeEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlSaXhSUVVGUkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRha01zUlVGQlJTeERRVUZETEZOQlFWTXNSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRVlzVVVGQlVTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJRMnBETEVWQlFVVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1YwRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXZSQ3hSUVVGUkxFbEJRVWtzVjBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjRRaXhGUVVGRkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1YwRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjZSU3hSUVVGUkxFbEJRVWtzVjBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjRRaXhGUVVGRkxFTkJRVU1zYVVKQlFXbENMRWRCUVVjc1YwRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhSU3hSUVVGUkxFbEJRVWtzVjBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjRRaXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEZOQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNVMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE1VUXNVVUZCVVN4SlFVRkpMRk5CUVVjc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRGRrSXNSVUZCUlN4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFSaXhSUVVGUkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRha01zUlVGQlJTeERRVUZETERaQ1FVRTJRaXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUnl4UlFVRlJMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYWtNc1JVRkJSU3hEUVVGRExEWkNRVUUyUWl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxIbENRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMFJ5eFJRVUZSTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRGFrTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1IwRkJSeXhUUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxGTkJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRWRUxFOUJRVThzUlVGQlJTeERRVUZETzBsQlEyUXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeEZRVUZGTEcxRVFVRjNRaXhEUVVGRExFVkJRVVU3V1VGREwwVXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZFVWQlFYVkZMRVZCUVVVc1JVRkJSU3gzUWtGQmQwSXNSVUZCUlN4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpkS08xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNhVUpCUVU4c1EwRkJReXhGUVVGRk8xbEJRemRETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExITkVRVUZ6UkN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpGSE8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNVMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkROME1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc01FUkJRVEJFTEVWQlFVVXNSVUZCUlN4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVnN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeFhRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTjZReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4eFJFRkJjVVFzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU4yUnp0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNWMEZCU1N4RFFVRkRMRVZCUVVVN1dVRkRia1FzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc0swUkJRU3RFTEVWQlFVVXNSVUZCUlN4blFrRkJaMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzSkpPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4WFFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOd1JDeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXhuUlVGQlowVXNSVUZCUlN4RlFVRkZMR2xDUVVGcFFpeEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZUVrN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZITEVOQlFVTXNSVUZCUlR0WlFVTjJReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4dlJFRkJiMFFzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU53Unp0UlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZETlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRiRU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRNVVFzVjBGQlZ5eERRVUZETEZkQlFWYzdZMEZEZGtJc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRkRU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRemRFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU5vUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZETjBRc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRha01zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTXpReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlF6VkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlEzQkVMRU5CUVVNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRM1pGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUTJwR0xFTkJRVU1zU1VGQlNTeERRVUZETERaQ1FVRTJRaXhKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlEycEdMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkZka01zVFVGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVNM1FpeEpRVUZKTEUxQlFVMHNTMEZCU3l4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJReTlDTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExITkNRVUZ6UWl4WFFVRlhMRU5CUVVNc1RVRkJUU3hqUVVGakxFMUJRVTBzUlVGQlJTeEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOdVJ6dFJRVVZFTEU5QlFVOHNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU55UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4N0swSkJRMmRDTEVOQlFVTXNTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeEpRVUZKTEcxRVFVRjNRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRqUVVONFJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc2FVSkJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3VjBGRGVFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVN2EwSkJRM2hETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hUUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yVkJRM2hFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSVHRyUWtGREwwTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk8yVkJRM2hFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSVHRoUVVOd1JDeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1YwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHQxUWtGRGRrTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVsQlFVa3NWMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0M1FrRkRNVVFzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFbEJRVWtzVjBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdFZRVU14UlN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4VFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPM2xDUVVOc1JDeERRVUZETEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJUdHRRMEZEYkVRc1EwRkJReXhKUVVGSkxFTkJRVU1zTmtKQlFUWkNMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVN2JVTkJRM1JGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlF6ZEdMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeFRRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzBWQlEzcEVMRU5CUVVNN1NVRkRReXhEUVVGRE96dEJRWEJTUkRzN1IwRkZSenRCUVVOdlFpeHJRa0ZCVFN4SFFVRlhMRWxCUVVrc1EwRkJRenRCUVVVM1F6czdSMEZGUnp0QlFVTnZRaXc0UWtGQmEwSXNSMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkZka1E3TzBkQlJVYzdRVUZEYjBJc2RVSkJRVmNzUjBGQlZ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMEZCUlhoR0xHVkJRV1U3UVVGRFV5eHZRa0ZCVVN4SFFVRm5RaXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGcVFteEdMR3REUVhOU1F5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJpdHMuXHJcbiAqL1xyXG5jbGFzcyBUcml0cyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyaXRzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJpdHMgPSB0cml0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyaXRzIGZyb20gSW50OEFycmF5IGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRyeXRlcyB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgZG9lcyBub3QgY29udGFpbiB2YWxpZCB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIG51bWJlciBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21OdW1iZXJBcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHZhbHVlLCBOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgZG9lcyBub3QgY29udGFpbiB2YWxpZCB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyhuZXcgSW50OEFycmF5KHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModmFsdWUpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXNTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHRyaXRzID0gbmV3IEludDhBcnJheSh0cnl0ZXNTdHJpbmcubGVuZ3RoICogMyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnl0ZXNTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzU3RyaW5nLmNoYXJBdChpKSk7XHJcbiAgICAgICAgICAgIHRyaXRzW2kgKiAzXSA9IFRyaXRzLlRSWVRFU19UUklUU1tpZHhdWzBdO1xyXG4gICAgICAgICAgICB0cml0c1tpICogMyArIDFdID0gVHJpdHMuVFJZVEVTX1RSSVRTW2lkeF1bMV07XHJcbiAgICAgICAgICAgIHRyaXRzW2kgKiAzICsgMl0gPSBUcml0cy5UUllURVNfVFJJVFNbaWR4XVsyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyh0cml0cyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIG51bWJlclxyXG4gICAgICogQHBhcmFtIHZhbHVlIE51bWJlciB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbU51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBpcyBub3QgYW4gaW50ZWdlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJpdHMgPSBbXTtcclxuICAgICAgICBsZXQgYWJzb2x1dGVWYWx1ZSA9IHZhbHVlIDwgMCA/IC12YWx1ZSA6IHZhbHVlO1xyXG4gICAgICAgIHdoaWxlIChhYnNvbHV0ZVZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gYWJzb2x1dGVWYWx1ZSAlIDM7XHJcbiAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBNYXRoLmZsb29yKGFic29sdXRlVmFsdWUgLyAzKTtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmRlciA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVWYWx1ZSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyaXRzW3RyaXRzLmxlbmd0aF0gPSByZW1haW5kZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cml0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbaV0gPSAtdHJpdHNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyhuZXcgSW50OEFycmF5KHRyaXRzKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCB0d28gdHJpdHMgdG9nZXRoZXIuXHJcbiAgICAgKiBAcGFyYW0gZmlyc3QgVGhlIGZpcnN0IHRyaXQuXHJcbiAgICAgKiBAcGFyYW0gc2Vjb25kIFRoZSBzZWNvbmQgdHJpdC5cclxuICAgICAqIEByZXR1cm5zIE5ldyB0cml0IHdoaWNoIGlzIHRoZSBhZGRpdGlvbiBvZiB0aGUgYSArIGIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGQoZmlyc3QsIHNlY29uZCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShmaXJzdCwgVHJpdHMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgZmlyc3Qgc2hvdWxkIGJlIGEgdmFsaWQgVHJpdHMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2Vjb25kLCBUcml0cykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzZWNvbmRzIHNob3VsZCBiZSBhIHZhbGlkIFRyaXRzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IEludDhBcnJheShNYXRoLm1heChmaXJzdC5fdHJpdHMubGVuZ3RoLCBzZWNvbmQuX3RyaXRzLmxlbmd0aCkpO1xyXG4gICAgICAgIGxldCBjYXJyeSA9IDA7XHJcbiAgICAgICAgbGV0IGlBO1xyXG4gICAgICAgIGxldCBpQjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpQSA9IGkgPCBmaXJzdC5fdHJpdHMubGVuZ3RoID8gZmlyc3QuX3RyaXRzW2ldIDogMDtcclxuICAgICAgICAgICAgaUIgPSBpIDwgc2Vjb25kLl90cml0cy5sZW5ndGggPyBzZWNvbmQuX3RyaXRzW2ldIDogMDtcclxuICAgICAgICAgICAgY29uc3QgZkEgPSBUcml0cy5mdWxsQWRkKGlBLCBpQiwgY2FycnkpO1xyXG4gICAgICAgICAgICBvdXRbaV0gPSBmQVswXTtcclxuICAgICAgICAgICAgY2FycnkgPSBmQVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyaXRzLmZyb21BcnJheShvdXQpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgZnVsbEFkZChhLCBiLCBjKSB7XHJcbiAgICAgICAgY29uc3Qgc0EgPSBUcml0cy5zdW0oYSwgYik7XHJcbiAgICAgICAgY29uc3QgY0EgPSBUcml0cy5jb25zKGEsIGIpO1xyXG4gICAgICAgIGNvbnN0IGNCID0gVHJpdHMuY29ucyhzQSwgYyk7XHJcbiAgICAgICAgY29uc3QgY091dCA9IFRyaXRzLmFueShjQSwgY0IpO1xyXG4gICAgICAgIGNvbnN0IHNPVXQgPSBUcml0cy5zdW0oc0EsIGMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgSW50OEFycmF5KFtzT1V0LCBjT3V0XSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBzdW0oYSwgYikge1xyXG4gICAgICAgIGNvbnN0IHMgPSBhICsgYjtcclxuICAgICAgICBzd2l0Y2ggKHMpIHtcclxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIGNhc2UgLTI6IHJldHVybiAxO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBjb25zKGEsIGIpIHtcclxuICAgICAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBhbnkoYSwgYikge1xyXG4gICAgICAgIGNvbnN0IHMgPSBhICsgYjtcclxuICAgICAgICBpZiAocyA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHMgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIHRyaXRzIGFycmF5LlxyXG4gICAgICogQHJldHVybnMgQXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICB0b0FycmF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cml0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgdHJpdHMgYXJyYXkgYXMgYSBudW1iZXIgYXJyYXkuXHJcbiAgICAgKiBAcmV0dXJucyBBcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fdHJpdHMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRyaXRzIGFzIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIEluc3RhbmNlIG9mIFRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgbGV0IHRyeXRlcyA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90cml0cy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIHBvc3NpYmxlIHRyeXRlIHZhbHVlcyB0byBmaW5kIGNvcnJlY3QgdHJpdCByZXByZXNlbnRhdGlvblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRyeXRlc18xLlRyeXRlcy5BTFBIQUJFVC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRyaXRzLlRSWVRFU19UUklUU1tqXVswXSA9PT0gdGhpcy5fdHJpdHNbaV0gJiZcclxuICAgICAgICAgICAgICAgICAgICBUcml0cy5UUllURVNfVFJJVFNbal1bMV0gPT09IHRoaXMuX3RyaXRzW2kgKyAxXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFRyaXRzLlRSWVRFU19UUklUU1tqXVsyXSA9PT0gdGhpcy5fdHJpdHNbaSArIDJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5dGVzICs9IHRyeXRlc18xLlRyeXRlcy5BTFBIQUJFVC5jaGFyQXQoaik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdHJpdHMgYXMgYSBudW1iZXIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJpdHMgY29udmVydGVkIHRvIGEgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICB0b051bWJlcigpIHtcclxuICAgICAgICBsZXQgcmV0dXJuVmFsdWUgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl90cml0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHJldHVyblZhbHVlICogMyArIHRoaXMuX3RyaXRzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdoYXQgaXMgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBMZW5ndGggb2YgdGhlIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXRzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgc3ViIG9mIHRoZSB0cml0cy5cclxuICAgICAqIEBwYXJhbSBzdGFydCBUaGUgc3RhcnQgcG9zaXRpb24gdG8gZ2V0IHRoZSBzdWIuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHN1Yi5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cml0cyBzdWIuXHJcbiAgICAgKi9cclxuICAgIHN1YihzdGFydCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHN0YXJ0KSB8fCBzdGFydCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzdGFydCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IChzdGFydCArIGxlbmd0aCkgPiB0aGlzLl90cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHN0YXJ0ICsgbGVuZ3RoIG11c3QgPD0gJHt0aGlzLl90cml0cy5sZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUcml0cy5mcm9tQXJyYXkodGhpcy5fdHJpdHMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgbGVuZ3RoKSk7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblRyaXRzLlRSWVRFU19UUklUUyA9IFtcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDAsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDAsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAxLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAxLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAxLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgLTEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIC0xLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAtMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDAsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDAsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDAsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAxLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAxLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAxLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgLTEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAtMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIC0xLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDAsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAwLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMCwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAxLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgLTEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIC0xLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAtMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDAsIDBdKVxyXG5dO1xyXG5leHBvcnRzLlRyaXRzID0gVHJpdHM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISnBkSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5MGNtbDBjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNNRVZCUVhWRk8wRkJRM1pGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQmJVTkpMR1ZCUVdVN1NVRkRaaXhaUVVGdlFpeExRVUZuUWp0UlFVTm9ReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCWjBJN1VVRkRjRU1zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUlR0WlFVTjRReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4M1EwRkJkME1zUTBGQlF5eERRVUZETzFOQlEycEZPMUZCUTBRc1QwRkJUeXhKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCWlR0UlFVTjZReXhKUVVGSkxFTkJRVU1zZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUTBGQlF5eEZRVUZGTzFsQlEzSkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVU03VTBGRGFrVTdVVUZEUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVdFN1VVRkRiRU1zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeGxRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTnlReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3eVEwRkJNa01zUTBGQlF5eERRVUZETzFOQlEzQkZPMUZCUTBRc1RVRkJUU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTNSRExFMUJRVTBzUzBGQlN5eEhRVUZqTEVsQlFVa3NVMEZCVXl4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVVc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzWlVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWRUxFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bERMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRha1E3VVVGRFJDeFBRVUZQTEVsQlFVa3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaE8xRkJRMnhETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTm9ReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eERRVUZETzFOQlEzUkVPMUZCUTBRc1RVRkJUU3hMUVVGTExFZEJRV0VzUlVGQlJTeERRVUZETzFGQlF6TkNMRWxCUVVrc1lVRkJZU3hIUVVGSExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZGTDBNc1QwRkJUeXhoUVVGaExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEzUkNMRWxCUVVrc1UwRkJVeXhIUVVGSExHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEYkVNc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSVGxETEVsQlFVa3NVMEZCVXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRFppeFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMllzWVVGQllTeEZRVUZGTEVOQlFVTTdZVUZEYmtJN1dVRkZSQ3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVOdVF6dFJRVU5FTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVOWUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVOdVF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEZUVJN1UwRkRTanRSUVVWRUxFOUJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFWa3NSVUZCUlN4TlFVRmhPMUZCUTNwRExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEY0VNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dFRRVU51UlR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGNrTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zTkVOQlFUUkRMRU5CUVVNc1EwRkJRenRUUVVOeVJUdFJRVVZFTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJReTlGTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOa0xFbEJRVWtzUlVGQlJTeERRVUZETzFGQlExQXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkZVQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVVnFReXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtRc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkVMRTFCUVUwc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU40UXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJZc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnFRanRSUVVWRUxFOUJRVThzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRPMUZCUTJ4RUxFMUJRVTBzUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6TkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF5OUNMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVGxDTEU5QlFVOHNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk03VVVGRGJrTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZvUWl4UlFVRlJMRU5CUVVNc1JVRkJSVHRaUVVOUUxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1FpeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRGJFSXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRGNrSTdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRjRU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTFRc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRFdqdFJRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTJJc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVE8xRkJRMjVETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRmFFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRMUFzVDBGQlR5eERRVUZETEVOQlFVTTdVMEZEV2p0aFFVRk5MRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU5rTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRZanRSUVVWRUxFOUJRVThzUTBGQlF5eERRVUZETzBsQlEySXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEU5QlFVODdVVUZEVml4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGRrSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEdGQlFXRTdVVUZEYUVJc1QwRkJUeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOdVF5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEVsQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWb1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU0xUXl3MlJVRkJOa1U3V1VGRE4wVXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEdWQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTTNReXhKUVVGSkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRek5ETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTXZReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVU5xUkN4TlFVRk5MRWxCUVVrc1pVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM0JETEUxQlFVMDdhVUpCUTFRN1lVRkRTanRUUVVOS08xRkJSVVFzVDBGQlR5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM0pETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NTVUZCU1N4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSWEJDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZET1VNc1YwRkJWeXhIUVVGSExGZEJRVmNzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5zUkR0UlFVVkVMRTlCUVU4c1YwRkJWeXhEUVVGRE8wbEJRM1pDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTzFGQlExUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU01UWl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hIUVVGSExFTkJRVU1zUzBGQllTeEZRVUZGTEUxQlFXTTdVVUZEY0VNc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZETjBNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNhVU5CUVdsRExFTkJRVU1zUTBGQlF6dFRRVU14UkR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU14UlN4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzRRa0ZCT0VJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpORk8xRkJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU55UlN4RFFVRkRPenRCUVhaUlJDeGxRVUZsTzBGQlExTXNhMEpCUVZrc1IwRkJaMEk3U1VGRGFFUXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZUVJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXpRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6RkNMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE1VSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNeFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE1VSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UTBGRE5VSXNRMEZCUXp0QlFUbENUaXh6UWtFd1VVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCIuL3RyaXRzXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyeXRlIG51bWJlci5cclxuICovXHJcbmNsYXNzIFRyeXRlTnVtYmVyIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGUgbnVtYmVyIGZyb20gbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdmFsdWUgdG8gY3JlYXRlIHRoZSBvYmplY3QgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIHRyeXRlIGxlbmd0aCB0byBwYWQgdGhlIG51bWJlciB3aXRoLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJ5dGVOdW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tTnVtYmVyKHZhbHVlLCBsZW5ndGggPSBUcnl0ZU51bWJlci5MRU5HVEhfOSkge1xyXG4gICAgICAgIGxldCB0cnl0ZXM7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggc2hvdWxkIGJlIGEgbnVtYmVyID4gMFwiLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0cnl0ZXMgPSBcIjlcIi5yZXBlYXQobGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgaXMgbm90IGFuIGludGVnZXJcIiwgeyB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0cml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbU51bWJlcih2YWx1ZSkudG9OdW1iZXJBcnJheSgpO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJpdHMubGVuZ3RoIDwgbGVuZ3RoICogMykge1xyXG4gICAgICAgICAgICAgICAgdHJpdHMucHVzaCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnl0ZXMgPSB0cml0c18xLlRyaXRzLmZyb21OdW1iZXJBcnJheSh0cml0cykudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlTnVtYmVyKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cnl0ZSBudW1iZXIgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB2YWx1ZSB0byBjcmVhdGUgdGhlIG9iamVjdCBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgdHJ5dGUgbGVuZ3RoIHRvIHBhZCB0aGUgbnVtYmVyIHdpdGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcnl0ZU51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModmFsdWUsIGxlbmd0aCA9IFRyeXRlTnVtYmVyLkxFTkdUSF85KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRyeXRlU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGxlbmd0aCBzaG91bGQgYmUgYSBudW1iZXIgPiAwXCIsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJ5dGVTdHJpbmcubGVuZ3RoID4gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgY29udGFpbnMgdG9vIG1hbnkgY2hhcmFjdGVyc1wiLCB7IGxlbmd0aDogdHJ5dGVTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodHJ5dGVTdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRyeXRlU3RyaW5nICs9IFwiOVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlTnVtYmVyKHRyeXRlU3RyaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJ5dGUgbnVtYmVyIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSB0cnl0ZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cnl0ZSBudW1iZXIgdG8gbnVtYmVyLlxyXG4gICAgICogQHJldHVybnMgbnVtYmVyIHZhbHVlIG9mIHRoZSB0cnl0ZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKSkudG9OdW1iZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB2YWx1ZU9mKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIExlbmd0aCBvZiBhIG51bWJlciB0aGF0IHVzZXMgOSB0cnl0ZXMuXHJcbiAqL1xyXG5Ucnl0ZU51bWJlci5MRU5HVEhfOSA9IDk7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSA5IGxlbmd0aCB0cnl0ZSBudW1iZXIuXHJcbiAqL1xyXG5Ucnl0ZU51bWJlci5FTVBUWV85ID0gVHJ5dGVOdW1iZXIuZnJvbU51bWJlcigwLCBUcnl0ZU51bWJlci5MRU5HVEhfOSk7XHJcbmV4cG9ydHMuVHJ5dGVOdW1iZXIgPSBUcnl0ZU51bWJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKNWRHVk9kVzFpWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOTBjbmwwWlU1MWJXSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zYlVOQlFXZERPMEZCUTJoRExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1YwRkJWeXhEUVVGRExGRkJRVkU3VVVGRGVrVXNTVUZCU1N4TlFVRk5MRU5CUVVNN1VVRkZXQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4dFEwRkJiVU1zUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRlRVU3VVVGRlJDeEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6ZENMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUXk5Q08yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUTJoRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRFpDUVVFMlFpeEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVOcVJUdFpRVVZFTEUxQlFVMHNTMEZCU3l4SFFVRkhMR0ZCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNN1dVRkZkRVFzVDBGQlR5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlF6bENMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYWtJN1dVRkZSQ3hOUVVGTkxFZEJRVWNzWVVGQlN5eERRVUZETEdWQlFXVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0VFFVTXZSRHRSUVVWRUxFOUJRVThzU1VGQlNTeFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRia01zUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaExFVkJRVVVzVTBGQmFVSXNWMEZCVnl4RFFVRkRMRkZCUVZFN1VVRkRla1VzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeGxRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTnlReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3eVEwRkJNa01zUTBGQlF5eERRVUZETzFOQlEzQkZPMUZCUTBRc1NVRkJTU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlc1RExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRzFEUVVGdFF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVONFJUdFJRVVZFTEVsQlFVa3NWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFVkJRVVU3V1VGRE4wSXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZDBOQlFYZERMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRha2M3VVVGRlJDeFBRVUZQTEZkQlFWY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hGUVVGRk8xbEJRMmhETEZkQlFWY3NTVUZCU1N4SFFVRkhMRU5CUVVNN1UwRkRkRUk3VVVGRlJDeFBRVUZQTEVsQlFVa3NWMEZCVnl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wbEJRM2hETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NUMEZCVHl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTXpReXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzWVVGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRM2hGTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFBRVUZQTzFGQlExWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRE0wSXNRMEZCUXpzN1FVRXhSMFE3TzBkQlJVYzdRVUZEYjBJc2IwSkJRVkVzUjBGQlZ5eERRVUZETEVOQlFVTTdRVUZETlVNN08wZEJSVWM3UVVGRGIwSXNiVUpCUVU4c1IwRkJaMElzVjBGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBGQlVteEhMR3REUVRSSFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJ5dGVzLlxyXG4gKi9cclxuY2xhc3MgVHJ5dGVzIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGVzIGZyb20gYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcgdG8gY3JlYXRlIHRoZSB0cnl0ZXMgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggQW4gb3B0aW9uYWwgdmFsaWRhdGlvbiBsZW5ndGggZm9yIHRoZSB0cnl0ZXMsIDAgbWVhbnMgaWdub3JlIGxlbmd0aC5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21TdHJpbmcodmFsdWUsIGxlbmd0aCA9IDApIHtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghVHJ5dGVzLmlzVmFsaWQodmFsdWUsIGxlbmd0aCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBhbmQgbGVuZ3RoIGRvIG5vdCBjb250YWluIHZhbGlkIHRyeXRlc1wiLCB7IHZhbHVlLCBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJ5dGVzKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgdmFsdWUgY29udGFpbiB2YWxpZCB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcgdG8gdmFsaWRhdGUgYXMgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBBbiBvcHRpb25hbCB2YWxpZGF0aW9uIGxlbmd0aCBmb3IgdGhlIHRyeXRlcywgMCBtZWFucyBpZ25vcmUgbGVuZ3RoLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgaW5wdXQgd2FzIHZhbGlkIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVmFsaWQodmFsdWUsIGxlbmd0aCA9IDApIHtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5bOUEtWl17JHtsZW5ndGggPyBsZW5ndGggOiBcIjAsXCJ9fSRgKS50ZXN0KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRyeXRlcyB0byBhIHN0cmluZy5cclxuICAgICAqIEByZXR1cm5zIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHN1YiBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbiB0byBnZXQgdGhlIHN1Yi5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3ViLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBzdWIuXHJcbiAgICAgKi9cclxuICAgIHN1YihzdGFydCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHN0YXJ0KSB8fCBzdGFydCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzdGFydCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IChzdGFydCArIGxlbmd0aCkgPiB0aGlzLl90cnl0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBzdGFydCArIGxlbmd0aCBtdXN0IDw9ICR7dGhpcy5fdHJ5dGVzLmxlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcy5zdWJzdHIoc3RhcnQsIGxlbmd0aCkpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBBbGwgdGhlIGNoYXJhY3RlcnMgdGhhdCBjYW4gYmUgdXNlZCBpbiB0cnl0ZXMuXHJcbiAqL1xyXG5Ucnl0ZXMuQUxQSEFCRVQgPSBcIjlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xyXG5leHBvcnRzLlRyeXRlcyA9IFRyeXRlcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKNWRHVnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2ZEhKNWRHVnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzTkVWQlFYbEZPMEZCUTNwRkxHdEVRVUVyUXp0QlFVVXZRenM3UjBGRlJ6dEJRVU5JTzBsQlUwa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1EwRkJRenRSUVVOMFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZETDBJc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNjME5CUVhORExFTkJRVU1zUTBGQlF6dFRRVU12UkR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU03VTBGRGJFUTdVVUZEUkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2EwUkJRV3RFTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU01Ump0UlFVTkVMRTlCUVU4c1NVRkJTU3hOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETjBJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRmhMRVZCUVVVc1UwRkJhVUlzUTBGQlF6dFJRVU51UkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRMMElzVDBGQlR5eExRVUZMTEVOQlFVTTdVMEZEYUVJN1lVRkJUVHRaUVVOSUxFOUJRVThzU1VGQlNTeE5RVUZOTEVOQlFVTXNWMEZCVnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEZUVVN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1RVRkJUVHRSUVVOVUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NSMEZCUnl4RFFVRkRMRXRCUVdFc1JVRkJSU3hOUVVGak8xRkJRM0JETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRemRETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHbERRVUZwUXl4RFFVRkRMRU5CUVVNN1UwRkRNVVE3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRNMFVzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc09FSkJRVGhDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU0xUlR0UlFVTkVMRTlCUVU4c1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnFSU3hEUVVGRE96dEJRVFZGUkRzN1IwRkZSenRCUVVOWExHVkJRVkVzUjBGQlZ5dzJRa0ZCTmtJc1EwRkJRenRCUVVwdVJTeDNRa0U0UlVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL2NvcmVFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgZGF0YSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIERhdGFFcnJvciBleHRlbmRzIGNvcmVFcnJvcl8xLkNvcmVFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBEYXRhRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKTtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiRGF0YVwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGF0YUVycm9yID0gRGF0YUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR0YwWVVWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDJSaGRHRkZjbkp2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYjBWQlFXbEZPMEZCUldwRk96dEhRVVZITzBGQlEwZ3NaVUZCZFVJc1UwRkJVU3h4UWtGQlV6dEpRVU53UXpzN096czdUMEZMUnp0SlFVTklMRmxCUVZrc1QwRkJaU3hGUVVGRkxGVkJRV3RETEVWQlFVVXNWVUZCYTBJN1VVRkRMMFVzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGRrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRGVrSXNRMEZCUXp0RFFVTktPMEZCV0VRc09FSkJWME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBTaGEzIGltcGxlbWVudGF0aW9uLlxyXG4gKi9cclxuY2xhc3MgU2hhMyB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBTSEEzLlxyXG4gICAgICogQHBhcmFtIGJpdHMgVGhlIG51bWJlciBvZiBpbnB1dCBiaXRzLlxyXG4gICAgICogQHBhcmFtIHBhZGRpbmcgVGhlIHBhZGRpbmcgdG8gdXNlLlxyXG4gICAgICogQHBhcmFtIG91dHB1dEJpdHMgVGhlIG51bWJlciBvZiBvdXRwdXQgYml0cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYml0cywgcGFkZGluZywgb3V0cHV0Qml0cykge1xyXG4gICAgICAgIHRoaXMuX3BhZGRpbmcgPSBwYWRkaW5nO1xyXG4gICAgICAgIHRoaXMuX291dHB1dEJpdHMgPSBvdXRwdXRCaXRzO1xyXG4gICAgICAgIHRoaXMuX2Jsb2NrQ291bnQgPSAoMTYwMCAtIChiaXRzIDw8IDEpKSA+PiA1O1xyXG4gICAgICAgIHRoaXMuX2J5dGVDb3VudCA9IHRoaXMuX2Jsb2NrQ291bnQgPDwgMjtcclxuICAgICAgICB0aGlzLl9vdXRwdXRCbG9ja3MgPSBvdXRwdXRCaXRzID4+IDU7XHJcbiAgICAgICAgdGhpcy5fZXh0cmFCeXRlcyA9IChvdXRwdXRCaXRzICYgMzEpID4+IDM7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgZGlnZXN0LlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9yZXNldCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fYmxvY2sgPSAwO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gMDtcclxuICAgICAgICB0aGlzLl9ibG9ja3MgPSBuZXcgVWludDMyQXJyYXkodGhpcy5fYmxvY2tDb3VudCArIDEpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gbmV3IFVpbnQzMkFycmF5KDUwKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBkaWdlc3QuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgQXJyYXkgb2YgZGF0YSB0byB1c2UgaW4gdGhlIHVwZGF0ZS5cclxuICAgICAqL1xyXG4gICAgdXBkYXRlKGlucHV0KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGlucHV0LCBBcnJheUJ1ZmZlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJJbnB1dCBpcyBub3Qgb2YgdHlwZSBBcnJheUJ1ZmZlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KGlucHV0KTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBtZXNzYWdlLmxlbmd0aDtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVzZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbMF0gPSB0aGlzLl9ibG9jaztcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCB0aGlzLl9ibG9ja0NvdW50ICsgMTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2ldID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGkgPSB0aGlzLl9zdGFydDsgaW5kZXggPCBsZW5ndGggJiYgaSA8IHRoaXMuX2J5dGVDb3VudDsgKytpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2kgPj4gMl0gfD0gbWVzc2FnZVtpbmRleF0gPDwgU2hhMy5TSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sYXN0Qnl0ZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy5fYnl0ZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCA9IGkgLSB0aGlzLl9ieXRlQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9jayA9IHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja0NvdW50XTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9ibG9ja0NvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpXSBePSB0aGlzLl9ibG9ja3NbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtlY2Nha1Blcm11dGF0aW9uKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRmluYWxpemUgYW5kIHJldHVybiB0aGUgaGFzaCBmb3IgdGhlIGRpZ2VzdCwgd2lsbCBhbHNvIHJlc2V0IHRoZSBzdGF0ZS5cclxuICAgICAqIEByZXR1cm5zIEFycmF5IGJ1ZmZlciBjb250YWluaW5nIHRoZSBkaWdlc3QuXHJcbiAgICAgKi9cclxuICAgIGRpZ2VzdCgpIHtcclxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICBjb25zdCBieXRlcyA9IHRoaXMuX291dHB1dEJpdHMgPj4gMztcclxuICAgICAgICBsZXQgYnVmZmVyO1xyXG4gICAgICAgIGlmICh0aGlzLl9leHRyYUJ5dGVzKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcigodGhpcy5fb3V0cHV0QmxvY2tzICsgMSkgPDwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcnJheSA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xyXG4gICAgICAgIHdoaWxlIChqIDwgdGhpcy5fb3V0cHV0QmxvY2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9ibG9ja0NvdW50ICYmIGogPCB0aGlzLl9vdXRwdXRCbG9ja3M7ICsraSwgKytqKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheVtqXSA9IHRoaXMuX3N0YXRlW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9leHRyYUJ5dGVzKSB7XHJcbiAgICAgICAgICAgIGFycmF5W2ldID0gdGhpcy5fc3RhdGVbaV07XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IGJ1ZmZlci5zbGljZSgwLCBieXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBmaW5hbGl6ZSgpIHtcclxuICAgICAgICBsZXQgaSA9IHRoaXMuX2xhc3RCeXRlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2kgPj4gMl0gfD0gdGhpcy5fcGFkZGluZ1tpICYgM107XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RCeXRlSW5kZXggPT09IHRoaXMuX2J5dGVDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9ja3NbMF0gPSB0aGlzLl9ibG9ja3NbdGhpcy5fYmxvY2tDb3VudF07XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCB0aGlzLl9ibG9ja0NvdW50ICsgMTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbaV0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja0NvdW50IC0gMV0gfD0gMHg4MDAwMDAwMDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fYmxvY2tDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlW2ldIF49IHRoaXMuX2Jsb2Nrc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rZWNjYWtQZXJtdXRhdGlvbih0aGlzLl9zdGF0ZSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGtlY2Nha1Blcm11dGF0aW9uKHMpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvblxyXG4gICAgICAgIGxldCBoLCBsLCBuLCBjMCwgYzEsIGMyLCBjMywgYzQsIGM1LCBjNiwgYzcsIGM4LCBjOSwgYjAsIGIxLCBiMiwgYjMsIGI0LCBiNSwgYjYsIGI3LCBiOCwgYjksIGIxMCwgYjExLCBiMTIsIGIxMywgYjE0LCBiMTUsIGIxNiwgYjE3LCBiMTgsIGIxOSwgYjIwLCBiMjEsIGIyMiwgYjIzLCBiMjQsIGIyNSwgYjI2LCBiMjcsIGIyOCwgYjI5LCBiMzAsIGIzMSwgYjMyLCBiMzMsIGIzNCwgYjM1LCBiMzYsIGIzNywgYjM4LCBiMzksIGI0MCwgYjQxLCBiNDIsIGI0MywgYjQ0LCBiNDUsIGI0NiwgYjQ3LCBiNDgsIGI0OTtcclxuICAgICAgICBmb3IgKG4gPSAwOyBuIDwgNDg7IG4gKz0gMikge1xyXG4gICAgICAgICAgICBjMCA9IHNbMF0gXiBzWzEwXSBeIHNbMjBdIF4gc1szMF0gXiBzWzQwXTtcclxuICAgICAgICAgICAgYzEgPSBzWzFdIF4gc1sxMV0gXiBzWzIxXSBeIHNbMzFdIF4gc1s0MV07XHJcbiAgICAgICAgICAgIGMyID0gc1syXSBeIHNbMTJdIF4gc1syMl0gXiBzWzMyXSBeIHNbNDJdO1xyXG4gICAgICAgICAgICBjMyA9IHNbM10gXiBzWzEzXSBeIHNbMjNdIF4gc1szM10gXiBzWzQzXTtcclxuICAgICAgICAgICAgYzQgPSBzWzRdIF4gc1sxNF0gXiBzWzI0XSBeIHNbMzRdIF4gc1s0NF07XHJcbiAgICAgICAgICAgIGM1ID0gc1s1XSBeIHNbMTVdIF4gc1syNV0gXiBzWzM1XSBeIHNbNDVdO1xyXG4gICAgICAgICAgICBjNiA9IHNbNl0gXiBzWzE2XSBeIHNbMjZdIF4gc1szNl0gXiBzWzQ2XTtcclxuICAgICAgICAgICAgYzcgPSBzWzddIF4gc1sxN10gXiBzWzI3XSBeIHNbMzddIF4gc1s0N107XHJcbiAgICAgICAgICAgIGM4ID0gc1s4XSBeIHNbMThdIF4gc1syOF0gXiBzWzM4XSBeIHNbNDhdO1xyXG4gICAgICAgICAgICBjOSA9IHNbOV0gXiBzWzE5XSBeIHNbMjldIF4gc1szOV0gXiBzWzQ5XTtcclxuICAgICAgICAgICAgaCA9IGM4IF4gKChjMiA8PCAxKSB8IChjMyA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGM5IF4gKChjMyA8PCAxKSB8IChjMiA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1swXSBePSBoO1xyXG4gICAgICAgICAgICBzWzFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDFdIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjMCBeICgoYzQgPDwgMSkgfCAoYzUgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjMSBeICgoYzUgPDwgMSkgfCAoYzQgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbMl0gXj0gaDtcclxuICAgICAgICAgICAgc1szXSBePSBsO1xyXG4gICAgICAgICAgICBzWzEyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzEzXSBePSBsO1xyXG4gICAgICAgICAgICBzWzIyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzIzXSBePSBsO1xyXG4gICAgICAgICAgICBzWzMyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzMzXSBePSBsO1xyXG4gICAgICAgICAgICBzWzQyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzQzXSBePSBsO1xyXG4gICAgICAgICAgICBoID0gYzIgXiAoKGM2IDw8IDEpIHwgKGM3ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzMgXiAoKGM3IDw8IDEpIHwgKGM2ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzRdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNV0gXj0gbDtcclxuICAgICAgICAgICAgc1sxNF0gXj0gaDtcclxuICAgICAgICAgICAgc1sxNV0gXj0gbDtcclxuICAgICAgICAgICAgc1syNF0gXj0gaDtcclxuICAgICAgICAgICAgc1syNV0gXj0gbDtcclxuICAgICAgICAgICAgc1szNF0gXj0gaDtcclxuICAgICAgICAgICAgc1szNV0gXj0gbDtcclxuICAgICAgICAgICAgc1s0NF0gXj0gaDtcclxuICAgICAgICAgICAgc1s0NV0gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGM0IF4gKChjOCA8PCAxKSB8IChjOSA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGM1IF4gKChjOSA8PCAxKSB8IChjOCA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1s2XSBePSBoO1xyXG4gICAgICAgICAgICBzWzddIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTddIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjddIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzddIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDddIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjNiBeICgoYzAgPDwgMSkgfCAoYzEgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjNyBeICgoYzEgPDwgMSkgfCAoYzAgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbOF0gXj0gaDtcclxuICAgICAgICAgICAgc1s5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzE4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzE5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzI4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzI5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzM4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzM5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzQ4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzQ5XSBePSBsO1xyXG4gICAgICAgICAgICBiMCA9IHNbMF07XHJcbiAgICAgICAgICAgIGIxID0gc1sxXTtcclxuICAgICAgICAgICAgYjMyID0gKHNbMTFdIDw8IDQpIHwgKHNbMTBdID4+PiAyOCk7XHJcbiAgICAgICAgICAgIGIzMyA9IChzWzEwXSA8PCA0KSB8IChzWzExXSA+Pj4gMjgpO1xyXG4gICAgICAgICAgICBiMTQgPSAoc1syMF0gPDwgMykgfCAoc1syMV0gPj4+IDI5KTtcclxuICAgICAgICAgICAgYjE1ID0gKHNbMjFdIDw8IDMpIHwgKHNbMjBdID4+PiAyOSk7XHJcbiAgICAgICAgICAgIGI0NiA9IChzWzMxXSA8PCA5KSB8IChzWzMwXSA+Pj4gMjMpO1xyXG4gICAgICAgICAgICBiNDcgPSAoc1szMF0gPDwgOSkgfCAoc1szMV0gPj4+IDIzKTtcclxuICAgICAgICAgICAgYjI4ID0gKHNbNDBdIDw8IDE4KSB8IChzWzQxXSA+Pj4gMTQpO1xyXG4gICAgICAgICAgICBiMjkgPSAoc1s0MV0gPDwgMTgpIHwgKHNbNDBdID4+PiAxNCk7XHJcbiAgICAgICAgICAgIGIyMCA9IChzWzJdIDw8IDEpIHwgKHNbM10gPj4+IDMxKTtcclxuICAgICAgICAgICAgYjIxID0gKHNbM10gPDwgMSkgfCAoc1syXSA+Pj4gMzEpO1xyXG4gICAgICAgICAgICBiMiA9IChzWzEzXSA8PCAxMikgfCAoc1sxMl0gPj4+IDIwKTtcclxuICAgICAgICAgICAgYjMgPSAoc1sxMl0gPDwgMTIpIHwgKHNbMTNdID4+PiAyMCk7XHJcbiAgICAgICAgICAgIGIzNCA9IChzWzIyXSA8PCAxMCkgfCAoc1syM10gPj4+IDIyKTtcclxuICAgICAgICAgICAgYjM1ID0gKHNbMjNdIDw8IDEwKSB8IChzWzIyXSA+Pj4gMjIpO1xyXG4gICAgICAgICAgICBiMTYgPSAoc1szM10gPDwgMTMpIHwgKHNbMzJdID4+PiAxOSk7XHJcbiAgICAgICAgICAgIGIxNyA9IChzWzMyXSA8PCAxMykgfCAoc1szM10gPj4+IDE5KTtcclxuICAgICAgICAgICAgYjQ4ID0gKHNbNDJdIDw8IDIpIHwgKHNbNDNdID4+PiAzMCk7XHJcbiAgICAgICAgICAgIGI0OSA9IChzWzQzXSA8PCAyKSB8IChzWzQyXSA+Pj4gMzApO1xyXG4gICAgICAgICAgICBiNDAgPSAoc1s1XSA8PCAzMCkgfCAoc1s0XSA+Pj4gMik7XHJcbiAgICAgICAgICAgIGI0MSA9IChzWzRdIDw8IDMwKSB8IChzWzVdID4+PiAyKTtcclxuICAgICAgICAgICAgYjIyID0gKHNbMTRdIDw8IDYpIHwgKHNbMTVdID4+PiAyNik7XHJcbiAgICAgICAgICAgIGIyMyA9IChzWzE1XSA8PCA2KSB8IChzWzE0XSA+Pj4gMjYpO1xyXG4gICAgICAgICAgICBiNCA9IChzWzI1XSA8PCAxMSkgfCAoc1syNF0gPj4+IDIxKTtcclxuICAgICAgICAgICAgYjUgPSAoc1syNF0gPDwgMTEpIHwgKHNbMjVdID4+PiAyMSk7XHJcbiAgICAgICAgICAgIGIzNiA9IChzWzM0XSA8PCAxNSkgfCAoc1szNV0gPj4+IDE3KTtcclxuICAgICAgICAgICAgYjM3ID0gKHNbMzVdIDw8IDE1KSB8IChzWzM0XSA+Pj4gMTcpO1xyXG4gICAgICAgICAgICBiMTggPSAoc1s0NV0gPDwgMjkpIHwgKHNbNDRdID4+PiAzKTtcclxuICAgICAgICAgICAgYjE5ID0gKHNbNDRdIDw8IDI5KSB8IChzWzQ1XSA+Pj4gMyk7XHJcbiAgICAgICAgICAgIGIxMCA9IChzWzZdIDw8IDI4KSB8IChzWzddID4+PiA0KTtcclxuICAgICAgICAgICAgYjExID0gKHNbN10gPDwgMjgpIHwgKHNbNl0gPj4+IDQpO1xyXG4gICAgICAgICAgICBiNDIgPSAoc1sxN10gPDwgMjMpIHwgKHNbMTZdID4+PiA5KTtcclxuICAgICAgICAgICAgYjQzID0gKHNbMTZdIDw8IDIzKSB8IChzWzE3XSA+Pj4gOSk7XHJcbiAgICAgICAgICAgIGIyNCA9IChzWzI2XSA8PCAyNSkgfCAoc1syN10gPj4+IDcpO1xyXG4gICAgICAgICAgICBiMjUgPSAoc1syN10gPDwgMjUpIHwgKHNbMjZdID4+PiA3KTtcclxuICAgICAgICAgICAgYjYgPSAoc1szNl0gPDwgMjEpIHwgKHNbMzddID4+PiAxMSk7XHJcbiAgICAgICAgICAgIGI3ID0gKHNbMzddIDw8IDIxKSB8IChzWzM2XSA+Pj4gMTEpO1xyXG4gICAgICAgICAgICBiMzggPSAoc1s0N10gPDwgMjQpIHwgKHNbNDZdID4+PiA4KTtcclxuICAgICAgICAgICAgYjM5ID0gKHNbNDZdIDw8IDI0KSB8IChzWzQ3XSA+Pj4gOCk7XHJcbiAgICAgICAgICAgIGIzMCA9IChzWzhdIDw8IDI3KSB8IChzWzldID4+PiA1KTtcclxuICAgICAgICAgICAgYjMxID0gKHNbOV0gPDwgMjcpIHwgKHNbOF0gPj4+IDUpO1xyXG4gICAgICAgICAgICBiMTIgPSAoc1sxOF0gPDwgMjApIHwgKHNbMTldID4+PiAxMik7XHJcbiAgICAgICAgICAgIGIxMyA9IChzWzE5XSA8PCAyMCkgfCAoc1sxOF0gPj4+IDEyKTtcclxuICAgICAgICAgICAgYjQ0ID0gKHNbMjldIDw8IDcpIHwgKHNbMjhdID4+PiAyNSk7XHJcbiAgICAgICAgICAgIGI0NSA9IChzWzI4XSA8PCA3KSB8IChzWzI5XSA+Pj4gMjUpO1xyXG4gICAgICAgICAgICBiMjYgPSAoc1szOF0gPDwgOCkgfCAoc1szOV0gPj4+IDI0KTtcclxuICAgICAgICAgICAgYjI3ID0gKHNbMzldIDw8IDgpIHwgKHNbMzhdID4+PiAyNCk7XHJcbiAgICAgICAgICAgIGI4ID0gKHNbNDhdIDw8IDE0KSB8IChzWzQ5XSA+Pj4gMTgpO1xyXG4gICAgICAgICAgICBiOSA9IChzWzQ5XSA8PCAxNCkgfCAoc1s0OF0gPj4+IDE4KTtcclxuICAgICAgICAgICAgc1swXSA9IGIwIF4gKH5iMiAmIGI0KTtcclxuICAgICAgICAgICAgc1sxXSA9IGIxIF4gKH5iMyAmIGI1KTtcclxuICAgICAgICAgICAgc1sxMF0gPSBiMTAgXiAofmIxMiAmIGIxNCk7XHJcbiAgICAgICAgICAgIHNbMTFdID0gYjExIF4gKH5iMTMgJiBiMTUpO1xyXG4gICAgICAgICAgICBzWzIwXSA9IGIyMCBeICh+YjIyICYgYjI0KTtcclxuICAgICAgICAgICAgc1syMV0gPSBiMjEgXiAofmIyMyAmIGIyNSk7XHJcbiAgICAgICAgICAgIHNbMzBdID0gYjMwIF4gKH5iMzIgJiBiMzQpO1xyXG4gICAgICAgICAgICBzWzMxXSA9IGIzMSBeICh+YjMzICYgYjM1KTtcclxuICAgICAgICAgICAgc1s0MF0gPSBiNDAgXiAofmI0MiAmIGI0NCk7XHJcbiAgICAgICAgICAgIHNbNDFdID0gYjQxIF4gKH5iNDMgJiBiNDUpO1xyXG4gICAgICAgICAgICBzWzJdID0gYjIgXiAofmI0ICYgYjYpO1xyXG4gICAgICAgICAgICBzWzNdID0gYjMgXiAofmI1ICYgYjcpO1xyXG4gICAgICAgICAgICBzWzEyXSA9IGIxMiBeICh+YjE0ICYgYjE2KTtcclxuICAgICAgICAgICAgc1sxM10gPSBiMTMgXiAofmIxNSAmIGIxNyk7XHJcbiAgICAgICAgICAgIHNbMjJdID0gYjIyIF4gKH5iMjQgJiBiMjYpO1xyXG4gICAgICAgICAgICBzWzIzXSA9IGIyMyBeICh+YjI1ICYgYjI3KTtcclxuICAgICAgICAgICAgc1szMl0gPSBiMzIgXiAofmIzNCAmIGIzNik7XHJcbiAgICAgICAgICAgIHNbMzNdID0gYjMzIF4gKH5iMzUgJiBiMzcpO1xyXG4gICAgICAgICAgICBzWzQyXSA9IGI0MiBeICh+YjQ0ICYgYjQ2KTtcclxuICAgICAgICAgICAgc1s0M10gPSBiNDMgXiAofmI0NSAmIGI0Nyk7XHJcbiAgICAgICAgICAgIHNbNF0gPSBiNCBeICh+YjYgJiBiOCk7XHJcbiAgICAgICAgICAgIHNbNV0gPSBiNSBeICh+YjcgJiBiOSk7XHJcbiAgICAgICAgICAgIHNbMTRdID0gYjE0IF4gKH5iMTYgJiBiMTgpO1xyXG4gICAgICAgICAgICBzWzE1XSA9IGIxNSBeICh+YjE3ICYgYjE5KTtcclxuICAgICAgICAgICAgc1syNF0gPSBiMjQgXiAofmIyNiAmIGIyOCk7XHJcbiAgICAgICAgICAgIHNbMjVdID0gYjI1IF4gKH5iMjcgJiBiMjkpO1xyXG4gICAgICAgICAgICBzWzM0XSA9IGIzNCBeICh+YjM2ICYgYjM4KTtcclxuICAgICAgICAgICAgc1szNV0gPSBiMzUgXiAofmIzNyAmIGIzOSk7XHJcbiAgICAgICAgICAgIHNbNDRdID0gYjQ0IF4gKH5iNDYgJiBiNDgpO1xyXG4gICAgICAgICAgICBzWzQ1XSA9IGI0NSBeICh+YjQ3ICYgYjQ5KTtcclxuICAgICAgICAgICAgc1s2XSA9IGI2IF4gKH5iOCAmIGIwKTtcclxuICAgICAgICAgICAgc1s3XSA9IGI3IF4gKH5iOSAmIGIxKTtcclxuICAgICAgICAgICAgc1sxNl0gPSBiMTYgXiAofmIxOCAmIGIxMCk7XHJcbiAgICAgICAgICAgIHNbMTddID0gYjE3IF4gKH5iMTkgJiBiMTEpO1xyXG4gICAgICAgICAgICBzWzI2XSA9IGIyNiBeICh+YjI4ICYgYjIwKTtcclxuICAgICAgICAgICAgc1syN10gPSBiMjcgXiAofmIyOSAmIGIyMSk7XHJcbiAgICAgICAgICAgIHNbMzZdID0gYjM2IF4gKH5iMzggJiBiMzApO1xyXG4gICAgICAgICAgICBzWzM3XSA9IGIzNyBeICh+YjM5ICYgYjMxKTtcclxuICAgICAgICAgICAgc1s0Nl0gPSBiNDYgXiAofmI0OCAmIGI0MCk7XHJcbiAgICAgICAgICAgIHNbNDddID0gYjQ3IF4gKH5iNDkgJiBiNDEpO1xyXG4gICAgICAgICAgICBzWzhdID0gYjggXiAofmIwICYgYjIpO1xyXG4gICAgICAgICAgICBzWzldID0gYjkgXiAofmIxICYgYjMpO1xyXG4gICAgICAgICAgICBzWzE4XSA9IGIxOCBeICh+YjEwICYgYjEyKTtcclxuICAgICAgICAgICAgc1sxOV0gPSBiMTkgXiAofmIxMSAmIGIxMyk7XHJcbiAgICAgICAgICAgIHNbMjhdID0gYjI4IF4gKH5iMjAgJiBiMjIpO1xyXG4gICAgICAgICAgICBzWzI5XSA9IGIyOSBeICh+YjIxICYgYjIzKTtcclxuICAgICAgICAgICAgc1szOF0gPSBiMzggXiAofmIzMCAmIGIzMik7XHJcbiAgICAgICAgICAgIHNbMzldID0gYjM5IF4gKH5iMzEgJiBiMzMpO1xyXG4gICAgICAgICAgICBzWzQ4XSA9IGI0OCBeICh+YjQwICYgYjQyKTtcclxuICAgICAgICAgICAgc1s0OV0gPSBiNDkgXiAofmI0MSAmIGI0Myk7XHJcbiAgICAgICAgICAgIHNbMF0gXj0gU2hhMy5ST1VORF9DT05TVEFOVFNbbl07XHJcbiAgICAgICAgICAgIHNbMV0gXj0gU2hhMy5ST1VORF9DT05TVEFOVFNbbiArIDFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiBQYWRkaW5nIHRvIHVzZSBmb3IgS2VjY2FrICovXHJcblNoYTMuS0VDQ0FLX1BBRERJTkcgPSBuZXcgVWludDMyQXJyYXkoWzEsIDI1NiwgNjU1MzYsIDE2Nzc3MjE2XSk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5TaGEzLlNISUZUID0gbmV3IFVpbnQ4QXJyYXkoWzAsIDgsIDE2LCAyNF0pO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuU2hhMy5ST1VORF9DT05TVEFOVFMgPSBuZXcgVWludDMyQXJyYXkoWzEsIDAsIDMyODk4LCAwLCAzMjkwNiwgMjE0NzQ4MzY0OCwgMjE0NzUxNjQxNiwgMjE0NzQ4MzY0OCwgMzI5MDcsIDAsIDIxNDc0ODM2NDksXHJcbiAgICAwLCAyMTQ3NTE2NTQ1LCAyMTQ3NDgzNjQ4LCAzMjc3NywgMjE0NzQ4MzY0OCwgMTM4LCAwLCAxMzYsIDAsIDIxNDc1MTY0MjUsIDAsXHJcbiAgICAyMTQ3NDgzNjU4LCAwLCAyMTQ3NTE2NTU1LCAwLCAxMzksIDIxNDc0ODM2NDgsIDMyOTA1LCAyMTQ3NDgzNjQ4LCAzMjc3MSxcclxuICAgIDIxNDc0ODM2NDgsIDMyNzcwLCAyMTQ3NDgzNjQ4LCAxMjgsIDIxNDc0ODM2NDgsIDMyNzc4LCAwLCAyMTQ3NDgzNjU4LCAyMTQ3NDgzNjQ4LFxyXG4gICAgMjE0NzUxNjU0NSwgMjE0NzQ4MzY0OCwgMzI4OTYsIDIxNDc0ODM2NDgsIDIxNDc0ODM2NDksIDAsIDIxNDc1MTY0MjQsIDIxNDc0ODM2NDhdKTtcclxuZXhwb3J0cy5TaGEzID0gU2hhMztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJoaE15NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a2FXZGxjM1J6TDNOb1lUTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3h6UkVGQmJVUTdRVUZGYmtRN08wZEJSVWM3UVVGRFNEdEpRWEZEU1RzN096czdUMEZMUnp0SlFVTklMRmxCUVZrc1NVRkJXU3hGUVVGRkxFOUJRVzlDTEVWQlFVVXNWVUZCYTBJN1VVRkRPVVFzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNN1VVRkRlRUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRPVUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzaERMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzVlVGQlZTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnlReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNWVUZCVlN4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVVV4UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzUkRMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJhMEk3VVVGRE5VSXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4WFFVRlhMRU5CUVVNc1JVRkJSVHRaUVVNeFF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhyUTBGQmEwTXNRMEZCUXl4RFFVRkRPMU5CUXpkRU8xRkJRMFFzVFVGQlRTeFBRVUZQTEVkQlFXVXNTVUZCU1N4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGJFUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU01UWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFpDeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVk9MRTlCUVU4c1MwRkJTeXhIUVVGSExFMUJRVTBzUlVGQlJUdFpRVU51UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3WjBKQlEySXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03WjBKQlEzQkNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRuUWtGRE9VSXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJUdHZRa0ZEZGtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2FVSkJRM1pDTzJGQlEwbzdXVUZEUkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVN1owSkJRMnhGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnBGTzFsQlEwUXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGVFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJUdG5Ra0ZEZEVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJRenRuUWtGRGJFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRuUWtGRE4wTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRk8yOUNRVU51UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEzSkRPMmRDUVVORUxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdaMEpCUTNCRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMkZCUTNSQ08ybENRVUZOTzJkQ1FVTklMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEyNUNPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1RVRkJUVHRSUVVOVUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVVm9RaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEVml4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFZpeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU53UXl4SlFVRkpMRTFCUVUwc1EwRkJRenRSUVVOWUxFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTnNRaXhOUVVGTkxFZEJRVWNzU1VGQlNTeFhRVUZYTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpORU8yRkJRVTA3V1VGRFNDeE5RVUZOTEVkQlFVY3NTVUZCU1N4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGJrTTdVVUZEUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTjBReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZPMWxCUXpOQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlR0blFrRkRiRVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETjBJN1UwRkRTanRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTnNRaXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UWl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRia003VVVGRFJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkZZaXhQUVVGUExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGRkJRVkU3VVVGRFdpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRE8xRkJRelZDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6ZERMRWxCUVVrc1NVRkJTU3hEUVVGRExHTkJRV01zUzBGQlN5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZPMWxCUTNwRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRha1FzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRuUWtGRGRrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEZGtJN1UwRkRTanRSUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeFZRVUZWTEVOQlFVTTdVVUZEYWtRc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzFsQlEyNURMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU55UXp0UlFVTkVMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGVFTXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hwUWtGQmFVSXNRMEZCUXl4RFFVRmpPMUZCUTNCRExIZEVRVUYzUkR0UlFVTjRSQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkRMME1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRemxGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkRPVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMUZCUTI1R0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEZUVJc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkZNVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFZc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5XTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFZc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkZXQ3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFZc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTldMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEyeERMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJSWEJETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZGTTBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM1pETzBsQlEwd3NRMEZCUXpzN1FVRm9Wa1FzSzBKQlFTdENPMEZCUTFJc2JVSkJRV01zUjBGQlowSXNTVUZCU1N4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMmhITEdWQlFXVTdRVUZEVXl4VlFVRkxMRWRCUVdVc1NVRkJTU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6TkZMR1ZCUVdVN1FVRkRVeXh2UWtGQlpTeEhRVUZuUWl4SlFVRkpMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFZRVUZWTzBsQlEyNUtMRU5CUVVNc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hEUVVGRE8wbEJRek5GTEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN6dEpRVU4yUlN4VlFVRlZMRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeEhRVUZITEVWQlFVVXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZEYUVZc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRldNMFlzYjBKQmExWkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGNyeXB0byBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIENyeXB0b0Vycm9yIGV4dGVuZHMgY29yZUVycm9yXzEuQ29yZUVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIENyeXB0b0Vycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcik7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkNyeXB0b1wiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ3J5cHRvRXJyb3IgPSBDcnlwdG9FcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKNWNIUnZSWEp5YjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WlhKeWIzSXZZM0o1Y0hSdlJYSnliM0l1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRzlGUVVGcFJUdEJRVVZxUlRzN1IwRkZSenRCUVVOSUxHbENRVUY1UWl4VFFVRlJMSEZDUVVGVE8wbEJRM1JET3pzN096dFBRVXRITzBsQlEwZ3NXVUZCV1N4UFFVRmxMRVZCUVVVc1ZVRkJhME1zUlVGQlJTeFZRVUZyUWp0UlFVTXZSU3hMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOMlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJRenRKUVVNelFpeERRVUZETzBOQlEwbzdRVUZZUkN4clEwRlhReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmYWN0b3J5QmFzZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiKTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgcHJvb2Ygb2Ygd29yay5cclxuICovXHJcbmNsYXNzIFByb29mT2ZXb3JrRmFjdG9yeSBleHRlbmRzIGZhY3RvcnlCYXNlXzEuRmFjdG9yeUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEb24ndCBhbGxvdyBtYW51YWwgY29uc3RydWN0aW9uIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZmFjdG9yeSBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghUHJvb2ZPZldvcmtGYWN0b3J5Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBQcm9vZk9mV29ya0ZhY3RvcnkuX2luc3RhbmNlID0gbmV3IFByb29mT2ZXb3JrRmFjdG9yeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvb2ZPZldvcmtGYWN0b3J5Ll9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb29mT2ZXb3JrRmFjdG9yeS5pbnN0YW5jZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUHJvb2ZPZldvcmtGYWN0b3J5ID0gUHJvb2ZPZldvcmtGYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEp2YjJaUFpsZHZjbXRHWVdOMGIzSjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyWmhZM1J2Y21sbGN5OXdjbTl2Wms5bVYyOXlhMFpoWTNSdmNua3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVZDZSVHM3UjBGRlJ6dEJRVU5JTEhkQ1FVRm5ReXhUUVVGUkxIbENRVUY1UWp0SlFVazNSRHM3TzA5QlIwYzdTVUZEU0R0UlFVTkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRMW9zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTzFGQlEyeENMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4VFFVRlRMRVZCUVVVN1dVRkRMMElzYTBKQlFXdENMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzYTBKQlFXdENMRVZCUVVVc1EwRkJRenRUUVVNelJEdFJRVU5FTEU5QlFVOHNhMEpCUVd0Q0xFTkJRVU1zVTBGQlV5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMHdzVjBGQlZ6dFJRVU5xUWl4UFFVRlBMR3RDUVVGclFpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNwRExFTkJRVU03UTBGRFNqdEJRVE5DUkN4blJFRXlRa01pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIik7XHJcbmNvbnN0IGN1cmxfMSA9IHJlcXVpcmUoXCIuLi9zcG9uZ2VzL2N1cmxcIik7XHJcbmNvbnN0IGtlcmxfMSA9IHJlcXVpcmUoXCIuLi9zcG9uZ2VzL2tlcmxcIik7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHNwb25nZXMuXHJcbiAqL1xyXG5jbGFzcyBTcG9uZ2VGYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZSA9IG5ldyBTcG9uZ2VGYWN0b3J5KCk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwiY3VybFwiLCAoLi4uYXJncykgPT4gbmV3IGN1cmxfMS5DdXJsKC4uLmFyZ3MpKTtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UucmVnaXN0ZXIoXCJjdXJsODFcIiwgKC4uLmFyZ3MpID0+IG5ldyBjdXJsXzEuQ3VybCg4MSkpO1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZS5yZWdpc3RlcihcImN1cmwyN1wiLCAoLi4uYXJncykgPT4gbmV3IGN1cmxfMS5DdXJsKDI3KSk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwia2VybFwiLCAoLi4uYXJncykgPT4gbmV3IGtlcmxfMS5LZXJsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU3BvbmdlRmFjdG9yeS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBTcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TcG9uZ2VGYWN0b3J5ID0gU3BvbmdlRmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNCdmJtZGxSbUZqZEc5eWVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5bVlXTjBiM0pwWlhNdmMzQnZibWRsUm1GamRHOXllUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJSWHBGTERCRFFVRjFRenRCUVVOMlF5d3dRMEZCZFVNN1FVRkZka003TzBkQlJVYzdRVUZEU0N4dFFrRkJNa0lzVTBGQlVTeDVRa0ZCYjBJN1NVRkpia1E3T3p0UFFVZEhPMGxCUTBnN1VVRkRTU3hMUVVGTExFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVVUZCVVR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEZOQlFWTXNSVUZCUlR0WlFVTXhRaXhoUVVGaExFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NZVUZCWVN4RlFVRkZMRU5CUVVNN1dVRkRPVU1zWVVGQllTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc1YwRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZSU3hoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4WFFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUlN4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeFhRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFJTeGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hYUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzSkZPMUZCUTBRc1QwRkJUeXhoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETzBsQlEyNURMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMHdzVjBGQlZ6dFJRVU5xUWl4UFFVRlBMR0ZCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU53UXl4RFFVRkRPME5CUTBvN1FVRXZRa1FzYzBOQkswSkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgYWRkcmVzc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1wiKTtcclxuY29uc3QgYWRkcmVzc1NlY3VyaXR5XzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9hZGRyZXNzU2VjdXJpdHlcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIik7XHJcbmNvbnN0IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBzcG9uZ2VGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIik7XHJcbi8qKlxyXG4gKiBJU1MgSGFzaGluZyBmdW5jdGlvbnMuXHJcbiAqIENvbnZlcnRlZCBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pcmkvc3JjL21haW4vamF2YS9jb20vaW90YS9pcmkvaGFzaC9JU1MuamF2YVxyXG4gKi9cclxuY2xhc3MgSVNTIHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdWJzZWVkIGZvciB0aGUgc2VlZCBhbmQgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0gc2VlZCBUaGUgc2VlZC5cclxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggZm9yIHRoZSBzZWVkLlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdWJzZWVkLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3Vic2VlZChzZWVkLCBpbmRleCwgc3BvbmdlVHlwZSA9IFwiY3VybDI3XCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2VlZCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzZWVkIG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihpbmRleCkgfHwgaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGluZGV4IG11c3QgYmUgYW4gaW50ZWdlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3BvbmdlID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIHNwb25nZS5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY29uc3Qgc3Vic2VlZFByZWltYWdlID0gc2VlZC5zbGljZSgpO1xyXG4gICAgICAgIGxldCBsb2NhbEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsSW5kZXgtLSA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzZWVkUHJlaW1hZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgrK3N1YnNlZWRQcmVpbWFnZVtpXSA+IElTUy5NQVhfVFJJVF9WQUxVRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnNlZWRQcmVpbWFnZVtpXSA9IElTUy5NSU5fVFJJVF9WQUxVRTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YnNlZWQgPSBuZXcgSW50OEFycmF5KGhhc2hMZW5ndGgpO1xyXG4gICAgICAgIHNwb25nZS5hYnNvcmIoc3Vic2VlZFByZWltYWdlLCAwLCBzdWJzZWVkUHJlaW1hZ2UubGVuZ3RoKTtcclxuICAgICAgICBzcG9uZ2Uuc3F1ZWV6ZShzdWJzZWVkLCAwLCBzdWJzZWVkLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHN1YnNlZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0aGUga2V5IGZvciB0aGUgc2VlZC5cclxuICAgICAqIEBwYXJhbSBzZWVkIFRoZSBzZWVkIHRvIGNyZWF0ZSB0aGUga2V5IGZvci5cclxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggdG8gdXNlIGZvciB0aGUgc2VlZC5cclxuICAgICAqIEBwYXJhbSBzZWN1cml0eSBUaGUgc2VjdXJpdHkgbGV2ZWwgdG8gY3JlYXRlIHRoZSBrZXkuXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgdGhlIGtleS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGtleShzZWVkLCBpbmRleCwgc2VjdXJpdHksIHNwb25nZVR5cGUgPSBcImtlcmxcIikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzZWVkLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc2VlZCBtdXN0IGJlIG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGluZGV4KSB8fCBpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgaW5kZXggbXVzdCBiZSBhbiBpbnRlZ2VyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzZWN1cml0eSkgfHwgc2VjdXJpdHkgPCBhZGRyZXNzU2VjdXJpdHlfMS5BZGRyZXNzU2VjdXJpdHkubG93IHx8IHNlY3VyaXR5ID4gYWRkcmVzc1NlY3VyaXR5XzEuQWRkcmVzc1NlY3VyaXR5LmhpZ2gpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzZWN1cml0eSBtdXN0IGJlIGFuIGludGVnZXIgPj0gMSBhbmQgPD0gM2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VlZFRyaXRzID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHNlZWQudG9Ucnl0ZXMoKSk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhUcml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbU51bWJlcihpbmRleCk7XHJcbiAgICAgICAgY29uc3Qgc3Vic2VlZCA9IHRyaXRzXzEuVHJpdHMuYWRkKHNlZWRUcml0cywgaW5kZXhUcml0cykudG9BcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IHN1YnNlZWRMZW5ndGggPSBzdWJzZWVkLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBzcG9uZ2UgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0gc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgc3BvbmdlLmluaXRpYWxpemUoKTtcclxuICAgICAgICBzcG9uZ2UuYWJzb3JiKHN1YnNlZWQsIDAsIHN1YnNlZWRMZW5ndGgpO1xyXG4gICAgICAgIHNwb25nZS5zcXVlZXplKHN1YnNlZWQsIDAsIHN1YnNlZWRMZW5ndGgpO1xyXG4gICAgICAgIHNwb25nZS5yZXNldCgpO1xyXG4gICAgICAgIHNwb25nZS5hYnNvcmIoc3Vic2VlZCwgMCwgc3Vic2VlZExlbmd0aCk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gbmV3IEludDhBcnJheShJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUyAqIGhhc2hMZW5ndGggKiBzZWN1cml0eSk7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IEludDhBcnJheShzdWJzZWVkTGVuZ3RoKTtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBzZWN1cml0eTtcclxuICAgICAgICB3aGlsZSAobG9jYWxMZW5ndGgtLSA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzcG9uZ2Uuc3F1ZWV6ZShidWZmZXIsIDAsIHN1YnNlZWRMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYXNoTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlbb2Zmc2V0KytdID0gYnVmZmVyW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0aGUgZGlnZXN0cyBmb3IgdGhlIGdpdmVuIHN1YnNlZWQuXHJcbiAgICAgKiBAcGFyYW0gc3Vic2VlZCBUbyBjcmVhdGUgdGhlIGRpZ2VzdHMgZm9yLlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkaWdlc3RzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGlnZXN0cyhzdWJzZWVkLCBzcG9uZ2VUeXBlID0gXCJrZXJsXCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc3Vic2VlZCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzdWJzZWVkIG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5leGlzdHMoc3BvbmdlVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzcG9uZ2VUeXBlIG11c3QgYmUgb25lIG9mIFske3Nwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkudHlwZXMoKS5qb2luKFwiLCBcIil9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcG9uZ2UgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0gc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnRMZW5ndGggPSBoYXNoTGVuZ3RoICogSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1M7XHJcbiAgICAgICAgaWYgKHN1YnNlZWQubGVuZ3RoICUgZnJhZ21lbnRMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzdWJzZWVkIGxlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtmcmFnbWVudExlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVSYW5nZSA9IElTUy5NQVhfVFJZVEVfVkFMVUUgLSBJU1MuTUlOX1RSWVRFX1ZBTFVFO1xyXG4gICAgICAgIGNvbnN0IGtleUxlbkRpdiA9IHN1YnNlZWQubGVuZ3RoIC8gZnJhZ21lbnRMZW5ndGg7XHJcbiAgICAgICAgY29uc3QgZGlnZXN0cyA9IG5ldyBJbnQ4QXJyYXkoa2V5TGVuRGl2ICogaGFzaExlbmd0aCk7XHJcbiAgICAgICAgbGV0IGJ1ZmZlcjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleUxlbkRpdjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlNdWwgPSBpICogZnJhZ21lbnRMZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUZyYWdtZW50ID0gc3Vic2VlZC5zbGljZShpTXVsLCBpTXVsICsgZnJhZ21lbnRMZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IElTUy5OVU1CRVJfT0ZfRlJBR01FTlRfQ0hVTktTOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpNdWwgPSBqICogaGFzaExlbmd0aDtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IGtleUZyYWdtZW50LnNsaWNlKGpNdWwsIGpNdWwgKyBoYXNoTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdHJ5dGVSYW5nZTsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BvbmdlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BvbmdlLmFic29yYihidWZmZXIsIDAsIGJ1ZmZlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwb25nZS5zcXVlZXplKGJ1ZmZlciwgMCwgaGFzaExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGhhc2hMZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleUZyYWdtZW50W2pNdWwgKyBrXSA9IGJ1ZmZlcltrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcG9uZ2UucmVzZXQoKTtcclxuICAgICAgICAgICAgc3BvbmdlLmFic29yYihrZXlGcmFnbWVudCwgMCwga2V5RnJhZ21lbnQubGVuZ3RoKTtcclxuICAgICAgICAgICAgc3BvbmdlLnNxdWVlemUoYnVmZmVyLCAwLCBoYXNoTGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgaU11bDIgPSBpICogaGFzaExlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYXNoTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGRpZ2VzdHNbaU11bDIgKyBqXSA9IGJ1ZmZlcltqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlnZXN0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRoZSBhZGRyZXNzIGZvciB0aGUgZGlnZXN0cy5cclxuICAgICAqIEBwYXJhbSBkaWdlc3RzIFRoZSBkaWdlc3RzIHRvIGNyZWF0ZSB0aGUgYWRkcmVzcyBmb3IuXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgdGhlIGFkZHJlc3MgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGRyZXNzKGRpZ2VzdHMsIHNwb25nZVR5cGUgPSBcImtlcmxcIikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShkaWdlc3RzLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGRpZ2VzdHMgbXVzdCBiZSBvZiB0eXBlIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmV4aXN0cyhzcG9uZ2VUeXBlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVGhlIHNwb25nZVR5cGUgbXVzdCBiZSBvbmUgb2YgWyR7c3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS50eXBlcygpLmpvaW4oXCIsIFwiKX1dYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwb25nZSA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hMZW5ndGggPSBzcG9uZ2UuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKTtcclxuICAgICAgICBpZiAoZGlnZXN0cy5sZW5ndGggJSBoYXNoTGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBJbnZhbGlkIGRpZ2VzdHMgbGVuZ3RoLCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtoYXNoTGVuZ3RofWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcG9uZ2UuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHNwb25nZS5hYnNvcmIoZGlnZXN0cywgMCwgZGlnZXN0cy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NUcml0cyA9IG5ldyBJbnQ4QXJyYXkoaGFzaExlbmd0aCk7XHJcbiAgICAgICAgc3BvbmdlLnNxdWVlemUoYWRkcmVzc1RyaXRzLCAwLCBhZGRyZXNzVHJpdHMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gYWRkcmVzc1RyaXRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgZGlnZXN0IG9mIHRoZSBub3JtYWxpemVkIGJ1bmRsZSBmcmFnbWVudC5cclxuICAgICAqIEBwYXJhbSBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQgVGhlIGZyYWdtZW50IHRvIGNyZWF0ZSBkaWdlc3QuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSB0cml0cyBmb3Igc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQuXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRpZ2VzdCBvZiB0aGUgYnVuZGxlIGFuZCBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRpZ2VzdChub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgc3BvbmdlVHlwZSA9IFwia2VybFwiKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQgbXVzdCBiZSBvZiB0eXBlIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgbXVzdCBiZSBvZiB0eXBlIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmV4aXN0cyhzcG9uZ2VUeXBlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVGhlIHNwb25nZVR5cGUgbXVzdCBiZSBvbmUgb2YgWyR7c3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS50eXBlcygpLmpvaW4oXCIsIFwiKX1dYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidWZmZXI7XHJcbiAgICAgICAgY29uc3Qgc3BvbmdlID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIHNwb25nZS5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyBJbnQ4QXJyYXkoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnNsaWNlKGkgKiBoYXNoTGVuZ3RoLCAoaSArIDEpICogaGFzaExlbmd0aCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50W2ldIC0gSVNTLk1JTl9UUllURV9WQUxVRTsgaiA+IDA7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BvbmdlMiA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgc3BvbmdlMi5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICBzcG9uZ2UyLmFic29yYihidWZmZXIsIDAsIGJ1ZmZlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgc3BvbmdlMi5zcXVlZXplKGJ1ZmZlciwgMCwgc3BvbmdlMi5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcG9uZ2UuYWJzb3JiKGJ1ZmZlciwgMCwgYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwb25nZS5zcXVlZXplKGJ1ZmZlciwgMCwgc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIikpO1xyXG4gICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZGlnZXN0IGZvciB0aGUgc3Vic2VlZC5cclxuICAgICAqIEBwYXJhbSBzdWJzZWVkIFRoZSBzdWJzZWVkIHRvIGdldCB0aGUgZGlnZXN0IGZvci5cclxuICAgICAqIEBwYXJhbSBzZWN1cml0eSBUaGUgc2VjdXJpdHkgbGV2ZWwuXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRpZ2VzdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN1YnNlZWRUb0RpZ2VzdChzdWJzZWVkLCBzZWN1cml0eSwgc3BvbmdlVHlwZSA9IFwiY3VybDI3XCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc3Vic2VlZCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzdWJzZWVkIG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzZWN1cml0eSkgfHwgc2VjdXJpdHkgPCBhZGRyZXNzU2VjdXJpdHlfMS5BZGRyZXNzU2VjdXJpdHkubG93IHx8IHNlY3VyaXR5ID4gYWRkcmVzc1NlY3VyaXR5XzEuQWRkcmVzc1NlY3VyaXR5LmhpZ2gpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzZWN1cml0eSBtdXN0IGJlIGFuIGludGVnZXIgPj0gMSBhbmQgPD0gM2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYzEgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBjMiA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGMzID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgYzEuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGMyLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjMy5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IGMxLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgY29uc3Qga2V5TGVuZ3RoID0gKChoYXNoTGVuZ3RoIC8gMykgLyBJU1MuUkFESVgpICogaGFzaExlbmd0aDtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBzZWN1cml0eSAqIGtleUxlbmd0aCAvIGhhc2hMZW5ndGg7XHJcbiAgICAgICAgbGV0IG91dCA9IG5ldyBJbnQ4QXJyYXkoaGFzaExlbmd0aCk7XHJcbiAgICAgICAgYzEuYWJzb3JiKHN1YnNlZWQsIDAsIHN1YnNlZWQubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGMxLnNxdWVlemUob3V0LCAwLCBvdXQubGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAoSVNTLk1BWF9UUllURV9WQUxVRSAtIElTUy5NSU5fVFJZVEVfVkFMVUUgKyAxKTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjMi5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgYzIuYWJzb3JiKG91dCwgMCwgb3V0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBvdXQgPSBjMi5nZXRTdGF0ZSgpLnNsaWNlKDAsIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGMzLmFic29yYihvdXQsIDAsIG91dC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjMy5zcXVlZXplKG91dCwgMCwgb3V0Lmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbm9ybWFsaXplZCBidW5kbGUuXHJcbiAgICAgKiBAcGFyYW0gYnVuZGxlSGFzaCBUaGUgaGFzaCBvZiB0aGUgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIHRoZSBub3JtYWxpemVkIGJ1bmRsZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG5vcm1hbGl6ZWRCdW5kbGUoYnVuZGxlSGFzaCwgc3BvbmdlVHlwZSA9IFwiY3VybDgxXCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYnVuZGxlSGFzaCwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGJ1bmRsZUhhc2ggbXVzdCBiZSBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5leGlzdHMoc3BvbmdlVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzcG9uZ2VUeXBlIG11c3QgYmUgb25lIG9mIFske3Nwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkudHlwZXMoKS5qb2luKFwiLCBcIil9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcG9uZ2UgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0gc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEJ1bmRsZSA9IG5ldyBJbnQ4QXJyYXkoSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1MgKiBJU1MuTlVNQkVSX09GX1NFQ1VSSVRZX0xFVkVMUyk7XHJcbiAgICAgICAgY29uc3QgaGFzaFN0cmluZyA9IGJ1bmRsZUhhc2gudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCA9IGhhc2hMZW5ndGggLyBJU1MuVFJZVEVfV0lEVEggLyBJU1MuTlVNQkVSX09GX1NFQ1VSSVRZX0xFVkVMUztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IElTUy5OVU1CRVJfT0ZfU0VDVVJJVFlfTEVWRUxTOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9ybWFsaXplZEZyYWdtZW50TGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc2hDaGFyID0gaGFzaFN0cmluZy5jaGFyQXQoaSAqIG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCArIGopO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKGhhc2hDaGFyKSkudG9OdW1iZXIoKTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRCdW5kbGVbaSAqIG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCArIGpdID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgc3VtICs9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3VtID49IDApIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChzdW0tLSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkQnVuZGxlW2kgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqXSA+IElTUy5NSU5fVFJZVEVfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRCdW5kbGVbaSAqIG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCArIGpdLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChzdW0rKyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkQnVuZGxlW2kgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqXSA8IElTUy5NQVhfVFJZVEVfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRCdW5kbGVbaSAqIG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCArIGpdKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9ybWFsaXplZEJ1bmRsZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGUgdGhlIHNpZ25hdHVyZSBmcmFnbWVudHMgZnJvbSB0aGUgYWRkcmVzcy5cclxuICAgICAqIEBwYXJhbSBleHBlY3RlZEFkZHJlc3MgVGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cyBUaGUgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnRzLlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZUhhc2ggVGhlIGhhc2ggZm9yIHRoZSBidW5kbGUuXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQgYXJlIHNpZ25lZCBieSB0aGUgZXhwZWN0ZWQgYWRkcmVzcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHZhbGlkYXRlU2lnbmF0dXJlcyhleHBlY3RlZEFkZHJlc3MsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMsIGJ1bmRsZUhhc2gsIHNwb25nZVR5cGUgPSBcImtlcmxcIikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShleHBlY3RlZEFkZHJlc3MsIGFkZHJlc3NfMS5BZGRyZXNzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBleHBlY3RlZEFkZHJlc3MgbXVzdCBiZSBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cyBtdXN0IGJlIGFuIGFycmF5IG9mIHR5cGUgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYnVuZGxlSGFzaCwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGJ1bmRsZUhhc2ggbXVzdCBiZSBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5leGlzdHMoc3BvbmdlVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzcG9uZ2VUeXBlIG11c3QgYmUgb25lIG9mIFske3Nwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkudHlwZXMoKS5qb2luKFwiLCBcIil9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnRzID0gW107XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEJ1bmRsZUhhc2ggPSBJU1Mubm9ybWFsaXplZEJ1bmRsZShidW5kbGVIYXNoKTtcclxuICAgICAgICBjb25zdCBzcG9uZ2UgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0gc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgZm9yIChsZXQgZiA9IDA7IGYgPCAzOyBmKyspIHtcclxuICAgICAgICAgICAgbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50c1tmXSA9IG5vcm1hbGl6ZWRCdW5kbGVIYXNoLnNsaWNlKGYgKiBJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUywgKGYgKyAxKSAqIElTUy5OVU1CRVJfT0ZfRlJBR01FTlRfQ0hVTktTKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGlnZXN0cyA9IG5ldyBJbnQ4QXJyYXkoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cy5sZW5ndGggKiBoYXNoTGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGlnZXN0QnVmZmVyID0gSVNTLmRpZ2VzdChub3JtYWxpemVkQnVuZGxlRnJhZ21lbnRzW2kgJSAzXSwgdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHNbaV0udG9Ucnl0ZXMoKSkudG9BcnJheSgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYXNoTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGRpZ2VzdHNbaSAqIGhhc2hMZW5ndGggKyBqXSA9IGRpZ2VzdEJ1ZmZlcltqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwZWN0ZWRBZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKSA9PT0gdHJpdHNfMS5Ucml0cy5mcm9tQXJyYXkoSVNTLmFkZHJlc3MoZGlnZXN0cykpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgc2lnbmVkIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50LlxyXG4gICAgICogQHBhcmFtIG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudCBUaGUgZnJhZ21lbnQgdG8gc2lnbi5cclxuICAgICAqIEBwYXJhbSBrZXlGcmFnbWVudCBUaGUga2V5IGZyYWdtZW50IHRvIHNpZ24gd2l0aC5cclxuICAgICAqIEBwYXJhbSBzcG9uZ2VUeXBlIFRoZSBzcG9uZ2UgdHlwZSB0byB1c2UgZm9yIG9wZXJhdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc2lnbmVkIGZyYWdtZW50LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudCwga2V5RnJhZ21lbnQsIHNwb25nZVR5cGUgPSBcImtlcmxcIikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50IG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShrZXlGcmFnbWVudCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBrZXlGcmFnbWVudCBtdXN0IGJlIG9mIHR5cGUgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0ga2V5RnJhZ21lbnQuc2xpY2UoKTtcclxuICAgICAgICBsZXQgaGFzaDtcclxuICAgICAgICBjb25zdCBrZXJsID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IGtlcmwuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcclxuICAgICAgICAgICAgaGFzaCA9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5zbGljZShpICogaGFzaExlbmd0aCwgKGkgKyAxKSAqIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEzIC0gbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50W2ldOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGtlcmwuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAga2VybC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAga2VybC5hYnNvcmIoaGFzaCwgMCwgaGFzaExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBrZXJsLnNxdWVlemUoaGFzaCwgMCwgaGFzaExlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYXNoTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFtpICogaGFzaExlbmd0aCArIGpdID0gaGFzaFtqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50O1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUyA9IDI3O1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLk5VTUJFUl9PRl9TRUNVUklUWV9MRVZFTFMgPSAzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLlRSWVRFX1dJRFRIID0gMztcclxuLyogQGludGVybmFsICovXHJcbklTUy5NSU5fVFJZVEVfVkFMVUUgPSAtMTM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuTUFYX1RSWVRFX1ZBTFVFID0gMTM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuTUlOX1RSSVRfVkFMVUUgPSAtMTtcclxuLyogQGludGVybmFsICovXHJcbklTUy5NQVhfVFJJVF9WQUxVRSA9IDE7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuUkFESVggPSAzO1xyXG5leHBvcnRzLklTUyA9IElTUztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVhOekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJoaGMyZ3ZhWE56TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3d3UlVGQmRVVTdRVUZEZGtVc05FVkJRWGxGTzBGQlEzcEZMRFJGUVVGNVJUdEJRVU42UlN3clJFRkJORVE3UVVGRE5VUXNLMFZCUVRSRk8wRkJRelZGTEhsRVFVRnpSRHRCUVVOMFJDeHBSMEZCT0VZN1FVRkRPVVlzTWtSQlFYZEVPMEZCUTNoRUxEWkVRVUV3UkR0QlFVTXhSQ3h6UkVGQmJVUTdRVUZEYmtRc09FUkJRVEpFTzBGQlJUTkVPenM3UjBGSFJ6dEJRVU5JTzBsQmEwSkpPenM3T3pzN1QwRk5SenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCWlN4RlFVRkZMRXRCUVdFc1JVRkJSU3hoUVVGeFFpeFJRVUZSTzFGQlF5OUZMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhEUVVGRExFVkJRVVU3V1VGRGRrTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYjBOQlFXOURMRU5CUVVNc1EwRkJRenRUUVVNdlJEdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRemRETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHMURRVUZ0UXl4RFFVRkRMRU5CUVVNN1UwRkRPVVE3VVVGRlJDeEpRVUZKTEVOQlFVTXNOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1dVRkRPVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2EwTkJRV3RETERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU16Unp0UlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF6TkVMRTFCUVUwc1ZVRkJWU3hIUVVGSExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkRja1FzVFVGQlRTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMUZCUlhCQ0xFMUJRVTBzWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOeVF5eEpRVUZKTEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkZka0lzVDBGQlR5eFZRVUZWTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRja0lzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExHVkJRV1VzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRemRETEVsQlFVa3NSVUZCUlN4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEdOQlFXTXNSVUZCUlR0dlFrRkRNME1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhqUVVGakxFTkJRVU03YVVKQlF6TkRPM0ZDUVVGTk8yOUNRVU5JTEUxQlFVMDdhVUpCUTFRN1lVRkRTanRUUVVOS08xRkJSVVFzVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRk1VTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlF5eEZRVUZGTEdWQlFXVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNeFJDeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFVkJRVVVzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUlRORExFOUJRVThzVDBGQlR5eERRVUZETzBsQlEyNUNMRU5CUVVNN1NVRkZSRHM3T3pzN096dFBRVTlITzBsQlEwa3NUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGVkxFVkJRVVVzUzBGQllTeEZRVUZGTEZGQlFYbENMRVZCUVVVc1lVRkJjVUlzVFVGQlRUdFJRVU12Uml4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmRCUVVrc1EwRkJReXhGUVVGRk8xbEJRMnhETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExDdENRVUVyUWl4RFFVRkRMRU5CUVVNN1UwRkRNVVE3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNM1F5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXh0UTBGQmJVTXNRMEZCUXl4RFFVRkRPMU5CUXpsRU8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEZGQlFWRXNSMEZCUnl4cFEwRkJaU3hEUVVGRExFZEJRVWNzU1VGQlNTeFJRVUZSTEVkQlFVY3NhVU5CUVdVc1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGRGVFY3NUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zSzBOQlFTdERMRU5CUVVNc1EwRkJRenRUUVVNeFJUdFJRVVZFTEVsQlFVa3NRMEZCUXl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHRaUVVNNVF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhyUTBGQmEwTXNOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlF6TkhPMUZCUlVRc1RVRkJUU3hUUVVGVExFZEJRVWNzWVVGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU53UkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhoUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpORExFMUJRVTBzVDBGQlR5eEhRVUZITEdGQlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUXpORUxFMUJRVTBzWVVGQllTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkZja01zVFVGQlRTeE5RVUZOTEVkQlFVY3NOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRNMFFzVFVGQlRTeFZRVUZWTEVkQlFVY3NUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVVZ5UkN4TlFVRk5MRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03VVVGRGNFSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUTNwRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hoUVVGaExFTkJRVU1zUTBGQlF6dFJRVVV4UXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRFppeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFVkJRVVVzWVVGQllTeERRVUZETEVOQlFVTTdVVUZGZWtNc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMSGxDUVVGNVFpeEhRVUZITEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOcVJpeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRSUVVNMVF5eEpRVUZKTEZkQlFWY3NSMEZCUnl4UlFVRlJMRU5CUVVNN1VVRkZNMElzVDBGQlR5eFhRVUZYTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRkRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eDVRa0ZCZVVJc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEY0VRc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMR0ZCUVdFc1EwRkJReXhEUVVGRE8yZENRVU42UXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVU5xUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRemRDTzJGQlEwbzdVMEZEU2p0UlFVTkVMRTlCUVU4c1IwRkJSeXhEUVVGRE8wbEJRMllzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGclFpeEZRVUZGTEdGQlFYRkNMRTFCUVUwN1VVRkRha1VzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUlR0WlFVTXhReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4MVEwRkJkVU1zUTBGQlF5eERRVUZETzFOQlEyeEZPMUZCUlVRc1NVRkJTU3hEUVVGRExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTzFsQlF6bERMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXcyUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRNMGM3VVVGRlJDeE5RVUZOTEUxQlFVMHNSMEZCUnl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVNelJDeE5RVUZOTEZWQlFWVXNSMEZCVnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlF6ZEVMRTFCUVUwc1kwRkJZeXhIUVVGSExGVkJRVlVzUjBGQlJ5eEhRVUZITEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU03VVVGRmJFVXNTVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExHTkJRV01zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEZGtNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNORU5CUVRSRExHTkJRV01zUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZGtZN1VVRkZSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eEhRVUZITEVOQlFVTXNaVUZCWlN4SFFVRkhMRWRCUVVjc1EwRkJReXhsUVVGbExFTkJRVU03VVVGRk4wUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eGpRVUZqTEVOQlFVTTdVVUZGYkVRc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNVMEZCVXl4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRM1JFTEVsQlFVa3NUVUZCYVVJc1EwRkJRenRSUVVWMFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTJoRExFMUJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNSMEZCUnl4alFVRmpMRU5CUVVNN1dVRkRhRU1zVFVGQlRTeFhRVUZYTEVkQlFVY3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEhRVUZITEdOQlFXTXNRMEZCUXl4RFFVRkRPMWxCUlM5RUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zZVVKQlFYbENMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzQkVMRTFCUVUwc1NVRkJTU3hIUVVGWExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTTdaMEpCUTNCRExFMUJRVTBzUjBGQlJ5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTTdaMEpCUlhCRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTJwRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0dlFrRkRaaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzI5Q1FVTjRReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03YVVKQlEzcERPMmRDUVVWRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTJwRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVTnlRenRoUVVOS08xbEJSVVFzVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUTJZc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4RlFVRkZMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU5zUkN4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkZkRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJRenRaUVVNM1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVOcVF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTnNRenRUUVVOS08xRkJRMFFzVDBGQlR5eFBRVUZQTEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRnJRaXhGUVVGRkxHRkJRWEZDTEUxQlFVMDdVVUZEYWtVc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJUdFpRVU14UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDFRMEZCZFVNc1EwRkJReXhEUVVGRE8xTkJRMnhGTzFGQlJVUXNTVUZCU1N4RFFVRkRMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8xbEJRemxETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZETTBjN1VVRkZSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTXpSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJSWEpFTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGVkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEyNURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEdsRVFVRnBSQ3hWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzaEdPMUZCUlVRc1RVRkJUU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzFGQlEzQkNMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRk1VTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVVUZETDBNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RlFVRkZMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVVZ5UkN4UFFVRlBMRmxCUVZrc1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenM3T3p0UFFVMUhPMGxCUTBrc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eDNRa0ZCYlVNc1JVRkJSU3gzUWtGQmJVTXNSVUZCUlN4aFFVRnhRaXhOUVVGTk8xRkJRM1JJTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eDNRa0ZCZDBJc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJUdFpRVU16UkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDNSRUZCZDBRc1EwRkJReXhEUVVGRE8xTkJRMjVHTzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEhkQ1FVRjNRaXhGUVVGRkxGTkJRVk1zUTBGQlF5eEZRVUZGTzFsQlF6TkVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhkRVFVRjNSQ3hEUVVGRExFTkJRVU03VTBGRGJrWTdVVUZGUkN4SlFVRkpMRU5CUVVNc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3V1VGRE9VTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYTBOQlFXdERMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTXpSenRSUVVWRUxFbEJRVWtzVFVGQmFVSXNRMEZCUXp0UlFVVjBRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTXpSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJRM0pFTEUxQlFVMHNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVWd1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEhsQ1FVRjVRaXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzQkVMRTFCUVUwc1IwRkJSeXhKUVVGSkxGTkJRVk1zUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlRkR0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVONFJTeE5RVUZOTEU5QlFVOHNSMEZCUnl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRuUWtGRk5VUXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8yZENRVU55UWl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVU42UXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyeEZPMWxCUlVRc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU16UXp0UlFVVkVMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETjBRc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVVkVPenM3T3pzN1QwRk5SenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNUMEZCYTBJc1JVRkJSU3hSUVVGNVFpeEZRVUZGTEdGQlFYRkNMRkZCUVZFN1VVRkRkRWNzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUlR0WlFVTXhReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4MVEwRkJkVU1zUTBGQlF5eERRVUZETzFOQlEyeEZPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxGRkJRVkVzUjBGQlJ5eHBRMEZCWlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hSUVVGUkxFZEJRVWNzYVVOQlFXVXNRMEZCUXl4SlFVRkpMRVZCUVVVN1dVRkRlRWNzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc0swTkJRU3RETEVOQlFVTXNRMEZCUXp0VFFVTXhSVHRSUVVWRUxFbEJRVWtzUTBGQlF5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlR0WlFVTTVReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4clEwRkJhME1zTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRek5ITzFGQlJVUXNUVUZCVFN4RlFVRkZMRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGRrUXNUVUZCVFN4RlFVRkZMRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGRrUXNUVUZCVFN4RlFVRkZMRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGRrUXNSVUZCUlN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8xRkJRMmhDTEVWQlFVVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVOb1FpeEZRVUZGTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkZhRUlzVFVGQlRTeFZRVUZWTEVkQlFVY3NSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU5xUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZGT1VRc1RVRkJUU3hOUVVGTkxFZEJRVWNzVVVGQlVTeEhRVUZITEZOQlFWTXNSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRha1FzU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRmNFTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOMFF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpkQ0xFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZGTDBJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExHVkJRV1VzUjBGQlJ5eEhRVUZITEVOQlFVTXNaVUZCWlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTjBSU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdaMEpCUTFnc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZET1VJc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzJGQlF6VkRPMWxCUlVRc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU5xUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRkwwSXNUMEZCVHl4SFFVRkhMRU5CUVVNN1NVRkRaaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVlVGQlowSXNSVUZCUlN4aFFVRnhRaXhSUVVGUk8xRkJRekZGTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVWQlFVVXNWMEZCU1N4RFFVRkRMRVZCUVVVN1dVRkRlRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTm9SVHRSUVVWRUxFbEJRVWtzUTBGQlF5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlR0WlFVTTVReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4clEwRkJhME1zTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRek5ITzFGQlJVUXNUVUZCVFN4TlFVRk5MRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRE0wUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVVnlSQ3hOUVVGTkxHZENRVUZuUWl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eDVRa0ZCZVVJc1IwRkJSeXhIUVVGSExFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1EwRkJRenRSUVVOMFJ5eE5RVUZOTEZWQlFWVXNSMEZCUnl4VlFVRlZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZGY0VRc1RVRkJUU3gzUWtGQmQwSXNSMEZCUnl4VlFVRlZMRWRCUVVjc1IwRkJSeXhEUVVGRExGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU03VVVGRk9VWXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4NVFrRkJlVUlzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTndSQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEV2l4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NkMEpCUVhkQ0xFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUXk5RExFMUJRVTBzVVVGQlVTeEhRVUZITEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExIZENRVUYzUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU55UlN4TlFVRk5MRWRCUVVjc1IwRkJSeXhoUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEdWQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0blFrRkRja1VzWjBKQlFXZENMRU5CUVVNc1EwRkJReXhIUVVGSExIZENRVUYzUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dG5Ra0ZEZWtRc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF6dGhRVU5rTzFsQlJVUXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRk8yZENRVU5XTEU5QlFVOHNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRk8yOUNRVU5rTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eDNRa0ZCZDBJc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdDNRa0ZETDBNc1NVRkJTU3huUWtGQlowSXNRMEZCUXl4RFFVRkRMRWRCUVVjc2QwSkJRWGRDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExHVkJRV1VzUlVGQlJUczBRa0ZETVVVc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4SFFVRkhMSGRDUVVGM1FpeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN05FSkJRM0pFTEUxQlFVMDdlVUpCUTFRN2NVSkJRMG83YVVKQlEwbzdZVUZEU2p0cFFrRkJUVHRuUWtGRFNDeFBRVUZQTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRFpDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzZDBKQlFYZENMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3ZDBKQlF5OURMRWxCUVVrc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4SFFVRkhMSGRDUVVGM1FpeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhsUVVGbExFVkJRVVU3TkVKQlF6RkZMR2RDUVVGblFpeERRVUZETEVOQlFVTXNSMEZCUnl4M1FrRkJkMElzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPelJDUVVOeVJDeE5RVUZOTzNsQ1FVTlVPM0ZDUVVOS08ybENRVU5LTzJGQlEwbzdVMEZEU2p0UlFVVkVMRTlCUVU4c1owSkJRV2RDTEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVWRU96czdPenM3TzA5QlQwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNaVUZCZDBJc1JVRkJSU3g1UWtGQmNVUXNSVUZCUlN4VlFVRm5RaXhGUVVGRkxHRkJRWEZDTEUxQlFVMDdVVUZETTBvc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hwUWtGQlR5eERRVUZETEVWQlFVVTdXVUZEYUVRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dFRRVU55UlR0UlFVVkVMRWxCUVVrc1EwRkJReXg1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4NVFrRkJlVUlzUlVGQlJTeHRSRUZCZDBJc1EwRkJReXhGUVVGRk8xbEJRek5GTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHbEdRVUZwUml4RFFVRkRMRU5CUVVNN1UwRkROVWM3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeEZRVUZGTEZkQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTNoRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVMEZEYUVVN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVTdXVUZET1VNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNhME5CUVd0RExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVNelJ6dFJRVVZFTEUxQlFVMHNlVUpCUVhsQ0xFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEzSkRMRTFCUVUwc2IwSkJRVzlDTEVkQlFVY3NSMEZCUnl4RFFVRkRMR2RDUVVGblFpeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUlRsRUxFMUJRVTBzVFVGQlRTeEhRVUZITERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpORUxFMUJRVTBzVlVGQlZTeEhRVUZITEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRmNrUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVONFFpeDVRa0ZCZVVJc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eHZRa0ZCYjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4NVFrRkJlVUlzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1EwRkJRenRUUVVONlNUdFJRVVZFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVVUzUlN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NlVUpCUVhsQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNaRUxFMUJRVTBzV1VGQldTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxHRkJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlJYWkpMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEycERMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5xUkR0VFFVTktPMUZCUlVRc1QwRkJUeXhsUVVGbExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1lVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRha2dzUTBGQlF6dEpRVVZFT3pzN096czdUMEZOUnp0SlFVTkpMRTFCUVUwc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4M1FrRkJiVU1zUlVGQlJTeFhRVUZ6UWl4RlFVRkZMR0ZCUVhGQ0xFMUJRVTA3VVVGRE0wZ3NTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEhkQ1FVRjNRaXhGUVVGRkxGTkJRVk1zUTBGQlF5eEZRVUZGTzFsQlF6TkVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhkRVFVRjNSQ3hEUVVGRExFTkJRVU03VTBGRGJrWTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRk5CUVZNc1EwRkJReXhGUVVGRk8xbEJRemxETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExESkRRVUV5UXl4RFFVRkRMRU5CUVVNN1UwRkRkRVU3VVVGRFJDeEpRVUZKTEVOQlFVTXNOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1dVRkRPVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2EwTkJRV3RETERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU16Unp0UlFVVkVMRTFCUVUwc2QwSkJRWGRDTEVkQlFVY3NWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRM0pFTEVsQlFVa3NTVUZCWlN4RFFVRkRPMUZCUlhCQ0xFMUJRVTBzU1VGQlNTeEhRVUZITERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUTNwRUxFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRmJrUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVONlFpeEpRVUZKTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkZOVVVzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRka1FzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMmRDUVVOc1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRMklzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzJkQ1FVTnFReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03WVVGRGNrTTdXVUZGUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU5xUXl4M1FrRkJkMElzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTXhSRHRUUVVOS08xRkJSVVFzVDBGQlR5eDNRa0ZCZDBJc1EwRkJRenRKUVVOd1F5eERRVUZET3p0QlFXcGpSQ3hsUVVGbE8wRkJRMU1zTmtKQlFYbENMRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJReTlFTEdWQlFXVTdRVUZEVXl3MlFrRkJlVUlzUjBGQlZ5eERRVUZETEVOQlFVTTdRVUZET1VRc1pVRkJaVHRCUVVOVExHVkJRVmNzUjBGQlZ5eERRVUZETEVOQlFVTTdRVUZEYUVRc1pVRkJaVHRCUVVOVExHMUNRVUZsTEVkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNN1FVRkRkRVFzWlVGQlpUdEJRVU5UTEcxQ1FVRmxMRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRM0pFTEdWQlFXVTdRVUZEVXl4clFrRkJZeXhIUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzQkVMR1ZCUVdVN1FVRkRVeXhyUWtGQll5eEhRVUZYTEVOQlFVTXNRMEZCUXp0QlFVTnVSQ3hsUVVGbE8wRkJRMU1zVTBGQlN5eEhRVUZYTEVOQlFVTXNRMEZCUXp0QlFXaENPVU1zYTBKQmJXTkRJbjA9IiwidmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGJpZ19pbnRlZ2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImJpZy1pbnRlZ2VyXCIpKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuLyoqXHJcbiAqIEhlbHBlciBjbGFzcyB0byBjb252ZXJ0IGJldHdlZW4gQmlnSW50ZWdlciBhbmQgb3RoZXIgdHlwZXMuXHJcbiAqIENvbnZlcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lyaS9ibG9iL2Rldi9zcmMvbWFpbi9qYXZhL2NvbS9pb3RhL2lyaS9oYXNoL0tlcmwuamF2YVxyXG4gKi9cclxuY2xhc3MgQmlnSW50ZWdlckhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdHJpdHMgdG8gYSBiaWdJbnRlZ2VyLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBjb252ZXJ0LlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBPZmZzZXQgd2l0aGluIHRoZSBhcnJheSB0byBzdGFydC5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgdHJpdHMgYXJyYXkgdG8gY29udmVydC5cclxuICAgICAqIEByZXR1cm5zIEJpZyBpbnRlZ2VyIHZlcnNpb24gb2YgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0cml0c1RvQmlnSW50ZWdlcih0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9mZnNldCArIGxlbmd0aCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmFsdWUgPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQuemVybztcclxuICAgICAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5tdWx0aXBseShCaWdJbnRlZ2VySGVscGVyLlJBRElYKS5hZGQoYmlnX2ludGVnZXJfMS5kZWZhdWx0KHRyaXRzW29mZnNldCArIGldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBiaWdJbnRlZ2VyIHRvIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBiaWdJbnRlZ2VyIHRvIGNvbnZlcnQgdG8gdHJpdHMuXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIGFycmF5IHRvIHJlY2VpdmUgdGhlIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IHRvIHBsYWNlIHRoZSB0cml0cyBpbiB0aGUgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYmlnSW50ZWdlclRvVHJpdHModmFsdWUsIHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgYmlnX2ludGVnZXJfMS5kZWZhdWx0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgYmlnSW50ZWdlciB0eXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJpdHMgbXVzdCBiZSBhbiBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2Zmc2V0ICsgbGVuZ3RoID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhYnNvbHV0ZVZhbHVlID0gdmFsdWUuY29tcGFyZVRvKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdC56ZXJvKSA8IDAgPyB2YWx1ZS5uZWdhdGUoKSA6IHZhbHVlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGl2UmVtYWluZGVyID0gYWJzb2x1dGVWYWx1ZS5kaXZtb2QoQmlnSW50ZWdlckhlbHBlci5SQURJWCk7XHJcbiAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBkaXZSZW1haW5kZXIucXVvdGllbnQ7XHJcbiAgICAgICAgICAgIGxldCByZW1haW5kZXIgPSBkaXZSZW1haW5kZXIucmVtYWluZGVyO1xyXG4gICAgICAgICAgICBpZiAocmVtYWluZGVyID4gQmlnSW50ZWdlckhlbHBlci5NQVhfVFJJVF9WQUxVRSkge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gQmlnSW50ZWdlckhlbHBlci5NSU5fVFJJVF9WQUxVRTtcclxuICAgICAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBhYnNvbHV0ZVZhbHVlLmFkZChiaWdfaW50ZWdlcl8xLmRlZmF1bHRbXCIxXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cml0c1tvZmZzZXQgKyBpXSA9IHJlbWFpbmRlci50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5jb21wYXJlVG8oYmlnX2ludGVnZXJfMS5kZWZhdWx0Lnplcm8pIDwgMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBdm9pZCBuZWdhdGl2ZSB6ZXJvXHJcbiAgICAgICAgICAgICAgICB0cml0c1tvZmZzZXQgKyBpXSA9IHRyaXRzW29mZnNldCArIGldID09PSAwID8gMCA6IC10cml0c1tvZmZzZXQgKyBpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgYmlnSW50ZWdlciBpbnRvIGJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxyXG4gICAgICogQHBhcmFtIGRlc3RpbmF0aW9uIFRoZSBkZXN0aW5hdGlvbiBhcnJheSB0byBzdG9yZSB0aGUgYnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgd2l0aGluIHRoZSBhcnJheSB0byBzdG9yZSB0aGUgYnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBiaWdJbnRlZ2VyVG9CeXRlcyh2YWx1ZSwgZGVzdGluYXRpb24sIG9mZnNldCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgYmlnX2ludGVnZXJfMS5kZWZhdWx0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgYmlnSW50ZWdlciB0eXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoZGVzdGluYXRpb24sIEFycmF5QnVmZmVyKSB8fCBkZXN0aW5hdGlvbi5ieXRlTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGRlc3RpbmF0aW9uIG11c3QgYmUgYW4gYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLmJ5dGVMZW5ndGggLSBvZmZzZXQgPCBCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYERlc3RpbmF0aW9uIGFycmF5IGhhcyBpbnZhbGlkIHNpemUsIGl0IG11c3QgYmUgYXQgbGVhc3QgJHtCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbWVtYmVyIGlmIGl0IGlzIG5lZ2F0aXZlIGZvciBsYXRlclxyXG4gICAgICAgIGNvbnN0IGlzTmVnID0gdmFsdWUuaXNOZWdhdGl2ZSgpID8gLTEgOiAwO1xyXG4gICAgICAgIGxldCBoZXhTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygxNik7XHJcbiAgICAgICAgaWYgKGlzTmVnID09PSAtMSkge1xyXG4gICAgICAgICAgICAvLyBCdXQgcmVtb3ZlIGl0IGZvciBub3dcclxuICAgICAgICAgICAgaGV4U3RyaW5nID0gaGV4U3RyaW5nLnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBOb3cgbWFrZSBzdXJlIHRoZSBoZXggc3RyaW5nIGlzIGFuIGV2ZW4gbGVuZ3RoIHNvIHRoZSByZWdleCB3b3Jrc1xyXG4gICAgICAgIGlmIChoZXhTdHJpbmcubGVuZ3RoICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICBoZXhTdHJpbmcgPSBgMCR7aGV4U3RyaW5nfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBoZXhTdHJpbmcubWF0Y2goL1swLTlhLWZdezJ9L2cpO1xyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGhleCB0byBudW1iZXJzXHJcbiAgICAgICAgY29uc3Qgc2lnbmVkQnl0ZXMgPSBuZXcgSW50OEFycmF5KG1hdGNoZXNcclxuICAgICAgICAgICAgLm1hcChoZXggPT4gcGFyc2VJbnQoYDB4JHtoZXh9YCwgMTYpKSk7XHJcbiAgICAgICAgaWYgKGlzTmVnID09PSAtMSkge1xyXG4gICAgICAgICAgICBCaWdJbnRlZ2VySGVscGVyLnR3b3NDb21wbGVtZW50KHNpZ25lZEJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZGVzdGluYXRpb24pO1xyXG4gICAgICAgIC8vIFBhZCB0aGUgc3RhcnQgb2YgdGhlIGJ1ZmZlciB3aXRoIHRoZSBuZWcgdmFsdWVcclxuICAgICAgICBsZXQgaSA9IG9mZnNldDtcclxuICAgICAgICB3aGlsZSAoaSArIHNpZ25lZEJ5dGVzLmxlbmd0aCA8IEJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICBkYXRhVmlldy5zZXRJbnQ4KGkrKywgaXNOZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBbmQgY29weSBpbiB0aGUgYWN0dWFsIGJ5dGVzXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHNpZ25lZEJ5dGVzLmxlbmd0aDsgai0tID4gMDspIHtcclxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0SW50OChpKyssIHNpZ25lZEJ5dGVzW3NpZ25lZEJ5dGVzLmxlbmd0aCAtIDEgLSBqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGJ5dGVzIHRvIGEgYmlnSW50ZWdlci5cclxuICAgICAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBieXRlcy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCB3aXRoaW4gdGhlIGJ5dGVzIHRvIHN0YXJ0IGNvbnZlcnNpb24uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGJ5dGVzIHRvIHVzZSBmb3IgY29udmVyc2lvbi5cclxuICAgICAqIEByZXR1cm5zIEJpZyBpbnRlZ2VyIHZlcnNpb24gb2YgYnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBieXRlc1RvQmlnSW50ZWdlcihzb3VyY2UsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNvdXJjZSwgQXJyYXlCdWZmZXIpIHx8IHNvdXJjZS5ieXRlTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHNvdXJjZSBtdXN0IGJlIGEgbm9uIGVtcHR5IG51bWJlciBhcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSBhIG51bWJlciA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzb3VyY2UuYnl0ZUxlbmd0aCAtIG9mZnNldCA8IEJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgU291cmNlIGFycmF5IGhhcyBpbnZhbGlkIHNpemUsIGl0IG11c3QgYmUgYXQgbGVhc3QgJHtCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHNvdXJjZSk7XHJcbiAgICAgICAgbGV0IHNpZ25lZEJ5dGVzID0gbmV3IEludDhBcnJheShkYXRhVmlldy5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IGRhdGFWaWV3LmJ5dGVMZW5ndGg7IGIrKykge1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlc1tiXSA9IGRhdGFWaWV3LmdldEludDgoYiArIG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaW5pdGlhbCBwYWRkaW5nIGxlYXZpbmcgYXQgbGVhc3Qgb25lIGJ5dGVcclxuICAgICAgICBsZXQgcGFkZGluZ09mZnNldCA9IDA7XHJcbiAgICAgICAgY29uc3QgZmlyc3RCeXRlID0gc2lnbmVkQnl0ZXNbMF07XHJcbiAgICAgICAgY29uc3QgaXNOZWcgPSBmaXJzdEJ5dGUgPCAwO1xyXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBwYWRkaW5nIGNoYXJhY3RlciBpcyBuZWdhdGl2ZSB0aGVuIHJldmVyc2UgdGhlIDJzIGNvbXBsZW1lbnRcclxuICAgICAgICAvLyBidXQgZmlyc3Qgc3RyaXAgb2YgdGhlIGxlYWRpbmcgcGFkZGluZ1xyXG4gICAgICAgIGlmIChmaXJzdEJ5dGUgPT09IDAgfHwgZmlyc3RCeXRlID09PSAtMSkge1xyXG4gICAgICAgICAgICB3aGlsZSAoc2lnbmVkQnl0ZXNbcGFkZGluZ09mZnNldF0gPT09IGZpcnN0Qnl0ZSAmJiBwYWRkaW5nT2Zmc2V0IDwgc2lnbmVkQnl0ZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ09mZnNldCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFN0cmlwIGFueSBwYWRkaW5nXHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzID0gc2lnbmVkQnl0ZXMuc2xpY2UocGFkZGluZ09mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc05lZykge1xyXG4gICAgICAgICAgICBCaWdJbnRlZ2VySGVscGVyLnR3b3NDb21wbGVtZW50KHNpZ25lZEJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhleFN0cmluZyA9IGlzTmVnID8gXCItXCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KHNpZ25lZEJ5dGVzLmJ1ZmZlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBkdi5ieXRlTGVuZ3RoOyBoKyspIHtcclxuICAgICAgICAgICAgaGV4U3RyaW5nICs9IGAwMCR7ZHYuZ2V0VWludDgoaCkudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmlnX2ludGVnZXJfMS5kZWZhdWx0KGhleFN0cmluZywgMTYpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgdHdvc0NvbXBsZW1lbnQoc2lnbmVkQnl0ZXMpIHtcclxuICAgICAgICAvLyBpZiB0aGUgd2hvbGUgbnVtYmVyIGlzIG5lZ2F0aXZlIHRoZW5cclxuICAgICAgICAvLyBjaGFuZ2UgdG8gMidzIGNvbXBsZW1lbnRzIGJ5IG5vdGluZyBhbGwgdGhlIG51bWJlcnNcclxuICAgICAgICAvLyBhbmQgYWRkaW5nIDEgdG8gdGhlIGxhc3QgaS5lLiB+YmlnbnVtKzFcclxuICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IHNpZ25lZEJ5dGVzLmxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzW2JdID0gfnNpZ25lZEJ5dGVzW2JdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgMSB0byBsYXN0IG51bWJlciwgaWYgdGhlIG51bWJlciBpcyAweEZGIGNvbnRpbnVlIHRvIGNhcnJ5XHJcbiAgICAgICAgbGV0IGMgPSBzaWduZWRCeXRlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXNbY10rKztcclxuICAgICAgICB9IHdoaWxlIChzaWduZWRCeXRlc1tjLS1dID09PSAwICYmIGMgPiAwKTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5SQURJWCA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCgzKTtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuTUFYX1RSSVRfVkFMVUUgPSBCaWdJbnRlZ2VySGVscGVyLlJBRElYLm1pbnVzKDEpLmRpdmlkZSgyKTtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuTUlOX1RSSVRfVkFMVUUgPSBCaWdJbnRlZ2VySGVscGVyLk1BWF9UUklUX1ZBTFVFLm5lZ2F0ZSgpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5CSVRfSEFTSF9MRU5HVEggPSAzODQ7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEggPSBCaWdJbnRlZ2VySGVscGVyLkJJVF9IQVNIX0xFTkdUSCAvIDg7XHJcbmV4cG9ydHMuQmlnSW50ZWdlckhlbHBlciA9IEJpZ0ludGVnZXJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVltbG5TVzUwWldkbGNraGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMkpwWjBsdWRHVm5aWEpJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNPRVJCUVdsRE8wRkJRMnBETEhORVFVRnRSRHRCUVVWdVJEczdPMGRCUjBjN1FVRkRTRHRKUVdGSk96czdPenM3VDBGTlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eExRVUZuUWl4RlFVRkZMRTFCUVdNc1JVRkJSU3hOUVVGak8xRkJRelZGTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZET1VRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNlVU5CUVhsRExFTkJRVU1zUTBGQlF6dFRRVU53UlR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VTBGRE4wUTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU5vUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlJVUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVVJCUVhWRUxFTkJRVU1zUTBGQlF6dFRRVU5zUmp0UlFVVkVMRWxCUVVrc1MwRkJTeXhIUVVGSExIRkNRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUlhoQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTJ4RExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXh4UWtGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEycEdPMUZCUlVRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFVVkVPenM3T3pzN1QwRk5SenRKUVVOSkxFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhMUVVGM1FpeEZRVUZGTEV0QlFXZENMRVZCUVVVc1RVRkJZeXhGUVVGRkxFMUJRV003VVVGRGRFY3NTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4eFFrRkJUU3hEUVVGRExFVkJRVVU3V1VGRGNrTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOb1JUdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRVZCUVVVN1dVRkRlRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1owTkJRV2RETEVOQlFVTXNRMEZCUXp0VFFVTXpSRHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5eERRVUZETEVOQlFVTTdVMEZETjBRN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4cFEwRkJhVU1zUTBGQlF5eERRVUZETzFOQlF6VkVPMUZCUlVRc1NVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVUkJRWFZFTEVOQlFVTXNRMEZCUXp0VFFVTnNSanRSUVVWRUxFbEJRVWtzWVVGQllTeEhRVUZITEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc2NVSkJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJSVGxGTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkROMElzVFVGQlRTeFpRVUZaTEVkQlFVY3NZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOc1JTeGhRVUZoTEVkQlFVY3NXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJRenRaUVVOMFF5eEpRVUZKTEZOQlFWTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRE8xbEJSWFpETEVsQlFVa3NVMEZCVXl4SFFVRkhMR2RDUVVGblFpeERRVUZETEdOQlFXTXNSVUZCUlR0blFrRkROME1zVTBGQlV5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRExHTkJRV01zUTBGQlF6dG5Ra0ZETlVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNjVUpCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyeEVPMWxCUTBRc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03VTBGRE9VTTdVVUZGUkN4SlFVRkpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zY1VKQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGJFTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRE4wSXNjMEpCUVhOQ08yZENRVU4wUWl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVONFJUdFRRVU5LTzBsQlEwd3NRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRXRCUVhkQ0xFVkJRVVVzVjBGQmQwSXNSVUZCUlN4TlFVRmpPMUZCUXpsR0xFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzY1VKQlFVMHNRMEZCUXl4RlFVRkZPMWxCUTNKRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVMEZEYUVVN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxGZEJRVmNzUTBGQlF5eEpRVUZKTEZkQlFWY3NRMEZCUXl4VlFVRlZMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRMmhHTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl4RFFVRkRMRU5CUVVNN1UwRkROMFE3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhyUTBGQmEwTXNRMEZCUXl4RFFVRkRPMU5CUXpkRU8xRkJSVVFzU1VGQlNTeFhRVUZYTEVOQlFVTXNWVUZCVlN4SFFVRkhMRTFCUVUwc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4blFrRkJaMElzUlVGQlJUdFpRVU55UlN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5d3lSRUZCTWtRc1owSkJRV2RDTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzcElPMUZCUlVRc2RVTkJRWFZETzFGQlEzWkRMRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVXhReXhKUVVGSkxGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJSVzVETEVsQlFVa3NTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8xbEJRMlFzZDBKQlFYZENPMWxCUTNoQ0xGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnhETzFGQlEwUXNiMFZCUVc5Rk8xRkJRM0JGTEVsQlFVa3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6VkNMRk5CUVZNc1IwRkJSeXhKUVVGSkxGTkJRVk1zUlVGQlJTeERRVUZETzFOQlF5OUNPMUZCUTBRc1RVRkJUU3hQUVVGUExFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVWb1JDdzJRa0ZCTmtJN1VVRkROMElzVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1QwRkJUenRoUVVOd1F5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRk0wTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVU3V1VGRFpDeG5Ra0ZCWjBJc1EwRkJReXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZEYUVRN1VVRkZSQ3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVVelF5eHBSRUZCYVVRN1VVRkRha1FzU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTJZc1QwRkJUeXhEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4blFrRkJaMElzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSVHRaUVVNdlJDeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFOQlEyaERPMUZCUTBRc0swSkJRU3RDTzFGQlF5OUNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWM3V1VGRGRrTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeFhRVUZYTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnNSVHRKUVVOTUxFTkJRVU03U1VGRlJEczdPenM3TzA5QlRVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNUVUZCYlVJc1JVRkJSU3hOUVVGakxFVkJRVVVzVFVGQll6dFJRVU12UlN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRmRCUVZjc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eFZRVUZWTEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTNSRkxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRFpEUVVFMlF5eERRVUZETEVOQlFVTTdVMEZEZUVVN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4clEwRkJhME1zUTBGQlF5eERRVUZETzFOQlF6ZEVPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEYUVRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNhVU5CUVdsRExFTkJRVU1zUTBGQlF6dFRRVU0xUkR0UlFVVkVMRWxCUVVrc1RVRkJUU3hEUVVGRExGVkJRVlVzUjBGQlJ5eE5RVUZOTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU1zWjBKQlFXZENMRVZCUVVVN1dVRkRhRVVzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2MwUkJRWE5FTEdkQ1FVRm5RaXhEUVVGRExHZENRVUZuUWl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOd1NEdFJRVVZFTEUxQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlJYUkRMRWxCUVVrc1YwRkJWeXhIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOeVJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNeFF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNN1UwRkRha1E3VVVGRlJDeDFSRUZCZFVRN1VVRkRka1FzU1VGQlNTeGhRVUZoTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNSQ0xFMUJRVTBzVTBGQlV5eEhRVUZITEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOcVF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSVFZDTERSRlFVRTBSVHRSUVVNMVJTeDVRMEZCZVVNN1VVRkRla01zU1VGQlNTeFRRVUZUTEV0QlFVc3NRMEZCUXl4SlFVRkpMRk5CUVZNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJUdFpRVU55UXl4UFFVRlBMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eFRRVUZUTEVsQlFVa3NZVUZCWVN4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTjJSaXhoUVVGaExFVkJRVVVzUTBGQlF6dGhRVU51UWp0WlFVTkVMRzlDUVVGdlFqdFpRVU53UWl4WFFVRlhMRWRCUVVjc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0VFFVTnNSRHRSUVVWRUxFbEJRVWtzUzBGQlN5eEZRVUZGTzFsQlExQXNaMEpCUVdkQ0xFTkJRVU1zWTBGQll5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMU5CUTJoRU8xRkJSVVFzU1VGQlNTeFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0UlFVTnFReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRE5VTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGNFTXNVMEZCVXl4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNM1JEdFJRVVZFTEU5QlFVOHNjVUpCUVUwc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRmRCUVhOQ08xRkJRMmhFTEhWRFFVRjFRenRSUVVOMlF5eHpSRUZCYzBRN1VVRkRkRVFzTUVOQlFUQkRPMUZCUXpGRExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNwRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU53UXp0UlFVTkVMR2RGUVVGblJUdFJRVU5vUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTXZRaXhIUVVGSE8xbEJRME1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1UwRkRjRUlzVVVGQlVTeFhRVUZYTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0SlFVTTVReXhEUVVGRE96dEJRV3hQUkN4bFFVRmxPMEZCUTFNc2MwSkJRVXNzUjBGQmMwSXNjVUpCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU0zUkN4bFFVRmxPMEZCUTFNc0swSkJRV01zUjBGQmMwSXNaMEpCUVdkQ0xFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEZEVjc1pVRkJaVHRCUVVOVExDdENRVUZqTEVkQlFYTkNMR2RDUVVGblFpeERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRCUVVWeVJ5eGxRVUZsTzBGQlExTXNaME5CUVdVc1IwRkJWeXhIUVVGSExFTkJRVU03UVVGRGRFUXNaVUZCWlR0QlFVTlRMR2xEUVVGblFpeEhRVUZYTEdkQ1FVRm5RaXhEUVVGRExHVkJRV1VzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZZTlVZc05FTkJiMDlESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2FjdGlvblwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBzcG9uZ2VGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgZm9yIHRyYW5zYWN0aW9ucy5cclxuICogQ29udmVydGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lvdGEubGliLmpzL2Jsb2IvbWFzdGVyL2xpYi9jcnlwdG8vc2lnbmluZy9zaWduaW5nLmpzXHJcbiAqL1xyXG5jbGFzcyBUcmFuc2FjdGlvbkhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0aGUgaGFzaCBmb3IgYSB0cmFuc2FjdGlvbi5cclxuICAgICAqIEBwYXJhbSB0cmFuc2FjdGlvbiBUaGUgdHJhbnNhY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGhhc2guXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgaGFzaCBvZiB0aHIgdHJhbnNhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBoYXNoKHRyYW5zYWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyYW5zYWN0aW9uLCB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cmFuc2FjdGlvbiBtdXN0IGJlIG9mIHR5cGUgVHJhbnNhY3Rpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN1cmwgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShcImN1cmxcIik7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ucml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyh0cmFuc2FjdGlvbi50b1RyeXRlcygpKS50b0FycmF5KCk7XHJcbiAgICAgICAgY3VybC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY3VybC5hYnNvcmIodHJhbnNhY3Rpb25Ucml0cywgMCwgdHJhbnNhY3Rpb25Ucml0cy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hUcml0cyA9IG5ldyBJbnQ4QXJyYXkoY3VybC5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpKTtcclxuICAgICAgICBjdXJsLnNxdWVlemUoaGFzaFRyaXRzLCAwLCBoYXNoVHJpdHMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cml0c18xLlRyaXRzLmZyb21BcnJheShoYXNoVHJpdHMpLnRvVHJ5dGVzKCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVHJhbnNhY3Rpb25IZWxwZXIgPSBUcmFuc2FjdGlvbkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKaGJuTmhZM1JwYjI1SVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OTBjbUZ1YzJGamRHbHZia2hsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMSGxFUVVGelJEdEJRVU4wUkN4MVJVRkJiMFU3UVVGRGNFVXNNa1JCUVhkRU8wRkJRM2hFTEhORVFVRnRSRHRCUVVOdVJDdzRSRUZCTWtRN1FVRkZNMFE3T3p0SFFVZEhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUYzUWp0UlFVTjJReXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxIbENRVUZYTEVOQlFVTXNSVUZCUlR0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3MlEwRkJOa01zUTBGQlF5eERRVUZETzFOQlEzaEZPMUZCUlVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEY2tRc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4aFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJSVFZGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVOc1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVXhSQ3hOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RlFVRkZMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVVUzUXl4UFFVRlBMRmRCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zWVVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEyeEZMRU5CUVVNN1EwRkRTanRCUVhSQ1JDdzRRMEZ6UWtNaWZRPT0iLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxuX19leHBvcnQocmVxdWlyZShcIi4vZGlnZXN0cy9zaGEzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZXJyb3IvY3J5cHRvRXJyb3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mYWN0b3JpZXMvcHJvb2ZPZldvcmtGYWN0b3J5XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oYXNoL2lzc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvYmlnSW50ZWdlckhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcG9uZ2VzL2N1cmxcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcG9uZ2VzL2tlcmxcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NiME5CUVN0Q08wRkJReTlDTEhsRFFVRnZRenRCUVVOd1F5eHZSRUZCSzBNN1FVRkRMME1zSzBOQlFUQkRPMEZCUXpGRExHZERRVUV5UWp0QlFVTXpRaXhuUkVGQk1rTTdRVUZETTBNc2FVUkJRVFJETzBGQlJ6VkRMRzFFUVVFNFF6dEJRVU01UXl4dlEwRkJLMEk3UVVGREwwSXNiME5CUVN0Q0luMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCB0aW1lU2VydmljZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L3NlcnZpY2VzL3RpbWVTZXJ2aWNlXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RhZ1wiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25fMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zYWN0aW9uXCIpO1xyXG5jb25zdCB0cnl0ZU51bWJlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVOdW1iZXJcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBwcm9vZiBvZiB3b3JrLlxyXG4gKi9cclxuY2xhc3MgUHJvb2ZPZldvcmtCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIFByb29mT2ZXb3JrLlxyXG4gICAgICogQHBhcmFtIHRpbWVTZXJ2aWNlIFNlcnZpY2UgdG8gZ2V0IHRoZSB0aW1lIGZvciBhdHRhY2htZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGltZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl90aW1lU2VydmljZSA9IHRpbWVTZXJ2aWNlIHx8IG5ldyB0aW1lU2VydmljZV8xLlRpbWVTZXJ2aWNlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHRoZSBwcm9vZiBvZiB3b3JrIHRvIHBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uLlxyXG4gICAgICogV2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIGltcGxlbWVudGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHByb29mIG9mIHdvcmsgb24gdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gdHJ1bmtUcmFuc2FjdGlvbiBUaGUgdHJ1bmtUcmFuc2FjdGlvbiB0byB1c2UgZm9yIHRoZSBwb3cuXHJcbiAgICAgKiBAcGFyYW0gYnJhbmNoVHJhbnNhY3Rpb24gVGhlIGJyYW5jaFRyYW5zYWN0aW9uIHRvIHVzZSBmb3IgdGhlIHBvdy5cclxuICAgICAqIEBwYXJhbSB0cnl0ZXMgVGhlIHRyeXRlcyB0byBwZXJmb3JtIHRoZSBwb3cgb24uXHJcbiAgICAgKiBAcGFyYW0gbWluV2VpZ2h0TWFnbml0dWRlIFRoZSBtaW5pbXVtIHdlaWdodCBtYWduaXR1ZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJ5dGVzIHByb2R1Y2VkIGJ5IHRoZSBwcm9vZiBvZiB3b3JrLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBwb3codHJ1bmtUcmFuc2FjdGlvbiwgYnJhbmNoVHJhbnNhY3Rpb24sIHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRydW5rVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnVua1RyYW5zYWN0aW9uIG11c3QgYmUgYW4gb2JqZWN0IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGJyYW5jaFRyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgYnJhbmNoVHJhbnNhY3Rpb24gbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNUeXBlZCh0cnl0ZXMsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJ5dGVzIG11c3QgYmUgYW4gYXJyYXkgb2YgdHlwZSBUcnl0ZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihtaW5XZWlnaHRNYWduaXR1ZGUpIHx8IG1pbldlaWdodE1hZ25pdHVkZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG1pbldlaWdodE1hZ25pdHVkZSBtdXN0IGJlID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmluYWxUcnl0ZXMgPSBbXTtcclxuICAgICAgICBsZXQgcHJldmlvdXNUcmFuc2FjdGlvbkhhc2g7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnl0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLmZyb21Ucnl0ZXModHJ5dGVzW2ldKTtcclxuICAgICAgICAgICAgLy8gU3RhcnQgd2l0aCBsYXN0IGluZGV4IHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiBpdCB0aGUgdHJ1bmsgLyBicmFuY2ggd2hpY2ggdGhlIHVzZXIgaGFzIHN1cHBsaWVkXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEgYnVuZGxlLCBjaGFpbiB0aGUgYnVuZGxlIHRyYW5zYWN0aW9ucyB2aWFcclxuICAgICAgICAgICAgLy8gdHJ1bmtUcmFuc2FjdGlvbiB0b2dldGhlclxyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5hdHRhY2htZW50VGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKHRoaXMuX3RpbWVTZXJ2aWNlLm1zU2luY2VFcG9jaCgpKTtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKFByb29mT2ZXb3JrQmFzZS5NQVhfVElNRVNUQU1QX1ZBTFVFKTtcclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgdHJhbnNhY3Rpb24sIHRvIGJlIHByb2Nlc3NlZFxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBpdCdzIHRoZSBsYXN0IGluIHRoZSBidW5kbGUgYW5kIHRoZW5cclxuICAgICAgICAgICAgLy8gYXNzaWduIGl0IHRoZSBzdXBwbGllZCB0cnVuayBhbmQgYnJhbmNoIHRyYW5zYWN0aW9uc1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkocHJldmlvdXNUcmFuc2FjdGlvbkhhc2gpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBsYXN0IHRyYW5zYWN0aW9uIGluIHRoZSBidW5kbGVcclxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbi5sYXN0SW5kZXgudG9OdW1iZXIoKSAhPT0gdHJhbnNhY3Rpb24uY3VycmVudEluZGV4LnRvTnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIldyb25nIGJ1bmRsZSBvcmRlci4gVGhlIGJ1bmRsZSBzaG91bGQgYmUgb3JkZXJlZCBpbiBkZXNjZW5kaW5nIG9yZGVyIGZyb20gY3VycmVudEluZGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24udHJ1bmtUcmFuc2FjdGlvbiA9IHRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5icmFuY2hUcmFuc2FjdGlvbiA9IGJyYW5jaFRyYW5zYWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24udHJ1bmtUcmFuc2FjdGlvbiA9IHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uYnJhbmNoVHJhbnNhY3Rpb24gPSB0cnVua1RyYW5zYWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RyeXRlcyA9IHRyYW5zYWN0aW9uLnRvVHJ5dGVzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZVRyeXRlcyA9IGF3YWl0IHRoaXMuc2luZ2xlUG93KG5ld1RyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKTtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24ubm9uY2UgPSB0YWdfMS5UYWcuZnJvbVRyeXRlcyhzaW5nbGVUcnl0ZXMuc3ViKHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24uTEVOR1RIIC0gdGFnXzEuVGFnLkxFTkdUSCwgdGFnXzEuVGFnLkxFTkdUSCkpO1xyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGhhc2ggb2YgdGhlIG5ldyB0cmFuc2FjdGlvbiB3aXRoIG5vbmNlIGFuZCB1c2UgdGhhdCBhcyB0aGUgcHJldmlvdXMgaGFzaCBmb3IgbmV4dCBlbnRyeVxyXG4gICAgICAgICAgICBjb25zdCByZXR1cm5UcmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24uZnJvbVRyeXRlcyhzaW5nbGVUcnl0ZXMpO1xyXG4gICAgICAgICAgICBwcmV2aW91c1RyYW5zYWN0aW9uSGFzaCA9IHRyYW5zYWN0aW9uSGVscGVyXzEuVHJhbnNhY3Rpb25IZWxwZXIuaGFzaChyZXR1cm5UcmFuc2FjdGlvbik7XHJcbiAgICAgICAgICAgIGZpbmFsVHJ5dGVzLnB1c2gocmV0dXJuVHJhbnNhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXZlcnNlIHRoZSBvcmRlciBzbyB0aGF0IGl0J3MgYXNjZW5kaW5nIGZyb20gY3VycmVudEluZGV4XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsVHJ5dGVzLnJldmVyc2UoKS5tYXAodHJhbnNhY3Rpb24gPT4gdHJhbnNhY3Rpb24udG9Ucnl0ZXMoKSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBtYXhpbXVtIHRpbWVzdGFtcCB2YWx1ZSB1c2VkIGluIHByb29mIG9mIHdvcmsuXHJcbiAqL1xyXG5Qcm9vZk9mV29ya0Jhc2UuTUFYX1RJTUVTVEFNUF9WQUxVRSA9IChNYXRoLnBvdygzLCAyNykgLSAxKSAvIDI7XHJcbmV4cG9ydHMuUHJvb2ZPZldvcmtCYXNlID0gUHJvb2ZPZldvcmtCYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEp2YjJaUFpsZHZjbXRDWVhObExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNCeWIyOW1UMlpYYjNKckwzQnliMjltVDJaWGIzSnJRbUZ6WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTUVWQlFYVkZPMEZCUTNaRkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZGZWtVc01rVkJRWGRGTzBGQlEzaEZMSGxFUVVGelJEdEJRVU4wUkN4MVJFRkJiMFE3UVVGRGNFUXNkVVZCUVc5Rk8wRkJRM0JGTEhWRlFVRnZSVHRCUVVOd1JTdzJSRUZCTUVRN1FVRkRNVVFzYzBSQlFXMUVPMEZCUTI1RUxHOUZRVUZwUlR0QlFVZHFSVHM3UjBGRlJ6dEJRVU5JTzBsQlUwazdPenRQUVVkSE8wbEJRMGdzV1VGQldTeFhRVUV3UWp0UlFVTnNReXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEZkQlFWY3NTVUZCU1N4SlFVRkpMSGxDUVVGWExFVkJRVVVzUTBGQlF6dEpRVU42UkN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhWUVVGVk8xRkJRMjVDTEU5QlFVOHNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wbEJRemRDTEVOQlFVTTdTVUZGUkRzN096czdPenRQUVU5SE8wbEJRMGtzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4blFrRkJjMElzUlVGQlJTeHBRa0ZCZFVJc1JVRkJSU3hOUVVGblFpeEZRVUZGTEd0Q1FVRXdRanRSUVVNeFJ5eEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1YwRkJTU3hEUVVGRExFVkJRVVU3V1VGRE9VTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zY1VSQlFYRkVMRU5CUVVNc1EwRkJRenRUUVVOb1JqdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hYUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU12UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHpSRUZCYzBRc1EwRkJReXhEUVVGRE8xTkJRMnBHTzFGQlEwUXNTVUZCU1N4RFFVRkRMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4bFFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOMFF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXcwUTBGQk5FTXNRMEZCUXl4RFFVRkRPMU5CUTNaRk8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExHdENRVUZyUWl4RFFVRkRMRWxCUVVrc2EwSkJRV3RDTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTNoRkxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRzlEUVVGdlF5eERRVUZETEVOQlFVTTdVMEZETDBRN1VVRkZSQ3hOUVVGTkxGZEJRVmNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZGZGtJc1NVRkJTU3gxUWtGQk5rSXNRMEZCUXp0UlFVVnNReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTndReXhOUVVGTkxGZEJRVmNzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVjBSQ3h2UTBGQmIwTTdXVUZEY0VNc01rUkJRVEpFTzFsQlF6TkVMREJFUVVFd1JEdFpRVU14UkN3MFFrRkJORUk3V1VGRE5VSXNWMEZCVnl4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNelJpeFhRVUZYTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRFVXNWMEZCVnl4RFFVRkRMRFpDUVVFMlFpeEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRV1VzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8xbEJSWGhITEc5RVFVRnZSRHRaUVVOd1JDeHpSRUZCYzBRN1dVRkRkRVFzZFVSQlFYVkVPMWxCUlhaRUxFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNSVUZCUlR0blFrRkRMME1zTUVOQlFUQkRPMmRDUVVNeFF5eEpRVUZKTEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFdEJRVXNzVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSVHR2UWtGRE1VVXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZDBaQlFYZEdMRU5CUVVNc1EwRkJRenRwUWtGRGJrZzdaMEpCUTBRc1YwRkJWeXhEUVVGRExHZENRVUZuUWl4SFFVRkhMR2RDUVVGblFpeERRVUZETzJkQ1FVTm9SQ3hYUVVGWExFTkJRVU1zYVVKQlFXbENMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdZVUZEY2tRN2FVSkJRVTA3WjBKQlEwZ3NWMEZCVnl4RFFVRkRMR2RDUVVGblFpeEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8yZENRVU4yUkN4WFFVRlhMRU5CUVVNc2FVSkJRV2xDTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03WVVGRGNFUTdXVUZGUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhYUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdXVUZGZWtNc1RVRkJUU3haUVVGWkxFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMWxCUlhwRkxGZEJRVmNzUTBGQlF5eExRVUZMTEVkQlFVY3NVMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEhsQ1FVRlhMRU5CUVVNc1RVRkJUU3hIUVVGSExGTkJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmJFY3NkMGRCUVhkSE8xbEJRM2hITEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03V1VGREwwUXNkVUpCUVhWQ0xFZEJRVWNzY1VOQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1dVRkZjRVVzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETzFOQlEzWkRPMUZCUTBRc05rUkJRVFpFTzFGQlF6ZEVMRTlCUVU4c1YwRkJWeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpWRkxFTkJRVU03TzBGQk5VWkVPenRIUVVWSE8wRkJRMjlDTEcxRFFVRnRRaXhIUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCU201R0xEQkRRWE5IUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgSVNwb25nZSB1c2luZyBDdXJsIGFsZ29yaXRobS5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaW90YS5saWIuanMvYmxvYi9tYXN0ZXIvbGliL2NyeXB0by9jdXJsL2N1cmwuanNcclxuICovXHJcbmNsYXNzIEN1cmwge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQ3VybC5cclxuICAgICAqIEBwYXJhbSByb3VuZHMgVGhlIG51bWJlciBvZiByb3VuZHMgdG8gdXNlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihyb3VuZHMgPSBDdXJsLk5VTUJFUl9PRl9ST1VORFMpIHtcclxuICAgICAgICB0aGlzLl9udW1iZXJPZlJvdW5kcyA9IHJvdW5kcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjb25zdGFudCBmb3IgdGhlIHNwb25lLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbnN0YW50IHRvIGdldC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb25zdGFudC5cclxuICAgICAqL1xyXG4gICAgZ2V0Q29uc3RhbnQobmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiTlVNQkVSX09GX1JPVU5EU1wiOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZSb3VuZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkhBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJTVEFURV9MRU5HVEhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VybFtuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFVua25vd24gY29uc3RhbnQgcmVxdWVzdGVkICR7bmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGlzZSB0aGUgaGFzaGVyLlxyXG4gICAgICogQHBhcmFtIHN0YXRlIFRoZSBpbml0aWFsIHN0YXRlIGZvciB0aGUgaGFzaGVyLlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplKHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ldyBJbnQ4QXJyYXkoQ3VybC5TVEFURV9MRU5HVEgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFic29yYiB0cml0cyBpbnRvIHRoZSBoYXNoLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gYWJzb3JiIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICovXHJcbiAgICBhYnNvcmIodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBsb2NhbExlbmd0aCA8IEN1cmwuSEFTSF9MRU5HVEggPyBsb2NhbExlbmd0aCA6IEN1cmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgbGltaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlW2krK10gPSB0cml0c1tsb2NhbE9mZnNldCsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSgpO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNxdWVlemUgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBzcXVlZXplIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqL1xyXG4gICAgc3F1ZWV6ZSh0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9jYWxPZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgbGV0IGxvY2FsTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBsaW1pdCA9IGxvY2FsTGVuZ3RoIDwgQ3VybC5IQVNIX0xFTkdUSCA/IGxlbmd0aCA6IEN1cmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgbGltaXQpIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzW2xvY2FsT2Zmc2V0KytdID0gdGhpcy5fc3RhdGVbaSsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSgpO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zZm9ybSB0aGUgaGFzaC5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0oKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlQ29weTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHJvdW5kID0gMDsgcm91bmQgPCB0aGlzLl9udW1iZXJPZlJvdW5kczsgcm91bmQrKykge1xyXG4gICAgICAgICAgICBzdGF0ZUNvcHkgPSBuZXcgSW50OEFycmF5KHRoaXMuX3N0YXRlLnNsaWNlKCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEN1cmwuU1RBVEVfTEVOR1RIOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlW2ldID0gQ3VybC5UUlVUSF9UQUJMRVtzdGF0ZUNvcHlbaW5kZXhdICsgKHN0YXRlQ29weVtpbmRleCArPSAoaW5kZXggPCAzNjUgPyAzNjQgOiAtMzY1KV0gPDwgMikgKyA1XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5DdXJsLkhBU0hfTEVOR1RIID0gMjQzO1xyXG5DdXJsLk5VTUJFUl9PRl9ST1VORFMgPSA4MTtcclxuQ3VybC5TVEFURV9MRU5HVEggPSBDdXJsLkhBU0hfTEVOR1RIICogMztcclxuLyogQGludGVybmFsICovXHJcbkN1cmwuVFJVVEhfVEFCTEUgPSBuZXcgSW50OEFycmF5KFsxLCAwLCAtMSwgMiwgMSwgLTEsIDAsIDIsIC0xLCAxLCAwXSk7XHJcbmV4cG9ydHMuQ3VybCA9IEN1cmw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXpjRzl1WjJWekwyTjFjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNjMFJCUVcxRU8wRkJSMjVFT3pzN1IwRkhSenRCUVVOSU8wbEJZVWs3T3p0UFFVZEhPMGxCUTBnc1dVRkJXU3hUUVVGcFFpeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ08xRkJRemxETEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1RVRkJUU3hEUVVGRE8wbEJRMnhETEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NWMEZCVnl4RFFVRkRMRWxCUVZrN1VVRkRNMElzVVVGQlVTeEpRVUZKTEVWQlFVVTdXVUZEVml4TFFVRkxMR3RDUVVGclFpeERRVUZETEVOQlFVTTdaMEpCUTNKQ0xFOUJRVThzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXp0aFFVTXZRanRaUVVORUxFdEJRVXNzWVVGQllTeERRVUZETzFsQlEyNUNMRXRCUVVzc1kwRkJZenRuUWtGRGJrSTdiMEpCUTBrc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdhVUpCUTNKQ08xbEJRMFFzVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zT0VKQlFUaENMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGVFVTdTVUZEVEN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NWVUZCVlN4RFFVRkRMRXRCUVdsQ08xRkJReTlDTEVsQlFVa3NTMEZCU3l4RlFVRkZPMWxCUTFBc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdVMEZEZGtJN1lVRkJUVHRaUVVOSUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzFOQlEyeEVPMGxCUTB3c1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NTMEZCU3p0UlFVTlNMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zUzBGQlowSXNSVUZCUlN4TlFVRmpMRVZCUVVVc1RVRkJZenRSUVVNeFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6bEVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhGRFFVRnhReXhEUVVGRExFTkJRVU03VTBGRGFFVTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU12UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8xTkJRM3BFTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGREwwTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zT0VKQlFUaENMRU5CUVVNc1EwRkJRenRUUVVONlJEdFJRVU5FTEVsQlFVa3NUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEyaERMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhWRVFVRjFSQ3hEUVVGRExFTkJRVU03VTBGRGJFWTdVVUZGUkN4SlFVRkpMRmRCUVZjc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGVrSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJSWHBDTEVkQlFVYzdXVUZEUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFZpeE5RVUZOTEV0QlFVc3NSMEZCUnl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlJUbEZMRTlCUVU4c1EwRkJReXhIUVVGSExFdEJRVXNzUlVGQlJUdG5Ra0ZEWkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRE0wTTdXVUZGUkN4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03V1VGRmFrSXNWMEZCVnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VTBGRGJrTXNVVUZCVVN4WFFVRlhMRWRCUVVjc1EwRkJReXhGUVVGRk8wbEJRemxDTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTlCUVU4c1EwRkJReXhMUVVGblFpeEZRVUZGTEUxQlFXTXNSVUZCUlN4TlFVRmpPMUZCUXpORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRE9VUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOb1JUdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNN1UwRkRla1E3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMU5CUTNwRU8xRkJRMFFzU1VGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZFVSQlFYVkVMRU5CUVVNc1EwRkJRenRUUVVOc1JqdFJRVVZFTEVsQlFVa3NWMEZCVnl4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVONlFpeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkZla0lzUjBGQlJ6dFpRVVZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOV0xFMUJRVTBzUzBGQlN5eEhRVUZITEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03V1VGRmVrVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1MwRkJTeXhGUVVGRk8yZENRVU5rTEV0QlFVc3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVNelF6dFpRVVZFTEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRaUVVWcVFpeFhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRUUVVOdVF5eFJRVUZSTEZkQlFWY3NSMEZCUnl4RFFVRkRMRVZCUVVVN1NVRkRPVUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOTExGTkJRVk03VVVGRFlpeEpRVUZKTEZOQlFXOUNMRU5CUVVNN1VVRkRla0lzU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUldRc1MwRkJTeXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzUzBGQlN5eEZRVUZGTEVWQlFVVTdXVUZEZGtRc1UwRkJVeXhIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVVV2UXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZGZUVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTnVTRHRUUVVOS08wbEJRMHdzUTBGQlF6czdRVUUzU25OQ0xHZENRVUZYTEVkQlFWY3NSMEZCUnl4RFFVRkRPMEZCUXpGQ0xIRkNRVUZuUWl4SFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNNVFpeHBRa0ZCV1N4SFFVRlhMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlJXNUZMR1ZCUVdVN1FVRkRVeXhuUWtGQlZ5eEhRVUZqTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRk9la2NzYjBKQkswcERJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHNoYTNfMSA9IHJlcXVpcmUoXCIuLi9kaWdlc3RzL3NoYTNcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IGJpZ0ludGVnZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2JpZ0ludGVnZXJIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBJU3BvbmdlIHVzaW5nIEtlcmwgYWxnb3JpdGhtLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pcmkvYmxvYi9kZXYvc3JjL21haW4vamF2YS9jb20vaW90YS9pcmkvaGFzaC9LZXJsLmphdmFcclxuICovXHJcbmNsYXNzIEtlcmwge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgS2VybC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fa2VjY2FrID0gbmV3IHNoYTNfMS5TaGEzKDM4NCwgc2hhM18xLlNoYTMuS0VDQ0FLX1BBRERJTkcsIDM4NCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY29uc3RhbnQgZm9yIHRoZSBzcG9uZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb25zdGFudCB0byBnZXQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29uc3RhbnQuXHJcbiAgICAgKi9cclxuICAgIGdldENvbnN0YW50KG5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkhBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJCSVRfSEFTSF9MRU5HVEhcIjpcclxuICAgICAgICAgICAgY2FzZSBcIkJZVEVfSEFTSF9MRU5HVEhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gS2VybFtuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFVua25vd24gY29uc3RhbnQgcmVxdWVzdGVkICR7bmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpc2UgdGhlIGhhc2hlci5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSBmb3IgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZShzdGF0ZSkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgaGFzaGVyLlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9rZWNjYWsucmVzZXQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWJzb3JiIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBhYnNvcmIgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKi9cclxuICAgIGFic29yYih0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICUgMjQzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7S2VybC5IQVNIX0xFTkdUSH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaXRTdGF0ZSA9IHRyaXRzLnNsaWNlKGxvY2FsT2Zmc2V0LCBsb2NhbE9mZnNldCArIEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICB0cml0U3RhdGVbS2VybC5IQVNIX0xFTkdUSCAtIDFdID0gMDtcclxuICAgICAgICAgICAgY29uc3QgYmlnSW50ID0gYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIudHJpdHNUb0JpZ0ludGVnZXIodHJpdFN0YXRlLCAwLCB0cml0U3RhdGUubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZVN0YXRlID0gbmV3IEFycmF5QnVmZmVyKEtlcmwuQllURV9IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLmJpZ0ludGVnZXJUb0J5dGVzKGJpZ0ludCwgYnl0ZVN0YXRlLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5fa2VjY2FrLnVwZGF0ZShieXRlU3RhdGUpO1xyXG4gICAgICAgICAgICBsb2NhbE9mZnNldCArPSBLZXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBLZXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNxdWVlemUgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBzcXVlZXplIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqL1xyXG4gICAgc3F1ZWV6ZSh0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICUgMjQzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7S2VybC5IQVNIX0xFTkdUSH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVTdGF0ZUJ1ZmZlciA9IHRoaXMuX2tlY2Nhay5kaWdlc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgYmlnSW50ID0gYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIuYnl0ZXNUb0JpZ0ludGVnZXIoYnl0ZVN0YXRlQnVmZmVyLCAwLCBLZXJsLkJZVEVfSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cml0U3RhdGUgPSBuZXcgSW50OEFycmF5KEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBiaWdJbnRlZ2VySGVscGVyXzEuQmlnSW50ZWdlckhlbHBlci5iaWdJbnRlZ2VyVG9Ucml0cyhiaWdJbnQsIHRyaXRTdGF0ZSwgMCwgS2VybC5IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIHRyaXRTdGF0ZVtLZXJsLkhBU0hfTEVOR1RIIC0gMV0gPSAwO1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgS2VybC5IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbbG9jYWxPZmZzZXQrK10gPSB0cml0U3RhdGVbaSsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhieXRlU3RhdGVCdWZmZXIpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZHYuYnl0ZUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkdi5zZXRVaW50OChpLCBkdi5nZXRVaW50OChpKSBeIDB4RkYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2tlY2Nhay51cGRhdGUoYnl0ZVN0YXRlQnVmZmVyKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gS2VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5LZXJsLkhBU0hfTEVOR1RIID0gMjQzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuS2VybC5CSVRfSEFTSF9MRU5HVEggPSAzODQ7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5LZXJsLkJZVEVfSEFTSF9MRU5HVEggPSBLZXJsLkJJVF9IQVNIX0xFTkdUSCAvIDg7XHJcbmV4cG9ydHMuS2VybCA9IEtlcmw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWEyVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXpjRzl1WjJWekwydGxjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNNRU5CUVhWRE8wRkJRM1pETEhORVFVRnRSRHRCUVVOdVJDeHJSVUZCSzBRN1FVRkhMMFE3T3p0SFFVZEhPMEZCUTBnN1NVRlhTVHM3VDBGRlJ6dEpRVU5JTzFGQlEwa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxGZEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNWMEZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU16UkN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRmRCUVZjc1EwRkJReXhKUVVGWk8xRkJRek5DTEZGQlFWRXNTVUZCU1N4RlFVRkZPMWxCUTFZc1MwRkJTeXhoUVVGaExFTkJRVU03V1VGRGJrSXNTMEZCU3l4cFFrRkJhVUlzUTBGQlF6dFpRVU4yUWl4TFFVRkxMR3RDUVVGclFqdG5Ra0ZEZGtJN2IwSkJRMGtzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRM0pDTzFsQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNPRUpCUVRoQ0xFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZUVVN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzVTBGQlV5eERRVUZETzBsQlEzSkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VlFVRlZMRU5CUVVNc1MwRkJhVUk3U1VGRGJrTXNRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFdEJRV2RDTEVWQlFVVXNUVUZCWXl4RlFVRkZMRTFCUVdNN1VVRkRNVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU01UkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHhRMEZCY1VNc1EwRkJReXhEUVVGRE8xTkJRMmhGTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGREwwTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zT0VKQlFUaENMRU5CUVVNc1EwRkJRenRUUVVONlJEdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNN1UwRkRla1E3VVVGRFJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU5vUXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDFSRUZCZFVRc1EwRkJReXhEUVVGRE8xTkJRMnhHTzFGQlEwUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU53UWl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eG5RMEZCWjBNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVONlJqdFJRVVZFTEVsQlFVa3NWMEZCVnl4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVONlFpeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkZla0lzUjBGQlJ6dFpRVU5ETEUxQlFVMHNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eEZRVUZGTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRk0wVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTNCRExFMUJRVTBzVFVGQlRTeEhRVUZITEcxRFFVRm5RaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMWxCUTJ4R0xFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMWxCUTNwRUxHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmVrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZGTDBJc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZEYUVNc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdVMEZEYmtNc1VVRkJVU3hYUVVGWExFZEJRVWNzUTBGQlF5eEZRVUZGTzBsQlF6bENMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFOUJRVThzUTBGQlF5eExRVUZuUWl4RlFVRkZMRTFCUVdNc1JVRkJSU3hOUVVGak8xRkJRek5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZET1VRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFRRVU5vUlR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERoQ1FVRTRRaXhEUVVGRExFTkJRVU03VTBGRGVrUTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU12UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8xTkJRM3BFTzFGQlEwUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVVJCUVhWRUxFTkJRVU1zUTBGQlF6dFRRVU5zUmp0UlFVTkVMRWxCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEY0VJc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNaME5CUVdkRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGVrWTdVVUZGUkN4SlFVRkpMRmRCUVZjc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGVrSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJSWHBDTEVkQlFVYzdXVUZEUXl4TlFVRk5MR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMWxCUlRsRExFMUJRVTBzVFVGQlRTeEhRVUZITEcxRFFVRm5RaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03V1VGRk4wWXNUVUZCVFN4VFFVRlRMRWRCUVdNc1NVRkJTU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpkRUxHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0WlFVVXpSU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRmNFTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMVlzVDBGQlR5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRGVrSXNTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRla003V1VGRlJDeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6dFpRVU42UXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEyaERMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdZVUZEZWtNN1dVRkZSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRaUVVWeVF5eFhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRUUVVOdVF5eFJRVUZSTEZkQlFWY3NSMEZCUnl4RFFVRkRMRVZCUVVVN1NVRkRPVUlzUTBGQlF6czdRVUZ1U2tRc1pVRkJaVHRCUVVOVExHZENRVUZYTEVkQlFWY3NSMEZCUnl4RFFVRkRPMEZCUTJ4RUxHVkJRV1U3UVVGRFV5eHZRa0ZCWlN4SFFVRlhMRWRCUVVjc1EwRkJRenRCUVVOMFJDeGxRVUZsTzBGQlExTXNjVUpCUVdkQ0xFZEJRVmNzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRk9hRVlzYjBKQmNVcERJbjA9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmlnX2ludGVnZXJfXzsiXSwic291cmNlUm9vdCI6IiJ9