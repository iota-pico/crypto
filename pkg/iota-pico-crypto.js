(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("big-integer"));
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/crypto", ["big-integer"], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/crypto"] = factory(require("big-integer"));
	else
		root["IotaPicoCrypto"] = factory(root["bigInt"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_25__) {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(3);

var stringHelper_1 = __webpack_require__(11);

var dataError_1 = __webpack_require__(4);
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
/* 2 */
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

var coreError_1 = __webpack_require__(10);
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
/* 3 */
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
/* 4 */
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

var coreError_1 = __webpack_require__(10);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(4);

var trytes_1 = __webpack_require__(1);
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
/* 6 */
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

var factoryBase_1 = __webpack_require__(12);

var curl_1 = __webpack_require__(13);

var kerl_1 = __webpack_require__(14);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(7);

var numberHelper_1 = __webpack_require__(3);

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(4);

var trytes_1 = __webpack_require__(1);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var cryptoError_1 = __webpack_require__(2);
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
/* 10 */
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

var jsonHelper_1 = __webpack_require__(23);

var stringHelper_1 = __webpack_require__(11);
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(3);

var objectHelper_1 = __webpack_require__(0);

var cryptoError_1 = __webpack_require__(2);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(3);

var objectHelper_1 = __webpack_require__(0);

var sha3_1 = __webpack_require__(9);

var cryptoError_1 = __webpack_require__(2);

var bigIntegerHelper_1 = __webpack_require__(15);
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
/* 15 */
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

var numberHelper_1 = __webpack_require__(3);

var objectHelper_1 = __webpack_require__(0); // tslint:disable-next-line:import-name


var big_integer_1 = __importDefault(__webpack_require__(25));

var cryptoError_1 = __webpack_require__(2);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(4);

var trytes_1 = __webpack_require__(1);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(4);

var trytes_1 = __webpack_require__(1);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var hash_1 = __webpack_require__(5);

var transaction_1 = __webpack_require__(19);

var trits_1 = __webpack_require__(8);

var cryptoError_1 = __webpack_require__(2);

var spongeFactory_1 = __webpack_require__(6);
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(4);

var address_1 = __webpack_require__(16);

var hash_1 = __webpack_require__(5);

var signatureMessageFragment_1 = __webpack_require__(17);

var tag_1 = __webpack_require__(20);

var tryteNumber_1 = __webpack_require__(21);

var trytes_1 = __webpack_require__(1);
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(4);

var trytes_1 = __webpack_require__(1);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(3);

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(4);

var trits_1 = __webpack_require__(8);

var trytes_1 = __webpack_require__(1);
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
/* 22 */
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

__export(__webpack_require__(9));

__export(__webpack_require__(2));

__export(__webpack_require__(24));

__export(__webpack_require__(6));

__export(__webpack_require__(26));

__export(__webpack_require__(15));

__export(__webpack_require__(18));

__export(__webpack_require__(28));

__export(__webpack_require__(13));

__export(__webpack_require__(14));

/***/ }),
/* 23 */
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
/* 24 */
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

var factoryBase_1 = __webpack_require__(12);
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
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(7);

var numberHelper_1 = __webpack_require__(3);

var objectHelper_1 = __webpack_require__(0);

var address_1 = __webpack_require__(16);

var addressSecurity_1 = __webpack_require__(27);

var hash_1 = __webpack_require__(5);

var signatureMessageFragment_1 = __webpack_require__(17);

var trits_1 = __webpack_require__(8);

var trytes_1 = __webpack_require__(1);

var cryptoError_1 = __webpack_require__(2);

var spongeFactory_1 = __webpack_require__(6);
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(29));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(7);

var numberHelper_1 = __webpack_require__(3);

var objectHelper_1 = __webpack_require__(0);

var timeService_1 = __webpack_require__(32);

var hash_1 = __webpack_require__(5);

var tag_1 = __webpack_require__(20);

var transaction_1 = __webpack_require__(19);

var tryteNumber_1 = __webpack_require__(21);

var trytes_1 = __webpack_require__(1);

var cryptoError_1 = __webpack_require__(2);

var transactionHelper_1 = __webpack_require__(18);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),
/* 30 */
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

