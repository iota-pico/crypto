Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = require("../error/cryptoError");
/**
 * Implementation of ISponge using Curl algorithm.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcG9uZ2VzL2N1cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFDekUsc0RBQW1EO0FBR25EOzs7O0dBSUc7QUFDSDtJQWFJOzs7T0FHRztJQUNILFlBQVksU0FBaUIsSUFBSSxDQUFDLGdCQUFnQjtRQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBWTtRQUNmLE1BQU0sQ0FBQztZQUNILFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDekMsQ0FBQztJQUNOLENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFVBQVUsQ0FBQyxLQUFpQjtRQUMvQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUs7UUFDUixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLEtBQWdCLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDMUQsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksS0FBSyxD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