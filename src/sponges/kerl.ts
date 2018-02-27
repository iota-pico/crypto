import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { Sha3 } from "../digests/sha3";
import { CryptoError } from "../error/cryptoError";
import { BigIntegerHelper } from "../helpers/bigIntegerHelper";
import { ISponge } from "../interfaces/ISponge";

/**
 * Implementation of ISponge using Kerl algorithm.
 * https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
export class Kerl implements ISponge {
    /* @internal */
    private static readonly HASH_LENGTH: number = 243;
    /* @internal */
    private static readonly BIT_HASH_LENGTH: number = 384;
    /* @internal */
    private static readonly BYTE_HASH_LENGTH: number = Kerl.BIT_HASH_LENGTH / 8;

    /* @internal */
    private readonly _keccak: Sha3;

    /**
     * Create a new instance of Kerl.
     */
    constructor() {
        this._keccak = new Sha3(384, Sha3.KECCAK_PADDING, 384);
    }

    /**
     * Get the constant for the hasher.
     * @returns The constants.
     */
    public getConstants(): { [name: string]: number } {
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
    public getState(): Int8Array {
        return undefined;
    }

    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    public initialize(state?: Int8Array): void {
    }

    /**
     * Reset the hasher.
     */
    public reset(): void {
        this._keccak.reset();
    }

    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */
    public absorb(trits: Int8Array, offset: number, length: number): void {
        if (!ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
            throw new CryptoError("Trits must be a non empty Int8Array");
        }
        if (!NumberHelper.isInteger(offset) || offset < 0) {
            throw new CryptoError("Offset must be a number >= 0");
        }
        if (!NumberHelper.isInteger(length) || length < 0) {
            throw new CryptoError("Length must be a number >= 0");
        }
        if (length + offset > trits.length) {
            throw new CryptoError("The offset + length is beyond the length of the trits");
        }
        if (length % 243 !== 0) {
            throw new CryptoError(`Length must be a multiple of ${Kerl.HASH_LENGTH}`, { length });
        }

        let localOffset = offset;
        let localLength = length;

        do {
            const tritState = trits.slice(localOffset, localOffset + Kerl.HASH_LENGTH);

            tritState[Kerl.HASH_LENGTH - 1] = 0;
            const bigInt = BigIntegerHelper.tritsToBigInteger(tritState, 0, tritState.length);
            const byteState = new ArrayBuffer(Kerl.BYTE_HASH_LENGTH);
            BigIntegerHelper.bigIntegerToBytes(bigInt, byteState, 0);

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
    public squeeze(trits: Int8Array, offset: number, length: number): void {
        if (!ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
            throw new CryptoError("Trits must be a non empty Int8Array");
        }
        if (!NumberHelper.isInteger(offset) || offset < 0) {
            throw new CryptoError("Offset must be a number >= 0");
        }
        if (!NumberHelper.isInteger(length) || length < 0) {
            throw new CryptoError("Length must be a number >= 0");
        }
        if (length + offset > trits.length) {
            throw new CryptoError("The offset + length is beyond the length of the trits");
        }
        if (length % 243 !== 0) {
            throw new CryptoError(`Length must be a multiple of ${Kerl.HASH_LENGTH}`, { length });
        }

        let localOffset = offset;
        let localLength = length;

        do {
            const byteStateBuffer = this._keccak.digest();

            const bigInt = BigIntegerHelper.bytesToBigInteger(byteStateBuffer, 0, Kerl.BYTE_HASH_LENGTH);

            const tritState: Int8Array = new Int8Array(Kerl.HASH_LENGTH);
            BigIntegerHelper.bigIntegerToTrits(bigInt, tritState, 0, Kerl.HASH_LENGTH);

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
