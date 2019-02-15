(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@iota-pico/core/dist/error/coreError"), require("@iota-pico/core/dist/factories/factoryBase"), require("@iota-pico/core/dist/helpers/arrayHelper"), require("@iota-pico/core/dist/helpers/numberHelper"), require("@iota-pico/core/dist/helpers/objectHelper"), require("@iota-pico/core/dist/services/timeService"), require("@iota-pico/data/dist/data/address"), require("@iota-pico/data/dist/data/addressSecurity"), require("@iota-pico/data/dist/data/hash"), require("@iota-pico/data/dist/data/signatureMessageFragment"), require("@iota-pico/data/dist/data/tag"), require("@iota-pico/data/dist/data/transaction"), require("@iota-pico/data/dist/data/trits"), require("@iota-pico/data/dist/data/tryteNumber"), require("@iota-pico/data/dist/data/trytes"), require("big-integer"));
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/crypto", ["@iota-pico/core/dist/error/coreError", "@iota-pico/core/dist/factories/factoryBase", "@iota-pico/core/dist/helpers/arrayHelper", "@iota-pico/core/dist/helpers/numberHelper", "@iota-pico/core/dist/helpers/objectHelper", "@iota-pico/core/dist/services/timeService", "@iota-pico/data/dist/data/address", "@iota-pico/data/dist/data/addressSecurity", "@iota-pico/data/dist/data/hash", "@iota-pico/data/dist/data/signatureMessageFragment", "@iota-pico/data/dist/data/tag", "@iota-pico/data/dist/data/transaction", "@iota-pico/data/dist/data/trits", "@iota-pico/data/dist/data/tryteNumber", "@iota-pico/data/dist/data/trytes", "big-integer"], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/crypto"] = factory(require("@iota-pico/core/dist/error/coreError"), require("@iota-pico/core/dist/factories/factoryBase"), require("@iota-pico/core/dist/helpers/arrayHelper"), require("@iota-pico/core/dist/helpers/numberHelper"), require("@iota-pico/core/dist/helpers/objectHelper"), require("@iota-pico/core/dist/services/timeService"), require("@iota-pico/data/dist/data/address"), require("@iota-pico/data/dist/data/addressSecurity"), require("@iota-pico/data/dist/data/hash"), require("@iota-pico/data/dist/data/signatureMessageFragment"), require("@iota-pico/data/dist/data/tag"), require("@iota-pico/data/dist/data/transaction"), require("@iota-pico/data/dist/data/trits"), require("@iota-pico/data/dist/data/tryteNumber"), require("@iota-pico/data/dist/data/trytes"), require("big-integer"));
	else
		root["IotaPicoCrypto"] = factory(root["@iota-pico/core/dist/error/coreError"], root["@iota-pico/core/dist/factories/factoryBase"], root["@iota-pico/core/dist/helpers/arrayHelper"], root["@iota-pico/core/dist/helpers/numberHelper"], root["@iota-pico/core/dist/helpers/objectHelper"], root["@iota-pico/core/dist/services/timeService"], root["@iota-pico/data/dist/data/address"], root["@iota-pico/data/dist/data/addressSecurity"], root["@iota-pico/data/dist/data/hash"], root["@iota-pico/data/dist/data/signatureMessageFragment"], root["@iota-pico/data/dist/data/tag"], root["@iota-pico/data/dist/data/transaction"], root["@iota-pico/data/dist/data/trits"], root["@iota-pico/data/dist/data/tryteNumber"], root["@iota-pico/data/dist/data/trytes"], root["bigInt"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_error_coreError__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_factories_factoryBase__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_arrayHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_numberHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_objectHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_services_timeService__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_address__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_addressSecurity__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_hash__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_signatureMessageFragment__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_tag__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_transaction__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trits__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_tryteNumber__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trytes__, __WEBPACK_EXTERNAL_MODULE_big_integer__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist.es6/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist.es6/digests/sha3.js":
/*!**********************************!*\
  !*** ./dist.es6/digests/sha3.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist.es6/error/cryptoError.js");
/**
 * Sha3 implementation.
 */
class Sha3 {
    /**
     * Create a new instance of SHA3.
     * @param bits The number of input bits.
     * @param padding The padding to use.
     * @param outputBits The number of output bits.
     */
    constructor(bits, padding, outputBits) {
        this._padding = padding;
        this._outputBits = outputBits;
        this._blockCount = (1600 - (bits << 1)) >> 5;
        this._byteCount = this._blockCount << 2;
        this._outputBlocks = outputBits >> 5;
        this._extraBytes = (outputBits & 31) >> 3;
        this.reset();
    }
    /**
     * Reset the digest.
     */
    reset() {
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
    update(input) {
        if (!objectHelper_1.ObjectHelper.isType(input, ArrayBuffer)) {
            throw new cryptoError_1.CryptoError("Input is not of type ArrayBuffer");
        }
        const message = new Uint8Array(input);
        const length = message.length;
        let index = 0;
        let i;
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
            }
            else {
                this._start = i;
            }
        }
    }
    /**
     * Finalize and return the hash for the digest, will also reset the state.
     * @returns Array buffer containing the digest.
     */
    digest() {
        this.finalize();
        let i = 0;
        let j = 0;
        const bytes = this._outputBits >> 3;
        let buffer;
        if (this._extraBytes) {
            buffer = new ArrayBuffer((this._outputBlocks + 1) << 2);
        }
        else {
            buffer = new ArrayBuffer(bytes);
        }
        const array = new Uint32Array(buffer);
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
    finalize() {
        let i = this._lastByteIndex;
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
    keccakPermutation(s) {
        // tslint:disable-next-line:one-variable-per-declaration
        let h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
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
            h = c8 ^ ((c2 << 1) | (c3 >>> 31));
            l = c9 ^ ((c3 << 1) | (c2 >>> 31));
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
            h = c0 ^ ((c4 << 1) | (c5 >>> 31));
            l = c1 ^ ((c5 << 1) | (c4 >>> 31));
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
            h = c2 ^ ((c6 << 1) | (c7 >>> 31));
            l = c3 ^ ((c7 << 1) | (c6 >>> 31));
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
            h = c4 ^ ((c8 << 1) | (c9 >>> 31));
            l = c5 ^ ((c9 << 1) | (c8 >>> 31));
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
            h = c6 ^ ((c0 << 1) | (c1 >>> 31));
            l = c7 ^ ((c1 << 1) | (c0 >>> 31));
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
            b32 = (s[11] << 4) | (s[10] >>> 28);
            b33 = (s[10] << 4) | (s[11] >>> 28);
            b14 = (s[20] << 3) | (s[21] >>> 29);
            b15 = (s[21] << 3) | (s[20] >>> 29);
            b46 = (s[31] << 9) | (s[30] >>> 23);
            b47 = (s[30] << 9) | (s[31] >>> 23);
            b28 = (s[40] << 18) | (s[41] >>> 14);
            b29 = (s[41] << 18) | (s[40] >>> 14);
            b20 = (s[2] << 1) | (s[3] >>> 31);
            b21 = (s[3] << 1) | (s[2] >>> 31);
            b2 = (s[13] << 12) | (s[12] >>> 20);
            b3 = (s[12] << 12) | (s[13] >>> 20);
            b34 = (s[22] << 10) | (s[23] >>> 22);
            b35 = (s[23] << 10) | (s[22] >>> 22);
            b16 = (s[33] << 13) | (s[32] >>> 19);
            b17 = (s[32] << 13) | (s[33] >>> 19);
            b48 = (s[42] << 2) | (s[43] >>> 30);
            b49 = (s[43] << 2) | (s[42] >>> 30);
            b40 = (s[5] << 30) | (s[4] >>> 2);
            b41 = (s[4] << 30) | (s[5] >>> 2);
            b22 = (s[14] << 6) | (s[15] >>> 26);
            b23 = (s[15] << 6) | (s[14] >>> 26);
            b4 = (s[25] << 11) | (s[24] >>> 21);
            b5 = (s[24] << 11) | (s[25] >>> 21);
            b36 = (s[34] << 15) | (s[35] >>> 17);
            b37 = (s[35] << 15) | (s[34] >>> 17);
            b18 = (s[45] << 29) | (s[44] >>> 3);
            b19 = (s[44] << 29) | (s[45] >>> 3);
            b10 = (s[6] << 28) | (s[7] >>> 4);
            b11 = (s[7] << 28) | (s[6] >>> 4);
            b42 = (s[17] << 23) | (s[16] >>> 9);
            b43 = (s[16] << 23) | (s[17] >>> 9);
            b24 = (s[26] << 25) | (s[27] >>> 7);
            b25 = (s[27] << 25) | (s[26] >>> 7);
            b6 = (s[36] << 21) | (s[37] >>> 11);
            b7 = (s[37] << 21) | (s[36] >>> 11);
            b38 = (s[47] << 24) | (s[46] >>> 8);
            b39 = (s[46] << 24) | (s[47] >>> 8);
            b30 = (s[8] << 27) | (s[9] >>> 5);
            b31 = (s[9] << 27) | (s[8] >>> 5);
            b12 = (s[18] << 20) | (s[19] >>> 12);
            b13 = (s[19] << 20) | (s[18] >>> 12);
            b44 = (s[29] << 7) | (s[28] >>> 25);
            b45 = (s[28] << 7) | (s[29] >>> 25);
            b26 = (s[38] << 8) | (s[39] >>> 24);
            b27 = (s[39] << 8) | (s[38] >>> 24);
            b8 = (s[48] << 14) | (s[49] >>> 18);
            b9 = (s[49] << 14) | (s[48] >>> 18);
            s[0] = b0 ^ (~b2 & b4);
            s[1] = b1 ^ (~b3 & b5);
            s[10] = b10 ^ (~b12 & b14);
            s[11] = b11 ^ (~b13 & b15);
            s[20] = b20 ^ (~b22 & b24);
            s[21] = b21 ^ (~b23 & b25);
            s[30] = b30 ^ (~b32 & b34);
            s[31] = b31 ^ (~b33 & b35);
            s[40] = b40 ^ (~b42 & b44);
            s[41] = b41 ^ (~b43 & b45);
            s[2] = b2 ^ (~b4 & b6);
            s[3] = b3 ^ (~b5 & b7);
            s[12] = b12 ^ (~b14 & b16);
            s[13] = b13 ^ (~b15 & b17);
            s[22] = b22 ^ (~b24 & b26);
            s[23] = b23 ^ (~b25 & b27);
            s[32] = b32 ^ (~b34 & b36);
            s[33] = b33 ^ (~b35 & b37);
            s[42] = b42 ^ (~b44 & b46);
            s[43] = b43 ^ (~b45 & b47);
            s[4] = b4 ^ (~b6 & b8);
            s[5] = b5 ^ (~b7 & b9);
            s[14] = b14 ^ (~b16 & b18);
            s[15] = b15 ^ (~b17 & b19);
            s[24] = b24 ^ (~b26 & b28);
            s[25] = b25 ^ (~b27 & b29);
            s[34] = b34 ^ (~b36 & b38);
            s[35] = b35 ^ (~b37 & b39);
            s[44] = b44 ^ (~b46 & b48);
            s[45] = b45 ^ (~b47 & b49);
            s[6] = b6 ^ (~b8 & b0);
            s[7] = b7 ^ (~b9 & b1);
            s[16] = b16 ^ (~b18 & b10);
            s[17] = b17 ^ (~b19 & b11);
            s[26] = b26 ^ (~b28 & b20);
            s[27] = b27 ^ (~b29 & b21);
            s[36] = b36 ^ (~b38 & b30);
            s[37] = b37 ^ (~b39 & b31);
            s[46] = b46 ^ (~b48 & b40);
            s[47] = b47 ^ (~b49 & b41);
            s[8] = b8 ^ (~b0 & b2);
            s[9] = b9 ^ (~b1 & b3);
            s[18] = b18 ^ (~b10 & b12);
            s[19] = b19 ^ (~b11 & b13);
            s[28] = b28 ^ (~b20 & b22);
            s[29] = b29 ^ (~b21 & b23);
            s[38] = b38 ^ (~b30 & b32);
            s[39] = b39 ^ (~b31 & b33);
            s[48] = b48 ^ (~b40 & b42);
            s[49] = b49 ^ (~b41 & b43);
            s[0] ^= Sha3.ROUND_CONSTANTS[n];
            s[1] ^= Sha3.ROUND_CONSTANTS[n + 1];
        }
    }
}
/* Padding to use for Keccak */
Sha3.KECCAK_PADDING = new Uint32Array([1, 256, 65536, 16777216]);
/* @internal */
Sha3.SHIFT = new Uint8Array([0, 8, 16, 24]);
/* @internal */
Sha3.ROUND_CONSTANTS = new Uint32Array([1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
    0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0,
    2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
    2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
    2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]);
exports.Sha3 = Sha3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhMy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWdlc3RzL3NoYTMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSxzREFBbUQ7QUFFbkQ7O0dBRUc7QUFDSCxNQUFhLElBQUk7SUFxQ2I7Ozs7O09BS0c7SUFDSCxZQUFZLElBQVksRUFBRSxPQUFvQixFQUFFLFVBQWtCO1FBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUs7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLEtBQWtCO1FBQzVCLElBQUksQ0FB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LEdBQUcsQ0FBQztRQUNuRixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDVixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRVgsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNWLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDcEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDcEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDckMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNsQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDbEMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDckMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNyQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDckMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDcEMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDckMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNyQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDcEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDcEMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUVwQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBRTNCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7O0FBaFZELCtCQUErQjtBQUNSLG1CQUFjLEdBQWdCLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNoRyxlQUFlO0FBQ1MsVUFBSyxHQUFlLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzRSxlQUFlO0FBQ1Msb0JBQWUsR0FBZ0IsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsVUFBVTtJQUNuSixDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQztJQUMzRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUs7SUFDdkUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQ2hGLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBVjNGLG9CQWtWQyJ9

/***/ }),

/***/ "./dist.es6/error/cryptoError.js":
/*!***************************************!*\
  !*** ./dist.es6/error/cryptoError.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "@iota-pico/core/dist/error/coreError");
/**
 * A crypto implementation of an error.
 */
class CryptoError extends coreError_1.CoreError {
    /**
     * Create an instance of CryptoError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message, additional, innerError) {
        super(message, additional, innerError);
        this.domain = "Crypto";
    }
}
exports.CryptoError = CryptoError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IvY3J5cHRvRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9FQUFpRTtBQUVqRTs7R0FFRztBQUNILE1BQWEsV0FBWSxTQUFRLHFCQUFTO0lBQ3RDOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUFlLEVBQUUsVUFBa0MsRUFBRSxVQUFrQjtRQUMvRSxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBQ0o7QUFYRCxrQ0FXQyJ9

/***/ }),

/***/ "./dist.es6/factories/proofOfWorkFactory.js":
/*!**************************************************!*\
  !*** ./dist.es6/factories/proofOfWorkFactory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/factoryBase */ "@iota-pico/core/dist/factories/factoryBase");
/**
 * Factory to generate proof of work.
 */
class ProofOfWorkFactory extends factoryBase_1.FactoryBase {
    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance() {
        if (!ProofOfWorkFactory._instance) {
            ProofOfWorkFactory._instance = new ProofOfWorkFactory();
        }
        return ProofOfWorkFactory._instance;
    }
    /* @internal */
    getInstance() {
        return ProofOfWorkFactory.instance();
    }
}
exports.ProofOfWorkFactory = ProofOfWorkFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZhY3Rvcmllcy9wcm9vZk9mV29ya0ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUd6RTs7R0FFRztBQUNILE1BQWEsa0JBQW1CLFNBQVEseUJBQXlCO0lBSTdEOzs7T0FHRztJQUNIO1FBQ0ksS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLFFBQVE7UUFDbEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtZQUMvQixrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUVELGVBQWU7SUFDTCxXQUFXO1FBQ2pCLE9BQU8sa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekMsQ0FBQztDQUNKO0FBM0JELGdEQTJCQyJ9

/***/ }),

/***/ "./dist.es6/factories/spongeFactory.js":
/*!*********************************************!*\
  !*** ./dist.es6/factories/spongeFactory.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/factoryBase */ "@iota-pico/core/dist/factories/factoryBase");
const curl_1 = __webpack_require__(/*! ../sponges/curl */ "./dist.es6/sponges/curl.js");
const kerl_1 = __webpack_require__(/*! ../sponges/kerl */ "./dist.es6/sponges/kerl.js");
/**
 * Factory to generate sponges.
 */
class SpongeFactory extends factoryBase_1.FactoryBase {
    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance() {
        if (!SpongeFactory._instance) {
            SpongeFactory._instance = new SpongeFactory();
            SpongeFactory._instance.register("curl", (...args) => new curl_1.Curl(...args));
            SpongeFactory._instance.register("curl81", (...args) => new curl_1.Curl(81));
            SpongeFactory._instance.register("curl27", (...args) => new curl_1.Curl(27));
            SpongeFactory._instance.register("kerl", (...args) => new kerl_1.Kerl());
        }
        return SpongeFactory._instance;
    }
    /* @internal */
    getInstance() {
        return SpongeFactory.instance();
    }
}
exports.SpongeFactory = SpongeFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvbmdlRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBRXpFLDBDQUF1QztBQUN2QywwQ0FBdUM7QUFFdkM7O0dBRUc7QUFDSCxNQUFhLGFBQWMsU0FBUSx5QkFBb0I7SUFJbkQ7OztPQUdHO0lBQ0g7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUMsUUFBUTtRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtZQUMxQixhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7WUFDOUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksV0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6RSxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RSxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RSxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsT0FBTyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCxlQUFlO0lBQ0wsV0FBVztRQUNqQixPQUFPLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0NBQ0o7QUEvQkQsc0NBK0JDIn0=

/***/ }),

/***/ "./dist.es6/hash/iss.js":
/*!******************************!*\
  !*** ./dist.es6/hash/iss.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const address_1 = __webpack_require__(/*! @iota-pico/data/dist/data/address */ "@iota-pico/data/dist/data/address");
const addressSecurity_1 = __webpack_require__(/*! @iota-pico/data/dist/data/addressSecurity */ "@iota-pico/data/dist/data/addressSecurity");
const hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "@iota-pico/data/dist/data/hash");
const signatureMessageFragment_1 = __webpack_require__(/*! @iota-pico/data/dist/data/signatureMessageFragment */ "@iota-pico/data/dist/data/signatureMessageFragment");
const trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "@iota-pico/data/dist/data/trits");
const trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "@iota-pico/data/dist/data/trytes");
const cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist.es6/error/cryptoError.js");
const spongeFactory_1 = __webpack_require__(/*! ../factories/spongeFactory */ "./dist.es6/factories/spongeFactory.js");
/**
 * ISS Hashing functions.
 * Converted https://github.com/iotaledger/iri/src/main/java/com/iota/iri/hash/ISS.java
 */
