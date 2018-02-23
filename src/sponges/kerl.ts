import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { TritsConverter } from "@iota-pico/data/dist/converters/tritsConverter";
import { Sha3 } from "../digests/sha3";
import { ISponge } from "../interfaces/ISponge";

/**
 * Implementation of ISponge using Kerl algorithm.
 * https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
export class Kerl implements ISponge {
    public static readonly HASH_LENGTH: number = 243;
    public static readonly BIT_HASH_LENGTH: number = 384;
    public static readonly BYTE_HASH_LENGTH: number = Kerl.BIT_HASH_LENGTH / 8;

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
            BIT_HASH_LENGTH: Kerl.BIT_HASH_LENGTH
        };
    }

    /**
     * Get the state.
     * @returns The state.
     */
    public getState(): number[] {
        return undefined;
    }

    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    public initialize(state?: number[]): void {
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
    public absorb(trits: number[], offset: number, length: number): void {
        if (trits === undefined || trits === null) {
            throw new CoreError("Trits can not be null or undefined");
        }
        if (offset === undefined || offset === null) {
            throw new CoreError("Offset can not be null or undefined");
        }
        if (length === undefined || length === null) {
            throw new CoreError("Length can not be null or undefined");
        }
        if (length && ((length % 243) !== 0)) {
            throw new CoreError("Illegal length provided", { length });
        }

        let localOffset = offset;
        let localLength = length;

        do {
            const tritState = trits.slice(localOffset, localOffset + Kerl.HASH_LENGTH);

            tritState[Kerl.HASH_LENGTH - 1] = 0;
            const bigInt = TritsConverter.tritsToBigInteger(tritState, 0, tritState.length);
            const byteState = new ArrayBuffer(Kerl.BYTE_HASH_LENGTH);
            TritsConverter.bigIntegerToBytes(bigInt, new Int8Array(byteState), 0);

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
    public squeeze(trits: number[], offset: number, length: number): void {
        if (trits === undefined || trits === null) {
            throw new CoreError("Trits can not be null or undefined");
        }
        if (offset === undefined || offset === null) {
            throw new CoreError("Offset can not be null or undefined");
        }
        if (length === undefined || length === null) {
            throw new CoreError("Length can not be null or undefined");
        }
        if (length && ((length % 243) !== 0)) {
            throw new CoreError("Illegal length provided");
        }

        let localOffset = offset;
        let localLength = length;

        do {
            const byteStateBuffer = this._keccak.digest();
            const byteState = new Int8Array(byteStateBuffer);

            const bigInt = TritsConverter.bytesToBigInteger(byteState, 0, Kerl.BYTE_HASH_LENGTH);
            const tritState = Array(Kerl.HASH_LENGTH);

            TritsConverter.bigIntegerToTrits(bigInt, tritState, 0, Kerl.HASH_LENGTH);

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
