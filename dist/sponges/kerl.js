Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const sha3_1 = require("../digests/sha3");
const cryptoError_1 = require("../error/cryptoError");
const bigIntegerHelper_1 = require("../helpers/bigIntegerHelper");
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
            BIT_HASH_LENGTH: Kerl.BIT_HASH_LENGTH,
            BYTE_HASH_LENGTH: Kerl.BYTE_HASH_LENGTH
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcG9uZ2VzL2tlcmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFDekUsMENBQXVDO0FBQ3ZDLHNEQUFtRDtBQUNuRCxrRUFBK0Q7QUFHL0Q7OztHQUdHO0FBQ0g7SUFXSTs7T0FFRztJQUNIO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsV0FBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBWTtRQUNmLE1BQU0sQ0FBQztZQUNILFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUMxQyxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxVQUFVLENBQUMsS0FBaUI7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLEtBQWdCLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDMUQsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sSUFBSSx5QkFBVyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMs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