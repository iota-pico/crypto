"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
/**
 * Implementation of ITritsHasher using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 * @interface
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
     * Get the constant for the hasher.
     * @returns The constants.
     */
    getConstants() {
        return {
            HASH_LENGTH: Curl.HASH_LENGTH,
            STATE_LENGTH: Curl.STATE_LENGTH,
            NUMBER_OF_ROUNDS: this._numberOfRounds
        };
    }
    /**
     * Get the state.
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
            this._state = [];
            for (let i = 0; i < Curl.STATE_LENGTH; i++) {
                this._state[i] = 0;
            }
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
        if (trits === undefined || trits === null) {
            throw new coreError_1.CoreError("Trits can not be null or undefined");
        }
        if (offset === undefined || offset === null) {
            throw new coreError_1.CoreError("Offset can not be null or undefined");
        }
        if (length === undefined || length === null) {
            throw new coreError_1.CoreError("Length can not be null or undefined");
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
        if (trits === undefined || trits === null) {
            throw new coreError_1.CoreError("Trits can not be null or undefined");
        }
        if (offset === undefined || offset === null) {
            throw new coreError_1.CoreError("Offset can not be null or undefined");
        }
        if (length === undefined || length === null) {
            throw new coreError_1.CoreError("Length can not be null or undefined");
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
        let stateCopy = [];
        let index = 0;
        for (let round = 0; round < this._numberOfRounds; round++) {
            stateCopy = this._state.slice();
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
Curl.TRUTH_TABLE = [1, 0, -1, 2, 1, -1, 0, 2, -1, 1, 0];
exports.Curl = Curl;
