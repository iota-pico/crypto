Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcG9uZ2VzL2N1cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9FQUFpRTtBQUdqRTs7OztHQUlHO0FBQ0g7SUFhSTs7O09BR0c7SUFDSCxZQUFZLFNBQWlCLElBQUksQ0FBQyxnQkFBZ0I7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFlBQVk7UUFDZixNQUFNLENBQUM7WUFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGdCQUFnQixFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3pDLENBQUM7SUFDTixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxVQUFVLENBQUMsS0FBZ0I7UUFDOUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWpCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUs7UUFDUixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLEtB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