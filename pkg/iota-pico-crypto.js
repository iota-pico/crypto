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
     * @return True if the number is formatted correctly.
     */

  }, {
    key: "isFloatString",
    value: function isFloatString(value) {
      return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @return True if the number is formatted correctly.
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
     * @return New trit which is the addition of the a + b.
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
     * @return Array buffer containing the digest.
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
   * @return New instance of transaction.
   */


  _createClass(Transaction, [{
    key: "toTrytes",

    /**
     * Convert the transaction to trytes.
     * @return The transaction as trytes.
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
    key: "key",

    /**
     * Create the key for the seed.
     * @param seed The seed to create the key for.
     * @param index The index to use for the seed.
     * @param length The security level to create the key.
     * @returns the key.
     */
    value: function key(seed, index, security) {
      if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
        throw new cryptoError_1.CryptoError("The seed must be of type Hash");
      }

      if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
        throw new cryptoError_1.CryptoError("The index must be an integer >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(security) || security < addressSecurity_1.AddressSecurity.low || security > addressSecurity_1.AddressSecurity.high) {
        throw new cryptoError_1.CryptoError("The security must be an integer >= 1 and <= 3");
      }

      var seedTrits = trits_1.Trits.fromTrytes(seed.toTrytes());
      var indexTrits = trits_1.Trits.fromNumber(index);
      var subseed = trits_1.Trits.add(seedTrits, indexTrits).toArray();
      var subseedLength = subseed.length;
      var kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
      var hashLength = kerl.getConstant("HASH_LENGTH");
      kerl.initialize();
      kerl.absorb(subseed, 0, subseedLength);
      kerl.squeeze(subseed, 0, subseedLength);
      kerl.reset();
      kerl.absorb(subseed, 0, subseedLength);
      var key = new Int8Array(ISS.NUMBER_OF_FRAGMENT_CHUNKS * hashLength * security);
      var offset = 0;
      var buffer = new Int8Array(subseedLength);
      var localLength = security;

      while (localLength-- > 0) {
        for (var i = 0; i < ISS.NUMBER_OF_FRAGMENT_CHUNKS; i++) {
          kerl.squeeze(buffer, 0, subseedLength);

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
     * @returns The digests.
     */

  }, {
    key: "digests",
    value: function digests(subseed) {
      if (!objectHelper_1.ObjectHelper.isType(subseed, Int8Array)) {
        throw new cryptoError_1.CryptoError("The subseed must be of type Int8Array");
      }

      var hash = spongeFactory_1.SpongeFactory.instance().create("kerl");
      var hashLength = hash.getConstant("HASH_LENGTH");
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
            hash.reset();
            hash.absorb(buffer, 0, buffer.length);
            hash.squeeze(buffer, 0, hashLength);
          }

          for (var _k = 0; _k < hashLength; _k++) {
            keyFragment[jMul + _k] = buffer[_k];
          }
        }

        hash.reset();
        hash.absorb(keyFragment, 0, keyFragment.length);
        hash.squeeze(buffer, 0, hashLength);
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
     * @returns the address trits.
     */

  }, {
    key: "address",
    value: function address(digests) {
      if (!objectHelper_1.ObjectHelper.isType(digests, Int8Array)) {
        throw new cryptoError_1.CryptoError("The digests must be of type Int8Array");
      }

      var kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
      var kerlHashLength = kerl.getConstant("HASH_LENGTH");

      if (digests.length % kerlHashLength !== 0) {
        throw new cryptoError_1.CryptoError("Invalid digests length, must be a multiple of ".concat(kerlHashLength));
      }

      kerl.initialize();
      kerl.absorb(digests, 0, digests.length);
      var addressTrits = new Int8Array(kerlHashLength);
      kerl.squeeze(addressTrits, 0, addressTrits.length);
      return addressTrits;
    }
    /**
     * Create digest of the normalized bundle fragment.
     * @param normalizedBundleFragment The fragment to create digest.
     * @param signatureMessageFragment The trits for signature message fragment.
     * @returns The digest of the bundle and signature message fragment.
     */

  }, {
    key: "digest",
    value: function digest(normalizedBundleFragment, signatureMessageFragment) {
      if (!objectHelper_1.ObjectHelper.isType(normalizedBundleFragment, Int8Array)) {
        throw new cryptoError_1.CryptoError("The normalizedBundleFragment must be of type Int8Array");
      }

      if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, Int8Array)) {
        throw new cryptoError_1.CryptoError("The signatureMessageFragment must be of type Int8Array");
      }

      var buffer;
      var kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
      var hashLength = kerl.getConstant("HASH_LENGTH");
      kerl.initialize();

      for (var i = 0; i < ISS.NUMBER_OF_FRAGMENT_CHUNKS; i++) {
        buffer = new Int8Array(signatureMessageFragment.slice(i * hashLength, (i + 1) * hashLength));

        for (var j = normalizedBundleFragment[i] - ISS.MIN_TRYTE_VALUE; j > 0; j--) {
          var jKerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
          jKerl.initialize();
          jKerl.absorb(buffer, 0, buffer.length);
          jKerl.squeeze(buffer, 0, jKerl.getConstant("HASH_LENGTH"));
        }

        kerl.absorb(buffer, 0, buffer.length);
      }

      kerl.squeeze(buffer, 0, kerl.getConstant("HASH_LENGTH"));
      return buffer;
    }
    /**
     * Create a normalized bundle.
     * @param bundleHash The hash of the bundle.
     * @returns the normalized bundle.
     */

  }, {
    key: "normalizedBundle",
    value: function normalizedBundle(bundleHash) {
      if (!objectHelper_1.ObjectHelper.isType(bundleHash, hash_1.Hash)) {
        throw new cryptoError_1.CryptoError("The bundleHash must be of type Hash");
      }

      var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
      var curlHashLength = curl.getConstant("HASH_LENGTH");
      var normalizedBundle = new Int8Array(ISS.NUMBER_OF_FRAGMENT_CHUNKS * ISS.NUMBER_OF_SECURITY_LEVELS);
      var hashString = bundleHash.toTrytes().toString();
      var normalizedFragmentLength = curlHashLength / ISS.TRYTE_WIDTH / ISS.NUMBER_OF_SECURITY_LEVELS;

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
     * @returns True if the signature message fragment are signed by the expected address.
     */

  }, {
    key: "validateSignatures",
    value: function validateSignatures(expectedAddress, signatureMessageFragments, bundleHash) {
      if (!objectHelper_1.ObjectHelper.isType(expectedAddress, address_1.Address)) {
        throw new cryptoError_1.CryptoError("The expectedAddress must be of type Hash");
      }

      if (!arrayHelper_1.ArrayHelper.isTyped(signatureMessageFragments, signatureMessageFragment_1.SignatureMessageFragment)) {
        throw new cryptoError_1.CryptoError("The signatureMessageFragments must be an array of type SignatureMessageFragment");
      }

      if (!objectHelper_1.ObjectHelper.isType(bundleHash, hash_1.Hash)) {
        throw new cryptoError_1.CryptoError("The bundleHash must be of type Hash");
      }

      var normalizedBundleFragments = [];
      var normalizedBundleHash = ISS.normalizedBundle(bundleHash);
      var kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
      var hashLength = kerl.getConstant("HASH_LENGTH");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5ODZjY2FlYmNhNzNiNjRhZDc0ZiIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cnl0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9lcnJvci9jcnlwdG9FcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvbnVtYmVySGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZXJyb3IvZGF0YUVycm9yLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS9oYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oZWxwZXJzL2FycmF5SGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cml0cy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RpZ2VzdHMvc2hhMy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvc3RyaW5nSGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc3Bvbmdlcy9jdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc3Bvbmdlcy9rZXJsLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaGVscGVycy9iaWdJbnRlZ2VySGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS9hZGRyZXNzLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oZWxwZXJzL3RyYW5zYWN0aW9uSGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RhdGEvdGFnLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cnl0ZU51bWJlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaGVscGVycy9qc29uSGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZmFjdG9yaWVzL3Byb29mT2ZXb3JrRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiYW1kXCI6XCJiaWctaW50ZWdlclwiLFwiY29tbW9uanNcIjpcImJpZy1pbnRlZ2VyXCIsXCJjb21tb25qczJcIjpcImJpZy1pbnRlZ2VyXCIsXCJyb290XCI6XCJiaWdJbnRcIn0iLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oYXNoL2lzcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RhdGEvYWRkcmVzc1NlY3VyaXR5LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2VydmljZXMvdGltZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNW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TUFBTTtBQUNULFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFlBQVEsTUFBSSxNQUFTLENBQVosR0FBZSxPQUFVO0FBQ2xDLFlBQVEsTUFBSSxNQUFTLENBQVosR0FBZSxPQUFVO0FBQ2xDLFVBQUcsTUFBTTtBQUNULFVBQUcsTUFBTTtBQUNULFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFlBQVEsTUFBSSxNQUFTLENBQVosR0FBZSxPQUFVO0FBQ2xDLFlBQVEsTUFBSSxNQUFTLENBQVosR0FBZSxPQUFVO0FBQ2xDLFVBQUcsTUFBTTtBQUNULFVBQUcsTUFBTTtBQUNULFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFlBQVEsTUFBSSxNQUFTLENBQVosR0FBZSxPQUFVO0FBQ2xDLFlBQVEsTUFBSSxNQUFTLENBQVosR0FBZSxPQUFVO0FBQ2xDLFVBQUcsTUFBTTtBQUNULFVBQUcsTUFBTTtBQUNULFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFVBQUksT0FBTTtBQUNWLFlBQVEsTUFBSSxNQUFTLENBQVosR0FBZSxPQUFVO0FBQ2xDLFlBQVEsTUFBSSxNQUFTLENBQVosR0FBZSxPQUFVO0FBQ2xDLFVBQUcsTUFBTTtBQUNULFVBQUcsTUFBTTtBQUNULFVB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LENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFHLEtBQVEsS0FBQyxDQUFHLEtBQU87QUFDdEIsVUFBRyxLQUFRLEtBQUMsQ0FBRyxLQUFPO0FBQ3RCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBRyxLQUFRLEtBQUMsQ0FBRyxLQUFPO0FBQ3RCLFVBQUcsS0FBUSxLQUFDLENBQUcsS0FBTztBQUN0QixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUcsS0FBUSxLQUFDLENBQUcsS0FBTztBQUN0QixVQUFHLEtBQVEsS0FBQyxDQUFHLEtBQU87QUFDdEIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMs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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2p0QkE7Ozs7Ozs7Ozs7Ozs7O0FBS3VCOzs7OztBQUNULGFBQUssS0FDZjtBQUNIOzs7Ozs7QUFSRCxzQkFRQyxZIiwiZmlsZSI6ImlvdGEtcGljby1jcnlwdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJiaWctaW50ZWdlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBpb3RhLXBpY28vY3J5cHRvXCIsIFtcImJpZy1pbnRlZ2VyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBpb3RhLXBpY28vY3J5cHRvXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYmlnLWludGVnZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvQ3J5cHRvXCJdID0gZmFjdG9yeShyb290W1wiYmlnSW50XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI1X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk4NmNjYWViY2E3M2I2NGFkNzRmIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogT2JqZWN0IGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgT2JqZWN0SGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZW1wdHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiB0eXBlb2YgKHZhbHVlKSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBvYmplY3QgaWYgZ2l2ZW4gdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGUodmFsdWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlQ2xhc3NOYW1lID0gT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgdmFsdWVDbGFzc05hbWUgPT09IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodHlwZUNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdCBpZiBpdCBoYXMgb25lLlxyXG4gICAgICogQHBhcmFtIG9iamVjdCBUaGUgb2JqZWN0IHRvIGdldCB0aGUgY2xhc3MgbmFtZSBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY2xhc3MgbmFtZSBpZiBpdCBoYXMgb25lIG9yIHVuZGVmaW5lZCBpZiBub3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDbGFzc05hbWUob2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB0eXBlb2Ygb2JqZWN0ID09PSBcImZ1bmN0aW9uXCIgPyBvYmplY3QudG9TdHJpbmcoKSA6IG9iamVjdC5jb25zdHJ1Y3Rvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gY29uc3RydWN0b3IubWF0Y2goL1xcdysvZyk7XHJcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5PYmplY3RIZWxwZXIgPSBPYmplY3RIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWIySnFaV04wU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmIySnFaV04wU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlZUdFJRVU0xUWl4TlFVRk5MRU5CUVVNc1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXl4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRlZPMUZCUXpkQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRXRCUVVzc1MwRkJTeXhUUVVGVE8xbEJRM2hETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4UlFVRlJMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNSRkxFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJWU3hGUVVGRkxHVkJRWGxDTzFGQlEzUkVMRTFCUVUwc1kwRkJZeXhIUVVGSExGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRlRVFzVFVGQlRTeERRVUZETEdOQlFXTXNTMEZCU3l4VFFVRlRMRWxCUVVrc1kwRkJZeXhMUVVGTExGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1NVRkRla2NzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVZjN1VVRkRiRU1zUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4TFFVRkxMRWxCUVVrc1NVRkJTU3hOUVVGTkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETzFGQlEzSkNMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5LTEUxQlFVMHNWMEZCVnl4SFFVRkhMRTlCUVU4c1RVRkJUU3hMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xbEJRM0pITEUxQlFVMHNUMEZCVHl4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzFGQlEzQkZMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wTkJRMG83UVVFM1EwUXNiME5CTmtOREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyeXRlcy5cclxuICovXHJcbmNsYXNzIFRyeXRlcyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyeXRlcyBmcm9tIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgc3RyaW5nIHRvIGNyZWF0ZSB0aGUgdHJ5dGVzIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIEFuIG9wdGlvbmFsIHZhbGlkYXRpb24gbGVuZ3RoIGZvciB0aGUgdHJ5dGVzLCAwIG1lYW5zIGlnbm9yZSBsZW5ndGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tU3RyaW5nKHZhbHVlLCBsZW5ndGggPSAwKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVRyeXRlcy5pc1ZhbGlkKHZhbHVlLCBsZW5ndGgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgYW5kIGxlbmd0aCBkbyBub3QgY29udGFpbiB2YWxpZCB0cnl0ZXNcIiwgeyB2YWx1ZSwgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlcyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhlIHZhbHVlIGNvbnRhaW4gdmFsaWQgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgc3RyaW5nIHRvIHZhbGlkYXRlIGFzIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggQW4gb3B0aW9uYWwgdmFsaWRhdGlvbiBsZW5ndGggZm9yIHRoZSB0cnl0ZXMsIDAgbWVhbnMgaWdub3JlIGxlbmd0aC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGlucHV0IHdhcyB2YWxpZCB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1ZhbGlkKHZhbHVlLCBsZW5ndGggPSAwKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeWzlBLVpdeyR7bGVuZ3RoID8gbGVuZ3RoIDogXCIwLFwifX0kYCkudGVzdCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cnl0ZXMgdG8gYSBzdHJpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsZW5ndGggb2YgdGhlIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGggb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBzdWIgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBzdGFydCBUaGUgc3RhcnQgcG9zaXRpb24gdG8gZ2V0IHRoZSBzdWIuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHN1Yi5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgc3ViLlxyXG4gICAgICovXHJcbiAgICBzdWIoc3RhcnQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzdGFydCkgfHwgc3RhcnQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgc3RhcnQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCAoc3RhcnQgKyBsZW5ndGgpID4gdGhpcy5fdHJ5dGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc3RhcnQgKyBsZW5ndGggbXVzdCA8PSAke3RoaXMuX3RyeXRlcy5sZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUcnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMuc3Vic3RyKHN0YXJ0LCBsZW5ndGgpKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQWxsIHRoZSBjaGFyYWN0ZXJzIHRoYXQgY2FuIGJlIHVzZWQgaW4gdHJ5dGVzLlxyXG4gKi9cclxuVHJ5dGVzLkFMUEhBQkVUID0gXCI5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcclxuZXhwb3J0cy5Ucnl0ZXMgPSBUcnl0ZXM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISjVkR1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdmRISjVkR1Z6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc05FVkJRWGxGTzBGQlEzcEZMR3RFUVVFclF6dEJRVVV2UXpzN1IwRkZSenRCUVVOSU8wbEJVMGtzWlVGQlpUdEpRVU5tTEZsQlFXOUNMRTFCUVdNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaExFVkJRVVVzVTBGQmFVSXNRMEZCUXp0UlFVTjBSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9ReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elEwRkJjME1zUTBGQlF5eERRVUZETzFGQlEyaEZMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1VVRkRia1FzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHdEVRVUZyUkN4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETDBZc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNM1FpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRV0VzUlVGQlJTeFRRVUZwUWl4RFFVRkRPMUZCUTI1RUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZEYWtJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwb3NUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGZEJRVmNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRM3BGTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlEzaENMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5PMUZCUTFRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUXk5Q0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEVkQlFVY3NRMEZCUXl4TFFVRmhMRVZCUVVVc1RVRkJZenRSUVVOd1F5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bERMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEdsRFFVRnBReXhEUVVGRExFTkJRVU03VVVGRE0wUXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWRkxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRGhDUVVFNFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE4wVXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJwRkxFTkJRVU03TzBGQk5VVkVPenRIUVVWSE8wRkJRMWNzWlVGQlVTeEhRVUZYTERaQ1FVRTJRaXhEUVVGRE8wRkJTbTVGTEhkQ1FUaEZReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL3RyeXRlcy50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29yZUVycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvY29yZUVycm9yXCIpO1xyXG4vKipcclxuICogQSBjcnlwdG8gaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBDcnlwdG9FcnJvciBleHRlbmRzIGNvcmVFcnJvcl8xLkNvcmVFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBDcnlwdG9FcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJDcnlwdG9cIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNyeXB0b0Vycm9yID0gQ3J5cHRvRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzSjVjSFJ2UlhKeWIzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpYSnliM0l2WTNKNWNIUnZSWEp5YjNJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEc5RlFVRnBSVHRCUVVWcVJUczdSMEZGUnp0QlFVTklMR2xDUVVGNVFpeFRRVUZSTEhGQ1FVRlRPMGxCUTNSRE96czdPenRQUVV0SE8wbEJRMGdzV1VGQldTeFBRVUZsTEVWQlFVVXNWVUZCYTBNc1JVRkJSU3hWUVVGclFqdFJRVU12UlN4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTjJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXp0SlFVTXpRaXhEUVVGRE8wTkJRMG83UVVGWVJDeHJRMEZYUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZXJyb3IvY3J5cHRvRXJyb3IudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBOdW1iZXIgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gaW50ZWdlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIGludGVnZXJuZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgaW50ZWdlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBudW1iZXJ5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGZsb2F0IG51bWJlciBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGNhbiBiZSB1c2VkIGZvciBiaWcgbnVtYmVycyB0aGF0IHdvdWxkIG92ZXJmbG93IHBhcnNlRmxvYXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIG51bWJlciBpcyBmb3JtYXR0ZWQgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNGbG9hdFN0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAvXi0/XFxkKlxcLj9cXGQrJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGludGVnZXIgbnVtYmVyIGZvcm1hdHRlZCBhcyBhIHN0cmluZywgY2FuIGJlIHVzZWQgZm9yIGJpZyBudW1iZXJzIHRoYXQgd291bGQgb3ZlcmZsb3cgcGFyc2VJbnQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIG51bWJlciBpcyBmb3JtYXR0ZWQgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQrJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdW1iZXJIZWxwZXIgPSBOdW1iZXJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJuVnRZbVZ5U0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmJuVnRZbVZ5U0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlZUdFJRVU01UWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU55Uml4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU0zUWl4TlFVRk5MRU5CUVVNc1MwRkJTeXhMUVVGTExGTkJRVk1zU1VGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOb1NTeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJZVHRSUVVOeVF5eE5RVUZOTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQllUdFJRVU4yUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnFReXhEUVVGRE8wTkJRMG83UVVGd1EwUXNiME5CYjBOREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvbnVtYmVySGVscGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGRhdGEgaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBEYXRhRXJyb3IgZXh0ZW5kcyBjb3JlRXJyb3JfMS5Db3JlRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgRGF0YUVycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcik7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkRhdGFcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRhdGFFcnJvciA9IERhdGFFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdGMFlVVnljbTl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlZ5Y205eUwyUmhkR0ZGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2IwVkJRV2xGTzBGQlJXcEZPenRIUVVWSE8wRkJRMGdzWlVGQmRVSXNVMEZCVVN4eFFrRkJVenRKUVVOd1F6czdPenM3VDBGTFJ6dEpRVU5JTEZsQlFWa3NUMEZCWlN4RlFVRkZMRlZCUVd0RExFVkJRVVVzVlVGQmEwSTdVVUZETDBVc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRka01zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRla0lzUTBGQlF6dERRVU5LTzBGQldFUXNPRUpCVjBNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2Vycm9yL2RhdGFFcnJvci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBoYXNoZXMuXHJcbiAqL1xyXG5jbGFzcyBIYXNoIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaGFzaCBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBoYXNoIFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBoYXNoIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBIYXNoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyhoYXNoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGhhc2gsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBoYXNoIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGhhc2gubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gSGFzaC5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGhhc2ggc2hvdWxkIGJlICR7SGFzaC5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSGFzaChoYXNoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgaGFzaCB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgaGFzaC5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXMudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgYSB2YWxpZCBoYXNoICg4MSkuXHJcbiAqL1xyXG5IYXNoLkxFTkdUSCA9IDgxO1xyXG4vKipcclxuICogQW4gZW1wdHkgaGFzaCBhbGwgOXMuXHJcbiAqL1xyXG5IYXNoLkVNUFRZID0gSGFzaC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChIYXNoLkxFTkdUSCkpKTtcclxuZXhwb3J0cy5IYXNoID0gSGFzaDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYUdGemFDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a1lYUmhMMmhoYzJndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zY1VOQlFXdERPMEZCUld4RE96dEhRVVZITzBGQlEwZzdTVUZoU1N4bFFVRmxPMGxCUTJZc1dVRkJiMElzVFVGQll6dFJRVU01UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQldUdFJRVU5xUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hsUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dFJRVU53UlN4RFFVRkRPMUZCUlVRc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNTMEZCU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UWl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHpRa0ZCYzBJc1NVRkJTU3hEUVVGRExFMUJRVTBzZFVKQlFYVkNMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6bEdMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlEyNURMRU5CUVVNN08wRkJha1JFT3p0SFFVVkhPMEZCUTI5Q0xGZEJRVTBzUjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETTBNN08wZEJSVWM3UVVGRGIwSXNWVUZCU3l4SFFVRlRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRlNja2NzYjBKQmJVUkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL2hhc2gudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZhY3RvcnlCYXNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpO1xyXG5jb25zdCBjdXJsXzEgPSByZXF1aXJlKFwiLi4vc3Bvbmdlcy9jdXJsXCIpO1xyXG5jb25zdCBrZXJsXzEgPSByZXF1aXJlKFwiLi4vc3Bvbmdlcy9rZXJsXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBzcG9uZ2VzLlxyXG4gKi9cclxuY2xhc3MgU3BvbmdlRmFjdG9yeSBleHRlbmRzIGZhY3RvcnlCYXNlXzEuRmFjdG9yeUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEb24ndCBhbGxvdyBtYW51YWwgY29uc3RydWN0aW9uIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZmFjdG9yeSBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UgPSBuZXcgU3BvbmdlRmFjdG9yeSgpO1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZS5yZWdpc3RlcihcImN1cmxcIiwgKC4uLmFyZ3MpID0+IG5ldyBjdXJsXzEuQ3VybCguLi5hcmdzKSk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwia2VybFwiLCAoLi4uYXJncykgPT4gbmV3IGtlcmxfMS5LZXJsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU3BvbmdlRmFjdG9yeS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBTcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TcG9uZ2VGYWN0b3J5ID0gU3BvbmdlRmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNCdmJtZGxSbUZqZEc5eWVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5bVlXTjBiM0pwWlhNdmMzQnZibWRsUm1GamRHOXllUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJSWHBGTERCRFFVRjFRenRCUVVOMlF5d3dRMEZCZFVNN1FVRkZka003TzBkQlJVYzdRVUZEU0N4dFFrRkJNa0lzVTBGQlVTeDVRa0ZCYjBJN1NVRkpia1E3T3p0UFFVZEhPMGxCUTBnN1VVRkRTU3hMUVVGTExFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVVUZCVVR0UlFVTnNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEdGQlFXRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5DTEdGQlFXRXNRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hoUVVGaExFVkJRVVVzUTBGQlF6dFpRVU01UXl4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeFhRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM3BGTEdGQlFXRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxGZEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZEVVc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTI1RExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlEwd3NWMEZCVnp0UlFVTnFRaXhOUVVGTkxFTkJRVU1zWVVGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNCRExFTkJRVU03UTBGRFNqdEJRVGRDUkN4elEwRTJRa01pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnkudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIi4vb2JqZWN0SGVscGVyXCIpO1xyXG4vKipcclxuICogQXJyYXkgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBBcnJheUhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgZW1wdHkgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIGVtcHR5IGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXlIZWxwZXIuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBub24gZW1wdHkgYXJyYXkgb2Ygc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgbm9uIGVtcHR5IGFycmF5IG9mIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZWQodmFsdWUsIHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzRW1wdHkodmFsdWUpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyh1bmRlZmluZWQpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyhudWxsKSAmJlxyXG4gICAgICAgICAgICB2YWx1ZS5ldmVyeSgoYSkgPT4gb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhLCB0eXBlKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcnJheUhlbHBlciA9IEFycmF5SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEp5WVhsSVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OWhjbkpoZVVobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNhVVJCUVRoRE8wRkJSVGxET3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTFCUVUwc1EwRkJReXhMUVVGTExFdEJRVXNzU1VGQlNTeEpRVUZKTEV0QlFVc3NTMEZCU3l4VFFVRlRPMWxCUTNoRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZGtNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFWVTdVVUZETlVJc1RVRkJUU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTNSQ3hEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVc1JVRkJSU3hKUVVGak8xRkJRelZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETzFsQlF6bENMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZETVVJc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXp0WlFVTnlRaXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCVFN4RlFVRkZMRVZCUVVVc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU01UkN4RFFVRkRPME5CUlVvN1FVRnFRMFFzYTBOQmFVTkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL2FycmF5SGVscGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyaXRzLlxyXG4gKi9cclxuY2xhc3MgVHJpdHMge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cml0cykge1xyXG4gICAgICAgIHRoaXMuX3RyaXRzID0gdHJpdHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIEludDhBcnJheSBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21BcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGRvZXMgbm90IGNvbnRhaW4gdmFsaWQgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHModmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSBudW1iZXIgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ5dGVzIHVzZWQgdG8gY3JlYXRlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tTnVtYmVyQXJyYXkodmFsdWUpIHtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNUeXBlZCh2YWx1ZSwgTnVtYmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGRvZXMgbm90IGNvbnRhaW4gdmFsaWQgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHMobmV3IEludDhBcnJheSh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ5dGVzIHVzZWQgdG8gY3JlYXRlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB0cml0cyA9IG5ldyBJbnQ4QXJyYXkodHJ5dGVzU3RyaW5nLmxlbmd0aCAqIDMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJ5dGVzU3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRyeXRlc18xLlRyeXRlcy5BTFBIQUJFVC5pbmRleE9mKHRyeXRlc1N0cmluZy5jaGFyQXQoaSkpO1xyXG4gICAgICAgICAgICB0cml0c1tpICogM10gPSBUcml0cy5UUllURVNfVFJJVFNbaWR4XVswXTtcclxuICAgICAgICAgICAgdHJpdHNbaSAqIDMgKyAxXSA9IFRyaXRzLlRSWVRFU19UUklUU1tpZHhdWzFdO1xyXG4gICAgICAgICAgICB0cml0c1tpICogMyArIDJdID0gVHJpdHMuVFJZVEVTX1RSSVRTW2lkeF1bMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHModHJpdHMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSBudW1iZXJcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBOdW1iZXIgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21OdW1iZXIodmFsdWUpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgaXMgbm90IGFuIGludGVnZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyaXRzID0gW107XHJcbiAgICAgICAgbGV0IGFic29sdXRlVmFsdWUgPSB2YWx1ZSA8IDAgPyAtdmFsdWUgOiB2YWx1ZTtcclxuICAgICAgICB3aGlsZSAoYWJzb2x1dGVWYWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlbWFpbmRlciA9IGFic29sdXRlVmFsdWUgJSAzO1xyXG4gICAgICAgICAgICBhYnNvbHV0ZVZhbHVlID0gTWF0aC5mbG9vcihhYnNvbHV0ZVZhbHVlIC8gMyk7XHJcbiAgICAgICAgICAgIGlmIChyZW1haW5kZXIgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSAtMTtcclxuICAgICAgICAgICAgICAgIGFic29sdXRlVmFsdWUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cml0c1t0cml0cy5sZW5ndGhdID0gcmVtYWluZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzW2ldID0gLXRyaXRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHMobmV3IEludDhBcnJheSh0cml0cykpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgdHdvIHRyaXRzIHRvZ2V0aGVyLlxyXG4gICAgICogQHBhcmFtIGZpcnN0IFRoZSBmaXJzdCB0cml0LlxyXG4gICAgICogQHBhcmFtIHNlY29uZCBUaGUgc2Vjb25kIHRyaXQuXHJcbiAgICAgKiBAcmV0dXJuIE5ldyB0cml0IHdoaWNoIGlzIHRoZSBhZGRpdGlvbiBvZiB0aGUgYSArIGIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGQoZmlyc3QsIHNlY29uZCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShmaXJzdCwgVHJpdHMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgZmlyc3Qgc2hvdWxkIGJlIGEgdmFsaWQgVHJpdHMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2Vjb25kLCBUcml0cykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzZWNvbmRzIHNob3VsZCBiZSBhIHZhbGlkIFRyaXRzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IEludDhBcnJheShNYXRoLm1heChmaXJzdC5fdHJpdHMubGVuZ3RoLCBzZWNvbmQuX3RyaXRzLmxlbmd0aCkpO1xyXG4gICAgICAgIGxldCBjYXJyeSA9IDA7XHJcbiAgICAgICAgbGV0IGlBO1xyXG4gICAgICAgIGxldCBpQjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpQSA9IGkgPCBmaXJzdC5fdHJpdHMubGVuZ3RoID8gZmlyc3QuX3RyaXRzW2ldIDogMDtcclxuICAgICAgICAgICAgaUIgPSBpIDwgc2Vjb25kLl90cml0cy5sZW5ndGggPyBzZWNvbmQuX3RyaXRzW2ldIDogMDtcclxuICAgICAgICAgICAgY29uc3QgZkEgPSBUcml0cy5mdWxsQWRkKGlBLCBpQiwgY2FycnkpO1xyXG4gICAgICAgICAgICBvdXRbaV0gPSBmQVswXTtcclxuICAgICAgICAgICAgY2FycnkgPSBmQVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyaXRzLmZyb21BcnJheShvdXQpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgZnVsbEFkZChhLCBiLCBjKSB7XHJcbiAgICAgICAgY29uc3Qgc0EgPSBUcml0cy5zdW0oYSwgYik7XHJcbiAgICAgICAgY29uc3QgY0EgPSBUcml0cy5jb25zKGEsIGIpO1xyXG4gICAgICAgIGNvbnN0IGNCID0gVHJpdHMuY29ucyhzQSwgYyk7XHJcbiAgICAgICAgY29uc3QgY091dCA9IFRyaXRzLmFueShjQSwgY0IpO1xyXG4gICAgICAgIGNvbnN0IHNPVXQgPSBUcml0cy5zdW0oc0EsIGMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgSW50OEFycmF5KFtzT1V0LCBjT3V0XSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBzdW0oYSwgYikge1xyXG4gICAgICAgIGNvbnN0IHMgPSBhICsgYjtcclxuICAgICAgICBzd2l0Y2ggKHMpIHtcclxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIGNhc2UgLTI6IHJldHVybiAxO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBjb25zKGEsIGIpIHtcclxuICAgICAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBhbnkoYSwgYikge1xyXG4gICAgICAgIGNvbnN0IHMgPSBhICsgYjtcclxuICAgICAgICBpZiAocyA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHMgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIHRyaXRzIGFycmF5LlxyXG4gICAgICogQHJldHVybnMgQXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICB0b0FycmF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cml0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgdHJpdHMgYXJyYXkgYXMgYSBudW1iZXIgYXJyYXkuXHJcbiAgICAgKiBAcmV0dXJucyBBcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fdHJpdHMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRyaXRzIGFzIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIEluc3RhbmNlIG9mIFRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgbGV0IHRyeXRlcyA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90cml0cy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIHBvc3NpYmxlIHRyeXRlIHZhbHVlcyB0byBmaW5kIGNvcnJlY3QgdHJpdCByZXByZXNlbnRhdGlvblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRyeXRlc18xLlRyeXRlcy5BTFBIQUJFVC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRyaXRzLlRSWVRFU19UUklUU1tqXVswXSA9PT0gdGhpcy5fdHJpdHNbaV0gJiZcclxuICAgICAgICAgICAgICAgICAgICBUcml0cy5UUllURVNfVFJJVFNbal1bMV0gPT09IHRoaXMuX3RyaXRzW2kgKyAxXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFRyaXRzLlRSWVRFU19UUklUU1tqXVsyXSA9PT0gdGhpcy5fdHJpdHNbaSArIDJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5dGVzICs9IHRyeXRlc18xLlRyeXRlcy5BTFBIQUJFVC5jaGFyQXQoaik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdHJpdHMgYXMgYSBudW1iZXIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJpdHMgY29udmVydGVkIHRvIGEgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICB0b051bWJlcigpIHtcclxuICAgICAgICBsZXQgcmV0dXJuVmFsdWUgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl90cml0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHJldHVyblZhbHVlICogMyArIHRoaXMuX3RyaXRzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdoYXQgaXMgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBMZW5ndGggb2YgdGhlIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXRzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgc3ViIG9mIHRoZSB0cml0cy5cclxuICAgICAqIEBwYXJhbSBzdGFydCBUaGUgc3RhcnQgcG9zaXRpb24gdG8gZ2V0IHRoZSBzdWIuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHN1Yi5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cml0cyBzdWIuXHJcbiAgICAgKi9cclxuICAgIHN1YihzdGFydCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHN0YXJ0KSB8fCBzdGFydCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzdGFydCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IChzdGFydCArIGxlbmd0aCkgPiB0aGlzLl90cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHN0YXJ0ICsgbGVuZ3RoIG11c3QgPD0gJHt0aGlzLl90cml0cy5sZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUcml0cy5mcm9tQXJyYXkodGhpcy5fdHJpdHMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgbGVuZ3RoKSk7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblRyaXRzLlRSWVRFU19UUklUUyA9IFtcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDAsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDAsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAxLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAxLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAxLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgLTEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIC0xLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAtMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDAsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDAsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDAsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAxLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAxLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAxLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgLTEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAtMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIC0xLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDAsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAwLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMCwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAxLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgLTEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIC0xLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAtMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDAsIDBdKVxyXG5dO1xyXG5leHBvcnRzLlRyaXRzID0gVHJpdHM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISnBkSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5MGNtbDBjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNNRVZCUVhWRk8wRkJRM1pGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQmJVTkpMR1ZCUVdVN1NVRkRaaXhaUVVGdlFpeExRVUZuUWp0UlFVTm9ReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCWjBJN1VVRkRjRU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM3BETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVNN1VVRkRiRVVzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQlpUdFJRVU42UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNkME5CUVhkRExFTkJRVU1zUTBGQlF6dFJRVU5zUlN4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRV0U3VVVGRGJFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1pVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERKRFFVRXlReXhEUVVGRExFTkJRVU03VVVGRGNrVXNRMEZCUXp0UlFVTkVMRTFCUVUwc1dVRkJXU3hIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTjBReXhOUVVGTkxFdEJRVXNzUjBGQll5eEpRVUZKTEZOQlFWTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEZMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1dVRkJXU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUXpORExFMUJRVTBzUjBGQlJ5eEhRVUZITEdWQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNMVJDeExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE1VTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhFTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFXRTdVVUZEYkVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU1zUTBGQlF6dFJRVU4yUkN4RFFVRkRPMUZCUTBRc1RVRkJUU3hMUVVGTExFZEJRV0VzUlVGQlJTeERRVUZETzFGQlF6TkNMRWxCUVVrc1lVRkJZU3hIUVVGSExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZGTDBNc1QwRkJUeXhoUVVGaExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTTdXVUZEZGtJc1NVRkJTU3hUUVVGVExFZEJRVWNzWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTnNReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4aFFVRmhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRk9VTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJoQ0xGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRaaXhoUVVGaExFVkJRVVVzUTBGQlF6dFpRVU53UWl4RFFVRkRPMWxCUlVRc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkRjRU1zUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExb3NSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdaMEpCUTNCRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UWl4RFFVRkRPMUZCUTB3c1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6TkRMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCV1N4RlFVRkZMRTFCUVdFN1VVRkRla01zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEQkRRVUV3UXl4RFFVRkRMRU5CUVVNN1VVRkRjRVVzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzBRMEZCTkVNc1EwRkJReXhEUVVGRE8xRkJRM1JGTEVOQlFVTTdVVUZGUkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU12UlN4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFpDeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTlFMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJSVkFzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03V1VGRmJFTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVFTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVJDeE5RVUZOTEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRlRU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5tTEV0QlFVc3NSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFSXNRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTJoRExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZEYkVRc1RVRkJUU3hGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE0wSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVUlzVFVGQlRTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETjBJc1RVRkJUU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGREwwSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkZPVUlzVFVGQlRTeERRVUZETEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZGtNc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVE8xRkJRMjVETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRmFFSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5TTEV0QlFVc3NRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUWl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVJc1UwRkJVeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzUkNMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk03VVVGRGNFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVml4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMklzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRZaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk03VVVGRGJrTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZvUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFlpeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJZc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyUXNRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFlpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVDBGQlR6dFJRVU5XTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRM1pDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeGhRVUZoTzFGQlEyaENMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOdVF5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEVsQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWb1FpeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXp0WlFVTTNReXcyUlVGQk5rVTdXVUZETjBVc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhsUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8yZENRVU01UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNelF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHZRa0ZETDBNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyeEVMRTFCUVUwc1NVRkJTU3hsUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRGNFTXNTMEZCU3l4RFFVRkRPMmRDUVVOV0xFTkJRVU03V1VGRFRDeERRVUZETzFGQlEwd3NRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTNKRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzU1VGQlNTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlhCQ0xFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZETDBNc1YwRkJWeXhIUVVGSExGZEJRVmNzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU51UkN4RFFVRkRPMUZCUlVRc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUVUZCVFR0UlFVTlVMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTTVRaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeEhRVUZITEVOQlFVTXNTMEZCWVN4RlFVRkZMRTFCUVdNN1VVRkRjRU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhEUVVGRE8xRkJRek5FTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpSU3hOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3NFFrRkJPRUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRelZGTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVVzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRja1VzUTBGQlF6czdRVUYyVVVRc1pVRkJaVHRCUVVOVExHdENRVUZaTEVkQlFXZENPMGxCUTJoRUxFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6RkNMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZUVJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE0wSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNeFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETVVJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXhRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPME5CUXpWQ0xFTkJRVU03UVVFNVFrNHNjMEpCTUZGREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvdHJpdHMudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG4vKipcclxuICogU2hhMyBpbXBsZW1lbnRhdGlvbi5cclxuICovXHJcbmNsYXNzIFNoYTMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgU0hBMy5cclxuICAgICAqIEBwYXJhbSBiaXRzIFRoZSBudW1iZXIgb2YgaW5wdXQgYml0cy5cclxuICAgICAqIEBwYXJhbSBwYWRkaW5nIFRoZSBwYWRkaW5nIHRvIHVzZS5cclxuICAgICAqIEBwYXJhbSBvdXRwdXRCaXRzIFRoZSBudW1iZXIgb2Ygb3V0cHV0IGJpdHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGJpdHMsIHBhZGRpbmcsIG91dHB1dEJpdHMpIHtcclxuICAgICAgICB0aGlzLl9wYWRkaW5nID0gcGFkZGluZztcclxuICAgICAgICB0aGlzLl9vdXRwdXRCaXRzID0gb3V0cHV0Qml0cztcclxuICAgICAgICB0aGlzLl9ibG9ja0NvdW50ID0gKDE2MDAgLSAoYml0cyA8PCAxKSkgPj4gNTtcclxuICAgICAgICB0aGlzLl9ieXRlQ291bnQgPSB0aGlzLl9ibG9ja0NvdW50IDw8IDI7XHJcbiAgICAgICAgdGhpcy5fb3V0cHV0QmxvY2tzID0gb3V0cHV0Qml0cyA+PiA1O1xyXG4gICAgICAgIHRoaXMuX2V4dHJhQnl0ZXMgPSAob3V0cHV0Qml0cyAmIDMxKSA+PiAzO1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdGhlIGRpZ2VzdC5cclxuICAgICAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzZXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2Jsb2NrID0gMDtcclxuICAgICAgICB0aGlzLl9zdGFydCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2Jsb2NrQ291bnQgKyAxKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ldyBVaW50MzJBcnJheSg1MCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgZGlnZXN0LlxyXG4gICAgICogQHBhcmFtIGlucHV0IEFycmF5IG9mIGRhdGEgdG8gdXNlIGluIHRoZSB1cGRhdGUuXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZShpbnB1dCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShpbnB1dCwgQXJyYXlCdWZmZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiSW5wdXQgaXMgbm90IG9mIHR5cGUgQXJyYXlCdWZmZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgVWludDhBcnJheShpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbWVzc2FnZS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzWzBdID0gdGhpcy5fYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgdGhpcy5fYmxvY2tDb3VudCArIDE7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tpXSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChpID0gdGhpcy5fc3RhcnQ7IGluZGV4IDwgbGVuZ3RoICYmIGkgPCB0aGlzLl9ieXRlQ291bnQ7ICsraW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tpID4+IDJdIHw9IG1lc3NhZ2VbaW5kZXhdIDw8IFNoYTMuU0hJRlRbaSsrICYgM107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbGFzdEJ5dGVJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIGlmIChpID49IHRoaXMuX2J5dGVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQgPSBpIC0gdGhpcy5fYnl0ZUNvdW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2sgPSB0aGlzLl9ibG9ja3NbdGhpcy5fYmxvY2tDb3VudF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fYmxvY2tDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVbaV0gXj0gdGhpcy5fYmxvY2tzW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZWNjYWtQZXJtdXRhdGlvbih0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEZpbmFsaXplIGFuZCByZXR1cm4gdGhlIGhhc2ggZm9yIHRoZSBkaWdlc3QsIHdpbGwgYWxzbyByZXNldCB0aGUgc3RhdGUuXHJcbiAgICAgKiBAcmV0dXJuIEFycmF5IGJ1ZmZlciBjb250YWluaW5nIHRoZSBkaWdlc3QuXHJcbiAgICAgKi9cclxuICAgIGRpZ2VzdCgpIHtcclxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICBjb25zdCBieXRlcyA9IHRoaXMuX291dHB1dEJpdHMgPj4gMztcclxuICAgICAgICBsZXQgYnVmZmVyO1xyXG4gICAgICAgIGlmICh0aGlzLl9leHRyYUJ5dGVzKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcigodGhpcy5fb3V0cHV0QmxvY2tzICsgMSkgPDwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcnJheSA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xyXG4gICAgICAgIHdoaWxlIChqIDwgdGhpcy5fb3V0cHV0QmxvY2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9ibG9ja0NvdW50ICYmIGogPCB0aGlzLl9vdXRwdXRCbG9ja3M7ICsraSwgKytqKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheVtqXSA9IHRoaXMuX3N0YXRlW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9leHRyYUJ5dGVzKSB7XHJcbiAgICAgICAgICAgIGFycmF5W2ldID0gdGhpcy5fc3RhdGVbaV07XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IGJ1ZmZlci5zbGljZSgwLCBieXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBmaW5hbGl6ZSgpIHtcclxuICAgICAgICBsZXQgaSA9IHRoaXMuX2xhc3RCeXRlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2kgPj4gMl0gfD0gdGhpcy5fcGFkZGluZ1tpICYgM107XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RCeXRlSW5kZXggPT09IHRoaXMuX2J5dGVDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9ja3NbMF0gPSB0aGlzLl9ibG9ja3NbdGhpcy5fYmxvY2tDb3VudF07XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCB0aGlzLl9ibG9ja0NvdW50ICsgMTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbaV0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja0NvdW50IC0gMV0gfD0gMHg4MDAwMDAwMDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fYmxvY2tDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlW2ldIF49IHRoaXMuX2Jsb2Nrc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rZWNjYWtQZXJtdXRhdGlvbih0aGlzLl9zdGF0ZSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGtlY2Nha1Blcm11dGF0aW9uKHMpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvblxyXG4gICAgICAgIGxldCBoLCBsLCBuLCBjMCwgYzEsIGMyLCBjMywgYzQsIGM1LCBjNiwgYzcsIGM4LCBjOSwgYjAsIGIxLCBiMiwgYjMsIGI0LCBiNSwgYjYsIGI3LCBiOCwgYjksIGIxMCwgYjExLCBiMTIsIGIxMywgYjE0LCBiMTUsIGIxNiwgYjE3LCBiMTgsIGIxOSwgYjIwLCBiMjEsIGIyMiwgYjIzLCBiMjQsIGIyNSwgYjI2LCBiMjcsIGIyOCwgYjI5LCBiMzAsIGIzMSwgYjMyLCBiMzMsIGIzNCwgYjM1LCBiMzYsIGIzNywgYjM4LCBiMzksIGI0MCwgYjQxLCBiNDIsIGI0MywgYjQ0LCBiNDUsIGI0NiwgYjQ3LCBiNDgsIGI0OTtcclxuICAgICAgICBmb3IgKG4gPSAwOyBuIDwgNDg7IG4gKz0gMikge1xyXG4gICAgICAgICAgICBjMCA9IHNbMF0gXiBzWzEwXSBeIHNbMjBdIF4gc1szMF0gXiBzWzQwXTtcclxuICAgICAgICAgICAgYzEgPSBzWzFdIF4gc1sxMV0gXiBzWzIxXSBeIHNbMzFdIF4gc1s0MV07XHJcbiAgICAgICAgICAgIGMyID0gc1syXSBeIHNbMTJdIF4gc1syMl0gXiBzWzMyXSBeIHNbNDJdO1xyXG4gICAgICAgICAgICBjMyA9IHNbM10gXiBzWzEzXSBeIHNbMjNdIF4gc1szM10gXiBzWzQzXTtcclxuICAgICAgICAgICAgYzQgPSBzWzRdIF4gc1sxNF0gXiBzWzI0XSBeIHNbMzRdIF4gc1s0NF07XHJcbiAgICAgICAgICAgIGM1ID0gc1s1XSBeIHNbMTVdIF4gc1syNV0gXiBzWzM1XSBeIHNbNDVdO1xyXG4gICAgICAgICAgICBjNiA9IHNbNl0gXiBzWzE2XSBeIHNbMjZdIF4gc1szNl0gXiBzWzQ2XTtcclxuICAgICAgICAgICAgYzcgPSBzWzddIF4gc1sxN10gXiBzWzI3XSBeIHNbMzddIF4gc1s0N107XHJcbiAgICAgICAgICAgIGM4ID0gc1s4XSBeIHNbMThdIF4gc1syOF0gXiBzWzM4XSBeIHNbNDhdO1xyXG4gICAgICAgICAgICBjOSA9IHNbOV0gXiBzWzE5XSBeIHNbMjldIF4gc1szOV0gXiBzWzQ5XTtcclxuICAgICAgICAgICAgaCA9IGM4IF4gKChjMiA8PCAxKSB8IChjMyA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGM5IF4gKChjMyA8PCAxKSB8IChjMiA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1swXSBePSBoO1xyXG4gICAgICAgICAgICBzWzFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDFdIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjMCBeICgoYzQgPDwgMSkgfCAoYzUgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjMSBeICgoYzUgPDwgMSkgfCAoYzQgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbMl0gXj0gaDtcclxuICAgICAgICAgICAgc1szXSBePSBsO1xyXG4gICAgICAgICAgICBzWzEyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzEzXSBePSBsO1xyXG4gICAgICAgICAgICBzWzIyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzIzXSBePSBsO1xyXG4gICAgICAgICAgICBzWzMyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzMzXSBePSBsO1xyXG4gICAgICAgICAgICBzWzQyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzQzXSBePSBsO1xyXG4gICAgICAgICAgICBoID0gYzIgXiAoKGM2IDw8IDEpIHwgKGM3ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzMgXiAoKGM3IDw8IDEpIHwgKGM2ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzRdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNV0gXj0gbDtcclxuICAgICAgICAgICAgc1sxNF0gXj0gaDtcclxuICAgICAgICAgICAgc1sxNV0gXj0gbDtcclxuICAgICAgICAgICAgc1syNF0gXj0gaDtcclxuICAgICAgICAgICAgc1syNV0gXj0gbDtcclxuICAgICAgICAgICAgc1szNF0gXj0gaDtcclxuICAgICAgICAgICAgc1szNV0gXj0gbDtcclxuICAgICAgICAgICAgc1s0NF0gXj0gaDtcclxuICAgICAgICAgICAgc1s0NV0gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGM0IF4gKChjOCA8PCAxKSB8IChjOSA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGM1IF4gKChjOSA8PCAxKSB8IChjOCA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1s2XSBePSBoO1xyXG4gICAgICAgICAgICBzWzddIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTddIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjddIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzddIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDddIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjNiBeICgoYzAgPDwgMSkgfCAoYzEgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjNyBeICgoYzEgPDwgMSkgfCAoYzAgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbOF0gXj0gaDtcclxuICAgICAgICAgICAgc1s5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzE4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzE5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzI4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzI5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzM4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzM5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzQ4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzQ5XSBePSBsO1xyXG4gICAgICAgICAgICBiMCA9IHNbMF07XHJcbiAgICAgICAgICAgIGIxID0gc1sxXTtcclxuICAgICAgICAgICAgYjMyID0gKHNbMTFdIDw8IDQpIHwgKHNbMTBdID4+PiAyOCk7XHJcbiAgICAgICAgICAgIGIzMyA9IChzWzEwXSA8PCA0KSB8IChzWzExXSA+Pj4gMjgpO1xyXG4gICAgICAgICAgICBiMTQgPSAoc1syMF0gPDwgMykgfCAoc1syMV0gPj4+IDI5KTtcclxuICAgICAgICAgICAgYjE1ID0gKHNbMjFdIDw8IDMpIHwgKHNbMjBdID4+PiAyOSk7XHJcbiAgICAgICAgICAgIGI0NiA9IChzWzMxXSA8PCA5KSB8IChzWzMwXSA+Pj4gMjMpO1xyXG4gICAgICAgICAgICBiNDcgPSAoc1szMF0gPDwgOSkgfCAoc1szMV0gPj4+IDIzKTtcclxuICAgICAgICAgICAgYjI4ID0gKHNbNDBdIDw8IDE4KSB8IChzWzQxXSA+Pj4gMTQpO1xyXG4gICAgICAgICAgICBiMjkgPSAoc1s0MV0gPDwgMTgpIHwgKHNbNDBdID4+PiAxNCk7XHJcbiAgICAgICAgICAgIGIyMCA9IChzWzJdIDw8IDEpIHwgKHNbM10gPj4+IDMxKTtcclxuICAgICAgICAgICAgYjIxID0gKHNbM10gPDwgMSkgfCAoc1syXSA+Pj4gMzEpO1xyXG4gICAgICAgICAgICBiMiA9IChzWzEzXSA8PCAxMikgfCAoc1sxMl0gPj4+IDIwKTtcclxuICAgICAgICAgICAgYjMgPSAoc1sxMl0gPDwgMTIpIHwgKHNbMTNdID4+PiAyMCk7XHJcbiAgICAgICAgICAgIGIzNCA9IChzWzIyXSA8PCAxMCkgfCAoc1syM10gPj4+IDIyKTtcclxuICAgICAgICAgICAgYjM1ID0gKHNbMjNdIDw8IDEwKSB8IChzWzIyXSA+Pj4gMjIpO1xyXG4gICAgICAgICAgICBiMTYgPSAoc1szM10gPDwgMTMpIHwgKHNbMzJdID4+PiAxOSk7XHJcbiAgICAgICAgICAgIGIxNyA9IChzWzMyXSA8PCAxMykgfCAoc1szM10gPj4+IDE5KTtcclxuICAgICAgICAgICAgYjQ4ID0gKHNbNDJdIDw8IDIpIHwgKHNbNDNdID4+PiAzMCk7XHJcbiAgICAgICAgICAgIGI0OSA9IChzWzQzXSA8PCAyKSB8IChzWzQyXSA+Pj4gMzApO1xyXG4gICAgICAgICAgICBiNDAgPSAoc1s1XSA8PCAzMCkgfCAoc1s0XSA+Pj4gMik7XHJcbiAgICAgICAgICAgIGI0MSA9IChzWzRdIDw8IDMwKSB8IChzWzVdID4+PiAyKTtcclxuICAgICAgICAgICAgYjIyID0gKHNbMTRdIDw8IDYpIHwgKHNbMTVdID4+PiAyNik7XHJcbiAgICAgICAgICAgIGIyMyA9IChzWzE1XSA8PCA2KSB8IChzWzE0XSA+Pj4gMjYpO1xyXG4gICAgICAgICAgICBiNCA9IChzWzI1XSA8PCAxMSkgfCAoc1syNF0gPj4+IDIxKTtcclxuICAgICAgICAgICAgYjUgPSAoc1syNF0gPDwgMTEpIHwgKHNbMjVdID4+PiAyMSk7XHJcbiAgICAgICAgICAgIGIzNiA9IChzWzM0XSA8PCAxNSkgfCAoc1szNV0gPj4+IDE3KTtcclxuICAgICAgICAgICAgYjM3ID0gKHNbMzVdIDw8IDE1KSB8IChzWzM0XSA+Pj4gMTcpO1xyXG4gICAgICAgICAgICBiMTggPSAoc1s0NV0gPDwgMjkpIHwgKHNbNDRdID4+PiAzKTtcclxuICAgICAgICAgICAgYjE5ID0gKHNbNDRdIDw8IDI5KSB8IChzWzQ1XSA+Pj4gMyk7XHJcbiAgICAgICAgICAgIGIxMCA9IChzWzZdIDw8IDI4KSB8IChzWzddID4+PiA0KTtcclxuICAgICAgICAgICAgYjExID0gKHNbN10gPDwgMjgpIHwgKHNbNl0gPj4+IDQpO1xyXG4gICAgICAgICAgICBiNDIgPSAoc1sxN10gPDwgMjMpIHwgKHNbMTZdID4+PiA5KTtcclxuICAgICAgICAgICAgYjQzID0gKHNbMTZdIDw8IDIzKSB8IChzWzE3XSA+Pj4gOSk7XHJcbiAgICAgICAgICAgIGIyNCA9IChzWzI2XSA8PCAyNSkgfCAoc1syN10gPj4+IDcpO1xyXG4gICAgICAgICAgICBiMjUgPSAoc1syN10gPDwgMjUpIHwgKHNbMjZdID4+PiA3KTtcclxuICAgICAgICAgICAgYjYgPSAoc1szNl0gPDwgMjEpIHwgKHNbMzddID4+PiAxMSk7XHJcbiAgICAgICAgICAgIGI3ID0gKHNbMzddIDw8IDIxKSB8IChzWzM2XSA+Pj4gMTEpO1xyXG4gICAgICAgICAgICBiMzggPSAoc1s0N10gPDwgMjQpIHwgKHNbNDZdID4+PiA4KTtcclxuICAgICAgICAgICAgYjM5ID0gKHNbNDZdIDw8IDI0KSB8IChzWzQ3XSA+Pj4gOCk7XHJcbiAgICAgICAgICAgIGIzMCA9IChzWzhdIDw8IDI3KSB8IChzWzldID4+PiA1KTtcclxuICAgICAgICAgICAgYjMxID0gKHNbOV0gPDwgMjcpIHwgKHNbOF0gPj4+IDUpO1xyXG4gICAgICAgICAgICBiMTIgPSAoc1sxOF0gPDwgMjApIHwgKHNbMTldID4+PiAxMik7XHJcbiAgICAgICAgICAgIGIxMyA9IChzWzE5XSA8PCAyMCkgfCAoc1sxOF0gPj4+IDEyKTtcclxuICAgICAgICAgICAgYjQ0ID0gKHNbMjldIDw8IDcpIHwgKHNbMjhdID4+PiAyNSk7XHJcbiAgICAgICAgICAgIGI0NSA9IChzWzI4XSA8PCA3KSB8IChzWzI5XSA+Pj4gMjUpO1xyXG4gICAgICAgICAgICBiMjYgPSAoc1szOF0gPDwgOCkgfCAoc1szOV0gPj4+IDI0KTtcclxuICAgICAgICAgICAgYjI3ID0gKHNbMzldIDw8IDgpIHwgKHNbMzhdID4+PiAyNCk7XHJcbiAgICAgICAgICAgIGI4ID0gKHNbNDhdIDw8IDE0KSB8IChzWzQ5XSA+Pj4gMTgpO1xyXG4gICAgICAgICAgICBiOSA9IChzWzQ5XSA8PCAxNCkgfCAoc1s0OF0gPj4+IDE4KTtcclxuICAgICAgICAgICAgc1swXSA9IGIwIF4gKH5iMiAmIGI0KTtcclxuICAgICAgICAgICAgc1sxXSA9IGIxIF4gKH5iMyAmIGI1KTtcclxuICAgICAgICAgICAgc1sxMF0gPSBiMTAgXiAofmIxMiAmIGIxNCk7XHJcbiAgICAgICAgICAgIHNbMTFdID0gYjExIF4gKH5iMTMgJiBiMTUpO1xyXG4gICAgICAgICAgICBzWzIwXSA9IGIyMCBeICh+YjIyICYgYjI0KTtcclxuICAgICAgICAgICAgc1syMV0gPSBiMjEgXiAofmIyMyAmIGIyNSk7XHJcbiAgICAgICAgICAgIHNbMzBdID0gYjMwIF4gKH5iMzIgJiBiMzQpO1xyXG4gICAgICAgICAgICBzWzMxXSA9IGIzMSBeICh+YjMzICYgYjM1KTtcclxuICAgICAgICAgICAgc1s0MF0gPSBiNDAgXiAofmI0MiAmIGI0NCk7XHJcbiAgICAgICAgICAgIHNbNDFdID0gYjQxIF4gKH5iNDMgJiBiNDUpO1xyXG4gICAgICAgICAgICBzWzJdID0gYjIgXiAofmI0ICYgYjYpO1xyXG4gICAgICAgICAgICBzWzNdID0gYjMgXiAofmI1ICYgYjcpO1xyXG4gICAgICAgICAgICBzWzEyXSA9IGIxMiBeICh+YjE0ICYgYjE2KTtcclxuICAgICAgICAgICAgc1sxM10gPSBiMTMgXiAofmIxNSAmIGIxNyk7XHJcbiAgICAgICAgICAgIHNbMjJdID0gYjIyIF4gKH5iMjQgJiBiMjYpO1xyXG4gICAgICAgICAgICBzWzIzXSA9IGIyMyBeICh+YjI1ICYgYjI3KTtcclxuICAgICAgICAgICAgc1szMl0gPSBiMzIgXiAofmIzNCAmIGIzNik7XHJcbiAgICAgICAgICAgIHNbMzNdID0gYjMzIF4gKH5iMzUgJiBiMzcpO1xyXG4gICAgICAgICAgICBzWzQyXSA9IGI0MiBeICh+YjQ0ICYgYjQ2KTtcclxuICAgICAgICAgICAgc1s0M10gPSBiNDMgXiAofmI0NSAmIGI0Nyk7XHJcbiAgICAgICAgICAgIHNbNF0gPSBiNCBeICh+YjYgJiBiOCk7XHJcbiAgICAgICAgICAgIHNbNV0gPSBiNSBeICh+YjcgJiBiOSk7XHJcbiAgICAgICAgICAgIHNbMTRdID0gYjE0IF4gKH5iMTYgJiBiMTgpO1xyXG4gICAgICAgICAgICBzWzE1XSA9IGIxNSBeICh+YjE3ICYgYjE5KTtcclxuICAgICAgICAgICAgc1syNF0gPSBiMjQgXiAofmIyNiAmIGIyOCk7XHJcbiAgICAgICAgICAgIHNbMjVdID0gYjI1IF4gKH5iMjcgJiBiMjkpO1xyXG4gICAgICAgICAgICBzWzM0XSA9IGIzNCBeICh+YjM2ICYgYjM4KTtcclxuICAgICAgICAgICAgc1szNV0gPSBiMzUgXiAofmIzNyAmIGIzOSk7XHJcbiAgICAgICAgICAgIHNbNDRdID0gYjQ0IF4gKH5iNDYgJiBiNDgpO1xyXG4gICAgICAgICAgICBzWzQ1XSA9IGI0NSBeICh+YjQ3ICYgYjQ5KTtcclxuICAgICAgICAgICAgc1s2XSA9IGI2IF4gKH5iOCAmIGIwKTtcclxuICAgICAgICAgICAgc1s3XSA9IGI3IF4gKH5iOSAmIGIxKTtcclxuICAgICAgICAgICAgc1sxNl0gPSBiMTYgXiAofmIxOCAmIGIxMCk7XHJcbiAgICAgICAgICAgIHNbMTddID0gYjE3IF4gKH5iMTkgJiBiMTEpO1xyXG4gICAgICAgICAgICBzWzI2XSA9IGIyNiBeICh+YjI4ICYgYjIwKTtcclxuICAgICAgICAgICAgc1syN10gPSBiMjcgXiAofmIyOSAmIGIyMSk7XHJcbiAgICAgICAgICAgIHNbMzZdID0gYjM2IF4gKH5iMzggJiBiMzApO1xyXG4gICAgICAgICAgICBzWzM3XSA9IGIzNyBeICh+YjM5ICYgYjMxKTtcclxuICAgICAgICAgICAgc1s0Nl0gPSBiNDYgXiAofmI0OCAmIGI0MCk7XHJcbiAgICAgICAgICAgIHNbNDddID0gYjQ3IF4gKH5iNDkgJiBiNDEpO1xyXG4gICAgICAgICAgICBzWzhdID0gYjggXiAofmIwICYgYjIpO1xyXG4gICAgICAgICAgICBzWzldID0gYjkgXiAofmIxICYgYjMpO1xyXG4gICAgICAgICAgICBzWzE4XSA9IGIxOCBeICh+YjEwICYgYjEyKTtcclxuICAgICAgICAgICAgc1sxOV0gPSBiMTkgXiAofmIxMSAmIGIxMyk7XHJcbiAgICAgICAgICAgIHNbMjhdID0gYjI4IF4gKH5iMjAgJiBiMjIpO1xyXG4gICAgICAgICAgICBzWzI5XSA9IGIyOSBeICh+YjIxICYgYjIzKTtcclxuICAgICAgICAgICAgc1szOF0gPSBiMzggXiAofmIzMCAmIGIzMik7XHJcbiAgICAgICAgICAgIHNbMzldID0gYjM5IF4gKH5iMzEgJiBiMzMpO1xyXG4gICAgICAgICAgICBzWzQ4XSA9IGI0OCBeICh+YjQwICYgYjQyKTtcclxuICAgICAgICAgICAgc1s0OV0gPSBiNDkgXiAofmI0MSAmIGI0Myk7XHJcbiAgICAgICAgICAgIHNbMF0gXj0gU2hhMy5ST1VORF9DT05TVEFOVFNbbl07XHJcbiAgICAgICAgICAgIHNbMV0gXj0gU2hhMy5ST1VORF9DT05TVEFOVFNbbiArIDFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiBQYWRkaW5nIHRvIHVzZSBmb3IgS2VjY2FrICovXHJcblNoYTMuS0VDQ0FLX1BBRERJTkcgPSBuZXcgVWludDMyQXJyYXkoWzEsIDI1NiwgNjU1MzYsIDE2Nzc3MjE2XSk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5TaGEzLlNISUZUID0gbmV3IFVpbnQ4QXJyYXkoWzAsIDgsIDE2LCAyNF0pO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuU2hhMy5ST1VORF9DT05TVEFOVFMgPSBuZXcgVWludDMyQXJyYXkoWzEsIDAsIDMyODk4LCAwLCAzMjkwNiwgMjE0NzQ4MzY0OCwgMjE0NzUxNjQxNiwgMjE0NzQ4MzY0OCwgMzI5MDcsIDAsIDIxNDc0ODM2NDksXHJcbiAgICAwLCAyMTQ3NTE2NTQ1LCAyMTQ3NDgzNjQ4LCAzMjc3NywgMjE0NzQ4MzY0OCwgMTM4LCAwLCAxMzYsIDAsIDIxNDc1MTY0MjUsIDAsXHJcbiAgICAyMTQ3NDgzNjU4LCAwLCAyMTQ3NTE2NTU1LCAwLCAxMzksIDIxNDc0ODM2NDgsIDMyOTA1LCAyMTQ3NDgzNjQ4LCAzMjc3MSxcclxuICAgIDIxNDc0ODM2NDgsIDMyNzcwLCAyMTQ3NDgzNjQ4LCAxMjgsIDIxNDc0ODM2NDgsIDMyNzc4LCAwLCAyMTQ3NDgzNjU4LCAyMTQ3NDgzNjQ4LFxyXG4gICAgMjE0NzUxNjU0NSwgMjE0NzQ4MzY0OCwgMzI4OTYsIDIxNDc0ODM2NDgsIDIxNDc0ODM2NDksIDAsIDIxNDc1MTY0MjQsIDIxNDc0ODM2NDhdKTtcclxuZXhwb3J0cy5TaGEzID0gU2hhMztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJoaE15NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a2FXZGxjM1J6TDNOb1lUTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3h6UkVGQmJVUTdRVUZGYmtRN08wZEJSVWM3UVVGRFNEdEpRWEZEU1RzN096czdUMEZMUnp0SlFVTklMRmxCUVZrc1NVRkJXU3hGUVVGRkxFOUJRVzlDTEVWQlFVVXNWVUZCYTBJN1VVRkRPVVFzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNN1VVRkRlRUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRPVUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzaERMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzVlVGQlZTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnlReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNWVUZCVlN4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVVV4UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzUkRMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJhMEk3VVVGRE5VSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VVVGRE9VUXNRMEZCUXp0UlFVTkVMRTFCUVUwc1QwRkJUeXhIUVVGbExFbEJRVWtzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTJ4RUxFMUJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRPVUlzU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRlRpeFBRVUZQTEV0QlFVc3NSMEZCUnl4TlFVRk5MRVZCUVVVc1EwRkJRenRaUVVOd1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEWkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dG5Ra0ZEY0VJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8yZENRVU01UWl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRPMjlDUVVONFF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1EwRkJRenRaUVVOTUxFTkJRVU03V1VGRFJDeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRMjVGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhGTEVOQlFVTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU40UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1pDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTTdaMEpCUTJ4RExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdaMEpCUXpkRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenR2UWtGRGNFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU4wUXl4RFFVRkRPMmRDUVVORUxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdaMEpCUTNCRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUTNaQ0xFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRTaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTndRaXhEUVVGRE8xRkJRMHdzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTzFGQlExUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSV2hDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOV0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTldMRTFCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNCRExFbEJRVWtzVFVGQlRTeERRVUZETzFGQlExZ3NSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtJc1RVRkJUU3hIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEU2l4TlFVRk5MRWRCUVVjc1NVRkJTU3hYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEY0VNc1EwRkJRenRSUVVORUxFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM1JETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVVzUTBGQlF6dFpRVU0xUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdaMEpCUTI1RkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bENMRU5CUVVNN1VVRkRUQ3hEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrSXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVUlzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEzQkRMRU5CUVVNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZGWWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1VVRkJVVHRSUVVOYUxFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUzBGQlN5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRMnBFTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdaMEpCUTNoRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM2hDTEVOQlFVTTdVVUZEVEN4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxGVkJRVlVzUTBGQlF6dFJRVU5xUkN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdXVUZEY0VNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzUkRMRU5CUVVNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzYVVKQlFXbENMRU5CUVVNc1EwRkJZenRSUVVOd1F5eDNSRUZCZDBRN1VVRkRlRVFzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJReTlETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVU01UlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRemxGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRSUVVOdVJpeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8xbEJRM3BDTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlJURkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFZc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5XTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFZc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExWXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5XTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlJWZ3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5XTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFZpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzSkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYkVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzSkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVVndReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJSVE5DTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRReXhEUVVGRE8wbEJRMHdzUTBGQlF6czdRVUZvVmtRc0swSkJRU3RDTzBGQlExSXNiVUpCUVdNc1IwRkJaMElzU1VGQlNTeFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJoSExHVkJRV1U3UVVGRFV5eFZRVUZMTEVkQlFXVXNTVUZCU1N4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRek5GTEdWQlFXVTdRVUZEVXl4dlFrRkJaU3hIUVVGblFpeEpRVUZKTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hWUVVGVk8wbEJRMjVLTEVOQlFVTXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEZWQlFWVXNSVUZCUlN4RFFVRkRPMGxCUXpORkxGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzVlVGQlZTeEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1MwRkJTenRKUVVOMlJTeFZRVUZWTEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hIUVVGSExFVkJRVVVzVlVGQlZTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRGFFWXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZXTTBZc2IwSkJhMVpESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGlnZXN0cy9zaGEzLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBqc29uSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9qc29uSGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIEEgY29yZSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIENvcmVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIENvcmVFcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuYWRkaXRpb25hbCA9IGFkZGl0aW9uYWwgPyBhZGRpdGlvbmFsIDoge307XHJcbiAgICAgICAgdGhpcy5pbm5lckVycm9yID0gaW5uZXJFcnJvcjtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiQ29yZVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhbiBvYmplY3QgY291bGQgYmUgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2sgaWYgaXQgaXMgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIElmIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFcnJvcihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgXCJtZXNzYWdlXCIgaW4gb2JqICYmIFwiYWRkaXRpb25hbFwiIGluIG9iajtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IHRoZSBlcnJvciB0byBhIHJlYWRhYmxlIHZlcnNpb24uXHJcbiAgICAgKi9cclxuICAgIGZvcm1hdCgpIHtcclxuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMuZG9tYWluKSkge1xyXG4gICAgICAgICAgICBvdXQgKz0gYCR7dGhpcy5kb21haW59OiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMubWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMubWVzc2FnZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5hZGRpdGlvbmFsKTtcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvdXQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdXQgKz0gYFxcdCR7a2V5fTogJHtqc29uSGVscGVyXzEuSnNvbkhlbHBlci5zdHJpbmdpZnkodGhpcy5hZGRpdGlvbmFsW2tleV0pfVxcbmA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29yZUVycm9yID0gQ29yZUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl5WlVWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDJOdmNtVkZjbkp2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYzBSQlFXMUVPMEZCUTI1RUxEQkVRVUYxUkR0QlFVVjJSRHM3UjBGRlJ6dEJRVU5JTEdWQlFYVkNMRk5CUVZFc1MwRkJTenRKUVdkQ2FFTTdPenM3TzA5QlMwYzdTVUZEU0N4WlFVRlpMRTlCUVdVc1JVRkJSU3hWUVVGclF5eEZRVUZGTEZWQlFXdENPMUZCUXk5RkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTm1MRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFJRVU12UXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExGVkJRVlVzUTBGQlF6dFJRVU0zUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlVUdFJRVU14UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhMUVVGTExGTkJRVk1zU1VGQlNTeEhRVUZITEV0QlFVc3NTVUZCU1N4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzU1VGQlNTeFRRVUZUTEVsQlFVa3NSMEZCUnl4SlFVRkpMRmxCUVZrc1NVRkJTU3hIUVVGSExFTkJRVU03U1VGRGJrZ3NRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzVFVGQlRUdFJRVU5VTEVsQlFVa3NSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWaUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEhRVUZITEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU03VVVGRE9VSXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBReXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkROMElzUTBGQlF6dFJRVVZFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpGRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBDTEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNN1dVRkRhRUlzUTBGQlF6dFpRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlEyWXNSMEZCUnl4SlFVRkpMRXRCUVVzc1IwRkJSeXhMUVVGTExIVkNRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUTNaRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlExQXNRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZETzBOQlEwbzdRVUV2UkVRc09FSkJLMFJESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZXJyb3IvY29yZUVycm9yLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU3RyaW5nIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgU3RyaW5nSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgc3RyaW5neW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcgdGhhdCBpcyBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG5vIGVtcHR5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHN0cmluZyBhbGwgQVNDSUkgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gdGVzdCBpZiBpcyBpcyBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbGwgQVNDSUkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FzY2lpKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IC9eW1xceDAwLVxceEZGXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlIG5vbiBBU0NJSSBjaGFyYWN0ZXJzIHdpdGggY29udHJvbCBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdmFsdWUgdG8gZXNjYXBlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGVzY2FwZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZW5jb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1tcXHUwMDdGLVxcdUZGRkZdL2csIChjaHIpID0+IGBcXFxcdSR7KGAwMDAwJHtjaHIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNil9YCkuc3Vic3RyKC00KX1gKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlIGNvbnRyb2wgY2hhcmFjdGVycyB0byBBU0NJSS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5jb2RlZCBzdHJpbmcgdG8gY29udmVydCBiYWNrIHRvIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRlY29kZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1xcXFx1KFtcXGRcXHddezR9KS9naSwgKG1hdGNoLCBncnApID0+IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZ3JwLCAxNikpKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0cmluZ0hlbHBlciA9IFN0cmluZ0hlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSeWFXNW5TR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YzNSeWFXNW5TR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzYVVKQlFXbENMRU5CUVVNN1NVRkRPVVVzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVN1VVRkROVUlzVFVGQlRTeERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNdlJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJZVHRSUVVNdlFpeE5RVUZOTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFXRTdVVUZEZEVNc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRKUVVNdlNpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1MwRkJZVHRSUVVOMFF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU5vU2l4RFFVRkRPME5CUTBvN1FVRXZRMFFzYjBOQkswTkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL3N0cmluZ0hlbHBlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgdHlwZXMuXHJcbiAqIEB0eXBlcGFyYW0gVCBUaGUgZ2VuZXJpYyB0eXBlIGZvciB0aGUgb2JqZWN0IHR5cGVzIGluIHRoZSBmYWN0b3J5LlxyXG4gKi9cclxuY2xhc3MgRmFjdG9yeUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyogQGludGVybmFsICovXHJcbiAgICAgICAgdGhpcy5fdHlwZXMgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgdHlwZSB3aXRoIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gcmVnaXN0ZXIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZUNvbnN0cnVjdG9yIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKG5hbWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gPSB0eXBlQ29uc3RydWN0b3I7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXIgYSB0eXBlIGZyb20gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byB1bnJlZ2lzdGVyLlxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKG5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgZmFjdG9yeSBjb250YWluIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIGV4aXN0cyhuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gY3JlYXRlLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQW55IHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBpbnN0YW5jZSBvZiB0aGUgdHlwZSBpZiBpdCBleGlzdHMsIG9yIHVuZGVmaW5lZCBpZiBpdCBkb2VzIG5vdC5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKG5hbWUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuX3R5cGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5fdHlwZXNbbmFtZV0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZhY3RvcnlCYXNlID0gRmFjdG9yeUJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptRmpkRzl5ZVVKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwyWmhZM1J2Y25sQ1lYTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTRHRKUVVGQk8xRkJRMGtzWlVGQlpUdFJRVU5GTEZkQlFVMHNSMEZCT0VNc1JVRkJSU3hEUVVGRE8wbEJOa00xUlN4RFFVRkRPMGxCTTBOSE96czdPMDlCU1VjN1NVRkRTU3hSUVVGUkxFTkJRVU1zU1VGQldTeEZRVUZGTEdWQlFYTkRPMUZCUTJoRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzWlVGQlpTeERRVUZETzBsQlEzUkVMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VlFVRlZMRU5CUVVNc1NVRkJXVHRSUVVNeFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zU1VGQldUdFJRVU4wUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhUUVVGVExFTkJRVU03U1VGRGVrUXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVmtzUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEZEVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNCRExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzaENMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE1VTXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMG9zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTnlRaXhEUVVGRE8wbEJRMHdzUTBGQlF6dERRVWxLTzBGQkwwTkVMR3REUVN0RFF5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2ZhY3Rvcmllcy9mYWN0b3J5QmFzZS50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgSVNwb25nZSB1c2luZyBDdXJsIGFsZ29yaXRobS5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaW90YS5saWIuanMvYmxvYi9tYXN0ZXIvbGliL2NyeXB0by9jdXJsL2N1cmwuanNcclxuICovXHJcbmNsYXNzIEN1cmwge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQ3VybC5cclxuICAgICAqIEBwYXJhbSByb3VuZHMgVGhlIG51bWJlciBvZiByb3VuZHMgdG8gdXNlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihyb3VuZHMgPSBDdXJsLk5VTUJFUl9PRl9ST1VORFMpIHtcclxuICAgICAgICB0aGlzLl9udW1iZXJPZlJvdW5kcyA9IHJvdW5kcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjb25zdGFudCBmb3IgdGhlIHNwb25lLlxyXG4gICAgICogQG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbnRhbnQgdG8gZ2V0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbnN0YW50LlxyXG4gICAgICovXHJcbiAgICBnZXRDb25zdGFudChuYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJOVU1CRVJfT0ZfUk9VTkRTXCI6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9udW1iZXJPZlJvdW5kcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiSEFTSF9MRU5HVEhcIjpcclxuICAgICAgICAgICAgY2FzZSBcIlNUQVRFX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJsW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVW5rbm93biBjb25zdGFudCByZXF1ZXN0ZWQgJHtuYW1lfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdGF0ZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBoYXNoZXIuXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgVGhlIGluaXRpYWwgc3RhdGUgZm9yIHRoZSBoYXNoZXIuXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemUoc3RhdGUpIHtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gbmV3IEludDhBcnJheShDdXJsLlNUQVRFX0xFTkdUSCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgaGFzaGVyLlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWJzb3JiIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBhYnNvcmIgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKi9cclxuICAgIGFic29yYih0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9jYWxPZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgbGV0IGxvY2FsTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBsaW1pdCA9IGxvY2FsTGVuZ3RoIDwgQ3VybC5IQVNIX0xFTkdUSCA/IGxvY2FsTGVuZ3RoIDogQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCBsaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVbaSsrXSA9IHRyaXRzW2xvY2FsT2Zmc2V0KytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKCk7XHJcbiAgICAgICAgICAgIGxvY2FsTGVuZ3RoIC09IEN1cmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgfSB3aGlsZSAobG9jYWxMZW5ndGggPiAwKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3F1ZWV6ZSB0cml0cyBpbnRvIHRoZSBoYXNoLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBzcXVlZXplLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGludG8gdGhlIHRyaXRzIHRvIHNxdWVlemUgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiB0cml0cyB0byBzcXVlZXplLlxyXG4gICAgICovXHJcbiAgICBzcXVlZXplKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUcml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJMZW5ndGggbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICsgb2Zmc2V0ID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gbG9jYWxMZW5ndGggPCBDdXJsLkhBU0hfTEVOR1RIID8gbGVuZ3RoIDogQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCBsaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbbG9jYWxPZmZzZXQrK10gPSB0aGlzLl9zdGF0ZVtpKytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKCk7XHJcbiAgICAgICAgICAgIGxvY2FsTGVuZ3RoIC09IEN1cmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgfSB3aGlsZSAobG9jYWxMZW5ndGggPiAwKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmb3JtIHRoZSBoYXNoLlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybSgpIHtcclxuICAgICAgICBsZXQgc3RhdGVDb3B5O1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgcm91bmQgPSAwOyByb3VuZCA8IHRoaXMuX251bWJlck9mUm91bmRzOyByb3VuZCsrKSB7XHJcbiAgICAgICAgICAgIHN0YXRlQ29weSA9IG5ldyBJbnQ4QXJyYXkodGhpcy5fc3RhdGUuc2xpY2UoKSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ3VybC5TVEFURV9MRU5HVEg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVbaV0gPSBDdXJsLlRSVVRIX1RBQkxFW3N0YXRlQ29weVtpbmRleF0gKyAoc3RhdGVDb3B5W2luZGV4ICs9IChpbmRleCA8IDM2NSA/IDM2NCA6IC0zNjUpXSA8PCAyKSArIDVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkN1cmwuSEFTSF9MRU5HVEggPSAyNDM7XHJcbkN1cmwuTlVNQkVSX09GX1JPVU5EUyA9IDgxO1xyXG5DdXJsLlNUQVRFX0xFTkdUSCA9IEN1cmwuSEFTSF9MRU5HVEggKiAzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQ3VybC5UUlVUSF9UQUJMRSA9IG5ldyBJbnQ4QXJyYXkoWzEsIDAsIC0xLCAyLCAxLCAtMSwgMCwgMiwgLTEsIDEsIDBdKTtcclxuZXhwb3J0cy5DdXJsID0gQ3VybDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNWeWJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5emNHOXVaMlZ6TDJOMWNtd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZEZWtVc2MwUkJRVzFFTzBGQlIyNUVPenM3UjBGSFJ6dEJRVU5JTzBsQllVazdPenRQUVVkSE8wbEJRMGdzV1VGQldTeFRRVUZwUWl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTzFGQlF6bERMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzVFVGQlRTeERRVUZETzBsQlEyeERMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1YwRkJWeXhEUVVGRExFbEJRVms3VVVGRE0wSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5ZTEV0QlFVc3NhMEpCUVd0Q0xFVkJRVVVzUTBGQlF6dG5Ra0ZEZEVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTTdXVUZEYUVNc1EwRkJRenRaUVVORUxFdEJRVXNzWVVGQllTeERRVUZETzFsQlEyNUNMRXRCUVVzc1kwRkJZenRuUWtGRGJrSXNRMEZCUXp0dlFrRkRSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOMFFpeERRVUZETzFsQlEwUXNVMEZCVXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzRRa0ZCT0VJc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42UlN4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1ZVRkJWU3hEUVVGRExFdEJRV2xDTzFGQlF5OUNMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU40UWl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFNpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0UlFVTnVSQ3hEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1MwRkJTenRSUVVOU0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNTMEZCWjBJc1JVRkJSU3hOUVVGakxFVkJRVVVzVFVGQll6dFJRVU14UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGREwwUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRSUVVOcVJTeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzFGQlF6RkVMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNN1VVRkRNVVFzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha01zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVUkJRWFZFTEVOQlFVTXNRMEZCUXp0UlFVTnVSaXhEUVVGRE8xRkJSVVFzU1VGQlNTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVVjZRaXhIUVVGSExFTkJRVU03V1VGRFFTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRWaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJSVGxGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRXRCUVVzc1JVRkJSU3hEUVVGRE8yZENRVU5tTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNMVF5eERRVUZETzFsQlJVUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8xbEJSV3BDTEZkQlFWY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM0JETEVOQlFVTXNVVUZCVVN4WFFVRlhMRWRCUVVjc1EwRkJReXhGUVVGRk8wbEJRemxDTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTlCUVU4c1EwRkJReXhMUVVGblFpeEZRVUZGTEUxQlFXTXNSVUZCUlN4TlFVRmpPMUZCUXpORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZSQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4eFEwRkJjVU1zUTBGQlF5eERRVUZETzFGQlEycEZMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNN1VVRkRNVVFzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNPRUpCUVRoQ0xFTkJRVU1zUTBGQlF6dFJRVU14UkN4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDFSRUZCZFVRc1EwRkJReXhEUVVGRE8xRkJRMjVHTEVOQlFVTTdVVUZGUkN4SlFVRkpMRmRCUVZjc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGVrSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJSWHBDTEVkQlFVY3NRMEZCUXp0WlFVVkJMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5XTEUxQlFVMHNTMEZCU3l4SFFVRkhMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZGZWtVc1QwRkJUeXhEUVVGRExFZEJRVWNzUzBGQlN5eEZRVUZGTEVOQlFVTTdaMEpCUTJZc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6VkRMRU5CUVVNN1dVRkZSQ3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdXVUZGYWtJc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEY0VNc1EwRkJReXhSUVVGUkxGZEJRVmNzUjBGQlJ5eERRVUZETEVWQlFVVTdTVUZET1VJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkxMRk5CUVZNN1VVRkRZaXhKUVVGSkxGTkJRVzlDTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJXUXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZEZUVRc1UwRkJVeXhIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVVV2UXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0blFrRkZla01zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1NDeERRVUZETzFGQlEwd3NRMEZCUXp0SlFVTk1MRU5CUVVNN08wRkJOMHB6UWl4blFrRkJWeXhIUVVGWExFZEJRVWNzUTBGQlF6dEJRVU14UWl4eFFrRkJaMElzUjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZET1VJc2FVSkJRVmtzUjBGQlZ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVWdVJTeGxRVUZsTzBGQlExTXNaMEpCUVZjc1IwRkJZeXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlRucEhMRzlDUVN0S1F5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL3Nwb25nZXMvY3VybC50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBzaGEzXzEgPSByZXF1aXJlKFwiLi4vZGlnZXN0cy9zaGEzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBiaWdJbnRlZ2VySGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9iaWdJbnRlZ2VySGVscGVyXCIpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgSVNwb25nZSB1c2luZyBLZXJsIGFsZ29yaXRobS5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaXJpL2Jsb2IvZGV2L3NyYy9tYWluL2phdmEvY29tL2lvdGEvaXJpL2hhc2gvS2VybC5qYXZhXHJcbiAqL1xyXG5jbGFzcyBLZXJsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEtlcmwuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2tlY2NhayA9IG5ldyBzaGEzXzEuU2hhMygzODQsIHNoYTNfMS5TaGEzLktFQ0NBS19QQURESU5HLCAzODQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNvbnN0YW50IGZvciB0aGUgc3BvbmUuXHJcbiAgICAgKiBAbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29udGFudCB0byBnZXQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29uc3RhbnQuXHJcbiAgICAgKi9cclxuICAgIGdldENvbnN0YW50KG5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkhBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJCSVRfSEFTSF9MRU5HVEhcIjpcclxuICAgICAgICAgICAgY2FzZSBcIkJZVEVfSEFTSF9MRU5HVEhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gS2VybFtuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFVua25vd24gY29uc3RhbnQgcmVxdWVzdGVkICR7bmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpc2UgdGhlIGhhc2hlci5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSBmb3IgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZShzdGF0ZSkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgaGFzaGVyLlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9rZWNjYWsucmVzZXQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWJzb3JiIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBhYnNvcmIgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKi9cclxuICAgIGFic29yYih0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICUgMjQzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7S2VybC5IQVNIX0xFTkdUSH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaXRTdGF0ZSA9IHRyaXRzLnNsaWNlKGxvY2FsT2Zmc2V0LCBsb2NhbE9mZnNldCArIEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICB0cml0U3RhdGVbS2VybC5IQVNIX0xFTkdUSCAtIDFdID0gMDtcclxuICAgICAgICAgICAgY29uc3QgYmlnSW50ID0gYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIudHJpdHNUb0JpZ0ludGVnZXIodHJpdFN0YXRlLCAwLCB0cml0U3RhdGUubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZVN0YXRlID0gbmV3IEFycmF5QnVmZmVyKEtlcmwuQllURV9IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLmJpZ0ludGVnZXJUb0J5dGVzKGJpZ0ludCwgYnl0ZVN0YXRlLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5fa2VjY2FrLnVwZGF0ZShieXRlU3RhdGUpO1xyXG4gICAgICAgICAgICBsb2NhbE9mZnNldCArPSBLZXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBLZXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNxdWVlemUgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBzcXVlZXplIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqL1xyXG4gICAgc3F1ZWV6ZSh0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICUgMjQzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7S2VybC5IQVNIX0xFTkdUSH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVTdGF0ZUJ1ZmZlciA9IHRoaXMuX2tlY2Nhay5kaWdlc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgYmlnSW50ID0gYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIuYnl0ZXNUb0JpZ0ludGVnZXIoYnl0ZVN0YXRlQnVmZmVyLCAwLCBLZXJsLkJZVEVfSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cml0U3RhdGUgPSBuZXcgSW50OEFycmF5KEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBiaWdJbnRlZ2VySGVscGVyXzEuQmlnSW50ZWdlckhlbHBlci5iaWdJbnRlZ2VyVG9Ucml0cyhiaWdJbnQsIHRyaXRTdGF0ZSwgMCwgS2VybC5IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIHRyaXRTdGF0ZVtLZXJsLkhBU0hfTEVOR1RIIC0gMV0gPSAwO1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgS2VybC5IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbbG9jYWxPZmZzZXQrK10gPSB0cml0U3RhdGVbaSsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhieXRlU3RhdGVCdWZmZXIpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZHYuYnl0ZUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkdi5zZXRVaW50OChpLCBkdi5nZXRVaW50OChpKSBeIDB4RkYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2tlY2Nhay51cGRhdGUoYnl0ZVN0YXRlQnVmZmVyKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gS2VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5LZXJsLkhBU0hfTEVOR1RIID0gMjQzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuS2VybC5CSVRfSEFTSF9MRU5HVEggPSAzODQ7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5LZXJsLkJZVEVfSEFTSF9MRU5HVEggPSBLZXJsLkJJVF9IQVNIX0xFTkdUSCAvIDg7XHJcbmV4cG9ydHMuS2VybCA9IEtlcmw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWEyVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXpjRzl1WjJWekwydGxjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNNRU5CUVhWRE8wRkJRM1pETEhORVFVRnRSRHRCUVVOdVJDeHJSVUZCSzBRN1FVRkhMMFE3T3p0SFFVZEhPMEZCUTBnN1NVRlhTVHM3VDBGRlJ6dEpRVU5JTzFGQlEwa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxGZEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNWMEZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU16UkN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRmRCUVZjc1EwRkJReXhKUVVGWk8xRkJRek5DTEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFdDeExRVUZMTEdGQlFXRXNRMEZCUXp0WlFVTnVRaXhMUVVGTExHbENRVUZwUWl4RFFVRkRPMWxCUTNaQ0xFdEJRVXNzYTBKQlFXdENPMmRDUVVOMlFpeERRVUZETzI5Q1FVTkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTNSQ0xFTkJRVU03V1VGRFJDeFRRVUZUTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM3BGTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU03U1VGRGNrSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZWQlFWVXNRMEZCUXl4TFFVRnBRanRKUVVOdVF5eERRVUZETzBsQlJVUTdPMDlCUlVjN1NVRkRTU3hMUVVGTE8xRkJRMUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJaMElzUlVGQlJTeE5RVUZqTEVWQlFVVXNUVUZCWXp0UlFVTXhSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETDBRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFJRVU5xUlN4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1JDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaEVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERoQ1FVRTRRaXhEUVVGRExFTkJRVU03VVVGRE1VUXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZFVSQlFYVkVMRU5CUVVNc1EwRkJRenRSUVVOdVJpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKQ0xFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR2REUVVGblF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6RkdMRU5CUVVNN1VVRkZSQ3hKUVVGSkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hYUVVGWExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlJYcENMRWRCUVVjc1EwRkJRenRaUVVOQkxFMUJRVTBzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1YwRkJWeXhGUVVGRkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkZNMFVzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEzQkRMRTFCUVUwc1RVRkJUU3hIUVVGSExHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEyeEdMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETzFsQlEzcEVMRzFEUVVGblFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZla1FzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRkwwSXNWMEZCVnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03V1VGRGFFTXNWMEZCVnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGNFTXNRMEZCUXl4UlFVRlJMRmRCUVZjc1IwRkJSeXhEUVVGRExFVkJRVVU3U1VGRE9VSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1QwRkJUeXhEUVVGRExFdEJRV2RDTEVWQlFVVXNUVUZCWXl4RlFVRkZMRTFCUVdNN1VVRkRNMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXk5RUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVVUZEYWtVc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zT0VKQlFUaENMRU5CUVVNc1EwRkJRenRSUVVNeFJDeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzFGQlF6RkVMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycERMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhWRVFVRjFSQ3hEUVVGRExFTkJRVU03VVVGRGJrWXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVFpeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhuUTBGQlowTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTXhSaXhEUVVGRE8xRkJSVVFzU1VGQlNTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVVjZRaXhIUVVGSExFTkJRVU03V1VGRFFTeE5RVUZOTEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFsQlJUbERMRTFCUVUwc1RVRkJUU3hIUVVGSExHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1dVRkZOMFlzVFVGQlRTeFRRVUZUTEVkQlFXTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFsQlF6ZEVMRzFEUVVGblFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFpRVVV6UlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkZjRU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFZc1QwRkJUeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMmRDUVVNeFFpeExRVUZMTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTXhReXhEUVVGRE8xbEJSVVFzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03V1VGRGVrTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzJkQ1FVTnFReXhGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpGRExFTkJRVU03V1VGRlJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6dFpRVVZ5UXl4WFFVRlhMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU53UXl4RFFVRkRMRkZCUVZFc1YwRkJWeXhIUVVGSExFTkJRVU1zUlVGQlJUdEpRVU01UWl4RFFVRkRPenRCUVc1S1JDeGxRVUZsTzBGQlExTXNaMEpCUVZjc1IwRkJWeXhIUVVGSExFTkJRVU03UVVGRGJFUXNaVUZCWlR0QlFVTlRMRzlDUVVGbExFZEJRVmNzUjBGQlJ5eERRVUZETzBGQlEzUkVMR1ZCUVdVN1FVRkRVeXh4UWtGQlowSXNSMEZCVnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVTVvUml4dlFrRnhTa01pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvc3Bvbmdlcy9rZXJsLnRzIiwidmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmltcG9ydC1uYW1lXHJcbmNvbnN0IGJpZ19pbnRlZ2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImJpZy1pbnRlZ2VyXCIpKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuLyoqXHJcbiAqIEhlbHBlciBjbGFzcyB0byBjb252ZXJ0IGJldHdlZW4gQmlnSW50ZWdlciBhbmQgb3RoZXIgdHlwZXMuXHJcbiAqIENvbnZlcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lyaS9ibG9iL2Rldi9zcmMvbWFpbi9qYXZhL2NvbS9pb3RhL2lyaS9oYXNoL0tlcmwuamF2YVxyXG4gKi9cclxuY2xhc3MgQmlnSW50ZWdlckhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdHJpdHMgdG8gYSBiaWdJbnRlZ2VyLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBjb252ZXJ0LlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBPZmZzZXQgd2l0aGluIHRoZSBhcnJheSB0byBzdGFydC5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgdHJpdHMgYXJyYXkgdG8gY29udmVydC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHRyaXRzVG9CaWdJbnRlZ2VyKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2Zmc2V0ICsgbGVuZ3RoID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2YWx1ZSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBsZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLm11bHRpcGx5KEJpZ0ludGVnZXJIZWxwZXIuUkFESVgpLmFkZChiaWdfaW50ZWdlcl8xLmRlZmF1bHQodHJpdHNbb2Zmc2V0ICsgaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGJpZ0ludGVnZXIgdG8gdHJpdHMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGJpZ0ludGVnZXIgdG8gY29udmVydCB0byB0cml0cy5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgYXJyYXkgdG8gcmVjZWl2ZSB0aGUgdHJpdHMuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgdG8gcGxhY2UgdGhlIHRyaXRzIGluIHRoZSBhcnJheS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBiaWdJbnRlZ2VyVG9Ucml0cyh2YWx1ZSwgdHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCBiaWdfaW50ZWdlcl8xLmRlZmF1bHQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHZhbHVlIG11c3QgYmUgYSBiaWdJbnRlZ2VyIHR5cGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cml0cyBtdXN0IGJlIGFuIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSBhIG51bWJlciA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvZmZzZXQgKyBsZW5ndGggPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFic29sdXRlVmFsdWUgPSB2YWx1ZS5jb21wYXJlVG8oYmlnX2ludGVnZXJfMS5kZWZhdWx0Lnplcm8pIDwgMCA/IHZhbHVlLm5lZ2F0ZSgpIDogdmFsdWU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkaXZSZW1haW5kZXIgPSBhYnNvbHV0ZVZhbHVlLmRpdm1vZChCaWdJbnRlZ2VySGVscGVyLlJBRElYKTtcclxuICAgICAgICAgICAgYWJzb2x1dGVWYWx1ZSA9IGRpdlJlbWFpbmRlci5xdW90aWVudDtcclxuICAgICAgICAgICAgbGV0IHJlbWFpbmRlciA9IGRpdlJlbWFpbmRlci5yZW1haW5kZXI7XHJcbiAgICAgICAgICAgIGlmIChyZW1haW5kZXIgPiBCaWdJbnRlZ2VySGVscGVyLk1BWF9UUklUX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBCaWdJbnRlZ2VySGVscGVyLk1JTl9UUklUX1ZBTFVFO1xyXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVWYWx1ZSA9IGFic29sdXRlVmFsdWUuYWRkKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdFtcIjFcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyaXRzW29mZnNldCArIGldID0gcmVtYWluZGVyLnRvSlNOdW1iZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlLmNvbXBhcmVUbyhiaWdfaW50ZWdlcl8xLmRlZmF1bHQuemVybykgPCAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIEF2b2lkIG5lZ2F0aXZlIHplcm9cclxuICAgICAgICAgICAgICAgIHRyaXRzW29mZnNldCArIGldID0gdHJpdHNbb2Zmc2V0ICsgaV0gPT09IDAgPyAwIDogLXRyaXRzW29mZnNldCArIGldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBiaWdJbnRlZ2VyIGludG8gYnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXHJcbiAgICAgKiBAcGFyYW0gZGVzdGluYXRpb24gVGhlIGRlc3RpbmF0aW9uIGFycmF5IHRvIHN0b3JlIHRoZSBieXRlcy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCB3aXRoaW4gdGhlIGFycmF5IHRvIHN0b3JlIHRoZSBieXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJpZ0ludGVnZXJUb0J5dGVzKHZhbHVlLCBkZXN0aW5hdGlvbiwgb2Zmc2V0KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCBiaWdfaW50ZWdlcl8xLmRlZmF1bHQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHZhbHVlIG11c3QgYmUgYSBiaWdJbnRlZ2VyIHR5cGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShkZXN0aW5hdGlvbiwgQXJyYXlCdWZmZXIpIHx8IGRlc3RpbmF0aW9uLmJ5dGVMZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgZGVzdGluYXRpb24gbXVzdCBiZSBhbiBhcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGVzdGluYXRpb24uYnl0ZUxlbmd0aCAtIG9mZnNldCA8IEJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgRGVzdGluYXRpb24gYXJyYXkgaGFzIGludmFsaWQgc2l6ZSwgaXQgbXVzdCBiZSBhdCBsZWFzdCAke0JpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtZW1iZXIgaWYgaXQgaXMgbmVnYXRpdmUgZm9yIGxhdGVyXHJcbiAgICAgICAgY29uc3QgaXNOZWcgPSB2YWx1ZS5pc05lZ2F0aXZlKCkgPyAtMSA6IDA7XHJcbiAgICAgICAgbGV0IGhleFN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICBpZiAoaXNOZWcgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIEJ1dCByZW1vdmUgaXQgZm9yIG5vd1xyXG4gICAgICAgICAgICBoZXhTdHJpbmcgPSBoZXhTdHJpbmcuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE5vdyBtYWtlIHN1cmUgdGhlIGhleCBzdHJpbmcgaXMgYW4gZXZlbiBsZW5ndGggc28gdGhlIHJlZ2V4IHdvcmtzXHJcbiAgICAgICAgaWYgKGhleFN0cmluZy5sZW5ndGggJSAyID09PSAxKSB7XHJcbiAgICAgICAgICAgIGhleFN0cmluZyA9IGAwJHtoZXhTdHJpbmd9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGhleFN0cmluZy5tYXRjaCgvWzAtOWEtZl17Mn0vZyk7XHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgaGV4IHRvIG51bWJlcnNcclxuICAgICAgICBjb25zdCBzaWduZWRCeXRlcyA9IG5ldyBJbnQ4QXJyYXkobWF0Y2hlc1xyXG4gICAgICAgICAgICAubWFwKGhleCA9PiBwYXJzZUludChgMHgke2hleH1gLCAxNikpKTtcclxuICAgICAgICBpZiAoaXNOZWcgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIEJpZ0ludGVnZXJIZWxwZXIudHdvc0NvbXBsZW1lbnQoc2lnbmVkQnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhkZXN0aW5hdGlvbik7XHJcbiAgICAgICAgLy8gUGFkIHRoZSBzdGFydCBvZiB0aGUgYnVmZmVyIHdpdGggdGhlIG5lZyB2YWx1ZVxyXG4gICAgICAgIGxldCBpID0gb2Zmc2V0O1xyXG4gICAgICAgIHdoaWxlIChpICsgc2lnbmVkQnl0ZXMubGVuZ3RoIDwgQmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIGRhdGFWaWV3LnNldEludDgoaSsrLCBpc05lZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFuZCBjb3B5IGluIHRoZSBhY3R1YWwgYnl0ZXNcclxuICAgICAgICBmb3IgKGxldCBqID0gc2lnbmVkQnl0ZXMubGVuZ3RoOyBqLS0gPiAwOykge1xyXG4gICAgICAgICAgICBkYXRhVmlldy5zZXRJbnQ4KGkrKywgc2lnbmVkQnl0ZXNbc2lnbmVkQnl0ZXMubGVuZ3RoIC0gMSAtIGpdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYnl0ZXMgdG8gYSBiaWdJbnRlZ2VyLlxyXG4gICAgICogQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIGJ5dGVzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IHdpdGhpbiB0aGUgYnl0ZXMgdG8gc3RhcnQgY29udmVyc2lvbi5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgYnl0ZXMgdG8gdXNlIGZvciBjb252ZXJzaW9uLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYnl0ZXNUb0JpZ0ludGVnZXIoc291cmNlLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzb3VyY2UsIEFycmF5QnVmZmVyKSB8fCBzb3VyY2UuYnl0ZUxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzb3VyY2UgbXVzdCBiZSBhIG5vbiBlbXB0eSBudW1iZXIgYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc291cmNlLmJ5dGVMZW5ndGggLSBvZmZzZXQgPCBCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFNvdXJjZSBhcnJheSBoYXMgaW52YWxpZCBzaXplLCBpdCBtdXN0IGJlIGF0IGxlYXN0ICR7QmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhzb3VyY2UpO1xyXG4gICAgICAgIGxldCBzaWduZWRCeXRlcyA9IG5ldyBJbnQ4QXJyYXkoZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBkYXRhVmlldy5ieXRlTGVuZ3RoOyBiKyspIHtcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXNbYl0gPSBkYXRhVmlldy5nZXRJbnQ4KGIgKyBvZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGluaXRpYWwgcGFkZGluZyBsZWF2aW5nIGF0IGxlYXN0IG9uZSBieXRlXHJcbiAgICAgICAgbGV0IHBhZGRpbmdPZmZzZXQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0Qnl0ZSA9IHNpZ25lZEJ5dGVzWzBdO1xyXG4gICAgICAgIGNvbnN0IGlzTmVnID0gZmlyc3RCeXRlIDwgMDtcclxuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgcGFkZGluZyBjaGFyYWN0ZXIgaXMgbmVnYXRpdmUgdGhlbiByZXZlcnNlIHRoZSAycyBjb21wbGVtZW50XHJcbiAgICAgICAgLy8gYnV0IGZpcnN0IHN0cmlwIG9mIHRoZSBsZWFkaW5nIHBhZGRpbmdcclxuICAgICAgICBpZiAoZmlyc3RCeXRlID09PSAwIHx8IGZpcnN0Qnl0ZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHNpZ25lZEJ5dGVzW3BhZGRpbmdPZmZzZXRdID09PSBmaXJzdEJ5dGUgJiYgcGFkZGluZ09mZnNldCA8IHNpZ25lZEJ5dGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdPZmZzZXQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTdHJpcCBhbnkgcGFkZGluZ1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlcyA9IHNpZ25lZEJ5dGVzLnNsaWNlKHBhZGRpbmdPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOZWcpIHtcclxuICAgICAgICAgICAgQmlnSW50ZWdlckhlbHBlci50d29zQ29tcGxlbWVudChzaWduZWRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoZXhTdHJpbmcgPSBpc05lZyA/IFwiLVwiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhzaWduZWRCeXRlcy5idWZmZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgZHYuYnl0ZUxlbmd0aDsgaCsrKSB7XHJcbiAgICAgICAgICAgIGhleFN0cmluZyArPSBgMDAke2R2LmdldFVpbnQ4KGgpLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChoZXhTdHJpbmcsIDE2KTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIHR3b3NDb21wbGVtZW50KHNpZ25lZEJ5dGVzKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIHdob2xlIG51bWJlciBpcyBuZWdhdGl2ZSB0aGVuXHJcbiAgICAgICAgLy8gY2hhbmdlIHRvIDIncyBjb21wbGVtZW50cyBieSBub3RpbmcgYWxsIHRoZSBudW1iZXJzXHJcbiAgICAgICAgLy8gYW5kIGFkZGluZyAxIHRvIHRoZSBsYXN0IGkuZS4gfmJpZ251bSsxXHJcbiAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBzaWduZWRCeXRlcy5sZW5ndGg7IGIrKykge1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlc1tiXSA9IH5zaWduZWRCeXRlc1tiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIDEgdG8gbGFzdCBudW1iZXIsIGlmIHRoZSBudW1iZXIgaXMgMHhGRiBjb250aW51ZSB0byBjYXJyeVxyXG4gICAgICAgIGxldCBjID0gc2lnbmVkQnl0ZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzW2NdKys7XHJcbiAgICAgICAgfSB3aGlsZSAoc2lnbmVkQnl0ZXNbYy0tXSA9PT0gMCAmJiBjID4gMCk7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuUkFESVggPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoMyk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLk1BWF9UUklUX1ZBTFVFID0gQmlnSW50ZWdlckhlbHBlci5SQURJWC5taW51cygxKS5kaXZpZGUoMik7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLk1JTl9UUklUX1ZBTFVFID0gQmlnSW50ZWdlckhlbHBlci5NQVhfVFJJVF9WQUxVRS5uZWdhdGUoKTtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuQklUX0hBU0hfTEVOR1RIID0gMzg0O1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIID0gQmlnSW50ZWdlckhlbHBlci5CSVRfSEFTSF9MRU5HVEggLyA4O1xyXG5leHBvcnRzLkJpZ0ludGVnZXJIZWxwZXIgPSBCaWdJbnRlZ2VySGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbWxuU1c1MFpXZGxja2hsYkhCbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDJKcFowbHVkR1ZuWlhKSVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzZFVOQlFYVkRPMEZCUTNaRExEaEVRVUZwUXp0QlFVTnFReXh6UkVGQmJVUTdRVUZGYmtRN096dEhRVWRITzBGQlEwZzdTVUZoU1RzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4TFFVRm5RaXhGUVVGRkxFMUJRV01zUlVGQlJTeE5RVUZqTzFGQlF6VkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDVRMEZCZVVNc1EwRkJReXhEUVVGRE8xRkJRM0pGTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5eERRVUZETEVOQlFVTTdVVUZET1VRc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYVVOQlFXbERMRU5CUVVNc1EwRkJRenRSUVVNM1JDeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXgxUkVGQmRVUXNRMEZCUXl4RFFVRkRPMUZCUTI1R0xFTkJRVU03VVVGRlJDeEpRVUZKTEV0QlFVc3NSMEZCUnl4eFFrRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dFJRVVY0UWl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0WlFVTnVReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc2NVSkJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUml4RFFVRkRPMUZCUlVRc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU5xUWl4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzVFVGQlRTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFdEJRWGRDTEVWQlFVVXNTMEZCWjBJc1JVRkJSU3hOUVVGakxFVkJRVVVzVFVGQll6dFJRVU4wUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3h4UWtGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVVUZEYWtVc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhuUTBGQlowTXNRMEZCUXl4RFFVRkRPMUZCUXpWRUxFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaEVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VVVGRE9VUXNRMEZCUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha1FzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2FVTkJRV2xETEVOQlFVTXNRMEZCUXp0UlFVTTNSQ3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4MVJFRkJkVVFzUTBGQlF5eERRVUZETzFGQlEyNUdMRU5CUVVNN1VVRkZSQ3hKUVVGSkxHRkJRV0VzUjBGQlJ5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMSEZDUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVVNVJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRemxDTEUxQlFVMHNXVUZCV1N4SFFVRkhMR0ZCUVdFc1EwRkJReXhOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGJFVXNZVUZCWVN4SFFVRkhMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU03V1VGRGRFTXNTVUZCU1N4VFFVRlRMRWRCUVVjc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF6dFpRVVYyUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhUUVVGVExFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZET1VNc1UwRkJVeXhIUVVGSExHZENRVUZuUWl4RFFVRkRMR05CUVdNc1EwRkJRenRuUWtGRE5VTXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zY1VKQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVFTEVOQlFVTTdXVUZEUkN4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVNdlF5eERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eHhRa0ZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0blFrRkRPVUlzYzBKQlFYTkNPMmRDUVVOMFFpeExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZSU3hEUVVGRE8xRkJRMHdzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4TFFVRjNRaXhGUVVGRkxGZEJRWGRDTEVWQlFVVXNUVUZCWXp0UlFVTTVSaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeHhRa0ZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1JETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1VVRkRha1VzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRmRCUVZjc1EwRkJReXhKUVVGSkxGZEJRVmNzUTBGQlF5eFZRVUZWTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVJpeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhyUTBGQmEwTXNRMEZCUXl4RFFVRkRPMUZCUXpsRUxFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaEVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VVVGRE9VUXNRMEZCUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eFZRVUZWTEVkQlFVY3NUVUZCVFN4SFFVRkhMR2RDUVVGblFpeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUlN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5d3lSRUZCTWtRc1owSkJRV2RDTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6RklMRU5CUVVNN1VVRkZSQ3gxUTBGQmRVTTdVVUZEZGtNc1RVRkJUU3hMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRGRExFbEJRVWtzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRmJrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm1MSGRDUVVGM1FqdFpRVU40UWl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnVReXhEUVVGRE8xRkJRMFFzYjBWQlFXOUZPMUZCUTNCRkxFVkJRVVVzUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETjBJc1UwRkJVeXhIUVVGSExFbEJRVWtzVTBGQlV5eEZRVUZGTEVOQlFVTTdVVUZEYUVNc1EwRkJRenRSUVVORUxFMUJRVTBzVDBGQlR5eEhRVUZITEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03VVVGRmFFUXNOa0pCUVRaQ08xRkJRemRDTEUxQlFVMHNWMEZCVnl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExFOUJRVTg3WVVGRGNFTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJUTkRMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRaaXhuUWtGQlowSXNRMEZCUXl4alFVRmpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRGFrUXNRMEZCUXp0UlFVVkVMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUlRORExHbEVRVUZwUkR0UlFVTnFSQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZEWml4UFFVRlBMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU1zVFVGQlRTeEhRVUZITEdkQ1FVRm5RaXhEUVVGRExHZENRVUZuUWl4RlFVRkZMRU5CUVVNN1dVRkRhRVVzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5xUXl4RFFVRkRPMUZCUTBRc0swSkJRU3RDTzFGQlF5OUNMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEZkQlFWY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTTdXVUZEZUVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4WFFVRlhMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOdVJTeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRTFCUVcxQ0xFVkJRVVVzVFVGQll5eEZRVUZGTEUxQlFXTTdVVUZETDBVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzVjBGQlZ5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkZMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERaRFFVRTJReXhEUVVGRExFTkJRVU03VVVGRGVrVXNRMEZCUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2EwTkJRV3RETEVOQlFVTXNRMEZCUXp0UlFVTTVSQ3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhEUVVGRE8xRkJRemRFTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeEhRVUZITEUxQlFVMHNSMEZCUnl4blFrRkJaMElzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrVXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYzBSQlFYTkVMR2RDUVVGblFpeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU55U0N4RFFVRkRPMUZCUlVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZkRU1zU1VGQlNTeFhRVUZYTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlEzSkVMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUXpORExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnNSQ3hEUVVGRE8xRkJSVVFzZFVSQlFYVkVPMUZCUTNaRUxFbEJRVWtzWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjBRaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRha01zVFVGQlRTeExRVUZMTEVkQlFVY3NVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVVMVFpdzBSVUZCTkVVN1VVRkROVVVzZVVOQlFYbERPMUZCUTNwRExFVkJRVVVzUTBGQlF5eERRVUZETEZOQlFWTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1UwRkJVeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBReXhQUVVGUExGZEJRVmNzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4VFFVRlRMRWxCUVVrc1lVRkJZU3hIUVVGSExGZEJRVmNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNN1owSkJRM2hHTEdGQlFXRXNSVUZCUlN4RFFVRkRPMWxCUTNCQ0xFTkJRVU03V1VGRFJDeHZRa0ZCYjBJN1dVRkRjRUlzVjBGQlZ5eEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRGJrUXNRMEZCUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVWl4blFrRkJaMElzUTBGQlF5eGpRVUZqTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRha1FzUTBGQlF6dFJRVVZFTEVsQlFVa3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRha01zVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlF6VkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUTNKRExGTkJRVk1zU1VGQlNTeExRVUZMTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VRc1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eHhRa0ZCVFN4RFFVRkRMRk5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNWMEZCYzBJN1VVRkRhRVFzZFVOQlFYVkRPMUZCUTNaRExITkVRVUZ6UkR0UlFVTjBSQ3d3UTBGQk1FTTdVVUZETVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRNVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkRMRU5CUVVNN1VVRkRSQ3huUlVGQlowVTdVVUZEYUVVc1NVRkJTU3hEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRMMElzUjBGQlJ5eERRVUZETzFsQlEwRXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03VVVGRGNrSXNRMEZCUXl4UlFVRlJMRmRCUVZjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wbEJRemxETEVOQlFVTTdPMEZCYUU5RUxHVkJRV1U3UVVGRFV5eHpRa0ZCU3l4SFFVRnpRaXh4UWtGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpkRUxHVkJRV1U3UVVGRFV5d3JRa0ZCWXl4SFFVRnpRaXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOMFJ5eGxRVUZsTzBGQlExTXNLMEpCUVdNc1IwRkJjMElzWjBKQlFXZENMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzBGQlJYSkhMR1ZCUVdVN1FVRkRVeXhuUTBGQlpTeEhRVUZYTEVkQlFVY3NRMEZCUXp0QlFVTjBSQ3hsUVVGbE8wRkJRMU1zYVVOQlFXZENMRWRCUVZjc1owSkJRV2RDTEVOQlFVTXNaVUZCWlN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVZnMVJpdzBRMEZyVDBNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvYmlnSW50ZWdlckhlbHBlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBhZGRyZXNzZXMuXHJcbiAqL1xyXG5jbGFzcyBBZGRyZXNzIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IoYWRkcmVzc1RyeXRlcywgY2hlY2tzdW1Ucnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl9hZGRyZXNzVHJ5dGVzID0gYWRkcmVzc1RyeXRlcztcclxuICAgICAgICB0aGlzLl9jaGVja3N1bVRyeXRlcyA9IGNoZWNrc3VtVHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYWRkcmVzcyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBhZGRyZXNzIFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBhZGRyZXNzIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBBZGRyZXNzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyhhZGRyZXNzKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGFkZHJlc3MsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBhZGRyZXNzIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyeXRlc1N0cmluZyA9IGFkZHJlc3MudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodHJ5dGVzU3RyaW5nLmxlbmd0aCAhPT0gQWRkcmVzcy5MRU5HVEggJiYgdHJ5dGVzU3RyaW5nLmxlbmd0aCAhPT0gQWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYWRkcmVzcyBzaG91bGQgZWl0aGVyIGJlICR7QWRkcmVzcy5MRU5HVEh9IG9yICR7QWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTX0gY2hhcmFjdGVycyBpbiBsZW5ndGhgLCB7IGxlbmd0aDogdHJ5dGVzU3RyaW5nLmxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc1RyeXRlcyA9IHRyeXRlc1N0cmluZy5zdWJzdHIoMCwgQWRkcmVzcy5MRU5HVEgpO1xyXG4gICAgICAgIGxldCBjaGVja3N1bVRyeXRlcztcclxuICAgICAgICBpZiAodHJ5dGVzU3RyaW5nLmxlbmd0aCA9PT0gQWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTSkge1xyXG4gICAgICAgICAgICBjaGVja3N1bVRyeXRlcyA9IHRyeXRlc1N0cmluZy5zdWJzdHIoQWRkcmVzcy5MRU5HVEgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEFkZHJlc3MoYWRkcmVzc1RyeXRlcywgY2hlY2tzdW1Ucnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBhZGRyZXNzIHRvIHRyeXRlcyB3aXRoIG5vIGNoZWNrc3VtLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIGFkZHJlc3Mgd2l0aCBubyBjaGVja3N1bS5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX2FkZHJlc3NUcnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBhZGRyZXNzIHRvIHRyeXRlcyB3aXRoIGEgY2hlY2tzdW0sIGNyZWF0aW5nIGEgYmxhbmsgb25lIGlmIG5lZWRlZC5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSBhZGRyZXNzIHdpdGggY2hlY2tzdSwuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzV2l0aENoZWNrc3VtKCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkodGhpcy5fY2hlY2tzdW1Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl9hZGRyZXNzVHJ5dGVzICsgdGhpcy5fY2hlY2tzdW1Ucnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhpcyBhZGRyZXNzIGhhcyBubyBjaGVja3N1bSBjYWxjdWxhdGVkIGZvciBpdGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkodGhpcy5fY2hlY2tzdW1Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRyZXNzVHJ5dGVzICsgdGhpcy5fY2hlY2tzdW1Ucnl0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkcmVzc1RyeXRlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIGEgdmFsaWQgYWRkcmVzcyB3aXRob3V0IGNoZWNrc3VtICg4MSkuXHJcbiAqL1xyXG5BZGRyZXNzLkxFTkdUSCA9IDgxO1xyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgYW4gYWRkcmVzcyBjaGVja3N1bSAoOSkuXHJcbiAqL1xyXG5BZGRyZXNzLkxFTkdUSF9DSEVDS1NVTSA9IDk7XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciB2YWxpZCBhZGRyZXNzIHdpdGggY2hlY2tzdW0gKDkwKS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIX1dJVEhfQ0hFQ0tTVU0gPSBBZGRyZXNzLkxFTkdUSCArIEFkZHJlc3MuTEVOR1RIX0NIRUNLU1VNO1xyXG4vKipcclxuICogQW4gZW1wdHkgaGFzaCBhbGwgOXMuXHJcbiAqL1xyXG5BZGRyZXNzLkVNUFRZID0gQWRkcmVzcy5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChBZGRyZXNzLkxFTkdUSCkpKTtcclxuZXhwb3J0cy5BZGRyZXNzID0gQWRkcmVzcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVdSa2NtVnpjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWtZWFJoTDJGa1pISmxjM011ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN4clJFRkJLME03UVVGREwwTXNjVU5CUVd0RE8wRkJSV3hET3p0SFFVVkhPMEZCUTBnN1NVRjNRa2tzWlVGQlpUdEpRVU5tTEZsQlFXOUNMR0ZCUVhGQ0xFVkJRVVVzWTBGQmMwSTdVVUZETjBRc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eGhRVUZoTEVOQlFVTTdVVUZEY0VNc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlNTeGpRVUZqTEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFXVTdVVUZEY0VNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzWlVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNoRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRFpEUVVFMlF5eERRVUZETEVOQlFVTTdVVUZEZGtVc1EwRkJRenRSUVVWRUxFMUJRVTBzV1VGQldTeEhRVUZITEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVWNFF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hMUVVGTExFOUJRVThzUTBGQlF5eE5RVUZOTEVsQlFVa3NXVUZCV1N4RFFVRkRMRTFCUVUwc1MwRkJTeXhQUVVGUExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBITEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHZERRVUZuUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hQUVVGUExFOUJRVThzUTBGQlF5eHZRa0ZCYjBJc2RVSkJRWFZDTEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1dVRkJXU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYmtzc1EwRkJRenRSUVVWRUxFMUJRVTBzWVVGQllTeEhRVUZITEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTNSQ3hKUVVGSkxHTkJRV01zUTBGQlF6dFJRVU51UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeExRVUZMTEU5QlFVOHNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZGtRc1kwRkJZeXhIUVVGSExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM3BFTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zWVVGQllTeEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUTNSRUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVFVGQlRTeERRVUZETEdWQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4dlFrRkJiMEk3VVVGRGRrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bERMRTFCUVUwc1EwRkJReXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzFGQlEzcEZMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5LTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHZEVRVUZuUkN4RFFVRkRMRU5CUVVNN1VVRkRNVVVzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bERMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNN1VVRkRkRVFzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTBvc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTTdVVUZETDBJc1EwRkJRenRKUVVOTUxFTkJRVU03TzBGQmJrWkVPenRIUVVWSE8wRkJRMjlDTEdOQlFVMHNSMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkRNME03TzBkQlJVYzdRVUZEYjBJc2RVSkJRV1VzUjBGQlZ5eERRVUZETEVOQlFVTTdRVUZEYmtRN08wZEJSVWM3UVVGRGIwSXNORUpCUVc5Q0xFZEJRVmNzVDBGQlR5eERRVUZETEUxQlFVMHNSMEZCUnl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRE8wRkJSUzlHT3p0SFFVVkhPMEZCUTI5Q0xHRkJRVXNzUjBGQldTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQmFrSTVSeXd3UWtGeFJrTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL2FkZHJlc3MudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnRzLlxyXG4gKi9cclxuY2xhc3MgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgc2lnbmF0dXJlIGZyYWdtZW50IGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBUaGUgdHJ5dGVzIHRvIGNyZWF0ZSB0aGUgc2lnbmF0dXJlIGZyYWdtZW50IGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50Lmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBzaG91bGQgYmUgJHtTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudChzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBzaWduYXR1cmUgZnJhZ21lbnQgdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIHNpZ25hdHVyZSBmcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXMudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBvZiBhIHZhbGlkIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50ICgyMTg3KVxyXG4gKi9cclxuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCA9IDIxODc7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudCBhbGwgOXMuXHJcbiAqL1xyXG5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuRU1QVFkgPSBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkpKTtcclxuZXhwb3J0cy5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgPSBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMybG5ibUYwZFhKbFRXVnpjMkZuWlVaeVlXZHRaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdmMybG5ibUYwZFhKbFRXVnpjMkZuWlVaeVlXZHRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc2EwUkJRU3RETzBGQlF5OURMSEZEUVVGclF6dEJRVVZzUXpzN1IwRkZSenRCUVVOSU8wbEJZVWtzWlVGQlpUdEpRVU5tTEZsQlFXOUNMRTFCUVdNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMSGRDUVVGblF6dFJRVU55UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMSGRDUVVGM1FpeEZRVUZGTEdWQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlJDeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXc0UkVGQk9FUXNRMEZCUXl4RFFVRkRPMUZCUTNoR0xFTkJRVU03VVVGRlJDeE5RVUZOTEUxQlFVMHNSMEZCUnl4M1FrRkJkMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVTnFSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEV0QlFVc3NkMEpCUVhkQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTNReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3d1EwRkJNRU1zZDBKQlFYZENMRU5CUVVNc1RVRkJUU3gxUWtGQmRVSXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGRFa3NRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhKUVVGSkxIZENRVUYzUWl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVOQlFVTTdTVUZEYkVVc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRMjVETEVOQlFVTTdPMEZCYUVSRU96dEhRVVZITzBGQlEyOUNMQ3RDUVVGTkxFZEJRVmNzU1VGQlNTeERRVUZETzBGQlF6ZERPenRIUVVWSE8wRkJRMjlDTERoQ1FVRkxMRWRCUVRaQ0xIZENRVUYzUWl4RFFVRkRMRlZCUVZVc1EwRkJReXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJVbXBMTERSRVFXdEVReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL3NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2FjdGlvblwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBzcG9uZ2VGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgZm9yIHRyYW5zYWN0aW9ucy5cclxuICogQ29udmVydGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lvdGEubGliLmpzL2Jsb2IvbWFzdGVyL2xpYi9jcnlwdG8vc2lnbmluZy9zaWduaW5nLmpzXHJcbiAqL1xyXG5jbGFzcyBUcmFuc2FjdGlvbkhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0aGUgaGFzaCBmb3IgYSB0cmFuc2FjdGlvbi5cclxuICAgICAqIEBwYXJhbSB0cmFuc2FjdGlvbiBUaGUgdHJhbnNhY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGhhc2guXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgaGFzaCBvZiB0aHIgdHJhbnNhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBoYXNoKHRyYW5zYWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyYW5zYWN0aW9uLCB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cmFuc2FjdGlvbiBtdXN0IGJlIG9mIHR5cGUgVHJhbnNhY3Rpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN1cmwgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShcImN1cmxcIik7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ucml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyh0cmFuc2FjdGlvbi50b1RyeXRlcygpKS50b0FycmF5KCk7XHJcbiAgICAgICAgY3VybC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY3VybC5hYnNvcmIodHJhbnNhY3Rpb25Ucml0cywgMCwgdHJhbnNhY3Rpb25Ucml0cy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hUcml0cyA9IG5ldyBJbnQ4QXJyYXkoY3VybC5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpKTtcclxuICAgICAgICBjdXJsLnNxdWVlemUoaGFzaFRyaXRzLCAwLCBoYXNoVHJpdHMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cml0c18xLlRyaXRzLmZyb21BcnJheShoYXNoVHJpdHMpLnRvVHJ5dGVzKCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVHJhbnNhY3Rpb25IZWxwZXIgPSBUcmFuc2FjdGlvbkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKaGJuTmhZM1JwYjI1SVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OTBjbUZ1YzJGamRHbHZia2hsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMSGxFUVVGelJEdEJRVU4wUkN4MVJVRkJiMFU3UVVGRGNFVXNNa1JCUVhkRU8wRkJRM2hFTEhORVFVRnRSRHRCUVVOdVJDdzRSRUZCTWtRN1FVRkZNMFE3T3p0SFFVZEhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUYzUWp0UlFVTjJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUlVGQlJTeDVRa0ZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEWkRRVUUyUXl4RFFVRkRMRU5CUVVNN1VVRkRla1VzUTBGQlF6dFJRVVZFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM0pFTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzWVVGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVVTFSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRExFVkJRVVVzWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRk1VUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZOME1zVFVGQlRTeERRVUZETEZkQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1lVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRMnhGTEVOQlFVTTdRMEZEU2p0QlFYUkNSQ3c0UTBGelFrTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL3RyYW5zYWN0aW9uSGVscGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCBhZGRyZXNzXzEgPSByZXF1aXJlKFwiLi9hZGRyZXNzXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiLi9oYXNoXCIpO1xyXG5jb25zdCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMSA9IHJlcXVpcmUoXCIuL3NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFwiKTtcclxuY29uc3QgdGFnXzEgPSByZXF1aXJlKFwiLi90YWdcIik7XHJcbmNvbnN0IHRyeXRlTnVtYmVyXzEgPSByZXF1aXJlKFwiLi90cnl0ZU51bWJlclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cmFuc2FjdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBUcmFuc2FjdGlvbiB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJhbnNhY3Rpb24gZnJvbSBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBUaGUgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQuXHJcbiAgICAgKiBAcGFyYW0gYWRkcmVzcyBUaGUgYWRkcmVzcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gb2Jzb2xldGVUYWcgT2Jzb2xldGUgdHJhbnNhY3Rpb24gdGFnLlxyXG4gICAgICogQHBhcmFtIHRpbWVzdGFtcCBUaGUgdGltZXN0YW1wLlxyXG4gICAgICogQHBhcmFtIGN1cnJlbnRJbmRleCBUaGUgY3VycmVudCBpbmRleC5cclxuICAgICAqIEBwYXJhbSBsYXN0SW5kZXggVGhlIGxhc3QgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0gYnVuZGxlIFRoZSBidW5kbGUuXHJcbiAgICAgKiBAcGFyYW0gdHJ1bmtUcmFuc2FjdGlvbiBUaGUgdHJ1bmsgdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gYnJhbmNoVHJhbnNhY3Rpb24gVGhlIGJyYW5jaCB0cmFuc2FjdGlvbi5cclxuICAgICAqIEBwYXJhbSB0YWcgVGhlIHRhZy5cclxuICAgICAqIEBwYXJhbSBhdHRhY2htZW50VGltZXN0YW1wIFRoZSBhdHRhY2htZW50IHRpbWVzdGFtcC5cclxuICAgICAqIEBwYXJhbSBhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCBUaGUgYXR0YWNobWVudCB0aW1lc3RhbXAgbG93ZXIgYm91bmQuXHJcbiAgICAgKiBAcGFyYW0gYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgIFRoZSBhdHRhY2htZW50IHRpbWVzdGFtcCB1cHBlciBib3VuZC5cclxuICAgICAqIEBwYXJhbSBub25jZSBUaGUgbm9uY2UuXHJcbiAgICAgKiBAcmV0dXJuIE5ldyBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21QYXJhbXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LCBhZGRyZXNzLCB2YWx1ZSwgb2Jzb2xldGVUYWcsIHRpbWVzdGFtcCwgY3VycmVudEluZGV4LCBsYXN0SW5kZXgsIGJ1bmRsZSwgdHJ1bmtUcmFuc2FjdGlvbiwgYnJhbmNoVHJhbnNhY3Rpb24sIHRhZywgYXR0YWNobWVudFRpbWVzdGFtcCwgYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQsIGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kLCBub25jZSkge1xyXG4gICAgICAgIGNvbnN0IHR4ID0gbmV3IFRyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgdHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50O1xyXG4gICAgICAgIHR4LmFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgIHR4LnZhbHVlID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKHZhbHVlLCAxMSk7XHJcbiAgICAgICAgdHgub2Jzb2xldGVUYWcgPSBvYnNvbGV0ZVRhZztcclxuICAgICAgICB0eC50aW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodGltZXN0YW1wKTtcclxuICAgICAgICB0eC5jdXJyZW50SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoY3VycmVudEluZGV4KTtcclxuICAgICAgICB0eC5sYXN0SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIobGFzdEluZGV4KTtcclxuICAgICAgICB0eC5idW5kbGUgPSBidW5kbGU7XHJcbiAgICAgICAgdHgudHJ1bmtUcmFuc2FjdGlvbiA9IHRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgdHguYnJhbmNoVHJhbnNhY3Rpb24gPSBicmFuY2hUcmFuc2FjdGlvbjtcclxuICAgICAgICB0eC50YWcgPSB0YWc7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wKTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQpO1xyXG4gICAgICAgIHR4Lm5vbmNlID0gbm9uY2U7XHJcbiAgICAgICAgcmV0dXJuIHR4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJhbnNhY3Rpb24gZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgZm9yIHRoZSB0aGlzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgdGhpcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModHJ5dGVzKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRyeXRlcyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0cnl0ZXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gVHJhbnNhY3Rpb24uTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnl0ZXMgbXVzdCBiZSAke1RyYW5zYWN0aW9uLkxFTkdUSH0gaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNoZWNrSW5kZXhTdGFydCA9IDIyNzk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tJbmRleExlbmd0aCA9IDE2O1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gdHJ5dGVzLnN1YihjaGVja0luZGV4U3RhcnQsIGNoZWNrSW5kZXhMZW5ndGgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKGNoZWNrICE9PSBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIGJldHdlZW4gJHtjaGVja0luZGV4U3RhcnR9IGFuZCAke2NoZWNrSW5kZXhTdGFydCArIGNoZWNrSW5kZXhMZW5ndGh9IHNob3VsZCBiZSBhbGwgOXNgLCB7IGNoZWNrIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0eCA9IG5ldyBUcmFuc2FjdGlvbigpO1xyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IDA7XHJcbiAgICAgICAgdHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEg7XHJcbiAgICAgICAgdHguYWRkcmVzcyA9IGFkZHJlc3NfMS5BZGRyZXNzLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgYWRkcmVzc18xLkFkZHJlc3MuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gYWRkcmVzc18xLkFkZHJlc3MuTEVOR1RIO1xyXG4gICAgICAgIHR4LnZhbHVlID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIDExKSwgMTEpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IDExO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFX0xFTkdUSDtcclxuICAgICAgICB0eC5vYnNvbGV0ZVRhZyA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0YWdfMS5UYWcuTEVOR1RIO1xyXG4gICAgICAgIHR4LnRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5jdXJyZW50SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHgubGFzdEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmJ1bmRsZSA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LnRydW5rVHJhbnNhY3Rpb24gPSBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIGhhc2hfMS5IYXNoLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IGhhc2hfMS5IYXNoLkxFTkdUSDtcclxuICAgICAgICB0eC5icmFuY2hUcmFuc2FjdGlvbiA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LnRhZyA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0YWdfMS5UYWcuTEVOR1RIO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHgubm9uY2UgPSB0YWdfMS5UYWcuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgcmV0dXJuIHR4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cmFuc2FjdGlvbiB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSB0cmFuc2FjdGlvbiBhcyB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDogdGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLmFkZHJlc3MsIGFkZHJlc3NfMS5BZGRyZXNzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYWRkcmVzcyBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBhZGRyZXNzOiB0aGlzLmFkZHJlc3MgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLm9ic29sZXRlVGFnLCB0YWdfMS5UYWcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBvYnNvbGV0ZVRhZyBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBvYnNvbGV0ZVRhZzogdGhpcy5vYnNvbGV0ZVRhZyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuYnVuZGxlLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGJ1bmRsZSBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBidW5kbGU6IHRoaXMuYnVuZGxlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy50cnVua1RyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRydW5rVHJhbnNhY3Rpb24gbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgdHJ1bmtUcmFuc2FjdGlvbjogdGhpcy50cnVua1RyYW5zYWN0aW9uIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5icmFuY2hUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBicmFuY2hUcmFuc2FjdGlvbiBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBicmFuY2hUcmFuc2FjdGlvbjogdGhpcy5icmFuY2hUcmFuc2FjdGlvbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMubm9uY2UsIHRhZ18xLlRhZykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIG5vbmNlIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IG5vbmNlOiB0aGlzLm5vbmNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXMgPSB0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLmFkZHJlc3MudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudmFsdWUgfHwgVHJhbnNhY3Rpb24uRU1QVFlfMTEpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFXHJcbiAgICAgICAgICAgICsgdGhpcy5vYnNvbGV0ZVRhZy50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy50aW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5jdXJyZW50SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5sYXN0SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLmJ1bmRsZS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLnRydW5rVHJhbnNhY3Rpb24udG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5icmFuY2hUcmFuc2FjdGlvbi50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy50YWcgfHwgdGhpcy5vYnNvbGV0ZVRhZykudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLm5vbmNlLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0cnl0ZXMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IFRyYW5zYWN0aW9uLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIG11c3QgYmUgJHtUcmFuc2FjdGlvbi5MRU5HVEh9IGluIGxlbmd0aCAke2xlbmd0aH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBge1xuXFx0c2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50OiBcIiR7KHRoaXMuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHx8IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRhZGRyZXNzOiBcIiR7KHRoaXMuYWRkcmVzcyB8fCBhZGRyZXNzXzEuQWRkcmVzcy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR2YWx1ZTogJHsodGhpcy52YWx1ZSB8fCBUcmFuc2FjdGlvbi5FTVBUWV8xMSkudG9OdW1iZXIoKX1cblxcdG9ic29sZXRlVGFnOiBcIiR7KHRoaXMub2Jzb2xldGVUYWcgfHwgdGFnXzEuVGFnLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdHRpbWVzdGFtcDogJHsodGhpcy50aW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0Y3VycmVudEluZGV4OiAkeyh0aGlzLmN1cnJlbnRJbmRleCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRsYXN0SW5kZXg6ICR7KHRoaXMubGFzdEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGJ1bmRsZTogXCIkeyh0aGlzLmJ1bmRsZSB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0cnVua1RyYW5zYWN0aW9uOiBcIiR7KHRoaXMudHJ1bmtUcmFuc2FjdGlvbiB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRicmFuY2hUcmFuc2FjdGlvbjogXCIkeyh0aGlzLmJyYW5jaFRyYW5zYWN0aW9uIHx8IGhhc2hfMS5IYXNoLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdHRhZzogXCIkeyh0aGlzLnRhZyB8fCB0aGlzLm9ic29sZXRlVGFnIHx8IHRhZ18xLlRhZy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRhdHRhY2htZW50VGltZXN0YW1wOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0YXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQ6ICR7KHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0YXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQ6ICR7KHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0bm9uY2U6IFwiJHsodGhpcy5ub25jZSB8fCB0YWdfMS5UYWcuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxufWA7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCB0cmFuc2FjdGlvbiAoMjY3MykuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5MRU5HVEggPSAyNjczO1xyXG4vKipcclxuICogVGhlIGxlbmd0aCBvZiBhIHZhbGlkIGNoZWNrIHZhbHVlICgxNikuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5DSEVDS19WQUxVRV9MRU5HVEggPSAxNjtcclxuLyoqXHJcbiAqIFRoZSBjaGVjayB2YWx1ZSBmb3IgYnVuZGxlcyBhbGwgOXMuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5DSEVDS19WQUxVRSA9IFwiOVwiLnJlcGVhdChUcmFuc2FjdGlvbi5DSEVDS19WQUxVRV9MRU5HVEgpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuVHJhbnNhY3Rpb24uRU1QVFlfMTEgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoMCwgMTEpO1xyXG5leHBvcnRzLlRyYW5zYWN0aW9uID0gVHJhbnNhY3Rpb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5oWTNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY21GdWMyRmpkR2x2Ymk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxHdEVRVUVyUXp0QlFVTXZReXgxUTBGQmIwTTdRVUZEY0VNc2FVTkJRVGhDTzBGQlF6bENMSGxGUVVGelJUdEJRVU4wUlN3clFrRkJORUk3UVVGRE5VSXNLME5CUVRSRE8wRkJRelZETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWjBaSkxHVkJRV1U3U1VGRFpqdEpRVU5CTEVOQlFVTTdTVUZGUkRzN096czdPenM3T3pzN096czdPenM3TzA5QmEwSkhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eDNRa0ZCYTBRc1JVRkRiRVFzVDBGQlowSXNSVUZEYUVJc1MwRkJZU3hGUVVOaUxGZEJRV2RDTEVWQlEyaENMRk5CUVdsQ0xFVkJRMnBDTEZsQlFXOUNMRVZCUTNCQ0xGTkJRV2xDTEVWQlEycENMRTFCUVZrc1JVRkRXaXhuUWtGQmMwSXNSVUZEZEVJc2FVSkJRWFZDTEVWQlEzWkNMRWRCUVZFc1JVRkRVaXh0UWtGQk1rSXNSVUZETTBJc05rSkJRWEZETEVWQlEzSkRMRFpDUVVGeFF5eEZRVU55UXl4TFFVRlZPMUZCUXk5Q0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkROMElzUlVGQlJTeERRVUZETEhkQ1FVRjNRaXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMUZCUTNaRUxFVkJRVVVzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTNKQ0xFVkJRVVVzUTBGQlF5eExRVUZMTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpkRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eFRRVUZUTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYWtRc1JVRkJSU3hEUVVGRExGbEJRVmtzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU4yUkN4RlFVRkZMRU5CUVVNc1UwRkJVeXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRMnBFTEVWQlFVVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRMjVDTEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRSUVVOMlF5eEZRVUZGTEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkRla01zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRkRZaXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dFJRVU55UlN4RlFVRkZMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1EwRkJRenRSUVVONlJpeEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjZSaXhGUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTnFRaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETzBsQlEyUXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRV003VVVGRGJrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1pVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERSRFFVRTBReXhEUVVGRExFTkJRVU03VVVGRGRFVXNRMEZCUXp0UlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVTXZRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEV0QlFVc3NWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zYzBKQlFYTkNMRmRCUVZjc1EwRkJReXhOUVVGTkxGbEJRVmtzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRNVVlzUTBGQlF6dFJRVVZFTEUxQlFVMHNaVUZCWlN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVNM1FpeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU0xUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEdWQlFXVXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlhaRkxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NTMEZCU3l4WFFVRlhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHpRa0ZCYzBJc1pVRkJaU3hSUVVGUkxHVkJRV1VzUjBGQlJ5eG5Ra0ZCWjBJc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM1pKTEVOQlFVTTdVVUZGUkN4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxGZEJRVmNzUlVGQlJTeERRVUZETzFGQlJUZENMRWxCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5xUWl4RlFVRkZMRU5CUVVNc2QwSkJRWGRDTEVkQlFVY3NiVVJCUVhkQ0xFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxHMUVRVUYzUWl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVrZ3NVVUZCVVN4SlFVRkpMRzFFUVVGM1FpeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTTFReXhGUVVGRkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMR2xDUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjBSU3hSUVVGUkxFbEJRVWtzYVVKQlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRNMElzUlVGQlJTeERRVUZETEV0QlFVc3NSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTm9SU3hSUVVGUkxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEyWXNVVUZCVVN4SlFVRkpMRmRCUVZjc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0UlFVTXpReXhGUVVGRkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZOQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNVMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFVXNVVUZCVVN4SlFVRkpMRk5CUVVjc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRGRrSXNSVUZCUlN4RFFVRkRMRk5CUVZNc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeDVRa0ZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFWXNVVUZCVVN4SlFVRkpMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETzFGQlEycERMRVZCUVVVc1EwRkJReXhaUVVGWkxFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkdMRkZCUVZFc1NVRkJTU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTnFReXhGUVVGRkxFTkJRVU1zVTBGQlV5eEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNSaXhSUVVGUkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRha01zUlVGQlJTeERRVUZETEUxQlFVMHNSMEZCUnl4WFFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRmRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF5OUVMRkZCUVZFc1NVRkJTU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEzaENMRVZCUVVVc1EwRkJReXhuUWtGQlowSXNSMEZCUnl4WFFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRmRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzcEZMRkZCUVZFc1NVRkJTU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEzaENMRVZCUVVVc1EwRkJReXhwUWtGQmFVSXNSMEZCUnl4WFFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRmRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkZMRkZCUVZFc1NVRkJTU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEzaENMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzVTBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeFRRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNeFJDeFJRVUZSTEVsQlFVa3NVMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVOMlFpeEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkdMRkZCUVZFc1NVRkJTU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTnFReXhGUVVGRkxFTkJRVU1zTmtKQlFUWkNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM1JITEZGQlFWRXNTVUZCU1N4NVFrRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU5xUXl4RlFVRkZMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSSExGRkJRVkVzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVOcVF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1UwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZGTlVRc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU5rTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNiVVJCUVhkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVZc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNkVVZCUVhWRkxFVkJRVVVzUlVGQlJTeDNRa0ZCZDBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zZDBKQlFYZENMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemxLTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzYVVKQlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UkVGQmMwUXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTXpSeXhEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRk5CUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5d3dSRUZCTUVRc1JVRkJSU3hGUVVGRkxGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMlNDeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxGZEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4eFJFRkJjVVFzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU40Unl4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1YwRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkVMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEN0RVFVRXJSQ3hGUVVGRkxFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMFNTeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNWMEZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHZEZRVUZuUlN4RlFVRkZMRVZCUVVVc2FVSkJRV2xDTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjZTU3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHZSRUZCYjBRc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOeVJ5eERRVUZETzFGQlJVUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU0xUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTnNReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTXhSQ3hYUVVGWExFTkJRVU1zVjBGQlZ6dGpRVU4yUWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTjBReXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkROMFFzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRMmhGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU0zUkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTnFReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlF6TkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRE5VTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGNFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRka1VzUTBGQlF5eEpRVUZKTEVOQlFVTXNOa0pCUVRaQ0xFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEYWtZc1EwRkJReXhKUVVGSkxFTkJRVU1zTmtKQlFUWkNMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGFrWXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVVjJReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNTMEZCU3l4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHpRa0ZCYzBJc1YwRkJWeXhEUVVGRExFMUJRVTBzWTBGQll5eE5RVUZOTEVWQlFVVXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGNFY3NRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTNKRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVFVGQlRTeERRVUZET3l0Q1FVTm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eDNRa0ZCZDBJc1NVRkJTU3h0UkVGQmQwSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEZUVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEdsQ1FVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMWRCUTNoRUxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTzJ0Q1FVTjRReXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVsQlFVa3NVMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0bFFVTjRSQ3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVTdhMEpCUXk5RExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlR0bFFVTjRSQ3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVTdZVUZEY0VRc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEZkQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdkVUpCUTNaRExFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxGZEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3ZDBKQlF6RkVMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4SlFVRkpMRmRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1ZVRkRNVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzVTBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdDVRa0ZEYkVRc1EwRkJReXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVN2JVTkJRMnhFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTzIxRFFVTjBSU3hEUVVGRExFbEJRVWtzUTBGQlF5dzJRa0ZCTmtJc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSVHRaUVVNM1JpeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1UwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRGUVVONlJDeERRVUZETzBsQlEwTXNRMEZCUXpzN1FVRndVa1E3TzBkQlJVYzdRVUZEYjBJc2EwSkJRVTBzUjBGQlZ5eEpRVUZKTEVOQlFVTTdRVUZGTjBNN08wZEJSVWM3UVVGRGIwSXNPRUpCUVd0Q0xFZEJRVmNzUlVGQlJTeERRVUZETzBGQlJYWkVPenRIUVVWSE8wRkJRMjlDTEhWQ1FVRlhMRWRCUVZjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dEJRVVY0Uml4bFFVRmxPMEZCUTFNc2IwSkJRVkVzUjBGQlowSXNlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCYWtKc1JpeHJRMEZ6VWtNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvdHJhbnNhY3Rpb24udHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdGFncy5cclxuICovXHJcbmNsYXNzIFRhZyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRhZyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB0YWcgVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIHRhZyBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVGFnLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyh0YWcpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGFnLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdGFnIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0cnl0ZXNTdHJpbmcgPSB0YWcudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodHJ5dGVzU3RyaW5nLmxlbmd0aCA+IFRhZy5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRhZyBzaG91bGQgYmUgYXQgbW9zdCAke1RhZy5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGg6IHRyeXRlc1N0cmluZy5sZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0cnl0ZXNTdHJpbmcubGVuZ3RoIDwgVGFnLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0cnl0ZXNTdHJpbmcgKz0gXCI5XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVGFnKHRyeXRlc1N0cmluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRhZyB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgdGFnLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCB0YWcgKDI3KS5cclxuICovXHJcblRhZy5MRU5HVEggPSAyNztcclxuLyoqXHJcbiAqIEFuIGVtcHR5IHRhZyBhbGwgOXMuXHJcbiAqL1xyXG5UYWcuRU1QVFkgPSBUYWcuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoVGFnLkxFTkdUSCkpKTtcclxuZXhwb3J0cy5UYWcgPSBUYWc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHRm5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2ZEdGbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNhMFJCUVN0RE8wRkJReTlETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWVVrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEUxQlFXTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFWYzdVVUZEYUVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzWlVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSGxEUVVGNVF5eERRVUZETEVOQlFVTTdVVUZEYmtVc1EwRkJRenRSUVVWRUxFbEJRVWtzV1VGQldTeEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVWc1F5eEZRVUZGTEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRFpDUVVFMlFpeEhRVUZITEVOQlFVTXNUVUZCVFN4MVFrRkJkVUlzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4WlFVRlpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42U0N4RFFVRkRPMUZCUlVRc1QwRkJUeXhaUVVGWkxFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRaUVVOMFF5eFpRVUZaTEVsQlFVa3NSMEZCUnl4RFFVRkRPMUZCUTNoQ0xFTkJRVU03VVVGRlJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4TlFVRk5MRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZET3p0QlFYUkVSRHM3UjBGRlJ6dEJRVU52UWl4VlFVRk5MRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRek5ET3p0SFFVVkhPMEZCUTI5Q0xGTkJRVXNzUjBGQlVTeEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlVteEhMR3RDUVhkRVF5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvdGFnLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCIuL3RyaXRzXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyeXRlIG51bWJlci5cclxuICovXHJcbmNsYXNzIFRyeXRlTnVtYmVyIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGUgbnVtYmVyIGZyb20gbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdmFsdWUgdG8gY3JlYXRlIHRoZSBvYmplY3QgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIHRyeXRlIGxlbmd0aCB0byBwYWQgdGhlIG51bWJlciB3aXRoLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJ5dGVOdW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tTnVtYmVyKHZhbHVlLCBsZW5ndGggPSBUcnl0ZU51bWJlci5MRU5HVEhfOSkge1xyXG4gICAgICAgIGxldCB0cnl0ZXM7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggc2hvdWxkIGJlIGEgbnVtYmVyID4gMFwiLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0cnl0ZXMgPSBcIjlcIi5yZXBlYXQobGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgaXMgbm90IGFuIGludGVnZXJcIiwgeyB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0cml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbU51bWJlcih2YWx1ZSkudG9OdW1iZXJBcnJheSgpO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJpdHMubGVuZ3RoIDwgbGVuZ3RoICogMykge1xyXG4gICAgICAgICAgICAgICAgdHJpdHMucHVzaCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnl0ZXMgPSB0cml0c18xLlRyaXRzLmZyb21OdW1iZXJBcnJheSh0cml0cykudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlTnVtYmVyKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cnl0ZSBudW1iZXIgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB2YWx1ZSB0byBjcmVhdGUgdGhlIG9iamVjdCBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgdHJ5dGUgbGVuZ3RoIHRvIHBhZCB0aGUgbnVtYmVyIHdpdGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcnl0ZU51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModmFsdWUsIGxlbmd0aCA9IFRyeXRlTnVtYmVyLkxFTkdUSF85KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRyeXRlU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGxlbmd0aCBzaG91bGQgYmUgYSBudW1iZXIgPiAwXCIsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJ5dGVTdHJpbmcubGVuZ3RoID4gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgY29udGFpbnMgdG9vIG1hbnkgY2hhcmFjdGVyc1wiLCB7IGxlbmd0aDogdHJ5dGVTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodHJ5dGVTdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRyeXRlU3RyaW5nICs9IFwiOVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlTnVtYmVyKHRyeXRlU3RyaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJ5dGUgbnVtYmVyIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSB0cnl0ZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cnl0ZSBudW1iZXIgdG8gbnVtYmVyLlxyXG4gICAgICogQHJldHVybnMgbnVtYmVyIHZhbHVlIG9mIHRoZSB0cnl0ZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKSkudG9OdW1iZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB2YWx1ZU9mKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIExlbmd0aCBvZiBhIG51bWJlciB0aGF0IHVzZXMgOSB0cnl0ZXMuXHJcbiAqL1xyXG5Ucnl0ZU51bWJlci5MRU5HVEhfOSA9IDk7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSA5IGxlbmd0aCB0cnl0ZSBudW1iZXIuXHJcbiAqL1xyXG5Ucnl0ZU51bWJlci5FTVBUWV85ID0gVHJ5dGVOdW1iZXIuZnJvbU51bWJlcigwLCBUcnl0ZU51bWJlci5MRU5HVEhfOSk7XHJcbmV4cG9ydHMuVHJ5dGVOdW1iZXIgPSBUcnl0ZU51bWJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKNWRHVk9kVzFpWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOTBjbmwwWlU1MWJXSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zYlVOQlFXZERPMEZCUTJoRExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1YwRkJWeXhEUVVGRExGRkJRVkU3VVVGRGVrVXNTVUZCU1N4TlFVRk5MRU5CUVVNN1VVRkZXQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHMURRVUZ0UXl4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42UlN4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bENMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTJoRExFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnFReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3MlFrRkJOa0lzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRiRVVzUTBGQlF6dFpRVVZFTEUxQlFVMHNTMEZCU3l4SFFVRkhMR0ZCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNN1dVRkZkRVFzVDBGQlR5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF6dG5Ra0ZETDBJc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNRaXhEUVVGRE8xbEJSVVFzVFVGQlRTeEhRVUZITEdGQlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRhRVVzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU51UXl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFXRXNSVUZCUlN4VFFVRnBRaXhYUVVGWExFTkJRVU1zVVVGQlVUdFJRVU42UlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hsUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNNa05CUVRKRExFTkJRVU1zUTBGQlF6dFJRVU55UlN4RFFVRkRPMUZCUTBRc1NVRkJTU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlc1RExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrUXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zYlVOQlFXMURMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzcEZMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE9VSXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZDBOQlFYZERMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRiRWNzUTBGQlF6dFJRVVZFTEU5QlFVOHNWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFVkJRVVVzUTBGQlF6dFpRVU5xUXl4WFFVRlhMRWxCUVVrc1IwRkJSeXhEUVVGRE8xRkJRM1pDTEVOQlFVTTdVVUZGUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hYUVVGWExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEZUVNc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hOUVVGTkxFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4TlFVRk5MRU5CUVVNc1lVRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNoRkxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFOUJRVTg3VVVGRFZpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRek5DTEVOQlFVTTdPMEZCTVVkRU96dEhRVVZITzBGQlEyOUNMRzlDUVVGUkxFZEJRVmNzUTBGQlF5eERRVUZETzBGQlF6VkRPenRIUVVWSE8wRkJRMjlDTEcxQ1FVRlBMRWRCUVdkQ0xGZEJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVkpzUnl4clEwRTBSME1pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS90cnl0ZU51bWJlci50cyIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kaWdlc3RzL3NoYTNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lcnJvci9jcnlwdG9FcnJvclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ZhY3Rvcmllcy9wcm9vZk9mV29ya0ZhY3RvcnlcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hhc2gvaXNzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9iaWdJbnRlZ2VySGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy90cmFuc2FjdGlvbkhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3Nwb25nZXMvY3VybFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3Nwb25nZXMva2VybFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0SFFVVkhPMEZCUTBnc2IwTkJRU3RDTzBGQlF5OUNMSGxEUVVGdlF6dEJRVU53UXl4dlJFRkJLME03UVVGREwwTXNLME5CUVRCRE8wRkJRekZETEdkRFFVRXlRanRCUVVNelFpeG5SRUZCTWtNN1FVRkRNME1zYVVSQlFUUkRPMEZCUnpWRExHMUVRVUU0UXp0QlFVTTVReXh2UTBGQkswSTdRVUZETDBJc2IwTkJRU3RDSW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvaW5kZXgudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBKc29uIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgSnNvbkhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIFN0cmluZ2lmeSBhbiBvYmplY3Qgd2l0aCByZWN1cnNpb24gYnJlYWtpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBKYXZhU2NyaXB0IHZhbHVlLCB1c3VhbGx5IGFuIG9iamVjdCBvciBhcnJheSwgdG8gYmUgY29udmVydGVkLlxyXG4gICAgICogQHBhcmFtIHJlcGxhY2VyIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIHRoZSByZXN1bHRzLlxyXG4gICAgICogQHBhcmFtIHNwYWNlIEFkZHMgaW5kZW50YXRpb24sIHdoaXRlIHNwYWNlLCBhbmQgbGluZSBicmVhayBjaGFyYWN0ZXJzIHRvIHRoZSByZXR1cm4tdmFsdWUgSlNPTiB0ZXh0IHRvIG1ha2UgaXQgZWFzaWVyIHRvIHJlYWQuXHJcbiAgICAgKiBAcmV0dXJucyBTdHJpbmcgdmVyc2lvbiBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3RyaW5naWZ5KHZhbHVlLCByZXBsYWNlciwgc3BhY2UpIHtcclxuICAgICAgICAvLyBlbGltaW5hdGVzIGFueSByZWN1cnNpb24gaW4gdGhlIHN0cmluZ2lmeVxyXG4gICAgICAgIGNvbnN0IGNhY2hlID0gW107XHJcbiAgICAgICAgY29uc3QgcmVjdXNpb25SZXBsYWNlciA9IChrZXksIHJlcGxhY2VWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiByZXBsYWNlVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlLmluZGV4T2YocmVwbGFjZVZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUucHVzaChyZXBsYWNlVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlciA/IHJlcGxhY2VyKGtleSwgcmVwbGFjZVZhbHVlKSA6IHJlcGxhY2VWYWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgcmVjdXNpb25SZXBsYWNlciwgc3BhY2UpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSnNvbkhlbHBlciA9IEpzb25IZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFuTnZia2hsYkhCbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDJwemIyNUlaV3h3WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCT3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3pzN08wOUJUVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVZVc1JVRkJSU3hSUVVFeVF5eEZRVUZGTEV0QlFYVkNPMUZCUTNCSExEUkRRVUUwUXp0UlFVTTFReXhOUVVGTkxFdEJRVXNzUjBGQlZTeEZRVUZGTEVOQlFVTTdVVUZGZUVJc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4RFFVRkRMRWRCUVZjc1JVRkJSU3haUVVGcFFpeEZRVUZGTEVWQlFVVTdXVUZEZUVRc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eFpRVUZaTEV0QlFVc3NVVUZCVVN4SlFVRkpMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzV1VGQldTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMjVHTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU55UXl4M1EwRkJkME03YjBKQlEzaERMRTFCUVUwc1EwRkJRenRuUWtGRFdDeERRVUZETzJkQ1FVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU5LTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03WjBKQlF6ZENMRU5CUVVNN1dVRkRUQ3hEUVVGRE8xbEJSVVFzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRMnBGTEVOQlFVTXNRMEZCUXp0UlFVVkdMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NSVUZCUlN4blFrRkJaMElzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTXhSQ3hEUVVGRE8wTkJRMG83UVVFelFrUXNaME5CTWtKREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvanNvbkhlbHBlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIik7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHByb29mIG9mIHdvcmsuXHJcbiAqL1xyXG5jbGFzcyBQcm9vZk9mV29ya0ZhY3RvcnkgZXh0ZW5kcyBmYWN0b3J5QmFzZV8xLkZhY3RvcnlCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogRG9uJ3QgYWxsb3cgbWFudWFsIGNvbnN0cnVjdGlvbiBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGZhY3RvcnkgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIVByb29mT2ZXb3JrRmFjdG9yeS5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUHJvb2ZPZldvcmtGYWN0b3J5Ll9pbnN0YW5jZSA9IG5ldyBQcm9vZk9mV29ya0ZhY3RvcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb29mT2ZXb3JrRmFjdG9yeS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9vZk9mV29ya0ZhY3RvcnkuaW5zdGFuY2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlByb29mT2ZXb3JrRmFjdG9yeSA9IFByb29mT2ZXb3JrRmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKdmIyWlBabGR2Y210R1lXTjBiM0o1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlpoWTNSdmNtbGxjeTl3Y205dlprOW1WMjl5YTBaaFkzUnZjbmt1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVWQ2UlRzN1IwRkZSenRCUVVOSUxIZENRVUZuUXl4VFFVRlJMSGxDUVVGNVFqdEpRVWszUkRzN08wOUJSMGM3U1VGRFNEdFJRVU5KTEV0QlFVc3NSVUZCUlN4RFFVRkRPMGxCUTFvc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUk8xRkJRMnhDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1F5eHJRa0ZCYTBJc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeHJRa0ZCYTBJc1JVRkJSU3hEUVVGRE8xRkJRelZFTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTNoRExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlEwd3NWMEZCVnp0UlFVTnFRaXhOUVVGTkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRGVrTXNRMEZCUXp0RFFVTktPMEZCTTBKRUxHZEVRVEpDUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZmFjdG9yaWVzL3Byb29mT2ZXb3JrRmFjdG9yeS50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImFtZFwiOlwiYmlnLWludGVnZXJcIixcImNvbW1vbmpzXCI6XCJiaWctaW50ZWdlclwiLFwiY29tbW9uanMyXCI6XCJiaWctaW50ZWdlclwiLFwicm9vdFwiOlwiYmlnSW50XCJ9XG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBhZGRyZXNzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9hZGRyZXNzXCIpO1xyXG5jb25zdCBhZGRyZXNzU2VjdXJpdHlfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2FkZHJlc3NTZWN1cml0eVwiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvaGFzaFwiKTtcclxuY29uc3Qgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcIik7XHJcbmNvbnN0IHRyaXRzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IHNwb25nZUZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuLi9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiKTtcclxuLyoqXHJcbiAqIElTUyBIYXNoaW5nIGZ1bmN0aW9ucy5cclxuICogQ29udmVydGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lyaS9zcmMvbWFpbi9qYXZhL2NvbS9pb3RhL2lyaS9oYXNoL0lTUy5qYXZhXHJcbiAqL1xyXG5jbGFzcyBJU1Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGtleSBmb3IgdGhlIHNlZWQuXHJcbiAgICAgKiBAcGFyYW0gc2VlZCBUaGUgc2VlZCB0byBjcmVhdGUgdGhlIGtleSBmb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IHRvIHVzZSBmb3IgdGhlIHNlZWQuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBzZWN1cml0eSBsZXZlbCB0byBjcmVhdGUgdGhlIGtleS5cclxuICAgICAqIEByZXR1cm5zIHRoZSBrZXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBrZXkoc2VlZCwgaW5kZXgsIHNlY3VyaXR5KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNlZWQsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzZWVkIG11c3QgYmUgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoaW5kZXgpIHx8IGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBpbmRleCBtdXN0IGJlIGFuIGludGVnZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHNlY3VyaXR5KSB8fCBzZWN1cml0eSA8IGFkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5sb3cgfHwgc2VjdXJpdHkgPiBhZGRyZXNzU2VjdXJpdHlfMS5BZGRyZXNzU2VjdXJpdHkuaGlnaCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVGhlIHNlY3VyaXR5IG11c3QgYmUgYW4gaW50ZWdlciA+PSAxIGFuZCA8PSAzYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlZWRUcml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyhzZWVkLnRvVHJ5dGVzKCkpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4VHJpdHMgPSB0cml0c18xLlRyaXRzLmZyb21OdW1iZXIoaW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IHN1YnNlZWQgPSB0cml0c18xLlRyaXRzLmFkZChzZWVkVHJpdHMsIGluZGV4VHJpdHMpLnRvQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBzdWJzZWVkTGVuZ3RoID0gc3Vic2VlZC5sZW5ndGg7XHJcbiAgICAgICAgY29uc3Qga2VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwia2VybFwiKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0ga2VybC5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIGtlcmwuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGtlcmwuYWJzb3JiKHN1YnNlZWQsIDAsIHN1YnNlZWRMZW5ndGgpO1xyXG4gICAgICAgIGtlcmwuc3F1ZWV6ZShzdWJzZWVkLCAwLCBzdWJzZWVkTGVuZ3RoKTtcclxuICAgICAgICBrZXJsLnJlc2V0KCk7XHJcbiAgICAgICAga2VybC5hYnNvcmIoc3Vic2VlZCwgMCwgc3Vic2VlZExlbmd0aCk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gbmV3IEludDhBcnJheShJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUyAqIGhhc2hMZW5ndGggKiBzZWN1cml0eSk7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IEludDhBcnJheShzdWJzZWVkTGVuZ3RoKTtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBzZWN1cml0eTtcclxuICAgICAgICB3aGlsZSAobG9jYWxMZW5ndGgtLSA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBrZXJsLnNxdWVlemUoYnVmZmVyLCAwLCBzdWJzZWVkTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGFzaExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5W29mZnNldCsrXSA9IGJ1ZmZlcltqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGRpZ2VzdHMgZm9yIHRoZSBnaXZlbiBzdWJzZWVkLlxyXG4gICAgICogQHBhcmFtIHN1YnNlZWQgVG8gY3JlYXRlIHRoZSBkaWdlc3RzIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkaWdlc3RzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGlnZXN0cyhzdWJzZWVkKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHN1YnNlZWQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc3Vic2VlZCBtdXN0IGJlIG9mIHR5cGUgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBoYXNoID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoXCJrZXJsXCIpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hMZW5ndGggPSBoYXNoLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnRMZW5ndGggPSBoYXNoTGVuZ3RoICogSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1M7XHJcbiAgICAgICAgaWYgKHN1YnNlZWQubGVuZ3RoICUgZnJhZ21lbnRMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzdWJzZWVkIGxlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtmcmFnbWVudExlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVSYW5nZSA9IElTUy5NQVhfVFJZVEVfVkFMVUUgLSBJU1MuTUlOX1RSWVRFX1ZBTFVFO1xyXG4gICAgICAgIGNvbnN0IGtleUxlbkRpdiA9IHN1YnNlZWQubGVuZ3RoIC8gZnJhZ21lbnRMZW5ndGg7XHJcbiAgICAgICAgY29uc3QgZGlnZXN0cyA9IG5ldyBJbnQ4QXJyYXkoa2V5TGVuRGl2ICogaGFzaExlbmd0aCk7XHJcbiAgICAgICAgbGV0IGJ1ZmZlcjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleUxlbkRpdjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlNdWwgPSBpICogZnJhZ21lbnRMZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUZyYWdtZW50ID0gc3Vic2VlZC5zbGljZShpTXVsLCBpTXVsICsgZnJhZ21lbnRMZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IElTUy5OVU1CRVJfT0ZfRlJBR01FTlRfQ0hVTktTOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpNdWwgPSBqICogaGFzaExlbmd0aDtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IGtleUZyYWdtZW50LnNsaWNlKGpNdWwsIGpNdWwgKyBoYXNoTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdHJ5dGVSYW5nZTsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzaC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc2guYWJzb3JiKGJ1ZmZlciwgMCwgYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzaC5zcXVlZXplKGJ1ZmZlciwgMCwgaGFzaExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGhhc2hMZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleUZyYWdtZW50W2pNdWwgKyBrXSA9IGJ1ZmZlcltrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYXNoLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIGhhc2guYWJzb3JiKGtleUZyYWdtZW50LCAwLCBrZXlGcmFnbWVudC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBoYXNoLnNxdWVlemUoYnVmZmVyLCAwLCBoYXNoTGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgaU11bDIgPSBpICogaGFzaExlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYXNoTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGRpZ2VzdHNbaU11bDIgKyBqXSA9IGJ1ZmZlcltqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlnZXN0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRoZSBhZGRyZXNzIGZvciB0aGUgZGlnZXN0cy5cclxuICAgICAqIEBwYXJhbSBkaWdlc3RzIFRoZSBkaWdlc3RzIHRvIGNyZWF0ZSB0aGUgYWRkcmVzcyBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgYWRkcmVzcyB0cml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZHJlc3MoZGlnZXN0cykge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShkaWdlc3RzLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGRpZ2VzdHMgbXVzdCBiZSBvZiB0eXBlIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qga2VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwia2VybFwiKTtcclxuICAgICAgICBjb25zdCBrZXJsSGFzaExlbmd0aCA9IGtlcmwuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKTtcclxuICAgICAgICBpZiAoZGlnZXN0cy5sZW5ndGggJSBrZXJsSGFzaExlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgSW52YWxpZCBkaWdlc3RzIGxlbmd0aCwgbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7a2VybEhhc2hMZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGtlcmwuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGtlcmwuYWJzb3JiKGRpZ2VzdHMsIDAsIGRpZ2VzdHMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzVHJpdHMgPSBuZXcgSW50OEFycmF5KGtlcmxIYXNoTGVuZ3RoKTtcclxuICAgICAgICBrZXJsLnNxdWVlemUoYWRkcmVzc1RyaXRzLCAwLCBhZGRyZXNzVHJpdHMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gYWRkcmVzc1RyaXRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgZGlnZXN0IG9mIHRoZSBub3JtYWxpemVkIGJ1bmRsZSBmcmFnbWVudC5cclxuICAgICAqIEBwYXJhbSBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQgVGhlIGZyYWdtZW50IHRvIGNyZWF0ZSBkaWdlc3QuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSB0cml0cyBmb3Igc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGlnZXN0IG9mIHRoZSBidW5kbGUgYW5kIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGlnZXN0KG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudCwgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQgbXVzdCBiZSBvZiB0eXBlIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgbXVzdCBiZSBvZiB0eXBlIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ1ZmZlcjtcclxuICAgICAgICBjb25zdCBrZXJsID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoXCJrZXJsXCIpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hMZW5ndGggPSBrZXJsLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAga2VybC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyBJbnQ4QXJyYXkoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnNsaWNlKGkgKiBoYXNoTGVuZ3RoLCAoaSArIDEpICogaGFzaExlbmd0aCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50W2ldIC0gSVNTLk1JTl9UUllURV9WQUxVRTsgaiA+IDA7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaktlcmwgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShcImtlcmxcIik7XHJcbiAgICAgICAgICAgICAgICBqS2VybC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICBqS2VybC5hYnNvcmIoYnVmZmVyLCAwLCBidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGpLZXJsLnNxdWVlemUoYnVmZmVyLCAwLCBqS2VybC5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXJsLmFic29yYihidWZmZXIsIDAsIGJ1ZmZlci5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBrZXJsLnNxdWVlemUoYnVmZmVyLCAwLCBrZXJsLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIikpO1xyXG4gICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5vcm1hbGl6ZWQgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZUhhc2ggVGhlIGhhc2ggb2YgdGhlIGJ1bmRsZS5cclxuICAgICAqIEByZXR1cm5zIHRoZSBub3JtYWxpemVkIGJ1bmRsZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG5vcm1hbGl6ZWRCdW5kbGUoYnVuZGxlSGFzaCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShidW5kbGVIYXNoLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgYnVuZGxlSGFzaCBtdXN0IGJlIG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwiY3VybFwiKTtcclxuICAgICAgICBjb25zdCBjdXJsSGFzaExlbmd0aCA9IGN1cmwuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKTtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkQnVuZGxlID0gbmV3IEludDhBcnJheShJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUyAqIElTUy5OVU1CRVJfT0ZfU0VDVVJJVFlfTEVWRUxTKTtcclxuICAgICAgICBjb25zdCBoYXNoU3RyaW5nID0gYnVuZGxlSGFzaC50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEZyYWdtZW50TGVuZ3RoID0gY3VybEhhc2hMZW5ndGggLyBJU1MuVFJZVEVfV0lEVEggLyBJU1MuTlVNQkVSX09GX1NFQ1VSSVRZX0xFVkVMUztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IElTUy5OVU1CRVJfT0ZfU0VDVVJJVFlfTEVWRUxTOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9ybWFsaXplZEZyYWdtZW50TGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc2hDaGFyID0gaGFzaFN0cmluZy5jaGFyQXQoaSAqIG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCArIGopO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKGhhc2hDaGFyKSkudG9OdW1iZXIoKTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRCdW5kbGVbaSAqIG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCArIGpdID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgc3VtICs9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3VtID49IDApIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChzdW0tLSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkQnVuZGxlW2kgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqXSA+IElTUy5NSU5fVFJZVEVfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRCdW5kbGVbaSAqIG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCArIGpdLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChzdW0rKyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkQnVuZGxlW2kgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqXSA8IElTUy5NQVhfVFJZVEVfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRCdW5kbGVbaSAqIG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aCArIGpdKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9ybWFsaXplZEJ1bmRsZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGUgdGhlIHNpZ25hdHVyZSBmcmFnbWVudHMgZnJvbSB0aGUgYWRkcmVzcy5cclxuICAgICAqIEBwYXJhbSBleHBlY3RlZEFkZHJlc3MgVGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cyBUaGUgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnRzLlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZUhhc2ggVGhlIGhhc2ggZm9yIHRoZSBidW5kbGUuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudCBhcmUgc2lnbmVkIGJ5IHRoZSBleHBlY3RlZCBhZGRyZXNzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdmFsaWRhdGVTaWduYXR1cmVzKGV4cGVjdGVkQWRkcmVzcywgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cywgYnVuZGxlSGFzaCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShleHBlY3RlZEFkZHJlc3MsIGFkZHJlc3NfMS5BZGRyZXNzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBleHBlY3RlZEFkZHJlc3MgbXVzdCBiZSBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cyBtdXN0IGJlIGFuIGFycmF5IG9mIHR5cGUgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYnVuZGxlSGFzaCwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGJ1bmRsZUhhc2ggbXVzdCBiZSBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudHMgPSBbXTtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkQnVuZGxlSGFzaCA9IElTUy5ub3JtYWxpemVkQnVuZGxlKGJ1bmRsZUhhc2gpO1xyXG4gICAgICAgIGNvbnN0IGtlcmwgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShcImtlcmxcIik7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IGtlcmwuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKTtcclxuICAgICAgICBmb3IgKGxldCBmID0gMDsgZiA8IDM7IGYrKykge1xyXG4gICAgICAgICAgICBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnRzW2ZdID0gbm9ybWFsaXplZEJ1bmRsZUhhc2guc2xpY2UoZiAqIElTUy5OVU1CRVJfT0ZfRlJBR01FTlRfQ0hVTktTLCAoZiArIDEpICogSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaWdlc3RzID0gbmV3IEludDhBcnJheShzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzLmxlbmd0aCAqIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkaWdlc3RCdWZmZXIgPSBJU1MuZGlnZXN0KG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudHNbaSAlIDNdLCB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50c1tpXS50b1RyeXRlcygpKS50b0FycmF5KCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhhc2hMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZGlnZXN0c1tpICogaGFzaExlbmd0aCArIGpdID0gZGlnZXN0QnVmZmVyW2pdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHBlY3RlZEFkZHJlc3MudG9Ucnl0ZXMoKS50b1N0cmluZygpID09PSB0cml0c18xLlRyaXRzLmZyb21BcnJheShJU1MuYWRkcmVzcyhkaWdlc3RzKSkudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUyA9IDI3O1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLk5VTUJFUl9PRl9TRUNVUklUWV9MRVZFTFMgPSAzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLlRSWVRFX1dJRFRIID0gMztcclxuLyogQGludGVybmFsICovXHJcbklTUy5NSU5fVFJZVEVfVkFMVUUgPSAtMTM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuTUFYX1RSWVRFX1ZBTFVFID0gMTM7XHJcbmV4cG9ydHMuSVNTID0gSVNTO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhWE56TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhoYzJndmFYTnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTd3dSVUZCZFVVN1FVRkRka1VzTkVWQlFYbEZPMEZCUTNwRkxEUkZRVUY1UlR0QlFVTjZSU3dyUkVGQk5FUTdRVUZETlVRc0swVkJRVFJGTzBGQlF6VkZMSGxFUVVGelJEdEJRVU4wUkN4cFIwRkJPRVk3UVVGRE9VWXNNa1JCUVhkRU8wRkJRM2hFTERaRVFVRXdSRHRCUVVNeFJDeHpSRUZCYlVRN1FVRkRia1FzT0VSQlFUSkVPMEZCUlRORU96czdSMEZIUnp0QlFVTklPMGxCV1VrN096czdPenRQUVUxSE8wbEJRMGtzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRlZMRVZCUVVVc1MwRkJZU3hGUVVGRkxGRkJRWGxDTzFGQlEyeEZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxGZEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3clFrRkJLMElzUTBGQlF5eERRVUZETzFGQlF6TkVMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHMURRVUZ0UXl4RFFVRkRMRU5CUVVNN1VVRkRMMFFzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1VVRkJVU3hIUVVGSExHbERRVUZsTEVOQlFVTXNSMEZCUnl4SlFVRkpMRkZCUVZFc1IwRkJSeXhwUTBGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRla2NzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc0swTkJRU3RETEVOQlFVTXNRMEZCUXp0UlFVTXpSU3hEUVVGRE8xRkJSVVFzVFVGQlRTeFRRVUZUTEVkQlFVY3NZVUZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTndSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eGhRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRek5ETEUxQlFVMHNUMEZCVHl4SFFVRkhMR0ZCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRek5FTEUxQlFVMHNZVUZCWVN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRmNrTXNUVUZCVFN4SlFVRkpMRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGNrUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVVnVSQ3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJRM1pETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJTeGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVVjRReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEWWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkZka01zVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExIbENRVUY1UWl4SFFVRkhMRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU5xUml4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFppeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU0xUXl4SlFVRkpMRmRCUVZjc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRk0wSXNUMEZCVHl4WFFVRlhMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU4yUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXg1UWtGQmVVSXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8yZENRVU55UkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNN1owSkJRM1pETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03YjBKQlEyeERMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE9VSXNRMEZCUXp0WlFVTk1MRU5CUVVNN1VVRkRUQ3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTm1MRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZyUWp0UlFVTndReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNME1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVTkJRWFZETEVOQlFVTXNRMEZCUXp0UlFVTnVSU3hEUVVGRE8xRkJSVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRja1FzVFVGQlRTeFZRVUZWTEVkQlFWY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU16UkN4TlFVRk5MR05CUVdNc1IwRkJSeXhWUVVGVkxFZEJRVWNzUjBGQlJ5eERRVUZETEhsQ1FVRjVRaXhEUVVGRE8xRkJSV3hGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzWTBGQll5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRlRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc05FTkJRVFJETEdOQlFXTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRlRVlzUTBGQlF6dFJRVVZFTEUxQlFVMHNWVUZCVlN4SFFVRkhMRWRCUVVjc1EwRkJReXhsUVVGbExFZEJRVWNzUjBGQlJ5eERRVUZETEdWQlFXVXNRMEZCUXp0UlFVVTNSQ3hOUVVGTkxGTkJRVk1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMR05CUVdNc1EwRkJRenRSUVVWc1JDeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhUUVVGVExFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZEZEVRc1NVRkJTU3hOUVVGcFFpeERRVUZETzFGQlJYUkNMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZEYWtNc1RVRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eEhRVUZITEdOQlFXTXNRMEZCUXp0WlFVTm9ReXhOUVVGTkxGZEJRVmNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFZEJRVWNzWTBGQll5eERRVUZETEVOQlFVTTdXVUZGTDBRc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zZVVKQlFYbENMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dG5Ra0ZEY2tRc1RVRkJUU3hKUVVGSkxFZEJRVmNzUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXp0blFrRkRjRU1zVFVGQlRTeEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eFZRVUZWTEVOQlFVTXNRMEZCUXp0blFrRkZjRVFzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenR2UWtGRGJFTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yOUNRVU5pTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN2IwSkJRM1JETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0blFrRkRlRU1zUTBGQlF6dG5Ra0ZGUkN4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzI5Q1FVTnNReXhYUVVGWExFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZEVNc1EwRkJRenRaUVVOTUxFTkJRVU03V1VGRlJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1dVRkRZaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEyaEVMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRaUVVWd1F5eE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRE8xbEJRemRDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03WjBKQlEyeERMRTlCUVU4c1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTTdVVUZEVEN4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU51UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQmEwSTdVVUZEY0VNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSFZEUVVGMVF5eERRVUZETEVOQlFVTTdVVUZEYmtVc1EwRkJRenRSUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZITERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNKRUxFMUJRVTBzWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRmRrUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eGpRVUZqTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhwUkVGQmFVUXNZMEZCWXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNM1JpeERRVUZETzFGQlJVUXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZlRU1zVFVGQlRTeFpRVUZaTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03VVVGRGJrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEZRVUZGTEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVWdVJDeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc2QwSkJRVzFETEVWQlFVVXNkMEpCUVcxRE8xRkJRM3BHTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNkMEpCUVhkQ0xFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWRUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSGRFUVVGM1JDeERRVUZETEVOQlFVTTdVVUZEY0VZc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zZDBKQlFYZENMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhkRVFVRjNSQ3hEUVVGRExFTkJRVU03VVVGRGNFWXNRMEZCUXp0UlFVVkVMRWxCUVVrc1RVRkJhVUlzUTBGQlF6dFJRVVYwUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXcyUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU55UkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0UlFVVnNRaXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eDVRa0ZCZVVJc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlEzSkVMRTFCUVUwc1IwRkJSeXhKUVVGSkxGTkJRVk1zUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlRkR0xFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMSGRDUVVGM1FpeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8yZENRVU42UlN4TlFVRk5MRXRCUVVzc1IwRkJSeXcyUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZGZEVRc1MwRkJTeXhEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzJkQ1FVTnVRaXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTjJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXk5RUxFTkJRVU03V1VGRlJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUXpGRExFTkJRVU03VVVGRlJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM3BFTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRiRUlzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVlVGQlowSTdVVUZETTBNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFVkJRVVVzVjBGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNwRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVVUZEYWtVc1EwRkJRenRSUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZITERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUlhKRUxFMUJRVTBzWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRmRrUXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc2VVSkJRWGxDTEVkQlFVY3NSMEZCUnl4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVOQlFVTTdVVUZEZEVjc1RVRkJUU3hWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSWEJFTEUxQlFVMHNkMEpCUVhkQ0xFZEJRVWNzWTBGQll5eEhRVUZITEVkQlFVY3NRMEZCUXl4WFFVRlhMRWRCUVVjc1IwRkJSeXhEUVVGRExIbENRVUY1UWl4RFFVRkRPMUZCUld4SExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEhsQ1FVRjVRaXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZEY2tRc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlExb3NSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4M1FrRkJkMElzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMmRDUVVOb1JDeE5RVUZOTEZGQlFWRXNSMEZCUnl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eDNRa0ZCZDBJc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEY2tVc1RVRkJUU3hIUVVGSExFZEJRVWNzWVVGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1owSkJRM0pGTEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zUjBGQlJ5eDNRa0ZCZDBJc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdaMEpCUTNwRUxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTTdXVUZEWml4RFFVRkRPMWxCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMWdzVDBGQlR5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJRenR2UWtGRFppeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEhkQ1FVRjNRaXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdkMEpCUTJoRUxFVkJRVVVzUTBGQlF5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zUjBGQlJ5eDNRa0ZCZDBJc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJRenMwUWtGRE0wVXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eEhRVUZITEhkQ1FVRjNRaXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdORUpCUTNKRUxFdEJRVXNzUTBGQlF6dDNRa0ZEVml4RFFVRkRPMjlDUVVOTUxFTkJRVU03WjBKQlEwd3NRMEZCUXp0WlFVTk1MRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEU2l4UFFVRlBMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETzI5Q1FVTm1MRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc2QwSkJRWGRDTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenQzUWtGRGFFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4SFFVRkhMSGRDUVVGM1FpeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZET3pSQ1FVTXpSU3huUWtGQlowSXNRMEZCUXl4RFFVRkRMRWRCUVVjc2QwSkJRWGRDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenMwUWtGRGNrUXNTMEZCU3l4RFFVRkRPM2RDUVVOV0xFTkJRVU03YjBKQlEwd3NRMEZCUXp0blFrRkRUQ3hEUVVGRE8xbEJRMHdzUTBGQlF6dFJRVU5NTEVOQlFVTTdVVUZGUkN4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eGxRVUYzUWl4RlFVRkZMSGxDUVVGeFJDeEZRVUZGTEZWQlFXZENPMUZCUXpsSUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zWlVGQlpTeEZRVUZGTEdsQ1FVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zTUVOQlFUQkRMRU5CUVVNc1EwRkJRenRSUVVOMFJTeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXg1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4NVFrRkJlVUlzUlVGQlJTeHRSRUZCZDBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0xUlN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHBSa0ZCYVVZc1EwRkJReXhEUVVGRE8xRkJRemRITEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSU3hYUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZWtNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFJRVU5xUlN4RFFVRkRPMUZCUlVRc1RVRkJUU3g1UWtGQmVVSXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRja01zVFVGQlRTeHZRa0ZCYjBJc1IwRkJSeXhIUVVGSExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRk9VUXNUVUZCVFN4SlFVRkpMRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGNrUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVVnVSQ3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUTNwQ0xIbENRVUY1UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEhsQ1FVRjVRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMUZCUXpGSkxFTkJRVU03VVVGRlJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4TlFVRk5MRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRk4wVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4NVFrRkJlVUlzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVONFJDeE5RVUZOTEZsQlFWa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeGhRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVVjJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMmRDUVVOc1F5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRkhMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRVFzUTBGQlF6dFJRVU5NTEVOQlFVTTdVVUZGUkN4TlFVRk5MRU5CUVVNc1pVRkJaU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4TFFVRkxMR0ZCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTJwSUxFTkJRVU03TzBGQmNGSkVMR1ZCUVdVN1FVRkRVeXcyUWtGQmVVSXNSMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkRMMFFzWlVGQlpUdEJRVU5UTERaQ1FVRjVRaXhIUVVGWExFTkJRVU1zUTBGQlF6dEJRVU01UkN4bFFVRmxPMEZCUTFNc1pVRkJWeXhIUVVGWExFTkJRVU1zUTBGQlF6dEJRVU5vUkN4bFFVRmxPMEZCUTFNc2JVSkJRV1VzUjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXp0QlFVTjBSQ3hsUVVGbE8wRkJRMU1zYlVKQlFXVXNSMEZCVnl4RlFVRkZMRU5CUVVNN1FVRldla1FzYTBKQmMxSkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oYXNoL2lzcy50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYW4gZW51bSBmb3IgdGhlIGFkZHJlc3Mgc2VjdXJpdHkgdmFsdWVzLlxyXG4gKi9cclxudmFyIEFkZHJlc3NTZWN1cml0eTtcclxuKGZ1bmN0aW9uIChBZGRyZXNzU2VjdXJpdHkpIHtcclxuICAgIEFkZHJlc3NTZWN1cml0eVtBZGRyZXNzU2VjdXJpdHlbXCJsb3dcIl0gPSAxXSA9IFwibG93XCI7XHJcbiAgICBBZGRyZXNzU2VjdXJpdHlbQWRkcmVzc1NlY3VyaXR5W1wibWVkaXVtXCJdID0gMl0gPSBcIm1lZGl1bVwiO1xyXG4gICAgQWRkcmVzc1NlY3VyaXR5W0FkZHJlc3NTZWN1cml0eVtcImhpZ2hcIl0gPSAzXSA9IFwiaGlnaFwiO1xyXG59KShBZGRyZXNzU2VjdXJpdHkgPSBleHBvcnRzLkFkZHJlc3NTZWN1cml0eSB8fCAoZXhwb3J0cy5BZGRyZXNzU2VjdXJpdHkgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZV1JrY21WemMxTmxZM1Z5YVhSNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJSaGRHRXZZV1JrY21WemMxTmxZM1Z5YVhSNUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSUxFbEJRVmtzWlVGSldEdEJRVXBFTEZkQlFWa3NaVUZCWlR0SlFVTjJRaXh0UkVGQlVTeERRVUZCTzBsQlExSXNlVVJCUVZVc1EwRkJRVHRKUVVOV0xIRkVRVUZSTEVOQlFVRTdRVUZEV2l4RFFVRkRMRVZCU2xjc1pVRkJaU3hIUVVGbUxIVkNRVUZsTEV0QlFXWXNkVUpCUVdVc1VVRkpNVUlpZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS9hZGRyZXNzU2VjdXJpdHkudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCB0aW1lU2VydmljZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L3NlcnZpY2VzL3RpbWVTZXJ2aWNlXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RhZ1wiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25fMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zYWN0aW9uXCIpO1xyXG5jb25zdCB0cnl0ZU51bWJlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVOdW1iZXJcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBwcm9vZiBvZiB3b3JrLlxyXG4gKi9cclxuY2xhc3MgUHJvb2ZPZldvcmtCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIFByb29mT2ZXb3JrLlxyXG4gICAgICogQHBhcmFtIHRpbWVTZXJ2aWNlIFNlcnZpY2UgdG8gZ2V0IHRoZSB0aW1lIGZvciBhdHRhY2htZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGltZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl90aW1lU2VydmljZSA9IHRpbWVTZXJ2aWNlIHx8IG5ldyB0aW1lU2VydmljZV8xLlRpbWVTZXJ2aWNlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHRoZSBwcm9vZiBvZiB3b3JrIHRvIHBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uLlxyXG4gICAgICogV2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIGltcGxlbWVudGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgcHJvb2Ygb2Ygd29yayBvbiB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSB0cnVua1RyYW5zYWN0aW9uIFRoZSB0cnVua1RyYW5zYWN0aW9uIHRvIHVzZSBmb3IgdGhlIHBvdy5cclxuICAgICAqIEBwYXJhbSBicmFuY2hUcmFuc2FjdGlvbiBUaGUgYnJhbmNoVHJhbnNhY3Rpb24gdG8gdXNlIGZvciB0aGUgcG93LlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIHBlcmZvcm0gdGhlIHBvdyBvbi5cclxuICAgICAqIEBwYXJhbSBtaW5XZWlnaHRNYWduaXR1ZGUgVGhlIG1pbmltdW0gd2VpZ2h0IG1hZ25pdHVkZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgcHJvZHVjZWQgYnkgdGhlIHByb29mIG9mIHdvcmsuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHBvdyh0cnVua1RyYW5zYWN0aW9uLCBicmFuY2hUcmFuc2FjdGlvbiwgdHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJ1bmtUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRydW5rVHJhbnNhY3Rpb24gbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYnJhbmNoVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBicmFuY2hUcmFuc2FjdGlvbiBtdXN0IGJlIGFuIG9iamVjdCBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnl0ZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB0eXBlIFRyeXRlc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG1pbldlaWdodE1hZ25pdHVkZSkgfHwgbWluV2VpZ2h0TWFnbml0dWRlIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbWluV2VpZ2h0TWFnbml0dWRlIG11c3QgYmUgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmaW5hbFRyeXRlcyA9IFtdO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1RyYW5zYWN0aW9uSGFzaDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyeXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24uZnJvbVRyeXRlcyh0cnl0ZXNbaV0pO1xyXG4gICAgICAgICAgICAvLyBTdGFydCB3aXRoIGxhc3QgaW5kZXggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgLy8gQXNzaWduIGl0IHRoZSB0cnVuayAvIGJyYW5jaCB3aGljaCB0aGUgdXNlciBoYXMgc3VwcGxpZWRcclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBidW5kbGUsIGNoYWluIHRoZSBidW5kbGUgdHJhbnNhY3Rpb25zIHZpYVxyXG4gICAgICAgICAgICAvLyB0cnVua1RyYW5zYWN0aW9uIHRvZ2V0aGVyXHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmF0dGFjaG1lbnRUaW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodGhpcy5fdGltZVNlcnZpY2UubXNTaW5jZUVwb2NoKCkpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcigwKTtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoUHJvb2ZPZldvcmtCYXNlLk1BWF9USU1FU1RBTVBfVkFMVUUpO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCB0cmFuc2FjdGlvbiwgdG8gYmUgcHJvY2Vzc2VkXHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGl0J3MgdGhlIGxhc3QgaW4gdGhlIGJ1bmRsZSBhbmQgdGhlblxyXG4gICAgICAgICAgICAvLyBhc3NpZ24gaXQgdGhlIHN1cHBsaWVkIHRydW5rIGFuZCBicmFuY2ggdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShwcmV2aW91c1RyYW5zYWN0aW9uSGFzaCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGxhc3QgdHJhbnNhY3Rpb24gaW4gdGhlIGJ1bmRsZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmxhc3RJbmRleC50b051bWJlcigpICE9PSB0cmFuc2FjdGlvbi5jdXJyZW50SW5kZXgudG9OdW1iZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiV3JvbmcgYnVuZGxlIG9yZGVyLiBUaGUgYnVuZGxlIHNob3VsZCBiZSBvcmRlcmVkIGluIGRlc2NlbmRpbmcgb3JkZXIgZnJvbSBjdXJyZW50SW5kZXhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi50cnVua1RyYW5zYWN0aW9uID0gdHJ1bmtUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmJyYW5jaFRyYW5zYWN0aW9uID0gYnJhbmNoVHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi50cnVua1RyYW5zYWN0aW9uID0gcHJldmlvdXNUcmFuc2FjdGlvbkhhc2g7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5icmFuY2hUcmFuc2FjdGlvbiA9IHRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmV3VHJ5dGVzID0gdHJhbnNhY3Rpb24udG9Ucnl0ZXMoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2luZ2xlVHJ5dGVzID0gYXdhaXQgdGhpcy5zaW5nbGVQb3cobmV3VHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5ub25jZSA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHNpbmdsZVRyeXRlcy5zdWIodHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5MRU5HVEggLSB0YWdfMS5UYWcuTEVOR1RILCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaGFzaCBvZiB0aGUgbmV3IHRyYW5zYWN0aW9uIHdpdGggbm9uY2UgYW5kIHVzZSB0aGF0IGFzIHRoZSBwcmV2aW91cyBoYXNoIGZvciBuZXh0IGVudHJ5XHJcbiAgICAgICAgICAgIGNvbnN0IHJldHVyblRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5mcm9tVHJ5dGVzKHNpbmdsZVRyeXRlcyk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoID0gdHJhbnNhY3Rpb25IZWxwZXJfMS5UcmFuc2FjdGlvbkhlbHBlci5oYXNoKHJldHVyblRyYW5zYWN0aW9uKTtcclxuICAgICAgICAgICAgZmluYWxUcnl0ZXMucHVzaChyZXR1cm5UcmFuc2FjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldmVyc2UgdGhlIG9yZGVyIHNvIHRoYXQgaXQncyBhc2NlbmRpbmcgZnJvbSBjdXJyZW50SW5kZXhcclxuICAgICAgICByZXR1cm4gZmluYWxUcnl0ZXMucmV2ZXJzZSgpLm1hcCh0cmFuc2FjdGlvbiA9PiB0cmFuc2FjdGlvbi50b1RyeXRlcygpKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIG1heGltdW0gdGltZXN0YW1wIHZhbHVlIHVzZWQgaW4gcHJvb2Ygb2Ygd29yay5cclxuICovXHJcblByb29mT2ZXb3JrQmFzZS5NQVhfVElNRVNUQU1QX1ZBTFVFID0gKE1hdGgucG93KDMsIDI3KSAtIDEpIC8gMjtcclxuZXhwb3J0cy5Qcm9vZk9mV29ya0Jhc2UgPSBQcm9vZk9mV29ya0Jhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZiMlpQWmxkdmNtdENZWE5sTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM0J5YjI5bVQyWlhiM0pyTDNCeWIyOW1UMlpYYjNKclFtRnpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNNRVZCUVhWRk8wRkJRM1pGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkZla1VzTWtWQlFYZEZPMEZCUTNoRkxIbEVRVUZ6UkR0QlFVTjBSQ3gxUkVGQmIwUTdRVUZEY0VRc2RVVkJRVzlGTzBGQlEzQkZMSFZGUVVGdlJUdEJRVU53UlN3MlJFRkJNRVE3UVVGRE1VUXNjMFJCUVcxRU8wRkJRMjVFTEc5RlFVRnBSVHRCUVVkcVJUczdSMEZGUnp0QlFVTklPMGxCVTBrN096dFBRVWRITzBsQlEwZ3NXVUZCV1N4WFFVRXdRanRSUVVOc1F5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRmRCUVZjc1NVRkJTU3hKUVVGSkxIbENRVUZYTEVWQlFVVXNRMEZCUXp0SlFVTjZSQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1MwRkJTeXhEUVVGRExGVkJRVlU3VVVGRGJrSXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU0zUWl4RFFVRkRPMGxCUlVRN096czdPenM3VDBGUFJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1owSkJRWE5DTEVWQlFVVXNhVUpCUVhWQ0xFVkJRVVVzVFVGQlowSXNSVUZCUlN4clFrRkJNRUk3VVVGRE1VY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUlVGQlJTeFhRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMME1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVUkJRWEZFTEVOQlFVTXNRMEZCUXp0UlFVTnFSaXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hYUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjMFJCUVhORUxFTkJRVU1zUTBGQlF6dFJRVU5zUml4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzWlVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRFJEUVVFMFF5eERRVUZETEVOQlFVTTdVVUZEZUVVc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1NVRkJTU3hyUWtGQmEwSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM3BGTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHOURRVUZ2UXl4RFFVRkRMRU5CUVVNN1VVRkRhRVVzUTBGQlF6dFJRVVZFTEUxQlFVMHNWMEZCVnl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWMlFpeEpRVUZKTEhWQ1FVRTJRaXhEUVVGRE8xRkJSV3hETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlEzSkRMRTFCUVUwc1YwRkJWeXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlJYUkVMRzlEUVVGdlF6dFpRVU53UXl3eVJFRkJNa1E3V1VGRE0wUXNNRVJCUVRCRU8xbEJRekZFTERSQ1FVRTBRanRaUVVNMVFpeFhRVUZYTEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpOR0xGZEJRVmNzUTBGQlF5dzJRa0ZCTmtJc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFJTeFhRVUZYTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJaU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN1dVRkZlRWNzYjBSQlFXOUVPMWxCUTNCRUxITkVRVUZ6UkR0WlFVTjBSQ3gxUkVGQmRVUTdXVUZGZGtRc1JVRkJSU3hEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMmhFTERCRFFVRXdRenRuUWtGRE1VTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVWQlFVVXNTMEZCU3l4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRNMFVzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2QwWkJRWGRHTEVOQlFVTXNRMEZCUXp0blFrRkRjRWdzUTBGQlF6dG5Ra0ZEUkN4WFFVRlhMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03WjBKQlEyaEVMRmRCUVZjc1EwRkJReXhwUWtGQmFVSXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dFpRVU4wUkN4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwb3NWMEZCVnl4RFFVRkRMR2RDUVVGblFpeEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8yZENRVU4yUkN4WFFVRlhMRU5CUVVNc2FVSkJRV2xDTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03V1VGRGNrUXNRMEZCUXp0WlFVVkVMRTFCUVUwc1UwRkJVeXhIUVVGSExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0WlFVVjZReXhOUVVGTkxGbEJRVmtzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1UwRkJVeXhGUVVGRkxHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1dVRkZla1VzVjBGQlZ5eERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNlVUpCUVZjc1EwRkJReXhOUVVGTkxFZEJRVWNzVTBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVVZzUnl4M1IwRkJkMGM3V1VGRGVFY3NUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFpRVU12UkN4MVFrRkJkVUlzUjBGQlJ5eHhRMEZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJRenRaUVVWd1JTeFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdVVUZEZUVNc1EwRkJRenRSUVVORUxEWkVRVUUyUkR0UlFVTTNSQ3hOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJTeERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRelZGTEVOQlFVTTdPMEZCTTBaRU96dEhRVVZITzBGQlEyOUNMRzFEUVVGdFFpeEhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJTbTVHTERCRFFYRkhReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBjbGFzcyB3aGljaCBjYW4gcHJvdmlkZSB0aGUgdGltZS5cclxuICovXHJcbmNsYXNzIFRpbWVTZXJ2aWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAxOTcwLzAxLzAxLlxyXG4gICAgICogQHJldHVybnMgTnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgbXNTaW5jZUVwb2NoKCkge1xyXG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGltZVNlcnZpY2UgPSBUaW1lU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdsdFpWTmxjblpwWTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YzJWeWRtbGpaWE12ZEdsdFpWTmxjblpwWTJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVVZCT3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3TzA5QlIwYzdTVUZEU1N4WlFVRlpPMUZCUTJZc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRE8wTkJRMG83UVVGU1JDeHJRMEZSUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvc2VydmljZXMvdGltZVNlcnZpY2UudHMiXSwic291cmNlUm9vdCI6IiJ9