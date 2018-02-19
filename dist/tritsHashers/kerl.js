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
const CryptoJS = __importStar(require("crypto-js"));
/**
 * Implementation of ITritsHasher using Kerl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/kerl/kerl.js
 * @interface
 */
class Kerl {
    /**
     * Create a new instance of Kerl.
     */
    constructor() {
        this._hasher = CryptoJS.algo.SHA3.create();
        this._hasher.init({
            outputLength: Kerl.BIT_HASH_LENGTH
        });
    }
    /**
     * Get the constant for the hasher.
     * @returns The constants.
     */
    getConstants() {
        return {
            HASH_LENGTH: Kerl.HASH_LENGTH,
            BIT_HASH_LENGTH: Kerl.BIT_HASH_LENGTH
        };
    }
    /**
     * Get the state.
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
            throw new coreError_1.CoreError("Illegal length provided", { length });
        }
        let localOffset = offset;
        let localLength = length;
        do {
            const limit = localLength < Kerl.HASH_LENGTH ? localLength : Kerl.HASH_LENGTH;
            const tritState = trits.slice(localOffset, localOffset + limit);
            localOffset += limit;
            // convert trit state to words
            const wordsToAbsorb = tritsWordConverter_1.TritsWordConverter.tritsToWords(tritState);
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
        do {
            // get the hash digest
            const kCopy = this._hasher.clone();
            const final = kCopy.finalize();
            // Convert words to trits and then map it into the internal state
            const tritState = tritsWordConverter_1.TritsWordConverter.wordsToTrits(final.words);
            let i = 0;
            const limit = localLength < Kerl.HASH_LENGTH ? localLength : Kerl.HASH_LENGTH;
            while (i < limit) {
                trits[localOffset++] = tritState[i++];
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
Kerl.BIT_HASH_LENGTH = 384;
exports.Kerl = Kerl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cml0c0hhc2hlcnMva2VybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG9FQUFpRTtBQUNqRSwyRkFBd0Y7QUFDeEYsb0RBQXNDO0FBR3RDOzs7O0dBSUc7QUFDSDtJQU9JOztPQUVHO0lBQ0g7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2QsWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3JDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7O09BR0c7SUFDSSxZQUFZO1FBQ2YsTUFBTSxDQUFDO1lBQ0gsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUN4QyxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxVQUFVLENBQUMsS0FBZ0I7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLEtBQWUsRUFBRSxNQUFjLEVBQUUsTUFBYztRQUN6RCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7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