class ISS {
    /**
     * Get the subseed for the seed and index.
     * @param seed The seed.
     * @param index The index for the seed.
     * @param spongeType The sponge type to use for operations.
     * @returns The subseed.
     */
    static subseed(seed, index, spongeType = "curl27") {
        if (!objectHelper_1.ObjectHelper.isType(seed, Int8Array)) {
            throw new cryptoError_1.CryptoError("The seed must be of type Int8Array");
        }
        if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
            throw new cryptoError_1.CryptoError("The index must be an integer >= 0");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        sponge.initialize();
        const subseedPreimage = seed.slice();
        let localIndex = index;
        while (localIndex-- > 0) {
            for (let i = 0; i < subseedPreimage.length; i++) {
                if (++subseedPreimage[i] > ISS.MAX_TRIT_VALUE) {
                    subseedPreimage[i] = ISS.MIN_TRIT_VALUE;
                }
                else {
                    break;
                }
            }
        }
        const subseed = new Int8Array(hashLength);
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
    static key(seed, index, security, spongeType = "kerl") {
        if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
            throw new cryptoError_1.CryptoError("The seed must be of type Hash");
        }
        if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
            throw new cryptoError_1.CryptoError("The index must be an integer >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < addressSecurity_1.AddressSecurity.low || security > addressSecurity_1.AddressSecurity.high) {
            throw new cryptoError_1.CryptoError(`The security must be an integer >= 1 and <= 3`);
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const seedTrits = trits_1.Trits.fromTrytes(seed.toTrytes());
        const indexTrits = trits_1.Trits.fromNumber(index);
        const subseed = trits_1.Trits.add(seedTrits, indexTrits).toArray();
        const subseedLength = subseed.length;
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        sponge.initialize();
        sponge.absorb(subseed, 0, subseedLength);
        sponge.squeeze(subseed, 0, subseedLength);
        sponge.reset();
        sponge.absorb(subseed, 0, subseedLength);
        const key = new Int8Array(ISS.NUMBER_OF_FRAGMENT_CHUNKS * hashLength * security);
        let offset = 0;
        const buffer = new Int8Array(subseedLength);
        let localLength = security;
        while (localLength-- > 0) {
            for (let i = 0; i < ISS.NUMBER_OF_FRAGMENT_CHUNKS; i++) {
                sponge.squeeze(buffer, 0, subseedLength);
                for (let j = 0; j < hashLength; j++) {
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
    static digests(subseed, spongeType = "kerl") {
        if (!objectHelper_1.ObjectHelper.isType(subseed, Int8Array)) {
            throw new cryptoError_1.CryptoError("The subseed must be of type Int8Array");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        const fragmentLength = hashLength * ISS.NUMBER_OF_FRAGMENT_CHUNKS;
        if (subseed.length % fragmentLength !== 0) {
            throw new cryptoError_1.CryptoError(`The subseed length must be a multiple of ${fragmentLength}`);
        }
        const tryteRange = ISS.MAX_TRYTE_VALUE - ISS.MIN_TRYTE_VALUE;
        const keyLenDiv = subseed.length / fragmentLength;
        const digests = new Int8Array(keyLenDiv * hashLength);
        let buffer;
        for (let i = 0; i < keyLenDiv; i++) {
            const iMul = i * fragmentLength;
            const keyFragment = subseed.slice(iMul, iMul + fragmentLength);
            for (let j = 0; j < ISS.NUMBER_OF_FRAGMENT_CHUNKS; j++) {
                const jMul = j * hashLength;
                buffer = keyFragment.slice(jMul, jMul + hashLength);
                for (let k = 0; k < tryteRange; k++) {
                    sponge.reset();
                    sponge.absorb(buffer, 0, buffer.length);
                    sponge.squeeze(buffer, 0, hashLength);
                }
                for (let k = 0; k < hashLength; k++) {
                    keyFragment[jMul + k] = buffer[k];
                }
            }
            sponge.reset();
            sponge.absorb(keyFragment, 0, keyFragment.length);
            sponge.squeeze(buffer, 0, hashLength);
            const iMul2 = i * hashLength;
            for (let j = 0; j < hashLength; j++) {
                digests[iMul2 + j] = buffer[j];
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
    static address(digests, spongeType = "kerl") {
        if (!objectHelper_1.ObjectHelper.isType(digests, Int8Array)) {
            throw new cryptoError_1.CryptoError("The digests must be of type Int8Array");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        if (digests.length % hashLength !== 0) {
            throw new cryptoError_1.CryptoError(`Invalid digests length, must be a multiple of ${hashLength}`);
        }
        sponge.initialize();
        sponge.absorb(digests, 0, digests.length);
        const addressTrits = new Int8Array(hashLength);
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
    static digest(normalizedBundleFragment, signatureMessageFragment, spongeType = "kerl") {
        if (!objectHelper_1.ObjectHelper.isType(normalizedBundleFragment, Int8Array)) {
            throw new cryptoError_1.CryptoError("The normalizedBundleFragment must be of type Int8Array");
        }
        if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, Int8Array)) {
            throw new cryptoError_1.CryptoError("The signatureMessageFragment must be of type Int8Array");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        let buffer;
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        sponge.initialize();
        for (let i = 0; i < ISS.NUMBER_OF_FRAGMENT_CHUNKS; i++) {
            buffer = new Int8Array(signatureMessageFragment.slice(i * hashLength, (i + 1) * hashLength));
            for (let j = normalizedBundleFragment[i] - ISS.MIN_TRYTE_VALUE; j > 0; j--) {
                const sponge2 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
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
    static subseedToDigest(subseed, security, spongeType = "curl27") {
        if (!objectHelper_1.ObjectHelper.isType(subseed, Int8Array)) {
            throw new cryptoError_1.CryptoError("The subseed must be of type Int8Array");
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < addressSecurity_1.AddressSecurity.low || security > addressSecurity_1.AddressSecurity.high) {
            throw new cryptoError_1.CryptoError(`The security must be an integer >= 1 and <= 3`);
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const c1 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const c2 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const c3 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        c1.initialize();
        c2.initialize();
        c3.initialize();
        const hashLength = c1.getConstant("HASH_LENGTH");
        const keyLength = ((hashLength / 3) / ISS.RADIX) * hashLength;
        const length = security * keyLength / hashLength;
        let out = new Int8Array(hashLength);
        c1.absorb(subseed, 0, subseed.length);
        for (let i = 0; i < length; i++) {
            c1.squeeze(out, 0, out.length);
            for (let j = 0; j < (ISS.MAX_TRYTE_VALUE - ISS.MIN_TRYTE_VALUE + 1); j++) {
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
    static normalizedBundle(bundleHash, spongeType = "curl81") {
        if (!objectHelper_1.ObjectHelper.isType(bundleHash, hash_1.Hash)) {
            throw new cryptoError_1.CryptoError("The bundleHash must be of type Hash");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        const normalizedBundle = new Int8Array(ISS.NUMBER_OF_FRAGMENT_CHUNKS * ISS.NUMBER_OF_SECURITY_LEVELS);
        const hashString = bundleHash.toTrytes().toString();
        const normalizedFragmentLength = hashLength / ISS.TRYTE_WIDTH / ISS.NUMBER_OF_SECURITY_LEVELS;
        for (let i = 0; i < ISS.NUMBER_OF_SECURITY_LEVELS; i++) {
            let sum = 0;
            for (let j = 0; j < normalizedFragmentLength; j++) {
                const hashChar = hashString.charAt(i * normalizedFragmentLength + j);
                const val = trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(hashChar)).toNumber();
                normalizedBundle[i * normalizedFragmentLength + j] = val;
                sum += val;
            }
            if (sum >= 0) {
                while (sum-- > 0) {
                    for (let j = 0; j < normalizedFragmentLength; j++) {
                        if (normalizedBundle[i * normalizedFragmentLength + j] > ISS.MIN_TRYTE_VALUE) {
                            normalizedBundle[i * normalizedFragmentLength + j]--;
                            break;
                        }
                    }
                }
            }
            else {
                while (sum++ < 0) {
                    for (let j = 0; j < normalizedFragmentLength; j++) {
                        if (normalizedBundle[i * normalizedFragmentLength + j] < ISS.MAX_TRYTE_VALUE) {
                            normalizedBundle[i * normalizedFragmentLength + j]++;
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
    static validateSignatures(expectedAddress, signatureMessageFragments, bundleHash, spongeType = "kerl") {
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
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const normalizedBundleFragments = [];
        const normalizedBundleHash = ISS.normalizedBundle(bundleHash);
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        for (let f = 0; f < 3; f++) {
            normalizedBundleFragments[f] = normalizedBundleHash.slice(f * ISS.NUMBER_OF_FRAGMENT_CHUNKS, (f + 1) * ISS.NUMBER_OF_FRAGMENT_CHUNKS);
        }
        const digests = new Int8Array(signatureMessageFragments.length * hashLength);
        for (let i = 0; i < signatureMessageFragments.length; i++) {
            const digestBuffer = ISS.digest(normalizedBundleFragments[i % 3], trits_1.Trits.fromTrytes(signatureMessageFragments[i].toTrytes()).toArray());
            for (let j = 0; j < hashLength; j++) {
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
    static signatureMessageFragment(normalizedBundleFragment, keyFragment, spongeType = "kerl") {
        if (!objectHelper_1.ObjectHelper.isType(normalizedBundleFragment, Int8Array)) {
            throw new cryptoError_1.CryptoError("The normalizedBundleFragment must be of type Int8Array");
        }
        if (!objectHelper_1.ObjectHelper.isType(keyFragment, Int8Array)) {
            throw new cryptoError_1.CryptoError("The keyFragment must be of type Int8Array");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const signatureMessageFragment = keyFragment.slice();
        let hash;
        const kerl = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = kerl.getConstant("HASH_LENGTH");
        for (let i = 0; i < 27; i++) {
            hash = signatureMessageFragment.slice(i * hashLength, (i + 1) * hashLength);
            for (let j = 0; j < 13 - normalizedBundleFragment[i]; j++) {
                kerl.initialize();
                kerl.reset();
                kerl.absorb(hash, 0, hashLength);
                kerl.squeeze(hash, 0, hashLength);
            }
            for (let j = 0; j < hashLength; j++) {
                signatureMessageFragment[i * hashLength + j] = hash[j];
            }
        }
        return signatureMessageFragment;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hhc2gvaXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSwrREFBNEQ7QUFDNUQsK0VBQTRFO0FBQzVFLHlEQUFzRDtBQUN0RCxpR0FBOEY7QUFDOUYsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQUMxRCxzREFBbUQ7QUFDbkQsOERBQTJEO0FBRTNEOzs7R0FHRztBQUNILE1BQWEsR0FBRztJQWtCWjs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWUsRUFBRSxLQUFhLEVBQUUsYUFBcUIsUUFBUTtRQUMvRSxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FDL0Q7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUM3QyxNQUFNLElBQUkseUJBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSSxDQUFDLDZCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzlDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLGtDQUFrQyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0c7UUFFRCxNQUFNLE1BQU0sR0FBRyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELE1BQU0s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

/***/ }),

/***/ "./dist.es6/helpers/bigIntegerHelper.js":
/*!**********************************************!*\
  !*** ./dist.es6/helpers/bigIntegerHelper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const big_integer_1 = tslib_1.__importDefault(__webpack_require__(/*! big-integer */ "big-integer"));
const cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist.es6/error/cryptoError.js");
/**
 * Helper class to convert between BigInteger and other types.
 * Converted from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
class BigIntegerHelper {
    /**
     * Convert trits to a bigInteger.
     * @param trits The trits to convert.
     * @param offset Offset within the array to start.
     * @param length The length of the trits array to convert.
     * @returns Big integer version of trits.
     */
    static tritsToBigInteger(trits, offset, length) {
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
        let value = big_integer_1.default.zero;
        for (let i = length - 1; i >= 0; i--) {
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
    static bigIntegerToTrits(value, trits, offset, length) {
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
        let absoluteValue = value.compareTo(big_integer_1.default.zero) < 0 ? value.negate() : value;
        for (let i = 0; i < length; i++) {
            const divRemainder = absoluteValue.divmod(BigIntegerHelper.RADIX);
            absoluteValue = divRemainder.quotient;
            let remainder = divRemainder.remainder;
            if (remainder > BigIntegerHelper.MAX_TRIT_VALUE) {
                remainder = BigIntegerHelper.MIN_TRIT_VALUE;
                absoluteValue = absoluteValue.add(big_integer_1.default["1"]);
            }
            trits[offset + i] = remainder.toJSNumber();
        }
        if (value.compareTo(big_integer_1.default.zero) < 0) {
            for (let i = 0; i < length; i++) {
                // Avoid negative zero
                trits[offset + i] = trits[offset + i] === 0 ? 0 : -trits[offset + i];
            }
        }
    }
    /**
     * Convert the bigInteger into bytes.
     * @param value The value to convert.
     * @param destination The destination array to store the bytes.
     * @param offset The offset within the array to store the bytes.
     */
    static bigIntegerToBytes(value, destination, offset) {
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
            throw new cryptoError_1.CryptoError(`Destination array has invalid size, it must be at least ${BigIntegerHelper.BYTE_HASH_LENGTH}`);
        }
        // Remember if it is negative for later
        const isNeg = value.isNegative() ? -1 : 0;
        let hexString = value.toString(16);
        if (isNeg === -1) {
            // But remove it for now
            hexString = hexString.slice(1);
        }
        // Now make sure the hex string is an even length so the regex works
        if (hexString.length % 2 === 1) {
            hexString = `0${hexString}`;
        }
        const matches = hexString.match(/[0-9a-f]{2}/g);
        // Convert the hex to numbers
        const signedBytes = new Int8Array(matches
            .map(hex => parseInt(`0x${hex}`, 16)));
        if (isNeg === -1) {
            BigIntegerHelper.twosComplement(signedBytes);
        }
        const dataView = new DataView(destination);
        // Pad the start of the buffer with the neg value
        let i = offset;
        while (i + signedBytes.length < BigIntegerHelper.BYTE_HASH_LENGTH) {
            dataView.setInt8(i++, isNeg);
        }
        // And copy in the actual bytes
        for (let j = signedBytes.length; j-- > 0;) {
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
    static bytesToBigInteger(source, offset, length) {
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
            throw new cryptoError_1.CryptoError(`Source array has invalid size, it must be at least ${BigIntegerHelper.BYTE_HASH_LENGTH}`);
        }
        const dataView = new DataView(source);
        let signedBytes = new Int8Array(dataView.byteLength);
        for (let b = 0; b < dataView.byteLength; b++) {
            signedBytes[b] = dataView.getInt8(b + offset);
        }
        // Remove the initial padding leaving at least one byte
        let paddingOffset = 0;
        const firstByte = signedBytes[0];
        const isNeg = firstByte < 0;
        // If the first padding character is negative then reverse the 2s complement
        // but first strip of the leading padding
        if (firstByte === 0 || firstByte === -1) {
            while (signedBytes[paddingOffset] === firstByte && paddingOffset < signedBytes.length - 1) {
                paddingOffset++;
            }
            // Strip any padding
            signedBytes = signedBytes.slice(paddingOffset);
        }
        if (isNeg) {
            BigIntegerHelper.twosComplement(signedBytes);
        }
        let hexString = isNeg ? "-" : "";
        const dv = new DataView(signedBytes.buffer);
        for (let h = 0; h < dv.byteLength; h++) {
            hexString += `00${dv.getUint8(h).toString(16)}`.slice(-2);
        }
        return big_integer_1.default(hexString, 16);
    }
    /* @internal */
    static twosComplement(signedBytes) {
        // if the whole number is negative then
        // change to 2's complements by noting all the numbers
        // and adding 1 to the last i.e. ~bignum+1
        for (let b = 0; b < signedBytes.length; b++) {
            signedBytes[b] = ~signedBytes[b];
        }
        // Add 1 to last number, if the number is 0xFF continue to carry
        let c = signedBytes.length - 1;
        do {
            signedBytes[c]++;
        } while (signedBytes[c--] === 0 && c > 0);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlnSW50ZWdlckhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2JpZ0ludGVnZXJIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBQ3pFLHNFQUFpQztBQUNqQyxzREFBbUQ7QUFFbkQ7OztHQUdHO0FBQ0gsTUFBYSxnQkFBZ0I7SUFhekI7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWdCLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDNUUsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5RCxNQUFNLElBQUkseUJBQVcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDL0MsTUFBTSxJQUFJLHlCQUFXLENBQUMsa0NBQWtDLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2hELE1BQU0sSUFBSSx5QkFBVyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLE1BQU0sR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQyxNQUFNLElBQUkseUJBQVcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1NBQ2xGO1FBRUQsSUFBSSxLQUFLLEdBQUcscUJBQU0sQ0FBQyxJQUFJLENBQUM7UUFFeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsS0FB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

/***/ }),

/***/ "./dist.es6/helpers/transactionHelper.js":
/*!***********************************************!*\
  !*** ./dist.es6/helpers/transactionHelper.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "@iota-pico/data/dist/data/hash");
const transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "@iota-pico/data/dist/data/transaction");
const trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "@iota-pico/data/dist/data/trits");
const cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist.es6/error/cryptoError.js");
const spongeFactory_1 = __webpack_require__(/*! ../factories/spongeFactory */ "./dist.es6/factories/spongeFactory.js");
/**
 * Helper class for transactions.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
class TransactionHelper {
    /**
     * Create the hash for a transaction.
     * @param transaction The transaction to generate the hash.
     * @returns The hash of the transaction.
     */
    static hash(transaction) {
        if (!objectHelper_1.ObjectHelper.isType(transaction, transaction_1.Transaction)) {
            throw new cryptoError_1.CryptoError("The transaction must be of type Transaction");
        }
        const curl = spongeFactory_1.SpongeFactory.instance().create("curl");
        const transactionTrits = trits_1.Trits.fromTrytes(transaction.toTrytes()).toArray();
        curl.initialize();
        curl.absorb(transactionTrits, 0, transactionTrits.length);
        const hashTrits = new Int8Array(curl.getConstant("HASH_LENGTH"));
        curl.squeeze(hashTrits, 0, hashTrits.length);
        return hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());
    }
}
exports.TransactionHelper = TransactionHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25IZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy90cmFuc2FjdGlvbkhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLHlEQUFzRDtBQUN0RCx1RUFBb0U7QUFDcEUsMkRBQXdEO0FBQ3hELHNEQUFtRDtBQUNuRCw4REFBMkQ7QUFFM0Q7OztHQUdHO0FBQ0gsTUFBYSxpQkFBaUI7SUFDMUI7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDdkMsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSx5QkFBVyxDQUFDLEVBQUU7WUFDaEQsTUFBTSxJQUFJLHlCQUFXLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUN4RTtRQUVELE1BQU0sSUFBSSxHQUFHLDZCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELE1BQU0sZ0JBQWdCLEdBQUcsYUFBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU1RSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0MsT0FBTyxXQUFJLENBQUMsVUFBVSxDQUFDLGFBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0NBQ0o7QUF0QkQsOENBc0JDIn0=

/***/ }),

/***/ "./dist.es6/index.js":
/*!***************************!*\
  !*** ./dist.es6/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * Combined index of all the modules.
 */
tslib_1.__exportStar(__webpack_require__(/*! ./digests/sha3 */ "./dist.es6/digests/sha3.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./error/cryptoError */ "./dist.es6/error/cryptoError.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./factories/proofOfWorkFactory */ "./dist.es6/factories/proofOfWorkFactory.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./factories/spongeFactory */ "./dist.es6/factories/spongeFactory.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./hash/iss */ "./dist.es6/hash/iss.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./helpers/bigIntegerHelper */ "./dist.es6/helpers/bigIntegerHelper.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./helpers/transactionHelper */ "./dist.es6/helpers/transactionHelper.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./proofOfWork/proofOfWorkBase */ "./dist.es6/proofOfWork/proofOfWorkBase.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./sponges/curl */ "./dist.es6/sponges/curl.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./sponges/kerl */ "./dist.es6/sponges/kerl.js"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILHlEQUErQjtBQUMvQiw4REFBb0M7QUFDcEMseUVBQStDO0FBQy9DLG9FQUEwQztBQUMxQyxxREFBMkI7QUFDM0IscUVBQTJDO0FBQzNDLHNFQUE0QztBQUc1Qyx3RUFBOEM7QUFDOUMseURBQStCO0FBQy9CLHlEQUErQiJ9

/***/ }),

/***/ "./dist.es6/proofOfWork/proofOfWorkBase.js":
/*!*************************************************!*\
  !*** ./dist.es6/proofOfWork/proofOfWorkBase.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const timeService_1 = __webpack_require__(/*! @iota-pico/core/dist/services/timeService */ "@iota-pico/core/dist/services/timeService");
const hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "@iota-pico/data/dist/data/hash");
const tag_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tag */ "@iota-pico/data/dist/data/tag");
const transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "@iota-pico/data/dist/data/transaction");
const tryteNumber_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tryteNumber */ "@iota-pico/data/dist/data/tryteNumber");
const trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "@iota-pico/data/dist/data/trytes");
const cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist.es6/error/cryptoError.js");
const transactionHelper_1 = __webpack_require__(/*! ../helpers/transactionHelper */ "./dist.es6/helpers/transactionHelper.js");
/**
 * Base class for proof of work.
 */
class ProofOfWorkBase {
    /**
     * Create an instance of ProofOfWork.
     * @param timeService Service to get the time for attachments.
     */
    constructor(timeService) {
        this._timeService = timeService || new timeService_1.TimeService();
    }
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     * @returns Promise.
     */
    initialize() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return Promise.resolve();
        });
    }
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    pow(trunkTransaction, branchTransaction, trytes, minWeightMagnitude) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
                throw new cryptoError_1.CryptoError("The trunkTransaction must be an object of type Hash");
            }
            if (!objectHelper_1.ObjectHelper.isType(branchTransaction, hash_1.Hash)) {
                throw new cryptoError_1.CryptoError("The branchTransaction must be an object of type Hash");
            }
            if (!arrayHelper_1.ArrayHelper.isTyped(trytes, trytes_1.Trytes)) {
                throw new cryptoError_1.CryptoError("The trytes must be an array of type Trytes");
            }
            if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");
            }
            const finalTrytes = [];
            let previousTransactionHash;
            for (let i = 0; i < trytes.length; i++) {
                const transaction = transaction_1.Transaction.fromTrytes(trytes[i]);
                // Start with last index transaction
                // Assign it the trunk / branch which the user has supplied
                // If there is a bundle, chain the bundle transactions via
                // trunkTransaction together
                transaction.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(this._timeService.msSinceEpoch());
                transaction.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(0);
                transaction.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(ProofOfWorkBase.MAX_TIMESTAMP_VALUE);
                // If this is the first transaction, to be processed
                // Make sure that it's the last in the bundle and then
                // assign it the supplied trunk and branch transactions
                if (objectHelper_1.ObjectHelper.isEmpty(previousTransactionHash)) {
                    // Check if last transaction in the bundle
                    if (transaction.lastIndex.toNumber() !== transaction.currentIndex.toNumber()) {
                        throw new cryptoError_1.CryptoError("Wrong bundle order. The bundle should be ordered in descending order from currentIndex");
                    }
                    transaction.trunkTransaction = trunkTransaction;
                    transaction.branchTransaction = branchTransaction;
                }
                else {
                    transaction.trunkTransaction = previousTransactionHash;
                    transaction.branchTransaction = trunkTransaction;
                }
                const newTrytes = transaction.toTrytes();
                const singleTrytes = yield this.singlePow(newTrytes, minWeightMagnitude);
                transaction.nonce = tag_1.Tag.fromTrytes(singleTrytes.sub(transaction_1.Transaction.LENGTH - tag_1.Tag.LENGTH, tag_1.Tag.LENGTH));
                // Calculate the hash of the new transaction with nonce and use that as the previous hash for next entry
                const returnTransaction = transaction_1.Transaction.fromTrytes(singleTrytes);
                previousTransactionHash = transactionHelper_1.TransactionHelper.hash(returnTransaction);
                finalTrytes.push(returnTransaction);
            }
            // reverse the order so that it's ascending from currentIndex
            return finalTrytes.reverse().map(transaction => transaction.toTrytes());
        });
    }
}
/**
 * The maximum timestamp value used in proof of work.
 */
ProofOfWorkBase.MAX_TIMESTAMP_VALUE = (Math.pow(3, 27) - 1) / 2;
exports.ProofOfWorkBase = ProofOfWorkBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtCYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBFQUF1RTtBQUN2RSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBRXpFLDJFQUF3RTtBQUN4RSx5REFBc0Q7QUFDdEQsdURBQW9EO0FBQ3BELHVFQUFvRTtBQUNwRSx1RUFBb0U7QUFDcEUsNkRBQTBEO0FBQzFELHNEQUFtRDtBQUNuRCxvRUFBaUU7QUFHakU7O0dBRUc7QUFDSCxNQUFzQixlQUFlO0lBU2pDOzs7T0FHRztJQUNILFlBQVksV0FBMEI7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLElBQUksSUFBSSx5QkFBVyxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7O09BSUc7SUFDVSxVQUFVOztZQUNuQixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixDQUFDO0tBQUE7SUFFRDs7Ozs7OztPQU9HO0lBQ1UsR0FBRyxDQUFDLGdCQUFzQixFQUFFLGlCQUF1QixFQUFFLE1BQWdCLEVBQUUsa0JBQTBCOztZQUMxRyxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsV0FBSSxDQUFDLEVBQUU7Z0JBQzlDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7YUFDaEY7WUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsV0FBSSxDQUFDLEVBQUU7Z0JBQy9DLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7YUFDakY7WUFDRCxJQUFJLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLGVBQU0sQ0FBQyxFQUFFO2dCQUN0QyxNQUFNLElBQUkseUJBQVcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO2FBQ3ZFO1lBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksa0JBQWtCLElBQUksQ0FBQyxFQUFFO2dCQUN4RSxNQUFNLElBQUkseUJBQVcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2FBQy9EO1lBRUQsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBRXZCLElBQUksdUJBQTZCLENBQUM7WUFFbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BDLE1BQU0sV0FBVyxHQUFHLHlCQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV0RCxvQ0FBb0M7Z0JBQ3BDLDJEQUEyRDtnQkFDM0QsMERBQTBEO2dCQUMxRCw0QkFBNEI7Z0JBQzVCLFdBQVcsQ0FBQyxtQkFBbUIsR0FBRyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQzNGLFdBQVcsQ0FBQyw2QkFBNkIsR0FBRyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEUsV0FBVyxDQUFDLDZCQUE2QixHQUFHLHlCQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUV4RyxvREFBb0Q7Z0JBQ3BELHNEQUFzRDtnQkFDdEQsdURBQXVEO2dCQUV2RCxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEVBQUU7b0JBQy9DLDBDQUEwQztvQkFDMUMsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUU7d0JBQzFFLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHdGQUF3RixDQUFDLENBQUM7cUJBQ25IO29CQUNELFdBQVcsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztvQkFDaEQsV0FBVyxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO2lCQUNyRDtxQkFBTTtvQkFDSCxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsdUJBQXVCLENBQUM7b0JBQ3ZELFdBQVcsQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztpQkFDcEQ7Z0JBRUQsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUV6QyxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUM7Z0JBRXpFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsU0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLHlCQUFXLENBQUMsTUFBTSxHQUFHLFNBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBRWxHLHdHQUF3RztnQkFDeEcsTUFBTSxpQkFBaUIsR0FBRyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDL0QsdUJBQXVCLEdBQUcscUNBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBRXBFLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUN2QztZQUNELDZEQUE2RDtZQUM3RCxPQUFPLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1RSxDQUFDO0tBQUE7O0FBNUZEOztHQUVHO0FBQ29CLG1DQUFtQixHQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBSm5GLDBDQXNHQyJ9

/***/ }),

/***/ "./dist.es6/sponges/curl.js":
/*!**********************************!*\
  !*** ./dist.es6/sponges/curl.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist.es6/error/cryptoError.js");
/**
 * Implementation of ISponge using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 */
class Curl {
    /**
     * Create a new instance of Curl.
     * @param rounds The number of rounds to use.
     */
    constructor(rounds = Curl.NUMBER_OF_ROUNDS) {
        this._numberOfRounds = rounds;
    }
    /**
     * Get the constant for the spone.
     * @param name The name of the constant to get.
     * @returns The constant.
     */
    getConstant(name) {
        switch (name) {
            case "NUMBER_OF_ROUNDS": {
                return this._numberOfRounds;
            }
            case "HASH_LENGTH":
            case "STATE_LENGTH": {
                return Curl[name];
            }
            default: throw new cryptoError_1.CryptoError(`Unknown constant requested ${name}`);
        }
    }
    /**
     * Get the state of the curl hash.
     * @returns The state.
     */
    getState() {
        return this._state;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    initialize(state) {
        if (state) {
            this._state = state;
        }
        else {
            this._state = new Int8Array(Curl.STATE_LENGTH);
        }
    }
    /**
     * Reset the hasher.
     */
    reset() {
        this.initialize();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */
    absorb(trits, offset, length) {
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
        let localOffset = offset;
        let localLength = length;
        do {
            let i = 0;
            const limit = localLength < Curl.HASH_LENGTH ? localLength : Curl.HASH_LENGTH;
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
    squeeze(trits, offset, length) {
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
        let localOffset = offset;
        let localLength = length;
        do {
            let i = 0;
            const limit = localLength < Curl.HASH_LENGTH ? length : Curl.HASH_LENGTH;
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
    transform() {
        let stateCopy;
        let index = 0;
        for (let round = 0; round < this._numberOfRounds; round++) {
            stateCopy = new Int8Array(this._state.slice());
            for (let i = 0; i < Curl.STATE_LENGTH; i++) {
                this._state[i] = Curl.TRUTH_TABLE[stateCopy[index] + (stateCopy[index += (index < 365 ? 364 : -365)] << 2) + 5];
            }
        }
    }
}
Curl.HASH_LENGTH = 243;
Curl.NUMBER_OF_ROUNDS = 81;
Curl.STATE_LENGTH = Curl.HASH_LENGTH * 3;
/* @internal */
Curl.TRUTH_TABLE = new Int8Array([1, 0, -1, 2, 1, -1, 0, 2, -1, 1, 0]);
exports.Curl = Curl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcG9uZ2VzL2N1cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFDekUsc0RBQW1EO0FBR25EOzs7R0FHRztBQUNILE1BQWEsSUFBSTtJQWFiOzs7T0FHRztJQUNILFlBQVksU0FBaUIsSUFBSSxDQUFDLGdCQUFnQjtRQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFdBQVcsQ0FBQyxJQUFZO1FBQzNCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNyQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7YUFDL0I7WUFDRCxLQUFLLGFBQWEsQ0FBQztZQUNuQixLQUFLLGNBQWMsQ0FBQyxDQUFDO2dCQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjtZQUNELE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLDhCQUE4QixJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFVBQVUsQ0FBQyxLQUFpQjtRQUMvQixJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRDtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUs7UUFDUixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLEtBQWdC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

/***/ }),

/***/ "./dist.es6/sponges/kerl.js":
/*!**********************************!*\
  !*** ./dist.es6/sponges/kerl.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const sha3_1 = __webpack_require__(/*! ../digests/sha3 */ "./dist.es6/digests/sha3.js");
const cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "./dist.es6/error/cryptoError.js");
const bigIntegerHelper_1 = __webpack_require__(/*! ../helpers/bigIntegerHelper */ "./dist.es6/helpers/bigIntegerHelper.js");
/**
 * Implementation of ISponge using Kerl algorithm.
 * https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
class Kerl {
    /**
     * Create a new instance of Kerl.
     */
    constructor() {
        this._keccak = new sha3_1.Sha3(384, sha3_1.Sha3.KECCAK_PADDING, 384);
    }
    /**
     * Get the constant for the spone.
     * @param name The name of the constant to get.
     * @returns The constant.
     */
    getConstant(name) {
        switch (name) {
            case "HASH_LENGTH":
            case "BIT_HASH_LENGTH":
            case "BYTE_HASH_LENGTH": {
                return Kerl[name];
            }
            default: throw new cryptoError_1.CryptoError(`Unknown constant requested ${name}`);
        }
    }
    /**
     * Get the state of the kerl hash.
     * @returns The state.
     */
    getState() {
        return undefined;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    initialize(state) {
    }
    /**
     * Reset the hasher.
     */
    reset() {
        this._keccak.reset();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */
    absorb(trits, offset, length) {
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
            throw new cryptoError_1.CryptoError(`Length must be a multiple of ${Kerl.HASH_LENGTH}`, { length });
        }
        let localOffset = offset;
        let localLength = length;
        do {
            const tritState = trits.slice(localOffset, localOffset + Kerl.HASH_LENGTH);
            tritState[Kerl.HASH_LENGTH - 1] = 0;
            const bigInt = bigIntegerHelper_1.BigIntegerHelper.tritsToBigInteger(tritState, 0, tritState.length);
            const byteState = new ArrayBuffer(Kerl.BYTE_HASH_LENGTH);
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
    squeeze(trits, offset, length) {
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
            throw new cryptoError_1.CryptoError(`Length must be a multiple of ${Kerl.HASH_LENGTH}`, { length });
        }
        let localOffset = offset;
        let localLength = length;
        do {
            const byteStateBuffer = this._keccak.digest();
            const bigInt = bigIntegerHelper_1.BigIntegerHelper.bytesToBigInteger(byteStateBuffer, 0, Kerl.BYTE_HASH_LENGTH);
            const tritState = new Int8Array(Kerl.HASH_LENGTH);
            bigIntegerHelper_1.BigIntegerHelper.bigIntegerToTrits(bigInt, tritState, 0, Kerl.HASH_LENGTH);
            tritState[Kerl.HASH_LENGTH - 1] = 0;
            let i = 0;
            while (i < Kerl.HASH_LENGTH) {
                trits[localOffset++] = tritState[i++];
            }
            const dv = new DataView(byteStateBuffer);
            for (i = 0; i < dv.byteLength; i++) {
                dv.setUint8(i, dv.getUint8(i) ^ 0xFF);
            }
            this._keccak.update(byteStateBuffer);
            localLength -= Kerl.HASH_LENGTH;
        } while (localLength > 0);
    }
}
/* @internal */
Kerl.HASH_LENGTH = 243;
/* @internal */
Kerl.BIT_HASH_LENGTH = 384;
/* @internal */
Kerl.BYTE_HASH_LENGTH = Kerl.BIT_HASH_LENGTH / 8;
exports.Kerl = Kerl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcG9uZ2VzL2tlcmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFDekUsMENBQXVDO0FBQ3ZDLHNEQUFtRDtBQUNuRCxrRUFBK0Q7QUFHL0Q7OztHQUdHO0FBQ0gsTUFBYSxJQUFJO0lBV2I7O09BRUc7SUFDSDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFJLENBQUMsR0FBRyxFQUFFLFdBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxXQUFXLENBQUMsSUFBWTtRQUMzQixRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssYUFBYSxDQUFDO1lBQ25CLEtBQUssaUJBQWlCLENBQUM7WUFDdkIsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjtZQUNELE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLDhCQUE4QixJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksVUFBVSxDQUFDLEtBQWlCO0lBQ25DLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUs7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxLQUFnQixFQUFFLE1BQWMsRUFBRSxNQUFjO1FBQzFELElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUQsTUFBTSxJQUFJLHlCQUFXLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9DLE1BQU0sSUFBSSx5QkFBVyxDQUFDLDhCQUE4QixDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQyxNQUFNLElBQUkseUJBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDaEMsTUFBTSxJQUFJLHlCQUFXLENBQUMsdURBQXVELENBQUMsQ0FBQztTQUNsRjtRQUNELElBQUksTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxJQUFJLHlCQUFXLENBQUMsZ0NBQWdDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDekY7UUFFRCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDekIsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBRXpCLEdBQUc7WUFDQyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTNFLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxNQUFNLE1BQU0sR0FBRyxtQ0FBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRixNQUFNLFNBQVMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN6RCxtQ0FBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXpELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRS9CLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ2hDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ25DLFFBQVEsV0FBVyxHQUFHLENBQUMsRUFBRTtJQUM5QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxPQUFPLENBQUMsS0FBZ0IsRUFBRSxNQUFjLEVBQUUsTUFBYztRQUMzRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlELE1BQU0sSUFBSSx5QkFBVyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQyxNQUFNLElBQUkseUJBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDL0MsTUFBTSxJQUFJLHlCQUFXLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7U0FDbEY7UUFDRCxJQUFJLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sSUFBSSx5QkFBVyxDQUFDLGdDQUFnQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3pGO1FBRUQsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUV6QixHQUFHO1lBQ0MsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUU5QyxNQUFNLE1BQU0sR0FBRyxtQ0FBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRTdGLE1BQU0sU0FBUyxHQUFjLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3RCxtQ0FBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFM0UsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXBDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3pCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3pDO1lBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDekMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNoQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ3pDO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFckMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDbkMsUUFBUSxXQUFXLEdBQUcsQ0FBQyxFQUFFO0lBQzlCLENBQUM7O0FBbEpELGVBQWU7QUFDUyxnQkFBVyxHQUFXLEdBQUcsQ0FBQztBQUNsRCxlQUFlO0FBQ1Msb0JBQWUsR0FBVyxHQUFHLENBQUM7QUFDdEQsZUFBZTtBQUNTLHFCQUFnQixHQUFXLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBTmhGLG9CQW9KQyJ9

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "@iota-pico/core/dist/error/coreError":
/*!*******************************************************!*\
  !*** external "@iota-pico/core/dist/error/coreError" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_error_coreError__;

/***/ }),

/***/ "@iota-pico/core/dist/factories/factoryBase":
/*!*************************************************************!*\
  !*** external "@iota-pico/core/dist/factories/factoryBase" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_factories_factoryBase__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/arrayHelper":
/*!***********************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/arrayHelper" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_arrayHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/numberHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/numberHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_numberHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/objectHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/objectHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_objectHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/services/timeService":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/services/timeService" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_services_timeService__;

/***/ }),

/***/ "@iota-pico/data/dist/data/address":
/*!****************************************************!*\
  !*** external "@iota-pico/data/dist/data/address" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_address__;

/***/ }),

/***/ "@iota-pico/data/dist/data/addressSecurity":
/*!************************************************************!*\
  !*** external "@iota-pico/data/dist/data/addressSecurity" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_addressSecurity__;

/***/ }),