module.exports = __webpack_require__(31);

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
/* 31 */
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
/* 32 */
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4MDU3ODkxMjg3ZGU2YjY3YjYzZSIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cnl0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9lcnJvci9jcnlwdG9FcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvbnVtYmVySGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZXJyb3IvZGF0YUVycm9yLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS9oYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oZWxwZXJzL2FycmF5SGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cml0cy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RpZ2VzdHMvc2hhMy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvc3RyaW5nSGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc3Bvbmdlcy9jdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc3Bvbmdlcy9rZXJsLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaGVscGVycy9iaWdJbnRlZ2VySGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS9hZGRyZXNzLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oZWxwZXJzL3RyYW5zYWN0aW9uSGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RhdGEvdGFnLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cnl0ZU51bWJlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaGVscGVycy9qc29uSGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZmFjdG9yaWVzL3Byb29mT2ZXb3JrRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiYW1kXCI6XCJiaWctaW50ZWdlclwiLFwiY29tbW9uanNcIjpcImJpZy1pbnRlZ2VyXCIsXCJjb21tb25qczJcIjpcImJpZy1pbnRlZ2VyXCIsXCJyb290XCI6XCJiaWdJbnRcIn0iLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oYXNoL2lzcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RhdGEvYWRkcmVzc1NlY3VyaXR5LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2VydmljZXMvdGltZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNW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SSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUM3QyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FDM0UsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FDM0UsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQU07O0FBQy9FLFdBQUUsSUFBSSxHQUFHLElBQUssSUFBRyxLQUFLLEdBQUc7QUFDdkIsYUFBSSxFQUFHLEtBQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSztBQUN4QyxhQUFJLEVBQUcsS0FBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFLO0FBQ3hDLGFBQUksRUFBRyxLQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUs7QUFDeEMsYUFBSSxFQUFHLEtBQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSztBQUN4QyxhQUFJLEVBQUcsS0FBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFLO0FBQ3hDLGFBQUksRUFBRyxLQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUs7QUFDeEMsYUFBSSxFQUFHLEtBQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSztBQUN4QyxhQUFJLEVBQUcsS0FBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFLO0FBQ3hDLGFBQUksRUFBRyxLQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUs7QUFDeEMsYUFBSSxFQUFHLEtBQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSztBQUV6QyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07QUFDVCxVQUFHLE1BQU07QUFDVCxVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07QUFDVCxVQUFHLE1BQU07QUFDVCxVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07QUFDVCxVQUFHLE1BQU07QUFDVCxVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07QUFDVCxVQUFHLE1BQU07QUFDVCxVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixZQUFR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QVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBRyxLQUFRLEtBQUMsQ0FBRyxLQUFPO0FBQ3RCLFVBQUcsS0FBUSxLQUFDLENBQUcsS0FBTztBQUN0QixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUcsS0FBUSxLQUFDLENBQUcsS0FBTztBQUN0QixVQUFHLEtBQVEsS0FBQyxDQUFHLEtBQU87QUFDdEIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFHLEtBQVEsS0FBQyxDQUFHLEtBQU87QUFDdEIsVUFBRyxLQUFRLEtBQUMsQ0FBRyxLQUFPO0FBQ3RCLFVBQUksTUFB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDanRCQTs7Ozs7Ozs7Ozs7Ozs7QUFLdUI7Ozs7O0FBQ1QsYUFBSyxLQUNmO0FBQ0g7Ozs7OztBQVJELHNCQVFDLFkiLCJmaWxlIjoiaW90YS1waWNvLWNyeXB0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImJpZy1pbnRlZ2VyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGlvdGEtcGljby9jcnlwdG9cIiwgW1wiYmlnLWludGVnZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGlvdGEtcGljby9jcnlwdG9cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiaWctaW50ZWdlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiSW90YVBpY29DcnlwdG9cIl0gPSBmYWN0b3J5KHJvb3RbXCJiaWdJbnRcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjVfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODA1Nzg5MTI4N2RlNmI2N2I2M2UiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPYmplY3QgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBPYmplY3RIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IHR5cGVvZiAodmFsdWUpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdCBpZiBnaXZlbiB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IG9mIHRoZSBzcGVjaWZpZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZSh2YWx1ZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVDbGFzc05hbWUgPSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWVDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZUNsYXNzTmFtZSA9PT0gT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh0eXBlQ29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNsYXNzIG5hbWUgb2YgYW4gb2JqZWN0IGlmIGl0IGhhcyBvbmUuXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBvYmplY3QgdG8gZ2V0IHRoZSBjbGFzcyBuYW1lIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjbGFzcyBuYW1lIGlmIGl0IGhhcyBvbmUgb3IgdW5kZWZpbmVkIGlmIG5vdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldENsYXNzTmFtZShvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHR5cGVvZiBvYmplY3QgPT09IFwiZnVuY3Rpb25cIiA/IG9iamVjdC50b1N0cmluZygpIDogb2JqZWN0LmNvbnN0cnVjdG9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBjb25zdHJ1Y3Rvci5tYXRjaCgvXFx3Ky9nKTtcclxuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLk9iamVjdEhlbHBlciA9IE9iamVjdEhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYjJKcVpXTjBTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YjJKcVpXTjBTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCVlR0UlFVTTFRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVeXhEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGVk8xRkJRemRDTEUxQlFVMHNRMEZCUXl4TFFVRkxMRXRCUVVzc1NVRkJTU3hKUVVGSkxFdEJRVXNzUzBGQlN5eFRRVUZUTzFsQlEzaERMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhSUVVGUkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM1JGTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlZTeEZRVUZGTEdWQlFYbENPMUZCUTNSRUxFMUJRVTBzWTBGQll5eEhRVUZITEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGVFUXNUVUZCVFN4RFFVRkRMR05CUVdNc1MwRkJTeXhUUVVGVExFbEJRVWtzWTBGQll5eExRVUZMTEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03U1VGRGVrY3NRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVmM3VVVGRGJFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hMUVVGTExFbEJRVWtzU1VGQlNTeE5RVUZOTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUTNKQ0xFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRTFCUVUwc1YwRkJWeXhIUVVGSExFOUJRVThzVFVGQlRTeExRVUZMTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFsQlEzSkhMRTFCUVUwc1QwRkJUeXhIUVVGSExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zVFVGQlRTeERRVUZETEVOQlFVTXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUTNCRkxFTkJRVU03U1VGRFRDeERRVUZETzBOQlEwbzdRVUUzUTBRc2IwTkJOa05ESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvaGVscGVycy9vYmplY3RIZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJ5dGVzLlxyXG4gKi9cclxuY2xhc3MgVHJ5dGVzIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGVzIGZyb20gYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcgdG8gY3JlYXRlIHRoZSB0cnl0ZXMgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggQW4gb3B0aW9uYWwgdmFsaWRhdGlvbiBsZW5ndGggZm9yIHRoZSB0cnl0ZXMsIDAgbWVhbnMgaWdub3JlIGxlbmd0aC5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21TdHJpbmcodmFsdWUsIGxlbmd0aCA9IDApIHtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghVHJ5dGVzLmlzVmFsaWQodmFsdWUsIGxlbmd0aCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBhbmQgbGVuZ3RoIGRvIG5vdCBjb250YWluIHZhbGlkIHRyeXRlc1wiLCB7IHZhbHVlLCBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJ5dGVzKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgdmFsdWUgY29udGFpbiB2YWxpZCB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcgdG8gdmFsaWRhdGUgYXMgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBBbiBvcHRpb25hbCB2YWxpZGF0aW9uIGxlbmd0aCBmb3IgdGhlIHRyeXRlcywgMCBtZWFucyBpZ25vcmUgbGVuZ3RoLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgaW5wdXQgd2FzIHZhbGlkIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVmFsaWQodmFsdWUsIGxlbmd0aCA9IDApIHtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5bOUEtWl17JHtsZW5ndGggPyBsZW5ndGggOiBcIjAsXCJ9fSRgKS50ZXN0KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRyeXRlcyB0byBhIHN0cmluZy5cclxuICAgICAqIEByZXR1cm5zIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHN1YiBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbiB0byBnZXQgdGhlIHN1Yi5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3ViLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBzdWIuXHJcbiAgICAgKi9cclxuICAgIHN1YihzdGFydCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHN0YXJ0KSB8fCBzdGFydCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzdGFydCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IChzdGFydCArIGxlbmd0aCkgPiB0aGlzLl90cnl0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBzdGFydCArIGxlbmd0aCBtdXN0IDw9ICR7dGhpcy5fdHJ5dGVzLmxlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcy5zdWJzdHIoc3RhcnQsIGxlbmd0aCkpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBBbGwgdGhlIGNoYXJhY3RlcnMgdGhhdCBjYW4gYmUgdXNlZCBpbiB0cnl0ZXMuXHJcbiAqL1xyXG5Ucnl0ZXMuQUxQSEFCRVQgPSBcIjlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xyXG5leHBvcnRzLlRyeXRlcyA9IFRyeXRlcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKNWRHVnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2ZEhKNWRHVnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzTkVWQlFYbEZPMEZCUTNwRkxHdEVRVUVyUXp0QlFVVXZRenM3UjBGRlJ6dEJRVU5JTzBsQlUwa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1EwRkJRenRSUVVOMFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1F5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UTBGQmMwTXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaEVMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU03VVVGRGJrUXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycERMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEd0RVFVRnJSQ3hGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRMMFlzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU0zUWl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFXRXNSVUZCUlN4VFFVRnBRaXhEUVVGRE8xRkJRMjVFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRha0lzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTBvc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeERRVUZETEZkQlFWY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEzcEZMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTk8xRkJRMVFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJReTlDTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRWRCUVVjc1EwRkJReXhMUVVGaExFVkJRVVVzVFVGQll6dFJRVU53UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMR2xEUVVGcFF5eERRVUZETEVOQlFVTTdVVUZETTBRc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZGTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEaENRVUU0UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETjBVc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMnBGTEVOQlFVTTdPMEZCTlVWRU96dEhRVVZITzBGQlExY3NaVUZCVVN4SFFVRlhMRFpDUVVFMlFpeERRVUZETzBGQlNtNUZMSGRDUVRoRlF5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvdHJ5dGVzLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGNyeXB0byBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIENyeXB0b0Vycm9yIGV4dGVuZHMgY29yZUVycm9yXzEuQ29yZUVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIENyeXB0b0Vycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcik7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkNyeXB0b1wiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ3J5cHRvRXJyb3IgPSBDcnlwdG9FcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKNWNIUnZSWEp5YjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WlhKeWIzSXZZM0o1Y0hSdlJYSnliM0l1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRzlGUVVGcFJUdEJRVVZxUlRzN1IwRkZSenRCUVVOSUxHbENRVUY1UWl4VFFVRlJMSEZDUVVGVE8wbEJRM1JET3pzN096dFBRVXRITzBsQlEwZ3NXVUZCV1N4UFFVRmxMRVZCUVVVc1ZVRkJhME1zUlVGQlJTeFZRVUZyUWp0UlFVTXZSU3hMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOMlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJRenRKUVVNelFpeERRVUZETzBOQlEwbzdRVUZZUkN4clEwRlhReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9lcnJvci9jcnlwdG9FcnJvci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE51bWJlciBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE51bWJlckhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBpbnRlZ2VyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgaW50ZWdlcm5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBpbnRlZ2VyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodmFsdWUpICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIG51bWJlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG51bWJlcnluZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgZmxvYXQgbnVtYmVyIGZvcm1hdHRlZCBhcyBhIHN0cmluZywgY2FuIGJlIHVzZWQgZm9yIGJpZyBudW1iZXJzIHRoYXQgd291bGQgb3ZlcmZsb3cgcGFyc2VGbG9hdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG51bWJlciBpcyBmb3JtYXR0ZWQgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNGbG9hdFN0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAvXi0/XFxkKlxcLj9cXGQrJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGludGVnZXIgbnVtYmVyIGZvcm1hdHRlZCBhcyBhIHN0cmluZywgY2FuIGJlIHVzZWQgZm9yIGJpZyBudW1iZXJzIHRoYXQgd291bGQgb3ZlcmZsb3cgcGFyc2VJbnQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgZm9ybWF0dGVkIGNvcnJlY3RseS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzSW50ZWdlclN0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAvXi0/XFxkKyQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTnVtYmVySGVscGVyID0gTnVtYmVySGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liblZ0WW1WeVNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiblZ0WW1WeVNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJWVHRSUVVNNVFpeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOeVJpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVNM1FpeE5RVUZOTEVOQlFVTXNTMEZCU3l4TFFVRkxMRk5CUVZNc1NVRkJTU3hMUVVGTExFdEJRVXNzU1VGQlNTeEpRVUZKTEU5QlFVOHNTMEZCU3l4TFFVRkxMRkZCUVZFc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTm9TU3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCWVR0UlFVTnlReXhOUVVGTkxFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJZVHRSUVVOMlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5xUXl4RFFVRkRPME5CUTBvN1FVRndRMFFzYjBOQmIwTkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL251bWJlckhlbHBlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29yZUVycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvY29yZUVycm9yXCIpO1xyXG4vKipcclxuICogQSBkYXRhIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgRGF0YUVycm9yIGV4dGVuZHMgY29yZUVycm9yXzEuQ29yZUVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIERhdGFFcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJEYXRhXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EYXRhRXJyb3IgPSBEYXRhRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHRjBZVVZ5Y205eUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJWeWNtOXlMMlJoZEdGRmNuSnZjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNiMFZCUVdsRk8wRkJSV3BGT3p0SFFVVkhPMEZCUTBnc1pVRkJkVUlzVTBGQlVTeHhRa0ZCVXp0SlFVTndRenM3T3pzN1QwRkxSenRKUVVOSUxGbEJRVmtzVDBGQlpTeEZRVUZGTEZWQlFXdERMRVZCUVVVc1ZVRkJhMEk3VVVGREwwVXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZEZGtNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZEZWtJc1EwRkJRenREUVVOS08wRkJXRVFzT0VKQlYwTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9lcnJvci9kYXRhRXJyb3IudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgaGFzaGVzLlxyXG4gKi9cclxuY2xhc3MgSGFzaCB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGhhc2ggZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gaGFzaCBUaGUgdHJ5dGVzIHRvIGNyZWF0ZSB0aGUgaGFzaCBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgSGFzaC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXMoaGFzaCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShoYXNoLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgaGFzaCBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSBoYXNoLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IEhhc2guTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBoYXNoIHNob3VsZCBiZSAke0hhc2guTEVOR1RIfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEhhc2goaGFzaCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGhhc2ggdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIGhhc2guXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIGEgdmFsaWQgaGFzaCAoODEpLlxyXG4gKi9cclxuSGFzaC5MRU5HVEggPSA4MTtcclxuLyoqXHJcbiAqIEFuIGVtcHR5IGhhc2ggYWxsIDlzLlxyXG4gKi9cclxuSGFzaC5FTVBUWSA9IEhhc2guZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoSGFzaC5MRU5HVEgpKSk7XHJcbmV4cG9ydHMuSGFzaCA9IEhhc2g7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFHRnphQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWtZWFJoTDJoaGMyZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2NVTkJRV3RETzBGQlJXeERPenRIUVVWSE8wRkJRMGc3U1VGaFNTeGxRVUZsTzBsQlEyWXNXVUZCYjBJc1RVRkJZenRSUVVNNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJXVHRSUVVOcVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4bFFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNrTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zTUVOQlFUQkRMRU5CUVVNc1EwRkJRenRSUVVOd1JTeERRVUZETzFGQlJVUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlFpeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UWtGQmMwSXNTVUZCU1N4RFFVRkRMRTFCUVUwc2RVSkJRWFZDTEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemxHTEVOQlFVTTdVVUZGUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRMjVETEVOQlFVTTdPMEZCYWtSRU96dEhRVVZITzBGQlEyOUNMRmRCUVUwc1IwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE0wTTdPMGRCUlVjN1FVRkRiMElzVlVGQlN5eEhRVUZUTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZTY2tjc2IwSkJiVVJESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS9oYXNoLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmYWN0b3J5QmFzZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiKTtcclxuY29uc3QgY3VybF8xID0gcmVxdWlyZShcIi4uL3Nwb25nZXMvY3VybFwiKTtcclxuY29uc3Qga2VybF8xID0gcmVxdWlyZShcIi4uL3Nwb25nZXMva2VybFwiKTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgc3Bvbmdlcy5cclxuICovXHJcbmNsYXNzIFNwb25nZUZhY3RvcnkgZXh0ZW5kcyBmYWN0b3J5QmFzZV8xLkZhY3RvcnlCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogRG9uJ3QgYWxsb3cgbWFudWFsIGNvbnN0cnVjdGlvbiBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGZhY3RvcnkgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIVNwb25nZUZhY3RvcnkuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlID0gbmV3IFNwb25nZUZhY3RvcnkoKTtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UucmVnaXN0ZXIoXCJjdXJsXCIsICguLi5hcmdzKSA9PiBuZXcgY3VybF8xLkN1cmwoLi4uYXJncykpO1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZS5yZWdpc3RlcihcImN1cmw4MVwiLCAoLi4uYXJncykgPT4gbmV3IGN1cmxfMS5DdXJsKDgxKSk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwiY3VybDI3XCIsICguLi5hcmdzKSA9PiBuZXcgY3VybF8xLkN1cmwoMjcpKTtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UucmVnaXN0ZXIoXCJrZXJsXCIsICguLi5hcmdzKSA9PiBuZXcga2VybF8xLktlcmwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNwb25nZUZhY3RvcnkgPSBTcG9uZ2VGYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM0J2Ym1kbFJtRmpkRzl5ZVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTltWVdOMGIzSnBaWE12YzNCdmJtZGxSbUZqZEc5eWVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlJYcEZMREJEUVVGMVF6dEJRVU4yUXl3d1EwRkJkVU03UVVGRmRrTTdPMGRCUlVjN1FVRkRTQ3h0UWtGQk1rSXNVMEZCVVN4NVFrRkJiMEk3U1VGSmJrUTdPenRQUVVkSE8wbEJRMGc3VVVGRFNTeExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVVHRSUVVOc1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkNMR0ZCUVdFc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeGhRVUZoTEVWQlFVVXNRMEZCUXp0WlFVTTVReXhoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4WFFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcEZMR0ZCUVdFc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEZkQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1JGTEdGQlFXRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxGZEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSRkxHRkJRV0VzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SlFVRkpMRmRCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGRFVXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETzBsQlEyNURMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMHdzVjBGQlZ6dFJRVU5xUWl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlEzQkRMRU5CUVVNN1EwRkRTanRCUVM5Q1JDeHpRMEVyUWtNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5LnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL29iamVjdEhlbHBlclwiKTtcclxuLyoqXHJcbiAqIEFycmF5IGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgQXJyYXlIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGVtcHR5IGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBlbXB0eSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbm9uIGVtcHR5IGFycmF5IG9mIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIG5vbiBlbXB0eSBhcnJheSBvZiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGVkKHZhbHVlLCB0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheUhlbHBlci5pc0VtcHR5KHZhbHVlKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXModW5kZWZpbmVkKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXMobnVsbCkgJiZcclxuICAgICAgICAgICAgdmFsdWUuZXZlcnkoKGEpID0+IG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYSwgdHlwZSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXJyYXlIZWxwZXIgPSBBcnJheUhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhKeVlYbElaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUdWc2NHVnljeTloY25KaGVVaGxiSEJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYVVSQlFUaERPMEZCUlRsRE96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGVk8xRkJRelZDTEUxQlFVMHNRMEZCUXl4TFFVRkxMRXRCUVVzc1NVRkJTU3hKUVVGSkxFdEJRVXNzUzBGQlN5eFRRVUZUTzFsQlEzaERMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGRrTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVlU3VVVGRE5VSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU0zUkN4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFWVXNSVUZCUlN4SlFVRmpPMUZCUXpWRExFMUJRVTBzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRemxDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRE1VSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF6dFpRVU55UWl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNNVJDeERRVUZETzBOQlJVbzdRVUZxUTBRc2EwTkJhVU5ESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvaGVscGVycy9hcnJheUhlbHBlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cml0cy5cclxuICovXHJcbmNsYXNzIFRyaXRzIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJpdHMpIHtcclxuICAgICAgICB0aGlzLl90cml0cyA9IHRyaXRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSBJbnQ4QXJyYXkgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ5dGVzIHVzZWQgdG8gY3JlYXRlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tQXJyYXkodmFsdWUpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBkb2VzIG5vdCBjb250YWluIHZhbGlkIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyaXRzKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyaXRzIGZyb20gbnVtYmVyIGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRyeXRlcyB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbU51bWJlckFycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQodmFsdWUsIE51bWJlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBkb2VzIG5vdCBjb250YWluIHZhbGlkIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyaXRzKG5ldyBJbnQ4QXJyYXkodmFsdWUpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyaXRzIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRyeXRlcyB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyeXRlc1N0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdHJpdHMgPSBuZXcgSW50OEFycmF5KHRyeXRlc1N0cmluZy5sZW5ndGggKiAzKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyeXRlc1N0cmluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSB0cnl0ZXNfMS5Ucnl0ZXMuQUxQSEFCRVQuaW5kZXhPZih0cnl0ZXNTdHJpbmcuY2hhckF0KGkpKTtcclxuICAgICAgICAgICAgdHJpdHNbaSAqIDNdID0gVHJpdHMuVFJZVEVTX1RSSVRTW2lkeF1bMF07XHJcbiAgICAgICAgICAgIHRyaXRzW2kgKiAzICsgMV0gPSBUcml0cy5UUllURVNfVFJJVFNbaWR4XVsxXTtcclxuICAgICAgICAgICAgdHJpdHNbaSAqIDMgKyAyXSA9IFRyaXRzLlRSWVRFU19UUklUU1tpZHhdWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyaXRzKHRyaXRzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyaXRzIGZyb20gbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgTnVtYmVyIHVzZWQgdG8gY3JlYXRlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGlzIG5vdCBhbiBpbnRlZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cml0cyA9IFtdO1xyXG4gICAgICAgIGxldCBhYnNvbHV0ZVZhbHVlID0gdmFsdWUgPCAwID8gLXZhbHVlIDogdmFsdWU7XHJcbiAgICAgICAgd2hpbGUgKGFic29sdXRlVmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZW1haW5kZXIgPSBhYnNvbHV0ZVZhbHVlICUgMztcclxuICAgICAgICAgICAgYWJzb2x1dGVWYWx1ZSA9IE1hdGguZmxvb3IoYWJzb2x1dGVWYWx1ZSAvIDMpO1xyXG4gICAgICAgICAgICBpZiAocmVtYWluZGVyID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gLTE7XHJcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZVZhbHVlKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJpdHNbdHJpdHMubGVuZ3RoXSA9IHJlbWFpbmRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0cml0c1tpXSA9IC10cml0c1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyaXRzKG5ldyBJbnQ4QXJyYXkodHJpdHMpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIHR3byB0cml0cyB0b2dldGhlci5cclxuICAgICAqIEBwYXJhbSBmaXJzdCBUaGUgZmlyc3QgdHJpdC5cclxuICAgICAqIEBwYXJhbSBzZWNvbmQgVGhlIHNlY29uZCB0cml0LlxyXG4gICAgICogQHJldHVybnMgTmV3IHRyaXQgd2hpY2ggaXMgdGhlIGFkZGl0aW9uIG9mIHRoZSBhICsgYi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZChmaXJzdCwgc2Vjb25kKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGZpcnN0LCBUcml0cykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBmaXJzdCBzaG91bGQgYmUgYSB2YWxpZCBUcml0cyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzZWNvbmQsIFRyaXRzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHNlY29uZHMgc2hvdWxkIGJlIGEgdmFsaWQgVHJpdHMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvdXQgPSBuZXcgSW50OEFycmF5KE1hdGgubWF4KGZpcnN0Ll90cml0cy5sZW5ndGgsIHNlY29uZC5fdHJpdHMubGVuZ3RoKSk7XHJcbiAgICAgICAgbGV0IGNhcnJ5ID0gMDtcclxuICAgICAgICBsZXQgaUE7XHJcbiAgICAgICAgbGV0IGlCO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlBID0gaSA8IGZpcnN0Ll90cml0cy5sZW5ndGggPyBmaXJzdC5fdHJpdHNbaV0gOiAwO1xyXG4gICAgICAgICAgICBpQiA9IGkgPCBzZWNvbmQuX3RyaXRzLmxlbmd0aCA/IHNlY29uZC5fdHJpdHNbaV0gOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBmQSA9IFRyaXRzLmZ1bGxBZGQoaUEsIGlCLCBjYXJyeSk7XHJcbiAgICAgICAgICAgIG91dFtpXSA9IGZBWzBdO1xyXG4gICAgICAgICAgICBjYXJyeSA9IGZBWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVHJpdHMuZnJvbUFycmF5KG91dCk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBmdWxsQWRkKGEsIGIsIGMpIHtcclxuICAgICAgICBjb25zdCBzQSA9IFRyaXRzLnN1bShhLCBiKTtcclxuICAgICAgICBjb25zdCBjQSA9IFRyaXRzLmNvbnMoYSwgYik7XHJcbiAgICAgICAgY29uc3QgY0IgPSBUcml0cy5jb25zKHNBLCBjKTtcclxuICAgICAgICBjb25zdCBjT3V0ID0gVHJpdHMuYW55KGNBLCBjQik7XHJcbiAgICAgICAgY29uc3Qgc09VdCA9IFRyaXRzLnN1bShzQSwgYyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkoW3NPVXQsIGNPdXRdKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIHN1bShhLCBiKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IGEgKyBiO1xyXG4gICAgICAgIHN3aXRjaCAocykge1xyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiAtMTtcclxuICAgICAgICAgICAgY2FzZSAtMjogcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGNvbnMoYSwgYikge1xyXG4gICAgICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGFueShhLCBiKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IGEgKyBiO1xyXG4gICAgICAgIGlmIChzID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocyA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgdHJpdHMgYXJyYXkuXHJcbiAgICAgKiBAcmV0dXJucyBBcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHRvQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSB0cml0cyBhcnJheSBhcyBhIG51bWJlciBhcnJheS5cclxuICAgICAqIEByZXR1cm5zIEFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0cml0cy5cclxuICAgICAqL1xyXG4gICAgdG9OdW1iZXJBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl90cml0cyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdHJpdHMgYXMgdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgSW5zdGFuY2Ugb2YgVHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICBsZXQgdHJ5dGVzID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RyaXRzLmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgcG9zc2libGUgdHJ5dGUgdmFsdWVzIHRvIGZpbmQgY29ycmVjdCB0cml0IHJlcHJlc2VudGF0aW9uXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVHJpdHMuVFJZVEVTX1RSSVRTW2pdWzBdID09PSB0aGlzLl90cml0c1tpXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFRyaXRzLlRSWVRFU19UUklUU1tqXVsxXSA9PT0gdGhpcy5fdHJpdHNbaSArIDFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVHJpdHMuVFJZVEVTX1RSSVRTW2pdWzJdID09PSB0aGlzLl90cml0c1tpICsgMl0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnl0ZXMgKz0gdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmNoYXJBdChqKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB0cml0cyBhcyBhIG51bWJlci5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cml0cyBjb252ZXJ0ZWQgdG8gYSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyKCkge1xyXG4gICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX3RyaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gcmV0dXJuVmFsdWUgKiAzICsgdGhpcy5fdHJpdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV2hhdCBpcyB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIExlbmd0aCBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpdHMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBzdWIgb2YgdGhlIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbiB0byBnZXQgdGhlIHN1Yi5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3ViLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyaXRzIHN1Yi5cclxuICAgICAqL1xyXG4gICAgc3ViKHN0YXJ0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc3RhcnQpIHx8IHN0YXJ0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHN0YXJ0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgKHN0YXJ0ICsgbGVuZ3RoKSA+IHRoaXMuX3RyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc3RhcnQgKyBsZW5ndGggbXVzdCA8PSAke3RoaXMuX3RyaXRzLmxlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyaXRzLmZyb21BcnJheSh0aGlzLl90cml0cy5zbGljZShzdGFydCwgc3RhcnQgKyBsZW5ndGgpKTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuVHJpdHMuVFJZVEVTX1RSSVRTID0gW1xyXG4gICAgbmV3IEludDhBcnJheShbMCwgMCwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMCwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAtMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgLTEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIC0xLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMCwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMCwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMCwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAtMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIC0xLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgLTEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMCwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDAsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAwLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAxLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAtMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgLTEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIC0xLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMCwgMF0pXHJcbl07XHJcbmV4cG9ydHMuVHJpdHMgPSBUcml0cztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKcGRITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY21sMGN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc01FVkJRWFZGTzBGQlEzWkZMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNhMFJCUVN0RE8wRkJReTlETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCYlVOSkxHVkJRV1U3U1VGRFppeFpRVUZ2UWl4TFFVRm5RanRSUVVOb1F5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJaMEk3VVVGRGNFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcERMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVU03VVVGRGJFVXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCWlR0UlFVTjZReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2QwTkJRWGRETEVOQlFVTXNRMEZCUXp0UlFVTnNSU3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFXRTdVVUZEYkVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzWlVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMREpEUVVFeVF5eERRVUZETEVOQlFVTTdVVUZEY2tVc1EwRkJRenRSUVVORUxFMUJRVTBzV1VGQldTeEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOMFF5eE5RVUZOTEV0QlFVc3NSMEZCWXl4SlFVRkpMRk5CUVZNc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRek5ETEUxQlFVMHNSMEZCUnl4SFFVRkhMR1ZCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0xUkN4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeEVMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVdFN1VVRkRiRU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha01zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hEUVVGRE8xRkJRMFFzVFVGQlRTeExRVUZMTEVkQlFXRXNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzWVVGQllTeEhRVUZITEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkZMME1zVDBGQlR5eGhRVUZoTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNN1dVRkRka0lzU1VGQlNTeFRRVUZUTEVkQlFVY3NZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOc1F5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGT1VNc1JVRkJSU3hEUVVGRExFTkJRVU1zVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMmhDTEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFppeGhRVUZoTEVWQlFVVXNRMEZCUXp0WlFVTndRaXhEUVVGRE8xbEJSVVFzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRGNFTXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFvc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1owSkJRM0JETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhEUVVGRE8xRkJRMHdzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpORExFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJXU3hGUVVGRkxFMUJRV0U3VVVGRGVrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERCRFFVRXdReXhEUVVGRExFTkJRVU03VVVGRGNFVXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3MFEwRkJORU1zUTBGQlF5eERRVUZETzFGQlEzUkZMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXZSU3hKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOUUxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlJWQXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZGYkVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNUVMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UkN4TlFVRk5MRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGVFTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm1MRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVJc1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRMmhETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRiRVFzVFVGQlRTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETTBJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE5VSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROMElzVFVGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETDBJc1RVRkJUU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRk9VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRka01zUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTzFGQlEyNURMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGYUVJc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRXRCUVVzc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNRaXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRUlzVTBGQlV5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSQ0xFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZEY0VNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRWaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEySXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFlpeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZEYmtNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVm9RaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOU0xFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEWWl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMllzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJRc1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEWWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUMEZCVHp0UlFVTldMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEzWkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4aFFVRmhPMUZCUTJoQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU51UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRWxCUVVrc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVZvUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVNM1F5dzJSVUZCTmtVN1dVRkROMFVzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eGxRVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzJkQ1FVTTVReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU16UXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkRMME1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTJ4RUxFMUJRVTBzU1VGQlNTeGxRVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEY0VNc1MwRkJTeXhEUVVGRE8yZENRVU5XTEVOQlFVTTdXVUZEVEN4RFFVRkRPMUZCUTB3c1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM0pETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NTVUZCU1N4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSWEJDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRMME1zVjBGQlZ5eEhRVUZITEZkQlFWY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnVSQ3hEUVVGRE8xRkJSVVFzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1RVRkJUVHRSUVVOVUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4SFFVRkhMRU5CUVVNc1MwRkJZU3hGUVVGRkxFMUJRV003VVVGRGNFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4cFEwRkJhVU1zUTBGQlF5eERRVUZETzFGQlF6TkVMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNelJTeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXc0UWtGQk9FSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6VkZMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGNrVXNRMEZCUXpzN1FVRjJVVVFzWlVGQlpUdEJRVU5UTEd0Q1FVRlpMRWRCUVdkQ08wbEJRMmhFTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETTBJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU14UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNeFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wTkJRelZDTEVOQlFVTTdRVUU1UWs0c2MwSkJNRkZESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS90cml0cy50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBTaGEzIGltcGxlbWVudGF0aW9uLlxyXG4gKi9cclxuY2xhc3MgU2hhMyB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBTSEEzLlxyXG4gICAgICogQHBhcmFtIGJpdHMgVGhlIG51bWJlciBvZiBpbnB1dCBiaXRzLlxyXG4gICAgICogQHBhcmFtIHBhZGRpbmcgVGhlIHBhZGRpbmcgdG8gdXNlLlxyXG4gICAgICogQHBhcmFtIG91dHB1dEJpdHMgVGhlIG51bWJlciBvZiBvdXRwdXQgYml0cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYml0cywgcGFkZGluZywgb3V0cHV0Qml0cykge1xyXG4gICAgICAgIHRoaXMuX3BhZGRpbmcgPSBwYWRkaW5nO1xyXG4gICAgICAgIHRoaXMuX291dHB1dEJpdHMgPSBvdXRwdXRCaXRzO1xyXG4gICAgICAgIHRoaXMuX2Jsb2NrQ291bnQgPSAoMTYwMCAtIChiaXRzIDw8IDEpKSA+PiA1O1xyXG4gICAgICAgIHRoaXMuX2J5dGVDb3VudCA9IHRoaXMuX2Jsb2NrQ291bnQgPDwgMjtcclxuICAgICAgICB0aGlzLl9vdXRwdXRCbG9ja3MgPSBvdXRwdXRCaXRzID4+IDU7XHJcbiAgICAgICAgdGhpcy5fZXh0cmFCeXRlcyA9IChvdXRwdXRCaXRzICYgMzEpID4+IDM7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgZGlnZXN0LlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9yZXNldCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fYmxvY2sgPSAwO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gMDtcclxuICAgICAgICB0aGlzLl9ibG9ja3MgPSBuZXcgVWludDMyQXJyYXkodGhpcy5fYmxvY2tDb3VudCArIDEpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gbmV3IFVpbnQzMkFycmF5KDUwKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBkaWdlc3QuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgQXJyYXkgb2YgZGF0YSB0byB1c2UgaW4gdGhlIHVwZGF0ZS5cclxuICAgICAqL1xyXG4gICAgdXBkYXRlKGlucHV0KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGlucHV0LCBBcnJheUJ1ZmZlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJJbnB1dCBpcyBub3Qgb2YgdHlwZSBBcnJheUJ1ZmZlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KGlucHV0KTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBtZXNzYWdlLmxlbmd0aDtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVzZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbMF0gPSB0aGlzLl9ibG9jaztcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCB0aGlzLl9ibG9ja0NvdW50ICsgMTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2ldID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGkgPSB0aGlzLl9zdGFydDsgaW5kZXggPCBsZW5ndGggJiYgaSA8IHRoaXMuX2J5dGVDb3VudDsgKytpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2kgPj4gMl0gfD0gbWVzc2FnZVtpbmRleF0gPDwgU2hhMy5TSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sYXN0Qnl0ZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy5fYnl0ZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCA9IGkgLSB0aGlzLl9ieXRlQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9jayA9IHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja0NvdW50XTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9ibG9ja0NvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpXSBePSB0aGlzLl9ibG9ja3NbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtlY2Nha1Blcm11dGF0aW9uKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRmluYWxpemUgYW5kIHJldHVybiB0aGUgaGFzaCBmb3IgdGhlIGRpZ2VzdCwgd2lsbCBhbHNvIHJlc2V0IHRoZSBzdGF0ZS5cclxuICAgICAqIEByZXR1cm5zIEFycmF5IGJ1ZmZlciBjb250YWluaW5nIHRoZSBkaWdlc3QuXHJcbiAgICAgKi9cclxuICAgIGRpZ2VzdCgpIHtcclxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICBjb25zdCBieXRlcyA9IHRoaXMuX291dHB1dEJpdHMgPj4gMztcclxuICAgICAgICBsZXQgYnVmZmVyO1xyXG4gICAgICAgIGlmICh0aGlzLl9leHRyYUJ5dGVzKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcigodGhpcy5fb3V0cHV0QmxvY2tzICsgMSkgPDwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcnJheSA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xyXG4gICAgICAgIHdoaWxlIChqIDwgdGhpcy5fb3V0cHV0QmxvY2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9ibG9ja0NvdW50ICYmIGogPCB0aGlzLl9vdXRwdXRCbG9ja3M7ICsraSwgKytqKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheVtqXSA9IHRoaXMuX3N0YXRlW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9leHRyYUJ5dGVzKSB7XHJcbiAgICAgICAgICAgIGFycmF5W2ldID0gdGhpcy5fc3RhdGVbaV07XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IGJ1ZmZlci5zbGljZSgwLCBieXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBmaW5hbGl6ZSgpIHtcclxuICAgICAgICBsZXQgaSA9IHRoaXMuX2xhc3RCeXRlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2kgPj4gMl0gfD0gdGhpcy5fcGFkZGluZ1tpICYgM107XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RCeXRlSW5kZXggPT09IHRoaXMuX2J5dGVDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9ja3NbMF0gPSB0aGlzLl9ibG9ja3NbdGhpcy5fYmxvY2tDb3VudF07XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCB0aGlzLl9ibG9ja0NvdW50ICsgMTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbaV0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja0NvdW50IC0gMV0gfD0gMHg4MDAwMDAwMDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fYmxvY2tDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlW2ldIF49IHRoaXMuX2Jsb2Nrc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rZWNjYWtQZXJtdXRhdGlvbih0aGlzLl9zdGF0ZSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGtlY2Nha1Blcm11dGF0aW9uKHMpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvblxyXG4gICAgICAgIGxldCBoLCBsLCBuLCBjMCwgYzEsIGMyLCBjMywgYzQsIGM1LCBjNiwgYzcsIGM4LCBjOSwgYjAsIGIxLCBiMiwgYjMsIGI0LCBiNSwgYjYsIGI3LCBiOCwgYjksIGIxMCwgYjExLCBiMTIsIGIxMywgYjE0LCBiMTUsIGIxNiwgYjE3LCBiMTgsIGIxOSwgYjIwLCBiMjEsIGIyMiwgYjIzLCBiMjQsIGIyNSwgYjI2LCBiMjcsIGIyOCwgYjI5LCBiMzAsIGIzMSwgYjMyLCBiMzMsIGIzNCwgYjM1LCBiMzYsIGIzNywgYjM4LCBiMzksIGI0MCwgYjQxLCBiNDIsIGI0MywgYjQ0LCBiNDUsIGI0NiwgYjQ3LCBiNDgsIGI0OTtcclxuICAgICAgICBmb3IgKG4gPSAwOyBuIDwgNDg7IG4gKz0gMikge1xyXG4gICAgICAgICAgICBjMCA9IHNbMF0gXiBzWzEwXSBeIHNbMjBdIF4gc1szMF0gXiBzWzQwXTtcclxuICAgICAgICAgICAgYzEgPSBzWzFdIF4gc1sxMV0gXiBzWzIxXSBeIHNbMzFdIF4gc1s0MV07XHJcbiAgICAgICAgICAgIGMyID0gc1syXSBeIHNbMTJdIF4gc1syMl0gXiBzWzMyXSBeIHNbNDJdO1xyXG4gICAgICAgICAgICBjMyA9IHNbM10gXiBzWzEzXSBeIHNbMjNdIF4gc1szM10gXiBzWzQzXTtcclxuICAgICAgICAgICAgYzQgPSBzWzRdIF4gc1sxNF0gXiBzWzI0XSBeIHNbMzRdIF4gc1s0NF07XHJcbiAgICAgICAgICAgIGM1ID0gc1s1XSBeIHNbMTVdIF4gc1syNV0gXiBzWzM1XSBeIHNbNDVdO1xyXG4gICAgICAgICAgICBjNiA9IHNbNl0gXiBzWzE2XSBeIHNbMjZdIF4gc1szNl0gXiBzWzQ2XTtcclxuICAgICAgICAgICAgYzcgPSBzWzddIF4gc1sxN10gXiBzWzI3XSBeIHNbMzddIF4gc1s0N107XHJcbiAgICAgICAgICAgIGM4ID0gc1s4XSBeIHNbMThdIF4gc1syOF0gXiBzWzM4XSBeIHNbNDhdO1xyXG4gICAgICAgICAgICBjOSA9IHNbOV0gXiBzWzE5XSBeIHNbMjldIF4gc1szOV0gXiBzWzQ5XTtcclxuICAgICAgICAgICAgaCA9IGM4IF4gKChjMiA8PCAxKSB8IChjMyA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGM5IF4gKChjMyA8PCAxKSB8IChjMiA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1swXSBePSBoO1xyXG4gICAgICAgICAgICBzWzFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDFdIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjMCBeICgoYzQgPDwgMSkgfCAoYzUgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjMSBeICgoYzUgPDwgMSkgfCAoYzQgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbMl0gXj0gaDtcclxuICAgICAgICAgICAgc1szXSBePSBsO1xyXG4gICAgICAgICAgICBzWzEyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzEzXSBePSBsO1xyXG4gICAgICAgICAgICBzWzIyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzIzXSBePSBsO1xyXG4gICAgICAgICAgICBzWzMyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzMzXSBePSBsO1xyXG4gICAgICAgICAgICBzWzQyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzQzXSBePSBsO1xyXG4gICAgICAgICAgICBoID0gYzIgXiAoKGM2IDw8IDEpIHwgKGM3ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzMgXiAoKGM3IDw8IDEpIHwgKGM2ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzRdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNV0gXj0gbDtcclxuICAgICAgICAgICAgc1sxNF0gXj0gaDtcclxuICAgICAgICAgICAgc1sxNV0gXj0gbDtcclxuICAgICAgICAgICAgc1syNF0gXj0gaDtcclxuICAgICAgICAgICAgc1syNV0gXj0gbDtcclxuICAgICAgICAgICAgc1szNF0gXj0gaDtcclxuICAgICAgICAgICAgc1szNV0gXj0gbDtcclxuICAgICAgICAgICAgc1s0NF0gXj0gaDtcclxuICAgICAgICAgICAgc1s0NV0gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGM0IF4gKChjOCA8PCAxKSB8IChjOSA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGM1IF4gKChjOSA8PCAxKSB8IChjOCA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1s2XSBePSBoO1xyXG4gICAgICAgICAgICBzWzddIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTddIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjddIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzddIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDddIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjNiBeICgoYzAgPDwgMSkgfCAoYzEgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjNyBeICgoYzEgPDwgMSkgfCAoYzAgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbOF0gXj0gaDtcclxuICAgICAgICAgICAgc1s5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzE4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzE5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzI4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzI5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzM4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzM5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzQ4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzQ5XSBePSBsO1xyXG4gICAgICAgICAgICBiMCA9IHNbMF07XHJcbiAgICAgICAgICAgIGIxID0gc1sxXTtcclxuICAgICAgICAgICAgYjMyID0gKHNbMTFdIDw8IDQpIHwgKHNbMTBdID4+PiAyOCk7XHJcbiAgICAgICAgICAgIGIzMyA9IChzWzEwXSA8PCA0KSB8IChzWzExXSA+Pj4gMjgpO1xyXG4gICAgICAgICAgICBiMTQgPSAoc1syMF0gPDwgMykgfCAoc1syMV0gPj4+IDI5KTtcclxuICAgICAgICAgICAgYjE1ID0gKHNbMjFdIDw8IDMpIHwgKHNbMjBdID4+PiAyOSk7XHJcbiAgICAgICAgICAgIGI0NiA9IChzWzMxXSA8PCA5KSB8IChzWzMwXSA+Pj4gMjMpO1xyXG4gICAgICAgICAgICBiNDcgPSAoc1szMF0gPDwgOSkgfCAoc1szMV0gPj4+IDIzKTtcclxuICAgICAgICAgICAgYjI4ID0gKHNbNDBdIDw8IDE4KSB8IChzWzQxXSA+Pj4gMTQpO1xyXG4gICAgICAgICAgICBiMjkgPSAoc1s0MV0gPDwgMTgpIHwgKHNbNDBdID4+PiAxNCk7XHJcbiAgICAgICAgICAgIGIyMCA9IChzWzJdIDw8IDEpIHwgKHNbM10gPj4+IDMxKTtcclxuICAgICAgICAgICAgYjIxID0gKHNbM10gPDwgMSkgfCAoc1syXSA+Pj4gMzEpO1xyXG4gICAgICAgICAgICBiMiA9IChzWzEzXSA8PCAxMikgfCAoc1sxMl0gPj4+IDIwKTtcclxuICAgICAgICAgICAgYjMgPSAoc1sxMl0gPDwgMTIpIHwgKHNbMTNdID4+PiAyMCk7XHJcbiAgICAgICAgICAgIGIzNCA9IChzWzIyXSA8PCAxMCkgfCAoc1syM10gPj4+IDIyKTtcclxuICAgICAgICAgICAgYjM1ID0gKHNbMjNdIDw8IDEwKSB8IChzWzIyXSA+Pj4gMjIpO1xyXG4gICAgICAgICAgICBiMTYgPSAoc1szM10gPDwgMTMpIHwgKHNbMzJdID4+PiAxOSk7XHJcbiAgICAgICAgICAgIGIxNyA9IChzWzMyXSA8PCAxMykgfCAoc1szM10gPj4+IDE5KTtcclxuICAgICAgICAgICAgYjQ4ID0gKHNbNDJdIDw8IDIpIHwgKHNbNDNdID4+PiAzMCk7XHJcbiAgICAgICAgICAgIGI0OSA9IChzWzQzXSA8PCAyKSB8IChzWzQyXSA+Pj4gMzApO1xyXG4gICAgICAgICAgICBiNDAgPSAoc1s1XSA8PCAzMCkgfCAoc1s0XSA+Pj4gMik7XHJcbiAgICAgICAgICAgIGI0MSA9IChzWzRdIDw8IDMwKSB8IChzWzVdID4+PiAyKTtcclxuICAgICAgICAgICAgYjIyID0gKHNbMTRdIDw8IDYpIHwgKHNbMTVdID4+PiAyNik7XHJcbiAgICAgICAgICAgIGIyMyA9IChzWzE1XSA8PCA2KSB8IChzWzE0XSA+Pj4gMjYpO1xyXG4gICAgICAgICAgICBiNCA9IChzWzI1XSA8PCAxMSkgfCAoc1syNF0gPj4+IDIxKTtcclxuICAgICAgICAgICAgYjUgPSAoc1syNF0gPDwgMTEpIHwgKHNbMjVdID4+PiAyMSk7XHJcbiAgICAgICAgICAgIGIzNiA9IChzWzM0XSA8PCAxNSkgfCAoc1szNV0gPj4+IDE3KTtcclxuICAgICAgICAgICAgYjM3ID0gKHNbMzVdIDw8IDE1KSB8IChzWzM0XSA+Pj4gMTcpO1xyXG4gICAgICAgICAgICBiMTggPSAoc1s0NV0gPDwgMjkpIHwgKHNbNDRdID4+PiAzKTtcclxuICAgICAgICAgICAgYjE5ID0gKHNbNDRdIDw8IDI5KSB8IChzWzQ1XSA+Pj4gMyk7XHJcbiAgICAgICAgICAgIGIxMCA9IChzWzZdIDw8IDI4KSB8IChzWzddID4+PiA0KTtcclxuICAgICAgICAgICAgYjExID0gKHNbN10gPDwgMjgpIHwgKHNbNl0gPj4+IDQpO1xyXG4gICAgICAgICAgICBiNDIgPSAoc1sxN10gPDwgMjMpIHwgKHNbMTZdID4+PiA5KTtcclxuICAgICAgICAgICAgYjQzID0gKHNbMTZdIDw8IDIzKSB8IChzWzE3XSA+Pj4gOSk7XHJcbiAgICAgICAgICAgIGIyNCA9IChzWzI2XSA8PCAyNSkgfCAoc1syN10gPj4+IDcpO1xyXG4gICAgICAgICAgICBiMjUgPSAoc1syN10gPDwgMjUpIHwgKHNbMjZdID4+PiA3KTtcclxuICAgICAgICAgICAgYjYgPSAoc1szNl0gPDwgMjEpIHwgKHNbMzddID4+PiAxMSk7XHJcbiAgICAgICAgICAgIGI3ID0gKHNbMzddIDw8IDIxKSB8IChzWzM2XSA+Pj4gMTEpO1xyXG4gICAgICAgICAgICBiMzggPSAoc1s0N10gPDwgMjQpIHwgKHNbNDZdID4+PiA4KTtcclxuICAgICAgICAgICAgYjM5ID0gKHNbNDZdIDw8IDI0KSB8IChzWzQ3XSA+Pj4gOCk7XHJcbiAgICAgICAgICAgIGIzMCA9IChzWzhdIDw8IDI3KSB8IChzWzldID4+PiA1KTtcclxuICAgICAgICAgICAgYjMxID0gKHNbOV0gPDwgMjcpIHwgKHNbOF0gPj4+IDUpO1xyXG4gICAgICAgICAgICBiMTIgPSAoc1sxOF0gPDwgMjApIHwgKHNbMTldID4+PiAxMik7XHJcbiAgICAgICAgICAgIGIxMyA9IChzWzE5XSA8PCAyMCkgfCAoc1sxOF0gPj4+IDEyKTtcclxuICAgICAgICAgICAgYjQ0ID0gKHNbMjldIDw8IDcpIHwgKHNbMjhdID4+PiAyNSk7XHJcbiAgICAgICAgICAgIGI0NSA9IChzWzI4XSA8PCA3KSB8IChzWzI5XSA+Pj4gMjUpO1xyXG4gICAgICAgICAgICBiMjYgPSAoc1szOF0gPDwgOCkgfCAoc1szOV0gPj4+IDI0KTtcclxuICAgICAgICAgICAgYjI3ID0gKHNbMzldIDw8IDgpIHwgKHNbMzhdID4+PiAyNCk7XHJcbiAgICAgICAgICAgIGI4ID0gKHNbNDhdIDw8IDE0KSB8IChzWzQ5XSA+Pj4gMTgpO1xyXG4gICAgICAgICAgICBiOSA9IChzWzQ5XSA8PCAxNCkgfCAoc1s0OF0gPj4+IDE4KTtcclxuICAgICAgICAgICAgc1swXSA9IGIwIF4gKH5iMiAmIGI0KTtcclxuICAgICAgICAgICAgc1sxXSA9IGIxIF4gKH5iMyAmIGI1KTtcclxuICAgICAgICAgICAgc1sxMF0gPSBiMTAgXiAofmIxMiAmIGIxNCk7XHJcbiAgICAgICAgICAgIHNbMTFdID0gYjExIF4gKH5iMTMgJiBiMTUpO1xyXG4gICAgICAgICAgICBzWzIwXSA9IGIyMCBeICh+YjIyICYgYjI0KTtcclxuICAgICAgICAgICAgc1syMV0gPSBiMjEgXiAofmIyMyAmIGIyNSk7XHJcbiAgICAgICAgICAgIHNbMzBdID0gYjMwIF4gKH5iMzIgJiBiMzQpO1xyXG4gICAgICAgICAgICBzWzMxXSA9IGIzMSBeICh+YjMzICYgYjM1KTtcclxuICAgICAgICAgICAgc1s0MF0gPSBiNDAgXiAofmI0MiAmIGI0NCk7XHJcbiAgICAgICAgICAgIHNbNDFdID0gYjQxIF4gKH5iNDMgJiBiNDUpO1xyXG4gICAgICAgICAgICBzWzJdID0gYjIgXiAofmI0ICYgYjYpO1xyXG4gICAgICAgICAgICBzWzNdID0gYjMgXiAofmI1ICYgYjcpO1xyXG4gICAgICAgICAgICBzWzEyXSA9IGIxMiBeICh+YjE0ICYgYjE2KTtcclxuICAgICAgICAgICAgc1sxM10gPSBiMTMgXiAofmIxNSAmIGIxNyk7XHJcbiAgICAgICAgICAgIHNbMjJdID0gYjIyIF4gKH5iMjQgJiBiMjYpO1xyXG4gICAgICAgICAgICBzWzIzXSA9IGIyMyBeICh+YjI1ICYgYjI3KTtcclxuICAgICAgICAgICAgc1szMl0gPSBiMzIgXiAofmIzNCAmIGIzNik7XHJcbiAgICAgICAgICAgIHNbMzNdID0gYjMzIF4gKH5iMzUgJiBiMzcpO1xyXG4gICAgICAgICAgICBzWzQyXSA9IGI0MiBeICh+YjQ0ICYgYjQ2KTtcclxuICAgICAgICAgICAgc1s0M10gPSBiNDMgXiAofmI0NSAmIGI0Nyk7XHJcbiAgICAgICAgICAgIHNbNF0gPSBiNCBeICh+YjYgJiBiOCk7XHJcbiAgICAgICAgICAgIHNbNV0gPSBiNSBeICh+YjcgJiBiOSk7XHJcbiAgICAgICAgICAgIHNbMTRdID0gYjE0IF4gKH5iMTYgJiBiMTgpO1xyXG4gICAgICAgICAgICBzWzE1XSA9IGIxNSBeICh+YjE3ICYgYjE5KTtcclxuICAgICAgICAgICAgc1syNF0gPSBiMjQgXiAofmIyNiAmIGIyOCk7XHJcbiAgICAgICAgICAgIHNbMjVdID0gYjI1IF4gKH5iMjcgJiBiMjkpO1xyXG4gICAgICAgICAgICBzWzM0XSA9IGIzNCBeICh+YjM2ICYgYjM4KTtcclxuICAgICAgICAgICAgc1szNV0gPSBiMzUgXiAofmIzNyAmIGIzOSk7XHJcbiAgICAgICAgICAgIHNbNDRdID0gYjQ0IF4gKH5iNDYgJiBiNDgpO1xyXG4gICAgICAgICAgICBzWzQ1XSA9IGI0NSBeICh+YjQ3ICYgYjQ5KTtcclxuICAgICAgICAgICAgc1s2XSA9IGI2IF4gKH5iOCAmIGIwKTtcclxuICAgICAgICAgICAgc1s3XSA9IGI3IF4gKH5iOSAmIGIxKTtcclxuICAgICAgICAgICAgc1sxNl0gPSBiMTYgXiAofmIxOCAmIGIxMCk7XHJcbiAgICAgICAgICAgIHNbMTddID0gYjE3IF4gKH5iMTkgJiBiMTEpO1xyXG4gICAgICAgICAgICBzWzI2XSA9IGIyNiBeICh+YjI4ICYgYjIwKTtcclxuICAgICAgICAgICAgc1syN10gPSBiMjcgXiAofmIyOSAmIGIyMSk7XHJcbiAgICAgICAgICAgIHNbMzZdID0gYjM2IF4gKH5iMzggJiBiMzApO1xyXG4gICAgICAgICAgICBzWzM3XSA9IGIzNyBeICh+YjM5ICYgYjMxKTtcclxuICAgICAgICAgICAgc1s0Nl0gPSBiNDYgXiAofmI0OCAmIGI0MCk7XHJcbiAgICAgICAgICAgIHNbNDddID0gYjQ3IF4gKH5iNDkgJiBiNDEpO1xyXG4gICAgICAgICAgICBzWzhdID0gYjggXiAofmIwICYgYjIpO1xyXG4gICAgICAgICAgICBzWzldID0gYjkgXiAofmIxICYgYjMpO1xyXG4gICAgICAgICAgICBzWzE4XSA9IGIxOCBeICh+YjEwICYgYjEyKTtcclxuICAgICAgICAgICAgc1sxOV0gPSBiMTkgXiAofmIxMSAmIGIxMyk7XHJcbiAgICAgICAgICAgIHNbMjhdID0gYjI4IF4gKH5iMjAgJiBiMjIpO1xyXG4gICAgICAgICAgICBzWzI5XSA9IGIyOSBeICh+YjIxICYgYjIzKTtcclxuICAgICAgICAgICAgc1szOF0gPSBiMzggXiAofmIzMCAmIGIzMik7XHJcbiAgICAgICAgICAgIHNbMzldID0gYjM5IF4gKH5iMzEgJiBiMzMpO1xyXG4gICAgICAgICAgICBzWzQ4XSA9IGI0OCBeICh+YjQwICYgYjQyKTtcclxuICAgICAgICAgICAgc1s0OV0gPSBiNDkgXiAofmI0MSAmIGI0Myk7XHJcbiAgICAgICAgICAgIHNbMF0gXj0gU2hhMy5ST1VORF9DT05TVEFOVFNbbl07XHJcbiAgICAgICAgICAgIHNbMV0gXj0gU2hhMy5ST1VORF9DT05TVEFOVFNbbiArIDFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiBQYWRkaW5nIHRvIHVzZSBmb3IgS2VjY2FrICovXHJcblNoYTMuS0VDQ0FLX1BBRERJTkcgPSBuZXcgVWludDMyQXJyYXkoWzEsIDI1NiwgNjU1MzYsIDE2Nzc3MjE2XSk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5TaGEzLlNISUZUID0gbmV3IFVpbnQ4QXJyYXkoWzAsIDgsIDE2LCAyNF0pO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuU2hhMy5ST1VORF9DT05TVEFOVFMgPSBuZXcgVWludDMyQXJyYXkoWzEsIDAsIDMyODk4LCAwLCAzMjkwNiwgMjE0NzQ4MzY0OCwgMjE0NzUxNjQxNiwgMjE0NzQ4MzY0OCwgMzI5MDcsIDAsIDIxNDc0ODM2NDksXHJcbiAgICAwLCAyMTQ3NTE2NTQ1LCAyMTQ3NDgzNjQ4LCAzMjc3NywgMjE0NzQ4MzY0OCwgMTM4LCAwLCAxMzYsIDAsIDIxNDc1MTY0MjUsIDAsXHJcbiAgICAyMTQ3NDgzNjU4LCAwLCAyMTQ3NTE2NTU1LCAwLCAxMzksIDIxNDc0ODM2NDgsIDMyOTA1LCAyMTQ3NDgzNjQ4LCAzMjc3MSxcclxuICAgIDIxNDc0ODM2NDgsIDMyNzcwLCAyMTQ3NDgzNjQ4LCAxMjgsIDIxNDc0ODM2NDgsIDMyNzc4LCAwLCAyMTQ3NDgzNjU4LCAyMTQ3NDgzNjQ4LFxyXG4gICAgMjE0NzUxNjU0NSwgMjE0NzQ4MzY0OCwgMzI4OTYsIDIxNDc0ODM2NDgsIDIxNDc0ODM2NDksIDAsIDIxNDc1MTY0MjQsIDIxNDc0ODM2NDhdKTtcclxuZXhwb3J0cy5TaGEzID0gU2hhMztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJoaE15NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a2FXZGxjM1J6TDNOb1lUTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3h6UkVGQmJVUTdRVUZGYmtRN08wZEJSVWM3UVVGRFNEdEpRWEZEU1RzN096czdUMEZMUnp0SlFVTklMRmxCUVZrc1NVRkJXU3hGUVVGRkxFOUJRVzlDTEVWQlFVVXNWVUZCYTBJN1VVRkRPVVFzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNN1VVRkRlRUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRPVUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzaERMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzVlVGQlZTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnlReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNWVUZCVlN4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVVV4UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzUkRMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJhMEk3VVVGRE5VSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VVVGRE9VUXNRMEZCUXp0UlFVTkVMRTFCUVUwc1QwRkJUeXhIUVVGbExFbEJRVWtzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTJ4RUxFMUJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRPVUlzU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRlRpeFBRVUZQTEV0QlFVc3NSMEZCUnl4TlFVRk5MRVZCUVVVc1EwRkJRenRaUVVOd1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEWkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dG5Ra0ZEY0VJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8yZENRVU01UWl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRPMjlDUVVONFF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1EwRkJRenRaUVVOTUxFTkJRVU03V1VGRFJDeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRMjVGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhGTEVOQlFVTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU40UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1pDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTTdaMEpCUTJ4RExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdaMEpCUXpkRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenR2UWtGRGNFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU4wUXl4RFFVRkRPMmRDUVVORUxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdaMEpCUTNCRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUTNaQ0xFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRTaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTndRaXhEUVVGRE8xRkJRMHdzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTzFGQlExUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSV2hDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOV0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTldMRTFCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNCRExFbEJRVWtzVFVGQlRTeERRVUZETzFGQlExZ3NSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtJc1RVRkJUU3hIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEU2l4TlFVRk5MRWRCUVVjc1NVRkJTU3hYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEY0VNc1EwRkJRenRSUVVORUxFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM1JETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVVzUTBGQlF6dFpRVU0xUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdaMEpCUTI1RkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bENMRU5CUVVNN1VVRkRUQ3hEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrSXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVUlzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEzQkRMRU5CUVVNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZGWWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1VVRkJVVHRSUVVOYUxFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUzBGQlN5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRMnBFTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdaMEpCUTNoRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM2hDTEVOQlFVTTdVVUZEVEN4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxGVkJRVlVzUTBGQlF6dFJRVU5xUkN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdXVUZEY0VNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzUkRMRU5CUVVNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzYVVKQlFXbENMRU5CUVVNc1EwRkJZenRSUVVOd1F5eDNSRUZCZDBRN1VVRkRlRVFzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJReTlETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVU01UlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRemxGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRSUVVOdVJpeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8xbEJRM3BDTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlJURkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFZc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5XTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFZc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExWXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5XTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlJWZ3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5XTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFZpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzSkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYkVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzSkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVVndReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJSVE5DTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRReXhEUVVGRE8wbEJRMHdzUTBGQlF6czdRVUZvVmtRc0swSkJRU3RDTzBGQlExSXNiVUpCUVdNc1IwRkJaMElzU1VGQlNTeFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJoSExHVkJRV1U3UVVGRFV5eFZRVUZMTEVkQlFXVXNTVUZCU1N4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRek5GTEdWQlFXVTdRVUZEVXl4dlFrRkJaU3hIUVVGblFpeEpRVUZKTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hWUVVGVk8wbEJRMjVLTEVOQlFVTXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEZWQlFWVXNSVUZCUlN4RFFVRkRPMGxCUXpORkxGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzVlVGQlZTeEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1MwRkJTenRKUVVOMlJTeFZRVUZWTEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hIUVVGSExFVkJRVVVzVlVGQlZTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRGFFWXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZXTTBZc2IwSkJhMVpESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGlnZXN0cy9zaGEzLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBqc29uSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9qc29uSGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIEEgY29yZSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIENvcmVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIENvcmVFcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuYWRkaXRpb25hbCA9IGFkZGl0aW9uYWwgPyBhZGRpdGlvbmFsIDoge307XHJcbiAgICAgICAgdGhpcy5pbm5lckVycm9yID0gaW5uZXJFcnJvcjtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiQ29yZVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhbiBvYmplY3QgY291bGQgYmUgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2sgaWYgaXQgaXMgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIElmIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFcnJvcihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgXCJtZXNzYWdlXCIgaW4gb2JqICYmIFwiYWRkaXRpb25hbFwiIGluIG9iajtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IHRoZSBlcnJvciB0byBhIHJlYWRhYmxlIHZlcnNpb24uXHJcbiAgICAgKi9cclxuICAgIGZvcm1hdCgpIHtcclxuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMuZG9tYWluKSkge1xyXG4gICAgICAgICAgICBvdXQgKz0gYCR7dGhpcy5kb21haW59OiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMubWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMubWVzc2FnZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5hZGRpdGlvbmFsKTtcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvdXQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdXQgKz0gYFxcdCR7a2V5fTogJHtqc29uSGVscGVyXzEuSnNvbkhlbHBlci5zdHJpbmdpZnkodGhpcy5hZGRpdGlvbmFsW2tleV0pfVxcbmA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29yZUVycm9yID0gQ29yZUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl5WlVWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDJOdmNtVkZjbkp2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYzBSQlFXMUVPMEZCUTI1RUxEQkVRVUYxUkR0QlFVVjJSRHM3UjBGRlJ6dEJRVU5JTEdWQlFYVkNMRk5CUVZFc1MwRkJTenRKUVdkQ2FFTTdPenM3TzA5QlMwYzdTVUZEU0N4WlFVRlpMRTlCUVdVc1JVRkJSU3hWUVVGclF5eEZRVUZGTEZWQlFXdENPMUZCUXk5RkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTm1MRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFJRVU12UXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExGVkJRVlVzUTBGQlF6dFJRVU0zUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlVUdFJRVU14UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhMUVVGTExGTkJRVk1zU1VGQlNTeEhRVUZITEV0QlFVc3NTVUZCU1N4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzU1VGQlNTeFRRVUZUTEVsQlFVa3NSMEZCUnl4SlFVRkpMRmxCUVZrc1NVRkJTU3hIUVVGSExFTkJRVU03U1VGRGJrZ3NRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzVFVGQlRUdFJRVU5VTEVsQlFVa3NSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWaUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEhRVUZITEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU03VVVGRE9VSXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBReXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkROMElzUTBGQlF6dFJRVVZFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpGRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBDTEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNN1dVRkRhRUlzUTBGQlF6dFpRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlEyWXNSMEZCUnl4SlFVRkpMRXRCUVVzc1IwRkJSeXhMUVVGTExIVkNRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUTNaRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlExQXNRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZETzBOQlEwbzdRVUV2UkVRc09FSkJLMFJESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZXJyb3IvY29yZUVycm9yLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU3RyaW5nIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgU3RyaW5nSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgc3RyaW5neW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcgdGhhdCBpcyBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG5vIGVtcHR5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHN0cmluZyBhbGwgQVNDSUkgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gdGVzdCBpZiBpcyBpcyBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbGwgQVNDSUkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FzY2lpKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IC9eW1xceDAwLVxceEZGXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlIG5vbiBBU0NJSSBjaGFyYWN0ZXJzIHdpdGggY29udHJvbCBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdmFsdWUgdG8gZXNjYXBlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGVzY2FwZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZW5jb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1tcXHUwMDdGLVxcdUZGRkZdL2csIChjaHIpID0+IGBcXFxcdSR7KGAwMDAwJHtjaHIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNil9YCkuc3Vic3RyKC00KX1gKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlIGNvbnRyb2wgY2hhcmFjdGVycyB0byBBU0NJSS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5jb2RlZCBzdHJpbmcgdG8gY29udmVydCBiYWNrIHRvIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRlY29kZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1xcXFx1KFtcXGRcXHddezR9KS9naSwgKG1hdGNoLCBncnApID0+IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZ3JwLCAxNikpKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0cmluZ0hlbHBlciA9IFN0cmluZ0hlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSeWFXNW5TR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YzNSeWFXNW5TR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzYVVKQlFXbENMRU5CUVVNN1NVRkRPVVVzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVN1VVRkROVUlzVFVGQlRTeERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNdlJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJZVHRSUVVNdlFpeE5RVUZOTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFXRTdVVUZEZEVNc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRKUVVNdlNpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1MwRkJZVHRSUVVOMFF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU5vU2l4RFFVRkRPME5CUTBvN1FVRXZRMFFzYjBOQkswTkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL3N0cmluZ0hlbHBlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgdHlwZXMuXHJcbiAqIEB0eXBlcGFyYW0gVCBUaGUgZ2VuZXJpYyB0eXBlIGZvciB0aGUgb2JqZWN0IHR5cGVzIGluIHRoZSBmYWN0b3J5LlxyXG4gKi9cclxuY2xhc3MgRmFjdG9yeUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyogQGludGVybmFsICovXHJcbiAgICAgICAgdGhpcy5fdHlwZXMgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgdHlwZSB3aXRoIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gcmVnaXN0ZXIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZUNvbnN0cnVjdG9yIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKG5hbWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gPSB0eXBlQ29uc3RydWN0b3I7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXIgYSB0eXBlIGZyb20gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byB1bnJlZ2lzdGVyLlxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKG5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgZmFjdG9yeSBjb250YWluIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIGV4aXN0cyhuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTGlzdCB0aGUgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBsb29rIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR5cGUgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICB0eXBlcygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhbiBvYmplY3QgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGNyZWF0ZS5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFueSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICogQHJldHVybnMgQSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHR5cGUgaWYgaXQgZXhpc3RzLCBvciB1bmRlZmluZWQgaWYgaXQgZG9lcyBub3QuXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZShuYW1lLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLl90eXBlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuX3R5cGVzW25hbWVdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GYWN0b3J5QmFzZSA9IEZhY3RvcnlCYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labUZqZEc5eWVVSmhjMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMMlpoWTNSdmNubENZWE5sTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0R0SlFVRkJPMUZCUTBrc1pVRkJaVHRSUVVORkxGZEJRVTBzUjBGQk9FTXNSVUZCUlN4RFFVRkRPMGxCYzBRMVJTeERRVUZETzBsQmNFUkhPenM3TzA5QlNVYzdTVUZEU1N4UlFVRlJMRU5CUVVNc1NVRkJXU3hGUVVGRkxHVkJRWE5ETzFGQlEyaEZMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1pVRkJaU3hEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFZRVUZWTEVOQlFVTXNTVUZCV1R0UlFVTXhRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1NVRkJXVHRSUVVOMFFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4VFFVRlRMRU5CUVVNN1NVRkRla1FzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeExRVUZMTzFGQlExSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhKUVVGWkxFVkJRVVVzUjBGQlJ5eEpRVUZYTzFGQlEzUkRMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTndReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UWl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRekZETEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOS0xFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEY2tJc1EwRkJRenRKUVVOTUxFTkJRVU03UTBGSlNqdEJRWGhFUkN4clEwRjNSRU1pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBJU3BvbmdlIHVzaW5nIEN1cmwgYWxnb3JpdGhtLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pb3RhLmxpYi5qcy9ibG9iL21hc3Rlci9saWIvY3J5cHRvL2N1cmwvY3VybC5qc1xyXG4gKi9cclxuY2xhc3MgQ3VybCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBDdXJsLlxyXG4gICAgICogQHBhcmFtIHJvdW5kcyBUaGUgbnVtYmVyIG9mIHJvdW5kcyB0byB1c2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHJvdW5kcyA9IEN1cmwuTlVNQkVSX09GX1JPVU5EUykge1xyXG4gICAgICAgIHRoaXMuX251bWJlck9mUm91bmRzID0gcm91bmRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNvbnN0YW50IGZvciB0aGUgc3BvbmUuXHJcbiAgICAgKiBAbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29udGFudCB0byBnZXQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29uc3RhbnQuXHJcbiAgICAgKi9cclxuICAgIGdldENvbnN0YW50KG5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9ST1VORFNcIjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlck9mUm91bmRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJIQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiU1RBVEVfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cmxbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBVbmtub3duIGNvbnN0YW50IHJlcXVlc3RlZCAke25hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0YXRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpc2UgdGhlIGhhc2hlci5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSBmb3IgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZShzdGF0ZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXcgSW50OEFycmF5KEN1cmwuU1RBVEVfTEVOR1RIKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBoYXNoZXIuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBYnNvcmIgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGludG8gdGhlIHRyaXRzIHRvIGFic29yYiBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqL1xyXG4gICAgYWJzb3JiKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUcml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJMZW5ndGggbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICsgb2Zmc2V0ID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gbG9jYWxMZW5ndGggPCBDdXJsLkhBU0hfTEVOR1RIID8gbG9jYWxMZW5ndGggOiBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpKytdID0gdHJpdHNbbG9jYWxPZmZzZXQrK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTcXVlZXplIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gc3F1ZWV6ZSBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKi9cclxuICAgIHNxdWVlemUodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBsb2NhbExlbmd0aCA8IEN1cmwuSEFTSF9MRU5HVEggPyBsZW5ndGggOiBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0cml0c1tsb2NhbE9mZnNldCsrXSA9IHRoaXMuX3N0YXRlW2krK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2Zvcm0gdGhlIGhhc2guXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKCkge1xyXG4gICAgICAgIGxldCBzdGF0ZUNvcHk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCByb3VuZCA9IDA7IHJvdW5kIDwgdGhpcy5fbnVtYmVyT2ZSb3VuZHM7IHJvdW5kKyspIHtcclxuICAgICAgICAgICAgc3RhdGVDb3B5ID0gbmV3IEludDhBcnJheSh0aGlzLl9zdGF0ZS5zbGljZSgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDdXJsLlNUQVRFX0xFTkdUSDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpXSA9IEN1cmwuVFJVVEhfVEFCTEVbc3RhdGVDb3B5W2luZGV4XSArIChzdGF0ZUNvcHlbaW5kZXggKz0gKGluZGV4IDwgMzY1ID8gMzY0IDogLTM2NSldIDw8IDIpICsgNV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQ3VybC5IQVNIX0xFTkdUSCA9IDI0MztcclxuQ3VybC5OVU1CRVJfT0ZfUk9VTkRTID0gODE7XHJcbkN1cmwuU1RBVEVfTEVOR1RIID0gQ3VybC5IQVNIX0xFTkdUSCAqIDM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5DdXJsLlRSVVRIX1RBQkxFID0gbmV3IEludDhBcnJheShbMSwgMCwgLTEsIDIsIDEsIC0xLCAwLCAyLCAtMSwgMSwgMF0pO1xyXG5leHBvcnRzLkN1cmwgPSBDdXJsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM1Z5YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl6Y0c5dVoyVnpMMk4xY213dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzYzBSQlFXMUVPMEZCUjI1RU96czdSMEZIUnp0QlFVTklPMGxCWVVrN096dFBRVWRITzBsQlEwZ3NXVUZCV1N4VFFVRnBRaXhKUVVGSkxFTkJRVU1zWjBKQlFXZENPMUZCUXpsRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NUVUZCVFN4RFFVRkRPMGxCUTJ4RExFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVjBGQlZ5eERRVUZETEVsQlFWazdVVUZETTBJc1RVRkJUU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTllMRXRCUVVzc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXp0blFrRkRkRUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNN1dVRkRhRU1zUTBGQlF6dFpRVU5FTEV0QlFVc3NZVUZCWVN4RFFVRkRPMWxCUTI1Q0xFdEJRVXNzWTBGQll6dG5Ra0ZEYmtJc1EwRkJRenR2UWtGRFJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU4wUWl4RFFVRkRPMWxCUTBRc1UwRkJVeXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3NFFrRkJPRUlzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjZSU3hEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOMlFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVlVGQlZTeERRVUZETEV0QlFXbENPMUZCUXk5Q0xFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRVaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTjRRaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEU2l4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRSUVVOdVJDeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJaMElzUlVGQlJTeE5RVUZqTEVWQlFVVXNUVUZCWXp0UlFVTXhSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETDBRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFJRVU5xUlN4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1JDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaEVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERoQ1FVRTRRaXhEUVVGRExFTkJRVU03VVVGRE1VUXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZFVSQlFYVkVMRU5CUVVNc1EwRkJRenRSUVVOdVJpeERRVUZETzFGQlJVUXNTVUZCU1N4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NWMEZCVnl4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVWNlFpeEhRVUZITEVOQlFVTTdXVUZEUVN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFZpeE5RVUZOTEV0QlFVc3NSMEZCUnl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlJUbEZMRTlCUVU4c1EwRkJReXhIUVVGSExFdEJRVXNzUlVGQlJTeERRVUZETzJkQ1FVTm1MRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU0xUXl4RFFVRkRPMWxCUlVRc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFsQlJXcENMRmRCUVZjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlEzQkRMRU5CUVVNc1VVRkJVU3hYUVVGWExFZEJRVWNzUTBGQlF5eEZRVUZGTzBsQlF6bENMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFOUJRVThzUTBGQlF5eExRVUZuUWl4RlFVRkZMRTFCUVdNc1JVRkJSU3hOUVVGak8xRkJRek5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVZNc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlJDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXh4UTBGQmNVTXNRMEZCUXl4RFFVRkRPMUZCUTJwRkxFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaEVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERoQ1FVRTRRaXhEUVVGRExFTkJRVU03VVVGRE1VUXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4MVJFRkJkVVFzUTBGQlF5eERRVUZETzFGQlEyNUdMRU5CUVVNN1VVRkZSQ3hKUVVGSkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hYUVVGWExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlJYcENMRWRCUVVjc1EwRkJRenRaUVVWQkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTldMRTFCUVUwc1MwRkJTeXhIUVVGSExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkZla1VzVDBGQlR5eERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRMllzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpWRExFTkJRVU03V1VGRlJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1dVRkZha0lzVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRjRU1zUTBGQlF5eFJRVUZSTEZkQlFWY3NSMEZCUnl4RFFVRkRMRVZCUVVVN1NVRkRPVUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOTExGTkJRVk03VVVGRFlpeEpRVUZKTEZOQlFXOUNMRU5CUVVNN1VVRkRla0lzU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUldRc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRlRVFzVTBGQlV5eEhRVUZITEVsQlFVa3NVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVVXZReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRuUWtGRmVrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53U0N4RFFVRkRPMUZCUTB3c1EwRkJRenRKUVVOTUxFTkJRVU03TzBGQk4wcHpRaXhuUWtGQlZ5eEhRVUZYTEVkQlFVY3NRMEZCUXp0QlFVTXhRaXh4UWtGQlowSXNSMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkRPVUlzYVVKQlFWa3NSMEZCVnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVVZ1UlN4bFFVRmxPMEZCUTFNc1owSkJRVmNzUjBGQll5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCVG5wSExHOUNRU3RLUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvc3Bvbmdlcy9jdXJsLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHNoYTNfMSA9IHJlcXVpcmUoXCIuLi9kaWdlc3RzL3NoYTNcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IGJpZ0ludGVnZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2JpZ0ludGVnZXJIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBJU3BvbmdlIHVzaW5nIEtlcmwgYWxnb3JpdGhtLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pcmkvYmxvYi9kZXYvc3JjL21haW4vamF2YS9jb20vaW90YS9pcmkvaGFzaC9LZXJsLmphdmFcclxuICovXHJcbmNsYXNzIEtlcmwge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgS2VybC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fa2VjY2FrID0gbmV3IHNoYTNfMS5TaGEzKDM4NCwgc2hhM18xLlNoYTMuS0VDQ0FLX1BBRERJTkcsIDM4NCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY29uc3RhbnQgZm9yIHRoZSBzcG9uZS5cclxuICAgICAqIEBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb250YW50IHRvIGdldC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb25zdGFudC5cclxuICAgICAqL1xyXG4gICAgZ2V0Q29uc3RhbnQobmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiSEFTSF9MRU5HVEhcIjpcclxuICAgICAgICAgICAgY2FzZSBcIkJJVF9IQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiQllURV9IQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBLZXJsW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVW5rbm93biBjb25zdGFudCByZXF1ZXN0ZWQgJHtuYW1lfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdGF0ZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGlzZSB0aGUgaGFzaGVyLlxyXG4gICAgICogQHBhcmFtIHN0YXRlIFRoZSBpbml0aWFsIHN0YXRlIGZvciB0aGUgaGFzaGVyLlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplKHN0YXRlKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBoYXNoZXIuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuX2tlY2Nhay5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBYnNvcmIgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGludG8gdGhlIHRyaXRzIHRvIGFic29yYiBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqL1xyXG4gICAgYWJzb3JiKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUcml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJMZW5ndGggbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICsgb2Zmc2V0ID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggJSAyNDMgIT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtLZXJsLkhBU0hfTEVOR1RIfWAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9jYWxPZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgbGV0IGxvY2FsTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY29uc3QgdHJpdFN0YXRlID0gdHJpdHMuc2xpY2UobG9jYWxPZmZzZXQsIGxvY2FsT2Zmc2V0ICsgS2VybC5IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIHRyaXRTdGF0ZVtLZXJsLkhBU0hfTEVOR1RIIC0gMV0gPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBiaWdJbnQgPSBiaWdJbnRlZ2VySGVscGVyXzEuQmlnSW50ZWdlckhlbHBlci50cml0c1RvQmlnSW50ZWdlcih0cml0U3RhdGUsIDAsIHRyaXRTdGF0ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlU3RhdGUgPSBuZXcgQXJyYXlCdWZmZXIoS2VybC5CWVRFX0hBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIuYmlnSW50ZWdlclRvQnl0ZXMoYmlnSW50LCBieXRlU3RhdGUsIDApO1xyXG4gICAgICAgICAgICB0aGlzLl9rZWNjYWsudXBkYXRlKGJ5dGVTdGF0ZSk7XHJcbiAgICAgICAgICAgIGxvY2FsT2Zmc2V0ICs9IEtlcmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgICAgIGxvY2FsTGVuZ3RoIC09IEtlcmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgfSB3aGlsZSAobG9jYWxMZW5ndGggPiAwKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3F1ZWV6ZSB0cml0cyBpbnRvIHRoZSBoYXNoLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBzcXVlZXplLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGludG8gdGhlIHRyaXRzIHRvIHNxdWVlemUgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiB0cml0cyB0byBzcXVlZXplLlxyXG4gICAgICovXHJcbiAgICBzcXVlZXplKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUcml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJMZW5ndGggbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICsgb2Zmc2V0ID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggJSAyNDMgIT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtLZXJsLkhBU0hfTEVOR1RIfWAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9jYWxPZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgbGV0IGxvY2FsTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZVN0YXRlQnVmZmVyID0gdGhpcy5fa2VjY2FrLmRpZ2VzdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBiaWdJbnQgPSBiaWdJbnRlZ2VySGVscGVyXzEuQmlnSW50ZWdlckhlbHBlci5ieXRlc1RvQmlnSW50ZWdlcihieXRlU3RhdGVCdWZmZXIsIDAsIEtlcmwuQllURV9IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaXRTdGF0ZSA9IG5ldyBJbnQ4QXJyYXkoS2VybC5IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLmJpZ0ludGVnZXJUb1RyaXRzKGJpZ0ludCwgdHJpdFN0YXRlLCAwLCBLZXJsLkhBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgdHJpdFN0YXRlW0tlcmwuSEFTSF9MRU5HVEggLSAxXSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCBLZXJsLkhBU0hfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgICAgICB0cml0c1tsb2NhbE9mZnNldCsrXSA9IHRyaXRTdGF0ZVtpKytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KGJ5dGVTdGF0ZUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkdi5ieXRlTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGR2LnNldFVpbnQ4KGksIGR2LmdldFVpbnQ4KGkpIF4gMHhGRik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fa2VjY2FrLnVwZGF0ZShieXRlU3RhdGVCdWZmZXIpO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBLZXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcbktlcmwuSEFTSF9MRU5HVEggPSAyNDM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5LZXJsLkJJVF9IQVNIX0xFTkdUSCA9IDM4NDtcclxuLyogQGludGVybmFsICovXHJcbktlcmwuQllURV9IQVNIX0xFTkdUSCA9IEtlcmwuQklUX0hBU0hfTEVOR1RIIC8gODtcclxuZXhwb3J0cy5LZXJsID0gS2VybDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYTJWeWJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5emNHOXVaMlZ6TDJ0bGNtd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZEZWtVc01FTkJRWFZETzBGQlEzWkRMSE5FUVVGdFJEdEJRVU51UkN4clJVRkJLMFE3UVVGSEwwUTdPenRIUVVkSE8wRkJRMGc3U1VGWFNUczdUMEZGUnp0SlFVTklPMUZCUTBrc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEZkQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1YwRkJTU3hEUVVGRExHTkJRV01zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTXpSQ3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxGZEJRVmNzUTBGQlF5eEpRVUZaTzFGQlF6TkNMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEV0N4TFFVRkxMR0ZCUVdFc1EwRkJRenRaUVVOdVFpeExRVUZMTEdsQ1FVRnBRaXhEUVVGRE8xbEJRM1pDTEV0QlFVc3NhMEpCUVd0Q08yZENRVU4yUWl4RFFVRkRPMjlDUVVOSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRM1JDTEVOQlFVTTdXVUZEUkN4VFFVRlRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERoQ1FVRTRRaXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzcEZMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRlZCUVZVc1EwRkJReXhMUVVGcFFqdEpRVU51UXl4RFFVRkRPMGxCUlVRN08wOUJSVWM3U1VGRFNTeExRVUZMTzFGQlExSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zUzBGQlowSXNSVUZCUlN4TlFVRmpMRVZCUVVVc1RVRkJZenRSUVVNeFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMMFFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0UlFVTnFSU3hEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8xRkJRekZFTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdVVUZETVVRc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVVJCUVhWRUxFTkJRVU1zUTBGQlF6dFJRVU51Uml4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pDTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHZERRVUZuUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpGR0xFTkJRVU03VVVGRlJDeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRla0lzU1VGQlNTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUlhwQ0xFZEJRVWNzUTBGQlF6dFpRVU5CTEUxQlFVMHNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eEZRVUZGTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRk0wVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTNCRExFMUJRVTBzVFVGQlRTeEhRVUZITEcxRFFVRm5RaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMWxCUTJ4R0xFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMWxCUTNwRUxHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmVrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZGTDBJc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZEYUVNc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEY0VNc1EwRkJReXhSUVVGUkxGZEJRVmNzUjBGQlJ5eERRVUZETEVWQlFVVTdTVUZET1VJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVDBGQlR5eERRVUZETEV0QlFXZENMRVZCUVVVc1RVRkJZeXhGUVVGRkxFMUJRV003VVVGRE0wUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJReTlFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1VVRkRha1VzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNPRUpCUVRoQ0xFTkJRVU1zUTBGQlF6dFJRVU14UkN4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1JDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSFZFUVVGMVJDeERRVUZETEVOQlFVTTdVVUZEYmtZc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UWl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eG5RMEZCWjBNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNeFJpeERRVUZETzFGQlJVUXNTVUZCU1N4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NWMEZCVnl4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVWNlFpeEhRVUZITEVOQlFVTTdXVUZEUVN4TlFVRk5MR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMWxCUlRsRExFMUJRVTBzVFVGQlRTeEhRVUZITEcxRFFVRm5RaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03V1VGRk4wWXNUVUZCVFN4VFFVRlRMRWRCUVdNc1NVRkJTU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpkRUxHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0WlFVVXpSU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRmNFTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMVlzVDBGQlR5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8yZENRVU14UWl4TFFVRkxMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNeFF5eERRVUZETzFsQlJVUXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hSUVVGUkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdXVUZEZWtNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMmRDUVVOcVF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRekZETEVOQlFVTTdXVUZGUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0WlFVVnlReXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTndReXhEUVVGRExGRkJRVkVzVjBGQlZ5eEhRVUZITEVOQlFVTXNSVUZCUlR0SlFVTTVRaXhEUVVGRE96dEJRVzVLUkN4bFFVRmxPMEZCUTFNc1owSkJRVmNzUjBGQlZ5eEhRVUZITEVOQlFVTTdRVUZEYkVRc1pVRkJaVHRCUVVOVExHOUNRVUZsTEVkQlFWY3NSMEZCUnl4RFFVRkRPMEZCUTNSRUxHVkJRV1U3UVVGRFV5eHhRa0ZCWjBJc1IwRkJWeXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVNW9SaXh2UWtGeFNrTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9zcG9uZ2VzL2tlcmwudHMiLCJ2YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6aW1wb3J0LW5hbWVcclxuY29uc3QgYmlnX2ludGVnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYmlnLWludGVnZXJcIikpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG4vKipcclxuICogSGVscGVyIGNsYXNzIHRvIGNvbnZlcnQgYmV0d2VlbiBCaWdJbnRlZ2VyIGFuZCBvdGhlciB0eXBlcy5cclxuICogQ29udmVydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaXJpL2Jsb2IvZGV2L3NyYy9tYWluL2phdmEvY29tL2lvdGEvaXJpL2hhc2gvS2VybC5qYXZhXHJcbiAqL1xyXG5jbGFzcyBCaWdJbnRlZ2VySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0cml0cyB0byBhIGJpZ0ludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIGNvbnZlcnQuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IE9mZnNldCB3aXRoaW4gdGhlIGFycmF5IHRvIHN0YXJ0LlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSB0cml0cyBhcnJheSB0byBjb252ZXJ0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdHJpdHNUb0JpZ0ludGVnZXIodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSBhIG51bWJlciA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvZmZzZXQgKyBsZW5ndGggPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZhbHVlID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUubXVsdGlwbHkoQmlnSW50ZWdlckhlbHBlci5SQURJWCkuYWRkKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCh0cml0c1tvZmZzZXQgKyBpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYmlnSW50ZWdlciB0byB0cml0cy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgYmlnSW50ZWdlciB0byBjb252ZXJ0IHRvIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSBhcnJheSB0byByZWNlaXZlIHRoZSB0cml0cy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCB0byBwbGFjZSB0aGUgdHJpdHMgaW4gdGhlIGFycmF5LlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJpZ0ludGVnZXJUb1RyaXRzKHZhbHVlLCB0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIGJpZ0ludGVnZXIgdHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyaXRzIG11c3QgYmUgYW4gSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9mZnNldCArIGxlbmd0aCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYWJzb2x1dGVWYWx1ZSA9IHZhbHVlLmNvbXBhcmVUbyhiaWdfaW50ZWdlcl8xLmRlZmF1bHQuemVybykgPCAwID8gdmFsdWUubmVnYXRlKCkgOiB2YWx1ZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdlJlbWFpbmRlciA9IGFic29sdXRlVmFsdWUuZGl2bW9kKEJpZ0ludGVnZXJIZWxwZXIuUkFESVgpO1xyXG4gICAgICAgICAgICBhYnNvbHV0ZVZhbHVlID0gZGl2UmVtYWluZGVyLnF1b3RpZW50O1xyXG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gZGl2UmVtYWluZGVyLnJlbWFpbmRlcjtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmRlciA+IEJpZ0ludGVnZXJIZWxwZXIuTUFYX1RSSVRfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IEJpZ0ludGVnZXJIZWxwZXIuTUlOX1RSSVRfVkFMVUU7XHJcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZVZhbHVlID0gYWJzb2x1dGVWYWx1ZS5hZGQoYmlnX2ludGVnZXJfMS5kZWZhdWx0W1wiMVwiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJpdHNbb2Zmc2V0ICsgaV0gPSByZW1haW5kZXIudG9KU051bWJlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUuY29tcGFyZVRvKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdC56ZXJvKSA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgbmVnYXRpdmUgemVyb1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbb2Zmc2V0ICsgaV0gPSB0cml0c1tvZmZzZXQgKyBpXSA9PT0gMCA/IDAgOiAtdHJpdHNbb2Zmc2V0ICsgaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGJpZ0ludGVnZXIgaW50byBieXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cclxuICAgICAqIEBwYXJhbSBkZXN0aW5hdGlvbiBUaGUgZGVzdGluYXRpb24gYXJyYXkgdG8gc3RvcmUgdGhlIGJ5dGVzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IHdpdGhpbiB0aGUgYXJyYXkgdG8gc3RvcmUgdGhlIGJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYmlnSW50ZWdlclRvQnl0ZXModmFsdWUsIGRlc3RpbmF0aW9uLCBvZmZzZXQpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIGJpZ0ludGVnZXIgdHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGRlc3RpbmF0aW9uLCBBcnJheUJ1ZmZlcikgfHwgZGVzdGluYXRpb24uYnl0ZUxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBkZXN0aW5hdGlvbiBtdXN0IGJlIGFuIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5ieXRlTGVuZ3RoIC0gb2Zmc2V0IDwgQmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBEZXN0aW5hdGlvbiBhcnJheSBoYXMgaW52YWxpZCBzaXplLCBpdCBtdXN0IGJlIGF0IGxlYXN0ICR7QmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1lbWJlciBpZiBpdCBpcyBuZWdhdGl2ZSBmb3IgbGF0ZXJcclxuICAgICAgICBjb25zdCBpc05lZyA9IHZhbHVlLmlzTmVnYXRpdmUoKSA/IC0xIDogMDtcclxuICAgICAgICBsZXQgaGV4U3RyaW5nID0gdmFsdWUudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIGlmIChpc05lZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gQnV0IHJlbW92ZSBpdCBmb3Igbm93XHJcbiAgICAgICAgICAgIGhleFN0cmluZyA9IGhleFN0cmluZy5zbGljZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTm93IG1ha2Ugc3VyZSB0aGUgaGV4IHN0cmluZyBpcyBhbiBldmVuIGxlbmd0aCBzbyB0aGUgcmVnZXggd29ya3NcclxuICAgICAgICBpZiAoaGV4U3RyaW5nLmxlbmd0aCAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgaGV4U3RyaW5nID0gYDAke2hleFN0cmluZ31gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gaGV4U3RyaW5nLm1hdGNoKC9bMC05YS1mXXsyfS9nKTtcclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBoZXggdG8gbnVtYmVyc1xyXG4gICAgICAgIGNvbnN0IHNpZ25lZEJ5dGVzID0gbmV3IEludDhBcnJheShtYXRjaGVzXHJcbiAgICAgICAgICAgIC5tYXAoaGV4ID0+IHBhcnNlSW50KGAweCR7aGV4fWAsIDE2KSkpO1xyXG4gICAgICAgIGlmIChpc05lZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgQmlnSW50ZWdlckhlbHBlci50d29zQ29tcGxlbWVudChzaWduZWRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGRlc3RpbmF0aW9uKTtcclxuICAgICAgICAvLyBQYWQgdGhlIHN0YXJ0IG9mIHRoZSBidWZmZXIgd2l0aCB0aGUgbmVnIHZhbHVlXHJcbiAgICAgICAgbGV0IGkgPSBvZmZzZXQ7XHJcbiAgICAgICAgd2hpbGUgKGkgKyBzaWduZWRCeXRlcy5sZW5ndGggPCBCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0SW50OChpKyssIGlzTmVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQW5kIGNvcHkgaW4gdGhlIGFjdHVhbCBieXRlc1xyXG4gICAgICAgIGZvciAobGV0IGogPSBzaWduZWRCeXRlcy5sZW5ndGg7IGotLSA+IDA7KSB7XHJcbiAgICAgICAgICAgIGRhdGFWaWV3LnNldEludDgoaSsrLCBzaWduZWRCeXRlc1tzaWduZWRCeXRlcy5sZW5ndGggLSAxIC0gal0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBieXRlcyB0byBhIGJpZ0ludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2UgYnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgd2l0aGluIHRoZSBieXRlcyB0byBzdGFydCBjb252ZXJzaW9uLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBieXRlcyB0byB1c2UgZm9yIGNvbnZlcnNpb24uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBieXRlc1RvQmlnSW50ZWdlcihzb3VyY2UsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNvdXJjZSwgQXJyYXlCdWZmZXIpIHx8IHNvdXJjZS5ieXRlTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHNvdXJjZSBtdXN0IGJlIGEgbm9uIGVtcHR5IG51bWJlciBhcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSBhIG51bWJlciA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzb3VyY2UuYnl0ZUxlbmd0aCAtIG9mZnNldCA8IEJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgU291cmNlIGFycmF5IGhhcyBpbnZhbGlkIHNpemUsIGl0IG11c3QgYmUgYXQgbGVhc3QgJHtCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHNvdXJjZSk7XHJcbiAgICAgICAgbGV0IHNpZ25lZEJ5dGVzID0gbmV3IEludDhBcnJheShkYXRhVmlldy5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IGRhdGFWaWV3LmJ5dGVMZW5ndGg7IGIrKykge1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlc1tiXSA9IGRhdGFWaWV3LmdldEludDgoYiArIG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaW5pdGlhbCBwYWRkaW5nIGxlYXZpbmcgYXQgbGVhc3Qgb25lIGJ5dGVcclxuICAgICAgICBsZXQgcGFkZGluZ09mZnNldCA9IDA7XHJcbiAgICAgICAgY29uc3QgZmlyc3RCeXRlID0gc2lnbmVkQnl0ZXNbMF07XHJcbiAgICAgICAgY29uc3QgaXNOZWcgPSBmaXJzdEJ5dGUgPCAwO1xyXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBwYWRkaW5nIGNoYXJhY3RlciBpcyBuZWdhdGl2ZSB0aGVuIHJldmVyc2UgdGhlIDJzIGNvbXBsZW1lbnRcclxuICAgICAgICAvLyBidXQgZmlyc3Qgc3RyaXAgb2YgdGhlIGxlYWRpbmcgcGFkZGluZ1xyXG4gICAgICAgIGlmIChmaXJzdEJ5dGUgPT09IDAgfHwgZmlyc3RCeXRlID09PSAtMSkge1xyXG4gICAgICAgICAgICB3aGlsZSAoc2lnbmVkQnl0ZXNbcGFkZGluZ09mZnNldF0gPT09IGZpcnN0Qnl0ZSAmJiBwYWRkaW5nT2Zmc2V0IDwgc2lnbmVkQnl0ZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ09mZnNldCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFN0cmlwIGFueSBwYWRkaW5nXHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzID0gc2lnbmVkQnl0ZXMuc2xpY2UocGFkZGluZ09mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc05lZykge1xyXG4gICAgICAgICAgICBCaWdJbnRlZ2VySGVscGVyLnR3b3NDb21wbGVtZW50KHNpZ25lZEJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhleFN0cmluZyA9IGlzTmVnID8gXCItXCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KHNpZ25lZEJ5dGVzLmJ1ZmZlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBkdi5ieXRlTGVuZ3RoOyBoKyspIHtcclxuICAgICAgICAgICAgaGV4U3RyaW5nICs9IGAwMCR7ZHYuZ2V0VWludDgoaCkudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmlnX2ludGVnZXJfMS5kZWZhdWx0KGhleFN0cmluZywgMTYpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgdHdvc0NvbXBsZW1lbnQoc2lnbmVkQnl0ZXMpIHtcclxuICAgICAgICAvLyBpZiB0aGUgd2hvbGUgbnVtYmVyIGlzIG5lZ2F0aXZlIHRoZW5cclxuICAgICAgICAvLyBjaGFuZ2UgdG8gMidzIGNvbXBsZW1lbnRzIGJ5IG5vdGluZyBhbGwgdGhlIG51bWJlcnNcclxuICAgICAgICAvLyBhbmQgYWRkaW5nIDEgdG8gdGhlIGxhc3QgaS5lLiB+YmlnbnVtKzFcclxuICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IHNpZ25lZEJ5dGVzLmxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzW2JdID0gfnNpZ25lZEJ5dGVzW2JdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgMSB0byBsYXN0IG51bWJlciwgaWYgdGhlIG51bWJlciBpcyAweEZGIGNvbnRpbnVlIHRvIGNhcnJ5XHJcbiAgICAgICAgbGV0IGMgPSBzaWduZWRCeXRlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXNbY10rKztcclxuICAgICAgICB9IHdoaWxlIChzaWduZWRCeXRlc1tjLS1dID09PSAwICYmIGMgPiAwKTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5SQURJWCA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCgzKTtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuTUFYX1RSSVRfVkFMVUUgPSBCaWdJbnRlZ2VySGVscGVyLlJBRElYLm1pbnVzKDEpLmRpdmlkZSgyKTtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuTUlOX1RSSVRfVkFMVUUgPSBCaWdJbnRlZ2VySGVscGVyLk1BWF9UUklUX1ZBTFVFLm5lZ2F0ZSgpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5CSVRfSEFTSF9MRU5HVEggPSAzODQ7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEggPSBCaWdJbnRlZ2VySGVscGVyLkJJVF9IQVNIX0xFTkdUSCAvIDg7XHJcbmV4cG9ydHMuQmlnSW50ZWdlckhlbHBlciA9IEJpZ0ludGVnZXJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVltbG5TVzUwWldkbGNraGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMkpwWjBsdWRHVm5aWEpJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNkVU5CUVhWRE8wRkJRM1pETERoRVFVRnBRenRCUVVOcVF5eHpSRUZCYlVRN1FVRkZia1E3T3p0SFFVZEhPMEZCUTBnN1NVRmhTVHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhMUVVGblFpeEZRVUZGTEUxQlFXTXNSVUZCUlN4TlFVRmpPMUZCUXpWRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZSQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4NVEwRkJlVU1zUTBGQlF5eERRVUZETzFGQlEzSkZMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl4RFFVRkRMRU5CUVVNN1VVRkRPVVFzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNhVU5CUVdsRExFTkJRVU1zUTBGQlF6dFJRVU0zUkN4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDFSRUZCZFVRc1EwRkJReXhEUVVGRE8xRkJRMjVHTEVOQlFVTTdVVUZGUkN4SlFVRkpMRXRCUVVzc1IwRkJSeXh4UWtGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0UlFVVjRRaXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVOdVF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zY1VKQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNSaXhEUVVGRE8xRkJSVVFzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTnFRaXhEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NUVUZCVFN4RFFVRkRMR2xDUVVGcFFpeERRVUZETEV0QlFYZENMRVZCUVVVc1MwRkJaMElzUlVGQlJTeE5RVUZqTEVWQlFVVXNUVUZCWXp0UlFVTjBSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeHhRa0ZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1JETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1VVRkRha1VzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eG5RMEZCWjBNc1EwRkJReXhEUVVGRE8xRkJRelZFTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5eERRVUZETEVOQlFVTTdVVUZET1VRc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYVVOQlFXbERMRU5CUVVNc1EwRkJRenRSUVVNM1JDeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXgxUkVGQmRVUXNRMEZCUXl4RFFVRkRPMUZCUTI1R0xFTkJRVU03VVVGRlJDeEpRVUZKTEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExIRkNRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVVU1UlN4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlF6bENMRTFCUVUwc1dVRkJXU3hIUVVGSExHRkJRV0VzUTBGQlF5eE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEYkVVc1lVRkJZU3hIUVVGSExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTTdXVUZEZEVNc1NVRkJTU3hUUVVGVExFZEJRVWNzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVVjJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRPVU1zVTBGQlV5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRExHTkJRV01zUTBGQlF6dG5Ra0ZETlVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNjVUpCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNUVMRU5CUVVNN1dVRkRSQ3hMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dFJRVU12UXl4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4eFFrRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRuUWtGRE9VSXNjMEpCUVhOQ08yZENRVU4wUWl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlJTeERRVUZETzFGQlEwd3NRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhMUVVGM1FpeEZRVUZGTEZkQlFYZENMRVZCUVVVc1RVRkJZenRSUVVNNVJpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4eFFrRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhGRFFVRnhReXhEUVVGRExFTkJRVU03VVVGRGFrVXNRMEZCUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxGZEJRVmNzUTBGQlF5eEpRVUZKTEZkQlFWY3NRMEZCUXl4VlFVRlZMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUml4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc1EwRkJReXhEUVVGRE8xRkJRemxFTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5eERRVUZETEVOQlFVTTdVVUZET1VRc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4VlFVRlZMRWRCUVVjc1RVRkJUU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBSU3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3eVJFRkJNa1FzWjBKQlFXZENMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpGSUxFTkJRVU03VVVGRlJDeDFRMEZCZFVNN1VVRkRka01zVFVGQlRTeExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVEZETEVsQlFVa3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGYmtNc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVObUxIZENRVUYzUWp0WlFVTjRRaXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOdVF5eERRVUZETzFGQlEwUXNiMFZCUVc5Rk8xRkJRM0JGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROMElzVTBGQlV5eEhRVUZITEVsQlFVa3NVMEZCVXl4RlFVRkZMRU5CUVVNN1VVRkRhRU1zUTBGQlF6dFJRVU5FTEUxQlFVMHNUMEZCVHl4SFFVRkhMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdVVUZGYUVRc05rSkJRVFpDTzFGQlF6ZENMRTFCUVUwc1YwRkJWeXhIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEU5QlFVODdZVUZEY0VNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRORExFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFppeG5Ra0ZCWjBJc1EwRkJReXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEYWtRc1EwRkJRenRSUVVWRUxFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJSVE5ETEdsRVFVRnBSRHRSUVVOcVJDeEpRVUZKTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRaaXhQUVVGUExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNUVUZCVFN4SFFVRkhMR2RDUVVGblFpeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU03V1VGRGFFVXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTnFReXhEUVVGRE8xRkJRMFFzSzBKQlFTdENPMUZCUXk5Q0xFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNN1dVRkRlRU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hYUVVGWExFTkJRVU1zVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU51UlN4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFMUJRVzFDTEVWQlFVVXNUVUZCWXl4RlFVRkZMRTFCUVdNN1VVRkRMMFVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNWMEZCVnl4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGVkJRVlVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaRkxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRFpEUVVFMlF5eERRVUZETEVOQlFVTTdVVUZEZWtVc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYTBOQlFXdERMRU5CUVVNc1EwRkJRenRSUVVNNVJDeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFSQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4cFEwRkJhVU1zUTBGQlF5eERRVUZETzFGQlF6ZEVMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4SFFVRkhMRTFCUVUwc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtVc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjMFJCUVhORUxHZENRVUZuUWl4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTnlTQ3hEUVVGRE8xRkJSVVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRmRFTXNTVUZCU1N4WFFVRlhMRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUTNKRUxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRek5ETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOc1JDeERRVUZETzFGQlJVUXNkVVJCUVhWRU8xRkJRM1pFTEVsQlFVa3NZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOMFFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVUxUWl3MFJVRkJORVU3VVVGRE5VVXNlVU5CUVhsRE8xRkJRM3BETEVWQlFVVXNRMEZCUXl4RFFVRkRMRk5CUVZNc1MwRkJTeXhEUVVGRExFbEJRVWtzVTBGQlV5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFF5eFBRVUZQTEZkQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhUUVVGVExFbEJRVWtzWVVGQllTeEhRVUZITEZkQlFWY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU03WjBKQlEzaEdMR0ZCUVdFc1JVRkJSU3hEUVVGRE8xbEJRM0JDTEVOQlFVTTdXVUZEUkN4dlFrRkJiMEk3V1VGRGNFSXNWMEZCVnl4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdVVUZEYmtRc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRVaXhuUWtGQlowSXNRMEZCUXl4alFVRmpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRGFrUXNRMEZCUXp0UlFVVkVMRWxCUVVrc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03VVVGRGFrTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUXpWRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRM0pETEZOQlFWTXNTVUZCU1N4TFFVRkxMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRPVVFzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4eFFrRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTnFReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1YwRkJjMEk3VVVGRGFFUXNkVU5CUVhWRE8xRkJRM1pETEhORVFVRnpSRHRSUVVOMFJDd3dRMEZCTUVNN1VVRkRNVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03V1VGRE1VTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNKRExFTkJRVU03VVVGRFJDeG5SVUZCWjBVN1VVRkRhRVVzU1VGQlNTeERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGREwwSXNSMEZCUnl4RFFVRkRPMWxCUTBFc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdVVUZEY2tJc1EwRkJReXhSUVVGUkxGZEJRVmNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBsQlF6bERMRU5CUVVNN08wRkJhRTlFTEdWQlFXVTdRVUZEVXl4elFrRkJTeXhIUVVGelFpeHhRa0ZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRemRFTEdWQlFXVTdRVUZEVXl3clFrRkJZeXhIUVVGelFpeG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4wUnl4bFFVRmxPMEZCUTFNc0swSkJRV01zUjBGQmMwSXNaMEpCUVdkQ0xFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMEZCUlhKSExHVkJRV1U3UVVGRFV5eG5RMEZCWlN4SFFVRlhMRWRCUVVjc1EwRkJRenRCUVVOMFJDeGxRVUZsTzBGQlExTXNhVU5CUVdkQ0xFZEJRVmNzWjBKQlFXZENMRU5CUVVNc1pVRkJaU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVmcxUml3MFEwRnJUME1pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvaGVscGVycy9iaWdJbnRlZ2VySGVscGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIGFkZHJlc3Nlcy5cclxuICovXHJcbmNsYXNzIEFkZHJlc3Mge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzVHJ5dGVzLCBjaGVja3N1bVRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX2FkZHJlc3NUcnl0ZXMgPSBhZGRyZXNzVHJ5dGVzO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrc3VtVHJ5dGVzID0gY2hlY2tzdW1Ucnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhZGRyZXNzIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIGFkZHJlc3MgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIEFkZHJlc3MuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKGFkZHJlc3MpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYWRkcmVzcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGFkZHJlc3Mgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gYWRkcmVzcy50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0cnl0ZXNTdHJpbmcubGVuZ3RoICE9PSBBZGRyZXNzLkxFTkdUSCAmJiB0cnl0ZXNTdHJpbmcubGVuZ3RoICE9PSBBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBhZGRyZXNzIHNob3VsZCBlaXRoZXIgYmUgJHtBZGRyZXNzLkxFTkdUSH0gb3IgJHtBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoOiB0cnl0ZXNTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhZGRyZXNzVHJ5dGVzID0gdHJ5dGVzU3RyaW5nLnN1YnN0cigwLCBBZGRyZXNzLkxFTkdUSCk7XHJcbiAgICAgICAgbGV0IGNoZWNrc3VtVHJ5dGVzO1xyXG4gICAgICAgIGlmICh0cnl0ZXNTdHJpbmcubGVuZ3RoID09PSBBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNKSB7XHJcbiAgICAgICAgICAgIGNoZWNrc3VtVHJ5dGVzID0gdHJ5dGVzU3RyaW5nLnN1YnN0cihBZGRyZXNzLkxFTkdUSCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQWRkcmVzcyhhZGRyZXNzVHJ5dGVzLCBjaGVja3N1bVRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGFkZHJlc3MgdG8gdHJ5dGVzIHdpdGggbm8gY2hlY2tzdW0uXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgYWRkcmVzcyB3aXRoIG5vIGNoZWNrc3VtLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fYWRkcmVzc1RyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGFkZHJlc3MgdG8gdHJ5dGVzIHdpdGggYSBjaGVja3N1bSwgY3JlYXRpbmcgYSBibGFuayBvbmUgaWYgbmVlZGVkLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIGFkZHJlc3Mgd2l0aCBjaGVja3N1LC5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXNXaXRoQ2hlY2tzdW0oKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0aGlzLl9jaGVja3N1bVRyeXRlcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX2FkZHJlc3NUcnl0ZXMgKyB0aGlzLl9jaGVja3N1bVRyeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGlzIGFkZHJlc3MgaGFzIG5vIGNoZWNrc3VtIGNhbGN1bGF0ZWQgZm9yIGl0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0aGlzLl9jaGVja3N1bVRyeXRlcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3NUcnl0ZXMgKyB0aGlzLl9jaGVja3N1bVRyeXRlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRyZXNzVHJ5dGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgYSB2YWxpZCBhZGRyZXNzIHdpdGhvdXQgY2hlY2tzdW0gKDgxKS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIID0gODE7XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciBhbiBhZGRyZXNzIGNoZWNrc3VtICg5KS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIX0NIRUNLU1VNID0gOTtcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIHZhbGlkIGFkZHJlc3Mgd2l0aCBjaGVja3N1bSAoOTApLlxyXG4gKi9cclxuQWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTSA9IEFkZHJlc3MuTEVOR1RIICsgQWRkcmVzcy5MRU5HVEhfQ0hFQ0tTVU07XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBoYXNoIGFsbCA5cy5cclxuICovXHJcbkFkZHJlc3MuRU1QVFkgPSBBZGRyZXNzLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KEFkZHJlc3MuTEVOR1RIKSkpO1xyXG5leHBvcnRzLkFkZHJlc3MgPSBBZGRyZXNzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZV1JrY21WemN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a1lYUmhMMkZrWkhKbGMzTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2NVTkJRV3RETzBGQlJXeERPenRIUVVWSE8wRkJRMGc3U1VGM1Fra3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xHRkJRWEZDTEVWQlFVVXNZMEZCYzBJN1VVRkROMFFzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4aFFVRmhMRU5CUVVNN1VVRkRjRU1zU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCU1N4alFVRmpMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVdVN1VVRkRjRU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNaVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM2hETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEWkRRVUUyUXl4RFFVRkRMRU5CUVVNN1VVRkRka1VzUTBGQlF6dFJRVVZFTEUxQlFVMHNXVUZCV1N4SFFVRkhMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVY0UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeExRVUZMTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1dVRkJXU3hEUVVGRExFMUJRVTBzUzBGQlN5eFBRVUZQTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycEhMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEdkRFFVRm5ReXhQUVVGUExFTkJRVU1zVFVGQlRTeFBRVUZQTEU5QlFVOHNRMEZCUXl4dlFrRkJiMElzZFVKQlFYVkNMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzV1VGQldTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRia3NzUTBGQlF6dFJRVVZFTEUxQlFVMHNZVUZCWVN4SFFVRkhMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNM1JDeEpRVUZKTEdOQlFXTXNRMEZCUXp0UlFVTnVRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4TFFVRkxMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRka1FzWTBGQll5eEhRVUZITEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzcEVMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNZVUZCWVN4RlFVRkZMR05CUVdNc1EwRkJReXhEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NUVUZCVFN4RFFVRkRMR1ZCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3h2UWtGQmIwSTdVVUZEZGtJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFMUJRVTBzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMUZCUTNwRkxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEdkRVFVRm5SQ3hEUVVGRExFTkJRVU03VVVGRE1VVXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU03VVVGRGRFUXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMG9zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNN1VVRkRMMElzUTBGQlF6dEpRVU5NTEVOQlFVTTdPMEZCYmtaRU96dEhRVVZITzBGQlEyOUNMR05CUVUwc1IwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE0wTTdPMGRCUlVjN1FVRkRiMElzZFVKQlFXVXNSMEZCVnl4RFFVRkRMRU5CUVVNN1FVRkRia1E3TzBkQlJVYzdRVUZEYjBJc05FSkJRVzlDTEVkQlFWY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1IwRkJSeXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETzBGQlJTOUdPenRIUVVWSE8wRkJRMjlDTEdGQlFVc3NSMEZCV1N4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCYWtJNVJ5d3dRa0Z4UmtNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvYWRkcmVzcy50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudHMuXHJcbiAqL1xyXG5jbGFzcyBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBzaWduYXR1cmUgZnJhZ21lbnQgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBzaWduYXR1cmUgZnJhZ21lbnQgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHNob3VsZCBiZSAke1NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHNpZ25hdHVyZSBmcmFnbWVudCB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgc2lnbmF0dXJlIGZyYWdtZW50LlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQgKDIxODcpXHJcbiAqL1xyXG5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIID0gMjE4NztcclxuLyoqXHJcbiAqIEFuIGVtcHR5IHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50IGFsbCA5cy5cclxuICovXHJcblNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5FTVBUWSA9IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKSkpO1xyXG5leHBvcnRzLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJsbmJtRjBkWEpsVFdWemMyRm5aVVp5WVdkdFpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2YzJsbmJtRjBkWEpsVFdWemMyRm5aVVp5WVdkdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExIZENRVUZuUXp0UlFVTnlSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExIZENRVUYzUWl4RlFVRkZMR1ZCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UkN4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzRSRUZCT0VRc1EwRkJReXhEUVVGRE8xRkJRM2hHTEVOQlFVTTdVVUZGUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXgzUWtGQmQwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVOcVJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRXRCUVVzc2QwSkJRWGRDTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNM1F5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXd3UTBGQk1FTXNkMEpCUVhkQ0xFTkJRVU1zVFVGQlRTeDFRa0ZCZFVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZEVrc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEhkQ1FVRjNRaXhEUVVGRExIZENRVUYzUWl4RFFVRkRMRU5CUVVNN1NVRkRiRVVzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlEyNURMRU5CUVVNN08wRkJhRVJFT3p0SFFVVkhPMEZCUTI5Q0xDdENRVUZOTEVkQlFWY3NTVUZCU1N4RFFVRkRPMEZCUXpkRE96dEhRVVZITzBGQlEyOUNMRGhDUVVGTExFZEJRVFpDTEhkQ1FVRjNRaXhEUVVGRExGVkJRVlVzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlVtcExMRFJFUVd0RVF5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvaGFzaFwiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25fMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zYWN0aW9uXCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IHNwb25nZUZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuLi9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiKTtcclxuLyoqXHJcbiAqIEhlbHBlciBjbGFzcyBmb3IgdHJhbnNhY3Rpb25zLlxyXG4gKiBDb252ZXJ0ZWQgaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaW90YS5saWIuanMvYmxvYi9tYXN0ZXIvbGliL2NyeXB0by9zaWduaW5nL3NpZ25pbmcuanNcclxuICovXHJcbmNsYXNzIFRyYW5zYWN0aW9uSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRoZSBoYXNoIGZvciBhIHRyYW5zYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9uIFRoZSB0cmFuc2FjdGlvbiB0byBnZW5lcmF0ZSB0aGUgaGFzaC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBoYXNoIG9mIHRociB0cmFuc2FjdGlvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGhhc2godHJhbnNhY3Rpb24pIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJhbnNhY3Rpb24sIHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyYW5zYWN0aW9uIG11c3QgYmUgb2YgdHlwZSBUcmFuc2FjdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwiY3VybFwiKTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvblRyaXRzID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHRyYW5zYWN0aW9uLnRvVHJ5dGVzKCkpLnRvQXJyYXkoKTtcclxuICAgICAgICBjdXJsLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjdXJsLmFic29yYih0cmFuc2FjdGlvblRyaXRzLCAwLCB0cmFuc2FjdGlvblRyaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgaGFzaFRyaXRzID0gbmV3IEludDhBcnJheShjdXJsLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIikpO1xyXG4gICAgICAgIGN1cmwuc3F1ZWV6ZShoYXNoVHJpdHMsIDAsIGhhc2hUcml0cy5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyaXRzXzEuVHJpdHMuZnJvbUFycmF5KGhhc2hUcml0cykudG9Ucnl0ZXMoKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UcmFuc2FjdGlvbkhlbHBlciA9IFRyYW5zYWN0aW9uSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5OaFkzUnBiMjVJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5MGNtRnVjMkZqZEdsdmJraGxiSEJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxIbEVRVUZ6UkR0QlFVTjBSQ3gxUlVGQmIwVTdRVUZEY0VVc01rUkJRWGRFTzBGQlEzaEVMSE5FUVVGdFJEdEJRVU51UkN3NFJFRkJNa1E3UVVGRk0wUTdPenRIUVVkSE8wRkJRMGc3U1VGRFNUczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRjNRanRSUVVOMlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlN4NVFrRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycEVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERaRFFVRTJReXhEUVVGRExFTkJRVU03VVVGRGVrVXNRMEZCUXp0UlFVVkVMRTFCUVUwc1NVRkJTU3hIUVVGSExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzSkVMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NZVUZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVVMVJTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkRiRUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUlVGQlJTeERRVUZETEVWQlFVVXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZGTVVRc1RVRkJUU3hUUVVGVExFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycEZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRk4wTXNUVUZCVFN4RFFVRkRMRmRCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zWVVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEyeEZMRU5CUVVNN1EwRkRTanRCUVhSQ1JDdzRRMEZ6UWtNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IGFkZHJlc3NfMSA9IHJlcXVpcmUoXCIuL2FkZHJlc3NcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCIuL2hhc2hcIik7XHJcbmNvbnN0IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xID0gcmVxdWlyZShcIi4vc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCIuL3RhZ1wiKTtcclxuY29uc3QgdHJ5dGVOdW1iZXJfMSA9IHJlcXVpcmUoXCIuL3RyeXRlTnVtYmVyXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyYW5zYWN0aW9ucy5cclxuICovXHJcbmNsYXNzIFRyYW5zYWN0aW9uIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbiBmcm9tIHBhcmFtZXRlcnMuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudC5cclxuICAgICAqIEBwYXJhbSBhZGRyZXNzIFRoZSBhZGRyZXNzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBvYnNvbGV0ZVRhZyBPYnNvbGV0ZSB0cmFuc2FjdGlvbiB0YWcuXHJcbiAgICAgKiBAcGFyYW0gdGltZXN0YW1wIFRoZSB0aW1lc3RhbXAuXHJcbiAgICAgKiBAcGFyYW0gY3VycmVudEluZGV4IFRoZSBjdXJyZW50IGluZGV4LlxyXG4gICAgICogQHBhcmFtIGxhc3RJbmRleCBUaGUgbGFzdCBpbmRleC5cclxuICAgICAqIEBwYXJhbSBidW5kbGUgVGhlIGJ1bmRsZS5cclxuICAgICAqIEBwYXJhbSB0cnVua1RyYW5zYWN0aW9uIFRoZSB0cnVuayB0cmFuc2FjdGlvbi5cclxuICAgICAqIEBwYXJhbSBicmFuY2hUcmFuc2FjdGlvbiBUaGUgYnJhbmNoIHRyYW5zYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHRhZyBUaGUgdGFnLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUaW1lc3RhbXAgVGhlIGF0dGFjaG1lbnQgdGltZXN0YW1wLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIFRoZSBhdHRhY2htZW50IHRpbWVzdGFtcCBsb3dlciBib3VuZC5cclxuICAgICAqIEBwYXJhbSBhdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCAgVGhlIGF0dGFjaG1lbnQgdGltZXN0YW1wIHVwcGVyIGJvdW5kLlxyXG4gICAgICogQHBhcmFtIG5vbmNlIFRoZSBub25jZS5cclxuICAgICAqIEByZXR1cm5zIE5ldyBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21QYXJhbXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LCBhZGRyZXNzLCB2YWx1ZSwgb2Jzb2xldGVUYWcsIHRpbWVzdGFtcCwgY3VycmVudEluZGV4LCBsYXN0SW5kZXgsIGJ1bmRsZSwgdHJ1bmtUcmFuc2FjdGlvbiwgYnJhbmNoVHJhbnNhY3Rpb24sIHRhZywgYXR0YWNobWVudFRpbWVzdGFtcCwgYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQsIGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kLCBub25jZSkge1xyXG4gICAgICAgIGNvbnN0IHR4ID0gbmV3IFRyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgdHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50O1xyXG4gICAgICAgIHR4LmFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgIHR4LnZhbHVlID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKHZhbHVlLCAxMSk7XHJcbiAgICAgICAgdHgub2Jzb2xldGVUYWcgPSBvYnNvbGV0ZVRhZztcclxuICAgICAgICB0eC50aW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodGltZXN0YW1wKTtcclxuICAgICAgICB0eC5jdXJyZW50SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoY3VycmVudEluZGV4KTtcclxuICAgICAgICB0eC5sYXN0SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIobGFzdEluZGV4KTtcclxuICAgICAgICB0eC5idW5kbGUgPSBidW5kbGU7XHJcbiAgICAgICAgdHgudHJ1bmtUcmFuc2FjdGlvbiA9IHRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgdHguYnJhbmNoVHJhbnNhY3Rpb24gPSBicmFuY2hUcmFuc2FjdGlvbjtcclxuICAgICAgICB0eC50YWcgPSB0YWc7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wKTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQpO1xyXG4gICAgICAgIHR4Lm5vbmNlID0gbm9uY2U7XHJcbiAgICAgICAgcmV0dXJuIHR4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJhbnNhY3Rpb24gZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgZm9yIHRoZSB0aGlzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgdGhpcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModHJ5dGVzKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRyeXRlcyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0cnl0ZXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gVHJhbnNhY3Rpb24uTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnl0ZXMgbXVzdCBiZSAke1RyYW5zYWN0aW9uLkxFTkdUSH0gaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNoZWNrSW5kZXhTdGFydCA9IDIyNzk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tJbmRleExlbmd0aCA9IDE2O1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gdHJ5dGVzLnN1YihjaGVja0luZGV4U3RhcnQsIGNoZWNrSW5kZXhMZW5ndGgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKGNoZWNrICE9PSBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIGJldHdlZW4gJHtjaGVja0luZGV4U3RhcnR9IGFuZCAke2NoZWNrSW5kZXhTdGFydCArIGNoZWNrSW5kZXhMZW5ndGh9IHNob3VsZCBiZSBhbGwgOXNgLCB7IGNoZWNrIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0eCA9IG5ldyBUcmFuc2FjdGlvbigpO1xyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IDA7XHJcbiAgICAgICAgdHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEg7XHJcbiAgICAgICAgdHguYWRkcmVzcyA9IGFkZHJlc3NfMS5BZGRyZXNzLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgYWRkcmVzc18xLkFkZHJlc3MuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gYWRkcmVzc18xLkFkZHJlc3MuTEVOR1RIO1xyXG4gICAgICAgIHR4LnZhbHVlID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIDExKSwgMTEpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IDExO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFX0xFTkdUSDtcclxuICAgICAgICB0eC5vYnNvbGV0ZVRhZyA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0YWdfMS5UYWcuTEVOR1RIO1xyXG4gICAgICAgIHR4LnRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5jdXJyZW50SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHgubGFzdEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmJ1bmRsZSA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LnRydW5rVHJhbnNhY3Rpb24gPSBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIGhhc2hfMS5IYXNoLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IGhhc2hfMS5IYXNoLkxFTkdUSDtcclxuICAgICAgICB0eC5icmFuY2hUcmFuc2FjdGlvbiA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LnRhZyA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0YWdfMS5UYWcuTEVOR1RIO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHgubm9uY2UgPSB0YWdfMS5UYWcuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgcmV0dXJuIHR4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cmFuc2FjdGlvbiB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJhbnNhY3Rpb24gYXMgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQ6IHRoaXMuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5hZGRyZXNzLCBhZGRyZXNzXzEuQWRkcmVzcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGFkZHJlc3MgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYWRkcmVzczogdGhpcy5hZGRyZXNzIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5vYnNvbGV0ZVRhZywgdGFnXzEuVGFnKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgb2Jzb2xldGVUYWcgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgb2Jzb2xldGVUYWc6IHRoaXMub2Jzb2xldGVUYWcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLmJ1bmRsZSwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBidW5kbGUgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYnVuZGxlOiB0aGlzLmJ1bmRsZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMudHJ1bmtUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnVua1RyYW5zYWN0aW9uIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IHRydW5rVHJhbnNhY3Rpb246IHRoaXMudHJ1bmtUcmFuc2FjdGlvbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYnJhbmNoVHJhbnNhY3Rpb24gbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYnJhbmNoVHJhbnNhY3Rpb246IHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLm5vbmNlLCB0YWdfMS5UYWcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBub25jZSBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBub25jZTogdGhpcy5ub25jZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzID0gdGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5hZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLnZhbHVlIHx8IFRyYW5zYWN0aW9uLkVNUFRZXzExKS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRVxyXG4gICAgICAgICAgICArIHRoaXMub2Jzb2xldGVUYWcudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuY3VycmVudEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMubGFzdEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5idW5kbGUudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy50cnVua1RyYW5zYWN0aW9uLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24udG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudGFnIHx8IHRoaXMub2Jzb2xldGVUYWcpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5ub25jZS50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdHJ5dGVzLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBUcmFuc2FjdGlvbi5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRyeXRlcyBtdXN0IGJlICR7VHJhbnNhY3Rpb24uTEVOR1RIfSBpbiBsZW5ndGggJHtsZW5ndGh9YCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHtcblxcdHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDogXCIkeyh0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCB8fCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YWRkcmVzczogXCIkeyh0aGlzLmFkZHJlc3MgfHwgYWRkcmVzc18xLkFkZHJlc3MuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0dmFsdWU6ICR7KHRoaXMudmFsdWUgfHwgVHJhbnNhY3Rpb24uRU1QVFlfMTEpLnRvTnVtYmVyKCl9XG5cXHRvYnNvbGV0ZVRhZzogXCIkeyh0aGlzLm9ic29sZXRlVGFnIHx8IHRhZ18xLlRhZy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0aW1lc3RhbXA6ICR7KHRoaXMudGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGN1cnJlbnRJbmRleDogJHsodGhpcy5jdXJyZW50SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0bGFzdEluZGV4OiAkeyh0aGlzLmxhc3RJbmRleCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRidW5kbGU6IFwiJHsodGhpcy5idW5kbGUgfHwgaGFzaF8xLkhhc2guRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0dHJ1bmtUcmFuc2FjdGlvbjogXCIkeyh0aGlzLnRydW5rVHJhbnNhY3Rpb24gfHwgaGFzaF8xLkhhc2guRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YnJhbmNoVHJhbnNhY3Rpb246IFwiJHsodGhpcy5icmFuY2hUcmFuc2FjdGlvbiB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0YWc6IFwiJHsodGhpcy50YWcgfHwgdGhpcy5vYnNvbGV0ZVRhZyB8fCB0YWdfMS5UYWcuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YXR0YWNobWVudFRpbWVzdGFtcDogJHsodGhpcy5hdHRhY2htZW50VGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdG5vbmNlOiBcIiR7KHRoaXMubm9uY2UgfHwgdGFnXzEuVGFnLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcbn1gO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgdHJhbnNhY3Rpb24gKDI2NzMpLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uTEVOR1RIID0gMjY3MztcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCBjaGVjayB2YWx1ZSAoMTYpLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIID0gMTY7XHJcbi8qKlxyXG4gKiBUaGUgY2hlY2sgdmFsdWUgZm9yIGJ1bmRsZXMgYWxsIDlzLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUUgPSBcIjlcIi5yZXBlYXQoVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIKTtcclxuLyogQGludGVybmFsICovXHJcblRyYW5zYWN0aW9uLkVNUFRZXzExID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKDAsIDExKTtcclxuZXhwb3J0cy5UcmFuc2FjdGlvbiA9IFRyYW5zYWN0aW9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5OaFkzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5MGNtRnVjMkZqZEdsdmJpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMR3RFUVVFclF6dEJRVU12UXl4MVEwRkJiME03UVVGRGNFTXNhVU5CUVRoQ08wRkJRemxDTEhsRlFVRnpSVHRCUVVOMFJTd3JRa0ZCTkVJN1FVRkROVUlzSzBOQlFUUkRPMEZCUXpWRExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQlowWkpMR1ZCUVdVN1NVRkRaanRKUVVOQkxFTkJRVU03U1VGRlJEczdPenM3T3pzN096czdPenM3T3pzN08wOUJhMEpITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXgzUWtGQmEwUXNSVUZEYkVRc1QwRkJaMElzUlVGRGFFSXNTMEZCWVN4RlFVTmlMRmRCUVdkQ0xFVkJRMmhDTEZOQlFXbENMRVZCUTJwQ0xGbEJRVzlDTEVWQlEzQkNMRk5CUVdsQ0xFVkJRMnBDTEUxQlFWa3NSVUZEV2l4blFrRkJjMElzUlVGRGRFSXNhVUpCUVhWQ0xFVkJRM1pDTEVkQlFWRXNSVUZEVWl4dFFrRkJNa0lzUlVGRE0wSXNOa0pCUVhGRExFVkJRM0pETERaQ1FVRnhReXhGUVVOeVF5eExRVUZWTzFGQlF5OUNMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZETjBJc1JVRkJSU3hEUVVGRExIZENRVUYzUWl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzFGQlEzWkVMRVZCUVVVc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETzFGQlEzSkNMRVZCUVVVc1EwRkJReXhMUVVGTExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6ZERMRVZCUVVVc1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhUUVVGVExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGFrUXNSVUZCUlN4RFFVRkRMRmxCUVZrc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRSUVVOMlJDeEZRVUZGTEVOQlFVTXNVMEZCVXl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTJwRUxFVkJRVVVzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTI1Q0xFVkJRVVVzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhuUWtGQlowSXNRMEZCUXp0UlFVTjJReXhGUVVGRkxFTkJRVU1zYVVKQlFXbENMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVVUZEZWtNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEWWl4RlFVRkZMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRSUVVOeVJTeEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjZSaXhGUVVGRkxFTkJRVU1zTmtKQlFUWkNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU1zUTBGQlF6dFJRVU42Uml4RlFVRkZMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU5xUWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJRMlFzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVdNN1VVRkRia01zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNaVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEUkRRVUUwUXl4RFFVRkRMRU5CUVVNN1VVRkRkRVVzUTBGQlF6dFJRVVZFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVU12UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2MwSkJRWE5DTEZkQlFWY3NRMEZCUXl4TlFVRk5MRmxCUVZrc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETVVZc1EwRkJRenRSUVVWRUxFMUJRVTBzWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTTNRaXhOUVVGTkxHZENRVUZuUWl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNMVFpeE5RVUZOTEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExHVkJRV1VzUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJYWkZMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUzBGQlN5eFhRVUZYTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UWtGQmMwSXNaVUZCWlN4UlFVRlJMR1ZCUVdVc1IwRkJSeXhuUWtGQlowSXNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNaSkxFTkJRVU03VVVGRlJDeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJSVGRDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOcVFpeEZRVUZGTEVOQlFVTXNkMEpCUVhkQ0xFZEJRVWNzYlVSQlFYZENMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRzFFUVVGM1FpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRla2dzVVVGQlVTeEpRVUZKTEcxRVFVRjNRaXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU0xUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEdsQ1FVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUlN4UlFVRlJMRWxCUVVrc2FVSkJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZETTBJc1JVRkJSU3hEUVVGRExFdEJRVXNzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU5vUlN4UlFVRlJMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMllzVVVGQlVTeEpRVUZKTEZkQlFWY3NRMEZCUXl4clFrRkJhMElzUTBGQlF6dFJRVU16UXl4RlFVRkZMRU5CUVVNc1YwRkJWeXhIUVVGSExGTkJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzVTBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRVVzVVVGQlVTeEpRVUZKTEZOQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRka0lzUlVGQlJTeERRVUZETEZOQlFWTXNSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRVlzVVVGQlVTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJRMnBETEVWQlFVVXNRMEZCUXl4WlFVRlpMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pHTEZGQlFWRXNTVUZCU1N4NVFrRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU5xUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUml4UlFVRlJMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYWtNc1JVRkJSU3hEUVVGRExFMUJRVTBzUjBGQlJ5eFhRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJReTlFTEZGQlFWRXNTVUZCU1N4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM2hDTEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eFhRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM3BGTEZGQlFWRXNTVUZCU1N4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM2hDTEVWQlFVVXNRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eFhRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZGTEZGQlFWRXNTVUZCU1N4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM2hDTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1UwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hUUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hSUVVGUkxFbEJRVWtzVTBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjJRaXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZHTEZGQlFWRXNTVUZCU1N4NVFrRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU5xUXl4RlFVRkZMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSSExGRkJRVkVzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVOcVF5eEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzUkhMRkZCUVZFc1NVRkJTU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTnFReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEZOQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNVMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRk5VUXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVOa0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNkMEpCUVhkQ0xFVkJRVVVzYlVSQlFYZENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFWXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZFVWQlFYVkZMRVZCUVVVc1JVRkJSU3gzUWtGQmQwSXNSVUZCUlN4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpsS0xFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc2FVSkJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elJFRkJjMFFzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU16Unl4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZOQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXd3UkVGQk1FUXNSVUZCUlN4RlFVRkZMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjJTQ3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRmRCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHhSRUZCY1VRc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONFJ5eERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNWMEZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExDdEVRVUVyUkN4RlFVRkZMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjBTU3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzVjBGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKRUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMR2RGUVVGblJTeEZRVUZGTEVWQlFVVXNhVUpCUVdsQ0xFVkJRVVVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42U1N4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh2UkVGQmIwUXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTnlSeXhEUVVGRE8xRkJSVVFzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRqUVVNMVJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU5zUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU14UkN4WFFVRlhMRU5CUVVNc1YwRkJWenRqUVVOMlFpeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU4wUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZETjBRc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUTJoRkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRqUVVNM1JDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU5xUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRek5ETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkROVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRjRVFzUTBGQlF5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEZGtVc1EwRkJReXhKUVVGSkxFTkJRVU1zTmtKQlFUWkNMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGFrWXNRMEZCUXl4SlFVRkpMRU5CUVVNc05rSkJRVFpDTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRha1lzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVYyUXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUzBGQlN5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1F5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UWtGQmMwSXNWMEZCVnl4RFFVRkRMRTFCUVUwc1kwRkJZeXhOUVVGTkxFVkJRVVVzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRjRWNzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzSkRMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1RVRkJUU3hEUVVGRE95dENRVU5uUWl4RFFVRkRMRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNTVUZCU1N4dFJFRkJkMElzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGVFY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxHbENRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFkQlEzaEVMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk8ydENRVU40UXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzVTBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGxRVU40UkN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVU3YTBKQlF5OURMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJUdGxRVU40UkN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVU3WVVGRGNFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxGZEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3ZFVKQlEzWkRMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SlFVRkpMRmRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN2QwSkJRekZFTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEpRVUZKTEZkQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdWVUZETVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWxCUVVrc1UwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHQ1UWtGRGJFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVTdiVU5CUTJ4RUxFTkJRVU1zU1VGQlNTeERRVUZETERaQ1FVRTJRaXhKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk8yMURRVU4wUlN4RFFVRkRMRWxCUVVrc1EwRkJReXcyUWtGQk5rSXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlR0WlFVTTNSaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NVMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0RlFVTjZSQ3hEUVVGRE8wbEJRME1zUTBGQlF6czdRVUZ3VWtRN08wZEJSVWM3UVVGRGIwSXNhMEpCUVUwc1IwRkJWeXhKUVVGSkxFTkJRVU03UVVGRk4wTTdPMGRCUlVjN1FVRkRiMElzT0VKQlFXdENMRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJSWFpFT3p0SFFVVkhPMEZCUTI5Q0xIVkNRVUZYTEVkQlFWY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRCUVVWNFJpeGxRVUZsTzBGQlExTXNiMEpCUVZFc1IwRkJaMElzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBGQmFrSnNSaXhyUTBGelVrTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL3RyYW5zYWN0aW9uLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRhZ3MuXHJcbiAqL1xyXG5jbGFzcyBUYWcge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0YWcgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdGFnIFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSB0YWcgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRhZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModGFnKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRhZywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRhZyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdHJ5dGVzU3RyaW5nID0gdGFnLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHRyeXRlc1N0cmluZy5sZW5ndGggPiBUYWcuTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0YWcgc2hvdWxkIGJlIGF0IG1vc3QgJHtUYWcuTEVOR1RIfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoOiB0cnl0ZXNTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodHJ5dGVzU3RyaW5nLmxlbmd0aCA8IFRhZy5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdHJ5dGVzU3RyaW5nICs9IFwiOVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRhZyh0cnl0ZXNTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0YWcgdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIHRhZy5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgdGFnICgyNykuXHJcbiAqL1xyXG5UYWcuTEVOR1RIID0gMjc7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSB0YWcgYWxsIDlzLlxyXG4gKi9cclxuVGFnLkVNUFRZID0gVGFnLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KFRhZy5MRU5HVEgpKSk7XHJcbmV4cG9ydHMuVGFnID0gVGFnO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR0ZuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdmRHRm5MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVmM3VVVGRGFFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1pVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhsRFFVRjVReXhEUVVGRExFTkJRVU03VVVGRGJrVXNRMEZCUXp0UlFVVkVMRWxCUVVrc1dVRkJXU3hIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVVnNReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERaQ1FVRTJRaXhIUVVGSExFTkJRVU1zVFVGQlRTeDFRa0ZCZFVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONlNDeERRVUZETzFGQlJVUXNUMEZCVHl4WlFVRlpMRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0WlFVTjBReXhaUVVGWkxFbEJRVWtzUjBGQlJ5eERRVUZETzFGQlEzaENMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRkRha01zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVOQlFVTXNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE96dEJRWFJFUkRzN1IwRkZSenRCUVVOdlFpeFZRVUZOTEVkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpORE96dEhRVVZITzBGQlEyOUNMRk5CUVVzc1IwRkJVU3hIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEdWQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJVbXhITEd0Q1FYZEVReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL3RhZy50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyaXRzXzEgPSByZXF1aXJlKFwiLi90cml0c1wiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cnl0ZSBudW1iZXIuXHJcbiAqL1xyXG5jbGFzcyBUcnl0ZU51bWJlciB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyeXRlIG51bWJlciBmcm9tIG51bWJlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHZhbHVlIHRvIGNyZWF0ZSB0aGUgb2JqZWN0IGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSB0cnl0ZSBsZW5ndGggdG8gcGFkIHRoZSBudW1iZXIgd2l0aC5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyeXRlTnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbU51bWJlcih2YWx1ZSwgbGVuZ3RoID0gVHJ5dGVOdW1iZXIuTEVOR1RIXzkpIHtcclxuICAgICAgICBsZXQgdHJ5dGVzO1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgbGVuZ3RoIHNob3VsZCBiZSBhIG51bWJlciA+IDBcIiwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdHJ5dGVzID0gXCI5XCIucmVwZWF0KGxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGlzIG5vdCBhbiBpbnRlZ2VyXCIsIHsgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdHJpdHMgPSB0cml0c18xLlRyaXRzLmZyb21OdW1iZXIodmFsdWUpLnRvTnVtYmVyQXJyYXkoKTtcclxuICAgICAgICAgICAgd2hpbGUgKHRyaXRzLmxlbmd0aCA8IGxlbmd0aCAqIDMpIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzLnB1c2goMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5dGVzID0gdHJpdHNfMS5Ucml0cy5mcm9tTnVtYmVyQXJyYXkodHJpdHMpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcnl0ZU51bWJlcih0cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGUgbnVtYmVyIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdmFsdWUgdG8gY3JlYXRlIHRoZSBvYmplY3QgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIHRyeXRlIGxlbmd0aCB0byBwYWQgdGhlIG51bWJlciB3aXRoLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJ5dGVOdW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHZhbHVlLCBsZW5ndGggPSBUcnl0ZU51bWJlci5MRU5HVEhfOSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0cnl0ZVN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggc2hvdWxkIGJlIGEgbnVtYmVyID4gMFwiLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyeXRlU3RyaW5nLmxlbmd0aCA+IGxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGNvbnRhaW5zIHRvbyBtYW55IGNoYXJhY3RlcnNcIiwgeyBsZW5ndGg6IHRyeXRlU3RyaW5nLmxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRyeXRlU3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICB0cnl0ZVN0cmluZyArPSBcIjlcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcnl0ZU51bWJlcih0cnl0ZVN0cmluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRyeXRlIG51bWJlciB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgdHJ5dGUgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJ5dGUgbnVtYmVyIHRvIG51bWJlci5cclxuICAgICAqIEByZXR1cm5zIG51bWJlciB2YWx1ZSBvZiB0aGUgdHJ5dGUgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICB0b051bWJlcigpIHtcclxuICAgICAgICByZXR1cm4gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcykpLnRvTnVtYmVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdmFsdWVPZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBMZW5ndGggb2YgYSBudW1iZXIgdGhhdCB1c2VzIDkgdHJ5dGVzLlxyXG4gKi9cclxuVHJ5dGVOdW1iZXIuTEVOR1RIXzkgPSA5O1xyXG4vKipcclxuICogQW4gZW1wdHkgOSBsZW5ndGggdHJ5dGUgbnVtYmVyLlxyXG4gKi9cclxuVHJ5dGVOdW1iZXIuRU1QVFlfOSA9IFRyeXRlTnVtYmVyLmZyb21OdW1iZXIoMCwgVHJ5dGVOdW1iZXIuTEVOR1RIXzkpO1xyXG5leHBvcnRzLlRyeXRlTnVtYmVyID0gVHJ5dGVOdW1iZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISjVkR1ZPZFcxaVpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY25sMFpVNTFiV0psY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2JVTkJRV2RETzBGQlEyaERMSEZEUVVGclF6dEJRVVZzUXpzN1IwRkZSenRCUVVOSU8wbEJZVWtzWlVGQlpUdEpRVU5tTEZsQlFXOUNMRTFCUVdNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaExFVkJRVVVzVTBGQmFVSXNWMEZCVnl4RFFVRkRMRkZCUVZFN1VVRkRla1VzU1VGQlNTeE5RVUZOTEVOQlFVTTdVVUZGV0N4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwRUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRzFEUVVGdFF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONlJTeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEyaERMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5LTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5xUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzJRa0ZCTmtJc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYkVVc1EwRkJRenRaUVVWRUxFMUJRVTBzUzBGQlN5eEhRVUZITEdGQlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTTdXVUZGZEVRc1QwRkJUeXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJRenRuUWtGREwwSXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUWl4RFFVRkRPMWxCUlVRc1RVRkJUU3hIUVVGSExHRkJRVXNzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEYUVVc1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOdVF5eERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRV0VzUlVGQlJTeFRRVUZwUWl4WFFVRlhMRU5CUVVNc1VVRkJVVHRSUVVONlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4bFFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRFTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zTWtOQlFUSkRMRU5CUVVNc1EwRkJRenRSUVVOeVJTeERRVUZETzFGQlEwUXNTVUZCU1N4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJXNURMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha1FzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2JVTkJRVzFETEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM3BGTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRPVUlzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2QwTkJRWGRETEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1YwRkJWeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYkVjc1EwRkJRenRSUVVWRUxFOUJRVThzVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRVZCUVVVc1EwRkJRenRaUVVOcVF5eFhRVUZYTEVsQlFVa3NSMEZCUnl4RFFVRkRPMUZCUTNaQ0xFTkJRVU03VVVGRlJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4WFFVRlhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03U1VGRGVFTXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4TlFVRk5MRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVOQlFVTXNZVUZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlEzaEZMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTTdTVUZEZUVJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTlCUVU4N1VVRkRWaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUXpOQ0xFTkJRVU03TzBGQk1VZEVPenRIUVVWSE8wRkJRMjlDTEc5Q1FVRlJMRWRCUVZjc1EwRkJReXhEUVVGRE8wRkJRelZET3p0SFFVVkhPMEZCUTI5Q0xHMUNRVUZQTEVkQlFXZENMRmRCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eEZRVUZGTEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVZKc1J5eHJRMEUwUjBNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvdHJ5dGVOdW1iZXIudHMiLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxuX19leHBvcnQocmVxdWlyZShcIi4vZGlnZXN0cy9zaGEzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZXJyb3IvY3J5cHRvRXJyb3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mYWN0b3JpZXMvcHJvb2ZPZldvcmtGYWN0b3J5XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oYXNoL2lzc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvYmlnSW50ZWdlckhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcG9uZ2VzL2N1cmxcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcG9uZ2VzL2tlcmxcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NiME5CUVN0Q08wRkJReTlDTEhsRFFVRnZRenRCUVVOd1F5eHZSRUZCSzBNN1FVRkRMME1zSzBOQlFUQkRPMEZCUXpGRExHZERRVUV5UWp0QlFVTXpRaXhuUkVGQk1rTTdRVUZETTBNc2FVUkJRVFJETzBGQlJ6VkRMRzFFUVVFNFF6dEJRVU01UXl4dlEwRkJLMEk3UVVGREwwSXNiME5CUVN0Q0luMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2luZGV4LnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogSnNvbiBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIEpzb25IZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdHJpbmdpZnkgYW4gb2JqZWN0IHdpdGggcmVjdXJzaW9uIGJyZWFraW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgSmF2YVNjcmlwdCB2YWx1ZSwgdXN1YWxseSBhbiBvYmplY3Qgb3IgYXJyYXksIHRvIGJlIGNvbnZlcnRlZC5cclxuICAgICAqIEBwYXJhbSByZXBsYWNlciBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyB0aGUgcmVzdWx0cy5cclxuICAgICAqIEBwYXJhbSBzcGFjZSBBZGRzIGluZGVudGF0aW9uLCB3aGl0ZSBzcGFjZSwgYW5kIGxpbmUgYnJlYWsgY2hhcmFjdGVycyB0byB0aGUgcmV0dXJuLXZhbHVlIEpTT04gdGV4dCB0byBtYWtlIGl0IGVhc2llciB0byByZWFkLlxyXG4gICAgICogQHJldHVybnMgU3RyaW5nIHZlcnNpb24gb2YgdGhlIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN0cmluZ2lmeSh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSB7XHJcbiAgICAgICAgLy8gZWxpbWluYXRlcyBhbnkgcmVjdXJzaW9uIGluIHRoZSBzdHJpbmdpZnlcclxuICAgICAgICBjb25zdCBjYWNoZSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHJlY3VzaW9uUmVwbGFjZXIgPSAoa2V5LCByZXBsYWNlVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlVmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgcmVwbGFjZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWNoZS5pbmRleE9mKHJlcGxhY2VWYWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2lyY3VsYXIgcmVmZXJlbmNlIGZvdW5kLCBkaXNjYXJkIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLnB1c2gocmVwbGFjZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZXIgPyByZXBsYWNlcihrZXksIHJlcGxhY2VWYWx1ZSkgOiByZXBsYWNlVmFsdWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIHJlY3VzaW9uUmVwbGFjZXIsIHNwYWNlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkpzb25IZWxwZXIgPSBKc29uSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhbk52YmtobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwycHpiMjVJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096czdPMDlCVFVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFWVXNSVUZCUlN4UlFVRXlReXhGUVVGRkxFdEJRWFZDTzFGQlEzQkhMRFJEUVVFMFF6dFJRVU0xUXl4TlFVRk5MRXRCUVVzc1IwRkJWU3hGUVVGRkxFTkJRVU03VVVGRmVFSXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eERRVUZETEVkQlFWY3NSVUZCUlN4WlFVRnBRaXhGUVVGRkxFVkJRVVU3V1VGRGVFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhaUVVGWkxFdEJRVXNzVVVGQlVTeEpRVUZKTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1dVRkJXU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTI1R0xFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOeVF5eDNRMEZCZDBNN2IwSkJRM2hETEUxQlFVMHNRMEZCUXp0blFrRkRXQ3hEUVVGRE8yZENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOS0xFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1owSkJRemRDTEVOQlFVTTdXVUZEVEN4RFFVRkRPMWxCUlVRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTJwRkxFTkJRVU1zUTBGQlF6dFJRVVZHTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU14UkN4RFFVRkRPME5CUTBvN1FVRXpRa1FzWjBOQk1rSkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZhY3RvcnlCYXNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBwcm9vZiBvZiB3b3JrLlxyXG4gKi9cclxuY2xhc3MgUHJvb2ZPZldvcmtGYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFQcm9vZk9mV29ya0ZhY3RvcnkuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFByb29mT2ZXb3JrRmFjdG9yeS5faW5zdGFuY2UgPSBuZXcgUHJvb2ZPZldvcmtGYWN0b3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9vZk9mV29ya0ZhY3RvcnkuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvb2ZPZldvcmtGYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qcm9vZk9mV29ya0ZhY3RvcnkgPSBQcm9vZk9mV29ya0ZhY3Rvcnk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZiMlpQWmxkdmNtdEdZV04wYjNKNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJaaFkzUnZjbWxsY3k5d2NtOXZaazltVjI5eWEwWmhZM1J2Y25rdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVkNlJUczdSMEZGUnp0QlFVTklMSGRDUVVGblF5eFRRVUZSTEhsQ1FVRjVRanRKUVVrM1JEczdPMDlCUjBjN1NVRkRTRHRSUVVOSkxFdEJRVXNzUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJPMUZCUTJ4Q0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9ReXhyUWtGQmEwSXNRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hyUWtGQmEwSXNSVUZCUlN4RFFVRkRPMUZCUXpWRUxFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVTBGQlV5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMHdzVjBGQlZ6dFJRVU5xUWl4TlFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRla01zUTBGQlF6dERRVU5LTzBGQk0wSkVMR2RFUVRKQ1F5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2ZhY3Rvcmllcy9wcm9vZk9mV29ya0ZhY3RvcnkudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJhbWRcIjpcImJpZy1pbnRlZ2VyXCIsXCJjb21tb25qc1wiOlwiYmlnLWludGVnZXJcIixcImNvbW1vbmpzMlwiOlwiYmlnLWludGVnZXJcIixcInJvb3RcIjpcImJpZ0ludFwifVxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgYWRkcmVzc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1wiKTtcclxuY29uc3QgYWRkcmVzc1NlY3VyaXR5XzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9hZGRyZXNzU2VjdXJpdHlcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIik7XHJcbmNvbnN0IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBzcG9uZ2VGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIik7XHJcbi8qKlxyXG4gKiBJU1MgSGFzaGluZyBmdW5jdGlvbnMuXHJcbiAqIENvbnZlcnRlZCBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pcmkvc3JjL21haW4vamF2YS9jb20vaW90YS9pcmkvaGFzaC9JU1MuamF2YVxyXG4gKi9cclxuY2xhc3MgSVNTIHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdWJzZWVkIGZvciB0aGUgc2VlZCBhbmQgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0gc2VlZCBUaGUgc2VlZC5cclxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggZm9yIHRoZSBzZWVkLlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdWJzZWVkLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3Vic2VlZChzZWVkLCBpbmRleCwgc3BvbmdlVHlwZSA9IFwiY3VybDI3XCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2VlZCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzZWVkIG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihpbmRleCkgfHwgaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGluZGV4IG11c3QgYmUgYW4gaW50ZWdlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3BvbmdlID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIHNwb25nZS5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY29uc3Qgc3Vic2VlZFByZWltYWdlID0gc2VlZC5zbGljZSgpO1xyXG4gICAgICAgIGxldCBsb2NhbEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsSW5kZXgtLSA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzZWVkUHJlaW1hZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgrK3N1YnNlZWRQcmVpbWFnZVtpXSA+IElTUy5NQVhfVFJJVF9WQUxVRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnNlZWRQcmVpbWFnZVtpXSA9IElTUy5NSU5fVFJJVF9WQUxVRTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YnNlZWQgPSBuZXcgSW50OEFycmF5KGhhc2hMZW5ndGgpO1xyXG4gICAgICAgIHNwb25nZS5hYnNvcmIoc3Vic2VlZFByZWltYWdlLCAwLCBzdWJzZWVkUHJlaW1hZ2UubGVuZ3RoKTtcclxuICAgICAgICBzcG9uZ2Uuc3F1ZWV6ZShzdWJzZWVkLCAwLCBzdWJzZWVkLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHN1YnNlZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0aGUga2V5IGZvciB0aGUgc2VlZC5cclxuICAgICAqIEBwYXJhbSBzZWVkIFRoZSBzZWVkIHRvIGNyZWF0ZSB0aGUga2V5IGZvci5cclxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggdG8gdXNlIGZvciB0aGUgc2VlZC5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIHNlY3VyaXR5IGxldmVsIHRvIGNyZWF0ZSB0aGUga2V5LlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIHRoZSBrZXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBrZXkoc2VlZCwgaW5kZXgsIHNlY3VyaXR5LCBzcG9uZ2VUeXBlID0gXCJrZXJsXCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2VlZCwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHNlZWQgbXVzdCBiZSBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihpbmRleCkgfHwgaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGluZGV4IG11c3QgYmUgYW4gaW50ZWdlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc2VjdXJpdHkpIHx8IHNlY3VyaXR5IDwgYWRkcmVzc1NlY3VyaXR5XzEuQWRkcmVzc1NlY3VyaXR5LmxvdyB8fCBzZWN1cml0eSA+IGFkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5oaWdoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc2VjdXJpdHkgbXVzdCBiZSBhbiBpbnRlZ2VyID49IDEgYW5kIDw9IDNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmV4aXN0cyhzcG9uZ2VUeXBlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVGhlIHNwb25nZVR5cGUgbXVzdCBiZSBvbmUgb2YgWyR7c3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS50eXBlcygpLmpvaW4oXCIsIFwiKX1dYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlZWRUcml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyhzZWVkLnRvVHJ5dGVzKCkpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4VHJpdHMgPSB0cml0c18xLlRyaXRzLmZyb21OdW1iZXIoaW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IHN1YnNlZWQgPSB0cml0c18xLlRyaXRzLmFkZChzZWVkVHJpdHMsIGluZGV4VHJpdHMpLnRvQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBzdWJzZWVkTGVuZ3RoID0gc3Vic2VlZC5sZW5ndGg7XHJcbiAgICAgICAgY29uc3Qgc3BvbmdlID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIHNwb25nZS5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgc3BvbmdlLmFic29yYihzdWJzZWVkLCAwLCBzdWJzZWVkTGVuZ3RoKTtcclxuICAgICAgICBzcG9uZ2Uuc3F1ZWV6ZShzdWJzZWVkLCAwLCBzdWJzZWVkTGVuZ3RoKTtcclxuICAgICAgICBzcG9uZ2UucmVzZXQoKTtcclxuICAgICAgICBzcG9uZ2UuYWJzb3JiKHN1YnNlZWQsIDAsIHN1YnNlZWRMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IG5ldyBJbnQ4QXJyYXkoSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1MgKiBoYXNoTGVuZ3RoICogc2VjdXJpdHkpO1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBJbnQ4QXJyYXkoc3Vic2VlZExlbmd0aCk7XHJcbiAgICAgICAgbGV0IGxvY2FsTGVuZ3RoID0gc2VjdXJpdHk7XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsTGVuZ3RoLS0gPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1M7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc3BvbmdlLnNxdWVlemUoYnVmZmVyLCAwLCBzdWJzZWVkTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGFzaExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5W29mZnNldCsrXSA9IGJ1ZmZlcltqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGRpZ2VzdHMgZm9yIHRoZSBnaXZlbiBzdWJzZWVkLlxyXG4gICAgICogQHBhcmFtIHN1YnNlZWQgVG8gY3JlYXRlIHRoZSBkaWdlc3RzIGZvci5cclxuICAgICAqIEBwYXJhbSBzcG9uZ2VUeXBlIFRoZSBzcG9uZ2UgdHlwZSB0byB1c2UgZm9yIG9wZXJhdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGlnZXN0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRpZ2VzdHMoc3Vic2VlZCwgc3BvbmdlVHlwZSA9IFwia2VybFwiKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHN1YnNlZWQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc3Vic2VlZCBtdXN0IGJlIG9mIHR5cGUgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3BvbmdlID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50TGVuZ3RoID0gaGFzaExlbmd0aCAqIElTUy5OVU1CRVJfT0ZfRlJBR01FTlRfQ0hVTktTO1xyXG4gICAgICAgIGlmIChzdWJzZWVkLmxlbmd0aCAlIGZyYWdtZW50TGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3Vic2VlZCBsZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7ZnJhZ21lbnRMZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyeXRlUmFuZ2UgPSBJU1MuTUFYX1RSWVRFX1ZBTFVFIC0gSVNTLk1JTl9UUllURV9WQUxVRTtcclxuICAgICAgICBjb25zdCBrZXlMZW5EaXYgPSBzdWJzZWVkLmxlbmd0aCAvIGZyYWdtZW50TGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGRpZ2VzdHMgPSBuZXcgSW50OEFycmF5KGtleUxlbkRpdiAqIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgIGxldCBidWZmZXI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlMZW5EaXY7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpTXVsID0gaSAqIGZyYWdtZW50TGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlGcmFnbWVudCA9IHN1YnNlZWQuc2xpY2UoaU11bCwgaU11bCArIGZyYWdtZW50TGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqTXVsID0gaiAqIGhhc2hMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgPSBrZXlGcmFnbWVudC5zbGljZShqTXVsLCBqTXVsICsgaGFzaExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRyeXRlUmFuZ2U7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwb25nZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwb25nZS5hYnNvcmIoYnVmZmVyLCAwLCBidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBzcG9uZ2Uuc3F1ZWV6ZShidWZmZXIsIDAsIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBoYXNoTGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlGcmFnbWVudFtqTXVsICsga10gPSBidWZmZXJba107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BvbmdlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHNwb25nZS5hYnNvcmIoa2V5RnJhZ21lbnQsIDAsIGtleUZyYWdtZW50Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHNwb25nZS5zcXVlZXplKGJ1ZmZlciwgMCwgaGFzaExlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlNdWwyID0gaSAqIGhhc2hMZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGFzaExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBkaWdlc3RzW2lNdWwyICsgal0gPSBidWZmZXJbal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpZ2VzdHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0aGUgYWRkcmVzcyBmb3IgdGhlIGRpZ2VzdHMuXHJcbiAgICAgKiBAcGFyYW0gZGlnZXN0cyBUaGUgZGlnZXN0cyB0byBjcmVhdGUgdGhlIGFkZHJlc3MgZm9yLlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIHRoZSBhZGRyZXNzIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkcmVzcyhkaWdlc3RzLCBzcG9uZ2VUeXBlID0gXCJrZXJsXCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoZGlnZXN0cywgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBkaWdlc3RzIG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5leGlzdHMoc3BvbmdlVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzcG9uZ2VUeXBlIG11c3QgYmUgb25lIG9mIFske3Nwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkudHlwZXMoKS5qb2luKFwiLCBcIil9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcG9uZ2UgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0gc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgaWYgKGRpZ2VzdHMubGVuZ3RoICUgaGFzaExlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgSW52YWxpZCBkaWdlc3RzIGxlbmd0aCwgbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7aGFzaExlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BvbmdlLmluaXRpYWxpemUoKTtcclxuICAgICAgICBzcG9uZ2UuYWJzb3JiKGRpZ2VzdHMsIDAsIGRpZ2VzdHMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzVHJpdHMgPSBuZXcgSW50OEFycmF5KGhhc2hMZW5ndGgpO1xyXG4gICAgICAgIHNwb25nZS5zcXVlZXplKGFkZHJlc3NUcml0cywgMCwgYWRkcmVzc1RyaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIGFkZHJlc3NUcml0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGRpZ2VzdCBvZiB0aGUgbm9ybWFsaXplZCBidW5kbGUgZnJhZ21lbnQuXHJcbiAgICAgKiBAcGFyYW0gbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50IFRoZSBmcmFnbWVudCB0byBjcmVhdGUgZGlnZXN0LlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBUaGUgdHJpdHMgZm9yIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50LlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkaWdlc3Qgb2YgdGhlIGJ1bmRsZSBhbmQgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkaWdlc3Qobm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50LCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIHNwb25nZVR5cGUgPSBcImtlcmxcIikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50IG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5leGlzdHMoc3BvbmdlVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzcG9uZ2VUeXBlIG11c3QgYmUgb25lIG9mIFske3Nwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkudHlwZXMoKS5qb2luKFwiLCBcIil9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnVmZmVyO1xyXG4gICAgICAgIGNvbnN0IHNwb25nZSA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hMZW5ndGggPSBzcG9uZ2UuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKTtcclxuICAgICAgICBzcG9uZ2UuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1M7IGkrKykge1xyXG4gICAgICAgICAgICBidWZmZXIgPSBuZXcgSW50OEFycmF5KHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5zbGljZShpICogaGFzaExlbmd0aCwgKGkgKyAxKSAqIGhhc2hMZW5ndGgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudFtpXSAtIElTUy5NSU5fVFJZVEVfVkFMVUU7IGogPiAwOyBqLS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwb25nZTIgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICAgICAgICAgIHNwb25nZTIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgc3BvbmdlMi5hYnNvcmIoYnVmZmVyLCAwLCBidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHNwb25nZTIuc3F1ZWV6ZShidWZmZXIsIDAsIHNwb25nZTIuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BvbmdlLmFic29yYihidWZmZXIsIDAsIGJ1ZmZlci5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcG9uZ2Uuc3F1ZWV6ZShidWZmZXIsIDAsIHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpKTtcclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGRpZ2VzdCBmb3IgdGhlIHN1YnNlZWQuXHJcbiAgICAgKiBAcGFyYW0gc3Vic2VlZCBUaGUgc3Vic2VlZCB0byBnZXQgdGhlIGRpZ2VzdCBmb3IuXHJcbiAgICAgKiBAcGFyYW0gc2VjdXJpdHkgVGhlIHNlY3VyaXR5IGxldmVsLlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkaWdlc3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdWJzZWVkVG9EaWdlc3Qoc3Vic2VlZCwgc2VjdXJpdHksIHNwb25nZVR5cGUgPSBcImN1cmwyN1wiKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHN1YnNlZWQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc3Vic2VlZCBtdXN0IGJlIG9mIHR5cGUgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc2VjdXJpdHkpIHx8IHNlY3VyaXR5IDwgYWRkcmVzc1NlY3VyaXR5XzEuQWRkcmVzc1NlY3VyaXR5LmxvdyB8fCBzZWN1cml0eSA+IGFkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5oaWdoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc2VjdXJpdHkgbXVzdCBiZSBhbiBpbnRlZ2VyID49IDEgYW5kIDw9IDNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmV4aXN0cyhzcG9uZ2VUeXBlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVGhlIHNwb25nZVR5cGUgbXVzdCBiZSBvbmUgb2YgWyR7c3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS50eXBlcygpLmpvaW4oXCIsIFwiKX1dYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGMxID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgYzIgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBjMyA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgIGMxLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjMi5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgYzMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hMZW5ndGggPSBjMS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIGNvbnN0IGtleUxlbmd0aCA9ICgoaGFzaExlbmd0aCAvIDMpIC8gSVNTLlJBRElYKSAqIGhhc2hMZW5ndGg7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2VjdXJpdHkgKiBrZXlMZW5ndGggLyBoYXNoTGVuZ3RoO1xyXG4gICAgICAgIGxldCBvdXQgPSBuZXcgSW50OEFycmF5KGhhc2hMZW5ndGgpO1xyXG4gICAgICAgIGMxLmFic29yYihzdWJzZWVkLCAwLCBzdWJzZWVkLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjMS5zcXVlZXplKG91dCwgMCwgb3V0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgKElTUy5NQVhfVFJZVEVfVkFMVUUgLSBJU1MuTUlOX1RSWVRFX1ZBTFVFICsgMSk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgYzIucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGMyLmFic29yYihvdXQsIDAsIG91dC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgb3V0ID0gYzIuZ2V0U3RhdGUoKS5zbGljZSgwLCBoYXNoTGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjMy5hYnNvcmIob3V0LCAwLCBvdXQubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYzMuc3F1ZWV6ZShvdXQsIDAsIG91dC5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5vcm1hbGl6ZWQgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZUhhc2ggVGhlIGhhc2ggb2YgdGhlIGJ1bmRsZS5cclxuICAgICAqIEBwYXJhbSBzcG9uZ2VUeXBlIFRoZSBzcG9uZ2UgdHlwZSB0byB1c2UgZm9yIG9wZXJhdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbm9ybWFsaXplZCBidW5kbGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBub3JtYWxpemVkQnVuZGxlKGJ1bmRsZUhhc2gsIHNwb25nZVR5cGUgPSBcImN1cmw4MVwiKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGJ1bmRsZUhhc2gsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBidW5kbGVIYXNoIG11c3QgYmUgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3BvbmdlID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRCdW5kbGUgPSBuZXcgSW50OEFycmF5KElTUy5OVU1CRVJfT0ZfRlJBR01FTlRfQ0hVTktTICogSVNTLk5VTUJFUl9PRl9TRUNVUklUWV9MRVZFTFMpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hTdHJpbmcgPSBidW5kbGVIYXNoLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggPSBoYXNoTGVuZ3RoIC8gSVNTLlRSWVRFX1dJRFRIIC8gSVNTLk5VTUJFUl9PRl9TRUNVUklUWV9MRVZFTFM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJU1MuTlVNQkVSX09GX1NFQ1VSSVRZX0xFVkVMUzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNoQ2hhciA9IGhhc2hTdHJpbmcuY2hhckF0KGkgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhoYXNoQ2hhcikpLnRvTnVtYmVyKCk7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkQnVuZGxlW2kgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqXSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIHN1bSArPSB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN1bSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoc3VtLS0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplZEJ1bmRsZVtpICogbm9ybWFsaXplZEZyYWdtZW50TGVuZ3RoICsgal0gPiBJU1MuTUlOX1RSWVRFX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkQnVuZGxlW2kgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqXS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoc3VtKysgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplZEJ1bmRsZVtpICogbm9ybWFsaXplZEZyYWdtZW50TGVuZ3RoICsgal0gPCBJU1MuTUFYX1RSWVRFX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkQnVuZGxlW2kgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqXSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRCdW5kbGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIHRoZSBzaWduYXR1cmUgZnJhZ21lbnRzIGZyb20gdGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gZXhwZWN0ZWRBZGRyZXNzIFRoZSBhZGRyZXNzLlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMgVGhlIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50cy5cclxuICAgICAqIEBwYXJhbSBidW5kbGVIYXNoIFRoZSBoYXNoIGZvciB0aGUgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50IGFyZSBzaWduZWQgYnkgdGhlIGV4cGVjdGVkIGFkZHJlc3MuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB2YWxpZGF0ZVNpZ25hdHVyZXMoZXhwZWN0ZWRBZGRyZXNzLCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzLCBidW5kbGVIYXNoLCBzcG9uZ2VUeXBlID0gXCJrZXJsXCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoZXhwZWN0ZWRBZGRyZXNzLCBhZGRyZXNzXzEuQWRkcmVzcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgZXhwZWN0ZWRBZGRyZXNzIG11c3QgYmUgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNUeXBlZChzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzLCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMgbXVzdCBiZSBhbiBhcnJheSBvZiB0eXBlIFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGJ1bmRsZUhhc2gsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBidW5kbGVIYXNoIG11c3QgYmUgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRCdW5kbGVIYXNoID0gSVNTLm5vcm1hbGl6ZWRCdW5kbGUoYnVuZGxlSGFzaCk7XHJcbiAgICAgICAgY29uc3Qgc3BvbmdlID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGYgPSAwOyBmIDwgMzsgZisrKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudHNbZl0gPSBub3JtYWxpemVkQnVuZGxlSGFzaC5zbGljZShmICogSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1MsIChmICsgMSkgKiBJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpZ2VzdHMgPSBuZXcgSW50OEFycmF5KHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMubGVuZ3RoICogaGFzaExlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZ2VzdEJ1ZmZlciA9IElTUy5kaWdlc3Qobm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50c1tpICUgM10sIHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyhzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzW2ldLnRvVHJ5dGVzKCkpLnRvQXJyYXkoKSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGFzaExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBkaWdlc3RzW2kgKiBoYXNoTGVuZ3RoICsgal0gPSBkaWdlc3RCdWZmZXJbal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cGVjdGVkQWRkcmVzcy50b1RyeXRlcygpLnRvU3RyaW5nKCkgPT09IHRyaXRzXzEuVHJpdHMuZnJvbUFycmF5KElTUy5hZGRyZXNzKGRpZ2VzdHMpKS50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIHNpZ25lZCBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudC5cclxuICAgICAqIEBwYXJhbSBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQgVGhlIGZyYWdtZW50IHRvIHNpZ24uXHJcbiAgICAgKiBAcGFyYW0ga2V5RnJhZ21lbnQgVGhlIGtleSBmcmFnbWVudCB0byBzaWduIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgVGhlIHNpZ25lZCBmcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudChub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQsIGtleUZyYWdtZW50LCBzcG9uZ2VUeXBlID0gXCJrZXJsXCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUobm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50LCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudCBtdXN0IGJlIG9mIHR5cGUgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoa2V5RnJhZ21lbnQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUga2V5RnJhZ21lbnQgbXVzdCBiZSBvZiB0eXBlIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmV4aXN0cyhzcG9uZ2VUeXBlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVGhlIHNwb25nZVR5cGUgbXVzdCBiZSBvbmUgb2YgWyR7c3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS50eXBlcygpLmpvaW4oXCIsIFwiKX1dYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IGtleUZyYWdtZW50LnNsaWNlKCk7XHJcbiAgICAgICAgbGV0IGhhc2g7XHJcbiAgICAgICAgY29uc3Qga2VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hMZW5ndGggPSBrZXJsLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGhhc2ggPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuc2xpY2UoaSAqIGhhc2hMZW5ndGgsIChpICsgMSkgKiBoYXNoTGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMyAtIG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudFtpXTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBrZXJsLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIGtlcmwucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGtlcmwuYWJzb3JiKGhhc2gsIDAsIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAga2VybC5zcXVlZXplKGhhc2gsIDAsIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGFzaExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRbaSAqIGhhc2hMZW5ndGggKyBqXSA9IGhhc2hbal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1MgPSAyNztcclxuLyogQGludGVybmFsICovXHJcbklTUy5OVU1CRVJfT0ZfU0VDVVJJVFlfTEVWRUxTID0gMztcclxuLyogQGludGVybmFsICovXHJcbklTUy5UUllURV9XSURUSCA9IDM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuTUlOX1RSWVRFX1ZBTFVFID0gLTEzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLk1BWF9UUllURV9WQUxVRSA9IDEzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLk1JTl9UUklUX1ZBTFVFID0gLTE7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuTUFYX1RSSVRfVkFMVUUgPSAxO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLlJBRElYID0gMztcclxuZXhwb3J0cy5JU1MgPSBJU1M7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFYTnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGhjMmd2YVhOekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3d1JVRkJkVVU3UVVGRGRrVXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTd3JSRUZCTkVRN1FVRkROVVFzSzBWQlFUUkZPMEZCUXpWRkxIbEVRVUZ6UkR0QlFVTjBSQ3hwUjBGQk9FWTdRVUZET1VZc01rUkJRWGRFTzBGQlEzaEVMRFpFUVVFd1JEdEJRVU14UkN4elJFRkJiVVE3UVVGRGJrUXNPRVJCUVRKRU8wRkJSVE5FT3pzN1IwRkhSenRCUVVOSU8wbEJhMEpKT3pzN096czdUMEZOUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlpTeEZRVUZGTEV0QlFXRXNSVUZCUlN4aFFVRnhRaXhSUVVGUk8xRkJReTlGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHZRMEZCYjBNc1EwRkJReXhEUVVGRE8xRkJRMmhGTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRzFEUVVGdFF5eERRVUZETEVOQlFVTTdVVUZETDBRc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETlVjc1EwRkJRenRSUVVWRUxFMUJRVTBzVFVGQlRTeEhRVUZITERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpORUxFMUJRVTBzVlVGQlZTeEhRVUZITEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRGNrUXNUVUZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8xRkJSWEJDTEUxQlFVMHNaVUZCWlN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU55UXl4SlFVRkpMRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRmRrSXNUMEZCVHl4VlFVRlZMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU4wUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMR1ZCUVdVc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0blFrRkRPVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRelZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zWTBGQll5eERRVUZETzJkQ1FVTTFReXhEUVVGRE8yZENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOS0xFdEJRVXNzUTBGQlF6dG5Ra0ZEVml4RFFVRkRPMWxCUTB3c1EwRkJRenRSUVVOTUxFTkJRVU03VVVGRlJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVVV4UXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExHVkJRV1VzUlVGQlJTeERRVUZETEVWQlFVVXNaVUZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRekZFTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZNME1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wbEJSVVE3T3pzN096czdUMEZQUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlZTeEZRVUZGTEV0QlFXRXNSVUZCUlN4UlFVRjVRaXhGUVVGRkxHRkJRWEZDTEUxQlFVMDdVVUZETDBZc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVjBGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVOQlFVTTdVVUZETTBRc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE9VTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYlVOQlFXMURMRU5CUVVNc1EwRkJRenRSUVVNdlJDeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hSUVVGUkxFZEJRVWNzYVVOQlFXVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1VVRkJVU3hIUVVGSExHbERRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlJ5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXdyUTBGQkswTXNRMEZCUXl4RFFVRkRPMUZCUXpORkxFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpWSExFTkJRVU03VVVGRlJDeE5RVUZOTEZOQlFWTXNSMEZCUnl4aFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNCRUxFMUJRVTBzVlVGQlZTeEhRVUZITEdGQlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE0wTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1lVRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRE0wUXNUVUZCVFN4aFFVRmhMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVVZ5UXl4TlFVRk5MRTFCUVUwc1IwRkJSeXcyUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU16UkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUlhKRUxFMUJRVTBzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0UlFVTndRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRGVrTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUlRGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTm1MRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCUlN4aFFVRmhMRU5CUVVNc1EwRkJRenRSUVVWNlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zZVVKQlFYbENMRWRCUVVjc1ZVRkJWU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEycEdMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5tTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlF6VkRMRWxCUVVrc1YwRkJWeXhIUVVGSExGRkJRVkVzUTBGQlF6dFJRVVV6UWl4UFFVRlBMRmRCUVZjc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETzFsQlEzWkNMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExIbENRVUY1UWl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03WjBKQlEzSkVMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4aFFVRmhMRU5CUVVNc1EwRkJRenRuUWtGRGVrTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dHZRa0ZEYkVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU01UWl4RFFVRkRPMWxCUTB3c1EwRkJRenRSUVVOTUxFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRPMGxCUTJZc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRnJRaXhGUVVGRkxHRkJRWEZDTEUxQlFVMDdVVUZEYWtVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSFZEUVVGMVF5eERRVUZETEVOQlFVTTdVVUZEYmtVc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETlVjc1EwRkJRenRSUVVWRUxFMUJRVTBzVFVGQlRTeEhRVUZITERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpORUxFMUJRVTBzVlVGQlZTeEhRVUZYTEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRE4wUXNUVUZCVFN4alFVRmpMRWRCUVVjc1ZVRkJWU3hIUVVGSExFZEJRVWNzUTBGQlF5eDVRa0ZCZVVJc1EwRkJRenRSUVVWc1JTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExHTkJRV01zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNoRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRFJEUVVFMFF5eGpRVUZqTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNoR0xFTkJRVU03VVVGRlJDeE5RVUZOTEZWQlFWVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1pVRkJaU3hIUVVGSExFZEJRVWNzUTBGQlF5eGxRVUZsTEVOQlFVTTdVVUZGTjBRc1RVRkJUU3hUUVVGVExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNSMEZCUnl4alFVRmpMRU5CUVVNN1VVRkZiRVFzVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1UwRkJVeXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlEzUkVMRWxCUVVrc1RVRkJhVUlzUTBGQlF6dFJRVVYwUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRk5CUVZNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlEycERMRTFCUVUwc1NVRkJTU3hIUVVGSExFTkJRVU1zUjBGQlJ5eGpRVUZqTEVOQlFVTTdXVUZEYUVNc1RVRkJUU3hYUVVGWExFZEJRVWNzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hIUVVGSExHTkJRV01zUTBGQlF5eERRVUZETzFsQlJTOUVMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExIbENRVUY1UWl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03WjBKQlEzSkVMRTFCUVUwc1NVRkJTU3hIUVVGWExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTTdaMEpCUTNCRExFMUJRVTBzUjBGQlJ5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTTdaMEpCUlhCRUxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN2IwSkJRMnhETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenR2UWtGRFppeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMjlDUVVONFF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdaMEpCUXpGRExFTkJRVU03WjBKQlJVUXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dHZRa0ZEYkVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzUkRMRU5CUVVNN1dVRkRUQ3hEUVVGRE8xbEJSVVFzVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUTJZc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4RlFVRkZMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU5zUkN4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkZkRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJRenRaUVVNM1FpeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8yZENRVU5zUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVF5eERRVUZETzFGQlEwd3NRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRGJrSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZyUWl4RlFVRkZMR0ZCUVhGQ0xFMUJRVTA3VVVGRGFrVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhWRFFVRjFReXhEUVVGRExFTkJRVU03VVVGRGJrVXNRMEZCUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE5VY3NRMEZCUXp0UlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF6TkVMRTFCUVUwc1ZVRkJWU3hIUVVGSExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkZja1FzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGVkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4cFJFRkJhVVFzVlVGQlZTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjZSaXhEUVVGRE8xRkJSVVFzVFVGQlRTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMUZCUTNCQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZGTVVNc1RVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRMME1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhGUVVGRkxGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVnlSQ3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETzBsQlEzaENMRU5CUVVNN1NVRkZSRHM3T3pzN08wOUJUVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMSGRDUVVGdFF5eEZRVUZGTEhkQ1FVRnRReXhGUVVGRkxHRkJRWEZDTEUxQlFVMDdVVUZEZEVnc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXgzUWtGQmQwSXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE5VUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZDBSQlFYZEVMRU5CUVVNc1EwRkJRenRSUVVOd1JpeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4M1FrRkJkMElzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROVVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2QwUkJRWGRFTEVOQlFVTXNRMEZCUXp0UlFVTndSaXhEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGREwwTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYTBOQlFXdERMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTFSeXhEUVVGRE8xRkJSVVFzU1VGQlNTeE5RVUZwUWl4RFFVRkRPMUZCUlhSQ0xFMUJRVTBzVFVGQlRTeEhRVUZITERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpORUxFMUJRVTBzVlVGQlZTeEhRVUZITEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRGNrUXNUVUZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8xRkJSWEJDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMSGxDUVVGNVFpeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRja1FzVFVGQlRTeEhRVUZITEVsQlFVa3NVMEZCVXl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRk4wWXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzZDBKQlFYZENMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdaMEpCUTNwRkxFMUJRVTBzVDBGQlR5eEhRVUZITERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMmRDUVVVMVJDeFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1owSkJRM0pDTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1owSkJRM3BETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrVXNRMEZCUXp0WlFVVkVMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRE5VTXNRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETjBRc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzVFVGQlRTeERRVUZETEdWQlFXVXNRMEZCUXl4UFFVRnJRaXhGUVVGRkxGRkJRWGxDTEVWQlFVVXNZVUZCY1VJc1VVRkJVVHRSUVVOMFJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE0wTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZFVOQlFYVkRMRU5CUVVNc1EwRkJRenRSUVVOdVJTeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hSUVVGUkxFZEJRVWNzYVVOQlFXVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1VVRkJVU3hIUVVGSExHbERRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlJ5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXdyUTBGQkswTXNRMEZCUXl4RFFVRkRPMUZCUXpORkxFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpWSExFTkJRVU03VVVGRlJDeE5RVUZOTEVWQlFVVXNSMEZCUnl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOMlJDeE5RVUZOTEVWQlFVVXNSMEZCUnl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOMlJDeE5RVUZOTEVWQlFVVXNSMEZCUnl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOMlJDeEZRVUZGTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkRhRUlzUlVGQlJTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMUZCUTJoQ0xFVkJRVVVzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0UlFVVm9RaXhOUVVGTkxGVkJRVlVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJRMnBFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJReXhWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF6dFJRVVU1UkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhSUVVGUkxFZEJRVWNzVTBGQlV5eEhRVUZITEZWQlFWVXNRMEZCUXp0UlFVTnFSQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVWd1F5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFVkJRVVVzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNSRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRPVUlzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVVXZRaXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEdWQlFXVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1pVRkJaU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1owSkJRM1pGTEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRuUWtGRFdDeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkROME1zUTBGQlF6dFpRVVZFTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRiRU1zUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZMMElzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTm1MRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhWUVVGblFpeEZRVUZGTEdGQlFYRkNMRkZCUVZFN1VVRkRNVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVWQlFVVXNWMEZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM3BETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1VVRkRha1VzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXcyUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROVWNzUTBGQlF6dFJRVVZFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRek5FTEUxQlFVMHNWVUZCVlN4SFFVRkhMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdVVUZGY2tRc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zZVVKQlFYbENMRWRCUVVjc1IwRkJSeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1VVRkRkRWNzVFVGQlRTeFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJYQkVMRTFCUVUwc2QwSkJRWGRDTEVkQlFVY3NWVUZCVlN4SFFVRkhMRWRCUVVjc1EwRkJReXhYUVVGWExFZEJRVWNzUjBGQlJ5eERRVUZETEhsQ1FVRjVRaXhEUVVGRE8xRkJSVGxHTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMSGxDUVVGNVFpeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRja1FzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFvc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXgzUWtGQmQwSXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8yZENRVU5vUkN4TlFVRk5MRkZCUVZFc1IwRkJSeXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4M1FrRkJkMElzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRja1VzVFVGQlRTeEhRVUZITEVkQlFVY3NZVUZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03WjBKQlEzSkZMR2RDUVVGblFpeERRVUZETEVOQlFVTXNSMEZCUnl4M1FrRkJkMElzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1owSkJRM3BFTEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNN1dVRkRaaXhEUVVGRE8xbEJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlExZ3NUMEZCVHl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF6dHZRa0ZEWml4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMSGRDUVVGM1FpeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN2QwSkJRMmhFTEVWQlFVVXNRMEZCUXl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTXNSMEZCUnl4M1FrRkJkMElzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF6czBRa0ZETTBVc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4SFFVRkhMSGRDUVVGM1FpeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN05FSkJRM0pFTEV0QlFVc3NRMEZCUXp0M1FrRkRWaXhEUVVGRE8yOUNRVU5NTEVOQlFVTTdaMEpCUTB3c1EwRkJRenRaUVVOTUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRTaXhQUVVGUExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRPMjlDUVVObUxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzZDBKQlFYZENMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dDNRa0ZEYUVRc1JVRkJSU3hEUVVGRExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJReXhIUVVGSExIZENRVUYzUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRPelJDUVVNelJTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExFZEJRVWNzZDBKQlFYZENMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6czBRa0ZEY2tRc1MwRkJTeXhEUVVGRE8zZENRVU5XTEVOQlFVTTdiMEpCUTB3c1EwRkJRenRuUWtGRFRDeERRVUZETzFsQlEwd3NRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkZSQ3hOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVVZFT3pzN096czdPMDlCVDBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1pVRkJkMElzUlVGQlJTeDVRa0ZCY1VRc1JVRkJSU3hWUVVGblFpeEZRVUZGTEdGQlFYRkNMRTFCUVUwN1VVRkRNMG9zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eGxRVUZsTEVWQlFVVXNhVUpCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5d3dRMEZCTUVNc1EwRkJReXhEUVVGRE8xRkJRM1JGTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMSGxDUVVGNVFpeEZRVUZGTEcxRVFVRjNRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkZMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEdsR1FVRnBSaXhEUVVGRExFTkJRVU03VVVGRE4wY3NRMEZCUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hGUVVGRkxGZEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4eFEwRkJjVU1zUTBGQlF5eERRVUZETzFGQlEycEZMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhyUTBGQmEwTXNOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6VkhMRU5CUVVNN1VVRkZSQ3hOUVVGTkxIbENRVUY1UWl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOeVF5eE5RVUZOTEc5Q1FVRnZRaXhIUVVGSExFZEJRVWNzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVVU1UkN4TlFVRk5MRTFCUVUwc1IwRkJSeXcyUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU16UkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUlhKRUxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRla0lzZVVKQlFYbENMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNlVUpCUVhsQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1VVRkRNVWtzUTBGQlF6dFJRVVZFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVVUzUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMSGxDUVVGNVFpeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRM2hFTEUxQlFVMHNXVUZCV1N4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEdGQlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUlhaSkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1owSkJRMnhETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1JDeERRVUZETzFGQlEwd3NRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1lVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRha2dzUTBGQlF6dEpRVVZFT3pzN096czdUMEZOUnp0SlFVTkpMRTFCUVUwc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4M1FrRkJiVU1zUlVGQlJTeFhRVUZ6UWl4RlFVRkZMR0ZCUVhGQ0xFMUJRVTA3VVVGRE0wZ3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4M1FrRkJkMElzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROVVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2QwUkJRWGRFTEVOQlFVTXNRMEZCUXp0UlFVTndSaXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExESkRRVUV5UXl4RFFVRkRMRU5CUVVNN1VVRkRka1VzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXcyUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROVWNzUTBGQlF6dFJRVVZFTEUxQlFVMHNkMEpCUVhkQ0xFZEJRVWNzVjBGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUTNKRUxFbEJRVWtzU1VGQlpTeERRVUZETzFGQlJYQkNMRTFCUVUwc1NVRkJTU3hIUVVGSExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlEzcEVMRTFCUVUwc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkZia1FzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVNeFFpeEpRVUZKTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkZOVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRuUWtGRGVFUXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8yZENRVU5zUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03WjBKQlEySXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMmRDUVVOcVF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdXVUZEZEVNc1EwRkJRenRaUVVWRUxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1owSkJRMnhETEhkQ1FVRjNRaXhEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkVMRU5CUVVNN1VVRkRUQ3hEUVVGRE8xRkJSVVFzVFVGQlRTeERRVUZETEhkQ1FVRjNRaXhEUVVGRE8wbEJRM0JETEVOQlFVTTdPMEZCYW1ORUxHVkJRV1U3UVVGRFV5dzJRa0ZCZVVJc1IwRkJWeXhGUVVGRkxFTkJRVU03UVVGREwwUXNaVUZCWlR0QlFVTlRMRFpDUVVGNVFpeEhRVUZYTEVOQlFVTXNRMEZCUXp0QlFVTTVSQ3hsUVVGbE8wRkJRMU1zWlVGQlZ5eEhRVUZYTEVOQlFVTXNRMEZCUXp0QlFVTm9SQ3hsUVVGbE8wRkJRMU1zYlVKQlFXVXNSMEZCVnl4RFFVRkRMRVZCUVVVc1EwRkJRenRCUVVOMFJDeGxRVUZsTzBGQlExTXNiVUpCUVdVc1IwRkJWeXhGUVVGRkxFTkJRVU03UVVGRGNrUXNaVUZCWlR0QlFVTlRMR3RDUVVGakxFZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEY0VRc1pVRkJaVHRCUVVOVExHdENRVUZqTEVkQlFWY3NRMEZCUXl4RFFVRkRPMEZCUTI1RUxHVkJRV1U3UVVGRFV5eFRRVUZMTEVkQlFWY3NRMEZCUXl4RFFVRkRPMEZCYUVJNVF5eHJRa0Z0WTBNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hhc2gvaXNzLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBhbiBlbnVtIGZvciB0aGUgYWRkcmVzcyBzZWN1cml0eSB2YWx1ZXMuXHJcbiAqL1xyXG52YXIgQWRkcmVzc1NlY3VyaXR5O1xyXG4oZnVuY3Rpb24gKEFkZHJlc3NTZWN1cml0eSkge1xyXG4gICAgQWRkcmVzc1NlY3VyaXR5W0FkZHJlc3NTZWN1cml0eVtcImxvd1wiXSA9IDFdID0gXCJsb3dcIjtcclxuICAgIEFkZHJlc3NTZWN1cml0eVtBZGRyZXNzU2VjdXJpdHlbXCJtZWRpdW1cIl0gPSAyXSA9IFwibWVkaXVtXCI7XHJcbiAgICBBZGRyZXNzU2VjdXJpdHlbQWRkcmVzc1NlY3VyaXR5W1wiaGlnaFwiXSA9IDNdID0gXCJoaWdoXCI7XHJcbn0pKEFkZHJlc3NTZWN1cml0eSA9IGV4cG9ydHMuQWRkcmVzc1NlY3VyaXR5IHx8IChleHBvcnRzLkFkZHJlc3NTZWN1cml0eSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlXUmtjbVZ6YzFObFkzVnlhWFI1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdllXUmtjbVZ6YzFObFkzVnlhWFI1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEVsQlFWa3NaVUZKV0R0QlFVcEVMRmRCUVZrc1pVRkJaVHRKUVVOMlFpeHRSRUZCVVN4RFFVRkJPMGxCUTFJc2VVUkJRVlVzUTBGQlFUdEpRVU5XTEhGRVFVRlJMRU5CUVVFN1FVRkRXaXhEUVVGRExFVkJTbGNzWlVGQlpTeEhRVUZtTEhWQ1FVRmxMRXRCUVdZc2RVSkJRV1VzVVVGSk1VSWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL2FkZHJlc3NTZWN1cml0eS50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHRpbWVTZXJ2aWNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3Qvc2VydmljZXMvdGltZVNlcnZpY2VcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIik7XHJcbmNvbnN0IHRhZ18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdGFnXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJhbnNhY3Rpb25cIik7XHJcbmNvbnN0IHRyeXRlTnVtYmVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZU51bWJlclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy90cmFuc2FjdGlvbkhlbHBlclwiKTtcclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHByb29mIG9mIHdvcmsuXHJcbiAqL1xyXG5jbGFzcyBQcm9vZk9mV29ya0Jhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgUHJvb2ZPZldvcmsuXHJcbiAgICAgKiBAcGFyYW0gdGltZVNlcnZpY2UgU2VydmljZSB0byBnZXQgdGhlIHRpbWUgZm9yIGF0dGFjaG1lbnRzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0aW1lU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3RpbWVTZXJ2aWNlID0gdGltZVNlcnZpY2UgfHwgbmV3IHRpbWVTZXJ2aWNlXzEuVGltZVNlcnZpY2UoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3cgdGhlIHByb29mIG9mIHdvcmsgdG8gcGVyZm9ybSBhbnkgaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKiBXaWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiB0aGUgaW1wbGVtZW50YXRpb24gaXMgbm90IHN1cHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBwcm9vZiBvZiB3b3JrIG9uIHRoZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIHRydW5rVHJhbnNhY3Rpb24gVGhlIHRydW5rVHJhbnNhY3Rpb24gdG8gdXNlIGZvciB0aGUgcG93LlxyXG4gICAgICogQHBhcmFtIGJyYW5jaFRyYW5zYWN0aW9uIFRoZSBicmFuY2hUcmFuc2FjdGlvbiB0byB1c2UgZm9yIHRoZSBwb3cuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gcGVyZm9ybSB0aGUgcG93IG9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBwcm9kdWNlZCBieSB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcG93KHRydW5rVHJhbnNhY3Rpb24sIGJyYW5jaFRyYW5zYWN0aW9uLCB0cnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cnVua1RyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJ1bmtUcmFuc2FjdGlvbiBtdXN0IGJlIGFuIG9iamVjdCBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShicmFuY2hUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGJyYW5jaFRyYW5zYWN0aW9uIG11c3QgYmUgYW4gb2JqZWN0IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQodHJ5dGVzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyeXRlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR5cGUgVHJ5dGVzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobWluV2VpZ2h0TWFnbml0dWRlKSB8fCBtaW5XZWlnaHRNYWduaXR1ZGUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBtaW5XZWlnaHRNYWduaXR1ZGUgbXVzdCBiZSA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpbmFsVHJ5dGVzID0gW107XHJcbiAgICAgICAgbGV0IHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJ5dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5mcm9tVHJ5dGVzKHRyeXRlc1tpXSk7XHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggbGFzdCBpbmRleCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gaXQgdGhlIHRydW5rIC8gYnJhbmNoIHdoaWNoIHRoZSB1c2VyIGhhcyBzdXBwbGllZFxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGJ1bmRsZSwgY2hhaW4gdGhlIGJ1bmRsZSB0cmFuc2FjdGlvbnMgdmlhXHJcbiAgICAgICAgICAgIC8vIHRydW5rVHJhbnNhY3Rpb24gdG9nZXRoZXJcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcih0aGlzLl90aW1lU2VydmljZS5tc1NpbmNlRXBvY2goKSk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKDApO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5hdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihQcm9vZk9mV29ya0Jhc2UuTUFYX1RJTUVTVEFNUF9WQUxVRSk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IHRyYW5zYWN0aW9uLCB0byBiZSBwcm9jZXNzZWRcclxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgaXQncyB0aGUgbGFzdCBpbiB0aGUgYnVuZGxlIGFuZCB0aGVuXHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiBpdCB0aGUgc3VwcGxpZWQgdHJ1bmsgYW5kIGJyYW5jaCB0cmFuc2FjdGlvbnNcclxuICAgICAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbGFzdCB0cmFuc2FjdGlvbiBpbiB0aGUgYnVuZGxlXHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNhY3Rpb24ubGFzdEluZGV4LnRvTnVtYmVyKCkgIT09IHRyYW5zYWN0aW9uLmN1cnJlbnRJbmRleC50b051bWJlcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJXcm9uZyBidW5kbGUgb3JkZXIuIFRoZSBidW5kbGUgc2hvdWxkIGJlIG9yZGVyZWQgaW4gZGVzY2VuZGluZyBvcmRlciBmcm9tIGN1cnJlbnRJbmRleFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnRydW5rVHJhbnNhY3Rpb24gPSB0cnVua1RyYW5zYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uYnJhbmNoVHJhbnNhY3Rpb24gPSBicmFuY2hUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnRydW5rVHJhbnNhY3Rpb24gPSBwcmV2aW91c1RyYW5zYWN0aW9uSGFzaDtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmJyYW5jaFRyYW5zYWN0aW9uID0gdHJ1bmtUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUcnl0ZXMgPSB0cmFuc2FjdGlvbi50b1RyeXRlcygpO1xyXG4gICAgICAgICAgICBjb25zdCBzaW5nbGVUcnl0ZXMgPSBhd2FpdCB0aGlzLnNpbmdsZVBvdyhuZXdUcnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLm5vbmNlID0gdGFnXzEuVGFnLmZyb21Ucnl0ZXMoc2luZ2xlVHJ5dGVzLnN1Yih0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLkxFTkdUSCAtIHRhZ18xLlRhZy5MRU5HVEgsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBoYXNoIG9mIHRoZSBuZXcgdHJhbnNhY3Rpb24gd2l0aCBub25jZSBhbmQgdXNlIHRoYXQgYXMgdGhlIHByZXZpb3VzIGhhc2ggZm9yIG5leHQgZW50cnlcclxuICAgICAgICAgICAgY29uc3QgcmV0dXJuVHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLmZyb21Ucnl0ZXMoc2luZ2xlVHJ5dGVzKTtcclxuICAgICAgICAgICAgcHJldmlvdXNUcmFuc2FjdGlvbkhhc2ggPSB0cmFuc2FjdGlvbkhlbHBlcl8xLlRyYW5zYWN0aW9uSGVscGVyLmhhc2gocmV0dXJuVHJhbnNhY3Rpb24pO1xyXG4gICAgICAgICAgICBmaW5hbFRyeXRlcy5wdXNoKHJldHVyblRyYW5zYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV2ZXJzZSB0aGUgb3JkZXIgc28gdGhhdCBpdCdzIGFzY2VuZGluZyBmcm9tIGN1cnJlbnRJbmRleFxyXG4gICAgICAgIHJldHVybiBmaW5hbFRyeXRlcy5yZXZlcnNlKCkubWFwKHRyYW5zYWN0aW9uID0+IHRyYW5zYWN0aW9uLnRvVHJ5dGVzKCkpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbWF4aW11bSB0aW1lc3RhbXAgdmFsdWUgdXNlZCBpbiBwcm9vZiBvZiB3b3JrLlxyXG4gKi9cclxuUHJvb2ZPZldvcmtCYXNlLk1BWF9USU1FU1RBTVBfVkFMVUUgPSAoTWF0aC5wb3coMywgMjcpIC0gMSkgLyAyO1xyXG5leHBvcnRzLlByb29mT2ZXb3JrQmFzZSA9IFByb29mT2ZXb3JrQmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKdmIyWlBabGR2Y210Q1lYTmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzQnliMjltVDJaWGIzSnJMM0J5YjI5bVQyWlhiM0pyUW1GelpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc01FVkJRWFZGTzBGQlEzWkZMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRmVrVXNNa1ZCUVhkRk8wRkJRM2hGTEhsRVFVRnpSRHRCUVVOMFJDeDFSRUZCYjBRN1FVRkRjRVFzZFVWQlFXOUZPMEZCUTNCRkxIVkZRVUZ2UlR0QlFVTndSU3cyUkVGQk1FUTdRVUZETVVRc2MwUkJRVzFFTzBGQlEyNUVMRzlGUVVGcFJUdEJRVWRxUlRzN1IwRkZSenRCUVVOSU8wbEJVMGs3T3p0UFFVZEhPMGxCUTBnc1dVRkJXU3hYUVVFd1FqdFJRVU5zUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExGZEJRVmNzU1VGQlNTeEpRVUZKTEhsQ1FVRlhMRVZCUVVVc1EwRkJRenRKUVVONlJDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzUzBGQlN5eERRVUZETEZWQlFWVTdVVUZEYmtJc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJSVVE3T3pzN096czdUMEZQUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFYTkNMRVZCUVVVc2FVSkJRWFZDTEVWQlFVVXNUVUZCWjBJc1JVRkJSU3hyUWtGQk1FSTdVVUZETVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4WFFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGREwwTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zY1VSQlFYRkVMRU5CUVVNc1EwRkJRenRSUVVOcVJpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeFhRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2MwUkJRWE5FTEVOQlFVTXNRMEZCUXp0UlFVTnNSaXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNaVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEUkRRVUUwUXl4RFFVRkRMRU5CUVVNN1VVRkRlRVVzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zU1VGQlNTeHJRa0ZCYTBJc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcEZMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEc5RFFVRnZReXhEUVVGRExFTkJRVU03VVVGRGFFVXNRMEZCUXp0UlFVVkVMRTFCUVUwc1YwRkJWeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVYyUWl4SlFVRkpMSFZDUVVFMlFpeERRVUZETzFGQlJXeERMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUTNKRExFMUJRVTBzVjBGQlZ5eEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlhSRUxHOURRVUZ2UXp0WlFVTndReXd5UkVGQk1rUTdXVUZETTBRc01FUkJRVEJFTzFsQlF6RkVMRFJDUVVFMFFqdFpRVU0xUWl4WFFVRlhMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRek5HTEZkQlFWY3NRMEZCUXl3MlFrRkJOa0lzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUlN4WFFVRlhMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zWlVGQlpTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03V1VGRmVFY3NiMFJCUVc5RU8xbEJRM0JFTEhORVFVRnpSRHRaUVVOMFJDeDFSRUZCZFVRN1dVRkZka1FzUlVGQlJTeERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyaEVMREJEUVVFd1F6dG5Ra0ZETVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1MwRkJTeXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE0wVXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZDBaQlFYZEdMRU5CUVVNc1EwRkJRenRuUWtGRGNFZ3NRMEZCUXp0blFrRkRSQ3hYUVVGWExFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdaMEpCUTJoRUxGZEJRVmNzUTBGQlF5eHBRa0ZCYVVJc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0WlFVTjBSQ3hEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTBvc1YwRkJWeXhEUVVGRExHZENRVUZuUWl4SFFVRkhMSFZDUVVGMVFpeERRVUZETzJkQ1FVTjJSQ3hYUVVGWExFTkJRVU1zYVVKQlFXbENMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdXVUZEY2tRc1EwRkJRenRaUVVWRUxFMUJRVTBzVTBGQlV5eEhRVUZITEZkQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRaUVVWNlF5eE5RVUZOTEZsQlFWa3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV5eEZRVUZGTEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03V1VGRmVrVXNWMEZCVnl4RFFVRkRMRXRCUVVzc1IwRkJSeXhUUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc2VVSkJRVmNzUTBGQlF5eE5RVUZOTEVkQlFVY3NVMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVnNSeXgzUjBGQmQwYzdXVUZEZUVjc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0WlFVTXZSQ3gxUWtGQmRVSXNSMEZCUnl4eFEwRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dFpRVVZ3UlN4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRlRU1zUTBGQlF6dFJRVU5FTERaRVFVRTJSRHRSUVVNM1JDeE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6VkZMRU5CUVVNN08wRkJNMFpFT3p0SFFVVkhPMEZCUTI5Q0xHMURRVUZ0UWl4SFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlNtNUdMREJEUVhGSFF5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGNsYXNzIHdoaWNoIGNhbiBwcm92aWRlIHRoZSB0aW1lLlxyXG4gKi9cclxuY2xhc3MgVGltZVNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDE5NzAvMDEvMDEuXHJcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gICAgICovXHJcbiAgICBtc1NpbmNlRXBvY2goKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UaW1lU2VydmljZSA9IFRpbWVTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR2x0WlZObGNuWnBZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjMlZ5ZG1salpYTXZkR2x0WlZObGNuWnBZMlV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVVkJPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPMDlCUjBjN1NVRkRTU3haUVVGWk8xRkJRMllzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETzBOQlEwbzdRVUZTUkN4clEwRlJReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9zZXJ2aWNlcy90aW1lU2VydmljZS50cyJdLCJzb3VyY2VSb290IjoiIn0=