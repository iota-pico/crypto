Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = require("../error/cryptoError");
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
            case "STATE_LENGTH":
                {
                    return Curl[name];
                }
            default: throw new cryptoError_1.CryptoError(`Unknown constant requested ${name}`);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcG9uZ2VzL2N1cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFDekUsc0RBQW1EO0FBR25EOzs7R0FHRztBQUNIO0lBYUk7OztPQUdHO0lBQ0gsWUFBWSxTQUFpQixJQUFJLENBQUMsZ0JBQWdCO1FBQzlDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksV0FBVyxDQUFDLElBQVk7UUFDM0IsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUMvQjtZQUNELEtBQUssYUFBYSxDQUFDO1lBQ25CLEtBQUssY0FBYztnQkFDbkI7b0JBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JCO1lBQ0QsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLHlCQUFXLENBQUMsOEJBQThCLElBQUksRUFBRSxDQUFDLENBQUM7U0FDeEU7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksVUFBVSxDQUFDLEtBQWlCO1FBQy9CLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNSLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsS0FBZ0IsRUFBRSxNQUFjLEVB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