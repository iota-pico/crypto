import { ISponge } from "../interfaces/ISponge";
/**
 * Implementation of ISponge using Kerl algorithm.
 * https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
export declare class Kerl implements ISponge {
    static readonly HASH_LENGTH: number;
    static readonly BIT_HASH_LENGTH: number;
    static readonly BYTE_HASH_LENGTH: number;
    /**
     * Create a new instance of Kerl.
     */
    constructor();
    /**
     * Get the constant for the hasher.
     * @returns The constants.
     */
    getConstants(): {
        [name: string]: number;
    };
    /**
     * Get the state.
     * @returns The state.
     */
    getState(): number[];
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
    absorb(trits: number[], offset: number, length: number): void;
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */
    squeeze(trits: number[], offset: number, length: number): void;
}
