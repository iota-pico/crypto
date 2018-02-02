import { Trits } from "@iota-pico/data/dist/data/trits";
import { ITritsHasher } from "@iota-pico/data/dist/interfaces/ITritsHasher";
/**
 * Implementation of ITritsHasher using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 * @interface
 */
export declare class Curl implements ITritsHasher {
    static readonly HASH_LENGTH: number;
    private static readonly NUMBER_OF_ROUNDS;
    private static readonly STATE_LENGTH;
    private static readonly TRUTH_TABLE;
    private readonly _rounds;
    private _state;
    /**
     * Create a new instance of Curl.
     * @param rounds The number of rounds to perform.
     */
    constructor(rounds?: number);
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    initialize(state?: number[]): void;
    /**
     * Reset the hasher.
     */
    reset(): void;
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */
    absorb(trits: Trits, offset: number, length: number): void;
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */
    squeeze(trits: Trits, offset: number, length: number): void;
    /**
     * Transform the hash.
     */
    private transform();
}