/***/ "@iota-pico/data/dist/data/hash":
/*!*************************************************!*\
  !*** external "@iota-pico/data/dist/data/hash" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_hash__;

/***/ }),

/***/ "@iota-pico/data/dist/data/signatureMessageFragment":
/*!*********************************************************************!*\
  !*** external "@iota-pico/data/dist/data/signatureMessageFragment" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_signatureMessageFragment__;

/***/ }),

/***/ "@iota-pico/data/dist/data/tag":
/*!************************************************!*\
  !*** external "@iota-pico/data/dist/data/tag" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_tag__;

/***/ }),

/***/ "@iota-pico/data/dist/data/transaction":
/*!********************************************************!*\
  !*** external "@iota-pico/data/dist/data/transaction" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_transaction__;

/***/ }),

/***/ "@iota-pico/data/dist/data/trits":
/*!**************************************************!*\
  !*** external "@iota-pico/data/dist/data/trits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trits__;

/***/ }),

/***/ "@iota-pico/data/dist/data/tryteNumber":
/*!********************************************************!*\
  !*** external "@iota-pico/data/dist/data/tryteNumber" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_tryteNumber__;

/***/ }),

/***/ "@iota-pico/data/dist/data/trytes":
/*!***************************************************!*\
  !*** external "@iota-pico/data/dist/data/trytes" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trytes__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi9kaXN0LmVzNi9kaWdlc3RzL3NoYTMuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi9kaXN0LmVzNi9lcnJvci9jcnlwdG9FcnJvci5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uL2Rpc3QuZXM2L2ZhY3Rvcmllcy9wcm9vZk9mV29ya0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vLi9kaXN0LmVzNi9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uL2Rpc3QuZXM2L2hhc2gvaXNzLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4vZGlzdC5lczYvaGVscGVycy9iaWdJbnRlZ2VySGVscGVyLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4vZGlzdC5lczYvaGVscGVycy90cmFuc2FjdGlvbkhlbHBlci5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by8uL2Rpc3QuZXM2L2luZGV4LmpzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4vZGlzdC5lczYvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4vZGlzdC5lczYvc3Bvbmdlcy9jdXJsLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4vZGlzdC5lczYvc3Bvbmdlcy9rZXJsLmpzIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL2NvcmVFcnJvclwiIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L3NlcnZpY2VzL3RpbWVTZXJ2aWNlXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vZXh0ZXJuYWwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2FkZHJlc3NcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by9leHRlcm5hbCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1NlY3VyaXR5XCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vZXh0ZXJuYWwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by9leHRlcm5hbCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29DcnlwdG8vZXh0ZXJuYWwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RhZ1wiIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvL2V4dGVybmFsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2FjdGlvblwiIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvL2V4dGVybmFsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvL2V4dGVybmFsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZU51bWJlclwiIiwid2VicGFjazovL0lvdGFQaWNvQ3J5cHRvL2V4dGVybmFsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0NyeXB0by9leHRlcm5hbCB7XCJhbWRcIjpcImJpZy1pbnRlZ2VyXCIsXCJjb21tb25qc1wiOlwiYmlnLWludGVnZXJcIixcImNvbW1vbmpzMlwiOlwiYmlnLWludGVnZXJcIixcInJvb3RcIjpcImJpZ0ludFwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDhDQUE4QyxjQUFjO0FBQzVELHVCQUF1QixtQkFBTyxDQUFDLDRGQUEyQztBQUMxRSxzQkFBc0IsbUJBQU8sQ0FBQyw2REFBc0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdUNBQXVDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQWdEO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyaHhCOzs7Ozs7Ozs7OztBQ2xUM0MsOENBQThDLGNBQWM7QUFDNUQsb0JBQW9CLG1CQUFP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QWdELHVEQUF1RCxFQUFFLEVBQUUsR0FBRztBQUNsSyw0Q0FBNEMsc0NBQXNDLFVBQVUsb0JBQW9CLEVBQUUsRUFBRSxVQUFVO0FBQzlIOztBQUVPO0FBQ1AsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsNENBQTRDO0FBQzVDOzs7Ozs7Ozs7Ozs7QUN6TEEsa0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsbUY7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEsbUY7Ozs7Ozs7Ozs7O0FDQUEsOEU7Ozs7Ozs7Ozs7O0FDQUEseUQiLCJmaWxlIjoiaW90YS1waWNvLWNyeXB0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL2NvcmVFcnJvclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3Qvc2VydmljZXMvdGltZVNlcnZpY2VcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2FkZHJlc3NcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2FkZHJlc3NTZWN1cml0eVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvaGFzaFwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90YWdcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zYWN0aW9uXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVOdW1iZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKSwgcmVxdWlyZShcImJpZy1pbnRlZ2VyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGlvdGEtcGljby9jcnlwdG9cIiwgW1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvY29yZUVycm9yXCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiLCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9zZXJ2aWNlcy90aW1lU2VydmljZVwiLCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1wiLCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1NlY3VyaXR5XCIsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcIiwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RhZ1wiLCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJhbnNhY3Rpb25cIiwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZU51bWJlclwiLCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIsIFwiYmlnLWludGVnZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGlvdGEtcGljby9jcnlwdG9cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L3NlcnZpY2VzL3RpbWVTZXJ2aWNlXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9hZGRyZXNzXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9hZGRyZXNzU2VjdXJpdHlcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdGFnXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2FjdGlvblwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlTnVtYmVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIiksIHJlcXVpcmUoXCJiaWctaW50ZWdlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiSW90YVBpY29DcnlwdG9cIl0gPSBmYWN0b3J5KHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L3NlcnZpY2VzL3RpbWVTZXJ2aWNlXCJdLCByb290W1wiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9hZGRyZXNzXCJdLCByb290W1wiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9hZGRyZXNzU2VjdXJpdHlcIl0sIHJvb3RbXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIl0sIHJvb3RbXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFwiXSwgcm9vdFtcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdGFnXCJdLCByb290W1wiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2FjdGlvblwiXSwgcm9vdFtcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIl0sIHJvb3RbXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlTnVtYmVyXCJdLCByb290W1wiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIl0sIHJvb3RbXCJiaWdJbnRcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfZXJyb3JfY29yZUVycm9yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfZmFjdG9yaWVzX2ZhY3RvcnlCYXNlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19hcnJheUhlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19vYmplY3RIZWxwZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9zZXJ2aWNlc190aW1lU2VydmljZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfYWRkcmVzc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfYWRkcmVzc1NlY3VyaXR5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV9oYXNoX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX3RhZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJhbnNhY3Rpb25fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX3RyaXRzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90cnl0ZU51bWJlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJ5dGVzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmlnX2ludGVnZXJfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC5lczYvaW5kZXguanNcIik7XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG4vKipcclxuICogU2hhMyBpbXBsZW1lbnRhdGlvbi5cclxuICovXHJcbmNsYXNzIFNoYTMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgU0hBMy5cclxuICAgICAqIEBwYXJhbSBiaXRzIFRoZSBudW1iZXIgb2YgaW5wdXQgYml0cy5cclxuICAgICAqIEBwYXJhbSBwYWRkaW5nIFRoZSBwYWRkaW5nIHRvIHVzZS5cclxuICAgICAqIEBwYXJhbSBvdXRwdXRCaXRzIFRoZSBudW1iZXIgb2Ygb3V0cHV0IGJpdHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGJpdHMsIHBhZGRpbmcsIG91dHB1dEJpdHMpIHtcclxuICAgICAgICB0aGlzLl9wYWRkaW5nID0gcGFkZGluZztcclxuICAgICAgICB0aGlzLl9vdXRwdXRCaXRzID0gb3V0cHV0Qml0cztcclxuICAgICAgICB0aGlzLl9ibG9ja0NvdW50ID0gKDE2MDAgLSAoYml0cyA8PCAxKSkgPj4gNTtcclxuICAgICAgICB0aGlzLl9ieXRlQ291bnQgPSB0aGlzLl9ibG9ja0NvdW50IDw8IDI7XHJcbiAgICAgICAgdGhpcy5fb3V0cHV0QmxvY2tzID0gb3V0cHV0Qml0cyA+PiA1O1xyXG4gICAgICAgIHRoaXMuX2V4dHJhQnl0ZXMgPSAob3V0cHV0Qml0cyAmIDMxKSA+PiAzO1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdGhlIGRpZ2VzdC5cclxuICAgICAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzZXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2Jsb2NrID0gMDtcclxuICAgICAgICB0aGlzLl9zdGFydCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2Jsb2NrQ291bnQgKyAxKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ldyBVaW50MzJBcnJheSg1MCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgZGlnZXN0LlxyXG4gICAgICogQHBhcmFtIGlucHV0IEFycmF5IG9mIGRhdGEgdG8gdXNlIGluIHRoZSB1cGRhdGUuXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZShpbnB1dCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShpbnB1dCwgQXJyYXlCdWZmZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiSW5wdXQgaXMgbm90IG9mIHR5cGUgQXJyYXlCdWZmZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgVWludDhBcnJheShpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbWVzc2FnZS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzWzBdID0gdGhpcy5fYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgdGhpcy5fYmxvY2tDb3VudCArIDE7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tpXSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChpID0gdGhpcy5fc3RhcnQ7IGluZGV4IDwgbGVuZ3RoICYmIGkgPCB0aGlzLl9ieXRlQ291bnQ7ICsraW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tpID4+IDJdIHw9IG1lc3NhZ2VbaW5kZXhdIDw8IFNoYTMuU0hJRlRbaSsrICYgM107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbGFzdEJ5dGVJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIGlmIChpID49IHRoaXMuX2J5dGVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQgPSBpIC0gdGhpcy5fYnl0ZUNvdW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2sgPSB0aGlzLl9ibG9ja3NbdGhpcy5fYmxvY2tDb3VudF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fYmxvY2tDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVbaV0gXj0gdGhpcy5fYmxvY2tzW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZWNjYWtQZXJtdXRhdGlvbih0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEZpbmFsaXplIGFuZCByZXR1cm4gdGhlIGhhc2ggZm9yIHRoZSBkaWdlc3QsIHdpbGwgYWxzbyByZXNldCB0aGUgc3RhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBBcnJheSBidWZmZXIgY29udGFpbmluZyB0aGUgZGlnZXN0LlxyXG4gICAgICovXHJcbiAgICBkaWdlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgaiA9IDA7XHJcbiAgICAgICAgY29uc3QgYnl0ZXMgPSB0aGlzLl9vdXRwdXRCaXRzID4+IDM7XHJcbiAgICAgICAgbGV0IGJ1ZmZlcjtcclxuICAgICAgICBpZiAodGhpcy5fZXh0cmFCeXRlcykge1xyXG4gICAgICAgICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoKHRoaXMuX291dHB1dEJsb2NrcyArIDEpIDw8IDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcclxuICAgICAgICB3aGlsZSAoaiA8IHRoaXMuX291dHB1dEJsb2Nrcykge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fYmxvY2tDb3VudCAmJiBqIDwgdGhpcy5fb3V0cHV0QmxvY2tzOyArK2ksICsraikge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlbal0gPSB0aGlzLl9zdGF0ZVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZXh0cmFCeXRlcykge1xyXG4gICAgICAgICAgICBhcnJheVtpXSA9IHRoaXMuX3N0YXRlW2ldO1xyXG4gICAgICAgICAgICBidWZmZXIgPSBidWZmZXIuc2xpY2UoMCwgYnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZmluYWxpemUoKSB7XHJcbiAgICAgICAgbGV0IGkgPSB0aGlzLl9sYXN0Qnl0ZUluZGV4O1xyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1tpID4+IDJdIHw9IHRoaXMuX3BhZGRpbmdbaSAmIDNdO1xyXG4gICAgICAgIGlmICh0aGlzLl9sYXN0Qnl0ZUluZGV4ID09PSB0aGlzLl9ieXRlQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzWzBdID0gdGhpcy5fYmxvY2tzW3RoaXMuX2Jsb2NrQ291bnRdO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgdGhpcy5fYmxvY2tDb3VudCArIDE7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2ldID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9ibG9ja3NbdGhpcy5fYmxvY2tDb3VudCAtIDFdIHw9IDB4ODAwMDAwMDA7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2Jsb2NrQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZVtpXSBePSB0aGlzLl9ibG9ja3NbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua2VjY2FrUGVybXV0YXRpb24odGhpcy5fc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBrZWNjYWtQZXJtdXRhdGlvbihzKSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb25cclxuICAgICAgICBsZXQgaCwgbCwgbiwgYzAsIGMxLCBjMiwgYzMsIGM0LCBjNSwgYzYsIGM3LCBjOCwgYzksIGIwLCBiMSwgYjIsIGIzLCBiNCwgYjUsIGI2LCBiNywgYjgsIGI5LCBiMTAsIGIxMSwgYjEyLCBiMTMsIGIxNCwgYjE1LCBiMTYsIGIxNywgYjE4LCBiMTksIGIyMCwgYjIxLCBiMjIsIGIyMywgYjI0LCBiMjUsIGIyNiwgYjI3LCBiMjgsIGIyOSwgYjMwLCBiMzEsIGIzMiwgYjMzLCBiMzQsIGIzNSwgYjM2LCBiMzcsIGIzOCwgYjM5LCBiNDAsIGI0MSwgYjQyLCBiNDMsIGI0NCwgYjQ1LCBiNDYsIGI0NywgYjQ4LCBiNDk7XHJcbiAgICAgICAgZm9yIChuID0gMDsgbiA8IDQ4OyBuICs9IDIpIHtcclxuICAgICAgICAgICAgYzAgPSBzWzBdIF4gc1sxMF0gXiBzWzIwXSBeIHNbMzBdIF4gc1s0MF07XHJcbiAgICAgICAgICAgIGMxID0gc1sxXSBeIHNbMTFdIF4gc1syMV0gXiBzWzMxXSBeIHNbNDFdO1xyXG4gICAgICAgICAgICBjMiA9IHNbMl0gXiBzWzEyXSBeIHNbMjJdIF4gc1szMl0gXiBzWzQyXTtcclxuICAgICAgICAgICAgYzMgPSBzWzNdIF4gc1sxM10gXiBzWzIzXSBeIHNbMzNdIF4gc1s0M107XHJcbiAgICAgICAgICAgIGM0ID0gc1s0XSBeIHNbMTRdIF4gc1syNF0gXiBzWzM0XSBeIHNbNDRdO1xyXG4gICAgICAgICAgICBjNSA9IHNbNV0gXiBzWzE1XSBeIHNbMjVdIF4gc1szNV0gXiBzWzQ1XTtcclxuICAgICAgICAgICAgYzYgPSBzWzZdIF4gc1sxNl0gXiBzWzI2XSBeIHNbMzZdIF4gc1s0Nl07XHJcbiAgICAgICAgICAgIGM3ID0gc1s3XSBeIHNbMTddIF4gc1syN10gXiBzWzM3XSBeIHNbNDddO1xyXG4gICAgICAgICAgICBjOCA9IHNbOF0gXiBzWzE4XSBeIHNbMjhdIF4gc1szOF0gXiBzWzQ4XTtcclxuICAgICAgICAgICAgYzkgPSBzWzldIF4gc1sxOV0gXiBzWzI5XSBeIHNbMzldIF4gc1s0OV07XHJcbiAgICAgICAgICAgIGggPSBjOCBeICgoYzIgPDwgMSkgfCAoYzMgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjOSBeICgoYzMgPDwgMSkgfCAoYzIgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbMF0gXj0gaDtcclxuICAgICAgICAgICAgc1sxXSBePSBsO1xyXG4gICAgICAgICAgICBzWzEwXSBePSBoO1xyXG4gICAgICAgICAgICBzWzExXSBePSBsO1xyXG4gICAgICAgICAgICBzWzIwXSBePSBoO1xyXG4gICAgICAgICAgICBzWzIxXSBePSBsO1xyXG4gICAgICAgICAgICBzWzMwXSBePSBoO1xyXG4gICAgICAgICAgICBzWzMxXSBePSBsO1xyXG4gICAgICAgICAgICBzWzQwXSBePSBoO1xyXG4gICAgICAgICAgICBzWzQxXSBePSBsO1xyXG4gICAgICAgICAgICBoID0gYzAgXiAoKGM0IDw8IDEpIHwgKGM1ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzEgXiAoKGM1IDw8IDEpIHwgKGM0ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbM10gXj0gbDtcclxuICAgICAgICAgICAgc1sxMl0gXj0gaDtcclxuICAgICAgICAgICAgc1sxM10gXj0gbDtcclxuICAgICAgICAgICAgc1syMl0gXj0gaDtcclxuICAgICAgICAgICAgc1syM10gXj0gbDtcclxuICAgICAgICAgICAgc1szMl0gXj0gaDtcclxuICAgICAgICAgICAgc1szM10gXj0gbDtcclxuICAgICAgICAgICAgc1s0Ml0gXj0gaDtcclxuICAgICAgICAgICAgc1s0M10gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGMyIF4gKChjNiA8PCAxKSB8IChjNyA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGMzIF4gKChjNyA8PCAxKSB8IChjNiA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1s0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzVdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTRdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTVdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjRdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjVdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzRdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzVdIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDRdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDVdIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjNCBeICgoYzggPDwgMSkgfCAoYzkgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjNSBeICgoYzkgPDwgMSkgfCAoYzggPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbNl0gXj0gaDtcclxuICAgICAgICAgICAgc1s3XSBePSBsO1xyXG4gICAgICAgICAgICBzWzE2XSBePSBoO1xyXG4gICAgICAgICAgICBzWzE3XSBePSBsO1xyXG4gICAgICAgICAgICBzWzI2XSBePSBoO1xyXG4gICAgICAgICAgICBzWzI3XSBePSBsO1xyXG4gICAgICAgICAgICBzWzM2XSBePSBoO1xyXG4gICAgICAgICAgICBzWzM3XSBePSBsO1xyXG4gICAgICAgICAgICBzWzQ2XSBePSBoO1xyXG4gICAgICAgICAgICBzWzQ3XSBePSBsO1xyXG4gICAgICAgICAgICBoID0gYzYgXiAoKGMwIDw8IDEpIHwgKGMxID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzcgXiAoKGMxIDw8IDEpIHwgKGMwID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbOV0gXj0gbDtcclxuICAgICAgICAgICAgc1sxOF0gXj0gaDtcclxuICAgICAgICAgICAgc1sxOV0gXj0gbDtcclxuICAgICAgICAgICAgc1syOF0gXj0gaDtcclxuICAgICAgICAgICAgc1syOV0gXj0gbDtcclxuICAgICAgICAgICAgc1szOF0gXj0gaDtcclxuICAgICAgICAgICAgc1szOV0gXj0gbDtcclxuICAgICAgICAgICAgc1s0OF0gXj0gaDtcclxuICAgICAgICAgICAgc1s0OV0gXj0gbDtcclxuICAgICAgICAgICAgYjAgPSBzWzBdO1xyXG4gICAgICAgICAgICBiMSA9IHNbMV07XHJcbiAgICAgICAgICAgIGIzMiA9IChzWzExXSA8PCA0KSB8IChzWzEwXSA+Pj4gMjgpO1xyXG4gICAgICAgICAgICBiMzMgPSAoc1sxMF0gPDwgNCkgfCAoc1sxMV0gPj4+IDI4KTtcclxuICAgICAgICAgICAgYjE0ID0gKHNbMjBdIDw8IDMpIHwgKHNbMjFdID4+PiAyOSk7XHJcbiAgICAgICAgICAgIGIxNSA9IChzWzIxXSA8PCAzKSB8IChzWzIwXSA+Pj4gMjkpO1xyXG4gICAgICAgICAgICBiNDYgPSAoc1szMV0gPDwgOSkgfCAoc1szMF0gPj4+IDIzKTtcclxuICAgICAgICAgICAgYjQ3ID0gKHNbMzBdIDw8IDkpIHwgKHNbMzFdID4+PiAyMyk7XHJcbiAgICAgICAgICAgIGIyOCA9IChzWzQwXSA8PCAxOCkgfCAoc1s0MV0gPj4+IDE0KTtcclxuICAgICAgICAgICAgYjI5ID0gKHNbNDFdIDw8IDE4KSB8IChzWzQwXSA+Pj4gMTQpO1xyXG4gICAgICAgICAgICBiMjAgPSAoc1syXSA8PCAxKSB8IChzWzNdID4+PiAzMSk7XHJcbiAgICAgICAgICAgIGIyMSA9IChzWzNdIDw8IDEpIHwgKHNbMl0gPj4+IDMxKTtcclxuICAgICAgICAgICAgYjIgPSAoc1sxM10gPDwgMTIpIHwgKHNbMTJdID4+PiAyMCk7XHJcbiAgICAgICAgICAgIGIzID0gKHNbMTJdIDw8IDEyKSB8IChzWzEzXSA+Pj4gMjApO1xyXG4gICAgICAgICAgICBiMzQgPSAoc1syMl0gPDwgMTApIHwgKHNbMjNdID4+PiAyMik7XHJcbiAgICAgICAgICAgIGIzNSA9IChzWzIzXSA8PCAxMCkgfCAoc1syMl0gPj4+IDIyKTtcclxuICAgICAgICAgICAgYjE2ID0gKHNbMzNdIDw8IDEzKSB8IChzWzMyXSA+Pj4gMTkpO1xyXG4gICAgICAgICAgICBiMTcgPSAoc1szMl0gPDwgMTMpIHwgKHNbMzNdID4+PiAxOSk7XHJcbiAgICAgICAgICAgIGI0OCA9IChzWzQyXSA8PCAyKSB8IChzWzQzXSA+Pj4gMzApO1xyXG4gICAgICAgICAgICBiNDkgPSAoc1s0M10gPDwgMikgfCAoc1s0Ml0gPj4+IDMwKTtcclxuICAgICAgICAgICAgYjQwID0gKHNbNV0gPDwgMzApIHwgKHNbNF0gPj4+IDIpO1xyXG4gICAgICAgICAgICBiNDEgPSAoc1s0XSA8PCAzMCkgfCAoc1s1XSA+Pj4gMik7XHJcbiAgICAgICAgICAgIGIyMiA9IChzWzE0XSA8PCA2KSB8IChzWzE1XSA+Pj4gMjYpO1xyXG4gICAgICAgICAgICBiMjMgPSAoc1sxNV0gPDwgNikgfCAoc1sxNF0gPj4+IDI2KTtcclxuICAgICAgICAgICAgYjQgPSAoc1syNV0gPDwgMTEpIHwgKHNbMjRdID4+PiAyMSk7XHJcbiAgICAgICAgICAgIGI1ID0gKHNbMjRdIDw8IDExKSB8IChzWzI1XSA+Pj4gMjEpO1xyXG4gICAgICAgICAgICBiMzYgPSAoc1szNF0gPDwgMTUpIHwgKHNbMzVdID4+PiAxNyk7XHJcbiAgICAgICAgICAgIGIzNyA9IChzWzM1XSA8PCAxNSkgfCAoc1szNF0gPj4+IDE3KTtcclxuICAgICAgICAgICAgYjE4ID0gKHNbNDVdIDw8IDI5KSB8IChzWzQ0XSA+Pj4gMyk7XHJcbiAgICAgICAgICAgIGIxOSA9IChzWzQ0XSA8PCAyOSkgfCAoc1s0NV0gPj4+IDMpO1xyXG4gICAgICAgICAgICBiMTAgPSAoc1s2XSA8PCAyOCkgfCAoc1s3XSA+Pj4gNCk7XHJcbiAgICAgICAgICAgIGIxMSA9IChzWzddIDw8IDI4KSB8IChzWzZdID4+PiA0KTtcclxuICAgICAgICAgICAgYjQyID0gKHNbMTddIDw8IDIzKSB8IChzWzE2XSA+Pj4gOSk7XHJcbiAgICAgICAgICAgIGI0MyA9IChzWzE2XSA8PCAyMykgfCAoc1sxN10gPj4+IDkpO1xyXG4gICAgICAgICAgICBiMjQgPSAoc1syNl0gPDwgMjUpIHwgKHNbMjddID4+PiA3KTtcclxuICAgICAgICAgICAgYjI1ID0gKHNbMjddIDw8IDI1KSB8IChzWzI2XSA+Pj4gNyk7XHJcbiAgICAgICAgICAgIGI2ID0gKHNbMzZdIDw8IDIxKSB8IChzWzM3XSA+Pj4gMTEpO1xyXG4gICAgICAgICAgICBiNyA9IChzWzM3XSA8PCAyMSkgfCAoc1szNl0gPj4+IDExKTtcclxuICAgICAgICAgICAgYjM4ID0gKHNbNDddIDw8IDI0KSB8IChzWzQ2XSA+Pj4gOCk7XHJcbiAgICAgICAgICAgIGIzOSA9IChzWzQ2XSA8PCAyNCkgfCAoc1s0N10gPj4+IDgpO1xyXG4gICAgICAgICAgICBiMzAgPSAoc1s4XSA8PCAyNykgfCAoc1s5XSA+Pj4gNSk7XHJcbiAgICAgICAgICAgIGIzMSA9IChzWzldIDw8IDI3KSB8IChzWzhdID4+PiA1KTtcclxuICAgICAgICAgICAgYjEyID0gKHNbMThdIDw8IDIwKSB8IChzWzE5XSA+Pj4gMTIpO1xyXG4gICAgICAgICAgICBiMTMgPSAoc1sxOV0gPDwgMjApIHwgKHNbMThdID4+PiAxMik7XHJcbiAgICAgICAgICAgIGI0NCA9IChzWzI5XSA8PCA3KSB8IChzWzI4XSA+Pj4gMjUpO1xyXG4gICAgICAgICAgICBiNDUgPSAoc1syOF0gPDwgNykgfCAoc1syOV0gPj4+IDI1KTtcclxuICAgICAgICAgICAgYjI2ID0gKHNbMzhdIDw8IDgpIHwgKHNbMzldID4+PiAyNCk7XHJcbiAgICAgICAgICAgIGIyNyA9IChzWzM5XSA8PCA4KSB8IChzWzM4XSA+Pj4gMjQpO1xyXG4gICAgICAgICAgICBiOCA9IChzWzQ4XSA8PCAxNCkgfCAoc1s0OV0gPj4+IDE4KTtcclxuICAgICAgICAgICAgYjkgPSAoc1s0OV0gPDwgMTQpIHwgKHNbNDhdID4+PiAxOCk7XHJcbiAgICAgICAgICAgIHNbMF0gPSBiMCBeICh+YjIgJiBiNCk7XHJcbiAgICAgICAgICAgIHNbMV0gPSBiMSBeICh+YjMgJiBiNSk7XHJcbiAgICAgICAgICAgIHNbMTBdID0gYjEwIF4gKH5iMTIgJiBiMTQpO1xyXG4gICAgICAgICAgICBzWzExXSA9IGIxMSBeICh+YjEzICYgYjE1KTtcclxuICAgICAgICAgICAgc1syMF0gPSBiMjAgXiAofmIyMiAmIGIyNCk7XHJcbiAgICAgICAgICAgIHNbMjFdID0gYjIxIF4gKH5iMjMgJiBiMjUpO1xyXG4gICAgICAgICAgICBzWzMwXSA9IGIzMCBeICh+YjMyICYgYjM0KTtcclxuICAgICAgICAgICAgc1szMV0gPSBiMzEgXiAofmIzMyAmIGIzNSk7XHJcbiAgICAgICAgICAgIHNbNDBdID0gYjQwIF4gKH5iNDIgJiBiNDQpO1xyXG4gICAgICAgICAgICBzWzQxXSA9IGI0MSBeICh+YjQzICYgYjQ1KTtcclxuICAgICAgICAgICAgc1syXSA9IGIyIF4gKH5iNCAmIGI2KTtcclxuICAgICAgICAgICAgc1szXSA9IGIzIF4gKH5iNSAmIGI3KTtcclxuICAgICAgICAgICAgc1sxMl0gPSBiMTIgXiAofmIxNCAmIGIxNik7XHJcbiAgICAgICAgICAgIHNbMTNdID0gYjEzIF4gKH5iMTUgJiBiMTcpO1xyXG4gICAgICAgICAgICBzWzIyXSA9IGIyMiBeICh+YjI0ICYgYjI2KTtcclxuICAgICAgICAgICAgc1syM10gPSBiMjMgXiAofmIyNSAmIGIyNyk7XHJcbiAgICAgICAgICAgIHNbMzJdID0gYjMyIF4gKH5iMzQgJiBiMzYpO1xyXG4gICAgICAgICAgICBzWzMzXSA9IGIzMyBeICh+YjM1ICYgYjM3KTtcclxuICAgICAgICAgICAgc1s0Ml0gPSBiNDIgXiAofmI0NCAmIGI0Nik7XHJcbiAgICAgICAgICAgIHNbNDNdID0gYjQzIF4gKH5iNDUgJiBiNDcpO1xyXG4gICAgICAgICAgICBzWzRdID0gYjQgXiAofmI2ICYgYjgpO1xyXG4gICAgICAgICAgICBzWzVdID0gYjUgXiAofmI3ICYgYjkpO1xyXG4gICAgICAgICAgICBzWzE0XSA9IGIxNCBeICh+YjE2ICYgYjE4KTtcclxuICAgICAgICAgICAgc1sxNV0gPSBiMTUgXiAofmIxNyAmIGIxOSk7XHJcbiAgICAgICAgICAgIHNbMjRdID0gYjI0IF4gKH5iMjYgJiBiMjgpO1xyXG4gICAgICAgICAgICBzWzI1XSA9IGIyNSBeICh+YjI3ICYgYjI5KTtcclxuICAgICAgICAgICAgc1szNF0gPSBiMzQgXiAofmIzNiAmIGIzOCk7XHJcbiAgICAgICAgICAgIHNbMzVdID0gYjM1IF4gKH5iMzcgJiBiMzkpO1xyXG4gICAgICAgICAgICBzWzQ0XSA9IGI0NCBeICh+YjQ2ICYgYjQ4KTtcclxuICAgICAgICAgICAgc1s0NV0gPSBiNDUgXiAofmI0NyAmIGI0OSk7XHJcbiAgICAgICAgICAgIHNbNl0gPSBiNiBeICh+YjggJiBiMCk7XHJcbiAgICAgICAgICAgIHNbN10gPSBiNyBeICh+YjkgJiBiMSk7XHJcbiAgICAgICAgICAgIHNbMTZdID0gYjE2IF4gKH5iMTggJiBiMTApO1xyXG4gICAgICAgICAgICBzWzE3XSA9IGIxNyBeICh+YjE5ICYgYjExKTtcclxuICAgICAgICAgICAgc1syNl0gPSBiMjYgXiAofmIyOCAmIGIyMCk7XHJcbiAgICAgICAgICAgIHNbMjddID0gYjI3IF4gKH5iMjkgJiBiMjEpO1xyXG4gICAgICAgICAgICBzWzM2XSA9IGIzNiBeICh+YjM4ICYgYjMwKTtcclxuICAgICAgICAgICAgc1szN10gPSBiMzcgXiAofmIzOSAmIGIzMSk7XHJcbiAgICAgICAgICAgIHNbNDZdID0gYjQ2IF4gKH5iNDggJiBiNDApO1xyXG4gICAgICAgICAgICBzWzQ3XSA9IGI0NyBeICh+YjQ5ICYgYjQxKTtcclxuICAgICAgICAgICAgc1s4XSA9IGI4IF4gKH5iMCAmIGIyKTtcclxuICAgICAgICAgICAgc1s5XSA9IGI5IF4gKH5iMSAmIGIzKTtcclxuICAgICAgICAgICAgc1sxOF0gPSBiMTggXiAofmIxMCAmIGIxMik7XHJcbiAgICAgICAgICAgIHNbMTldID0gYjE5IF4gKH5iMTEgJiBiMTMpO1xyXG4gICAgICAgICAgICBzWzI4XSA9IGIyOCBeICh+YjIwICYgYjIyKTtcclxuICAgICAgICAgICAgc1syOV0gPSBiMjkgXiAofmIyMSAmIGIyMyk7XHJcbiAgICAgICAgICAgIHNbMzhdID0gYjM4IF4gKH5iMzAgJiBiMzIpO1xyXG4gICAgICAgICAgICBzWzM5XSA9IGIzOSBeICh+YjMxICYgYjMzKTtcclxuICAgICAgICAgICAgc1s0OF0gPSBiNDggXiAofmI0MCAmIGI0Mik7XHJcbiAgICAgICAgICAgIHNbNDldID0gYjQ5IF4gKH5iNDEgJiBiNDMpO1xyXG4gICAgICAgICAgICBzWzBdIF49IFNoYTMuUk9VTkRfQ09OU1RBTlRTW25dO1xyXG4gICAgICAgICAgICBzWzFdIF49IFNoYTMuUk9VTkRfQ09OU1RBTlRTW24gKyAxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyogUGFkZGluZyB0byB1c2UgZm9yIEtlY2NhayAqL1xyXG5TaGEzLktFQ0NBS19QQURESU5HID0gbmV3IFVpbnQzMkFycmF5KFsxLCAyNTYsIDY1NTM2LCAxNjc3NzIxNl0pO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuU2hhMy5TSElGVCA9IG5ldyBVaW50OEFycmF5KFswLCA4LCAxNiwgMjRdKTtcclxuLyogQGludGVybmFsICovXHJcblNoYTMuUk9VTkRfQ09OU1RBTlRTID0gbmV3IFVpbnQzMkFycmF5KFsxLCAwLCAzMjg5OCwgMCwgMzI5MDYsIDIxNDc0ODM2NDgsIDIxNDc1MTY0MTYsIDIxNDc0ODM2NDgsIDMyOTA3LCAwLCAyMTQ3NDgzNjQ5LFxyXG4gICAgMCwgMjE0NzUxNjU0NSwgMjE0NzQ4MzY0OCwgMzI3NzcsIDIxNDc0ODM2NDgsIDEzOCwgMCwgMTM2LCAwLCAyMTQ3NTE2NDI1LCAwLFxyXG4gICAgMjE0NzQ4MzY1OCwgMCwgMjE0NzUxNjU1NSwgMCwgMTM5LCAyMTQ3NDgzNjQ4LCAzMjkwNSwgMjE0NzQ4MzY0OCwgMzI3NzEsXHJcbiAgICAyMTQ3NDgzNjQ4LCAzMjc3MCwgMjE0NzQ4MzY0OCwgMTI4LCAyMTQ3NDgzNjQ4LCAzMjc3OCwgMCwgMjE0NzQ4MzY1OCwgMjE0NzQ4MzY0OCxcclxuICAgIDIxNDc1MTY1NDUsIDIxNDc0ODM2NDgsIDMyODk2LCAyMTQ3NDgzNjQ4LCAyMTQ3NDgzNjQ5LCAwLCAyMTQ3NTE2NDI0LCAyMTQ3NDgzNjQ4XSk7XHJcbmV4cG9ydHMuU2hhMyA9IFNoYTM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMyaGhNeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWthV2RsYzNSekwzTm9ZVE11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN4elJFRkJiVVE3UVVGRmJrUTdPMGRCUlVjN1FVRkRTQ3hOUVVGaExFbEJRVWs3U1VGeFEySTdPenM3TzA5QlMwYzdTVUZEU0N4WlFVRlpMRWxCUVZrc1JVRkJSU3hQUVVGdlFpeEZRVUZGTEZWQlFXdENPMUZCUXpsRUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTNoQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NWVUZCVlN4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkROME1zU1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU40UXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExGVkJRVlVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEY2tNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRk1VTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRMnBDTEVOQlFVTTdTVUZGUkRzN1QwRkZSenRKUVVOSkxFdEJRVXM3VVVGRFVpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOb1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOb1FpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRja1FzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU4wUXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRXRCUVd0Q08xRkJRelZDTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNWMEZCVnl4RFFVRkRMRVZCUVVVN1dVRkRNVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2EwTkJRV3RETEVOQlFVTXNRMEZCUXp0VFFVTTNSRHRSUVVORUxFMUJRVTBzVDBGQlR5eEhRVUZsTEVsQlFVa3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRMnhFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRE9VSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMlFzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZGVGl4UFFVRlBMRXRCUVVzc1IwRkJSeXhOUVVGTkxFVkJRVVU3V1VGRGJrSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yZENRVU5pTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRE8yZENRVU53UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1owSkJRemxDTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVU3YjBKQlEzWkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmxDUVVOMlFqdGhRVU5LTzFsQlEwUXNTMEZCU3l4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZPMmRDUVVOc1JTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOcVJUdFpRVU5FTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM2hDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVU3WjBKQlEzUkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNN1owSkJRMnhETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1owSkJRemRETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHR2UWtGRGJrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8ybENRVU55UXp0blFrRkRSQ3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTndReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTjBRanRwUWtGQlRUdG5Ra0ZEU0N4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU51UWp0VFFVTktPMGxCUTB3c1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTFCUVUwN1VVRkRWQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZGYUVJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlExWXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMVlzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGNFTXNTVUZCU1N4TlFVRk5MRU5CUVVNN1VVRkRXQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVTdXVUZEYkVJc1RVRkJUU3hIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTXpSRHRoUVVGTk8xbEJRMGdzVFVGQlRTeEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRMjVETzFGQlEwUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEZEVNc1QwRkJUeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlR0WlFVTXpRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVTdaMEpCUTJ4RkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6ZENPMU5CUTBvN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVTdXVUZEYkVJc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE1VSXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTI1RE8xRkJRMFFzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUldJc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hSUVVGUk8xRkJRMW9zU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhqUVVGakxFdEJRVXNzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlR0WlFVTjZReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUTJwRUxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVN1owSkJRM1pETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEzWkNPMU5CUTBvN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzVlVGQlZTeERRVUZETzFGQlEycEVMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJUdFpRVU51UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGNrTTdVVUZEUkN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM2hETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc2FVSkJRV2xDTEVOQlFVTXNRMEZCWXp0UlFVTndReXgzUkVGQmQwUTdVVUZEZUVRc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUXk5RExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVNNVJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUXpsRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0UlFVTnVSaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlEzaENMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUlRGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOV0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFZc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUlZnc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTldMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVml4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5zUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY2tNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0pETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeERMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeERMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0pETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVWd1F5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlJUTkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOMlF6dEpRVU5NTEVOQlFVTTdPMEZCYUZaRUxDdENRVUVyUWp0QlFVTlNMRzFDUVVGakxFZEJRV2RDTEVsQlFVa3NWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOb1J5eGxRVUZsTzBGQlExTXNWVUZCU3l4SFFVRmxMRWxCUVVrc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU16UlN4bFFVRmxPMEZCUTFNc2IwSkJRV1VzUjBGQlowSXNTVUZCU1N4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZUdEpRVU51U2l4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VlFVRlZMRVZCUVVVc1EwRkJRenRKUVVNelJTeFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXM3U1VGRGRrVXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlEyaEdMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCVmpOR0xHOUNRV3RXUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29yZUVycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvY29yZUVycm9yXCIpO1xyXG4vKipcclxuICogQSBjcnlwdG8gaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBDcnlwdG9FcnJvciBleHRlbmRzIGNvcmVFcnJvcl8xLkNvcmVFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBDcnlwdG9FcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJDcnlwdG9cIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNyeXB0b0Vycm9yID0gQ3J5cHRvRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzSjVjSFJ2UlhKeWIzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpYSnliM0l2WTNKNWNIUnZSWEp5YjNJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEc5RlFVRnBSVHRCUVVWcVJUczdSMEZGUnp0QlFVTklMRTFCUVdFc1YwRkJXU3hUUVVGUkxIRkNRVUZUTzBsQlEzUkRPenM3T3p0UFFVdEhPMGxCUTBnc1dVRkJXU3hQUVVGbExFVkJRVVVzVlVGQmEwTXNSVUZCUlN4VlFVRnJRanRSUVVNdlJTeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU4yUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF6dEpRVU16UWl4RFFVRkRPME5CUTBvN1FVRllSQ3hyUTBGWFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZhY3RvcnlCYXNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBwcm9vZiBvZiB3b3JrLlxyXG4gKi9cclxuY2xhc3MgUHJvb2ZPZldvcmtGYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFQcm9vZk9mV29ya0ZhY3RvcnkuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFByb29mT2ZXb3JrRmFjdG9yeS5faW5zdGFuY2UgPSBuZXcgUHJvb2ZPZldvcmtGYWN0b3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9vZk9mV29ya0ZhY3RvcnkuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvb2ZPZldvcmtGYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qcm9vZk9mV29ya0ZhY3RvcnkgPSBQcm9vZk9mV29ya0ZhY3Rvcnk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZiMlpQWmxkdmNtdEdZV04wYjNKNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJaaFkzUnZjbWxsY3k5d2NtOXZaazltVjI5eWEwWmhZM1J2Y25rdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVkNlJUczdSMEZGUnp0QlFVTklMRTFCUVdFc2EwSkJRVzFDTEZOQlFWRXNlVUpCUVhsQ08wbEJTVGRFT3pzN1QwRkhSenRKUVVOSU8xRkJRMGtzUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRkZCUVZFN1VVRkRiRUlzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExGTkJRVk1zUlVGQlJUdFpRVU12UWl4clFrRkJhMElzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4clFrRkJhMElzUlVGQlJTeERRVUZETzFOQlF6TkVPMUZCUTBRc1QwRkJUeXhyUWtGQmEwSXNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVEN4WFFVRlhPMUZCUTJwQ0xFOUJRVThzYTBKQlFXdENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRGVrTXNRMEZCUXp0RFFVTktPMEZCTTBKRUxHZEVRVEpDUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIik7XHJcbmNvbnN0IGN1cmxfMSA9IHJlcXVpcmUoXCIuLi9zcG9uZ2VzL2N1cmxcIik7XHJcbmNvbnN0IGtlcmxfMSA9IHJlcXVpcmUoXCIuLi9zcG9uZ2VzL2tlcmxcIik7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHNwb25nZXMuXHJcbiAqL1xyXG5jbGFzcyBTcG9uZ2VGYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZSA9IG5ldyBTcG9uZ2VGYWN0b3J5KCk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwiY3VybFwiLCAoLi4uYXJncykgPT4gbmV3IGN1cmxfMS5DdXJsKC4uLmFyZ3MpKTtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UucmVnaXN0ZXIoXCJjdXJsODFcIiwgKC4uLmFyZ3MpID0+IG5ldyBjdXJsXzEuQ3VybCg4MSkpO1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZS5yZWdpc3RlcihcImN1cmwyN1wiLCAoLi4uYXJncykgPT4gbmV3IGN1cmxfMS5DdXJsKDI3KSk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwia2VybFwiLCAoLi4uYXJncykgPT4gbmV3IGtlcmxfMS5LZXJsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU3BvbmdlRmFjdG9yeS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBTcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TcG9uZ2VGYWN0b3J5ID0gU3BvbmdlRmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNCdmJtZGxSbUZqZEc5eWVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5bVlXTjBiM0pwWlhNdmMzQnZibWRsUm1GamRHOXllUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJSWHBGTERCRFFVRjFRenRCUVVOMlF5d3dRMEZCZFVNN1FVRkZka003TzBkQlJVYzdRVUZEU0N4TlFVRmhMR0ZCUVdNc1UwRkJVU3g1UWtGQmIwSTdTVUZKYmtRN096dFBRVWRITzBsQlEwZzdVVUZEU1N4TFFVRkxMRVZCUVVVc1EwRkJRenRKUVVOYUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVVVGQlVUdFJRVU5zUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGTkJRVk1zUlVGQlJUdFpRVU14UWl4aFFVRmhMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzWVVGQllTeEZRVUZGTEVOQlFVTTdXVUZET1VNc1lVRkJZU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NWMEZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UlN4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeFhRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFJTeGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hYUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBSU3hoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4WFFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM0pGTzFGQlEwUXNUMEZCVHl4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRMjVETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTB3c1YwRkJWenRSUVVOcVFpeFBRVUZQTEdGQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOd1F5eERRVUZETzBOQlEwbzdRVUV2UWtRc2MwTkJLMEpESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGFkZHJlc3NfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2FkZHJlc3NcIik7XHJcbmNvbnN0IGFkZHJlc3NTZWN1cml0eV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1NlY3VyaXR5XCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIpO1xyXG5jb25zdCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3Qgc3BvbmdlRmFjdG9yeV8xID0gcmVxdWlyZShcIi4uL2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpO1xyXG4vKipcclxuICogSVNTIEhhc2hpbmcgZnVuY3Rpb25zLlxyXG4gKiBDb252ZXJ0ZWQgaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaXJpL3NyYy9tYWluL2phdmEvY29tL2lvdGEvaXJpL2hhc2gvSVNTLmphdmFcclxuICovXHJcbmNsYXNzIElTUyB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3Vic2VlZCBmb3IgdGhlIHNlZWQgYW5kIGluZGV4LlxyXG4gICAgICogQHBhcmFtIHNlZWQgVGhlIHNlZWQuXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IGZvciB0aGUgc2VlZC5cclxuICAgICAqIEBwYXJhbSBzcG9uZ2VUeXBlIFRoZSBzcG9uZ2UgdHlwZSB0byB1c2UgZm9yIG9wZXJhdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3Vic2VlZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN1YnNlZWQoc2VlZCwgaW5kZXgsIHNwb25nZVR5cGUgPSBcImN1cmwyN1wiKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNlZWQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc2VlZCBtdXN0IGJlIG9mIHR5cGUgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoaW5kZXgpIHx8IGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBpbmRleCBtdXN0IGJlIGFuIGludGVnZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmV4aXN0cyhzcG9uZ2VUeXBlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVGhlIHNwb25nZVR5cGUgbXVzdCBiZSBvbmUgb2YgWyR7c3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS50eXBlcygpLmpvaW4oXCIsIFwiKX1dYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwb25nZSA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hMZW5ndGggPSBzcG9uZ2UuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKTtcclxuICAgICAgICBzcG9uZ2UuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGNvbnN0IHN1YnNlZWRQcmVpbWFnZSA9IHNlZWQuc2xpY2UoKTtcclxuICAgICAgICBsZXQgbG9jYWxJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHdoaWxlIChsb2NhbEluZGV4LS0gPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2VlZFByZWltYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKytzdWJzZWVkUHJlaW1hZ2VbaV0gPiBJU1MuTUFYX1RSSVRfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzZWVkUHJlaW1hZ2VbaV0gPSBJU1MuTUlOX1RSSVRfVkFMVUU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWJzZWVkID0gbmV3IEludDhBcnJheShoYXNoTGVuZ3RoKTtcclxuICAgICAgICBzcG9uZ2UuYWJzb3JiKHN1YnNlZWRQcmVpbWFnZSwgMCwgc3Vic2VlZFByZWltYWdlLmxlbmd0aCk7XHJcbiAgICAgICAgc3BvbmdlLnNxdWVlemUoc3Vic2VlZCwgMCwgc3Vic2VlZC5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBzdWJzZWVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGtleSBmb3IgdGhlIHNlZWQuXHJcbiAgICAgKiBAcGFyYW0gc2VlZCBUaGUgc2VlZCB0byBjcmVhdGUgdGhlIGtleSBmb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IHRvIHVzZSBmb3IgdGhlIHNlZWQuXHJcbiAgICAgKiBAcGFyYW0gc2VjdXJpdHkgVGhlIHNlY3VyaXR5IGxldmVsIHRvIGNyZWF0ZSB0aGUga2V5LlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIHRoZSBrZXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBrZXkoc2VlZCwgaW5kZXgsIHNlY3VyaXR5LCBzcG9uZ2VUeXBlID0gXCJrZXJsXCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2VlZCwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHNlZWQgbXVzdCBiZSBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihpbmRleCkgfHwgaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGluZGV4IG11c3QgYmUgYW4gaW50ZWdlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc2VjdXJpdHkpIHx8IHNlY3VyaXR5IDwgYWRkcmVzc1NlY3VyaXR5XzEuQWRkcmVzc1NlY3VyaXR5LmxvdyB8fCBzZWN1cml0eSA+IGFkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5oaWdoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc2VjdXJpdHkgbXVzdCBiZSBhbiBpbnRlZ2VyID49IDEgYW5kIDw9IDNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmV4aXN0cyhzcG9uZ2VUeXBlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVGhlIHNwb25nZVR5cGUgbXVzdCBiZSBvbmUgb2YgWyR7c3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS50eXBlcygpLmpvaW4oXCIsIFwiKX1dYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlZWRUcml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyhzZWVkLnRvVHJ5dGVzKCkpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4VHJpdHMgPSB0cml0c18xLlRyaXRzLmZyb21OdW1iZXIoaW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IHN1YnNlZWQgPSB0cml0c18xLlRyaXRzLmFkZChzZWVkVHJpdHMsIGluZGV4VHJpdHMpLnRvQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBzdWJzZWVkTGVuZ3RoID0gc3Vic2VlZC5sZW5ndGg7XHJcbiAgICAgICAgY29uc3Qgc3BvbmdlID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIHNwb25nZS5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgc3BvbmdlLmFic29yYihzdWJzZWVkLCAwLCBzdWJzZWVkTGVuZ3RoKTtcclxuICAgICAgICBzcG9uZ2Uuc3F1ZWV6ZShzdWJzZWVkLCAwLCBzdWJzZWVkTGVuZ3RoKTtcclxuICAgICAgICBzcG9uZ2UucmVzZXQoKTtcclxuICAgICAgICBzcG9uZ2UuYWJzb3JiKHN1YnNlZWQsIDAsIHN1YnNlZWRMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IG5ldyBJbnQ4QXJyYXkoSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1MgKiBoYXNoTGVuZ3RoICogc2VjdXJpdHkpO1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBJbnQ4QXJyYXkoc3Vic2VlZExlbmd0aCk7XHJcbiAgICAgICAgbGV0IGxvY2FsTGVuZ3RoID0gc2VjdXJpdHk7XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsTGVuZ3RoLS0gPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1M7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc3BvbmdlLnNxdWVlemUoYnVmZmVyLCAwLCBzdWJzZWVkTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGFzaExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5W29mZnNldCsrXSA9IGJ1ZmZlcltqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGRpZ2VzdHMgZm9yIHRoZSBnaXZlbiBzdWJzZWVkLlxyXG4gICAgICogQHBhcmFtIHN1YnNlZWQgVG8gY3JlYXRlIHRoZSBkaWdlc3RzIGZvci5cclxuICAgICAqIEBwYXJhbSBzcG9uZ2VUeXBlIFRoZSBzcG9uZ2UgdHlwZSB0byB1c2UgZm9yIG9wZXJhdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGlnZXN0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRpZ2VzdHMoc3Vic2VlZCwgc3BvbmdlVHlwZSA9IFwia2VybFwiKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHN1YnNlZWQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc3Vic2VlZCBtdXN0IGJlIG9mIHR5cGUgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3BvbmdlID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50TGVuZ3RoID0gaGFzaExlbmd0aCAqIElTUy5OVU1CRVJfT0ZfRlJBR01FTlRfQ0hVTktTO1xyXG4gICAgICAgIGlmIChzdWJzZWVkLmxlbmd0aCAlIGZyYWdtZW50TGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3Vic2VlZCBsZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7ZnJhZ21lbnRMZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyeXRlUmFuZ2UgPSBJU1MuTUFYX1RSWVRFX1ZBTFVFIC0gSVNTLk1JTl9UUllURV9WQUxVRTtcclxuICAgICAgICBjb25zdCBrZXlMZW5EaXYgPSBzdWJzZWVkLmxlbmd0aCAvIGZyYWdtZW50TGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGRpZ2VzdHMgPSBuZXcgSW50OEFycmF5KGtleUxlbkRpdiAqIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgIGxldCBidWZmZXI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlMZW5EaXY7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpTXVsID0gaSAqIGZyYWdtZW50TGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlGcmFnbWVudCA9IHN1YnNlZWQuc2xpY2UoaU11bCwgaU11bCArIGZyYWdtZW50TGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqTXVsID0gaiAqIGhhc2hMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgPSBrZXlGcmFnbWVudC5zbGljZShqTXVsLCBqTXVsICsgaGFzaExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRyeXRlUmFuZ2U7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwb25nZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwb25nZS5hYnNvcmIoYnVmZmVyLCAwLCBidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBzcG9uZ2Uuc3F1ZWV6ZShidWZmZXIsIDAsIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBoYXNoTGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlGcmFnbWVudFtqTXVsICsga10gPSBidWZmZXJba107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BvbmdlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHNwb25nZS5hYnNvcmIoa2V5RnJhZ21lbnQsIDAsIGtleUZyYWdtZW50Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHNwb25nZS5zcXVlZXplKGJ1ZmZlciwgMCwgaGFzaExlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlNdWwyID0gaSAqIGhhc2hMZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGFzaExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBkaWdlc3RzW2lNdWwyICsgal0gPSBidWZmZXJbal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpZ2VzdHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0aGUgYWRkcmVzcyBmb3IgdGhlIGRpZ2VzdHMuXHJcbiAgICAgKiBAcGFyYW0gZGlnZXN0cyBUaGUgZGlnZXN0cyB0byBjcmVhdGUgdGhlIGFkZHJlc3MgZm9yLlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIHRoZSBhZGRyZXNzIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkcmVzcyhkaWdlc3RzLCBzcG9uZ2VUeXBlID0gXCJrZXJsXCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoZGlnZXN0cywgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBkaWdlc3RzIG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5leGlzdHMoc3BvbmdlVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzcG9uZ2VUeXBlIG11c3QgYmUgb25lIG9mIFske3Nwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkudHlwZXMoKS5qb2luKFwiLCBcIil9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcG9uZ2UgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0gc3BvbmdlLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgaWYgKGRpZ2VzdHMubGVuZ3RoICUgaGFzaExlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgSW52YWxpZCBkaWdlc3RzIGxlbmd0aCwgbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7aGFzaExlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BvbmdlLmluaXRpYWxpemUoKTtcclxuICAgICAgICBzcG9uZ2UuYWJzb3JiKGRpZ2VzdHMsIDAsIGRpZ2VzdHMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzVHJpdHMgPSBuZXcgSW50OEFycmF5KGhhc2hMZW5ndGgpO1xyXG4gICAgICAgIHNwb25nZS5zcXVlZXplKGFkZHJlc3NUcml0cywgMCwgYWRkcmVzc1RyaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIGFkZHJlc3NUcml0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGRpZ2VzdCBvZiB0aGUgbm9ybWFsaXplZCBidW5kbGUgZnJhZ21lbnQuXHJcbiAgICAgKiBAcGFyYW0gbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50IFRoZSBmcmFnbWVudCB0byBjcmVhdGUgZGlnZXN0LlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBUaGUgdHJpdHMgZm9yIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50LlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkaWdlc3Qgb2YgdGhlIGJ1bmRsZSBhbmQgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkaWdlc3Qobm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50LCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIHNwb25nZVR5cGUgPSBcImtlcmxcIikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50IG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IG11c3QgYmUgb2YgdHlwZSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5leGlzdHMoc3BvbmdlVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFRoZSBzcG9uZ2VUeXBlIG11c3QgYmUgb25lIG9mIFske3Nwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkudHlwZXMoKS5qb2luKFwiLCBcIil9XWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnVmZmVyO1xyXG4gICAgICAgIGNvbnN0IHNwb25nZSA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hMZW5ndGggPSBzcG9uZ2UuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKTtcclxuICAgICAgICBzcG9uZ2UuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1M7IGkrKykge1xyXG4gICAgICAgICAgICBidWZmZXIgPSBuZXcgSW50OEFycmF5KHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5zbGljZShpICogaGFzaExlbmd0aCwgKGkgKyAxKSAqIGhhc2hMZW5ndGgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudFtpXSAtIElTUy5NSU5fVFJZVEVfVkFMVUU7IGogPiAwOyBqLS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwb25nZTIgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICAgICAgICAgIHNwb25nZTIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgc3BvbmdlMi5hYnNvcmIoYnVmZmVyLCAwLCBidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHNwb25nZTIuc3F1ZWV6ZShidWZmZXIsIDAsIHNwb25nZTIuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BvbmdlLmFic29yYihidWZmZXIsIDAsIGJ1ZmZlci5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcG9uZ2Uuc3F1ZWV6ZShidWZmZXIsIDAsIHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpKTtcclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGRpZ2VzdCBmb3IgdGhlIHN1YnNlZWQuXHJcbiAgICAgKiBAcGFyYW0gc3Vic2VlZCBUaGUgc3Vic2VlZCB0byBnZXQgdGhlIGRpZ2VzdCBmb3IuXHJcbiAgICAgKiBAcGFyYW0gc2VjdXJpdHkgVGhlIHNlY3VyaXR5IGxldmVsLlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkaWdlc3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdWJzZWVkVG9EaWdlc3Qoc3Vic2VlZCwgc2VjdXJpdHksIHNwb25nZVR5cGUgPSBcImN1cmwyN1wiKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHN1YnNlZWQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc3Vic2VlZCBtdXN0IGJlIG9mIHR5cGUgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc2VjdXJpdHkpIHx8IHNlY3VyaXR5IDwgYWRkcmVzc1NlY3VyaXR5XzEuQWRkcmVzc1NlY3VyaXR5LmxvdyB8fCBzZWN1cml0eSA+IGFkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5oaWdoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc2VjdXJpdHkgbXVzdCBiZSBhbiBpbnRlZ2VyID49IDEgYW5kIDw9IDNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmV4aXN0cyhzcG9uZ2VUeXBlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVGhlIHNwb25nZVR5cGUgbXVzdCBiZSBvbmUgb2YgWyR7c3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS50eXBlcygpLmpvaW4oXCIsIFwiKX1dYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGMxID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgYzIgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShzcG9uZ2VUeXBlKTtcclxuICAgICAgICBjb25zdCBjMyA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgIGMxLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjMi5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgYzMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hMZW5ndGggPSBjMS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIGNvbnN0IGtleUxlbmd0aCA9ICgoaGFzaExlbmd0aCAvIDMpIC8gSVNTLlJBRElYKSAqIGhhc2hMZW5ndGg7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2VjdXJpdHkgKiBrZXlMZW5ndGggLyBoYXNoTGVuZ3RoO1xyXG4gICAgICAgIGxldCBvdXQgPSBuZXcgSW50OEFycmF5KGhhc2hMZW5ndGgpO1xyXG4gICAgICAgIGMxLmFic29yYihzdWJzZWVkLCAwLCBzdWJzZWVkLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjMS5zcXVlZXplKG91dCwgMCwgb3V0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgKElTUy5NQVhfVFJZVEVfVkFMVUUgLSBJU1MuTUlOX1RSWVRFX1ZBTFVFICsgMSk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgYzIucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGMyLmFic29yYihvdXQsIDAsIG91dC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgb3V0ID0gYzIuZ2V0U3RhdGUoKS5zbGljZSgwLCBoYXNoTGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjMy5hYnNvcmIob3V0LCAwLCBvdXQubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYzMuc3F1ZWV6ZShvdXQsIDAsIG91dC5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5vcm1hbGl6ZWQgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZUhhc2ggVGhlIGhhc2ggb2YgdGhlIGJ1bmRsZS5cclxuICAgICAqIEBwYXJhbSBzcG9uZ2VUeXBlIFRoZSBzcG9uZ2UgdHlwZSB0byB1c2UgZm9yIG9wZXJhdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbm9ybWFsaXplZCBidW5kbGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBub3JtYWxpemVkQnVuZGxlKGJ1bmRsZUhhc2gsIHNwb25nZVR5cGUgPSBcImN1cmw4MVwiKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGJ1bmRsZUhhc2gsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBidW5kbGVIYXNoIG11c3QgYmUgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3BvbmdlID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRCdW5kbGUgPSBuZXcgSW50OEFycmF5KElTUy5OVU1CRVJfT0ZfRlJBR01FTlRfQ0hVTktTICogSVNTLk5VTUJFUl9PRl9TRUNVUklUWV9MRVZFTFMpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hTdHJpbmcgPSBidW5kbGVIYXNoLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggPSBoYXNoTGVuZ3RoIC8gSVNTLlRSWVRFX1dJRFRIIC8gSVNTLk5VTUJFUl9PRl9TRUNVUklUWV9MRVZFTFM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJU1MuTlVNQkVSX09GX1NFQ1VSSVRZX0xFVkVMUzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vcm1hbGl6ZWRGcmFnbWVudExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNoQ2hhciA9IGhhc2hTdHJpbmcuY2hhckF0KGkgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhoYXNoQ2hhcikpLnRvTnVtYmVyKCk7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkQnVuZGxlW2kgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqXSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIHN1bSArPSB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN1bSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoc3VtLS0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplZEJ1bmRsZVtpICogbm9ybWFsaXplZEZyYWdtZW50TGVuZ3RoICsgal0gPiBJU1MuTUlOX1RSWVRFX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkQnVuZGxlW2kgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqXS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoc3VtKysgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplZEJ1bmRsZVtpICogbm9ybWFsaXplZEZyYWdtZW50TGVuZ3RoICsgal0gPCBJU1MuTUFYX1RSWVRFX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkQnVuZGxlW2kgKiBub3JtYWxpemVkRnJhZ21lbnRMZW5ndGggKyBqXSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRCdW5kbGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIHRoZSBzaWduYXR1cmUgZnJhZ21lbnRzIGZyb20gdGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gZXhwZWN0ZWRBZGRyZXNzIFRoZSBhZGRyZXNzLlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMgVGhlIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50cy5cclxuICAgICAqIEBwYXJhbSBidW5kbGVIYXNoIFRoZSBoYXNoIGZvciB0aGUgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIHNwb25nZVR5cGUgVGhlIHNwb25nZSB0eXBlIHRvIHVzZSBmb3Igb3BlcmF0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50IGFyZSBzaWduZWQgYnkgdGhlIGV4cGVjdGVkIGFkZHJlc3MuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB2YWxpZGF0ZVNpZ25hdHVyZXMoZXhwZWN0ZWRBZGRyZXNzLCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzLCBidW5kbGVIYXNoLCBzcG9uZ2VUeXBlID0gXCJrZXJsXCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoZXhwZWN0ZWRBZGRyZXNzLCBhZGRyZXNzXzEuQWRkcmVzcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgZXhwZWN0ZWRBZGRyZXNzIG11c3QgYmUgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNUeXBlZChzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzLCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMgbXVzdCBiZSBhbiBhcnJheSBvZiB0eXBlIFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGJ1bmRsZUhhc2gsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBidW5kbGVIYXNoIG11c3QgYmUgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuZXhpc3RzKHNwb25nZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBUaGUgc3BvbmdlVHlwZSBtdXN0IGJlIG9uZSBvZiBbJHtzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLnR5cGVzKCkuam9pbihcIiwgXCIpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRCdW5kbGVIYXNoID0gSVNTLm5vcm1hbGl6ZWRCdW5kbGUoYnVuZGxlSGFzaCk7XHJcbiAgICAgICAgY29uc3Qgc3BvbmdlID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoc3BvbmdlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgaGFzaExlbmd0aCA9IHNwb25nZS5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGYgPSAwOyBmIDwgMzsgZisrKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudHNbZl0gPSBub3JtYWxpemVkQnVuZGxlSGFzaC5zbGljZShmICogSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1MsIChmICsgMSkgKiBJU1MuTlVNQkVSX09GX0ZSQUdNRU5UX0NIVU5LUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpZ2VzdHMgPSBuZXcgSW50OEFycmF5KHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMubGVuZ3RoICogaGFzaExlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZ2VzdEJ1ZmZlciA9IElTUy5kaWdlc3Qobm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50c1tpICUgM10sIHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyhzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzW2ldLnRvVHJ5dGVzKCkpLnRvQXJyYXkoKSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGFzaExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBkaWdlc3RzW2kgKiBoYXNoTGVuZ3RoICsgal0gPSBkaWdlc3RCdWZmZXJbal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cGVjdGVkQWRkcmVzcy50b1RyeXRlcygpLnRvU3RyaW5nKCkgPT09IHRyaXRzXzEuVHJpdHMuZnJvbUFycmF5KElTUy5hZGRyZXNzKGRpZ2VzdHMpKS50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIHNpZ25lZCBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudC5cclxuICAgICAqIEBwYXJhbSBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQgVGhlIGZyYWdtZW50IHRvIHNpZ24uXHJcbiAgICAgKiBAcGFyYW0ga2V5RnJhZ21lbnQgVGhlIGtleSBmcmFnbWVudCB0byBzaWduIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gc3BvbmdlVHlwZSBUaGUgc3BvbmdlIHR5cGUgdG8gdXNlIGZvciBvcGVyYXRpb25zLlxyXG4gICAgICogQHJldHVybnMgVGhlIHNpZ25lZCBmcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudChub3JtYWxpemVkQnVuZGxlRnJhZ21lbnQsIGtleUZyYWdtZW50LCBzcG9uZ2VUeXBlID0gXCJrZXJsXCIpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUobm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50LCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudCBtdXN0IGJlIG9mIHR5cGUgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoa2V5RnJhZ21lbnQsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUga2V5RnJhZ21lbnQgbXVzdCBiZSBvZiB0eXBlIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmV4aXN0cyhzcG9uZ2VUeXBlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVGhlIHNwb25nZVR5cGUgbXVzdCBiZSBvbmUgb2YgWyR7c3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS50eXBlcygpLmpvaW4oXCIsIFwiKX1dYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IGtleUZyYWdtZW50LnNsaWNlKCk7XHJcbiAgICAgICAgbGV0IGhhc2g7XHJcbiAgICAgICAgY29uc3Qga2VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKHNwb25nZVR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hMZW5ndGggPSBrZXJsLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGhhc2ggPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuc2xpY2UoaSAqIGhhc2hMZW5ndGgsIChpICsgMSkgKiBoYXNoTGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMyAtIG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudFtpXTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBrZXJsLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIGtlcmwucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGtlcmwuYWJzb3JiKGhhc2gsIDAsIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAga2VybC5zcXVlZXplKGhhc2gsIDAsIGhhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGFzaExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRbaSAqIGhhc2hMZW5ndGggKyBqXSA9IGhhc2hbal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLk5VTUJFUl9PRl9GUkFHTUVOVF9DSFVOS1MgPSAyNztcclxuLyogQGludGVybmFsICovXHJcbklTUy5OVU1CRVJfT0ZfU0VDVVJJVFlfTEVWRUxTID0gMztcclxuLyogQGludGVybmFsICovXHJcbklTUy5UUllURV9XSURUSCA9IDM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuTUlOX1RSWVRFX1ZBTFVFID0gLTEzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLk1BWF9UUllURV9WQUxVRSA9IDEzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLk1JTl9UUklUX1ZBTFVFID0gLTE7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5JU1MuTUFYX1RSSVRfVkFMVUUgPSAxO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSVNTLlJBRElYID0gMztcclxuZXhwb3J0cy5JU1MgPSBJU1M7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFYTnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGhjMmd2YVhOekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3d1JVRkJkVVU3UVVGRGRrVXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTd3JSRUZCTkVRN1FVRkROVVFzSzBWQlFUUkZPMEZCUXpWRkxIbEVRVUZ6UkR0QlFVTjBSQ3hwUjBGQk9FWTdRVUZET1VZc01rUkJRWGRFTzBGQlEzaEVMRFpFUVVFd1JEdEJRVU14UkN4elJFRkJiVVE3UVVGRGJrUXNPRVJCUVRKRU8wRkJSVE5FT3pzN1IwRkhSenRCUVVOSUxFMUJRV0VzUjBGQlJ6dEpRV3RDV2pzN096czdPMDlCVFVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFXVXNSVUZCUlN4TFFVRmhMRVZCUVVVc1lVRkJjVUlzVVVGQlVUdFJRVU12UlN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1EwRkJReXhGUVVGRk8xbEJRM1pETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHOURRVUZ2UXl4RFFVRkRMRU5CUVVNN1UwRkRMMFE3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNM1F5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXh0UTBGQmJVTXNRMEZCUXl4RFFVRkRPMU5CUXpsRU8xRkJSVVFzU1VGQlNTeERRVUZETERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMWxCUXpsRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRE0wYzdVVUZGUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXcyUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU16UkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUTNKRUxFMUJRVTBzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0UlFVVndRaXhOUVVGTkxHVkJRV1VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRja01zU1VGQlNTeFZRVUZWTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUlhaQ0xFOUJRVThzVlVGQlZTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTNKQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhsUVVGbExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVNM1F5eEpRVUZKTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eGpRVUZqTEVWQlFVVTdiMEpCUXpORExHVkJRV1VzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1kwRkJZeXhEUVVGRE8ybENRVU16UXp0eFFrRkJUVHR2UWtGRFNDeE5RVUZOTzJsQ1FVTlVPMkZCUTBvN1UwRkRTanRSUVVWRUxFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NVMEZCVXl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJSVEZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVU1zUlVGQlJTeGxRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRNVVFzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVXpReXhQUVVGUExFOUJRVThzUTBGQlF6dEpRVU51UWl4RFFVRkRPMGxCUlVRN096czdPenM3VDBGUFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJWU3hGUVVGRkxFdEJRV0VzUlVGQlJTeFJRVUY1UWl4RlFVRkZMR0ZCUVhGQ0xFMUJRVTA3VVVGREwwWXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4WFFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOc1F5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXdyUWtGQkswSXNRMEZCUXl4RFFVRkRPMU5CUXpGRU8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkROME1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2JVTkJRVzFETEVOQlFVTXNRMEZCUXp0VFFVTTVSRHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVkQlFVY3NhVU5CUVdVc1EwRkJReXhIUVVGSExFbEJRVWtzVVVGQlVTeEhRVUZITEdsRFFVRmxMRU5CUVVNc1NVRkJTU3hGUVVGRk8xbEJRM2hITEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExDdERRVUVyUXl4RFFVRkRMRU5CUVVNN1UwRkRNVVU3VVVGRlJDeEpRVUZKTEVOQlFVTXNOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1dVRkRPVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2EwTkJRV3RETERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU16Unp0UlFVVkVMRTFCUVUwc1UwRkJVeXhIUVVGSExHRkJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGNFUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1lVRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTXpReXhOUVVGTkxFOUJRVThzUjBGQlJ5eGhRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTXpSQ3hOUVVGTkxHRkJRV0VzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUlhKRExFMUJRVTBzVFVGQlRTeEhRVUZITERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpORUxFMUJRVTBzVlVGQlZTeEhRVUZITEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRmNrUXNUVUZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8xRkJRM0JDTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJTeGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVTjZReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRk1VTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMllzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhGUVVGRkxHRkJRV0VzUTBGQlF5eERRVUZETzFGQlJYcERMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4NVFrRkJlVUlzUjBGQlJ5eFZRVUZWTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRha1lzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJZc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkROVU1zU1VGQlNTeFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUlROQ0xFOUJRVThzVjBGQlZ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTNSQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zZVVKQlFYbENMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzQkVMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4aFFVRmhMRU5CUVVNc1EwRkJRenRuUWtGRGVrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHR2UWtGRGFrTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVNM1FqdGhRVU5LTzFOQlEwbzdVVUZEUkN4UFFVRlBMRWRCUVVjc1EwRkJRenRKUVVObUxFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJhMElzUlVGQlJTeGhRVUZ4UWl4TlFVRk5PMUZCUTJwRkxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eERRVUZETEVWQlFVVTdXVUZETVVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVU5CUVhWRExFTkJRVU1zUTBGQlF6dFRRVU5zUlR0UlFVVkVMRWxCUVVrc1EwRkJReXcyUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUlVGQlJUdFpRVU01UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUXpOSE8xRkJSVVFzVFVGQlRTeE5RVUZOTEVkQlFVY3NOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRNMFFzVFVGQlRTeFZRVUZWTEVkQlFWY3NUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU0zUkN4TlFVRk5MR05CUVdNc1IwRkJSeXhWUVVGVkxFZEJRVWNzUjBGQlJ5eERRVUZETEhsQ1FVRjVRaXhEUVVGRE8xRkJSV3hGTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTFCUVUwc1IwRkJSeXhqUVVGakxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzWkRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERSRFFVRTBReXhqUVVGakxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzWkdPMUZCUlVRc1RVRkJUU3hWUVVGVkxFZEJRVWNzUjBGQlJ5eERRVUZETEdWQlFXVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1pVRkJaU3hEUVVGRE8xRkJSVGRFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzWTBGQll5eERRVUZETzFGQlJXeEVMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEZOQlFWTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOMFJDeEpRVUZKTEUxQlFXbENMRU5CUVVNN1VVRkZkRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGTkJRVk1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTm9ReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETEVkQlFVY3NZMEZCWXl4RFFVRkRPMWxCUTJoRExFMUJRVTBzVjBGQlZ5eEhRVUZITEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eGpRVUZqTEVOQlFVTXNRMEZCUXp0WlFVVXZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExIbENRVUY1UWl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU53UkN4TlFVRk5MRWxCUVVrc1IwRkJWeXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETzJkQ1FVTndReXhOUVVGTkxFZEJRVWNzVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETzJkQ1FVVndSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzI5Q1FVTnFReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdiMEpCUTJZc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dHZRa0ZEZUVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8ybENRVU42UXp0blFrRkZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzI5Q1FVTnFReXhYUVVGWExFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZEY2tNN1lVRkRTanRaUVVWRUxFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0WlFVTm1MRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRGJFUXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMWxCUlhSRExFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNN1dVRkROMElzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRha01zVDBGQlR5eERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYkVNN1UwRkRTanRSUVVORUxFOUJRVThzVDBGQlR5eERRVUZETzBsQlEyNUNMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCYTBJc1JVRkJSU3hoUVVGeFFpeE5RVUZOTzFGQlEycEZMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1UwRkJVeXhEUVVGRExFVkJRVVU3V1VGRE1VTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZFVOQlFYVkRMRU5CUVVNc1EwRkJRenRUUVVOc1JUdFJRVVZFTEVsQlFVa3NRMEZCUXl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHRaUVVNNVF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhyUTBGQmEwTXNOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlF6TkhPMUZCUlVRc1RVRkJUU3hOUVVGTkxFZEJRVWNzTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVVUZETTBRc1RVRkJUU3hWUVVGVkxFZEJRVWNzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRSUVVWeVJDeEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVjc1ZVRkJWU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU51UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHBSRUZCYVVRc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU40Ump0UlFVVkVMRTFCUVUwc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dFJRVU53UWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSVEZETEUxQlFVMHNXVUZCV1N4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF5OURMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNSVUZCUlN4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRmNrUXNUMEZCVHl4WlFVRlpMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVVZFT3pzN096czdUMEZOUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zZDBKQlFXMURMRVZCUVVVc2QwSkJRVzFETEVWQlFVVXNZVUZCY1VJc1RVRkJUVHRSUVVOMFNDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zZDBKQlFYZENMRVZCUVVVc1UwRkJVeXhEUVVGRExFVkJRVVU3V1VGRE0wUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZDBSQlFYZEVMRU5CUVVNc1EwRkJRenRUUVVOdVJqdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eDNRa0ZCZDBJc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJUdFpRVU16UkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDNSRUZCZDBRc1EwRkJReXhEUVVGRE8xTkJRMjVHTzFGQlJVUXNTVUZCU1N4RFFVRkRMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8xbEJRemxETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZETTBjN1VVRkZSQ3hKUVVGSkxFMUJRV2xDTEVOQlFVTTdVVUZGZEVJc1RVRkJUU3hOUVVGTkxFZEJRVWNzTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVVUZETTBRc1RVRkJUU3hWUVVGVkxFZEJRVWNzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRSUVVOeVJDeE5RVUZOTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkZjRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eDVRa0ZCZVVJc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU53UkN4TlFVRk5MRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVTNSaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEhkQ1FVRjNRaXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRlRVVzVFVGQlRTeFBRVUZQTEVkQlFVY3NOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJSVFZFTEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRuUWtGRGNrSXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRuUWtGRGVrTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5zUlR0WlFVVkVMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGRE0wTTdVVUZGUkN4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6ZEVMRTlCUVU4c1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZGUkRzN096czdPMDlCVFVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWlVGQlpTeERRVUZETEU5QlFXdENMRVZCUVVVc1VVRkJlVUlzUlVGQlJTeGhRVUZ4UWl4UlFVRlJPMUZCUTNSSExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eERRVUZETEVWQlFVVTdXVUZETVVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVU5CUVhWRExFTkJRVU1zUTBGQlF6dFRRVU5zUlR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hSUVVGUkxFZEJRVWNzYVVOQlFXVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1VVRkJVU3hIUVVGSExHbERRVUZsTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUTNoSExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMQ3REUVVFclF5eERRVUZETEVOQlFVTTdVMEZETVVVN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVTdXVUZET1VNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNhME5CUVd0RExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVNelJ6dFJRVVZFTEUxQlFVMHNSVUZCUlN4SFFVRkhMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRM1pFTEUxQlFVMHNSVUZCUlN4SFFVRkhMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRM1pFTEUxQlFVMHNSVUZCUlN4SFFVRkhMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRM1pFTEVWQlFVVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVOb1FpeEZRVUZGTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkRhRUlzUlVGQlJTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMUZCUldoQ0xFMUJRVTBzVlVGQlZTeEhRVUZITEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRGFrUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETzFGQlJUbEVMRTFCUVUwc1RVRkJUU3hIUVVGSExGRkJRVkVzUjBGQlJ5eFRRVUZUTEVkQlFVY3NWVUZCVlN4RFFVRkRPMUZCUTJwRUxFbEJRVWtzUjBGQlJ5eEhRVUZITEVsQlFVa3NVMEZCVXl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJSWEJETEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRkRU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTTNRaXhGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlJTOUNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhsUVVGbExFZEJRVWNzUjBGQlJ5eERRVUZETEdWQlFXVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZEVVc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzJkQ1FVTllMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03WjBKQlF6bENMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dGhRVU0xUXp0WlFVVkVMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGRGFrTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSUzlDTEU5QlFVOHNSMEZCUnl4RFFVRkRPMGxCUTJZc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExGVkJRV2RDTEVWQlFVVXNZVUZCY1VJc1VVRkJVVHRSUVVNeFJTeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeEZRVUZGTEZkQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTNoRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVMEZEYUVVN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVTdXVUZET1VNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNhME5CUVd0RExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVNelJ6dFJRVVZFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRek5FTEUxQlFVMHNWVUZCVlN4SFFVRkhMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdVVUZGY2tRc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zZVVKQlFYbENMRWRCUVVjc1IwRkJSeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1VVRkRkRWNzVFVGQlRTeFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJYQkVMRTFCUVUwc2QwSkJRWGRDTEVkQlFVY3NWVUZCVlN4SFFVRkhMRWRCUVVjc1EwRkJReXhYUVVGWExFZEJRVWNzUjBGQlJ5eERRVUZETEhsQ1FVRjVRaXhEUVVGRE8xRkJSVGxHTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNlVUpCUVhsQ0xFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEY0VRc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlExb3NTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEhkQ1FVRjNRaXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTXZReXhOUVVGTkxGRkJRVkVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXgzUWtGQmQwSXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGNrVXNUVUZCVFN4SFFVRkhMRWRCUVVjc1lVRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdaMEpCUTNKRkxHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1IwRkJSeXgzUWtGQmQwSXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03WjBKQlEzcEVMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU03WVVGRFpEdFpRVVZFTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSVHRuUWtGRFZpeFBRVUZQTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRFpDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzZDBKQlFYZENMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3ZDBKQlF5OURMRWxCUVVrc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4SFFVRkhMSGRDUVVGM1FpeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhsUVVGbExFVkJRVVU3TkVKQlF6RkZMR2RDUVVGblFpeERRVUZETEVOQlFVTXNSMEZCUnl4M1FrRkJkMElzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPelJDUVVOeVJDeE5RVUZOTzNsQ1FVTlVPM0ZDUVVOS08ybENRVU5LTzJGQlEwbzdhVUpCUVUwN1owSkJRMGdzVDBGQlR5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN2IwSkJRMlFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExIZENRVUYzUWl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8zZENRVU12UXl4SlFVRkpMR2RDUVVGblFpeERRVUZETEVOQlFVTXNSMEZCUnl4M1FrRkJkMElzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1pVRkJaU3hGUVVGRk96UkNRVU14UlN4blFrRkJaMElzUTBGQlF5eERRVUZETEVkQlFVY3NkMEpCUVhkQ0xFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXpzMFFrRkRja1FzVFVGQlRUdDVRa0ZEVkR0eFFrRkRTanRwUWtGRFNqdGhRVU5LTzFOQlEwbzdVVUZGUkN4UFFVRlBMR2RDUVVGblFpeERRVUZETzBsQlF6VkNMRU5CUVVNN1NVRkZSRHM3T3pzN096dFBRVTlITzBsQlEwa3NUVUZCVFN4RFFVRkRMR3RDUVVGclFpeERRVUZETEdWQlFYZENMRVZCUVVVc2VVSkJRWEZFTEVWQlFVVXNWVUZCWjBJc1JVRkJSU3hoUVVGeFFpeE5RVUZOTzFGQlF6TktMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRVZCUVVVc2FVSkJRVThzUTBGQlF5eEZRVUZGTzFsQlEyaEVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERCRFFVRXdReXhEUVVGRExFTkJRVU03VTBGRGNrVTdVVUZGUkN4SlFVRkpMRU5CUVVNc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNlVUpCUVhsQ0xFVkJRVVVzYlVSQlFYZENMRU5CUVVNc1JVRkJSVHRaUVVNelJTeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhwUmtGQmFVWXNRMEZCUXl4RFFVRkRPMU5CUXpWSE8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUlVGQlJTeFhRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTjRReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4eFEwRkJjVU1zUTBGQlF5eERRVUZETzFOQlEyaEZPMUZCUlVRc1NVRkJTU3hEUVVGRExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTzFsQlF6bERMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXcyUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRNMGM3VVVGRlJDeE5RVUZOTEhsQ1FVRjVRaXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU55UXl4TlFVRk5MRzlDUVVGdlFpeEhRVUZITEVkQlFVY3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVVTVSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTXpSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJSWEpFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRlRUlzZVVKQlFYbENMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNlVUpCUVhsQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1UwRkRla2s3VVVGRlJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4TlFVRk5MRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRk4wVXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEhsQ1FVRjVRaXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjJSQ3hOUVVGTkxGbEJRVmtzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hoUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVVYyU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU5xUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhIUVVGSExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGFrUTdVMEZEU2p0UlFVVkVMRTlCUVU4c1pVRkJaU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4TFFVRkxMR0ZCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTJwSUxFTkJRVU03U1VGRlJEczdPenM3TzA5QlRVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNkMEpCUVcxRExFVkJRVVVzVjBGQmMwSXNSVUZCUlN4aFFVRnhRaXhOUVVGTk8xRkJRek5JTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eDNRa0ZCZDBJc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJUdFpRVU16UkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDNSRUZCZDBRc1EwRkJReXhEUVVGRE8xTkJRMjVHTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlN4VFFVRlRMRU5CUVVNc1JVRkJSVHRaUVVNNVF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXd5UTBGQk1rTXNRMEZCUXl4RFFVRkRPMU5CUTNSRk8xRkJRMFFzU1VGQlNTeERRVUZETERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMWxCUXpsRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRE0wYzdVVUZGUkN4TlFVRk5MSGRDUVVGM1FpeEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOeVJDeEpRVUZKTEVsQlFXVXNRMEZCUXp0UlFVVndRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTjZSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJSVzVFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRla0lzU1VGQlNTeEhRVUZITEhkQ1FVRjNRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRPMWxCUlRWRkxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzZDBKQlFYZENMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTNaRUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0blFrRkRiRUlzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMmRDUVVOaUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYWtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8yRkJRM0pETzFsQlJVUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRGFrTXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETVVRN1UwRkRTanRSUVVWRUxFOUJRVThzZDBKQlFYZENMRU5CUVVNN1NVRkRjRU1zUTBGQlF6czdRVUZxWTBRc1pVRkJaVHRCUVVOVExEWkNRVUY1UWl4SFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNdlJDeGxRVUZsTzBGQlExTXNOa0pCUVhsQ0xFZEJRVmNzUTBGQlF5eERRVUZETzBGQlF6bEVMR1ZCUVdVN1FVRkRVeXhsUVVGWExFZEJRVmNzUTBGQlF5eERRVUZETzBGQlEyaEVMR1ZCUVdVN1FVRkRVeXh0UWtGQlpTeEhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRPMEZCUTNSRUxHVkJRV1U3UVVGRFV5eHRRa0ZCWlN4SFFVRlhMRVZCUVVVc1EwRkJRenRCUVVOeVJDeGxRVUZsTzBGQlExTXNhMEpCUVdNc1IwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU53UkN4bFFVRmxPMEZCUTFNc2EwSkJRV01zUjBGQlZ5eERRVUZETEVOQlFVTTdRVUZEYmtRc1pVRkJaVHRCUVVOVExGTkJRVXNzUjBGQlZ5eERRVUZETEVOQlFVTTdRVUZvUWpsRExHdENRVzFqUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBiaWdfaW50ZWdlcl8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImJpZy1pbnRlZ2VyXCIpKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuLyoqXHJcbiAqIEhlbHBlciBjbGFzcyB0byBjb252ZXJ0IGJldHdlZW4gQmlnSW50ZWdlciBhbmQgb3RoZXIgdHlwZXMuXHJcbiAqIENvbnZlcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lyaS9ibG9iL2Rldi9zcmMvbWFpbi9qYXZhL2NvbS9pb3RhL2lyaS9oYXNoL0tlcmwuamF2YVxyXG4gKi9cclxuY2xhc3MgQmlnSW50ZWdlckhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdHJpdHMgdG8gYSBiaWdJbnRlZ2VyLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBjb252ZXJ0LlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBPZmZzZXQgd2l0aGluIHRoZSBhcnJheSB0byBzdGFydC5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgdHJpdHMgYXJyYXkgdG8gY29udmVydC5cclxuICAgICAqIEByZXR1cm5zIEJpZyBpbnRlZ2VyIHZlcnNpb24gb2YgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0cml0c1RvQmlnSW50ZWdlcih0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9mZnNldCArIGxlbmd0aCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmFsdWUgPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQuemVybztcclxuICAgICAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5tdWx0aXBseShCaWdJbnRlZ2VySGVscGVyLlJBRElYKS5hZGQoYmlnX2ludGVnZXJfMS5kZWZhdWx0KHRyaXRzW29mZnNldCArIGldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBiaWdJbnRlZ2VyIHRvIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBiaWdJbnRlZ2VyIHRvIGNvbnZlcnQgdG8gdHJpdHMuXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIGFycmF5IHRvIHJlY2VpdmUgdGhlIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IHRvIHBsYWNlIHRoZSB0cml0cyBpbiB0aGUgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYmlnSW50ZWdlclRvVHJpdHModmFsdWUsIHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgYmlnX2ludGVnZXJfMS5kZWZhdWx0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgYmlnSW50ZWdlciB0eXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJpdHMgbXVzdCBiZSBhbiBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2Zmc2V0ICsgbGVuZ3RoID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhYnNvbHV0ZVZhbHVlID0gdmFsdWUuY29tcGFyZVRvKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdC56ZXJvKSA8IDAgPyB2YWx1ZS5uZWdhdGUoKSA6IHZhbHVlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGl2UmVtYWluZGVyID0gYWJzb2x1dGVWYWx1ZS5kaXZtb2QoQmlnSW50ZWdlckhlbHBlci5SQURJWCk7XHJcbiAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBkaXZSZW1haW5kZXIucXVvdGllbnQ7XHJcbiAgICAgICAgICAgIGxldCByZW1haW5kZXIgPSBkaXZSZW1haW5kZXIucmVtYWluZGVyO1xyXG4gICAgICAgICAgICBpZiAocmVtYWluZGVyID4gQmlnSW50ZWdlckhlbHBlci5NQVhfVFJJVF9WQUxVRSkge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gQmlnSW50ZWdlckhlbHBlci5NSU5fVFJJVF9WQUxVRTtcclxuICAgICAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBhYnNvbHV0ZVZhbHVlLmFkZChiaWdfaW50ZWdlcl8xLmRlZmF1bHRbXCIxXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cml0c1tvZmZzZXQgKyBpXSA9IHJlbWFpbmRlci50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5jb21wYXJlVG8oYmlnX2ludGVnZXJfMS5kZWZhdWx0Lnplcm8pIDwgMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBdm9pZCBuZWdhdGl2ZSB6ZXJvXHJcbiAgICAgICAgICAgICAgICB0cml0c1tvZmZzZXQgKyBpXSA9IHRyaXRzW29mZnNldCArIGldID09PSAwID8gMCA6IC10cml0c1tvZmZzZXQgKyBpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgYmlnSW50ZWdlciBpbnRvIGJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxyXG4gICAgICogQHBhcmFtIGRlc3RpbmF0aW9uIFRoZSBkZXN0aW5hdGlvbiBhcnJheSB0byBzdG9yZSB0aGUgYnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgd2l0aGluIHRoZSBhcnJheSB0byBzdG9yZSB0aGUgYnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBiaWdJbnRlZ2VyVG9CeXRlcyh2YWx1ZSwgZGVzdGluYXRpb24sIG9mZnNldCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgYmlnX2ludGVnZXJfMS5kZWZhdWx0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgYmlnSW50ZWdlciB0eXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoZGVzdGluYXRpb24sIEFycmF5QnVmZmVyKSB8fCBkZXN0aW5hdGlvbi5ieXRlTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGRlc3RpbmF0aW9uIG11c3QgYmUgYW4gYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLmJ5dGVMZW5ndGggLSBvZmZzZXQgPCBCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYERlc3RpbmF0aW9uIGFycmF5IGhhcyBpbnZhbGlkIHNpemUsIGl0IG11c3QgYmUgYXQgbGVhc3QgJHtCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbWVtYmVyIGlmIGl0IGlzIG5lZ2F0aXZlIGZvciBsYXRlclxyXG4gICAgICAgIGNvbnN0IGlzTmVnID0gdmFsdWUuaXNOZWdhdGl2ZSgpID8gLTEgOiAwO1xyXG4gICAgICAgIGxldCBoZXhTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygxNik7XHJcbiAgICAgICAgaWYgKGlzTmVnID09PSAtMSkge1xyXG4gICAgICAgICAgICAvLyBCdXQgcmVtb3ZlIGl0IGZvciBub3dcclxuICAgICAgICAgICAgaGV4U3RyaW5nID0gaGV4U3RyaW5nLnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBOb3cgbWFrZSBzdXJlIHRoZSBoZXggc3RyaW5nIGlzIGFuIGV2ZW4gbGVuZ3RoIHNvIHRoZSByZWdleCB3b3Jrc1xyXG4gICAgICAgIGlmIChoZXhTdHJpbmcubGVuZ3RoICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICBoZXhTdHJpbmcgPSBgMCR7aGV4U3RyaW5nfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBoZXhTdHJpbmcubWF0Y2goL1swLTlhLWZdezJ9L2cpO1xyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGhleCB0byBudW1iZXJzXHJcbiAgICAgICAgY29uc3Qgc2lnbmVkQnl0ZXMgPSBuZXcgSW50OEFycmF5KG1hdGNoZXNcclxuICAgICAgICAgICAgLm1hcChoZXggPT4gcGFyc2VJbnQoYDB4JHtoZXh9YCwgMTYpKSk7XHJcbiAgICAgICAgaWYgKGlzTmVnID09PSAtMSkge1xyXG4gICAgICAgICAgICBCaWdJbnRlZ2VySGVscGVyLnR3b3NDb21wbGVtZW50KHNpZ25lZEJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZGVzdGluYXRpb24pO1xyXG4gICAgICAgIC8vIFBhZCB0aGUgc3RhcnQgb2YgdGhlIGJ1ZmZlciB3aXRoIHRoZSBuZWcgdmFsdWVcclxuICAgICAgICBsZXQgaSA9IG9mZnNldDtcclxuICAgICAgICB3aGlsZSAoaSArIHNpZ25lZEJ5dGVzLmxlbmd0aCA8IEJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICBkYXRhVmlldy5zZXRJbnQ4KGkrKywgaXNOZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBbmQgY29weSBpbiB0aGUgYWN0dWFsIGJ5dGVzXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHNpZ25lZEJ5dGVzLmxlbmd0aDsgai0tID4gMDspIHtcclxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0SW50OChpKyssIHNpZ25lZEJ5dGVzW3NpZ25lZEJ5dGVzLmxlbmd0aCAtIDEgLSBqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGJ5dGVzIHRvIGEgYmlnSW50ZWdlci5cclxuICAgICAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBieXRlcy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCB3aXRoaW4gdGhlIGJ5dGVzIHRvIHN0YXJ0IGNvbnZlcnNpb24uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGJ5dGVzIHRvIHVzZSBmb3IgY29udmVyc2lvbi5cclxuICAgICAqIEByZXR1cm5zIEJpZyBpbnRlZ2VyIHZlcnNpb24gb2YgYnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBieXRlc1RvQmlnSW50ZWdlcihzb3VyY2UsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNvdXJjZSwgQXJyYXlCdWZmZXIpIHx8IHNvdXJjZS5ieXRlTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHNvdXJjZSBtdXN0IGJlIGEgbm9uIGVtcHR5IG51bWJlciBhcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSBhIG51bWJlciA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzb3VyY2UuYnl0ZUxlbmd0aCAtIG9mZnNldCA8IEJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgU291cmNlIGFycmF5IGhhcyBpbnZhbGlkIHNpemUsIGl0IG11c3QgYmUgYXQgbGVhc3QgJHtCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHNvdXJjZSk7XHJcbiAgICAgICAgbGV0IHNpZ25lZEJ5dGVzID0gbmV3IEludDhBcnJheShkYXRhVmlldy5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IGRhdGFWaWV3LmJ5dGVMZW5ndGg7IGIrKykge1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlc1tiXSA9IGRhdGFWaWV3LmdldEludDgoYiArIG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaW5pdGlhbCBwYWRkaW5nIGxlYXZpbmcgYXQgbGVhc3Qgb25lIGJ5dGVcclxuICAgICAgICBsZXQgcGFkZGluZ09mZnNldCA9IDA7XHJcbiAgICAgICAgY29uc3QgZmlyc3RCeXRlID0gc2lnbmVkQnl0ZXNbMF07XHJcbiAgICAgICAgY29uc3QgaXNOZWcgPSBmaXJzdEJ5dGUgPCAwO1xyXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBwYWRkaW5nIGNoYXJhY3RlciBpcyBuZWdhdGl2ZSB0aGVuIHJldmVyc2UgdGhlIDJzIGNvbXBsZW1lbnRcclxuICAgICAgICAvLyBidXQgZmlyc3Qgc3RyaXAgb2YgdGhlIGxlYWRpbmcgcGFkZGluZ1xyXG4gICAgICAgIGlmIChmaXJzdEJ5dGUgPT09IDAgfHwgZmlyc3RCeXRlID09PSAtMSkge1xyXG4gICAgICAgICAgICB3aGlsZSAoc2lnbmVkQnl0ZXNbcGFkZGluZ09mZnNldF0gPT09IGZpcnN0Qnl0ZSAmJiBwYWRkaW5nT2Zmc2V0IDwgc2lnbmVkQnl0ZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ09mZnNldCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFN0cmlwIGFueSBwYWRkaW5nXHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzID0gc2lnbmVkQnl0ZXMuc2xpY2UocGFkZGluZ09mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc05lZykge1xyXG4gICAgICAgICAgICBCaWdJbnRlZ2VySGVscGVyLnR3b3NDb21wbGVtZW50KHNpZ25lZEJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhleFN0cmluZyA9IGlzTmVnID8gXCItXCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KHNpZ25lZEJ5dGVzLmJ1ZmZlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBkdi5ieXRlTGVuZ3RoOyBoKyspIHtcclxuICAgICAgICAgICAgaGV4U3RyaW5nICs9IGAwMCR7ZHYuZ2V0VWludDgoaCkudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmlnX2ludGVnZXJfMS5kZWZhdWx0KGhleFN0cmluZywgMTYpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgdHdvc0NvbXBsZW1lbnQoc2lnbmVkQnl0ZXMpIHtcclxuICAgICAgICAvLyBpZiB0aGUgd2hvbGUgbnVtYmVyIGlzIG5lZ2F0aXZlIHRoZW5cclxuICAgICAgICAvLyBjaGFuZ2UgdG8gMidzIGNvbXBsZW1lbnRzIGJ5IG5vdGluZyBhbGwgdGhlIG51bWJlcnNcclxuICAgICAgICAvLyBhbmQgYWRkaW5nIDEgdG8gdGhlIGxhc3QgaS5lLiB+YmlnbnVtKzFcclxuICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IHNpZ25lZEJ5dGVzLmxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzW2JdID0gfnNpZ25lZEJ5dGVzW2JdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgMSB0byBsYXN0IG51bWJlciwgaWYgdGhlIG51bWJlciBpcyAweEZGIGNvbnRpbnVlIHRvIGNhcnJ5XHJcbiAgICAgICAgbGV0IGMgPSBzaWduZWRCeXRlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXNbY10rKztcclxuICAgICAgICB9IHdoaWxlIChzaWduZWRCeXRlc1tjLS1dID09PSAwICYmIGMgPiAwKTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5SQURJWCA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCgzKTtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuTUFYX1RSSVRfVkFMVUUgPSBCaWdJbnRlZ2VySGVscGVyLlJBRElYLm1pbnVzKDEpLmRpdmlkZSgyKTtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuTUlOX1RSSVRfVkFMVUUgPSBCaWdJbnRlZ2VySGVscGVyLk1BWF9UUklUX1ZBTFVFLm5lZ2F0ZSgpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5CSVRfSEFTSF9MRU5HVEggPSAzODQ7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEggPSBCaWdJbnRlZ2VySGVscGVyLkJJVF9IQVNIX0xFTkdUSCAvIDg7XHJcbmV4cG9ydHMuQmlnSW50ZWdlckhlbHBlciA9IEJpZ0ludGVnZXJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVltbG5TVzUwWldkbGNraGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMkpwWjBsdWRHVm5aWEpJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzTkVWQlFYbEZPMEZCUTNwRkxITkZRVUZwUXp0QlFVTnFReXh6UkVGQmJVUTdRVUZGYmtRN096dEhRVWRITzBGQlEwZ3NUVUZCWVN4blFrRkJaMEk3U1VGaGVrSTdPenM3T3p0UFFVMUhPMGxCUTBrc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRXRCUVdkQ0xFVkJRVVVzVFVGQll5eEZRVUZGTEUxQlFXTTdVVUZETlVVc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVNNVJDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXg1UTBGQmVVTXNRMEZCUXl4RFFVRkRPMU5CUTNCRk8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRMME1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2EwTkJRV3RETEVOQlFVTXNRMEZCUXp0VFFVTTNSRHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR2xEUVVGcFF5eERRVUZETEVOQlFVTTdVMEZETlVRN1VVRkZSQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVOb1F5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXgxUkVGQmRVUXNRMEZCUXl4RFFVRkRPMU5CUTJ4R08xRkJSVVFzU1VGQlNTeExRVUZMTEVkQlFVY3NjVUpCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRmVFSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGJFTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEhGQ1FVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRha1k3VVVGRlJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0SlFVTnFRaXhEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NUVUZCVFN4RFFVRkRMR2xDUVVGcFFpeERRVUZETEV0QlFYZENMRVZCUVVVc1MwRkJaMElzUlVGQlJTeE5RVUZqTEVWQlFVVXNUVUZCWXp0UlFVTjBSeXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxIRkNRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTnlReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4eFEwRkJjVU1zUTBGQlF5eERRVUZETzFOQlEyaEZPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJUdFpRVU40UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eG5RMEZCWjBNc1EwRkJReXhEUVVGRE8xTkJRek5FTzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGREwwTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYTBOQlFXdERMRU5CUVVNc1EwRkJRenRUUVVNM1JEdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRMmhFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHbERRVUZwUXl4RFFVRkRMRU5CUVVNN1UwRkROVVE3VVVGRlJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU5vUXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDFSRUZCZFVRc1EwRkJReXhEUVVGRE8xTkJRMnhHTzFGQlJVUXNTVUZCU1N4aFFVRmhMRWRCUVVjc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eHhRa0ZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZGT1VVc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU0zUWl4TlFVRk5MRmxCUVZrc1IwRkJSeXhoUVVGaExFTkJRVU1zVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEyeEZMR0ZCUVdFc1IwRkJSeXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETzFsQlEzUkRMRWxCUVVrc1UwRkJVeXhIUVVGSExGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZGZGtNc1NVRkJTU3hUUVVGVExFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1kwRkJZeXhGUVVGRk8yZENRVU0zUXl4VFFVRlRMRWRCUVVjc1owSkJRV2RDTEVOQlFVTXNZMEZCWXl4RFFVRkRPMmRDUVVNMVF5eGhRVUZoTEVkQlFVY3NZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXh4UWtGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRiRVE3V1VGRFJDeExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0VFFVTTVRenRSUVVWRUxFbEJRVWtzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4eFFrRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTnNReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTTNRaXh6UWtGQmMwSTdaMEpCUTNSQ0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzaEZPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUzBGQmQwSXNSVUZCUlN4WFFVRjNRaXhGUVVGRkxFMUJRV003VVVGRE9VWXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4eFFrRkJUU3hEUVVGRExFVkJRVVU3V1VGRGNrTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOb1JUdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVWQlFVVXNWMEZCVnl4RFFVRkRMRWxCUVVrc1YwRkJWeXhEUVVGRExGVkJRVlVzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEYUVZc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNhME5CUVd0RExFTkJRVU1zUTBGQlF6dFRRVU0zUkR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VTBGRE4wUTdVVUZGUkN4SlFVRkpMRmRCUVZjc1EwRkJReXhWUVVGVkxFZEJRVWNzVFVGQlRTeEhRVUZITEdkQ1FVRm5RaXhEUVVGRExHZENRVUZuUWl4RlFVRkZPMWxCUTNKRkxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMREpFUVVFeVJDeG5Ra0ZCWjBJc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRla2c3VVVGRlJDeDFRMEZCZFVNN1VVRkRka01zVFVGQlRTeExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVEZETEVsQlFVa3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGYmtNc1NVRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdXVUZEWkN4M1FrRkJkMEk3V1VGRGVFSXNVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEYkVNN1VVRkRSQ3h2UlVGQmIwVTdVVUZEY0VVc1NVRkJTU3hUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkROVUlzVTBGQlV5eEhRVUZITEVsQlFVa3NVMEZCVXl4RlFVRkZMRU5CUVVNN1UwRkRMMEk3VVVGRFJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzFGQlJXaEVMRFpDUVVFMlFqdFJRVU0zUWl4TlFVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxGTkJRVk1zUTBGQlF5eFBRVUZQTzJGQlEzQkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVXpReXhKUVVGSkxFdEJRVXNzUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlR0WlFVTmtMR2RDUVVGblFpeERRVUZETEdOQlFXTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRUUVVOb1JEdFJRVVZFTEUxQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlJUTkRMR2xFUVVGcFJEdFJRVU5xUkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRFppeFBRVUZQTEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1RVRkJUU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMR2RDUVVGblFpeEZRVUZGTzFsQlF5OUVMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRhRU03VVVGRFJDd3JRa0ZCSzBJN1VVRkRMMElzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnp0WlFVTjJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRmRCUVZjc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnhGTzBsQlEwd3NRMEZCUXp0SlFVVkVPenM3T3pzN1QwRk5SenRKUVVOSkxFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhOUVVGdFFpeEZRVUZGTEUxQlFXTXNSVUZCUlN4TlFVRmpPMUZCUXk5RkxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzVjBGQlZ5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGRFVXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zTmtOQlFUWkRMRU5CUVVNc1EwRkJRenRUUVVONFJUdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl4RFFVRkRMRU5CUVVNN1UwRkROMFE3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOb1JDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RFFVRkRPMU5CUXpWRU8xRkJSVVFzU1VGQlNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4SFFVRkhMRTFCUVUwc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4blFrRkJaMElzUlVGQlJUdFpRVU5vUlN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHpSRUZCYzBRc1owSkJRV2RDTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzQklPMUZCUlVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZkRU1zU1VGQlNTeFhRVUZYTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlEzSkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlF6RkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU5xUkR0UlFVVkVMSFZFUVVGMVJEdFJRVU4yUkN4SlFVRkpMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGRFSXNUVUZCVFN4VFFVRlRMRWRCUVVjc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycERMRTFCUVUwc1MwRkJTeXhIUVVGSExGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGTlVJc05FVkJRVFJGTzFGQlF6VkZMSGxEUVVGNVF6dFJRVU42UXl4SlFVRkpMRk5CUVZNc1MwRkJTeXhEUVVGRExFbEJRVWtzVTBGQlV5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZPMWxCUTNKRExFOUJRVThzVjBGQlZ5eERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRk5CUVZNc1NVRkJTU3hoUVVGaExFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRM1pHTEdGQlFXRXNSVUZCUlN4RFFVRkRPMkZCUTI1Q08xbEJRMFFzYjBKQlFXOUNPMWxCUTNCQ0xGZEJRVmNzUjBGQlJ5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xTkJRMnhFTzFGQlJVUXNTVUZCU1N4TFFVRkxMRVZCUVVVN1dVRkRVQ3huUWtGQlowSXNRMEZCUXl4alFVRmpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VTBGRGFFUTdVVUZGUkN4SlFVRkpMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRMnBETEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTFReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTndReXhUUVVGVExFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6ZEVPMUZCUlVRc1QwRkJUeXh4UWtGQlRTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOcVF5eERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVjBGQmMwSTdVVUZEYUVRc2RVTkJRWFZETzFGQlEzWkRMSE5FUVVGelJEdFJRVU4wUkN3d1EwRkJNRU03VVVGRE1VTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZkQlFWY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGVrTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNCRE8xRkJRMFFzWjBWQlFXZEZPMUZCUTJoRkxFbEJRVWtzUTBGQlF5eEhRVUZITEZkQlFWY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJReTlDTEVkQlFVYzdXVUZEUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFRRVU53UWl4UlFVRlJMRmRCUVZjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wbEJRemxETEVOQlFVTTdPMEZCYkU5RUxHVkJRV1U3UVVGRFV5eHpRa0ZCU3l4SFFVRnpRaXh4UWtGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpkRUxHVkJRV1U3UVVGRFV5d3JRa0ZCWXl4SFFVRnpRaXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOMFJ5eGxRVUZsTzBGQlExTXNLMEpCUVdNc1IwRkJjMElzWjBKQlFXZENMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzBGQlJYSkhMR1ZCUVdVN1FVRkRVeXhuUTBGQlpTeEhRVUZYTEVkQlFVY3NRMEZCUXp0QlFVTjBSQ3hsUVVGbE8wRkJRMU1zYVVOQlFXZENMRWRCUVZjc1owSkJRV2RDTEVOQlFVTXNaVUZCWlN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVZnMVJpdzBRMEZ2VDBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJhbnNhY3Rpb25cIik7XHJcbmNvbnN0IHRyaXRzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3Qgc3BvbmdlRmFjdG9yeV8xID0gcmVxdWlyZShcIi4uL2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpO1xyXG4vKipcclxuICogSGVscGVyIGNsYXNzIGZvciB0cmFuc2FjdGlvbnMuXHJcbiAqIENvbnZlcnRlZCBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pb3RhLmxpYi5qcy9ibG9iL21hc3Rlci9saWIvY3J5cHRvL3NpZ25pbmcvc2lnbmluZy5qc1xyXG4gKi9cclxuY2xhc3MgVHJhbnNhY3Rpb25IZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGhhc2ggZm9yIGEgdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb24gVGhlIHRyYW5zYWN0aW9uIHRvIGdlbmVyYXRlIHRoZSBoYXNoLlxyXG4gICAgICogQHJldHVybnMgVGhlIGhhc2ggb2YgdGhlIHRyYW5zYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaGFzaCh0cmFuc2FjdGlvbikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cmFuc2FjdGlvbiwgdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJhbnNhY3Rpb24gbXVzdCBiZSBvZiB0eXBlIFRyYW5zYWN0aW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjdXJsID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoXCJjdXJsXCIpO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uVHJpdHMgPSB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXModHJhbnNhY3Rpb24udG9Ucnl0ZXMoKSkudG9BcnJheSgpO1xyXG4gICAgICAgIGN1cmwuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGN1cmwuYWJzb3JiKHRyYW5zYWN0aW9uVHJpdHMsIDAsIHRyYW5zYWN0aW9uVHJpdHMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBoYXNoVHJpdHMgPSBuZXcgSW50OEFycmF5KGN1cmwuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKSk7XHJcbiAgICAgICAgY3VybC5zcXVlZXplKGhhc2hUcml0cywgMCwgaGFzaFRyaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJpdHNfMS5Ucml0cy5mcm9tQXJyYXkoaGFzaFRyaXRzKS50b1RyeXRlcygpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRyYW5zYWN0aW9uSGVscGVyID0gVHJhbnNhY3Rpb25IZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5oWTNScGIyNUlaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUdWc2NHVnljeTkwY21GdWMyRmpkR2x2YmtobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTEhsRVFVRnpSRHRCUVVOMFJDeDFSVUZCYjBVN1FVRkRjRVVzTWtSQlFYZEVPMEZCUTNoRUxITkVRVUZ0UkR0QlFVTnVSQ3c0UkVGQk1rUTdRVUZGTTBRN096dEhRVWRITzBGQlEwZ3NUVUZCWVN4cFFrRkJhVUk3U1VGRE1VSTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJkMEk3VVVGRGRrTXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlN4NVFrRkJWeXhEUVVGRExFVkJRVVU3V1VGRGFFUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zTmtOQlFUWkRMRU5CUVVNc1EwRkJRenRUUVVONFJUdFJRVVZFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM0pFTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzWVVGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVVTFSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRExFVkJRVVVzWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRk1VUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZOME1zVDBGQlR5eFhRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMR0ZCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOc1JTeERRVUZETzBOQlEwbzdRVUYwUWtRc09FTkJjMEpESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2RpZ2VzdHMvc2hhM1wiKSwgZXhwb3J0cyk7XHJcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2Vycm9yL2NyeXB0b0Vycm9yXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZmFjdG9yaWVzL3Byb29mT2ZXb3JrRmFjdG9yeVwiKSwgZXhwb3J0cyk7XHJcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaGFzaC9pc3NcIiksIGV4cG9ydHMpO1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9oZWxwZXJzL2JpZ0ludGVnZXJIZWxwZXJcIiksIGV4cG9ydHMpO1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9oZWxwZXJzL3RyYW5zYWN0aW9uSGVscGVyXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc3Bvbmdlcy9jdXJsXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc3Bvbmdlcy9rZXJsXCIpLCBleHBvcnRzKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFUczdSMEZGUnp0QlFVTklMSGxFUVVFclFqdEJRVU12UWl3NFJFRkJiME03UVVGRGNFTXNlVVZCUVN0RE8wRkJReTlETEc5RlFVRXdRenRCUVVNeFF5eHhSRUZCTWtJN1FVRkRNMElzY1VWQlFUSkRPMEZCUXpORExITkZRVUUwUXp0QlFVYzFReXgzUlVGQk9FTTdRVUZET1VNc2VVUkJRU3RDTzBGQlF5OUNMSGxFUVVFclFpSjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCB0aW1lU2VydmljZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L3NlcnZpY2VzL3RpbWVTZXJ2aWNlXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RhZ1wiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25fMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zYWN0aW9uXCIpO1xyXG5jb25zdCB0cnl0ZU51bWJlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVOdW1iZXJcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBwcm9vZiBvZiB3b3JrLlxyXG4gKi9cclxuY2xhc3MgUHJvb2ZPZldvcmtCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIFByb29mT2ZXb3JrLlxyXG4gICAgICogQHBhcmFtIHRpbWVTZXJ2aWNlIFNlcnZpY2UgdG8gZ2V0IHRoZSB0aW1lIGZvciBhdHRhY2htZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGltZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl90aW1lU2VydmljZSA9IHRpbWVTZXJ2aWNlIHx8IG5ldyB0aW1lU2VydmljZV8xLlRpbWVTZXJ2aWNlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHRoZSBwcm9vZiBvZiB3b3JrIHRvIHBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uLlxyXG4gICAgICogV2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIGltcGxlbWVudGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgcHJvb2Ygb2Ygd29yayBvbiB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSB0cnVua1RyYW5zYWN0aW9uIFRoZSB0cnVua1RyYW5zYWN0aW9uIHRvIHVzZSBmb3IgdGhlIHBvdy5cclxuICAgICAqIEBwYXJhbSBicmFuY2hUcmFuc2FjdGlvbiBUaGUgYnJhbmNoVHJhbnNhY3Rpb24gdG8gdXNlIGZvciB0aGUgcG93LlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIHBlcmZvcm0gdGhlIHBvdyBvbi5cclxuICAgICAqIEBwYXJhbSBtaW5XZWlnaHRNYWduaXR1ZGUgVGhlIG1pbmltdW0gd2VpZ2h0IG1hZ25pdHVkZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgcHJvZHVjZWQgYnkgdGhlIHByb29mIG9mIHdvcmsuXHJcbiAgICAgKi9cclxuICAgIHBvdyh0cnVua1RyYW5zYWN0aW9uLCBicmFuY2hUcmFuc2FjdGlvbiwgdHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpIHtcclxuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cnVua1RyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRydW5rVHJhbnNhY3Rpb24gbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShicmFuY2hUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBicmFuY2hUcmFuc2FjdGlvbiBtdXN0IGJlIGFuIG9iamVjdCBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQodHJ5dGVzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnl0ZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB0eXBlIFRyeXRlc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobWluV2VpZ2h0TWFnbml0dWRlKSB8fCBtaW5XZWlnaHRNYWduaXR1ZGUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbWluV2VpZ2h0TWFnbml0dWRlIG11c3QgYmUgPiAwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsVHJ5dGVzID0gW107XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1RyYW5zYWN0aW9uSGFzaDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnl0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5mcm9tVHJ5dGVzKHRyeXRlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAvLyBTdGFydCB3aXRoIGxhc3QgaW5kZXggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBpdCB0aGUgdHJ1bmsgLyBicmFuY2ggd2hpY2ggdGhlIHVzZXIgaGFzIHN1cHBsaWVkXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGJ1bmRsZSwgY2hhaW4gdGhlIGJ1bmRsZSB0cmFuc2FjdGlvbnMgdmlhXHJcbiAgICAgICAgICAgICAgICAvLyB0cnVua1RyYW5zYWN0aW9uIHRvZ2V0aGVyXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5hdHRhY2htZW50VGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKHRoaXMuX3RpbWVTZXJ2aWNlLm1zU2luY2VFcG9jaCgpKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKDApO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoUHJvb2ZPZldvcmtCYXNlLk1BWF9USU1FU1RBTVBfVkFMVUUpO1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgdHJhbnNhY3Rpb24sIHRvIGJlIHByb2Nlc3NlZFxyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgaXQncyB0aGUgbGFzdCBpbiB0aGUgYnVuZGxlIGFuZCB0aGVuXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ24gaXQgdGhlIHN1cHBsaWVkIHRydW5rIGFuZCBicmFuY2ggdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkocHJldmlvdXNUcmFuc2FjdGlvbkhhc2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbGFzdCB0cmFuc2FjdGlvbiBpbiB0aGUgYnVuZGxlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmxhc3RJbmRleC50b051bWJlcigpICE9PSB0cmFuc2FjdGlvbi5jdXJyZW50SW5kZXgudG9OdW1iZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIldyb25nIGJ1bmRsZSBvcmRlci4gVGhlIGJ1bmRsZSBzaG91bGQgYmUgb3JkZXJlZCBpbiBkZXNjZW5kaW5nIG9yZGVyIGZyb20gY3VycmVudEluZGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi50cnVua1RyYW5zYWN0aW9uID0gdHJ1bmtUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5icmFuY2hUcmFuc2FjdGlvbiA9IGJyYW5jaFRyYW5zYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24udHJ1bmtUcmFuc2FjdGlvbiA9IHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmJyYW5jaFRyYW5zYWN0aW9uID0gdHJ1bmtUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RyeXRlcyA9IHRyYW5zYWN0aW9uLnRvVHJ5dGVzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaW5nbGVUcnl0ZXMgPSB5aWVsZCB0aGlzLnNpbmdsZVBvdyhuZXdUcnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5ub25jZSA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHNpbmdsZVRyeXRlcy5zdWIodHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5MRU5HVEggLSB0YWdfMS5UYWcuTEVOR1RILCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGhhc2ggb2YgdGhlIG5ldyB0cmFuc2FjdGlvbiB3aXRoIG5vbmNlIGFuZCB1c2UgdGhhdCBhcyB0aGUgcHJldmlvdXMgaGFzaCBmb3IgbmV4dCBlbnRyeVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLmZyb21Ucnl0ZXMoc2luZ2xlVHJ5dGVzKTtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoID0gdHJhbnNhY3Rpb25IZWxwZXJfMS5UcmFuc2FjdGlvbkhlbHBlci5oYXNoKHJldHVyblRyYW5zYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGZpbmFsVHJ5dGVzLnB1c2gocmV0dXJuVHJhbnNhY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHJldmVyc2UgdGhlIG9yZGVyIHNvIHRoYXQgaXQncyBhc2NlbmRpbmcgZnJvbSBjdXJyZW50SW5kZXhcclxuICAgICAgICAgICAgcmV0dXJuIGZpbmFsVHJ5dGVzLnJldmVyc2UoKS5tYXAodHJhbnNhY3Rpb24gPT4gdHJhbnNhY3Rpb24udG9Ucnl0ZXMoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBtYXhpbXVtIHRpbWVzdGFtcCB2YWx1ZSB1c2VkIGluIHByb29mIG9mIHdvcmsuXHJcbiAqL1xyXG5Qcm9vZk9mV29ya0Jhc2UuTUFYX1RJTUVTVEFNUF9WQUxVRSA9IChNYXRoLnBvdygzLCAyNykgLSAxKSAvIDI7XHJcbmV4cG9ydHMuUHJvb2ZPZldvcmtCYXNlID0gUHJvb2ZPZldvcmtCYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEp2YjJaUFpsZHZjbXRDWVhObExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNCeWIyOW1UMlpYYjNKckwzQnliMjltVDJaWGIzSnJRbUZ6WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTERCRlFVRjFSVHRCUVVOMlJTdzBSVUZCZVVVN1FVRkRla1VzTkVWQlFYbEZPMEZCUlhwRkxESkZRVUYzUlR0QlFVTjRSU3g1UkVGQmMwUTdRVUZEZEVRc2RVUkJRVzlFTzBGQlEzQkVMSFZGUVVGdlJUdEJRVU53UlN4MVJVRkJiMFU3UVVGRGNFVXNOa1JCUVRCRU8wRkJRekZFTEhORVFVRnRSRHRCUVVOdVJDeHZSVUZCYVVVN1FVRkhha1U3TzBkQlJVYzdRVUZEU0N4TlFVRnpRaXhsUVVGbE8wbEJVMnBET3pzN1QwRkhSenRKUVVOSUxGbEJRVmtzVjBGQk1FSTdVVUZEYkVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eFhRVUZYTEVsQlFVa3NTVUZCU1N4NVFrRkJWeXhGUVVGRkxFTkJRVU03U1VGRGVrUXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEVlN4VlFVRlZPenRaUVVOdVFpeFBRVUZQTEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVNM1FpeERRVUZETzB0QlFVRTdTVUZGUkRzN096czdPenRQUVU5SE8wbEJRMVVzUjBGQlJ5eERRVUZETEdkQ1FVRnpRaXhGUVVGRkxHbENRVUYxUWl4RlFVRkZMRTFCUVdkQ0xFVkJRVVVzYTBKQlFUQkNPenRaUVVNeFJ5eEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1YwRkJTU3hEUVVGRExFVkJRVVU3WjBKQlF6bERMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhGRVFVRnhSQ3hEUVVGRExFTkJRVU03WVVGRGFFWTdXVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzVjBGQlNTeERRVUZETEVWQlFVVTdaMEpCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSE5FUVVGelJDeERRVUZETEVOQlFVTTdZVUZEYWtZN1dVRkRSQ3hKUVVGSkxFTkJRVU1zZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxHVkJRVTBzUTBGQlF5eEZRVUZGTzJkQ1FVTjBReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3MFEwRkJORU1zUTBGQlF5eERRVUZETzJGQlEzWkZPMWxCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NhMEpCUVd0Q0xFbEJRVWtzUTBGQlF5eEZRVUZGTzJkQ1FVTjRSU3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4dlEwRkJiME1zUTBGQlF5eERRVUZETzJGQlF5OUVPMWxCUlVRc1RVRkJUU3hYUVVGWExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlJYWkNMRWxCUVVrc2RVSkJRVFpDTEVOQlFVTTdXVUZGYkVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTNCRExFMUJRVTBzVjBGQlZ5eEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVWMFJDeHZRMEZCYjBNN1owSkJRM0JETERKRVFVRXlSRHRuUWtGRE0wUXNNRVJCUVRCRU8yZENRVU14UkN3MFFrRkJORUk3WjBKQlF6VkNMRmRCUVZjc1EwRkJReXh0UWtGQmJVSXNSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlF6TkdMRmRCUVZjc1EwRkJReXcyUWtGQk5rSXNSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRkRVVzVjBGQlZ5eERRVUZETERaQ1FVRTJRaXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVdVc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMmRDUVVWNFJ5eHZSRUZCYjBRN1owSkJRM0JFTEhORVFVRnpSRHRuUWtGRGRFUXNkVVJCUVhWRU8yZENRVVYyUkN4SlFVRkpMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEhWQ1FVRjFRaXhEUVVGRExFVkJRVVU3YjBKQlF5OURMREJEUVVFd1F6dHZRa0ZETVVNc1NVRkJTU3hYUVVGWExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNSVUZCUlN4TFFVRkxMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVTdkMEpCUXpGRkxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSGRHUVVGM1JpeERRVUZETEVOQlFVTTdjVUpCUTI1SU8yOUNRVU5FTEZkQlFWY3NRMEZCUXl4blFrRkJaMElzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenR2UWtGRGFFUXNWMEZCVnl4RFFVRkRMR2xDUVVGcFFpeEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8ybENRVU55UkR0eFFrRkJUVHR2UWtGRFNDeFhRVUZYTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzZFVKQlFYVkNMRU5CUVVNN2IwSkJRM1pFTEZkQlFWY3NRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRwUWtGRGNFUTdaMEpCUlVRc1RVRkJUU3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMmRDUVVWNlF5eE5RVUZOTEZsQlFWa3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV5eEZRVUZGTEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03WjBKQlJYcEZMRmRCUVZjc1EwRkJReXhMUVVGTExFZEJRVWNzVTBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExIbENRVUZYTEVOQlFVTXNUVUZCVFN4SFFVRkhMRk5CUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJSV3hITEhkSFFVRjNSenRuUWtGRGVFY3NUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dG5Ra0ZETDBRc2RVSkJRWFZDTEVkQlFVY3NjVU5CUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03WjBKQlJYQkZMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJRenRoUVVOMlF6dFpRVU5FTERaRVFVRTJSRHRaUVVNM1JDeFBRVUZQTEZkQlFWY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU0xUlN4RFFVRkRPMHRCUVVFN08wRkJOVVpFT3p0SFFVVkhPMEZCUTI5Q0xHMURRVUZ0UWl4SFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlNtNUdMREJEUVhOSFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIElTcG9uZ2UgdXNpbmcgQ3VybCBhbGdvcml0aG0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lvdGEubGliLmpzL2Jsb2IvbWFzdGVyL2xpYi9jcnlwdG8vY3VybC9jdXJsLmpzXHJcbiAqL1xyXG5jbGFzcyBDdXJsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEN1cmwuXHJcbiAgICAgKiBAcGFyYW0gcm91bmRzIFRoZSBudW1iZXIgb2Ygcm91bmRzIHRvIHVzZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iocm91bmRzID0gQ3VybC5OVU1CRVJfT0ZfUk9VTkRTKSB7XHJcbiAgICAgICAgdGhpcy5fbnVtYmVyT2ZSb3VuZHMgPSByb3VuZHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY29uc3RhbnQgZm9yIHRoZSBzcG9uZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb25zdGFudCB0byBnZXQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29uc3RhbnQuXHJcbiAgICAgKi9cclxuICAgIGdldENvbnN0YW50KG5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9ST1VORFNcIjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlck9mUm91bmRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJIQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiU1RBVEVfTEVOR1RIXCI6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBDdXJsW25hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBVbmtub3duIGNvbnN0YW50IHJlcXVlc3RlZCAke25hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0YXRlIG9mIHRoZSBjdXJsIGhhc2guXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGlzZSB0aGUgaGFzaGVyLlxyXG4gICAgICogQHBhcmFtIHN0YXRlIFRoZSBpbml0aWFsIHN0YXRlIGZvciB0aGUgaGFzaGVyLlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplKHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ldyBJbnQ4QXJyYXkoQ3VybC5TVEFURV9MRU5HVEgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFic29yYiB0cml0cyBpbnRvIHRoZSBoYXNoLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gYWJzb3JiIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICovXHJcbiAgICBhYnNvcmIodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBsb2NhbExlbmd0aCA8IEN1cmwuSEFTSF9MRU5HVEggPyBsb2NhbExlbmd0aCA6IEN1cmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgbGltaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlW2krK10gPSB0cml0c1tsb2NhbE9mZnNldCsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSgpO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNxdWVlemUgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBzcXVlZXplIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqL1xyXG4gICAgc3F1ZWV6ZSh0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9jYWxPZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgbGV0IGxvY2FsTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBsaW1pdCA9IGxvY2FsTGVuZ3RoIDwgQ3VybC5IQVNIX0xFTkdUSCA/IGxlbmd0aCA6IEN1cmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgbGltaXQpIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzW2xvY2FsT2Zmc2V0KytdID0gdGhpcy5fc3RhdGVbaSsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSgpO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zZm9ybSB0aGUgaGFzaC5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0oKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlQ29weTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHJvdW5kID0gMDsgcm91bmQgPCB0aGlzLl9udW1iZXJPZlJvdW5kczsgcm91bmQrKykge1xyXG4gICAgICAgICAgICBzdGF0ZUNvcHkgPSBuZXcgSW50OEFycmF5KHRoaXMuX3N0YXRlLnNsaWNlKCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEN1cmwuU1RBVEVfTEVOR1RIOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlW2ldID0gQ3VybC5UUlVUSF9UQUJMRVtzdGF0ZUNvcHlbaW5kZXhdICsgKHN0YXRlQ29weVtpbmRleCArPSAoaW5kZXggPCAzNjUgPyAzNjQgOiAtMzY1KV0gPDwgMikgKyA1XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5DdXJsLkhBU0hfTEVOR1RIID0gMjQzO1xyXG5DdXJsLk5VTUJFUl9PRl9ST1VORFMgPSA4MTtcclxuQ3VybC5TVEFURV9MRU5HVEggPSBDdXJsLkhBU0hfTEVOR1RIICogMztcclxuLyogQGludGVybmFsICovXHJcbkN1cmwuVFJVVEhfVEFCTEUgPSBuZXcgSW50OEFycmF5KFsxLCAwLCAtMSwgMiwgMSwgLTEsIDAsIDIsIC0xLCAxLCAwXSk7XHJcbmV4cG9ydHMuQ3VybCA9IEN1cmw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXpjRzl1WjJWekwyTjFjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNjMFJCUVcxRU8wRkJSMjVFT3pzN1IwRkhSenRCUVVOSUxFMUJRV0VzU1VGQlNUdEpRV0ZpT3pzN1QwRkhSenRKUVVOSUxGbEJRVmtzVTBGQmFVSXNTVUZCU1N4RFFVRkRMR2RDUVVGblFqdFJRVU01UXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFMUJRVTBzUTBGQlF6dEpRVU5zUXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRmRCUVZjc1EwRkJReXhKUVVGWk8xRkJRek5DTEZGQlFWRXNTVUZCU1N4RlFVRkZPMWxCUTFZc1MwRkJTeXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMmRDUVVOeVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNN1lVRkRMMEk3V1VGRFJDeExRVUZMTEdGQlFXRXNRMEZCUXp0WlFVTnVRaXhMUVVGTExHTkJRV01zUTBGQlF5eERRVUZETzJkQ1FVTnFRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTnlRanRaUVVORUxFOUJRVThzUTBGQlF5eERRVUZETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM2hGTzBsQlEwd3NRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGRrSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZWQlFWVXNRMEZCUXl4TFFVRnBRanRSUVVNdlFpeEpRVUZKTEV0QlFVc3NSVUZCUlR0WlFVTlFMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETzFOQlEzWkNPMkZCUVUwN1dVRkRTQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFRRVU5zUkR0SlFVTk1MRU5CUVVNN1NVRkZSRHM3VDBGRlJ6dEpRVU5KTEV0QlFVczdVVUZEVWl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFdEJRV2RDTEVWQlFVVXNUVUZCWXl4RlFVRkZMRTFCUVdNN1VVRkRNVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU01UkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHhRMEZCY1VNc1EwRkJReXhEUVVGRE8xTkJRMmhGTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGREwwTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zT0VKQlFUaENMRU5CUVVNc1EwRkJRenRUUVVONlJEdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNN1UwRkRla1E3VVVGRFJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU5vUXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDFSRUZCZFVRc1EwRkJReXhEUVVGRE8xTkJRMnhHTzFGQlJVUXNTVUZCU1N4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NWMEZCVnl4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVWNlFpeEhRVUZITzFsQlEwTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMVlzVFVGQlRTeExRVUZMTEVkQlFVY3NWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFpRVVU1UlN4UFFVRlBMRU5CUVVNc1IwRkJSeXhMUVVGTExFVkJRVVU3WjBKQlEyUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRek5ETzFsQlJVUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8xbEJSV3BDTEZkQlFWY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xTkJRMjVETEZGQlFWRXNWMEZCVnl4SFFVRkhMRU5CUVVNc1JVRkJSVHRKUVVNNVFpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4UFFVRlBMRU5CUVVNc1MwRkJaMElzUlVGQlJTeE5RVUZqTEVWQlFVVXNUVUZCWXp0UlFVTXpSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRemxFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1UwRkRhRVU3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMU5CUTNwRU8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRMME1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXp0VFFVTjZSRHRSUVVORUxFbEJRVWtzVFVGQlRTeEhRVUZITEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRMmhETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIVkVRVUYxUkN4RFFVRkRMRU5CUVVNN1UwRkRiRVk3VVVGRlJDeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRla0lzU1VGQlNTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUlhwQ0xFZEJRVWM3V1VGRlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRWaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJSWHBGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRXRCUVVzc1JVRkJSVHRuUWtGRFpDeExRVUZMTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRNME03V1VGRlJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1dVRkZha0lzVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1UwRkRia01zVVVGQlVTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RlFVRkZPMGxCUXpsQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTeXhUUVVGVE8xRkJRMklzU1VGQlNTeFRRVUZ2UWl4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVmtMRXRCUVVzc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTzFsQlEzWkVMRk5CUVZNc1IwRkJSeXhKUVVGSkxGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRkwwTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlJYaERMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYmtnN1UwRkRTanRKUVVOTUxFTkJRVU03TzBGQk5VcHpRaXhuUWtGQlZ5eEhRVUZYTEVkQlFVY3NRMEZCUXp0QlFVTXhRaXh4UWtGQlowSXNSMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkRPVUlzYVVKQlFWa3NSMEZCVnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVVZ1UlN4bFFVRmxPMEZCUTFNc1owSkJRVmNzUjBGQll5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCVG5wSExHOUNRVGhLUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBzaGEzXzEgPSByZXF1aXJlKFwiLi4vZGlnZXN0cy9zaGEzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBiaWdJbnRlZ2VySGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9iaWdJbnRlZ2VySGVscGVyXCIpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgSVNwb25nZSB1c2luZyBLZXJsIGFsZ29yaXRobS5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaXJpL2Jsb2IvZGV2L3NyYy9tYWluL2phdmEvY29tL2lvdGEvaXJpL2hhc2gvS2VybC5qYXZhXHJcbiAqL1xyXG5jbGFzcyBLZXJsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEtlcmwuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2tlY2NhayA9IG5ldyBzaGEzXzEuU2hhMygzODQsIHNoYTNfMS5TaGEzLktFQ0NBS19QQURESU5HLCAzODQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNvbnN0YW50IGZvciB0aGUgc3BvbmUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29uc3RhbnQgdG8gZ2V0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbnN0YW50LlxyXG4gICAgICovXHJcbiAgICBnZXRDb25zdGFudChuYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJIQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiQklUX0hBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJCWVRFX0hBU0hfTEVOR1RIXCI6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBLZXJsW25hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBVbmtub3duIGNvbnN0YW50IHJlcXVlc3RlZCAke25hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0YXRlIG9mIHRoZSBrZXJsIGhhc2guXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpc2UgdGhlIGhhc2hlci5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSBmb3IgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZShzdGF0ZSkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgaGFzaGVyLlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9rZWNjYWsucmVzZXQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWJzb3JiIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBhYnNvcmIgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKi9cclxuICAgIGFic29yYih0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICUgMjQzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7S2VybC5IQVNIX0xFTkdUSH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaXRTdGF0ZSA9IHRyaXRzLnNsaWNlKGxvY2FsT2Zmc2V0LCBsb2NhbE9mZnNldCArIEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICB0cml0U3RhdGVbS2VybC5IQVNIX0xFTkdUSCAtIDFdID0gMDtcclxuICAgICAgICAgICAgY29uc3QgYmlnSW50ID0gYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIudHJpdHNUb0JpZ0ludGVnZXIodHJpdFN0YXRlLCAwLCB0cml0U3RhdGUubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZVN0YXRlID0gbmV3IEFycmF5QnVmZmVyKEtlcmwuQllURV9IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLmJpZ0ludGVnZXJUb0J5dGVzKGJpZ0ludCwgYnl0ZVN0YXRlLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5fa2VjY2FrLnVwZGF0ZShieXRlU3RhdGUpO1xyXG4gICAgICAgICAgICBsb2NhbE9mZnNldCArPSBLZXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBLZXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNxdWVlemUgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBzcXVlZXplIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqL1xyXG4gICAgc3F1ZWV6ZSh0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICUgMjQzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7S2VybC5IQVNIX0xFTkdUSH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVTdGF0ZUJ1ZmZlciA9IHRoaXMuX2tlY2Nhay5kaWdlc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgYmlnSW50ID0gYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIuYnl0ZXNUb0JpZ0ludGVnZXIoYnl0ZVN0YXRlQnVmZmVyLCAwLCBLZXJsLkJZVEVfSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cml0U3RhdGUgPSBuZXcgSW50OEFycmF5KEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBiaWdJbnRlZ2VySGVscGVyXzEuQmlnSW50ZWdlckhlbHBlci5iaWdJbnRlZ2VyVG9Ucml0cyhiaWdJbnQsIHRyaXRTdGF0ZSwgMCwgS2VybC5IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIHRyaXRTdGF0ZVtLZXJsLkhBU0hfTEVOR1RIIC0gMV0gPSAwO1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgS2VybC5IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbbG9jYWxPZmZzZXQrK10gPSB0cml0U3RhdGVbaSsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhieXRlU3RhdGVCdWZmZXIpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZHYuYnl0ZUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkdi5zZXRVaW50OChpLCBkdi5nZXRVaW50OChpKSBeIDB4RkYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2tlY2Nhay51cGRhdGUoYnl0ZVN0YXRlQnVmZmVyKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gS2VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5LZXJsLkhBU0hfTEVOR1RIID0gMjQzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuS2VybC5CSVRfSEFTSF9MRU5HVEggPSAzODQ7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5LZXJsLkJZVEVfSEFTSF9MRU5HVEggPSBLZXJsLkJJVF9IQVNIX0xFTkdUSCAvIDg7XHJcbmV4cG9ydHMuS2VybCA9IEtlcmw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWEyVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXpjRzl1WjJWekwydGxjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNNRU5CUVhWRE8wRkJRM1pETEhORVFVRnRSRHRCUVVOdVJDeHJSVUZCSzBRN1FVRkhMMFE3T3p0SFFVZEhPMEZCUTBnc1RVRkJZU3hKUVVGSk8wbEJWMkk3TzA5QlJVYzdTVUZEU0R0UlFVTkpMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeFhRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRmRCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZETTBRc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hYUVVGWExFTkJRVU1zU1VGQldUdFJRVU16UWl4UlFVRlJMRWxCUVVrc1JVRkJSVHRaUVVOV0xFdEJRVXNzWVVGQllTeERRVUZETzFsQlEyNUNMRXRCUVVzc2FVSkJRV2xDTEVOQlFVTTdXVUZEZGtJc1MwRkJTeXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMmRDUVVOeVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRoUVVOeVFqdFpRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERoQ1FVRTRRaXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzaEZPMGxCUTB3c1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hQUVVGUExGTkJRVk1zUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NWVUZCVlN4RFFVRkRMRXRCUVdsQ08wbEJRMjVETEVOQlFVTTdTVUZGUkRzN1QwRkZSenRKUVVOSkxFdEJRVXM3VVVGRFVpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhMUVVGblFpeEZRVUZGTEUxQlFXTXNSVUZCUlN4TlFVRmpPMUZCUXpGRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRE9VUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOb1JUdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNN1UwRkRla1E3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMU5CUTNwRU8xRkJRMFFzU1VGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZFVSQlFYVkVMRU5CUVVNc1EwRkJRenRUUVVOc1JqdFJRVU5FTEVsQlFVa3NUVUZCVFN4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGNFSXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zWjBOQlFXZERMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRla1k3VVVGRlJDeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRla0lzU1VGQlNTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUlhwQ0xFZEJRVWM3V1VGRFF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJSVE5GTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTndReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eHRRMEZCWjBJc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhGUVVGRkxGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVTnNSaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXp0WlFVTjZSQ3h0UTBGQlowSXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSWHBFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFsQlJTOUNMRmRCUVZjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlEyaERMRmRCUVZjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzFOQlEyNURMRkZCUVZFc1YwRkJWeXhIUVVGSExFTkJRVU1zUlVGQlJUdEpRVU01UWl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hQUVVGUExFTkJRVU1zUzBGQlowSXNSVUZCUlN4TlFVRmpMRVZCUVVVc1RVRkJZenRSUVVNelJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6bEVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhGRFFVRnhReXhEUVVGRExFTkJRVU03VTBGRGFFVTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU12UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8xTkJRM3BFTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGREwwTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zT0VKQlFUaENMRU5CUVVNc1EwRkJRenRUUVVONlJEdFJRVU5FTEVsQlFVa3NUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEyaERMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhWRVFVRjFSQ3hEUVVGRExFTkJRVU03VTBGRGJFWTdVVUZEUkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzQkNMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEdkRFFVRm5ReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM3BHTzFGQlJVUXNTVUZCU1N4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NWMEZCVnl4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVWNlFpeEhRVUZITzFsQlEwTXNUVUZCVFN4bFFVRmxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0WlFVVTVReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eHRRMEZCWjBJc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8xbEJSVGRHTEUxQlFVMHNVMEZCVXl4SFFVRmpMRWxCUVVrc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTTNSQ3h0UTBGQlowSXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZGTTBVc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJSWEJETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOV0xFOUJRVThzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN1owSkJRM3BDTEV0QlFVc3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTNwRE8xbEJSVVFzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03V1VGRGVrTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU5vUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlEzcERPMWxCUlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1dVRkZja01zVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1UwRkRia01zVVVGQlVTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RlFVRkZPMGxCUXpsQ0xFTkJRVU03TzBGQmJFcEVMR1ZCUVdVN1FVRkRVeXhuUWtGQlZ5eEhRVUZYTEVkQlFVY3NRMEZCUXp0QlFVTnNSQ3hsUVVGbE8wRkJRMU1zYjBKQlFXVXNSMEZCVnl4SFFVRkhMRU5CUVVNN1FVRkRkRVFzWlVGQlpUdEJRVU5UTEhGQ1FVRm5RaXhIUVVGWExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCVG1oR0xHOUNRVzlLUXlKOSIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2Vycm9yX2NvcmVFcnJvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9mYWN0b3JpZXNfZmFjdG9yeUJhc2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19hcnJheUhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX29iamVjdEhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9zZXJ2aWNlc190aW1lU2VydmljZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX2FkZHJlc3NfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV9hZGRyZXNzU2VjdXJpdHlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV9oYXNoX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdGFnX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJhbnNhY3Rpb25fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90cml0c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX3RyeXRlTnVtYmVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJ5dGVzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JpZ19pbnRlZ2VyX187Il0sInNvdXJjZVJvb3QiOiIifQ==