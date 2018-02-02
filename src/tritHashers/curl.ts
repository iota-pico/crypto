import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { ITritsHasher } from "@iota-pico/data/dist/interfaces/ITritsHasher";

/**
 * Implementation of ITritsHasher using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 * @interface
 */
export class Curl implements ITritsHasher {
    public static readonly HASH_LENGTH: number = 243;
    private static readonly NUMBER_OF_ROUNDS: number = 81;
    private static readonly STATE_LENGTH: number = Curl.HASH_LENGTH * 3;

    private static readonly TRUTH_TABLE: number[] = [1, 0, -1, 2, 1, -1, 0, 2, -1, 1, 0];

    private readonly _rounds: number;
    private _state: number[];

    /**
     * Create a new instance of Curl.
     * @param rounds The number of rounds to perform.
     */
    constructor(rounds: number = Curl.NUMBER_OF_ROUNDS) {
        this._rounds = rounds;
    }

    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    public initialize(state?: number[]): void {
        if (state) {
            this._state = state;
        } else {
            this._state = [];

            for (let i = 0; i < Curl.STATE_LENGTH; i++) {
                this._state[i] = 0;
            }
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
    public absorb(trits: Trits, offset: number, length: number): void {
        if (trits === undefined || trits === null) {
            throw new CoreError("Trits can not be null or undefined");
        }
        if (offset === undefined || offset === null) {
            throw new CoreError("Offset can not be null or undefined");
        }
        if (length === undefined || length === null) {
            throw new CoreError("Length can not be null or undefined");
        }

        let localOffset = offset;
        let localLength = length;
        const tritsData = trits.toValue();

        do {
            let i = 0;
            const limit = localLength < Curl.HASH_LENGTH ? localLength : Curl.HASH_LENGTH;

            while (i < limit) {
                this._state[i++] = tritsData[localOffset++];
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
    public squeeze(trits: Trits, offset: number, length: number): void {
        if (trits === undefined || trits === null) {
            throw new CoreError("Trits can not be null or undefined");
        }
        if (offset === undefined || offset === null) {
            throw new CoreError("Offset can not be null or undefined");
        }
        if (length === undefined || length === null) {
            throw new CoreError("Length can not be null or undefined");
        }
        let localOffset = offset;
        let localLength = length;
        const tritsData = trits.toValue();

        do {

            let i = 0;
            const limit = localLength < Curl.HASH_LENGTH ? length : Curl.HASH_LENGTH;

            while (i < limit) {
                tritsData[localOffset++] = this._state[i++];
            }

            this.transform();

            localLength -= Curl.HASH_LENGTH;
        } while (localLength > 0);
    }

    /**
     * Transform the hash.
     */
    private transform(): void {
        let stateCopy = [];
        let index = 0;

        for (let round = 0; round < this._rounds; round++) {
            stateCopy = this._state.slice();

            for (let i = 0; i < Curl.STATE_LENGTH; i++) {

                this._state[i] = Curl.TRUTH_TABLE[stateCopy[index] + (stateCopy[index += (index < 365 ? 364 : -365)] << 2) + 5];
            }
        }
    }
}
