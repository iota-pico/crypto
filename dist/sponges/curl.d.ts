import { ISponge } from "../interfaces/ISponge";
/**
 * Implementation of ISponge using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 */
export declare class Curl implements ISponge {
    static readonly HASH_LENGTH: number;
    static readonly NUMBER_OF_ROUNDS: number;
    static readonly STATE_LENGTH: number;
    /**
     * Create a new instance of Curl.
     * @param rounds The number of rounds to use.
     */
    constructor(rounds?: number);
    /**
     * Get the constant for the spone.
     * @name The name of the contant to get.
     * @returns The constant.
     */
    getConstant(name: string): number;
    /**
     * Get the state.
     * @returns The state.
     */
    getState(): Int8Array;
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    initialize(state?: Int8Array): void;
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
    absorb(trits: Int8Array, offset: number, length: number): void;
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */
    squeeze(trits: Int8Array, offset: number, length: number): void;
}
