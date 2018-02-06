"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const tritsWordConverter_1 = require("@iota-pico/data/dist/converters/tritsWordConverter");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const CryptoJS = __importStar(require("crypto-js"));
/**
 * Implementation of ITritsHasher using Kerl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/kerl/kerl.js
 * @interface
 */
class Kerl {
    /**
     * Create a new instance of Kerl.
     * @param rounds The number of rounds to perform.
     */
    constructor() {
        this._hasher = CryptoJS.algo.SHA3.create();
        this._hasher.init({
            outputLength: Kerl.BIT_HASH_LENGTH
        });
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
        this._hasher.reset();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */
    absorb(trits, offset, length) {
        if (trits === undefined || trits === null) {
            throw new coreError_1.CoreError("Trits can not be null or undefined");
        }
        if (offset === undefined || offset === null) {
            throw new coreError_1.CoreError("Offset can not be null or undefined");
        }
        if (length === undefined || length === null) {
            throw new coreError_1.CoreError("Length can not be null or undefined");
        }
        if (length && ((length % 243) !== 0)) {
            throw new coreError_1.CoreError("Illegal length provided");
        }
        let localOffset = offset;
        let localLength = length;
        const tritsData = trits.toValue();
        do {
            const limit = localLength < Kerl.HASH_LENGTH ? localLength : Kerl.HASH_LENGTH;
            const tritState = tritsData.slice(localOffset, localOffset + limit);
            localOffset += limit;
            // convert trit state to words
            const wordsToAbsorb = tritsWordConverter_1.TritsWordConverter.tritsToWords(trits_1.Trits.fromValue(tritState));
            // absorb the trit stat as wordarray
            this._hasher.update(CryptoJS.lib.WordArray.create(wordsToAbsorb));
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
        if (trits === undefined || trits === null) {
            throw new coreError_1.CoreError("Trits can not be null or undefined");
        }
        if (offset === undefined || offset === null) {
            throw new coreError_1.CoreError("Offset can not be null or undefined");
        }
        if (length === undefined || length === null) {
            throw new coreError_1.CoreError("Length can not be null or undefined");
        }
        if (length && ((length % 243) !== 0)) {
            throw new coreError_1.CoreError("Illegal length provided");
        }
        let localOffset = offset;
        let localLength = length;
        const tritsData = trits.toValue();
        do {
            // get the hash digest
            const kCopy = this._hasher.clone();
            const final = kCopy.finalize();
            // Convert words to trits and then map it into the internal state
            const tritState = tritsWordConverter_1.TritsWordConverter.wordsToTrits(final.words).toValue();
            let i = 0;
            const limit = localLength < Kerl.HASH_LENGTH ? localLength : Kerl.HASH_LENGTH;
            while (i < limit) {
                tritsData[localOffset++] = tritState[i++];
            }
            this.reset();
            for (i = 0; i < final.words.length; i++) {
                final.words[i] = final.words[i] ^ 0xFFFFFFFF;
            }
            this._hasher.update(final);
            localLength -= Kerl.HASH_LENGTH;
        } while (localLength > 0);
    }
}
Kerl.HASH_LENGTH = 243;
/* @internal */
Kerl.BIT_HASH_LENGTH = 384;
exports.Kerl = Kerl;
