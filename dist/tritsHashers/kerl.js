Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const tritsConverter_1 = require("@iota-pico/data/dist/converters/tritsConverter");
const sha3_1 = require("../digests/sha3");
/**
 * Implementation of ITritsHasher using Kerl algorithm.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cml0c0hhc2hlcnMva2VybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQWlFO0FBQ2pFLG1GQUFnRjtBQUNoRiwwQ0FBdUM7QUFHdkM7OztHQUdHO0FBQ0g7SUFRSTs7T0FFRztJQUNIO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsV0FBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBWTtRQUNmLE1BQU0sQ0FBQztZQUNILFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDeEMsQ0FBQztJQUNOLENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRO1FBQ1gsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksVUFBVSxDQUFDLEtBQWdCO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUs7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxLQUFlLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDekQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLElBQUkscUJBQVMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFD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