Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const tritsConverter_1 = require("@iota-pico/data/dist/converters/tritsConverter");
const sha3_1 = require("../digests/sha3");
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
        this._keccak.reset();
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
            const tritState = trits.slice(localOffset, localOffset + Kerl.HASH_LENGTH);
            tritState[Kerl.HASH_LENGTH - 1] = 0;
            const bigInt = tritsConverter_1.TritsConverter.tritsToBigInteger(tritState, 0, tritState.length);
            const byteState = new ArrayBuffer(Kerl.BYTE_HASH_LENGTH);
            tritsConverter_1.TritsConverter.bigIntegerToBytes(bigInt, new Int8Array(byteState), 0);
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
            const byteStateBuffer = this._keccak.digest();
            const byteState = new Int8Array(byteStateBuffer);
            const bigInt = tritsConverter_1.TritsConverter.bytesToBigInteger(byteState, 0, Kerl.BYTE_HASH_LENGTH);
            const tritState = Array(Kerl.HASH_LENGTH);
            tritsConverter_1.TritsConverter.bigIntegerToTrits(bigInt, tritState, 0, Kerl.HASH_LENGTH);
            tritState[Kerl.HASH_LENGTH - 1] = 0;
            let i = 0;
            while (i < Kerl.HASH_LENGTH) {
                trits[localOffset++] = tritState[i++];
            }
            const dv = new DataView(byteStateBuffer);
            for (i = 0; i < byteState.length; i++) {
                dv.setUint8(i, byteState[i] ^ 0xFF);
            }
            this._keccak.update(byteStateBuffer);
            localLength -= Kerl.HASH_LENGTH;
        } while (localLength > 0);
    }
}
Kerl.HASH_LENGTH = 243;
Kerl.BIT_HASH_LENGTH = 384;
Kerl.BYTE_HASH_LENGTH = Kerl.BIT_HASH_LENGTH / 8;
exports.Kerl = Kerl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcG9uZ2VzL2tlcmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9FQUFpRTtBQUNqRSxtRkFBZ0Y7QUFDaEYsMENBQXVDO0FBR3ZDOzs7R0FHRztBQUNIO0lBUUk7O09BRUc7SUFDSDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFJLENBQUMsR0FBRyxFQUFFLFdBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFlBQVk7UUFDZixNQUFNLENBQUM7WUFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3hDLENBQUM7SUFDTixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFVBQVUsQ0FBQyxLQUFnQjtJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsS0FBZSxFQUFFLE1BQWMsRUFBRSxNQUFjO1FBQ3pELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLElBQUkscUJBQVMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFN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