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
     * Get the constant for the spone.
     * @name The name of the contant to get.
     * @returns The constant.
     */
    getConstant(name) {
        switch (name) {
            case "HASH_LENGTH":
            case "BIT_HASH_LENGTH":
            case "BYTE_HASH_LENGTH":
                {
                    return Kerl[name];
                }
            default: throw new cryptoError_1.CryptoError(`Unknown constant requested ${name}`);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcG9uZ2VzL2tlcmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFDekUsMENBQXVDO0FBQ3ZDLHNEQUFtRDtBQUNuRCxrRUFBK0Q7QUFHL0Q7OztHQUdHO0FBQ0g7SUFXSTs7T0FFRztJQUNIO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsV0FBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFdBQVcsQ0FBQyxJQUFZO1FBQzNCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxhQUFhLENBQUM7WUFDbkIsS0FBSyxpQkFBaUIsQ0FBQztZQUN2QixLQUFLLGtCQUFrQjtnQkFDdkI7b0JBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JCO1lBQ0QsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLHlCQUFXLENBQUMsOEJBQThCLElBQUksRUFBRSxDQUFDLENBQUM7U0FDeEU7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxVQUFVLENBQUMsS0FBaUI7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLEtBQWdCLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDMUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5RCxNQUFNLElBQUkseUJBQVcsQ0FBQyxxQ0FB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