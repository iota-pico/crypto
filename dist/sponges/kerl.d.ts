import { ISponge } from "../interfaces/ISponge";
/**
 * Implementation of ISponge using Kerl algorithm.
 * https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
export declare class Kerl implements ISponge {
    /**
     * Create a new instance of Kerl.
     */
    constructor();
    /**
     * Get the constant for the spone.
     * @param name The name of the constant to get.
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
