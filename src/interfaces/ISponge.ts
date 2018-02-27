/**
 * Represents an interface to hash trits.
 * @interface
 */
export interface ISponge {
    /**
     * Get the constant for the hasher.
     * @returns The constants.
     */
    getConstants(): { [name: string]: number};

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
