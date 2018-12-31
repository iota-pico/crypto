import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { CryptoError } from "../error/cryptoError";
import { ISponge } from "../interfaces/ISponge";

/**
 * Implementation of ISponge using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 */
export class Curl implements ISponge {
    public static readonly HASH_LENGTH: number = 243;
    public static readonly NUMBER_OF_ROUNDS: number = 81;
    public static readonly STATE_LENGTH: number = Curl.HASH_LENGTH * 3;

    /* @internal */
    private static readonly TRUTH_TABLE: Int8Array = new Int8Array([1, 0, -1, 2, 1, -1, 0, 2, -1, 1, 0]);

    /* @internal */
    private _state: Int8Array;
    /* @internal */
    private readonly _numberOfRounds: number;

    /**
     * Create a new instance of Curl.
     * @param rounds The number of rounds to use.
     */
    constructor(rounds: number = Curl.NUMBER_OF_ROUNDS) {
        this._numberOfRounds = rounds;
    }

    /**
     * Get the constant for the spone.
     * @param name The name of the constant to get.
     * @returns The constant.
     */
    public getConstant(name: string): number {
        switch (name) {
            case "NUMBER_OF_ROUNDS": {
                return this._numberOfRounds;
            }
            case "HASH_LENGTH":
            case "STATE_LENGTH": {
                return Curl[name];
            }
            default: throw new CryptoError(`Unknown constant requested ${name}`);
        }
    }

    /**
     * Get the state.
     * @returns The state.
     */
    public getState(): Int8Array {
        return this._state;
    }

    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    public initialize(state?: Int8Array): void {
        if (state) {
            this._state = state;
        } else {
            this._state = new Int8Array(Curl.STATE_LENGTH);
        }
    }

    /**
     * Reset the hasher.
     */
    public reset(): void {
        this.initialize();
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
    private transform(): void {
        let stateCopy: Int8Array;
        let index = 0;

        for (let round = 0; round < this._numberOfRounds; round++) {
            stateCopy = new Int8Array(this._state.slice());

            for (let i = 0; i < Curl.STATE_LENGTH; i++) {

                this._state[i] = Curl.TRUTH_TABLE[stateCopy[index] + (stateCopy[index += (index < 365 ? 364 : -365)] << 2) + 5];
            }
        }
    }
}
